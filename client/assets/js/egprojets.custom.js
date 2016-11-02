/*============================================ Custom Functions  ============================================*/
;(function ($, window, document, undefined) {
	'use strict';
	var _doc = $(document),
	_win = $(window),

	Egprojets = {
		name : 'Egprojets',
		version : '1.0.0',
		documentReady:function(){
			Egprojets.counterNumber(); //Count
			Egprojets.initSlide(); //Carousel
			if( !Egprojets.isMobile() ) Egprojets.initStickyNav(); //Sticky Menu
			Egprojets.goToTop(); //Scroll
			Egprojets.toogleMenu(); //Toogle Menu
			Egprojets.initFancy(); //Init FancyBox
			Egprojets.selectTable(); //Event Select Table
			Egprojets.controlForm(); // Control Form
		},

		windowLoad: function(){
			Egprojets.configGmaps(40.713905,-74.009190); //Configuration Gmaps (lat,long)
			Egprojets.configListingMenu(); //Configuration ListingMenu
			if( !Egprojets.isMobile() ) Egprojets.configParallax(); //Parallax
			Egprojets.loaderPage(); //Call Function Remove Loader Page
		},

		toogleMenu: function(){
			$(document).on('click', '.menu-mobile', function(event) {
				$(this).toggleClass('open-menu');
				event.preventDefault();
			});
		},

		goToTop: function(){
			$(document).on('click', '.footer-copyright',function(event) {
				$('html,body').animate({scrollTop:0},1500,'easeInOutQuad');
				event.preventDefault();
			});
		},

		initFancy: function(){
			$('.fancybox').fancybox({
				padding: 0,
				helpers: {
					overlay: {
						locked: false
					}
				}
			});
		},

		counterNumber: function(){
			var index = 1;
			$('#vision').appear();
			$(document.body).on('appear', '#vision', function(e, $affected) {
				if( index == 1)
				{
					$('.count').each(function () {
						$(this).prop('Counter',0).animate({
							Counter: $(this).text()},{
							duration: 2000, 
							easing: 'swing',
							step: function (now) {
								$(this).text(Math.ceil(now));
							}
						});
					});
					index++;
				}
			});
		},

		initSlide: function(){
			//Init Slide
			$('.delas-carousel').slick(
			{
				dots: true,
				adaptiveHeight: true,
				speed: 500,
				autoplay: true,
				autoplaySpeed: 5000,
				cssEase: 'linear',
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				responsive: [
				{
				  breakpoint: 992,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			]
			});

			//Init Slide Testimonials Blocs
			$('.testimonial-list').slick(
			{
				dots: false,
				adaptiveHeight: true,
				speed: 500,
				cssEase: 'linear',
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						  }
					}
				]
		  });

		  //Init Slide Events Blocs
			$('.event-carousel').slick(
			{
				dots: true,
				adaptiveHeight: true,
				autoplay: false,
				speed: 500,
				autoplaySpeed: 10000,
				cssEase: 'linear',
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [
				{
					breakpoint: 992,
					settings: {
					slidesToShow: 2,
					slidesToScroll: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1
					}
				}
				]
			});

			//Init Slide Team Blocs
			$('.team-carousel').slick(
			{
				dots: false,
				adaptiveHeight: true,
				speed: 500,
				cssEase: 'linear',
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				responsive:[
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
					},
					{
					breakpoint: 768,
					settings:{
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				]
			});

		//Init Slide Team Blocs
		$('.f-menu-list').slick(
		{
			dots: true,
			adaptiveHeight: true,
			fade: true,
			autoplay: true,
			autoplaySpeed: 10000,
			cssEase: 'linear',
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});

		//Init Slide Lunch Menu
		$('.vertical-carousel').slick(
		{
			dots: true,
			adaptiveHeight: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 8000,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade : true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						fade : false,
					}
				}
			]
			});

			//Init Slide Table
			$('.carousel-table').slick(
			{
				dots: true,
				adaptiveHeight: true,
				speed: 500,
				cssEase: 'linear',
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1
			});
		},

		selectTable: function(){
			var $val = '';
			$(document).on('click', '.carousel-table .item', function(event) {
				if( $(this).hasClass('current') )
				{
					$(this).removeClass('current')
				}
				else if( !$(this).hasClass('reserved') )
				{
					$(this).addClass('current');
					$('html,body').animate({scrollTop: ( $('#reservation').offset().top - 80 ) + 'px' },1500,'easeOutQuad');
				}
				$val = '';
				$('.current').each(function(index, el) {
					$val += $(this).find('span').text() + ',';
				});
				$('.num_table').val($val);
			});
		},

		initStickyNav: function(){
			$(window).scroll(function(){
				var scrollTop = $(window).scrollTop();
				if(scrollTop >= 50){
					if( !$(".navbar").hasClass('is-sticky') )
					{
						$(".navbar").addClass("is-sticky");
						$('.nav-top').slideUp();
					}
				}else{
					$(".navbar").removeClass("is-sticky");
					$('.nav-top').slideDown(800);
				}
			});
		},

		configParallax: function(){
			$( '.parallax-window' ).each(function(){
				$( this ).parallax( $.extend( true,{
					lazyLoad: true, 
					mode: 'parallax',
					speedFactor: 0.3
				},	$( this ).data() ) );
			});
		},

		masonryGrid: function(){
			var self = $(".restaurant-list");
			self.masonry({
				columnWidth: '.grid-sizer',
				itemSelector: '.grid-item',
				percentPosition: true
			});

			$(".restaurant-filter a").on("click",function(e){
				e.preventDefault();
				var filter = $(this).attr("data-filter");
			  $(".restaurant-filter a").removeClass('current');
			  $(this).addClass('current');
			  self.masonryFilter({
				  filter: function () {
					  if (!filter) return true;
					  return $(this).attr("data-filter") == filter;
				  }
			  });
		  });
		},

		configListingMenu: function(){
			var self = this;
			self.masonryGrid(); 
			_win.resize(function(){
			  self.masonryGrid();
			});
		},

		configGmaps: function(lat,longi){
			/* === Google Map Styles === */ 
			if( $('#maps')[0] )
			{
				var latlng = new google.maps.LatLng(lat,longi);
				var styles = [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}];
				var myOptions = {
					zoom: 16,
					center: latlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					disableDefaultUI: true,
					scrollwheel: false,
					styles: styles
				};
				var map = new google.maps.Map(document.getElementById('maps'), myOptions);
				var image = 'assets/img/marker.png';
				var marker = new google.maps.Marker({
						position: latlng,
						map: map,
						icon: image
				});
			}
		},

		isMobile: function(a){ return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())}, 

		loaderPage: function(){
			setTimeout(function(){
				$('.site-loader').fadeOut('slow');
			},500);
		},

		controlForm: function(){
			$(document).on('submit','.form-reservation form',function(){
				$('.blocks-m.error').remove();
				$('.inputError').removeClass('inputError');
				var hasError = false;
				$('.required-field').each(function() {
					if($.trim($(this).val()) == '') {
						var labelText = $(this).attr('name');
						$(this).addClass('inputError');
						hasError = true;
					} else if($(this).hasClass('email')) {
						var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
						if(!emailReg.test($.trim($(this).val()))) {
							var labelText = $(this).attr('name');
							$(this).addClass('inputError');
							hasError = true;
						}
					}
				});
				if(!hasError) {
					var formInput = $(this).serialize();
					$('.form-reservation').append('<div class="overlay-f"><div class="loading"></div></div>')
					$.post($(this).attr('action'),formInput, function(data){
						$('.form-reservation').fadeOut("slow", function() {
							$('.overlay-f').remove(); 
							$(this).before('<div class="mail-message"><p class="mail-head">Thank You!</p><p>Your email has been delivered.</p></div>');
						});
					});
				}
				return false;   
			});
		}
	}

	/*============================================ Call Functions on Document.Ready ============================================*/
	_doc.ready(Egprojets.documentReady);
	/*============================================ Call Functions on Window.Load ============================================*/
	_win.load(Egprojets.windowLoad);
})(jQuery, window, window.document);
/*============================================ End Custom Functions  ============================================*/

