const authorWrapper = document.querySelector('.authorWrapper');
const shareIconActive = document.getElementById('shareIconActive');
const shareIconDefault = document.getElementById('shareIconDefault');
const shareWrapper = document.querySelector('.shareWrapper');
let xAxis = window.matchMedia('(max-width: 793px)');

shareIconDefault.addEventListener('click', () => {
	if (xAxis.matches) {
		authorWrapper.className = 'authorWrapper inactiveAuthor';
		shareIconDefault.className = 'share iconActive';
		shareWrapper.className = 'shareWrapper';
	} else if (shareIconDefault.className === 'share') {
		shareIconDefault.className = 'share iconActive';
		authorWrapper.className = 'authorWrapper inactiveAuthor';
		shareWrapper.className = 'shareWrapper';
	} else {
		authorWrapper.className = 'authorWrapper';
		shareWrapper.className = 'shareWrapper inactiveShare';
		shareIconDefault.className = 'share';
	}
});

shareIconActive.addEventListener('click', () => {
	if (xAxis.matches) {
		authorWrapper.className = 'authorWrapper';
		shareIconDefault.className = 'share';
		shareWrapper.className = 'shareWrapper inactiveShare';
	}
});
