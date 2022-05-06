const fetch = require(`node-fetch`);
const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const config = require(`../../config`);

const modid = config.ModID

module.exports = {
    name: 'gend',
    aliases: [`giveawayend`, `endgiveaway`],
    description: '',
    usage: '``',
    example: '``',
    async execute(message, args, client) {
        if (message.member.roles.cache.find(r => r.id === modid)) {
            if (!args[0]) {
                message.reply(`Please provide a message ID`)
                return
            }
            messageId = args[0];
            client.giveawaysManager.end(messageId).then(() => {
                message.reply('Success! Giveaway end!');
            }).catch((err) => {
                message.reply(`An error has occurred, please check and try again.\n\`${err}\``);
            });
        }
        else {
            message.reply(`You lack perms for this command`)
        }
    }
}