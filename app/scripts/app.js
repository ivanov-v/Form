import noUiSlider from 'nouislider';

const slider = document.querySelector('.slider');

noUiSlider.create(slider, {
	start: 40,
	connect: 'lower',
	range: {
		min: 0,
		max: 100
	}
});

console.log(slider);
