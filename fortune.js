// fortune.js - Fortunate Cow
import * as cowsay from "cowsay";

// YOUR FORTUNES: Replace these with your own!
// Pick a theme that interests you: motivational quotes, coding tips,
// jokes, song lyrics, advice to your future self — whatever you want.

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

// Display a White Mustang 

console.log(
  cowsay.say({ 
    text: todaysFortune, 
    f: "Whote Mustang",
    e: randomMood,
  })
);
