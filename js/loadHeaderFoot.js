define(["jquery", "cookie"], function($){
	$.ajax("../html/include/header.html").done(function(data){
		$(".header").html(data);
	}).done(function(){
		var _user = $.cookie("login_user");
		if (_user) {
			$(".login_user").html("<a href='#'>欢迎您："+ _user +"</a>");
		}
	}).done(function(){
		$(".login_user").hover(function(){
//			$(this).css("height", 200);
		}, function(){                                                                                                          
//			$(this).css("height", 35);
		});
	});
	$(".footer").load("../html/include/footer.html");
});
