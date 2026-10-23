<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Interface

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 42 | ShowText | Show text 'A' in chat with color 'B' | string | textmsg |
| 43 | SetHint | Show hint with text 'A'. Leave 'A' as empty to force hint dissapear | string | nochange |
| 190 |  | Enable multiplayer frag/death messages | nochange | nochange |
| 191 |  | Disable multiplayer frag/death messages | nochange | nochange |
| 330 |  | Set interface visibility multiplier to value 'A' and cursor visibility multiplier to value 'B' | string | string |
| 338 |  | Prevent alive players from seeing chat from dead players | nochange | nochange |
| 339 |  | Let alive players see chat from dead players | nochange | nochange |
| 340 |  | Disable leader board details (such as alive state, score, team) | nochange | nochange |
| 341 |  | Enable leader board details (such as alive state, score, team) | nochange | nochange |
