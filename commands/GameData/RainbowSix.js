const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// const RainbowSixApi = require('rainbowsix-api-node');
// const R6 = new RainbowSixApi();


// const platforms = ["pc", "xbox", "psn", "uplay", "xone", "ps4"];

module.exports = {
    name: 'rainbow',
    aliases: ["rainbow6stats","rainbowstats","r6stats"],
    description: 'will show how many tables been flipped',
    usage: '`*ping`',
    example: '`*ping`',
    async execute(message, args) {
        message.reply("Rainbow Six Stats are currently under development")
        return

        // const player = args[0];
        // if (!player) {
        //     message.reply("Please provide a player name")
        //     return
        // }
        // let platform = args[1].toLowerCase();
        // if (!platform) {
        //     message.reply("Please provide a platform")
        //     return
        // }
        // if(!platforms.includes(platform)){
        //     message.reply("Please provide a valid platform (PC, XBOX, PSN)")
        //     return
        // }
        // if(platform == "pc"){
        //     platform = "uplay"
        // }
        // if(platform == "xbox"){
        //     platform = "xone"
        // }
        // if(platform == "psn"){
        //     platform = "ps4"
        // }
        // R6.stats(player, platform).then(response => {
        //     console.log(response);
        // }).catch(error => {
        //     console.error(error)
        // });

        // return;
    }
}