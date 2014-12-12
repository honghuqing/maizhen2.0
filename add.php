<?php
	//header("Content-Type:text/html;charset=utf-8");
	$conn = new Mongo();
	$db=$conn->mz_data; 
	$collection=$db->user_mz_date;
	$post = $_POST['content'];	
	$json_data = json_decode($post);
	$result=$collection->insert(array('data'=>$json_data));
	if($result){
		echo 1;
	}else{
		echo 0;
	}

?>