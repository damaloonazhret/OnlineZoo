const videoSliderGorrila = document.querySelectorAll('.slider-box-gorila div div');


const videoStorageGorilla = [
    [`<iframe src="https://www.youtube.com/embed/C5n0TOVM2LM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/y5_E52MZsIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/xng29b5g708" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/gRy-xnLUkZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/pEwSaEJ2S9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/TxLejciGDtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
    [`<iframe src="https://www.youtube.com/embed/__cqdc-dxWg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`]
];

const onButtonClickSlider = (el) => () => {
    console.log(el);
    videoPlaceholder.innerHTML = videoStorageGorilla[el.id][0];
    checkBorder(videoSliderGorrila);
    el.children[0].style.border = borderImage;
};

videoSliderGorrila.forEach(el => {
    el.addEventListener('click', onButtonClickSlider(el));
});
