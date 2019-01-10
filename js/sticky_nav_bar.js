
window.onscroll = function() {stickyNavBar()};

var navbar = document.getElementsByClassName("main-nav");
var sticky = navbar.offsetTop;

function stickyNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}