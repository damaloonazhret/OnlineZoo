const mobileSlider = document.querySelector('.care-animals__mobile-slider');
const mobileSliderBox = document.querySelector('.care-animals__mobile-box');
const mobilePoints = document.querySelectorAll('.care-animals__mobile-points div');



// mobileSlider.addEventListener('click', function() {
//     mobileSlider.style.transform += "translateX(" + (-mobileSliderBox.clientWidth - 40) + 'px';
// });
mobilePoints.forEach(div => {
    div.addEventListener('click', function () {
        mobileSlider.style.transform = "translateX(" + ((-mobileSliderBox.clientWidth - 40) * div.id) + 'px';
        checkPointActive();
        div.classList.add('active');
    });
});

let indexVHS = 0;

function pointSlider(direction) {
    if (direction == 'left'){
        indexVHS > 0 && indexVHS--;
    } 
    if (direction == 'right') {
        indexVHS < 3 && indexVHS++;
    }
    console.log(indexVHS);
    checkPointActive();
    mobilePoints[indexVHS].classList.add('active');
    mobileSlider.style.transform = "translateX(" + ((-mobileSliderBox.clientWidth - 40) * indexVHS) + 'px';
}

const sliderTouch = document.querySelector(".care-animals__mobile");
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
	if (e.changedTouches[0].pageX > startPoint + sliderTouch.offsetWidth / 14) {
		console.log("направо");
        pointSlider('left');
		moved = true;
	}
	if (e.changedTouches[0].pageX < startPoint - sliderTouch.offsetWidth / 14) {
        pointSlider('right');
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

function checkPointActive() {
    mobilePoints.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
        }
    });
}
