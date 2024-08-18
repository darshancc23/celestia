const Command = require('../../base/Command.js');
const { botPerms } = require("../../util/data.js");

class Invite extends Command {
  constructor(client) {
    super(client, {
      name: "invite",
      description: "Generates an invite link, for adding Celestia to a server.",
      category: "Core",
      usage: "invite",
      aliases: ["add"]
    });
  }

  async run(message) { 
    this.client.generateInvite(botPerms).then(link => {
      message.channel.send('🔄 | Generating invite link...')
      .then(msg => {
        msg.edit(`🔗 | Generated invite link for Celestia:\n**<${link}>**`);
      });
    });
  }
}

module.exports = Invite;