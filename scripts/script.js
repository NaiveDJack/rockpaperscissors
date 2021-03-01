const rock = 'rock',
paper = 'paper',
scissors = 'scissors';

function computerPlay() {//takes random number and makes a play
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

function playerPlay() {//takes player input and converts it
    let p1 = prompt("Write rock, paper, scissors to play against the computer", "Rock");
    p1 = p1.toLowerCase(); //adapt input
    
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

function round() {//plays out game mechanics
    let p1 = playerPlay();
    let p2 = computerPlay();
    let result;

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

    return result

}


//compare computerPlay with playerPlay
//determine winner
//declare winner