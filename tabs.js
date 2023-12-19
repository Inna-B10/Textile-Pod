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

// animations
document.addEventListener("DOMContentLoaded", function (event) {
  document.addEventListener("scroll", function (event) {
    const animatedBoxes = document.getElementsByClassName("animated-box");
    const windowOffsetTop = window.innerHeight + window.scrollY;

    Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
      const animatedBoxOffsetTop = animatedBox.offsetTop;

      if (windowOffsetTop >= animatedBoxOffsetTop) {
        addClass(animatedBox, "fadeInUp");
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
