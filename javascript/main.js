$(document).ready(function() {
    $(".button-hidden__img").click(function(){
    	$(".button-hidden__img").toggle(show(),close());
        $(".button-hidden__img").css({'display':'block'});
	});
    function show(){
    	$('.main-container').css('height','350');
        $('.main-banner').css('display','none');
        $('.menu-hidden').css('display','block');
        $('.header').css('position','relative');
        $('.header-logo').css('display','none');
	}
	function close(){
        $('.main-container').attr('style');
        $('.main-banner').attr('style');
        $('.menu-hidden').attr('style');
        $('.header').attr('style');
        $('.header-logo').attr('style');
	}

	$('.img__item').mouseover(function() {
       $(this).find(".img_link__like").css({visibility:"visible"}).animate({opacity: 1, bottom:"20px"}, 600);
       $(this).find(".img_link__repost").css({visibility:"visible"}).animate({opacity: 1, bottom:"20px"}, 600);
    });
    $('.img__item').mouseleave(function() {
       $(this).find(".img_link__like").animate({opacity: 0, bottom:"0px"}, 400);
       $(this).find(".img_link__repost").animate({opacity: 0, bottom:"0px"}, 400);
       $(this).children(".container_item__bg").css({background:'rgb(0,0,0,0.0)'});
       $('.menu_social').animate({opacity:0}, 600);
   		$(this).find('.container_item__link').animate({opacity:1}, 600);
    });
    $(".img_link__repost").click(function(e){
   		$(this).parents().children('.menu_social').animate({opacity:1}, 600);
   		$(this).parents(".container_item__bg").css({background:'rgb(0,0,0,0.5)'}).animate({opacity: 1}, 600);
   		$(this).animate({opacity:0}, 600);
   		e.preventDefault()
 	});
});