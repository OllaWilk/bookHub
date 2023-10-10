const hamburgerWrap = document.querySelector('.hamburger-wrap ');
const sideNavigation = document.querySelector('#side-navigation');
const hamburgerIcon = document.querySelectorAll('.hamburger-wrap i');

hamburgerWrap.addEventListener('click', (e) => {
  e.preventDefault();

  hamburgerIcon.forEach((icon) => icon.classList.toggle('close'));

  sideNavigation.classList.toggle('toggle');
});
