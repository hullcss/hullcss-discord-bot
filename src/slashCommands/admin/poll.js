const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const Polls = require('discord-polls');

module.exports = {
	...new SlashCommandBuilder()
		.setName('start-poll')
		.setDescription('Starts a poll')
		.addStringOption((option) =>
			option
				.setName('title')
				.setDescription('The title of the poll.')
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName('choices')
				.setDescription(
					'The choices of the poll. *Separate each choice by a dash (-)*'
				)
				.setRequired(true)
		)
		.addIntegerOption((option) =>
			option
				.setName('duration')
				.setDescription('The duration of the poll *Time is in seconds*')
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName('color')
				.setDescription("The color of the poll's embed. *Hex format: #000000*")
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName('emojis')
				.setDescription(
					'The emojis of the poll. *Separate each emoji by a dash (-)*'
				)
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName('force-end-emoji')
				.setDescription('The emoji to force end the poll.')
				.setRequired(true)
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

	run: async (client, interaction) => {
		// Get the user input from each option.
		const title = interaction.options.getString('title');
		const choices = interaction.options.getString('choices');
		const duration = interaction.options.getInteger('duration');
		const color = interaction.options.getString('color');
		const emojis = interaction.options.getString('emojis');
		const forceEndEmoji = interaction.options.getString('force-end-emoji');

		const choicesArray = choices.split('-').map((choice) => choice.trim()); // Map the choices to an array.
		const emojisArray = emojis.split('-').map((emoji) => emoji.trim()); // Map the emojis to an array.

		// call the startPoll method
		Polls.startPoll(
			interaction,
			title,
			choicesArray,
			duration,
			color,
			emojisArray,
			forceEndEmoji
		);
	},
};
