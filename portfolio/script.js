import './universal.js';

//desc

let descArray = [
    {
    descP : `Two Player Dice Game with 3D Dice Animation and Score Tracker. Made from scratch using HTML, Pure CSS, and Vanilla JavaScript.` 
    },
    {
    descP : `Timer App. User can set the timer up to 99 hours. Made from scratch using HTML, Pure CSS, and Vanilla JavaScript.` 
    },
    {
    descP : `Rock — Paper — Scissors Game VS Computer with Score Tracker. Made from scratch using HTML, Pure CSS, and Vanilla JavaScript.` 
    }

]

const descriptionDiv = document.querySelector('.porfolio-description');

descArray.forEach((array,i) => {
    const descCreateDiv = document.createElement("div");
    descCreateDiv.classList.add('port-desc');
    
    const descCreateP = document.createElement("p");
    descCreateP.textContent = descArray[i].descP;   

    descCreateDiv.appendChild(descCreateP);

    descriptionDiv.appendChild(descCreateDiv);
    
});
   
descriptionDiv.children[0].classList.add('show');

//desc

//portfolio card

let portCardArray = [
    {
        id: "dice",
        link: "https://fitzmina.github.io/dice/",
        img: "img/dice.png",
        text: "Click to open",
        target: "_blank"
    },
    {
        id: "timer",
        link: "https://fitzmina.github.io/timer/",
        img: "img/timer.png",
        text: "Click to open",
        target: "_blank"
    },
    {
        id: "rps",
        link: "https://fitzmina.github.io/rps/",
        img: "img/rps.png",
        text: "Click to open",
        target: "_blank"
    }

]

const portfolioCardDiv = document.querySelector('.portfolio-card');

portCardArray.forEach((array,i) => {
    const portCardCreateA = document.createElement("a");
    portCardCreateA.classList.add('card-content');
    portCardCreateA.classList.add(portCardArray[i].id);
    portCardCreateA.setAttribute("href", portCardArray[i].link);
    portCardCreateA.setAttribute("id", portCardArray[i].id);
    portCardCreateA.setAttribute("target", portCardArray[i].target);

    
    const portCreateDiv = document.createElement("div");
    portCreateDiv.classList.add('portfolio-img-container');

    const portCreateImg = document.createElement("img");
    portCreateImg.src = portCardArray[i].img;

    const portCreateP = document.createElement("p");
    portCreateP.textContent = portCardArray[i].text;
    portCreateP.classList.add('portfolio-text-container');

    portCreateDiv.appendChild(portCreateImg);
    portCreateDiv.appendChild(portCreateP);

    portCardCreateA.appendChild(portCreateDiv);

    portfolioCardDiv.appendChild(portCardCreateA);
    
});

portfolioCardDiv.firstElementChild.classList.add('card-show');


//portfolio card

//SHUFFLE WORD

const randomLetters = 'FITZMINA';
const shuffleWord  = document.querySelector('.shuffle-word');

let shuffleInterval = null;

shuffleWord.addEventListener('mouseover', shuffle);


// document.querySelector('.shuffle-word').onmouseover = function(){shuffle()};

function shuffle(){
    let counter = 0;
    clearInterval(shuffleInterval);
    shuffleInterval = setInterval (() =>{
        
        shuffleWord.innerText = shuffleWord.innerText.split('').map((ltr, index) => {

                return randomLetters[Math.floor(Math.random() * 8)];
                        
        }).join('');

        if(counter > shuffleWord.dataset.word.length){
            clearInterval(shuffleInterval);
            shuffleWord.innerText = shuffleWord.dataset.word; 
        }
        counter+= 1/2;
        
    }, 100);
    
};

document.addEventListener('DOMContentLoaded', () => {
    shuffle();
});



//SHUFFLE WORD



// TYPEWRITER

const typeWriter = document.querySelector('.typewriter');

const typeWords = ['Web Developer','Financial Advisor', 'Technical Support'];

let typeChar = 0;
let typeIndex = 0;


const type = () =>{
    if(typeChar < typeWords[typeIndex].length){
        typeWriter.style.animation = "none";
        typeWriter.textContent += typeWords[typeIndex].charAt(typeChar);
        typeChar++
        setTimeout(type, 200);
    }else{
        setTimeout(erase, 150);
    }
}

const erase = () =>{
    if(typeChar > 0){
        typeWriter.style.animation = "cursorBlink .3s infinite";
        typeWriter.textContent = typeWords[typeIndex].slice(0, typeChar-1);
        typeChar--;
        setTimeout(erase, 150);
    }else{
        typeIndex++;
        setTimeout(type, 200);
        if(typeIndex >= typeWords.length){
            typeIndex = 0;
        }
    }

}

document.addEventListener("DOMContentLoaded", () => {
    type();
});


// TYPEWRITER




//skill buttons
const jsBtn = document.querySelector('.js-btn');
const htmlBtn = document.querySelector('.html-btn');
const cssBtn = document.querySelector('.css-btn');
// const reactBtn = document.querySelector('.react-btn');
// const nodeBtn = document.querySelector('.node-btn');
// const nextBtn = document.querySelector('.next-btn');
const cube = document.querySelector('.cube');

jsBtn.addEventListener('click',() =>{
    cube.style.transform = "rotateX(360deg)";
});
htmlBtn.addEventListener('click',() =>{
    cube.style.transform = "rotateY(180deg)";
});

cssBtn.addEventListener('click',() =>{
    cube.style.transform = "rotateX(-90deg)";
});

// reactBtn.addEventListener('click',() =>{
//     cube.style.transform = "rotateY(-90deg)";
// });
// nodeBtn.addEventListener('click',() =>{
//     cube.style.transform = "rotateY(90deg)";
// });
// nextBtn.addEventListener('click',() =>{
//     cube.style.transform = "rotateX(90deg)";
// });


//skill buttons

//DROPDOWN

const selectBox = document.querySelector('.select-box');
const selected = document.querySelector('.selected');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownArrow = document.querySelector('.dropdown-arrow');

const dropdownMenuLis = document.querySelectorAll('.dropdown-menu li');
const cardContent = document.querySelectorAll('.card-content');

const portDesc = document.querySelectorAll('.port-desc');


selectBox.addEventListener('click', () => {
    dropdownMenu.classList.toggle('dropdown-open');
    selectBox.classList.toggle('select-box-active');
    dropdownArrow.classList.toggle('dropdown-arrow-active');
});

dropdownMenuLis.forEach((li, index) => {

    li.addEventListener('click', () => {

        const liTarget = document.querySelector(li.dataset.card);
        
        dropdownMenuLis.forEach((l) => {
            l.classList.remove('dropdown-active');
        });
        li.classList.add('dropdown-active');
        dropdownMenu.classList.toggle('dropdown-open');
        dropdownArrow.classList.toggle('dropdown-arrow-active');
        selected.textContent = li.textContent;

        cardContent.forEach((c) => {
            c.classList.remove('card-show');
        });

        liTarget.classList.add('card-show');
        selectBox.classList.toggle('select-box-active');

        if(window.matchMedia('(min-width: 992px)').matches){
            portDesc.forEach((pd) => {
                pd.classList.remove('show');
            });
            portDesc[index].classList.add('show');

        }
        

    });


});



//DROPDOWN


