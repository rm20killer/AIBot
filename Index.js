const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const fs = require('fs');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ],
    partials: [
        `CHANNEL`,
        `MESSAGE`,
        `REACTION`
    ],
    autoReconnect: true,
});

const fetch = require("node-fetch");
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const wait = require('util').promisify(setTimeout);
const { GiveawaysManager } = require('discord-giveaways');

const config = require("./config");
const prefixl = config.prefix


client.giveawaysManager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    default: {
        botsCanWin: false,
        embedColor: '#FF0000',
        embedColorEnd: '#000000',
        reaction: '🎉',
        lastChance: {
            enabled: true,
            content: '⚠️ **LAST CHANCE TO ENTER !** ⚠️',
            threshold: 5000,
            embedColor: '#FF0000'
        }
    }
});

client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands')
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('being the smartest AI here', {
        type: 'STREAMING',
        url: 'https://www.twitch.tv/RM20'
      });
});

client.on('message', message => {
    if (message.guild === null) {
        return;
    }
    if (message.content.startsWith(prefixl)) {
        const args = message.content.slice(prefixl.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return;
        try {
            console.log(`${message.content} sent by ${message.author.tag}`)
            command.execute(message, args, client);
        } catch (error) {
            console.error(error);
            message.reply(error)
        }
    }
    //n =resHi.includes(cmd)
    //console.log(n)
    //if (n===true){
    //    const random = Math.floor(Math.random() * resHi.length);
    //    msg.reply(resHi[random]);
    //}
})


// client.login(process.env.token);
client.login(config.BotToken);