<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# 实体 / Entities

标签名就是类名。下面只列这个类真正会用到的字段：该类专属字段，加上默认值里出现的通用字段。`uid` 任何对象都可以写，用来被触发器引用。

The tag name is the class name. Each section lists the fields that class actually uses: its own fields, plus shared fields that appear in its defaults. Any object may have a `uid` so triggers can refer to it.

触发器的动作槽不在下表里展开。见 [triggers/index.md](triggers/index.md)。引擎标记的 `forteam` 类型见 [engine.md](engine.md)。

Trigger action slots are not expanded below. See [triggers/index.md](triggers/index.md). The `forteam` type of an engine mark is in [engine.md](engine.md).

保存顺序 / Save order：`player` → `enemy` → `barrel` → `pushf` → `image` → `bg` → `water` → `box` → `door` → `vehicle` → `decor` → `gun` → `lamp` → `region` → `trigger` → `timer` → `inf` → `song`。

## box（wall）

默认值 Defaults: `x=0`、`y=0`、`w=10`、`h=10`、`m=0`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| w | value>0+round10 | Width | Determines object's width |
| h | value>0+round10 | Height | Determines object's height |
| m | box_model | Material | Determines object's material |

## door（movable object）

默认值 Defaults: `uid="#door"`、`x=0`、`y=0`、`w=10`、`h=10`、`moving=false`、`tarx=0`、`tary=0`、`maxspeed=10`、`vis=true`、`attach=-1`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| w | value>0+round10 | Width | Determines object's width |
| h | value>0+round10 | Height | Determines object's height |
| maxspeed | value>=0 | Speed | Defines speed per 1/30 second |
| vis | bool | Visible | Determines whether door is visible or not |
| attach | door+none | Attach to | Prevents any free move and attaches movable to other movable |
| moving | bool | moving | 编辑器默认状态，保存时会写进 XML / Editor state written into the save |
| tarx | value | tarx | 编辑器默认状态，保存时会写进 XML / Editor state written into the save |
| tary | value | tary | 编辑器默认状态，保存时会写进 XML / Editor state written into the save |

## region（region）

默认值 Defaults: `uid="#region"`、`x=0`、`y=0`、`w=10`、`h=10`、`use_target=-1`、`use_on=0`、`attach=-1`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| w | value>0+round10 | Width | Determines object's width |
| h | value>0+round10 | Height | Determines object's height |
| use_target | trigger+none | Activation Trigger | Trigger being called on Action event |
| use_on | region_activation | Activation on | Determines when trigger which is defined by "Activation Trigger" parameter runs |
| attach | door+none | Attach to | Attaches region to movable |

## pushf（pushing area）

默认值 Defaults: `uid="#pushf"`、`x=0`、`y=0`、`w=10`、`h=10`、`tox=0`、`toy=0`、`stab=0`、`damage=0`、`attach=-1`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| tox | value | Acceleration X | Defines acceleration along X axis for objects in Gravitator area field |
| toy | value | Acceleration Y | Defines acceleration along Y axis for objects in Gravitator area field |
| w | value>0+round10 | Width | Determines object's width |
| h | value>0+round10 | Height | Determines object's height |
| stab | value>=0 | Stability damage | Defines how much stability damage Gravitator area field deals for alive actors per 1/30 second |
| damage | pushf_damage | Hitpoints damage | Defines how much hitpoint damage Gravitator area field deals for alive actors per 1/30 second |
| attach | door+none | Attach to | Attaches pusher to movable |

## bg（background）

默认值 Defaults: `uid="#background"`、`x=0`、`y=0`、`w=10`、`h=10`、`m=0`、`c=""`、`a="-1"`、`u=0`、`v=0`、`f=0`、`s=true`、`__priority=0`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| w | value>0+round10 | Width | Determines object's width |
| h | value>0+round10 | Height | Determines object's height |
| m | bg_model_native | Material | Determines object's material |
| c | string | HEX multiplier | Multiplier material with this color |
| a | door+none | Attach to | Attaches background to movable |
| u | value | Texture X offset | Texture offset in pixels |
| v | value | Texture Y offset | Texture offset in pixels |
| f | draw_in_front | Draw in front | Draw in front? |
| s | bool | Spawn shadow | Spawn shadow? |
| __priority | value | Draw priority | Higher values draw on top among the same type (backgrounds or decorations). Editor-only; save order follows this value. |

## water（water area）

默认值 Defaults: `uid="#water"`、`x=0`、`y=0`、`w=10`、`h=10`、`damage=0`、`friction=true`、`attach=-1`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| w | value>0+round10 | Width | Determines object's width |
| h | value>0+round10 | Height | Determines object's height |
| damage | value>=0 | Damage | Determines the amount of damage inflicted to alive actors by water region per 1/30 second |
| friction | bool | Act as water | Acts as water |
| attach | door+none | Attach to | Attaches water to movable |

## player（player）

默认值 Defaults: `uid="#player"`、`x=0`、`y=0`、`tox=0`、`toy=0`、`hea=130`、`hmax=130`、`team=0`、`side=1`、`char=1`、`incar=-1`、`botaction=0`、`ondeath=-1`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| tox | value | Speed X | Object initial speed along X axis |
| toy | value | Speed Y | Object initial speed along Y axis |
| hea | int | Hitpoints | Initial hitpoints ammount |
| hmax | int | Max. Hitpoints | Maximal hitpoints ammount |
| team | team | Team | Default player team |
| side | side | Direction | Initial direction |
| char | char | Character | Player model |
| incar | vehicle+none+any | In car | Determines initial actor placement |
| botaction | botaction | AI Behaviour | Initial behaviour of computer-controlled actors |
| ondeath | trigger+none | Trigger on death | Trigger being called on actor death event |

## enemy（enemy）

默认值 Defaults: `uid="#actor"`、`x=0`、`y=0`、`tox=0`、`toy=0`、`hea=130`、`hmax=130`、`team=0`、`side=1`、`char=1`、`incar=-1`、`botaction=0`、`ondeath=-1`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| tox | value | Speed X | Object initial speed along X axis |
| toy | value | Speed Y | Object initial speed along Y axis |
| hea | int | Hitpoints | Initial hitpoints ammount |
| hmax | int | Max. Hitpoints | Maximal hitpoints ammount |
| team | team | Team | Default player team |
| side | side | Direction | Initial direction |
| char | char | Character | Player model |
| incar | vehicle+none+any | In car | Determines initial actor placement |
| botaction | botaction | AI Behaviour | Initial behaviour of computer-controlled actors |
| ondeath | trigger+none | Trigger on death | Trigger being called on actor death event |

## vehicle（vehicle）

默认值 Defaults: `uid="#vehicle"`、`side=1`、`model="veh_jeep"`、`x=0`、`y=0`、`tox=0`、`toy=0`、`hpp=100`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| tox | value | Speed X | Object initial speed along X axis |
| toy | value | Speed Y | Object initial speed along Y axis |
| side | side | Direction | Initial direction |
| model | vehicle_model | Model | Vehicle model |
| hpp | value>=0 | % of Hitpoints | Percentage value based on default hitpoints ammount for current vehicle |

## decor（decoration）

默认值 Defaults: `uid="#decor"`、`model="stone"`、`x=0`、`y=0`、`attach=-1`、`u=0`、`v=0`、`f=0`、`r=0`、`sx=1`、`sy=1`、`__priority=0`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| model | decor_model_native | Model | Decoration model |
| attach | door+none | Attach to | Attaches decoration to movable |
| u | value | Texture X offset | Texture offset in pixels |
| v | value | Texture Y offset | Texture offset in pixels |
| f | draw_in_front | Draw in front | Draw in front? |
| r | value | Initial rotation | Rotation in degrees |
| sx | value | Scale X | Texture X scale |
| sy | value | Scale Y | Texture Y scale |
| text | string | Text | Text placeholder string (overhead / score / chat) |
| __priority | value | Draw priority | Higher values draw on top among the same type (backgrounds or decorations). Editor-only; save order follows this value. |

## gun（gun）

默认值 Defaults: `uid="#gun"`、`x=0`、`y=0`、`model="gun_rifle"`、`command=-1`、`upg=0`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| model | gun_model | Weapon model | Determines weapon model |
| command | team+any | For team | Defines who can pick up this weapon |
| upg | gun_upgrade | Upgrade level | Determines initial upgrade level for this weapon |

## lamp（lamp）

默认值 Defaults: `uid="#light"`、`x=0`、`y=0`、`power=0.4`、`flare=1`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| power | value | Power | Power of light |
| flare | bool | Has flare | Determines if light is visible on screen |

## barrel（barrel）

默认值 Defaults: `uid="#barrel"`、`model="bar_orange"`、`x=0`、`y=0`、`tox=0`、`toy=0`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| tox | value | Speed X | Object initial speed along X axis |
| toy | value | Speed Y | Object initial speed along Y axis |
| model | barrel_model | Model | Barrel model |

## trigger（trigger）

默认值 Defaults: `uid="#trigger"`、`x=0`、`y=0`、`enabled=true`、`maxcalls=1`、`execute=false`、`onserver=false`。

动作槽 `actions_1` 到 `actions_100`。每个槽有 `_type`、`_targetA`、`_targetB`。`_type=-1` 表示这个槽是空的，保存时会被丢掉。

Action slots run from `actions_1` to `actions_100`. Each slot has `_type`, `_targetA`, and `_targetB`. `_type=-1` is an empty slot and is dropped on save.

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| enabled | bool | Enabled | Defines if trigger can be started without being enabled by different trigger |
| maxcalls | maxcalls | Max calls | Maximum calls |
| execute | bool | Executes directly | If true, this trigger runs immediately when called instead of being queued |
| onserver | bool | onserver | 编辑器默认状态，保存时会写进 XML / Editor state written into the save |

## timer（timer）

默认值 Defaults: `uid="#timer"`、`x=0`、`y=0`、`enabled=true`、`maxcalls=1`、`target=-1`、`delay=30`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| enabled | bool | Launched on start | Defines if timer is initially started |
| maxcalls | maxcalls | Max calls | Maximum calls |
| target | trigger+none | Trigger on timeout | Trigger being called on Timeout event |
| delay | value>=0 | Delay | Delay between calls |

## inf（engine mark）

默认值 Defaults: `x=0`、`y=0`、`mark="hero1_guns"`、`forteam=0`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| mark | engine_mark | Modificator | Game modificator |
| forteam | nochange | Parameter | Modificator parameter |

## song（song）

默认值 Defaults: `x=0`、`y=0`、`uid="#song"`、`url=""`、`volume=1`、`loop=true`、`callback=-1`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| uid | string | ID | Object ID |
| x | value+round3 | X | Object position along X axis |
| y | value+round3 | Y | Object position along Y axis |
| url | string | URL | .mp3 file URL |
| volume | value>=0 | Volume | Volume |
| loop | bool | Loop | Loop |
| callback | trigger+none | Trigger on end | Trigger to call after song ends |

## image（Image info）

默认值 Defaults: `id="0"`、`width=100`、`height=100`。

| 字段 Field | 类型 Type | 英文名 Name | 说明 Description |
| --- | --- | --- | --- |
| id | value>=0 | Custom Image ID | Custom Image identificator |
| width | value>0 | Width in pixels | Image width |
| height | value>0 | Height in pixels | Image height |
