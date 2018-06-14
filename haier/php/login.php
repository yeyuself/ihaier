<?php
    header('content-type:text/html;charset=utf-8');
    require "conn.php";

    if (isset($_POST['phone'])) {
        $phone = $_POST['phone'];
        $password = md5($_POST['pass']);
    }
       
    $result=mysql_query("select * from user where phone='$phone' and password='$password'");
	    if(mysql_fetch_array($result)){//满足条件
            echo true;
            header('location:../src/html/index.html');
	    }else{
		echo false;
	}

?>