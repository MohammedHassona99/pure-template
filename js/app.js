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
//random bg-option
let backgroundOpt = false;

//variable to control the interval
let backgroundInterval;

// check if there is local storage random bg-item
let bg_localItem = localStorage.getItem("background-option");

// check if the random local storage is empty or no
if (bg_localItem !== null) {
  if (bg_localItem === "true") {
    bg_localItem = true;
  } else {
    bg_localItem = false;
  }

  document
    .querySelectorAll(".random-bg span")
    .forEach((ele) => ele.classList.remove("active"));

  if (bg_localItem === "true") {
    document.querySelector(".random-bg .yes").classList.add("active");
  } else {
    document.querySelector(".random-bg .no").classList.add("active");
  }
}

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
      localStorage.setItem("background-option", true);
    } else {
      backgroundOpt = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background-option", false);
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

// set our skills

let ourSkills = document.querySelector(".our-skills");

window.onscroll = function () {
  // Our Skills offset Top
  let ourSkillOffsetTop = ourSkills.offsetTop;

  // our Skills Outer Height
  let outSkillOuterHeight = ourSkills.offsetHeight;

  //window height
  let windowsHeight = this.innerHeight;

  // window scroll top
  let windowScrollTop = this.pageYOffset;

  if (
    windowScrollTop >
    ourSkillOffsetTop + outSkillOuterHeight - windowsHeight
  ) {
    let allSpan = document.querySelectorAll(".box-skill .progress span");

    allSpan.forEach((skill) => (skill.style.width = skill.dataset.progress));
  }
};

// Create popup With the Image

let ourGallery = document.querySelectorAll(".gallery .images-box img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create Overlay Element
    let overlay = document.createElement("div");

    // add Class To Overlay
    overlay.className = "popup-overlay";

    // append overlay to the body
    document.body.appendChild(overlay);

    // create the popup Box
    let popupBox = document.createElement("div");

    //add class to the popup box
    popupBox.className = "popup-box";

    if (img.alt !== null) {
      //Create Heading
      let imgHeading = document.createElement("h3");

      //create text for heading
      let imgText = document.createTextNode(img.alt);

      //append The text to the heading
      imgHeading.appendChild(imgText);

      //append the heading to the popup box

      popupBox.appendChild(imgHeading);
    }

    // create the image
    let popupImage = document.createElement("img");

    // set Image Source
    popupImage.src = img.src;

    // add Image to popup Box
    popupBox.appendChild(popupImage);

    // Append The popup Box To body
    document.body.appendChild(popupBox);

    //create the close span
    let closeSpan = document.createElement("span");

    //Create the close button text
    let spanCloseButton = document.createTextNode("X");

    // append text to class button
    closeSpan.appendChild(spanCloseButton);

    //add class to close button
    closeSpan.className = "close-button";

    //add the close span to the popup box
    popupBox.appendChild(closeSpan);
  });
});

// close span

document.addEventListener("click", function (e) {
  if (e.target.className === "close-button") {
    // remove the current popup
    e.target.parentNode.remove();

    //remove overlay

    document.querySelector(".popup-overlay").remove();
  }
});

// Select all bullets
const allBullets = document.querySelectorAll(".nav-bull ul li");

allBullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// show Bullets

let bulletsSpan = document.querySelectorAll(".bullets-op span");
let navBull = document.querySelector(".nav-bull");
let bulletLocalItem = localStorage.getItem("bullets-op");

if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (bulletLocalItem === "block") {
    navBull.style.display = "block";
    document.querySelector(".bullets-op .yes").classList.add("active");
  } else {
    navBull.style.display = "none";
    document.querySelector(".bullets-op .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.parentElement
      .querySelectorAll(".active")
      .forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");

    if (span.dataset.display === "show") {
      navBull.style.display = "block";
      localStorage.setItem("bullets-op", "block");
    } else {
      navBull.style.display = "none";
      localStorage.setItem("bullets-op", "none");
    }
  });
});

// Reset Button Options
let buttonReset = document.querySelector(".reset-option");

buttonReset.addEventListener("click", function () {
  localStorage.clear();
  // localStorage.removeItem("bullets-op");
  // localStorage.removeItem("color-opt");
  // localStorage.removeItem("background-option");
  window.location.reload();
});
