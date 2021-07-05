module.exports.run = async (channel, tags, msg, self, client, args, db) => {
  const defaults = ['add', 'remove', 'commands']
  
  if(!args[0]) return client.say(channel, "Comando não pode ficar vazio"); 
  
  let comando = args.shift().toLowerCase()
  
  if(defaults.indexOf(comando) >= 0){
    return client.say(channel, `Não é possível adicionar esse comando!!`)
  }
  
  await db.set(comando, args.join(" "))
  client.say(channel, `Comando ${comando} adicionado!`)
}