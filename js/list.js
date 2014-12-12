function show(id){
	var id = id;
	$("#maizhen").css('display','block');
	$.post("./getinfo.php",  {id:id}, function(res){
		var obj = eval('(' + res + ')');
		var zuo = obj.data.zuo;
		var you = obj.data.you;

              if(zuo.cun.fu.wendu == '重寒'){
                     $("#zcf").attr('stroke','#244FA1');
              }else if(zuo.cun.fu.wendu == '中寒'){
                     $("#zcf").attr('stroke','#0F92AD');
              }else if(zuo.cun.fu.wendu == '微寒'){
                     $("#zcf").attr('stroke','#00A0E9');
              }else if(zuo.cun.fu.wendu == '温'){
                     $("#zcf").attr('stroke','green');
              }else if(zuo.cun.fu.wendu == '重热'){
                     $("#zcf").attr('stroke','#674498');
              }else if(zuo.cun.fu.wendu == '中热'){
                     $("#zcf").attr('stroke','#D0121B');
              }else if(zuo.cun.fu.wendu == '微热'){
                     $("#zcf").attr('stroke','#E4007F');
              }else{
                     $("#zcf").attr('stroke','gray');
              }
              if(zuo.cun.zhong.wendu == '重寒'){
                     $("#zcz").attr('stroke','#244FA1');
              }else if(zuo.cun.zhong.wendu == '中寒'){
                     $("#zcz").attr('stroke','#0F92AD');
              }else if(zuo.cun.zhong.wendu == '微寒'){
                     $("#zcz").attr('stroke','#00A0E9');
              }else if(zuo.cun.zhong.wendu == '温'){
                     $("#zcz").attr('stroke','green');
              }else if(zuo.cun.zhong.wendu == '重热'){
                     $("#zcz").attr('stroke','#674498');
              }else if(zuo.cun.zhong.wendu == '中热'){
                     $("#zcz").attr('stroke','#D0121B');
              }else if(zuo.cun.zhong.wendu == '微热'){
                     $("#zcz").attr('stroke','#E4007F');
              }else{
                     $("#zcz").attr('stroke','gray');
              }
              if(zuo.cun.chen.wendu == '重寒'){
                     $("#zcc").attr('stroke','#244FA1');
              }else if(zuo.cun.chen.wendu == '中寒'){
                     $("#zcc").attr('stroke','#0F92AD');
              }else if(zuo.cun.chen.wendu == '微寒'){
                     $("#zcc").attr('stroke','#00A0E9');
              }else if(zuo.cun.chen.wendu == '温'){
                     $("#zcc").attr('stroke','green');
              }else if(zuo.cun.chen.wendu == '重热'){
                     $("#zcc").attr('stroke','#674498');
              }else if(zuo.cun.chen.wendu == '中热'){
                     $("#zcc").attr('stroke','#D0121B');
              }else if(zuo.cun.chen.wendu == '微热'){
                     $("#zcc").attr('stroke','#E4007F');
              }else{
                     $("#zcc").attr('stroke','gray');
              }

              if(zuo.guan.fu.wendu == '重寒'){
                     $("#zgf").attr('stroke','#244FA1');
              }else if(zuo.guan.fu.wendu == '中寒'){
                     $("#zgf").attr('stroke','#0F92AD');
              }else if(zuo.guan.fu.wendu == '微寒'){
                     $("#zgf").attr('stroke','#00A0E9');
              }else if(zuo.guan.fu.wendu == '温'){
                     $("#zgf").attr('stroke','green');
              }else if(zuo.guan.fu.wendu == '重热'){
                     $("#zgf").attr('stroke','#674498');
              }else if(zuo.guan.fu.wendu == '中热'){
                     $("#zgf").attr('stroke','#D0121B');
              }else if(zuo.guan.fu.wendu == '微热'){
                     $("#zgf").attr('stroke','#E4007F');
              }else{
                     $("#zgf").attr('stroke','gray');
              }
              if(zuo.guan.zhong.wendu == '重寒'){
                     $("#zgz").attr('stroke','#244FA1');
              }else if(zuo.guan.zhong.wendu == '中寒'){
                     $("#zgz").attr('stroke','#0F92AD');
              }else if(zuo.guan.zhong.wendu == '微寒'){
                     $("#zgz").attr('stroke','#00A0E9');
              }else if(zuo.guan.zhong.wendu == '温'){
                     $("#zgz").attr('stroke','green');
              }else if(zuo.guan.zhong.wendu == '重热'){
                     $("#zgz").attr('stroke','#674498');
              }else if(zuo.guan.zhong.wendu == '中热'){
                     $("#zgz").attr('stroke','#D0121B');
              }else if(zuo.guan.zhong.wendu == '微热'){
                     $("#zgz").attr('stroke','#E4007F');
              }else{
                     $("#zgz").attr('stroke','gray');
              }
              if(zuo.guan.chen.wendu == '重寒'){
                     $("#zgc").attr('stroke','#244FA1');
              }else if(zuo.guan.chen.wendu == '中寒'){
                     $("#zgc").attr('stroke','#0F92AD');
              }else if(zuo.guan.chen.wendu == '微寒'){
                     $("#zgc").attr('stroke','#00A0E9');
              }else if(zuo.guan.chen.wendu == '温'){
                     $("#zgc").attr('stroke','green');
              }else if(zuo.guan.chen.wendu == '重热'){
                     $("#zgc").attr('stroke','#674498');
              }else if(zuo.guan.chen.wendu == '中热'){
                     $("#zgc").attr('stroke','#D0121B');
              }else if(zuo.guan.chen.wendu == '微热'){
                     $("#zgc").attr('stroke','#E4007F');
              }else{
                     $("#zgc").attr('stroke','gray');
              }

              if(zuo.chi.fu.wendu == '重寒'){
                     $("#zchf").attr('stroke','#244FA1');
              }else if(zuo.chi.fu.wendu == '中寒'){
                     $("#zchf").attr('stroke','#0F92AD');
              }else if(zuo.chi.fu.wendu == '微寒'){
                     $("#zchf").attr('stroke','#00A0E9');
              }else if(zuo.chi.fu.wendu == '温'){
                     $("#zchf").attr('stroke','green');
              }else if(zuo.chi.fu.wendu == '重热'){
                     $("#zchf").attr('stroke','#674498');
              }else if(zuo.chi.fu.wendu == '中热'){
                     $("#zchf").attr('stroke','#D0121B');
              }else if(zuo.chi.fu.wendu == '微热'){
                     $("#zchf").attr('stroke','#E4007F');
              }else{
                     $("#zchf").attr('stroke','gray');
              }
              if(zuo.chi.zhong.wendu == '重寒'){
                     $("#zchz").attr('stroke','#244FA1');
              }else if(zuo.chi.zhong.wendu == '中寒'){
                     $("#zchz").attr('stroke','#0F92AD');
              }else if(zuo.chi.zhong.wendu == '微寒'){
                     $("#zchz").attr('stroke','#00A0E9');
              }else if(zuo.chi.zhong.wendu == '温'){
                     $("#zchz").attr('stroke','green');
              }else if(zuo.chi.zhong.wendu == '重热'){
                     $("#zchz").attr('stroke','#674498');
              }else if(zuo.chi.zhong.wendu == '中热'){
                     $("#zchz").attr('stroke','#D0121B');
              }else if(zuo.chi.zhong.wendu == '微热'){
                     $("#zchz").attr('stroke','#E4007F');
              }else{
                     $("#zchz").attr('stroke','gray');
              }
              if(zuo.chi.chen.wendu == '重寒'){
                     $("#zchc").attr('stroke','#244FA1');
              }else if(zuo.chi.chen.wendu == '中寒'){
                     $("#zchc").attr('stroke','#0F92AD');
              }else if(zuo.chi.chen.wendu == '微寒'){
                     $("#zchc").attr('stroke','#00A0E9');
              }else if(zuo.chi.chen.wendu == '温'){
                     $("#zchc").attr('stroke','green');
              }else if(zuo.chi.chen.wendu == '重热'){
                     $("#zchc").attr('stroke','#674498');
              }else if(zuo.chi.chen.wendu == '中热'){
                     $("#zchc").attr('stroke','#D0121B');
              }else if(zuo.chi.chen.wendu == '微热'){
                     $("#zchc").attr('stroke','#E4007F');
              }else{
                     $("#zchc").attr('stroke','gray');
              }
              if(zuo.cun.fu.yczt == '郁'){
                     $("#zcf-s").text('郁');
              }else if(zuo.cun.fu.yczt == '瘀'){
                     $("#zcf-s").text('瘀');
              }else if(zuo.cun.fu.yczt == '水'){
                     $("#zcf-s").text('水');
              }else if(zuo.cun.fu.yczt == '湿'){
                     $("#zcf-s").text('湿');
              }else if(zuo.cun.fu.yczt == '痰'){
                     $("#zcf-s").text('痰');
              }else{
                     $("#zcf-s").text('');
              }
              if(zuo.cun.zhong.yczt == '郁'){
                     $("#zcz-s").text('郁');
              }else if(zuo.cun.zhong.yczt == '瘀'){
                     $("#zcz-s").text('瘀');
              }else if(zuo.cun.zhong.yczt == '水'){
                     $("#zcz-s").text('水');
              }else if(zuo.cun.zhong.yczt == '湿'){
                     $("#zcz-s").text('湿');
              }else if(zuo.cun.zhong.yczt == '痰'){
                     $("#zcz-s").text('痰');
              }else{
                     $("#zcz-s").text('');
              }
              if(zuo.cun.chen.yczt == '郁'){
                     $("#zcc-s").text('郁');
              }else if(zuo.cun.chen.yczt == '瘀'){
                     $("#zcc-s").text('瘀');
              }else if(zuo.cun.chen.yczt == '水'){
                     $("#zcc-s").text('水');
              }else if(zuo.cun.chen.yczt == '湿'){
                     $("#zcc-s").text('湿');
              }else if(zuo.cun.chen.yczt == '痰'){
                     $("#zcc-s").text('痰');
              }else{
                     $("#zcc-s").text('');
              }

              if(zuo.guan.fu.yczt == '郁'){
                     $("#zgf-s").text('郁');
              }else if(zuo.guan.fu.yczt == '瘀'){
                     $("#zgf-s").text('瘀');
              }else if(zuo.guan.fu.yczt == '水'){
                     $("#zgf-s").text('水');
              }else if(zuo.guan.fu.yczt == '湿'){
                     $("#zgf-s").text('湿');
              }else if(zuo.guan.fu.yczt == '痰'){
                     $("#zgf-s").text('痰');
              }else{
                     $("#zgf-s").text('');
              }
              if(zuo.guan.zhong.yczt == '郁'){
                     $("#zgz-s").text('郁');
              }else if(zuo.guan.zhong.yczt == '瘀'){
                     $("#zgz-s").text('瘀');
              }else if(zuo.guan.zhong.yczt == '水'){
                     $("#zgz-s").text('水');
              }else if(zuo.guan.zhong.yczt == '湿'){
                     $("#zgz-s").text('湿');
              }else if(zuo.guan.zhong.yczt == '痰'){
                     $("#zgz-s").text('痰');
              }else{
                     $("#zgz-s").text('');
              }
              if(zuo.guan.chen.yczt == '郁'){
                     $("#zgc-s").text('郁');
              }else if(zuo.guan.chen.yczt == '瘀'){
                     $("#zgc-s").text('瘀');
              }else if(zuo.guan.chen.yczt == '水'){
                     $("#zgc-s").text('水');
              }else if(zuo.guan.chen.yczt == '湿'){
                     $("#zgc-s").text('湿');
              }else if(zuo.guan.chen.yczt == '痰'){
                     $("#zgc-s").text('痰');
              }else{
                     $("#zgc-s").text('');
              }
              
              if(zuo.chi.fu.yczt == '郁'){
                     $("#zchf-s").text('郁');
              }else if(zuo.chi.fu.yczt == '瘀'){
                     $("#zchf-s").text('瘀');
              }else if(zuo.chi.fu.yczt == '水'){
                     $("#zchf-s").text('水');
              }else if(zuo.chi.fu.yczt == '湿'){
                     $("#zchf-s").text('湿');
              }else if(zuo.chi.fu.yczt == '痰'){
                     $("#zchf-s").text('痰');
              }else{
                     $("#zchf-s").text('');
              }
              if(zuo.chi.zhong.yczt == '郁'){
                     $("#zchz-s").text('郁');
              }else if(zuo.chi.zhong.yczt == '瘀'){
                     $("#zchz-s").text('瘀');
              }else if(zuo.chi.zhong.yczt == '水'){
                     $("#zchz-s").text('水');
              }else if(zuo.chi.zhong.yczt == '湿'){
                     $("#zchz-s").text('湿');
              }else if(zuo.chi.zhong.yczt == '痰'){
                     $("#zchz-s").text('痰');
              }else{
                     $("#zchz-s").text('');
              }
              if(zuo.chi.chen.yczt == '郁'){
                     $("#zchc-s").text('郁');
              }else if(zuo.chi.chen.yczt == '瘀'){
                     $("#zchc-s").text('瘀');
              }else if(zuo.chi.chen.yczt == '水'){
                     $("#zchc-s").text('水');
              }else if(zuo.chi.chen.yczt == '湿'){
                     $("#zchc-s").text('湿');
              }else if(zuo.chi.chen.yczt == '痰'){
                     $("#zchc-s").text('痰');
              }else{
                     $("#zchc-s").text('');
              }

              if(zuo.cun.fu.yccd == '(轻)'){
                     $("#zcf-y").text('(轻)');
              }else if(zuo.cun.fu.yccd == '(中)'){
                     $("#zcf-y").text('(中)');
              }else if(zuo.cun.fu.yccd == '(重)'){
                     $("#zcf-y").text('(重)');
              }else{
                     $("#zcf-y").text('');
              }
              if(zuo.cun.zhong.yccd == '(轻)'){
                     $("#zcz-y").text('(轻)');
              }else if(zuo.cun.zhong.yccd == '(中)'){
                     $("#zcz-y").text('(中)');
              }else if(zuo.cun.zhong.yccd == '(重)'){
                     $("#zcz-y").text('(重)');
              }else{
                     $("#zcz-y").text('');
              }
              if(zuo.cun.chen.yccd == '(轻)'){
                     $("#zcc-y").text('(轻)');
              }else if(zuo.cun.chen.yccd == '(中)'){
                     $("#zcc-y").text('(中)');
              }else if(zuo.cun.chen.yccd == '(重)'){
                     $("#zcc-y").text('(重)');
              }else{
                     $("#zcc-y").text('');
              }

              if(zuo.guan.fu.yccd == '(轻)'){
                     $("#zgf-y").text('(轻)');
              }else if(zuo.guan.fu.yccd == '(中)'){
                     $("#zgf-y").text('(中)');
              }else if(zuo.guan.fu.yccd == '(重)'){
                     $("#zgf-y").text('(重)');
              }else{
                     $("#zgf-y").text('');
              }
              if(zuo.guan.zhong.yccd == '(轻)'){
                     $("#zgz-y").text('(轻)');
              }else if(zuo.guan.zhong.yccd == '(中)'){
                     $("#zgz-y").text('(中)');
              }else if(zuo.guan.zhong.yccd == '(重)'){
                     $("#zgz-y").text('(重)');
              }else{
                     $("#zgz-y").text('');
              }
              if(zuo.guan.chen.yccd == '(轻)'){
                     $("#zgc-y").text('(轻)');
              }else if(zuo.guan.chen.yccd == '(中)'){
                     $("#zgc-y").text('(中)');
              }else if(zuo.guan.chen.yccd == '(重)'){
                     $("#zgc-y").text('(重)');
              }else{
                     $("#zgc-y").text('');
              }
              
              if(zuo.chi.fu.yccd == '(轻)'){
                     $("#zchf-y").text('(轻)');
              }else if(zuo.chi.fu.yccd == '(中)'){
                     $("#zchf-y").text('(中)');
              }else if(zuo.chi.fu.yccd == '(重)'){
                     $("#zchf-y").text('(重)');
              }else{
                     $("#zchf-y").text('');
              }
              if(zuo.chi.zhong.yccd == '(轻)'){
                     $("#zchz-y").text('(轻)');
              }else if(zuo.chi.zhong.yccd == '(中)'){
                     $("#zchz-y").text('(中)');
              }else if(zuo.chi.zhong.yccd == '(重)'){
                     $("#zchz-y").text('(重)');
              }else{
                     $("#zchz-y").text('');
              }
              if(zuo.chi.chen.yccd == '(轻)'){
                     $("#zchc-y").text('(轻)');
              }else if(zuo.chi.chen.yccd == '(中)'){
                     $("#zchc-y").text('(中)');
              }else if(zuo.chi.chen.yccd == '(重)'){
                     $("#zchc-y").text('(重)');
              }else{
                     $("#zchc-y").text('');
              }
             if(zuo.cun.fu.xushi == '轻实'){
                     $("#zcf").attr('stroke-width','5');
              }else if(zuo.cun.fu.xushi == '中实'){
                     $("#zcf").attr('stroke-width','6');
              }else if(zuo.cun.fu.xushi == '重实'){
                     $("#zcf").attr('stroke-width','7');
              }else if(zuo.cun.fu.xushi == '极实'){
                     $("#zcf").attr('stroke-width','8');
              }else if(zuo.cun.fu.xushi == '正常'){
                     $("#zcf").attr('stroke-width','4');
              }else if(zuo.cun.fu.xushi == '轻虚'){
                     $("#zcf").attr('stroke-width','4');
                     $("#zcf").attr('stroke-dasharray','5,5'); 
              }else if(zuo.cun.fu.xushi == '中虚'){
                     $("#zcf").attr('stroke-width','3');
                     $("#zcf").attr('stroke-dasharray','5,5'); 
              }else if(zuo.cun.fu.xushi == '重虚'){
                     $("#zcf").attr('stroke-width','2');
                     $("#zcf").attr('stroke-dasharray','5,5'); 
              }else if(zuo.cun.fu.xushi == '极虚'){
                     $("#zcf").attr('stroke-width','1');
                     $("#zcf").attr('stroke-dasharray','5,5'); 
              }

              if(zuo.cun.zhong.xushi == '轻实'){
                     $("#zcz").attr('stroke-width','5');
              }else if(zuo.cun.zhong.xushi == '中实'){
                     $("#zcz").attr('stroke-width','6');
              }else if(zuo.cun.zhong.xushi == '重实'){
                     $("#zcz").attr('stroke-width','7');
              }else if(zuo.cun.zhong.xushi == '极实'){
                     $("#zcz").attr('stroke-width','8');
              }else if(zuo.cun.zhong.xushi == '正常'){
                     $("#zcz").attr('stroke-width','4');
              }else if(zuo.cun.zhong.xushi == '轻虚'){
                     $("#zcz").attr('stroke-width','4');
                     $("#zcz").attr('stroke-dasharray','5,5'); 
              }else if(zuo.cun.zhong.xushi == '中虚'){
                     $("#zcz").attr('stroke-width','3');
                     $("#zcz").attr('stroke-dasharray','5,5'); 
              }else if(zuo.cun.zhong.xushi == '重虚'){
                     $("#zcz").attr('stroke-width','2');
                     $("#zcz").attr('stroke-dasharray','5,5'); 
              }else if(zuo.cun.zhong.xushi == '极虚'){
                     $("#zcz").attr('stroke-width','1');
                     $("#zcz").attr('stroke-dasharray','5,5'); 
              }


              if(zuo.cun.chen.xushi == '轻实'){
                     $("#zcc").attr('stroke-width','5');
              }else if(zuo.cun.chen.xushi == '中实'){
                     $("#zcc").attr('stroke-width','6');
              }else if(zuo.cun.chen.xushi == '重实'){
                     $("#zcc").attr('stroke-width','7');
              }else if(zuo.cun.chen.xushi == '极实'){
                     $("#zcc").attr('stroke-width','8');
              }else if(zuo.cun.chen.xushi == '正常'){
                     $("#zcc").attr('stroke-width','4');
              }else if(zuo.cun.chen.xushi == '轻虚'){
                     $("#zcc").attr('stroke-width','4');
                     $("#zcc").attr('stroke-dasharray','5,5'); 
              }else if(zuo.cun.chen.xushi == '中虚'){
                     $("#zcc").attr('stroke-width','3');
                     $("#zcc").attr('stroke-dasharray','5,5'); 
              }else if(zuo.cun.chen.xushi == '重虚'){
                     $("#zcc").attr('stroke-width','2');
                     $("#zcc").attr('stroke-dasharray','5,5'); 
              }else if(zuo.cun.chen.xushi == '极虚'){
                     $("#zcc").attr('stroke-width','1');
                     $("#zcc").attr('stroke-dasharray','5,5'); 
              }

              if(zuo.guan.fu.xushi == '轻实'){
                     $("#zgf").attr('stroke-width','5');
              }else if(zuo.guan.fu.xushi == '中实'){
                     $("#zgf").attr('stroke-width','6');
              }else if(zuo.guan.fu.xushi == '重实'){
                     $("#zgf").attr('stroke-width','7');
              }else if(zuo.guan.fu.xushi == '极实'){
                     $("#zgf").attr('stroke-width','8');
              }else if(zuo.guan.fu.xushi == '正常'){
                     $("#zgf").attr('stroke-width','4');
              }else if(zuo.guan.fu.xushi == '轻虚'){
                     $("#zgf").attr('stroke-width','4');
                     $("#zgf").attr('stroke-dasharray','5,5'); 
              }else if(zuo.guan.fu.xushi == '中虚'){
                     $("#zgf").attr('stroke-width','3');
                     $("#zgf").attr('stroke-dasharray','5,5'); 
              }else if(zuo.guan.fu.xushi == '重虚'){
                     $("#zgf").attr('stroke-width','2');
                     $("#zgf").attr('stroke-dasharray','5,5'); 
              }else if(zuo.guan.fu.xushi == '极虚'){
                     $("#zgf").attr('stroke-width','1');
                     $("#zgf").attr('stroke-dasharray','5,5'); 
              }


              if(zuo.guan.zhong.xushi == '轻实'){
                     $("#zgz").attr('stroke-width','5');
              }else if(zuo.guan.zhong.xushi == '中实'){
                     $("#zgz").attr('stroke-width','6');
              }else if(zuo.guan.zhong.xushi == '重实'){
                     $("#zgz").attr('stroke-width','7');
              }else if(zuo.guan.zhong.xushi == '极实'){
                     $("#zgz").attr('stroke-width','8');
              }else if(zuo.guan.zhong.xushi == '正常'){
                     $("#zgz").attr('stroke-width','4');
              }else if(zuo.guan.zhong.xushi == '轻虚'){
                     $("#zgz").attr('stroke-width','4');
                     $("#zgz").attr('stroke-dasharray','5,5'); 
              }else if(zuo.guan.zhong.xushi == '中虚'){
                     $("#zgz").attr('stroke-width','3');
                     $("#zgz").attr('stroke-dasharray','5,5'); 
              }else if(zuo.guan.zhong.xushi == '重虚'){
                     $("#zgz").attr('stroke-width','2');
                     $("#zgz").attr('stroke-dasharray','5,5'); 
              }else if(zuo.guan.zhong.xushi == '极虚'){
                     $("#zgz").attr('stroke-width','1');
                     $("#zgz").attr('stroke-dasharray','5,5'); 
              }


              if(zuo.guan.chen.xushi == '轻实'){
                     $("#zgc").attr('stroke-width','5');
              }else if(zuo.guan.chen.xushi == '中实'){
                     $("#zgc").attr('stroke-width','6');
              }else if(zuo.guan.chen.xushi == '重实'){
                     $("#zgc").attr('stroke-width','7');
              }else if(zuo.guan.chen.xushi == '极实'){
                     $("#zgc").attr('stroke-width','8');
              }else if(zuo.guan.chen.xushi == '正常'){
                     $("#zgc").attr('stroke-width','4');
              }else if(zuo.guan.chen.xushi == '轻虚'){
                     $("#zgc").attr('stroke-width','4');
                     $("#zgc").attr('stroke-dasharray','5,5'); 
              }else if(zuo.guan.chen.xushi == '中虚'){
                     $("#zgc").attr('stroke-width','3');
                     $("#zgc").attr('stroke-dasharray','5,5'); 
              }else if(zuo.guan.chen.xushi == '重虚'){
                     $("#zgc").attr('stroke-width','2');
                     $("#zgc").attr('stroke-dasharray','5,5'); 
              }else if(zuo.guan.chen.xushi == '极虚'){
                     $("#zgc").attr('stroke-width','1');
                     $("#zgc").attr('stroke-dasharray','5,5'); 
              }


              if(zuo.chi.fu.xushi == '轻实'){
                     $("#zchf").attr('stroke-width','5');
              }else if(zuo.chi.fu.xushi == '中实'){
                     $("#zchf").attr('stroke-width','6');
              }else if(zuo.chi.fu.xushi == '重实'){
                     $("#zchf").attr('stroke-width','7');
              }else if(zuo.chi.fu.xushi == '极实'){
                     $("#zchf").attr('stroke-width','8');
              }else if(zuo.chi.fu.xushi == '正常'){
                     $("#zchf").attr('stroke-width','4');
              }else if(zuo.chi.fu.xushi == '轻虚'){
                     $("#zchf").attr('stroke-width','4');
                     $("#zchf").attr('stroke-dasharray','5,5'); 
              }else if(zuo.chi.fu.xushi == '中虚'){
                     $("#zchf").attr('stroke-width','3');
                     $("#zchf").attr('stroke-dasharray','5,5'); 
              }else if(zuo.chi.fu.xushi == '重虚'){
                     $("#zchf").attr('stroke-width','2');
                     $("#zchf").attr('stroke-dasharray','5,5'); 
              }else if(zuo.chi.fu.xushi == '极虚'){
                     $("#zchf").attr('stroke-width','1');
                     $("#zchf").attr('stroke-dasharray','5,5'); 
              }

              if(zuo.chi.zhong.xushi == '轻实'){
                     $("#zchz").attr('stroke-width','5');
              }else if(zuo.chi.zhong.xushi == '中实'){
                     $("#zchz").attr('stroke-width','6');
              }else if(zuo.chi.zhong.xushi == '重实'){
                     $("#zchz").attr('stroke-width','7');
              }else if(zuo.chi.zhong.xushi == '极实'){
                     $("#zchz").attr('stroke-width','8');
              }else if(zuo.chi.zhong.xushi == '正常'){
                     $("#zchz").attr('stroke-width','4');
              }else if(zuo.chi.zhong.xushi == '轻虚'){
                     $("#zchz").attr('stroke-width','4');
                     $("#zchz").attr('stroke-dasharray','5,5'); 
              }else if(zuo.chi.zhong.xushi == '中虚'){
                     $("#zchz").attr('stroke-width','3');
                     $("#zchz").attr('stroke-dasharray','5,5'); 
              }else if(zuo.chi.zhong.xushi == '重虚'){
                     $("#zchz").attr('stroke-width','2');
                     $("#zchz").attr('stroke-dasharray','5,5'); 
              }else if(zuo.chi.zhong.xushi == '极虚'){
                     $("#zchz").attr('stroke-width','1');
                     $("#zchz").attr('stroke-dasharray','5,5'); 
              }
              

              if(zuo.chi.chen.xushi == '轻实'){
                     $("#zchc").attr('stroke-width','5');
              }else if(zuo.chi.chen.xushi == '中实'){
                     $("#zchc").attr('stroke-width','6');
              }else if(zuo.chi.chen.xushi == '重实'){
                     $("#zchc").attr('stroke-width','7');
              }else if(zuo.chi.chen.xushi == '极实'){
                     $("#zchc").attr('stroke-width','8');
              }else if(zuo.chi.chen.xushi == '正常'){
                     $("#zchc").attr('stroke-width','4');
              }else if(zuo.chi.chen.xushi == '轻虚'){
                     $("#zchc").attr('stroke-width','4');
                     $("#zchc").attr('stroke-dasharray','5,5'); 
              }else if(zuo.chi.chen.xushi == '中虚'){
                     $("#zchc").attr('stroke-width','3');
                     $("#zchc").attr('stroke-dasharray','5,5'); 
              }else if(zuo.chi.chen.xushi == '重虚'){
                     $("#zchc").attr('stroke-width','2');
                     $("#zchc").attr('stroke-dasharray','5,5'); 
              }else if(zuo.chi.chen.xushi == '极虚'){
                     $("#zchc").attr('stroke-width','1');
                     $("#zchc").attr('stroke-dasharray','5,5'); 
              }



              if(you.cun.fu.wendu == '重寒'){
                     $("#ycf").attr('stroke','#244FA1');
              }else if(you.cun.fu.wendu == '中寒'){
                     $("#ycf").attr('stroke','#0F92AD');
              }else if(you.cun.fu.wendu == '微寒'){
                     $("#ycf").attr('stroke','#00A0E9');
              }else if(you.cun.fu.wendu == '温'){
                     $("#ycf").attr('stroke','green');
              }else if(you.cun.fu.wendu == '重热'){
                     $("#ycf").attr('stroke','#674498');
              }else if(you.cun.fu.wendu == '中热'){
                     $("#ycf").attr('stroke','#D0121B');
              }else if(you.cun.fu.wendu == '微热'){
                     $("#ycf").attr('stroke','#E4007F');
              }else{
                     $("#ycf").attr('stroke','gray');
              }
              if(you.cun.zhong.wendu == '重寒'){
                     $("#ycz").attr('stroke','#244FA1');
              }else if(you.cun.zhong.wendu == '中寒'){
                     $("#ycz").attr('stroke','#0F92AD');
              }else if(you.cun.zhong.wendu == '微寒'){
                     $("#ycz").attr('stroke','#00A0E9');
              }else if(you.cun.zhong.wendu == '温'){
                     $("#ycz").attr('stroke','green');
              }else if(you.cun.zhong.wendu == '重热'){
                     $("#ycz").attr('stroke','#674498');
              }else if(you.cun.zhong.wendu == '中热'){
                     $("#ycz").attr('stroke','#D0121B');
              }else if(you.cun.zhong.wendu == '微热'){
                     $("#ycz").attr('stroke','#E4007F');
              }else{
                     $("#ycz").attr('stroke','gray');
              }
              if(you.cun.chen.wendu == '重寒'){
                     $("#ycc").attr('stroke','#244FA1');
              }else if(you.cun.chen.wendu == '中寒'){
                     $("#ycc").attr('stroke','#0F92AD');
              }else if(you.cun.chen.wendu == '微寒'){
                     $("#ycc").attr('stroke','#00A0E9');
              }else if(you.cun.chen.wendu == '温'){
                     $("#ycc").attr('stroke','green');
              }else if(you.cun.chen.wendu == '重热'){
                     $("#ycc").attr('stroke','#674498');
              }else if(you.cun.chen.wendu == '中热'){
                     $("#ycc").attr('stroke','#D0121B');
              }else if(you.cun.chen.wendu == '微热'){
                     $("#ycc").attr('stroke','#E4007F');
              }else{
                     $("#ycc").attr('stroke','gray');
              }

              if(you.guan.fu.wendu == '重寒'){
                     $("#ygf").attr('stroke','#244FA1');
              }else if(you.guan.fu.wendu == '中寒'){
                     $("#ygf").attr('stroke','#0F92AD');
              }else if(you.guan.fu.wendu == '微寒'){
                     $("#ygf").attr('stroke','#00A0E9');
              }else if(you.guan.fu.wendu == '温'){
                     $("#ygf").attr('stroke','green');
              }else if(you.guan.fu.wendu == '重热'){
                     $("#ygf").attr('stroke','#674498');
              }else if(you.guan.fu.wendu == '中热'){
                     $("#ygf").attr('stroke','#D0121B');
              }else if(you.guan.fu.wendu == '微热'){
                     $("#ygf").attr('stroke','#E4007F');
              }else{
                     $("#ygf").attr('stroke','gray');
              }
              if(you.guan.zhong.wendu == '重寒'){
                     $("#ygz").attr('stroke','#244FA1');
              }else if(you.guan.zhong.wendu == '中寒'){
                     $("#ygz").attr('stroke','#0F92AD');
              }else if(you.guan.zhong.wendu == '微寒'){
                     $("#ygz").attr('stroke','#00A0E9');
              }else if(you.guan.zhong.wendu == '温'){
                     $("#ygz").attr('stroke','green');
              }else if(you.guan.zhong.wendu == '重热'){
                     $("#ygz").attr('stroke','#674498');
              }else if(you.guan.zhong.wendu == '中热'){
                     $("#ygz").attr('stroke','#D0121B');
              }else if(you.guan.zhong.wendu == '微热'){
                     $("#ygz").attr('stroke','#E4007F');
              }else{
                     $("#ygz").attr('stroke','gray');
              }
              if(you.guan.chen.wendu == '重寒'){
                     $("#ygc").attr('stroke','#244FA1');
              }else if(you.guan.chen.wendu == '中寒'){
                     $("#ygc").attr('stroke','#0F92AD');
              }else if(you.guan.chen.wendu == '微寒'){
                     $("#ygc").attr('stroke','#00A0E9');
              }else if(you.guan.chen.wendu == '温'){
                     $("#ygc").attr('stroke','green');
              }else if(you.guan.chen.wendu == '重热'){
                     $("#ygc").attr('stroke','#674498');
              }else if(you.guan.chen.wendu == '中热'){
                     $("#ygc").attr('stroke','#D0121B');
              }else if(you.guan.chen.wendu == '微热'){
                     $("#ygc").attr('stroke','#E4007F');
              }else{
                     $("#ygc").attr('stroke','gray');
              }

              if(you.chi.fu.wendu == '重寒'){
                     $("#ychf").attr('stroke','#244FA1');
              }else if(you.chi.fu.wendu == '中寒'){
                     $("#ychf").attr('stroke','#0F92AD');
              }else if(you.chi.fu.wendu == '微寒'){
                     $("#ychf").attr('stroke','#00A0E9');
              }else if(you.chi.fu.wendu == '温'){
                     $("#ychf").attr('stroke','green');
              }else if(you.chi.fu.wendu == '重热'){
                     $("#ychf").attr('stroke','#674498');
              }else if(you.chi.fu.wendu == '中热'){
                     $("#ychf").attr('stroke','#D0121B');
              }else if(you.chi.fu.wendu == '微热'){
                     $("#ychf").attr('stroke','#E4007F');
              }else{
                     $("#ychf").attr('stroke','gray');
              }
              if(you.chi.zhong.wendu == '重寒'){
                     $("#ychz").attr('stroke','#244FA1');
              }else if(you.chi.zhong.wendu == '中寒'){
                     $("#ychz").attr('stroke','#0F92AD');
              }else if(you.chi.zhong.wendu == '微寒'){
                     $("#ychz").attr('stroke','#00A0E9');
              }else if(you.chi.zhong.wendu == '温'){
                     $("#ychz").attr('stroke','green');
              }else if(you.chi.zhong.wendu == '重热'){
                     $("#ychz").attr('stroke','#674498');
              }else if(you.chi.zhong.wendu == '中热'){
                     $("#ychz").attr('stroke','#D0121B');
              }else if(you.chi.zhong.wendu == '微热'){
                     $("#ychz").attr('stroke','#E4007F');
              }else{
                     $("#ychz").attr('stroke','gray');
              }
              if(you.chi.chen.wendu == '重寒'){
                     $("#ychc").attr('stroke','#244FA1');
              }else if(you.chi.chen.wendu == '中寒'){
                     $("#ychc").attr('stroke','#0F92AD');
              }else if(you.chi.chen.wendu == '微寒'){
                     $("#ychc").attr('stroke','#00A0E9');
              }else if(you.chi.chen.wendu == '温'){
                     $("#ychc").attr('stroke','green');
              }else if(you.chi.chen.wendu == '重热'){
                     $("#ychc").attr('stroke','#674498');
              }else if(you.chi.chen.wendu == '中热'){
                     $("#ychc").attr('stroke','#D0121B');
              }else if(you.chi.chen.wendu == '微热'){
                     $("#ychc").attr('stroke','#E4007F');
              }else{
                     $("#ychc").attr('stroke','gray');
              }
              if(you.cun.fu.yczt == '郁'){
                     $("#ycf-s").text('郁');
              }else if(you.cun.fu.yczt == '瘀'){
                     $("#ycf-s").text('瘀');
              }else if(you.cun.fu.yczt == '水'){
                     $("#ycf-s").text('水');
              }else if(you.cun.fu.yczt == '湿'){
                     $("#ycf-s").text('湿');
              }else if(you.cun.fu.yczt == '痰'){
                     $("#ycf-s").text('痰');
              }else{
                     $("#ycf-s").text('');
              }
              if(you.cun.zhong.yczt == '郁'){
                     $("#ycz-s").text('郁');
              }else if(you.cun.zhong.yczt == '瘀'){
                     $("#ycz-s").text('瘀');
              }else if(you.cun.zhong.yczt == '水'){
                     $("#ycz-s").text('水');
              }else if(you.cun.zhong.yczt == '湿'){
                     $("#ycz-s").text('湿');
              }else if(you.cun.zhong.yczt == '痰'){
                     $("#ycz-s").text('痰');
              }else{
                     $("#ycz-s").text('');
              }
              if(you.cun.chen.yczt == '郁'){
                     $("#ycc-s").text('郁');
              }else if(you.cun.chen.yczt == '瘀'){
                     $("#ycc-s").text('瘀');
              }else if(you.cun.chen.yczt == '水'){
                     $("#ycc-s").text('水');
              }else if(you.cun.chen.yczt == '湿'){
                     $("#ycc-s").text('湿');
              }else if(you.cun.chen.yczt == '痰'){
                     $("#ycc-s").text('痰');
              }else{
                     $("#ycc-s").text('');
              }

              if(you.guan.fu.yczt == '郁'){
                     $("#ygf-s").text('郁');
              }else if(you.guan.fu.yczt == '瘀'){
                     $("#ygf-s").text('瘀');
              }else if(you.guan.fu.yczt == '水'){
                     $("#ygf-s").text('水');
              }else if(you.guan.fu.yczt == '湿'){
                     $("#ygf-s").text('湿');
              }else if(you.guan.fu.yczt == '痰'){
                     $("#ygf-s").text('痰');
              }else{
                     $("#ygf-s").text('');
              }
              if(you.guan.zhong.yczt == '郁'){
                     $("#ygz-s").text('郁');
              }else if(you.guan.zhong.yczt == '瘀'){
                     $("#ygz-s").text('瘀');
              }else if(you.guan.zhong.yczt == '水'){
                     $("#ygz-s").text('水');
              }else if(you.guan.zhong.yczt == '湿'){
                     $("#ygz-s").text('湿');
              }else if(you.guan.zhong.yczt == '痰'){
                     $("#ygz-s").text('痰');
              }else{
                     $("#ygz-s").text('');
              }
              if(you.guan.chen.yczt == '郁'){
                     $("#ygc-s").text('郁');
              }else if(you.guan.chen.yczt == '瘀'){
                     $("#ygc-s").text('瘀');
              }else if(you.guan.chen.yczt == '水'){
                     $("#ygc-s").text('水');
              }else if(you.guan.chen.yczt == '湿'){
                     $("#ygc-s").text('湿');
              }else if(you.guan.chen.yczt == '痰'){
                     $("#ygc-s").text('痰');
              }else{
                     $("#ygc-s").text('');
              }
              
              if(you.chi.fu.yczt == '郁'){
                     $("#ychf-s").text('郁');
              }else if(you.chi.fu.yczt == '瘀'){
                     $("#ychf-s").text('瘀');
              }else if(you.chi.fu.yczt == '水'){
                     $("#ychf-s").text('水');
              }else if(you.chi.fu.yczt == '湿'){
                     $("#ychf-s").text('湿');
              }else if(you.chi.fu.yczt == '痰'){
                     $("#ychf-s").text('痰');
              }else{
                     $("#ychf-s").text('');
              }
              if(you.chi.zhong.yczt == '郁'){
                     $("#ychz-s").text('郁');
              }else if(you.chi.zhong.yczt == '瘀'){
                     $("#ychz-s").text('瘀');
              }else if(you.chi.zhong.yczt == '水'){
                     $("#ychz-s").text('水');
              }else if(you.chi.zhong.yczt == '湿'){
                     $("#ychz-s").text('湿');
              }else if(you.chi.zhong.yczt == '痰'){
                     $("#ychz-s").text('痰');
              }else{
                     $("#ychz-s").text('');
              }
              if(you.chi.chen.yczt == '郁'){
                     $("#ychc-s").text('郁');
              }else if(you.chi.chen.yczt == '瘀'){
                     $("#ychc-s").text('瘀');
              }else if(you.chi.chen.yczt == '水'){
                     $("#ychc-s").text('水');
              }else if(you.chi.chen.yczt == '湿'){
                     $("#ychc-s").text('湿');
              }else if(you.chi.chen.yczt == '痰'){
                     $("#ychc-s").text('痰');
              }else{
                     $("#ychc-s").text('');
              }

              if(you.cun.fu.yccd == '(轻)'){
                     $("#ycf-y").text('(轻)');
              }else if(you.cun.fu.yccd == '(中)'){
                     $("#ycf-y").text('(中)');
              }else if(you.cun.fu.yccd == '(重)'){
                     $("#ycf-y").text('(重)');
              }else{
                     $("#ycf-y").text('');
              }
              if(you.cun.zhong.yccd == '(轻)'){
                     $("#ycz-y").text('(轻)');
              }else if(you.cun.zhong.yccd == '(中)'){
                     $("#ycz-y").text('(中)');
              }else if(you.cun.zhong.yccd == '(重)'){
                     $("#ycz-y").text('(重)');
              }else{
                     $("#ycz-y").text('');
              }
              if(you.cun.chen.yccd == '(轻)'){
                     $("#ycc-y").text('(轻)');
              }else if(you.cun.chen.yccd == '(中)'){
                     $("#ycc-y").text('(中)');
              }else if(you.cun.chen.yccd == '(重)'){
                     $("#ycc-y").text('(重)');
              }else{
                     $("#ycc-y").text('');
              }

              if(you.guan.fu.yccd == '(轻)'){
                     $("#ygf-y").text('(轻)');
              }else if(you.guan.fu.yccd == '(中)'){
                     $("#ygf-y").text('(中)');
              }else if(you.guan.fu.yccd == '(重)'){
                     $("#ygf-y").text('(重)');
              }else{
                     $("#ygf-y").text('');
              }
              if(you.guan.zhong.yccd == '(轻)'){
                     $("#ygz-y").text('(轻)');
              }else if(you.guan.zhong.yccd == '(中)'){
                     $("#ygz-y").text('(中)');
              }else if(you.guan.zhong.yccd == '(重)'){
                     $("#ygz-y").text('(重)');
              }else{
                     $("#ygz-y").text('');
              }
              if(you.guan.chen.yccd == '(轻)'){
                     $("#ygc-y").text('(轻)');
              }else if(you.guan.chen.yccd == '(中)'){
                     $("#ygc-y").text('(中)');
              }else if(you.guan.chen.yccd == '(重)'){
                     $("#ygc-y").text('(重)');
              }else{
                     $("#ygc-y").text('');
              }
              
              if(you.chi.fu.yccd == '(轻)'){
                     $("#ychf-y").text('(轻)');
              }else if(you.chi.fu.yccd == '(中)'){
                     $("#ychf-y").text('(中)');
              }else if(you.chi.fu.yccd == '(重)'){
                     $("#ychf-y").text('(重)');
              }else{
                     $("#ychf-y").text('');
              }
              if(you.chi.zhong.yccd == '(轻)'){
                     $("#ychz-y").text('(轻)');
              }else if(you.chi.zhong.yccd == '(中)'){
                     $("#ychz-y").text('(中)');
              }else if(you.chi.zhong.yccd == '(重)'){
                     $("#ychz-y").text('(重)');
              }else{
                     $("#ychz-y").text('');
              }
              if(you.chi.chen.yccd == '(轻)'){
                     $("#ychc-y").text('(轻)');
              }else if(you.chi.chen.yccd == '(中)'){
                     $("#ychc-y").text('(中)');
              }else if(you.chi.chen.yccd == '(重)'){
                     $("#ychc-y").text('(重)');
              }else{
                     $("#ychc-y").text('');
              }

              
             if(you.cun.fu.xushi == '轻实'){
                     $("#ycf").attr('stroke-width','5');
              }else if(you.cun.fu.xushi == '中实'){
                     $("#ycf").attr('stroke-width','6');
              }else if(you.cun.fu.xushi == '重实'){
                     $("#ycf").attr('stroke-width','7');
              }else if(you.cun.fu.xushi == '极实'){
                     $("#ycf").attr('stroke-width','8');
              }else if(you.cun.fu.xushi == '正常'){
                     $("#ycf").attr('stroke-width','4');
              }else if(you.cun.fu.xushi == '轻虚'){
                     $("#ycf").attr('stroke-width','4');
                     $("#ycf").attr('stroke-dasharray','5,5'); 
              }else if(you.cun.fu.xushi == '中虚'){
                     $("#ycf").attr('stroke-width','3');
                     $("#ycf").attr('stroke-dasharray','5,5'); 
              }else if(you.cun.fu.xushi == '重虚'){
                     $("#ycf").attr('stroke-width','2');
                     $("#ycf").attr('stroke-dasharray','5,5'); 
              }else if(you.cun.fu.xushi == '极虚'){
                     $("#ycf").attr('stroke-width','1');
                     $("#ycf").attr('stroke-dasharray','5,5'); 
              }

              if(you.cun.zhong.xushi == '轻实'){
                     $("#ycz").attr('stroke-width','5');
              }else if(you.cun.zhong.xushi == '中实'){
                     $("#ycz").attr('stroke-width','6');
              }else if(you.cun.zhong.xushi == '重实'){
                     $("#ycz").attr('stroke-width','7');
              }else if(you.cun.zhong.xushi == '极实'){
                     $("#ycz").attr('stroke-width','8');
              }else if(you.cun.zhong.xushi == '正常'){
                     $("#ycz").attr('stroke-width','4');
              }else if(you.cun.zhong.xushi == '轻虚'){
                     $("#ycz").attr('stroke-width','4');
                     $("#ycz").attr('stroke-dasharray','5,5'); 
              }else if(you.cun.zhong.xushi == '中虚'){
                     $("#ycz").attr('stroke-width','3');
                     $("#ycz").attr('stroke-dasharray','5,5'); 
              }else if(you.cun.zhong.xushi == '重虚'){
                     $("#ycz").attr('stroke-width','2');
                     $("#ycz").attr('stroke-dasharray','5,5'); 
              }else if(you.cun.zhong.xushi == '极虚'){
                     $("#ycz").attr('stroke-width','1');
                     $("#ycz").attr('stroke-dasharray','5,5'); 
              }


              if(you.cun.chen.xushi == '轻实'){
                     $("#ycc").attr('stroke-width','5');
              }else if(you.cun.chen.xushi == '中实'){
                     $("#ycc").attr('stroke-width','6');
              }else if(you.cun.chen.xushi == '重实'){
                     $("#ycc").attr('stroke-width','7');
              }else if(you.cun.chen.xushi == '极实'){
                     $("#ycc").attr('stroke-width','8');
              }else if(you.cun.chen.xushi == '正常'){
                     $("#ycc").attr('stroke-width','4');
              }else if(you.cun.chen.xushi == '轻虚'){
                     $("#ycc").attr('stroke-width','4');
                     $("#ycc").attr('stroke-dasharray','5,5'); 
              }else if(you.cun.chen.xushi == '中虚'){
                     $("#ycc").attr('stroke-width','3');
                     $("#ycc").attr('stroke-dasharray','5,5'); 
              }else if(you.cun.chen.xushi == '重虚'){
                     $("#ycc").attr('stroke-width','2');
                     $("#ycc").attr('stroke-dasharray','5,5'); 
              }else if(you.cun.chen.xushi == '极虚'){
                     $("#ycc").attr('stroke-width','1');
                     $("#ycc").attr('stroke-dasharray','5,5'); 
              }

              if(you.guan.fu.xushi == '轻实'){
                     $("#ygf").attr('stroke-width','5');
              }else if(you.guan.fu.xushi == '中实'){
                     $("#ygf").attr('stroke-width','6');
              }else if(you.guan.fu.xushi == '重实'){
                     $("#ygf").attr('stroke-width','7');
              }else if(you.guan.fu.xushi == '极实'){
                     $("#ygf").attr('stroke-width','8');
              }else if(you.guan.fu.xushi == '正常'){
                     $("#ygf").attr('stroke-width','4');
              }else if(you.guan.fu.xushi == '轻虚'){
                     $("#ygf").attr('stroke-width','4');
                     $("#ygf").attr('stroke-dasharray','5,5'); 
              }else if(you.guan.fu.xushi == '中虚'){
                     $("#ygf").attr('stroke-width','3');
                     $("#ygf").attr('stroke-dasharray','5,5'); 
              }else if(you.guan.fu.xushi == '重虚'){
                     $("#ygf").attr('stroke-width','2');
                     $("#ygf").attr('stroke-dasharray','5,5'); 
              }else if(you.guan.fu.xushi == '极虚'){
                     $("#ygf").attr('stroke-width','1');
                     $("#ygf").attr('stroke-dasharray','5,5'); 
              }


              if(you.guan.zhong.xushi == '轻实'){
                     $("#ygz").attr('stroke-width','5');
              }else if(you.guan.zhong.xushi == '中实'){
                     $("#ygz").attr('stroke-width','6');
              }else if(you.guan.zhong.xushi == '重实'){
                     $("#ygz").attr('stroke-width','7');
              }else if(you.guan.zhong.xushi == '极实'){
                     $("#ygz").attr('stroke-width','8');
              }else if(you.guan.zhong.xushi == '正常'){
                     $("#ygz").attr('stroke-width','4');
              }else if(you.guan.zhong.xushi == '轻虚'){
                     $("#ygz").attr('stroke-width','4');
                     $("#ygz").attr('stroke-dasharray','5,5'); 
              }else if(you.guan.zhong.xushi == '中虚'){
                     $("#ygz").attr('stroke-width','3');
                     $("#ygz").attr('stroke-dasharray','5,5'); 
              }else if(you.guan.zhong.xushi == '重虚'){
                     $("#ygz").attr('stroke-width','2');
                     $("#ygz").attr('stroke-dasharray','5,5'); 
              }else if(you.guan.zhong.xushi == '极虚'){
                     $("#ygz").attr('stroke-width','1');
                     $("#ygz").attr('stroke-dasharray','5,5'); 
              }


              if(you.guan.chen.xushi == '轻实'){
                     $("#ygc").attr('stroke-width','5');
              }else if(you.guan.chen.xushi == '中实'){
                     $("#ygc").attr('stroke-width','6');
              }else if(you.guan.chen.xushi == '重实'){
                     $("#ygc").attr('stroke-width','7');
              }else if(you.guan.chen.xushi == '极实'){
                     $("#ygc").attr('stroke-width','8');
              }else if(you.guan.chen.xushi == '正常'){
                     $("#ygc").attr('stroke-width','4');
              }else if(you.guan.chen.xushi == '轻虚'){
                     $("#ygc").attr('stroke-width','4');
                     $("#ygc").attr('stroke-dasharray','5,5'); 
              }else if(you.guan.chen.xushi == '中虚'){
                     $("#ygc").attr('stroke-width','3');
                     $("#ygc").attr('stroke-dasharray','5,5'); 
              }else if(you.guan.chen.xushi == '重虚'){
                     $("#ygc").attr('stroke-width','2');
                     $("#ygc").attr('stroke-dasharray','5,5'); 
              }else if(you.guan.chen.xushi == '极虚'){
                     $("#ygc").attr('stroke-width','1');
                     $("#ygc").attr('stroke-dasharray','5,5'); 
              }


              if(you.chi.fu.xushi == '轻实'){
                     $("#ychf").attr('stroke-width','5');
              }else if(you.chi.fu.xushi == '中实'){
                     $("#ychf").attr('stroke-width','6');
              }else if(you.chi.fu.xushi == '重实'){
                     $("#ychf").attr('stroke-width','7');
              }else if(you.chi.fu.xushi == '极实'){
                     $("#ychf").attr('stroke-width','8');
              }else if(you.chi.fu.xushi == '正常'){
                     $("#ychf").attr('stroke-width','4');
              }else if(you.chi.fu.xushi == '轻虚'){
                     $("#ychf").attr('stroke-width','4');
                     $("#ychf").attr('stroke-dasharray','5,5'); 
              }else if(you.chi.fu.xushi == '中虚'){
                     $("#ychf").attr('stroke-width','3');
                     $("#ychf").attr('stroke-dasharray','5,5'); 
              }else if(you.chi.fu.xushi == '重虚'){
                     $("#ychf").attr('stroke-width','2');
                     $("#ychf").attr('stroke-dasharray','5,5'); 
              }else if(you.chi.fu.xushi == '极虚'){
                     $("#ychf").attr('stroke-width','1');
                     $("#ychf").attr('stroke-dasharray','5,5'); 
              }

              if(you.chi.zhong.xushi == '轻实'){
                     $("#ychz").attr('stroke-width','5');
              }else if(you.chi.zhong.xushi == '中实'){
                     $("#ychz").attr('stroke-width','6');
              }else if(you.chi.zhong.xushi == '重实'){
                     $("#ychz").attr('stroke-width','7');
              }else if(you.chi.zhong.xushi == '极实'){
                     $("#ychz").attr('stroke-width','8');
              }else if(you.chi.zhong.xushi == '正常'){
                     $("#ychz").attr('stroke-width','4');
              }else if(you.chi.zhong.xushi == '轻虚'){
                     $("#ychz").attr('stroke-width','4');
                     $("#ychz").attr('stroke-dasharray','5,5'); 
              }else if(you.chi.zhong.xushi == '中虚'){
                     $("#ychz").attr('stroke-width','3');
                     $("#ychz").attr('stroke-dasharray','5,5'); 
              }else if(you.chi.zhong.xushi == '重虚'){
                     $("#ychz").attr('stroke-width','2');
                     $("#ychz").attr('stroke-dasharray','5,5'); 
              }else if(you.chi.zhong.xushi == '极虚'){
                     $("#ychz").attr('stroke-width','1');
                     $("#ychz").attr('stroke-dasharray','5,5'); 
              }
              

              if(you.chi.chen.xushi == '轻实'){
                     $("#ychc").attr('stroke-width','5');
              }else if(you.chi.chen.xushi == '中实'){
                     $("#ychc").attr('stroke-width','6');
              }else if(you.chi.chen.xushi == '重实'){
                     $("#ychc").attr('stroke-width','7');
              }else if(you.chi.chen.xushi == '极实'){
                     $("#ychc").attr('stroke-width','8');
              }else if(you.chi.chen.xushi == '正常'){
                     $("#ychc").attr('stroke-width','4');
              }else if(you.chi.chen.xushi == '轻虚'){
                     $("#ychc").attr('stroke-width','4');
                     $("#ychc").attr('stroke-dasharray','5,5'); 
              }else if(you.chi.chen.xushi == '中虚'){
                     $("#ychc").attr('stroke-width','3');
                     $("#ychc").attr('stroke-dasharray','5,5'); 
              }else if(you.chi.chen.xushi == '重虚'){
                     $("#ychc").attr('stroke-width','2');
                     $("#ychc").attr('stroke-dasharray','5,5'); 
              }else if(you.chi.chen.xushi == '极虚'){
                     $("#ychc").attr('stroke-width','1');
                     $("#ychc").attr('stroke-dasharray','5,5'); 
              }



	});
}
$("#maizhen").click(function(){
       $("path").attr({'stroke':'gray','stroke-dasharray':'','stroke-width':'1'});
       $("text").text('');
	$("#maizhen").css('display','none');
});