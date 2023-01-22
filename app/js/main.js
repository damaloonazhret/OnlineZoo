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
		name: 'Chinese Alligator',
		id: 16,
		idi: 'lastClone',
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
		name: 'Chinese Alligator',
		id: 16,
		status: 'not-active',
		src: "images/aligator.png",
		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Giant Panda',
		id: 1,
		idi: 'firstClone',
		
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
];


const animalPlaceholder = document.querySelector(".pets-bottom");

const slidesOne = document.querySelector('.pets-bottom__card');
const slides = document.querySelectorAll('.pets-bottom__card'),
	prev = document.querySelector('.pets-bottom__arrow--left'),
	next = document.querySelector('.pets-bottom__arrow--right');

let sliders = [];

function createListWithInnerHTML(slidesTop) {

	const rows = slidesTop.map(animal => {
		return `
		<div class="pets-bottom__card card-${animal.id} ${animal.status}" style="left:0" id="${animal.idi}">
			<div class="pets-bottom__card-img">
			<img src="${animal.src}">
			</div>
				<div class="pets-bottom__card-info">
					<div class="pets-bottom__card-info-head">${animal.name}</div>
					<div class="pets-bottom__card-info-text">${animal.description}</div>
				</div>
		</div>`;
	});


	const html = `<div class="pets-bottom__row-1" >${rows.join(' ')}</div>`;
	animalPlaceholder.innerHTML = html;
}

createListWithInnerHTML(slidesTop);

let doc = document,
	index = 1;

let Slider = function () {
	this.box = doc.querySelector('.pets-top');
	this.slidesBox = doc.querySelector('.pets-bottom__row-1');
	this.slidess = doc.querySelectorAll('.pets-bottom__card');
	this.btns = doc.querySelectorAll('.btnses');
	this.size = (this.box.clientWidth + 40) / 3;

	this.position();
	this.carousel();
};

Slider.prototype.position = function () {
	let size = this.size;
	this.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px';
};

Slider.prototype.carousel = function () {
	let i, max = this.btns.length,
		that = this;

	for (i = 0; i < max; i += 1) {
		that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null, that));
	}
};

Slider.prev = function (box) {
	box.slidesBox.style.transition = "transform .3s ease-in-out";
	let size = box.size;
	index <= 0 ? false : index--;
	box.slidesBox.style.transform = "translateX(" + (-index * size) + 'px';
	box.jump2();
};

Slider.prototype.jump2 = function () {
	let that = this;
	let size = this.size;
	this.slidesBox.addEventListener('transitionend', function () {
		// that.slidess[index].id === "firstClone" ? index = 0 : index;
		// slidesBoxe[10].id === "firstClone" ? index = 1 : index;
		that.slidess[index].id === "lastClone" ? index = that.slidess.length - 4 : index;
		that.slidesBox.style.transition = "none";
		that.slidesBox.style.transform = "translateX(" + (-index * size) + 'px';
	});
};

Slider.next = function (box) {
	box.slidesBox.style.transition = "transform .3s ease-in-out";
	let max = box.slidess.length;
	let size = box.size;
	index >= max - 2 ? false : index++;
	// index++;
	box.slidesBox.style.transform = "translateX(" + (-index * size) + 'px';
	box.jump();
};

const slidesBoxe = doc.querySelector('.pets-bottom__row-1');

Slider.prototype.jump = function () {
	let that = this;
	let size = this.size;
	this.slidesBox.addEventListener('transitionend', function () {
		that.slidess[index].id === "firstClone" ? index = 1 : index;
		// slidesBoxe[10].id === "firstClone" ? index = 1 : index;
		// that.slidess[index].id === "lastClone" ? index = that.slidess.length - 4 : index;
		// that.slidesBox.style.transition = "none";
		that.slidesBox.style.transform = "translateX(" + (-index * size) + 'px';
	});
};

// Slider.prototype.jump2 = function () {
// 	var that = this;
// 	var size = this.size;
// 	this.slidesBox.addEventListener('transitionend', function () {
// 		// that.slidess[index].id === "firstClone" ? index = 0 : index;
// 		that.slidess[index].id === "lastClone" ? index = that.slidess.length - 4 : index;
// 		that.slidesBox.style.transition = "none";
// 		that.slidesBox.style.transform = "translateX(" + (-index * size) + 'px';
// 	});
// };
new Slider();

// that.slidess.length - 4


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