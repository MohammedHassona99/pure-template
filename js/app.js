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
  });
});
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

setInterval(function () {
  let numRand = Math.floor(Math.random() * imgsArray.length);
  landingPage.style.backgroundImage = `url('./../img/${imgsArray[numRand]}')`;
  // "url('./../img/" + imgsArray[numRand] + " ')";
  // console.log(numRand);
}, 2000);
