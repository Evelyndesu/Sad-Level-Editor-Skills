<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Trigger

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 19 | TriggerDisable | Deactivate Trigger 'A' | trigger | nochange |
| 20 | TriggerEnable | Activate Trigger 'A' | trigger | nochange |
| 21 | TriggerSetCalls0 | Set number of remain calls of Trigger 'A' to 0 | trigger | nochange |
| 22 | TriggerSetCallsValue | Set number of remain calls of Trigger 'A' to value 'B' | trigger | maxcalls |
| 156 | SetChatInputCallback | Set trigger 'A' as player chat message receiver | trigger | nochange |
| 228 |  | Call trigger 'A' each time new player joins the match | trigger | nochange |
| 288 |  | Bind Trigger 'A' execution to key 'B' press event | trigger | string |
| 289 |  | Bind Trigger 'A' execution to key 'B' release event | trigger | string |
