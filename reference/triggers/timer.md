<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Timer

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 25 | TimerEnable | Activate Timer 'A' | timer | nochange |
| 26 | TimerDisable | Deactivate Timer 'A' | timer | nochange |
| 27 | TimerSetFrequency | Set the frequency of calls of Timer 'A' to value 'B' | timer | int |
| 44 | ResetTimerPhase | Reset current phase of between-call waiting of Timer 'A' | timer | nochange |
| 46 | SetTimerCalls | Set remain calls number of Timer 'A' to value 'B' | timer | maxcalls |
| 454 |  | Set variable 'A' to time elapsed of Timer 'B' | string | timer |
