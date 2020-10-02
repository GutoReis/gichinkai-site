var $ = require("jquery");
import 'bootstrap';
import 'owl.carousel';

import hello from './hello';
hello();

$(document).ready(function(){
    var owl = $('.owl-carousel');
    // $(".owl-carousel").owlCarousel({
    owl.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
        onInitialize : function(element){
            owl.children().sort(function(){
                return Math.round(Math.random()) - 0.5;
            }).each(function(){
                $(this).appendTo(owl);
            });
        },
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut'
    });
});