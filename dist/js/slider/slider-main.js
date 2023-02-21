const svg = document.querySelectorAll('svg path');

svg.forEach(el => {
    el.style.transition = '0.4s ease-in-out';
});
const openBtn = document.querySelectorAll('.video-animals--openbtn');
const videoBtn = document.querySelectorAll('.video-animals--btn');
const videoBtnAfter = document.querySelector('.video-animals--btn');
const videoMenu = document.querySelector('.video-menu');
const videoMenuBoxContainer = document.querySelectorAll('.video-menu__box-container');
const videoMenuhov = document.querySelectorAll('.video-animals--hov');
const videoMenuBoxOpen = document.querySelectorAll('.video-menu__box-open');
const videoMenuBox = document.querySelectorAll('.video-menu__box');
const menuMobile = document.querySelector('.video-menu__mobile');

for (let i = 0; i < 2; i++) {
    openBtn[i].addEventListener('click', function () {
        videoMenuhov.forEach(el => {
            el.classList.toggle('disable');
        });
        videoMenuBoxOpen[i].classList.toggle('active');
        videoMenu.classList.toggle('active');
        openBtn[i].classList.toggle('active');
        videoBtn[i].classList.toggle('active');
        menuMobile.classList.toggle('active');
        videoMenuBoxContainer[i].classList.toggle('active');
    });

    let indexV = 1;
    videoBtn[i].addEventListener('click', function () {
        const arrMax = [];
        videoMenuhov.forEach(el => {
            arrMax.push(el.clientHeight);
        });
        const maximum = Math.max(...arrMax);
        videoMenuBoxOpen[i].style.transform = 'translateY(' + (-maximum * indexV) + 'px';
        videoMenuBox[i].style.transform = 'translateY(' + (-maximum * indexV) + 'px';
        indexV++;
        if (indexV == 5) {
            indexV = 0;
        }
    });
}
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
	// console.log(target);
	// console.log(itsMenu);
	// console.log(itsBtnMenu);
	// console.log(menuIsActive);

	if (!itsMenu && !itsBtnMenu && menuIsActive) {
		toggleMenu();
	}
});