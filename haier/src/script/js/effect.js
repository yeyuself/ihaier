;
(function () {
    $(document).one('mouseenter',function(){

    
        
    
    //轮播图
    $(function ($) {
        $btn = $('.dot span');
        $ul = $('.banner ul');
        $left = $('.banner_left');
        $right = $('.banner_right');
        var num = 0;
        var timer = null;
        $('.dot span:first').addClass('active');
            $ul.find('li').eq(0).clone().appendTo($('.banner ul'));
            $ul.find('li').eq(-2).clone().prependTo($('.banner ul'));
            $width = $('.banner li').eq(0).width();
            $ul.css({
                left: -$width + 'px'
            });
            $btn.on('click', function () {
                $(this).addClass('active').siblings().removeClass('active');
                var i = $(this).index();
                $left = $width * ($(this).index() + 1);
                $('.banner ul').animate({
                    left: -$left + 'px'
                });
                num = i;
            })
            $left.on('click', function () {              
                num--;
                $btn.eq(num).addClass('active').siblings().removeClass('active');
                $ul.stop().animate({
                    left: -$width*(num+1) + 'px'
                });
                if (num < 0) {
                    $ul.css({
                        'left': -$width * ($btn.size() + 1)
                    }).stop().animate({
                        left: -$width * $btn.size() + 'px'
                    });
                    num = $btn.size() - 1;
                    $btn.eq(num).addClass('active').siblings().removeClass('active');
                }
                return false;
            })

            $right.on('click', function () {               
                num++;
                $btn.eq(num).addClass('active').siblings().removeClass('active');               
                $ul.stop().animate({
                    left: -$width*(num+1) + 'px'
                });
                if (num > 4) {
                    $ul.css({
                        'left': 0
                    }).stop().animate({
                        'left': -$width
                    });
                    num = 0;
                    $btn.eq(num).addClass('active').siblings().removeClass('active');
                }
                return false;
            })
            timer = setInterval(function () {
                $right.click();
            }, 2000);
            $('.banner').hover(function () {
                clearInterval(timer);
            }, function () {
                timer = setInterval(function () {
                    $right.click();
                }, 2000)
            })

    });

    //二级导航
    $(function ($) {
            $('.nav_list ul li').hover(function () { 
                if($('.box').children().eq($(this).index())){
                    $('.box').stop().animate({
                        width: 447
                    });
                    $('.box').children().eq($(this).index()).show().siblings().hide();
                }else{
                    $('.box').stop().animate({
                        width: 0
                    });
                }
            }, function () {

                $('.box').hover(function(){
                    $('.box').stop().animate({
                        width: 447
                    });
                },function(){
                    $('.box').stop().animate({
                        width: 0
                    });
                })

                $('.box').stop().animate({
                    width: 0
                });
                

            })
    });

    $('.bx_box .pro_list li').each(function (i) {
        $(this).find('i').css('backgroundPosition', +i * (-40) + 'px 0');
    })
    $('.kt_box .pro_list li').each(function (i) {
        $(this).find('i').css('backgroundPosition', +i * (-40) + 'px -40px');
    })
    $('.xyj_box .pro_list li').each(function (i) {
        $(this).find('i').css('backgroundPosition', +i * (-40) + 'px -80px');
    })



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
    //精品推荐
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
    
    $(function ($) {

        $('.new_img a img').hover(function () {
            $(this).stop().animate({
                left: '-5px'
            });
        }, function () {
            $(this).animate({
                left: '0'
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

    $(function ($) {

        $('.make_img a img').hover(function () {
            $(this).stop().animate({
                left: '-5px'
            });
        }, function () {
            $(this).animate({
                left: '0'
            });
        })
    
    })
    //优品专辑
    $('.good_tab li').each(function (i) {
        $(this).find('i').css('backgroundPosition', +i * (-25) + 'px -356px');
    })

    $(function ($) {
        $('.good_tab li:first').find('i').css({
            'backgroundPosition': '0 -402px'
        })

            $('.good_tab li').on('mouseover', function () {
                $('.good_bd').children().eq($(this).index()).show().siblings().hide();
                $(this).css({
                    'borderBottom': '2px solid #2979ff'
                }).siblings().css({
                    'borderBottom': '2px solid #eaeaea'
                });
                $(this).find('a').css({
                    'color': '#2979ff'
                });
                $(this).siblings().find('a').css({
                    'color': '#666'
                });

                $('.good_tab li').each(function (i) {
                    $(this).find('i').css('backgroundPosition', +i * (-25) + 'px -356px');
                })
                $(this).find('i').css({
                    'backgroundPosition': +$(this).index() * (-25) + 'px -402px'
                });
            })
        
    })

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
                    right: '20px'
                });
            }, function () {
                $(this).animate({
                    right: '10px'
                });
            })
        
    })
    //大家都在说
    $(function ($) {
        $rev = $('.review_bd');
        $oul = $('.everyone');
        $revleft = $('.rev_left');
        $revright = $('.rev_right');
        var timer = null;

            $revleft.on('click', function () {
                $oul.find('li').eq(-1).remove().clone().prependTo($oul);
            })
            $revright.on('click', function () {
                $oul.find('li').eq(0).remove().clone().appendTo($oul);
            })
            timer = setInterval(function () {
                $revright.click();
            }, 2000);
            $rev.hover(function () {
                clearInterval(timer);
            }, function () {
                timer = setInterval(function () {
                    $revright.click();
                }, 2000)
            })

        
    });

    //为您推荐
    $(function ($) {

            $('.foryou_bd li img').hover(function () {
                $(this).animate({
                    top: '-10px'
                });
            }, function () {
                $(this).animate({
                    top: '0'
                });
            })
        
    })
    //footer精灵图定位
    $('.footer_top li').each(function (i) {
        $(this).find('i').css('backgroundPosition', +i * (-50) + 'px -444px');
    })

})
})();