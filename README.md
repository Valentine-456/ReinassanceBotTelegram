# This is my first deployed telegram bot.

---

### Packages:

The bot uses [telegraf.js](https://telegraf.js.org/#/), as a framework for this project.

The bot also need to use [express.js](https://expressjs.com/). Without express.js, services like Heroku (where the bot is deployed) cannot find process.env.PORT variable, hence the bot shuts down in a minute.

---

### Features:

The bot can send text, links, images, audio files with inline-keyboards, keyboard.

---

### Project structure:

**img** - has all images bot uses
**modules** - contains _url.js_ in which there are links for music and _keyboard.js_ which suplies an object of all keyboards the bot uses.
