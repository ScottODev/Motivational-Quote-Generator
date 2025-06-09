const m_quote = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Do what you can, with what you have, where you are.",
    "Hard choices, easy life. Easy choices, hard life.",
    "Push yourself, because no one else is going to do it for you.",
    "Whether you think you can or you think you can't, you're right.",
    "Your only limit is your mind.",
    "Growth begins at the end of your comfort zone.",
    "Don’t limit your challenges. Challenge your limits."
    ];

const randomIndex = Math.floor(Math.random() * m_quote.length);
const quoteOfTheDay = m_quote[randomIndex];

console.log(quoteOfTheDay);