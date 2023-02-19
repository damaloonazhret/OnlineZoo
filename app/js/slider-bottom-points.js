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


function checkPointActive() {
    mobilePoints.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
        }
    });
}
