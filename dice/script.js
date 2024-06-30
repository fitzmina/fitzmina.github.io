const btn = document.querySelector('.dice-btn');
const btn2 = document.querySelector('.dice-btn2');

const diceImg = document.querySelector('.dice-img');
const diceImg2 = document.querySelector('.dice-img2');

const p1Score = document.querySelector('.p1-score');
const p2Score = document.querySelector('.p2-score');
const result = document.querySelector('.result');

const modal = document.querySelector('.modal');

const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');

const cube = document.querySelector('.cube');
const cube2 = document.querySelector('.cube2');

// const cubeReset = document.querySelectorAll('.cube-reset');

let diceArr = [];

let p1First = false;
let p1Clicked = false;

let scoreCount1 = 0;
let scoreCount2 = 0;

btn.addEventListener('click', start);
btn2.addEventListener('click', player2);


function diceRoll(){
    let random = Math.floor(Math.random()*6) + 1;
    return random;
}

function start(){
    if(!p1First){
        let first = diceRoll()
        diceArr.push(first)
        if(first == 1){
            cube.style.transform = "rotateX(360deg)";
        }else if(first == 2){
            cube.style.transform = "rotateY(180deg)";
        }else if(first == 3){
            cube.style.transform = "rotateX(-90deg)";
        }else if(first == 4){
            cube.style.transform = "rotateY(-90deg)";
        }else if(first == 5){
            cube.style.transform = "rotateY(90deg)";
        }
        else{
            cube.style.transform = "rotateX(90deg)";
        }

        p1First = true;
        p1Clicked = true;
    }

}

function player2(){
    if (p1First && p1Clicked){
        let second = diceRoll();
        diceArr.push(second);
        if(second == 1){
            cube2.style.transform = "rotateX(360deg)";
        }else if(second == 2){
            cube2.style.transform = "rotateY(180deg)";
        }else if(second == 3){
            cube2.style.transform = "rotateX(-90deg)";
        }else if(second == 4){
            cube2.style.transform = "rotateY(-90deg)";
        }else if(second == 5){
            cube2.style.transform = "rotateY(90deg)";
        }
        else{
            cube2.style.transform = "rotateX(90deg)";
        }
        p1Clicked = false;
        
        if(diceArr[1] < diceArr[0]){
            setTimeout(() => {
                scoreCount1 = scoreCount1+=1;
                p1Score.textContent = scoreCount1;
                result.textContent = 'PLAYER 1 WINS!';
                showModal();
            },2000)
        }else if(diceArr[0] < diceArr[1]){
            setTimeout(() => {
                scoreCount2 = scoreCount2+=1;
                p2Score.textContent = scoreCount2;
                result.textContent = 'PLAYER 2 WINS!';
                showModal();
            },2000)
        }else{
            setTimeout(() => {
                result.textContent = 'DRAW!';
                showModal();
            },2000)
        }

    
    }

}

const showModal = () =>{
    setTimeout(() => {
        modal.style.display = 'flex';            
                
    },1000);
}

yesBtn.addEventListener('click', () => {
    p1First = false;
    modal.style.display = 'none';  
    diceArr = [];
    result.textContent = 'Dice Game';

    cube.style.transform = "rotateX(-15deg) rotateY(15deg)";
    cube2.style.transform = "rotateX(-15deg) rotateY(-15deg)";
    

    // cubeReset.forEach((item) => {
    //     item.style.transform = "rotateX(0deg) rotateY(-15deg)";
    //     console.log(item);
    // });


});

noBtn.addEventListener('click', () => {
    window.close();
    // location.reload();
});




