const Command = require("../../base/Command.js");
const { stripIndents } = require('common-tags');

class Donate extends Command {
  constructor(client) {
    super(client, {
      name: "donate",
      description: "Responds with the bot's donation links.",
      category: "Core",
      usage: "donate"
    });
  }

  async run(message) {
    return message.channel.send(stripIndents`
      Insert donation link here
    `);
  }
};

module.exports = Donate;