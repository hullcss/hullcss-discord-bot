const { Permissions } = require('discord.js');
const client = require("../index");
const discord = require('discord.js');


client.on('guildScheduledEventCreate', async guildScheduledEvent =>{
    const channel = client.channels.cache.get('973686987787751534')
    const embed = new discord.MessageEmbed()
    .setColor('GREEN')
    .setFooter(`Created by ${guildScheduledEvent.creator.tag}`)
    .setTimestamp()
    .setTitle("New Event")
    .setImage(guildScheduledEvent.image)
    .addField('Name:', `${guildScheduledEvent.name}`)
    .addField('Description', `${guildScheduledEvent.description}`)
    .addField('Location', `Please check the URL linked.`)
    .addField('Start Date and Time', ` ${guildScheduledEvent.scheduledStartAt.toLocaleDateString("en-UK")}`, true)
    if(guildScheduledEvent.scheduledEndAt !== null)
    {
        embed.addField('End Date and Time', `${guildScheduledEvent.scheduledEndAt.toLocaleDateString("en-UK")}`, true)
    }
    embed.addField('InviteURL', `${guildScheduledEvent.url}`)
    channel.send({ embeds: [embed] })
})