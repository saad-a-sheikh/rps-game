// array to store choices
const choices = ["Rock", "Scissors", "Paper"];

/*
Items are ordered according to precedence: 
- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
*/

// variables to keep track of score
let playerScore = 0;
let compScore = 0;

// function to capitalize first letter of every word
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// function to generate computer's random choice
function getCompChoice() {
    return choices[Math.floor(Math.random() * 3)]; // formula: (max - min + 1) + min  =  (2 - 0 + 1) + 0
}

// function to get player's choice
function getPlayerChoice() {
    let input;

    // runs infinitely till the player chooses one of the three options
    while (true) {
        input = capitalize(prompt("Rock, Paper or Scissors?"));

        // checks whether the input is in the array or not
        if (choices.includes(input)) {
            break;
        }
    }
    return input;
}

export function rps() {
    // variables to store selected option
    let playerSelection = getPlayerChoice();
    let compSelection = getCompChoice();

    // variables for knowing the index at which the chosen choices lie in the array
    let playerSelectionIndex, compSelectionIndex;

    // checking for a draw
    if (playerSelection == compSelection) {
        return `It's a draw! You both chose ${compSelection}.`;
    }

    else {

        // loop to check every option and then initialize the compSelectionIndex playerSelectionIndex variables to respective index at which the choice lies
        for (let i = 0; i < 3; i++) {
            if (playerSelection == choices[i]) {
                playerSelectionIndex = i;
            }

            if (compSelection == choices[i]) {
                compSelectionIndex = i;
            }
        }

        // to check for the exception when computer chooses "Paper" and player chooses "Rock"
        if (compSelectionIndex == 2 && playerSelectionIndex == 0) {
            compScore++;
            return `You Lose! ${compSelection} beats ${playerSelection}.`;
        }

        // if there is no exception, the following code runs
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

// printing the winner of the game
export function getWinner() {
    if (compScore > playerScore) {
        return `Computer wins the game with ${compScore} points.`;
    }

    else {
        return `You win the game with ${playerScore} points.`;
    }
}