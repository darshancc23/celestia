const Command = require('../../base/Command.js');
const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');
const errors = require('../../assets/json/errors');

class Bara extends Command {
     constructor(client) {
        super(client, {
            name: 'bara',
            description: 'Finds bara...? For you!\nThis command can only be used in NSFW channels!',
            category: 'NSFW',
            usage: 'bara',
            guildOnly: true
        });
    }

    async run(message, args, level, settings) {
        let errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send(errMessage);
        }

        randomPuppy('baramanga')
        .then(url => {
            const embed = new MessageEmbed()
                .setFooter(`bara`)
                .setDescription(`[Image URL](${url})`)   
                .setImage(url)
                .setColor('RANDOM');
            return message.channel.send({ embed });
        })
    }
}

module.exports = Bara;