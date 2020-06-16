$(function() {
	/* 자주묻는 질문 */
	$(".qna > dl dt").click(function() {
		if( $(this).hasClass("on") == false ) {		//중복 실행 방지
			$(".qna > dl dt").removeClass("on").next().slideUp();
		
			$(this).addClass("on").next().slideDown();
		}else {
			$(this).removeClass("on").next().slideUp();
		}
	});	
})