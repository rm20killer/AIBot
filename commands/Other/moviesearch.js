const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const fetch = require('node-fetch');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require(`../../config`);

module.exports = {
    name: 'moviesearch',
    aliases: ["movie", "movies","tv", "tvsearch"],
    description: 'will show how many tables been flipped',
    usage: '`*moviesearch`',
    example: '`*moviesearch`',
    async execute(message, args) {
        if (!args[0]) {
            message.reply(`Please provide a movie name`)
            return
        }
        if (args[0] === "-tv") {
            if (!args[1]) {
                message.reply(`Please provide a tv show name`)
                return
            }
            //search = args 1 to end
            //search = args.slice(1).join("");
            const tv = args.slice(1).join("");
            const url = `https://api.tvmaze.com/search/shows?q=${tv}`;
            const res = await fetch(url);
            const data = await res.json();
            //console.log(data);
            //store data in variables
            var site = ""
            var rating = ""
            var overview = ""
            const title = data[0].show.name;
            const releaseDate = data[0].show.premiered;
            overview = data[0].show.summary;
            const poster = data[0].show.image.medium;
            const type = data[0].show.type;
            site = data[0].show.officialSite;
            rating = data[0].show.rating.average;

            //remove <p> tags
            overview = overview.replace(/<\/?[^>]+(>|$)/g, "");
            
            //covert to string
            //create embed
            const embed = new Discord.MessageEmbed()
                .setTitle(title.toString())
                .setDescription(overview.toString())
                .setURL(site)
                .setThumbnail(poster)
                .setColor('#0099ff')
                .addField('Release Date', releaseDate.toString())
                .addField('Rating', rating.toString())
                .addField('Type', type.toString())
                .setTimestamp()
                .setFooter('Data provided by tvmaze.com');
            //reply with embed
            message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
        }
        else{
            const movie = args[0];
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${config.MovieKey}&language=en-US&query=${movie}&page=1&include_adult=false`).then(response => {
                //console.log(response)
                return response.json()
            }).then(data => {
                const result = data.results[0]
                if(!result){
                    return
                }
                const title = result.title
                const Reviews = result.vote_average
                const image = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${result.poster_path}`
                //const relase_date = result.relase_date
                fetch(`https://api.themoviedb.org/3/movie/${result.id}?api_key=${config.MovieKey}&language=en-US`).then(response => {
                    return response.json()
                }).then(DB => {
                    //console.log(DB)
                    const production_companies = DB.production_companies[0].name
                    let genres = ""
                    for (let i = 0; i < DB.genres.length; i++) {
                        const element = DB.genres[i].name.replace(/\s/g, '');;
                        genres = genres + ` #${element},`
                    }
                    const relase_date = DB.release_date
                    const overview = DB.overview
                    const embed = new Discord.MessageEmbed()
                        .setTitle(title)
                        .setDescription(overview)
                        .setURL(`https://www.themoviedb.org/movie/${result.id}`)
                        .setThumbnail(image)
                        .setColor('#0099ff')
                        .addField('Release Date', relase_date.toString())
                        .addField('Rating', Reviews.toString())
                        .addField('Production Companies', production_companies)
                        .addField('Genres', genres)
                        .setTimestamp()
                        .setFooter('Data provided by themoviedb.org');
                    message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
                })
            })
        }

        return;
    }
}