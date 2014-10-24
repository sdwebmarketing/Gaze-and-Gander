define(['foundation','jquery'],function(foundation,$){
	// Load Fonts
	require(['components/typekit']);
	
	// Load UI Framework
	$(document).foundation();
	
	// Load Top Navigation
	require(['components/nav']);
	
	// Load Correct Page
	require(['components/functions'],function(f){
		f.loadPageScripts(f.helper_getBodyClass());
		// Load Bindings
		f.bind_scrollToEle();
		f.bind_easingScroll();
		f.bind_titleFadeAndEase();
	});
});