const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');

module.exports = {
	name: 'stopcrashing',
	description: 'Stops any server crashing ongoing.',
	async execute(client, message, args) {
        const confirm = client.channels.cache.get("MODERATIONCHANNELID");
		message.channel.send("This command needs confirming by a moderator. If it's tomato, chances are it'll go through - if it's neon, chances are it won't.")
		message.channel.send("Your command is in queue - please wait for a moderator to approve.")
		var mainline = "The !stopcrashing command was sent in for confirmal. Running it would stop the currently crashing server. Confirm?"
        await keyv.set('confirmid', '5');
        await keyv.set('confirmargs', '');
        await keyv.set('confirmchannel', message.channel.id);
		confirm.send(mainline);
    },
};