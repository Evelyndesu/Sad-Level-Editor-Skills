<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Gravitator Area Field

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 35 | SetPusherAccelX | Set X acceleration of Gravitator Area Field 'A' to value 'B' | pushf | value |
| 36 | SetPusherAccelY | Set Y acceleration of Gravitator Area Field 'A' to value 'B' | pushf | value |
| 37 | SetPusherStabilityDmg | Set stability damage of Gravitator Area Field 'A' to value 'B' (0 for disable) | pushf | value>=0 |
| 38 | SetPusherHPDmg | Set damage of Gravitator Area Field 'A' to value 'B' (0 for disable) | pushf | pushf_damage |
