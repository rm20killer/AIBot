const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');

const Apex = require('apex-api');
const config = require(`../../config`);


const platforms = ["pc", "xbox", "psn"];
module.exports = {
    name: 'apexdata',
    aliases: ["apexstats"],
    description: 'will show how many tables been flipped',
    usage: '`*ping`',
    example: '`*ping`',
    async execute(message, args) {
        const apex = new Apex(config.ApexKey);
        const player = args[0];
        if (!player) {
            message.reply("Please provide a player name")
            return
        }
        const platform = args[1].toLowerCase();
        if (!platform) {
            message.reply("Please provide a platform")
            return
        }
        if (!platforms.includes(platform)) {
            message.reply("Please provide a valid platform (PC, XBOX, PSN)")
            return
        }
        const playerData = await apex.user(player, platform);
        if (!playerData) {
            message.reply("Error fetching data")
            return
        }
        if(playerData.errors){
            let res = "";
            res = playerData.errors[0].message
            const embed = new Discord.MessageEmbed()
                .setTitle(res)
                .setColor('#FF0000')
            message.reply({embeds: [embed]});
            return
        }
        console.log(playerData);
        
        let id = "No data";
        let avatarURL = "No data";
        let level = "No data";
        let rankImage = "No data";
        let rankName = "No data";
        let kills = "No data";
        let killPercentile = "No data";
        
        id = playerData.data.id;
        avatarURL = playerData.data.metadata.avatarUrl;
        level = playerData.data.metadata.level;
        rankImage = playerData.data.metadata.rankImage;
        rankName = playerData.data.metadata.rankName;
        kills = playerData.data.stats[1].value;
        killPercentile = playerData.data.stats[1].percentile;

        //console.log(id);
        //console.log(avatarURL);
        //console.log(level);
        //console.log(rankImage);
        //console.log(rankName);
        //console.log(kills);
        //console.log(killPercentile);


        let embed = new Discord.MessageEmbed()
            .setTitle(`${player}'s Apex Stats on ${platform}`)
            .setColor('#0099ff')
            .setAuthor({ name: player, iconURL: avatarURL})
            .addField('Level', `${level}`, true)
            .addField('Rank', `${rankName}`, true)
            .addField('Kills', `${kills}`, true)
            .addField('Kill Percentile', `${killPercentile}`, true)
            .setImage(rankImage)
            .setFooter({ text: `ID: ${id}` })
            .setTimestamp();
        message.reply({embeds: [embed]});
        return;
    }
}
