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

function computerPlay() {
    let play = Math.round(Math.random() * (3-1) + 1);
    let answer
    if (play === 1) {
        answer = rock;
    }
    else if (play === 2) {
        answer = paper;
    }

    else if (play === 3) {
        answer = scissors;
    }
    return(answer)
}

function playerPlay() {
    let p1 = prompt("Write rock, paper, scissors to play against the computer");
    p1 = p1.toLowerCase(); //to allow case insensitive input
    
    if (p1 === "rock") {
        p1 = rock;
    }
    else if (p1 === "paper") {
        p1 = paper
    }
    else if (p1 === "scissors") {
        p1 = scissors
    }
    else {
        return "Wrong input, sorry!"
    }
    
    return p1
}

function round() {
    let p1 = playerPlay();
    let p2 = computerPlay();
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