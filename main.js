
const opcoes = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(listaOpcoes) {
    const indice = Math.floor(Math.random() * 3);
    return listaOpcoes[indice];
}


function playerLose(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (
        (playerSelection == "rock" && computerSelection == "paper")
        || (playerSelection == "paper" && computerSelection == "scissors")
        || (playerSelection == "scissors" && computerSelection == "rock")
    ) {
        return true;
    } else if (playerSelection == computerSelection) {
        return "draw"
    }
}


function playRound(playerSelection, computerSelection) {

    let youLose = playerLose(playerSelection, computerSelection);
    if (youLose == "draw") {
        return `It's a draw!`
    }

    else if (youLose) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else if (!youLose) {
        return `You Won! ${playerSelection} beats ${computerSelection} `
    }

}

