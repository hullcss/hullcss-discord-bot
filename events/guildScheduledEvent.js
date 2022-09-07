const client = require("../index");
const { MessageEmbed } = require('discord.js');
const { time } = require("@discordjs/builders");

client.on('guildScheduledEventCreate', async guildScheduledEvent =>{
    const channel = client.channels.cache.get('973686987787751534')
    const embed = new MessageEmbed()
    .setTitle(guildScheduledEvent.name)
    .setDescription(guildScheduledEvent.description)
    .setColor('GREEN')
    .setFooter({text: `Created by ${guildScheduledEvent.creator.tag}`})
    .setTimestamp()
    .setImage(`https://cdn.discordapp.com/guild-events/${guildScheduledEvent.id}/${guildScheduledEvent.image}.png`)

    if(guildScheduledEvent.entityType !== 'EXTERNAL')
    {
        embed.addField('Location', `${guildScheduledEvent.channel.name} - [Link](https://discordapp.com/channels/427865794467069962/${guildScheduledEvent.channelId})`)
    }
    else
    { 
        embed.addField('Location', `External - ${guildScheduledEvent.entityMetadata.location}`)
    }

    embed.addField('Start Date and Time', `${guildScheduledEvent.scheduledStartAt ? time(guildScheduledEvent.scheduledStartAt, "F") : "Unknown"}`, true)
    if(guildScheduledEvent.scheduledEndAt !== null)
    {
        embed.addField('End Date and Time', `${guildScheduledEvent.scheduledEndAt ? time(guildScheduledEvent.scheduledEndAt, "F") : "Unknown"}`, true)
    }
    
    embed.addField('InviteURL', `${guildScheduledEvent.url}`)

    channel.send({ embeds: [embed]})
})