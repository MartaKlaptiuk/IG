$(document).ready(function() {
	$(".topmenu li").hover(function() {
	$(this).addClass('hover');
	}, function() {
	$(this).removeClass('hover');
	});
	});

		(function($){
		  $(function() {
		    $('.menu__icon').on('click', function() {
		      $(this).closest('nav').toggleClass('menu_state_open');
		    });
		  });
		})(jQuery);


	$(document).ready(function(){
	    $(".menu__icon").click(function(){
	        $(".topmenu").toggle();
	    });
	});

	$('.submenu-link').on('click', function(e){
    var $dropMenu = $(this).parent().find('.submenu');
    if($dropMenu.is(':visible')){
        $dropMenu.hide();
    } else {       
        $('.dropMenu:visible').hide(); 
        $dropMenu.show();
    }
});

	$(window).resize(function(){
		var menu = $('.topmenu');
        	var w = $(window).width();
        	if(w > 768 && menu.is(':hidden')) {
        		menu.removeAttr('style');
        	}
    	});






