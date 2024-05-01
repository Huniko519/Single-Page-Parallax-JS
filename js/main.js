;(function () {

	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#p-offcanvas, .js-p-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-p-nav-toggle').removeClass('active');

	    	}


	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="p-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-p-nav-toggle p-nav-toggle p-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#p-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#p-offcanvas').append(clone2);

		$('#p-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#p-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-p-nav-toggle').removeClass('active');

	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-p-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

	var fullHeight = function() {
		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var scrolled = function() {
		$(window).scroll(function(){
			var $win = $(window);

			if ( $win.scrollTop() > 100 ) {
				$('.p-nav').addClass('scrolled');
			} else {
				$('.p-nav').removeClass('scrolled');
			}
		});
	};


	// Loading page
	var loaderPage = function() {
		$(".p-loader").fadeOut("slow");
	};


	var counterWayPoint = function() {
		if ($('#p-counter').length > 0 ) {
			$('#p-counter').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var heroParallax = function() {
		// ParallaxJS
		var scene = document.getElementById('scene');
		var parallax = new Parallax(scene, {
		  selector: '.layer'
		});
		// Particle JS
		particlesJS("snowfall", {
		  "particles": {
			 "number": {
				"value": 1000
			 },
			 "shape": {
				"type": "circle"
			 },
			 "size": {
				"value": 2,
				"random": true
			 },
			 "line_linked": {
				"enable": false
			 },
			 "move": {
				"enable": true,
				"speed": 10,
				"direction": "bottom",
				"straight": true
			 }
		  },
		  "interactivity": {
			 "detect_on": "canvas",
			 "events": {
				"onhover": {
				  "enable": false
				}
			 },
			 "modes": {
				"push": {
				  "particles_nb": 2
				}
			 }
		  }
		});
	};

	var sliderMain = function() {
		new Swiper ('.swiper-container', {
			speed: 400,
			spaceBetween: 100,
			initialSlide: 0,
			autoHeight: false,
			direction: 'horizontal',
			loop: true,
			autoplay: 5000,
			autoplayStopOnLast: false,
			pagination: '.swiper-pagination',
			paginationType: "bullets",
			effect: 'slide',
			spaceBetween: 10,
			slidesPerView: 4,
			slidesOffsetBefore: 0,
			grabCursor: true,
			breakpoints: {
			  640: {
				slidesPerView: 1.25,
				spaceBetween: 20
			  },
			  1024: {
				slidesPerView: 2,
				spaceBetween: 20
			  }
			}
		  })

	};

	var parallax = function() {
		if ( !isMobile.any() ) {
			$(window).stellar();
		}
	};

	var DateTimePickerFunc = function() {
		if ($('#taskdatetime').length > 0) {
			$('#taskdatetime').datetimepicker();
		}
	}

	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		heroParallax();
		sliderMain();
		dropdown();
		scrolled();
		loaderPage();
		counterWayPoint();
		fullHeight();
		parallax();
		DateTimePickerFunc();

		$('.p-bg-img').each(function(){
   		$(this).css('width', '100%');
   	});
		// zoomFunc();
	});


}());