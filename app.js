const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

let fixed = document.querySelector(".fixed-img");
let elems = document.querySelectorAll(".elem");
elems.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
    let img = ele.getAttribute("data-img");
    fixed.style.backgroundImage = `url(${img})`;
  });
  ele.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });
});
function removeSt() {
  let tab = document.querySelectorAll(".head h1");
  tab.forEach(function (tb) {
    tb.removeAttribute("class", "style");
  });
}
let rightImg = document.querySelector(".right-img");
let design = document.querySelector(".design");
let project = document.querySelector(".project");
let executable = document.querySelector(".executable");
let para = document.querySelector(".head p");
design.addEventListener("click", function () {
  removeSt();
  design.setAttribute("class", "style");
  let img = design.getAttribute("data-img");
  rightImg.style.backgroundImage = `url(${img})`;
  para.innerHTML =
    "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
});

project.addEventListener("click", function () {
  removeSt();
  project.setAttribute("class", "style");
  let img = project.getAttribute("data-img");
  rightImg.style.backgroundImage = `url(${img})`;
  para.innerHTML =
    "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
});

executable.addEventListener("click", function () {
  removeSt();
  executable.setAttribute("class", "style");
  let img = executable.getAttribute("data-img");
  rightImg.style.backgroundImage = `url(${img})`;
  para.innerHTML =
    " We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
});
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "50%",
    centeredSlides: true,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
swiperAnimation();
