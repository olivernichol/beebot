const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');
const Discord = require('discord.js');
const librcon = require("librcon");
var clientchannel;

module.exports = {
	name: 'deny',
	description: 'Mods only: Denies the most recent command.',
	async execute(client, message, args) {
            message.channel.send("Understood. Denying Command.")
            clientchannel = client.channels.cache.get(confirmchannel);
			clientchannel.send("Your Command was denied.")
			await keyv.set('confirmid', '');
        	await keyv.set('confirmargs', '');
        	await keyv.set('confirmchannel', '');
    },
};