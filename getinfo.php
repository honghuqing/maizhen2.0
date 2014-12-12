<?php
	$conn = new Mongo();
	$db=$conn->mz_data; 
	$collection=$db->user_mz_date;
	$id = $_POST['id'];	
	//$id = "5488ce34a0468e674e000001";	
	$result=$collection->findOne(array('_id'=>new MongoId("$id")));
	if($result){
		echo json_encode($result);
	}else{
		echo 0;
	}

?>