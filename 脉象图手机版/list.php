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
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0" />
<link href="style/bootstrap.css" rel="stylesheet" type="text/css">
<link href="style/liststyle.css" rel="stylesheet" type="text/css">
<link rel="shortcut icon" href="http://pan.baidu.com/res/static/images/favicon.ico"/>
</head>
<body>
	<div class="container">
	<p class="col-xs-12" style="text-align:center"><p class="col-xs-12 header">用户脉象诊断数据列表</p>
		<a href="./index.html" class="col-xs-12"><btn class="btn btn-default" style="float:right;margin-right:70px">添加脉象信息</btn></a></p>
	<?php
	if($data){
		$a = 0;
		foreach($data as $k=>$v){
			$a++;
	?>
		<div class="col-xs-12 list" onclick="show('<?php echo $k;?>')">
			<h5 class="title<?php echo $k;?>"><?php echo '第 '.$a.' 次脉诊数据';?></h5>
			<img src="clipboard.png" class="img-responsive" />
		</div>
	<?php
		}
	}else{
	?>
		<div class="col-lg-3 list">
			<h3>暂时没有数据</h3>
		</div>
	<?php
	}
	?>
</div>
<div id="maizhen" style="position:fixed;top:0px;left:0px;width:100%;height:100%;background:rgba(255,255,255,1) none repeat scroll;z-index:9999;display:none;">
<div class="col-xs-12" style="height:100%;background-color:#f1f1f1;color:#333;border:1px solid #000000;-webkit-border-radius: 6px 6px 6px 6px;-moz-border-radius: 6px 6px 6px 6px;border-radius: 6px 6px 6px 6px;-webkit-box-shadow: #fff 0px 0px 18px;-moz-box-shadow: #fff 0px 0px 18px;box-shadow: #fff 0px 0px 18px;overflow:hidden;overflow-y:auto;">
	<h2 class="col-xs-6 col-xs-offset-3" style="text-align:center;font-size:17px;padding:10px;border:1px solid #aaaaaa"><span style="">加载中...</span></h2>
<svg class="col-xs-12" id="mai" style="height:400px">

<!-- -------------------- 浮 ------------------------------------ -->
	<text x="79" y="35" font-family="serif" font-size="15" fill="black" id="zcf-s" class="yichang"></text>
	<text x="94" y="35" font-family="serif" font-size="12" fill="black" id="zcf-y" class="yichang"></text>

	<text x="221" y="35" font-family="serif" font-size="15" fill="black" id='ycf-s' class="yichang"></text>
	<text x="235" y="35" font-family="serif" font-size="12" fill="black" id='ycf-y' class="yichang"></text>

	<text x="285" y="160" font-family="serif" font-size="15" fill="black" id='ygf-s' class="yichang"></text>
	<text x="300" y="160" font-family="serif" font-size="12" fill="black" id='ygf-y' class="yichang"></text>

	<text x="250" y="280" font-family="serif" font-size="15" fill="black" id='ychf-s' class="yichang"></text>
	<text x="265" y="280" font-family="serif" font-size="12" fill="black" id='ychf-y' class="yichang"></text>

	<text x="60" y="280" font-family="serif" font-size="15" fill="black" id="zchf-s" class="yichang"></text>
	<text x="75" y="280" font-family="serif" font-size="12" fill="black" id="zchf-y" class="yichang"></text>

	<text x="0" y="160" font-family="serif" font-size="15" fill="black" id='zgf-s' class="yichang"></text>
	<text x="15" y="160" font-family="serif" font-size="12" fill="black" id='zgf-y' class="yichang"></text>

<!-- -------------------- 中 ------------------------------------ -->
	<text x="110" y="73" font-family="serif" font-size="15" fill="black" id="zcz-s" class="yichang"></text>
	<text x="125" y="73" font-family="serif" font-size="12" fill="black" id="zcz-y" class="yichang"></text>

	<text x="200" y="73" font-family="serif" font-size="15" fill="black" id="ycz-s" class="yichang"></text>
	<text x="215" y="73" font-family="serif" font-size="12" fill="black" id="ycz-y" class="yichang"></text>

	<text x="245" y="160" font-family="serif" font-size="15" fill="black" id='ygz-s' class="yichang"></text>
	<text x="260" y="160" font-family="serif" font-size="12" fill="black" id='ygz-y' class="yichang"></text>

	<text x="210" y="250" font-family="serif" font-size="15" fill="black" id='ychz-s' class="yichang"></text>
	<text x="225" y="250" font-family="serif" font-size="12" fill="black" id='ychz-y' class="yichang"></text>

	<text x="90" y="250" font-family="serif" font-size="15" fill="black" id="zchz-s" class="yichang"></text>
	<text x="105" y="250" font-family="serif" font-size="12" fill="black" id="zchz-y" class="yichang"></text>

	<text x="40" y="160" font-family="serif" font-size="15" fill="black" id='zgz-s' class="yichang"></text>
	<text x="55" y="160" font-family="serif" font-size="12" fill="black" id='zgz-y' class="yichang"></text>

<!-- -------------------- 沉 ------------------------------------ -->
	<text x="125" y="110" font-family="serif" font-size="15" fill="black" id="zcc-s" class="yichang"></text>
	<text x="140" y="110" font-family="serif" font-size="12" fill="black" id="zcc-y" class="yichang"></text>
	<text x="170" y="110" font-family="serif" font-size="15" fill="black" id="ycc-s" class="yichang"></text>
	<text x="185" y="110" font-family="serif" font-size="12" fill="black" id="ycc-y" class="yichang"></text>

	<text x="205" y="160" font-family="serif" font-size="15" fill="black" id='ygc-s' class="yichang"></text>
	<text x="220" y="160" font-family="serif" font-size="12" fill="black" id='ygc-y' class="yichang"></text>
15
	<text x="180" y="217" font-family="serif" font-size="15" fill="black" id='ychc-s' class="yichang"></text>
	<text x="195" y="217" font-family="serif" font-size="12" fill="black" id='ychc-y' class="yichang"></text>

	<text x="115" y="217" font-family="serif" font-size="15" fill="black" id="zchc-s" class="yichang"></text>
	<text x="130" y="217" font-family="serif" font-size="12" fill="black" id="zchc-y" class="yichang"></text>

	<text x="80" y="160" font-family="serif" font-size="15" fill="black" id='zgc-s' class="yichang"></text>
	<text x="95" y="160" font-family="serif" font-size="12" fill="black" id='zgc-y' class="yichang"></text>
	<!-- 左->寸，关，尺 -->
	<text x="10" y="20" font-family="serif" font-size="15" fill="gray">左</text>
	<text x="50" y="30" font-family="serif" font-size="15" fill="gray">寸</text>
	<text x="5" y="100" font-family="serif" font-size="15" fill="gray">关</text>
	<text x="35" y="300" font-family="serif" font-size="15" fill="gray">尺</text>
	
	<!-- 右->寸，关，尺-->
	<text x="290" y="20" font-family="serif" font-size="15" fill="gray">右</text>
	<text x="250" y="30" font-family="serif" font-size="15" fill="gray">寸</text>
	<text x="300" y="100" font-family="serif" font-size="15" fill="gray">关</text>
	<text x="270" y="300" font-family="serif" font-size="15" fill="gray">尺</text>

	<!-- 浮，中，沉-->
	<text x="152" y="35" font-family="serif" font-size="15" fill="gray">浮</text>
	<text x="152" y="80" font-family="serif" font-size="15" fill="gray">中</text>
	<text x="152" y="130" font-family="serif" font-size="15" fill="gray">沉</text>
	<!-- 分割线 -->
	<line x1="160" y1="0" x2="160" y2="320" stroke="gray"/>
	<line x1="0" y1="67" x2="320" y2="252" stroke="gray"/>
	<line x1="0" y1="252" x2="320" y2="67" stroke="gray"/>
	<!-- 浮 -->
	<path d="M 34,85 Q 80,15 160,16" stroke="gray" stroke-width="1" fill="none" id="zcf" />
	<path d="M 160,16 Q 236,15 287,88" stroke="gray" stroke-width="1" fill="none" id="ycf" />
	<path d="M 287,88 Q 327,160 289,235" stroke="gray" stroke-width="1" fill="none" id="ygf" />
	<path d="M 289,235 Q 243,310 160,310" stroke="gray" stroke-width="1" fill="none" id="ychf" />
	<path d="M 160,310 Q 75,310 31,234" stroke="gray" stroke-width="1" fill="none" id="zgf" />
	<path d="M 31,234 Q -10,160 34,85" stroke="gray" stroke-width="1" fill="none" id="zchf" />
	<!-- 中 -->
	<path d="M 70,107 Q 95,60 160,56" stroke="gray" stroke-width="1" fill="none" id="zcz" />
	<path d="M 160,56 Q 217,60 250,107" stroke="gray" stroke-width="1" fill="none" id="ycz" />
	<path d="M 250,107 Q 278,160 253,213" stroke="gray" stroke-width="1" fill="none" id="ygz" />
	<path d="M 253,213 Q 223,266 160,269" stroke="gray" stroke-width="1" fill="none" id="ychz" />
	<path d="M 160,269 Q 100,269 64,213" stroke="gray" stroke-width="1" fill="none" id="zgz" />
	<path d="M 64,213 Q 37,160 70,107" stroke="gray" stroke-width="1" fill="none" id="zchz" />
	<!-- 沉 -->
	<path d="M 105,128 Q 121,100 160,98" stroke="gray" stroke-width="1" fill="none" id="zcc" />
	<path d="M 160,98 Q 197,97 215,128" stroke="gray" stroke-width="1" fill="none" id="ycc" />
	<path d="M 215,128 Q 233,160 219,194" stroke="gray" stroke-width="1" fill="none" id="ygc" />
	<path d="M 219,194 Q 196,227 160,229" stroke="gray" stroke-width="1" fill="none" id="ychc" />
	<path d="M 160,229 Q 120,227 100,192" stroke="gray" stroke-width="1" fill="none" id="zgc" />
	<path d="M 100,192 Q 88,160 105,128" stroke="gray" stroke-width="1" fill="none" id="zchc" />
</svg>
</div>
</div>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/list.js"></script>
</body>
</html>