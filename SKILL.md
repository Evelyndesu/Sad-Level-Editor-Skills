---
name: sad-level-editor-skills
description: >-
  Writes, repairs, and explains Sad Burst 2 / Plazma Burst 2 level XML for the map editor:
  walls, doors, regions, triggers, timers, characters, weapons, vehicles, and engine marks.
  Use when the user asks to create, generate, edit, fix, or optimize a Sad Burst 2,
  Plazma Burst 2, or PB2 map, including campaign levels, symmetric multiplayer or deathmatch,
  triggers, timers, regions, engine marks, or any level-editor parameter.
---

# Sad Level Editor

给 Sad Burst 2 / Plazma Burst 2 社区做地图用。对方只有地图编辑器，没有游戏代码。

For the Sad Burst 2 / Plazma Burst 2 community. The reader has the map editor only. They do not have the game code.

只读本文件夹里的说明和参数表，写出或改好 XML。用用户正在用的语言说明：中文用户用中文，英文用户用英文。类名、字段名、动作 ID、引擎标记保持编辑器里的英文。

Read the instructions and parameter tables in this folder, then write or edit the XML. Explain in the user's language. Keep class names, field names, action IDs, and engine marks in the editor's English.

## 什么时候用 / When to use this

用户要做这些事时就用本技能。Use this skill when the user wants to:

- 生成或新做一张地图 / generate or create a map
- 按要求改现有地图 XML / edit an existing map XML
- 修复、优化关卡、触发器或引擎标记 / fix or tune a level, its triggers, or its engine marks
- 查某个编辑器参数该怎么填 / look up how to fill a level-editor parameter

## 先读哪一份 / What to open

不要一次把 `reference/` 全读进来。参数有 532 个触发器动作。

Do not read all of `reference/` at once. There are 532 trigger actions.

| 任务 Task | 打开 Open |
| --- | --- |
| 生成整张图 / Generate a whole map | [workflows/generate.md](workflows/generate.md)，然后 [reference/format.md](reference/format.md) |
| 改现有 XML / Edit existing XML | [workflows/edit.md](workflows/edit.md) |
| 修复或优化 / Repair or tune | [workflows/repair.md](workflows/repair.md) |
| 某个类有哪些字段 / Fields of one class | [reference/entities.md](reference/entities.md) 里的那一节 / that class section |
| 某个动作的 ID 和参数 / One action's ID and parameters | [reference/triggers/index.md](reference/triggers/index.md)，再打开对应分类 / then that category file |
| 队伍、武器、角色、材质 / Teams, weapons, characters, materials | [reference/enums/index.md](reference/enums/index.md) |
| 引擎标记 `inf` / Engine marks | [reference/engine.md](reference/engine.md) |
| 多人对称图或单人战役该参照哪张示例 / Which sample to copy for multiplayer or campaign | [reference/examples.md](reference/examples.md) |

写完或改完地图后，运行 `node scripts/validate-level.js 地图.xml`。不要阅读 `reference/schema.json`。新图有 `error` 或 `warn` 都不交差。修旧图时 `error` 必须处理；`warn` 里的旧写法先说明，用户没要求现代化就不要改。空房间见 [examples/minimal-room.xml](examples/minimal-room.xml)，对称多人图见 [examples/eric_gurt-level25_mp.xml](examples/eric_gurt-level25_mp.xml)，战役关在 [examples/campaign/](examples/campaign/)。用户把 XML 放进地图编辑器即可。

After writing or editing, run `node scripts/validate-level.js map.xml`. Do not read `reference/schema.json`. Do not hand over a new map while the script reports an `error` or a `warn`. When repairing an old map, every `error` must be handled. Explain old-style `warn` items first, and leave them unless the user asked to modernize. A bare room is [examples/minimal-room.xml](examples/minimal-room.xml). The symmetric multiplayer map is [examples/eric_gurt-level25_mp.xml](examples/eric_gurt-level25_mp.xml). Campaign levels are in [examples/campaign/](examples/campaign/). The user opens the XML in the map editor.

## 硬性约定 / Rules

- 地图是一串自闭合标签，没有根节点。标签顺序见 format.md。A map is a sequence of self-closing tags, with no root element. Tag order is in format.md.
- Y 向下。人站在地面顶边上方，`y` 比地面的 `y` 小 1。Y increases downward. A standing actor's `y` is 1 less than the floor's `y`.
- 引用用 `uid`。没有目标写 `-1`。被引用的对象必须真有这个 `uid`。Refer to objects by `uid`. Use `-1` when there is no target. The referenced object must actually have that `uid`.
- 动作字段是 `actions_N_type`、`actions_N_targetA`、`actions_N_targetB`。空槽不要写。Action fields are `actions_N_type`, `actions_N_targetA`, and `actions_N_targetB`. Do not write empty slots.
- `timer` 的 `delay` 单位是帧。默认 `30` 约等于 1 秒。The `delay` of a `timer` is in frames. The default `30` is about 1 second.
- 官网自定义图 `c数字` 要有 `<image>`。本站装饰 `s数字` 只放在 `decor` 的 `model` 上。An official custom image `c<number>` needs an `<image>` tag. A site decor `s<number>` belongs only on a `decor` `model`.
- 字段类型 `engine_mark` 以 [reference/engine.md](reference/engine.md) 为准，那里有 `forteam` 该填什么。不要只看 `enums/engine-mark.md`。When the field type is `engine_mark`, use [reference/engine.md](reference/engine.md), which says what `forteam` should be. Do not stop at `enums/engine-mark.md`.
- 不要手改 `reference/` 里带生成标记的文件。重新导出参数表后，把 `enums/engine-mark.md` 开头指向 `engine.md` 的两行补回去。Do not hand-edit files in `reference/` marked as generated tables. After regenerating the tables, put back the two lines at the top of `enums/engine-mark.md` that point at `engine.md`.
