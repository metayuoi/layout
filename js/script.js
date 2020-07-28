$(".header__menu-button").on("click", function(e) {
	$(this).toggleClass("opened");
	$("main").toggle();
	$("footer").toggle();
	$(".header__call-wrapper").toggle();
	$(".header__navigation-list").toggle();
	$(".header__navigation-list").toggleClass("mobile");
})

$(".header__navigation-list").on("click", function(e) {	
	if ($(this).hasClass("mobile")) {
		$(".header__menu-button").toggleClass("opened");
		$("main").toggle();
		$("footer").toggle();
		$(".header__call-wrapper").toggle();
		$(".header__navigation-list").toggle();
		$(".header__navigation-list").toggleClass("mobile");
	}
})

function countSlidesPerView() {
	if ($(window).width() > 1350) {
		return 3;
	}
	else if ($(window).width() > 500) {
		return 2;
	}
	else return 1;
}

var swiper = new Swiper('.examples-list', {
	slidesPerView: countSlidesPerView(),
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		 nextEl: '.examples-article__slider-button_left',
		 prevEl: '.examples-article__slider-button_right',
	},
});

$(window).resize(function() {
	swiper = new Swiper('.examples-list', {
		slidesPerView: countSlidesPerView(),
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			 nextEl: '.examples-article__slider-button_left',
			 prevEl: '.examples-article__slider-button_right',
		},
	});
})

$("body").on("click", function(e) {
	if ($(e.target).hasClass("header__call-button") || $(e.target).hasClass("contact-list__button") || $(e.target).parent().hasClass("form__close-button_call")) {
		$(".form_call").fadeToggle(800);
	}
	
	else if ($(e.target).hasClass("description-article__button") || $(e.target).hasClass("services-article__button") || $(e.target).hasClass("examples-article__button") || $(e.target).parent().hasClass("form__close-button_order")) {
		$(".form_order").fadeToggle(800);
	}
})

$(".form").on("click", function(e) {
	if ($(e.target).hasClass("form__wrapper")) {
		$(this).fadeToggle(800);
	}
})

$("body").on('click', '[href*="#"]', function(e){
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top}, 800);
  e.preventDefault();
});