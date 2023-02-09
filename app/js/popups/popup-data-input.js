const openPanels = document.querySelectorAll('.popup-link-not-close');
const menuPanel = document.querySelectorAll('.donation__popup-choise-content');
const overlay = document.querySelectorAll('.menu__list-overlay');
const btnMenuPanel = document.querySelectorAll('.donation__popup-input');

console.log(openPanels);
console.log(menuPanel);
console.log(overlay);
console.log(btnMenuPanel);

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
