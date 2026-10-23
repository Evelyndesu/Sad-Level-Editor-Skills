<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Decoration

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 34 | SetDecorModel | Change model of Decoration 'A' to model named 'B' | decor | decor_model |
| 231 |  | Set text placeholder decoration text | decor | string |
| 232 |  | Set decoration HEX color multiplier | decor | string |
| 233 |  | Set decoration scale to value 'B' | decor | string |
| 234 |  | Set decoration scale to value of variable 'B' | decor | string |
| 267 |  | Set decoration X scale to value 'B' | decor | string |
| 268 |  | Set decoration Y scale to value 'B' | decor | string |
| 293 |  | Mask Decoration 'A' with Decoration 'B' (Flash Player only) | decor | decor |
| 298 |  | Set decoration 'A' visibility multiplier to value 'B' (0...1) | decor | string |
| 300 |  | Move, rotate and flip Decoration 'A' to position of Gun 'B' | decor | gun |
| 343 |  | Attach decoration 'A' to current player's camera. Param 'B' will determine which part of the camera (left, center..) the decoration will be attached to. | decor | string |
| 345 |  | Change top-left position of decor 'A' to top-left position of region 'B' | decor | region |
| 408 |  | Set Decor 'A' color matrix to Array 'B' (array must have 4x5 items) | decor | string |
| 437 |  | Move, rotate and flip Decoration 'A' to position of Vehicle 'B' | decor | vehicle |
| 462 |  | Move, rotate and flip Decoration 'A' to Barrel 'B' | decor | barrel |
| 466 |  | Set decoration 'A' X scale to variable 'B' | decor | string |
| 467 |  | Set decoration 'A' Y scale to variable 'B' | decor | string |
| 478 |  | Change Decoration 'A' blend mode to Mode 'B' | decor | string |
