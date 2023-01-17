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



// const slides = document.querySelectorAll('.pets-bottom__card'),
// 	prev = document.querySelector('.pets-bottom__arrow--left'),
// 	next = document.querySelector('.pets-bottom__arrow--right');

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



const slidesTop = [
	{animalName: 'Giant Panda',
	animalSrc: "images/panda.png",
	description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
	link: 'VIEW LIVE CAM'},
	{animalName: 'Madagascarian Lemur',
	animalSrc: "images/lemur.png",
	description: 'Lemurs are considered the world’s most endangered group of mammals.',
	link: 'VIEW LIVE CAM'},
	{animalName: 'Gorilla in Congo',
	animalSrc: "images/gorilla.png",
	description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
	link: 'VIEW LIVE CAM'}
];

const slidesBottom = [
	{animalName: 'African Lion',
	animalSrc: "images/lion.png",
	description: 'Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.',
	link: 'VIEW LIVE CAM'},
	{animalName: 'Sumatran Tiger',
	animalSrc: "images/tiger.png",
	description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
	link: 'VIEW LIVE CAM'},
	{animalName: 'Chinese Alligator',
	animalSrc: "images/aligator.png",
	description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
	link: 'VIEW LIVE CAM'}
];


// let slides = document.querySelectorAll('.pets-bottom__card');
// console.log(slides);
// let slider = [];
// for (let i = 0; i < slides.length; i++) {
// 	slider[i] = slides[i];
// 	slides[i].remove();
// }
// console.log(slider);


// let slideOne = document.createElement('div');
// console.log(slideOne);
// for (let i = 0; i < slides.length; i++) {
// 	document.querySelector('#slide').appendChild(slider[i]);
// }

















// let step = 0;
// let offset = 0;

// function draw() {


// 	img.src = slider[step];

	// slideOne.classList.add(slides[1]);
	// slideOne.classList.add('card-4');

// 	img.style.left = offset*311 + 'px';

// 	step++;
// 	offset = 1;
// }



// function left() {
// 	let slides2 = document.querySelectorAll('.pets-bottom__card');
// 	let offset2 = 0;
// 	for (let i = 0; i < slides2.length; i++) {
// 		slides2[i].style.left = offset2 * 311 - 311 + 'px';
// 		offset2++;
// 	}
// 	setTimeout(function () {
// 		slides2[0].remove();
// 		// draw();
// 	});
// }

// document.onclick = left;
// prev.addEventListener('click', () => {
// 	left();
// });