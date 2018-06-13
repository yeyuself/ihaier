;
(function () {

    $.ajax({
        url: 'http://localhost/ihaier/haier/php/index.php',

        success: function (data) {
            $obj = JSON.parse(data);
            //轮播  
            $.each($obj.lunbo, function (i, n) {
                $('.banner ul').append('<li><a href="javascript:"><img src="' + n.url + '"></a></li>');
            });
            //商城公告
            $.each($obj.notice, function (i, n) {
                $('.notice_list').append('<li><a href="javascript:">' + n.title + '</a></li>');
            })
            //二级导航
            $.each($obj.bingxiang, function (i, n) {
                $('.bx_box .pro_box').append('<li><a href="javascript:"><img src="' + n.url + '"><h4>' + n.title + '</h4><strong>' + n.price + '</strong></a></li>');
            })
            $.each($obj.good, function (i, n) {
                $('.kt_box .pro_box').append('<li><a href="javascript:"><img src="' + n.url + '"><h4>' + n.title + '</h4><strong>' + n.price + '</strong></a></li>');
            })
            $.each($obj.xiyiji, function (i, n) {
                
                $('.xyj_box .pro_box').append('<li><a href="javascript:"><img src="' + n.url + '"><h4>' + n.title + '</h4><strong>' + n.price + '</strong></a></li>');
            })
            //精品推荐
            $.each($obj.jingpin, function (i, n) {
                $('.right_com').append(
                    '<li><a href="details.html?sid='+n.sid+';'+n.title+';'+n.price+';'+n.url+'" class="jp_img"><img src="' + n.url.split(',')[0] + '"></a><h4><a href="details.html?sid='+n.sid+'">' + n.title + '</a></h4><strong>' + n.price + '</strong><span>' + n.discounts + '</span></li>'
                );
            })
            //优品专辑
            $.each($obj.good, function (i, n) {
                $('.kongtiao .good_list').append('<li><a href="javascript:"><img src="' + n.url + '"></a><h4><a href="javascript:">' + n.title + '</a></h4><strong>' + n.price + '</strong></li>');
            })
            $.each($obj.lenggui, function (i, n) {
                $('.lenggui .good_list').append('<li><a href="javascript:"><img src="' + n.url + '"></a><h4><a href="javascript:">' + n.title + '</a></h4><strong>' + n.price + '</strong></li>');
            })
            $.each($obj.bingxiang, function (i, n) {
                $('.bingxiang .good_list').append('<li><a href="javascript:"><img src="' + n.url + '"></a><h4><a href="javascript:">' + n.title + '</a></h4><strong>' + n.price + '</strong></li>');
            })
            $.each($obj.xiyiji, function (i, n) {
                $('.xiyiji .good_list').append('<li><a href="javascript:"><img src="' + n.url + '"></a><h4><a href="javascript:">' + n.title + '</a></h4><strong>' + n.price + '</strong></li>');
            })
            $.each($obj.caidian, function (i, n) {
                $('.caidian .good_list').append('<li><a href="javascript:"><img src="' + n.url + '"></a><h4><a href="javascript:">' + n.title + '</a></h4><strong>' + n.price + '</strong></li>');
            })
            $.each($obj.reshuiqi, function (i, n) {
                $('.reshuiqi .good_list').append('<li><a href="javascript:"><img src="' + n.url + '"></a><h4><a href="javascript:">' + n.title + '</a></h4><strong>' + n.price + '</strong></li>');
            })
            $.each($obj.chudian, function (i, n) {
                $('.chudian .good_list').append('<li><a href="javascript:"><img src="' + n.url + '"></a><h4><a href="javascript:">' + n.title + '</a></h4><strong>' + n.price + '</strong></li>');
            })
            $.each($obj.jiadian, function (i, n) {
                $('.jiadian .good_list').append('<li><a href="javascript:"><img src="' + n.url + '"></a><h4><a href="javascript:">' + n.title + '</a></h4><strong>' + n.price + '</strong></li>');
            })

            //大家都在说
            $.each($obj.everyone, function (i, n) {
                $('.everyone').append(
                    '<li><a href="javascript:"><img src="' + n.url + '"></a><a href="javascript:" class="tps_links clear"><div><h4>' + n.title + '</h4><strong>' + n.price + '</strong><div><p>' + n.appraise + '</p></a><span>' + n.time + '</span></li>'
                );
            })

            //为您推荐
            $.each($obj.tuijian, function (i, n) {
                $('.foryou_bd ul').append('<li><a href="javascript:"><img src="' + n.url + '"></a><h4><a href="javascript:">' + n.title + '</a></h4><strong>' + n.price + '</strong></li>');
            })
        }
    })

    
    

})();