const openPanels = document.querySelectorAll('.popup-link-not-close');
const menuPanel = document.querySelectorAll('.donation__popup-choise-content');
const overlay = document.querySelectorAll('.menu__list-overlay');
const btnMenuPanel = document.querySelectorAll('.donation__popup-input');
const popups = document.querySelectorAll('.donation__popup-choise');

const donationInformationPopup = document.querySelector('#donation_information');
const donationInformationInput = donationInformationPopup.querySelector('input[data-input]');

const select = (popup, input) => {
  popup.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'BUTTON') {
      input.value = target.textContent;
    }
  })
}

select(donationInformationPopup, donationInformationInput);


// for (let i = 0; i < popups.length; i++) {
//   for (let i = 0; i < btnMenuPanel.length; i++) {
//     popups[i].addEventListener("click", function (e) {
//       const target = e.target;
//       const tex = target.firstChild.textContent.trim();
//       const aliment = btnMenuPanel[i];
//       // setPlaceholder(tex, aliment);
//       aliment.placeholder = tex;
//     });
//   }
// }
// popups.forEach(elem => {
//     btnMenuPanel.forEach(element => {
//     elem.addEventListener("click", function (e) {
//         const target = e.target;
//         const tex = target.firstChild.textContent.trim();
//         const aliment = element;
//             setPlaceholder(tex, aliment);
//             e.preventDefault();
//         });
//     });
// });

function setPlaceholder(tex, aliment) {
  aliment.placeholder = tex;
}


for (let i = 0; i < openPanels.length; i++) {
  const openPanelActive = openPanels[i];
  const overlayActive = overlay[i];
  openPanelActive.addEventListener("click", function (e) {
    const openPanelName = openPanelActive.getAttribute('href').replace('#', '');
    const curentopenPanel = document.getElementById(openPanelName);
    openPanel(curentopenPanel, overlayActive);
    e.preventDefault();
  });
}

function openPanel(curentopenPanel, overlayActive) {
  curentopenPanel.classList.add('open');
  overlayActive.classList.add('active');
  overlayActive.addEventListener('click', function () {
    curentopenPanel.classList.remove('open');
    overlayActive.classList.remove('active');
  });
}

// if (openPanels.length > 0) {
//     for (let index = 0; index < openPanels.length; index++) {
//         const openPanel = openPanels[index];
//         openPanel.addEventListener("click", function (e) {
//             const openPanelName = openPanel.getAttribute('href').replace('#', '');
//             const curentopenPanel = document.getElementById(openPanelName);
//             OpenPanele(curentopenPanel);
//             e.preventDefault();
//         });
//     }
// }

// function OpenPanele(curentopenPanel) {
//     if (curentopenPanel) {
//         curentopenPanel.classList.add('open');
//         menuList.classList.add("active");
//         curentopenPanel.addEventListener("click", function (e) {
//             if (!e.target.closest('.donation__popup-choise')) {
//                 ClosePanele(e.target.closest('.donation__popup-choise-content'));
//             }
//         });
//     }
// }

// function ClosePanele() {
//     menuPanel.classList.remove('open');
//     menuList.classList.remove("active");
// }

// document.addEventListener("click", function (e) {
//     const target = e.target;
//     const itsMenu = target == menuPanel || menuPanel.contains(target);
//     const itsBtnMenu = target == btnMenuPanel;
//     const menuIsActive = menuPanel.classList.contains("open");
//     if (!itsMenu && !itsBtnMenu && menuIsActive) {
//         ClosePanele();
//     }
// });

