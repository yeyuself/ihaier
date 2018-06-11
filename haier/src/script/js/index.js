;(function(){
    $.ajax({
        url: 'http://localhost/ihaier/haier/php/index.php',
        
        success:function(data){
                $obj=JSON.parse(data); 
                //轮播  
                $.each($obj.lunbo ,function(i,n){
                    $('.banner ul').append('<li><a href="#"><img src="'+n.url+'"></a></li>');
                });
                //商城公告
                $.each($obj.notice ,function(i,n){
                    $('.notice_list').append('<li><a href="#">'+n.title+'</a></li>');
                }) 
                //精品推荐
                $.each($obj.jingpin ,function(i,n){
                    $('.right_com').append(
                        '<li><a href="#" class="jp_img"><img src="'+n.url+'"></a><h4><a href="#">'+n.title+'</a></h4><strong>'+n.price+'</strong><span>'+n.discounts+'</span></li>'
                    );
                }) 
                //优品专辑
                $.each($obj.good ,function(i,n){
                    $('.good_bd ul').append('<li><a href="#"><img src="'+n.url+'"></a><h4><a href="#">'+n.title+'</a></h4><strong>'+n.price+'</strong></li>');
                }) 
               
                //大家都在说
                $.each($obj.everyone ,function(i,n){
                    $('.everyone').append(
                        '<li><a href="#"><img src="'+n.url+'"></a><a href="#" class="tps_links clear"><div><h4>'+n.title+'</h4><strong>'+n.price+'</strong><div><p>'+n.appraise+'</p></a><span>'+n.time+'</span></li>'
                    );
                }) 

                //为您推荐
                $.each($obj.tuijian ,function(i,n){
                    $('.foryou_bd ul').append('<li><a href="#"><img src="'+n.url+'"></a><h4><a href="#">'+n.title+'</a></h4><strong>'+n.price+'</strong></li>');
                }) 
        }
        })
        
        $('.good_tab li').each(function(i){
            $(this).find('i').css('backgroundPosition',+i*(-25)+'px -356px');
        })
})();

