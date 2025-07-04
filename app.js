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
