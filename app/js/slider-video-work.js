const openBtn = document.querySelector('.video-animals--openbtn');
const videoBtn = document.querySelector('.video-animals--btn');
const videoBtnAfter = document.querySelector('.video-animals--btn');
const videoMenu = document.querySelector('.video-menu');
const videoMenuBoxContainer = document.querySelector('.video-menu__box-container');
const videoMenuhov = document.querySelectorAll('.video-animals--hov');
const videoMenuBoxOpen = document.querySelector('.video-menu__box-open');
const videoMenuBox = document.querySelector('.video-menu__box');

openBtn.addEventListener('click', function () {
    videoMenuhov.forEach(el => {
        el.classList.toggle('disable');
    });
    videoMenuBoxOpen.classList.toggle('active');
    videoMenu.classList.toggle('active');
    openBtn.classList.toggle('active');
    videoBtn.classList.toggle('active');
    videoMenuBoxContainer.classList.toggle('active');

});


let indexV = 1;
videoBtnAfter.addEventListener('click', function () {
    videoMenuBoxOpen.style.transform = 'translateY(' + (-171 * indexV) + 'px';
    videoMenuBox.style.transform = 'translateY(' + (-171 * indexV) + 'px';
    indexV++;
    if (indexV == 5) {
        indexV = 0;
    }
});
