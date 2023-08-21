const client = require('../index');
const { ActivityType } = require('discord.js');

client.on('ready', () => {
	console.log('HullCSS is online');
	client.user.setActivity('HullCSS.org', { type: ActivityType.Custom });

	setInterval(() => {
		const { memberCount } = client.guilds.cache.get('427865794467069962');
		const channel = client.channels.cache.get('906167542249308160');
		channel.setName(`Discord Members: ${memberCount.toLocaleString()}`);
	}, 600000);
});
