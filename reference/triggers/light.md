<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Light

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 54 | LightOn | Turn light 'A' on | lamp | nochange |
| 55 | LightOff | Turn light 'A' off | lamp | nochange |
| 379 |  | Change Light 'A' color to 'B' | lamp | string |
