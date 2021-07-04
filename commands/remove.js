module.exports.run = async (channel, tags, msg, self, client, args, db) => {
  
  let comando = args.shift().toLowerCase()
  remove(comando)
  client.say(channel, `Comando ${comando} foi apagado!`)
  
  async function remove(arg) {
    await db.delete(arg)
  }
}