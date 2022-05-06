const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports = {
    name: 'poll',
    aliases: ["poll"],
    description: 'will show how many tables been flipped',
    usage: '`*poll`',
    example: '`*poll`',
    async execute(message, args) {
        //check if there have any roles
        if (message.member.roles.cache.find(r => r.id === '765932402169479178') || message.member.roles.cache.find(r => r.id === '631567885361217537')) { 
            if (args[0] === `2`) {
                console.log("reacting");
                message.react('1️⃣')
                    .then(() => message.react('2️⃣'))
                    .then(() => console.log("all 2 emotes been reacted"))
                    .catch(() => console.error("error with emote"));
            }
            else if (args[0] === `3`) {
                console.log("reacting");
                message.react('1️⃣')
                    .then(() => message.react('2️⃣'))
                    .then(() => message.react('3️⃣'))
                    .then(() => console.log(`all`, args[0], "emotes been reacted"))
                    .catch(() => console.error("error with emote"));
            }
            else if (args[0] === `4`) {
                console.log("reacting");
                message.react('1️⃣')
                    .then(() => message.react('2️⃣'))
                    .then(() => message.react('3️⃣'))
                    .then(() => message.react('4️⃣'))
                    .then(() => console.log(`all`, args[0], "emotes been reacted"))
                    .catch(() => console.error("error with emote"));
            }
            else if (args[0] === `5`) {
                console.log("reacting");
                message.react('1️⃣')
                    .then(() => message.react('2️⃣'))
                    .then(() => message.react('3️⃣'))
                    .then(() => message.react('4️⃣'))
                    .then(() => message.react('5️⃣'))
                    .then(() => console.log(`all`, args[0], "emotes been reacted"))
                    .catch(() => console.error("error with emote"));
            }
            else if (args[0] === `6`) {
                console.log("reacting");
                message.react('1️⃣')
                    .then(() => message.react('2️⃣'))
                    .then(() => message.react('3️⃣'))
                    .then(() => message.react('4️⃣'))
                    .then(() => message.react('5️⃣'))
                    .then(() => message.react('6️⃣'))
                    .then(() => console.log(`all`, args[0], "emotes been reacted"))
                    .catch(() => console.error("error with emote"));
            }
            else if (args[0] === `7`) {
                console.log("reacting");
                message.react('1️⃣')
                    .then(() => message.react('2️⃣'))
                    .then(() => message.react('3️⃣'))
                    .then(() => message.react('4️⃣'))
                    .then(() => message.react('5️⃣'))
                    .then(() => message.react('6️⃣'))
                    .then(() => message.react('7️⃣'))
                    .then(() => console.log(`all`, args[0], "emotes been reacted"))
                    .catch(() => console.error("error with emote"));
            }
            else if (args[0] === `8`) {
                console.log("reacting");
                message.react('1️⃣')
                    .then(() => message.react('2️⃣'))
                    .then(() => message.react('3️⃣'))
                    .then(() => message.react('4️⃣'))
                    .then(() => message.react('5️⃣'))
                    .then(() => message.react('6️⃣'))
                    .then(() => message.react('7️⃣'))
                    .then(() => message.react('8️⃣'))
                    .then(() => console.log(`all`, args[0], "emotes been reacted"))
                    .catch(() => console.error("error with emote"));
            }
            else if (args[0] === `9`) {
                console.log("reacting");
                message.react('1️⃣')
                    .then(() => message.react('2️⃣'))
                    .then(() => message.react('3️⃣'))
                    .then(() => message.react('4️⃣'))
                    .then(() => message.react('5️⃣'))
                    .then(() => message.react('6️⃣'))
                    .then(() => message.react('7️⃣'))
                    .then(() => message.react('8️⃣'))
                    .then(() => message.react('9️⃣'))
                    .then(() => console.log(`all`, args[0], "emotes been reacted"))
                    .catch(() => console.error("error with emote"));
            }
            else if (args[0] === `10`) {
                console.log("reacting");
                message.react('1️⃣')
                    .then(() => message.react('2️⃣'))
                    .then(() => message.react('3️⃣'))
                    .then(() => message.react('4️⃣'))
                    .then(() => message.react('5️⃣'))
                    .then(() => message.react('6️⃣'))
                    .then(() => message.react('7️⃣'))
                    .then(() => message.react('8️⃣'))
                    .then(() => message.react('9️⃣'))
                    .then(() => message.react('🔟'))
                    .then(() => console.log(`all`, args[0], "emotes been reacted"))
                    .catch(() => console.error("error with emote"));
            }
            else {
                console.log("no number given");
                message.reply("give a number between 2 and 10");
            }
        }
        else {
            message.reply("you do not have perm to do so")
        }
        return;
    }
}

const ping = async (message) => {
    var resmessage = await message.channel.send('Ping is being appreciated...');
    const ping = (resmessage.createdTimestamp - message.createdTimestamp);
    //console.log(client.ws.ping);  
    resmessage.edit("Ping: " + ping + " ms");
    //message.reply('pong, ' + `${Date.now() - message.createdTimestamp}` + ' ms');
    return;
}