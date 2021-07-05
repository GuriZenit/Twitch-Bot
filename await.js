module.exports.run = async (channel, client, command, db) => {
  
  const value = await db.get(commamd)
  
  if(!value)return;
  
  client.say(channel, value)
} 