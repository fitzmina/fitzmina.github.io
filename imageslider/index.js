const imagesContainer = document.querySelector(".images-container");
const dotsContainer = document.querySelector(".dots-container");
const arrowLeft = document.querySelector(".fa-arrow-left");
const arrowRight = document.querySelector(".fa-arrow-right");
const playBtn = document.querySelector(".fa-play");
const pauseBtn = document.querySelector(".fa-pause");
const loadingContainer = document.querySelector(".loading-container");

let imagesArray = [];
let dotsArray = [];
let currentImage = 0;
let imagesInterval;

async function fetchImages() {
  loadingContainer.style.display = "block";
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=10"
    );

    if (!response.ok) throw new Error("Request Failed");

    const data = await response.json();

    if (data) {
      displayData(data);
      displayDots(data);
      displayControls();
      loadingContainer.style.display = "none";
    }
  } catch (error) {
    console.log(error.message);
    loadingContainer.style.display = "none";
  }
}

fetchImages();

function displayData(data) {
  imagesArray = data.map((d, i) => {
    const imgData = document.createElement("img");
    imgData.src = d.download_url;

    imagesContainer.append(imgData);
    imagesContainer.children[0].classList.add("active");

    return { imgData, id: i };
  });
}

function displayDots(data) {
  dotsArray = data.map((d, i) => {
    const dotIcon = document.createElement("i");
    dotIcon.id = i;
    dotIcon.classList.add("fa-solid", "fa-circle");
    dotsContainer.append(dotIcon);
    dotsContainer.children[0].classList.add("highlight");

    return { dotIcon };
  });
}

function displayControls() {
  for (let d of dotsArray) {
    let dotBtn = d.dotIcon;
    dotBtn.addEventListener("click", (e) => {
      clearInterval(imagesInterval);
      dotsArray.forEach((d) => {
        d.dotIcon.classList.remove("highlight");
      });

      imagesArray.forEach((i) => {
        i.imgData.classList.remove("active");
      });

      currentImage = e.target.id;

      imagesArray[currentImage].imgData.classList.add("active");
      dotsArray[currentImage].dotIcon.classList.add("highlight");

      console.log(imagesArray[currentImage].imgData);
    });
  }

  arrowRight.addEventListener("click", () => {
    clearInterval(imagesInterval);
    imagesArray.forEach((i) => {
      i.imgData.classList.remove("active");
    });

    dotsArray.forEach((d) => {
      d.dotIcon.classList.remove("highlight");
    });

    currentImage++;

    if (currentImage >= dotsArray.length) {
      currentImage = 0;
    }

    imagesArray[currentImage].imgData.classList.add("active");
    dotsArray[currentImage].dotIcon.classList.add("highlight");
  });

  arrowLeft.addEventListener("click", () => {
    clearInterval(imagesInterval);
    imagesArray.forEach((i) => {
      i.imgData.classList.remove("active");
    });

    dotsArray.forEach((d) => {
      d.dotIcon.classList.remove("highlight");
    });

    currentImage = currentImage <= 0 ? dotsArray.length - 1 : currentImage - 1;

    imagesArray[currentImage].imgData.classList.add("active");
    dotsArray[currentImage].dotIcon.classList.add("highlight");
  });

  playBtn.addEventListener("click", () => {
    clearInterval(imagesInterval);

    imagesInterval = setInterval(() => {
      imagesArray.forEach((i) => {
        i.imgData.classList.remove("active");
      });

      dotsArray.forEach((d) => {
        d.dotIcon.classList.remove("highlight");
      });

      currentImage++;

      if (currentImage >= dotsArray.length) {
        currentImage = 0;
      }

      imagesArray[currentImage].imgData.classList.add("active");
      dotsArray[currentImage].dotIcon.classList.add("highlight");
    }, 1000);
  });

  pauseBtn.addEventListener("click", () => {
    clearInterval(imagesInterval);
  });
}
