// footer
const footerYear = document.querySelector('#current-year');
const currentYear = new Date();
footerYear.innerText = currentYear.getFullYear();
// footer 



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