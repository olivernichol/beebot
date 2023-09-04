const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');

module.exports = {
	name: 'crashthebotandtheserver',
	description: 'F**king crashes the bot and the server what did you expect?',
	async execute(client, message, args) {
        const confirm = client.channels.cache.get("MODERATIONCHANNELID");
		message.channel.send("This command needs confirming by a moderator. If it's neon, chances are it'll go through - if it's tomato, chances are it won't.")
		message.channel.send("Your command is in queue - please wait for a moderator to approve.")
		var mainline = "The !crashthebotandtheserver command was sent in for confirmal. Running it would crash the hecking server AND the hecking bot. Confirm?"
        await keyv.set('confirmid', '6');
        await keyv.set('confirmargs', '');
        await keyv.set('confirmchannel', message.channel.id);
		confirm.send(mainline);
    },
};