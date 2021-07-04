module.exports.run = async (channel, tags, msg, self, client, args, db) => {
  let comando = args.shift().toLowerCase()
  
  client.say(channel, `Comando ${comando} adicionado!`)
  
  await db.set(comando, args.join(" "))
  
}