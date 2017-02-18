import autosize from 'autosize';
import slider from '../blocks/slider/slider';

window.addEventListener('load', () => {
	autosize(document.querySelectorAll('.textarea'));
	slider();
});
