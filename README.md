# HullCSS Discord Bot
> This bot is a multipurpose discord bot for The Hull Computer Science Society Discord server. 

This bot features multiple command types from:
* Admin
* Embeds
* Fun
* General

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
- Create a `.env` file with the following lines:
```
DISCORD_TOKEN = <Discord Token>
PREFIX = !
```
- Run `npm i`
- Run node .

---
## Contributions
While this bot is maintained by [Kieran](https://github.com/KieranRobson), contributors are welcome! 
- Contribution guidelines are coming soon.