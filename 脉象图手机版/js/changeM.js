	var attr = ['zcf','ycf','ygf','ychf','zchf','zgf','zcz','ycz','ygz','ychz','zchz','zgz','zcc','ycc','ygc','ychc','zchc','zgc','alert','show','list'];

	var obj;
	function changeStyle(obj1, addr, arg){
		for(i=0;i<attr.length;i++){
			$("#"+attr[i]).css('display','none');
		}

		obj = $(obj1).prev();
		$("#maizhen").css('display','block');
		$("#"+arg).css('display','block');
		$("#"+arg+" h2").html(addr);
	}

	function hiden(){
		for(i=0;i<attr.length;i++){
			$("#"+attr[i]).css('display','none');
		}
		$("#maizhen").css('display','none');
	}
	function heMai(){
		$("path").attr({
			'stroke':'green',
			'stroke-width':'4',
			'stroke-dasharray':'',
		});
		$("span").removeClass("active");
		$(".wu").addClass('active');
		$(".wen").addClass('active');
		$(".xushi-chang").addClass('active');
		$(".yichang").html('');

		wendu['zcf'] = '温';
		wendu['ycf'] = '温';
		wendu['ygf'] = '温';
		wendu['ychf'] = '温';
		wendu['zchf'] = '温';
		wendu['zgf'] = '温';
		wendu['zcz'] = '温';
		wendu['ycz'] = '温';
		wendu['ygz'] = '温';
		wendu['ychz'] = '温';
		wendu['zchz'] = '温';
		wendu['zgz'] = '温';
		wendu['zcc'] = '温';
		wendu['ycc'] = '温';
		wendu['ygc'] = '温';
		wendu['ychc'] = '温';
		wendu['zchc'] = '温';
		wendu['zgc'] = '温';

		yczt['zcf'] = '无';
		yczt['ycf'] = '无';
		yczt['ygf'] = '无';
		yczt['ychf'] = '无';
		yczt['zchf'] = '无';
		yczt['zgf'] = '无';
		yczt['zcz'] = '无';
		yczt['ycz'] = '无';
		yczt['ygz'] = '无';
		yczt['ychz'] = '无';
		yczt['zchz'] = '无';
		yczt['zgz'] = '无';
		yczt['zcc'] = '无';
		yczt['ycc'] = '无';
		yczt['ygc'] = '无';
		yczt['ychc'] = '无';
		yczt['zchc'] = '无';
		yczt['zgc'] = '无';

		yccd['zcf'] = '无';
		yccd['ycf'] = '无';
		yccd['ygf'] = '无';
		yccd['ychf'] = '无';
		yccd['zchf'] = '无';
		yccd['zgf'] = '无';
		yccd['zcz'] = '无';
		yccd['ycz'] = '无';
		yccd['ygz'] = '无';
		yccd['ychz'] = '无';
		yccd['zchz'] = '无';
		yccd['zgz'] = '无';
		yccd['zcc'] = '无';
		yccd['ycc'] = '无';
		yccd['ygc'] = '无';
		yccd['ychc'] = '无';
		yccd['zchc'] = '无';
		yccd['zgc'] = '无';


		xushi['zcf'] = '正常';
		xushi['ycf'] = '正常';
		xushi['ygf'] = '正常';
		xushi['ychf'] = '正常';
		xushi['zchf'] = '正常';
		xushi['zgf'] = '正常';
		xushi['zcz'] = '正常';
		xushi['ycz'] = '正常';
		xushi['ygz'] = '正常';
		xushi['ychz'] = '正常';
		xushi['zchz'] = '正常';
		xushi['zgz'] = '正常';
		xushi['zcc'] = '正常';
		xushi['ycc'] = '正常';
		xushi['ygc'] = '正常';
		xushi['ychc'] = '正常';
		xushi['zchc'] = '正常';
		xushi['zgc'] = '正常';
	}


	function changeAttr(s, opt, arg){
		$(s).parent().parent().find('span').removeClass('active');
		$(s).addClass('active');
		if(opt == 'zhonghan1'){
			obj.attr('stroke','#244FA1');
			wendu[arg] = "重寒";
		}
		else if(opt == "zhonghan2"){
			obj.attr('stroke','#0F92AD');
			wendu[arg] = "中寒";
		}
		else if(opt == "weihan"){
			obj.attr('stroke','#00A0E9');
			wendu[arg] = "微寒";
		}
		else if(opt == "wen"){
			obj.attr('stroke','green');	
			wendu[arg] = "温";		
		}
		else if(opt == "zhongre1"){
			obj.attr('stroke','#674498');	
			wendu[arg] = "重热";		
		}
		else if(opt == "zhongre2"){
			obj.attr('stroke','#D0121B');	
			wendu[arg] = "中热";		
		}
		else if(opt == "weire"){
			obj.attr('stroke','#E4007F');	
			wendu[arg] = "微热";		
		}
		else if(opt == "yu1"){
			$("#"+arg+"-s").text('郁');
			yczt[arg] = "郁";
		}
		else if(opt == "yu2"){
			$("#"+arg+"-s").text('瘀');
			yczt[arg] = "瘀";
		}
		else if(opt == "shui"){
			$("#"+arg+"-s").text('水');
			yczt[arg] = "水";
		}
		else if(opt == "shi"){
			$("#"+arg+"-s").text('湿');
			yczt[arg] = "湿";
		}
		else if(opt == "tan"){
			$("#"+arg+"-s").text('痰');
			yczt[arg] = "痰";
		}
		else if(opt == "yichang-3"){
			$("#"+arg+"-y").text('(重)');
			yccd[arg] = "(重)";
		}
		else if(opt == "yichang-2"){
			$("#"+arg+"-y").text('(中)');
			yccd[arg] = "(中)";
		}
		else if(opt == "yichang-1"){
			$("#"+arg+"-y").text('(轻)');
			yccd[arg] = "(轻)";
		}
		else if(opt == "yichang-wu"){
			$(s).parent().parent().next().find('span').removeClass('active');
			$(s).parent().parent().next().find('span').last().addClass('active');
			$("#"+arg+"-y").text('');
			$("#"+arg+"-s").text('');
			yczt[arg] = "无";
		}
		else if(opt == "yichang-chengdu-wu"){
			$("#"+arg+"-y").text('');
			yccd[arg] = "无";
		}
		else if(opt == "xushi-shi-1"){
			obj.attr('stroke-width','5');
			obj.attr('stroke-dasharray','');	
			xushi[arg] = "轻实";		
		}
		else if(opt == "xushi-shi-2"){
			obj.attr('stroke-width','6');
			obj.attr('stroke-dasharray','');	
			xushi[arg] = "中实";					
		}
		else if(opt == "xushi-shi-3"){
			obj.attr('stroke-width','7');
			obj.attr('stroke-dasharray','');	
			xushi[arg] = "重实";					
		}
		else if(opt == "xushi-shi-4"){
			obj.attr('stroke-width','8');
			obj.attr('stroke-dasharray','');		
			xushi[arg] = "极实";				
		}
		else if(opt == "xushi-chang"){
			obj.attr('stroke-width','4');
			obj.attr('stroke-dasharray','');	
			xushi[arg] = "正常";					
		}
		else if(opt == "xushi-xu-1"){
			obj.attr('stroke-width','4');
			obj.attr('stroke-dasharray','5,5');		
			xushi[arg] = "轻虚";				
		}
		else if(opt == "xushi-xu-2"){
			obj.attr('stroke-width','3');
			obj.attr('stroke-dasharray','5,5');		
			xushi[arg] = "中虚";						
		}
		else if(opt == "xushi-xu-3"){
			obj.attr('stroke-width','2');
			obj.attr('stroke-dasharray','5,5');			
			xushi[arg] = "重虚";					
		}
		else if(opt == "xushi-xu-4"){
			obj.attr('stroke-width','1');
			obj.attr('stroke-dasharray','5,5');		
			xushi[arg] = "极虚";						
		}
		
	}

	function show(){

		var content = " ";
		content += "<h2>左手</h2>";
		content += "<div>";
		content += "<h3>寸脉 </h3>";
		content += "<p> <span class='pos'>浮</span>";
		content += "<label>温度：</label> <span>" + wendu['zcf'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['zcf'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['zcf'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['zcf'] + "</span>";
		content += "</p>";
		content += "<p> <span class='pos'>中</span>";
		content += "<label>温度：</label> <span>" + wendu['zcz'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['zcz'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['zcz'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['zcz'] + "</span>";
		content += "</p>";
		content += "<p> <span class='pos'>沉</span>";
		content += "<label>温度：</label> <span>" + wendu['zcc'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['zcc'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['zcc'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['zcc'] + "</span>";
		content += "</p>";
		content += "<h3>关脉</h3>";
		content += "<p> <span class='pos'>浮</span>";
		content += "<label>温度：</label> <span>" + wendu['zgf'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['zgf'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['zgf'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['zgf'] + "</span>";
		content += "</p>";
		content += "<p> <span class='pos'>中</span>";
		content += "<label>温度：</label> <span>" + wendu['zgz'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['zgz'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['zgz'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['zgz'] + "</span>";
		content += "</p>";
		content += "<p> <span class='pos'>沉</span>";
		content += "<label>温度：</label> <span>" + wendu['zgc'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['zgc'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['zgc'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['zgc'] + "</span>";
		content += "</p>";
		content += "<h3>尺脉</h3>";
		content += "<p> <span class='pos'>浮</span>";
		content += "<label>温度：</label> <span>" + wendu['zchf'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['zchf'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['zchf'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['zchf'] + "</span>";
		content += "</p>";
		content += "<p> <span class='pos'>中</span>";
		content += "<label>温度：</label> <span>" + wendu['zchz'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['zchz'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['zchz'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['zchz'] + "</span>";
		content += "</p>";
		content += "<p> <span class='pos'>沉</span>";
		content += "<label>温度：</label> <span>" + wendu['zchc'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['zchc'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['zchc'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['zchc'] + "</span>";
		content += "</p></div>";


		content += "<h2>右手</h2>";
		content += "<div>";
		content += "<h3>寸脉</h3>";
		content += "<p> <span class='pos'>浮</span>";
		content += "<label>温度：</label> <span>" + wendu['ycf'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['ycf'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['ycf'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['ycf'] + "</span>";
		content += "</p>";
		content += "<p> <span class='pos'>中</span>";
		content += "<label>温度：</label> <span>" + wendu['ycz'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['ycz'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['ycz'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['ycz'] + "</span>";
		content += "</p>";
		content += "<p> <span class='pos'>沉</span>";
		content += "<label>温度：</label> <span>" + wendu['ycc'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['ycc'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['ycc'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['ycc'] + "</span>";
		content += "</p>";
		content += "<h3>关脉</h3>";
		content += "<p> <span class='pos'>浮</span>";
		content += "<label>温度：</label> <span>" + wendu['ygf'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['ygf'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['ygf'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['ygf'] + "</span>";
		content += "</p>";
		content += "<p> <span class='pos'>中</span>";
		content += "<label>温度：</label> <span>" + wendu['ygz'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['ygz'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['ygz'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['ygz'] + "</span>";
		content += "</p>";
		content += "<p> <span class='pos'>沉</span>";
		content += "<label>温度：</label> <span>" + wendu['ygc'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['ygc'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['ygc'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['ygc'] + "</span>";
		content += "</p>";
		content += "<h3>尺脉</h3>";
		content += "<p> <span class='pos'>浮</span>";
		content += "<label>温度：</label> <span>" + wendu['ychf'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['ychf'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['ychf'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['ychf'] + "</span>";
		content += "</p>";
		content += "<p> <span class='pos'>中</span>";
		content += "<label>温度：</label> <span>" + wendu['ychz'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['ychz'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['ychz'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['ychz'] + "</span>";
		content += "</p>";
		content += "<p> <span class='pos'>沉</span>";
		content += "<label>温度：</label> <span>" + wendu['ychc'] + "</span>";
		content += "<label>异常状态：</label> <span>" + yczt['ychc'] + "</span>";
		content += "<label>异常程度：</label> <span>" + yccd['ychc'] + "</span>";
		content += "<label>虚实程度：</label> <span>" + xushi['ychc'] + "</span>";
		content += "</p>";
		content += "</div>";


		for(i=0;i<attr.length;i++){
			$("#"+attr[i]).css('display','none');
		}
		$("#maizhen").css('display','none');
		$("#show").css('display','block');
		$("#list").show(500);
		$("#show").html(content);

		var data = '{';
		data += '"zuo":{"cun":{"fu":{';
			data += '"wendu":"'+wendu['zcf']+'",';
			data += '"yczt":"'+yczt['zcf']+'",';
			data += '"yccd":"'+yccd['zcf']+'",';
			data += '"xushi":"'+xushi['zcf']+'"';
		data += '},"zhong":{';
			data += '"wendu":"'+wendu['zcz']+'",';
			data += '"yczt":"'+yczt['zcz']+'",';
			data += '"yccd":"'+yccd['zcz']+'",';
			data += '"xushi":"'+xushi['zcz']+'"';
		data += '},"chen":{';
			data += '"wendu":"'+wendu['zcc']+'",';
			data += '"yczt":"'+yczt['zcc']+'",';
			data += '"yccd":"'+yccd['zcc']+'",';
			data += '"xushi":"'+xushi['zcc']+'"';
		data += '}},"guan":{"fu":{';
			data += '"wendu":"'+wendu['zgf']+'",';
			data += '"yczt":"'+yczt['zgf']+'",';
			data += '"yccd":"'+yccd['zgf']+'",';
			data += '"xushi":"'+xushi['zgf']+'"';
		data += '},"zhong":{';
			data += '"wendu":"'+wendu['zgz']+'",';
			data += '"yczt":"'+yczt['zgz']+'",';
			data += '"yccd":"'+yccd['zgz']+'",';
			data += '"xushi":"'+xushi['zgz']+'"';
		data += '},"chen":{';
			data += '"wendu":"'+wendu['zgc']+'",';
			data += '"yczt":"'+yczt['zgc']+'",';
			data += '"yccd":"'+yccd['zgc']+'",';
			data += '"xushi":"'+xushi['zgc']+'"';
		data += '}},"chi":{"fu":{';
			data += '"wendu":"'+wendu['zchf']+'",';
			data += '"yczt":"'+yczt['zchf']+'",';
			data += '"yccd":"'+yccd['zchf']+'",';
			data += '"xushi":"'+xushi['zchf']+'"';
		data += '},"zhong":{';
			data += '"wendu":"'+wendu['zchz']+'",';
			data += '"yczt":"'+yczt['zchz']+'",';
			data += '"yccd":"'+yccd['zchz']+'",';
			data += '"xushi":"'+xushi['zchz']+'"';
		data += '},"chen":{';
			data += '"wendu":"'+wendu['zchc']+'",';
			data += '"yczt":"'+yczt['zchc']+'",';
			data += '"yccd":"'+yccd['zchc']+'",';
			data += '"xushi":"'+xushi['zchc']+'"';
		data += '}}},'


		data += '"you":{"cun":{"fu":{';
			data += '"wendu":"'+wendu['ycf']+'",';
			data += '"yczt":"'+yczt['ycf']+'",';
			data += '"yccd":"'+yccd['ycf']+'",';
			data += '"xushi":"'+xushi['ycf']+'"';
		data += '},"zhong":{';
			data += '"wendu":"'+wendu['ycz']+'",';
			data += '"yczt":"'+yczt['ycz']+'",';
			data += '"yccd":"'+yccd['ycz']+'",';
			data += '"xushi":"'+xushi['ycz']+'"';
		data += '},"chen":{';
			data += '"wendu":"'+wendu['ycc']+'",';
			data += '"yczt":"'+yczt['ycc']+'",';
			data += '"yccd":"'+yccd['ycc']+'",';
			data += '"xushi":"'+xushi['ycc']+'"';
		data += '}},"guan":{"fu":{';
			data += '"wendu":"'+wendu['ygf']+'",';
			data += '"yczt":"'+yczt['ygf']+'",';
			data += '"yccd":"'+yccd['ygf']+'",';
			data += '"xushi":"'+xushi['ygf']+'"';
		data += '},"zhong":{';
			data += '"wendu":"'+wendu['ygz']+'",';
			data += '"yczt":"'+yczt['ygz']+'",';
			data += '"yccd":"'+yccd['ygz']+'",';
			data += '"xushi":"'+xushi['ygz']+'"';
		data += '},"chen":{';
			data += '"wendu":"'+wendu['ygc']+'",';
			data += '"yczt":"'+yczt['ygc']+'",';
			data += '"yccd":"'+yccd['ygc']+'",';
			data += '"xushi":"'+xushi['ygc']+'"';
		data += '}},"chi":{"fu":{';
			data += '"wendu":"'+wendu['ychf']+'",';
			data += '"yczt":"'+yczt['ychf']+'",';
			data += '"yccd":"'+yccd['ychf']+'",';
			data += '"xushi":"'+xushi['ychf']+'"';
		data += '},"zhong":{';
			data += '"wendu":"'+wendu['ychz']+'",';
			data += '"yczt":"'+yczt['ychz']+'",';
			data += '"yccd":"'+yccd['ychz']+'",';
			data += '"xushi":"'+xushi['ychz']+'"';
		data += '},"chen":{';
			data += '"wendu":"'+wendu['ychc']+'",';
			data += '"yczt":"'+yczt['ychc']+'",';
			data += '"yccd":"'+yccd['ychc']+'",';
			data += '"xushi":"'+xushi['ychc']+'"';
		data += '}}}';
		data += '}';
		
		$.post("../add.php",  {content:data}, function(res){
       		if(res == 1){
       			$("#success").show(500);
       			setTimeout(function(){$("#success").hide(500);},5000);
       		}else{
       			$("#false").show(500);
       			setTimeout(function(){$("#false").hide(500);},5000);
       		}
     	});
	}