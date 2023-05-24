 
<p align="center">
  <a href="#about">About</a>
  •
  <a href="#features">Features</a>
  •
  <a href="#installation">Installation</a>
  •
  <a href="#images">Images</a>
  •
  <a href="#how-can-i-help">Help</a>
</p>

## About
The **TradingView To Telegram Webhook Bot** listens to [TradingView](https://tradingview.com) alerts via [webhooks](https://www.tradingview.com/support/solutions/43000529348-i-want-to-know-more-about-webhooks/) using [NestJS](https://nestjs.com/).
All alerts can be instantly sent to [Telegram](https://telegram.org/).

## Features
- Telegram Support using the [NestJS Telegram](https://github.com/jmcdo29/nestjs-telegram) libary
- TradingView `{{exchange}}`, `{{ticker}}` etc. variables support. Read more [here](https://www.tradingview.com/blog/en/introducing-variables-in-alerts-14880/)
 
## Installation
> ⚠️ Best to run the bot on a VPS. I can recommend [Vultr](https://www.vultr.com/?ref=7249488).
1. Install [NodeJS](https://nodejs.org/en/download/)
 
1. Install all requirements `npm install`
1. Set the required environment variables
    - `TELEGRAM_BOT_TOKEN` is the token you receive after creating a bot with the BotFather
    - `TELEGRAM_CHAT_ID` is the id of the telegram group or channel in which the bot will give the TradingView alerts. 

    More information on how to set environment variables for your specific os can be found [here](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html)
1. Setup TradingView alerts as shown [here](https://i.imgur.com/71UYTcu.png)
    - TradingViews variables like `{{exchange}}`, `{{ticker}}` etc. work as well. More can be found [here](https://www.tradingview.com/blog/en/introducing-variables-in-alerts-14880/)
    - Your webhook url would be `http://<YOUR-IP>/bot/v1/alerts`
1. If you use a firewall be sure to open port the corresponding port
1. Run the bot `npm run build && npm run start:prod`

*This application will run at port 4000 by default. It is then necessary to forward port 80 to 4000. If you want to run this on a different port, you can set a `PORT` environment variable with the port number of your own choice.*
 