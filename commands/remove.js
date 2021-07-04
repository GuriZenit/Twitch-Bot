module.exports.run = async (channel, tags, msg, self, client, args, db) => {
  let comando = args.shift()
  console.log(`${comando} : `, args.join(" "))
}