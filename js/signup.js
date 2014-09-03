function popupLoaded()
{
	var magnificPopup = $.magnificPopup.instance;
	
	//Resize the popup
	var popupHeight = magnificPopup.content.find('iframe').contents().find('html').css('height');
	$('.mfp-content').animate({ height: popupHeight }, 'slow');
	
	//Scroll to top
	$('html, body').animate({ scrollTop: 0 }, 'slow');
};

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