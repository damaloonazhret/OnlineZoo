let indexR = 2;

const arrowLeftReview = doc.querySelector('.pets-btn-left'),
    arrowRightReviev = doc.querySelector('.pets-btn-right'),
    sliderStrip = doc.querySelector('.pets-think__box-slider-strip'),
    grid = doc.querySelector('.pets-think__box-slider-container'),
    gridChild = doc.querySelector('.pets-think__box-slider-box'),
    slidesReview = doc.querySelectorAll('.pets-think__box-slider-container'),
    gridChildWidth = (gridChild.clientWidth),
    gridWidth = (grid.clientWidth),
    gap = (gridWidth - (gridChildWidth * 2)),
    translateWidth = (gap + gridWidth);


sliderStrip.style.transform = 'translateX(' + (-indexR * translateWidth) + 'px';

const onButtonClickReview = (direction) => () => {
	switch (direction) {
		case 'left':
			indexR > 0 && indexR--;
			break;
		case 'right':
			indexR < 4 && indexR++;
			break;
		default:
			break;
	}
    console.log(indexR);
	sliderStrip.style.transition = "transform .9s ease-in-out";
    sliderStrip.style.transform = "translateX(" + (-indexR * translateWidth) + 'px';
    arrowRightReviev.setAttribute("disabled", "disabled");
	arrowLeftReview.setAttribute("disabled", "disabled");
};

const onSlidesBoxTransitionEndReview = () => {
    switch (slidesReview[indexR].id) {
        case '0':
            indexR = 3;
			break;
            case '4':
                indexR = 1;
                break;
                default:
                    break;
                }
    sliderStrip.style.transition = "none";
	sliderStrip.style.transform = "translateX(" + (-indexR * translateWidth) + 'px';
	arrowRightReviev.removeAttribute('disabled');
	arrowLeftReview.removeAttribute('disabled');
};

arrowRightReviev.addEventListener('click', onButtonClickReview('right'));
arrowLeftReview.addEventListener('click', onButtonClickReview('left'));
sliderStrip.addEventListener('transitionend', onSlidesBoxTransitionEndReview);