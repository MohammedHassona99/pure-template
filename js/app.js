let myLocal = localStorage.getItem("color-opt");

if (myLocal !== null) {
  document.documentElement.style.setProperty("--main-color", myLocal);

  document.querySelectorAll(".colors-list li").forEach((ele) => {
    ele.classList.remove("active");

    if (ele.dataset.color === myLocal) {
      ele.classList.add("active");
    }
  });
}

let backgroundOpt = true;

//variable to control the interval

let backgroundInterval;

// Toggle Setting button
let gear = document.querySelector(".toggle-setting i");
let setBox = document.querySelector(".setting-box");
gear.onclick = function () {
  this.classList.toggle("fa-spin");
  setBox.classList.toggle("open");
};

// Switch Colors

const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color-opt", e.target.dataset.color);

    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});

// Switch Random Background Option
const randomBackgroundEl = document.querySelectorAll(".random-bg span");

randomBackgroundEl.forEach((span) =>
  span.addEventListener("click", (e) => {
    e.target.parentElement
      .querySelectorAll(".active")
      .forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOpt = true;
      randomImgs();
    } else {
      backgroundOpt = false;
      clearInterval(backgroundInterval);
    }
  })
);

// Auto Select background for header
let landingPage = document.querySelector(".landing-page");

let imgsArray = [
  "slider-01.jpg",
  "slider-02.jpg",
  "slider-03.jpg",
  "slider-04.jpg",
  "slider-05.jpg",
  "slider-06.jpg",
];

function randomImgs() {
  if (backgroundOpt) {
    backgroundInterval = setInterval(function () {
      let numRand = Math.floor(Math.random() * imgsArray.length);
      landingPage.style.backgroundImage = `url('./../img/${imgsArray[numRand]}')`;
    }, 1000);
  }
}
randomImgs();
