import { rps, getWinner } from "./game-logic.js"

// I haven't given the user an option to choose how many rounds they wish to play. Only 5 for now.

function playGame() {
    for (let i = 1; i < 6; i++) {
        console.log(`ROUND ${i}:`);
        console.log(rps());
    }
}

playGame();
console.log(getWinner());