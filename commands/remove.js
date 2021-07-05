module.exports.run = async (channel, tags, msg, self, client, args, db) => {
  const defaults = ['add', 'remove', 'commands']
  
  if(!args[0]) return client.say(channel, "Command cannot be empty!"); 
  
  let comando = args.shift().toLowerCase()
  
  if (defaults.indexOf(comando) >= 0) {
    console.log(defaults.indexOf(comando))
    return client.say(channel, "Cannot remove this command!")
  }
  if (await db.get(comando)) {
    await db.delete(comando)
    client.say(channel, `Command ${comando} has been deleted!`)
  } else {
    client.say(channel, `Command ${comando} does not exist!`)
  }
}