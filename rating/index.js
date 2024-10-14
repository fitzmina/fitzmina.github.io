const container = document.querySelector(".container");
const arr = new Array(5).fill(null);

let rating = 0;
let hover = 0;

const copyArr = arr.map((_) => {
  const iStar = document.createElement("i");
  iStar.classList.add("fa-solid", "fa-star");
  container.append(iStar);
  return iStar;
});

copyArr.forEach((f, i) => {
  f.addEventListener("mouseover", () => {
    hoverStar(i);
  });
  f.addEventListener("mouseleave", () => {
    leaveStar();
  });
  f.addEventListener("click", () => {
    handleRating(i);
  });
});

function handleRating(index) {
  rating = index;
  if (index <= rating) {
    for (let i = 0; i <= hover; i++) {
      copyArr[i].classList.add("active");
    }
  }
}

function hoverStar(index) {
  hover = index;
  copyArr.forEach((c) => {
    c.classList.remove("active");
  });
  if (index <= hover) {
    for (let i = 0; i <= hover; i++) {
      copyArr[i].classList.add("active");
    }
  }
}
function leaveStar() {
  hover = 0;
  copyArr.forEach((c) => {
    c.classList.remove("active");
  });
  for (let i = 0; i <= rating; i++) {
    copyArr[i].classList.add("active");
  }
}
