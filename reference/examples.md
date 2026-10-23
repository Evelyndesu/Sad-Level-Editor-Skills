# 示例地图 / Sample maps

按用户要的玩法只打开对应的一份。战役关是一行一个标签。要看某个对象时，搜索它的 `uid` 或 `actions_N_type`，不要整关读入，也不要一次打开多关。

Open only the sample that matches the requested mode. Campaign levels are one tag per line. To inspect one object, search for its `uid` or `actions_N_type`. Do not read the whole level, and do not open more than one level.

| 要做的图 / Map to make | 打开 / Open |
| --- | --- |
| 确认 XML 长什么样 / See what the XML looks like | [../examples/minimal-room.xml](../examples/minimal-room.xml) |
| 多人、对称、死亡竞赛 / Symmetric deathmatch | [../examples/eric_gurt-level25_mp.xml](../examples/eric_gurt-level25_mp.xml) |
| 单人战役 / Single-player campaign | 下面表格里挑一关，不要一次打开多关 / pick one row below |

新图用唯一的 `#uid`。示例里有重复的 `uid`（例如多个 `#background`，敌人也叫 `#player`）和用数字当引用的旧写法，只学布局和触发器结构，不要照抄这些习惯。

Give every new object a unique `#uid`. The samples repeat uids, such as several `#background` tags and enemies also named `#player`, and they use numeric indexes. Learn the layout and the trigger structure. Do not copy those habits.

## 多人对称图 / Symmetric multiplayer

`eric_gurt-level25_mp.xml` 是左右对称的死亡竞赛。对称轴在 `x = -1100`。右边一点 `x` 的镜像是 `x' = -2200 - x`。镜像时把 `side` 的 `1` 和 `-1` 对调；`pushf` 的 `tox` 改符号，`toy` 不变。

`eric_gurt-level25_mp.xml` is a left-right symmetric deathmatch. The axis is `x = -1100`. The mirror of an `x` is `x' = -2200 - x`. Swap `side` `1` and `-1`. Flip the sign of a `pushf`'s `tox`. Leave `toy` as it is.

这张图的约定 / Conventions in this map:

- 出生点全是 `player`，`team="0"`，`char="-1"`（Death Match model），`hea` 和 `hmax` 为 150。没有 `enemy`。Every spawn is a `player` with `team="0"`, `char="-1"`, and 150 hit points. There is no `enemy`.
- 每个出生点旁边成对放 `gun_rifle` 和 `gun_pistol`，`command="-1"`（任何队伍都能拿）。除颤器、等离子枪、火箭筒等拾取物也左右成对。Each spawn has a `gun_rifle` and a `gun_pistol` with `command="-1"`. Defibrillators, plasma guns, rocket launchers, and other pickups are mirrored too.
- 往上的电梯是 `pushf`，`toy` 为负（Y 向下，所以负的 `toy` 是向上）。地图左右外沿用 `tox` 把人推回场内，并给 `stab`。An upward lift is a `pushf` with negative `toy`, because Y points down. The outer edges use `tox` and `stab` to push players back inside.
- 会关上的门成组出现：玩家进入区域（`use_on="6"`）调用 `opentrigger`，动作 `0` 把 `door` 移到打开位置的 `region`，再用动作 `19` / `20` 关掉开门触发器、打开关门触发器。`timer` 的 `delay="60"`（60 帧，约 2 秒）之后调用 `closetrigger` 把门移回去。人还站在门区里时，`resetCLTIMtrigger` 用动作 `44` 重置这个计时器。搜索 `#opentrigger*1`、`#closetimer*1`、`#closetrigger*1` 这一组就够，不要整份重读。另外两组是镜像。Closing doors come in a group. A player entering a region (`use_on="6"`) calls `opentrigger`. Action `0` moves each `door` to its open `region`, then actions `19` and `20` disable the open trigger and enable the close trigger. After `delay="60"` (60 frames, about 2 seconds), the timer calls `closetrigger` and moves the doors back. While someone is still in the doorway, `resetCLTIMtrigger` uses action `44` to reset that timer. Search for the `#opentrigger*1`, `#closetimer*1`, and `#closetrigger*1` group. Do not read the whole file. The other two groups are mirrors.
- 中间通道用动作 `30` 把一侧区域里的人传到另一侧。The center passage uses action `30` to teleport players from one region to the other.
- 只有一条引擎标记：`mark="sky"`。The only engine mark is `mark="sky"`.

做团队死斗时不要照抄「全部 `team="0"`」。出生点分成两个 `team`，两边人数一样，武器仍然镜像。

For team deathmatch, do not copy "every spawn is `team="0"`". Split the spawns into two teams, keep both sides the same size, and still mirror the weapons.

## 单人战役 / Single-player campaign

`examples/campaign/c0a.xml` 到 `c41a.xml` 是战役关卡，文件名里的数字就是关卡顺序。多数关只有一个 `player`：`team="0"`、`char="1"`（Campaign Hero）。敌人是 `enemy`，队伍不是 0。地上的枪用 `command` 限制哪一队能捡。

`c0a.xml` through `c41a.xml` are the campaign levels, in filename order. Most levels have one `player`: `team="0"` and `char="1"` (Campaign Hero). Enemies are `enemy` tags on a team other than 0. A gun on the ground uses `command` to limit which team can pick it up.

开局武器靠 `inf`，不靠出生点身上的枪。Starting weapons come from `inf`, not from a gun attached to the spawn:

- `c0a` 到 `c28a`：`hero1_guns`（海军武器）。`c0a` 是特例，有两个 `player`，关卡也大得多。`c0a` through `c28a` use `hero1_guns` (marine weapons). `c0a` is the exception: two players, and a much larger level.
- `c29a` 到 `c35a`：`hero2_guns`（Proxy 武器）。`c32a` 把手榴弹拆成 `hero2_guns_nonades` 和 `hero2_guns_nades`。`c29a` through `c35a` use `hero2_guns` (Proxy weapons). `c32a` splits grenades into `hero2_guns_nonades` and `hero2_guns_nades`.
- `c36a` 到 `c40a`：两种武器标记都有，常配合 `strict_casual`。`c38a` 里有动作 `9`（End mission）。`c41a` 几乎没有敌人，用 `meat` 和 `sky`。`c36a` through `c40a` have both weapon marks, often with `strict_casual`. `c38a` uses action `9` (End mission). `c41a` has almost no enemies and uses `meat` and `sky`.

按需求只打开一关 / Open only one level:

| 想看什么 / Look for | 文件 / File |
| --- | --- |
| 短关、几个敌人和海军武器 / A short level, a few enemies, marine weapons | `c1a.xml` |
| 很多门 / Many doors | `c2a.xml`、`c5a.xml`、`c18a.xml` |
| 门、区域、触发器怎么串 / How doors, regions, and triggers connect | `c8a.xml` |
| Proxy 武器从哪关开始 / Where Proxy weapons start | `c29a.xml` |
| 大混战 / A large fight | `c36a.xml`、`c37a.xml` |
| 用触发器结束任务 / End the mission from a trigger | `c38a.xml` |

战役图里的触发器负责开门、传送、提示和收尾。新关要结束任务时用动作 `9`，参数 A 写原因；要切到下一张图用动作 `50`。这两种动作的参数类型见 [triggers/scenario.md](triggers/scenario.md)。

Campaign triggers open doors, teleport, show hints, and finish the level. To end a new mission, use action `9` and put the reason in parameter A. To switch to another level, use action `50`. Both parameter types are in [triggers/scenario.md](triggers/scenario.md).
