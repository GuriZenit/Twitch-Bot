{
  const tmi = require('tmi.js')
  const login = require('./login.js')
  const config = require('./config.js')
  const client = new tmi.client(login)
  const prefix = config.prefix;
  
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
      
      commandFile.run (channel, tags, msg, self, client, args)
    }catch(err){
      console.log('No command found')
    }
  }
  function onConnectedHandler(addr, port){
    require('./express.js').run(channel, tags, msg, self, client, args)
    console.log(`${tags} online at ${addr}:${port}`)
  }
}