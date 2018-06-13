;(function(){
    
    $str=window.location.search;
    $arr=$str.split(';');
    $('.links strong').html(decodeURI($arr[1]));
    $('.product_inf h2').html(decodeURI($arr[1]));
    $('.price span').html(decodeURI($arr[2]));
    $.each($arr[3].split(','),function(i,url){
        $('.imglist').append('<li><img src="'+url+'"></li>')
    })

    //放大镜   
    $(function(){ 
        $('.imglist li').on('mouseover',function(){
            $imgsrc=$(this).find("img").attr("src");
            $(this).find("img").css({'border':'2px solid #ccc'});
            $(this).siblings().find("img").css({'border':'0'});
            $('.product_pic img').attr({'src':$imgsrc});
            $('.big_scale img').attr({'src':$imgsrc});
        })

        $smallwidth=$('.big_scale').innerWidth()*$('.product_pic img').innerWidth()/$('.big_scale img').innerWidth();
        $smallheight=$('.big_scale').innerHeight()*$('.product_pic img').innerHeight()/$('.big_scale img').innerHeight();
        $scale=$('.big_scale img').innerWidth()/$('.product_pic img').innerWidth();
        $('.product_pic').hover(function(){
            $('.small_scale').css({'width':$smallwidth+'px','height':$smallheight+'px','visibility':'visible'});
            $('.big_scale').css({'visibility':'visible'})
            $(document).on('mousemove',function(ev){
                $l=ev.pageX-$('.product_pic').offset().left-$smallwidth/2;
                $t=ev.pageY-$('.product_pic').offset().top-$smallheight/2;
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

        $num=5;
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
})();

$('.add').on('click',function(){
    $num=$('.count_num input').val();
    $num++;
    $('.count_num input').val($num)
})



//


$('.district').on('click',function(){
    $('.areaselect').hide();
    $('.s_location').html($('.province option:selected').val()+$('.city option:selected').val()+$('.district option:selected').val())
    $('.s_tip').hide();
})


$('.s_location').on('click',function(){
    $('.areaselect').show();
})


//footer精灵图定位
$('.footer_top li').each(function (i) {
    $(this).find('i').css('backgroundPosition', +i * (-50) + 'px -444px');
})

