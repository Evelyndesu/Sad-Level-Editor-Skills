<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Vehicle

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 3 | ChangeVehHPPerc | Change the number of hit points of Vehicle 'A' to 'B' percents | vehicle | value |
| 438 |  | Enable or Disable visibility of Vehicle 'A' using parameter 'B' | vehicle | bool |
| 439 |  | Call Trigger 'B' when Vehicle 'A' destroyed | vehicle | trigger |
| 476 |  | Change Vehicle 'A' nickname to variable 'B' | vehicle | string |
