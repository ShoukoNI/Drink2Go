const priceSlider = document.querySelector('.price__slider');
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');

noUiSlider.create(priceSlider, {
  start: [0, 900],
  connect: true,
  step: 1,
  range: {
    'min': 0,
    'max': 1000
  },
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseInt(value, 10);
    },
  },
});

priceSlider.noUiSlider.on('update', (values, handle) => {
  if (handle) {
    maxPriceInput.value = values[handle];
  } else {
    minPriceInput.value = values[handle];
  }
});

minPriceInput.addEventListener('change', function () {
  priceSlider.noUiSlider.set([this.value, null]);
});

maxPriceInput.addEventListener('change', function () {
  priceSlider.noUiSlider.set([null, this.value]);
});
