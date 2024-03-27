const choices = ["Pedra", "Papel", "Tesoura"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()* 3)]
    let result;

    if(playerChoice === computerChoice){
        result =  "Empate!";
    }

    else{
        switch(playerChoice){
            case "Pedra":
                result = (computerChoice === "Tesoura")? "Você ganhou!":"Você perdeu!"
                break;

            case "Papel":
                result = (computerChoice === "Pedra")? "Você ganhou!":"Você perdeu!"
                break;

            case "Tesoura":
            result = (computerChoice === "Papel")? "Você ganhou!":"Você perdeu!"
            break;
        }
    }
    
    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = result;


    resultDisplay.classList.remove("greentext","redtext")


    switch(result){
        case "Você ganhou!":
            resultDisplay.classList.add("greentext");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;

            case "Você perdeu!":
            resultDisplay.classList.add("redtext");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;


    }

}



