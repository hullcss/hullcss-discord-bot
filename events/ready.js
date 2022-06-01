const client = require("../index");
const discord = require("discord.js")


client.on('ready', () => {
    client.user.setActivity(`!help | hullcss.org` , {type:"WATCHING"})
    console.log("hullcss is ready")
    /*
    setInterval(() =>{
        const memberCount = client.guilds.cache.get('427865794467069962').memberCount
        const channel = client.channels.cache.get('906167542249308160');
        channel.setName(`Discord Members: ${memberCount.toLocaleString()}`);
    }, 600000);

    const courseworkhelpchannel = client.channels.cache.get('427867128847138816')
    setInterval(() =>{
        const embed = new discord.MessageEmbed()
        .setColor('GREEN')
        .setFooter(`Sent every 24 hours`)
        .setTimestamp()
        .setTitle("Reminder")
        .setDescription(`As a reminder that this is a community help channel. Here are some rules to follow before using this channel.`)
        .addField('Code Rules', 'Please keep all code relevevant and short to prevent getting too much help. This channel is to get help with coursework, not for members to do it for you.')
        .addField('Code Sharing', 'For shorter pieces of code please use discord in built code blocks. For larger pieces, please use a thid party code sharing site.')
        .addField('Canvas', 'The best place to get help will always be by asking the lecturer. By using the Canvas discussion forum, this means that you will get direct help from the module team and others studying the module.')
        .addField('Pingable Role', 'There is a pingable role for you to ping helpful people. Please don`t overuse it.')
        courseworkhelpchannel.send({ embeds: [embed] });
    }, 604800000);
    */
})
