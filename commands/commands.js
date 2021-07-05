module.exports.run = async (channel, tags, msg, self, client, args, db) => {
  const value = await db.getAll()
  console.log(value)
  client.say(channel, value)
}