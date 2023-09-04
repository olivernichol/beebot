const librcon = require("librcon");
const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');

module.exports = {
	name: 'mia',
	description: 'Kill the bees. Monster.',
	async execute(client, message, args, connection, dispatcher) {
		console.log("Killing Bees!");
		await keyv.set('bees', '0');
		librcon.send("kill @e[type=bee]", "MCPASSWORD", "MCSERVERIP", 25575);
		message.channel.send('You are a monster - bees removed.')
    },
};