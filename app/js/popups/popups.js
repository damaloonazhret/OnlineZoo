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
console.log(checkDate);




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
        curentPopup.addEventListener("click", function (e) {
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
                    validadion();
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

