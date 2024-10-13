(function ($) {
    "use strict";

    $(window).on('scroll', function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > 50) {
            $('.main-header').addClass('fixed-header');
        } else {
            $('.main-header').removeClass('fixed-header');
        }

        if (scrolling > 150) {
            $('.btt').show(500);
        } else {
            $('.btt').hide(500);
        }
    });
    
    $('.menu-nav-btn').on('click', function () {
        $('.menu-nav-btn').toggleClass('open');
        $('.main-header .sidebar').toggle(500);
    });

    $('.btt').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    const d = new Date();
    let year = d.getFullYear();
    $("#currentYear").html(year);
})(jQuery);