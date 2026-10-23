<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Array

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 349 |  | Split variable 'A' by string-value 'B' | string | string |
| 350 |  | Get index 'B' of variable 'A' and store into variable 'A' | string | string |
| 352 |  | Add element 'B'(can be variable) to array 'A' | string | string |
| 354 |  | Create array at variable 'A' | string | nochange |
| 399 |  | Split variable 'A' by value of variable 'B' | string | string |
| 405 |  | Join variable 'A' by value of variable 'B' | string | string |
| 508 |  | Get all active player slots and save result to Array 'A' | string | nochange |
