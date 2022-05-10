const discord = require("discord.js");

module.exports = {
    name: "help",
    aliases: [''],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

        if(!args[0]){
            const embed = new discord.MessageEmbed()
            .setTitle("HullCSS Help")
            .setDescription("You can use `-help <category>` to get additional commands within a specfic category")
            .setColor('GREEN')
    
            .addField('❓`-help`','This Command', true)
            .addField('🎉`-help admin`','Displays Admin Commands!', true)
            .addField('ℹ️ `-help general`', 'Displays General Commands!', true)
            message.channel.send({ embeds: [embed] });
        }
    
        if(args[0] === 'admin'){
            const embed = new discord.MessageEmbed()
            .setTitle("Admin Commands")
            .setColor('GREEN')

            message.channel.send({ embeds: [embed] });
        }
    

    
        if(args[0] === 'general'){
            const embed = new discord.MessageEmbed()
            .setTitle("General Comamnds")
            .setColor('GREEN')

            .addField('-buy', 'Sends a link to purchase membership')
            .addField('-links', 'Get all the links')


            message.channel.send({ embeds: [embed] });
        }

    }
}



