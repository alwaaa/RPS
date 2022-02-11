let humanScore = 0;
let compScore = 0;

// All possible comp choices
let choices = ['rock', 'paper', 'scissors'];
// Assigh computer choice to a variable
let compChoice = computerPlay();

// Takes rock, paper or scissors for comp
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Player takes a choice
let playerChoice = input();

function input() {
return prompt('Hello, choose rock, paper or scissors');
}

function playRound() {
    computerPlay();
    if (playerChoice === compChoice) {
        alert("It is a draw");
    } else if (playerChoice === 'rock' && compChoice === 'scissors' ) {
        alert(`You won'. I had ${compChoice}`);
        humanScore++;
    } else if (playerChoice === 'scissors' && compChoice === 'paper' ) {
        alert(`You won'. I had ${compChoice}`);
        humanScore++;
    } else if (playerChoice === 'paper' && compChoice === 'rock') {
        alert(`You won'. I had ${compChoice}`);
        humanScore++;
    } else {
        alert(`You lost. I had ${compChoice}`);
        compScore++;
    }
}

playRound();

