module.exports.run = async (channel, tags, msg, self, client) => {
  const twitter = 'https:twitter.com/gurizenit/'
  const instagram = 'https://instagram.com/gurizenit/'
  const myAnimeList = 'https://myanimelist.net/gurizenit/'
  client.say(channel, `Twitter: ${twitter},Instagram: ${instagram}, MyAnimeList: ${myAnimeList}`)
}