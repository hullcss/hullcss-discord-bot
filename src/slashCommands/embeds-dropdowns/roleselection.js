const {
	SlashCommandBuilder,
	PermissionFlagsBits,
	ActionRowBuilder,
	StringSelectMenuBuilder,
	StringSelectMenuOptionBuilder,
} = require('discord.js');

module.exports = {
	...new SlashCommandBuilder()
		.setName('rolesdropdown')
		.setDescription('Create the role dropdowns')
		.setDefaultMemberPermissions(
			PermissionFlagsBits.Administrator
		),

	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */

	run: async (client, interaction) => {
		const row1 = new ActionRowBuilder().addComponents(
			new StringSelectMenuBuilder()
				.setCustomId('yearSelect')
				.setPlaceholder('Select your current year')
				.addOptions(
					new StringSelectMenuOptionBuilder()
						.setLabel('Foundation')
						.setValue('0'),
					new StringSelectMenuOptionBuilder()
						.setLabel('First Year')
						.setValue('1'),
					new StringSelectMenuOptionBuilder()
						.setLabel('Second Year')
						.setValue('2'),
					new StringSelectMenuOptionBuilder()
						.setLabel('Year In Industry')
						.setValue('3'),
					new StringSelectMenuOptionBuilder()
						.setLabel('Third Year')
						.setValue('4'),
					new StringSelectMenuOptionBuilder().setLabel('Masters').setValue('5'),
					new StringSelectMenuOptionBuilder().setLabel('PhD').setValue('6'),
					new StringSelectMenuOptionBuilder().setLabel('Graduate').setValue('7')
				)
		);

		const row2 = new ActionRowBuilder().addComponents(
			new StringSelectMenuBuilder()
				.setCustomId('pronounSelect')
				.setPlaceholder('Select your pronouns')
				.addOptions(
					new StringSelectMenuOptionBuilder()
						.setLabel('He/Him')
						.setValue('HeHim'),
					new StringSelectMenuOptionBuilder()
						.setLabel('He/They')
						.setValue('HeThey'),
					new StringSelectMenuOptionBuilder()
						.setLabel('She/Her')
						.setValue('SheHers'),
					new StringSelectMenuOptionBuilder()
						.setLabel('She/They')
						.setValue('SheThey'),
					new StringSelectMenuOptionBuilder()
						.setLabel('They/Them')
						.setValue('TheyThem'),
					new StringSelectMenuOptionBuilder()
						.setLabel('Ask My Pronouns')
						.setValue('Ask'),
					new StringSelectMenuOptionBuilder()
						.setLabel('Any Pronouns')
						.setValue('Any')
				)
		);

		const row3 = new ActionRowBuilder().addComponents(
			new StringSelectMenuBuilder()
				.setCustomId('bcsSelect')
				.setPlaceholder('Select your BCS status')
				.addOptions(
					new StringSelectMenuOptionBuilder()
						.setLabel('Student Member')
						.setValue('bcsStudent'),
					new StringSelectMenuOptionBuilder()
						.setLabel('Associate Member')
						.setValue('bcsASS'),
					new StringSelectMenuOptionBuilder()
						.setLabel('Professional Member')
						.setValue('bcsProf'),
					new StringSelectMenuOptionBuilder()
						.setLabel('Fellow')
						.setValue('bcsFellow')
				)
		);

		const row4 = new ActionRowBuilder().addComponents(
			new StringSelectMenuBuilder()
				.setCustomId('miscSelect')
				.setPlaceholder('Select your misc roles')
				.setMinValues(0)
				.setMaxValues(2)
				.addOptions(
					new StringSelectMenuOptionBuilder()
						.setLabel('Events Ping')
						.setDescription('Get notified of events')
						.setValue('events'),
					new StringSelectMenuOptionBuilder()
						.setLabel('Coursework Help Ping')
						.setDescription(
							'Be notified of coursework help within the coursework forum'
						)
						.setValue('ACWPing')
				)
		);

		interaction.channel.send({
			content: 'Select your year.',
			components: [row1],
		});
		interaction.channel.send({
			content: 'Select your pronouns.',
			components: [row2],
		});
		interaction.channel.send({
			content: 'Select your BCS status.',
			components: [row3],
		});
		interaction.channel.send({
			content: 'Select your misc roles.',
			components: [row4],
		});

		interaction.reply({ content: 'Dropdowns sent sent.', ephemeral: true });
	},
};
