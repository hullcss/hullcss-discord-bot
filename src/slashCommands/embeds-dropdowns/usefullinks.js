const {
	SlashCommandBuilder,
	PermissionFlagsBits,
	EmbedBuilder,
} = require('discord.js');

module.exports = {
	...new SlashCommandBuilder()
		.setName('usefullinks')
		.setDescription('Create the useful links embed')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */
	run: async (client, interaction) => {
		const embed = new EmbedBuilder()
			.setColor(0x3fb618)
			.setFooter({ text: `Called By: ${interaction.user.tag}` })
			.setTimestamp()
			.setTitle('Useful Links!')
			.setDescription(
				`Below are a some useful links to communities and resources.`
			)
			.setThumbnail('https://i.imgur.com/ww6wKwJ.png')
			.addFields(
				{
					name: 'Free Stuff',
					value: `- GitHub Student Developer Pack: https://education.github.com/pack\r\n
					- Microsoft Azure Dev Tools for Teaching: https://azure.microsoft.com/en-gb/free/students/\r\n
					- JetBrains IDE Package: https://www.jetbrains.com/community/education/#students\r\n`,
				},
				{
					name: 'University of Hull Specifics',
					value: `- Freeside Student Resource List: https://github.com/FreesideHull/StudentResources\r\n
							- Hull University Buddy: https://chrome.google.com/webstore/detail/hull-university-buddy/jnppmhcoifoohipnnhdabhnolnilncbk\r\n`,
				},
				{
					name: `Other Communities`,
					value: `- Freeside: https://freeside.co.uk/ \r\n
					- Unofficial University of Hull Discord Server: https://discord.gg/rm7r5wbYq2 \r\n
					- The Programmers Hangout: https://discord.gg/programming`,
				},
				{
					name: 'Want to add a resource?',
					value:
						'Message an <@&427866208726155274> with your suggestion for consideration!',
				}
			);

		interaction.channel.send({ embeds: [embed] });
		interaction.reply({ content: 'Embed sent.', ephemeral: true });
	},
};
