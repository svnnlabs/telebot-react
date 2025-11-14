require('./settings');

const { Telegraf, Markup } = require('telegraf');
const chalk = require("chalk");

const bot = new Telegraf(global.tokenBot);

async function checkUserJoinedChannel(userId) {
    try {
        const member = await bot.telegram.getChatMember(global.requiredChannel, userId);
        return ['member', 'administrator', 'creator'].includes(member.status);
    } catch (error) {
        return false;
    }
}

bot.command('start', async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name;

    const hasJoined = await checkUserJoinedChannel(ctx.from.id);
    if (!hasJoined) {
        await ctx.reply(
            `👋 Halo ${username}!\n\nSebelum kamu mengakses bot ini, ikuti kami di ${global.requiredChannel} dulu yuk!`,
            Markup.inlineKeyboard([
                [Markup.button.url(`Ikuti Sekarang`, `https://t.me/${global.requiredChannel.replace('@', '')}`)],
                [Markup.button.callback('✅ Sudah Mengikuti', 'check_join')]
            ])
        );
        return;
    }

    await ctx.reply(
        `👋 Selamat datang ${username}..\n\nAuto Reaction Bot telah siap dipakai!\n\n` +
        `Silahkan tambahkan bot ke channel sebagai admin dengan tombol dibawah ini.`,
        Markup.inlineKeyboard([
            [Markup.button.url('➕ Tambah ke Channel', `https://t.me/${bot.botInfo.username}?startchannel=true`)],
        ])
    );
});

bot.action('check_join', async (ctx) => {
    await ctx.answerCbQuery();
    const hasJoined = await checkUserJoinedChannel(ctx.from.id);
    if (hasJoined) {
        await ctx.reply('✅ Akses berhasil diberikan! Silahkan start bot kembali.');
    } else {
        await ctx.reply('❌ Terdeteksi, kamu belum mengikuti!');
    }
});

bot.on('channel_post', async (ctx) => {
    const message = ctx.update.channel_post;
    const randomEmoji = global.emojiList[Math.floor(Math.random() * global.emojiList.length)];

    try {
        let channelInfo = `ID: ${message.chat.id}`;
        try {
            const chat = await ctx.telegram.getChat(message.chat.id);
            channelInfo = `"${chat.title}" (${chat.username ? '@' + chat.username : 'Private'})`;
        } catch (e) { }

        await ctx.telegram.setMessageReaction(
            message.chat.id,
            message.message_id,
            [{ type: 'emoji', emoji: randomEmoji }]
        );

        console.log(chalk.bgHex('#0000FF').hex('#ffffffff').bold(' REACTED ') + ' ' +
            chalk.hex('#FF00FF')(' \n❯❯ ') +
            chalk.hex('#FFFF00')(`${channelInfo}`));
    } catch (error) {
        let channelInfo = `ID: ${message.chat.id}`;
        try {
            const chat = await ctx.telegram.getChat(message.chat.id);
            channelInfo = `"${chat.title}" (${chat.username ? '@' + chat.username : 'Private'})`;
        } catch (e) { }
        console.log(chalk.bgHex('#ff0000ff').hex('#ffffffff').bold(' FAILED ') + ' ' +
            chalk.hex('#ffffffff')(`${error.message}`) +
            chalk.hex('#FF00FF')(' \n❯❯ ') +
            chalk.hex('#FFFF00')(`${channelInfo}`));
    }
});

bot.launch();
console.log(chalk.bgHex('#90EE90').hex('#333').bold(' Bot Connected! ✓ '));