
const choices = ["Rock", "Scissors", "Paper"];
let playerScore = 0;
let compScore = 0;

//function to capitalize first letter of every word
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

//function to generate computer's random choice
function getCompChoice() {
    return choices[Math.floor(Math.random() * (2 + 1))]; //formula: (max - min + 1) + min
}

//function to get player's choice
function getPlayerChoice() {
    let input;
    while (true) {
        input = capitalize(prompt("Rock, Paper or Scissors?"));

        //checks whether the input is in the array or not
        if (choices.includes(input)) {
            break;
        }
    }
    return input;
}

function rps(playerSelection, compSelection) {
    //variables for knowing the index at which the chosen choices lie in the array
    let playerSelectionIndex, compSelectionIndex;

    //checking for a draw
    if (playerSelection == compSelection) {
        return `It's a draw! You both chose ${compSelection}.`;
    }

    else {

        //loop to check every option and then initialize the compSelectionIndex playerSelectionIndex variables to respective index at which the choice lies
        for (let i = 0; i < 3; i++) {
            if (playerSelection == choices[i]) {
                playerSelectionIndex = i;
            }

            if (compSelection == choices[i]) {
                compSelectionIndex = i;
            }
        }

        //to check for the exception when computer chooses "Paper" and player chooses "Rock"
        if (compSelectionIndex == 2 && playerSelectionIndex == 0) {
            compScore++;
            return `You Lose! ${compSelection} beats ${playerSelection}.`;
        }

        //if there is no exception, the following code runs
        else {
            if (playerSelectionIndex < compSelectionIndex) {
                playerScore++;
                return `You Win! ${playerSelection} beats ${compSelection}.`;
            }

            else {
                compScore++;
                return `You Lose! ${compSelection} beats ${playerSelection}.`;
            }
        }
    }
}

function playGame() {
    for (let i = 1; i < 6; i++) {
        console.log(`ROUND ${i}:`);
        console.log(rps(getPlayerChoice(), getCompChoice()));
        console.log(`Computer's score: ${compScore}`);
        console.log(`Player's score: ${playerScore}`);
    }

    if (compScore > playerScore) {
        console.log(`Computer wins the game with ${compScore} points.`);
    }
    
    else {
        console.log(`You win the game with ${playerScore} points.`);
    }
}

playGame();