<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Barrel

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 16 | MoveBarrelToReguin | Move Barrel 'A' to the Region 'B' (if Barrel not exploded) | barrel | region |
| 460 |  | Set Barrel 'A' hitpoints to variable 'B' | barrel | string |
| 461 |  | Clone Barrel 'A' and spawn it at centre of Region 'B' | barrel | region |
