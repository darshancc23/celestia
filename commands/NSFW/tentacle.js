const Command = require('../../base/Command.js');
const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');
const errors = require('../../assets/json/errors');

class Tentacle extends Command {
    constructor(client) {
        super(client, {
            name: 'tentacle',
            description: 'Finds...tentacle..porn?? For...?? You!\nThis command can only be used in NSFW channels!',
            category: 'NSFW',
            usage: 'tentacle',
            guildOnly: true,
            aliases: ['shokushu', 'tentai', 'tentacles']
        });
    }

    async run(message, args, level, settings) {

        let errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send(errMessage);
        }

        randomPuppy('tentai')
        .then(url => {
            const embed = new MessageEmbed()
                .setFooter(`tentacles`)
                .setDescription(`[Image URL](${url})`)
                .setImage(url)
                .setColor('RANDOM');
            return message.channel.send({ embed });
        })
    }
}

module.exports = Tentacle;