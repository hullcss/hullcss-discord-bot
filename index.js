const config = require("./config.json"); 
const { Client, Collection } = require("discord.js");
const DiscordModal = require('discord-modal')
const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
DiscordModal(client)
//client.config = require("./config.json");

// Initializing the project
require("./handler")(client);






client.login(cprocess.env.DISCORD_TOKEN);