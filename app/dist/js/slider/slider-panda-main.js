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
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

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




const openBtn = document.querySelectorAll('.video-animals--openbtn');
const videoBtn = document.querySelectorAll('.video-animals--btn');
const videoBtnAfter = document.querySelector('.video-animals--btn');
const videoMenu = document.querySelector('.video-menu');
const videoMenuBoxContainer = document.querySelectorAll('.video-menu__box-container');
const videoMenuhov = document.querySelectorAll('.video-animals--hov');
const videoMenuBoxOpen = document.querySelectorAll('.video-menu__box-open');
const videoMenuBox = document.querySelectorAll('.video-menu__box');
const menuMobile = document.querySelector('.video-menu__mobile');
const openBtned = document.querySelector('.video-animals--openbtned');
const videoPlaceholder = document.querySelector('.video__head-video');

for (let i = 0; i < 2; i++) {
    openBtn[i].addEventListener('click', function (e) {
        e.preventDefault();
        videoMenuhov.forEach(el => {
            el.classList.toggle('disable');
        });
        videoMenuBoxOpen[i].classList.toggle('active');
        videoMenu.classList.toggle('active');
        openBtn[i].classList.toggle('active');
        videoBtn[i].classList.toggle('active');
        menuMobile.classList.toggle('active');
        videoMenuBoxContainer[i].classList.toggle('active');
        openBtned.classList.toggle('active');
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

const headerPageWidth = (document.querySelector('.header-page').clientWidth);
let borderImage = `3px solid #f58021`;
if (headerPageWidth < 656) {
    borderImage = `2px solid #f58021`;
}
function checkBorder(videoSlider) {
for (let i = 0; i < 7; i++) {
    videoSlider[i].children[0].style.border = '2px solid #f5802100';
    }
}
const videoSlider = document.querySelectorAll('.video__head-more-slider-box div div');

const videoStoragePanda = [
    [`<iframe src="https://www.youtube.com/embed/I-ovzUNno7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/tNi03SSDnt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/DVDfadNX2XY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/ZkyH7NzK98I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/_fh0SEiw8F4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/IL_Y9411CYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/93hq0YU3Gqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`]
];


const onButtonClickSliderPanda = (el) => () => {
    console.log(el);
    videoPlaceholder.innerHTML = videoStoragePanda[el.id][0];
    checkBorder(videoSlider);
    el.children[0].style.border = borderImage;
};

videoSlider.forEach(el => {
    el.addEventListener('click', onButtonClickSliderPanda(el));
});
const videoBtnRight = document.querySelector('.video__head-more--btn-right');
const videoBtnLeft = document.querySelector('.video__head-more--btn-left');
const videoContainerSlider = document.querySelector('.video__head-more-slider-box-container');
const videoSliderBox = document.querySelector('.video__head-more-slider-box');
const imgVideoSlider = document.querySelector('.video__head-more-slider-box-img-3');
const imgVideoSliderWidth = imgVideoSlider.clientWidth;
const videoSliderBoxGap = ((videoSliderBox.clientWidth / 3) - imgVideoSliderWidth);
console.log(videoSliderBoxGap);

let indexVS = 0;

const onButtonClick = (direction) => () => {
    switch (direction) {
        case 'left':
            indexVS > -3 && indexVS--;
            break;
        case 'right':
            indexVS < 3 && indexVS++;
            break;
        default:
            break;
    }
    console.log(indexVS);
    if (indexVS == 3) {
        indexVS = -2;
    }
    if (indexVS == -3) {
        indexVS = 2;
    }
    videoContainerSlider.style.transition = "transform .5s ease-in-out";
    videoContainerSlider.style.transform = "translateX(" + (-indexVS * (imgVideoSliderWidth + videoSliderBoxGap)) + 'px';
    videoBtnRight.setAttribute("disabled", "disabled");
    videoBtnLeft.setAttribute("disabled", "disabled");
};

const onSlidesBoxTransitionEnd = () => {
	videoBtnRight.removeAttribute('disabled');
	videoBtnLeft.removeAttribute('disabled');
};

videoBtnRight.addEventListener('click', onButtonClick('right'));
videoBtnLeft.addEventListener('click', onButtonClick('left'));

videoContainerSlider.addEventListener('transitionend', onSlidesBoxTransitionEnd);
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

const svg = document.querySelectorAll('svg path');

svg.forEach(el => {
    el.style.transition = '0.4s ease-in-out';
});