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

const slidesAll = [
	[
		{
			name: 'Chinese Alligator',
			id: 'firstClone',
			status: 'not-active',
			src: "images/aligator.png",
			description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
			link: 'VIEW LIVE CAM'
		},
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
	],
	[
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
	], 
	[
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
		{
			name: 'Giant Panda',
			id: 'lastClone',
			status: 'not-active',
			src: "images/panda.png",
			description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
			link: 'VIEW LIVE CAM'
		},
	]
];

const slidesCloneFirst = [
	{
		name: 'Chinese Alligator',
		id: 'firstClone',
		status: 'not-active',
		src: "images/aligator.png",
		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
		link: 'VIEW LIVE CAM'
	},
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
];

const slidesCloneLast = [
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
	{
		name: 'Giant Panda',
		id: 'lastClone',
		status: 'not-active',
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
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

	

	// const rowsCloneFirst = slidesCloneFirst.map(animal => {
	// 	return `
	// 	<div id="firstClone">
	// 		<div class="pets-bottom__card card-${animal.id} ${animal.status}" style="left:0">
	// 			<div class="pets-bottom__card-img">
	// 			<img src="${animal.src}">
	// 			</div>
	// 				<div class="pets-bottom__card-info">
	// 					<div class="pets-bottom__card-info-head">${animal.name}</div>
	// 					<div class="pets-bottom__card-info-text">${animal.description}</div>
	// 				</div>
	// 		</div>
	// 	</div>`;
	// });

	// const rows = slidesTop.map(animal => {
	// 	return `
	// 	<div class="pets-bottom__card card-${animal.id} ${animal.status}" style="left:0">
	// 		<div class="pets-bottom__card-img">
	// 		<img src="${animal.src}">
	// 		</div>
	// 			<div class="pets-bottom__card-info">
	// 				<div class="pets-bottom__card-info-head">${animal.name}</div>
	// 				<div class="pets-bottom__card-info-text">${animal.description}</div>
	// 			</div>
	// 	</div>`;
	// });

	// const rowsCloneLast = slidesCloneFirst.map(animal => {
	// 	return `
	// 		<div class="pets-bottom__card card-${animal.id} ${animal.status}" style="left:0">
	// 			<div class="pets-bottom__card-img">
	// 			<img src="${animal.src}">
	// 			</div>
	// 				<div class="pets-bottom__card-info">
	// 					<div class="pets-bottom__card-info-head">${animal.name}</div>
	// 					<div class="pets-bottom__card-info-text">${animal.description}</div>
	// 				</div>
	// 		</div>`;
	// });

	for (let i = 0; i < 3; i++) {
		let rows = slidesAll[i].map(animal => {
			return `
			<div class="pets-bottom__card card-${animal.id} ${animal.status}" style="left:0">
				<div class="pets-bottom__card-img">
					<img src="${animal.src}">
				</div>
					<div class="pets-bottom__card-info">
						<div class="pets-bottom__card-info-head">${animal.name}</div>
						<div class="pets-bottom__card-info-text">${animal.description}</div>
					</div>
			</div>`;
		});
	}
	const html = `<div class="pets-bottom__row-1" >${rows.join(' ')}</div>`;
	animalPlaceholder.innerHTML = html;

	// const htmlFirst = `<div class="pets-bottom__row-1" >${rowsCloneFirst.join(' ')}</div>`;
	// const htmlLast = `<div class="pets-bottom__row-1" >${rowsCloneLast.join(' ')}</div>`;
	// animalPlaceholder.innerHTML = htmlFirst;
	// animalPlaceholder.innerHTML = htmlLast;
}

createListWithInnerHTML(slidesTop);

var doc = document,
	index = 1;

var Slider = function () {
	this.box = doc.querySelector('.pets-bottom');
	this.slidesBox = doc.querySelector('.pets-bottom__row-1');
	this.slidess = doc.querySelectorAll('.pets-bottom__card');
	this.btns = doc.querySelectorAll('.btnses');
	this.size = this.box.clientWidth;

	this.position();
	this.carousel();
};

Slider.prototype.position = function () {
	var size = this.size;
	this.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px';
};

Slider.prototype.carousel = function () {
	var i, max = this.btns.length,
		that = this;

	for (i = 0; i < max; i += 1) {
		that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null, that));
	}
};

Slider.prev = function (box) {
	box.slidesBox.style.transition = "transform .3s ease-in-out";
	var size = box.size;
	index <= 0 ? false : index--;
	box.slidesBox.style.transform = "translateX(" + (-index * size) + 'px';
	box.jump();
};

Slider.next = function (box) {
	box.slidesBox.style.transition = "transform .3s ease-in-out";
	var max = box.slidess.length;
	var size = box.size;
	index >= max - 1 ? false : index++;
	box.slidesBox.style.transform = "translateX(" + (-index * size) + 'px';
	box.jump();
};

Slider.prototype.jump = function () {
	var that = this;
	var size = this.size;
	this.slidesBox.addEventListener('transitionend', function () {
		that.slidess[index].id === "firstClone" ? index = 1 : index;
		that.slidess[index].id === "lastClone" ? index = that.slidess.length - 2 : index;
		that.slidesBox.style.transition = "none";
		that.slidesBox.style.transform = "translateX(" + (-index * size) + 'px';
	});
}

new Slider();

// const slideOne = document.querySelector('.pets-bottom__card').clientWidth;
// console.log(slideOne);

// const slideRow1 = document.querySelector('.pets-bottom__row-1');
// const slidesRows = document.querySelectorAll('.pets-bottom__card');
// console.log(slidesRows);

// prev.addEventListener('click', function () {
// 	for (let i = 0; i < slidesRows.length; i++) {
// 		slidesRows[i].style.left = (parseInt(slidesRows[i].style.left, 10) + 1440) + 'px';
// 	}
// });

// next.addEventListener('click', function () {
// 	for (let i = 0; i < slidesRows.length; i++) {
// 		slidesRows[i].style.left = (parseInt(slidesRows[i].style.left, 10) - 1440) + 'px';
// 	}
// });