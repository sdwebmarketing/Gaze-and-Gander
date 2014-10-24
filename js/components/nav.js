define(function(){
	// Navigation
	$("#navModalTrigger").click(function(e){
		e.preventDefault();
		$("#navModal").foundation('reveal', 'open', {
			animation: 'none',
			close_on_background_click: true,
			dismiss_modal_class: 'close-reveal-modal',
			bg_class: 'reveal-modal-bg',
			root_element: 'body',
			css : {
			    open : {
			      'width': '100%',
			      'max-width': '100%',
			      'top': 0,
			      'opacity': 0,
			      'visibility': 'visible',
			      'display' : 'block'
			    },
			    close : {
			      'opacity': 1,
		          'visibility': 'hidden',
		          'display': 'none'
		        }
			}
		});
	});
});