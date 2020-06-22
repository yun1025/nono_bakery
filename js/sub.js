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

/* 영양정보 */
function nutrition() {
	var input_group = $(".group").val();			//분류 기본값
	var group = "";
	var input_product = $("#product").val();		//제품명 기본값
	var product =""
	
	//$(".loading").height( $(".nutrition_list tbody").height() ).show();
	
	/* 분류 */
	if(input_group != "none") {
		for(i=1; i < $(".nutrition_list tr").length; i++) {
			group = $(".nutrition_list tr:eq("+ i +") td:eq(0)").children("span").attr("class");
			
			if(input_group == group) {
				$(".nutrition_list tr:eq("+ i +")").removeClass("hide");				
			}else if(input_group != group) {
				$(".nutrition_list tr:eq("+ i +")").addClass("hide");
			}
		}
	}else {
		$(".nutrition_list tr").removeClass("hide");
	}
	
	/* 제품명 */	
	if(input_product != "") {
		for(i=1; i < $(".nutrition_list tr").length; i++) {
			product = $(".nutrition_list tr:eq("+ i +") td:eq(1)").html();
			
			if(product.indexOf(input_product) != -1) {
				$(".nutrition_list tr:eq("+ i +")").removeClass("hide");
			}else if(product.indexOf(input_product) == -1) {
				$(".nutrition_list tr:eq("+ i +")").addClass("hide");
			}
		}
	}
	
	setTimeout(function() {
		$(".nutrition_list tr.hide td").fadeOut();
		$(".nutrition_list tr:not(.hide) td").fadeIn();
	}, 2000)	
}