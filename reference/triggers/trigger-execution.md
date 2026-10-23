<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Trigger execution

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 95 |  | Continue execution of this trigger only if tracing from center of Region 'A' to center of Region 'B' is possible | region | region |
| 96 |  | Continue execution of this trigger only if tracing from center of Region 'A' to center of Region 'B' is impossible | region | region |
| 99 | ExecTrigger | Execute trigger 'A' | trigger | nochange |
| 230 |  | Continue trigger actions execution only if value of session variable 'A' was set by map with ID 'B' (list of map IDs can be used, separated with commas without spaces) | string | string |
| 275 |  | Continue trigger actions execution only if loading of custom images has been finished | nochange | nochange |
| 276 |  | Continue trigger actions execution only if all custom images have been successfully loaded (any error will prevent execution until map is restarted) | nochange | nochange |
| 362 |  | Switch execution to trigger ID in variable 'A' | string | nochange |
| 363 |  | Switch execution to trigger 'A' | trigger | nochange |
| 406 |  | Continue execution of this trigger only if tracing from center of Region 'A' to center of Region 'B'  doesn't intersect a character | region | region |
| 407 |  | Continue execution of this trigger only if tracing from center of Region 'A' to center of Region 'B' intersects a character | region | region |
| 492 |  | Continue execution of this trigger only if Region 'A' contains projectiles | region | nochange |
| 493 |  | Continue execution of this trigger only if Region 'A' doesn't contain projectiles | region | nochange |
