function navScroll(){
  var myNav = document.getElementById("navigation");
  if (document.documentElement.scrollTop > 550 || document.body.scrollTop > 550) {
    myNav.classList.add("nav-colored");
  }
  else if (myNav.classList.contains("nav-colored")) {
    myNav.classList.remove("nav-colored");
  }
}







window.onscroll = function() {
  navScroll();
};
