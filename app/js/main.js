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
	{
		name: 'Giant Panda',
		id: 1,
		status: 'not-active',
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Madagascarian Lemur',
		id: 2,
		status: 'not-active',
		src: "images/lemur.png",
		description: 'Lemurs are considered the world’s most endangered group of mammals.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Gorilla in Congo',
		id: 3,
		status: 'not-active',
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Chinese Alligator',
		id: 4,
		status: 'not-active',
		src: "images/aligator.png",
		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Giant Panda',
		id: 9,
		status: 'active',
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Madagascarian Lemur',
		id: 10,
		status: 'active',
		src: "images/lemur.png",
		description: 'Lemurs are considered the world’s most endangered group of mammals.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Gorilla in Congo',
		id: 11,
		status: 'active',
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Chinese Alligator',
		id: 12,
		status: 'active',
		src: "images/aligator.png",
		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Giant Panda',
		id: 13,
		status: 'not-active',
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Madagascarian Lemur',
		id: 14,
		status: 'not-active',
		src: "images/lemur.png",
		description: 'Lemurs are considered the world’s most endangered group of mammals.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Gorilla in Congo',
		id: 15,
		status: 'not-active',
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Chinese Alligator',
		id: 16,
		status: 'not-active',
		src: "images/aligator.png",
		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
		link: 'VIEW LIVE CAM'
	},
];

const slidesBottom = [
	{
		name: 'African Lion',
		id: 7,
		src: "images/lion.png",
		description: 'Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Sumatran Tiger',
		id: 8,
		src: "images/tiger.png",
		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Chinese Alligator',
		id: 4,
		src: "images/aligator.png",
		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Gorilla in Congo',
		id: 1,
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'African Lion',
		id: 7,
		src: "images/lion.png",
		description: 'Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Sumatran Tiger',
		id: 8,
		src: "images/tiger.png",
		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Chinese Alligator',
		id: 4,
		src: "images/aligator.png",
		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Gorilla in Congo',
		id: 1,
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'African Lion',
		id: 7,
		src: "images/lion.png",
		description: 'Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Sumatran Tiger',
		id: 8,
		src: "images/tiger.png",
		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Chinese Alligator',
		id: 4,
		src: "images/aligator.png",
		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Gorilla in Congo',
		id: 1,
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
		link: 'VIEW LIVE CAM'
	},
];

const animalPlaceholder = document.querySelector(".pets-bottom");

const slidesOne = document.querySelector('.pets-bottom__card');
const slides = document.querySelectorAll('.pets-bottom__card'),
	prev = document.querySelector('.pets-bottom__arrow--left'),
	next = document.querySelector('.pets-bottom__arrow--right');

let sliders = [];

function createListWithInnerHTML(slidesTop) {

	const rows = slidesTop.map(animal => {
		// console.log(animal);
		return `
		<div class="pets-bottom__card card-${animal.id} ${animal.status}">
			<div class="pets-bottom__card-img">
			<img src="${animal.src}">
			</div>
				<div class="pets-bottom__card-info">
					<div class="pets-bottom__card-info-head">${animal.name}</div>
					<div class="pets-bottom__card-info-text">${animal.description}</div>
				</div>
		</div>`;
	});
	const html = `<div class="pets-bottom__row-1" style="left:0">${rows.join(' ')}</div>`;
	// console.log(html);
	animalPlaceholder.innerHTML = html;


}

createListWithInnerHTML(slidesTop);



// document.onclick = function () {
	// 	const ball = document.querySelector(".pets-bottom__row-1").style;
	// 	ball.left = parseFloat(ball.left) + 20 + "px";
	// };
	
const slideOne = document.querySelector('.pets-bottom__card').clientWidth;
console.log(slideOne);

const proba = document.querySelector('.pets-bottom__row-1');

prev.addEventListener('click', function () {
	proba.style.left = (parseInt(proba.style.left, 10) + 1440) + 'px';
});

next.addEventListener('click', function () {
	proba.style.left = (parseInt(proba.style.left, 10) - 1440) + 'px';
});

























	// document.querySelector('.btn1')
	// 	.addEventListener('click', () => update(10));

	// так можно добавить вторую кнопку для укорачивания:
	// document.querySelector('.btn2')
	// 	.addEventListener('click', () => update(-10));

// const slideses = document.querySelectorAll('.pets-bottom__card');

// let currentItem = 0;
// let isEnabled = true;

// function changeCurrentItem(n) {
// 	currentItem = (n + slideses.length) % slideses.length;
// }

// function hideItem(direction) {
// 	isEnabled = false;
// 	slideses[currentItem].classList.add(direction);
// 	slideses[currentItem].addEventListener('animationend', function() {
// 		this.classList.remove('active', direction);
// 	});
// }

// function showItem(direction) {
// 	slideses[currentItem].classList.add('next' , direction);
// 	slideses[currentItem].addEventListener('animationend', function() {
// 		this.classList.remove('next', direction);
// 		this.classList.add('active');
// 		isEnabled = true;
// 	});
// }

// function previousItem(n) {
// 	hideItem('to-right');
// 	changeCurrentItem(n - 1);
// 	showItem('from-left');
// }

// function nextItem(n) {
// 	hideItem('to-left');
// 	changeCurrentItem(n + 1);
// 	showItem('from-right');
// }

// document.querySelector('.pets-top__arrows.left').addEventListener('click', function() {
// 	if (isEnabled) {
// 		previousItem(currentItem);
// 	}
// });

// document.querySelector('.pets-top__arrows.right').addEventListener('click', function() {
// 	if (isEnabled) {
// 		nextItem(currentItem);
// 	}
// });




// const slidersh = document.querySelector('.pets-bottom__row-1');

// let offset = 1;

// function draw() {
// 	slides.style.left = 4400 + 'px';
// }

// draw();



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
//// });