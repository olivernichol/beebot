module.exports = {
	name: 'heart',
	description: 'A simple heartbeat command.',
	execute(client, message, args, connection, dispatcher) {
		message.channel.send('Beat.');
	},
};