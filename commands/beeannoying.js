const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');


module.exports = {
	name: 'beeannoying',
	description: "Mods Only: Controls the level of beebot's annoyingness.",
	async execute(client, message, args, connection, dispatcher) {
        await keyv.set('level', args[0]);
        level = parseInt(args[0], 10)
		if (level == 0) {
			message.channel.send("BeeBot will not interfere with regular messaging.")
		}
		else if (level == 1) {
			message.channel.send("BeeBot will respond accordingly to the word right, but no unprompted bee spawning will occur")
		}
		else if (level == 2) {
			message.channel.send("BeeBot will respond to the word 'bee' on it's own, however it will not respond to the three letters in any other words, or next to punctuation")
		}
		else {
			message.channel.send("All of BeeBot's annoying features are on. Run.")
		}
    },
};