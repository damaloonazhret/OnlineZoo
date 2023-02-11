const openPanels = document.querySelectorAll('.popup-link-not-close');
const menuPanel = document.querySelectorAll('.donation__popup-choise-content');
const overlay = document.querySelectorAll('.menu__list-overlay');
const btnMenuPanel = document.querySelectorAll('.donation__popup-input');
const popups = document.querySelectorAll('.donation__popup-choise');
const arrowBox = document.querySelectorAll('.donation__popup-input-container-box');
const buttonDollars = document.querySelectorAll('.donation__popup-price input');
const clearInput = document.querySelector('.donation__popup-clear-block');

buttonDollars.forEach(el => {
    el.addEventListener('click', function () {
        if (!el.classList.contains('active')) {
            searchButton();
            el.classList.add('active');
            el.setAttribute('name', 'donationAmount');
        }
    });
});

function searchButton() {
    buttonDollars.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
            el.removeAttribute('name');
            clearInput.removeAttribute('name');
        }
    });
}

clearInput.addEventListener('click', function () {
    clearInput.setAttribute('name', 'donationAmount');
    searchButton();
});




const donationInformationSelect = document.querySelector('#donation_information');
const donationInformationSelectTwo = document.querySelector('#donation_information_2');
const donationInformationSelectThree = document.querySelector('#donation_information_3');
const donationInformationInput = donationInformationSelect.querySelector('input[data-input]');
const donationInformationInputTwo = donationInformationSelectTwo.querySelector('input[data-input]');
const donationInformationInputThree = donationInformationSelectThree.querySelector('input[data-input]');

const selectItem = (popup, input) => {
    popup.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName === 'P') {
            input.value = target.textContent;
            formData.fullName = target.textContent;
        }
    });
};
selectItem(donationInformationSelect, donationInformationInput);
selectItem(donationInformationSelectTwo, donationInformationInputTwo);
selectItem(donationInformationSelectThree, donationInformationInputThree);


function serializeForm(formNode) {
    console.log(formNode.elements);
}

function handleFormSubmit(event) {
    event.preventDefault();
    for (let i = 0; i < applicantForms.length; i++) {
        const el = applicantForms[i];
        serializeForm(el);
    }

}




const applicantForms = document.querySelectorAll('.save-data');

for (let i = 0; i < applicantForms.length; i++) {
    const applicantForm = applicantForms[i];
    applicantForm.addEventListener('submit', function (e) {
        handleFormSubmit(e);
    });
}






function serializeForm(formNode) {
    const { elements } = formNode;

    const data = Array.from(elements)
        .map((element) => {
            const { name, type } = element;
            const value = type === 'checkbox' ? element.checked : element.value

            return { name, value };
        })
        .filter((item) => !!item.name);
    const obj = Object.assign({}, data);
    console.log(obj);
}

function serializeForm(formNode) {
    const { elements } = formNode;

    Array.from(elements)
        .map((element) => {
            const { name, type } = element;
            const value = type === 'checkbox' ? element.checked : element.value
            formData[name] = value;
            return { name, value };
        })
        .filter((item) => !!item.name);
    console.log(formData);
}
// function serializeForm(formNode) {
//     const { elements } = formNode;

//     Array.from(elements)
//         .forEach((element) => {
//             const { name, value } = element;
//             formData[name] = value;
//         });
//     console.log(formData);
// }

const formData = {
    donationAmount: '',
    specialPet: '',
    isGift: false,
    fullName: '',
    email: '',
    cardNumber: '',
    cvv: '',
    expMonth: '',
    expYear: '',
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




