$(document).ready(function(){
    $('.custom_slider .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        items:1,
        autoHeight:true,
        autoplay:true, 
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
    });
    $('.customer_sec .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        autoplay:true, 
        autoplayTimeout: 4000,
        autoplaySpeed: 1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});