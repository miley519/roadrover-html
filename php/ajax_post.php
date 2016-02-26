<?php
    header("Content-Type:text/html; charset=utf-8");
	//sleep(3);//效果演示，该句可移除;
	
	//表单数据是以POST方式提交过来;
	
	//$name=$_POST["name"];
	
	//注意json数据必须严格按如下格式输出：{"info":"demo info","status":"y"};
	//info: 输出提示信息;
	//status: 返回提交数据的状态,是否提交成功。“y”表示提交成功，“n”表示提交失败，在callback函数里可以根据该值执行相应的回调操作;
    
	$username=$_POST["username"];
	$password=$_POST["password"];

	if($username!='luchang'&&$password!='123456'){
		echo '{
			"info":"用户名或密码错误，请重新输入",
			"status":"n"
		 }';
	}else{
		echo '{
				"info":"登录成功！",
				"status":"y"
		}';
	}
	
	//echo '{"info":"'.$name.'","status":"y"}';
?>