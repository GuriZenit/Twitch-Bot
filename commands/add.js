module.exports.run = async (channel, tags, msg, self, client, args, db) => {
  let comando = args.shift().toLowerCase()
  db.set(comando, args.join(" "))
  client.say(channel, `Comando ${comando} adicionado!`)
}