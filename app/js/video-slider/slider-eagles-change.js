const videoSliderEagles = document.querySelectorAll('.slider-box-eagles div');
const videoNextStartEagles = `<iframe src="https://www.youtube.com/embed/3dEbq6Or-jU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
const videoNextEagles = `<iframe src="https://www.youtube.com/embed/UVeI91_yNH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
const videoNextTwoEagles = `<iframe src="https://www.youtube.com/embed/qmAJLsmK1Eo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
videoSliderEagles[0].addEventListener('click', function() {
    videoPlaceholder.innerHTML = videoNextStartEagles;
});
videoSliderEagles[1].addEventListener('click', function() {
    videoPlaceholder.innerHTML = videoNextEagles;
});
videoSliderEagles[2].addEventListener('click', function() {
    videoPlaceholder.innerHTML = videoNextTwoEagles;
});