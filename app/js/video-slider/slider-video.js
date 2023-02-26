const videoBtnRight = document.querySelector('.video__head-more--btn-right');
const videoBtnLeft = document.querySelector('.video__head-more--btn-left');
const videoContainerSlider = document.querySelector('.video__head-more-slider-box-container');
const videoSliderBox = document.querySelector('.video__head-more-slider-box');
const imgVideoSlider = document.querySelector('.video__head-more-slider-box-img-2');
const videoWidth = (document.querySelector('.video').clientWidth);
const imgVideoSliderWidth = imgVideoSlider.clientWidth;
const videoSliderBoxGap = ((videoSliderBox.clientWidth / 3) - imgVideoSliderWidth);
const videoSliderBoxGapMini = ((videoSliderBox.clientWidth / 2) - imgVideoSliderWidth);
let widthImg = 0;

console.log(videoSliderBox.clientWidth);
console.log(imgVideoSliderWidth);
console.log(videoSliderBoxGapMini);

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
    if (videoWidth < 600) {
        widthImg = videoSliderBoxGapMini;
        console.log(indexVS);
        if (indexVS == 3) {
            indexVS = -2;
        }
        if (indexVS == -3) {
            indexVS = 2;
        }
        console.log(indexVS);
    } else {
        widthImg = videoSliderBoxGap;
        if (indexVS == 3) {
            indexVS = -2;
        }
        if (indexVS == -3) {
            indexVS = 2;
        }
    }
    

    videoContainerSlider.style.transition = "transform .5s ease-in-out";
    videoContainerSlider.style.transform = "translateX(" + (-indexVS * (imgVideoSliderWidth + widthImg)) + 'px';
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


const sliderTouch = document.querySelector(".video__head-more-slider-box");
let startPoint;
let moved = false;
function touch(e) {
	startPoint = e.changedTouches[0].pageX;
}
function move(e) {
	if (moved) {
		return;
	}
	e.preventDefault();
	if (e.changedTouches[0].pageX > startPoint + sliderTouch.offsetWidth / 4) {
		console.log("направо");
        onButtonClick('left')();
		moved = true;
	}
	if (e.changedTouches[0].pageX < startPoint - sliderTouch.offsetWidth / 4) {
		console.log("налево");
        onButtonClick('right')();
		moved = true;
	}
}
sliderTouch.addEventListener("touchmove", move);
sliderTouch.addEventListener("touchstart", touch);
sliderTouch.addEventListener("touchend", () => {
	setTimeout(() => {
		moved = !moved;
	}, 200);
});