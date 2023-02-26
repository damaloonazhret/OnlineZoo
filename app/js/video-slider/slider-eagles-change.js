const videoSliderEagles = document.querySelectorAll('.slider-box-eagles div div');
const videoStorageEagles = [
    [`<iframe src="https://www.youtube.com/embed/1zwLNlUWATo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/l7YR1NrlKlo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/OfifkMCPUCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/ZkQrMB56DWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/-LX5YnMBe5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/YCwDg8IAb3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/uNoaioMQWUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`]
];

const onButtonClickSlider = (el) => () => {
    videoPlaceholder.innerHTML = videoStorageEagles[el.id][0];
    checkBorder(videoSliderEagles);
    el.children[0].style.border = borderImage;
};

videoSliderEagles.forEach(el => {
    el.addEventListener('click', onButtonClickSlider(el));
});