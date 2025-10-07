$(document).ready(function() {
	$('.open-a').each(function(){
		$(this).css("height",$(this).height()+"auto");
	});
	$('.open-a').hide();
	$('.btn-q').click(function () {
		$(this).next('.open-a').slideToggle('slow').siblings('.open-a').slideUp('slow');
		$(this).siblings('.btn-q').removeClass('active');
		$(this).toggleClass('active');
	});
});