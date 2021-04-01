/*
Rock Paper Scissors

a practice assignment by The Odin Project
by Naive D. Jack
first commit - Feb 28, 2021
last update - Apr 1st, 2021

This script plays a game of RPS on your browser.
*/

//TODO: timing of the announcer, disabling/enabling buttons
//I found easier to declare RPS as variables
//just so autocomplete will help me write them
const rock = 'Rock',
paper = 'Paper',
scissors = 'Scissors';

//buttons
const rps = document.querySelectorAll('.rps');
const newGame = document.querySelector('.new-game');
let p1, p2;

//divs
let output = document.querySelector('#output'),
playerScore = Number(document.getElementById('player-score').textContent),
computerScore = Number(document.getElementById('computer-score').textContent),
mainScreen = document.getElementById('main-screen'),
startScreen = document.getElementById('start-screen'),
gameScreen = document.getElementById('game-screen'),
leftSide = document.getElementById('left-side');

//text, all in the same place for consistency
const welcome = "Welcome to Rock Paper Scissors!",
tellRules = "You will face the Computer in a five round match.",
inputError = "Wrong input, sorry!",
gameError = "Uhm... What's going on here?",
gameOver = "The match is over, the winner is...",
winGame = "You! Congratulations!",
loseGame = "The Computer! Glory to the Machines!",
tieGame = "Both! We have a tie!",
winRound = "You win this round!",
loseRound = "The Computer wins this round!",
tieRound = "It's a tie!";

gameScreen = mainScreen.removeChild(gameScreen);

function computerPlay() {
    let play = Math.round(Math.random() * (3-1) + 1);
    if (play === 1) {
        p2 = rock;
    }
    else if (play === 2) {
        p2 = paper;
    }

    else if (play === 3) {
        p2 = scissors;
    }

    return(p2)
}

function playerPlay(p1) {
    if (p1 === "ROCK") {
        p1 = rock;
    }
    else if (p1 === "PAPER") {
        p1 = paper
    }
    else if (p1 === "SCISSORS") {
        p1 = scissors
    }
    else {
        return "Wrong input, sorry!"
    }
    
    round(p1, computerPlay())
}

function round(p1, computerPlay) {
    let result;
    leftSide.style.visibility = 'hidden'; 

    if (p1 === rock) {
        if (p2 == rock) {
            result = "tie";
        }
        else if (p2 == paper) {
            result = "loss";
        }
        else if (p2 == scissors) {
            result = "win";
        }
    }
    else if (p1 === paper) {
        if (p2 == rock) {
            result = "win";
        }
        else if (p2 == paper) {
            result = "tie";
        }
        else if (p2 == scissors) {
            result = "loss";
        }
    }
    else if (p1 === scissors) {
        if (p2 == rock) {
            result = "loss";
        }
        else if (p2 == paper) {
            result = "win";
        }
        else if (p2 == scissors) {
            result = "tie";
        }
    }

    if (result === "win") {
        announcer("You play " + p1 + "!", "Computer plays " + p2 + "!", winRound);
        playerScore += 1
        document.getElementById('player-score').innerText = playerScore;
    }
    else if (result === "loss") {
        announcer("You play " + p1 + "!", "Computer plays " + p2 + "!", loseRound);
        computerScore +=1
        document.getElementById('computer-score').innerText = computerScore;
    }
    else if (result === "tie") {
        announcer("You play " + p1 + "!", "Computer plays " + p2 + "!", tieRound);
        playerScore += 1
        computerScore +=1
        document.getElementById('player-score').innerText = playerScore;
        document.getElementById('computer-score').innerText = computerScore;
    }
    else {
        announcer(gameError);
    }

    if (playerScore == 5 || computerScore == 5) {
        setTimeout( () => {
            gameEnd();
        }, 1000) 
    }
    else {
        setTimeout( () => {
            leftSide.style.visibility = 'visible';
        } , 1000)
    }
}

function gameStart() {
    mainScreen.removeChild(startScreen);
    mainScreen.appendChild(gameScreen);

    playerScore = 0
    computerScore = 0
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
    announcer(welcome, tellRules)
}

function gameEnd() {

    if (playerScore > computerScore) {
        announcer(gameOver, winGame);
    }
    else if (playerScore < computerScore) {
        announcer(gameOver, loseGame);
    }
    else {
        announcer(gameOver, tieGame);
    }

    setTimeout(() => {
        gameScreen.insertBefore(leftSide, gameScreen.childNodes[0]);
        mainScreen.removeChild(gameScreen);
        mainScreen.appendChild(startScreen);
    }, 3000)
}

function announcer(...what) {
    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }
    what.forEach(element => {
        let utterance = document.createElement("P");
        let text = document.createTextNode(element);
        output.appendChild(text);
        document.getElementById("output").appendChild(utterance);
    });
    
}

rps.forEach(element => {
    element.addEventListener('click', () => playerPlay(element.innerText));
}); 

newGame.addEventListener('click', () => gameStart)