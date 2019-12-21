$(document).ready(function () {
	$('.sprite__clothes__btn').click(function() {
		let current_id = $(this).attr('data-id');
		if (current_id == 1) {
			$('.sprite__block__clothes').stop().slideUp('slow');
			$(this).attr('data-id',0);
			$('.sprite__clothes__btn img').addClass('rotateDown').removeClass('rotateUp');
		}else{
			$('.sprite__block__clothes').stop().slideDown('slow');
			$(this).attr('data-id',1);
			$('.sprite__clothes__btn img').addClass('rotateUp').removeClass('rotateDown');
			
		}
		
	});
	$('.menu-bar').click(function(){
		let current_id = $(this).attr('data-id');
		if (current_id == 0) {
			$('.menu').addClass('menu_show').removeClass('menu_hide');
			$(this).attr('data-id',1);
		}else{
			$('.menu').addClass('menu_hide').removeClass('menu_show');
			$(this).attr('data-id',0);
		}
	});
});