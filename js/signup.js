$(function() {
	$('.user-area li a').magnificPopup({
		type: 'iframe',
		callbacks: {
			open: function() {
		      $('#stickynav').hide();
			},
		    close: function() {
		    	$('#stickynav').show();
		    }
		}
	});
});