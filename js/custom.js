$(document).ready(function () {
    // bars
    $('.navbar-toggler').click(function () {
        $('.navbar-toggler').toggleClass('navbar-bar')
    })
    // Back To Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#toTop').fadeIn(400);
        } else {
            $('#toTop').fadeOut(400);
        }
    });
    $('#toTop').click(function () {
        $("html , body").animate({
            scrollTop: 0
        }, 1000);
    });
    // Stacky Header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.navbar').addClass("sticky_header")
        } else {
            $('.navbar').removeClass('sticky_header')
        }
    });
    // Bannerr slider
    $('.banner-slide').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        prevArrow: '.prev',
        nextArrow: '.next',
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
    });
    // Type js start
    var typed2 = new Typed('#typed2', {
        strings: ['esigner', 'eveloper', 'bug'],
        typeSpeed: 150,
        backSpeed: 50,
        smartBackspace: true,
        loop: true
    });

    //  About item Hover
    $(".about-item").hover(
        function () {
            $(".middle-item figure").addClass('fborder');
        },
        function () {
            $(".middle-item figure").removeClass('fborder');
        }
    );
    $(".dj-1").hover(
        function () {
            $(".dj3").addClass('bgcolor');
        },
        function () {
            $(".dj3").removeClass('bgcolor');
        }
    );
    $(".dj-2").hover(
        function () {
            $(".dj1").addClass('bgcolor');
        },
        function () {
            $(".dj1").removeClass('bgcolor');
        }
    );
    $(".dj-4").hover(
        function () {
            $(".dj4").addClass('bgcolor');
        },
        function () {
            $(".dj4").removeClass('bgcolor');
        }
    );
    $(".dj-3").hover(
        function () {
            $(".dj2").addClass('bgcolor');
        },
        function () {
            $(".dj2").removeClass('bgcolor');
        }
    );
    // VenoBox
    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });

    // Service slide 
    $('.service-slide').slick({
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        vertical: true,
        centerMode: true,
        centerPadding: '35px',
        slidesToScroll: 1,
        prevArrow: '<i class="fas fa-chevron-up ser-prev"></i>',
        nextArrow: '<i class="fas fa-chevron-down ser-next"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: true,
                    centerMode: false,
                    centerPadding: '0',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false,
                    centerMode: false,
                    centerPadding: '0',
                }
            },
        ]
    });
    // Counter Up 
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    $('.one-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.four-item',
    });
    $('.four-item').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.one-item',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        prevArrow: '<i class="fas fa-chevron-up ser-prev testi-prev"></i>',
        nextArrow: '<i class="fas fa-chevron-down ser-next testi-next"></i>',
        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                vertical: false,
                centerMode: false,
                centerPadding: '0',
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                vertical: false,
                centerMode: false,
                centerPadding: '0',
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                vertical: false,
                centerMode: false,
                centerPadding: '0',
            }
        }
    ]
    });


});