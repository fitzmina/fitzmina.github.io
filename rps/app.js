const resultText = document.querySelector('.result-text');
const computerText = document.querySelector('.computer-text');
const rockEmoji = document.querySelector('.rock').textContent;
const paperEmoji = document.querySelector('.paper').textContent;
const scissorsEmoji = document.querySelector('.scissors').innerText;
const compDivText = document.querySelector('.computer-div-text');
const emojiEls = document.querySelectorAll('.emoji');
const scoreDisplay = document.querySelector('.score-display');

const choice =['rock', 'paper', 'scissors'];

let score = {
    you: 0,
    computer: 0
}

function playGame(playerChoice, element) {

    emojiEls.forEach(emojiEl => {
        emojiEl.style.background = "";
    })

    element.style.background = "darkslategrey";

    let computer = choice[Math.floor(Math.random() * choice.length)];

    if(computer === 'rock'){
        computerText.textContent = rockEmoji;
    }else if(computer === 'paper'){
        computerText.textContent = paperEmoji;
    }else if(computer === 'scissors'){
        computerText.innerText = scissorsEmoji;
    }
    computerText.style.transform = "rotate(270deg)";
    
    let result = '';
    
    if(playerChoice === computer){
        result = 'DRAW!';
    }
    else
    {
        switch(playerChoice){
            case "rock":
                result = (computer === "scissors") ? 'YOU WIN!' : 'YOU LOSE!';
                
                break;
        }
        switch(playerChoice){
            case "paper":
                result = (computer === "rock") ? 'YOU WIN!' : 'YOU LOSE!';
                
                break;
        }
        switch(playerChoice){
            case "scissors":
                result = (computer === "paper") ? 'YOU WIN!' : 'YOU LOSE!';
                
                break;
        }
        
    }
    compDivText.style.display = "block";
    
    if(result === 'YOU WIN!'){
        score.you += 1
    }else if(result === 'YOU LOSE!'){
        score.computer += 1
    }

    scoreDisplay.textContent = `You: ${score.you} — Computer: ${score.computer}`;



    resultText.textContent = result;

    resultText.style.fontSize = '65px';
}