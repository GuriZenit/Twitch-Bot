{
  const login = require("./login.js")
  const express = require('express')
  const app = express()
  app.get('/', (req, res) => {
    res.send(`Bot online at https://www.twitch.tv/popout/${login.channels[0]}/chat`)
  });
  app.listen(3000, () => {
    console.log('Server online')
  })
}