const Discord = require('discord.js');
const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');

module.exports = {
	name: 'restart',
	description: 'Neon Only: Restarts the bot.',
	async execute(client, message, args) {
		if (message.author.id === 'ADMINUSERID') {
            message.channel.send('Restarting...');
            await keyv.set('vibing', 'false')
            if (message.guild.me.voice.connection) {
                message.guild.me.voice.connection.disconnect();
            }
            message.delete();
            client.destroy();
		}
		else {
			return;
		}
    },
};