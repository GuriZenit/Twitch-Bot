module.exports.run = async (channel, tags, msg, self, client, args, db) => {

  const value = await db.getAll()

  var dados = '┃ ';
  for (values in value) {
    dados += `${values} ┃ `
  }
  client.say(channel, `All commands: ${dados} add ┃ remove ┃ commands ┃`)
}