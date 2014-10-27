define(['jquery','easing','throttle'],function($,easing,throttle){
	var Var = {
		// Determines how much ease links jumps up
		easeOffset: 10,
		// What type of easing should links jump up use?
		bounceEaseType: 'easeOutBounce',
		// How fast does the page scroll on scroll events?
		scrollToSpeed: 1500,
		// Scroll easing type
		scrollEasingType: 'easeOutExpo',
		throttleSensitivity: 500
	}
	var Helpers = {
		helper_getBodyClass: function() {
			return $('body').attr('class');
		},
		helper_showFooterLink: function() {
			$('.back-to-top').animate({
				"bottom": "0px",
			}, 500);
		},
		helper_hideFooterLink: function() {
			$('.back-to-top').animate({
				"bottom": "-57px",
			}, 500);
		}
	}
	var Methods = {
		that: this, 
		loadPageScripts: function(page) {
			require(['pages/'+page]);
		},
		zoomImgOnHover: function() {
			$('.work-logo').mouseover(function(){
				$(this).prev().prev().animate({
					"width": "105%",
					"max-width": "105%",
					"height": "105%",
					"max-height": "105%"
				});
			});
			$('.work-logo').mouseout(function(){
				$(this).prev().prev().animate({
					"width": "100%",
					"max-width": "100%",
					"height": "100%",
					"max-height": "100%"
				});
			});
		},
		
		// Bindings methods
		bind_scrollToEle: function() {
			$('a.scroll-to').click(function(e){
				e.preventDefault();
				var ele = $(this).attr('data-scroll-to');
				require(['scrollTo'],function(scrollTo){
					scrollTo($(ele),{
					    duration: Var.scrollToSpeed,
					    easing: Var.scrollEasingType
					});
				});
			});
		},
		// Easing animation effect on certain links. 
		// Note: requires absolute or fixed > parent
		bind_easingScroll: function() {
			var ele = $('a.ease');
			
			function helper_bounceEase(el) {
				var _st = el.offset().top;
				var _stOffset = _st - Var.easeOffset;
				el.parent().animate({
					"top": _stOffset + "px"
				}, 600, function() {
					$(this).animate({
						"top": _st + "px"
					}, {
						duration: 1200,
						easing: Var.bounceEaseType
					});
				});
			}
			helper_bounceEase(ele);
			setTimeout(function() {
				setInterval(function(){ helper_bounceEase(ele) },3000);
			},2000);
		},
		bind_titleFadeAndEase: function() {
			$('.headline h1').animate({
				"marginTop": "-10px",
				"opacity": 1
			},1500);
		},
		bind_scrollEvent: function() {
			var lastScrollTop = 0;
			// throttle the scroll event for performance
			$(window).scroll(
				$.throttle(Var.throttleSensitivity,function(){
					var st = $(this).scrollTop();
					if (st > lastScrollTop){
						// Downscroll code
						Helpers.helper_hideFooterLink();
					} else {
						// Upscroll code
						Helpers.helper_showFooterLink();
					}
					lastScrollTop = st;
				})
			);
		}
	}
	Helpers.helper_getBodyClass();
	return Methods;
});