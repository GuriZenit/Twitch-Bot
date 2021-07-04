module.exports.run = async (channel, tags, msg, self, client) => {
  client.say(channel, `Olá ${tags.username}!! how are you doing?`) 
}