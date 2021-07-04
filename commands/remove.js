module.exports.run = async (channel, tags, msg, self, client, args, db) => {
  let comando = args.shift().toLowerCase()
  db.delete(comando)
  client.say(channel, `Comando ${comando} foi apagado!`)
}