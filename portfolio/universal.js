// footer
export const footerYear = document.querySelector("#current-year");
export const currentYear = new Date();
footerYear.innerText = currentYear.getFullYear();
// footer

//hamburger

export const hamburger = document.querySelector(".fa-solid");
export const siteNavUl = document.querySelector(".site-nav ul");

export function hamburgerMenu() {
  if (hamburger.classList.contains("fa-bars")) {
    hamburger.classList.replace("fa-bars", "fa-times");
  } else {
    hamburger.classList.replace("fa-times", "fa-bars");
  }

  siteNavUl.classList.toggle("show-menu");
}
hamburger.addEventListener("click", hamburgerMenu);

// hamburger.addEventListener('click', () => {

//     if(hamburger.classList.contains('fa-bars')){
//         hamburger.classList.replace('fa-bars', 'fa-times')
//     }
//     else{
//         hamburger.classList.replace('fa-times', 'fa-bars')
//     }

//     siteNavUl.classList.toggle('show-menu');

// });

export function showMenu() {
  siteNavUl.classList.remove("show-menu");
  hamburger.classList.replace("fa-times", "fa-bars");
}

siteNavUl.addEventListener("click", showMenu);

// siteNavUl.addEventListener('click', ()=>{
//     siteNavUl.classList.remove('show-menu');
//     hamburger.classList.replace('fa-times', 'fa-bars');
// });

//hamburger

//dark mode

export const darkIcons = document.querySelector(".bi");
export const body = document.querySelector("body");
export const footer = document.querySelector("footer");

export function darkMode() {
  if (darkIcons.classList.contains("bi-brightness-high")) {
    darkIcons.classList.replace("bi-brightness-high", "bi-moon-stars");
    localStorage.setItem("mode", "dark");
  } else {
    darkIcons.classList.replace("bi-moon-stars", "bi-brightness-high");
    localStorage.setItem("mode", "light");
  }

  body.classList.toggle("light");
  footer.classList.toggle("light");

  console.log(darkIcons);
}

darkIcons.addEventListener("click", darkMode);

export function getDarkMode() {
  let getMode = localStorage.getItem("mode");

  if (getMode === "light") {
    body.classList.add("light");
    footer.classList.add("light");
    darkIcons.classList.replace("bi-moon-stars", "bi-brightness-high");
  } else {
    body.classList.remove("light");
    footer.classList.remove("light");
    darkIcons.classList.replace("bi-brightness-high", "bi-moon-stars");
  }
}

getDarkMode();

// dark.addEventListener('click', () => {

//     if(dark.classList.contains('bi-moon-stars')){
//         dark.classList.replace('bi-moon-stars', 'bi-brightness-high');
//         localStorage.setItem("mode", "light");
//     }
//     else{
//         dark.classList.replace('bi-brightness-high', 'bi-moon-stars');
//         localStorage.setItem("mode", "dark");
//     }

//     body.classList.toggle('light');
//     footer.classList.toggle('light');

// });

// let getMode = localStorage.getItem("mode");

// if(getMode === "dark"){
//     body.classList.add('light');
//     footer.classList.add('light');
//     dark.classList.replace('bi-brightness-high', 'bi-moon-stars');
// }
// else{
//     body.classList.remove('light');
//     footer.classList.remove('light');
//     dark.classList.replace('bi-moon-stars', 'bi-brightness-high');
// }
//dark mode
