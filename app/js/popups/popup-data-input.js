const favorite = document.querySelector('.donation__popup-basic');
const favoreteVisible = document.querySelector('.donation__popup-choise');

favorite.addEventListener("click", function () {
    favoreteVisible.classList.toggle('visible-popup');
});