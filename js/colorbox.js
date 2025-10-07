	//colorbox
	$(document).ready(function(){
		var width = $(window).width();
		var win_height = $(window).height();
		var height = width * 0.5625+110;
		if(win_height < height){
		  height = win_height;
		  width = (win_height - 110) * 1.7777778;
		}
		$(".iframe").colorbox({
			iframe:true,
			width:width,
			height:height,
			opacity : 0.75
		});
	});