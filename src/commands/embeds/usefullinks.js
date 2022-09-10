const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'usefullinks',
	aliases: [''],
	/**
	 *
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (client, message) => {
		const embed = new MessageEmbed()
			.setColor('GREEN')
			.setFooter({ text: `Called By: ${message.author.tag}` })
			.setTimestamp()
			.setTitle('Useful Links!')
			.setDescription(
				`Below are a some useful links to communities and resources.`
			)
			.setThumbnail('https://i.imgur.com/ww6wKwJ.png')

			.addField(
				'Free Stuff',
				`
            - GitHub Student Developer Pack: https://education.github.com/pack\r\n
            - Microsoft Azure Dev Tools for Teaching: https://azure.microsoft.com/en-gb/free/students/\r\n
            - Jetbrains IDE Package: https://www.jetbrains.com/community/education/#students\r\n`
			)

			.addField(
				'University of Hull Specific Features',
				`
            - Freeside Student Resource List: https://github.com/FreesideHull/StudentResources\r\n
            - Hull University Buddy: https://chrome.google.com/webstore/detail/hull-university-buddy/jnppmhcoifoohipnnhdabhnolnilncbk\r\n`
			)

			.addField(
				'Other Communities',
				`
            - Freeside: https://freeside.co.uk/\r\n
            - Unofficial University of Hull Discord Server: https://discord.gg/rm7r5wbYq2\r\n
            - The Programmer's Hangout: https://discord.gg/programming\r\n`
			)

			.addField(
				`Want to add a resource?`,
				`Message an <@&427866208726155274> with your suggestion for consideration!`
			);

		message.channel.send({ embeds: [embed] });
	},
};
