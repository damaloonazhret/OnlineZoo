const openPanels = document.querySelectorAll('.popup-link-not-close');

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
        curentopenPanel.addEventListener("click", function (e) {
            if (!e.target.closest('.donation__popup-choise')) {
                ClosePanele(e.target.closest('.donation__popup-choise-content'));
            } 
        });
    }
}

function ClosePanele(curentopenPanel) {
    curentopenPanel.classList.remove('open');
}