<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Gameplay

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 39 | SetGameSpeed | Set game speed to 'A' frames per second (default game speed is 30. Does not influence rendering) | value>=0 | nochange |
| 40 | SetStrictCasualMode | Change Strict Casual Mode status | enable-disable | nochange |
| 45 | SetAIHeal | Allow or disallow usage of defibrillators by allies with value of parameter 'A' | enable-disable | nochange |
| 49 | SetSwords | Set Disabling of psi swords to value of parameter 'A' | enable-disable | nochange |
| 51 | Zoom | Zoom game camera to 'A' % (percents) | value>0 | nochange |
| 73 | SetBulletSpeed | Change bullet speed to value 'A' (default value is 60) | value | nochange |
| 74 | SetBulletPenetration | Change bullet penetration factor to value 'A' (default value is 1) | value | nochange |
| 75 | SetBulletMaxLife | Change max bullet life value 'A' (default value is 30) | value | nochange |
| 194 |  | Set respawn speed multiplier (defaults to 1, but 1.5 in ranked) | string | nochange |
| 207 |  | Enable anonymous mode (disable player overheads, chat messages are not show in chat) | nochange | nochange |
| 208 |  | Disable anonymous mode (enable player overheads, chat messages are show in chat) | nochange | nochange |
| 209 |  | Set regeneration speed multiplier to value 'A' (defaults to 1) | string | nochange |
| 210 |  | Set regeneration speed multiplier to value of variable 'A' | string | nochange |
| 211 |  | Set regeneration delay multiplier to value 'A' (defaults to 1, but 2 in ranked) | string | nochange |
| 212 |  | Set regeneration delay multiplier to value of variable 'A' | string | nochange |
| 213 |  | Set physical player impact damage multiplier to 'A' (default is 1) | string | nochange |
| 214 |  | Set physical player impact damage threshold to 'A' (higher values increase chance to receive any impact damage. Default for approved maps is 0.9, in else cases it is 1) | string | nochange |
| 215 |  | Set self-boost force multiplier (default is 1) | string | nochange |
| 216 |  | Set unstable self-boost force multiplier for HIGH physics setting (default for approved maps is 2.8, in else cases it is 1) | string | nochange |
| 217 |  | Set unstable self-boost force multiplier for LOW physics setting (default is 1) | string | nochange |
| 240 |  | Set rocket projetiles' speed multiplier to value 'A' | string | nochange |
| 241 |  | Set grenade projetiles' speed multiplier to value 'A' | string | nochange |
| 242 |  | Set plasma projetiles' speed multiplier to value 'A' | string | nochange |
| 245 |  | Lock camera at region 'A' (region size must be 800x400 for zoom of 100%) with intensity multiplier 'B' (0..1) | region | string |
| 246 |  | Unlock camera from any region | nochange | nochange |
| 250 |  | Enable kinetic module | nochange | nochange |
| 251 |  | Disable kinetic module | nochange | nochange |
| 261 |  | Allow Time Warp | nochange | nochange |
| 262 |  | Disallow Time Warp | nochange | nochange |
| 291 |  | Disable automatic disabling of offscreen entities (automatic disabling is enabled by default) | nochange | nochange |
| 292 |  | Enable automatic disabling of offscreen entities (automatic disabling is enabled by default) | nochange | nochange |
| 307 |  | Restart map (singleplayer) | nochange | nochange |
| 308 |  | Reset game termination logic (for example if game is about to end due to player's death) | nochange | nochange |
| 309 |  | Make all players leave map or multiplayer match | nochange | nochange |
| 310 |  | Make player-initiator leave map or multiplayer match | nochange | nochange |
| 311 |  | Make player-killer leave map or multiplayer match | nochange | nochange |
| 380 |  | Set list of slots that can be randomly given to player during respawn using variable 'A' | string | nochange |
| 381 |  | Set max amount of weapons that can be given to player during respawn using variable 'A' | string | nochange |
| 441 |  | Enable kinetic module through walls using Parameter 'A' | bool | nochange |
| 450 |  | Set range of bullet mirroring to value 'A' (default value is 30) | value>=0 | nochange |
| 453 |  | Set disabling of global player collision to parameter 'A' | bool | nochange |
| 468 |  | Set disabling of global limb breaking to parameter 'A' | bool | nochange |
| 477 |  | Set disabling of global fall impact instability using parameter 'A' | bool | nochange |
| 479 |  | Change global fall impact instability height multiplier to value 'A' | value | nochange |
| 483 |  | Set Disabling of ambient sounds using parameter 'A' | bool | nochange |
| 500 |  | Set game speed to variable 'A' frames per second (default game speed is 30. Does not influence rendering) | string | nochange |
