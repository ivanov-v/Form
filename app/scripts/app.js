import noUiSlider from 'nouislider';

const slider = document.querySelector('.slider');
const sliderValues = ['Не владею', 'Использую готовые решения', 'Использую готовые решения и умею их переделывать',
'Пишу сложный JS с нуля'];

const applySliderValues = function (sliderNode, values) {
	const valueNodes = [].slice.call(sliderNode.querySelectorAll('.noUi-value-large'));

	valueNodes.forEach((valueNode, index) => {
		const value = valueNode.innerHTML;
		valueNode.innerHTML = values[index];

		valueNode.addEventListener('click', () => {
			sliderNode.noUiSlider.set(value);
		});
	});
};

noUiSlider.create(slider, {
	start: 0,
	snap: true,
	range: {
		min: 0,
		'19%': 19,
		'49%': 50,
		max: 100
	},
	pips: {
		mode: 'values',
		values: [0, 19, 50, 100],
		density: 100,
		stepped: true
	}
});

applySliderValues(slider, sliderValues);
