const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');
var reason = '';

module.exports = {
	name: 'setdown',
	description: 'Neon Only: Notes the servers current down... ness.',
	async execute(client, message, args) {
		if (message.author.id === 'ADMINUSERID') {
			if (args.length == 0) {
				message.channel.send("Setting Down State to UP.")
				await keyv.set('downstate', 'false');
				await keyv.set('downplanstate', '');
				await keyv.set('downreason', '');
				await keyv.set('downtimestamp', '');
				await keyv.set('downendtime', '');
			}
			else if (args.length < 3) {
				message.channel.send('Please use the following format: `B!setdown <planned?> <endtime> <reason>`')
			}
			else {
				//Args[0] - PlanState
				//Args[1] - Endtime
				//Args[2] and onwards - Reason
				await keyv.set('downstate', 'true');
				await keyv.set('downplanstate', args[0]);
				await keyv.set('downtimestamp', message.createdAt.getHours() + ":" + message.createdAt.getMinutes());
				await keyv.set('downendtime', args[1]);
				args.shift();
				args.shift();
				for (var i = 0; i < args.length; i++) {
					reason = reason.concat(args[i])
					reason = reason.concat(" ")
				}
				await keyv.set('downreason', reason);
				message.channel.send('Down State set successfully.')
			}
		}
		else {
			return;
		}
    },
};