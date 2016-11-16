$(function(){
	//购物车部分
	$(".top_right_gwc").hover(function(){
			$(".top_right_gwc_hv").stop().slideDown(200);
			$(".top_right_gwc a").css("color","orange")		
	},function(){
			$(".top_right_gwc_hv").stop().slideUp(200);
			$(".top_right_gwc a").css("color","#b0b0b0")
	});

// 	// 轮播图部分
	
		var i=0;
		var timer;
	$(".ig").eq(0).show().siblings().hide();
		timershow();
		show();

		function timershow(){
			timer=setInterval(function(){
				i++;
				if(i==5){
					i=0;
				}
				show();
			},3000);
		};

		function show(){
			$(".ig").eq(i).fadeIn(500).siblings().fadeOut(500);
		};

	
});