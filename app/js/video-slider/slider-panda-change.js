const videoSlider = document.querySelectorAll('.video__head-more-slider-box div');
const videoNextStart = `<iframe src="https://www.youtube.com/embed/sa3lP0Odkq4" title="YouTube video player"
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>`;
const videoNext = `<iframe src="https://www.youtube.com/embed/ZkcOKC6XDJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
const videoNextTwo = `<iframe src="https://www.youtube.com/embed/Dw3WNgL8PxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
videoSlider[0].addEventListener('click', function() {
    videoPlaceholder.innerHTML = videoNextStart;
});
videoSlider[1].addEventListener('click', function() {
    videoPlaceholder.innerHTML = videoNext;
});
videoSlider[2].addEventListener('click', function() {
    videoPlaceholder.innerHTML = videoNextTwo;
});