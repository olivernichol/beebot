module.exports = {
	name: 'maintenance',
	description: 'Neon Only: Enter the bot into maintenance mode.',
	execute(client, message, args, connection, dispatcher) {
		if (message.author.id === 'ADMINUSERID') {
			message.channel.send('Entering maintenance mode...');
			if (connection) {
				connection.disconnect();
			}
			message.channel.send('Ready for maintenance.')
			message.delete();
		}
		else {
			message.channel.send("If you believe the bot requires maintenance, please contact the bot developer.")
			message.delete();
		}
    },
};