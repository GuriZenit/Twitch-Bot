module.exports.run = async (channel, tags, msg, self, client, args, db) => {
  
  const value = await db.getAll()
  
  console.log(value)
  
  var dados = '|';
  for(values in value){
    dados+= `${values}| `
  }
  client.say(channel,`Essa é a lista com todos os comandos: /me ${value}`)
}