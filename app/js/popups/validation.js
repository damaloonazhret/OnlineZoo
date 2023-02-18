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
];

popupFirstValidate.addEventListener('click', function () {
    if (inputPopupValidate[0].placeholder !== 'Choose your favourite') {
        btnMenuPanel[0].style.border = '1px solid #000000';
        firstPageSelect.classList.remove('active');
    }
    if (inputPopupValidate[0].placeholder !== 'Choose your favourite' && clearInput.value !== '') {
        buttonBlock[0].classList.add('hidden');
    }
});

popupFirstValidate.addEventListener('keyup', function () {
    if (clearInput.value !== '') {
        clearInput.style.border = '1px solid #000000';
        firstPageInput.classList.remove('active');
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
    }
});

buttonBlock[2].addEventListener('click', function () {
    if (validateCard(checkBoxCard)) {
        checkBoxCard.style.border = '2px solid #ff8400';
        // creditError.classList.add('donation__popup-credit-error');
        popupCard.style.marginTop = '-30px';
        cardInputContainer.classList.add('active');
    }
    if (validateCVV(checkBoxCVV)) {
        checkBoxCVV.style.border = '2px solid #ff8400';
        // creditError.classList.add('donation__popup-credit-error');
        popupCVV.style.marginTop = '-30px';
        CVVInputContainer.classList.add('active');
    }
    if (validateMonth(inputPopupValidate[1])) {
        inputPopupValidate[1].style.border = '2px solid #ff8400';
        expirationError.classList.add('donation__popup-expiration-error');
        inputContainer[1].classList.add('active');
    }
    if (validateYear(inputPopupValidate[2])) {
        inputPopupValidate[2].style.border = '2px solid #ff8400';
        expirationError.classList.add('donation__popup-expiration-error');
        inputContainer[2].classList.add('active');
    }
});



for (let i = 4; i < 6; i++) {
    inputBorder[i].addEventListener('keyup', function () {
        if (!validateCard(checkBoxCard)) {
            checkBoxCard.style.border = '1px solid #000000';
            cardInputContainer.classList.remove('active');
            popupCard.style.marginTop = '';
        }
        if (!validateCVV(checkBoxCVV)) {
            checkBoxCVV.style.border = '1px solid #000000';
            CVVInputContainer.classList.remove('active');
            popupCVV.style.marginTop = '';
        }
    });
}

// for (let i = 1; i < 3; i++) {
popupThreeValidate.addEventListener('click', function () {
    if (!validateMonth(inputPopupValidate[1])) {
        inputPopupValidate[1].style.border = '1px solid #000000';
        inputContainer[1].classList.remove('active');
    }
    if (!validateYear(inputPopupValidate[2])) {
        inputPopupValidate[2].style.border = '1px solid #000000';
        inputContainer[2].classList.remove('active');
    }
    if (!validateMonth(inputPopupValidate[1] && !validateYear(inputPopupValidate[2]))) {
        expirationError.classList.remove('donation__popup-expiration-error');
    }
});
// }



