// sticky nav
document.addEventListener("scroll", (event) => {
  var navbar = document.getElementById("navbar");

  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  // console.log(navbar.offsetTop);
});
