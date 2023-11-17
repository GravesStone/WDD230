document.addEventListener('DOMContentLoaded', function() {
	const modeButton = document.querySelector('#mode');
	const main = document.querySelector('main');
	const paragraphs = main.querySelectorAll('p,h1,h3,h4');

	modeButton.addEventListener('click', () => {
	  if (modeButton.textContent.includes('🕶️')) {
		main.style.background = '#000';
		main.style.color = '#fff';
		modeButton.textContent = '🔆';
		paragraphs.forEach(paragraph => {
		  paragraph.style.color = 'white';
		});
	  } else {
		main.style.background = '#eee';
		main.style.color = '#000';
		modeButton.textContent = '🕶️';
		paragraphs.forEach(paragraph => {
		  paragraph.style.color = 'black';
		});
	  }
	});
  });
  var linkButton = document.getElementById('linkbtn');

  // Add a click event listener to the button
  linkButton.addEventListener('click', function() {
	  // Specify the link URL you want to navigate to
	  var linkUrl = 'https://gravesstone.github.io/wdd230/chamber/join.html';

	  // Navigate to the link URL
	  window.location.href = linkUrl;
  });