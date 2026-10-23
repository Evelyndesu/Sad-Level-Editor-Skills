<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Text-to-speech

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 198 |  | Create Voice object and save it as variable 'A' | string | nochange |
| 199 |  | Set volume 'B' for Voice object 'A' | string | string |
| 200 |  | Set pitch 'B' for Voice object 'A' | string | string |
| 201 |  | Set voice model 'B' for Voice object 'A' | string | string |
| 202 |  | Speak text 'B' with Voice object 'A' | string | string |
| 203 |  | Speak text-value of variable 'B' with Voice object 'A' | string | string |
| 244 |  | Set rate 'B' for Voice object 'A' | string | string |
