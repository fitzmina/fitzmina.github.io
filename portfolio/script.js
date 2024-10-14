import "./universal.js";

const descriptionDiv = document.querySelector(".porfolio-description");

const portfolioCardDiv = document.querySelector(".portfolio-card");
const cardFlip = document.querySelector(".card-flip");

const portBtnContainer = document.querySelector(".port-btn-container");

//desc

let descArray = [
  {
    descP: `Pokemon API. Search Pokemons by their name or Get Random Pokemons. Made from scratch using HTML, CSS, and Vanilla JavaScript.`,
  },
  {
    descP: `Image Slider API. Fetch images from an API. Auto-play and Manual Navigation Buttons. Made from scratch using HTML, CSS, and Vanilla JavaScript.`,
  },
  {
    descP: `Form Validation. Made from scratch using HTML, CSS, and Vanilla JavaScript.`,
  },
  {
    descP: `Tic-Tac-Toe Game. Made from scratch using HTML, CSS, and Vanilla JavaScript.`,
  },
  {
    descP: `Two Player Dice Game with 3D Dice Animation and Score Tracker. Made from scratch using HTML, CSS, and Vanilla JavaScript.`,
  },
  {
    descP: `Timer App. The user can set the time for up to 99 hours. Made from scratch using HTML, CSS, and Vanilla JavaScript.`,
  },
  {
    descP: `Rock — Paper — Scissors Game VS Computer with Score Tracker. Made from scratch using HTML, CSS, and Vanilla JavaScript.`,
  },
  {
    descP: `To-Do List App. This app remembers your completed and pending tasks even after you close or refresh the browser. Made from scratch using HTML, CSS, and Vanilla JavaScript.`,
  },
  {
    descP: `Star Rating. Made from scratch using HTML, CSS, and Vanilla JavaScript.`,
  },
];

descArray.forEach((array, i) => {
  const descCreateDiv = document.createElement("div");
  descCreateDiv.classList.add("port-desc");

  const descCreateP = document.createElement("p");
  descCreateP.textContent = descArray[i].descP;

  descCreateDiv.appendChild(descCreateP);

  descriptionDiv.appendChild(descCreateDiv);
});

descriptionDiv.children[0].classList.add("show");

//desc

//portfolio card

let portCardArray = [
  {
    id: "pokemon",
    link: "https://fitzmina.github.io/pokemon/",
    img: "img/pokemon.png",
    target: "_blank",
  },
  {
    id: "imageslider",
    link: "https://fitzmina.github.io/imageslider/",
    img: "img/imageslider.png",
    target: "_blank",
  },
  {
    id: "form",
    link: "https://fitzmina.github.io/form/",
    img: "img/form.png",
    target: "_blank",
  },
  {
    id: "tictactoe",
    link: "https://fitzmina.github.io/tictactoe/",
    img: "img/tictactoe.png",
    target: "_blank",
  },
  {
    id: "dice",
    link: "https://fitzmina.github.io/dice/",
    img: "img/dice.png",
    target: "_blank",
  },
  {
    id: "timer",
    link: "https://fitzmina.github.io/timer/",
    img: "img/timer.png",
    target: "_blank",
  },
  {
    id: "rps",
    link: "https://fitzmina.github.io/rps/",
    img: "img/rps.png",
    target: "_blank",
  },
  {
    id: "todolist",
    link: "https://fitzmina.github.io/todolist/",
    img: "img/todo.png",
    target: "_blank",
  },
  {
    id: "rating",
    link: "https://fitzmina.github.io/rating/",
    img: "img/rating.png",
    target: "_blank",
  },
];

portCardArray.forEach((array, i) => {
  const portCardCreateA = document.createElement("a");
  portCardCreateA.classList.add("card-content");
  portCardCreateA.classList.add(portCardArray[i].id);
  portCardCreateA.setAttribute("href", portCardArray[i].link);
  portCardCreateA.setAttribute("id", portCardArray[i].id);
  portCardCreateA.setAttribute("target", portCardArray[i].target);

  const portCreateDiv = document.createElement("div");
  portCreateDiv.classList.add("portfolio-img-container");

  const portCreateImg = document.createElement("img");
  portCreateImg.src = portCardArray[i].img;

  portCreateDiv.appendChild(portCreateImg);

  portCardCreateA.appendChild(portCreateDiv);

  portfolioCardDiv.appendChild(portCardCreateA);

  const OpenAppBtn = document.createElement("a");
  OpenAppBtn.classList.add("open-app-btn");
  OpenAppBtn.textContent = "Open App";
  OpenAppBtn.setAttribute("href", portCardArray[i].link);
  OpenAppBtn.setAttribute("target", portCardArray[i].target);

  portBtnContainer.appendChild(OpenAppBtn);
});

portfolioCardDiv.firstElementChild.classList.add("card-show");
portBtnContainer.firstElementChild.classList.add("show");

//portfolio card

//port btn

const viewDescBtnEL = document.createElement("button");
viewDescBtnEL.classList.add("viewDescBtn");
viewDescBtnEL.textContent = "View Description";

portBtnContainer.appendChild(viewDescBtnEL);

const viewDescBtn = document.querySelector(".viewDescBtn");
viewDescBtn.addEventListener("click", () => {
  cardFlip.classList.toggle("flip");

  if (cardFlip.classList.contains("flip")) {
    viewDescBtn.textContent = "View Image";
  } else {
    viewDescBtn.textContent = "View Description";
  }
});

//port btn

//SHUFFLE WORD

const randomLetters = "FITZMINA";
const shuffleWord = document.querySelector(".shuffle-word");

let shuffleInterval = null;

shuffleWord.addEventListener("mouseover", shuffle);

function shuffle() {
  let counter = 0;
  clearInterval(shuffleInterval);
  shuffleInterval = setInterval(() => {
    shuffleWord.innerText = shuffleWord.innerText
      .split("")
      .map((ltr, index) => {
        if (index < counter) {
          return shuffleWord.dataset.word[index];
        }

        return randomLetters[Math.floor(Math.random() * 8)];
      })
      .join("");

    if (counter > shuffleWord.dataset.word.length) {
      clearInterval(shuffleInterval);
    }
    counter += 1 / 4;
  }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
  shuffle();
});

//SHUFFLE WORD

// TYPEWRITER

const typeWriter = document.querySelector(".typewriter");

const typeWords = ["Web Developer", "Financial Advisor", "Technical Support"];

let typeChar = 0;
let typeIndex = 0;

const type = () => {
  if (typeChar < typeWords[typeIndex].length) {
    typeWriter.style.animation = "none";
    typeWriter.textContent += typeWords[typeIndex].charAt(typeChar);
    typeChar++;
    setTimeout(type, 200);
  } else {
    setTimeout(erase, 150);
  }
};

const erase = () => {
  if (typeChar > 0) {
    typeWriter.style.animation = "cursorBlink .3s infinite";
    typeWriter.textContent = typeWords[typeIndex].slice(0, typeChar - 1);
    typeChar--;
    setTimeout(erase, 150);
  } else {
    typeIndex++;
    setTimeout(type, 200);
    if (typeIndex >= typeWords.length) {
      typeIndex = 0;
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// TYPEWRITER

//skill buttons
const jsBtn = document.querySelector(".js-btn");
const htmlBtn = document.querySelector(".html-btn");
const cssBtn = document.querySelector(".css-btn");
const reactBtn = document.querySelector(".react-btn");
// const nodeBtn = document.querySelector('.node-btn');
const tailwindBtn = document.querySelector(".tailwind-btn");
const cube = document.querySelector(".cube");

jsBtn.addEventListener("click", () => {
  cube.style.transform = "rotateX(360deg)";
});
htmlBtn.addEventListener("click", () => {
  cube.style.transform = "rotateY(180deg)";
});

cssBtn.addEventListener("click", () => {
  cube.style.transform = "rotateX(-90deg)";
});

reactBtn.addEventListener("click", () => {
  cube.style.transform = "rotateY(-90deg)";
});

// nodeBtn.addEventListener('click',() =>{
//     cube.style.transform = "rotateY(90deg)";
// });
tailwindBtn.addEventListener("click", () => {
  cube.style.transform = "rotateX(90deg)";
});

//skill buttons

//DROPDOWN

const selectBox = document.querySelector(".select-box");
const selected = document.querySelector(".selected");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownArrow = document.querySelector(".dropdown-arrow");

const dropdownMenuLis = document.querySelectorAll(".dropdown-menu li");
const cardContent = document.querySelectorAll(".card-content");

const portDesc = document.querySelectorAll(".port-desc");
const openAppBtnArray = document.querySelectorAll(".open-app-btn");

console.log(document.querySelectorAll(".open-app-btn"));

selectBox.addEventListener("click", select);

function select() {
  dropdownMenu.classList.toggle("dropdown-open");
  selectBox.classList.toggle("select-box-active");
  dropdownArrow.classList.toggle("dropdown-arrow-active");
}

dropdownMenuLis.forEach((li, index) => {
  li.addEventListener("click", () => {
    const liTarget = document.querySelector(li.dataset.card);

    dropdownMenuLis.forEach((l) => {
      l.classList.remove("dropdown-active");
    });
    li.classList.add("dropdown-active");

    if (window.matchMedia("(max-width: 992px)").matches) {
      dropdownMenu.classList.toggle("dropdown-open");
      dropdownArrow.classList.toggle("dropdown-arrow-active");
      selectBox.classList.toggle("select-box-active");
    }

    // dropdownMenu.classList.toggle("dropdown-open");
    // dropdownArrow.classList.toggle("dropdown-arrow-active");
    // selectBox.classList.toggle("select-box-active");
    selected.textContent = li.textContent;

    cardContent.forEach((c) => {
      c.classList.remove("card-show");
    });

    liTarget.classList.add("card-show");

    portDesc.forEach((pd) => {
      pd.classList.remove("show");
    });
    portDesc[index].classList.add("show");

    openAppBtnArray.forEach((a) => {
      a.classList.remove("show");
    });
    openAppBtnArray[index].classList.add("show");
  });
});

//DROPDOWN
