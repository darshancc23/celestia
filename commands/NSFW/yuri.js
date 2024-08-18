const Command = require('../../base/Command.js');
const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');
const errors = require('../../assets/json/errors');

class Yuri extends Command {
    constructor(client) {
        super(client, {
            name: 'yuri',
            description: 'Finds yuri for you!\nThis command can only be used in NSFW channels!',
            category: 'NSFW',
            usage: 'yuri',
            guildOnly: true,
            aliases: ['gl']
        });
    }

    async run(message, args, level, settings) {

        let errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send(errMessage);
        }

        randomPuppy('yuri')
        .then(url => {
            const embed = new MessageEmbed()
                .setFooter(`yuri`)
                .setDescription(`[Image URL](${url})`)
                .setImage(url)
                .setColor('RANDOM');
            return message.channel.send({ embed });
        })
    }
}

module.exports = Yuri;