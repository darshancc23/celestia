const Command = require('../../base/Command.js');
const { MessageEmbed } = require('discord.js');
const { version } = require("../../package.json");
const { FEEDBACK_CHANNEL, FEEDBACK_EMOJI_ID } = process.env;

class Feedback extends Command {
    constructor(client) {
      super(client, {
        name: "feedback",
        description: "Want to give feedback? Encountered any bugs?",
        category: "Core",
        usage: "feedback <Suggestion / Issue>",
        aliases: ["suggestion", "suggest", "bug"]
      }); 
    }

    async run(message, args) {
        let channel = this.client.channels.cache.get(FEEDBACK_CHANNEL);

        if (!args.length) {
            return message.reply("Command Usage: `feedback <Suggestion / Issue>`")
        } else {

            try {
                const embed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle(`${FEEDBACK_EMOJI_ID} | Feedback command used by ${message.author.tag}`)
                    .addField("In:", `${message.guild.name}, ${message.channel.name} (${message.channel.id})`)
                    .addField("Issue:", args.join(" "))
                    .setFooter(`Celestia v${version}`)
                    .setTimestamp()
                channel.send({ embed });

                await message.react("🇸").catch(console.error);
                await message.react("🇪").catch(console.error);
                await message.react("🇳").catch(console.error);
                await message.react("🇹").catch(console.error);

                return null;

            } catch (err) {
                return message.channel.send(`An error occurred:\n\```${err.message}\````);
            }   
       }
    }
}

module.exports = Feedback;
