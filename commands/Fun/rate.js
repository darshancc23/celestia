const Command = require('../../base/Command.js');
const { CELESTIA_ID } = process.env;

class Rate extends Command {
  constructor(client) {
    super(client, {
      name: "rate",
      description: "Gives the item you specify a rating out of 10!",
      category: "Fun",
      usage: "rate <ITEM_TO_BE_RATED>"
    });
  }

  async run(message, args) {
    const item = args.join(" ");

    if (!item) {
      return message.reply("Command Usage: `rate <ITEM_TO_BE_RATED>`")
    } 

    if (item.toUpperCase().startsWith("CELESTIA") || item.toUpperCase().startsWith(`<@!${CELESTIA_ID}`)) return message.channel.send('I\'d give myself a 10/10!');

    const rating = Math.floor(Math.random() * 10) + 0;
    return message.channel.send(`I'd give **${item}** a ${rating}/10!`);
  }
}

module.exports = Rate;