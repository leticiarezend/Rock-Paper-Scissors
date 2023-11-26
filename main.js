
function getComputerChoice(listaOpcoes) {
    const indice = Math.floor(Math.random() * 3);
    return listaOpcoes[indice];
}

const opcoes = ['Rock', 'Paper', 'Scissors'];
console.log(getComputerChoice(opcoes));