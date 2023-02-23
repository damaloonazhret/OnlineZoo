const videoSliderGorrila = document.querySelectorAll('.slider-box-gorila div');
const videoNextStartGorrila = `<iframe src="https://www.youtube.com/embed/VC8I4OQY7sE" title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>`;
const videoNextGorrila = `<iframe src="https://www.youtube.com/embed/iAIi5DZddkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
const videoNextTwoGorrila = `<iframe src="https://www.youtube.com/embed/x7O17LygDVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
videoSliderGorrila[0].addEventListener('click', function() {
    videoPlaceholder.innerHTML = videoNextStartGorrila;
});
videoSliderGorrila[1].addEventListener('click', function() {
    videoPlaceholder.innerHTML = videoNextGorrila;
});
videoSliderGorrila[2].addEventListener('click', function() {
    videoPlaceholder.innerHTML = videoNextTwoGorrila;
});