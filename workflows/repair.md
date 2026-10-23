# 修复和优化 / Repair and tune

先查再改。用用户的语言说明。

Inspect first, then edit. Explain in the user's language.

## 步骤 / Steps

1. 运行 `node scripts/validate-level.js 地图.xml`。不要阅读 `reference/schema.json`，也不要通读 532 个动作。只打开脚本点名的类、字段、动作 ID 或枚举。`engine_mark` 和 `forteam` 看 [../reference/engine.md](../reference/engine.md)，不要只看 `enums/engine-mark.md`。Run `node scripts/validate-level.js map.xml`. Do not read `reference/schema.json`, and do not read all 532 actions. Open only the classes, fields, action IDs, or enums the script names. For `engine_mark` and `forteam`, open engine.md, not `enums/engine-mark.md`.
2. 把问题按这个顺序告诉用户，然后再改。`error` 必须处理。`warn` 里的旧写法（重复 `uid`、范围内的数字序号、`at` / `addx` / `addy`、旧动作 `7` 和 `47`）先说明；用户没要求现代化就不要改。Report problems in this order, then edit. Every `error` must be handled. For old-style `warn`s (duplicate `uid`, an in-range numeric index, `at` / `addx` / `addy`, legacy actions `7` and `47`), say so first. Do not modernize them unless the user asked.
   - 未知类、未知字段 / unknown class or field
   - 动作 ID 不存在，或参数 A/B 的类型对不上 / unknown action ID, or parameter A/B has the wrong type
   - `#uid` 指向不存在的对象，或指向了错误的类；旧图里的数字是序号，只有超出该类数量才算断掉 / a `#uid` is missing or points at the wrong class. A plain number in an old map is an index. It is broken only when it is past the count of that class
   - `c数字` 没有对应的 `<image id="数字">` / `c<number>` has no `<image id="number">`
   - `s数字` 用在了装饰以外的地方 / `s<number>` is used somewhere other than a decor model
   - 重复的 `uid` / duplicate `uid`
   - 旧字段 `at`、`addx`、`addy` / legacy fields `at`, `addx`, `addy`
   - 旧动作 `7`（新图用 `50`）和 `47` / legacy actions `7` (new maps use `50`) and `47`
   - 未知引擎标记，或 `forteam` 和 [../reference/engine.md](../reference/engine.md) 的类型不符 / unknown engine mark, or `forteam` does not match engine.md
3. 再看这几件事，有才提。Also mention these when they are actually present:
   - 角色的 `y` 落在墙里面，或头顶没有空间 / an actor's `y` is inside a wall, or there is no headroom
   - 区域的 `use_target` 是 `-1`，等于没有触发器 / a region's `use_target` is `-1`, so it calls nothing
   - 触发器 `enabled="false"` 且没有任何动作把它打开 / a trigger is disabled and nothing enables it
   - 空动作槽 `actions_N_type="-1"` 还留在文件里 / an empty action slot is still in the file
   - 引擎标记重复 / duplicate engine marks
4. 再跑一次 `node scripts/validate-level.js 地图.xml`。还有 `error` 就不要交差。用户没要求现代化时，旧写法的 `warn` 可以留下。Run `node scripts/validate-level.js map.xml` again. Do not finish while an `error` remains. Old-style `warn`s may stay when the user did not ask to modernize.
5. 优化只做用户要的那一类：删空槽、补 uid、把旧字段换成现在的字段、把人从墙里移出来。不要重写整张图的打法。Only do the cleanup the user asked for: drop empty slots, add uids, replace legacy fields, or move an actor out of a wall. Do not rewrite how the map plays.

## 交给用户 / Hand back

先列发现的问题，再列改动。旧图用数字序号引用对象时，先说明这是旧写法，确认序号对得上再决定要不要改成 `uid`。

List the problems, then the edits. If an old map uses numeric indexes, say that this is the old style, check that the index lands on the right object, and only then decide whether to switch it to a `uid`.
