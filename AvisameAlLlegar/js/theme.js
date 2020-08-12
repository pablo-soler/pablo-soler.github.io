
$(function () {
    "use strict";


    $(document).ready(function () {
       sliderHero();
       
    });


    function sliderHero() {

        $(window).height(function () {
            heroResize();
            function heroResize() {
                var windowHeight = $(window).innerHeight();
                $('.slider-hero, .full-screen-intro').css('height', windowHeight);
            };
            $(window).resize(function () {
                heroResize();
            });
        });

    };




});
