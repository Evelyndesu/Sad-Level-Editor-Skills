<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Character

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 4 | ChangeCharHPPerc | Change the number of hit points of Character 'A' to 'B' percents | character | value |
| 13 | PutCharInVeh | Put Character 'A' into the Vehicle 'B' | character | vehicle |
| 14 | MoveCharToReguin | Move Character 'A' to the region 'B' (if Character alive) | character | region |
| 23 | SetCharHP | Set current hit points of Character 'A' to 'B' hit points (not sets hit points of each limb) | character | int |
| 28 | CloneCharInRegionCentre | Clone Character 'A' and spawn it in the centre of Region 'B' | character | region |
| 32 | SetAIBehavior | Set ''AI Behavior'' parameter of computer-controlled Character 'A' to value 'B' | character | botaction |
| 33 | SetCharTeam | Change team of Character 'A' to value 'B' | character | team |
| 48 | MultCharCurrentMaxHPPercent | Multiply maximal and current hit points of Character 'A' by 'B' percents. Not for multiplayer | character | value |
| 52 | SetCharNickname | Change Character 'A' nickname to 'B' | character | string |
| 53 | CloneCharToRegionRandomY | Clone Character 'A' and spawn it in random place in Region 'B' | character | region |
| 58 | SetCharSkin | Change Character 'A' skin to 'B' | character | char |
| 59 | SetCharCurrentMaxHPValue | Set Character 'A' current and max hit points to value 'B' | character | value |
| 60 | MakeCharDropGuns | Force Character 'A' to drop all weapons | character | nochange |
| 61 | MultCharSpeed | Multiply Character 'A' speed by value 'B' | character | value |
| 88 | SetCharMobility | Change Character 'A' mobility factor to 'B' | character | value |
| 89 | SetCharArmor | Change Character 'A' armor type to 'B' (0, 1 or 2) | character | int |
| 90 | SetCharBloodColor | Change blood color of Character 'A' to HEX color 'B' | character | string |
| 91 |  | Set horizontal movement on idle Character 'A' to value 'B' (0, -1 or 1) | character | int |
| 92 |  | Set vertical movement on idle Character 'A' to value 'B' (0, -1 or 1) | character | int |
| 93 |  | Set shoot action on idle Character 'A' to value 'B' (0 or 1) | character | int |
| 94 |  | Force Character 'A' to look at random point in Region 'B' | character | region |
| 97 |  | Force Character 'A' to hunt Character 'B' | character | character |
| 141 | DamageHead | Damage player 'A' head hitpoints by value 'B' | character | value |
| 142 | DamageArms | Damage player 'A' arms hitpoints by value 'B' | character | value |
| 143 | DamageBody | Damage player 'A' body hitpoints by value 'B' | character | value |
| 144 | DamageLegs | Damage player 'A' legs hitpoints by value 'B' | character | value |
| 164 |  | Change head model of Character 'A' to model 'B' | character | char |
| 165 |  | Change body model of Character 'A' to model 'B' | character | char |
| 166 |  | Change arms model of Character 'A' to model 'B' | character | char |
| 167 |  | Change legs model of Character 'A' to model 'B' | character | char |
| 168 |  | Set Character 'A' color pattern (4 small letters for each body sections, each represents first symbol of color in lowercase. - disables color change for specific section) | character | string |
| 220 |  | Set Character 'A' scale to value 'B' | character | string |
| 221 |  | Set Character 'A' scale to value of variable 'B' | character | string |
| 222 |  | Set Character 'A' zoom to value 'B' | character | string |
| 254 |  | Attempt healing of player-initiator by 'A' hit points. Stop trigger execution if player-initiator has maximum hit points or died | string | nochange |
| 255 |  | Heal player 'A' by 'B' hit points | character | string |
| 256 |  | Heal player 'A' by value of variable 'B' | character | string |
| 270 | SetPassivePushIntens | Set intensity scale of entity pushing force for player 'A' (default 0) | character | string |
| 271 | SetPassivePushRadius | Set radius of entity pushing force for player 'A' (default 200) | character | string |
| 272 | SetVoicePreset | Set Character 'A' voice preset to 'B' | character | voice_preset |
| 273 | StartGhost | Add ghost effect to Character 'A' | character | nochange |
| 274 | StopGhost | Remove ghost effect from Character 'A' | character | nochange |
| 281 |  | Apply damage-over-time effect to player-initiator with power 'A' and duration 'B' (30 duration = 1 second) | string | string |
| 282 |  | Remove all effects from player-initiator | nochange | nochange |
| 297 |  | Set jump multiplier for player 'A' to value 'B' | character | string |
| 312 |  | Set Character 'A' active weapon to Gun 'B' (#gun*1, -1, etc) | character | string |
| 312 |  | Set Character 'A' active weapon to Gun 'B' | character | gun |
| 313 |  | Make Character 'A' drop weapon at current slot | character | nochange |
| 317 |  | Set player-initiator team to 'B' | nochange | team |
| 318 |  | Make Character 'A' unhittable | character | nochange |
| 319 |  | Make Character 'A' hittable | character | nochange |
| 320 |  | Switch singleplayer control to Character 'A'. Set parameter 'B' to 1 if sound needs to be played | character | string |
| 321 |  | Disallow weapon drop for Character 'A' | character | nochange |
| 322 |  | Allow weapon drop for Character 'A' | character | nochange |
| 346 |  | Enable or Disable Nametag visibility of Character 'A' using parameter 'B' | character | bool |
| 351 |  | Move Character of slot-value variable 'A' to region 'B' | string | region |
| 374 |  | Set Character 'A' stability to value 'B' | character | string |
| 375 |  | Set Character 'A' stability to value of variable 'B' | character | string |
| 402 |  | Move Character slot-value variable 'A' to start position | string | nochange |
| 411 |  | Make Character 'A' drop Gun 'B' | character | gun |
| 429 |  | Set X speed of Character 'A' to value of variable 'B' | character | string |
| 430 |  | Set Y speed of Character 'A' to value of variable 'B' | character | string |
| 446 |  | Set Character 'A' Health bar GUI opacity to value 'B' | character | value |
| 447 |  | Set Character 'A' Health bar GUI opacity to variable 'B' | character | string |
| 451 |  | Change Character 'A' sword life to variable 'B' | character | string |
| 455 |  | Change Character 'A' nickname to variable 'B' | character | string |
| 456 |  | Change Character 'A' nametag text to variable 'B' | character | string |
| 458 |  | Set disabling of Character 'A' psi swords to parameter 'B' | character | bool |
| 459 |  | Set disabling of Character slot-value variable 'A' psi swords to parameter 'B' | string | bool |
| 464 |  | Set Character 'A' current and max hit points to variable 'B' | character | string |
| 482 |  | Show text bubble above Character 'B' with text 'A' | string | character |
| 484 |  | Set variable 'A' to active weapon of Character 'B' | string | character |
| 485 |  | Set Character 'A' active weapon slot to slot 'B' | character | string |
| 495 |  | Save shoot intention of Character slot-value variable 'B' to variable 'A' | string | string |
| 496 |  | Save horizontal movement intention of Character slot-value variable 'B' to variable 'A' | string | string |
| 497 |  | Save vertical movement intention of Character slot-value variable 'B' to variable 'A' | string | string |
| 498 |  | Set Character slot-value variable 'A' current and max hit points to value 'B' | string | string |
| 505 |  | Change team of Character 'A' to variable 'B' | character | string |
| 506 |  | Change team of Character slot-value variable 'A' to variable 'B' | string | string |
| 507 |  | Change team of Character slot-value variable 'A' to value 'B' | string | string |
| 511 |  | Change the number of hit points of Character slot-value variable 'A' to varible 'B' percents | string | string |
| 512 |  | Kill all Characters at Region 'B' which are not allied to Character slot-value variable 'A' | string | region |
| 513 |  | Set current hit points of Character slot-value variable 'A' to value of variable 'B' hit points (not set points of each limb) | string | string |
| 514 |  | Clone Character slot-value variable 'A' and spawn it in the centre of Region 'B' | string | region |
| 515 |  | Clone Character slot-value variable 'A' and spawn it in random place of Region 'B' | string | region |
| 516 |  | Force all enemies of Character slot-value variable 'A' who located in region 'B' hunt for Character slot-value variable 'A' | string | region |
| 517 |  | Set 'AI Behavior' parameter of computer-controlled Character slot-value variable 'A' to value 'B' | string | string |
| 518 |  | Change Character slot-value variable 'A' nickname to variable 'B' | string | string |
| 519 |  | Force Character slot-value variable 'A' to drop all weapons | string | nochange |
| 520 |  | Multiply Character slot-value variable 'A' speed by variable 'B' | string | string |
| 521 |  | Change Character slot-value variable 'A' mobility factor to variable 'B' | string | string |
| 522 |  | Change Character slot-value variable 'A' armor type to value 'B' | string | string |
| 523 |  | Change blood color of Character slot-value variable 'A' to HEX color 'B' | string | string |
| 525 |  | Force Character slot-value variable 'A' to look at random point in Region 'B' | string | region |
| 526 |  | Force Character slot-value variable 'A' to hunt Character slot-value variable 'B' | string | string |
| 527 |  | Damage Character slot-value variable 'A' head hitpoints by variable 'B' | string | string |
| 528 |  | Damage Character slot-value variable 'A' arms hitpoints by variable 'B' | string | string |
| 529 |  | Damage Character slot-value variable 'A' body hitpoints by variable 'B' | string | string |
| 530 |  | Damage Character slot-value variable 'A' legs hitpoints by variable 'B' | string | string |
| 533 |  | Set Character slot-value variable 'A' scale to variable 'B' | string | string |
| 534 |  | Heal Character slot-value variable 'A' by variable 'B' | string | string |
| 535 |  | Set intensity of entity pushing force for Character slot-value variable 'A' to variable 'B' (default 0) | string | string |
| 536 |  | Set radius of entity pushing force for Character slot-value variable 'A' to variable 'B' | string | string |
| 537 |  | Set Character slot-value variable 'A' voice preset to 'B' | string | voice_preset |
| 538 |  | Apply damage-over-time-effect to Character slot-value variable 'A' with power 'B' and duration 'B' (separated by commas) | string | string |
| 539 |  | Remove all effects from Character slot-value variable 'A' | string | nochange |
| 541 |  | Set jump multiplier for Character slot-value variable 'A' to variable 'B' | string | string |
| 542 |  | Set Character slot-value variable 'A' active weapon to Gun 'B' | string | gun |
| 543 |  | Make Character slot-value variable 'A' drop weapon at current slot | string | nochange |
| 545 |  | Make Character slot-value variable 'A' unhittable | string | nochange |
| 546 |  | Make Character slot-value variable 'A' hittable | string | nochange |
| 547 |  | Disallow weapon drop for Character slot-value variable 'A' | string | nochange |
| 548 |  | Allow weapon drop for Character slot-value variable 'A' | string | nochange |
| 550 |  | Show text bubble above Character slot-value variable 'B' with text 'A' | string | string |
| 551 |  | Set Character slot-value variable 'A' active weapon to slot 'B' | string | string |
| 552 |  | Set variable 'A' to active weapon of Character slot-value variable 'B' | string | string |
| 553 |  | Make Character slot-value variable 'A' drop Gun 'B' | string | gun |
| 554 |  | Change Character slot-value variable 'A' sword life to variable 'B' | string | string |
| 555 |  | Set variable 'A' to active gun model of Character slot-value variable 'B' | string | string |
| 556 |  | Move Character slot-value variable 'A' to random place in Region 'B' | string | region |
