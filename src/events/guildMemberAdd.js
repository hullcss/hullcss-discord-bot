const client = require('../index');

client.on('guildMemberAdd', async (guildmember) => {
	const welcomechannel = client.channels.cache.get('427875246801027072');
	const guild = client.guilds.cache.get('427865794467069962');
	const roleChannel = client.channels.cache.find(
		(channel) => channel.name === 'roles'
	);
	const introductionChannel = client.channels.cache.find(
		(channel) => channel.name === 'introductions'
	);
	const paidMemberRequestChannel = client.channels.cache.find(
		(channel) => channel.name === 'paid-member-request'
	);

	if (guild == guildmember.guild.id) {
		welcomechannel.send({
			content: `Hi **${guildmember.user}**, welcome to the server! Please be sure to fill out your roles in ${roleChannel}, submit a paid member request in ${paidMemberRequestChannel} and introduce yourself in ${introductionChannel}`,
		});
	}
});
