<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Region

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 2 | RegionToRegion | Quickly move Region with name 'A' to the position of the region with name 'B' | region | region |
| 6 | DamageRegion | Make damage in Region 'B' with power of 'A' hit points | value | region |
| 10 | StabilityDamageRegion | Harm the stability with power 'A' of all Characters located at Region with the name 'B' | value | region |
| 11 | KillUnaliedInRegion | Kill all Characters at Region 'B' which are not allied to Character 'A' | character | region |
| 12 | DestroyVehsInRegion | Destroy all vehicles in Region 'A' | region | nochange |
| 18 | RegionToRegionCenter | Move Region 'A' to the Region 'B' (centres will be located in the same point) | region | region |
| 24 | ExplosionRegion | Make an explosion with power 'A' at Region 'B' | value>=0 | region |
| 29 | ForceRegionHuntForChar | Force all enemies of Character 'A' who located in region 'B' hunt for Character 'A' | character | region |
| 30 | TeleportFromRegionToRegion | Teleport all players from Region 'A' to Region 'B' | region | region |
| 31 | TeleportFromRegionToRegionFlip | Teleport all players from Region 'A' to Region 'B' and invert speed by X axis (used to avoid loop teleportation) | region | region |
| 56 | FlipXVelocityRegion | Flip X speed for all players in region 'B' | nochange | region |
| 57 | FlipYVelocityRegion | Flip Y speed for all players in region 'B' | nochange | region |
| 70 | TeleportInitiatorFromTo | Teleport player-initiator from Region 'A' to Region 'B' | region | region |
| 72 | MultCharsSpeedsAtRegion | Multiply speed of players in Region 'A' by value 'B' | region | value |
| 79 | MoveRegionToCharInitiator | Move Region 'A' to player-initiator | region | nochange |
| 80 | MoveRegionToChar | Move Region 'A' to player 'B' | region | character |
| 83 | AddRegionPosX | Move Region 'A' relative to current position along X | region | value |
| 84 | AddRegionPosY | Move Region 'B' relative to current position along Y | region | value |
| 87 | MoveRegionToInitiatorCursor | Move Region 'A' to player-initiator's cursor | region | nochange |
| 98 |  | Move Region 'A' to Movable 'B' | region | door |
| 259 |  | Move region 'A' to cursor of player 'B' | region | character |
| 279 | SilentlyTeleportInitiatorFromTo | Silently teleport player-initiator from Region 'A' to Region 'B' | region | region |
| 283 |  | Spawn damage particles of Character 'A' at the center of Region 'B' | character | region |
| 323 |  | Move Region 'A' to Gun 'B' | region | gun |
| 353 |  | Move Region 'A' to lower body of player 'B' | region | character |
| 396 |  | Move region 'A' to game camera | region | nochange |
| 440 |  | Initiate region 'A' using character 'B' as initiator | region | character |
| 480 |  | Move region 'A' relative to current position along variable 'B' X | region | string |
| 481 |  | Move region 'A' relative to current position along variable 'B' Y | region | string |
| 487 |  | Destroy all projectiles in region 'A' | region | nochange |
| 488 |  | Move projectiles in region 'A' to region 'B' | region | region |
| 491 |  | Multiply all projectiles' speed in region 'A' to value 'B' | region | string |
| 499 |  | Initiate region 'A' using Character slot-value variable 'B' as initiator | region | string |
| 540 |  | Spawn damage particles of Character slot-value variable 'A' at the center of Region 'B' | string | region |
| 557 |  | Teleport Character slot-value variable 'A' to Region 'B' and invert speed by X axis (used to avoid loop teleportation) | string | region |
| 558 |  | Teleport Character slot-value variable 'A' to Region 'B' | string | region |
| 559 |  | Silently teleport Character slot-value variable 'A' to Region 'B' | string | region |
