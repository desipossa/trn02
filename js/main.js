// var bannerClose = function () {
//     document.querySelector('.top_banner').style.display = 'none';
// }

// document.querySelector('.top_banner i').addEventListener('click', bannerClose);
$(function () {
    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp();
    });

    $('.main_slider').on('init afterChange', function (e, s, c) {
        //console.log(e,s,c);//0,1,2
        //$('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
        let current = $('.main_slider .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.slideNum').text((c ? c + 1 : 1) + "/" + s.slideCount)
    });

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.slideArrows i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev')
    });

    $('.slideArrows i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext')
    });

    $('.movie_arrows i:nth-child(1)').on('click', function () {
        $('.movie video').trigger('play');
    });

    $('.movie_arrows i:nth-child(2)').on('click', function () {
        $('.movie video').trigger('pause');
    });

    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/Pmt3tms9HdI',
        containment: '.utb',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('.utb i:nth-child(1)').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });

    $('.utb i:nth-child(2)').on('click', function () {
        $('#bgndVideo').YTPPause();
    });

    $('.utb i:nth-child(3)').on('click', function () {
        $('#bgndVideo').YTPFullscreen();
    });

    $('.product_slider').slick({
        arrows: false,
        centerMode: true,
        slidesToShow: 5,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }

            }
        ]
    });

    $('.product_arrows i:nth-child(1)').on('click', function () {
        $('.product_slider').slick('slickPrev');
    });

    $('.product_arrows i:nth-child(2)').on('click', function () {
        $('.product_slider').slick('slickNext');
    });

    $('.hd_left_slider').slick({
        arrows: false,
        fade: true,
        asNavFor: '.hd_right_slider',
    });
    $('.hd_right_slider').slick({
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.hd_left_slider',
    });

    $('.hd_section .hd_arrows i:nth-child(1)').on('click', function () {
        $('.hd_right_slider').slick('slickPrev')
    });
    $('.hd_section .hd_arrows i:nth-child(2)').on('click', function () {
        $('.hd_right_slider').slick('slickNext')
    });

    $('.tab_menu li a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $(this).parent().addClass('on').siblings().removeClass('on');
        $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on')
    });

    $('#fl').on('change', function () {
        var lik = $(this).val();
        lik && window.open(lik);
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });


    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 800
            ? $('.to_top').fadeIn()
            : $('.to_top').fadeOut(1000);
    });

    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('nav').toggleClass('on');
    });


    $('.header nav>ul>li>a').on('click', function (event) {
        var idx = $(this).parent().index();
        if ($('nav').hasClass('on') && idx < 3) {
            event.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('ul').slideUp();
        }

    });

    $(window).on('resize', function () {
        $('nav').removeClass('on');
        $('.header ul ul').removeAttr('style')
    })








})

