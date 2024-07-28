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

// where the result will be displayed
const resultParagraph = document.getElementById('result');

function rps(event) {
    // variables to store selected option
    let playerSelection = event.target.getAttribute('data-choice');
    let compSelection = choices[Math.floor(Math.random() * 3)]; // formula: (max - min + 1) + min  =  (2 - 0 + 1) + 0

    let result = getWinner(playerSelection, compSelection);

    resultParagraph.innerText = `You chose ${playerSelection}. The computer chose ${compSelection}. ${result}`;
    
}

// getting the winner of the game
export function getWinner(playerSelection, compSelection) {
    if (playerSelection === compSelection) {
        return "It's a tie!";
    }
    if (
        (playerSelection === 'Rock' && compSelection === 'Scissors') ||
        (playerSelection === 'Paper' && compSelection === 'Rock') ||
        (playerSelection === 'Scissors' && compSelection === 'Paper')
    ) {
        return "You win!";
    }
    return "You lose!";
}