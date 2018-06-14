<?php
header('content-type:text/html;charset=utf-8');
require "conn.php";
    if (isset($_POST['phone'])) {
        $phone=@$_POST['phone'];
    }
    $result=@mysql_query("select * from user where phone='$phone'");

	if(mysql_fetch_array($result)){//满足条件有重复
		echo "false";
	}else{//没有重复
		echo "true";
	}



if (isset($_POST['submit'])) {
    $phone = $_POST['phone'];
    $password = md5($_POST['password']);
    $query = "insert into user (sid,phone,password) values(null,'$phone','$password')";
    mysql_query($query);
    header('location:../src/html/login.html');
}
?>