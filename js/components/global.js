define(['foundation','jquery'],function(foundation,$){
	// Load Fonts
	require(['components/typekit']);
	
	// Load UI Framework
	$(document).foundation();
	
	// Load Top Navigation
	require(['components/nav']);
	
	// Load Correct Page
	require(['components/functions'],function(f){
		// Load Bindings
		f.bind_scrollToEle();
		f.bind_easingScroll();
		f.bind_titleFadeAndEase();
		f.bind_scrollEvent();
		f.bind_header();
		f.zoomImgOnHover();
	});
});