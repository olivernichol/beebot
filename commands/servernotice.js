const Discord = require('discord.js');
const librcon = require("librcon");
var notice = "alert ";

module.exports = {
	name: 'servernotice',
	description: 'Sends an alert to the server.',
	async execute(client, message, args) {
        var notice = "alert ";
        message.channel.send("Sending Message To Server...")
        for (var i = 0; i < args.length; i++) {
			notice = notice.concat(args[i], " ")
        }
        librcon.send(notice, "MCPASSWORD", "MCSERVERIP", 25575);
    },
};