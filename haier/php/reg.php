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



/* if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = md5($_POST['password']);
    $email = $_POST['email'];
    $query = "insert user value(default,'$username','$password','$email')";
    mysql_query($query);
    header('location:../login.html');
} */
?>