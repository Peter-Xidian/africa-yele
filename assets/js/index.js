/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.querySelector(".nav");
  const header = document.querySelector(".header");
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  //When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) {
    nav.classList.add("active");
    header.classList.add("active");
  } else {
    nav.classList.remove("active");
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", scrollHeader);

/*==================== TOGGLE CONTAINERS ====================*/
const navMenu = document.querySelector(".nav-menu");
const conModal = document.querySelector(".con-modal");

function toggleMenu() {
  navMenu.classList.toggle("active");
}

function toggleConModal() {
  conModal.classList.toggle("active");
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nml");

function linkAction() {
  const navMenu = document.querySelector(".nav-menu");
  // When we click on each nav__link, we remove the toggle-nav-menu class
  navMenu.classList.remove("active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ------------- TOGGLE EVENTS ------------- */
// const eTabs = document.querySelectorAll(".et");
// const ebox = document.querySelectorAll(".ec");
// const enav = document.querySelectorAll(".en");

// // Add a click event listener to each sidebar element
// eTabs.forEach((element, index) => {
//   element.addEventListener("click", () => {
//     // Remove active class from all sidebar elements
//     eTabs.forEach((el) => {
//       el.classList.remove("et-active");
//     });
//     // Add active class to the clicked sidebar element
//     element.classList.add("et-active");

//     // Remove active class from all containers
//     ebox.forEach((eb) => {
//       eb.classList.remove("ec-active");
//     });
//     // Add active class to the container with the same index as the clicked sidebar element
//     ebox[index].classList.add("ec-active");

//     // Remove active class from all containers
//     enav.forEach((en) => {
//       en.classList.remove("en-active");
//     });
//     // Add active class to the container with the same index as the clicked sidebar element
//     enav[index].classList.add("en-active");
//   });
// });

/* ------------- TESTIMONIAL CAROUSEL ------------- */
// script.js

document.addEventListener("DOMContentLoaded", () => {
  const teWrapper = document.querySelector(".te-wrapper");
  const teCards = document.querySelector(".te-cards");
  const tecs = document.querySelectorAll(".tec");
  const arrowBack = document.getElementById("arrow-back");
  const arrowForward = document.getElementById("arrow-forward");

  let currentIndex = 0;
  const totalCards = tecs.length;
  const cardWidth = tecs[0].offsetWidth;

  let animationInterval;

  const startAnimation = () => {
    animationInterval = setInterval(() => {
      moveForward();
    }, 5000); // Adjust the interval time as needed
  };

  const stopAnimation = () => {
    clearInterval(animationInterval);
  };

  const updateTransform = () => {
    teCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  };

  const moveForward = () => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateTransform();
  };

  const moveBackward = () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateTransform();
  };

  teWrapper.addEventListener("mouseenter", stopAnimation);
  teWrapper.addEventListener("mouseleave", startAnimation);

  arrowBack.addEventListener("click", () => {
    stopAnimation();
    moveBackward();
    startAnimation();
  });

  arrowForward.addEventListener("click", () => {
    stopAnimation();
    moveForward();
    startAnimation();
  });

  startAnimation();
});
