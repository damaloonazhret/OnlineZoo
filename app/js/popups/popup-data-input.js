const favorite = document.querySelector('.donation__popup-special-clear-block');
const favoreteVisible = document.querySelector('.donation__popup-choise');

favorite.addEventListener("click", function () {
    favoreteVisible.classList.toggle('visible-popup');
});