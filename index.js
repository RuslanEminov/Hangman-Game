
var programming_languages = [
    'python', 'javascript', 'c', 'java', 'sql', 'react'
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
    alert(answer);
}

function generateButtons() {
    let buttonsHtml = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => `<button
    class="btn btn-lg btn-primary m-2"
    id='` + letter + `'onclick=handleGuess('` +
        letter +
        `')">
    ` + letter + `</button>`).join('');

    


    document.getElementById('keyboard').innerHTML = buttonsHtml;
}
randomWord();
generateButtons();


function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
   
    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
        checkIfGameLost();
        
    } else if (answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateHangmanMistakes();
        checkIfGameLost();
        updateHangmanPicture();
    }
}

function updateHangmanPicture() {
    document.getElementById('hangmanPic').src = './images/' + mistakes + 'jpg';
}

function checkIfgameWon() {
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'You won!';
    }
}

function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById('wordSpotlight').innerHTML = 'The answer was:' + answer;
        document.getElementById('keyboard').innerHTML = 'You lost!';
    }
}

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : "_")).join('');
    
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/0.jpg';
    
    randomWord();
    generateButtons();
    guessedWord();
}
document.getElementById('maxWrong').innerHTML = maxWrong;
randomWord();
generateButtons();
guessedWord();