import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});


window.onload = () => {
	const textarea = document.querySelector('.about-me__textarea');

	const autosize = () => {
		setTimeout(() => {
			textarea.style.cssText = 'height: auto;';
			textarea.style.cssText = 'height: ' + textarea.scrollHeight + 'px';
		}, 10);
	};

	textarea.addEventListener('keydown', autosize);


	const slide = document.querySelector('.slide__input');

	const autoParking = () => {
		const steps = [0, 19, 49, 100];
		const value = Number(slide.getAttribute('value'));
		const thumbValue = Number(slide.value);
		let newValue = 0;

		const slideAnimationLeft = (begin, end) => {
			if (begin <= end || begin < 0 || end > 100) {
				return;
			}
			setTimeout(() => {
				slide.value = begin - 1;
				slide.setAttribute('value', begin - 1);
				slideAnimationLeft(begin - 1, end);
			}, 10);
		};

		const slideAnimationRight = (begin, end) => {
			if (begin >= end || begin < 0 || end > 100) {
				return;
			}
			setTimeout(() => {
				slide.value = begin + 1;
				slide.setAttribute('value', begin + 1);
				slideAnimationRight(begin + 1, end);
			}, 10);
		};

		if (value >= thumbValue) {
			newValue = steps.filter(step => step < thumbValue).reverse()[0];
			slideAnimationLeft(thumbValue, newValue);
		}else {
			newValue = steps.filter(step => step > thumbValue)[0];
			slideAnimationRight(thumbValue, newValue);
		}
	};

	slide.addEventListener('mouseup', autoParking);
	slide.addEventListener('touchend', autoParking);
};
