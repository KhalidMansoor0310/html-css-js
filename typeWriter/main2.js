let isPlaying;
let time = 5;
let score;
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

function generateRandomWords(){
    let randWordsIndex = Math.floor(Math.random()*words.length);
    currentWord.innerHTML = words[randWordsIndex];
}
generateRandomWords();
wordInput.addEventListener('input',startMatch);
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = 6;
        wordInput.value = "";
        generateRandomWords();
        score++;

    }
}

// Match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
      message.innerHTML = 'Correct!!!';
      return true;
    } else {
      message.innerHTML = '';
      return false;
    }
  }


  // Countdown timer
function countdown() {
    // Make sure time is not run out
    if (time > 0) {
      // Decrement
      time--;
    } else if (time === 0) {
      // Game is over
      isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
  }
  
  // Check game status
  function checkStatus() {
    if (!isPlaying && time === 0) {
      message.innerHTML = 'Game Over!!!';
      score = -1;
    }
  }
  checkStatus();
  countdown();