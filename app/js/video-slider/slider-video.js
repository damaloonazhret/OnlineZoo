const videoBtnRight = document.querySelector('.video__head-more--btn-right');
const videoBtnLeft = document.querySelector('.video__head-more--btn-left');
const videoContainerSlider = document.querySelector('.video__head-more-slider-box-container');
const videoSliderBox = document.querySelector('.video__head-more-slider-box');
const imgVideoSlider = document.querySelector('.video__head-more-slider-box-img-3');
const imgVideoSliderWidth = imgVideoSlider.clientWidth;
const videoSliderBoxGap = ((videoSliderBox.clientWidth / 3) - imgVideoSliderWidth);
console.log(videoSliderBoxGap);

let indexVS = 0;

const onButtonClick = (direction) => () => {
    switch (direction) {
        case 'left':
            indexVS > -3 && indexVS--;
            break;
        case 'right':
            indexVS < 3 && indexVS++;
            break;
        default:
            break;
    }
    console.log(indexVS);
    if (indexVS == 3) {
        indexVS = -2;
    }
    if (indexVS == -3) {
        indexVS = 2;
    }
    videoContainerSlider.style.transition = "transform .5s ease-in-out";
    videoContainerSlider.style.transform = "translateX(" + (-indexVS * (imgVideoSliderWidth + videoSliderBoxGap)) + 'px';
    videoBtnRight.setAttribute("disabled", "disabled");
    videoBtnLeft.setAttribute("disabled", "disabled");
};

const onSlidesBoxTransitionEnd = () => {
	videoBtnRight.removeAttribute('disabled');
	videoBtnLeft.removeAttribute('disabled');
};

videoBtnRight.addEventListener('click', onButtonClick('right'));
videoBtnLeft.addEventListener('click', onButtonClick('left'));

videoContainerSlider.addEventListener('transitionend', onSlidesBoxTransitionEnd);