function popupLoaded()
{
	var magnificPopup = $.magnificPopup.instance;
	
	//Resize the popup
	var frameHeight = magnificPopup.content.find('iframe').contents().find('html').height();
	var wrapperElement = magnificPopup.content.find('iframe').contents().find('#wrapper');
	var popupHeight = wrapperElement.height();
	var pixels = popupHeight + 80;
	if ( wrapperElement.hasClass( "step11" ) )
		pixels = pixels + 80;
	pixels = pixels + 'px';	
	$('.mfp-content').animate({ height: pixels}, 'slow');
	
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