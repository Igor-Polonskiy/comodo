jQuery(function($){

$('.nav_hide_btn').click(function(){
  $(".main_nav_black_container").slideToggle(300);
}); 

 
     $(".pagesnav, .mous").mouseover(function(){
        $(".subnav1").removeClass("nodisplay");
    });

   $(".mous").mouseout(function(){
    setTimeout(function() {$(".subnav1").addClass("nodisplay")}, 300);
        ;
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
    });
$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') /*+ '<small>by Marsel Van Oosten</small>'*/;
      }
    }
  });
});


