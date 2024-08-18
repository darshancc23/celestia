const Command = require("../../base/Command.js");

class LMGTFY extends Command {
  constructor(client) {
    super(client, {
      name: "lmgtfy",
      description: "Why don't you just... Google it?",
      category: "Fun",
      usage: "lmgtfy <Query>",
      aliases: ["googleit"]
    });
  }

  async run(message, args) { 
    const textQuery = args.join(" ");
    const query = encodeURIComponent(args.join(" "));
    const url = `https://lmgtfy.com/?q=${query}`;

    if (!query) return message.channel.send('Command Usage: `lmgtfy <Query>`');
    else message.channel.send(`"${textQuery}"\n**<${url}>**`);
  }
}

module.exports = LMGTFY;