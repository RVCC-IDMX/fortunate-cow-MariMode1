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

// Mood Feature for the dragon

const moods = ["oo", "^^", "--"];
const randomMood = moods[Math.floor(Math.random() * moods.length)];

// Display a Mustang; didn't work 

console.log(
  cowsay.say({ 
    text: todaysFortune, 
    f: "dragon",
    e: randomMood,
  })
);
