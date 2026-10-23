**English** | [中文](README.zh-CN.md)

# Sad Level Editor

An agent skill for writing, editing, and fixing **Sad Burst 2 / Plazma Burst 2** map XML.

You need the map editor and an agent that can read this folder. You do not need the game code.

The agent starts at [SKILL.md](SKILL.md), looks up only the parameters it needs, and gives you XML to open in the editor. It should explain the map in your language. Class names, field names, action IDs, and engine marks stay in the editor's English.

## Ways to use it

Either way works. Installing makes the agent pick this skill up on later map requests. Downloading and pointing the agent at the folder works for one conversation, without installing anything.

### Install it as a skill

`SKILL.md` must sit directly inside a folder named `Sad-Level-Editor-Skills`. Do not nest another folder around it. The skill id in `SKILL.md` is `sad-level-editor-skills`. On Windows, `~` is `%USERPROFILE%`. If the skill does not show up, restart the agent.

```bash
git clone https://github.com/Evelyndesu/Sad-Level-Editor-Skills.git Sad-Level-Editor-Skills
```

Every project on this computer:

- `~/.agents/skills/Sad-Level-Editor-Skills/`
- `~/.cursor/skills/Sad-Level-Editor-Skills/`
- `~/.claude/skills/Sad-Level-Editor-Skills/`

This project only:

- `.agents/skills/Sad-Level-Editor-Skills/`
- `.cursor/skills/Sad-Level-Editor-Skills/`
- `.claude/skills/Sad-Level-Editor-Skills/`

You can hand this to the agent:

```text
Install this agent skill for me:
https://github.com/Evelyndesu/Sad-Level-Editor-Skills

Clone it so SKILL.md is directly inside a folder named Sad-Level-Editor-Skills. Put that folder where you load skills for every project on this computer. Do not nest another folder around SKILL.md. When it is installed, tell me the path you used.
```

Agents that read [AGENTS.md](AGENTS.md) are pointed at [SKILL.md](SKILL.md) when this repository is the open project.

### Download it and let the agent read it

You do not have to install the skill. Download or clone the repository, then tell the agent to start at `SKILL.md`. Do this again each time you want a map, unless the folder is already open in that conversation. If the agent cannot open the link, replace it with the folder path on your computer.

```text
Do not install this. Read the skill and follow it:
https://github.com/Evelyndesu/Sad-Level-Editor-Skills

Start at SKILL.md. Open only the workflow and reference files it tells you to open. Explain in my language. Keep class names, field names, action IDs, and engine marks in the editor's English.

My request:
```

## Ask for a map

After either method above, ask in normal language. For example:

- Make a symmetric deathmatch map with a spawn on each side and a lift in the middle.
- Add a door that opens when the player walks into a region, then closes.
- This trigger points at a missing uid. Fix it.
- What does the engine mark `hero2_guns` do?

## What is in this repository

| Path | What it is |
| --- | --- |
| [SKILL.md](SKILL.md) | Entry point for the agent |
| [AGENTS.md](AGENTS.md) | Short pointer for agents that read this file |
| [workflows/](workflows/) | Steps to generate, edit, and repair |
| [scripts/validate-level.js](scripts/validate-level.js) | Checks a map. Run `node scripts/validate-level.js map.xml`. Do not read `reference/schema.json` |
| [reference/](reference/) | Map format, entities, 532 trigger actions, enums, engine marks |
| [examples/minimal-room.xml](examples/minimal-room.xml) | A small room: one player, one enemy, one trigger |
| [examples/eric_gurt-level25_mp.xml](examples/eric_gurt-level25_mp.xml) | A symmetric deathmatch map |
| [examples/campaign/](examples/campaign/) | Campaign levels `c0a` through `c41a`, for reference |

The campaign files are one tag per line, and some are long. The agent should search the one level named in [reference/examples.md](reference/examples.md) for a `uid` or `actions_N_type`, not read the whole folder or the whole level.

After writing or editing a map, run `node scripts/validate-level.js map.xml`. A new map is not done while the script reports an `error` or a `warn`. On an old map, every `error` must be fixed. Explain old-style `warn`s first, and leave them unless you asked to modernize the map.

Sample maps contain old habits, including repeated uids and numeric indexes. In a new map, every object that something else refers to needs a unique `#uid`.

## Parameter tables

Do not edit files under `reference/` that are marked as generated parameter tables. Those tables are the editor's parameter list: entity fields, trigger action IDs, weapon and character values, and `inf` engine marks. `reference/schema.json` is only for `scripts/validate-level.js`. After regenerating the tables, put back the two lines at the top of `reference/enums/engine-mark.md` that point at `reference/engine.md`.
