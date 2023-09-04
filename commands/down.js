const Discord = require('discord.js');
const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');
var downEmbed;

module.exports = {
	name: 'down',
	description: 'Is the server down? Why is it down? Will this work? WHO KNOWS?' ,
	async execute(client, message) {
        var state = await keyv.get('downstate')
        var planstate = await keyv.get('downplanstate')
        var reason = await keyv.get('downreason')
        var timestamp = await keyv.get('downtimestamp')
        var endtime = await keyv.get('downendtime')
		if (state == 'true') {
			downEmbed = new Discord.MessageEmbed()
	        	.setColor('#FFFF00')
	        	.setTitle('The server is: DOWN.')
	        	.setAuthor('BeeBot V3 - Down State', 'https://vignette.wikia.nocookie.net/minecraft/images/5/56/Bee.png/revision/latest?cb=20190829224242', 'https://www.olivernichol.co.uk')
	        	.setDescription(reason)
	        	.setThumbnail('https://vignette.wikia.nocookie.net/minecraft/images/5/56/Bee.png/revision/latest?cb=20190829224242')
	        	.addFields(
		        	{ name: 'Was this planned?', value: planstate },
					//{ name: '\u200B', value: '\u200B' },
					{ name: 'When did this start?', value: timestamp },
					{ name: 'When will this end?', value: endtime },
	        	)
	        	.setTimestamp()
	        	.setFooter('BeeBot - The Sh**ty Solution', 'https://vignette.wikia.nocookie.net/minecraft/images/5/56/Bee.png/revision/latest?cb=20190829224242');
		}
		else {
			downEmbed = new Discord.MessageEmbed()
	        	.setColor('#FFFF00')
	        	.setTitle('The server is: UP.')
	        	.setAuthor('BeeBot V3 - Down State', 'https://vignette.wikia.nocookie.net/minecraft/images/5/56/Bee.png/revision/latest?cb=20190829224242', 'https://www.olivernichol.co.uk')
	        	.setThumbnail('https://vignette.wikia.nocookie.net/minecraft/images/5/56/Bee.png/revision/latest?cb=20190829224242')
	        	.setTimestamp()
	        	.setFooter('BeeBot - The Sh**ty Solution', 'https://vignette.wikia.nocookie.net/minecraft/images/5/56/Bee.png/revision/latest?cb=20190829224242');
		}
        message.channel.send(downEmbed);
    },
};