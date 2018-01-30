function navScroll(){
  var myNav = document.getElementById("navigation");
  if (screen.width > 1249) {
    if (document.documentElement.scrollTop > 547 || document.body.scrollTop > 547) {
      myNav.classList.add("nav-colored");
    }
    else if (myNav.classList.contains("nav-colored")) {
      myNav.classList.remove("nav-colored");
    }
  }

  else if (screen.width < 1249 && screen.width >= 992) {
    if (document.documentElement.scrollTop > 450 || document.body.scrollTop > 450) {
      myNav.classList.add("nav-colored");
    }
    else if (myNav.classList.contains("nav-colored")) {
      myNav.classList.remove("nav-colored");
    }
  }

  else if (screen.width < 992 && screen.width > 880) {
    if (document.documentElement.scrollTop > 475 || document.body.scrollTop > 475) {
      myNav.classList.add("nav-colored");
    }
    else if (myNav.classList.contains("nav-colored")) {
      myNav.classList.remove("nav-colored");
    }
  }


  else if (screen.width < 881 && screen.width > 788) {
    if (document.documentElement.scrollTop > 440 || document.body.scrollTop > 440) {
      myNav.classList.add("nav-colored");
    }
    else if (myNav.classList.contains("nav-colored")) {
      myNav.classList.remove("nav-colored");
    }
  }


  else if (screen.width < 789 && screen.width > 767) {
    if (document.documentElement.scrollTop > 365 || document.body.scrollTop > 365) {
      myNav.classList.add("nav-colored");
    }
    else if (myNav.classList.contains("nav-colored")) {
      myNav.classList.remove("nav-colored");
    }
  }


  else if (screen.width < 768 && screen.width > 575) {
    if (document.documentElement.scrollTop > 430 || document.body.scrollTop > 430) {
      myNav.classList.add("nav-colored");
    }
    else if (myNav.classList.contains("nav-colored")) {
      myNav.classList.remove("nav-colored");
    }
  }

  else if (screen.width < 576 && screen.width > 532) {
    if (document.documentElement.scrollTop > 485 || document.body.scrollTop > 485) {
      myNav.classList.add("nav-colored");
    }
    else if (myNav.classList.contains("nav-colored")) {
      myNav.classList.remove("nav-colored");
    }
  }


  else  {
    if (document.documentElement.scrollTop > 400 || document.body.scrollTop > 400) {
      myNav.classList.add("nav-colored");
    }
    else if (myNav.classList.contains("nav-colored")) {
      myNav.classList.remove("nav-colored");
    }
  }

}


window.onscroll = function() {
  navScroll();
};




function getToggler() {
  var togglerButton = document.getElementById('myTogglerNav');
  var navLinks = document.getElementsByClassName('nav-item nav-link');
  var navigation = document.getElementById('navigation');
  for (var i = 0; i < navLinks.length ; i++) {
      navLinks[i].addEventListener('click',function () {
          if (togglerButton.classList.contains("show")) {
              togglerButton.classList.remove("show");
          }
      });
  }
}


window.onload = getToggler;
