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

    console.log("You played " + p1 + ".")
    console.log("Computer plays " + p2 + ".")

    //compares and determines outcome
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

    //declares outcome through console
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

function game() {//plays 5 rounds and determines a winner
    let p1score = 0, p2score = 0;

    console.log("Welcome to Rock Paper Scissors!")
    console.log("You will face the Computer in a five round match")

    //5 round and keeps score
    bestOfThree: for (let step = 1; step < 6; ++step) {
        
        console.log("Round " + step)
        let outcome = round();

        if (outcome == "win") {
            ++p1score
            console.log("You have " + p1score + " points and the computer has " + p2score + " points.")
            if (p1score > 2) {
                break bestOfThree;
            }
        }
        else if (outcome == "loss") {
            ++p2score
            console.log("You have " + p1score + " points and the computer has " + p2score + " points.")
            if (p2score > 2) {
                break bestOfThree;
            }
        }
        else if (outcome == "tie") {
            console.log("You have " + p1score + " points and the computer has " + p2score + " points.")
        }
    }

    //checks score and declares winner
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

//compare computerPlay with playerPlay
//determine winner
//declare winner