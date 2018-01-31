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
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
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
}


window.onscroll = function() {
  navScroll();
};



// Remove the collapsable menu once a link is clicked
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





function anchorElement(){
  var tags = document.getElementById("myTogglerNav").getElementsByTagName("a");
  //var education = document.getElementById("education-nav");
  //var project = document.getElementById("project-nav");
  //var social = document.getElementById("social-nav");
  console.log(about);

  tags[0].addEventListener("click",function(e) {
    e.preventDefault();
    window.scrollTo(0, 400);
  });

  tags[1].addEventListener("click",function(e) {
    e.preventDefault();
    if (screen.width > 788) {
    window.scrollTo(window.X,1250);
  }
    else if (screen.width <789 && screen.width > 592) {
      window.scrollTo(window.X,1600);
    }

    else if (screen.width < 593 && screen.width > 532 ) {
      window.scrollTo(window.X, 1650);
    }

    else if (screen.width < 533 && screen.width > 507){
      window.scrollTo(window.X,1600);
    }

    else if (screen.width < 508 && screen.width > 450) {
      window.scrollTo(window.X,1650);
    }

    else if (screen.width < 451 && screen.width > 409){
      window.scrollTo(window.X,1800);
    }

    else if (screen.width < 410 && screen.width > 388) {
      window.scrollTo(window.X,1900);
    }

    else if (screen.width < 389 && screen.width > 355)  {
      window.scrollTo(window.X,2000);
    }

    else {
      window.scrollTo(window.X,2200);
    }

  });


  tags[2].addEventListener("click",function(e) {
    e.preventDefault();
    if (screen.width > 788) {
    window.scrollTo(window.X,1250);
  }
    else if (screen.width <789 && screen.width > 592) {
      window.scrollTo(window.X,1600);
    }

    else if (screen.width < 593 && screen.width > 532 ) {
      window.scrollTo(window.X, 1650);
    }

    else if (screen.width < 533 && screen.width > 507){
      window.scrollTo(window.X,1600);
    }

    else if (screen.width < 508 && screen.width > 450) {
      window.scrollTo(window.X,1650);
    }

    else if (screen.width < 451 && screen.width > 409){
      window.scrollTo(window.X,1800);
    }

    else if (screen.width < 410 && screen.width > 388) {
      window.scrollTo(window.X,1900);
    }

    else if (screen.width < 389 && screen.width > 355)  {
      window.scrollTo(window.X,2000);
    }

    else {
      window.scrollTo(window.X,2200);
    }

  });

}









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
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
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
}


window.onscroll = function() {
  navScroll();
};



/
