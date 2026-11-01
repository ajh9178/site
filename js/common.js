function mysize() {
	"use strict";
	
}

$(window).resize(function() {
	"use strict";
	mysize();
});

$(function() {
	"use strict";
	mysize();
	
	var windowH = $(window).height();

    var Bottomoffset = windowH/2;
    var duration1 = 0;
    $(window).scroll(function() {
      if ($(this).scrollTop() > Bottomoffset) {
            $('.top_go').stop().fadeIn(duration1);
        } else {
            $('.top_go').stop().fadeOut(duration1);
        }
    });
    $('.top_go').click(function(event) {
        event.preventDefault();
        $('html, body').stop().animate({scrollTop: 0}, 500);
        return false;
    });
	
	AOS.init({
		easing: 'ease-out-expo',
		once: false,
		duration: 900,
		offset: 20
	});
	
	var smenuk = $(".jheader");
	$(window).scroll(function(){
	 	var position = $(window).scrollTop();	 					 	
	 	if(position > 70){
			$('.back_btn').addClass('active');
	 	}else{
	 		$('.back_btn').removeClass('active');
	 	}
	 }); 
});