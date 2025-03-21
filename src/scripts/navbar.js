function toggleBurgerMenu(x) {
  x.classList.toggle('change');
  document.querySelector('.menu').classList.remove('menu-hide');
  document.querySelector('.menu').classList.toggle('menu-hide-animation');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  mobileLinks.forEach((link) => {
    link.classList.toggle('mobile-link-show');
    link.classList.toggle('mobile-link-hide');
  });
}

document.querySelectorAll('.mobile-link').forEach((link) => {
  link.addEventListener('click', function () {
    let burgerDiv = document.querySelector('.burger-div');
    toggleBurgerMenu(burgerDiv);
  });
});
