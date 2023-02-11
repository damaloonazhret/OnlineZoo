const openPanels = document.querySelectorAll('.popup-link-not-close');
const menuPanel = document.querySelectorAll('.donation__popup-choise-content');
const overlay = document.querySelectorAll('.menu__list-overlay');
const btnMenuPanel = document.querySelectorAll('.donation__popup-input');
const popups = document.querySelectorAll('.donation__popup-choise');
const arrowBox = document.querySelectorAll('.donation__popup-input-container-box');

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
            // console.log(formData);
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
    serializeForm(applicantForm);
}

const applicantForm = document.getElementById('popup_3');
applicantForm.addEventListener('submit', handleFormSubmit);

function serializeForm(formNode) {
    const { elements } = formNode;

    Array.from(elements)
        .forEach((element) => {
            const { name, value } = element;
            console.log({ name, value });
        });
}




// document.querySelector('.donation__popup-choise button').addEventListener("click", function(e) {
//     const target = e.target;
//     // formData.fullName = this.value.target.textContent;
//     console.log(formData);
// });



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




