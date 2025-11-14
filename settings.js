/*
   # Credits Auto Reaction Bot
    ~> Author   : Savantlabs
    ~> Contact  : https://t.me/glngaadttya
    ~> Telegram : https://t.me/svnnlabs
    ~> Github   : https://github.com/svnnlabs
    Note : don't delete credit, appreciate us as developers!.
*/

const fs = require("fs");
const chalk = require("chalk");

//~~~~~~~~ Set Bot & Owner ~~~~~~~~//
global.tokenBot = '8294176672:AAE0DcbDPnPwVVJLAqKr0B2pWw9vWshVLss'
global.requiredChannel = '@svnnlabs'

//~~~~~~~~ Set Random Emoji ~~~~~~~~//
global.emojiList = ['👍', '❤️', '🔥', '👏', '😁', '😍', '😘', '😭', '😡', '👀', '👌', '💋', '🤪'];


let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.blue.bold(">> Update File:"), chalk.black.bgWhite(__filename));
    delete require.cache[file];
    require(file);
});
