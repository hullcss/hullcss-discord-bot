const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	...new SlashCommandBuilder()
		.setName('nukepaid')
		.setDescription('Replaces paid member')
		.setDefaultMemberPermissions(
			PermissionFlagsBits.KickMembers || PermissionFlagsBits.BanMembers
		),

	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */

	run: async (client, interaction) => {
		await interaction.deferReply({
			ephemeral: true,
		});

		try {
			const role = interaction.guild.roles.cache.find(
				(r) => r.name === 'Paid Member'
			);

			interaction.guild.roles.create({
				name: role.name,
				color: role.color,
				hoist: role.hoist,
				position: role.position,
				permissions: role.permissions,
				mentionable: role.mentionable,
			});

			role.delete(role.id, 'The Nuke Paid Command Was Run. ');

			const channel = client.channels.cache.get('1143157359917682711');
			channel.setName(`Paid Members: 0`);

			const newRole = interaction.guild.roles.cache.find(
				(r) => r.name === 'Paid Member'
			);
			interaction.editReply(
				`Role has been replaced. The paid members counter has been reset to 0.\n\n The new role ID is: ${newRole.id}. Please pass this to Kieran.`,
				true
			);
		} catch (error) {
			interaction.editReply({
				content: error,
				ephemeral: true,
			});
		}
	},
};
