define(['jquery','easing'],function($,easing){
	var Var = {
		// Determines how much ease links jumps up
		easeOffset: 10,
		// What type of easing should links jump up use?
		bounceEaseType: 'easeOutBounce',
		// How fast does the page scroll on scroll events?
		scrollToSpeed: 400,
		// Scroll easing type
		scrollEasingType: 'linear'
	}
	var Methods = {
		loadPageScripts: function(page) {
			require(['pages/'+page]);
		},
		helper_getBodyClass: function() {
			return $('body').attr('class');
		},
		
		// Bindings methods
		bind_scrollToEle: function() {
			$('a.scroll-down').click(function(e){
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
			}, 1500);
		}
	}	
	return Methods;
});