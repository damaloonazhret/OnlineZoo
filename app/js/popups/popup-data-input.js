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
            firstPageSpecBlock.classList.remove('activeBtn');
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




