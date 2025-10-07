$(function() {
    var topMenu = $('.botbnr');    
    topMenu.hide();
    $(this).scroll(function () {
		var topOffsetOpen =  $('#botbnr_open').offset().top;
		var navTypeAOffsetTopOpen = parseInt(topOffsetOpen) - 600;
        if($(this).scrollTop() > navTypeAOffsetTopOpen) {
            topMenu.fadeIn();
        } else {
            topMenu.fadeOut();
        }
    });
});

$(function () {
 var $body = $('.botbnr');
 $(this).scroll(function() { 
   var topOffset =  $('#botbnr_close').offset().top;
   var navTypeAOffsetTop = parseInt(topOffset) - 600;
   if($(this).scrollTop() > navTypeAOffsetTop) {
     $body.addClass('is-fixed');
   } else {
     $body.removeClass('is-fixed');
   }
 });
});
