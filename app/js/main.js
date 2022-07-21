$(function () {


	/* 	$('.pets-bottom').slick({
			infinite: true,
			prevArrow: '<img class="slider-arrows slider-arrows__left"/>',
			nextArrow: '<img class="slider-arrows slider-arrows__rigth"/>',
	
			responsive: [
				{
					breakpoint: 1300,
					settings: {
						infinite: false,
						slidesToShow: 2,
						slidesToScroll: 1,
						centerMode: true,
						variableWidth: true,
						initialSlide: 0,
						rows: 2,
					}
				}
			]
		}); */

	$('.video-menu__box').slick({
		infinite: true,
		useTransform: true,
		useCSS: true,
		vertical: true,
		slidesToShow: 4,
		nextArrow: $('.video-animals--btn'),
		prevArrow: false,
	});




	/* 	$('.pets-think__box-slider').slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			variableWidth: true,
			centerMode: true,
			rows: 2,
			prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/btn-left.svg" alt="arrow-left" />',
			nextArrow: '<img class="slider-arrows slider-arrows__rigth" src="images/btn-right.svg" alt="arrow-rigth" />',
		}); */

}

)