[English](README.md) | **中文**

# Sad Level Editor

给 AI agent 用的技能，用来编写、修改和修复 **Sad Burst 2 / Plazma Burst 2** 的地图 XML。

你只需要地图编辑器，以及一个能读这个文件夹的 agent。不需要游戏代码。

Agent 从 [SKILL.md](SKILL.md) 进入，只查这次用到的参数，然后给你一份能在编辑器里打开的 XML。说明用你正在用的语言。类名、字段名、动作 ID、引擎标记保持编辑器里的英文。

## 使用 / 安装方式

两种都可以。安装之后，以后提到做地图，agent 会自己用上这套说明。下载下来让它读，则不用安装，但每次做地图都要让它读这个文件夹。

### 安装为技能

文件夹名是 `Sad-Level-Editor-Skills`，`SKILL.md` 直接放在里面。不要再套一层同名文件夹。`SKILL.md` 里的技能 id 是 `sad-level-editor-skills`。Windows 上 `~` 就是 `%USERPROFILE%`。如果列表里没有这项技能，重新打开 agent。

```bash
git clone https://github.com/Evelyndesu/Sad-Level-Editor-Skills.git Sad-Level-Editor-Skills
```

这台电脑上的所有项目：

- `~/.agents/skills/Sad-Level-Editor-Skills/`
- `~/.cursor/skills/Sad-Level-Editor-Skills/`
- `~/.claude/skills/Sad-Level-Editor-Skills/`

仅当前项目：

- `.agents/skills/Sad-Level-Editor-Skills/`
- `.cursor/skills/Sad-Level-Editor-Skills/`
- `.claude/skills/Sad-Level-Editor-Skills/`

可以发给 AI：

```text
帮我安装这个 agent 技能：
https://github.com/Evelyndesu/Sad-Level-Editor-Skills

克隆之后，SKILL.md 要直接放在名为 Sad-Level-Editor-Skills 的文件夹里。把这个文件夹放到你在这台电脑上为所有项目加载技能的位置。不要在 SKILL.md 外面再套一层文件夹。安装好后，告诉我你放到了哪个路径。
```

会读取 [AGENTS.md](AGENTS.md) 的 agent，在把本仓库当作当前项目打开时，会从那里被指到 [SKILL.md](SKILL.md)。

### 下载后直接让 AI 读

不必安装。把仓库下载或克隆下来，让 agent 从 `SKILL.md` 开始读。这次对话里如果没有打开这个文件夹，下次做地图还要再告诉它读一次。打不开链接时，把链接换成你电脑上的文件夹路径。

```text
不要安装。请直接阅读这份技能并按它做：
https://github.com/Evelyndesu/Sad-Level-Editor-Skills

从 SKILL.md 开始。只打开它让你打开的工作流和参数表。用我正在用的语言说明。类名、字段名、动作 ID、引擎标记保持编辑器里的英文。

我的要求：
```

## 怎么让它做地图

上面两种方式都可以，然后用平时说话的方式提要求，例如：

- 做一张左右对称的死亡竞赛图，两边各有一个出生点，中间有一座电梯。
- 加一扇门：玩家走进区域就打开，过一会儿再关上。
- 这张图的触发器指向一个不存在的 uid，帮我修好。
- `hero2_guns` 这个引擎标记是干什么的？

## 仓库里有什么

| 路径 | 内容 |
| --- | --- |
| [SKILL.md](SKILL.md) | Agent 的入口 |
| [AGENTS.md](AGENTS.md) | 给会读这个文件的 agent 的简短入口 |
| [workflows/](workflows/) | 生成、修改、修复的步骤 |
| [scripts/validate-level.js](scripts/validate-level.js) | 检查地图。运行 `node scripts/validate-level.js 地图.xml`。不要阅读 `reference/schema.json` |
| [reference/](reference/) | 地图格式、实体、532 个触发器动作、枚举、引擎标记 |
| [examples/minimal-room.xml](examples/minimal-room.xml) | 一间小屋：一个玩家、一个敌人、一个触发器 |
| [examples/eric_gurt-level25_mp.xml](examples/eric_gurt-level25_mp.xml) | 左右对称的死亡竞赛图 |
| [examples/campaign/](examples/campaign/) | 战役关卡 `c0a` 到 `c41a`，用来参考 |

战役关是一行一个标签，有的文件很长。Agent 应按 [reference/examples.md](reference/examples.md) 只搜索其中一关的 `uid` 或 `actions_N_type`，不要整夹或整关读进来。

写完或改完地图后，运行 `node scripts/validate-level.js 地图.xml`。新图还有 `error` 或 `warn` 就不算做完。旧图里的 `error` 必须修好。旧写法的 `warn` 先说明；没要求把旧图改成现在的写法时，就留着。

示例图里有旧写法，包括重复的 `uid` 和用数字当引用。新图里，凡是会被别的对象指到的东西，都要有唯一的 `#uid`。

## 参数表

`reference/` 里标了「参数表，不要手改」的文件不要改。那是编辑器的参数清单：实体字段、触发器动作 ID、武器和角色的取值，以及 `inf` 引擎标记。`reference/schema.json` 只给 `scripts/validate-level.js` 用。重新导出参数表后，把 `reference/enums/engine-mark.md` 开头指向 `reference/engine.md` 的两行补回去。
