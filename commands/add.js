module.exports.run = async (channel, tags, msg, self, client, args, db) => {
  const defaults = ['add', 'remove', 'commands']
  
  if(!args[0]) return client.say(channel, "Command cannot be empty!"); 
  
  let comando = args.shift().toLowerCase()
  
  if(!args[0]) return client.say(channel, "Description cannot be empty!");
  if(defaults.indexOf(comando) >= 0){
    return client.say(channel, `Cannot add this command!`)
  }
  
  await db.set(comando, args.join(" "))
  client.say(channel, `Command ${command} added!`)
}