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



const slides = document.querySelectorAll('.pets-bottom__card'),
	prev = document.querySelector('.pets-bottom__arrow--left'),
	next = document.querySelector('.pets-bottom__arrow--right');

// let slideIndex = 3;

// function showSlides(n) {
// 	if (n > slides.length) {
// 		slideIndex = 3;
// 	} 
// 	if (n < 3) { 
// 		slideIndex = slides.length;
// 	}

// 	slides.forEach(item => item.style.display = 'none');

// 	slides[slideIndex - 1].style.display = 'block';
// }

// function plusSlides(n) {
// 	showSlides(slideIndex += n);
// }

// prev.addEventListener('click', () => {
// 	plusSlides(-1);
// });






// let slides = document.querySelectorAll('.pets-bottom__card');
// console.log(slides);
// let slider = [];
// for (let i = 0; i < slides.length; i++) {
// 	slider[i] = slides[i].src;
// 	slides[i].remove();
// }
// console.log(slider);

// let step = 0;
// let offset = 0;

// function draw() {
// 	let img = document.createElement('img');
// 	img.src = slider[step];
// 	img.classList.add('pets-bottom__card');
// 	img.style.left = offset*311 + 'px';
// 	document.querySelector('#slide').appendChild(img);
// 	step++;
// 	offset = 1;
// }



function left() {
	let slides2 = document.querySelectorAll('.pets-bottom__card');
	let offset2 = 0;
	for (let i = 0; i < slides2.length; i++) {
		slides2[i].style.left = offset2 * 311 - 311 + 'px';
		offset2++;
	}
	setTimeout(function () {
		slides2[0].remove();
		// draw();
	});
}

// document.onclick = left;
prev.addEventListener('click', () => {
	left();
});