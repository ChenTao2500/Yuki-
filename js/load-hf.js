define(["jquery", "cookie"], function($){
	$.ajax("html/include/header.html").done(function(data){
		$(".header").html(data);
	}).done(function(){
		var _user = $.cookie("login_user");
		if (_user) {
			$(".login_reg").html("<a href='#'>欢迎您："+ _user +"</a>");
		}
	}).done(function(){
		$(".login_reg").hover(function(){
//			$(this).css("height", 200);
		}, function(){
			$(this).css("height", 35)
		});
	}).done(function(){ // 搜索框接口
		$("#serr").keyup(function(){
//			console.log("oo")
			var word = $(this).val();
			var _url = "https://suggest.taobao.com/sug?code=utf-8&q="+ word + "&callback=?";
			$.getJSON(_url, function(data){
				var html = "";
				data.result.forEach(function(curr){
					 html += `<div>${curr[0]}</div>`;
				})
				$("#info").html(html);
			});
		});
	});
	$(".footer").load("html/include/footer.html");
});

