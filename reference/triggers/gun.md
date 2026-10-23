<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Gun

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 15 | MoveGunToReguin | Move Gun 'A' to the Region 'B' | gun | region |
| 62 | SetGunProjectileCount | Force Gun 'A' spawn 'B' projectiles per shot | gun | value |
| 63 | SetGunAccuracy | Change Gun 'A' accuracy to 'B' degress | gun | value |
| 64 | SetGunPower | Change Gun 'A' projectile power to 'B' | gun | value |
| 65 | TurnGunProjectileBullets | Convert Gun 'A' projectiles into bullets | gun | nochange |
| 66 | TurnGunProjectileRails | Convert Gun 'A' projectiles into rails | gun | nochange |
| 67 | TurnGunProjectileGrenades | Convert Gun 'A' projectiles into grenades | gun | nochange |
| 68 | TurnGunProjectileEnergy | Convert Gun 'A' projectiles into energy | gun | nochange |
| 69 | TurnGunProjectileRockets | Convert Gun 'A' projectiles into rockets | gun | nochange |
| 76 | SetGunForChars | Allow Gun 'A' only for characters | gun | nochange |
| 77 | SetGunForVehicles | Allow Gun 'A' only for vehicles | gun | nochange |
| 78 | SetGunSlot | Set Gun 'A' slot to 'B' | gun | int |
| 81 | MakeGunExecTriggerOnFire | Call Trigger 'B' when Gun 'A' fired | gun | trigger |
| 170 |  | Change Gun 'A' speed multiplier to value 'B' | gun | string |
| 172 |  | Change Gun 'A' recoil multiplier to value 'B' | gun | string |
| 175 |  | Change Gun 'A' projectile model to model with index 'B' | gun | string |
| 218 |  | Change Gun 'A' target knockback multiplier to value 'B' | gun | string |
| 219 |  | Change Gun 'A' target knockback multiplier to value of variable 'B' | gun | string |
| 237 |  | Change Gun 'A' max spread accuracy to value 'B' (in radians) | gun | string |
| 238 |  | Change Gun 'A' added spread accuracy to value 'B' (in radians) per shot | gun | string |
| 239 |  | Change Gun 'A' subtracted spread accuracy to value 'B' (in radians) over time | gun | string |
| 260 |  | Assign sound 'B' as firing sound for weapon 'A' | gun | sound |
| 287 |  | Override existing Gun 'A' with a new gun with model 'B' | gun | gun_model |
| 301 |  | Set Gun 'A' projectile scale to value 'B' | gun | string |
| 303 |  | Set Gun 'A' arm 1 hold offset to 'B' (0..1) | gun | string |
| 304 |  | Set Gun 'A' arm 2 hold offset to 'B' (0..1) | gun | string |
| 305 |  | Set Gun 'A' holstered attachment to 'B' (0 = on leg, 1 = on back) | gun | string |
| 306 |  | Set Gun 'A' length to value 'B' | gun | string |
| 324 |  | Call Trigger 'B' when Gun 'A' was fully reloaded while being held by some character | gun | trigger |
| 355 |  | Change Gun 'A' cursor/crosshair to value 'B' | gun | string |
| 377 |  | Set gun 'A' upgrade level to string-value/variable 'B' | gun | string |
| 378 |  | Change Gun 'A' color to 'B' | gun | string |
| 403 |  | Set gun 'A' color matrix to array 'B' (4 rows, 5 columns, first 4 columns are multiplicative, last column is additive) | gun | string |
| 444 |  | Change Gun 'A' bullet life multiplier to variable 'B' | gun | string |
| 469 |  | Set Gun 'A' rotation to variable 'B' | gun | string |
| 470 |  | Set Gun 'A' X scale to variable 'B' | gun | string |
| 473 |  | Set Gun 'A' Y scale to variable 'B' | gun | string |
| 486 |  | Change Gun 'A' bullet speed multiplier to variable 'B' | gun | string |
| 494 |  | Clone Gun 'A' at center of region 'B' | gun | region |
