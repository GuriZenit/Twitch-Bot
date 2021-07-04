{
  const tmi = require('tmi.js')
  const login = require('./login.js')
  const config = require('./config.js')
  const client = new tmi.client(login)
  const prefix = config.prefix;
  
  const Database = require("@replit/database")
  const db = new Database()
  
  client.on('message', onMenssageHandler)
  client.on('connected', onConnectedHandler)
  client.connect()
  
  function onMenssageHandler(channel, tags, msg, self){
    
    if(!msg.startsWith(prefix)) return;
    if(self) return;
    
    const args = msg.trim()
    .slice(prefix.length)
    .split(' ')
    
    const command = args.shift()
    .toLowerCase()

    
    
    try {
      const commandFile = require(`./commands/${command}.js`)
      
      commandFile.run (channel, tags, msg, self, client, args, db)
    }catch(err){
      if(db.get(command)){
        client.say(channel, db.get(command))
      }
    }
  }
  function onConnectedHandler(addr, port){
    require('./express.js')
    console.log(`${client.username} online at ${addr}:${port}`)
  }
}
