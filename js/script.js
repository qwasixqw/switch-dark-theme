'use strict';

const icon = document.getElementById('icon');

const theme = localStorage.getItem('theme');

if (theme === 'dark-theme') {
	document.body.classList.add(theme);
	icon.src = 'img/sun.png';
}

icon.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme');
	const isDarkTheme = document.body.classList.contains('dark-theme');
	localStorage.setItem('theme', isDarkTheme ? 'dark-theme' : '');
	icon.src = isDarkTheme ? 'img/sun.png' : 'img/moon.png';
});
