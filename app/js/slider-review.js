


function slideList () {
    const range = document.getElementById('range'),
    boxSlide = document.querySelector('.pets-think__box-slider-box'),
    boxContainer = document.querySelector('.pets-think__box-slider-container'),
    gap = (boxContainer.clientWidth - (boxSlide.clientWidth * 2)),
    translateWidth = (boxSlide.clientWidth + (gap));

    let indexR = range.value;
    boxContainer.style.transition = "transform .7s ease-in-out";
    boxContainer.style.transform = "translateX(" + (-indexR * translateWidth) + 'px';






}








// sliderStrip.style.transform = 'translateX(' + (-indexR * translateWidth) + 'px';

// const onButtonClickReview = (direction) => () => {
// 	switch (direction) {
// 		case 'left':
// 			indexR > 0 && indexR--;
// 			break;
// 		case 'right':
// 			indexR < 4 && indexR++;
// 			break;
// 		default:
// 			break;
// 	}
//     console.log(indexR);
// 	sliderStrip.style.transition = "transform .9s ease-in-out";
//     sliderStrip.style.transform = "translateX(" + (-indexR * translateWidth) + 'px';
//     arrowRightReviev.setAttribute("disabled", "disabled");
// 	arrowLeftReview.setAttribute("disabled", "disabled");
// };

// const onSlidesBoxTransitionEndReview = () => {
//     switch (slidesReview[indexR].id) {
//         case '0':
//             indexR = 3;
// 			break;
//             case '4':
//                 indexR = 1;
//                 break;
//                 default:
//                     break;
//                 }
//     sliderStrip.style.transition = "none";
// 	sliderStrip.style.transform = "translateX(" + (-indexR * translateWidth) + 'px';
// 	arrowRightReviev.removeAttribute('disabled');
// 	arrowLeftReview.removeAttribute('disabled');
// };

// arrowRightReviev.addEventListener('click', onButtonClickReview('right'));
// arrowLeftReview.addEventListener('click', onButtonClickReview('left'));
// sliderStrip.addEventListener('transitionend', onSlidesBoxTransitionEndReview);