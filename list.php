<?php
	header("Cache-Control: no-cache");
	header("Content-Type:text/html;charset=utf-8");
	$conn = new Mongo();
	$db=$conn->mz_data; 
	$collection=$db->user_mz_date;

	$result=$collection->find();
	$data;
	foreach ($result as $id => $value) {
		$data[$id] = $value["data"];
	}
?>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="Author" content="">
<meta name="Keywords" content="">
<meta name="Description" content="">
<title>云脉</title>
<link href="style/bootstrap.css" rel="stylesheet" type="text/css">
<link href="style/liststyle.css" rel="stylesheet" type="text/css">
<link rel="shortcut icon" href="http://pan.baidu.com/res/static/images/favicon.ico"/>
</head>
<body>
	<h2 style="text-align:center">用户脉象诊断数据列表<a href="./index.html"><btn class="btn btn-default" style="float:right;margin-right:70px">添加脉象信息</btn></a></h2>
	<?php
	if($data){
		$a = 0;
		foreach($data as $k=>$v){
			$a++;
	?>
		<div class="container col-lg-3 list" onclick="show('<?php echo $k;?>')">
			<h5><?php echo '第 '.$a.' 次脉诊数据';?></h5>
			<img src="clipboard.png" class="img-responsive" />
		</div>
	<?php
		}
	}else{
	?>
		<div class="container col-lg-3 list">
			<h3>暂时没有数据</h3>
		</div>
	<?php
	}
	?>

<div id="maizhen" style="position:fixed;top:0px;left:0px;width:100%;height:100%;background:rgba(0,0,0,0.4) none repeat scroll;z-index:9999;display:none;">
	<div class="col-lg-10 col-lg-offset-1" style="height:100%;padding:30px 15px;background-color:#f1f1f1;color:#333;border:1px solid #000000;-webkit-border-radius: 6px 6px 6px 6px;-moz-border-radius: 6px 6px 6px 6px;border-radius: 6px 6px 6px 6px;-webkit-box-shadow: #fff 0px 0px 18px;-moz-box-shadow: #fff 0px 0px 18px;box-shadow: #fff 0px 0px 18px;overflow:hidden;overflow-y:auto;">
		<svg class="col-lg-8 col-lg-offset-2 col-xs-12" id="mai" height="600">
		<!-- -------------------- 浮 ------------------------------------ -->
			<text x="170" y="90" font-family="serif" font-size="35" fill="black" id="zcf-s" class="yichang"></text>
			<text x="200" y="90" font-family="serif" font-size="25" fill="black" id="zcf-y" class="yichang"></text>

			<text x="410" y="80" font-family="serif" font-size="35" fill="black" id='ycf-s' class="yichang"></text>
			<text x="440" y="80" font-family="serif" font-size="25" fill="black" id='ycf-y' class="yichang"></text>

			<text x="540" y="300" font-family="serif" font-size="35" fill="black" id='ygf-s' class="yichang"></text>
			<text x="570" y="300" font-family="serif" font-size="25" fill="black" id='ygf-y' class="yichang"></text>

			<text x="410" y="530" font-family="serif" font-size="35" fill="black" id='ychf-s' class="yichang"></text>
			<text x="440" y="530" font-family="serif" font-size="25" fill="black" id='ychf-y' class="yichang"></text>

			<text x="170" y="530" font-family="serif" font-size="35" fill="black" id="zchf-s" class="yichang"></text>
			<text x="200" y="530" font-family="serif" font-size="25" fill="black" id="zchf-y" class="yichang"></text>

			<text x="40" y="300" font-family="serif" font-size="35" fill="black" id='zgf-s' class="yichang"></text>
			<text x="70" y="300" font-family="serif" font-size="25" fill="black" id='zgf-y' class="yichang"></text>

		<!-- -------------------- 中 ------------------------------------ -->
			<text x="210" y="150" font-family="serif" font-size="35" fill="black" id="zcz-s" class="yichang"></text>
			<text x="240" y="150" font-family="serif" font-size="25" fill="black" id="zcz-y" class="yichang"></text>

			<text x="400" y="150" font-family="serif" font-size="35" fill="black" id="ycz-s" class="yichang"></text>
			<text x="430" y="150" font-family="serif" font-size="25" fill="black" id="ycz-y" class="yichang"></text>

			<text x="470" y="300" font-family="serif" font-size="35" fill="black" id='ygz-s' class="yichang"></text>
			<text x="500" y="300" font-family="serif" font-size="25" fill="black" id='ygz-y' class="yichang"></text>

			<text x="380" y="480" font-family="serif" font-size="35" fill="black" id='ychz-s' class="yichang"></text>
			<text x="410" y="480" font-family="serif" font-size="25" fill="black" id='ychz-y' class="yichang"></text>

			<text x="200" y="480" font-family="serif" font-size="35" fill="black" id="zchz-s" class="yichang"></text>
			<text x="230" y="480" font-family="serif" font-size="25" fill="black" id="zchz-y" class="yichang"></text>

			<text x="110" y="300" font-family="serif" font-size="35" fill="black" id='zgz-s' class="yichang"></text>
			<text x="140" y="300" font-family="serif" font-size="25" fill="black" id='zgz-y' class="yichang"></text>

		<!-- -------------------- 沉 ------------------------------------ -->
			<text x="240" y="210" font-family="serif" font-size="35" fill="black" id="zcc-s" class="yichang"></text>
			<text x="270" y="210" font-family="serif" font-size="25" fill="black" id="zcc-y" class="yichang"></text>

			<text x="360" y="210" font-family="serif" font-size="35" fill="black" id="ycc-s" class="yichang"></text>
			<text x="390" y="210" font-family="serif" font-size="25" fill="black" id="ycc-y" class="yichang"></text>

			<text x="400" y="300" font-family="serif" font-size="35" fill="black" id='ygc-s' class="yichang"></text>
			<text x="430" y="300" font-family="serif" font-size="25" fill="black" id='ygc-y' class="yichang"></text>

			<text x="340" y="420" font-family="serif" font-size="35" fill="black" id='ychc-s' class="yichang"></text>
			<text x="370" y="420" font-family="serif" font-size="25" fill="black" id='ychc-y' class="yichang"></text>

			<text x="240" y="420" font-family="serif" font-size="35" fill="black" id="zchc-s" class="yichang"></text>
			<text x="270" y="420" font-family="serif" font-size="25" fill="black" id="zchc-y" class="yichang"></text>

			<text x="180" y="300" font-family="serif" font-size="35" fill="black" id='zgc-s' class="yichang"></text>
			<text x="210" y="300" font-family="serif" font-size="25" fill="black" id='zgc-y' class="yichang"></text>
			<!-- 左->寸，关，尺 -->
			<text x="270" y="20" font-family="serif" font-size="25" fill="gray">左</text>
			<text x="130" y="70" font-family="serif" font-size="25" fill="gray">寸</text>
			<text x="10" y="300" font-family="serif" font-size="25" fill="gray">关</text>
			<text x="145" y="560" font-family="serif" font-size="25" fill="gray">尺</text>
			
			<!-- 右->寸，关，尺-->
			<text x="335" y="20" font-family="serif" font-size="25" fill="gray">右</text>
			<text x="470" y="70" font-family="serif" font-size="25" fill="gray">寸</text>
			<text x="590" y="300" font-family="serif" font-size="25" fill="gray">关</text>
			<text x="470" y="550" font-family="serif" font-size="25" fill="gray">尺</text>

			<!-- 浮，中，沉-->
			<text x="300" y="85" font-family="serif" font-size="25" fill="gray">浮</text>
			<text x="300" y="165" font-family="serif" font-size="25" fill="gray">中</text>
			<text x="300" y="230" font-family="serif" font-size="25" fill="gray">沉</text>
			<!-- 分割线 -->
			<line x1="314" y1="0" x2="310" y2="600" stroke="gray"/>
			<line x1="41" y1="144" x2="625" y2="486" stroke="gray"/>
			<line x1="24" y1="469" x2="600" y2="135" stroke="gray"/>
			<!-- 浮 -->
			<path d="M 92,172 Q 167,52 314,46" stroke="gray" stroke-width="1" fill="none" id="zcf" />
			<path d="M 314,46 Q 461,53 532,174" stroke="gray" stroke-width="1" fill="none" id="ycf" />
			<path d="M 532,174 Q 599,300 531,433" stroke="gray" stroke-width="1" fill="none" id="ygf" />
			<path d="M 531,433 Q 465,545 311,558" stroke="gray" stroke-width="1" fill="none" id="ychf" />
			<path d="M 311,558 Q 162,550 92,431" stroke="gray" stroke-width="1" fill="none" id="zgf" />
			<path d="M 92,431 Q 24,302 92,172" stroke="gray" stroke-width="1" fill="none" id="zchf" />
			<!-- 中 -->
			<path d="M 148,207 Q 198,119 314,114" stroke="gray" stroke-width="1" fill="none" id="zcz" />
			<path d="M 314,114 Q 426,121 474,208" stroke="gray" stroke-width="1" fill="none" id="ycz" />
			<path d="M 474,208 Q 525,303 474,396" stroke="gray" stroke-width="1" fill="none" id="ygz" />
			<path d="M 474,396 Q 425,484 313,490" stroke="gray" stroke-width="1" fill="none" id="ychz" />
			<path d="M 314,490 Q 201,486 148,398" stroke="gray" stroke-width="1" fill="none" id="zgz" />
			<path d="M 148,398 Q 102,302 148,207" stroke="gray" stroke-width="1" fill="none" id="zchz" />
			<!-- 沉 -->
			<path d="M 211,242 Q 241,189 314,184" stroke="gray" stroke-width="1" fill="none" id="zcc" />
			<path d="M 314,184 Q 382,190 413,242" stroke="gray" stroke-width="1" fill="none" id="ycc" />
			<path d="M 413,242 Q 444,302 413,360" stroke="gray" stroke-width="1" fill="none" id="ygc" />
			<path d="M 413,360 Q 381,413 312,421" stroke="gray" stroke-width="1" fill="none" id="ychc" />
			<path d="M 312,421 Q 241,417 210,361" stroke="gray" stroke-width="1" fill="none" id="zgc" />
			<path d="M 210,361 Q 179,302 211,242" stroke="gray" stroke-width="1" fill="none" id="zchc" />
		</svg>
	</div>
</div>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/list.js"></script>
</body>
</html>