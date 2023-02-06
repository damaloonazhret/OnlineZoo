const favorite = document.querySelector('.popup-link-in');
const favoreteVisible = document.querySelector('.donation__popup-choise');




favorite.addEventListener("click", function (e) {
    const popupNameIn = favorite.getAttribute('href').replace('#', '');
    const curentPopupIn = document.getElementById(popupNameIn);
    popupOpenIn(curentPopupIn);
    e.preventDefault();
});

function popupOpenIn(curentPopupIn) {
    favoreteVisible.classList.add('visible-popup');
    favoreteVisible.addEventListener("click", function (e) {
            if (e.target.closest('.donation__popup-choise-container')) {
                popupCloseIn(favoreteVisible);
            }
        });
}

function popupCloseIn(x) {
    favoreteVisible.classList.remove('visible-popup');
}
