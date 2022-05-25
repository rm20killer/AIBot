const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = {
    name: 'createmenu',
    aliases: ["createmenus"],
    description: 'will show how many tables been flipped',
    usage: '`*ping`',
    example: '`*ping`',
    async execute(message, args) {
        if (message.member.roles.cache.find(r => r.id === "631567730016911380")) {
            const menu = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('ROLE MENU')
                .addField('minecraft', 'Get pings for Minecraft related stuff')
                .addField('Movie', 'Get access to Movie related channels')
                .addField('Warframe', 'Get pings for Warframe related stuff')
                .addField('Freestuff', 'Get pings when ever <@672822334641537041> pings')

            let buttonMC = new MessageButton()
                .setStyle('SUCCESS')
                .setLabel('Minecraft')
                .setCustomId('Role-Minecraft')
                .setEmoji('978811510082121758');
            let buttonMovie = new MessageButton()
                .setStyle('SUCCESS')
                .setLabel('Movie')
                .setCustomId('Role-Movie')
                .setEmoji('🎥');
            let buttonWarframe = new MessageButton()
                .setStyle('SUCCESS')
                .setLabel('Warframe')
                .setCustomId('Role-Warframe')
                .setEmoji('978811541635862578');
            let buttonFreestuff = new MessageButton()
                .setStyle('SUCCESS')
                .setLabel('Freestuff')
                .setCustomId('Role-Freestuff')
                .setEmoji('🎮');
            let row = new MessageActionRow()
                .addComponents(buttonMC)
                .addComponents(buttonMovie)
                .addComponents(buttonWarframe)
                .addComponents(buttonFreestuff);
            message.channel.send({ embeds: [menu], components: [row] }).catch(console.error);

        }
        return;
    }
}
