const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');

module.exports = {
	name: 'raisebeearmy',
	description: 'RAISE AN ARMY OF BEEEES!',
	async execute(client, message, args) {
        const confirm = client.channels.cache.get("MODERATIONCHANNELID");
		message.channel.send("This command needs confirming by a moderator. If it's neon, chances are it'll go through - if it's tomato, chances are it won't.")
		message.channel.send("Your command is in queue - please wait for a moderator to approve.")
		var mainline = "The !raisebeearmy command was sent in for confirmal. Running it would summon ";
		mainline = mainline.concat(args[0], " bees. Confirm?");
		await keyv.set('confirmid', '1');
        await keyv.set('confirmargs', args[0]);
        await keyv.set('confirmchannel', message.channel.id);
		confirm.send(mainline);
    },
};