jQuery(function($){

$('.nav_hide_btn').click(function(){
  $(".main_nav_black_container").slideToggle(300);
});  
	
});
$(window).scroll(function(){
  var docscroll=$(document).scrollTop();
  if(docscroll>$('.header_container').height()){
  	$('header').addClass('fixed');
    $('.header_container').height(70);
    $('.subnav').addClass('remove');
  }else{
    $('header').removeClass('fixed');
    $('.subnav').removeClass('remove');
    $('.header_container').height(100);
    

  }
});
$(function() {
       $('.live_streaming_btn_2').on('click', function() {

			$(".live_streaming_btn").removeClass("btn_active");
	        $(".live_streaming_btn_2").addClass("btn_active");
	        $(".live_streaming_content").removeClass("block_active");
	        $(".upcoming_challanges").addClass("block_active");
        });
    });
$(function() {
       $('.live_streaming_btn_1').on('click', function() {
	       	$(".live_streaming_btn").removeClass("btn_active");
	        $(".live_streaming_btn_1").addClass("btn_active");
	        $(".live_streaming_content").removeClass("block_active")
         	$(".live_streaming_box").addClass("block_active");
        });
    });
$(function() {
       $('.live_streaming_btn_3').on('click', function() {
       		$(".live_streaming_btn").removeClass("btn_active");
        	$(".live_streaming_btn_3").addClass("btn_active");
        	$(".live_streaming_content").removeClass("block_active")
        	$(".famous_games").addClass("block_active")
        });
    });
$(function() {
       $('.order_1').on('click', function() {
	       	$(".order").removeClass("order_active");
	        $(".order_1").addClass("order_active");
        });
    });
$(function() {
       $('.order_2').on('click', function() {
			$(".order").removeClass("order_active");
        	$(".order_2").addClass("order_active");
        });
    })
$(function() {
       $('.order_3').on('click', function() {
       		$(".order").removeClass("order_active");
        	$(".order_3").addClass("order_active");
        });
    })


