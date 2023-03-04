const sliderButton = document.getElementById('slider-button');
const slider = document.getElementById('slider');
const closeSliderButton = document.getElementById('close-slider-button');

sliderButton.addEventListener('click', function() {
  if (slider.classList.contains('slider-open')) {
    slider.classList.remove('slider-open');
  } else {
    slider.classList.add('slider-open');
  }
});

document.addEventListener('click', function(event) {
  if (!slider.contains(event.target) && !sliderButton.contains(event.target)) {
    slider.classList.remove('slider-open');
  }
});
