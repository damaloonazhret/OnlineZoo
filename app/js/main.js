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
	{
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Madagascarian Lemur',
		src: "images/lemur.png",
		description: 'Lemurs are considered the world’s most endangered group of mammals.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Gorilla in Congo',
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
		link: 'VIEW LIVE CAM'
	}
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
	}
];

const animalPlaceholder = document.querySelector(".pets-bottom");

function createListWithInnerHTML(slidesBottom) {

	const rows = slidesBottom.map(animal => {
		// console.log(animal);
		return `
		<div class="pets-bottom__card card-${animal.id}">
			<div class="pets-bottom__card-img">
			<img src="${animal.src}">
			</div>
				<div class="pets-bottom__card-info">
					<div class="pets-bottom__card-info-head">${animal.name}</div>
					<div class="pets-bottom__card-info-text">${animal.description}</div>
				</div>
		</div>`;
	});
	const html = `<div class="pets-bottom__row-1">${rows.join()}</div>`;
	console.log(html);
	animalPlaceholder.innerHTML = html;
}

createListWithInnerHTML(slidesBottom);

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