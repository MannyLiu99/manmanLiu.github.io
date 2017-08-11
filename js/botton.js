$(function(){
	$('.link .button').hover(function(){
		var title = $(this).attr('data');
		$('.tip em').text(title);
		var pos = $(this).position().left+10;
		var tipWidth = $('.tip').outerWidth();
		var buttonWidth = $(this).outerWidth();
		var dis ;
		var l;
		if(tipWidth>buttonWidth || tipWidth==buttonWidth){
			dis = (tipWidth-buttonWidth)/2;
			l = pos - dis;
		}else{
			dis = (buttonWidth-tipWidth)/2;
			l = pos + dis;
		}
		
		$('.tip').css({'left':l+'px'}).stop(false,true).animate({'top':200,'opacity':1},300);
	},function(){
		$('.tip').stop().animate({'top':180,'opacity':0},300);		
	})
})