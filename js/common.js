$(document).ready(function () {
    $('.partners__boxdescr').click(function () {
        $(this).toggleClass('open');
    });

    $(function () {
        $('.footer .up').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
            return false;
        })

    });

    $('.partners .orangelink').click(function (e) {
        e.preventDefault();
        $('.partners').toggleClass('showall');
        $(this).find('span').toggle();
    });

    $('.benefits .orangelink').click(function (e) {
        e.preventDefault();
        $('.benefits').toggleClass('showall');
        $(this).find('span').toggle();
    });

    // menu
    $('.sublink a').click(function () {
        $(this).toggleClass('rotate');
        $(this).next('.sublist').slideToggle();
    });

    $('.burger').click(function () {
        $('.header__nav').addClass('show');
    });

    $('.closemenu').click(function (e) {
        e.preventDefault();
        $('.header__nav').removeClass('show');
    });


    // TEST















});