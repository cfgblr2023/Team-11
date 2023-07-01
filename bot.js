const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(******', { polling: true });


//const bot = new TelegramBot(token);

// Define the options for the language dropdown menu
const languageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: 'English', callback_data: 'en' },
        { text: 'Kannada', callback_data: 'kn' },
        { text: 'Hindi', callback_data: 'hi' }
      ]
    ]
  }
};

// Define the options for the main dropdown menu
const mainOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: 'Donate', url: 'https://pages.razorpay.com/studycenter' },
        { text: 'Register as volunteer', url: 'https://forms.gle/y68TqYbiJ1QCufKLA' },
        { text: 'Register as student', url: 'https://forms.gle/TMmUQGZkV6vEryLp9' }
      ]
    ]
  }
};

// Listen for a message containing 'hi' and respond with a greeting and the language dropdown menu
bot.on('message', (msg) => {
  if (msg.text.toString().toLowerCase().indexOf('hi') === 0) {
    bot.sendMessage(msg.chat.id, `Hi ${msg.from.first_name}, welcome to the Study Center Bot! Choose a language:`, languageOptions);
  } else if (msg.text.toString().toLowerCase().indexOf('bye') === 0) {
    bot.sendMessage(msg.chat.id, `Goodbye ${msg.from.first_name}!`);
  }
});

// Listen for a callback query from the language dropdown menu and respond with a message in the selected language and the main dropdown menu
bot.on('callback_query', (callbackQuery) => {
  const language = callbackQuery.data;
  const chatId = callbackQuery.message.chat.id;
  
  // Define the text for each language option
  let text = '';
  if (language === 'en') {
    text = 'What do you want to do today?';
  } else if (language === 'kn') {
    text = 'ನೀವು ಇಂದು ಏನು ಮಾಡಲು ಬಯಸುತ್ತೀರಿ?';
  } else if (language === 'hi') {
    text = 'आप आज क्या करना चाहते हैं?';
  }
  
  // Send a message in the selected language and the main dropdown menu to the user
  bot.sendMessage(chatId, text, mainOptions);
});

// Start the bot and keep it running indefinitely
bot.startPolling();