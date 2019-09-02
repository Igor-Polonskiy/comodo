jQuery(function($){

	$(".grid").masonry({

		itemSelector: '.grid_item',
		columnWidth:'.width-1',
		gutter: 26,
	});
});
$(window).scroll(function(){
  var docscroll=$(document).scrollTop();
  if(docscroll>$('header').height()){
    $('header').css({'height': $('header').height(),'width': $('header').width()}).addClass('fixed');
  }else{
    $('header').removeClass('fixed');
  }
});