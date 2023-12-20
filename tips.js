// sticky nav
document.addEventListener("scroll", (event) => {
  var navbar = document.getElementById("navbar");

  if (
    document.body.scrollTop >= 260 ||
    document.documentElement.scrollTop >= 260
  ) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  // console.log(navbar.offsetTop);
});

// tabs
jQuery(document).ready(function () {
  jQuery(".tabs-section .tab-links a").on("click", function (e) {
    var currentAttrValue = jQuery(this).attr("href");

    // Show/Hide Tabs
    jQuery(".tabs-section " + currentAttrValue)
      .show()
      .siblings()
      .hide();

    // Change/remove current tab to active
    jQuery(this)
      .parent("li")
      .addClass("active")
      .siblings()
      .removeClass("active");

    e.preventDefault();
  });
});

// animations box1
document.addEventListener("DOMContentLoaded", function (event) {
  document.addEventListener("scroll", function (event) {
    const animatedBoxes1 = document.getElementsByClassName("animated-box1");
    const animatedBoxes2 = document.getElementsByClassName("animated-box2");
    const windowOffsetTop = window.innerHeight + window.scrollY;

    Array.prototype.forEach.call(animatedBoxes1, (animatedBox1) => {
      const animatedBox1OffsetTop = animatedBox1.offsetTop;

      if (windowOffsetTop >= animatedBox1OffsetTop) {
        addClass(animatedBox1, "fadeInUp");
      }
    });
  });
});

function addClass(element, className) {
  const arrayClasses = element.className.split(" ");
  if (arrayClasses.indexOf(className) === -1) {
    element.className += " " + className;
  }
}
//animation box2
//credits to Espen
const ul = document.querySelector(".quick-tips-boble");
const animBox = document.getElementById("animated-box2");

ul.addEventListener("mouseover", () => {
  animBox.classList.add("wobble");
});
ul.addEventListener("mouseleave", () => {
  animBox.classList.remove("wobble");
});
