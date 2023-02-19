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
const slidesTop = [
	{
		name: 'Gorilla in Congo',
		id: 3,
		idi: 'lastClone',
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
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
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
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
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Madagascarian Lemur',
		id: 2,
		src: "images/lemur.png",
		description: 'Lemurs are considered the world’s most endangered group of mammals.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Gorilla in Congo',
		id: 3,
		idi: 'firstClone',
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
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
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Madagascarian Lemur',
		id: 2,
		src: "images/lemur.png",
		description: 'Lemurs are considered the world’s most endangered group of mammals.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Gorilla in Congo',
		id: 3,
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
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
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Madagascarian Lemur',
		id: 2,
		src: "images/lemur.png",
		description: 'Lemurs are considered the world’s most endangered group of mammals.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Gorilla in Congo',
		id: 3,
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
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
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
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
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Madagascarian Lemur',
		id: 2,
		src: "images/lemur.png",
		description: 'Lemurs are considered the world’s most endangered group of mammals.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Gorilla in Congo',
		id: 3,
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
		link: 'VIEW LIVE CAM'
	},
];

const slidesBottom = [
	{
		name: 'West End Bald Eagles',
		id: 5,
		idi: 'lastClone',
		src: "images/eagles.png",
		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Australian Koala',
		id: 6,
		src: "images/koala.png",
		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
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
		name: 'West End Bald Eagles',
		id: 5,
		src: "images/eagles.png",
		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Australian Koala',
		id: 6,
		src: "images/koala.png",
		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
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
		idi: 'firstClone',
		src: "images/tiger.png",
		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'West End Bald Eagles',
		id: 5,
		src: "images/eagles.png",
		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Australian Koala',
		id: 6,
		src: "images/koala.png",
		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
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
		name: 'West End Bald Eagles',
		id: 5,
		src: "images/eagles.png",
		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Australian Koala',
		id: 6,
		src: "images/koala.png",
		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
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
		name: 'West End Bald Eagles',
		id: 5,
		src: "images/eagles.png",
		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Australian Koala',
		id: 6,
		src: "images/koala.png",
		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
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
		name: 'West End Bald Eagles',
		id: 5,
		src: "images/eagles.png",
		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Australian Koala',
		id: 6,
		src: "images/koala.png",
		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
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
];
const animalPlaceholder = document.querySelector(".pets-bottom");




const mapCards = (animal) => {
	return `
		<div class="pets-bottom__card card-${animal.id} ${animal.status}" style="left:0" id="${animal.idi}">
			<div class="pets-bottom__card-img">
			<img src="${animal.src}">
			</div>
				<div class="pets-bottom__card-info">
					<div class="pets-bottom__card-info-head">${animal.name}</div>
					<div class="pets-bottom__card-info-text">${animal.description}</div>
					<div class="pets-bottom__card-info-live">
    			<a href="#">VIEW LIVE CAM
                    <svg class="pets-bottom__card-info-live-svg" width="28" height="25" viewBox="0 0 28 25" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="pets-bottom__card-info-live-svg" fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.2039 0.24596C14.9987 0.335165 14.8124 0.465905 14.6555 0.630691C14.4982 
						0.795061 14.3735 0.990325 14.2883 1.2053C14.2032 1.42027 14.1594 1.65074 14.1594 
						1.88349C14.1594 2.11623 14.2032 2.3467 14.2883 2.56167C14.3735 2.77665 14.4982 
						2.97191 14.6555 3.13628L21.4444 10.2474H2.12822C1.65029 10.2474 1.19193 10.4847 
						0.85398 10.9071C0.51603 11.3296 0.326172 11.9025 0.326172 12.4999C0.326172 13.0973 
						0.51603 13.6703 0.85398 14.0927C1.19193 14.5152 1.65029 14.7525 2.12822 
						14.7525H21.4453L14.6555 21.8645C14.3384 22.1967 14.1603 22.6474 14.1603 
						23.1173C14.1603 23.5872 14.3384 24.0378 14.6555 24.3701C14.9726 24.7023 
						15.4027 24.889 15.8511 24.889C16.2995 24.889 16.7296 24.7023 17.0467 
						24.3701L27.1786 13.7532C27.3359 13.5888 27.4607 13.3935 27.5458 13.1786C27.6309 
						12.9636 27.6748 12.7331 27.6748 12.5004C27.6748 12.2676 27.6309 12.0372 27.5458 
						11.8222C27.4607 11.6072 27.3359 11.412 27.1786 11.2476L17.0467 0.630691C16.8898 
						0.465905 16.7034 0.335165 16.4983 0.24596C16.2931 0.156756 16.0732 0.11084 15.8511 
						0.11084C15.629 0.11084 15.409 0.156756 15.2039 0.24596Z"
                        fill="#F58021" />
                    </svg>
                </a>
                </div>
				</div>
		</div>`;
};

const createListWithInnerHTML = (slidesTop, slidesBottom) => {
	const rowsTop = slidesTop.map(mapCards);
	const rowsBottom = slidesBottom.map(mapCards);

	const html = `<div class="pets-bottom__row-1" >${rowsTop.join(' ')}</div>
	<div class="pets-bottom__row-2" >${rowsBottom.join(' ')}</div>`;
	animalPlaceholder.innerHTML = html;
};

createListWithInnerHTML(slidesTop, slidesBottom);

let doc = document,
	index = 1;

const box = doc.querySelector('.pets-top'),
	slidesBox = doc.querySelector('.pets-bottom__row-1'),
	slidesBoxBottom = doc.querySelector('.pets-bottom__row-2'),
	slides = doc.querySelectorAll('.pets-bottom__card'),
	btnLeft = doc.querySelector('.pets-bottom__arrow--left'),
	btnRight = doc.querySelector('.pets-bottom__arrow--right'),
	sizeTransform = (box.clientWidth + 40),
	slidesss = doc.querySelector('.pets-bottom__card'),
	sizeWidth = (slidesss.clientWidth),
	marginRight = parseInt(getComputedStyle(slidesss, true).marginRight),
	slidesThree = ((sizeWidth * 3) + (marginRight * 3)),
	size = ((sizeWidth * 3) + (marginRight * 3)),
	slidesTwo = ((sizeWidth * 2) + (marginRight * 2));

// const size = box.clientWidth + 40;

if (box.clientWidth > slidesThree) {
	slidesBox.style.transform = 'translateX(' + (-index * ((sizeWidth * 2) + (marginRight * 2))) + 'px';
	slidesBoxBottom.style.transform = 'translateX(' + (-index * ((sizeWidth * 2) + (marginRight * 2))) + 'px';
} else {
	slidesBox.style.transform = 'translateX(' + (-index * ((sizeWidth * 3) + (marginRight * 3))) + 'px';
	slidesBoxBottom.style.transform = 'translateX(' + (-index * ((sizeWidth * 3) + (marginRight * 3))) + 'px';
}

const onButtonClick = (direction) => () => {
	switch (direction) {
		case 'left':
			index > 0 && index--;
			break;
		case 'right':
			index < 6 && index++;
			break;
		default:
			break;
	}
	slidesBox.style.transition = "transform .9s ease-in-out";
	slidesBoxBottom.style.transition = "transform .9s ease-in-out";
	slidesBox.style.transform = "translateX(" + (-index * size) + 'px';
	slidesBoxBottom.style.transform = "translateX(" + (-index * size) + 'px';
	btnRight.setAttribute("disabled", "disabled");
	btnLeft.setAttribute("disabled", "disabled");
};

const onSlidesBoxTransitionEnd = () => {
	switch (slides[index].id) {
		case 'lastClone':
			index = (slides.length / 2) - 17;
			break;
		case 'firstClone':
			index = 1;
			break;
		default:
			break;
	}
	slidesBox.style.transition = "none";
	slidesBoxBottom.style.transition = "none";
	slidesBox.style.transform = "translateX(" + (-index * size) + 'px';
	slidesBoxBottom.style.transform = "translateX(" + (-index * size) + 'px';
	btnRight.removeAttribute('disabled');
	btnLeft.removeAttribute('disabled');
};


btnRight.addEventListener('click', onButtonClick('right'));
btnLeft.addEventListener('click', onButtonClick('left'));

slidesBox.addEventListener('transitionend', onSlidesBoxTransitionEnd);
slidesBoxBottom.addEventListener('transitionend', onSlidesBoxTransitionEnd);




function slideList () {
    const range = document.getElementById('range'),
    boxSlide = document.querySelector('.pets-think__box-slider-box'),
    boxContainer = document.querySelector('.pets-think__box-slider-container'),
    gap = (boxContainer.clientWidth - (boxSlide.clientWidth * 2)),
    translateWidth = (boxSlide.clientWidth + (gap));

    let indexR = range.value;
    boxContainer.style.transition = "transform .7s ease-in-out";
    boxContainer.style.transform = "translateX(" + (-indexR * translateWidth) + 'px';
}








// sliderStrip.style.transform = 'translateX(' + (-indexR * translateWidth) + 'px';

// const onButtonClickReview = (direction) => () => {
// 	switch (direction) {
// 		case 'left':
// 			indexR > 0 && indexR--;
// 			break;
// 		case 'right':
// 			indexR < 4 && indexR++;
// 			break;
// 		default:
// 			break;
// 	}
//     console.log(indexR);
// 	sliderStrip.style.transition = "transform .9s ease-in-out";
//     sliderStrip.style.transform = "translateX(" + (-indexR * translateWidth) + 'px';
//     arrowRightReviev.setAttribute("disabled", "disabled");
// 	arrowLeftReview.setAttribute("disabled", "disabled");
// };

// const onSlidesBoxTransitionEndReview = () => {
//     switch (slidesReview[indexR].id) {
//         case '0':
//             indexR = 3;
// 			break;
//             case '4':
//                 indexR = 1;
//                 break;
//                 default:
//                     break;
//                 }
//     sliderStrip.style.transition = "none";
// 	sliderStrip.style.transform = "translateX(" + (-indexR * translateWidth) + 'px';
// 	arrowRightReviev.removeAttribute('disabled');
// 	arrowLeftReview.removeAttribute('disabled');
// };

// arrowRightReviev.addEventListener('click', onButtonClickReview('right'));
// arrowLeftReview.addEventListener('click', onButtonClickReview('left'));
// sliderStrip.addEventListener('transitionend', onSlidesBoxTransitionEndReview);
const openPanels = document.querySelectorAll('.popup-link-not-close');
const menuPanel = document.querySelectorAll('.donation__popup-choise-content');
const overlay = document.querySelectorAll('.menu__list-overlay');
const btnMenuPanel = document.querySelectorAll('.donation__popup-input');
const popups = document.querySelectorAll('.donation__popup-choise');
const arrowBox = document.querySelectorAll('.donation__popup-input-container-box');
const buttonDollars = document.querySelectorAll('.donation__popup-price input');
const clearInput = document.querySelector('.donation__popup-clear-block');
const donationInformationSelect = document.querySelector('#donation_information');
const donationInformationSelectTwo = document.querySelector('#donation_information_2');
const donationInformationSelectThree = document.querySelector('#donation_information_3');
const donationInformationInput = donationInformationSelect.querySelector('input[data-input]');
const donationInformationInputTwo = donationInformationSelectTwo.querySelector('input[data-input]');
const donationInformationInputThree = donationInformationSelectThree.querySelector('input[data-input]');
const linkBottomPopup = document.querySelectorAll('.donation__popup-live-info-button a');
const inputParent = document.querySelector('.donation-box__right-amount-don');
const inputLink = document.querySelector('.donation-box__right-amount a');
const otherAmountBlock = document.querySelector('.donation__popup-other-block');

// console.log(donationInformationInput);

otherAmountBlock.addEventListener('click', function () {
    asyncTimeoutInput();
});

inputLink.addEventListener('click', function () {
    // buttonDollars.forEach(el => {
    //     if (!el.classList.contains('active')) {
    //         buttonDollars[0].classList.add('active');
    //     }
    // });
    if (inputParent.value == '') {
        clearInput.value = inputParent.value;
        inputParent.value = '';
        asyncTimeoutInput();
    } else {
        searchButton();
        asyncTimeoutInput();
        clearInput.value = inputParent.value;
        otherBlock.classList.add('active');
        inputParent.value = '';
    }
});

function asyncTimeoutInput() {
    setTimeout(() => {
        clearInput.focus();
    }, 100);
}

buttonDollars.forEach(el2 => {
    linkBottomPopup.forEach(el => {
        el.addEventListener('click', function () {
            if (el.textContent == 'Other amount') {
                asyncTimeoutInput();
            }
            if (el.textContent == el2.value) {
                searchButton();
                el2.classList.add('active');
                // el2.setAttribute('name', 'donationAmount');
                clearInput.value = '';
                clearInput.value = el2.value.replace(/\D/g, "");
                otherBlock.classList.add('active');
            }
        });
        el2.addEventListener('click', function () {
            clearInput.value = '';
            clearInput.value = el2.value.replace(/\D/g, "");
            clearInput.style.border = '1px solid #000000';
            otherBlock.classList.add('active');
            firstPageInput.classList.remove('active');
        });
    });
});


buttonDollars.forEach(el => {
    el.addEventListener('click', function () {
        if (!el.classList.contains('active')) {
            searchButton();
            el.classList.add('active');
            // el.setAttribute('name', 'donationAmount');
        }
    });
});

function searchButton() {
    buttonDollars.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
            // el.removeAttribute('name');
            // clearInput.removeAttribute('name');
        }
    });
}

clearInput.addEventListener('click', function () {
    // clearInput.setAttribute('name', 'donationAmount');
    searchButton();
});





function serializeForm(formNode) {
    console.log(formNode.elements);
}


function handleFormSubmit(event) {
    event.preventDefault();
    serializeForm(applicantForms);
}

const applicantForms = document.querySelector('form');
applicantForms.addEventListener('submit', handleFormSubmit);



// function serializeForm(formNode) {
//     const { elements } = formNode;

//     const data = Array.from(elements)
//         .map((element) => {
//             const { name, type } = element;
//             const value = type === 'checkbox' ? element.checked : element.value;

//             return { name, value };
//         })
//         .filter((item) => !!item.name);
//     const obj = Object.assign({}, data);
//     console.log(obj);
// }



function serializeForm(formNode) {
    const { elements } = formNode;

    Array.from(elements)
    .filter((item) => !!item.name)
        .map((element) => {
            const { name, type } = element;
            const value = type === 'checkbox' ? element.checked : element.value;
            formData[name] = value;
            return { name, value };
        })
    console.log(formData);
}


// function serializeForm(formNode) {
//     const { elements } = formNode;

//     Array.from(elements)
//     .forEach((element) => {
//             console.log(element);
//             const { name, value } = element;
//             formData[name] = value;
//         });
//     console.log(formData);
// }

const selectItem = (popup, input) => {
    popup.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName === 'P') {
            input.value = target.textContent;
            input.placeholder = '';
        }
    });
};
selectItem(donationInformationSelect, donationInformationInput);
selectItem(donationInformationSelectTwo, donationInformationInputTwo);
selectItem(donationInformationSelectThree, donationInformationInputThree);

const formData = {
    // donationAmount: '',
    // specialPet: '',
    // isGift: false,
    // fullName: '',
    // email: '',
    // cardNumber: '',
    // cvv: '',
    // expMonth: '',
    // expYear: '',
};




for (let i = 0; i < openPanels.length; i++) {
    const openPanelActive = openPanels[i],
        overlayActive = overlay[i],
        arrowBoxActive = arrowBox[i];

    openPanelActive.addEventListener("click", function (e) {
        const openPanelName = openPanelActive.getAttribute('href').replace('#', ''),
            curentopenPanel = document.getElementById(openPanelName);

        openPanel(curentopenPanel, overlayActive, arrowBoxActive);
        e.preventDefault();
    });
}

function openPanel(curentopenPanel, overlayActive, arrowBoxActive) {
    curentopenPanel.classList.add('open');
    overlayActive.classList.add('active');
    arrowBoxActive.classList.add('active');
    overlayActive.addEventListener('click', function () {
        curentopenPanel.classList.remove('open');
        overlayActive.classList.remove('active');
        arrowBoxActive.classList.remove('active');
    });
    curentopenPanel.addEventListener('click', function () {
        curentopenPanel.classList.remove('open');
        overlayActive.classList.remove('active');
        arrowBoxActive.classList.remove('active');
    });
}





const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('html');
const lockPadding = document.querySelectorAll('.lock-padding');
const popupBottomBtn = document.querySelector('.pets-paf__info-box-moreinfo-btn');
const popupBottom = document.getElementById('popup_bottom');
const allPopups = document.querySelectorAll('.donation__popup');

const checkBoxFirst = document.querySelector('.donation__popup-checkbox-daw');
const checkBoxName = document.querySelector('.donation__popup-name-input');
const checkBoxEmail = document.querySelector('.donation__popup-email-input');
const checkBoxCard = document.querySelector('.donation__popup-card-input');
const checkBoxCVV = document.querySelector('.donation__popup-cvv-input');
const checkDate = document.querySelectorAll('.donation__popup-input');
const inputBorder = document.querySelectorAll('.input-border');




let unlock = true;

const timeout = 400;

// popupBottomBtn.addEventListener('click', function (e) {
//     popupBottom.classList.add('open');
//     e.preventDefault();
// });

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            e.preventDefault();
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.donation__popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("mousedown", function (e) {
            if (!e.target.closest('.donation__popup-box')) {
                popupClose(e.target.closest('.donation__popup'));
            }
        });
    }
}


function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        setTimeout(() => {
                if (!allPopups[0].classList.contains('open') &&
                !allPopups[1].classList.contains('open') && 
                !allPopups[2].classList.contains('open') && 
                !allPopups[3].classList.contains('open')) {
                    checkDate[0].placeholder = 'Choose your favourite';
                    checkDate[1].placeholder = 'Month';
                    checkDate[2].placeholder = 'Year';
                    checkDate[0].value = '';
                    checkDate[1].value = '';
                    checkDate[2].value = '';
                    clearInput.value = '';
                    checkBoxFirst.checked = false;
                    checkBoxName.value = '';
                    checkBoxEmail.value = '';
                    checkBoxCard.value = '';
                    checkBoxCVV.value = '';
                    searchButton();
                    spanAll.forEach(el => {
                        el.classList.remove('active');
                    });
                    inputBorder.forEach(el => {
                        el.style.border = '1px solid #000000';
                    });
                    expirationError.classList.remove('donation__popup-expiration-error');
                    creditError.classList.remove('donation__popup-credit-error');
                }
        }, 100);

        if (doUnlock) {
            bodyUnLock();
        }
    }
}



function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.urapper').offsetWidth + 'px';

    if (true) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);

    }
}

function bodyUnLock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.donation__popup.open');
        popupClose(popupActive);
    }
});


const inputPopupValidate = document.querySelectorAll('.donation__popup-input');
const buttonBlock = document.querySelectorAll('.block');
const popupFirstValidate = document.getElementById('popup');
const popupTwoValidate = document.getElementById('popup_2');
const popupThreeValidate = document.getElementById('popup_3');
const inputName = document.querySelector('.donation__popup-name-input');
const inputEmail = document.querySelector('.donation__popup-email-input');
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const htmll = document.querySelector('html');
const firstPageInput = document.querySelector('.donation__popup-clear-block-container span');
const firstPageSelect = document.querySelector('.donation__popup-input-container-box-content span');
const secondPageName = document.querySelector('.donation__popup-name span');
const secondPageEmail = document.querySelector('.donation__popup-email span');
const creditError = document.querySelector('.donation__popup-credit');
const expirationError = document.querySelector('.donation__popup-expiration');
const cardInputContainer = document.querySelector('.donation__popup-card-input-container span');
const CVVInputContainer = document.querySelector('.donation__popup-cvv-input-container span');
const inputContainer = document.querySelectorAll('.donation__popup-input-container span');
const popupCard = document.querySelector('.donation__popup-card');
const popupCVV = document.querySelector('.donation__popup-cvv');
const donationInformation = document.querySelector('.donation__popup-information');
const disabledButton = document.querySelector('.donation__popup-btn-three');
const specialBlock = document.querySelector('.donation__popup-special-block');
const otherBlock = document.querySelector('.donation__popup-other-block');

const choise = document.querySelectorAll('.donation__popup-choise');


const spanAll = [
    firstPageInput,
    firstPageSelect,
    secondPageName,
    secondPageEmail,
    cardInputContainer,
    CVVInputContainer,
    inputContainer[1],
    inputContainer[2],
    disabledButton,
    specialBlock,
    otherBlock
];

popupFirstValidate.addEventListener('click', function () {
    if (inputPopupValidate[0].placeholder !== 'Choose your favourite') {
        btnMenuPanel[0].style.border = '1px solid #000000';
        firstPageSelect.classList.remove('active');
        specialBlock.classList.add('active');
    }
    if (inputPopupValidate[0].placeholder !== 'Choose your favourite' && clearInput.value !== '') {
        buttonBlock[0].classList.add('hidden');
    }
});

popupFirstValidate.addEventListener('keyup', function () {
    if (clearInput.value !== '') {
        clearInput.style.border = '1px solid #000000';
        firstPageInput.classList.remove('active');
        otherBlock.classList.add('active');
    }
    if (inputPopupValidate[0].placeholder !== 'Choose your favourite' && clearInput.value !== '') {
        buttonBlock[0].classList.add('hidden');
    }
});


buttonBlock[0].addEventListener('click', function () {
    if (inputPopupValidate[0].placeholder == 'Choose your favourite') {
        btnMenuPanel[0].style.border = '2px solid #ff8400';
        firstPageSelect.classList.add('active');
    } if (clearInput.value == '') {
        clearInput.style.border = '2px solid #ff8400';
        asyncTimeoutInput();
        firstPageInput.classList.add('active');
    }
});

popupFirstValidate.addEventListener('mousemove', function () {
    if (inputPopupValidate[0].placeholder == 'Choose your favourite' || clearInput.value == '') {
        buttonBlock[0].classList.remove('hidden');
    }
});




function validateEmail(email) {
    return EMAIL_REGEXP.test(email.value);
}
function validateName(name) {
    return name.value.length > 1;
}

popupTwoValidate.addEventListener('mousemove', function () {
    if (!validateEmail(inputEmail) || !validateName(inputName)) {
        buttonBlock[1].classList.remove('hidden');
    }
});

popupTwoValidate.addEventListener('keyup', function () {
    if (validateName(inputName)) {
        inputName.style.border = '1px solid #000000';
        secondPageName.classList.remove('active');
    }
    if (validateEmail(inputEmail)) {
        inputEmail.style.border = '1px solid #000000';
        donationInformation.style.marginTop = '';
        secondPageEmail.classList.remove('active');
    }
    if (inputName.value !== '' && inputEmail.value !== '') {
        buttonBlock[1].classList.add('hidden');
    }
});

buttonBlock[1].addEventListener('click', function () {
    if (!validateName(inputName)) {
        inputName.style.border = '2px solid #ff8400';
        secondPageName.classList.add('active');
    } if (!validateEmail(inputEmail)) {
        inputEmail.style.border = '2px solid #ff8400';
        donationInformation.style.marginTop = '20px';
        secondPageEmail.classList.add('active');
    }
});

function validateCard(checkBoxCard) {
    return checkBoxCard.value.length < 16;
};

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
};

function validateCVV() {
    return checkBoxCVV.value.length < 3;
}

function validateMonth() {
    return inputPopupValidate[1].placeholder == 'Month';
}

function validateYear() {
    return inputPopupValidate[2].placeholder == 'Year';
}

popupThreeValidate.addEventListener('mousemove', function () {
    if (validateCard(checkBoxCard) ||
        validateCVV(checkBoxCVV) ||
        validateMonth(inputPopupValidate[1]) ||
        validateYear(inputPopupValidate[2])) {
        buttonBlock[2].classList.remove('hidden');
    }
    if (!validateCard(checkBoxCard) &&
        !validateCVV(checkBoxCVV) &&
        !validateMonth(inputPopupValidate[1]) &&
        !validateYear(inputPopupValidate[2])) {
        buttonBlock[2].classList.add('hidden');
        disabledButton.classList.add('active');
    }
});

buttonBlock[2].addEventListener('click', function () {
    if (validateCard(checkBoxCard)) {
        checkBoxCard.style.border = '2px solid #ff8400';
        cardInputContainer.classList.add('active');
    }
    if (validateCVV(checkBoxCVV)) {
        checkBoxCVV.style.border = '2px solid #ff8400';
        CVVInputContainer.classList.add('active');
    }
    if (validateMonth(inputPopupValidate[1])) {
        inputPopupValidate[1].style.border = '2px solid #ff8400';
        inputContainer[1].classList.add('active');
    }
    if (validateYear(inputPopupValidate[2])) {
        inputPopupValidate[2].style.border = '2px solid #ff8400';
        inputContainer[2].classList.add('active');
    }
});



for (let i = 4; i < 6; i++) {
    inputBorder[i].addEventListener('keyup', function () {
        if (!validateCard(checkBoxCard)) {
            checkBoxCard.style.border = '1px solid #000000';
            cardInputContainer.classList.remove('active');
        }
        if (!validateCVV(checkBoxCVV)) {
            checkBoxCVV.style.border = '1px solid #000000';
            CVVInputContainer.classList.remove('active');
        }
    });
}

popupThreeValidate.addEventListener('click', function () {
    if (!validateMonth(inputPopupValidate[1])) {
        inputPopupValidate[1].style.border = '1px solid #000000';
        inputContainer[1].classList.remove('active');
    }
    if (!validateYear(inputPopupValidate[2])) {
        inputPopupValidate[2].style.border = '1px solid #000000';
        inputContainer[2].classList.remove('active');
    }
});


disabledButton.addEventListener('click', function() {
    popupClose(document.getElementById('popup_3'));
});




const mobileSlider = document.querySelector('.care-animals__mobile-slider');
const mobileSliderBox = document.querySelector('.care-animals__mobile-box');
const mobilePoints = document.querySelectorAll('.care-animals__mobile-points div');



// mobileSlider.addEventListener('click', function() {
//     mobileSlider.style.transform += "translateX(" + (-mobileSliderBox.clientWidth - 40) + 'px';
// });
mobilePoints.forEach(div => {
    div.addEventListener('click', function () {
        mobileSlider.style.transform = "translateX(" + ((-mobileSliderBox.clientWidth - 40) * div.id) + 'px';
        checkPointActive();
        div.classList.add('active');
    });
});


function checkPointActive() {
    mobilePoints.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
        }
    });
}

const videoPlaceholder = document.querySelector(".video-menu__box");
const videoPlaceholder2 = document.querySelector(".video-menu__box");

console.log(videoPlaceholder);

// const asideCards = (animal) => {
// return `
//     <div class="video-animals-open">
// 		<a href="${animal.href}">
// 			<div class="video-animal-block">
//                 ${animal.src}
// 				<p>${animal.text}</p>
// 			</div>
// 		</a>
// 		<p></p>
//     </div>
// `;
// };

const asideCards2 = (animal) => {
    return `
    <div class="video-animals--1 video-animals--hov video-animals--nobg">
        <a href="${animal.href}">
            ${animal.src}
        </a>
        <p></p>
    </div>
    `;
    };


const asideClose = [
    {
        src: `<svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2527 27.8338C18.8342 28.5556 16.3968 28.4446 13.9408 26.8344C13.7523 27.0683 13.5592 27.3037 13.3641 27.5415L13.3636 27.5421L13.3636 27.5421L13.3636 27.5421L13.3636 27.5422L13.3635 27.5422C12.8796 28.1322 12.3835 28.737 11.9159 29.3699C11.5691 29.8604 11.2457 30.3693 10.9223 30.8783L10.9222 30.8783L10.9222 30.8784C10.5988 31.3873 10.2754 31.8963 9.92857 32.3867C9.15987 33.4786 8.87864 34.6631 8.95363 35.9772C9.04738 37.6614 8.37243 38.5127 6.7038 38.8088C3.2728 39.4196 0.198026 36.9026 0.179278 33.4786C0.179278 33.1443 0.173234 32.81 0.167211 32.4768C0.158232 31.9801 0.1493 31.486 0.160522 30.9986C0.192046 29.6916 0.766871 28.5547 1.33912 27.4228C1.44755 27.2084 1.55588 26.9941 1.66041 26.7789C1.93087 26.2253 2.20385 25.6725 2.47686 25.1197L2.47691 25.1196L2.47702 25.1194C3.49091 23.0664 4.50516 21.0128 5.39139 18.9131C6.69412 15.836 8.65109 13.1894 10.615 10.5334L10.615 10.5334L10.615 10.5334L10.615 10.5334C11.0253 9.97849 11.4359 9.4232 11.8409 8.86349C11.8604 8.8395 11.8811 8.81552 11.902 8.79121L11.9021 8.79118L11.9021 8.79111C11.9621 8.72167 12.0243 8.64959 12.0659 8.56737C14.2595 4.62525 18.1592 3.69986 22.1714 2.92254C23.1609 2.73405 24.1423 2.49797 25.1231 2.26202C26.261 1.98829 27.398 1.71476 28.546 1.51596C30.6458 1.1458 32.8019 0.849683 34.9392 0.775652C37.4703 0.683114 39.6076 1.84909 41.5013 3.45926C38.6327 2.01566 35.5579 1.51596 32.3707 1.58999C31.5645 1.6085 30.7583 1.68253 29.9521 1.77507C28.7897 1.90462 28.3022 2.75597 27.9835 3.73687C27.1586 6.2354 27.3273 8.69692 28.2085 11.1769C28.4209 11.7728 28.5533 12.4015 28.6852 13.0278L28.6852 13.0279C28.7745 13.4521 28.8636 13.8752 28.9772 14.2862C29.122 14.7985 29.2634 15.3125 29.4048 15.8267L29.4048 15.8267L29.4048 15.8268L29.4048 15.8268L29.4048 15.8268C29.9226 17.7091 30.4412 19.5946 31.1333 21.4117C31.4145 22.1705 32.3519 22.9108 33.1581 23.2069C36.3266 24.3359 39.5701 24.9466 42.9262 23.8177C47.1446 22.3926 49.3194 17.9507 47.7258 13.8235C47.2151 12.516 46.6094 11.2488 46.0011 9.97609C45.8947 9.75354 45.7882 9.53081 45.6822 9.30768C45.5851 9.10226 45.3853 8.93738 45.1893 8.77554C45.1203 8.71866 45.0519 8.66215 44.9885 8.60439C44.746 8.3773 44.4932 8.15631 44.2397 7.93468C43.7287 7.488 43.2148 7.0387 42.7762 6.53153C42.1575 5.80973 42.1762 4.90286 42.7199 4.12554C43.2449 3.36673 44.0886 3.18165 44.9697 3.32971C46.3384 3.55181 47.2196 4.38464 47.6696 5.62465C48.1008 6.82765 47.6883 7.86408 46.6196 8.77095C48.0258 9.91843 48.4945 11.5656 48.907 13.1943C49.0631 13.811 49.147 14.4474 49.2311 15.0854L49.2311 15.0855L49.2312 15.0855L49.2312 15.0856C49.3288 15.8261 49.4267 16.5686 49.6382 17.2845C49.9914 18.4699 50.4152 19.6393 50.8394 20.8098C51.2034 21.8141 51.5677 22.8192 51.888 23.8362C52.3039 25.138 52.6869 26.4508 53.0697 27.7626L53.0697 27.7627L53.0697 27.7628L53.0698 27.7629C53.3943 28.8754 53.7187 29.9872 54.0628 31.0912C54.2546 31.7064 54.5 32.3066 54.7452 32.9061L54.7453 32.9062L54.7454 32.9067L54.7455 32.9068L54.7455 32.9069C54.8837 33.2449 55.0219 33.5826 55.1503 33.9228C55.5611 34.9993 56.4916 35.4839 57.4137 35.9643C57.5856 36.0539 57.7572 36.1432 57.9251 36.2363C58.7875 36.7175 59.2375 37.3467 59.0125 38.3461C58.8062 39.29 58.1875 39.8823 57.0439 39.8453C54.7003 39.7527 52.3755 39.5306 50.0506 39.29C49.6569 39.253 49.2444 38.8459 48.9632 38.5127C47.3883 36.6434 45.8322 34.7557 44.2948 32.8679C43.2261 31.5539 42.4387 30.1103 42.0262 28.4631C41.8509 27.7853 41.4935 27.1412 41.1402 26.5046C41.0401 26.3242 40.9403 26.1444 40.845 25.9645C40.7513 25.7795 40.4888 25.6129 40.2826 25.5759L40.1345 25.5469C38.9467 25.3138 37.7652 25.082 36.7391 26.1126C36.4779 26.3889 36.0496 26.5368 35.6759 26.6659L35.6704 26.6678C35.0142 26.8899 34.7143 27.2971 34.958 27.9264C35.8229 30.2155 35.7576 32.5542 35.6921 34.8983V34.8984C35.6596 36.0604 35.6272 37.2238 35.7079 38.3832C35.7413 38.8273 35.8042 39.2715 35.8672 39.7157C35.9459 40.2709 36.0246 40.8262 36.0454 41.3814C36.0642 41.8071 35.8767 42.4178 35.5767 42.6399C33.0831 44.4907 30.2896 44.8053 27.421 43.7874C25.9961 43.2692 25.04 42.2513 24.815 40.5115C24.3838 36.9026 23.8026 33.3121 23.0526 29.7586C22.7825 28.4256 22.1326 27.1527 21.4994 25.9127C21.4293 25.7754 21.3594 25.6384 21.2902 25.5019C19.4904 21.9669 18.9842 18.3024 19.6216 14.3788C20.1466 11.1214 20.859 8.01214 23.0526 5.43958C23.505 4.91414 24.0425 4.46329 24.5778 4.01424L24.5779 4.01417C24.7967 3.83056 25.0152 3.64725 25.2274 3.45926C25.2594 3.43221 25.2936 3.40627 25.3281 3.38008L25.3283 3.37994L25.3284 3.37983L25.3285 3.3798C25.4356 3.29855 25.5457 3.21496 25.6024 3.08911C22.7151 3.12612 20.1091 3.92195 17.5405 5.10644C15.1343 6.19573 13.7554 8.13836 12.3593 10.1053C12.0475 10.5446 11.7348 10.9851 11.4097 11.4175C11.2785 11.6026 11.2785 11.9173 11.2972 12.1764C11.5725 14.7672 12.5845 17.1275 13.5944 19.483L13.6595 19.6349C13.8604 20.0844 13.9656 20.5811 14.0709 21.0778L14.0709 21.0779L14.0709 21.0779L14.0709 21.078C14.113 21.2766 14.1551 21.4752 14.2033 21.6708C14.3157 22.1705 14.4282 22.6887 14.4657 23.2069C14.4734 23.3123 14.4817 23.4183 14.49 23.5248L14.49 23.5248C14.5433 24.204 14.5979 24.9014 14.4845 25.5574C14.2595 26.7234 14.3532 27.075 15.5719 27.2601C15.965 27.2989 16.3613 27.3377 16.7594 27.3767C18.2602 27.5236 19.7857 27.6729 21.2527 27.8338ZM30.2896 10.4555C29.2022 10.0113 28.7522 8.95639 28.6023 7.71638C28.4335 6.36532 29.6709 4.68113 31.1146 4.18143C32.2582 3.79276 33.8706 4.42202 34.5081 5.53248C34.883 6.19876 35.033 6.73548 34.2081 7.30922C33.2747 7.95418 32.4077 8.6834 31.4722 9.47023L31.4722 9.47028L31.4721 9.4703C31.0923 9.7898 30.7011 10.1188 30.2896 10.4555ZM33.8518 16.1368C33.5144 17.5989 34.4705 18.7648 35.633 18.6723C35.7382 18.3411 35.8389 18.0168 35.9381 17.6969L35.9381 17.6968L35.9382 17.6965L35.9383 17.6963C36.1219 17.1047 36.3007 16.5282 36.4954 15.9517C36.547 15.8075 36.6182 15.6672 36.6893 15.5272C36.7733 15.3617 36.8571 15.1967 36.9079 15.0263C37.0579 14.4896 37.2266 13.7863 36.5329 13.6197C36.0267 13.5087 35.2205 13.6752 34.9018 14.0269C34.3956 14.5821 34.0206 15.3779 33.8518 16.1368ZM40.545 14.0639C40.6287 13.9537 40.7058 13.8336 40.7817 13.7155C40.9607 13.4367 41.133 13.1684 41.37 13.0645C41.6137 12.9534 42.1387 13.1755 42.4011 13.3976C42.459 13.4468 42.5171 13.4959 42.5753 13.5452L42.5754 13.5452C43.1966 14.0708 43.8303 14.6069 44.276 15.2669C44.5197 15.6555 44.426 16.3773 44.2573 16.8585C44.126 17.2102 43.6385 17.5803 43.2636 17.6543C43.0198 17.6913 42.6261 17.2472 42.3824 16.951C41.9699 16.4513 41.6137 15.9331 41.2575 15.3779C41.076 15.1347 40.9393 14.8561 40.7792 14.5299L40.7792 14.5299C40.7078 14.3844 40.6318 14.2294 40.545 14.0639ZM41.5269 20.7154L41.5387 20.7082C41.5334 20.6766 41.5266 20.6435 41.5195 20.6093C41.5017 20.5234 41.4825 20.4307 41.4825 20.338C41.3825 20.3134 41.2825 20.2805 41.1825 20.2476C40.9825 20.1818 40.7826 20.1159 40.5826 20.1159C39.8139 20.1159 39.0452 20.1345 38.2952 20.227C37.9953 20.264 37.639 20.4676 37.5078 20.6897C37.4328 20.8192 37.6765 21.2264 37.8828 21.4115C37.9923 21.5196 38.153 21.5582 38.3163 21.5975C38.4325 21.6255 38.5501 21.6537 38.6515 21.7076C38.8577 21.8187 39.2327 22.0407 39.2139 22.1333C39.1389 22.3924 38.9514 22.6515 38.7265 22.8366C38.6175 22.9321 38.4617 22.966 38.2691 23.0079C38.1634 23.0309 38.0465 23.0563 37.9203 23.0957C38.648 23.0486 39.3225 23.0015 39.9971 22.9544C40.3827 22.9274 40.7683 22.9005 41.1638 22.8736C40.9424 22.7765 40.6888 22.747 40.4446 22.7187C39.9441 22.6606 39.4832 22.6071 39.4202 21.9852C40.1843 21.5252 40.8559 21.1201 41.5269 20.7154Z" fill="#20113D"/>
        </svg>
        `,
        href: `cams.html`,
        class: `video-animals--active`,
    },
    {
        src: `<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0228 42.5528C18.2844 41.7814 20.3465 39.6161 22.4355 37.3154C22.1525 37.2343 21.9368 37.1666 21.7212 37.1125C18.8505 36.3817 16.2088 35.1366 13.7828 33.445C12.2868 32.4029 11.0603 31.0902 10.1304 29.4933C10.0091 29.2903 9.91472 29.0738 9.82037 28.8573C9.79342 28.8031 9.79342 28.7355 9.76646 28.546C10.683 28.8302 11.5455 29.1009 12.3946 29.3715C12.4216 29.3445 12.4351 29.3309 12.462 29.3039C12.3677 29.2227 12.2868 29.1415 12.1925 29.0738C11.0873 28.3565 10.0091 27.6122 8.89041 26.9356C7.61003 26.1507 6.26226 25.474 5.02231 24.662C3.36455 23.5658 2.19199 22.0231 1.34289 20.2367C1.30246 20.1555 1.28898 20.0743 1.2755 19.9931C1.26202 19.9525 1.2755 19.8984 1.2755 19.7766C2.65023 20.372 3.93061 21.2111 5.52098 21.0622C2.39415 19.2623 0.45336 16.7452 0.588138 12.9559C1.92243 14.431 3.22977 15.8926 4.53711 17.3541C4.56407 17.3271 4.6045 17.2865 4.63145 17.2594C4.09235 16.2038 3.45889 15.1753 3.05456 14.0656C2.65023 12.9559 2.38067 11.7514 2.2459 10.5741C2.11112 9.39668 2.21894 8.19224 2.21894 7.00133C2.28633 6.98779 2.35372 6.98779 2.40763 6.97426C3.04108 8.40877 3.67453 9.84328 4.30799 11.2913C4.37538 11.2913 4.44276 11.2778 4.51015 11.2778C4.4832 8.6659 4.76623 6.10814 5.96575 3.76692C6.01966 3.76692 6.07357 3.76692 6.12748 3.78045C6.12748 4.36237 6.15444 4.93076 6.12748 5.51269C5.97923 8.36817 7.07092 10.8041 8.70173 13.0236C9.79342 14.4987 11.1412 15.7302 12.5968 16.8399C14.5106 18.3015 16.6536 19.3706 18.7965 20.4262C20.7912 21.4005 22.5433 22.7268 24.1876 24.2154C25.185 25.1221 26.2228 25.9747 27.2471 26.8544C27.5301 27.098 27.8131 27.3686 28.1366 27.6664C28.6622 26.4484 29.1474 25.3116 29.6326 24.1613C30.8052 21.4276 32.5708 19.127 34.7542 17.1376C36.4928 15.5542 38.2584 14.025 39.997 12.4552C42.3556 10.3169 43.8247 7.66445 44.2964 4.4977C44.4716 3.37446 44.3907 2.19708 44.4312 1.0603C44.4312 0.870836 44.4312 0.66784 44.4986 0.464844C45.3476 2.41361 45.5903 4.47064 45.7924 6.60887C46.628 4.9037 47.4502 3.19853 48.2858 1.47983C48.3532 1.49336 48.4206 1.50689 48.4745 1.52042C48.3801 3.26619 48.3667 5.01196 48.1645 6.7442C47.9623 8.4629 47.5715 10.1545 47.2615 11.792C47.6793 11.1425 48.1645 10.3981 48.7306 9.54555C48.771 11.2101 48.7171 12.7123 48.0162 14.1333C47.3289 15.5407 46.2237 16.5963 45.0242 17.6383C45.6846 17.7737 46.2102 17.5436 46.7224 17.2865C47.2211 17.0429 47.6793 16.7452 48.2588 16.4068C48.2049 16.664 48.178 16.8399 48.1241 17.0023C47.3963 18.9781 46.2641 20.6833 44.5659 21.9419C43.5282 22.7268 42.423 23.417 41.3987 24.2019C40.7518 24.7026 40.2935 25.0139 40.2666 25.7041C40.6978 25.5552 41.1157 25.4199 41.6143 25.2575C40.7787 28.1265 38.5684 29.8858 36.641 31.9428C36.8297 32.024 36.978 32.0781 37.1262 32.1458C38.0832 32.5383 38.8918 33.1337 39.4444 34.0269C39.8622 34.69 39.9566 35.3938 39.7814 36.1651C39.7274 36.3952 39.8622 36.7065 40.0105 36.9095C40.4687 37.6132 40.5361 38.3304 40.1318 39.0612C39.7409 39.7785 39.094 40.1303 38.2449 40.1845C38.9188 38.9665 38.8918 38.6958 37.9753 38.0462C37.881 38.547 37.7867 39.0206 37.6923 39.5213C37.0858 39.0206 36.5602 38.4252 35.8998 38.0733C35.2259 37.7214 34.4307 37.6267 33.622 37.3966C33.6625 37.5726 33.6625 37.6808 33.7029 37.7756C34.2959 39.2777 34.8485 40.807 35.5224 42.2821C35.765 42.8234 36.2502 43.2835 36.695 43.6895C37.1128 44.0685 37.4093 43.9331 37.571 43.3783C37.6788 42.9858 37.7193 42.5798 37.7866 42.1874C37.854 41.8355 38.0427 41.6866 38.2853 41.7949C38.3392 42.1197 38.4066 42.3768 38.4201 42.634C38.4336 42.9046 38.4336 43.1888 38.3797 43.4459C38.3258 43.676 38.1775 43.8925 38.0697 44.1091C38.0966 44.1497 38.1371 44.1767 38.164 44.2173C38.5279 43.9737 38.9053 43.7301 39.2557 43.473C39.4309 43.3377 39.5657 43.1617 39.7274 43.0129C40.3609 42.431 40.6709 42.4716 41.1156 43.2429C40.873 43.2159 40.6574 43.1753 40.4283 43.1482C40.3878 44.1497 39.3366 44.1361 38.9053 44.8128C39.4175 44.7857 39.8757 44.7451 40.3339 44.7451C41.0348 44.7451 41.3178 45.0699 41.183 45.7872C40.9809 45.3 40.6439 45.3676 40.3205 45.503C39.6331 45.7872 38.9323 45.6924 38.2314 45.5977C37.4632 45.4894 36.7758 45.5977 36.1154 46.0578C35.6841 46.3691 35.2394 46.6668 34.6194 46.5315C34.4846 46.5044 34.242 46.951 34.0668 47.1675C33.7838 46.7886 33.7972 46.4232 34.269 46.1255C34.5655 45.936 34.9159 45.8413 35.2394 45.706C35.4415 45.6248 35.6572 45.5571 35.8324 45.4218C36.2232 45.124 36.2232 44.9346 35.8459 44.6369C34.9159 43.879 33.9859 43.1347 33.056 42.3768C32.9751 42.3092 32.8808 42.255 32.7999 42.2415C31.5734 42.1332 30.8995 41.3212 30.3874 40.3333C30.2796 40.1168 30.1987 39.8191 29.9022 40.0085C29.7404 40.1168 29.5652 40.4416 29.6192 40.604C29.9022 41.6731 30.5222 42.5122 31.4791 43.0535C31.8969 42.9858 31.9778 41.9573 32.5708 42.5798C32.5169 42.8099 32.4764 42.9452 32.4495 43.0805C32.6112 43.1076 32.7864 43.1753 32.9481 43.1617C33.2177 43.1617 33.4873 43.1076 33.7568 43.0805C33.7703 43.1347 33.7838 43.2023 33.7972 43.2565C33.6086 43.3512 33.4199 43.4459 33.1638 43.5813C34.4577 43.6489 34.4577 43.6489 34.5116 44.3391C34.0938 43.9331 33.6894 44.2579 33.2851 44.3121C32.3686 44.4203 31.7352 44.8534 31.3982 45.7601C31.2904 46.0443 30.9939 46.2473 30.7243 46.5586C30.7378 46.5992 30.7782 46.7345 30.8052 46.8833C30.2256 46.6803 30.0909 46.3962 30.3739 45.8819C30.5895 45.4894 30.8726 45.124 31.1287 44.7451C31.3578 44.4068 31.3578 44.1226 30.9265 43.9331C30.2256 43.6219 29.6326 43.1212 28.8105 43.04C28.5005 43.0129 28.2309 42.5934 27.921 42.3227C27.7727 42.5663 27.5705 42.8505 27.4088 43.1753C26.9371 44.1361 26.1419 44.718 25.1445 44.9887C22.0042 45.8548 19.0391 45.3676 16.2762 43.6489C15.818 43.3783 15.481 42.9587 15.0228 42.5528Z" fill="#20113D"/>
        </svg>`,
        href: `camseagles.html`
    },
    {
        src: `<svg width="56" height="48" viewBox="0 0 56 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.8261 21.1612L38.8276 21.1642C39.3305 22.2017 39.8334 23.2392 40.3546 24.3226C40.2226 24.427 40.0889 24.5348 39.9532 24.6442L39.9531 24.6442C39.6466 24.8914 39.3299 25.1466 39 25.3887C38.6334 25.6562 38.2698 25.9275 37.9064 26.1987L37.9062 26.1988C37.0087 26.8685 36.1123 27.5374 35.1742 28.1458C31.7969 30.3422 28.0717 31.2337 24.0629 30.8845C23.0835 30.8018 22.0493 30.4617 21.6374 30.1768C21.8751 28.525 22.1035 26.9189 22.332 25.313L22.333 25.306C22.3056 25.2968 22.2759 25.2899 22.2462 25.283L22.2461 25.283C22.2163 25.2761 22.1866 25.2692 22.1591 25.26C22.0699 25.4418 21.9815 25.6236 21.8931 25.8051C21.6733 26.2569 21.4541 26.7074 21.2256 27.1532C20.632 28.3308 20.234 29.5814 19.8351 30.8347L19.8351 30.8347C19.7235 31.1855 19.6118 31.5365 19.4957 31.8862C18.7635 34.0643 17.4547 35.7369 15.2306 36.5548C15.1207 36.6008 15.0292 36.7846 14.9834 36.9225C14.8938 37.2083 14.8141 37.4974 14.7344 37.7863C14.6271 38.1756 14.5199 38.5645 14.3885 38.9443C13.8851 40.4148 12.9424 41.5544 11.6702 42.4274C11.1027 42.8134 10.5352 43.2086 9.99524 43.6313C9.52846 43.9898 9.54676 44.146 10.0044 44.5044C10.0939 44.5746 10.184 44.6437 10.2738 44.7127C10.5605 44.9327 10.8449 45.151 11.1027 45.3959C11.5237 45.8003 11.7159 46.3149 11.5603 46.9031C11.5237 47.0409 11.3132 47.2247 11.1851 47.2247C8.18301 47.2431 5.17179 47.2431 2.16972 47.2339C2.05988 47.2339 1.90429 47.1972 1.84022 47.1236C1.74826 47.0112 1.65412 46.8993 1.5597 46.787L1.55966 46.7869C1.22181 46.3851 0.880435 45.9791 0.622918 45.5337C0.45817 45.2488 0.439864 44.7709 0.549696 44.4493C1.6114 41.2051 2.97515 38.1264 5.54705 35.7645C5.65688 35.6634 5.72095 35.4428 5.7301 35.2866C5.79417 32.9523 6.06875 30.6363 6.66367 28.3847C7.17622 26.4364 7.72538 24.488 8.69556 22.6959C10.4803 19.4242 12.7868 16.6947 16.3289 15.2243C19.3767 13.9652 22.3513 14.1582 25.2527 15.647C25.651 15.8532 26.0113 16.136 26.3622 16.4114C26.5273 16.541 26.6904 16.669 26.8544 16.7866C26.5249 16.0698 25.9483 15.4816 25.3259 14.9394C25.9121 14.7155 26.5004 14.4988 27.0876 14.2825C29.6825 13.3268 32.2571 12.3785 34.5335 10.8497C34.6337 11.1998 34.7322 11.5534 34.8311 11.909L34.8313 11.9095C34.9583 12.3659 35.0863 12.8255 35.22 13.2851C35.2566 13.3954 35.3298 13.4965 35.4213 13.5884C35.2383 12.4488 35.2383 11.3092 35.6685 10.2615C36.0712 9.26897 36.5563 8.26723 37.1786 7.40335C38.7071 5.30797 40.5468 3.4883 42.597 1.89838L42.5971 1.89828C42.6795 1.83398 42.7618 1.76968 42.8533 1.70538C43.0003 1.61119 43.1459 1.51083 43.2918 1.41025L43.2919 1.41021C44.0003 0.92203 44.7159 0.428861 45.6265 0.611744C47.1276 0.905832 48.3815 1.69619 49.2418 2.99202C49.489 3.35963 49.7727 3.61696 50.1663 3.75481C51.1914 4.11323 51.9602 4.72898 52.4544 5.73072C52.6336 6.09673 52.892 6.42086 53.1508 6.74551C53.2754 6.90182 53.4001 7.05825 53.5161 7.21954C53.7541 7.55039 53.7999 7.8261 53.5345 8.21209C53.3148 8.53375 53.205 8.96569 53.1409 9.36087C53.0585 9.82958 53.2416 10.1329 53.7358 10.3902C55.0263 11.0519 55.7769 12.5315 55.0629 14.0295C54.944 14.2777 54.8341 14.5258 54.7334 14.7831C54.2575 16.0146 53.3514 16.4466 52.1066 16.0146C52.0938 16.0103 52.0808 16.0061 52.0677 16.0018C52.0597 15.9992 52.0517 15.9966 52.0437 15.9939C51.9802 15.9733 51.9167 15.9526 51.8687 15.9319C51.6398 16.2536 51.411 16.566 51.1639 16.8969C51.1288 16.8538 51.0987 16.8224 51.0757 16.7984C51.0447 16.7661 51.0266 16.7473 51.0266 16.7315C51.0998 15.9411 50.6239 15.4724 50.093 14.9945C47.6127 12.7521 44.574 13.1564 42.4963 14.4523C42.7299 14.4047 42.9613 14.3528 43.1921 14.3011C43.6304 14.2027 44.0662 14.1049 44.5099 14.0387C47.1459 13.6711 49.4341 14.8566 50.6514 17.2277C51.4934 18.8636 52.0883 20.573 51.9419 22.4662L51.9403 22.4883V22.4884C51.9133 22.8592 51.8839 23.263 51.7314 23.5874C51.2005 24.727 51.3653 25.8758 51.6582 27.0062L51.7121 27.2168L51.7122 27.2169C51.987 28.2909 52.2691 29.3935 52.7931 30.3422C54.8158 33.9908 54.9806 37.9334 54.8341 41.9311C54.7701 43.6497 54.2209 45.1753 52.8114 46.2873C52.0243 46.9123 51.1822 47.3442 50.1297 47.2615C49.6446 47.2247 49.1503 47.2155 48.6652 47.2615C47.75 47.3626 47.1184 46.9031 46.5784 46.2598C45.9927 45.5705 45.7272 44.7709 45.892 43.8703C45.9377 43.6314 46.1116 43.3373 46.313 43.227C46.5659 43.0921 46.7506 43.2793 46.9378 43.469C46.9673 43.499 46.9969 43.529 47.0269 43.5578C47.309 43.8319 47.6815 44.0334 48.0366 44.2253L48.0367 44.2254L48.0429 44.2287C48.354 44.3941 48.5188 44.2563 48.5554 43.9071C48.592 43.4935 48.4639 43.1443 48.1527 42.8778C46.4045 41.3797 45.3062 39.4222 44.3177 37.3912C43.558 35.8196 43.073 34.1746 42.8991 32.4284C42.7709 31.1142 42.9997 29.8368 43.2469 28.5593C43.3658 27.9803 43.4848 27.3922 43.5214 26.7948C43.6038 25.6093 43.1919 24.6075 42.176 23.9734C40.9221 23.1922 39.8055 22.2548 38.9085 21.0785C38.9177 21.106 38.8719 21.1336 38.8261 21.1612ZM41.5078 25.3334C42.0387 25.7654 42.2309 26.2616 42.121 26.8774C42.0533 27.2756 41.9788 27.6726 41.9043 28.0697L41.9042 28.0699C41.7672 28.8001 41.6301 29.5305 41.5353 30.2686C41.2241 32.7591 41.8007 35.1118 42.7617 37.3818C42.9356 37.7954 42.9539 38.1263 42.7709 38.5398C41.938 40.433 41.0319 42.2803 39.8603 43.9988C38.341 46.2229 36.2176 47.2522 33.5633 47.2522C33.4064 47.2522 33.2504 47.2547 33.0947 47.2572H33.0947C32.7325 47.2629 32.3722 47.2687 32.0073 47.243C31.8243 47.2338 31.5955 47.1143 31.4948 46.9673C30.6436 45.8093 30.79 43.4107 31.7694 42.3538C31.8792 42.2343 32.1263 42.124 32.2636 42.17C32.368 42.2074 32.442 42.3667 32.5104 42.514C32.5259 42.5475 32.5412 42.5804 32.5565 42.6111C32.5943 42.6869 32.6217 42.7705 32.649 42.8536C32.6945 42.9921 32.7396 43.1292 32.8311 43.2268C32.9958 43.4198 33.2796 43.6956 33.4626 43.6588C33.6548 43.622 33.847 43.282 33.9294 43.043C34.0118 42.8133 33.9843 42.5284 33.9386 42.2894C33.8722 41.953 33.789 41.6189 33.706 41.2855C33.56 40.6992 33.4145 40.1149 33.3619 39.5232C33.1148 36.8672 33.3528 34.2572 34.4969 31.8034C34.7623 31.2428 35.0643 30.673 35.4579 30.1951C35.8698 29.6804 36.3823 29.2301 36.904 28.8257C37.4394 28.4033 37.991 28.0039 38.5434 27.6039C38.9165 27.3338 39.29 27.0633 39.659 26.7855C40.0704 26.471 40.4778 26.1482 40.8921 25.8199L40.8922 25.8199L40.8926 25.8195C41.0956 25.6587 41.3002 25.4966 41.5078 25.3334ZM21.8366 31.8675C21.6016 31.7977 21.3654 31.7275 21.1249 31.6565C21.0433 31.8339 20.9643 32.0138 20.885 32.1944C20.7507 32.5003 20.6155 32.808 20.4659 33.1086C19.5598 34.9466 18.3699 36.5457 16.5302 37.575C16.3838 37.6577 16.2831 37.8691 16.2282 38.0437C15.7889 39.5234 15.2397 40.9387 14.2238 42.1334C14.1505 42.2253 14.0865 42.3907 14.1139 42.4918C14.4343 43.5119 14.7638 44.5321 15.1207 45.5338C15.1848 45.7084 15.377 45.8738 15.5509 45.9749C16.2007 46.3425 16.8506 46.701 17.5187 47.041C17.7384 47.1513 17.9947 47.2524 18.2326 47.2524C20.168 47.2662 22.0982 47.2644 24.031 47.2627C24.6758 47.2621 25.3209 47.2616 25.9666 47.2616H26.5341C26.4725 47.1349 26.4224 47.0113 26.3749 46.8943C26.2812 46.6634 26.1979 46.4583 26.0582 46.3058C25.7104 45.929 25.3168 45.5705 24.8958 45.2857C24.5004 45.0186 24.0712 44.7969 23.6435 44.576C23.5267 44.5156 23.4099 44.4553 23.294 44.3942C22.8364 44.1461 22.6351 43.7785 22.6717 43.2638C22.6778 43.1413 22.692 43.0187 22.7062 42.8962C22.7134 42.8349 22.7205 42.7737 22.7266 42.7124C22.7546 42.4341 22.7894 42.155 22.8243 41.8756C22.9035 41.2413 22.9829 40.6053 22.9829 39.9737C22.9829 38.6595 22.3971 37.5291 21.5642 36.5365C23.0103 35.4521 23.294 33.9173 23.4313 32.3366C22.8813 32.1779 22.3618 32.0235 21.8366 31.8675Z" fill="#20113D"/>
        </svg>
        `,
        href: `camgorillas.html`
    },
    {
        src: `<svg width="33" height="56" viewBox="0 0 33 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9437 0.0080382C16.8064 -0.04113 17.6291 0.139154 18.4758 0.442357C18.4478 0.52365 18.4219 0.603548 18.3964 0.68205L18.3964 0.682067C18.3346 0.872615 18.2754 1.05494 18.1962 1.22905C17.9527 1.76567 17.7051 2.3023 17.4576 2.83893L17.4574 2.83931C17.2098 3.37606 16.9621 3.91281 16.7185 4.44956L16.7178 4.45107L16.7178 4.4511C16.586 4.74212 16.5221 4.88305 16.4137 4.94194C16.3119 4.99725 16.1708 4.98022 15.8972 4.94719L15.8479 4.94125C15.5683 4.90847 15.4006 4.78555 15.3606 4.50693C15.3437 4.38957 15.3222 4.27164 15.3008 4.15359L15.3008 4.15355L15.3008 4.15352L15.3007 4.15349L15.3007 4.15345L15.3007 4.15342L15.3007 4.15339L15.3007 4.15337L15.3007 4.15333C15.2413 3.82633 15.1816 3.49844 15.2168 3.17939C15.305 2.39103 15.4478 1.60776 15.5905 0.825574L15.5905 0.825125L15.5906 0.824695C15.6288 0.615251 15.667 0.405884 15.7041 0.196516C15.7201 0.122764 15.8559 0.0162329 15.9437 0.0080382ZM10.5605 2.66235L10.5607 2.66261C11.0903 3.47072 11.6086 4.26143 12.1494 5.03822C12.3491 5.33323 12.6207 5.59546 13.06 5.41518C13.731 5.15295 13.8987 4.97267 13.699 4.25153C13.4601 3.37499 13.6084 2.53212 13.7572 1.6863L13.7572 1.68618L13.7572 1.68607L13.7572 1.68597L13.7573 1.68588L13.7573 1.68578L13.7573 1.68568L13.7573 1.68558L13.7573 1.68548L13.7573 1.6854L13.7574 1.68531L13.7574 1.68522L13.7574 1.68511L13.7574 1.685C13.7727 1.59817 13.788 1.5113 13.8028 1.42436C13.8588 1.11297 13.8508 0.768789 13.7789 0.457391C13.7469 0.309886 13.4594 0.0886299 13.3475 0.113214C12.1254 0.424612 11.0551 1.03921 10.0327 1.85868C10.2107 2.12854 10.3862 2.39639 10.5605 2.66235ZM7.42181 8.91345C7.98141 9.33261 8.54265 9.75301 9.11383 10.1785C8.92213 11.1209 8.4269 11.6535 7.46039 11.7601C6.12645 11.8994 5.00019 11.3421 3.98576 10.5063C3.92985 10.4571 3.90589 10.2768 3.94583 10.1949C4.00518 10.0594 4.06427 9.92361 4.12338 9.78776C4.38246 9.19237 4.64214 8.59558 4.9283 8.0151C5.00513 7.85185 5.13095 7.71567 5.25139 7.5853L5.25141 7.58529L5.25142 7.58527L5.25143 7.58526C5.3063 7.52586 5.36007 7.46768 5.40756 7.40869C6.08609 7.91293 6.75278 8.41231 7.42181 8.91345ZM7.78029 13.9233C6.27062 13.5382 4.80888 13.1612 3.23531 12.7515C3.2016 12.9417 3.16394 13.138 3.12546 13.3385L3.12545 13.3386C3.0545 13.7084 2.98076 14.0927 2.92379 14.4805C2.8691 14.8478 2.83298 15.2183 2.79616 15.5958C2.77383 15.8248 2.75124 16.0564 2.7241 16.2916C3.98615 16.939 5.28015 17.1192 6.55817 16.3653C7.46877 15.8409 7.82821 14.9722 7.78029 13.9233ZM2.78004 18.2657C2.54041 19.5605 2.73212 20.7815 3.17943 21.9697C3.21937 22.0681 3.32321 22.1746 3.41906 22.2074C5.30415 22.8547 7.42886 21.56 7.72441 19.8145C7.76435 19.5769 7.78032 19.3228 7.76435 19.0852C7.66849 18.0445 7.47679 17.897 6.48632 18.0445L6.20096 18.087C5.52117 18.1885 4.84062 18.2902 4.15392 18.3477C3.85227 18.3702 3.54309 18.3386 3.22379 18.306H3.22376H3.22374H3.22372C3.07802 18.2911 2.93021 18.276 2.78004 18.2657ZM8.14763 25.9525C8.78664 24.5594 8.58695 23.5596 7.50862 22.691C6.39035 23.5596 5.09635 23.8792 3.7065 23.9284C3.61065 23.9284 3.4509 24.0677 3.42693 24.1742C3.21127 25.2149 3.51479 26.1409 4.08191 26.9932C4.12732 27.0605 4.21416 27.0951 4.31223 27.1341L4.31228 27.1342L4.3124 27.1342C4.36954 27.157 4.4305 27.1813 4.48929 27.2144C4.46162 27.2334 4.43462 27.2523 4.40789 27.271C4.34204 27.3172 4.2779 27.3621 4.20972 27.4029C2.75597 28.2961 1.58178 29.468 0.886856 31.066C-0.023735 33.172 -0.351227 35.3436 0.4715 37.5807C0.619579 37.9829 0.755787 38.3923 0.891773 38.8011L0.891785 38.8012L0.891796 38.8012L0.891808 38.8012L0.891819 38.8013L0.89183 38.8013L0.891842 38.8013L0.891853 38.8014L0.891865 38.8014L0.891876 38.8014L0.891888 38.8015L0.891899 38.8015L0.891911 38.8015L0.891922 38.8016L0.891933 38.8016L0.891945 38.8016L0.891956 38.8017L0.891968 38.8017C1.00532 39.1424 1.11851 39.4827 1.23831 39.8179C1.6377 40.9488 1.66965 42.1124 1.35014 43.2433C0.4076 46.5457 1.29423 49.5778 2.54829 52.5689C2.65834 52.8189 2.83801 53.045 3.01118 53.263L3.01956 53.2736C3.25919 53.5768 3.57071 53.6751 3.94613 53.544C4.32155 53.4047 4.59313 53.1507 4.57715 52.7491C4.56117 52.2329 4.49727 51.7166 4.37746 51.2167C4.28561 50.8193 4.17379 50.426 4.06198 50.0327L4.06195 50.0326C3.95012 49.6392 3.83829 49.2459 3.74644 48.8485C3.49083 47.7258 3.81833 46.7998 4.71294 46.1032C4.75123 46.0744 4.78871 46.0448 4.82589 46.0154C4.90505 45.9527 4.98288 45.8912 5.0644 45.841C6.41431 45.0461 7.24502 43.8005 7.93196 42.4156C8.12379 42.022 8.37203 41.6554 8.6199 41.2894L8.61994 41.2893C8.7333 41.1219 8.8466 40.9546 8.95438 40.7849L9.05023 40.834C9.09816 41.0635 9.14708 41.2929 9.196 41.5224C9.34278 42.2107 9.48955 42.8991 9.60937 43.5875C10.1445 46.5785 11.8699 48.8321 13.8668 50.9299C14.0637 51.1401 14.3229 51.2944 14.5675 51.4401L14.5777 51.4462C14.9132 51.651 15.2566 51.651 15.5761 51.3806C15.9036 51.102 16.0234 50.7496 15.8797 50.3563C15.7359 49.9793 15.5522 49.6106 15.3285 49.2746C15.0966 48.9309 14.8462 48.6014 14.5959 48.2721L14.5959 48.2721C14.3807 47.989 14.1657 47.7061 13.9626 47.4144C13.0121 46.0541 12.9722 45.0953 13.9067 43.735C14.6496 42.6451 15.1608 41.4568 15.6161 40.1703C15.7432 40.2309 15.8681 40.2871 15.9905 40.3421L15.9906 40.3421L15.9907 40.3422L15.9908 40.3423C16.1989 40.4358 16.3995 40.526 16.5906 40.6292C18.5555 41.7273 19.7617 43.4563 20.4806 45.5788C20.7725 46.4253 21.0242 47.2874 21.2755 48.1485L21.2755 48.1485C21.3405 48.3711 21.4054 48.5935 21.471 48.8157C21.7027 49.6024 22.0781 50.2989 22.5893 50.9217C22.7753 51.1469 22.9612 51.3721 23.1469 51.5972L23.1543 51.6062L23.1617 51.6151L23.1689 51.6239L23.1738 51.6299C24.0876 52.7373 24.9997 53.8428 25.9281 54.9371C26.1917 55.2485 26.5112 55.5435 26.8547 55.7648C27.4777 56.1663 28.0848 56.0434 28.6599 55.478C29.0753 55.0682 29.1472 54.5602 28.7717 53.9128C28.5564 53.5399 28.2786 53.202 28.0054 52.8695L28.0047 52.8687L28.004 52.8678L28.0037 52.8674C27.9532 52.806 27.9029 52.7448 27.8532 52.6836C27.6934 52.4869 27.5097 52.2984 27.318 52.1345C25.6965 50.7168 25.2971 48.8403 25.369 46.7834C25.3806 46.438 25.4217 46.0927 25.4617 45.7567L25.4618 45.7566L25.4618 45.7565C25.4768 45.6302 25.4917 45.5052 25.5048 45.3821C25.7544 45.3332 26.001 45.2843 26.2422 45.2364L26.2445 45.236L26.2451 45.2359C26.69 45.1476 27.1166 45.063 27.5097 44.9888C27.6586 45.3254 27.7979 45.6694 27.9375 46.014L27.9376 46.014L27.9376 46.0142C28.2398 46.7601 28.5432 47.5091 28.9475 48.1929C29.5421 49.2009 30.2467 50.1391 30.951 51.077C31.117 51.2981 31.283 51.5192 31.4476 51.7412C31.7272 52.1181 32.1026 52.4213 32.6138 52.2984C32.8854 52.2329 33.0931 51.479 32.9573 50.9463C32.8295 50.4464 32.6777 49.9384 32.4301 49.4958C31.3278 47.5045 30.9044 45.3165 30.6089 43.0958C30.4571 41.9649 29.8021 41.4568 28.6998 41.6781C26.639 42.096 24.5702 42.3009 22.4695 42.1124C22.3257 42.096 22.1819 42.0632 22.0381 42.0305C20.5524 41.6699 19.9614 40.2604 20.7282 38.8919C20.7521 38.8427 20.7761 38.7936 20.816 38.7526C21.5302 38.0139 21.9172 37.0963 22.3059 36.1749C22.4432 35.8493 22.5808 35.5231 22.7331 35.2043C23.0366 34.5815 23.6117 34.057 24.1629 33.5981C24.8418 33.0409 25.6725 32.7623 26.5272 32.5738C26.647 32.5492 26.8228 32.4345 26.8467 32.3361C26.8707 32.2214 26.7748 32.0083 26.679 31.9592C26.618 31.9297 26.5566 31.8993 26.495 31.8688C26.1287 31.6874 25.7507 31.5002 25.361 31.4511C24.722 31.3692 24.059 31.3856 23.412 31.4511C22.6931 31.5249 22.0541 31.2954 21.4551 31.0004C20.816 30.689 20.209 30.2629 19.6339 29.8368C18.0603 28.6649 16.4708 27.5258 14.6655 26.7473C12.7325 25.9033 10.7276 25.6247 8.65085 25.9361C8.49908 25.9197 8.33135 25.9279 8.14763 25.9525ZM16.9102 24.3705C16.2712 24.7803 15.5763 24.9606 14.8255 24.9606C14.1066 24.936 13.4196 24.7885 12.8365 24.3296C12.1895 23.8297 11.9419 23.0922 12.3173 22.3792C12.557 21.9306 12.8909 21.5373 13.2249 21.1439L13.2249 21.1439C13.3363 21.0128 13.4476 20.8817 13.5554 20.7485C13.6113 20.6829 13.7471 20.6584 13.843 20.6666C15.5763 20.8386 16.9182 22.0597 17.2297 23.6003C17.3096 23.9772 17.2058 24.1821 16.9102 24.3705ZM8.23565 3.29443C9.14624 3.99918 10.4243 5.60534 11.2949 7.12135L11.2051 7.23794C10.9991 7.50527 10.8045 7.75776 10.616 8.02277C10.4482 8.26042 10.2485 8.31778 9.96099 8.22764C8.48327 7.74415 7.46883 6.66245 6.39849 5.4988C7.02101 4.7537 7.62759 4.02495 8.23416 3.29622L8.23565 3.29443ZM20.696 8.32615C21.3542 7.7445 22.1559 7.64284 22.9624 7.54058L22.9624 7.54057L22.9625 7.54057L22.9625 7.54057L22.9625 7.54056L22.9625 7.54056L22.9625 7.54056L22.9626 7.54056L22.9626 7.54055L22.9626 7.54055L22.9626 7.54055L22.9626 7.54054C23.1446 7.51747 23.3268 7.49437 23.5077 7.4657C23.923 7.40014 24.3384 7.27722 24.7378 7.14611C24.8257 7.11333 24.9535 6.94944 24.9375 6.86749C24.8177 6.05621 24.57 5.29411 23.9071 4.76965C23.7952 4.67951 23.6115 4.62214 23.4837 4.63853C22.5092 4.79423 21.6066 5.13841 20.7999 5.72023C20.704 5.79398 20.6082 5.86774 20.5203 5.94968C19.6896 6.73637 19.7455 7.6296 20.696 8.32615ZM21.0079 21.7728C20.2011 20.2977 16.6865 18.8882 15.7759 19.6831C15.7759 19.7077 15.7759 19.7487 15.7919 19.7569C16.8782 20.7239 17.661 21.9449 18.4199 23.1823C18.6036 23.4855 18.7873 23.5019 19.0748 23.4035C19.7458 23.1741 20.5126 22.5349 21.0079 21.7728ZM26.3754 37.6793C26.2556 38.3103 26.008 38.4987 25.3689 38.5151C25.2568 38.4937 25.1446 38.4767 25.0329 38.4597H25.0329L25.0329 38.4597L25.0328 38.4597L25.0328 38.4597L25.0327 38.4597L25.0327 38.4597C24.8026 38.4247 24.575 38.3902 24.3545 38.3185C23.6356 38.0972 23.3241 37.5809 23.4599 36.8188C23.5078 36.5402 23.6117 36.2698 23.7315 36.0158C24.1628 35.1225 24.8737 34.4915 25.6884 33.9835C25.968 33.8114 26.3035 33.7048 26.623 33.6475C26.7707 33.6183 26.9345 33.6596 27.0973 33.7007C27.1634 33.7174 27.2293 33.734 27.294 33.7458C27.2804 33.806 27.2701 33.8694 27.2597 33.9331C27.2333 34.0951 27.2065 34.2592 27.1262 34.3768C26.6629 35.057 26.5272 35.8191 26.4872 36.6222C26.4712 36.9745 26.4393 37.3351 26.3754 37.6793ZM24.6782 36.5248C24.4265 36.6229 24.2364 36.8804 24.2427 37.163C24.2507 37.5318 24.5542 37.8268 24.9136 37.8186C24.9899 37.8168 25.0624 37.8019 25.1293 37.776C25.0622 37.8016 24.9897 37.8164 24.9138 37.8182C24.5544 37.8264 24.2509 37.5314 24.2429 37.1626C24.2429 36.8803 24.4289 36.6232 24.6782 36.5248ZM21.8631 10.6817L21.8636 10.6818L21.8637 10.6818L21.8639 10.6818C23.0804 10.7846 24.2725 10.8854 25.4647 10.9965C25.8161 11.0293 25.928 10.89 25.9599 10.554C26.0238 9.83289 25.7842 9.26746 25.1931 8.87411C24.1946 8.21853 22.4134 8.33326 21.5028 9.11995C21.0395 9.5133 20.8398 10.0132 20.9357 10.6032C21.2466 10.6296 21.5557 10.6558 21.8631 10.6817ZM20.2168 1.17236C21.1753 1.70502 22.0859 2.24587 22.7249 3.17187C21.2552 4.0569 19.8334 4.91734 18.4116 5.78598C18.148 5.35985 18.116 5.07304 18.3077 4.47483C18.6722 3.32264 19.3621 2.36229 20.0615 1.38869L20.0618 1.38826L20.0624 1.38743C20.1139 1.31584 20.1654 1.24418 20.2168 1.17236ZM18.0446 18.1926C19.0409 18.5401 19.8415 19.1682 20.6575 19.8083C21.15 20.1946 21.648 20.5853 22.1981 20.9215C22.2722 20.8018 22.346 20.683 22.4194 20.565L22.4222 20.5605L22.4223 20.5603L22.423 20.5593L22.423 20.5592L22.4232 20.5589C22.7201 20.0811 23.01 19.6148 23.2845 19.1432C23.3244 19.0777 23.3004 18.8892 23.2365 18.84C22.1981 18.0041 21.0799 17.3322 19.714 17.2666C19.035 17.2502 18.428 17.4305 18.0446 18.1926ZM25.6407 12.753C25.6247 13.4243 25.6084 14.1119 25.1854 14.6768C25.0194 14.6208 24.8552 14.5642 24.6921 14.5079L24.6921 14.5079L24.6921 14.5079L24.6921 14.5079L24.6919 14.5078C24.2587 14.3584 23.8336 14.2118 23.4042 14.0868C22.6454 13.8819 21.8865 13.6935 21.1197 13.5214C20.8322 13.4558 20.7683 13.3083 20.8082 13.0297C20.9121 12.2594 21.4313 11.7841 22.3099 11.7513C23.4361 11.7021 24.4745 12.0873 25.489 12.5462C25.5609 12.579 25.6407 12.6855 25.6407 12.7511L25.6407 12.753ZM22.821 37.6948C22.6505 37.9087 22.498 38.0967 22.3557 38.272C22.1981 38.4662 22.0532 38.6448 21.9104 38.8257C21.8615 38.8879 21.8104 38.9488 21.7595 39.0094C21.6362 39.1564 21.5137 39.3024 21.4232 39.4649C21.1277 39.9893 21.2714 40.563 21.8146 40.8006C22.2459 40.9891 22.7252 41.112 23.1885 41.1612C24.4266 41.3005 25.6487 41.1776 26.8468 40.8088C26.7669 40.2352 26.5113 39.9729 25.9522 39.9156C25.6731 39.89 25.3909 39.8804 25.1094 39.8708L25.1092 39.8708L25.1089 39.8708L25.1086 39.8708C24.9393 39.865 24.7702 39.8593 24.6023 39.85C23.516 39.7845 23.3402 39.6124 23.1246 38.5307C23.0871 38.3493 23.0137 38.1717 22.9356 37.9829C22.8973 37.8901 22.8579 37.7947 22.821 37.6948ZM23.8276 17.6593C22.5496 16.9791 21.2476 16.3891 19.8018 16.0941C20.0095 15.0452 20.6884 14.5781 21.7588 14.7174C22.8371 14.8485 23.7956 15.3074 24.6743 15.9384C24.7621 16.004 24.874 16.1515 24.85 16.217C24.6743 16.6759 24.4906 17.143 24.2589 17.5773C24.211 17.6593 23.9314 17.7167 23.8276 17.6593ZM27.3338 35.9576C27.3338 36.8098 27.4696 36.9492 28.1086 36.8262C28.3722 36.7771 28.6518 36.6623 28.8674 36.4985C29.6982 35.8675 29.9298 34.3433 29.3547 33.4992C29.2189 33.3025 29.0991 33.2206 28.8754 33.3845C27.9489 34.081 27.3737 34.9579 27.3338 35.9576Z" fill="#20113D"/>
        </svg>
        `,
        href: `camlemur.html`
    },
    {
        src: `<svg width="59" height="48" viewBox="0 0 59 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.0622 40.6874C20.2864 41.1792 20.6308 40.9454 20.9912 40.9374C21.5678 40.9212 21.9201 40.5342 22.4407 40.3085C21.9842 40.1714 21.5998 40.0505 21.1914 39.9215C21.0632 40.1875 20.9271 40.4778 20.7829 40.7761C20.7429 40.7761 20.6949 40.7761 20.6548 40.7761C20.6068 40.5584 20.5427 40.3407 20.5267 40.123C20.5107 39.865 20.4226 39.736 20.1503 39.728C19.9981 39.7199 19.846 39.6231 19.6378 39.5425C19.4856 39.9457 19.3094 40.3972 19.1012 40.9535C18.7488 40.3407 18.8129 39.7683 18.8449 39.2119C18.3804 38.9459 18.3804 38.9459 18.0921 39.8247C18.0361 39.6876 17.94 39.5506 17.932 39.4135C17.8999 39.0749 17.7638 38.8652 17.4034 38.7685C17.1151 38.6798 17.019 38.7121 17.011 39.0265C17.003 39.3974 16.963 39.7763 16.8989 40.1472C16.8749 40.3165 16.7708 40.4778 16.7067 40.6471C16.6666 40.6471 16.6266 40.6471 16.5946 40.6471C16.5465 40.4939 16.4905 40.3407 16.4424 40.1875C16.3063 39.728 16.1861 39.2603 16.042 38.8007C15.9859 38.6153 15.8978 38.5105 15.6576 38.5911C15.4974 38.6476 15.3052 38.5992 15.0409 38.5992C14.9769 38.7927 14.8808 39.0588 14.7847 39.3248C14.7446 39.3329 14.6966 39.3409 14.6565 39.349C14.5765 39.1152 14.5044 38.8814 14.4083 38.6476C14.3522 38.5105 14.2721 38.3895 14.2001 38.2605C14.112 38.3895 14.0319 38.5266 13.9438 38.6556C13.9118 38.7121 13.8797 38.7685 13.7996 38.9217C13.6395 38.6072 13.5193 38.3573 13.3832 38.0912C12.2941 38.0509 12.6544 39.0265 12.4062 39.5748C12.3661 39.5828 12.3261 39.5909 12.2781 39.599C12.19 39.349 12.0618 39.1152 12.0298 38.8572C11.9897 38.5508 12.0538 38.2444 12.0458 37.93C12.0458 37.8252 11.9737 37.7284 11.9337 37.6236C11.8216 37.68 11.6534 37.7042 11.6134 37.7848C11.5173 38.0267 11.4692 38.2928 11.317 38.575C11.261 38.3492 11.1809 38.1235 11.1649 37.8977C11.1168 37.2043 11.0768 36.519 11.0528 35.8256C11.0207 35.0838 11.277 34.7291 11.9817 34.463C12.246 34.3582 12.4863 34.1728 12.7586 34.0679C12.9828 33.9793 13.2631 33.8664 13.4793 33.9228C14.0559 34.0599 14.6245 34.2453 15.1691 34.4791C15.6175 34.6726 16.05 34.7855 16.5465 34.7936C17.011 34.8016 17.4755 34.971 17.924 35.1322C18.2523 35.2532 18.5246 35.3419 18.8689 35.1564C19.0451 35.0677 19.3494 35.1 19.5497 35.1887C20.0302 35.3902 20.5027 35.3499 20.9992 35.2773C21.776 35.1725 22.5528 35.1322 23.3376 35.0435C23.5699 35.0193 23.8101 34.9629 24.0183 34.8662C24.3627 34.7049 24.699 34.5114 25.0194 34.3018C25.2196 34.1647 25.3798 33.9551 25.572 33.8019C26.0204 33.431 26.525 33.3907 27.0775 33.5439C27.2697 33.6003 27.502 33.5116 27.7182 33.4955C27.8463 33.4874 27.9825 33.4713 28.1106 33.4632C28.511 33.431 28.9115 33.3987 29.3199 33.3746C29.6642 33.3504 30.0166 33.2617 30.3369 33.3342C31.0337 33.4955 31.5142 33.1004 32.0027 32.7537C32.0988 32.6892 32.1228 32.3022 32.0267 32.2055C31.5462 31.7136 31.5863 31.1815 31.7704 30.601C31.9787 29.9398 32.339 29.4158 33.0037 29.1658C33.5723 28.9481 33.7485 28.6176 33.6124 28.029C33.5964 27.9725 33.5563 27.9161 33.5083 27.8758C33.26 27.65 33.0198 27.4082 32.7475 27.2147C32.6514 27.1502 32.4672 27.1663 32.339 27.2147C32.259 27.2388 32.1548 27.392 32.1709 27.4727C32.267 28.0612 31.8025 28.4321 31.6263 28.9239C31.4501 28.545 31.1858 28.1902 31.2819 27.7549C31.346 27.4565 31.2099 27.2953 30.9696 27.2711C30.8174 27.255 30.6333 27.392 30.4891 27.4888C30.3369 27.5936 30.1848 27.7145 30.0647 27.8597C29.9445 28.0048 29.8564 28.1822 29.7203 28.3999C29.5361 28.037 29.6722 27.6904 29.7043 27.3678C29.7283 27.1502 29.8725 26.9405 29.9125 26.7228C29.9365 26.5858 29.9045 26.4084 29.8244 26.2955C29.7844 26.2391 29.5842 26.2794 29.464 26.3116C29.2078 26.3842 28.9595 26.4729 28.6792 26.5696C28.5271 26.0939 28.8634 25.8037 29.1357 25.5215C29.416 25.2312 29.7603 24.9974 30.1608 24.6749C30.0086 24.5943 29.8885 24.5378 29.6883 24.433C30.0967 24.3201 30.361 24.2073 30.6413 24.1831C31.0177 24.1589 31.1057 23.9089 31.1538 23.6348C31.346 22.4496 31.8425 21.4095 32.5393 20.4581C32.7875 20.1195 33.1399 19.8615 33.4282 19.5551C33.5643 19.418 33.7245 19.2568 33.7725 19.0875C34.1249 17.7571 35.0459 16.9589 36.2071 16.3623C36.2391 16.3461 36.2792 16.33 36.2952 16.3219C36.1831 15.2819 36.079 14.2498 35.9668 13.2017C35.3021 12.8469 34.9898 12.1213 34.5413 11.5085C34.5013 11.4521 34.4613 11.3795 34.4052 11.3473C33.8446 10.9925 33.1959 10.7184 32.7314 10.2669C32.283 9.83148 31.7464 9.69441 31.2259 9.46866C30.7854 9.27515 30.345 9.08165 29.9205 8.85589C29.7363 8.75914 29.5922 8.58176 29.392 8.40438C29.1197 8.32375 28.7673 8.24313 28.439 8.11413C27.8223 7.87224 27.2377 7.56586 26.6131 7.36429C26.1406 7.2111 25.62 7.19498 25.1315 7.0821C24.9313 7.03372 24.7471 6.91278 24.5629 6.81603C24.4988 6.78378 24.4348 6.72734 24.3707 6.72734C23.698 6.70315 22.9692 6.83215 22.3526 6.63059C21.5518 6.36452 20.7029 6.61446 19.9581 6.25971C19.0531 5.82432 18.1162 6.0662 17.1952 6.0017C17.0911 5.99364 16.971 6.03395 16.8749 6.0017C15.7857 5.62275 14.7606 6.09845 13.7035 6.20327C13.4313 6.22745 13.151 6.21133 12.8707 6.21939C12.7666 6.21939 12.6625 6.23552 12.5583 6.25164C11.6854 6.40483 10.8045 6.55802 9.9396 6.72734C9.65931 6.78378 9.37902 6.8886 9.10673 6.98535C8.45004 7.2111 7.76132 7.34011 7.12065 7.65455C6.03151 8.19475 4.84627 8.54145 3.78917 9.16228C3.10045 9.56541 2.36368 9.87986 1.6269 10.1943C1.4267 10.283 1.16242 10.2185 0.930176 10.2185C1.01827 10.0089 1.06632 9.75085 1.21848 9.60572C1.40267 9.42028 1.68296 9.32353 1.9072 9.17034C2.01131 9.09777 2.13143 8.99296 2.17147 8.88008C2.28359 8.5737 2.45978 8.38019 2.80414 8.34794C2.91625 8.33988 3.04439 8.227 3.10845 8.13025C3.31667 7.78355 3.55692 7.52555 3.90929 7.58199C4.13353 7.38042 4.31772 7.22723 4.4939 7.06597C4.582 6.98535 4.65407 6.89666 4.73416 6.80797C4.78221 6.75153 4.81424 6.64671 4.87831 6.62253C5.40686 6.38065 5.93541 6.15489 6.46397 5.91301C6.57608 5.85657 6.69621 5.79207 6.79231 5.7195C7.23277 5.38893 7.77734 5.21962 8.13772 4.73585C8.23382 4.59879 8.61021 4.64717 8.85847 4.65523C9.10673 4.65523 9.25088 4.5746 9.41906 4.37303C9.58723 4.17147 9.87554 4.01021 10.1318 3.95377C10.4922 3.88121 10.8606 4.01827 11.1489 3.58289C11.269 3.39745 11.7095 3.43776 12.0058 3.34907C12.1579 3.30876 12.3902 3.26038 12.4382 3.1475C12.6544 2.67987 13.0388 2.74437 13.4232 2.72824C13.6555 2.72018 13.8957 2.63955 14.128 2.59118C14.4083 2.53474 14.6966 2.40574 14.9689 2.42186C15.2411 2.44605 15.4334 2.42186 15.6015 2.20417C15.6416 2.15579 15.7056 2.09129 15.7617 2.09129C16.4344 2.0671 16.995 1.4624 17.7318 1.70428C17.8118 1.72847 17.924 1.6559 18.012 1.62365C18.6287 1.3979 19.2373 1.15602 19.854 0.954449C20.0222 0.89801 20.2384 0.914137 20.4066 0.970576C20.831 1.10764 21.1754 0.970575 21.5598 0.801259C21.776 0.704506 22.0563 0.74482 22.3045 0.728695C22.5448 0.712569 22.785 0.712569 23.0253 0.696443C23.0733 0.696443 23.1294 0.640005 23.1775 0.648068C24.0343 0.881886 24.9633 0.212681 25.7962 0.873822C25.8923 0.954449 26.1325 0.914137 26.2767 0.849635C26.613 0.704507 26.9014 0.591628 27.2377 0.881886C27.3338 0.962512 27.558 0.889948 27.7262 0.898011C27.9745 0.914136 28.2147 0.930262 28.463 0.962512C28.7833 1.00283 29.1037 1.10764 29.424 1.09958C29.7844 1.09152 30.0887 1.12377 30.377 1.38177C30.5452 1.5269 30.8335 1.58334 31.0737 1.5914C31.4821 1.59947 31.8665 1.57528 32.1629 1.9381C32.1949 1.97841 32.283 1.98648 32.347 1.97841C32.4111 1.97841 32.5072 1.91391 32.5393 1.9381C32.9317 2.26867 33.4442 2.18804 33.8847 2.35736C34.173 2.47024 34.4212 2.6718 34.6935 2.81693C34.7656 2.85725 34.8777 2.84918 34.9578 2.81693C35.3102 2.69599 35.5264 2.85725 35.6625 3.16363C35.7907 3.45389 35.9748 3.59095 36.3032 3.59901C36.4634 3.60708 36.7196 3.71189 36.7677 3.84089C36.9038 4.18759 37.1361 4.25209 37.4564 4.25209C37.5525 4.25209 37.6566 4.31659 37.7527 4.36497C39.0981 5.09868 40.4435 5.84044 41.7969 6.55802C43.2705 7.34011 44.3917 8.51726 45.4808 9.74279C46.0974 10.4442 46.6901 11.1618 47.3708 11.831C47.2346 11.5891 47.0664 11.3634 46.9623 11.1054C46.8823 10.9199 46.7942 10.6458 46.8742 10.5087C47.1786 9.98467 47.5149 9.46866 47.8993 9.00102C48.1155 8.74302 48.4439 8.69464 48.7722 8.92846C48.8924 9.01715 49.0685 9.04133 49.2287 9.06552C49.5651 9.12196 49.8774 9.15421 50.0135 9.56541C50.0536 9.68635 50.3499 9.74279 50.5341 9.7831C51.0706 9.88792 51.2388 9.97661 51.399 10.3072C50.7663 10.5894 50.7984 10.5974 51.2708 11.1779C52.1598 12.2664 52.7364 13.4839 52.4961 14.9513C52.4801 15.0642 52.5442 15.2093 52.6002 15.3222C52.9927 16.0559 52.9846 16.7896 52.5682 17.5072C52.2399 18.0716 51.9676 18.6924 51.2388 18.8939C52.5442 22.4818 52.5362 26.0456 51.2708 29.6415C52.2078 29.8028 52.9206 30.2946 53.5292 30.9638C53.5452 30.9799 53.5693 31.0041 53.5853 31.0202C54.0738 31.754 54.5943 32.4473 55.195 33.1004C55.4913 33.4229 55.5874 34.0034 55.6434 34.4791C55.7155 35.1403 55.6674 35.8176 55.6594 36.4948C55.6514 37.0834 55.8677 37.4059 56.3962 37.6155C56.7005 37.7365 56.9968 37.8897 57.2771 38.059C57.4293 38.1557 57.5414 38.3331 57.6695 38.4702C57.6455 38.4944 57.6295 38.5266 57.6055 38.5508C57.4453 38.5186 57.2932 38.4944 57.0849 38.4541C57.117 38.5427 57.117 38.6072 57.149 38.6234C57.4934 38.8814 57.8377 39.1394 58.1981 39.3813C58.6866 39.7199 58.5665 40.2682 58.6946 40.76C58.2782 40.3891 57.6055 40.7277 57.2851 40.1633C57.2451 40.0908 56.9808 40.1553 56.9168 40.1553C56.8687 40.8729 56.8287 41.5421 56.7886 42.2032C56.7566 42.2193 56.7165 42.2274 56.6845 42.2435C56.4282 41.9371 56.172 41.6308 55.9077 41.3324C55.8276 41.2437 55.6514 41.1228 55.6274 41.147C55.5153 41.2357 55.3711 41.3889 55.3872 41.4937C55.4272 41.7678 55.3071 41.8726 55.0908 41.9855C54.9627 42.05 54.8746 42.2032 54.7705 42.3241C54.6744 42.437 54.5863 42.566 54.4982 42.687C54.4582 42.6789 54.4181 42.6708 54.3781 42.6628C54.3621 42.4612 54.3301 42.2596 54.322 42.0581C54.306 41.7678 54.322 41.4776 54.306 41.1873C54.282 40.8648 54.0898 40.7842 53.8255 40.9696C53.7615 41.018 53.6974 41.0825 53.6253 41.0906C53.1768 41.1712 53.1688 41.1712 53.0167 41.6308C52.9366 41.4856 52.8725 41.405 52.8405 41.3002C52.7124 40.8245 52.9526 40.1633 53.369 39.9053C53.8095 39.6393 53.8736 38.8652 53.6493 38.5024C53.3931 38.0912 53.1208 37.6962 52.8725 37.285C52.6643 36.9383 52.5682 36.5916 52.7043 36.1723C52.8485 35.7208 52.6002 35.3741 52.1438 35.2532C51.423 35.0677 50.7103 34.8742 49.9575 34.6646C49.6612 35.0919 49.3408 35.5676 49.0045 36.0352C48.1476 37.2205 47.0825 38.1154 45.6249 38.4621C45.4407 38.5024 45.2726 38.6476 45.1124 38.7524C44.8561 38.9217 44.6159 39.1313 44.2715 38.9943C44.2155 38.9701 44.0953 39.0346 44.0473 39.0991C42.0372 41.792 39.5065 43.8238 36.3432 44.9606C35.0138 45.4363 33.6444 45.783 32.267 46.0975C31.7865 46.2023 31.2419 46.0572 30.7374 45.9685C30.5291 45.9282 30.377 45.8879 30.1928 46.033C28.5831 47.2666 26.8133 47.5085 24.8912 46.9602C23.69 46.6216 22.4887 46.5571 21.2635 46.9118C20.8951 47.0166 20.4706 46.9199 20.0782 46.9199C19.3174 46.9118 18.5646 46.9038 17.8038 46.9038C17.7398 46.9038 17.6677 46.9199 17.6116 46.9521C16.6746 47.5165 15.6576 47.1618 14.6726 47.2021C13.5674 47.2505 12.7025 46.6458 11.9177 45.9282C11.6214 45.654 11.6614 45.267 12.0058 44.9042C12.0858 44.8155 12.1419 44.6785 12.1579 44.5575C12.214 44.1705 12.246 43.7754 12.2861 43.3804C12.3421 43.3723 12.3982 43.3642 12.4462 43.3562C12.5023 43.5255 12.5423 43.7109 12.6224 43.8722C12.7105 44.0415 12.8386 44.3237 12.9588 44.3318C13.191 44.3398 13.4953 44.2673 13.4953 43.8883C13.4953 43.7432 13.5914 43.5981 13.7436 43.4287C13.8237 43.6061 13.8957 43.7835 13.9758 43.977C14.3122 43.719 14.6726 43.4932 14.9609 43.1949C15.097 43.0498 15.089 42.7676 15.145 42.5499C15.2331 42.2274 15.2412 41.8646 15.6416 41.5904C15.6816 42.1629 15.7136 42.6708 15.7537 43.1707C15.8097 43.1869 15.8578 43.203 15.9139 43.211C16.034 42.9853 16.1461 42.7515 16.3063 42.4451C16.4104 42.695 16.4824 42.8724 16.5625 43.0578C16.7067 43.0578 16.8428 43.0578 16.979 43.0578C17.0671 42.7998 17.1471 42.558 17.2673 42.1871C17.3794 42.4128 17.4114 42.5499 17.4915 42.6386C17.5796 42.7353 17.7157 42.8482 17.8359 42.8482C18.0361 42.8563 18.1882 42.7515 18.1802 42.5015C18.1722 42.3403 18.2123 42.171 18.2283 41.9452C18.4525 42.0823 18.6047 42.179 18.7648 42.2838C18.8529 42.1226 18.941 41.9694 19.0451 41.7839C19.7659 42.1629 19.3334 41.405 19.4616 41.2518C19.7178 41.2679 19.918 41.2841 20.1102 41.2921C20.0302 41.1228 20.0462 40.9051 20.0622 40.6874ZM34.3572 24.2234C34.3251 24.2153 34.2931 24.2073 34.2691 24.1911C33.8046 24.5217 33.3401 24.8603 32.8276 25.2232C32.9397 25.5457 33.0278 25.9004 33.1959 26.2149C33.3801 26.5696 33.6364 26.8841 33.5003 27.3275C33.4762 27.4162 33.5323 27.5372 33.5563 27.642C33.8206 26.489 34.0849 25.3602 34.3572 24.2234Z" fill="#20113D"/>
        </svg>
        `,
        href: `#`
    },
    {
        src: `<svg width="53" height="47" viewBox="0 0 53 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6769 43.4852C12.408 42.1008 12.3213 40.7251 12.5641 39.3494C12.9457 37.164 14.0297 35.379 15.7728 34.0469C16.64 33.3851 17.6373 32.8975 18.5739 32.3229C19.1896 31.9485 19.8487 31.6176 20.3777 31.1474C21.7739 29.8849 23.1094 28.5615 24.4709 27.2641C25.2774 26.4979 26.0753 25.723 26.9338 24.8958C26.3528 24.8523 25.8324 24.8436 25.3208 24.7652C24.8091 24.6869 24.2975 24.5563 23.9246 24.0338C24.1067 24.0251 24.2368 24.0164 24.3669 24.0164C25.737 23.9729 26.4308 23.2763 26.4568 21.9442C26.4742 21.2999 26.3181 20.6468 26.2314 20.0025C25.8411 17.2772 26.5175 14.8219 28.1132 12.6103C28.2173 12.4623 28.33 12.3055 28.4601 12.1227C28.0178 12.0705 27.6189 12.053 27.2373 11.966C26.8644 11.8789 26.5175 11.7222 26.1533 11.6003C26.162 11.5567 26.1707 11.5132 26.1793 11.4784C26.4655 11.4174 26.7517 11.3652 27.0292 11.2955C29.0758 10.7557 30.5761 9.56284 31.4866 7.61248C31.8682 6.80273 32.3018 6.0104 32.7875 5.2616C33.646 3.94684 34.8688 3.11097 36.3864 2.71045C36.5251 2.67563 36.6552 2.63209 36.8373 2.57985C36.5598 2.41442 36.291 2.30123 36.0915 2.10967C35.9181 1.94424 35.8314 1.69174 35.7533 1.40441C36.4731 1.6482 36.9847 1.30863 37.5051 1.00388C38.3896 0.481466 39.3089 0.0896522 40.3669 0.133187C41.6677 0.194136 42.6563 0.84716 43.4801 1.81363C43.5929 1.94424 43.6969 2.08355 43.8097 2.23157C44.5121 1.71786 45.2146 1.85717 45.865 2.29252C46.2292 2.53631 46.5154 2.90201 46.8623 3.18934C47.4173 3.65951 47.955 4.17322 48.5707 4.56504C48.8742 4.75659 49.3165 4.72177 49.7674 4.80884C50.0623 5.65341 49.6113 6.2629 48.111 6.84627C48.484 7.49929 48.8568 8.15232 49.2297 8.80534C49.5073 9.28422 49.7241 9.7544 49.5593 10.3639C49.4899 10.6425 49.672 11.0517 49.8541 11.3217C50.3224 12.0008 50.8514 12.6364 51.3544 13.2894C51.6146 13.6377 51.8661 13.9947 52.1176 14.343C52.3604 14.6825 52.3604 15.0134 52.1089 15.3443C51.788 15.7535 51.5105 16.215 51.1203 16.5458C50.5392 17.0334 50.0623 17.5907 49.5766 18.174C48.9002 18.9925 47.9289 19.0273 47.1311 18.3134C46.9316 18.1305 46.7148 17.9303 46.5934 17.6952C46.3159 17.1379 45.839 16.9289 45.2926 16.7809C44.7723 16.6416 44.252 16.5197 43.749 16.3456C43.3327 16.1976 42.9425 15.9973 42.5436 15.8145C42.4742 16.0844 42.5002 16.3108 42.8471 16.5458C43.3501 16.8767 43.8877 17.1466 44.4427 17.3991C44.6856 17.5123 44.8243 17.6168 44.911 17.8867C45.2926 19.1492 45.7002 20.403 46.1165 21.6481C46.5241 22.8758 46.5587 24.1383 46.5154 25.4183C46.4634 26.8549 46.2292 28.2393 45.7956 29.5976C45.4834 30.5641 45.1365 31.191 44.6942 31.6263C44.3994 30.8514 44.1132 30.0852 43.8184 29.3277C43.775 29.3364 43.7316 29.3451 43.6883 29.3538C43.7577 30.12 43.801 30.8862 43.9051 31.6525C44.382 35.0133 45.1105 38.3307 46.0818 41.5871C46.2119 42.0051 46.446 42.4143 46.6975 42.7713C47.1658 43.433 47.8422 43.6594 48.6314 43.5897C49.5419 43.5114 50.0189 43.79 50.227 44.6781C50.3831 45.3572 50.3918 46.0712 50.4699 46.8026C47.8075 46.8026 45.2753 46.8026 42.6476 46.8026C42.5696 45.7926 42.5175 44.7826 42.3961 43.7813C42.3354 43.2414 42.2574 42.6755 42.0146 42.2053C41.4769 41.1779 40.8438 40.2114 40.2281 39.2275C39.3522 37.8344 38.459 36.45 37.5831 35.0743C35.8053 35.8144 33.9582 36.5893 32.059 37.3729C31.9983 37.8692 31.9289 38.4787 31.8595 39.0795C31.7642 39.9328 31.3479 40.5945 30.6628 41.0647C29.9083 41.5784 29.1105 42.0138 28.33 42.4839C28.1219 42.6145 27.9137 42.7539 27.7056 42.8845C27.723 42.9367 27.7316 42.9889 27.749 43.0412C28.0091 43.076 28.278 43.1457 28.5295 43.1283C29.5354 43.0586 30.5414 42.9628 31.556 42.8757C31.7988 42.8583 32.0417 42.8322 32.2932 42.8322C34.5739 42.8235 36.0222 44.4691 35.7533 46.8113C35.6146 46.82 35.4758 46.8287 35.3371 46.8287C27.9831 46.8287 20.6205 46.8374 13.2666 46.8287C12.5208 46.8287 11.749 46.7939 11.0292 46.611C10.4395 46.463 9.78907 46.1757 9.36414 45.749C7.67308 44.0599 6.78853 42.0399 7.56034 39.628C8.03731 38.1479 8.69639 36.7199 9.32945 35.292C9.74571 34.3516 10.214 33.4374 10.3788 32.4013C10.6736 30.5815 9.88446 28.9359 8.34083 28.1697C7.34354 27.6734 5.68717 28.4396 5.4617 29.5105C5.43568 29.6411 5.50506 29.8675 5.60045 29.9285C6.35492 30.4074 6.71048 31.1213 6.87525 31.9659C7.10072 33.1413 6.87525 34.9959 6.39828 35.9189C6.15546 35.5445 5.91265 35.1701 5.66983 34.7957C5.79991 36.3629 5.17552 37.5819 4.22159 38.6703C4.16956 38.6529 4.1262 38.6529 4.11752 38.6442C3.7533 37.6603 3.07687 36.9289 2.29638 36.2584C1.91481 35.9276 1.61996 35.5009 1.28175 35.1091C1.17768 35.3094 1.03026 35.5967 0.882833 35.884C0.440557 35.5009 0.163049 34.6999 0.284458 33.9163C0.466572 32.7669 0.952209 31.7918 2.1056 31.2955C2.21833 31.2432 2.30506 31.0691 2.35709 30.9298C2.9121 29.467 3.74462 28.2132 5.11481 27.4034C6.22484 26.7417 7.45628 26.4892 8.73975 26.6895C9.9365 26.8723 10.6823 27.656 11.1072 28.7617C11.7143 30.3377 11.6796 31.9659 11.3067 33.5593C11.0379 34.726 10.6129 35.8579 10.162 36.9724C9.77173 37.9563 9.3468 38.9228 9.22539 39.9937C9.01726 42.0486 10.5435 43.642 12.6769 43.4852Z" fill="#20113D"/>
        </svg>
        `,
        href: `#`
    },
    {
        src: `<svg width="64" height="54" viewBox="0 0 64 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.1229 37.4213C17.0882 37.4827 17.0592 37.5529 16.9897 37.6756C16.2153 36.3737 15.9906 34.9338 15.7165 33.5141C15.6669 33.4963 15.6087 33.4843 15.565 33.4753C15.3973 33.9052 15.1742 34.3085 15.0735 34.7447C14.7249 36.173 14.8303 37.6036 15.1714 39.0294C15.5888 40.7223 16.0062 42.4151 16.3625 44.1106C16.6275 45.3837 16.7821 46.6797 16.503 47.9853C16.1981 49.4227 15.5608 50.5859 14.1129 51.1326C13.4675 51.3727 12.8329 51.2876 12.2472 50.9536C11.676 50.6226 11.6018 50.0362 12.0954 49.6049C12.3887 49.3455 12.7227 49.0717 13.0832 48.9328C13.7955 48.6608 14.1609 48.1497 14.2173 47.4379C14.271 46.7788 14.2925 46.0903 14.1774 45.4421C13.8589 43.7087 13.4763 41.9926 13.0705 40.2792C12.6147 38.3576 12.348 36.4369 12.6808 34.4722C12.9704 32.7652 13.7089 31.3183 15.0623 30.2113C15.161 30.1327 15.251 30.0598 15.3498 29.9812C15.4108 29.9405 15.4689 29.9144 15.5794 29.8534C15.6646 30.1908 15.7323 30.5017 15.8087 30.8069C16.2631 28.6464 16.3972 26.3819 18.1974 24.735C20.8375 26.216 22.3011 28.5205 22.8904 31.4597C23.4205 28.104 21.4214 25.7881 19.4686 23.3903C19.9568 23.1025 20.4188 22.8323 20.8809 22.562C21.2732 22.3383 21.6655 22.1145 22.0606 21.8762C22.9498 21.3589 22.976 21.3414 23.5776 22.2118C24.1413 23.0438 24.6352 23.9224 25.1495 24.7747C25.246 24.9393 25.3337 25.1097 25.4795 25.254C25.3826 23.7033 24.7506 22.3317 23.9789 20.939C24.8624 20.451 25.7225 19.9658 26.6061 19.5159C26.7252 19.4491 26.967 19.5675 27.1157 19.659C28.7973 20.6987 29.7819 22.2801 30.4644 24.0885C30.6695 24.6258 30.8484 25.1805 31.0854 25.7091C31.0816 22.9897 29.7142 20.7735 28.3146 18.4898C29.3169 17.8207 30.2931 17.169 31.3303 16.4766C32.3135 17.5246 32.896 18.8784 33.5337 20.2207C33.5951 19.1748 33.3134 18.2181 32.8077 17.3219C32.6294 16.9958 32.4424 16.6754 32.2292 16.3726C31.9693 15.9992 31.9743 15.6651 32.2965 15.3355C32.9467 14.6852 33.5853 14.0173 34.2355 13.367C36.8209 15.0499 38.3689 17.349 38.9495 20.332C39.0911 18.762 38.6772 17.2831 38.1091 15.8562C37.5439 14.4146 36.6242 13.1969 35.469 12.0602C36.7872 10.8622 38.059 9.70794 39.3656 8.53042C40.5708 9.91358 41.5636 11.2605 42.0391 12.9273C41.9124 11.104 41.3205 9.4513 40.1614 7.91013C40.7805 7.61131 41.3239 7.31212 41.8908 7.08631C42.0129 7.04295 42.2373 7.17298 42.3918 7.27337C43.0709 7.71038 43.7961 7.95127 44.6225 7.90841C43.6704 7.70451 43.1362 7.03084 42.7152 6.24344C42.4141 5.69399 42.6141 5.36969 43.2076 5.31691C44.1968 5.21623 45.1771 5.08328 46.1545 4.92686C46.8264 4.82171 47.4748 4.60509 48.1468 4.49994C49.162 4.34371 50.0938 4.57389 51.0348 5.02683C51.7399 5.37018 52.5666 5.47971 53.3556 5.62714C53.836 5.72618 54.2794 6.1298 54.298 6.61341C54.3076 6.95045 54.3259 7.28167 54.3674 7.61008C54.489 8.53375 54.2086 9.30601 53.5789 10.0062C53.5205 9.91804 53.4709 9.86212 53.4387 9.79457C53.1518 9.09573 53.1576 9.10455 52.4363 9.26808C51.7529 9.43178 51.0958 9.65422 50.6258 10.2351C50.0833 10.9152 50.0242 11.7179 50.5058 12.3121C50.894 12.8034 51.9653 12.9405 52.6017 12.5919C52.7208 12.5251 52.84 12.4583 52.9591 12.3915C53.2781 13.1198 53.1689 13.676 52.5968 14.1597C52.1438 14.5384 51.647 14.8701 51.13 15.2661C50.5355 14.8998 49.903 14.4953 49.2532 14.1405C48.5888 13.7827 47.8985 13.5185 47.0232 13.7721C47.3612 13.9408 47.6147 14.0768 47.9643 14.2631C46.5224 14.8568 45.5528 15.784 45.015 17.2114C44.8304 16.686 44.6516 16.1693 44.4318 15.5529C44.1925 18.7781 46.6796 23.1213 51.5692 24.6016C51.3424 24.6766 51.1651 24.7315 50.9848 24.8009C50.9907 24.8478 50.988 24.9006 50.9939 24.9475C51.2005 24.9368 51.4013 24.9553 51.5991 24.9123C52.2797 24.7633 52.9514 24.5819 53.6379 24.4417C54.301 24.3042 54.9009 24.4888 55.5248 24.9373C54.6445 25.525 53.8339 26.0661 53.0321 26.6014C52.3464 27.0464 51.6666 27.5002 50.9693 27.9276C50.8327 28.006 50.6 28.0342 50.4688 27.9691C47.7185 26.6253 44.8012 26.0543 41.7776 26.0249C40.794 26.0201 39.9175 25.7785 39.1158 25.1944C38.903 25.0439 38.6554 24.9548 38.3585 24.924C38.6882 25.289 39.0093 25.6598 39.4003 26.0983C35.7379 26.6226 32.4119 27.8636 29.3555 29.8912C28.9668 29.2094 28.6014 28.563 28.2419 27.9253C28.21 27.9339 28.1867 27.9368 28.1547 27.9454C28.2075 28.1391 28.243 28.3444 28.3191 28.5352C28.694 29.5187 28.6178 30.4854 28.3089 31.4802C27.6015 33.7332 26.1245 35.4315 24.5427 37.0853C23.6661 38.0012 22.8829 39.0201 22.1113 40.0185C21.5225 40.7805 21.2162 41.6845 21.1983 42.6631C21.1987 42.8155 21.1525 42.9735 21.121 43.1727C20.9636 43.0869 20.8325 43.0218 20.6693 42.9272C20.6841 43.0064 20.6813 43.0592 20.6988 43.0856C21.4581 44.156 22.3939 44.8668 23.7989 44.6157C24.3166 44.5245 24.8086 44.6031 25.2261 45.1384C25.0343 45.2664 24.8513 45.3886 24.677 45.505C23.326 46.4068 21.9693 47.2999 20.6387 48.2135C20.3337 48.4172 20.1503 48.387 19.8646 48.1834C18.8559 47.4576 18.2307 46.4377 17.6577 45.3829C17.4472 44.9892 17.3906 44.4673 17.3982 44.0043C17.4061 42.4981 17.4984 40.9865 17.5005 39.4715C17.5075 38.78 17.3632 38.0877 17.2946 37.3958C17.2364 37.4219 17.184 37.4187 17.1229 37.4213ZM48.3832 5.9575C48.3747 6.03951 48.3749 6.1157 48.3663 6.19771C48.8177 6.32884 49.2663 6.51271 49.7292 6.5853C49.898 6.61249 50.1069 6.35857 50.2987 6.23056C50.1295 6.08908 49.963 5.81867 49.7971 5.81493C49.3228 5.8009 48.8487 5.90116 48.3832 5.9575Z" fill="#20113D"/>
        <path d="M30.5746 36.4963C30.4989 36.496 30.3271 36.4834 30.0623 36.4821C30.8264 37.1426 31.6385 37.1729 32.4504 37.0888C33.4164 36.9908 34.3765 36.8078 35.3425 36.7098C35.9129 36.6597 36.4633 36.7884 36.8227 37.3883C36.6978 37.4845 36.5874 37.5837 36.4654 37.6652C35.0182 38.6317 33.5769 39.6071 32.1094 40.5618C31.9089 40.6958 31.5917 40.7294 31.3501 40.6872C30.625 40.5606 29.9173 40.3842 29.2009 40.2136C28.3622 40.0102 27.8488 39.5386 27.7797 38.6176C27.7586 38.3008 27.5861 37.9833 27.4224 37.6981C27.098 37.1511 26.7301 36.6333 26.362 36.0774C27.7124 34.8318 28.2818 33.1661 28.9066 31.5271C29.1814 30.8217 29.6227 30.3488 30.3263 30.0443C30.9012 30.7039 31.3802 31.3894 31.17 32.3443C31.0807 32.7221 30.9855 33.0911 30.9312 33.4837C30.8083 34.4566 30.6972 35.4472 30.5746 36.4963Z" fill="#20113D"/>
        <path d="M35.0467 27.6946C36.8126 27.3424 38.436 27.0218 40.1147 26.6897C40.3691 28.4034 39.8843 30.1399 40.6507 31.7534C40.389 31.8519 40.1534 31.9329 39.915 32.0285C39.918 32.0901 39.9298 32.1459 39.9329 32.2075C40.3054 32.2004 40.6926 32.2346 41.0563 32.1571C41.6498 32.028 42.211 31.7932 42.8015 31.6406C43.4705 31.4737 43.9893 31.7636 44.4651 32.3113C43.8984 32.6898 43.3492 33.0566 42.8086 33.4176C41.8235 34.0756 40.85 34.7513 39.8473 35.3828C39.6671 35.4904 39.3528 35.5094 39.146 35.4439C38.3159 35.1966 37.7555 34.5781 37.4423 33.82C36.6138 31.8279 35.8609 29.7981 35.0467 27.6946Z" fill="#20113D"/>
        </svg>
        `,
        href: `#`
    },
    {
        src: `<svg width="44" height="55" viewBox="0 0 44 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.0579 23.3932C32.3131 21.8611 33.0329 20.1684 33.0637 18.2038C33.0679 17.99 33.2193 17.7792 33.37 17.5692L33.3701 17.5691C33.4415 17.4696 33.5128 17.3702 33.5682 17.2709C33.8614 16.7387 34.1736 16.2134 34.4859 15.6878C35.196 14.4929 35.907 13.2964 36.3984 12.0135C37.469 9.21492 36.823 7.49746 34.4973 5.71205C34.6449 3.84014 35.3833 2.55514 37.4382 2.18446C38.4108 2.01038 39.3543 1.67287 40.3847 1.30431C40.8534 1.13662 41.3402 0.962508 41.8558 0.794434C40.3115 5.47111 38.8472 9.90067 37.3152 14.5341L37.6729 14.4575L37.675 14.457C39.6684 14.0302 41.4922 13.6396 43.3324 13.2491C43.8 14.0831 43.437 14.5217 42.7295 14.9233L42.3071 15.1613L42.3071 15.1613C40.4963 16.1814 38.6805 17.2043 36.9337 18.3335C36.3492 18.7104 35.8447 19.3899 35.5801 20.0386C35.1455 21.1144 34.7922 22.2234 34.4296 23.3615L34.4294 23.3621C34.2736 23.8511 34.1161 24.3456 33.9497 24.845L31.0579 23.3932ZM36.4045 23.1469C38.2072 24.4937 38.964 27.3911 38.1396 29.6028C37.4197 31.5241 35.7523 32.4385 33.2667 32.1543C32.5518 32.0712 31.8484 31.9118 31.1453 31.7525L31.1453 31.7525L31.1452 31.7525L31.1452 31.7525C30.6986 31.6513 30.2521 31.5501 29.8027 31.4685C27.2433 30.9928 25.0529 31.3512 23.564 32.5003C23.9085 32.5435 24.2039 32.5806 24.653 32.6362C24.2684 33.3631 24.0728 34.1509 23.8832 34.9144C23.6087 36.0196 23.3468 37.074 22.5426 37.8194C23.001 38.1412 23.4904 38.4579 23.9911 38.7819C25.1435 39.5277 26.3553 40.3119 27.3848 41.2852C29.7781 43.5463 29.6305 46.9257 27.2802 49.4277C26.5751 49.178 25.8689 48.9283 25.162 48.6783L25.1602 48.6776C22.4749 47.728 19.7781 46.7743 17.0853 45.8013C16.6387 45.639 16.2127 45.4177 15.787 45.1965C15.5968 45.0977 15.4067 44.999 15.2149 44.9055C12.4277 43.5649 10.9819 41.3161 10.7358 38.2457C10.422 34.3598 11.1787 30.616 12.0709 26.9092C12.1317 26.8975 12.1818 26.8822 12.2236 26.8694C12.2919 26.8486 12.338 26.8345 12.3723 26.8536C18.4142 29.9797 23.9762 28.5649 29.2367 24.9447C30.1288 24.3331 30.8056 24.3022 31.6608 24.7532C32.1654 25.0188 32.676 25.2721 33.1929 25.5069C34.6756 26.1802 35.3463 25.9146 35.9431 24.4072C36.0422 24.1545 36.1342 23.8971 36.228 23.635L36.2282 23.6343C36.2857 23.4736 36.3438 23.3112 36.4045 23.1469ZM30.1993 36.3123C30.5946 35.1093 31.0061 33.8574 31.4457 32.5172C30.9879 32.5024 30.5442 32.4866 30.1111 32.4711L30.1101 32.4711L30.1093 32.471C28.733 32.4219 27.464 32.3766 26.1914 32.3813C25.9207 32.3813 25.5085 32.7149 25.41 32.9867C25.0102 34.1136 24.6506 35.2539 24.304 36.353C24.1813 36.7422 24.0602 37.1263 23.9395 37.5028L25.1533 38.3928L25.1537 38.3931C26.331 39.2566 27.477 40.0971 28.6709 40.9686C29.1702 39.4432 29.6696 37.924 30.1976 36.3174L30.1982 36.3154L30.1993 36.3123ZM17.9038 54.7085C18.6791 52.3979 19.3989 50.2542 20.1619 47.9869C22.063 48.5862 23.8596 49.1545 25.7792 49.7662C25.6753 50.0883 25.5737 50.4053 25.4735 50.7181C25.0934 51.9051 24.7326 53.0315 24.3333 54.1463C24.2472 54.381 23.8965 54.6776 23.6627 54.6838C22.2451 54.7169 20.8203 54.7138 19.3138 54.7105C18.8522 54.7095 18.3829 54.7085 17.9038 54.7085ZM9.44763 15.4518L9.44766 15.4519C10.011 16.3225 10.5581 17.1681 10.9512 18.0807C11.6772 19.7796 11.991 21.6947 10.5636 23.1527C9.09928 24.6416 7.27809 23.9806 5.6538 23.2639C4.70014 22.8438 3.76494 22.2693 2.97741 21.5835C-0.0189243 18.9579 0.276399 14.9485 3.60497 12.7491C5.79531 11.3035 8.20099 11.0811 10.6251 11.9522C11.6772 12.329 12.2679 12.051 13.0923 11.4271C14.4767 10.383 15.9656 9.38835 17.553 8.71496C20.457 7.47938 23.2934 7.85623 25.8775 9.74667C26.4497 10.1668 27.028 10.5745 27.7663 10.7969C27.2618 10.1853 26.7573 9.57987 26.1851 8.89412C28.117 7.12724 30.2397 6.08935 32.8546 6.52798C34.7065 6.83688 35.7032 8.08481 35.6602 9.9629C35.611 12.2302 34.4789 14.0465 33.2422 15.8628C30.8488 13.4905 30.1536 10.7042 31.3595 8.60994C30.1905 8.85705 29.5875 9.57987 29.8398 10.8711C30.0859 12.1375 30.492 13.4102 31.0457 14.5716C32.6085 17.8644 32.1224 21.1078 29.323 23.4246C25.5268 26.5753 21.1277 27.4587 16.3655 26.2479C15.4488 26.0131 14.5751 25.4756 13.7814 24.9258C12.8401 24.2771 12.4032 23.4307 12.5509 22.1148C12.6986 20.7372 12.5017 19.2545 12.151 17.8953C11.6834 16.1161 10.4282 14.9114 8.68089 14.238C8.93117 14.6536 9.19108 15.0553 9.44763 15.4518ZM26.7312 23.9807C26.7441 23.9248 26.7555 23.868 26.7657 23.8107C26.8164 23.5237 26.8359 23.221 26.8549 22.9263L26.8549 22.926C26.8628 22.8039 26.8706 22.6831 26.8805 22.5654C26.8128 20.7552 26.296 19.1428 24.9547 17.9196C23.7734 16.8446 22.6105 17.1968 22.2291 18.7474L22.2153 18.8048C22.194 18.8957 22.1747 18.9864 22.1576 19.0767C21.8476 20.7142 22.2355 22.2515 23.1642 23.6531L23.1952 23.6999C23.3027 23.8619 23.4131 24.0283 23.5292 24.1897C24.0274 24.8834 24.6306 25.4862 25.5613 25.2469C25.5905 25.2395 25.62 25.2314 25.6498 25.2223C26.3238 25.0173 26.6023 24.5399 26.7312 23.9807ZM20.0895 18.8507L20.0895 18.8507C19.8078 18.5898 19.5919 18.39 19.4295 18.4266C19.1803 18.4827 18.9761 18.7317 18.7708 18.982C18.6821 19.09 18.5933 19.1984 18.5005 19.2915C18.5909 19.3748 18.6796 19.476 18.7684 19.5772C18.9694 19.8066 19.1707 20.0362 19.3926 20.0576C19.5884 20.0781 19.8058 19.8977 20.0896 19.6621L20.0896 19.6621C20.234 19.5423 20.3955 19.4083 20.5801 19.2792C20.3979 19.1362 20.2349 18.9853 20.0895 18.8507ZM28.64 16.8698L28.6397 16.8696L28.6401 16.8693C28.419 16.7319 28.2354 16.5995 28.0766 16.4851L28.0766 16.485C27.7716 16.2651 27.5585 16.1115 27.3481 16.1156C27.3427 16.1157 27.3372 16.116 27.3316 16.1165C27.0588 16.1345 26.5732 16.6188 26.6097 16.8018C26.6773 17.1293 27.0465 17.5741 27.348 17.6297C27.3759 17.6344 27.4044 17.635 27.4337 17.6318C27.5677 17.6187 27.7206 17.5227 27.9119 17.3842C27.9619 17.3482 28.0145 17.3092 28.07 17.268C28.2321 17.1479 28.4192 17.0092 28.64 16.8698Z" fill="#20113D"/>
        </svg>
        `,
        href: ``
    },
];

const asideOpened = [
    {
        src: `<svg class="svg-white" width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2527 27.8338C18.8342 28.5556 16.3968 28.4446 13.9408 26.8344C13.7523 27.0683 13.5592 27.3037 13.3641 27.5415L13.3636 27.5421L13.3636 27.5421L13.3636 27.5421L13.3636 27.5422L13.3635 27.5422C12.8796 28.1322 12.3835 28.737 11.9159 29.3699C11.5691 29.8604 11.2457 30.3693 10.9223 30.8783L10.9222 30.8783L10.9222 30.8784C10.5988 31.3873 10.2754 31.8963 9.92857 32.3867C9.15987 33.4786 8.87864 34.6631 8.95363 35.9772C9.04738 37.6614 8.37243 38.5127 6.7038 38.8088C3.2728 39.4196 0.198026 36.9026 0.179278 33.4786C0.179278 33.1443 0.173234 32.81 0.167211 32.4768C0.158232 31.9801 0.1493 31.486 0.160522 30.9986C0.192046 29.6916 0.766871 28.5547 1.33912 27.4228C1.44755 27.2084 1.55588 26.9941 1.66041 26.7789C1.93087 26.2253 2.20385 25.6725 2.47686 25.1197L2.47691 25.1196L2.47702 25.1194C3.49091 23.0664 4.50516 21.0128 5.39139 18.9131C6.69412 15.836 8.65109 13.1894 10.615 10.5334L10.615 10.5334L10.615 10.5334L10.615 10.5334C11.0253 9.97849 11.4359 9.4232 11.8409 8.86349C11.8604 8.8395 11.8811 8.81552 11.902 8.79121L11.9021 8.79118L11.9021 8.79111C11.9621 8.72167 12.0243 8.64959 12.0659 8.56737C14.2595 4.62525 18.1592 3.69986 22.1714 2.92254C23.1609 2.73405 24.1423 2.49797 25.1231 2.26202C26.261 1.98829 27.398 1.71476 28.546 1.51596C30.6458 1.1458 32.8019 0.849683 34.9392 0.775652C37.4703 0.683114 39.6076 1.84909 41.5013 3.45926C38.6327 2.01566 35.5579 1.51596 32.3707 1.58999C31.5645 1.6085 30.7583 1.68253 29.9521 1.77507C28.7897 1.90462 28.3022 2.75597 27.9835 3.73687C27.1586 6.2354 27.3273 8.69692 28.2085 11.1769C28.4209 11.7728 28.5533 12.4015 28.6852 13.0278L28.6852 13.0279C28.7745 13.4521 28.8636 13.8752 28.9772 14.2862C29.122 14.7985 29.2634 15.3125 29.4048 15.8267L29.4048 15.8267L29.4048 15.8268L29.4048 15.8268L29.4048 15.8268C29.9226 17.7091 30.4412 19.5946 31.1333 21.4117C31.4145 22.1705 32.3519 22.9108 33.1581 23.2069C36.3266 24.3359 39.5701 24.9466 42.9262 23.8177C47.1446 22.3926 49.3194 17.9507 47.7258 13.8235C47.2151 12.516 46.6094 11.2488 46.0011 9.97609C45.8947 9.75354 45.7882 9.53081 45.6822 9.30768C45.5851 9.10226 45.3853 8.93738 45.1893 8.77554C45.1203 8.71866 45.0519 8.66215 44.9885 8.60439C44.746 8.3773 44.4932 8.15631 44.2397 7.93468C43.7287 7.488 43.2148 7.0387 42.7762 6.53153C42.1575 5.80973 42.1762 4.90286 42.7199 4.12554C43.2449 3.36673 44.0886 3.18165 44.9697 3.32971C46.3384 3.55181 47.2196 4.38464 47.6696 5.62465C48.1008 6.82765 47.6883 7.86408 46.6196 8.77095C48.0258 9.91843 48.4945 11.5656 48.907 13.1943C49.0631 13.811 49.147 14.4474 49.2311 15.0854L49.2311 15.0855L49.2312 15.0855L49.2312 15.0856C49.3288 15.8261 49.4267 16.5686 49.6382 17.2845C49.9914 18.4699 50.4152 19.6393 50.8394 20.8098C51.2034 21.8141 51.5677 22.8192 51.888 23.8362C52.3039 25.138 52.6869 26.4508 53.0697 27.7626L53.0697 27.7627L53.0697 27.7628L53.0698 27.7629C53.3943 28.8754 53.7187 29.9872 54.0628 31.0912C54.2546 31.7064 54.5 32.3066 54.7452 32.9061L54.7453 32.9062L54.7454 32.9067L54.7455 32.9068L54.7455 32.9069C54.8837 33.2449 55.0219 33.5826 55.1503 33.9228C55.5611 34.9993 56.4916 35.4839 57.4137 35.9643C57.5856 36.0539 57.7572 36.1432 57.9251 36.2363C58.7875 36.7175 59.2375 37.3467 59.0125 38.3461C58.8062 39.29 58.1875 39.8823 57.0439 39.8453C54.7003 39.7527 52.3755 39.5306 50.0506 39.29C49.6569 39.253 49.2444 38.8459 48.9632 38.5127C47.3883 36.6434 45.8322 34.7557 44.2948 32.8679C43.2261 31.5539 42.4387 30.1103 42.0262 28.4631C41.8509 27.7853 41.4935 27.1412 41.1402 26.5046C41.0401 26.3242 40.9403 26.1444 40.845 25.9645C40.7513 25.7795 40.4888 25.6129 40.2826 25.5759L40.1345 25.5469C38.9467 25.3138 37.7652 25.082 36.7391 26.1126C36.4779 26.3889 36.0496 26.5368 35.6759 26.6659L35.6704 26.6678C35.0142 26.8899 34.7143 27.2971 34.958 27.9264C35.8229 30.2155 35.7576 32.5542 35.6921 34.8983V34.8984C35.6596 36.0604 35.6272 37.2238 35.7079 38.3832C35.7413 38.8273 35.8042 39.2715 35.8672 39.7157C35.9459 40.2709 36.0246 40.8262 36.0454 41.3814C36.0642 41.8071 35.8767 42.4178 35.5767 42.6399C33.0831 44.4907 30.2896 44.8053 27.421 43.7874C25.9961 43.2692 25.04 42.2513 24.815 40.5115C24.3838 36.9026 23.8026 33.3121 23.0526 29.7586C22.7825 28.4256 22.1326 27.1527 21.4994 25.9127C21.4293 25.7754 21.3594 25.6384 21.2902 25.5019C19.4904 21.9669 18.9842 18.3024 19.6216 14.3788C20.1466 11.1214 20.859 8.01214 23.0526 5.43958C23.505 4.91414 24.0425 4.46329 24.5778 4.01424L24.5779 4.01417C24.7967 3.83056 25.0152 3.64725 25.2274 3.45926C25.2594 3.43221 25.2936 3.40627 25.3281 3.38008L25.3283 3.37994L25.3284 3.37983L25.3285 3.3798C25.4356 3.29855 25.5457 3.21496 25.6024 3.08911C22.7151 3.12612 20.1091 3.92195 17.5405 5.10644C15.1343 6.19573 13.7554 8.13836 12.3593 10.1053C12.0475 10.5446 11.7348 10.9851 11.4097 11.4175C11.2785 11.6026 11.2785 11.9173 11.2972 12.1764C11.5725 14.7672 12.5845 17.1275 13.5944 19.483L13.6595 19.6349C13.8604 20.0844 13.9656 20.5811 14.0709 21.0778L14.0709 21.0779L14.0709 21.0779L14.0709 21.078C14.113 21.2766 14.1551 21.4752 14.2033 21.6708C14.3157 22.1705 14.4282 22.6887 14.4657 23.2069C14.4734 23.3123 14.4817 23.4183 14.49 23.5248L14.49 23.5248C14.5433 24.204 14.5979 24.9014 14.4845 25.5574C14.2595 26.7234 14.3532 27.075 15.5719 27.2601C15.965 27.2989 16.3613 27.3377 16.7594 27.3767C18.2602 27.5236 19.7857 27.6729 21.2527 27.8338ZM30.2896 10.4555C29.2022 10.0113 28.7522 8.95639 28.6023 7.71638C28.4335 6.36532 29.6709 4.68113 31.1146 4.18143C32.2582 3.79276 33.8706 4.42202 34.5081 5.53248C34.883 6.19876 35.033 6.73548 34.2081 7.30922C33.2747 7.95418 32.4077 8.6834 31.4722 9.47023L31.4722 9.47028L31.4721 9.4703C31.0923 9.7898 30.7011 10.1188 30.2896 10.4555ZM33.8518 16.1368C33.5144 17.5989 34.4705 18.7648 35.633 18.6723C35.7382 18.3411 35.8389 18.0168 35.9381 17.6969L35.9381 17.6968L35.9382 17.6965L35.9383 17.6963C36.1219 17.1047 36.3007 16.5282 36.4954 15.9517C36.547 15.8075 36.6182 15.6672 36.6893 15.5272C36.7733 15.3617 36.8571 15.1967 36.9079 15.0263C37.0579 14.4896 37.2266 13.7863 36.5329 13.6197C36.0267 13.5087 35.2205 13.6752 34.9018 14.0269C34.3956 14.5821 34.0206 15.3779 33.8518 16.1368ZM40.545 14.0639C40.6287 13.9537 40.7058 13.8336 40.7817 13.7155C40.9607 13.4367 41.133 13.1684 41.37 13.0645C41.6137 12.9534 42.1387 13.1755 42.4011 13.3976C42.459 13.4468 42.5171 13.4959 42.5753 13.5452L42.5754 13.5452C43.1966 14.0708 43.8303 14.6069 44.276 15.2669C44.5197 15.6555 44.426 16.3773 44.2573 16.8585C44.126 17.2102 43.6385 17.5803 43.2636 17.6543C43.0198 17.6913 42.6261 17.2472 42.3824 16.951C41.9699 16.4513 41.6137 15.9331 41.2575 15.3779C41.076 15.1347 40.9393 14.8561 40.7792 14.5299L40.7792 14.5299C40.7078 14.3844 40.6318 14.2294 40.545 14.0639ZM41.5269 20.7154L41.5387 20.7082C41.5334 20.6766 41.5266 20.6435 41.5195 20.6093C41.5017 20.5234 41.4825 20.4307 41.4825 20.338C41.3825 20.3134 41.2825 20.2805 41.1825 20.2476C40.9825 20.1818 40.7826 20.1159 40.5826 20.1159C39.8139 20.1159 39.0452 20.1345 38.2952 20.227C37.9953 20.264 37.639 20.4676 37.5078 20.6897C37.4328 20.8192 37.6765 21.2264 37.8828 21.4115C37.9923 21.5196 38.153 21.5582 38.3163 21.5975C38.4325 21.6255 38.5501 21.6537 38.6515 21.7076C38.8577 21.8187 39.2327 22.0407 39.2139 22.1333C39.1389 22.3924 38.9514 22.6515 38.7265 22.8366C38.6175 22.9321 38.4617 22.966 38.2691 23.0079C38.1634 23.0309 38.0465 23.0563 37.9203 23.0957C38.648 23.0486 39.3225 23.0015 39.9971 22.9544C40.3827 22.9274 40.7683 22.9005 41.1638 22.8736C40.9424 22.7765 40.6888 22.747 40.4446 22.7187C39.9441 22.6606 39.4832 22.6071 39.4202 21.9852C40.1843 21.5252 40.8559 21.1201 41.5269 20.7154Z" fill="white"/>
        </svg>
        `,
        href: `cams.html`,
        text: `Watch live from China's  Panda Center `
        // class: `video-animals--active`
    },
    {
        src: `<svg class="svg-white" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0228 42.5528C18.2844 41.7814 20.3465 39.6161 22.4355 37.3154C22.1525 37.2343 21.9368 37.1666 21.7212 37.1125C18.8505 36.3817 16.2088 35.1366 13.7828 33.445C12.2868 32.4029 11.0603 31.0902 10.1304 29.4933C10.0091 29.2903 9.91472 29.0738 9.82037 28.8573C9.79342 28.8031 9.79342 28.7355 9.76646 28.546C10.683 28.8302 11.5455 29.1009 12.3946 29.3715C12.4216 29.3445 12.4351 29.3309 12.462 29.3039C12.3677 29.2227 12.2868 29.1415 12.1925 29.0738C11.0873 28.3565 10.0091 27.6122 8.89041 26.9356C7.61003 26.1507 6.26226 25.474 5.02231 24.662C3.36455 23.5658 2.19199 22.0231 1.34289 20.2367C1.30246 20.1555 1.28898 20.0743 1.2755 19.9931C1.26202 19.9525 1.2755 19.8984 1.2755 19.7766C2.65023 20.372 3.93061 21.2111 5.52098 21.0622C2.39415 19.2623 0.45336 16.7452 0.588138 12.9559C1.92243 14.431 3.22977 15.8926 4.53711 17.3541C4.56407 17.3271 4.6045 17.2865 4.63145 17.2594C4.09235 16.2038 3.45889 15.1753 3.05456 14.0656C2.65023 12.9559 2.38067 11.7514 2.2459 10.5741C2.11112 9.39668 2.21894 8.19224 2.21894 7.00133C2.28633 6.98779 2.35372 6.98779 2.40763 6.97426C3.04108 8.40877 3.67453 9.84328 4.30799 11.2913C4.37538 11.2913 4.44276 11.2778 4.51015 11.2778C4.4832 8.6659 4.76623 6.10814 5.96575 3.76692C6.01966 3.76692 6.07357 3.76692 6.12748 3.78045C6.12748 4.36237 6.15444 4.93076 6.12748 5.51269C5.97923 8.36817 7.07092 10.8041 8.70173 13.0236C9.79342 14.4987 11.1412 15.7302 12.5968 16.8399C14.5106 18.3015 16.6536 19.3706 18.7965 20.4262C20.7912 21.4005 22.5433 22.7268 24.1876 24.2154C25.185 25.1221 26.2228 25.9747 27.2471 26.8544C27.5301 27.098 27.8131 27.3686 28.1366 27.6664C28.6622 26.4484 29.1474 25.3116 29.6326 24.1613C30.8052 21.4276 32.5708 19.127 34.7542 17.1376C36.4928 15.5542 38.2584 14.025 39.997 12.4552C42.3556 10.3169 43.8247 7.66445 44.2964 4.4977C44.4716 3.37446 44.3907 2.19708 44.4312 1.0603C44.4312 0.870836 44.4312 0.66784 44.4986 0.464844C45.3476 2.41361 45.5903 4.47064 45.7924 6.60887C46.628 4.9037 47.4502 3.19853 48.2858 1.47983C48.3532 1.49336 48.4206 1.50689 48.4745 1.52042C48.3801 3.26619 48.3667 5.01196 48.1645 6.7442C47.9623 8.4629 47.5715 10.1545 47.2615 11.792C47.6793 11.1425 48.1645 10.3981 48.7306 9.54555C48.771 11.2101 48.7171 12.7123 48.0162 14.1333C47.3289 15.5407 46.2237 16.5963 45.0242 17.6383C45.6846 17.7737 46.2102 17.5436 46.7224 17.2865C47.2211 17.0429 47.6793 16.7452 48.2588 16.4068C48.2049 16.664 48.178 16.8399 48.1241 17.0023C47.3963 18.9781 46.2641 20.6833 44.5659 21.9419C43.5282 22.7268 42.423 23.417 41.3987 24.2019C40.7518 24.7026 40.2935 25.0139 40.2666 25.7041C40.6978 25.5552 41.1157 25.4199 41.6143 25.2575C40.7787 28.1265 38.5684 29.8858 36.641 31.9428C36.8297 32.024 36.978 32.0781 37.1262 32.1458C38.0832 32.5383 38.8918 33.1337 39.4444 34.0269C39.8622 34.69 39.9566 35.3938 39.7814 36.1651C39.7274 36.3952 39.8622 36.7065 40.0105 36.9095C40.4687 37.6132 40.5361 38.3304 40.1318 39.0612C39.7409 39.7785 39.094 40.1303 38.2449 40.1845C38.9188 38.9665 38.8918 38.6958 37.9753 38.0462C37.881 38.547 37.7867 39.0206 37.6923 39.5213C37.0858 39.0206 36.5602 38.4252 35.8998 38.0733C35.2259 37.7214 34.4307 37.6267 33.622 37.3966C33.6625 37.5726 33.6625 37.6808 33.7029 37.7756C34.2959 39.2777 34.8485 40.807 35.5224 42.2821C35.765 42.8234 36.2502 43.2835 36.695 43.6895C37.1128 44.0685 37.4093 43.9331 37.571 43.3783C37.6788 42.9858 37.7193 42.5798 37.7866 42.1874C37.854 41.8355 38.0427 41.6866 38.2853 41.7949C38.3392 42.1197 38.4066 42.3768 38.4201 42.634C38.4336 42.9046 38.4336 43.1888 38.3797 43.4459C38.3258 43.676 38.1775 43.8925 38.0697 44.1091C38.0966 44.1497 38.1371 44.1767 38.164 44.2173C38.5279 43.9737 38.9053 43.7301 39.2557 43.473C39.4309 43.3377 39.5657 43.1617 39.7274 43.0129C40.3609 42.431 40.6709 42.4716 41.1156 43.2429C40.873 43.2159 40.6574 43.1753 40.4283 43.1482C40.3878 44.1497 39.3366 44.1361 38.9053 44.8128C39.4175 44.7857 39.8757 44.7451 40.3339 44.7451C41.0348 44.7451 41.3178 45.0699 41.183 45.7872C40.9809 45.3 40.6439 45.3676 40.3205 45.503C39.6331 45.7872 38.9323 45.6924 38.2314 45.5977C37.4632 45.4894 36.7758 45.5977 36.1154 46.0578C35.6841 46.3691 35.2394 46.6668 34.6194 46.5315C34.4846 46.5044 34.242 46.951 34.0668 47.1675C33.7838 46.7886 33.7972 46.4232 34.269 46.1255C34.5655 45.936 34.9159 45.8413 35.2394 45.706C35.4415 45.6248 35.6572 45.5571 35.8324 45.4218C36.2232 45.124 36.2232 44.9346 35.8459 44.6369C34.9159 43.879 33.9859 43.1347 33.056 42.3768C32.9751 42.3092 32.8808 42.255 32.7999 42.2415C31.5734 42.1332 30.8995 41.3212 30.3874 40.3333C30.2796 40.1168 30.1987 39.8191 29.9022 40.0085C29.7404 40.1168 29.5652 40.4416 29.6192 40.604C29.9022 41.6731 30.5222 42.5122 31.4791 43.0535C31.8969 42.9858 31.9778 41.9573 32.5708 42.5798C32.5169 42.8099 32.4764 42.9452 32.4495 43.0805C32.6112 43.1076 32.7864 43.1753 32.9481 43.1617C33.2177 43.1617 33.4873 43.1076 33.7568 43.0805C33.7703 43.1347 33.7838 43.2023 33.7972 43.2565C33.6086 43.3512 33.4199 43.4459 33.1638 43.5813C34.4577 43.6489 34.4577 43.6489 34.5116 44.3391C34.0938 43.9331 33.6894 44.2579 33.2851 44.3121C32.3686 44.4203 31.7352 44.8534 31.3982 45.7601C31.2904 46.0443 30.9939 46.2473 30.7243 46.5586C30.7378 46.5992 30.7782 46.7345 30.8052 46.8833C30.2256 46.6803 30.0909 46.3962 30.3739 45.8819C30.5895 45.4894 30.8726 45.124 31.1287 44.7451C31.3578 44.4068 31.3578 44.1226 30.9265 43.9331C30.2256 43.6219 29.6326 43.1212 28.8105 43.04C28.5005 43.0129 28.2309 42.5934 27.921 42.3227C27.7727 42.5663 27.5705 42.8505 27.4088 43.1753C26.9371 44.1361 26.1419 44.718 25.1445 44.9887C22.0042 45.8548 19.0391 45.3676 16.2762 43.6489C15.818 43.3783 15.481 42.9587 15.0228 42.5528Z" fill="#F58021"/>
        </svg>`,
        href: `camseagles.html`,
        text: `Watch The Bald Eagles Nest from West End cam`
    },
    {
        src: `<svg class="svg-white" width="56" height="48" viewBox="0 0 56 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.8261 21.1612L38.8276 21.1642C39.3305 22.2017 39.8334 23.2392 40.3546 24.3226C40.2226 24.427 40.0889 24.5348 39.9532 24.6442L39.9531 24.6442C39.6466 24.8914 39.3299 25.1466 39 25.3887C38.6334 25.6562 38.2698 25.9275 37.9064 26.1987L37.9062 26.1988C37.0087 26.8685 36.1123 27.5374 35.1742 28.1458C31.7969 30.3422 28.0717 31.2337 24.0629 30.8845C23.0835 30.8018 22.0493 30.4617 21.6374 30.1768C21.8751 28.525 22.1035 26.9189 22.332 25.313L22.333 25.306C22.3056 25.2968 22.2759 25.2899 22.2462 25.283L22.2461 25.283C22.2163 25.2761 22.1866 25.2692 22.1591 25.26C22.0699 25.4418 21.9815 25.6236 21.8931 25.8051C21.6733 26.2569 21.4541 26.7074 21.2256 27.1532C20.632 28.3308 20.234 29.5814 19.8351 30.8347L19.8351 30.8347C19.7235 31.1855 19.6118 31.5365 19.4957 31.8862C18.7635 34.0643 17.4547 35.7369 15.2306 36.5548C15.1207 36.6008 15.0292 36.7846 14.9834 36.9225C14.8938 37.2083 14.8141 37.4974 14.7344 37.7863C14.6271 38.1756 14.5199 38.5645 14.3885 38.9443C13.8851 40.4148 12.9424 41.5544 11.6702 42.4274C11.1027 42.8134 10.5352 43.2086 9.99524 43.6313C9.52846 43.9898 9.54676 44.146 10.0044 44.5044C10.0939 44.5746 10.184 44.6437 10.2738 44.7127C10.5605 44.9327 10.8449 45.151 11.1027 45.3959C11.5237 45.8003 11.7159 46.3149 11.5603 46.9031C11.5237 47.0409 11.3132 47.2247 11.1851 47.2247C8.18301 47.2431 5.17179 47.2431 2.16972 47.2339C2.05988 47.2339 1.90429 47.1972 1.84022 47.1236C1.74826 47.0112 1.65412 46.8993 1.5597 46.787L1.55966 46.7869C1.22181 46.3851 0.880435 45.9791 0.622918 45.5337C0.45817 45.2488 0.439864 44.7709 0.549696 44.4493C1.6114 41.2051 2.97515 38.1264 5.54705 35.7645C5.65688 35.6634 5.72095 35.4428 5.7301 35.2866C5.79417 32.9523 6.06875 30.6363 6.66367 28.3847C7.17622 26.4364 7.72538 24.488 8.69556 22.6959C10.4803 19.4242 12.7868 16.6947 16.3289 15.2243C19.3767 13.9652 22.3513 14.1582 25.2527 15.647C25.651 15.8532 26.0113 16.136 26.3622 16.4114C26.5273 16.541 26.6904 16.669 26.8544 16.7866C26.5249 16.0698 25.9483 15.4816 25.3259 14.9394C25.9121 14.7155 26.5004 14.4988 27.0876 14.2825C29.6825 13.3268 32.2571 12.3785 34.5335 10.8497C34.6337 11.1998 34.7322 11.5534 34.8311 11.909L34.8313 11.9095C34.9583 12.3659 35.0863 12.8255 35.22 13.2851C35.2566 13.3954 35.3298 13.4965 35.4213 13.5884C35.2383 12.4488 35.2383 11.3092 35.6685 10.2615C36.0712 9.26897 36.5563 8.26723 37.1786 7.40335C38.7071 5.30797 40.5468 3.4883 42.597 1.89838L42.5971 1.89828C42.6795 1.83398 42.7618 1.76968 42.8533 1.70538C43.0003 1.61119 43.1459 1.51083 43.2918 1.41025L43.2919 1.41021C44.0003 0.92203 44.7159 0.428861 45.6265 0.611744C47.1276 0.905832 48.3815 1.69619 49.2418 2.99202C49.489 3.35963 49.7727 3.61696 50.1663 3.75481C51.1914 4.11323 51.9602 4.72898 52.4544 5.73072C52.6336 6.09673 52.892 6.42086 53.1508 6.74551C53.2754 6.90182 53.4001 7.05825 53.5161 7.21954C53.7541 7.55039 53.7999 7.8261 53.5345 8.21209C53.3148 8.53375 53.205 8.96569 53.1409 9.36087C53.0585 9.82958 53.2416 10.1329 53.7358 10.3902C55.0263 11.0519 55.7769 12.5315 55.0629 14.0295C54.944 14.2777 54.8341 14.5258 54.7334 14.7831C54.2575 16.0146 53.3514 16.4466 52.1066 16.0146C52.0938 16.0103 52.0808 16.0061 52.0677 16.0018C52.0597 15.9992 52.0517 15.9966 52.0437 15.9939C51.9802 15.9733 51.9167 15.9526 51.8687 15.9319C51.6398 16.2536 51.411 16.566 51.1639 16.8969C51.1288 16.8538 51.0987 16.8224 51.0757 16.7984C51.0447 16.7661 51.0266 16.7473 51.0266 16.7315C51.0998 15.9411 50.6239 15.4724 50.093 14.9945C47.6127 12.7521 44.574 13.1564 42.4963 14.4523C42.7299 14.4047 42.9613 14.3528 43.1921 14.3011C43.6304 14.2027 44.0662 14.1049 44.5099 14.0387C47.1459 13.6711 49.4341 14.8566 50.6514 17.2277C51.4934 18.8636 52.0883 20.573 51.9419 22.4662L51.9403 22.4883V22.4884C51.9133 22.8592 51.8839 23.263 51.7314 23.5874C51.2005 24.727 51.3653 25.8758 51.6582 27.0062L51.7121 27.2168L51.7122 27.2169C51.987 28.2909 52.2691 29.3935 52.7931 30.3422C54.8158 33.9908 54.9806 37.9334 54.8341 41.9311C54.7701 43.6497 54.2209 45.1753 52.8114 46.2873C52.0243 46.9123 51.1822 47.3442 50.1297 47.2615C49.6446 47.2247 49.1503 47.2155 48.6652 47.2615C47.75 47.3626 47.1184 46.9031 46.5784 46.2598C45.9927 45.5705 45.7272 44.7709 45.892 43.8703C45.9377 43.6314 46.1116 43.3373 46.313 43.227C46.5659 43.0921 46.7506 43.2793 46.9378 43.469C46.9673 43.499 46.9969 43.529 47.0269 43.5578C47.309 43.8319 47.6815 44.0334 48.0366 44.2253L48.0367 44.2254L48.0429 44.2287C48.354 44.3941 48.5188 44.2563 48.5554 43.9071C48.592 43.4935 48.4639 43.1443 48.1527 42.8778C46.4045 41.3797 45.3062 39.4222 44.3177 37.3912C43.558 35.8196 43.073 34.1746 42.8991 32.4284C42.7709 31.1142 42.9997 29.8368 43.2469 28.5593C43.3658 27.9803 43.4848 27.3922 43.5214 26.7948C43.6038 25.6093 43.1919 24.6075 42.176 23.9734C40.9221 23.1922 39.8055 22.2548 38.9085 21.0785C38.9177 21.106 38.8719 21.1336 38.8261 21.1612ZM41.5078 25.3334C42.0387 25.7654 42.2309 26.2616 42.121 26.8774C42.0533 27.2756 41.9788 27.6726 41.9043 28.0697L41.9042 28.0699C41.7672 28.8001 41.6301 29.5305 41.5353 30.2686C41.2241 32.7591 41.8007 35.1118 42.7617 37.3818C42.9356 37.7954 42.9539 38.1263 42.7709 38.5398C41.938 40.433 41.0319 42.2803 39.8603 43.9988C38.341 46.2229 36.2176 47.2522 33.5633 47.2522C33.4064 47.2522 33.2504 47.2547 33.0947 47.2572H33.0947C32.7325 47.2629 32.3722 47.2687 32.0073 47.243C31.8243 47.2338 31.5955 47.1143 31.4948 46.9673C30.6436 45.8093 30.79 43.4107 31.7694 42.3538C31.8792 42.2343 32.1263 42.124 32.2636 42.17C32.368 42.2074 32.442 42.3667 32.5104 42.514C32.5259 42.5475 32.5412 42.5804 32.5565 42.6111C32.5943 42.6869 32.6217 42.7705 32.649 42.8536C32.6945 42.9921 32.7396 43.1292 32.8311 43.2268C32.9958 43.4198 33.2796 43.6956 33.4626 43.6588C33.6548 43.622 33.847 43.282 33.9294 43.043C34.0118 42.8133 33.9843 42.5284 33.9386 42.2894C33.8722 41.953 33.789 41.6189 33.706 41.2855C33.56 40.6992 33.4145 40.1149 33.3619 39.5232C33.1148 36.8672 33.3528 34.2572 34.4969 31.8034C34.7623 31.2428 35.0643 30.673 35.4579 30.1951C35.8698 29.6804 36.3823 29.2301 36.904 28.8257C37.4394 28.4033 37.991 28.0039 38.5434 27.6039C38.9165 27.3338 39.29 27.0633 39.659 26.7855C40.0704 26.471 40.4778 26.1482 40.8921 25.8199L40.8922 25.8199L40.8926 25.8195C41.0956 25.6587 41.3002 25.4966 41.5078 25.3334ZM21.8366 31.8675C21.6016 31.7977 21.3654 31.7275 21.1249 31.6565C21.0433 31.8339 20.9643 32.0138 20.885 32.1944C20.7507 32.5003 20.6155 32.808 20.4659 33.1086C19.5598 34.9466 18.3699 36.5457 16.5302 37.575C16.3838 37.6577 16.2831 37.8691 16.2282 38.0437C15.7889 39.5234 15.2397 40.9387 14.2238 42.1334C14.1505 42.2253 14.0865 42.3907 14.1139 42.4918C14.4343 43.5119 14.7638 44.5321 15.1207 45.5338C15.1848 45.7084 15.377 45.8738 15.5509 45.9749C16.2007 46.3425 16.8506 46.701 17.5187 47.041C17.7384 47.1513 17.9947 47.2524 18.2326 47.2524C20.168 47.2662 22.0982 47.2644 24.031 47.2627C24.6758 47.2621 25.3209 47.2616 25.9666 47.2616H26.5341C26.4725 47.1349 26.4224 47.0113 26.3749 46.8943C26.2812 46.6634 26.1979 46.4583 26.0582 46.3058C25.7104 45.929 25.3168 45.5705 24.8958 45.2857C24.5004 45.0186 24.0712 44.7969 23.6435 44.576C23.5267 44.5156 23.4099 44.4553 23.294 44.3942C22.8364 44.1461 22.6351 43.7785 22.6717 43.2638C22.6778 43.1413 22.692 43.0187 22.7062 42.8962C22.7134 42.8349 22.7205 42.7737 22.7266 42.7124C22.7546 42.4341 22.7894 42.155 22.8243 41.8756C22.9035 41.2413 22.9829 40.6053 22.9829 39.9737C22.9829 38.6595 22.3971 37.5291 21.5642 36.5365C23.0103 35.4521 23.294 33.9173 23.4313 32.3366C22.8813 32.1779 22.3618 32.0235 21.8366 31.8675Z" fill="#F58021"/>
        </svg>
        `,
        href: `camgorillas.html`,
        text: `Livestream from Gorilla Forest Corridor habitat cam`
    },
    {
        src: `<svg class="svg-white" width="33" height="56" viewBox="0 0 33 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9437 0.0080382C16.8064 -0.04113 17.6291 0.139154 18.4758 0.442357C18.4478 0.52365 18.4219 0.603548 18.3964 0.68205L18.3964 0.682067C18.3346 0.872615 18.2754 1.05494 18.1962 1.22905C17.9527 1.76567 17.7051 2.3023 17.4576 2.83893L17.4574 2.83931C17.2098 3.37606 16.9621 3.91281 16.7185 4.44956L16.7178 4.45107L16.7178 4.4511C16.586 4.74212 16.5221 4.88305 16.4137 4.94194C16.3119 4.99725 16.1708 4.98022 15.8972 4.94719L15.8479 4.94125C15.5683 4.90847 15.4006 4.78555 15.3606 4.50693C15.3437 4.38957 15.3222 4.27164 15.3008 4.15359L15.3008 4.15355L15.3008 4.15352L15.3007 4.15349L15.3007 4.15345L15.3007 4.15342L15.3007 4.15339L15.3007 4.15337L15.3007 4.15333C15.2413 3.82633 15.1816 3.49844 15.2168 3.17939C15.305 2.39103 15.4478 1.60776 15.5905 0.825574L15.5905 0.825125L15.5906 0.824695C15.6288 0.615251 15.667 0.405884 15.7041 0.196516C15.7201 0.122764 15.8559 0.0162329 15.9437 0.0080382ZM10.5605 2.66235L10.5607 2.66261C11.0903 3.47072 11.6086 4.26143 12.1494 5.03822C12.3491 5.33323 12.6207 5.59546 13.06 5.41518C13.731 5.15295 13.8987 4.97267 13.699 4.25153C13.4601 3.37499 13.6084 2.53212 13.7572 1.6863L13.7572 1.68618L13.7572 1.68607L13.7572 1.68597L13.7573 1.68588L13.7573 1.68578L13.7573 1.68568L13.7573 1.68558L13.7573 1.68548L13.7573 1.6854L13.7574 1.68531L13.7574 1.68522L13.7574 1.68511L13.7574 1.685C13.7727 1.59817 13.788 1.5113 13.8028 1.42436C13.8588 1.11297 13.8508 0.768789 13.7789 0.457391C13.7469 0.309886 13.4594 0.0886299 13.3475 0.113214C12.1254 0.424612 11.0551 1.03921 10.0327 1.85868C10.2107 2.12854 10.3862 2.39639 10.5605 2.66235ZM7.42181 8.91345C7.98141 9.33261 8.54265 9.75301 9.11383 10.1785C8.92213 11.1209 8.4269 11.6535 7.46039 11.7601C6.12645 11.8994 5.00019 11.3421 3.98576 10.5063C3.92985 10.4571 3.90589 10.2768 3.94583 10.1949C4.00518 10.0594 4.06427 9.92361 4.12338 9.78776C4.38246 9.19237 4.64214 8.59558 4.9283 8.0151C5.00513 7.85185 5.13095 7.71567 5.25139 7.5853L5.25141 7.58529L5.25142 7.58527L5.25143 7.58526C5.3063 7.52586 5.36007 7.46768 5.40756 7.40869C6.08609 7.91293 6.75278 8.41231 7.42181 8.91345ZM7.78029 13.9233C6.27062 13.5382 4.80888 13.1612 3.23531 12.7515C3.2016 12.9417 3.16394 13.138 3.12546 13.3385L3.12545 13.3386C3.0545 13.7084 2.98076 14.0927 2.92379 14.4805C2.8691 14.8478 2.83298 15.2183 2.79616 15.5958C2.77383 15.8248 2.75124 16.0564 2.7241 16.2916C3.98615 16.939 5.28015 17.1192 6.55817 16.3653C7.46877 15.8409 7.82821 14.9722 7.78029 13.9233ZM2.78004 18.2657C2.54041 19.5605 2.73212 20.7815 3.17943 21.9697C3.21937 22.0681 3.32321 22.1746 3.41906 22.2074C5.30415 22.8547 7.42886 21.56 7.72441 19.8145C7.76435 19.5769 7.78032 19.3228 7.76435 19.0852C7.66849 18.0445 7.47679 17.897 6.48632 18.0445L6.20096 18.087C5.52117 18.1885 4.84062 18.2902 4.15392 18.3477C3.85227 18.3702 3.54309 18.3386 3.22379 18.306H3.22376H3.22374H3.22372C3.07802 18.2911 2.93021 18.276 2.78004 18.2657ZM8.14763 25.9525C8.78664 24.5594 8.58695 23.5596 7.50862 22.691C6.39035 23.5596 5.09635 23.8792 3.7065 23.9284C3.61065 23.9284 3.4509 24.0677 3.42693 24.1742C3.21127 25.2149 3.51479 26.1409 4.08191 26.9932C4.12732 27.0605 4.21416 27.0951 4.31223 27.1341L4.31228 27.1342L4.3124 27.1342C4.36954 27.157 4.4305 27.1813 4.48929 27.2144C4.46162 27.2334 4.43462 27.2523 4.40789 27.271C4.34204 27.3172 4.2779 27.3621 4.20972 27.4029C2.75597 28.2961 1.58178 29.468 0.886856 31.066C-0.023735 33.172 -0.351227 35.3436 0.4715 37.5807C0.619579 37.9829 0.755787 38.3923 0.891773 38.8011L0.891785 38.8012L0.891796 38.8012L0.891808 38.8012L0.891819 38.8013L0.89183 38.8013L0.891842 38.8013L0.891853 38.8014L0.891865 38.8014L0.891876 38.8014L0.891888 38.8015L0.891899 38.8015L0.891911 38.8015L0.891922 38.8016L0.891933 38.8016L0.891945 38.8016L0.891956 38.8017L0.891968 38.8017C1.00532 39.1424 1.11851 39.4827 1.23831 39.8179C1.6377 40.9488 1.66965 42.1124 1.35014 43.2433C0.4076 46.5457 1.29423 49.5778 2.54829 52.5689C2.65834 52.8189 2.83801 53.045 3.01118 53.263L3.01956 53.2736C3.25919 53.5768 3.57071 53.6751 3.94613 53.544C4.32155 53.4047 4.59313 53.1507 4.57715 52.7491C4.56117 52.2329 4.49727 51.7166 4.37746 51.2167C4.28561 50.8193 4.17379 50.426 4.06198 50.0327L4.06195 50.0326C3.95012 49.6392 3.83829 49.2459 3.74644 48.8485C3.49083 47.7258 3.81833 46.7998 4.71294 46.1032C4.75123 46.0744 4.78871 46.0448 4.82589 46.0154C4.90505 45.9527 4.98288 45.8912 5.0644 45.841C6.41431 45.0461 7.24502 43.8005 7.93196 42.4156C8.12379 42.022 8.37203 41.6554 8.6199 41.2894L8.61994 41.2893C8.7333 41.1219 8.8466 40.9546 8.95438 40.7849L9.05023 40.834C9.09816 41.0635 9.14708 41.2929 9.196 41.5224C9.34278 42.2107 9.48955 42.8991 9.60937 43.5875C10.1445 46.5785 11.8699 48.8321 13.8668 50.9299C14.0637 51.1401 14.3229 51.2944 14.5675 51.4401L14.5777 51.4462C14.9132 51.651 15.2566 51.651 15.5761 51.3806C15.9036 51.102 16.0234 50.7496 15.8797 50.3563C15.7359 49.9793 15.5522 49.6106 15.3285 49.2746C15.0966 48.9309 14.8462 48.6014 14.5959 48.2721L14.5959 48.2721C14.3807 47.989 14.1657 47.7061 13.9626 47.4144C13.0121 46.0541 12.9722 45.0953 13.9067 43.735C14.6496 42.6451 15.1608 41.4568 15.6161 40.1703C15.7432 40.2309 15.8681 40.2871 15.9905 40.3421L15.9906 40.3421L15.9907 40.3422L15.9908 40.3423C16.1989 40.4358 16.3995 40.526 16.5906 40.6292C18.5555 41.7273 19.7617 43.4563 20.4806 45.5788C20.7725 46.4253 21.0242 47.2874 21.2755 48.1485L21.2755 48.1485C21.3405 48.3711 21.4054 48.5935 21.471 48.8157C21.7027 49.6024 22.0781 50.2989 22.5893 50.9217C22.7753 51.1469 22.9612 51.3721 23.1469 51.5972L23.1543 51.6062L23.1617 51.6151L23.1689 51.6239L23.1738 51.6299C24.0876 52.7373 24.9997 53.8428 25.9281 54.9371C26.1917 55.2485 26.5112 55.5435 26.8547 55.7648C27.4777 56.1663 28.0848 56.0434 28.6599 55.478C29.0753 55.0682 29.1472 54.5602 28.7717 53.9128C28.5564 53.5399 28.2786 53.202 28.0054 52.8695L28.0047 52.8687L28.004 52.8678L28.0037 52.8674C27.9532 52.806 27.9029 52.7448 27.8532 52.6836C27.6934 52.4869 27.5097 52.2984 27.318 52.1345C25.6965 50.7168 25.2971 48.8403 25.369 46.7834C25.3806 46.438 25.4217 46.0927 25.4617 45.7567L25.4618 45.7566L25.4618 45.7565C25.4768 45.6302 25.4917 45.5052 25.5048 45.3821C25.7544 45.3332 26.001 45.2843 26.2422 45.2364L26.2445 45.236L26.2451 45.2359C26.69 45.1476 27.1166 45.063 27.5097 44.9888C27.6586 45.3254 27.7979 45.6694 27.9375 46.014L27.9376 46.014L27.9376 46.0142C28.2398 46.7601 28.5432 47.5091 28.9475 48.1929C29.5421 49.2009 30.2467 50.1391 30.951 51.077C31.117 51.2981 31.283 51.5192 31.4476 51.7412C31.7272 52.1181 32.1026 52.4213 32.6138 52.2984C32.8854 52.2329 33.0931 51.479 32.9573 50.9463C32.8295 50.4464 32.6777 49.9384 32.4301 49.4958C31.3278 47.5045 30.9044 45.3165 30.6089 43.0958C30.4571 41.9649 29.8021 41.4568 28.6998 41.6781C26.639 42.096 24.5702 42.3009 22.4695 42.1124C22.3257 42.096 22.1819 42.0632 22.0381 42.0305C20.5524 41.6699 19.9614 40.2604 20.7282 38.8919C20.7521 38.8427 20.7761 38.7936 20.816 38.7526C21.5302 38.0139 21.9172 37.0963 22.3059 36.1749C22.4432 35.8493 22.5808 35.5231 22.7331 35.2043C23.0366 34.5815 23.6117 34.057 24.1629 33.5981C24.8418 33.0409 25.6725 32.7623 26.5272 32.5738C26.647 32.5492 26.8228 32.4345 26.8467 32.3361C26.8707 32.2214 26.7748 32.0083 26.679 31.9592C26.618 31.9297 26.5566 31.8993 26.495 31.8688C26.1287 31.6874 25.7507 31.5002 25.361 31.4511C24.722 31.3692 24.059 31.3856 23.412 31.4511C22.6931 31.5249 22.0541 31.2954 21.4551 31.0004C20.816 30.689 20.209 30.2629 19.6339 29.8368C18.0603 28.6649 16.4708 27.5258 14.6655 26.7473C12.7325 25.9033 10.7276 25.6247 8.65085 25.9361C8.49908 25.9197 8.33135 25.9279 8.14763 25.9525ZM16.9102 24.3705C16.2712 24.7803 15.5763 24.9606 14.8255 24.9606C14.1066 24.936 13.4196 24.7885 12.8365 24.3296C12.1895 23.8297 11.9419 23.0922 12.3173 22.3792C12.557 21.9306 12.8909 21.5373 13.2249 21.1439L13.2249 21.1439C13.3363 21.0128 13.4476 20.8817 13.5554 20.7485C13.6113 20.6829 13.7471 20.6584 13.843 20.6666C15.5763 20.8386 16.9182 22.0597 17.2297 23.6003C17.3096 23.9772 17.2058 24.1821 16.9102 24.3705ZM8.23565 3.29443C9.14624 3.99918 10.4243 5.60534 11.2949 7.12135L11.2051 7.23794C10.9991 7.50527 10.8045 7.75776 10.616 8.02277C10.4482 8.26042 10.2485 8.31778 9.96099 8.22764C8.48327 7.74415 7.46883 6.66245 6.39849 5.4988C7.02101 4.7537 7.62759 4.02495 8.23416 3.29622L8.23565 3.29443ZM20.696 8.32615C21.3542 7.7445 22.1559 7.64284 22.9624 7.54058L22.9624 7.54057L22.9625 7.54057L22.9625 7.54057L22.9625 7.54056L22.9625 7.54056L22.9625 7.54056L22.9626 7.54056L22.9626 7.54055L22.9626 7.54055L22.9626 7.54055L22.9626 7.54054C23.1446 7.51747 23.3268 7.49437 23.5077 7.4657C23.923 7.40014 24.3384 7.27722 24.7378 7.14611C24.8257 7.11333 24.9535 6.94944 24.9375 6.86749C24.8177 6.05621 24.57 5.29411 23.9071 4.76965C23.7952 4.67951 23.6115 4.62214 23.4837 4.63853C22.5092 4.79423 21.6066 5.13841 20.7999 5.72023C20.704 5.79398 20.6082 5.86774 20.5203 5.94968C19.6896 6.73637 19.7455 7.6296 20.696 8.32615ZM21.0079 21.7728C20.2011 20.2977 16.6865 18.8882 15.7759 19.6831C15.7759 19.7077 15.7759 19.7487 15.7919 19.7569C16.8782 20.7239 17.661 21.9449 18.4199 23.1823C18.6036 23.4855 18.7873 23.5019 19.0748 23.4035C19.7458 23.1741 20.5126 22.5349 21.0079 21.7728ZM26.3754 37.6793C26.2556 38.3103 26.008 38.4987 25.3689 38.5151C25.2568 38.4937 25.1446 38.4767 25.0329 38.4597H25.0329L25.0329 38.4597L25.0328 38.4597L25.0328 38.4597L25.0327 38.4597L25.0327 38.4597C24.8026 38.4247 24.575 38.3902 24.3545 38.3185C23.6356 38.0972 23.3241 37.5809 23.4599 36.8188C23.5078 36.5402 23.6117 36.2698 23.7315 36.0158C24.1628 35.1225 24.8737 34.4915 25.6884 33.9835C25.968 33.8114 26.3035 33.7048 26.623 33.6475C26.7707 33.6183 26.9345 33.6596 27.0973 33.7007C27.1634 33.7174 27.2293 33.734 27.294 33.7458C27.2804 33.806 27.2701 33.8694 27.2597 33.9331C27.2333 34.0951 27.2065 34.2592 27.1262 34.3768C26.6629 35.057 26.5272 35.8191 26.4872 36.6222C26.4712 36.9745 26.4393 37.3351 26.3754 37.6793ZM24.6782 36.5248C24.4265 36.6229 24.2364 36.8804 24.2427 37.163C24.2507 37.5318 24.5542 37.8268 24.9136 37.8186C24.9899 37.8168 25.0624 37.8019 25.1293 37.776C25.0622 37.8016 24.9897 37.8164 24.9138 37.8182C24.5544 37.8264 24.2509 37.5314 24.2429 37.1626C24.2429 36.8803 24.4289 36.6232 24.6782 36.5248ZM21.8631 10.6817L21.8636 10.6818L21.8637 10.6818L21.8639 10.6818C23.0804 10.7846 24.2725 10.8854 25.4647 10.9965C25.8161 11.0293 25.928 10.89 25.9599 10.554C26.0238 9.83289 25.7842 9.26746 25.1931 8.87411C24.1946 8.21853 22.4134 8.33326 21.5028 9.11995C21.0395 9.5133 20.8398 10.0132 20.9357 10.6032C21.2466 10.6296 21.5557 10.6558 21.8631 10.6817ZM20.2168 1.17236C21.1753 1.70502 22.0859 2.24587 22.7249 3.17187C21.2552 4.0569 19.8334 4.91734 18.4116 5.78598C18.148 5.35985 18.116 5.07304 18.3077 4.47483C18.6722 3.32264 19.3621 2.36229 20.0615 1.38869L20.0618 1.38826L20.0624 1.38743C20.1139 1.31584 20.1654 1.24418 20.2168 1.17236ZM18.0446 18.1926C19.0409 18.5401 19.8415 19.1682 20.6575 19.8083C21.15 20.1946 21.648 20.5853 22.1981 20.9215C22.2722 20.8018 22.346 20.683 22.4194 20.565L22.4222 20.5605L22.4223 20.5603L22.423 20.5593L22.423 20.5592L22.4232 20.5589C22.7201 20.0811 23.01 19.6148 23.2845 19.1432C23.3244 19.0777 23.3004 18.8892 23.2365 18.84C22.1981 18.0041 21.0799 17.3322 19.714 17.2666C19.035 17.2502 18.428 17.4305 18.0446 18.1926ZM25.6407 12.753C25.6247 13.4243 25.6084 14.1119 25.1854 14.6768C25.0194 14.6208 24.8552 14.5642 24.6921 14.5079L24.6921 14.5079L24.6921 14.5079L24.6921 14.5079L24.6919 14.5078C24.2587 14.3584 23.8336 14.2118 23.4042 14.0868C22.6454 13.8819 21.8865 13.6935 21.1197 13.5214C20.8322 13.4558 20.7683 13.3083 20.8082 13.0297C20.9121 12.2594 21.4313 11.7841 22.3099 11.7513C23.4361 11.7021 24.4745 12.0873 25.489 12.5462C25.5609 12.579 25.6407 12.6855 25.6407 12.7511L25.6407 12.753ZM22.821 37.6948C22.6505 37.9087 22.498 38.0967 22.3557 38.272C22.1981 38.4662 22.0532 38.6448 21.9104 38.8257C21.8615 38.8879 21.8104 38.9488 21.7595 39.0094C21.6362 39.1564 21.5137 39.3024 21.4232 39.4649C21.1277 39.9893 21.2714 40.563 21.8146 40.8006C22.2459 40.9891 22.7252 41.112 23.1885 41.1612C24.4266 41.3005 25.6487 41.1776 26.8468 40.8088C26.7669 40.2352 26.5113 39.9729 25.9522 39.9156C25.6731 39.89 25.3909 39.8804 25.1094 39.8708L25.1092 39.8708L25.1089 39.8708L25.1086 39.8708C24.9393 39.865 24.7702 39.8593 24.6023 39.85C23.516 39.7845 23.3402 39.6124 23.1246 38.5307C23.0871 38.3493 23.0137 38.1717 22.9356 37.9829C22.8973 37.8901 22.8579 37.7947 22.821 37.6948ZM23.8276 17.6593C22.5496 16.9791 21.2476 16.3891 19.8018 16.0941C20.0095 15.0452 20.6884 14.5781 21.7588 14.7174C22.8371 14.8485 23.7956 15.3074 24.6743 15.9384C24.7621 16.004 24.874 16.1515 24.85 16.217C24.6743 16.6759 24.4906 17.143 24.2589 17.5773C24.211 17.6593 23.9314 17.7167 23.8276 17.6593ZM27.3338 35.9576C27.3338 36.8098 27.4696 36.9492 28.1086 36.8262C28.3722 36.7771 28.6518 36.6623 28.8674 36.4985C29.6982 35.8675 29.9298 34.3433 29.3547 33.4992C29.2189 33.3025 29.0991 33.2206 28.8754 33.3845C27.9489 34.081 27.3737 34.9579 27.3338 35.9576Z" fill="#F58021"/>
        </svg>
        `,
        href: `camlemur.html`,
        text: `The ring-tailed lemurs play in Madagascar, Lemuria Land`
    },
    {
        src: `<svg class="svg-white" width="59" height="48" viewBox="0 0 59 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.0622 40.6874C20.2864 41.1792 20.6308 40.9454 20.9912 40.9374C21.5678 40.9212 21.9201 40.5342 22.4407 40.3085C21.9842 40.1714 21.5998 40.0505 21.1914 39.9215C21.0632 40.1875 20.9271 40.4778 20.7829 40.7761C20.7429 40.7761 20.6949 40.7761 20.6548 40.7761C20.6068 40.5584 20.5427 40.3407 20.5267 40.123C20.5107 39.865 20.4226 39.736 20.1503 39.728C19.9981 39.7199 19.846 39.6231 19.6378 39.5425C19.4856 39.9457 19.3094 40.3972 19.1012 40.9535C18.7488 40.3407 18.8129 39.7683 18.8449 39.2119C18.3804 38.9459 18.3804 38.9459 18.0921 39.8247C18.0361 39.6876 17.94 39.5506 17.932 39.4135C17.8999 39.0749 17.7638 38.8652 17.4034 38.7685C17.1151 38.6798 17.019 38.7121 17.011 39.0265C17.003 39.3974 16.963 39.7763 16.8989 40.1472C16.8749 40.3165 16.7708 40.4778 16.7067 40.6471C16.6666 40.6471 16.6266 40.6471 16.5946 40.6471C16.5465 40.4939 16.4905 40.3407 16.4424 40.1875C16.3063 39.728 16.1861 39.2603 16.042 38.8007C15.9859 38.6153 15.8978 38.5105 15.6576 38.5911C15.4974 38.6476 15.3052 38.5992 15.0409 38.5992C14.9769 38.7927 14.8808 39.0588 14.7847 39.3248C14.7446 39.3329 14.6966 39.3409 14.6565 39.349C14.5765 39.1152 14.5044 38.8814 14.4083 38.6476C14.3522 38.5105 14.2721 38.3895 14.2001 38.2605C14.112 38.3895 14.0319 38.5266 13.9438 38.6556C13.9118 38.7121 13.8797 38.7685 13.7996 38.9217C13.6395 38.6072 13.5193 38.3573 13.3832 38.0912C12.2941 38.0509 12.6544 39.0265 12.4062 39.5748C12.3661 39.5828 12.3261 39.5909 12.2781 39.599C12.19 39.349 12.0618 39.1152 12.0298 38.8572C11.9897 38.5508 12.0538 38.2444 12.0458 37.93C12.0458 37.8252 11.9737 37.7284 11.9337 37.6236C11.8216 37.68 11.6534 37.7042 11.6134 37.7848C11.5173 38.0267 11.4692 38.2928 11.317 38.575C11.261 38.3492 11.1809 38.1235 11.1649 37.8977C11.1168 37.2043 11.0768 36.519 11.0528 35.8256C11.0207 35.0838 11.277 34.7291 11.9817 34.463C12.246 34.3582 12.4863 34.1728 12.7586 34.0679C12.9828 33.9793 13.2631 33.8664 13.4793 33.9228C14.0559 34.0599 14.6245 34.2453 15.1691 34.4791C15.6175 34.6726 16.05 34.7855 16.5465 34.7936C17.011 34.8016 17.4755 34.971 17.924 35.1322C18.2523 35.2532 18.5246 35.3419 18.8689 35.1564C19.0451 35.0677 19.3494 35.1 19.5497 35.1887C20.0302 35.3902 20.5027 35.3499 20.9992 35.2773C21.776 35.1725 22.5528 35.1322 23.3376 35.0435C23.5699 35.0193 23.8101 34.9629 24.0183 34.8662C24.3627 34.7049 24.699 34.5114 25.0194 34.3018C25.2196 34.1647 25.3798 33.9551 25.572 33.8019C26.0204 33.431 26.525 33.3907 27.0775 33.5439C27.2697 33.6003 27.502 33.5116 27.7182 33.4955C27.8463 33.4874 27.9825 33.4713 28.1106 33.4632C28.511 33.431 28.9115 33.3987 29.3199 33.3746C29.6642 33.3504 30.0166 33.2617 30.3369 33.3342C31.0337 33.4955 31.5142 33.1004 32.0027 32.7537C32.0988 32.6892 32.1228 32.3022 32.0267 32.2055C31.5462 31.7136 31.5863 31.1815 31.7704 30.601C31.9787 29.9398 32.339 29.4158 33.0037 29.1658C33.5723 28.9481 33.7485 28.6176 33.6124 28.029C33.5964 27.9725 33.5563 27.9161 33.5083 27.8758C33.26 27.65 33.0198 27.4082 32.7475 27.2147C32.6514 27.1502 32.4672 27.1663 32.339 27.2147C32.259 27.2388 32.1548 27.392 32.1709 27.4727C32.267 28.0612 31.8025 28.4321 31.6263 28.9239C31.4501 28.545 31.1858 28.1902 31.2819 27.7549C31.346 27.4565 31.2099 27.2953 30.9696 27.2711C30.8174 27.255 30.6333 27.392 30.4891 27.4888C30.3369 27.5936 30.1848 27.7145 30.0647 27.8597C29.9445 28.0048 29.8564 28.1822 29.7203 28.3999C29.5361 28.037 29.6722 27.6904 29.7043 27.3678C29.7283 27.1502 29.8725 26.9405 29.9125 26.7228C29.9365 26.5858 29.9045 26.4084 29.8244 26.2955C29.7844 26.2391 29.5842 26.2794 29.464 26.3116C29.2078 26.3842 28.9595 26.4729 28.6792 26.5696C28.5271 26.0939 28.8634 25.8037 29.1357 25.5215C29.416 25.2312 29.7603 24.9974 30.1608 24.6749C30.0086 24.5943 29.8885 24.5378 29.6883 24.433C30.0967 24.3201 30.361 24.2073 30.6413 24.1831C31.0177 24.1589 31.1057 23.9089 31.1538 23.6348C31.346 22.4496 31.8425 21.4095 32.5393 20.4581C32.7875 20.1195 33.1399 19.8615 33.4282 19.5551C33.5643 19.418 33.7245 19.2568 33.7725 19.0875C34.1249 17.7571 35.0459 16.9589 36.2071 16.3623C36.2391 16.3461 36.2792 16.33 36.2952 16.3219C36.1831 15.2819 36.079 14.2498 35.9668 13.2017C35.3021 12.8469 34.9898 12.1213 34.5413 11.5085C34.5013 11.4521 34.4613 11.3795 34.4052 11.3473C33.8446 10.9925 33.1959 10.7184 32.7314 10.2669C32.283 9.83148 31.7464 9.69441 31.2259 9.46866C30.7854 9.27515 30.345 9.08165 29.9205 8.85589C29.7363 8.75914 29.5922 8.58176 29.392 8.40438C29.1197 8.32375 28.7673 8.24313 28.439 8.11413C27.8223 7.87224 27.2377 7.56586 26.6131 7.36429C26.1406 7.2111 25.62 7.19498 25.1315 7.0821C24.9313 7.03372 24.7471 6.91278 24.5629 6.81603C24.4988 6.78378 24.4348 6.72734 24.3707 6.72734C23.698 6.70315 22.9692 6.83215 22.3526 6.63059C21.5518 6.36452 20.7029 6.61446 19.9581 6.25971C19.0531 5.82432 18.1162 6.0662 17.1952 6.0017C17.0911 5.99364 16.971 6.03395 16.8749 6.0017C15.7857 5.62275 14.7606 6.09845 13.7035 6.20327C13.4313 6.22745 13.151 6.21133 12.8707 6.21939C12.7666 6.21939 12.6625 6.23552 12.5583 6.25164C11.6854 6.40483 10.8045 6.55802 9.9396 6.72734C9.65931 6.78378 9.37902 6.8886 9.10673 6.98535C8.45004 7.2111 7.76132 7.34011 7.12065 7.65455C6.03151 8.19475 4.84627 8.54145 3.78917 9.16228C3.10045 9.56541 2.36368 9.87986 1.6269 10.1943C1.4267 10.283 1.16242 10.2185 0.930176 10.2185C1.01827 10.0089 1.06632 9.75085 1.21848 9.60572C1.40267 9.42028 1.68296 9.32353 1.9072 9.17034C2.01131 9.09777 2.13143 8.99296 2.17147 8.88008C2.28359 8.5737 2.45978 8.38019 2.80414 8.34794C2.91625 8.33988 3.04439 8.227 3.10845 8.13025C3.31667 7.78355 3.55692 7.52555 3.90929 7.58199C4.13353 7.38042 4.31772 7.22723 4.4939 7.06597C4.582 6.98535 4.65407 6.89666 4.73416 6.80797C4.78221 6.75153 4.81424 6.64671 4.87831 6.62253C5.40686 6.38065 5.93541 6.15489 6.46397 5.91301C6.57608 5.85657 6.69621 5.79207 6.79231 5.7195C7.23277 5.38893 7.77734 5.21962 8.13772 4.73585C8.23382 4.59879 8.61021 4.64717 8.85847 4.65523C9.10673 4.65523 9.25088 4.5746 9.41906 4.37303C9.58723 4.17147 9.87554 4.01021 10.1318 3.95377C10.4922 3.88121 10.8606 4.01827 11.1489 3.58289C11.269 3.39745 11.7095 3.43776 12.0058 3.34907C12.1579 3.30876 12.3902 3.26038 12.4382 3.1475C12.6544 2.67987 13.0388 2.74437 13.4232 2.72824C13.6555 2.72018 13.8957 2.63955 14.128 2.59118C14.4083 2.53474 14.6966 2.40574 14.9689 2.42186C15.2411 2.44605 15.4334 2.42186 15.6015 2.20417C15.6416 2.15579 15.7056 2.09129 15.7617 2.09129C16.4344 2.0671 16.995 1.4624 17.7318 1.70428C17.8118 1.72847 17.924 1.6559 18.012 1.62365C18.6287 1.3979 19.2373 1.15602 19.854 0.954449C20.0222 0.89801 20.2384 0.914137 20.4066 0.970576C20.831 1.10764 21.1754 0.970575 21.5598 0.801259C21.776 0.704506 22.0563 0.74482 22.3045 0.728695C22.5448 0.712569 22.785 0.712569 23.0253 0.696443C23.0733 0.696443 23.1294 0.640005 23.1775 0.648068C24.0343 0.881886 24.9633 0.212681 25.7962 0.873822C25.8923 0.954449 26.1325 0.914137 26.2767 0.849635C26.613 0.704507 26.9014 0.591628 27.2377 0.881886C27.3338 0.962512 27.558 0.889948 27.7262 0.898011C27.9745 0.914136 28.2147 0.930262 28.463 0.962512C28.7833 1.00283 29.1037 1.10764 29.424 1.09958C29.7844 1.09152 30.0887 1.12377 30.377 1.38177C30.5452 1.5269 30.8335 1.58334 31.0737 1.5914C31.4821 1.59947 31.8665 1.57528 32.1629 1.9381C32.1949 1.97841 32.283 1.98648 32.347 1.97841C32.4111 1.97841 32.5072 1.91391 32.5393 1.9381C32.9317 2.26867 33.4442 2.18804 33.8847 2.35736C34.173 2.47024 34.4212 2.6718 34.6935 2.81693C34.7656 2.85725 34.8777 2.84918 34.9578 2.81693C35.3102 2.69599 35.5264 2.85725 35.6625 3.16363C35.7907 3.45389 35.9748 3.59095 36.3032 3.59901C36.4634 3.60708 36.7196 3.71189 36.7677 3.84089C36.9038 4.18759 37.1361 4.25209 37.4564 4.25209C37.5525 4.25209 37.6566 4.31659 37.7527 4.36497C39.0981 5.09868 40.4435 5.84044 41.7969 6.55802C43.2705 7.34011 44.3917 8.51726 45.4808 9.74279C46.0974 10.4442 46.6901 11.1618 47.3708 11.831C47.2346 11.5891 47.0664 11.3634 46.9623 11.1054C46.8823 10.9199 46.7942 10.6458 46.8742 10.5087C47.1786 9.98467 47.5149 9.46866 47.8993 9.00102C48.1155 8.74302 48.4439 8.69464 48.7722 8.92846C48.8924 9.01715 49.0685 9.04133 49.2287 9.06552C49.5651 9.12196 49.8774 9.15421 50.0135 9.56541C50.0536 9.68635 50.3499 9.74279 50.5341 9.7831C51.0706 9.88792 51.2388 9.97661 51.399 10.3072C50.7663 10.5894 50.7984 10.5974 51.2708 11.1779C52.1598 12.2664 52.7364 13.4839 52.4961 14.9513C52.4801 15.0642 52.5442 15.2093 52.6002 15.3222C52.9927 16.0559 52.9846 16.7896 52.5682 17.5072C52.2399 18.0716 51.9676 18.6924 51.2388 18.8939C52.5442 22.4818 52.5362 26.0456 51.2708 29.6415C52.2078 29.8028 52.9206 30.2946 53.5292 30.9638C53.5452 30.9799 53.5693 31.0041 53.5853 31.0202C54.0738 31.754 54.5943 32.4473 55.195 33.1004C55.4913 33.4229 55.5874 34.0034 55.6434 34.4791C55.7155 35.1403 55.6674 35.8176 55.6594 36.4948C55.6514 37.0834 55.8677 37.4059 56.3962 37.6155C56.7005 37.7365 56.9968 37.8897 57.2771 38.059C57.4293 38.1557 57.5414 38.3331 57.6695 38.4702C57.6455 38.4944 57.6295 38.5266 57.6055 38.5508C57.4453 38.5186 57.2932 38.4944 57.0849 38.4541C57.117 38.5427 57.117 38.6072 57.149 38.6234C57.4934 38.8814 57.8377 39.1394 58.1981 39.3813C58.6866 39.7199 58.5665 40.2682 58.6946 40.76C58.2782 40.3891 57.6055 40.7277 57.2851 40.1633C57.2451 40.0908 56.9808 40.1553 56.9168 40.1553C56.8687 40.8729 56.8287 41.5421 56.7886 42.2032C56.7566 42.2193 56.7165 42.2274 56.6845 42.2435C56.4282 41.9371 56.172 41.6308 55.9077 41.3324C55.8276 41.2437 55.6514 41.1228 55.6274 41.147C55.5153 41.2357 55.3711 41.3889 55.3872 41.4937C55.4272 41.7678 55.3071 41.8726 55.0908 41.9855C54.9627 42.05 54.8746 42.2032 54.7705 42.3241C54.6744 42.437 54.5863 42.566 54.4982 42.687C54.4582 42.6789 54.4181 42.6708 54.3781 42.6628C54.3621 42.4612 54.3301 42.2596 54.322 42.0581C54.306 41.7678 54.322 41.4776 54.306 41.1873C54.282 40.8648 54.0898 40.7842 53.8255 40.9696C53.7615 41.018 53.6974 41.0825 53.6253 41.0906C53.1768 41.1712 53.1688 41.1712 53.0167 41.6308C52.9366 41.4856 52.8725 41.405 52.8405 41.3002C52.7124 40.8245 52.9526 40.1633 53.369 39.9053C53.8095 39.6393 53.8736 38.8652 53.6493 38.5024C53.3931 38.0912 53.1208 37.6962 52.8725 37.285C52.6643 36.9383 52.5682 36.5916 52.7043 36.1723C52.8485 35.7208 52.6002 35.3741 52.1438 35.2532C51.423 35.0677 50.7103 34.8742 49.9575 34.6646C49.6612 35.0919 49.3408 35.5676 49.0045 36.0352C48.1476 37.2205 47.0825 38.1154 45.6249 38.4621C45.4407 38.5024 45.2726 38.6476 45.1124 38.7524C44.8561 38.9217 44.6159 39.1313 44.2715 38.9943C44.2155 38.9701 44.0953 39.0346 44.0473 39.0991C42.0372 41.792 39.5065 43.8238 36.3432 44.9606C35.0138 45.4363 33.6444 45.783 32.267 46.0975C31.7865 46.2023 31.2419 46.0572 30.7374 45.9685C30.5291 45.9282 30.377 45.8879 30.1928 46.033C28.5831 47.2666 26.8133 47.5085 24.8912 46.9602C23.69 46.6216 22.4887 46.5571 21.2635 46.9118C20.8951 47.0166 20.4706 46.9199 20.0782 46.9199C19.3174 46.9118 18.5646 46.9038 17.8038 46.9038C17.7398 46.9038 17.6677 46.9199 17.6116 46.9521C16.6746 47.5165 15.6576 47.1618 14.6726 47.2021C13.5674 47.2505 12.7025 46.6458 11.9177 45.9282C11.6214 45.654 11.6614 45.267 12.0058 44.9042C12.0858 44.8155 12.1419 44.6785 12.1579 44.5575C12.214 44.1705 12.246 43.7754 12.2861 43.3804C12.3421 43.3723 12.3982 43.3642 12.4462 43.3562C12.5023 43.5255 12.5423 43.7109 12.6224 43.8722C12.7105 44.0415 12.8386 44.3237 12.9588 44.3318C13.191 44.3398 13.4953 44.2673 13.4953 43.8883C13.4953 43.7432 13.5914 43.5981 13.7436 43.4287C13.8237 43.6061 13.8957 43.7835 13.9758 43.977C14.3122 43.719 14.6726 43.4932 14.9609 43.1949C15.097 43.0498 15.089 42.7676 15.145 42.5499C15.2331 42.2274 15.2412 41.8646 15.6416 41.5904C15.6816 42.1629 15.7136 42.6708 15.7537 43.1707C15.8097 43.1869 15.8578 43.203 15.9139 43.211C16.034 42.9853 16.1461 42.7515 16.3063 42.4451C16.4104 42.695 16.4824 42.8724 16.5625 43.0578C16.7067 43.0578 16.8428 43.0578 16.979 43.0578C17.0671 42.7998 17.1471 42.558 17.2673 42.1871C17.3794 42.4128 17.4114 42.5499 17.4915 42.6386C17.5796 42.7353 17.7157 42.8482 17.8359 42.8482C18.0361 42.8563 18.1882 42.7515 18.1802 42.5015C18.1722 42.3403 18.2123 42.171 18.2283 41.9452C18.4525 42.0823 18.6047 42.179 18.7648 42.2838C18.8529 42.1226 18.941 41.9694 19.0451 41.7839C19.7659 42.1629 19.3334 41.405 19.4616 41.2518C19.7178 41.2679 19.918 41.2841 20.1102 41.2921C20.0302 41.1228 20.0462 40.9051 20.0622 40.6874ZM34.3572 24.2234C34.3251 24.2153 34.2931 24.2073 34.2691 24.1911C33.8046 24.5217 33.3401 24.8603 32.8276 25.2232C32.9397 25.5457 33.0278 25.9004 33.1959 26.2149C33.3801 26.5696 33.6364 26.8841 33.5003 27.3275C33.4762 27.4162 33.5323 27.5372 33.5563 27.642C33.8206 26.489 34.0849 25.3602 34.3572 24.2234Z" fill="#F58021"/>
        </svg>
        `,
        href: `#`,
        text: `Watch The Bald Eagles Nest from West End cam`
    },
    {
        src: `<svg class="svg-white" width="53" height="47" viewBox="0 0 53 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6769 43.4852C12.408 42.1008 12.3213 40.7251 12.5641 39.3494C12.9457 37.164 14.0297 35.379 15.7728 34.0469C16.64 33.3851 17.6373 32.8975 18.5739 32.3229C19.1896 31.9485 19.8487 31.6176 20.3777 31.1474C21.7739 29.8849 23.1094 28.5615 24.4709 27.2641C25.2774 26.4979 26.0753 25.723 26.9338 24.8958C26.3528 24.8523 25.8324 24.8436 25.3208 24.7652C24.8091 24.6869 24.2975 24.5563 23.9246 24.0338C24.1067 24.0251 24.2368 24.0164 24.3669 24.0164C25.737 23.9729 26.4308 23.2763 26.4568 21.9442C26.4742 21.2999 26.3181 20.6468 26.2314 20.0025C25.8411 17.2772 26.5175 14.8219 28.1132 12.6103C28.2173 12.4623 28.33 12.3055 28.4601 12.1227C28.0178 12.0705 27.6189 12.053 27.2373 11.966C26.8644 11.8789 26.5175 11.7222 26.1533 11.6003C26.162 11.5567 26.1707 11.5132 26.1793 11.4784C26.4655 11.4174 26.7517 11.3652 27.0292 11.2955C29.0758 10.7557 30.5761 9.56284 31.4866 7.61248C31.8682 6.80273 32.3018 6.0104 32.7875 5.2616C33.646 3.94684 34.8688 3.11097 36.3864 2.71045C36.5251 2.67563 36.6552 2.63209 36.8373 2.57985C36.5598 2.41442 36.291 2.30123 36.0915 2.10967C35.9181 1.94424 35.8314 1.69174 35.7533 1.40441C36.4731 1.6482 36.9847 1.30863 37.5051 1.00388C38.3896 0.481466 39.3089 0.0896522 40.3669 0.133187C41.6677 0.194136 42.6563 0.84716 43.4801 1.81363C43.5929 1.94424 43.6969 2.08355 43.8097 2.23157C44.5121 1.71786 45.2146 1.85717 45.865 2.29252C46.2292 2.53631 46.5154 2.90201 46.8623 3.18934C47.4173 3.65951 47.955 4.17322 48.5707 4.56504C48.8742 4.75659 49.3165 4.72177 49.7674 4.80884C50.0623 5.65341 49.6113 6.2629 48.111 6.84627C48.484 7.49929 48.8568 8.15232 49.2297 8.80534C49.5073 9.28422 49.7241 9.7544 49.5593 10.3639C49.4899 10.6425 49.672 11.0517 49.8541 11.3217C50.3224 12.0008 50.8514 12.6364 51.3544 13.2894C51.6146 13.6377 51.8661 13.9947 52.1176 14.343C52.3604 14.6825 52.3604 15.0134 52.1089 15.3443C51.788 15.7535 51.5105 16.215 51.1203 16.5458C50.5392 17.0334 50.0623 17.5907 49.5766 18.174C48.9002 18.9925 47.9289 19.0273 47.1311 18.3134C46.9316 18.1305 46.7148 17.9303 46.5934 17.6952C46.3159 17.1379 45.839 16.9289 45.2926 16.7809C44.7723 16.6416 44.252 16.5197 43.749 16.3456C43.3327 16.1976 42.9425 15.9973 42.5436 15.8145C42.4742 16.0844 42.5002 16.3108 42.8471 16.5458C43.3501 16.8767 43.8877 17.1466 44.4427 17.3991C44.6856 17.5123 44.8243 17.6168 44.911 17.8867C45.2926 19.1492 45.7002 20.403 46.1165 21.6481C46.5241 22.8758 46.5587 24.1383 46.5154 25.4183C46.4634 26.8549 46.2292 28.2393 45.7956 29.5976C45.4834 30.5641 45.1365 31.191 44.6942 31.6263C44.3994 30.8514 44.1132 30.0852 43.8184 29.3277C43.775 29.3364 43.7316 29.3451 43.6883 29.3538C43.7577 30.12 43.801 30.8862 43.9051 31.6525C44.382 35.0133 45.1105 38.3307 46.0818 41.5871C46.2119 42.0051 46.446 42.4143 46.6975 42.7713C47.1658 43.433 47.8422 43.6594 48.6314 43.5897C49.5419 43.5114 50.0189 43.79 50.227 44.6781C50.3831 45.3572 50.3918 46.0712 50.4699 46.8026C47.8075 46.8026 45.2753 46.8026 42.6476 46.8026C42.5696 45.7926 42.5175 44.7826 42.3961 43.7813C42.3354 43.2414 42.2574 42.6755 42.0146 42.2053C41.4769 41.1779 40.8438 40.2114 40.2281 39.2275C39.3522 37.8344 38.459 36.45 37.5831 35.0743C35.8053 35.8144 33.9582 36.5893 32.059 37.3729C31.9983 37.8692 31.9289 38.4787 31.8595 39.0795C31.7642 39.9328 31.3479 40.5945 30.6628 41.0647C29.9083 41.5784 29.1105 42.0138 28.33 42.4839C28.1219 42.6145 27.9137 42.7539 27.7056 42.8845C27.723 42.9367 27.7316 42.9889 27.749 43.0412C28.0091 43.076 28.278 43.1457 28.5295 43.1283C29.5354 43.0586 30.5414 42.9628 31.556 42.8757C31.7988 42.8583 32.0417 42.8322 32.2932 42.8322C34.5739 42.8235 36.0222 44.4691 35.7533 46.8113C35.6146 46.82 35.4758 46.8287 35.3371 46.8287C27.9831 46.8287 20.6205 46.8374 13.2666 46.8287C12.5208 46.8287 11.749 46.7939 11.0292 46.611C10.4395 46.463 9.78907 46.1757 9.36414 45.749C7.67308 44.0599 6.78853 42.0399 7.56034 39.628C8.03731 38.1479 8.69639 36.7199 9.32945 35.292C9.74571 34.3516 10.214 33.4374 10.3788 32.4013C10.6736 30.5815 9.88446 28.9359 8.34083 28.1697C7.34354 27.6734 5.68717 28.4396 5.4617 29.5105C5.43568 29.6411 5.50506 29.8675 5.60045 29.9285C6.35492 30.4074 6.71048 31.1213 6.87525 31.9659C7.10072 33.1413 6.87525 34.9959 6.39828 35.9189C6.15546 35.5445 5.91265 35.1701 5.66983 34.7957C5.79991 36.3629 5.17552 37.5819 4.22159 38.6703C4.16956 38.6529 4.1262 38.6529 4.11752 38.6442C3.7533 37.6603 3.07687 36.9289 2.29638 36.2584C1.91481 35.9276 1.61996 35.5009 1.28175 35.1091C1.17768 35.3094 1.03026 35.5967 0.882833 35.884C0.440557 35.5009 0.163049 34.6999 0.284458 33.9163C0.466572 32.7669 0.952209 31.7918 2.1056 31.2955C2.21833 31.2432 2.30506 31.0691 2.35709 30.9298C2.9121 29.467 3.74462 28.2132 5.11481 27.4034C6.22484 26.7417 7.45628 26.4892 8.73975 26.6895C9.9365 26.8723 10.6823 27.656 11.1072 28.7617C11.7143 30.3377 11.6796 31.9659 11.3067 33.5593C11.0379 34.726 10.6129 35.8579 10.162 36.9724C9.77173 37.9563 9.3468 38.9228 9.22539 39.9937C9.01726 42.0486 10.5435 43.642 12.6769 43.4852Z" fill="#F58021"/>
        </svg>
        `,
        href: `#`,
        text: `Watch live from China's  Panda Center `
    },
    {
        src: `<svg class="svg-white" width="64" height="54" viewBox="0 0 64 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.1229 37.4213C17.0882 37.4827 17.0592 37.5529 16.9897 37.6756C16.2153 36.3737 15.9906 34.9338 15.7165 33.5141C15.6669 33.4963 15.6087 33.4843 15.565 33.4753C15.3973 33.9052 15.1742 34.3085 15.0735 34.7447C14.7249 36.173 14.8303 37.6036 15.1714 39.0294C15.5888 40.7223 16.0062 42.4151 16.3625 44.1106C16.6275 45.3837 16.7821 46.6797 16.503 47.9853C16.1981 49.4227 15.5608 50.5859 14.1129 51.1326C13.4675 51.3727 12.8329 51.2876 12.2472 50.9536C11.676 50.6226 11.6018 50.0362 12.0954 49.6049C12.3887 49.3455 12.7227 49.0717 13.0832 48.9328C13.7955 48.6608 14.1609 48.1497 14.2173 47.4379C14.271 46.7788 14.2925 46.0903 14.1774 45.4421C13.8589 43.7087 13.4763 41.9926 13.0705 40.2792C12.6147 38.3576 12.348 36.4369 12.6808 34.4722C12.9704 32.7652 13.7089 31.3183 15.0623 30.2113C15.161 30.1327 15.251 30.0598 15.3498 29.9812C15.4108 29.9405 15.4689 29.9144 15.5794 29.8534C15.6646 30.1908 15.7323 30.5017 15.8087 30.8069C16.2631 28.6464 16.3972 26.3819 18.1974 24.735C20.8375 26.216 22.3011 28.5205 22.8904 31.4597C23.4205 28.104 21.4214 25.7881 19.4686 23.3903C19.9568 23.1025 20.4188 22.8323 20.8809 22.562C21.2732 22.3383 21.6655 22.1145 22.0606 21.8762C22.9498 21.3589 22.976 21.3414 23.5776 22.2118C24.1413 23.0438 24.6352 23.9224 25.1495 24.7747C25.246 24.9393 25.3337 25.1097 25.4795 25.254C25.3826 23.7033 24.7506 22.3317 23.9789 20.939C24.8624 20.451 25.7225 19.9658 26.6061 19.5159C26.7252 19.4491 26.967 19.5675 27.1157 19.659C28.7973 20.6987 29.7819 22.2801 30.4644 24.0885C30.6695 24.6258 30.8484 25.1805 31.0854 25.7091C31.0816 22.9897 29.7142 20.7735 28.3146 18.4898C29.3169 17.8207 30.2931 17.169 31.3303 16.4766C32.3135 17.5246 32.896 18.8784 33.5337 20.2207C33.5951 19.1748 33.3134 18.2181 32.8077 17.3219C32.6294 16.9958 32.4424 16.6754 32.2292 16.3726C31.9693 15.9992 31.9743 15.6651 32.2965 15.3355C32.9467 14.6852 33.5853 14.0173 34.2355 13.367C36.8209 15.0499 38.3689 17.349 38.9495 20.332C39.0911 18.762 38.6772 17.2831 38.1091 15.8562C37.5439 14.4146 36.6242 13.1969 35.469 12.0602C36.7872 10.8622 38.059 9.70794 39.3656 8.53042C40.5708 9.91358 41.5636 11.2605 42.0391 12.9273C41.9124 11.104 41.3205 9.4513 40.1614 7.91013C40.7805 7.61131 41.3239 7.31212 41.8908 7.08631C42.0129 7.04295 42.2373 7.17298 42.3918 7.27337C43.0709 7.71038 43.7961 7.95127 44.6225 7.90841C43.6704 7.70451 43.1362 7.03084 42.7152 6.24344C42.4141 5.69399 42.6141 5.36969 43.2076 5.31691C44.1968 5.21623 45.1771 5.08328 46.1545 4.92686C46.8264 4.82171 47.4748 4.60509 48.1468 4.49994C49.162 4.34371 50.0938 4.57389 51.0348 5.02683C51.7399 5.37018 52.5666 5.47971 53.3556 5.62714C53.836 5.72618 54.2794 6.1298 54.298 6.61341C54.3076 6.95045 54.3259 7.28167 54.3674 7.61008C54.489 8.53375 54.2086 9.30601 53.5789 10.0062C53.5205 9.91804 53.4709 9.86212 53.4387 9.79457C53.1518 9.09573 53.1576 9.10455 52.4363 9.26808C51.7529 9.43178 51.0958 9.65422 50.6258 10.2351C50.0833 10.9152 50.0242 11.7179 50.5058 12.3121C50.894 12.8034 51.9653 12.9405 52.6017 12.5919C52.7208 12.5251 52.84 12.4583 52.9591 12.3915C53.2781 13.1198 53.1689 13.676 52.5968 14.1597C52.1438 14.5384 51.647 14.8701 51.13 15.2661C50.5355 14.8998 49.903 14.4953 49.2532 14.1405C48.5888 13.7827 47.8985 13.5185 47.0232 13.7721C47.3612 13.9408 47.6147 14.0768 47.9643 14.2631C46.5224 14.8568 45.5528 15.784 45.015 17.2114C44.8304 16.686 44.6516 16.1693 44.4318 15.5529C44.1925 18.7781 46.6796 23.1213 51.5692 24.6016C51.3424 24.6766 51.1651 24.7315 50.9848 24.8009C50.9907 24.8478 50.988 24.9006 50.9939 24.9475C51.2005 24.9368 51.4013 24.9553 51.5991 24.9123C52.2797 24.7633 52.9514 24.5819 53.6379 24.4417C54.301 24.3042 54.9009 24.4888 55.5248 24.9373C54.6445 25.525 53.8339 26.0661 53.0321 26.6014C52.3464 27.0464 51.6666 27.5002 50.9693 27.9276C50.8327 28.006 50.6 28.0342 50.4688 27.9691C47.7185 26.6253 44.8012 26.0543 41.7776 26.0249C40.794 26.0201 39.9175 25.7785 39.1158 25.1944C38.903 25.0439 38.6554 24.9548 38.3585 24.924C38.6882 25.289 39.0093 25.6598 39.4003 26.0983C35.7379 26.6226 32.4119 27.8636 29.3555 29.8912C28.9668 29.2094 28.6014 28.563 28.2419 27.9253C28.21 27.9339 28.1867 27.9368 28.1547 27.9454C28.2075 28.1391 28.243 28.3444 28.3191 28.5352C28.694 29.5187 28.6178 30.4854 28.3089 31.4802C27.6015 33.7332 26.1245 35.4315 24.5427 37.0853C23.6661 38.0012 22.8829 39.0201 22.1113 40.0185C21.5225 40.7805 21.2162 41.6845 21.1983 42.6631C21.1987 42.8155 21.1525 42.9735 21.121 43.1727C20.9636 43.0869 20.8325 43.0218 20.6693 42.9272C20.6841 43.0064 20.6813 43.0592 20.6988 43.0856C21.4581 44.156 22.3939 44.8668 23.7989 44.6157C24.3166 44.5245 24.8086 44.6031 25.2261 45.1384C25.0343 45.2664 24.8513 45.3886 24.677 45.505C23.326 46.4068 21.9693 47.2999 20.6387 48.2135C20.3337 48.4172 20.1503 48.387 19.8646 48.1834C18.8559 47.4576 18.2307 46.4377 17.6577 45.3829C17.4472 44.9892 17.3906 44.4673 17.3982 44.0043C17.4061 42.4981 17.4984 40.9865 17.5005 39.4715C17.5075 38.78 17.3632 38.0877 17.2946 37.3958C17.2364 37.4219 17.184 37.4187 17.1229 37.4213ZM48.3832 5.9575C48.3747 6.03951 48.3749 6.1157 48.3663 6.19771C48.8177 6.32884 49.2663 6.51271 49.7292 6.5853C49.898 6.61249 50.1069 6.35857 50.2987 6.23056C50.1295 6.08908 49.963 5.81867 49.7971 5.81493C49.3228 5.8009 48.8487 5.90116 48.3832 5.9575Z" fill="#F58021"/>
        <path d="M30.5746 36.4963C30.4989 36.496 30.3271 36.4834 30.0623 36.4821C30.8264 37.1426 31.6385 37.1729 32.4504 37.0888C33.4164 36.9908 34.3765 36.8078 35.3425 36.7098C35.9129 36.6597 36.4633 36.7884 36.8227 37.3883C36.6978 37.4845 36.5874 37.5837 36.4654 37.6652C35.0182 38.6317 33.5769 39.6071 32.1094 40.5618C31.9089 40.6958 31.5917 40.7294 31.3501 40.6872C30.625 40.5606 29.9173 40.3842 29.2009 40.2136C28.3622 40.0102 27.8488 39.5386 27.7797 38.6176C27.7586 38.3008 27.5861 37.9833 27.4224 37.6981C27.098 37.1511 26.7301 36.6333 26.362 36.0774C27.7124 34.8318 28.2818 33.1661 28.9066 31.5271C29.1814 30.8217 29.6227 30.3488 30.3263 30.0443C30.9012 30.7039 31.3802 31.3894 31.17 32.3443C31.0807 32.7221 30.9855 33.0911 30.9312 33.4837C30.8083 34.4566 30.6972 35.4472 30.5746 36.4963Z" fill="#F58021"/>
        <path d="M35.0467 27.6946C36.8126 27.3424 38.436 27.0218 40.1147 26.6897C40.3691 28.4034 39.8843 30.1399 40.6507 31.7534C40.389 31.8519 40.1534 31.9329 39.915 32.0285C39.918 32.0901 39.9298 32.1459 39.9329 32.2075C40.3054 32.2004 40.6926 32.2346 41.0563 32.1571C41.6498 32.028 42.211 31.7932 42.8015 31.6406C43.4705 31.4737 43.9893 31.7636 44.4651 32.3113C43.8984 32.6898 43.3492 33.0566 42.8086 33.4176C41.8235 34.0756 40.85 34.7513 39.8473 35.3828C39.6671 35.4904 39.3528 35.5094 39.146 35.4439C38.3159 35.1966 37.7555 34.5781 37.4423 33.82C36.6138 31.8279 35.8609 29.7981 35.0467 27.6946Z" fill="#F58021"/>
        </svg>
        `,
        href: `#`,
        text: `Livestream from Gorilla Forest Corridor habitat cam`
    },
    {
        src: `<svg class="svg-white" width="44" height="55" viewBox="0 0 44 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.0579 23.3932C32.3131 21.8611 33.0329 20.1684 33.0637 18.2038C33.0679 17.99 33.2193 17.7792 33.37 17.5692L33.3701 17.5691C33.4415 17.4696 33.5128 17.3702 33.5682 17.2709C33.8614 16.7387 34.1736 16.2134 34.4859 15.6878C35.196 14.4929 35.907 13.2964 36.3984 12.0135C37.469 9.21492 36.823 7.49746 34.4973 5.71205C34.6449 3.84014 35.3833 2.55514 37.4382 2.18446C38.4108 2.01038 39.3543 1.67287 40.3847 1.30431C40.8534 1.13662 41.3402 0.962508 41.8558 0.794434C40.3115 5.47111 38.8472 9.90067 37.3152 14.5341L37.6729 14.4575L37.675 14.457C39.6684 14.0302 41.4922 13.6396 43.3324 13.2491C43.8 14.0831 43.437 14.5217 42.7295 14.9233L42.3071 15.1613L42.3071 15.1613C40.4963 16.1814 38.6805 17.2043 36.9337 18.3335C36.3492 18.7104 35.8447 19.3899 35.5801 20.0386C35.1455 21.1144 34.7922 22.2234 34.4296 23.3615L34.4294 23.3621C34.2736 23.8511 34.1161 24.3456 33.9497 24.845L31.0579 23.3932ZM36.4045 23.1469C38.2072 24.4937 38.964 27.3911 38.1396 29.6028C37.4197 31.5241 35.7523 32.4385 33.2667 32.1543C32.5518 32.0712 31.8484 31.9118 31.1453 31.7525L31.1453 31.7525L31.1452 31.7525L31.1452 31.7525C30.6986 31.6513 30.2521 31.5501 29.8027 31.4685C27.2433 30.9928 25.0529 31.3512 23.564 32.5003C23.9085 32.5435 24.2039 32.5806 24.653 32.6362C24.2684 33.3631 24.0728 34.1509 23.8832 34.9144C23.6087 36.0196 23.3468 37.074 22.5426 37.8194C23.001 38.1412 23.4904 38.4579 23.9911 38.7819C25.1435 39.5277 26.3553 40.3119 27.3848 41.2852C29.7781 43.5463 29.6305 46.9257 27.2802 49.4277C26.5751 49.178 25.8689 48.9283 25.162 48.6783L25.1602 48.6776C22.4749 47.728 19.7781 46.7743 17.0853 45.8013C16.6387 45.639 16.2127 45.4177 15.787 45.1965C15.5968 45.0977 15.4067 44.999 15.2149 44.9055C12.4277 43.5649 10.9819 41.3161 10.7358 38.2457C10.422 34.3598 11.1787 30.616 12.0709 26.9092C12.1317 26.8975 12.1818 26.8822 12.2236 26.8694C12.2919 26.8486 12.338 26.8345 12.3723 26.8536C18.4142 29.9797 23.9762 28.5649 29.2367 24.9447C30.1288 24.3331 30.8056 24.3022 31.6608 24.7532C32.1654 25.0188 32.676 25.2721 33.1929 25.5069C34.6756 26.1802 35.3463 25.9146 35.9431 24.4072C36.0422 24.1545 36.1342 23.8971 36.228 23.635L36.2282 23.6343C36.2857 23.4736 36.3438 23.3112 36.4045 23.1469ZM30.1993 36.3123C30.5946 35.1093 31.0061 33.8574 31.4457 32.5172C30.9879 32.5024 30.5442 32.4866 30.1111 32.4711L30.1101 32.4711L30.1093 32.471C28.733 32.4219 27.464 32.3766 26.1914 32.3813C25.9207 32.3813 25.5085 32.7149 25.41 32.9867C25.0102 34.1136 24.6506 35.2539 24.304 36.353C24.1813 36.7422 24.0602 37.1263 23.9395 37.5028L25.1533 38.3928L25.1537 38.3931C26.331 39.2566 27.477 40.0971 28.6709 40.9686C29.1702 39.4432 29.6696 37.924 30.1976 36.3174L30.1982 36.3154L30.1993 36.3123ZM17.9038 54.7085C18.6791 52.3979 19.3989 50.2542 20.1619 47.9869C22.063 48.5862 23.8596 49.1545 25.7792 49.7662C25.6753 50.0883 25.5737 50.4053 25.4735 50.7181C25.0934 51.9051 24.7326 53.0315 24.3333 54.1463C24.2472 54.381 23.8965 54.6776 23.6627 54.6838C22.2451 54.7169 20.8203 54.7138 19.3138 54.7105C18.8522 54.7095 18.3829 54.7085 17.9038 54.7085ZM9.44763 15.4518L9.44766 15.4519C10.011 16.3225 10.5581 17.1681 10.9512 18.0807C11.6772 19.7796 11.991 21.6947 10.5636 23.1527C9.09928 24.6416 7.27809 23.9806 5.6538 23.2639C4.70014 22.8438 3.76494 22.2693 2.97741 21.5835C-0.0189243 18.9579 0.276399 14.9485 3.60497 12.7491C5.79531 11.3035 8.20099 11.0811 10.6251 11.9522C11.6772 12.329 12.2679 12.051 13.0923 11.4271C14.4767 10.383 15.9656 9.38835 17.553 8.71496C20.457 7.47938 23.2934 7.85623 25.8775 9.74667C26.4497 10.1668 27.028 10.5745 27.7663 10.7969C27.2618 10.1853 26.7573 9.57987 26.1851 8.89412C28.117 7.12724 30.2397 6.08935 32.8546 6.52798C34.7065 6.83688 35.7032 8.08481 35.6602 9.9629C35.611 12.2302 34.4789 14.0465 33.2422 15.8628C30.8488 13.4905 30.1536 10.7042 31.3595 8.60994C30.1905 8.85705 29.5875 9.57987 29.8398 10.8711C30.0859 12.1375 30.492 13.4102 31.0457 14.5716C32.6085 17.8644 32.1224 21.1078 29.323 23.4246C25.5268 26.5753 21.1277 27.4587 16.3655 26.2479C15.4488 26.0131 14.5751 25.4756 13.7814 24.9258C12.8401 24.2771 12.4032 23.4307 12.5509 22.1148C12.6986 20.7372 12.5017 19.2545 12.151 17.8953C11.6834 16.1161 10.4282 14.9114 8.68089 14.238C8.93117 14.6536 9.19108 15.0553 9.44763 15.4518ZM26.7312 23.9807C26.7441 23.9248 26.7555 23.868 26.7657 23.8107C26.8164 23.5237 26.8359 23.221 26.8549 22.9263L26.8549 22.926C26.8628 22.8039 26.8706 22.6831 26.8805 22.5654C26.8128 20.7552 26.296 19.1428 24.9547 17.9196C23.7734 16.8446 22.6105 17.1968 22.2291 18.7474L22.2153 18.8048C22.194 18.8957 22.1747 18.9864 22.1576 19.0767C21.8476 20.7142 22.2355 22.2515 23.1642 23.6531L23.1952 23.6999C23.3027 23.8619 23.4131 24.0283 23.5292 24.1897C24.0274 24.8834 24.6306 25.4862 25.5613 25.2469C25.5905 25.2395 25.62 25.2314 25.6498 25.2223C26.3238 25.0173 26.6023 24.5399 26.7312 23.9807ZM20.0895 18.8507L20.0895 18.8507C19.8078 18.5898 19.5919 18.39 19.4295 18.4266C19.1803 18.4827 18.9761 18.7317 18.7708 18.982C18.6821 19.09 18.5933 19.1984 18.5005 19.2915C18.5909 19.3748 18.6796 19.476 18.7684 19.5772C18.9694 19.8066 19.1707 20.0362 19.3926 20.0576C19.5884 20.0781 19.8058 19.8977 20.0896 19.6621L20.0896 19.6621C20.234 19.5423 20.3955 19.4083 20.5801 19.2792C20.3979 19.1362 20.2349 18.9853 20.0895 18.8507ZM28.64 16.8698L28.6397 16.8696L28.6401 16.8693C28.419 16.7319 28.2354 16.5995 28.0766 16.4851L28.0766 16.485C27.7716 16.2651 27.5585 16.1115 27.3481 16.1156C27.3427 16.1157 27.3372 16.116 27.3316 16.1165C27.0588 16.1345 26.5732 16.6188 26.6097 16.8018C26.6773 17.1293 27.0465 17.5741 27.348 17.6297C27.3759 17.6344 27.4044 17.635 27.4337 17.6318C27.5677 17.6187 27.7206 17.5227 27.9119 17.3842C27.9619 17.3482 28.0145 17.3092 28.07 17.268C28.2321 17.1479 28.4192 17.0092 28.64 16.8698Z" fill="#F58021"/>
        </svg>
        `,
        href: `#`,
        text: `The ring-tailed lemurs play in Madagascar, Lemuria Land`
    },
];

// const createListWithInnerHTML2 = (asideOpened) => {
//     const asideCloseCard = asideOpened.map(asideCards);

//     const html2 = `${asideCloseCard.join(' ')}`;
//     videoPlaceholder.innerHTML = html2;
// };
// createListWithInnerHTML2(asideOpened);



const createListWithInnerHTML3 = (asideClose) => {
    const asideCloseCard = asideClose.map(asideCards2);

    const html2 = `${asideCloseCard.join(' ')}`;
    videoPlaceholder.innerHTML = html2;
};
createListWithInnerHTML3(asideClose);



const asideOpen = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
];





const svg = document.querySelectorAll('svg path');

svg.forEach(el => {
    el.style.transition = '0.4s ease-in-out';
});
const openBtn = document.querySelector('.video-animals--openbtn');
const videoBtn = document.querySelector('.video-animals--btn');

openBtn.addEventListener('click', function() {
    openBtn.classList.toggle('active');
    videoBtn.classList.toggle('active');
});