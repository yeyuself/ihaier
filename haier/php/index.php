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
	$index->good=$good_data;//优品专辑
	$index->everyone=$everyone_data;//大家都在说
	$index->tuijian=$tuijian_data;//为您推荐

	echo json_encode($index);

?>