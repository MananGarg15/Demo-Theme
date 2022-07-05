$(function(){
	'use strict';


	$('.theme_mobile_container nav').meanmenu({
		meanScreenWidth: 990,
        meanMenuContainer: ".theme_mobile_container",
        meanMenuOpen: "<span></span><span></span><span></span>",
        onePage: true,
    });

    $(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
	});

	$('.back-to-top').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});

	/* Slider */
	$('.main_slider').owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		animateIn: '',
		animateOut: '',
		autoplay : 7000,
		smartSpeed: 1000,
		autoplayTimeout: 2500,
		autoplayHoverPause:true,
		singleItem:true,
		mouseDrag: true,
		loop:true, // loop is true up to 1199px screen.
		nav: true, // is true across all sizes
		margin:-1, // margin 10px till 960 breakpoint
		autoHeight: true,
		responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
		items: 1,
		dots: true,
		navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	});

	/* testimonial slider */
	$('.testimonial_slider').owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		animateIn: '',
		animateOut: '',
		autoplay : 7000,
		smartSpeed: 1000,
		autoplayTimeout: 2500,
		autoplayHoverPause:true,
		singleItem:true,
		mouseDrag: true,
		loop:true, // loop is true up to 1199px screen.
		nav: true, // is true across all sizes
		margin:30, // margin 10px till 960 breakpoint
		autoHeight: true,
		responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
		items: 1,
		dots: false,
		navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		responsive:{
			100:{ items:1 },
			480:{ items:1 },
			768:{ items:2 },
			1000:{ items:3 }
		},
	});

	/* blog slider */
	$('.blog_slider').owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		animateIn: '',
		animateOut: '',
		autoplay : 7000,
		smartSpeed: 1000,
		autoplayTimeout: 2500,
		autoplayHoverPause:true,
		singleItem:true,
		mouseDrag: true,
		loop:true, // loop is true up to 1199px screen.
		nav: true, // is true across all sizes
		margin:30, // margin 10px till 960 breakpoint
		autoHeight: true,
		responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
		items: 1,
		dots: false,
		navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		responsive:{
			100:{ items:1 },
			480:{ items:1 },
			768:{ items:2 },
			1000:{ items:3 }
		},
	});

	/* client slider */
	$('.client_slider').owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		animateIn: '',
		animateOut: '',
		autoplay : 7000,
		smartSpeed: 1000,
		autoplayTimeout: 2500,
		autoplayHoverPause:true,
		singleItem:true,
		mouseDrag: true,
		loop:true, // loop is true up to 1199px screen.
		nav: true, // is true across all sizes
		margin:30, // margin 10px till 960 breakpoint
		autoHeight: true,
		responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
		items: 1,
		dots: false,
		navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		responsive:{
			100:{ items:1 },
			480:{ items:1 },
			768:{ items:2 },
			1000:{ items:5 }
		},
	});

	// isotope js

	var project_isotop = $('.project-isotop').isotope({
		itemSelector: '.project-item',
		layoutMode: 'masonry',
		transitionDuration: '0.8s',
		hiddenStyle: {
			opacity: 0
		},
		visibleStyle: {
			opacity: 1
		}
	});

	var filterisotop = {
		numberGreaterThan50: function() {
			var number = $(this).find('.number').text();
			return parseInt( number, 10 ) > 50;
		},
		ium: function() {
			var name = $(this).find('.name').text();
			return name.match( /ium$/ );
		}
	};

	$('.theme-nav').on( 'click', 'a', function() {
		var dataValue = $( this ).attr('data-filter');

		dataValue = filterisotop[ dataValue ] || dataValue;
		project_isotop.isotope({ filter: dataValue });
	});

	$('.theme-nav').each( function( i, theme_nav_group ) {
		var theme_nav_group_ul = $( theme_nav_group );
		theme_nav_group_ul.on( 'click', 'a', function() {
			theme_nav_group_ul.find('.active').removeClass('active');
			$( this ).addClass('active');
		});
	});

	// photobox js
	
    $('.photobox_lib').photobox('a.photobox_item', { thumbs:true, loop:true}, callback);
    setTimeout(window._photobox.history.load, 2000);
    function callback(){
		console.log('callback for loaded content:', this);
	};

	const image = document.getElementsByClassName('home_section_back_img');
	new simpleParallax(image, {
    scale: 1.5,
    delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
	});
});

new WOW().init();


