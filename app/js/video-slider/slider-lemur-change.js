const videoSliderLemur = document.querySelectorAll('.slider-box-lemur div');
const videoNextStartLemur = `<iframe src="https://www.youtube.com/embed/TH__ublmwDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
const videoNextLemur = `<iframe src="https://www.youtube.com/embed/j7rPzCmYygg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
const videoNextTwoLemur = `<iframe src="https://www.youtube.com/embed/_2f2bhbtYFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
videoSliderLemur[0].addEventListener('click', function() {
    videoPlaceholder.innerHTML = videoNextStartLemur;
});
videoSliderLemur[1].addEventListener('click', function() {
    videoPlaceholder.innerHTML = videoNextLemur;
});
videoSliderLemur[2].addEventListener('click', function() {
    videoPlaceholder.innerHTML = videoNextTwoLemur;
});