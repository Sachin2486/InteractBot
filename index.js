const { Telegraf } = require('telegraf');
const axios = require('axios');

const TOKEN = '6204159260:AAGRxFuHWNLJ9QyGZu_n3avRq1RhDeDC2VI';
const bot = new Telegraf(TOKEN);

// start command
bot.start((ctx) => {
    ctx.reply('Welcome to our iPhone price update bot. To subscribe, use the /subscribe command.');
});

// help command
bot.help((ctx) => {
    ctx.reply(
        'Commands:\n' +
        '/subscribe - Subscribe to daily iPhone price updates\n' +
        '/unsubscribe - Unsubscribe from daily iPhone price updates\n'
    );
});

// subscribe command
bot.command('subscribe', (ctx) => {
    const chatId = ctx.chat.id;
    // TODO: Add user to subscription list
    ctx.reply('You have successfully subscribed to daily iPhone price updates!');
});

// unsubscribe command
bot.command('unsubscribe', (ctx) => {
    const chatId = ctx.chat.id;
    // TODO: Remove user from subscription list
    ctx.reply('You have successfully unsubscribed from daily iPhone price updates!');
});

// Launch the bot
bot.launch();
