const cardContainer = document.querySelector(".card-container");

const card = document.createElement("div");
card.classList.add("card-style");

cardContainer.appendChild(card);

const cardImgContainer = document.createElement("div");

cardImgContainer.classList.add("card-img-container");

card.appendChild(cardImgContainer);

const cardImgContainerInner = document.createElement("div");
cardImgContainerInner.classList.add("card-img-container-inner");
cardImgContainer.appendChild(cardImgContainerInner);

const cardStats = document.createElement("div");
cardStats.classList.add("card-stats-style");
card.appendChild(cardStats);

const dpadDiv = document.createElement("div");
dpadDiv.classList.add("dpad-div-style");

cardStats.appendChild(dpadDiv);

const dpad = document.createElement("div");
dpad.classList.add("dpad-style");

dpadDiv.appendChild(dpad);

const abDiv = document.createElement("div");
abDiv.classList.add("ab-div-style");

cardStats.appendChild(abDiv);

const aBtn = document.createElement("button");
aBtn.classList.add("a-btn-style");

abDiv.appendChild(aBtn);

const aLtr = document.createElement("span");
aLtr.classList.add("a-ltr");
aLtr.textContent = "A";
abDiv.appendChild(aLtr);

const bLtr = document.createElement("span");
bLtr.classList.add("b-ltr");
bLtr.textContent = "B";
abDiv.appendChild(bLtr);

const bBtn = document.createElement("button");
bBtn.classList.add("b-btn-style");

abDiv.appendChild(bBtn);

const selectBtn = document.createElement("div");
selectBtn.classList.add("select-btn-style");

dpadDiv.appendChild(selectBtn);

const startBtn = document.createElement("div");
startBtn.classList.add("start-btn-style");

abDiv.appendChild(startBtn);

const maxNum = 650;

const pokeInput = document.querySelector(".poke-input");
const pokeContainer = document.querySelector("[data-container]");
const pokeTemplate = document.querySelector("[data-template]");
const searchContainer = document.querySelector(".search-container");

searchContainer.append(pokeContainer);

let pokemonsList = [];

document.body.addEventListener("click", (e) => {
  pokeContainer.classList.add("hide");
  pokeInput.value = null;
});

pokeContainer.addEventListener("click", (e) => {
  pokeContainer.classList.add("hide");
  homeDisplay.style.display = "none";
  let url = `https://pokeapi.co/api/v2/pokemon/${e.target.textContent}`;
  getPokemon(url);
});

pokeInput.addEventListener("input", (e) => {
  let pokeName = e.target.value.trim().toLowerCase();

  if (!pokeName) {
    // homeDisplay.style.display = "block";
    pokeContainer.classList.add("hide");
  } else {
    pokeContainer.classList.remove("hide");

    pokemonsList.forEach((pokemon) => {
      const show = pokemon.name.toLowerCase().includes(pokeName);
      pokemon.element.classList.toggle("hide", !show);
    });
  }
});

async function getPokemonsList() {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=649";
    const res = await fetch(url);

    const data = await res.json();

    pokemonsList = data.results.map((pokemonName) => {
      const card = pokeTemplate.content.cloneNode(true).children[0];
      const pokeLink = card.querySelector("[data-poke-link]");
      pokeLink.textContent = pokemonName.name;

      pokeContainer.append(card);

      return { name: pokemonName.name, element: card };
    });
  } catch (error) {
    console.error(error);
  }
}

getPokemonsList();

const homeDisplay = document.createElement("p");
homeDisplay.classList.add("home-display");

homeDisplay.textContent = "Press A or B to Get Random Pokemon.";

cardImgContainerInner.appendChild(homeDisplay);

document.querySelector(".a-btn-style").addEventListener("click", () => {
  homeDisplay.style.display = "none";
  let randomNumber = Math.floor(Math.random() * 650);
  let url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
  getPokemon(url);
});

document.querySelector(".b-btn-style").addEventListener("click", () => {
  homeDisplay.style.display = "none";
  let randomNumber = Math.floor(Math.random() * 650);
  let url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
  getPokemon(url);
});

const getPokemon = async (url) => {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      cardImg.style.display = "none";
      row1Stats.style.display = "none";

      // throw new Error("Pokemon Not Found!");
    }
    const data = await response.json();

    displayImg(data.sprites.front_default);

    displayData(
      data.name,
      data.stats[0].base_stat,
      data.stats[1].base_stat,
      data.stats[2].base_stat,
      data.stats[5].base_stat
    );
    pokeInput.value = null;
  } catch (error) {
    console.log(error);
  }
};

const cardImg = document.createElement("img");
cardImg.classList.add("card-img");

cardImgContainerInner.appendChild(cardImg);

function displayImg(img1) {
  cardImg.style.display = "block";
  cardImg.src = img1;
}

const row1Stats = document.createElement("div");
row1Stats.classList.add("row-1");
cardImgContainerInner.appendChild(row1Stats);

cardImg.style.display = "none";
row1Stats.style.display = "none";

const pokeName = document.createElement("span");
pokeName.classList.add("poke-name");

row1Stats.appendChild(pokeName);

const spanHpContainer = document.createElement("p");
spanHpContainer.textContent = "HP: ";
spanHpContainer.classList.add("hp-container");
row1Stats.appendChild(spanHpContainer);

const spanHp = document.createElement("span");
spanHp.classList.add("hp-style");

spanHpContainer.appendChild(spanHp);

const spanAttackContainer = document.createElement("p");
spanAttackContainer.textContent = "ATK: ";

row1Stats.appendChild(spanAttackContainer);

const spanAttack = document.createElement("span");
spanAttack.classList.add("attack-style");
spanAttackContainer.appendChild(spanAttack);

const spanDefenseContainer = document.createElement("p");
spanDefenseContainer.textContent = "DEF: ";
spanDefenseContainer.classList.add("defense-container");

row1Stats.appendChild(spanDefenseContainer);

const spanDefense = document.createElement("span");
spanDefense.classList.add("defense-style");

spanDefenseContainer.appendChild(spanDefense); //spd

const speedContainer = document.createElement("p");
speedContainer.textContent = "SPD: ";
speedContainer.classList.add("speed-container");

row1Stats.appendChild(speedContainer);

const spanSpeed = document.createElement("span");
spanSpeed.classList.add("speed-style");
speedContainer.appendChild(spanSpeed);

function displayData(name, hp, attack, defense, speed) {
  row1Stats.style.display = "flex";
  pokeName.textContent = name.toUpperCase();
  spanHp.textContent = hp;
  spanAttack.textContent = attack;
  spanDefense.textContent = defense;
  spanSpeed.textContent = speed;
}
