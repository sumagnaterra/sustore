$(function(){

	$('.button-bag').click(function(){
	  	var buttonId = $(this).attr('id');
	 	$('#modal-container').removeAttr('class').addClass(buttonId);
	  	$('body').addClass('modal-active');
	})

	$('#modal-container').click(function(){
	  	$(this).addClass('out');
	  	$('body').removeClass('modal-active');
	});

	$('#button_continue').click(function(){
		$(this).addClass('out');
	  	$('body').removeClass('modal-active');
	})

	$('.not-found').click(function(){
	 	$('.modal-not-found').removeClass('out').addClass('modal2');
	  	$('body').addClass('modal-found-active');
	})

	$('.modal-not-found').click(function(){
	  	$(this).addClass('out').removeClass('modal2');
	  	$('body').removeClass('modal-found-active');
	});


	$('#menu__hamburguer').click(function(){
		$(this).toggleClass('open');

		if($(this).hasClass('open')){
			$('.menu').slideDown().css({ 'max-height': $(window).height() - $('.header__init').height() - $('.search__content').height() });;
			$('body').css({ 'overflow': 'hidden' });
		}else{
			$('.menu').slideUp();
			$('body').css({ 'overflow': 'auto' });
		}
	});

    $('.menu__ul li').on('click', 'span', function() {
        if ($(this).next(".menu__ul li ul").is(':visible')) {
            $(this).text("+");
            $(this).next(".menu__ul li ul").slideUp(300);
        } else {
            $(this).text("-");
            $(this).next('.menu__ul li ul').slideDown(300);
        }
    });

    if ($(window).width() <= 480) {
	    $('.menu__ul li').on('click', 'a', function() {
	    	$("#menu__hamburguer").removeClass('open');
		 	$(".menu").slideUp(300);
		 	$('.menu__ul li ul').slideUp(300);
		 	$('body').css({ 'overflow': 'auto' });
	    });
   	}



});


