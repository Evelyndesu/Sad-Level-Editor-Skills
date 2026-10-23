<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Graphics

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 382 |  | Draw line on current graphic from top-left of region 'A' to top-left of region 'B' | region | region |
| 383 |  | Create graphic with name 'A' at layer 'B' (1 is lowest, 3 is highest) | string | string |
| 384 |  | Select graphic to draw on with name 'A' | string | nochange |
| 385 |  | Begin fill of graphic with name 'A' using hex-colour 'B' | string | string |
| 386 |  | End fill of graphic with name 'A' | string | nochange |
| 387 |  | Draw circle on current graphic at top-left of region 'A' with radius 'B' | region | string |
| 388 |  | Clear graphic with name 'A' | string | nochange |
| 389 |  | Set line style of current graphic to thickness 'A' and hex-colour 'B' | string | string |
| 390 |  | Set starting position of graphic with name 'A' to region 'B' | string | region |
| 391 |  | Draw line from current position of graphic with name 'A' to top-left region 'B' | string | region |
| 433 |  | Set opacity of graphic with name 'A' to variable 'B' (percent) | string | string |
| 443 |  | Set line style of current graphic to thickness of variable 'A' and hex-colour of variable 'B' | string | string |
