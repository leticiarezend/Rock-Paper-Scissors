
const opcoes = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(listaOpcoes) {
    const indice = Math.floor(Math.random() * 3);
    return listaOpcoes[indice];
}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    var youLose = (playerSelection == "rock" && computerSelection == "paper") 
                  || (playerSelection == "paper" && computerSelection == "scissors") 
                  || (playerSelection == "scissors" && computerSelection == "rock");
    if(youLose){
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection == computerSelection){
        return `It's a draw! Your choice was ${playerSelection} and the computer's choice was also  ${computerSelection}`
    }
    else{
        return `You Won! ${playerSelection} beats ${computerSelection} `
    }

}

let compChoice =  getComputerChoice(opcoes);
let playerChoice = "scissors";


console.log("Computer's choice: " + compChoice);
console.log("Your choice: " + playerChoice);
console.log("_______ Game_____")
console.log(playRound(playerChoice, compChoice));