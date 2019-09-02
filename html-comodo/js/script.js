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
  	var fixed=$('.fixed').height();
  	var header= $('header').height();
    $('header').css({'height': fixed,'width': $('body').width()}).addClass('fixed');
  }else{
    $('header').removeClass('fixed');
    $('header').css({'height': header,'width': $('body').width()});

  }
});
