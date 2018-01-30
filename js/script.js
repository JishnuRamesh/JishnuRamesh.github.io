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

/*
  window.addEventListener("hashchange",function(){
    window.scrollTo(window.scrollX, window.scrollY-130);
  });
  */




window.onload = function () {
  getToggler();
};
