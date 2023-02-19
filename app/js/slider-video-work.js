const openBtn = document.querySelector('.video-animals--openbtn');
const videoBtn = document.querySelector('.video-animals--btn');

openBtn.addEventListener('click', function() {
    openBtn.classList.toggle('active');
    videoBtn.classList.toggle('active');
});