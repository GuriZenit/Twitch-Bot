module.exports.run = async (channel, tags, msg, self, client, args, db) => {
  const defaults = ['add', 'remove', 'commands']

  let comando = args.shift().toLowerCase()
  
  if(!comando) return;
  
  if (defaults.indexOf(comando) >= 0) {
    console.log(defaults.indexOf(comando))
    return client.say(channel, "Não é possível remover esse comando!")
  }
  if (await db.get(comando)) {
    await db.delete(comando)
    client.say(channel, `Comando ${comando} foi apagado!`)
  } else {
    client.say(channel, `Comando ${comando} não existe!`)
  }
}