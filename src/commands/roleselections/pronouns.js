const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
	name: 'pronouns',
	aliases: [''],
	/**
	 *
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (client, message) => {
		const row2 = new MessageActionRow().addComponents(
			new MessageSelectMenu()
				.setCustomId('pronounSelect')
				.setPlaceholder('Select your pronouns')
				.setMinValues(0)
				.setMaxValues(7)
				.addOptions([
					{
						label: 'He/Him',
						value: 'HeHim',
					},
					{
						label: 'He/They',
						value: 'HeThey',
					},
					{
						label: 'She/Her',
						value: 'SheHer',
					},
					{
						label: 'She/They',
						value: 'SheThey',
					},
					{
						label: 'They/Them',
						value: 'TheyThem',
					},
					{
						label: 'Any Pronouns',
						value: 'Any',
					},
					{
						label: 'Ask My Pronouns',
						value: 'Ask',
					},
				])
		);

		message.channel.send({
			content: 'Select your pronouns.',
			components: [row2],
		});
	},
};
