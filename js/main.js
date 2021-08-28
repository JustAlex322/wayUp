'use strict'

$(window).scroll(function() {
    $('#first-item').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass("animated fadeInLeft");
        }
    });
    $('#first-inp').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass("animated fadeInLeft");
        }
    });
    $('#third-inp').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass("animated fadeInLeft");
        }
    });


    $('#second-item').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass("animated fadeInUp");
        }
    });

    $('#third-item').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass("animated fadeInRight");
        }
    });
    $('#second-inp').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass("animated fadeInRight");
        }
    });
    $('#four-inp').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass("animated fadeInRight");
        }
    });

    $('.title').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
            $(this).addClass("animated fadeInDown");
        }
    });
});