<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Movable

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 0 | MovableTo | Force Movable 'A' move to region 'B' | door | region |
| 1 | SetMovableSpeed | Change Speed of Movable 'A' to value 'B' | door | value>=0 |
| 71 | SetMovableColor | Change color of Movable 'A' to HEX color 'B' | door | string |
| 82 | MakeMovableExecTriggerOnDamage | Call Trigger 'B' when Movable 'A' got damage | door | trigger |
| 85 | MuteMovable | Mute Movable 'A' | door | nochange |
| 86 | UnmuteMovable | Unmute Movable 'A' | door | nochange |
