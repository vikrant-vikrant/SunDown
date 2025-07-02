const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

let elemC = document.querySelector(".elem-container");
let fixed = document.querySelector(".fixed-img");
let elem1 = document.querySelector("#elem1");
elem1.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
  let x = elem1.getAttribute("data-img");
  fixed.style.backgroundImage = `url(${x})`;
});
elem1.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});
let elem2 = document.querySelector("#elem2");
elem2.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
  let x = elem2.getAttribute("data-img");
  fixed.style.backgroundImage = `url(${x})`;
});
elem2.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});
let elem3 = document.querySelector("#elem3");
elem3.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
  let x = elem3.getAttribute("data-img");
  fixed.style.backgroundImage = `url(${x})`;
});
elem3.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});
let elem4 = document.querySelector("#elem4");
elem4.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
  let x = elem4.getAttribute("data-img");
  fixed.style.backgroundImage = `url(${x})`;
});
elem4.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});
let elem5 = document.querySelector("#elem5");
elem5.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
  let x = elem5.getAttribute("data-img");
  fixed.style.backgroundImage = `url(${x})`;
});
elem5.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});
let elem6 = document.querySelector("#elem6");
elem6.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
  let x = elem6.getAttribute("data-img");
  fixed.style.backgroundImage = `url(${x})`;
});
elem6.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});
let elem7 = document.querySelector("#elem7");
elem7.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
  let x = elem7.getAttribute("data-img");
  fixed.style.backgroundImage = `url(${x})`;
});
elem7.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});
