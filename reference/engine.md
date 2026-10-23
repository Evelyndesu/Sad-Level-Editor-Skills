<!-- 参数表，不要手改。 Parameter table. Do not edit by hand. -->

# 引擎标记 inf / Engine marks

类名是 `inf`。`mark` 决定这张图的全局规则，`forteam` 是这条规则的参数。类型为 `nochange` 时，`forteam` 没有菜单，按说明填数字或字符串；不需要参数时沿用存档里的 `0` 或 `-1`。

The class name is `inf`. `mark` chooses the global rule. `forteam` is that rule's parameter. When the type is `nochange`, there is no menu: follow the description and write a number or a string. If the rule needs no parameter, keep `0` or `-1` as in existing saves.

| mark | 说明 Description | forteam 类型 Type |
| --- | --- | --- |
| acidcolor | Use custom acid color # (hex color code) | string |
| acidtitle | Use custom acid title | string |
| casual | Enable casual mode | nochange |
| dm_max_guns_on_spawn | Define how many weapons can be randomly given to player in DM/TDM modes during respawn | value>=0+round1 |
| dm_slots_on_spawn | List of slots that can be randomly given to player in DM/TDM modes during respawn | string |
| fix_gun_desynchronization | Enable gun desynchronization fixes (MP only) | nochange |
| game2 | Alternative gameplay | nochange |
| gamescale | Change game scale | value>=0 |
| he_nades_count | Set start HE nades count (MP only) | value>=0+round1 |
| hero1_guns | Spawn marine weapons | nochange |
| hero2_guns | Spawn Proxy weapons | nochange |
| hero2_guns_nades | Spawn Proxy weapons (only nades) | nochange |
| hero2_guns_nonades | Spawn Proxy weapons (no nades) | nochange |
| level_errors | Enable level trigger error reporting | nochange |
| meat | Force ragdoll disappearment | nochange |
| naive_hit_confirmation | Enable naive hit confirmation (MP only) | nochange |
| no_auto_revive | Disable AI revive | nochange |
| no_dying_weapon_drop | Disallow enemies occasionally dropping weapons when dying (HTML5 port only) | nochange |
| no_light_break | Disallow lamp destruction and collisions | nochange |
| no_quick_save | Disallow manual quick saving on a level (HTML5 port only) | nochange |
| no_rail_bounce | Disable laser wall bounce (HTML5 port only) | nochange |
| no_unstable_weapon_drop | Disallow enemies occasionally dropping weapons when unstable (HTML5 port only) | nochange |
| nobase | Disable base noise | nochange |
| nopsi | Disable psi-swords | nochange |
| port_nades_count | Set start Port nades count (MP only) | value>=0+round1 |
| sh_nades_count | Set start Shield nades count (MP only) | value>=0+round1 |
| shadowmap_size | Shadowmap size | value>0+round1 |
| sky | Change sky | sky_model |
| snow | Enable snow on map | nochange |
| strict_casual | Enable strict casual mode | nochange |
| var_sync | Enable Var Sync trigger actions | nochange |
| watercolor | Use custom water color # (hex color code) | string |
| watertitle | Use custom water title | string |
