
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
function countRounds() {
    numberOfRounds++;
    const new_p = `Round ${numberOfRounds}`;
    document.querySelector('#rounds').innerHTML = new_p;
}

// function game() {

//     let computerPoints = 0;
//     let playerPoints = 0;
//     for (let i = 0; i < 5; i++) {
//         let compChoice = getComputerChoice(opcoes);
//         let playerChoice = prompt(" ");

//         console.log(`Round ${i + 1}/5`);
//         console.log("Computer's choice: " + compChoice);
//         console.log("Your choice: " + playerChoice);
//         console.log(playRound(playerChoice, compChoice,playerPoints, computerPoints));
//     }
// }
// game()
function restartGame() {
    numberOfRounds = 0;
    playerPoints = 0;
    computerPoints = 0;
    document.querySelector('#rounds').innerHTML = ' ';
    document.querySelector('#scoreboard_text').innerHTML = '';
    document.querySelector('#result_text').innerHTML = '';
    document.querySelector('#selection').innerHTML = '';

}

let numberOfRounds = 0;
let playerPoints = 0;
let computerPoints = 0;



let submissionCount = 0;

document.querySelector("form").onsubmit = () => {
    countRounds();
    if (submissionCount < 5) {
        const playerSelection = document.querySelector("#choice").value.toLowerCase();

        if (playerSelection != "paper" && playerSelection != "rock" && playerSelection != "scissors") {

            alert("Opção invalida")
            const keepPlaceholder = document.querySelector("#choice").value;
            keepPlaceholder.style.color = gray;
            keepPlaceholder.value = '';
        }
        else {
            const computerSelection = getComputerChoice(opcoes);
            const result = playRound(playerSelection, computerSelection);
            const youLose = playerLose(playerSelection, computerSelection);


            if (youLose == "draw") {

            } else if (youLose) {
                computerPoints += 1;
            }

            else {
                playerPoints += 1;
            }


            document.querySelector('#scoreboard_text').innerHTML = `You: ${playerPoints} X Computer: ${computerPoints}`;
            let score = document.getElementById('scoreboard_text');
            score.classList.add('use_border');
            document.querySelector('#result_text').innerHTML = result;
            document.querySelector('#selection').innerHTML = `Computer's choice: ${computerSelection}  <br> x <br> Your choice: ${playerSelection}`;


            submissionCount++;

            document.querySelector("#choice").value = '';
        }

    }

    if (submissionCount >= 5) {
        document.querySelector('.submit_button').disabled = true;

        let winner;

        if (playerPoints > computerPoints) {
            winner = "Congratulations!! You are the winner!"
        } else if (playerPoints == computerPoints) {
            winner = "Oops, there's no winner. It's a draw!!"
        }
        else {
            winner = "You lose! The computer is the winner";
        }
        document.querySelector('#result_text').innerHTML = "The rounds are over! <br>" + winner;
        var restart = document.createElement('button');
        restart.textContent = "Play again!"
        restart.classList.add('restart_btn')
        document.querySelector('.scoreboard').append(restart);

    }
    return false;
}