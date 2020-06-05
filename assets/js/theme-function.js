$(document).ready(function () {
    $('#navigation .header_navigation > ul').prepend('<li id="closeMenu">X</li>');
    $('.header_navigation > ul > li.menu-item-has-children > a').append('<i class="flaticon-down-arrow"></i>');


    $(document).on("click", "#navigation .humburger", function () {
        $('#navigation .header_navigation ul').toggleClass('active_menu');
        $("#navigation .humburger").toggleClass("active_humburger");
        $("#navigation .header_navigation > ul > li > i, .header_navigation > ul > li > svg").next("ul").removeClass("show_iner_menu");
        $("#navigation .header_navigation").toggleClass("overlay");
    });
    $(document).on("click", '#navigation .header_navigation > ul > li.menu-item-has-children > a, #navigation .header_navigation > ul > li > ul > li.menu-item-has-children-small > a', function () {
        $(this).parent().toggleClass("open_menu");
        $("#navigation .header_navigation ul").toggleClass("overflow");
    });

    $(document).on("mouseup", function (e) {
        var o = $("#navigation .header_navigation ul");
        o.is(e.target) || 0 !== o.has(e.target).length || (
            $("#navigation .header_navigation ul").removeClass("active_menu"),
                $("#navigation .humburger").removeClass("active_humburger"),
                $("#navigation .header_navigation > ul > li > i, .header_navigation > ul > li > svg").next("ul").removeClass("show_iner_menu"),
                $("#navigation .header_navigation").removeClass("overlay"))
    });

    $(document).on('click', '#closeMenu', function () {
        $("#navigation .header_navigation ul").removeClass("active_menu");
        $("#navigation .humburger").removeClass("active_humburger");
        $("#navigation .header_navigation > ul > li > i, .header_navigation > ul > li > svg").next("ul").removeClass("show_iner_menu");
        $("#navigation .header_navigation").removeClass("overlay");
    })


    jQuery(window).scroll(function () {
        var top = jQuery(document).scrollTop();
        var height = 0;

        if (top > height) {
            jQuery('.w_header').addClass('header__scroll', 'animated', 'fadeInDown');
            jQuery('.w_header').addClass('animated');
            jQuery('.w_header').addClass('fadeInDown');
        } else {
            jQuery('.w_header').removeClass('header__scroll', 'animated', 'fadeInDown');
            jQuery('.w_header').removeClass('animated');
            jQuery('.w_header').removeClass('fadeInDown');
        }
    })

    $('#partnerSlider').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: true,
        margin: 30,
        statePadding: 30,
        items: 5,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                dots: false
            },
            600: {
                items: 3,
                nav: false,
                dots: false
            },
            991: {
                items: 5
            }
        }
    });

});