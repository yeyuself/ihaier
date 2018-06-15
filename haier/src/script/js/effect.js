;
(function () {
       
            $(document).one('mouseenter', function () {
                
                var numarr = [];
                var num = 0;
                if ($.cookie('cartnum')) {
                    numarr = $.cookie('cartnum').split(',');
                }
                for (var i = 0; i < numarr.length; i++) {
                    num += parseInt(numarr[i]);
                }
                $('.cart_show').find('span').html(num);
               
                
                
                //轮播图
                $(function ($) {
                   var $btn = $('.dot span');
                   var $ul = $('.banner ul');
                   var $left = $('.banner_left');
                   var $right = $('.banner_right');
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
                            left: -$width * (num + 1) + 'px'
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
                            left: -$width * (num + 1) + 'px'
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
                        if ($('.box').children().eq($(this).index())) {
                            $('.box').stop().animate({
                                width: 447
                            });
                            $('.box').children().eq($(this).index()).show().siblings().hide();
                        } else {
                            $('.box').stop().animate({
                                width: 0
                            });
                        }
                    }, function () {

                        $('.box').hover(function () {
                            $('.box').stop().animate({
                                width: 447
                            });
                        }, function () {
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
                        $(this).stop(true,false).animate({
                            left: '-10px'
                        });
                    }, function () {
                        $(this).stop(true,false).animate({
                            left: '0'
                        });
                    })
                })
                //精品推荐
                $(function ($) {
                    $('.left_img img').hover(function () {
                        $(this).stop(true,false).animate({
                            left: '-10px'
                        });
                    }, function () {
                        $(this).stop(true,false).animate({
                            left: '0'
                        });
                    })
                })

                $(function ($) {

                    $('.right_com li img').hover(function () {
                        $(this).stop(true,false).animate({
                            left: '10px'
                        });
                    }, function () {
                        $(this).stop(true,false).animate({
                            left: '0'
                        });
                    })

                })
                //新品
                $(function ($) {
                    $('.channel a em').hover(function () {
                        $(this).stop(true,false).animate({
                            right: '5px'
                        });
                    }, function () {
                        $(this).stop(true,false).animate({
                            right: '0'
                        });
                    })
                })

                $(function ($) {

                    $('.new_img a img').hover(function () {
                        $(this).stop(true,false).animate({
                            left: '-5px'
                        });
                    }, function () {
                        $(this).stop(true,false).animate({
                            left: '0'
                        });
                    })

                })
                //我要定制
                $(function ($) {
                    $('.make a em').hover(function () {
                        $(this).stop(true,false).animate({
                            right: '5px'
                        });
                    }, function () {
                        $(this).stop(true,false).animate({
                            right: '0'
                        });
                    })
                })

                $(function ($) {

                    $('.make_img a img').hover(function () {
                        $(this).stop(true,false).animate({
                            left: '-5px'
                        });
                    }, function () {
                        $(this).stop(true,false).animate({
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
                        $(this).stop(true,false).animate({
                            left: '-10px'
                        });
                    }, function () {
                        $(this).stop(true,false).animate({
                            left: '0'
                        });
                    })
                })

                $(function ($) {

                    $('.good_list li img').hover(function () {
                        $(this).stop(true,false).animate({
                            right: '20px'
                        });
                    }, function () {
                        $(this).stop(true,false).animate({
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
                    $oul.css({left:-$oul.find('li').width()-10})
                    $revleft.on('click', function () {
                        $oul.stop().animate({left:0},function(){
                            $oul.css({left:-$oul.find('li').width()-10}).find('li').eq(-1).remove().clone().prependTo($oul)
                        })
                    })
                    $revright.on('click', function () {
                        $oul.stop().animate({left:-2*$oul.find('li').width()-10},function(){
                            $oul.css({left:-$oul.find('li').width()-10}).find('li').eq(0).remove().clone().appendTo($oul)
                        })
                        return false;
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

                    $('.everyone li img').hover(function () {
                        $(this).stop().animate({
                            width: '300px',height: '260px'
                        });
                    }, function () {
                        $(this).stop().animate({
                            width: '290px',height: '250px'
                        });
                    })
                });

                //为您推荐
                $(function ($) {

                    $('.foryou_bd li').hover(function () {
                        $(this).find('img').stop().animate({
                            top: '-8px'
                        });
                        $(this).css('box-shadow','0px 0px 2px 2px #ccc');
                    }, function () {
                        $(this).find('img').stop().animate({
                            top: '0'
                        });
                        $(this).css('box-shadow','none');
                    })
                    
                })
                //footer精灵图定位
                $('.footer_top li').each(function (i) {
                    $(this).find('i').css('backgroundPosition', +i * (-50) + 'px -444px');
                })

            })


            if ($.cookie('phonenum')) {
                $('.top_nav li:first').html('欢迎您，<a href="javascript:">' + $.cookie('phonenum') + '</a>，<span>退出</span>');
                $('.top_nav li').eq(1).hide();
                $('.top_nav li').eq(2).hide();
                $('.user_n').html('欢迎您，' + $.cookie('phonenum'));
                $('.user_login').html('普通会员');
                $('.top_nav li:first').find('span').on('click', function () {
                    $('.top_nav li:first').html('嗨，欢迎来到海尔官方商城 请' +
                        '<a class="login" href="login.html">登陆</a>')
                    $('.top_nav li').eq(1).show();
                    $('.top_nav li').eq(2).show();
                    $('.user_n').html('Hi~ 你好');
                    $('.user_login').html('<a href="login.html">登陆</a>' +
                        '<a href="registor.html">注册</a>');
                    $.cookie('phonenum', '', {
                        expires: -1
                    });
                })
            }
        

        })();