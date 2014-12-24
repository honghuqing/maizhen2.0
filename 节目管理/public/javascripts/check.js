//登陆表单验证

$("#loginForm").submit(function(){
	if($("#user").val() == "" && $("#pwd").val() == ""){
		$("#user").attr('class','error');
		$("#user").attr('placeholder','用户名不能为空');
		$("#pwd").attr('class','error');
		$("#pwd").attr('placeholder','密码不能为空');
		return false;
	}else if($("#user").val() == ""){
		$("#user").attr('class','error');
		$("#user").attr('placeholder','密码不能为空');
		return false;
	}else if($("#pwd").val() == ""){
		$("#pwd").attr('class','error');
		$("#pwd").attr('placeholder','密码不能为空');
		return false;
	}else if($("#user").val().length < 4){
		alert("用户名长度不能少于5位");
		return false;
	}
});
$('#user').keyup(function () {
	$("#user").attr('class','success');
});
$('#pwd').keyup(function () {
	$("#pwd").attr('class','success');
});


// 注册表单验证

$("#registerForm").submit(function(){
	if($("#registerForm #username").val() == ""){
		$("#username-style").attr('class','control-group error');
		$("#registerForm #username").attr('placeholder','用户名不能为空');
		return false;
	}else if($("#registerForm #username").val().length < 4){
		alert("用户名长度不能少于5位");
		return false;
	}else if($("#registerForm #user").val() == ""){
		$("#user-style").attr('class','control-group error');
		$("#registerForm #user").attr('placeholder','姓名不能为空');
		return false;
	}else if($("#registerForm #pwd").val() == ""){
		$("#pwd-style").attr('class','control-group error');
		$("#registerForm #pwd").attr('placeholder','密码不能为空');
		return false;
	}else if($("#registerForm #photo").val() == ""){
		$("#photo-style").attr('class','control-group error');
		$("#registerForm #photo").attr('placeholder','密码不能为空');
		return false;
	}
});
$('#registerForm #username').keyup(function () {
	$("#username-style").attr('class','control-group success');
});
$('#registerForm #user').keyup(function () {
	$("#user-style").attr('class','control-group success');
});
$('#registerForm #pwd').keyup(function () {
	$("#pwd-style").attr('class','control-group success');
});


function showCat(){
	$('#cat').toggle(300)
}
function checkVideo(){
	var url = $("#url").val();
	window.open(url);
}
$('#clear').click(function(){
	$('#url').val('');
});

$('#cat li').click(function(){
	$('#cat li').attr('class','');
	$(this).attr('class','cat-active');
	var v = $(this).html();
	$("#cat-input").val(v);
})

$('#tag-list span').click(function(){
	if($('#tag').val() == ''){
		$('#tag').val($('#tag').val() + $(this).text())	
	} else {
		$('#tag').val($('#tag').val() + ',' + $(this).text())		
	}
});

$('#select-special').click(function(){
	$('#special-list').css('display','block');
});
$('#special-list').click(function(){
	$(this).css('display','none');
});

function changeStatus(obj, msg){
	if(msg == 'on'){
		$(obj).find('img').eq(0).css('border-color','#ff9900');
	}else if(msg == 'off'){
		$(obj).find('img').eq(0).css('border-color','#eee');
	}
}

function useThisSpecial(obj){
	var specialId = $(obj).find('input').eq(0).val();
	var specialName = $(obj).find('p').eq(0).text();
	$('#special').val(specialId);
	$('#show-special').html("添加到专辑:<span style='color:red'>"+specialName+'</span>');
}

function usePrevInfo(){
	$.ajax({
		type:'post',
		url:'/usePrevShowInfo',
		success:function(msg){
			$('input[name=url]').val(msg.url);	
			$('input[name=title]').val(msg.title);	
			$('textarea[name=desc]').text(msg.desc);	
			$('textarea[name=pushinfo]').text(msg.pushinfo);	
			$('input[name=tags]').val(msg.tags);	
			$('input[name=author]').val(msg.author);	
			$('input[name=special]').val(msg.special);	
			$('input[name=category]').val(msg.category);	
			$('#cat').find('li').each(function(){
				if($(this).text() == msg.category){
					$(this).addClass('cat-active');
				}		
			});	
			$('input[name=special]').val(msg.special);
			$('#show-special').html("添加专辑到:<span style='color:red'>"+msg.special.title+'</span>');
		}
	});
}
