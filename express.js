module.exports.run = async (channel, tags, msg, self, client, args) => {
  const express = require('express')
  const app = express()
  app.get('/', (req, res) => {
    res.send(`${client.username} Online`)
    });
    app.listen(3000, () => {
      console.log('server started')
})
}