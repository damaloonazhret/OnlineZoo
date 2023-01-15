const iconMenu = document.querySelector('.menu__btn');
if (iconMenu) {
	const menuBody = document.querySelector('.header-page__box-contact');
	iconMenu.addEventListener("click", function(e) {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}

function burgerMenu (selector) {
	const menu = document.querySelector('.header-page__box-contact-text');
	const button = document.querySelector('.menu__btn');
	const links = menu.find(div);
	alert(links);
}

burgerMenu();