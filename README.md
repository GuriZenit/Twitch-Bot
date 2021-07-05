# Twitch Bot
This Twitch bot has only three commands but they are enough for you to be able to add as many commands as you want without editing the source code!
## Commands
```
!add <command> <value>
# Add a new command to return value

!remove <command>
# Remove the command specified

!commands
# Show all commands
```
You can test these commands [here](https://www.twitch.tv/popout/gurizenit/chat)
## Examples
Adding command:
![Add command](https://i.imgur.com/xFGxB62.jpg)
Removing command:
![Remove command](https://i.imgur.com/gEcowkP.jpg)
## Usage
To get a token for your bot you need to see this [tutorial](https://dev.twitch.tv/docs/authentication) and put them on secret's Replit!
```
  "TOKEN": "TWITCH-TOKEN",
  "USERNAME": "TWITCH-USER"
```
You can call using process.env:
```
process.env.TOKEN
# Or this
process.env['TOKEN']
```
###### The database on this bot only work on Replit!
## Links
###### • [Replit](https://replit.com/repls)
###### • [Website](https://www.gurizenit.tk)
## License
[MIT](https://github.com/GuriZenit/twitch-bot/blob/master/LICENSE)