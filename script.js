const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu a');

// // Abre ou fecha o menu ao clicar no botão
// toggle.addEventListener('click', (event) => {
//   event.stopPropagation();
//   menu.classList.toggle('active');
// });

// // Fecha o menu ao clicar em qualquer link dentro do menu
// links.forEach(link => {
//   link.addEventListener('click', () => {
//     menu.classList.remove('active');
//   });
// });


const positions = {
  salao: 0,
  externa: 0
};

function moveSlide(albumId, direction) {
  const carousel = document.getElementById(`carousel-${albumId}`);
  const images = carousel.querySelectorAll('img');
  const imageWidth = images[0].clientWidth + 10; // largura + margem
  const maxPosition = images.length - 1;

  positions[albumId] += direction;

  if (positions[albumId] < 0) positions[albumId] = 0;
  if (positions[albumId] > maxPosition) positions[albumId] = maxPosition;

  carousel.style.transform = `translateX(-${positions[albumId] * imageWidth}px)`;
}