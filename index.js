require('dotenv').config()
const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MEMBERS',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
    ],
});

client.on('ready', async () => {
    console.log(`
Client › ${client.user.tag}
ClientID › ${client.user.id}
    `);
});

let strings = ['', ''] //! Add trigger words here add more if you'd like

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    let mention = message.mentions?.has(client.user)
    if (mention || new RegExp(strings.join("|")).test(message.content.toLowerCase())) {
        message.reply(/*'Add what you'd like to bot to say when you say the trigger word to ping someone use <@userIDhere>'*/).catch(()=>{});
    }
});

client.login(process.env.token);




