module.exports.run = async (channel, tags, msg, self, client, args) => {
  client.say(channel, args.join(' '))
} 