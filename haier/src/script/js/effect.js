;
(function () {

    $(function ($) {
        $btn = $('.dot span');
        $left = $('.banner_left');
        $right = $('.banner_right');
        $('.banner li:first-child').clone(true).appendTo($('.banner ul'));
        $btn.on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
            $left = $('.banner li').eq(0).width() * $(this).index();
            $('.banner ul').animate({
                left: -$left + 'px'
            });
        })
        $left.on('click', function () {
            $left = $left - $('.banner li').eq(0).width();
            $('.banner ul').animate({
                left: $left + 'px'
            });
        })
        $right.on('click', function () {
            $('.banner ul').animate({
                left: ++$('.banner li').eq(0).width() + 'px'
            });
        })
    });

    $(function ($) {
        $('.part li img').hover(function () {
            $(this).animate({
                left: '-10px'
            });
        }, function () {
            $(this).animate({
                left: '0'
            });
        })
    })

    $(function ($) {
        $('.left_img img').hover(function () {
            $(this).animate({
                left: '-10px'
            });
        }, function () {
            $(this).animate({
                left: '0'
            });
        })
    })

    $(function ($) {
        $('.right_com li img').hover(function () {
            $(this).animate({
                left: '10px'
            });
        }, function () {
            $(this).animate({
                left: '0'
            });
        })
    })
    //新品
    $(function ($) {
        $('.channel a em').hover(function () {
            $(this).animate({
                right: '5px'
            });
        }, function () {
            $(this).animate({
                right: '0'
            });
        })
    })
    //我要定制
    $(function ($) {
        $('.make a em').hover(function () {
            $(this).animate({
                right: '5px'
            });
        }, function () {
            $(this).animate({
                right: '0'
            });
        })
    })
    //优品专辑
    $(function ($) {
        $('.good_left_img img').hover(function () {
            $(this).animate({
                left: '-10px'
            });
        }, function () {
            $(this).animate({
                left: '0'
            });
        })
    })

    $(function ($) {
        $('.good_list li img').hover(function () {
            $(this).animate({
                left: '-10px'
            });
        }, function () {
            $(this).animate({
                left: '0'
            });
        })
    })

    //为您推荐
    $(function ($) {
        $('.foryou_bd li img').hover(function () {
            $(this).animate({
                left: '-10px'
            });
        }, function () {
            $(this).animate({
                left: '0'
            });
        })
    })
})();