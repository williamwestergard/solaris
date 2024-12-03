const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const itemWidth = items[0].offsetWidth; // Get the width of an item
let currentIndex = 0;

function moveLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

function moveRight() {
  if (currentIndex < items.length - 4) { // Ensure at least 4 items remain visible
    currentIndex++;
    updateCarousel();
  }
}

function updateCarousel() {
  const offset = -currentIndex * itemWidth;
  track.style.transform = `translateX(${offset}px)`;
}