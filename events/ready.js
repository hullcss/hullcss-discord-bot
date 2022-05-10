const client = require("../index");


client.on('ready', () => {
    console.log('HullCSS is online')
    client.user.setActivity(`-help | hullcss.org` , {type:"WATCHING"})



    const guild = client.guilds.cache.get('427865794467069962');
    setInterval(() =>{
        const memberCount = guild.members.cache.size;
        const channel = guild.channels.cache.get('906167542249308160');
        channel.setName(`Discord Members: ${memberCount.toLocaleString()}`);
    }, 600000);

   })
