const slider = document.querySelector('.slider');
const sliderItems = slider.querySelectorAll('.slider__item');
const prevBtn = slider.querySelector('.slider-button-prev');
const nextBtn = slider.querySelector('.slider-button-next');
const paginationButtons = slider.querySelectorAll('.slider__pagination-item');
let currentSlide = 0;

function showSlide(i) {
  sliderItems.forEach((item) => item.classList.remove('slider__item--current'));
  sliderItems[i].classList.add('slider__item--current');
  paginationButtons.forEach((button) => button.classList.remove('slider__pagination-item--current'));
  paginationButtons[i].classList.add('slider__pagination-item--current');
  currentSlide = i;
  updateButtons();
}

function updateButtons() {
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === sliderItems.length - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    showSlide(currentSlide - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < sliderItems.length - 1) {
    showSlide(currentSlide + 1);
  }
});

paginationButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    showSlide(i);
  });
});

updateButtons();
