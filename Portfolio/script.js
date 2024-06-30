// footer
const footerYear = document.querySelector('#current-year');
const currentYear = new Date();
footerYear.innerText = currentYear.getFullYear();
// footer 


//SHUFFLE WORD

const randomLetters = 'FITZMINA';
const shuffleWord  = document.querySelector('.shuffle-word');

let shuffleInterval = null;

shuffleWord.addEventListener('mouseover', shuffle);


// document.querySelector('.shuffle-word').onmouseover = function(){shuffle()};

function shuffle(){
    counter = 0;
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

typeChar = 0;
typeIndex = 0;


const type = () =>{
    if(typeChar < typeWords[typeIndex].length){
        typeWriter.textContent += typeWords[typeIndex].charAt(typeChar);
        typeChar++
        setTimeout(type, 200);
    }else{
        setTimeout(erase, 150);
    }
}

const erase = () =>{
    if(typeChar > 0){
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




//hamburger

const hamburger = document.querySelector('.fa-solid');
const siteNavUl = document.querySelector('.site-nav ul');


hamburger.addEventListener('click', () => {

    if(hamburger.classList.contains('fa-bars')){
        hamburger.classList.replace('fa-bars', 'fa-times')
    }
    else{
        hamburger.classList.replace('fa-times', 'fa-bars')
    }

    siteNavUl.classList.toggle('show-menu');

});

siteNavUl.addEventListener('click', ()=>{
    siteNavUl.classList.remove('show-menu');
    hamburger.classList.replace('fa-times', 'fa-bars');
});

//hamburger

//dark mode

const dark = document.querySelector('.bi');
const body = document.querySelector('body');
const footer = document.querySelector('footer');


dark.addEventListener('click', () => {



    if(dark.classList.contains('bi-moon-stars')){
        dark.classList.replace('bi-moon-stars', 'bi-brightness-high');
        localStorage.setItem("mode", "light");
    }
    else{
        dark.classList.replace('bi-brightness-high', 'bi-moon-stars');
        localStorage.setItem("mode", "dark");
    }

    body.classList.toggle('light');
    footer.classList.toggle('light');

    

});

let getMode = localStorage.getItem("mode");

if(getMode === "dark"){
    body.classList.add('light');
    footer.classList.add('light');
    dark.classList.replace('bi-brightness-high', 'bi-moon-stars');
}
else{
    body.classList.remove('light');
    footer.classList.remove('light');
    dark.classList.replace('bi-moon-stars', 'bi-brightness-high');
}
//dark mode


//skill buttons
const jsBtn = document.querySelector('.js-btn');
const htmlBtn = document.querySelector('.html-btn');
const cssBtn = document.querySelector('.css-btn');
const reactBtn = document.querySelector('.react-btn');
const nodeBtn = document.querySelector('.node-btn');
const nextBtn = document.querySelector('.next-btn');
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


