module.exports.run = async (channel, client, args, db) => {
  let comando = args.shift().toLowerCase()
  const value = await db.get(comando)
  
  if(!value)return;
  
  client.say(channel, value)
} 