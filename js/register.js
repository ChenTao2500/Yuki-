require(["config"], function(){
	require(["jquery", "load"], function($){
		var isPhoneExist = true;
		$(".phone").on("blur", function(){
			/*使用ajax请求，判断用户是否存在*/ 
			$.ajax({
				type : "get",
				url : "../check.php",
				data : {phone:$(".phone").val()},
				dataType : "json",
				success : function(resData){
					console.log(resData)
					if(resData.status === 1){
						$(".info").text("用户名已被占用");
						isPhoneExist = true;
					}else{
						$(".info").text("可用");
						isPhoneExist = false;
					}
				}
			});
		});
		// 开始注册
		$(".register").click(function(){
			if(!isPhoneExist){
				// 向服务器发送数据请求，保存注册用户
				$.ajax({
					type : "post",
					url : "../register.php",
					data: {
						phone : $(".phone").val(),
						password :$(".pass").val(),
					},
					dataType : "json",
					success : function(data){
						console.log(data)
						if(data.status == 1)
							location = "login.html";
						else
							$(".err").text("注册失败，请重试！")
					}
				});
			}
		});
		// 验证码
		function loadCode(){
		   var url = "http://route.showapi.com/932-2?showapi_appid=48344&showapi_sign=09168fc73b1748ea9fc1f278a590cb83&length=4&specials=false&";
			$.getJSON(url, {}, function(data){
				var resData = data.showapi_res_body;
				$(".content").attr("src", resData.image);
				$(".content").attr("sid", resData.sid);
			});
		}
		// 调用
		$(".codes").on("click", function(){ // 给 “换一个” 绑定点击事件
			loadCode();
		});
		
		// 验证有效性
		$(".code").blur(function(){
			var url = "http://route.showapi.com/932-1?showapi_appid=48344&showapi_sign=09168fc73b1748ea9fc1f278a590cb83&checkcode="+$(".code").val()+"&sid="+$(".content").attr("sid");
			$.getJSON(url, {}, function(data){
				if(data.showapi_res_body.valid){
					$(".codes").text("验证通过");
				}else{
					$(".codes").text("验证错误");
				}
			});
		});
		loadCode(); // 调用加载验证码方法
	});
});
