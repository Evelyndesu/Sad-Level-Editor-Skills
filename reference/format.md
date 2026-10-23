# 地图 XML / Map XML

编辑器保存出来的地图不是带根节点的文档，而是一串自闭合标签。标签名就是类名。用编辑器的「打开」读回这份文件。

A saved map has no root element. It is a sequence of self-closing tags. The tag name is the class name. Open it with the editor's Open command.

空房间见 [../examples/minimal-room.xml](../examples/minimal-room.xml)。多人对称图和战役关怎么当参考，见 [examples.md](examples.md)。

A bare room is [../examples/minimal-room.xml](../examples/minimal-room.xml). How to use the multiplayer and campaign samples is in [examples.md](examples.md).

## 坐标 / Coordinates

X 向右增大，Y 向下增大。墙的 `x`、`y` 是左上角，`w`、`h` 向右、向下伸展。

X increases to the right. Y increases downward. A wall's `x` and `y` are its top-left corner. `w` and `h` extend right and down.

人站在地面上时，把角色的 `y` 放在地面顶边上面一点点。地面是 `<box y="0" h="40">` 时，顶边是 `0`，角色用 `y="-1"`。头上要留出大约 50 个单位，否则会卡进天花板。

Stand an actor just above the floor's top edge. For `<box y="0" h="40">` the top edge is `0`, so the actor uses `y="-1"`. Leave about 50 units of headroom.

## 标签顺序 / Tag order

整张图按这个顺序拼接。同一类里保持你想要的先后，但类和类之间不要打乱。

Write the whole map in this order. Order inside one class can follow the design. Do not mix classes:

`player` → `enemy` → `barrel` → `pushf` → `image` → `bg` → `water` → `box` → `door` → `vehicle` → `decor` → `gun` → `lamp` → `region` → `trigger` → `timer` → `inf` → `song`

`player` 按队伍交错写出：先每个队伍的第一个，再每个队伍的第二个。只有一个玩家时不用管。

Write `player` tags interleaved by team: the first of every team, then the second of every team. One player needs no special order.

`bg` 和 `decor` 按 `__priority` 从小到大排。数字越大，画在越上面。`0` 可以不写。

Sort `bg` and `decor` by `__priority`, smallest first. A higher number draws on top. `0` can be omitted.

## 字段 / Fields

每个属性都是 `名字="值"`。值里的 `& < > "` 写成 `&amp; &lt; &gt; &quot;`。

Every attribute is `name="value"`. Escape `& < > "` as `&amp; &lt; &gt; &quot;`.

新图用 `uid` 引用别的对象，例如 `#on-enter`。没有目标时写 `-1`。被引用的对象必须有这个 `uid`。墙可以没有 `uid`。

New maps refer to other objects by `uid`, for example `#on-enter`. Write `-1` when there is no target. The referenced object must have that `uid`. A wall can omit `uid`.

旧图里的非负整数不是 uid，而是序号：在同一类对象里从 0 数，`0` 是文件里的第一个。`character` 把 `player` 和 `enemy` 按出现顺序算在一起。新图不要用序号。

In old maps a non-negative integer is an index, not a uid. Count objects of that class from 0. `0` is the first one in the file. `character` counts `player` and `enemy` together, in file order. Do not use indexes in a new map.

触发器动作从 1 编号，最多 100 个。Trigger actions are numbered from 1, up to 100:

```xml
<trigger uid="#on-enter" x="0" y="0" enabled="true" maxcalls="1" actions_1_type="43" actions_1_targetA="Hello" actions_1_targetB="0" />
```

`actions_N_type="-1"` 是空槽。保存时编辑器会把空槽整段丢掉。`execute="false"` 也会被丢掉；只有立即执行才写 `execute="true"`。

`actions_N_type="-1"` is an empty slot. The editor drops empty slots on save. It also drops `execute="false"`. Write `execute="true"` only when the trigger should run immediately.

`timer` 的 `delay` 单位是帧。游戏默认每秒 30 帧，所以 `delay="30"` 约 1 秒，`delay="60"` 约 2 秒。

A `timer`'s `delay` is in frames. The game runs at 30 frames per second by default, so `delay="30"` is about 1 second and `delay="60"` is about 2 seconds.

下面这些默认值保存时会被丢掉，写不写都能读。These defaults are omitted on save. The file still loads if you leave them out:

- `bg`：`c=""`、`a="-1"`、`u="0"`、`v="0"`、`f="0"`、`s="true"`
- `water`：`friction="true"`
- `decor`：`u="0"`、`v="0"`、`text=""`、`f="0"`、`attach="-1"`
- `pushf`、`region`：`attach="-1"`
- `sx="1"`、`sy="1"`、`r="0"`
- `__priority="0"`

`door` 的 `moving`、`tarx`、`tary` 会原样保存。旧装饰上的 `at`、`addx`、`addy` 分别对应现在的 `attach` 和额外偏移；新图不要再用。

A `door` keeps `moving`, `tarx`, and `tary`. On old decors, `at`, `addx`, and `addy` are the old names for `attach` and the extra offset. Do not use them in a new map.

## 自定义图 / Custom images

官网图写 `c` 加数字，例如背景 `m="c6747"`、装饰 `model="c6747"`、角色 `char="c12"`。同一张图只要一条 `image`。

Official custom images are `c` plus a number, for example background `m="c6747"`, decor `model="c6747"`, or character `char="c12"`. One image needs only one `image` tag:

```xml
<image id="6747" width="128" height="128" />
```

`image` 放在 `pushf` 之后、`bg` 之前。`width` 和 `height` 是像素尺寸。

Place `image` after `pushf` and before `bg`. `width` and `height` are pixel sizes.

本站已审核装饰只写在 `decor` 的 `model` 上，形式是 `s` 加数字，例如 `model="s12"`。不要给它配 `image`，也不要写到背景或角色上。

An approved site decor is `s` plus a number, and only on a `decor` `model`, for example `model="s12"`. Do not add an `image` tag for it, and do not use it on a background or a character.

## 引擎标记 / Engine marks

`<inf mark="hero1_guns" forteam="0" />` 给单人出生玩家发海军武器。`mark` 和 `forteam` 的对照在 [engine.md](engine.md)。不要改看 `enums/engine-mark.md`，那里没有 `forteam` 的类型。

`<inf mark="hero1_guns" forteam="0" />` gives the single-player spawn the marine weapons. The `mark` and `forteam` pairs are in [engine.md](engine.md). Do not use `enums/engine-mark.md` instead. That file does not say what `forteam` should be.
