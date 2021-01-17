const navlink = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = document.querySelectorAll(".nav-links li");
const nav = document.querySelector('.navbar')

burger.addEventListener('click', function () {
  navlink.classList.toggle('nav-active');
  burger.classList.toggle('toggle');

  //animate links for nav-bar

  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `fadeinnav 0.5s ease forwards ${index / 7 + 1}s`;
    }

  })
  //burger animation

});


window.addEventListener('scroll', function () {
  nav.classList.toggle('sticky', window.scrollY > 50)
})