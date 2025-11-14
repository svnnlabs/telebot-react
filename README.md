# Auto Reaction Telegram Bot

Bot Telegram yang memberikan **reaksi otomatis** (Auto Reaction) pada
setiap postingan di channel tempat bot menjadi admin.\
Dengan tampilan console yang nggak bikin bosen !

------------------------------------------------------------------------

## ✨ Fitur Utama

-   🤖 **Auto Reaction** ke setiap channel post
-   🔧 **Easy Setup Bot**
-   😎 **Log Channel Post**

------------------------------------------------------------------------

## 📦 Instalasi

Clone project:

``` bash
git clone https://github.com/svnnlabs/telebot-react.git
cd repo
```

Install dependencies:

``` bash
npm install
```

------------------------------------------------------------------------

## ⚙️ Konfigurasi

Edit file `settings.js` sesuai kebutuhan:

``` js
global.tokenBot = 'TOKEN_TELEGRAM_BOT';
global.requiredChannel = '@usernamechannel';
global.emojiList = ['❤️', '🔥', '😂', '👍', '🤩'];
```

Sebelum memakai, pastikan: 
- ✔️ Bot telah dibuat di @BotFather
- ✔️ Bot telah ditambahkan ke channel
- ✔️ Bot telah menjadi admin

------------------------------------------------------------------------

## 🚀 Menjalankan Bot

Jalankan:

``` bash
npm start
```

Jika berhasil:

    Bot Connected! ✓

------------------------------------------------------------------------

## 🛠️ Teknologi yang Dipakai

-   Node.js
-   Telegraf.js
-   Chalk

------------------------------------------------------------------------

## Credits

Developed by **SavantLabs**\
Contact telegram: **@glngaadttya**
