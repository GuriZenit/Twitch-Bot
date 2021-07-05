{
  const express = require('express')
  const app = express()
  app.get('/', (req, res) => {
    res.send(`Bot online at https://www.twitch.tv/popout/gurizenit/chat`)
  });
  app.listen(3000, () => {
    console.log('Server online')
  })
}