# 修改现有地图 / Edit an existing map

用用户的语言说明。只改用户点名的部分，其余标签原样保留。

Explain in the user's language. Change only what the user named. Leave every other tag as it is.

## 步骤 / Steps

1. 读完整份 XML。标签可能挤在一行里。Read the whole XML. Tags may be packed onto one line.
2. 先列出要动的对象：哪个 `uid` 或第几个同类标签、哪个字段、改成什么。然后再改文件。First say which `uid` or which tag of that class changes, which field, and the new value. Then edit.
3. 查字段时只打开对应的实体节、动作分类或枚举，规则见 [generate.md](generate.md) 的第 2 步。格式约束见 [../reference/format.md](../reference/format.md)。Open only the matching entity section, action category, or enum. Format rules are in format.md.
4. 改的时候保持类的保存顺序。新增对象插到它所属的那一段里，不要追加到文件末尾就算完。Keep the class save order. Insert a new object into its class's section.
5. 引用换了 uid 时，把指向旧名字的 `use_target`、`ondeath`、`target`、`actions_N_targetA`、`actions_N_targetB`、`attach` 一起改掉。If a `uid` changes, update `use_target`, `ondeath`, `target`, `actions_N_targetA`, `actions_N_targetB`, and `attach` that used the old name.
6. 运行 `node scripts/validate-level.js 地图.xml`。不要阅读 `reference/schema.json`。这次改动不能带来新的 `error` 或 `warn`。原先就有的 `error` 必须处理。原先就有的旧写法 `warn`（重复 `uid`、范围内的数字序号、`at` / `addx` / `addy`）先说明，用户没要求现代化就不要改。Run `node scripts/validate-level.js map.xml`. Do not read `reference/schema.json`. The edit must not add an `error` or a `warn`. Handle `error`s that were already there. Explain old-style `warn`s (duplicate `uid`, an in-range numeric index, `at` / `addx` / `addy`) and leave them unless the user asked to modernize.

## 交给用户 / Hand back

先写改了什么，再给改过的片段。图很小就附上整份 XML。不要用「优化」的名义重排用户没让动的触发器。

Say what changed, then show the changed fragment. If the map is small, include the whole XML. Do not reorder triggers the user did not ask to change.
