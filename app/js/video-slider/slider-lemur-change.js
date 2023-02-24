const videoSliderLemur = document.querySelectorAll('.slider-box-lemur div div');
const videoStorageLemur = [
    [`<iframe src="https://www.youtube.com/embed/7chJ5pTIXiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/eCfKfG7U-Kw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/366SjWNtpE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/28o1nAtLb58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/ykXTDY2mvcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/PXt1FPK_apo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/pOnGZ2BlFy8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`]
];

const onButtonClickSlider = (el) => () => {
    console.log(el);
    videoPlaceholder.innerHTML = videoStorageLemur[el.id][0];
    checkBorder(videoSliderLemur);
    el.children[0].style.border = borderImage;
};

videoSliderLemur.forEach(el => {
    el.addEventListener('click', onButtonClickSlider(el));
});
