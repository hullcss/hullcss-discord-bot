<center>

![image](/images/icon_2.png)

# HullCSS Discord Bot

This bot is a multipurpose discord bot for The Hull Computer Science Society Discord server. 

<img src="https://img.shields.io/badge/discord.js-v13-7354F6?logo=discord&logoColor=white&style=flat-square" />

</center>

This bot features multiple command types from:
* Admin
* Embeds
* Fun
* General
* Slash Commands

Alongside commands, this bot also features:
* Auto threading in `#coursework-help` channel to keep it clean
* Auto embedding of events for information and archiving
* Select menu role system within `#roles`
* Rule agreement button embed with `#code-of-conduct`

---
## Installation 
**This is a private bot used for a specific purpose within a specific discord server however if you do want to run the bot for testing purposes or deploy it to a new location. Follow the instructions below.** 

### 🐋 Docker 
Due to the [Publish.yml](.github/workflows/publish.yml) workflow, the newest build will automatically be pushed to dockerhub.

```docker
docker run -d \
--name=hullcss \
-p 6001:6001 \
-e DISCORD_TOKEN='INSERT DISCORD TOKEN' \
-e PREFIX='!' \
--restart unless-stopped \
kieranr27/hullcss:latest
```

Using a tool like [Ouroboros](https://github.com/pyouroboros/ouroboros), you can automatically update containers without the need for restarts.

### 👷 Manual
- Clone the repo 
- Remove the `.template` from `.env.template`
- Add Discord Bot Token where `DISCORD_TOKEN` is within the `.env` file 
- Run `npm i`
- Run `node .`

---
## Contributions
While this bot is maintained by [Kieran](https://github.com/KieranRobson), contributors are welcome! 
- Contribution guidelines are coming soon.