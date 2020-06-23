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
	
	var input_length = $(".nutrition_search input:checkbox:checked").length;		//알레르기 기본값
	var check_val = Array();
	
	$(".nutrition_list .loading").height( $(".nutrition_list tbody").height() ).show();
	
	$(".nutrition_list tr").show();
	$(".nutrition_list td").removeClass("hide");
	
	
	for(i=1; i < $(".nutrition_list tr").length; i++) {
		/* 분류 */
		if(input_group != "none") {
			group = $(".nutrition_list tr:eq("+ i +") td:eq(0)").children("span").attr("class");
			
			if(input_group == group) {						//분류 포함
				$(".nutrition_list tr:eq("+ i +") td:eq(0)").removeClass("hide");				
			}else if(input_group != group) {				//분류 미포함
				$(".nutrition_list tr:eq("+ i +") td:eq(0)").addClass("hide");
			}
			
		}
		
		/* 제품명 */
		if(input_product != "") {
			product = $(".nutrition_list tr:eq("+ i +") td:eq(1)").html();
			
			if(product != undefined && product.indexOf(input_product) > -1) {					//제품명 포함
				$(".nutrition_list tr:eq("+ i +") td:eq(1)").removeClass("hide");
			}else if(product != undefined && product.indexOf(input_product) == -1) {			//제품명 미포함
				$(".nutrition_list tr:eq("+ i +") td:eq(1)").addClass("hide");
			}
		}
		
		
		/* 알레르기 */
		if(input_length > 0) {
			for(y=0; y <= $(".nutrition_search input:checkbox").length; y++) {
				if($(".nutrition_search input:checkbox").eq(y).is(":checked") == true) {			
					check_val = $(".nutrition_search input:checkbox").eq(y).val();								//체크한 알레르기 재료의 class
					
					if($(".nutrition_list tr:eq("+ i +") td:eq(2) span").hasClass(check_val) == true) {			//체크한 알레르기 재료의 class 포함 여부
						$(".nutrition_list tr:eq("+ i +") td:eq(2)").removeClass("hide");
					}else {
						$(".nutrition_list tr:eq("+ i +") td:eq(1)").addClass("hide");
					}
				}
			}//for
		}
	}//for
	
	
	setTimeout(function() {
		$(".nutrition_list .hide").parents("tr").hide();
		$(".nutrition_list .loading").hide();
	}, 2000)	
}
