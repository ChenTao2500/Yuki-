require(["config"], function(){
	require(["jquery", "load"], function($){
		$.cookie.json = true;
		$(".login").click(function(){
			$.post(
				"../login.php",
				{
					phone : $(".phone").val(),
					pass : $("re_pass").val()
				},
				function(resData){
					console.log(resData)
					if(resData.status === 1){
						// 登陆成功，将登录成功的用户保存到cookie
						var user = resData.data;
						$.cookie("loginuser", user, {path:"/"});
						// 跳转到首页
						location = "../index.html";
					}else{
						$(".error").innerText = "用户名或密码错误";
					}
				},
				"json");
		});
	});
});
