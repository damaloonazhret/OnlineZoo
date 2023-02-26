const btnContact = document.querySelector('.contact-page-top-btn');
const btnContactName = document.querySelectorAll('.contact-page__name');


btnContact.addEventListener('click', function(e) {
	e.preventDefault();
	btnContactName.forEach(el => {
		el.value = '';
	}) ;
	setTimeout(() => {
		alert('succeseful');
	},900);
});

