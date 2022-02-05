$(document).ready(function(){

	$('.buttom-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.buttom-up').slideDown(350);
		} else {
			$('.buttom-up').slideUp(300);
		}
	});

});
