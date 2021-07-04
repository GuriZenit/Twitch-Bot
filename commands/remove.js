module.exports.run = async (channel, tags, msg, self, client, args, db) => {
  
  let comando = args.shift().toLowerCase()
 
  client.say(channel, `Comando ${comando} foi apagado!`)
  
  await db.delete(comando)
  
}