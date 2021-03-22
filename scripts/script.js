/*
Rock Paper Scissors

a practice assignment by The Odin Project
by Naive D. Jack
first commit - Feb 28, 2021
last update - March 1st, 2021

This script plays a game of RPS in the JS console 
of your browser.
*/

//I found easier to declare RPS as variables
//so autocomplete will help me write them
const rock = 'rock',
paper = 'paper',
scissors = 'scissors';

const rps = document.querySelectorAll('.rps');
let p1, p2;


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
    console.log(p1)
    

    if (p1 === "Rock") {
        console.log('rock')
        p1 = rock;
    }
    else if (p1 === "Paper") {
        console.log('paper')
        p1 = paper
    }
    else if (p1 === "Scissors") {
        p1 = scissors
    }
    else {
        console.log("Wrong input, sorry!")
        return "Wrong input, sorry!"
    }
    
    round(p1, computerPlay())
}

function round(p1, computerPlay) {
    let result;

    console.log("You played " + p1 + ".")
    console.log("Computer plays " + p2 + ".")

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
        console.log("You win this round!")
    }
    else if (result === "loss") {
        console.log("The Computer wins this round!")
    }
    else if (result === "tie") {
        console.log("It's a tie!")
    }
    else {
        console.log("Uhm... what's going on here?")
    }

    return result

}

function game() {//plays best of five rounds
    let p1score = 0, p2score = 0;

    //let's have some colour shall we?
    console.log("Welcome to Rock Paper Scissors!")
    console.log("You will face the Computer in a five round match")

        bestOfFive: for (let step = 1; step < 6; ++step) {
        
        console.log("Round " + step)
        let outcome = round();

        if (outcome == "win") {
            ++p1score
            console.log("You have " + p1score + " points and the computer has " + p2score + " points.")
            if (p1score > 2) {
                break bestOfFive;
            }
        }
        else if (outcome == "loss") {
            ++p2score
            console.log("You have " + p1score + " points and the computer has " + p2score + " points.")
            if (p2score > 2) {
                break bestOfFive;
            }
        }
        else if (outcome == "tie") {
            console.log("You have " + p1score + " points and the computer has " + p2score + " points.")
        }
    }

    console.log("Match is over! The winner is...")

    if (p1score > p2score) {
        console.log("You! Congratulations!")
    }
    else if (p1score < p2score) {
        console.log("The Computer! Glory to the Machines!")
    }
    else {
        console.log("Both! We have a tie!")
    }

}

rps.forEach(element => {
    element.addEventListener('click', () => playerPlay(element.innerText));
}); 