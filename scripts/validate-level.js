#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const schema = require("../reference/schema.json");

const C_PREFIX = new Set(schema.customImages.cPrefixTypes);
const S_PREFIX = new Set(schema.customImages.sPrefixTypes);
const actionsById = new Map(schema.triggers.map((action) => [String(action.id), action]));
const fieldsByClass = new Map(
  Object.entries(schema.classes).map(([name, spec]) => [name, new Map(spec.fields.map((field) => [field.key, field.type]))])
);

const LOOSE = new Set(["string", "nochange"]);
// Shipped campaign saves still use these ids. They are not in the current 532-action table.
const LEGACY_ACTIONS = new Map([
  ["7", "new maps use 50 NextMap"],
  ["47", "no current replacement in the table"],
]);

function isNumericType(type) {
  return type === "int" || type === "value" || type.startsWith("value+") || type.startsWith("value>") || type.startsWith("value>=");
}

function isNumber(value) {
  return /^-?\d+(?:\.\d+)?$/.test(value);
}

function refClasses(type) {
  const ref = schema.refs[type];
  return ref && ref.listof ? ref.listof : null;
}

function knownType(type) {
  return LOOSE.has(type) || isNumericType(type) || schema.enums[type] || refClasses(type);
}

function assertSchemaTypes() {
  const unknown = new Set();
  for (const spec of Object.values(schema.classes)) {
    for (const field of spec.fields) {
      if (!knownType(field.type)) unknown.add(field.type);
    }
  }
  for (const action of schema.triggers) {
    if (!knownType(action.paramA)) unknown.add("A:" + action.paramA);
    if (!knownType(action.paramB)) unknown.add("B:" + action.paramB);
  }
  for (const mark of Object.values(schema.engineMarks)) {
    if (!knownType(mark.parameterType)) unknown.add("mark:" + mark.parameterType);
  }
  if (unknown.size) {
    console.error("schema has types this script does not check: " + [...unknown].join(", "));
    process.exit(2);
  }
}

function numberOk(type, value) {
  if (!isNumber(value)) return false;
  const n = Number(value);
  if (type.includes(">=0") && n < 0) return false;
  if (type.includes(">0") && n <= 0) return false;
  if ((type === "int" || type.includes("round1")) && !Number.isInteger(n)) return false;
  return true;
}

function enumAccepts(type, value) {
  const table = schema.enums[type];
  if (table && Object.prototype.hasOwnProperty.call(table, value)) return true;
  if (type === "bool" && (value === "1" || value === "0")) return true;
  const meta = schema.enumMeta[type];
  if (!meta) return false;
  if (meta["[order]"] && Object.prototype.hasOwnProperty.call(meta["[order]"], value)) return true;
  if (meta["[color]"] && /^#?[0-9a-fA-F]{3}(?:[0-9a-fA-F]{3})?$/.test(value)) return true;
  if (meta["[val]"] && isNumber(value)) {
    if (type === "maxcalls") return Number(value) >= 0;
    return true;
  }
  if (meta["-[val]"] && isNumber(value) && Number(value) < 0) return true;
  return false;
}

function allowsNone(type) {
  if (type.includes("none") || type.includes("+any")) return true;
  const table = schema.enums[type];
  return !!(table && Object.prototype.hasOwnProperty.call(table, "-1"));
}

function decode(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function parseTags(xml) {
  const tags = [];
  let i = 0;
  let line = 1;
  const advance = (to) => {
    while (i < to) {
      if (xml[i] === "\n") line++;
      i++;
    }
  };
  while (i < xml.length) {
    if (xml.startsWith("<!--", i)) {
      const end = xml.indexOf("-->", i);
      advance(end < 0 ? xml.length : end + 3);
      continue;
    }
    if (xml[i] !== "<") {
      advance(i + 1);
      continue;
    }
    const startLine = line;
    let j = i + 1;
    while (j < xml.length && /[A-Za-z0-9_:-]/.test(xml[j])) j++;
    const name = xml.slice(i + 1, j);
    const attrs = {};
    while (j < xml.length) {
      while (j < xml.length && /\s/.test(xml[j])) j++;
      if (xml.startsWith("/>", j)) {
        j += 2;
        break;
      }
      if (xml[j] === ">") {
        j += 1;
        break;
      }
      const keyStart = j;
      while (j < xml.length && /[^\s=>/]/.test(xml[j])) j++;
      const key = xml.slice(keyStart, j);
      while (j < xml.length && /\s/.test(xml[j])) j++;
      if (xml[j] !== "=") continue;
      j++;
      while (j < xml.length && /\s/.test(xml[j])) j++;
      const quote = xml[j];
      if (quote !== '"' && quote !== "'") continue;
      j++;
      const valueStart = j;
      while (j < xml.length && xml[j] !== quote) j++;
      attrs[key] = decode(xml.slice(valueStart, j));
      if (xml[j] === quote) j++;
    }
    advance(j);
    if (name) tags.push({ name, attrs, line: startLine });
  }
  return tags;
}

function objectsOf(tags, classes) {
  const wanted = new Set(classes);
  return tags.filter((tag) => wanted.has(tag.name));
}

function validate(filePath) {
  const xml = fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "");
  const tags = parseTags(xml);
  const issues = [];
  const add = (level, code, line, message) => issues.push({ level, code, line, message });
  const where = (tag) => (tag.attrs.uid ? `<${tag.name} uid="${tag.attrs.uid}">` : `<${tag.name}>`);

  const imageIds = new Set();
  for (const tag of tags) {
    if (tag.name === "image" && tag.attrs.id != null) imageIds.add(String(tag.attrs.id));
  }
  const neededImages = new Map();

  function noteImage(value, tag) {
    const id = value.slice(1);
    if (!neededImages.has(id)) neededImages.set(id, tag.line);
  }

  function checkTyped(type, value, tag, label) {
    if (LOOSE.has(type)) return;
    if (isNumericType(type)) {
      if (!numberOk(type, value)) {
        add("error", "bad-param", tag.line, `参数类型不对 bad value "${value}" for ${label} (${type}) on ${where(tag)}`);
      }
      return;
    }
    if (/^s\d+$/.test(value) && !S_PREFIX.has(type)) {
      add("error", "s-prefix", tag.line, `s数字用在了装饰以外 s-number "${value}" on ${label} of ${where(tag)}`);
      return;
    }
    if (enumAccepts(type, value)) return;
    if (C_PREFIX.has(type) && /^c\d+$/.test(value)) {
      noteImage(value, tag);
      return;
    }
    if (S_PREFIX.has(type) && /^s\d+$/.test(value)) return;
    const classes = refClasses(type);
    if (classes) {
      if (value === "-1" && allowsNone(type)) return;
      if (value.startsWith("#")) {
        const hits = tags.filter((item) => item.attrs.uid === value);
        if (hits.length === 0) {
          add("error", "missing-uid", tag.line, `#uid 不存在 "${value}" for ${label} on ${where(tag)}`);
        } else if (!hits.some((item) => classes.includes(item.name))) {
          add("error", "wrong-class", tag.line, `#uid 指向了错误的类 "${value}" for ${label} (${classes.join("/")}) on ${where(tag)}`);
        }
        return;
      }
      if (/^\d+$/.test(value)) {
        const list = objectsOf(tags, classes);
        const index = Number(value);
        if (index >= list.length) {
          add("error", "index-range", tag.line, `序号超出数量 index ${value} for ${label} (${type}, count ${list.length}) on ${where(tag)}`);
        } else {
          add("warn", "numeric-index", tag.line, `数字序号 numeric index ${value} for ${label} (${type}) on ${where(tag)}`);
        }
        return;
      }
    }
    if (value === "-1" && allowsNone(type)) return;
    add("error", "bad-param", tag.line, `参数类型不对 bad value "${value}" for ${label} (${type}) on ${where(tag)}`);
  }

  let lastOrder = -1;
  let orderWarned = false;
  const uidLines = new Map();

  for (const tag of tags) {
    const fields = fieldsByClass.get(tag.name);
    if (!fields) {
      add("error", "unknown-class", tag.line, `未知类 unknown class <${tag.name}>`);
      continue;
    }
    const order = schema.saveOrder.indexOf(tag.name);
    if (!orderWarned && order >= 0 && order < lastOrder) {
      orderWarned = true;
      add("warn", "class-order", tag.line, `类顺序打乱 <${tag.name}> is out of save order`);
    } else if (order > lastOrder) {
      lastOrder = order;
    }

    if (tag.attrs.uid) {
      if (!uidLines.has(tag.attrs.uid)) uidLines.set(tag.attrs.uid, []);
      uidLines.get(tag.attrs.uid).push(tag.line);
    }

    if (tag.name === "region" && tag.attrs.use_target === "-1") {
      add("warn", "region-target", tag.line, `区域没有触发器 use_target="-1" on ${where(tag)}`);
    }

    const slots = new Map();
    for (const [key, value] of Object.entries(tag.attrs)) {
      if (schema.legacyFields[key]) {
        add("warn", "legacy", tag.line, `旧字段 legacy field "${key}" on ${where(tag)}`);
        continue;
      }
      const actionField = /^actions_(\d+)_(type|targetA|targetB)$/.exec(key);
      if (tag.name === "trigger" && actionField) {
        const n = Number(actionField[1]);
        if (n < 1 || n > schema.triggerActionsLimit) {
          add("error", "bad-param", tag.line, `动作槽超出 1..${schema.triggerActionsLimit} ${key} on ${where(tag)}`);
          continue;
        }
        if (!slots.has(n)) slots.set(n, { line: tag.line });
        slots.get(n)[actionField[2]] = value;
        continue;
      }
      if (tag.name === "inf" && (key === "mark" || key === "forteam")) continue;
      if (!fields.has(key)) {
        add("error", "unknown-field", tag.line, `未知字段 unknown field "${key}" on ${where(tag)}`);
        continue;
      }
      checkTyped(fields.get(key), value, tag, key);
    }

    if (tag.name === "inf") {
      const mark = tag.attrs.mark;
      const spec = mark == null ? null : schema.engineMarks[mark];
      if (!spec) {
        add("error", "engine-mark", tag.line, `未知引擎标记 unknown engine mark "${mark == null ? "" : mark}" on ${where(tag)}`);
      } else if (tag.attrs.forteam != null) {
        checkTyped(spec.parameterType, tag.attrs.forteam, tag, `forteam of ${mark}`);
      } else if (spec.parameterType !== "nochange") {
        add("error", "engine-mark", tag.line, `forteam 类型不符 missing forteam for "${mark}" (${spec.parameterType})`);
      }
    }

    for (const [n, slot] of slots) {
      if (slot.type == null) {
        add("error", "unknown-action", tag.line, `动作 ID 不存在 missing actions_${n}_type on ${where(tag)}`);
        continue;
      }
      if (slot.type === "-1") {
        add("warn", "empty-slot", tag.line, `空动作槽 actions_${n}_type="-1" on ${where(tag)}`);
        continue;
      }
      const action = actionsById.get(slot.type);
      if (!action) {
        const legacy = LEGACY_ACTIONS.get(slot.type);
        if (legacy) {
          add("warn", "legacy-action", tag.line, `旧动作 legacy action ${slot.type} (${legacy}) on ${where(tag)}`);
        } else {
          add("error", "unknown-action", tag.line, `动作 ID 不存在 unknown action ${slot.type} on ${where(tag)}`);
        }
        continue;
      }
      if (slot.targetA == null) {
        if (action.paramA !== "nochange") {
          add("error", "bad-param", tag.line, `参数类型不对 missing actions_${n}_targetA (${action.paramA}) on ${where(tag)}`);
        }
      } else {
        checkTyped(action.paramA, slot.targetA, tag, `actions_${n}_targetA`);
      }
      if (slot.targetB == null) {
        if (action.paramB !== "nochange") {
          add("error", "bad-param", tag.line, `参数类型不对 missing actions_${n}_targetB (${action.paramB}) on ${where(tag)}`);
        }
      } else {
        checkTyped(action.paramB, slot.targetB, tag, `actions_${n}_targetB`);
      }
    }
  }

  for (const [id, line] of neededImages) {
    if (!imageIds.has(id)) {
      add("error", "missing-image", line, `缺少 image c${id} has no <image id="${id}">`);
    }
  }

  for (const [uid, lines] of uidLines) {
    if (lines.length > 1) {
      const shown = lines.slice(0, 8).join(", ");
      const more = lines.length > 8 ? `, +${lines.length - 8}` : "";
      add("warn", "duplicate-uid", lines[0], `重复 uid duplicate uid "${uid}" at lines ${shown}${more}`);
    }
  }

  const rank = [
    "unknown-class",
    "unknown-field",
    "unknown-action",
    "bad-param",
    "missing-uid",
    "wrong-class",
    "index-range",
    "missing-image",
    "s-prefix",
    "engine-mark",
    "duplicate-uid",
    "numeric-index",
    "legacy",
    "legacy-action",
    "empty-slot",
    "class-order",
    "region-target",
  ];
  issues.sort((a, b) => rank.indexOf(a.code) - rank.indexOf(b.code) || a.line - b.line);
  return issues;
}

function main() {
  assertSchemaTypes();
  const filePath = process.argv[2];
  if (!filePath) {
    console.error("usage: node scripts/validate-level.js <map.xml>");
    process.exit(2);
  }
  const resolved = path.resolve(filePath);
  if (!fs.existsSync(resolved)) {
    console.error("file not found: " + resolved);
    process.exit(2);
  }
  const issues = validate(resolved);
  const errors = issues.filter((issue) => issue.level === "error").length;
  const warns = issues.length - errors;
  for (const issue of issues) {
    console.log(`${issue.level}: line ${issue.line}: ${issue.message}`);
  }
  if (issues.length === 0) console.log("ok");
  else console.log(`${errors} error, ${warns} warn`);
  process.exit(errors > 0 ? 1 : 0);
}

main();
