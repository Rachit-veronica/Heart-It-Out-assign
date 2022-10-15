const btn1 = () => {
  let x = document.querySelector("#cardLine1");
  if (x.style.display === "none") {
    x.style.display = "block";
    document
      .querySelector("#btn1")
      .classList.replace("fa-angle-down", "fa-angle-up");
  } else {
    x.style.display = "none";
    document
      .querySelector("#btn1")
      .classList.replace("fa-angle-up", "fa-angle-down");
  }
};
const btn2 = () => {
  let x = document.querySelector("#cardLine2");
  if (x.style.display === "none") {
    x.style.display = "block";
    document
      .querySelector("#btn2")
      .classList.replace("fa-angle-down", "fa-angle-up");
  } else {
    x.style.display = "none";
    document
      .querySelector("#btn2")
      .classList.replace("fa-angle-up", "fa-angle-down");
  }
};
const btn3 = () => {
  let x = document.querySelector("#cardLine3");
  let btn = document.querySelector(".fa-angle-down");
  if (x.style.display === "none") {
    x.style.display = "block";
    document
      .querySelector("#btn3")
      .classList.replace("fa-angle-down", "fa-angle-up");
  } else {
    x.style.display = "none";
    document
      .querySelector("#btn3")
      .classList.replace("fa-angle-up", "fa-angle-down");
  }
};
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const alertFunction = () => {
  alert("Button Clicked");
};
