const Command = require('../../base/Command.js');
const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');
const errors = require('../../assets/json/errors');
const subreddits = [
    "hentai",
    "rule34",
    "HQHentai"
]

class Hentai extends Command {
    constructor(client) {
        super(client, {
            name: 'hentai',
            description: 'Finds hentai for you!\nThis command can only be used in NSFW channels!',
            category: 'NSFW',
            usage: 'hentai',
            guildOnly: true
        });
    }

    async run(message, args, level, settings) {
        let errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send(errMessage);
        }

        let randSubreddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

        randomPuppy(randSubreddit)
        .then(url => {
            const embed = new MessageEmbed()
                .setFooter(`${randSubreddit}`)
                .setDescription(`[Image URL](${url})`)   
                .setImage(url)
                .setColor('RANDOM');
            return message.channel.send({ embed });
        })
    }
}

module.exports = Hentai;