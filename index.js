// Step 1: Create an array with Rock, Paper, and Scissors.
const choices = ["Rock", "Paper", "Scissors"];

// Step 2: Generate random selections for the player and computer.
const playerIndex = Math.floor(Math.random() * 3);
const computerIndex = Math.floor(Math.random() * 3);

// Step 3: Create a response message variable.
let responseMessage = "";

// Step 4: Handle the tie scenario.
if (playerIndex === computerIndex) {
    responseMessage = "It's a tie!";
} else {
    // Step 5: Apply game logic using conditions.
    if (
        (playerIndex === 0 && computerIndex === 2) || // Rock beats Scissors
        (playerIndex === 1 && computerIndex === 0) || // Paper beats Rock
        (playerIndex === 2 && computerIndex === 1)    // Scissors beats Paper
    ) {
        responseMessage = "You win!";
    } else {
        responseMessage = "Computer wins!";
    }
}

// Step 6: Create an output message.
const playerSelection = choices[playerIndex];
const computerSelection = choices[computerIndex];

const outputMessage = `Player chose ${playerSelection}, computer chose ${computerSelection}. ${responseMessage}`;

console.log(outputMessage);






