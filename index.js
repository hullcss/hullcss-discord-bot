const config = require("./config.json"); 
const { Client, Collection } = require("discord.js");



const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_SCHEDULED_EVENTS"],
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
//client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(config.token);