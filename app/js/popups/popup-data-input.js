const openPanels = document.querySelectorAll('.popup-link-not-close');
const menuPanel = document.querySelector('.donation__popup-choise-content');
const menuList = document.querySelector('.menu__list-overlay');
const btnMenuPanel = document.querySelector('.donation__popup-basic');

if (openPanels.length > 0) {
    for (let index = 0; index < openPanels.length; index++) {
        const openPanel = openPanels[index];
        openPanel.addEventListener("click", function (e) {
            const openPanelName = openPanel.getAttribute('href').replace('#', '');
            const curentopenPanel = document.getElementById(openPanelName);
            OpenPanele(curentopenPanel);
            e.preventDefault();
        });
    }
}

function OpenPanele(curentopenPanel) {
    if (curentopenPanel) {
        curentopenPanel.classList.add('open');
        menuList.classList.add("active");
        curentopenPanel.addEventListener("click", function (e) {
            if (!e.target.closest('.donation__popup-choise')) {
                ClosePanele(e.target.closest('.donation__popup-choise-content'));
            }
        });
    }
}

function ClosePanele() {
    menuPanel.classList.remove('open');
    menuList.classList.remove("active");
}

document.addEventListener("click", function (e) {
    const target = e.target;
    const itsMenu = target == menuPanel || menuPanel.contains(target);
    const itsBtnMenu = target == btnMenuPanel;
    const menuIsActive = menuPanel.classList.contains("open");
    if (!itsMenu && !itsBtnMenu && menuIsActive) {
        ClosePanele();
    }
});
