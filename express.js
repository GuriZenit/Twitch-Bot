{
  const login = require("./login.js")
  const express = require('express')
  const app = express()
  app.get('/', (req, res) => {
  	let ch = login.channels[0].slice(1)
    res.send(`Bot online at https://www.twitch.tv/popout/${ch}/chat`)
  });
  app.listen(3000, () => {
    console.log('Server online')
  })
}