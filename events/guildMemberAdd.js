const { Permissions } = require('discord.js');
const client = require("../index");
const discord = require('discord.js');


client.on('guildMemberAdd', async guildmember =>{
    const guild = client.guilds.cache.get('427865794467069962');
    const welcomechannel =client.channels.cache.get('427875246801027072')
    if(guild == guildmember.guild.id )
    {
        welcomechannel.send(`<:hi:858281121611513897> Welcome! **${guildmember.user}** has just joined the server! Grab some roles from: <#427873938333499404> and let us know who you are within <#427874873898041346>`);
    
    } 

})