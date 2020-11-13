
const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config");
const prefixl = config.prefix

const resHi = ["Hi", "Hey", "Hello", "Howdy", "Greetings", "Nice to see you", "yo","Sup"];

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('being the smartest AI here', {
        type: 'STREAMING',
        url: 'https://www.twitch.tv/RM20'
      });
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefixl)) return;
    const args = msg.content.trim().split(/ +/g);
    const cmd = args[0].slice(prefixl.length).toLowerCase();

    n =resHi.includes(cmd)
    console.log(n)
    if (n===true){
        const random = Math.floor(Math.random() * resHi.length);
        msg.reply(resHi[random]);
    }

    if(cmd === 'ping') {
        msg.reply('pong, ' + `${Date.now() - msg.createdTimestamp}` + ' ms');
    }
    if(cmd=== 'madeby') {
        msg.channel.send('This was made by RM20');
    }
    if(cmd=== 'github') {
        msg.channel.send('https://github.com/rm20killer');
    }


    
    if(cmd === 'poll') {
        console.log(`${args[1]}`)
        if (msg.member.roles.cache.find(r=>r.id === '765932402169479178')|| msg.member.roles.cache.find(r=>r.id === '631567730016911380')) {
            if (args[1] === `2`){
                console.log("reacting");
                msg.react('1️⃣')
                .then(() => msg.react('2️⃣'))
                .then(() => console.log("all 2 emotes been reacted"))
                .catch(() => console.error("error with emote"));
            }
            else if (args[1] === `3`){
                console.log("reacting");
                msg.react('1️⃣')
                .then(() => msg.react('2️⃣'))
                .then(() => msg.react('3️⃣'))
                .then(() => console.log(`all`, args[1] ,"emotes been reacted"))
                .catch(() => console.error("error with emote"));
            }
            else if (args[1] === `4`){
                console.log("reacting");
                msg.react('1️⃣')
                .then(() => msg.react('2️⃣'))
                .then(() => msg.react('3️⃣'))
                .then(() => msg.react('4️⃣'))
                .then(() => console.log(`all`, args[1] ,"emotes been reacted"))
                .catch(() => console.error("error with emote"));
            }
            else if (args[1] === `5`){
                console.log("reacting");
                msg.react('1️⃣')
                .then(() => msg.react('2️⃣'))
                .then(() => msg.react('3️⃣'))
                .then(() => msg.react('4️⃣'))
                .then(() => msg.react('5️⃣'))
                .then(() => console.log(`all`, args[1] ,"emotes been reacted"))
                .catch(() => console.error("error with emote"));
            }
            else if (args[1] === `6`){
                console.log("reacting");
                msg.react('1️⃣')
                .then(() => msg.react('2️⃣'))
                .then(() => msg.react('3️⃣'))
                .then(() => msg.react('4️⃣'))
                .then(() => msg.react('5️⃣'))
                .then(() => msg.react('6️⃣'))
                .then(() => console.log(`all`, args[1] ,"emotes been reacted"))
                .catch(() => console.error("error with emote"));
            }
            else if (args[1] === `7`){
                console.log("reacting");
                msg.react('1️⃣')
                .then(() => msg.react('2️⃣'))
                .then(() => msg.react('3️⃣'))
                .then(() => msg.react('4️⃣'))
                .then(() => msg.react('5️⃣'))
                .then(() => msg.react('6️⃣'))
                .then(() => msg.react('7️⃣'))
                .then(() => console.log(`all`, args[1] ,"emotes been reacted"))
                .catch(() => console.error("error with emote"));
            }
            else if (args[1] === `8`){
                console.log("reacting");
                msg.react('1️⃣')
                .then(() => msg.react('2️⃣'))
                .then(() => msg.react('3️⃣'))
                .then(() => msg.react('4️⃣'))
                .then(() => msg.react('5️⃣'))
                .then(() => msg.react('6️⃣'))
                .then(() => msg.react('7️⃣'))
                .then(() => msg.react('8️⃣'))
                .then(() => console.log(`all`, args[1] ,"emotes been reacted"))
                .catch(() => console.error("error with emote"));
            }
            else if (args[1] === `9`){
                console.log("reacting");
                msg.react('1️⃣')
                .then(() => msg.react('2️⃣'))
                .then(() => msg.react('3️⃣'))
                .then(() => msg.react('4️⃣'))
                .then(() => msg.react('5️⃣'))
                .then(() => msg.react('6️⃣'))
                .then(() => msg.react('7️⃣'))
                .then(() => msg.react('8️⃣'))
                .then(() => msg.react('9️⃣'))
                .then(() => console.log(`all`, args[1] ,"emotes been reacted"))
                .catch(() => console.error("error with emote"));
            }
            else if (args[1] === `10`){
                console.log("reacting");
                msg.react('1️⃣')
                .then(() => msg.react('2️⃣'))
                .then(() => msg.react('3️⃣'))
                .then(() => msg.react('4️⃣'))
                .then(() => msg.react('5️⃣'))
                .then(() => msg.react('6️⃣'))
                .then(() => msg.react('7️⃣'))
                .then(() => msg.react('8️⃣'))
                .then(() => msg.react('9️⃣'))
                .then(() => msg.react('🔟'))
                .then(() => console.log(`all`, args[1] ,"emotes been reacted"))
                .catch(() => console.error("error with emote"));
            }
            else {
                console.log("no number given");
                msg.reply("give a number between 2 and 10");
            }
        }
        else{
            msg.reply("you do not have perm to do so")
        }
    }
})


// client.login(process.env.token);
client.login(config.BotToken);