$(function () {


	$('.pets-bottom').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		/* variableWidth: true, */
		/* centerMode: true, */
		rows: 2,
		prevArrow: '<img class="slider-arrows slider-arrows__left"/>',
		nextArrow: '<img class="slider-arrows slider-arrows__rigth"/>',

		responsive: [
			{
				breakpoint: 1300,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					/* variableWidth: true, */
					centerMode: true,
					rows: 2,
				}
			}
		]



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