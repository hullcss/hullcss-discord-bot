const { Permissions } = require('discord.js');
const client = require("../index");
const discord = require('discord.js');


client.on('guildScheduledEventCreate', async guildScheduledEvent =>{
    const guild = client.guilds.cache.get('427865794467069962');
    const channel = client.channels.cache.get('973686987787751534')
    const embed = new discord.MessageEmbed()
    .setColor('GREEN')
    .setFooter(`Created by ${guildScheduledEvent.creator}`)
    .setTimestamp()
    .setTitle("New Event")
    .addField('Name:', `${guildScheduledEvent.name}`)
    .addField('Description', `${guildScheduledEvent.description}`)
    .addField('Location', `Please check the URL linked.`)
    .addField('Start Date and Time', ` ${guildScheduledEvent.scheduledStartAt}`, true)
    .addField('End Date and Time', `${guildScheduledEvent.scheduledEndAt}`, true)
    .addField('InviteURL', `${guildScheduledEvent.url}`)
    channel.send({ embeds: [embed] })
})