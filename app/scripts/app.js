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
};
