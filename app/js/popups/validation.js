const inputPopupValidate = document.querySelector('.donation__popup-input');
const buttonBlock = document.querySelectorAll('.block');
const popupFirstValidate = document.getElementById('popup');
const popupTwoValidate = document.getElementById('popup_2');
const inputName = document.querySelector('.donation__popup-name-input');
const inputEmail = document.querySelector('.donation__popup-email-input');
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const htmll = document.querySelector('html');
const firstPageInput = document.querySelector('.donation__popup-clear-block-container span');
const firstPageSelect = document.querySelector('.donation__popup-input-container-box-content span');
const secondPageName = document.querySelector('.donation__popup-name span');
const secondPageEmail = document.querySelector('.donation__popup-email span');

popupFirstValidate.addEventListener('click', function () {
    if (inputPopupValidate.placeholder !== 'Choose your favourite') {
        btnMenuPanel[0].style.border = '1px solid #000000';
        firstPageSelect.classList.remove('active');
    }
    if (inputPopupValidate.placeholder !== 'Choose your favourite' && clearInput.value !== '') {
        buttonBlock[0].classList.add('hidden');
    }
});

popupFirstValidate.addEventListener('keyup', function () {
    if (clearInput.value !== '') {
        clearInput.style.border = '1px solid #000000';
        firstPageInput.classList.remove('active');
    }
    if (inputPopupValidate.placeholder !== 'Choose your favourite' && clearInput.value !== '') {
        buttonBlock[0].classList.add('hidden');
    }
});


buttonBlock[0].addEventListener('click', function () {
    if (inputPopupValidate.placeholder == 'Choose your favourite') {
        btnMenuPanel[0].style.border = '2px solid #ff8400';
        firstPageSelect.classList.add('active');
    } if (clearInput.value == '') {
        clearInput.style.border = '2px solid #ff8400';
        asyncTimeoutInput();
        firstPageInput.classList.add('active');
    }
});

popupFirstValidate.addEventListener('mousemove', function() {
    if (inputPopupValidate.placeholder == 'Choose your favourite' || clearInput.value == '') {
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
    if (!validateEmail(inputEmail) || !validateName(inputName)){
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