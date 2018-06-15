;(function(){
    
    var $str=window.location.search;
    var $arr=$str.split(';');
    var $sid=$arr[0].split('=')[1];
    $('.links strong').html(decodeURI($arr[1]));
    $('.product_inf h2').html(decodeURI($arr[1]));
    $('.price span').html(decodeURI($arr[2]));
    $('.product_pic img').attr('src',$arr[3].split(',')[0]);
    $.each($arr[3].split(','),function(i,url){
        $('.imglist').append('<li><img src="'+url+'"></li>')
    })

    var numarr = [];
    var num = 0;
    if ($.cookie('cartnum')) {
        numarr = $.cookie('cartnum').split(',');
    }
    for (var i = 0; i < numarr.length; i++) {
        num += parseInt(numarr[i]);
    }
    $('.cart_show').find('span').html(num);
    //放大镜   
    $(function(){ 
        $('.big_scale img').attr('src',$('.product_pic img').attr('src'));
        $('.imglist li').on('mouseover',function(){
            $imgsrc=$(this).find("img").attr("src");
            $(this).find("img").css({'border':'2px solid #ccc'});
            $(this).siblings().find("img").css({'border':'0'});
            $('.product_pic img').attr({'src':$imgsrc});
            $('.big_scale img').attr({'src':$imgsrc});
        })
        
       var $smallwidth=$('.big_scale').innerWidth()*$('.product_pic img').innerWidth()/$('.big_scale img').innerWidth();
       var $smallheight=$('.big_scale').innerHeight()*$('.product_pic img').innerHeight()/$('.big_scale img').innerHeight();
        $scale=$('.big_scale img').innerWidth()/$('.product_pic img').innerWidth();
        $('.product_pic').hover(function(){
            $('.small_scale').css({'width':$smallwidth+'px','height':$smallheight+'px','visibility':'visible'});
            $('.big_scale').css({'visibility':'visible'})
            $(document).on('mousemove',function(ev){
               var $l=ev.pageX-$('.product_pic').offset().left-$smallwidth/2;
               var $t=ev.pageY-$('.product_pic').offset().top-$smallheight/2;
                if($l<=0){
                    $l=0;
                }else if($l>=$('.product_pic img').innerWidth()-$('.small_scale').innerWidth()){
                    $l=$('.product_pic img').innerWidth()-$('.small_scale').innerWidth();
                }
                if($t<=0){
                    $t=0;
                }else if($t>=$('.product_pic img').innerHeight()-$('.small_scale').innerHeight()){
                    $t=$('.product_pic img').innerHeight()-$('.small_scale').innerHeight();
                }
                $('.small_scale').css({'left':$l,'top':$t});
                $('.big_scale img').css({'left':-$l*$scale,'top':-$t*$scale});
            })
            
        },function(){
            $('.small_scale').css({'visibility':'hidden'});
            $('.big_scale').css({'visibility':'hidden'});
        })

       var $num=5;
        $('.product_picbox .right').on('click',function(){
            if ($('.imglist li').size() > $num) {
                $num++
                $('.imglist').animate({'left':-($num-5)*$('.imglist li').eq(0).innerWidth()})
            }
        })
        $('.product_picbox .left').on('click',function(ev){
            if ($num > 5) {
                $num--;
                $('.imglist').animate({'left':-($num-5)*$('.imglist li').eq(0).innerWidth()})
            }
        })
    })


$('.add').on('click',function(){
    $num=$('.count_num input').val();
    $num++;
    $('.count_num input').val($num)
})
$('.sub').on('click',function(){
    $num=$('.count_num input').val();
    $num--;
    if($num<=0){
        $num=0;
    }
    $('.count_num input').val($num)
})


var sidarr = [];
var numarr = [];
function getcookievalue(){
    if($.cookie('cartsid')){//cartsid：cookie里面id的名称
        sidarr=$.cookie('cartsid').split(',');//cookie转数组
    }
    
    if($.cookie('cartnum')){//cartnum：cookie里面数量的名称
        numarr=$.cookie('cartnum').split(',');
    }
}
$('.addcart').on('click',function(){
    getcookievalue();
    if($.inArray($sid, sidarr) != -1){
        if($.cookie('cartnum')==''){
            var num=parseInt($('.count_num input').val());
            $('.cart_show').find('span').html(num);
            numarr[$.inArray($sid,sidarr)]=num;
            $.cookie('cartnum', numarr.toString(), { expires: 7 });//修改后的结果
            sidarr[$.inArray($sid,sidarr)]=$sid;//将当前id添加到对应的位置。
            $.cookie('cartsid', sidarr.toString(), { expires: 7 });//将整个数组添加到cookie
        }else{
            //走这里代码已经存在cookie,数量累加，取出cookie的数量+当前的输入的数量
            var num=parseInt(numarr[$.inArray($sid,sidarr)])+parseInt($('.count_num input').val());
            $('.cart_show').find('span').html(num);
            numarr[$.inArray($sid,sidarr)]=num;
            $.cookie('cartnum', numarr.toString(), { expires: 7 });//修改后的结果
        }
    }else{
        sidarr.push($sid);
        $.cookie('cartsid', sidarr.toString(), { expires: 7 });
        numarr.push($('.count_num input').val());
        $.cookie('cartnum', numarr.toString(), { expires: 7 });
        
    }
})




//footer精灵图定位
$('.footer_top li').each(function (i) {
    $(this).find('i').css('backgroundPosition', +i * (-50) + 'px -444px');
})

})();