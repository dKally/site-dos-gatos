const container = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel-container img');
let index = 0;

function updateCarousel() {
  container.style.transform = `translateX(-${index * 102}%)`;

  images.forEach((img, i) => {
    img.style.transform = i === index + 1 ? 'scale(0.8)' : 'scale(1)';
  });
}

document.getElementById('next').addEventListener('click', () => {
  if (index < images.length - 2) index++;
  updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
  if (index > 0) index--;
  updateCarousel();
});

updateCarousel();

let lastScrollTop = 0;
const navbar = document.querySelector('nav');

let ticking = true;

setTimeout(() => {
  ticking = false;
}, 2000);

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      let scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        navbar.style.top = '-100px';
      } else {
        navbar.style.top = '0';
      }

      lastScrollTop = scrollTop;
      ticking = false;
    });

    ticking = true;
  }
});
