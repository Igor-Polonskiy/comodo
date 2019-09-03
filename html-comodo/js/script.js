jQuery(function($){


	
});
$(window).scroll(function(){
  var docscroll=$(document).scrollTop();
  if(docscroll>$('header').height()){
  	$('header').addClass('fixed');
  }else{
    $('header').removeClass('fixed');
    

  }
});
$(function() {
       $('.live_streaming_btn_2').on('click', function() {
          $(".live_streaming_btn_2").addClass("btn_active");
          $(".upcoming_challanges").addClass("block_active");
          $(".live_streaming_btn_1").removeClass("btn_active");
          $(".live_streaming_btn_3").removeClass("btn_active");
          $(".live_streaming_box").removeClass("block_active");
          $(".famous_games").removeClass("block_active");
       });
    });
$(function() {
       $('.live_streaming_btn_1').on('click', function() {
          $(".live_streaming_btn_1").addClass("btn_active");
          $(".live_streaming_box").addClass("block_active");
          $(".live_streaming_btn_2").removeClass("btn_active");
          $(".live_streaming_btn_3").removeClass("btn_active");
          $(".upcoming_challanges").removeClass("block_active");
          $(".famous_games").removeClass("block_active");
       });
    });
$(function() {
       $('.live_streaming_btn_3').on('click', function() {
          $(".live_streaming_btn_3").addClass("btn_active");
          $(".famous_games").addClass("block_active")
          $(".live_streaming_btn_1").removeClass("btn_active");
          $(".live_streaming_btn_2").removeClass("btn_active");
          $(".upcoming_challanges").removeClass("block_active");
          $(".live_streaming_box").removeClass("block_active");
       });
    });
$(function() {
       $('.order_1').on('click', function() {
          $(".order_1").addClass("btn_active");
          $(".order_2").removeClass("btn_active");
          $(".order_3").removeClass("btn_active");
        });
    });
$(function() {
       $('.order_2').on('click', function() {
          $(".order_2").addClass("btn_active");
          $(".order_1").removeClass("btn_active");
          $(".order_3").removeClass("btn_active");
        });
    })
$(function() {
       $('.order_3').on('click', function() {
          $(".order_3").addClass("btn_active");
          $(".order_2").removeClass("btn_active");
          $(".order_1").removeClass("btn_active");
        });
    })
