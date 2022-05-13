const discord = require("discord.js");

module.exports = {
    name: "gorb",
    aliases: [''],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        
        if(!args[0]){
            message.channel.send({ files: ['./images/gorb.jpg'] })
        }
        if(args[0] === 'cs'){
            message.channel.send({ files: ['./images/gorbcs.jpg'] })
        }

        if(args[0] === 'party'){
            message.channel.send({ files: ['./images/gorbcelebration.jpg'] })
        }
    },
};