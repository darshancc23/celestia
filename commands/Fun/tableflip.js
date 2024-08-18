const Command = require("../../base/Command.js");
const flipFrames = [
  "(-°□°)-  ┬─┬",
  "(╯°□°)╯    ]",
  "(╯°□°)╯  ︵  ┻━┻",
  "(╯°□°)╯       [",
  "(╯°□°)╯           ┬─┬"
];

class TableFlip extends Command {
    constructor(client) {
      super(client, {
        name: "tableflip",
        description: "Flips a table, in real-time! (╯°□°)╯",
        category: "Fun",
        usage: "tableflip"
      });
    }

    async run(message) { 
      const msg = await message.channel.send("(\\\\°□°)\\\\  ┬─┬");

      for (const frame of flipFrames) {
        await this.client.wait(300);
        await msg.edit(frame);
      }
      return msg;
    }
}

module.exports = TableFlip;