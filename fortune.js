// fortune.js - Fortunate Cow

import * as cowsay from "cowsay";


// Lana Del Rey - White Mustang lyrics:https://genius.com/Lana-del-rey-white-mustang-lyrics

const fortunes = [
  "White Mustang.",
  "You're a wild Mustang.",
  "The day I saw your White Mustang.",
];


// Pick a random fortune

const randomIndex = Math.floor(Math.random() * fortunes.length);
const todaysFortune = fortunes[randomIndex];

// Mood Feature for the Mustang

const moods = ["oo", "^^", "--"];
const randomMood = moods[Math.floor(Math.random() * moods.length)];

// Display a Mustang 

console.log(
  cowsay.say({ 
    text: todaysFortune, 
    f: "Mustang",
    e: randomMood,
  })
);
