var fs = require("fs");
var vibefile = fs.readFileSync("./vibe.txt") + '';
var vibelist = vibefile.split("\n");
var msmfile = fs.readFileSync("./msm.txt") + '';
var msmlist = msmfile.split("\n");
var vibelists = [vibelist, msmlist]
var vibelistnames = ['vibe', 'msm']
const ytdl = require('ytdl-core-discord');
const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');
const nowplaying = 'Now Playing: ';
const randomInt = require('random-int');
var vibing;
var activevibing;
var dispatcher;
var connection;

module.exports = {
	name: 'vibe',
	description: 'We be vibin.' ,
	async execute(client, message, args) {
        if (message.member.voice.channel) {
            if (vibelistnames.includes(args[0])) {
                play(message, args[0]);
            }   
			else if (args[0] == '') {
                play(message, 'vibe')
            }
            else {
                message.channel.send('This is not a valid vibelist!')
            }
        }
        else {
            message.channel.send("You must be in a voice channel to execute this command!")
        }
    },
};
async function play(message, list) {
    if ((await keyv.get('vibing') === 'true') && (activevibing)) { //This means beebot is supposed to be vibing, and is playing - so pause.
        dispatcher.pause()
        activevibing = false;
        message.channel.send("Paused!")
    }
    else if ((await keyv.get('vibing') === 'true') && (!activevibing)) { //This means beebot is supposed to be vibing but isnt, so resume
        dispatcher.resume()
        activevibing = true;
        message.channel.send("Resumed!")
    }
    else { //must not be vibing, thus initiate the vibe
        await keyv.set('vibing', 'true')
        connection = await message.member.voice.channel.join();
        var link;
        if (list == 'vibe') {
            link = vibelist[randomInt(vibelist.length - 1)]
        }
	    else if (list == 'msm') {
            link = msmlist[randomInt(msmlist.length - 1)]
        }
	    ytdl.getInfo(link, function(err, info) {
            console.log(nowplaying.concat(info.title));
  		    message.channel.send(nowplaying.concat(info.title));
	    });
        dispatcher = connection.play(await ytdl(link), { type: 'opus' , highWaterMark: 50 });
        activevibing = true;
	    dispatcher.on('finish', async () => {
            await keyv.set('vibing', 'false')
		    play(message, list);
	    });
    }
    
}