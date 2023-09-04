const Discord = require('discord.js');
var fs = require("fs");
var text = "";
text = fs.readFileSync("./bees.txt", "utf8");
var textByLine = text.split("\n");
const randomInt = require('random-int');

module.exports = {
	name: 'showbee',
	description: 'Show bee. Specifically, from the first 5 lines of image results when i googled it on 23/06/2020',
	execute(client, message, args) {
        var beeofchoice = randomInt(textByLine.length - 1);
        console.log(textByLine[beeofchoice])
        message.channel.send("A bee for you.", {files: [textByLine[beeofchoice]]});
    },
};