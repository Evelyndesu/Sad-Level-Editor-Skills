# 生成地图 / Generate a map

用用户的语言说明。XML 里的类名、字段名、动作 ID、引擎标记保持英文。

Explain in the user's language. Keep class names, field names, action IDs, and engine marks in English.

## 步骤 / Steps

1. 读 [../reference/format.md](../reference/format.md)。坐标、标签顺序、引用和自定义图都以它为准。Read format.md. It decides coordinates, tag order, references, and custom images.
2. 只打开这次用到的资料，不要把整套参数读进上下文。Open only what this map needs:
   - 实体字段 / Entity fields: the matching section of [../reference/entities.md](../reference/entities.md)
   - 动作 / Actions: [../reference/triggers/index.md](../reference/triggers/index.md), then that one category file
   - 枚举 / Enums: [../reference/enums/index.md](../reference/enums/index.md)。类型是 `engine_mark` 时改开 [../reference/engine.md](../reference/engine.md)，不要打开 `enums/engine-mark.md`。When the type is `engine_mark`, open engine.md instead of `enums/engine-mark.md`.
   - 引擎标记 / Engine marks: [../reference/engine.md](../reference/engine.md)
3. 先定玩法，再定房间。Y 向下。地面顶边是墙的 `y`，人的 `y` 比它小 1。墙厚通常 40，房间净高至少 160。Choose the mode, then the room. Y increases downward. An actor's `y` is 1 above the floor top. Walls are usually 40 thick, and the room should be at least 160 tall inside.
   - 多人对称图：先读 [../reference/examples.md](../reference/examples.md) 的对称规则，再搜索 [../examples/eric_gurt-level25_mp.xml](../examples/eric_gurt-level25_mp.xml) 里的出生点、一对镜像武器，以及 `#opentrigger*1` / `#closetimer*1` / `#closetrigger*1`。不要整份读取，也不要整份重抄。For a symmetric multiplayer map, read the symmetry rules, then search that file for the spawns, one mirrored weapon pair, and `#opentrigger*1` / `#closetimer*1` / `#closetrigger*1`. Do not read or copy the whole file.
   - 单人战役：按 [../reference/examples.md](../reference/examples.md) 的表只搜 `examples/campaign/` 里那一关的 `uid` 或 `actions_N_type`，不要整关读入。For a campaign level, search only the one file named in that table, for a `uid` or `actions_N_type`. Do not read the whole level.
4. 给会被引用的对象写唯一 `uid`，以 `#` 开头。动作、区域的 `use_target`、死亡触发都指向这些 uid。Give every referenced object a unique `uid` starting with `#`. Actions, `use_target`, and death triggers point at those uids.
5. 按 format.md 的顺序写出整张图。空动作不要写。不需要的默认值可以不写。Write the whole map in format.md order. Omit empty actions and unneeded defaults.
6. 运行 `node scripts/validate-level.js 地图.xml`。不要阅读 `reference/schema.json`。有 `error` 或 `warn` 都不交差。Run `node scripts/validate-level.js map.xml`. Do not read `reference/schema.json`. Do not hand the map over while the script reports an `error` or a `warn`.

## 交给用户 / Hand back

用用户的语言说明这张图怎么玩：出生点、敌人、触发器会做什么。把完整 XML 放进代码块，或写进用户指定的文件。提醒在地图编辑器里打开这个 XML。

Explain how the map plays: spawns, enemies, and what the triggers do. Put the full XML in a code block, or write the file the user named. Tell them to open it in the map editor.
