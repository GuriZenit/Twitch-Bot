module.exports.run = async (channel, tags, msg, self, client, args, db) => {
  let comando = args.shift().toLowerCase()
  addCommand(comando, args)
  client.say(channel, `Comando ${comando} adicionado!`)
  
  async function addCommand(arg, arg2) {
    await db.set(arg, arg2.join(" "))
  }
}