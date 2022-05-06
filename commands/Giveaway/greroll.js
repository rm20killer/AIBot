const fetch = require(`node-fetch`);
const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const config = require(`../../config`);

const modid = config.ModID

module.exports = {
    name: 'greroll',
    aliases: [`giveawayreroll`, `rerollgiveaway`],
    description: '',
    usage: '``',
    example: '``',
    async execute(message, args, client) {
        // CODE GOES HERE 🡫 
        if (message.member.roles.cache.find(r => r.id === modid)) {
            if(!args[0]) {
                message.reply(`Please provide a message ID`)
                return
            }
            const messageId = args[0];
            client.giveawaysManager.reroll(messageId).then(() => {
                message.channel.send('Success! Giveaway rerolled!');
            }).catch((err) => {
                message.channel.send(`An error has occurred, please check and try again.\n\`${err}\``);
            });
        }
        else {
            message.reply(`You lack perms for this command`)
        }
    }
}