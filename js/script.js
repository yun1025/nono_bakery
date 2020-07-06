function obj_resize() {
	//슬라이드 이미지 세로값
	$(".slide_img > p").width($(window).width());
	var slide_height = $(".slide_img img").height()
	$(".slide_img").height(slide_height);
	
	//베스트메뉴  세로값
	var best_img_height = $(".img_warp img").height();
	$(".img_warp").height(best_img_height);
}

$(function() {
	//이미지 세로값
	obj_resize()
	
	//about us 등장
	about_us()
	function about_us() {
		var roll = $(window).scrollTop();
		
		if(roll >= 0) {
			$(".main01_text, .main01_img > img").animate({"opacity" : "1.0", "margin-top" : "0px"}, 1500);
		}
	}
	
	
	//슬라이드
	var slide_index = 0;
	var slide_max = $(".slide_img > p").length - 1;
	var width = $(window).width();
		
	$(".slide_img > p").width(width);
	$(".slide_img > p").not(":eq(0)").css("left", width + "px");
	
	var clear_slide = setInterval(main_slide, 3000);
	
	function main_slide() {
		(slide_index == slide_max) ? slide_index = 0 : slide_index += 1;
		
		slide_move()
	}
	
	function slide_move() {
		$(".slide_img > p").eq(slide_index - 1).animate({"left": -width + "px"}, 1000);
		$(".slide_img > p").eq(slide_index).animate({"left" : 0}, 1000, function() {
			$(".slide_img > p").not(":eq("+ slide_index +")").css("left", width + "px");
		});
	}
	
	//버튼 클릭 시 
	$("#main_slide > p").click(function() {
		clearInterval(clear_slide);
	});
	
	//오른쪽 버튼 클릭
	$(".right_button").click(function() {
		slide_right()
	});
	function slide_right() {
		(slide_index == slide_max) ? slide_index = 0: slide_index += 1;
		
		if(slide_index == 0) {
			$(".slide_img > p").not(":eq(" + slide_max + ")").css("left", width + "px");
			$(".slide_img > p").eq(slide_max).animate({"left": -width + "px"}, 1000);
		}else {
			$(".slide_img > p").not(":eq(" + (slide_index - 1) + ")").css("left", width + "px");
			$(".slide_img > p").eq(slide_index - 1).animate({"left": -width + "px"}, 1000);
		}
		
		slide_move()
	}
	
	//왼쪽 버튼 클릭
	$(".left_button").click(function() {
		slide_left()
	});
	function slide_left() {
		var buttonNumber = slide_index;
		(slide_index == 0) ? slide_index = slide_max : slide_index -= 1;
				
		$(".slide_img > p").eq(slide_index).css("left", -width + "px");
		$(".slide_img > p").eq(slide_index).animate({"left" : 0}, 1000);
		$(".slide_img > p").eq(buttonNumber).animate({"left" : width + "px"}, 1000);
	}
	
	
	//반응형
	$(window).resize(function() {
		obj_resize();
		
		width = $(window).width();
	});
	
	//테블릿 - 메뉴 슬라이드
	$(".mobile_menu").click(function() {
		$(".menu").slideToggle();
	});
	
	//테블릿 - 서브 메뉴 슬라이드
	$(".menu > ul > li").click(function() {
		if( $(window).width() <= 750 ) {
			$(".menu > ul > li > a").attr("href", "#");
			$(".menu > ul > li:nth-child(1) a").attr("href", "html/sub_1-1.html");
			
			$(".menu > ul > li").removeClass("active");
			$(".menu > ul > li .sub_menu").slideUp();
			$(this).addClass("active").children(".sub_menu").slideDown();
		}
	});
});