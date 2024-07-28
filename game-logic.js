// array to store choices
const choices = ["Rock", "Scissors", "Paper"];

/*
Items are ordered according to precedence: 
- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
*/

// getting player's choice
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', rps);
    });
});

// Disable all buttons when the game is finished
function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// where the result will be displayed
const resultParagraph = document.getElementById('result');

// where the score will be visible
const divCompScore = document.getElementById("compScore");
const divPlayerScore = document.getElementById("playerScore");

// variables to store the score
let compScore = 0;
let playerScore = 0;
const winningScore = 5;

function rps(event) {
    // variables to store selected option
    let playerSelection = event.target.getAttribute('data-choice');
    let compSelection = choices[Math.floor(Math.random() * 3)]; // formula: (max - min + 1) + min  =  (2 - 0 + 1) + 0

    let result = getResult(playerSelection, compSelection);

    resultParagraph.innerText = `You chose ${playerSelection}. The computer chose ${compSelection}. ${result}`;
    
    divCompScore.innerText = compScore;
    divPlayerScore.innerText = playerScore;

    // Check if someone has won
    if (compScore >= winningScore || playerScore >= winningScore) {
        disableButtons();
        resultParagraph.innerText += ` Game over!`;
    }
}

// getting the winner of the game
function getResult(playerSelection, compSelection) {
    if (playerSelection === compSelection) {
        return "It's a tie!";
    }
    if (
        (playerSelection === 'Rock' && compSelection === 'Scissors') ||
        (playerSelection === 'Paper' && compSelection === 'Rock') ||
        (playerSelection === 'Scissors' && compSelection === 'Paper')
    ) {
        playerScore++;
        return "You win!";
    }
    compScore++;
    return "You lose!";
}
