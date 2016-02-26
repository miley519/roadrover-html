<?php
	header("Content-type:text/html;charset=utf-8");
	$aa = $_POST['searchtxt'];
	if($aa!=''){
		$json_arr = array(
			array(
				'id'=>'1',
				'name'=>'上海'
			),
			array(
				'id'=>'2',
				'name'=>'上虞'
			)
		);
	}else{
		$json_arr = '';
	}
	$json_obj = json_encode($json_arr);
	echo $json_obj;
?>