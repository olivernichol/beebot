var fs = require("fs");

module.exports = {
	name: 'eco',
	description: 'Mods only: Disables or enables selected BBE endpoint requests.',
	async execute(client, message, args) {
            console.log(args[0])
            if (!args[0]) {
                message.channel.send('Please specify a BBE endpoint!')
            }
            else if (args[0].toLowerCase() == 'android') {
                if (!args[1]) {
                    console.log('Mode not specified, toggling')
                    currentstate = fs.readFileSync('/root/beeboteco/android.txt');
                    if (currentstate = 'true') {
                        fs.writeFileSync('/root/beeboteco/android.txt', 'false')
                        message.channel.send('BeeBot Android requests will no longer come through!')
                    }
                    else {
                        fs.writeFileSync('/root/beeboteco/android.txt', 'true')
                        message.channel.send('BeeBot Android requests will come through.')
                    }
                }
                else {
                    if (args[1].toLowerCase() = 'true') {
                        fs.writeFileSync('/root/beeboteco/android.txt', 'true')
                        message.channel.send('BeeBot Android requests will come through.')
                    }
                    else if (args[1].toLowerCase() = 'false') {
                        fs.writeFileSync('/root/beeboteco/android.txt', 'false')
                        message.channel.send('BeeBot Android requests will no longer come through!')
                    }
                    else {
                        message.channel.send('That is not a valid state!')
                    }
                }
            }
            else if (args[0].toLowerCase() == 'windows') {
                if (!args[1]) {
                    console.log('Mode not specified, toggling')
                    currentstate = fs.readFileSync('/root/beeboteco/windows.txt');
                    if (currentstate = 'true') {
                        fs.writeFileSync('/root/beeboteco/windows.txt', 'false')
                        message.channel.send('BeeBot Windows requests will no longer come through!')
                    }
                    else {
                        fs.writeFileSync('/root/beeboteco/windows.txt', 'true')
                        message.channel.send('BeeBot Windows requests will come through.')
                    }
                }
                else {
                    if (args[1].toLowerCase() = 'true') {
                        fs.writeFileSync('/root/beeboteco/windows.txt', 'true')
                        message.channel.send('BeeBot Windows requests will come through.')
                    }
                    else if (args[1].toLowerCase() = 'false') {
                        fs.writeFileSync('/root/beeboteco/windows.txt', 'false')
                        message.channel.send('BeeBot Windows requests will no longer come through!')
                    }
                    else {
                        message.channel.send('That is not a valid state!')
                    }
                }
            }
            else {
                message.channel.send('That is not a valid endpoint!')
            }
    },
};