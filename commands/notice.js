module.exports = {
	name: 'notice',
	description: 'Neon Only: Send a notice to the file.',
	execute(client, message, args, connection, dispatcher) {
		if (message.author.id === 'ADMINUSERID') {
			var notice = "";
			const general = client.channels.cache.get("NOTICECHANNELID");
			for (var i = 0; i < args.length; i++) {
				notice = notice.concat(args[i])
				notice = notice.concat(" ")
			}
			general.send(notice)
			message.channel.send("Notice sent.")
		}
		else {
			message.channel.send("YOU ARE NOT NEON. GET OUT")
		}
    },
};