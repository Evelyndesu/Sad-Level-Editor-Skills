<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# Var

参数 A / B 的类型名要到 [../enums/index.md](../enums/index.md) 或 [../entities.md](../entities.md) 里查可填的值。`nochange` 表示这个槽没有参数。Look up parameter A/B types in the enums index or entities.md. `nochange` means that slot has no parameter.

| ID | opcode | 说明 Description | 参数 A Param A | 参数 B Param B |
| --- | --- | --- | --- | --- |
| 100 | VarSetValue | Set variable 'A' value to value 'B' | string | string |
| 101 | VarSetValueIfUndefined | Set variable 'A' value to value 'B' if 'A' is not defined | string | string |
| 102 | VarAddValue | Add value 'B' to value of variable 'A' | string | string |
| 103 | VarMultValue | Multiply value of variable 'A' by value 'B' | string | string |
| 104 | VarAddVar | Add value of variable 'B' to value of variable 'A' | string | string |
| 105 | VarMultVar | Multiply value of variable 'A' by value of variable 'B' | string | string |
| 106 | VarRand1 | Set value of variable 'A' to random number with floating point in range 0..B | string | string |
| 107 | VarRandRange | Set value of variable 'A' to random integer number in range 0..B-1 | string | string |
| 108 | VarRound | Round value of variable 'A' | string | nochange |
| 109 | VarFloor | Floor value of variable 'A' | string | nochange |
| 110 | continue if VarA > VarB  | Continue trigger actions execution only if variable 'A' is greater than variable 'B' | string | string |
| 111 | continue if VarA < VarB  | Continue trigger actions execution only if variable 'A' is less than variable 'B' | string | string |
| 112 | continue if VarA == VarB  | Continue trigger actions execution only if variable 'A' equals variable 'B' | string | string |
| 113 | continue if VarA != VarB  | Continue trigger actions execution only if variable 'A' does not equals to variable 'B' | string | string |
| 114 | continue if VarA > ValueB  | Continue trigger actions execution only if variable 'A' has greater value than value 'B' | string | string |
| 115 | continue if VarA < ValueB  | Continue trigger actions execution only if value of variable 'A' is less than value 'B' | string | string |
| 116 | continue if VarA == ValueB  | Continue trigger actions execution only if value of variable 'A' equals value 'B' | string | string |
| 117 | continue if VarA != ValueB  | Continue trigger actions execution only if value of variable 'A' does not equals to value 'B' | string | string |
| 118 | VarSetRegionX | Set value of variable 'A' to value of region 'B' X position of left-top corner point | string | region |
| 119 | VarSetRegionY | Set value of variable 'A' to value of region 'B' Y position of left-top corner point | string | region |
| 120 | RegionXSetVar | Set X position of 'A' region left-top corner point to value of variable 'B' | region | string |
| 121 | RegionYSetVar | Set Y position of 'A' region left-top corner point to value of variable 'B' | region | string |
| 122 | VarSetCharHP | Set value of variable 'A' to hitpoints value of player 'B' | string | character |
| 123 | next if VarA == ValueB | Skip next trigger action if value of variable 'A' does not equals value 'B' | string | string |
| 124 | VarSetModuloDivValue | Set variable 'A' value to remainder after division by value 'B' (only positive numbers) | string | string |
| 125 | VarSetVar | Set variable 'A' value to value of variable 'B' | string | string |
| 126 | ExplosionVarRegion | Make an explosion with power of value of variable 'A' at Region 'B' | string | region |
| 127 | VarSetModuloDivVar | Set variable 'A' value to remainder after division by value of variable 'B' (only positive numbers) | string | string |
| 128 |  | Force Gun 'A' spawn value of variable 'B' projectiles per shot | gun | string |
| 129 |  | Change Gun 'A' accuracy to value of variable 'B' degress | gun | string |
| 130 |  | Change Gun 'A' projectile power to value of variable 'B' | gun | string |
| 131 | VarDivValue | Divide variable 'A' by value 'B' | string | string |
| 132 | VarDivVar | Divide variable 'A' by value of variable 'B' | string | string |
| 133 | VarPowVar | Set value of variable 'A' to result of power function with value of variable 'A' and power of value of variable 'B' | string | string |
| 134 | VarPowValue | Set value of variable 'A' to result of power function with value of variable 'A' and power of value 'B' | string | string |
| 135 | VarSinVar | Set value of variable 'A' to result of sin function with value of variable 'B' (in radians) as parameter | string | string |
| 136 | VarCosVar | Set value of variable 'A' to result of cos function with value of variable 'B' (in radians) as parameter | string | string |
| 137 | SetACurrentPlayerSlot | Set value of variable 'A' to slot of current player | string | nochange |
| 138 | SetIsMP | Set value of variable 'A' to 1 if game is in multiplyer mode and to 0 in else case | string | string |
| 139 | SetIsSpectator | Set value of variable 'A' to 1 if my player is spectating this match as spectator and to 0 in else case | string | string |
| 140 | SetIsLowPhys | Set value of variable 'A' to 1 if LOW PHYSICS setting is enabled and to 0 in else case | string | string |
| 145 | SetCountAliveInRegion | Set value of variable 'A' to number of alive players in region 'B' | string | region |
| 146 | SetLoginOfInitiator | Set string-value of variable 'A' to login name of player-initiator | string | nochange |
| 147 | SetNicknameOfInitiator | Set string-value of variable 'A' to displayed name of player-initiator | string | nochange |
| 148 | SetMPMode | Set string-value of variable 'A' to multiplayer match name | string | nochange |
| 149 | SetIsAContainsValueB | Set value of variable 'A' to 1 if string-value of variable 'A' contains string-value 'B' and to 0 in else case | string | string |
| 150 | SetIsAContainsVarB | Set value of variable 'A' to 1 if string-value of variable 'A' contains string-value of variable 'B' and to 0 in else case | string | string |
| 151 | CountLength | Set value of variable 'A' to length of string-value of variable 'B' | string | string |
| 152 | AddString | Add string-value of variable 'B' at the end of string-value of variable 'A' | string | string |
| 153 | OneMinusA | Set value of variable 'A' to 1-A | string | nochange |
| 154 | MinusA | Set value of variable 'A' to -A | string | nochange |
| 155 | GetGSPEED | Set value of variable 'A' to current frame time | string | nochange |
| 157 | GetTalkerLogin | Set string-value of variable 'A' to login name of player who says text | string | nochange |
| 158 | GetTalkerNickname | Set string-value of variable 'A' to displayed name of player who says text | string | nochange |
| 159 | GetTalkerID | Set value of variable 'A' to slot index of player who says text | string | nochange |
| 160 | GetChatInput | Set string-value of variable 'A' to text being said | string | nochange |
| 171 |  | Change Gun 'A' speed multiplier to value of variable 'B' | gun | string |
| 173 |  | Change Gun 'A' recoil multiplier to value of variable 'B' | gun | string |
| 176 |  | Change Gun 'A' projectile model to model with index-value of variable 'B' | gun | string |
| 177 |  | Set value of variable 'A' to id of type of current multiplayer mode (0 = singleplayer, 1 = DM, 2 = COOP, 3 = TDM) | string | nochange |
| 178 |  | Save inventory info of Character 'B' to variable 'A' | string | character |
| 179 |  | Spawn all weapons stored in variable 'A' at position of Character 'B' | string | character |
| 180 |  | Set value of variable 'A' to player-initiator slot | string | nochange |
| 181 |  | Set value of variable 'A' to player-killer slot | string | nochange |
| 182 |  | Set value of variable 'A' to login name of player-killer | string | nochange |
| 183 |  | Set value of variable 'A' to displayed name of player-killer | string | nochange |
| 184 |  | Set value of variable 'A' to login name of player with slot 'B' | string | string |
| 185 |  | Set value of variable 'A' to displayed name of player with slot 'B' | string | string |
| 186 |  | Set value of variable 'A' to team ID of player with slot 'B' | string | string |
| 187 |  | Set value of variable 'A' to login name of player with slot-value of variable 'B' | string | string |
| 188 |  | Set value of variable 'A' to displayed name of player with slot-value of variable 'B' | string | string |
| 189 |  | Set value of variable 'A' to team ID of player with slot-value of variable 'B' | string | string |
| 204 |  | Set value of variable 'A' to result of asin function with value of variable 'B' as parameter | string | string |
| 205 |  | Set value of variable 'A' to result of acos function with value of variable 'B' as parameter | string | string |
| 206 |  | Set value of variable 'A' to result of atan2 function with values of variables 'A' and 'B' as parameters | string | string |
| 223 |  | Synchronize value of variable 'A' through overriding value for all connected players (requires Var Sync engine mark) | string | nochange |
| 224 |  | Synchronize value of variable 'A' through keeping defined value (requires Var Sync engine mark) | string | nochange |
| 225 |  | Synchronize value of variable 'A' through keeping maximum value (requires Var Sync engine mark) | string | nochange |
| 226 |  | Synchronize value of variable 'A' through keeping minimum value (requires Var Sync engine mark) | string | nochange |
| 227 |  | Synchronize value of variable 'A' through keeping longest String value (requires Var Sync engine mark) | string | nochange |
| 235 |  | Set variable 'A' value to of projectile power (this trigger should receive damage from Movable) | string | nochange |
| 236 |  | Subtract projectile power from value of variable 'A' (this trigger should receive damage from Movable) | string | nochange |
| 247 |  | Save horizontal movement intention of character 'B' to variable 'A' | string | character |
| 248 |  | Save vertical movement intention of character 'B' to variable 'A' | string | character |
| 249 |  | Save shoot intention of character 'B' to variable 'A' | string | character |
| 252 |  | Rotate decoration to angle-value of variable 'B' (in degrees) | decor | string |
| 253 |  | Rotate decoration to angle-value 'B' (in degrees) | decor | string |
| 257 |  | Rotate decoration to angle-value of variable 'B' (in radians) | decor | string |
| 258 |  | Rotate decoration to angle-value 'B' (in radians) | decor | string |
| 263 |  | Save energy value to variable 'A' (gameplay) | string | nochange |
| 264 |  | Load energy value from variable 'A' (gameplay) | string | nochange |
| 265 |  | Set max energy value to value of variable 'A' (gameplay) | string | nochange |
| 266 |  | Save current AI difficulty to variable 'A' (easy = 1, normal = 2, hard = 3) | string | nochange |
| 277 |  | Save current number of loaded custom images to variable 'A' | string | nochange |
| 278 |  | Save number of expected custom images on current level to variable 'A' | string | nochange |
| 280 |  | Set variable 'A' to 1 if compromised song should play (if non-dying enemy is hunting player or player is hunting non-dying enemy). Sets to value 0.5 in case if song should be played more quietly (if there are non-dying enemies within radius of 400px). In else case sets to 0 | string | nochange |
| 290 |  | Set Character 'A' color pattern to string-value of variable 'B' (4 small letters for each limb, each represents first symbol of color in lowercase) | character | string |
| 294 | VarSetValueOfVarNamed | Set value of variable 'A' to value of variable with name of string-value of variable 'B' | string | string |
| 295 | VarSetStringReplaceVarWithVarValues | Set string-value of variable 'A' to string-value 'B' while replacing all variable names found in string-value with corresponding variable values | string | string |
| 296 |  | Override existing Gun 'A' with a new gun with model by string-value of variable 'B' | gun | string |
| 299 |  | Set decoration 'A' visibility multiplier to value of variable 'B' (0...1) | decor | string |
| 302 |  | Set Gun 'A' projectile scale to value of variable 'B' | gun | string |
| 314 |  | Set variable 'A' to 1 if Character 'B' is dying (variable 'A' becomes 0 in else case) | string | character |
| 315 |  | Set variable 'A' to 1 if Character-initiator is dying (variable 'A' becomes 0 in else case) | string | nochange |
| 316 |  | Set variable 'A' to 1 if Character-killer is dying (variable 'A' becomes 0 in else case) | string | nochange |
| 325 |  | Replace variables with their values in string-value of variable 'B' and save result to variable 'A' | string | string |
| 326 |  | Replace variables with their values in string-value 'B' and save result to variable 'A' | string | string |
| 327 |  | Set variable 'A' value to random number with floating point in range 0..X, where X is value of variable 'B' | string | string |
| 328 |  | Set variable 'A' value to random integer number in range 0..X-1, where X is value of variable 'B' | string | string |
| 329 |  | Set interface visibility multiplier to value of variable 'A' and cursor visibility multiplier to value of variable 'B' | string | string |
| 331 |  | Set variable 'A' string-value to string-value of ''Gameplay modifications'' field from match starting screen | string | nochange |
| 332 |  | Set variable 'A' to value 1 if Gun 'B' is not in owner's active slot, set to value 0 in else case | string | gun |
| 333 |  | Set variable 'A' to value 1 if Gun 'B' has owner, set to value 0 in else case | string | gun |
| 334 |  | Set variable 'A' to number of frames passed since last attack of Gun 'B' | string | gun |
| 335 |  | Set variable 'A' to value 1 if Gun 'B' is ready to fire, set to value 0 in else case | string | gun |
| 336 |  | Set variable 'A' to X direction of Gun 'B' | string | gun |
| 337 |  | Set variable 'A' to X direction of Character 'B' | string | character |
| 342 |  | Set value of variable in variable 'A' to value of variable 'B' | string | string |
| 344 |  | Set Variable 'A' to value of degrees rotation of Decoration 'B' | string | decor |
| 347 |  | Change Character skin of slot-value variable 'A' to value of variable 'B' | string | string |
| 348 |  | Set variable 'A' to time (in milliseconds) since START of game | string | nochange |
| 356 |  | Change head model of Character slot-value variable 'A' to value of variable 'B' | string | string |
| 357 |  | Change body model of Character slot-value variable 'A' to value of variable 'B' | string | string |
| 358 |  | Change arms model of Character slot-value variable 'A' to value of variable 'B' | string | string |
| 359 |  | Set Character slot-value variable 'A' color pattern to value of variable 'B' (4 small letters for each body sections, each represents first symbol of color in lowercase. - disables color change for specific section) | string | string |
| 360 |  | Change legs model of Character slot-value variable 'A' to value of variable 'B' | string | string |
| 361 |  | Skip next trigger action if value of variable 'A' is equal to the value of variable 'B' | string | string |
| 364 |  | Skip next trigger action if value of variable 'A' is greater than value of variable 'B' | string | string |
| 365 |  | Skip next trigger action if value of variable 'A' is less than value of variable 'B' | string | string |
| 366 |  | Change Speed of Movable 'A' to variable 'B' | door | string |
| 367 |  | Set the frequency of calls of Timer 'A' to variable 'B' | timer | string |
| 368 |  | Set Character 'A' zoom to variable 'B' | character | string |
| 369 |  | Set variable 'A' to zoom of game camera | string | nochange |
| 370 |  | Set Character slot-value variable 'A' zoom to variable 'B' | string | string |
| 371 |  | Move Character 'A' to random place in region 'B' | character | region |
| 372 |  | Remove beginning 'A' characters from variable 'B' (-/+) | string | string |
| 373 |  | Set variable 'A' to degrees between regions in 'B' (seperated by commas) | string | string |
| 376 |  | Set variable 'A' to stability of Character 'B' | string | character |
| 393 |  | Set variable 'A' to value of time in miliseconds (since January 1 1970) | string | nochange |
| 394 |  | Set variable 'A' to value of time between January 1 1970 and variable 'B' (year, month, day) in miliseconds | string | string |
| 397 |  | Set variable 'A' to value of 1 if mouse is held down and to 0 if else case | string | nochange |
| 398 |  | Set variable 'A' to distance between 2 regions in 'B' (separated by commas) | string | string |
| 400 |  | Add ghost effect to Character slot-value variable 'A' | string | nochange |
| 401 |  | Remove ghost effect from Character slot-value variable 'A' | string | nochange |
| 404 |  | Set Character slot-value variable 'A' properties to properties of Character slot-value variable 'B' (hitpoints, max hitpoints, mobility, voice, model) | string | string |
| 410 |  | Set variable 'A' to active gun model of Character 'B' | string | character |
| 425 |  | Set variable 'A' value to X speed of Character 'B' | string | character |
| 426 |  | Set variable 'A' value to Y speed of Character 'B' | string | character |
| 427 |  | Set variable 'A' value to X speed of Character slot-value variable 'B' | string | string |
| 428 |  | Set variable 'A' value to Y speed of Character slot-value variable 'B' | string | string |
| 431 |  | Set X speed of Character slot-value variable 'A' to value of variable 'B' | string | string |
| 432 |  | Set Y speed of Character slot-value variable 'A' to value of variable 'B' | string | string |
| 434 |  | Set variable 'A' value to speed of Character 'B' | string | character |
| 435 |  | Set variable 'A' value to speed of Character slot-value variable 'B' | string | string |
| 436 |  | Set variable 'A' to map ID of current game | string | nochange |
| 448 |  | Set Character slot-value variable 'A' Health bar GUI opacity to value 'B' | string | value |
| 449 |  | Set Character slot-value variable 'A' Health bar GUI opacity to variable 'B' | string | string |
| 452 |  | Change Character slot-value variable 'A' sword life to variable 'B' | string | string |
| 463 |  | Set variable 'A' to value of chatting status (0 = off, 1 = chat, 2 = team chat) | string | nochange |
| 465 |  | Set Character slot-value variable 'A' current and max hit points to variable 'B' | string | string |
| 471 |  | Set variable 'A' to rotation of Gun 'B' | string | gun |
| 472 |  | Set variable 'A' to X scale of Gun 'B' | string | gun |
| 474 |  | Set variable 'A' to Y scale of Gun 'B' | string | gun |
| 509 |  | Set variable 'A' to length of Gun 'B' | string | gun |
| 510 |  | Set variable 'A' to value of current framerate | string | nochange |
| 531 |  | Save inventory info of Character slot-value variable 'B' to variable 'A' | string | string |
| 532 |  | Spawn all weapons stored in variable 'A' at position of Character slot-value variable 'B' | string | string |
| 544 |  | Set variable 'A' to 1 if Character slot-value variable 'B' is dying | string | string |
