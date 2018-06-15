;
(function () {
    $(function () {
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
    })

    //footer精灵图定位
    $('.footer_top li').each(function (i) {
        $(this).find('i').css('backgroundPosition', +i * (-50) + 'px -444px');
    })


    //购物车
    var sidarr = [];
    var numarr = [];
    function cookieToArray(){
        if($.cookie('cartsid')){
            sidarr=$.cookie('cartsid').split(',');
        }
        
        if($.cookie('cartnum')){
            numarr=$.cookie('cartnum').split(',');
        }
    }
    //2.根据cookie值，创建一个商品列表的函数
    //createcart(1, 1)
    function createcart(sid, num) { //sid：图片的编号  num:商品的数量
        $.ajax({
            url: '../../php/index.php',

            success: function (data) {
                $obj = JSON.parse(data);
                $.each($obj.jingpin, function (i, n) {
                    if (sid == n.sid) {
                        var $clone = $('.cart_list:hidden').clone(true);
                        $clone.find('.pro_inf').find('img').attr('src', n.url.split(',')[0]);
                        $clone.find('.pro_inf').find('img').attr('sid', n.sid);
                        $clone.find('.pro_inf h4').find('a').attr('href','../html/details.html?sid='+n.sid+';'+n.title+';'+n.price+';'+n.url).html(n.title);
                        $clone.find('.price').html(n.price);
                        $clone.find('.num').find('input').val(num);
                        $clone.find('.small').html('￥' + parseInt(n.price.split('￥')[1]) * num);
                        $clone.css('display', 'block');
                        $('.form_bd').append($clone);
                        kong();
                        totalprice();
                        
                    }
                })
            }

        })
    }
    //3.页面加载检测购物车(cookie里面)是否有数据，有的话创建商品列表
    if ($.cookie('cartsid') && $.cookie('cartnum')) {
        var s = $.cookie('cartsid').split(',');//存放sid数组
        var n = $.cookie('cartnum').split(',');//存放数量数组
        for (var i = 0; i < s.length; i++) {
            createcart(s[i], n[i]);//遍历创建商品列表4,5
        }
    }
    //4.商品列表(cookie)不存在，购物车为空
    kong();

    function kong() {
        if ($.cookie('cartsid')) { //cookie存在，有商品，购物车不再为空
            $('.empty').hide();
        } else {
            $('.empty').show();
        }
    }
    //5.每个商品的总价已经通过创建时求得了。求所有商品的总价和总的商品的个数
    function totalprice() {//计算总价
        var total = 0;//总的价格
        var countnum = 0;//总的数量
        $('.cart_list:visible').each(function() {//可视的商品列表进行遍历，循环叠加   
            if ($(this).find('input:checkbox').is(':checked')) {//商品的复选框是选中的
                total += parseFloat($(this).find('.small').html().split('￥')[1]);
                countnum += parseInt($(this).find('.num').find('input').val());
            }
        });
        //赋值
        $('.total_p').html('￥' + total.toFixed(2));
        $('.all_p').html('￥' + total.toFixed(2));
        $('.total_price').html('￥' + total.toFixed(2));
        $('.tolal_num').html(countnum);
    }
//6.修改数量的操作
//改变商品数量++
    $('.add').on('click', function() {
        var $count = $(this).parents('.num').find('input').val();
        $count++;
        if ($count >= 99) {
            $count = 99;
        }
        $(this).parents('.num').find('input').val($count);
        $(this).parents('.cart_list').find('.small').html('￥' +singlegoodsprice($(this)));//改变后的价格
        totalprice();
        $.cookie($(this));
    });
    
    
    //改变商品数量--
    $('.sub').on('click', function() {
        var $count = $(this).parents('.num').find('input').val();
        $count--;
        if ($count <= 1) {
            $count = 1;
        }
        $(this).parents('.num').find('input').val($count);
        $(this).parents('.cart_list').find('.small').html('￥' +singlegoodsprice($(this)));//改变后的价格
        totalprice();
        $.cookie($(this));
    });

    //直接输入改变数量
$('.num input').on('input', function() {
    var $reg = /^\d+$/g; //只能输入数字
    var $value = parseInt($(this).val());
    if ($reg.test($value)) {
        if ($value >= 99) {//限定范围
            $(this).val(99);
        } else if ($value <= 1) {
            $(this).val(1);
        } else {
            $(this).val($value);
        }
    } else {
        $(this).val(1);
    }
    $(this).parents('.cart_list').find('.small').html('￥' +singlegoodsprice($(this)));//改变后的价格
    totalprice();
    $.cookie($(this));
});

    //7.计算数量改变后单个商品的价格
function singlegoodsprice(now) { //now:当前元素
    var $dj = parseFloat(now.parents('.cart_list').find('.price').html().split('￥')[1]);
    var $cnum = parseInt(now.parents('.cart_list').find('.num input').val());
    return ($dj * $cnum).toFixed(2);
 
}

//9.将改变后的数量的值存放到cookie
function setcookie(obj) { //obj:当前操作的对象
    cookieToArray();
    var $index = obj.parents('.cart_list').find('img').attr('sid');
    numarr[sidarr.indexOf($index)] = obj.parents('.cart_list').find('.num input').val();
    $.cookie('cartnum', numarr.toString(), { expires: 7 });
}

//全选
$('.tag_sel').on('change', function() {
    $('.cart_list:visible').find('input:checkbox').prop('checked', $(this).prop('checked'));
    $('.tag_sel').prop('checked', $(this).prop('checked'));
    totalprice();//求和
});

var $inputchecked = $('.cart_list:visible').find('input:checkbox');//获取委托元素
$('.form_bd').on('change', $inputchecked, function() {
    var $inputs = $('.cart_list:visible').find('input:checkbox'); 
    if ($('.cart_list:visible').find('input:checked').length == $inputs.size()) {
        $('.tag_sel').prop('checked', true);
    } else {
        $('.tag_sel').prop('checked', false);
    }
    totalprice();
    
});

if($('.cart_list').find('input:checked')){
    
    $('.cart_list').css({'backgroundColor':'#eaf9ff'});
}else{
    $('.cart_list').css({'backgroundColor':'#fff'});
}

//10.删除
//删除cookie的函数
function delgoodslist(sid, sidarr) {//sid：当前的sid，sidarr:cookie的sid的值
    var index = -1;
    for (var i = 0; i < sidarr.length; i++) {
        if (sid == sidarr[i]) {
            index = i;
        }
    }
    sidarr.splice(index, 1);//删除数组对应的值
    numarr.splice(index, 1);//删除数组对应的值

    $.cookie('cartsid', sidarr.toString(), { expires: 7 });
    $.cookie('cartnum', numarr.toString(), { expires: 7 });
}

//删除单个商品的函数(委托)
$('.form_bd').on('click', '.del', function(ev) {
    cookieToArray(); //转数组
   if(confirm('你确定要删除吗？')){
   	 $(this).parents('.cart_list').remove();
   }
    delgoodslist($(this).parents('.cart_list').find('img').attr('sid'), sidarr);
    totalprice();
    if(!$('.cart_list:visible')){
        $('.empty').show();
    }
});


//删除全部商品的函数
$('.delshopping').on('click', function() {
    $('.cart_list:visible').each(function() {
        if ($(this).find('input:checkbox').is(':checked')) {
            $(this).remove();
            delgoodslist($(this).find('img').attr('sid'), sidarr);
        }
    });
    totalprice();
    $('.empty').show();
});
})();