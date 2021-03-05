window.addEventListener('scroll', function (e) {

    let y = window.pageYOffset;
    let sticky = document.querySelector('.head');

    let Y = y / 30;

    sticky.style.background = 'radial-gradient(circle, rgba(59,43,91,1) 0%, rgba(0,0,0,1) ' + Y + '%) !important;';

    console.log(Y);
})

$(document).ready(function () {

    $('.form-submit').click(function (e) {
        e.preventDefault();
        var NameSurname = $('#namesurname').val();
        var Mail = $('#mail').val();
        var Message = $('#message').val();

        if (NameSurname == "" || Mail == "" || Message == "" || !isValidMailAddress($('#mail').val())) { } else {
            $('.form-send-message').css('display', 'block');
            $('.form-container').css('display', 'none');
       
        };
    })


    $('.carousel-arrow').css('height',$('#carouel-references').innerHeight());

    $('.logo').click(function () {
        $("html, body").animate({
            scrollTop: $('.top-banner').offset().top - 80
        }, 2000);
    });
    $('.services-link').click(function () {
        $("html, body").animate({
            scrollTop: $('.services').offset().top-80 
        }, 2000);
    });
    $('.works-link').click(function () {
        $("html, body").animate({
            scrollTop: $('.works').offset().top - 80
        }, 2000);
    });
    $('.references-link').click(function () {
        $("html, body").animate({
            scrollTop: $('.references').offset().top - 80
        }, 2000);
    });
    $('.contact-link, .get-it-touch-button a').click(function () {
        $("html, body").animate({
            scrollTop: $('.contact').offset().top - 80
        }, 2000);
    });
    $('.nav-link').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    window.onscroll = function () { myFunction() };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
            document.body.classList.add("sticky-fix")
        } else {
            navbar.classList.remove("sticky");
            document.body.classList.remove("sticky-fix");
        }
    }

    /** Brands Slider **/

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
            1200: { items: 5 },
            1600: { items: 6 }
        }
    })


    $('.owl-carousel-modal').owlCarousel({
        navigation: true, // Show next and prev buttons

        slideSpeed: 300,
        paginationSpeed: 400,

        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    })
    /** Brands Slider **/

    $('.top-banner, .top-banner-img').css('height', $(window).innerHeight());
    $('.carousel').carousel({
        interval: 112000
    })

    $('#carouselExampleSlidesOnly').carousel();

    $('.carousel').bcSwipe({ threshold: 50 });

    $('.works a').on({
        mouseenter: function () {
            $(this).find('.works-hover').fadeIn();
            $('.works-hover').css('width', $('.works img').innerWidth());
        },
        mouseleave: function () {
            $(this).find('.works-hover').fadeOut();
        }
    });

    if ($(window).width() < 1200) {
        $('.carousel-add').addClass('carousel-item');
        $('.carousel-add').eq(0).addClass('active');
    }
    else {
        $('.carousel-add').removeClass('carousel-item');
    }

    function isValidMailAddress(MailAddress) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(MailAddress);
    };

});
$(window).resize(function () {
    $('.carousel-arrow').css('height', $('#carouel-references').innerHeight());
    $('.top-banner, .top-banner-img').css('height', $(window).innerHeight());
    $('.works-hover').css('width', $('.works img').innerWidth());
    if ($(window).width() < 1200) {

        $('.carousel-add').addClass('carousel-item');
        if ($('.carousel-add').hasClass('active')) {

        }
        else {
            $('.carousel-add').eq(0).addClass('active');
        }
    }
    else {
        $('.carousel-add').removeClass('carousel-item');
    }


});