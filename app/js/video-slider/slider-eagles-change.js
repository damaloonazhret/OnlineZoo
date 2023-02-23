const videoSliderEagles = document.querySelectorAll('.slider-box-eagles div div');
const videoStorage = [
    [`<iframe src="https://www.youtube.com/embed/3dEbq6Or-jU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/UVeI91_yNH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/qmAJLsmK1Eo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/AZbClwCixI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/9lZbexVhb-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/Y_4z455r-Sg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/alfGV_cmQMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`]
];

const onButtonClickSlider = (el) => () => {
    console.log(el);
    videoPlaceholder.innerHTML = videoStorage[el.id][0];
    checkBorder();
    el.children[0].style.border = borderImage;
    // el.classList.add('active');
};

videoSliderEagles.forEach(el => {
    el.addEventListener('click', onButtonClickSlider(el));
});