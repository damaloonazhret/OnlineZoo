const iconMenu = document.querySelector('.menu__btn');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('active');
	});
}

const btnMenu = document.querySelector(".menu__btn");
const menu = document.querySelector(".header-page__box-contact");
const background = document.querySelector(".menu__btn-overlay");
const toggleMenu = function () {
	menu.classList.toggle("active");
	background.classList.toggle("active");
	btnMenu.classList.toggle("active");
};

btnMenu.addEventListener("click", function (e) {
	e.stopPropagation();
	toggleMenu();
	btnMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
	const target = e.target;
	const itsMenu = target == menu || menu.contains(target);
	const itsBtnMenu = target == btnMenu;
	const menuIsActive = menu.classList.contains("active");
	if (!itsMenu && !itsBtnMenu && menuIsActive) {
		toggleMenu();
	}
});

const svg = document.querySelectorAll('svg path');

svg.forEach(el => {
    el.style.transition = '0.4s ease-in-out';
});
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

