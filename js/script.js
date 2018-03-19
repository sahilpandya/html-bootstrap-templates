$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        dots: true,
        nav: true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });

    $(window).scroll(function () {

        console.log($(window).scrollTop());

        if ($(window).scrollTop() > 550) {
            $('#nav_bar').addClass('fixed-top');
        }

        if ($(window).scrollTop() < 551) {
            $('#nav_bar').removeClass('fixed-top');
        }
    });

    // tabs js

    $('.question-tabs-list > li > a').click( function() {
      $('.question-tabs-list > li.active').removeClass('active');
      $(this).parent().addClass('active');
    });

    //carousel

    $('.carousel').carousel({
        interval: false
    })

});
