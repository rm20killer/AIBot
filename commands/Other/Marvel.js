const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const fetch = require('node-fetch');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


const api = "https://www.whenisthenextmcufilm.com/api"
module.exports = {
    name: 'nextmarvel',
    aliases: ["marvel, nextmarvel"],
    description: 'show next marvel movie or series',
    usage: '`*nextmarvel`',
    example: '`*nextmarvel`',
    async execute(message, args) {
        //fetch data from api
        const res = await fetch(api);
        const data = await res.json();
        //console.log(data);
        //store data in variables
        const title = data.title;
        const releaseDate = data.release_date;
        const daysUntil = data.days_until;
        const overview = data.overview;
        const poster = data.poster_url;
        const type = data.type;
        //covert to string

        //create embed
        const embed = new Discord.MessageEmbed()
            .setTitle(title.toString())
            .setDescription(overview.toString())
            .setThumbnail(poster)
            .setColor('#0099ff')
            .addField('Release Date', releaseDate.toString())
            .addField('Days Until', daysUntil.toString())
            .addField('Type', type.toString())
            .setTimestamp() 
            .setFooter('Data provided by whenisthenextmcufilm.com');
        //reply with embed
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
        return;
    }
}