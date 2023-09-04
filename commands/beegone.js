const Discord = require('discord.js');
const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');

module.exports = {
	name: 'beegone',
	description: 'Disconnect the bee.' ,
	async execute(client, message, args) {
        await keyv.set('vibing', 'false')
        message.guild.me.voice.connection.disconnect()
        message.channel.send('Disconnected!');
    },
};