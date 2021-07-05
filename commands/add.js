module.exports.run = async (channel, tags, msg, self, client, args, db) => {
  const defaults = ['add', 'remove', 'commands']
  
  let comando = args.shift().toLowerCase()
  
  if(!comando) return;
  
  if(defaults.indexOf(comando) >= 0){
    return client.say(channel, `Não é possível adicionar esse comando!!`)
  }
  
  await db.set(comando, args.join(" "))
  client.say(channel, `Comando ${comando} adicionado!`)
}