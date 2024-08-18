const Command = require('../../base/Command.js');
const { MessageEmbed } = require('discord.js');
const request = require('node-superfetch');
const errors = require('../../assets/json/errors');

class GTN extends Command {
    constructor(client) {
        super(client, {
            name: 'gtn',
            description: 'Finds a GreenTeaNeko comic!\nThis command can only be used in NSFW channels!',
            category: 'NSFW',
            usage: 'gtn',
            guildOnly: true,
            aliases: ['nsfwcomics']
        });
    }

    async run(message, args, level, settings) {

        let errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send(errMessage);
        }

        const text = await request.get('https://rra.ram.moe/i/r?nsfw=true');
        let body = JSON.parse(text.text);

        let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setImage(`https://rra.ram.moe${body.path}`);
        return message.channel.send({ embed });
    }
}

module.exports = GTN;