const Discord = require('discord.js');

module.exports = {
	name: 'version',
	description: 'Gives version info about BeeBot',
	execute(client, message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle('BeeBot V3.1')
	        .setURL('https://discord.js.org/')
	        .setAuthor('BeeBot V3', 'https://vignette.wikia.nocookie.net/minecraft/images/5/56/Bee.png/revision/latest?cb=20190829224242', 'https://www.olivernichol.co.uk')
	        .setDescription('BeeBot V3 implements all the requested features from the previous version - see below! (Well, Most of th-')
	        .setThumbnail('https://vignette.wikia.nocookie.net/minecraft/images/5/56/Bee.png/revision/latest?cb=20190829224242')
	        .addFields(
		        { name: 'New Features', value: 'Some value here' },
		        { name: '\u200B', value: '\u200B' },
	        )
	        .setTimestamp()
	        .setFooter('BeeBot - The Sh**ty Solution', 'https://vignette.wikia.nocookie.net/minecraft/images/5/56/Bee.png/revision/latest?cb=20190829224242');
        message.channel.send(exampleEmbed);
    },
};