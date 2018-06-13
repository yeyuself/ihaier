<?php
    header('content-type:text/html;charset=utf-8');
    
    require "conn.php";
//轮播图
    $lunbo=mysql_query("select * from lunbo");

	$lunbo_img=array();
	for($i=0;$i<mysql_num_rows($lunbo);$i++){
		$lunbo_img[$i]=mysql_fetch_array($lunbo,MYSQLI_ASSOC);
    }

//商城公告
    $notice=mysql_query("select * from notice");

	$notice_data=array();
	for($i=0;$i<mysql_num_rows($notice);$i++){
		$notice_data[$i]=mysql_fetch_array($notice,MYSQLI_ASSOC);
	}

//精品推荐  
    $jingpin=mysql_query("select * from jingpin");

	$jingping_data=array();
	for($i=0;$i<mysql_num_rows($jingpin);$i++){
		$jingping_data[$i]=mysql_fetch_array($jingpin,MYSQLI_ASSOC);
    }


//优品专辑
    $good=mysql_query("select * from kongtiao");

	$good_data=array();
	for($i=0;$i<mysql_num_rows($good);$i++){
		$good_data[$i]=mysql_fetch_array($good,MYSQLI_ASSOC);
	}
	//冷柜
	$lenggui=mysql_query("select * from lenggui");

	$lenggui_data=array();
	for($i=0;$i<mysql_num_rows($lenggui);$i++){
		$lenggui_data[$i]=mysql_fetch_array($lenggui,MYSQLI_ASSOC);
	}
	//冰箱
	$bingxiang=mysql_query("select * from bingxiang");

	$bingxiang_data=array();
	for($i=0;$i<mysql_num_rows($bingxiang);$i++){
		$bingxiang_data[$i]=mysql_fetch_array($bingxiang,MYSQLI_ASSOC);
	}
	//洗衣机
	$xiyiji=mysql_query("select * from xiyiji");

	$xiyiji_data=array();
	for($i=0;$i<mysql_num_rows($xiyiji);$i++){
		$xiyiji_data[$i]=mysql_fetch_array($xiyiji,MYSQLI_ASSOC);
	}
	//彩电
	$caidian=mysql_query("select * from caidian");

	$caidian_data=array();
	for($i=0;$i<mysql_num_rows($caidian);$i++){
		$caidian_data[$i]=mysql_fetch_array($caidian,MYSQLI_ASSOC);
	}
	//热水器
	$reshuiqi=mysql_query("select * from reshuiqi");

	$reshuiqi_data=array();
	for($i=0;$i<mysql_num_rows($reshuiqi);$i++){
		$reshuiqi_data[$i]=mysql_fetch_array($reshuiqi,MYSQLI_ASSOC);
	}
	//厨电
	$chudian=mysql_query("select * from chudian");

	$chudian_data=array();
	for($i=0;$i<mysql_num_rows($chudian);$i++){
		$chudian_data[$i]=mysql_fetch_array($chudian,MYSQLI_ASSOC);
	}
	//生活家电
	$jiadian=mysql_query("select * from jiadian");

	$jiadian_data=array();
	for($i=0;$i<mysql_num_rows($jiadian);$i++){
		$jiadian_data[$i]=mysql_fetch_array($jiadian,MYSQLI_ASSOC);
	}

//大家都在说
$everyone=mysql_query("select * from everyone");

$everyone_data=array();
for($i=0;$i<mysql_num_rows($everyone);$i++){
    $everyone_data[$i]=mysql_fetch_array($everyone,MYSQLI_ASSOC);
}
//为您推荐
$tuijian=mysql_query("select * from tuijian");

	$tuijian_data=array();
	for($i=0;$i<mysql_num_rows($tuijian);$i++){
		$tuijian_data[$i]=mysql_fetch_array($tuijian,MYSQLI_ASSOC);
	}


	//首页数据接口
	class indexdata{

	}
	$index=new indexdata();
	$index->lunbo=$lunbo_img;//轮播图
	$index->notice=$notice_data;//商城公告
	$index->jingpin=$jingping_data;//精品推荐
	$index->good=$good_data;//优品专辑--空调
	$index->lenggui=$lenggui_data;//优品专辑--冷柜
	$index->bingxiang=$bingxiang_data;//优品专辑--冰箱
	$index->xiyiji=$xiyiji_data;//优品专辑--洗衣机
	$index->caidian=$caidian_data;//优品专辑--彩电
	$index->reshuiqi=$reshuiqi_data;//优品专辑--热水器
	$index->chudian=$chudian_data;//优品专辑--厨电
	$index->jiadian=$jiadian_data;//优品专辑--生活家电
	$index->everyone=$everyone_data;//大家都在说
	$index->tuijian=$tuijian_data;//为您推荐

	echo json_encode($index);

?>