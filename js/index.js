require(["config"], function(){
	require(["jquery","template", "hf"], function($, template){
		// 利用模板渲染数据显示
		$.getJSON("mock/index.json", function(resData){
			var data = {
				products : resData.data
			};
		var html = template("product_list_template", data);
		$(".ff").html(html);
		});
		
		// 侧边栏固定
		var slide_top = $(".hot_buy").offset().top; // 热卖商品距离顶部距离
		var winHeight = $(window).height(); // 窗口高度

		$(window).on("scroll", function(){
			
			var _scrollHeight = $(document).scrollTop(); // 当前滚动高度
		
			if(_scrollHeight >= slide_top - winHeight / 4){
				console.log("oo")
				$("#goback").show();
			}else{
				$("#goback").hide();
			}
		// 固定栏
		var _top = $("#logo").offset().top;
			console.log(_top);
			// 文档滚动高度
			var scroll_top = $(document).scrollTop();
			if(scroll_top > _top){
				$(".logo_part").css({
					"position" : "fixed",
					"top" : 0
				});
			$(".main").css("margin-top", $(".logo-part").height());
			}else{
				$(".logo-part").css({
					"position" : "static",
					"top" : 0
				});
				$(".main").css("margin-top", 0);
			}
		});
		// 搜索栏吸顶
		var _top = $("#logo").offset().top;
			console.log(_top);
			// 文档滚动高度
			var scroll_top = $(document).scrollTop();
			if(scroll_top > _top){
				$(".logo_part").css({
					"position" : "fixed",
					"top" : 0
				});
			$(".main").css("margin-top", $(".logo-part").height());
			}else{
				$(".logo-part").css({
					"position" : "static",
					"top" : 0
				});
				$(".main").css("margin-top", 0);
			}
	});
	
	// 倒计时
	var deadTime = new Date(2017,12,25,8,05,05); // 结束时间（年月日时分秒）
	var timer = setInterval(function(){ // 定义一个计时器
		var now = new Date(); // 当前时间
		var diff = deadTime - now; // 时间差(毫秒)
		var seconds = Math.ceil(diff / 1000); // (秒)
		// 转换成时分秒
		var sec = ("0" + seconds % 60).slice(-2),
			min = ("0" + Math.floor(seconds / 60) % 60).slice(-2),
			hour = ("0" + Math.floor(seconds / 3600) % 24).slice(-2);
		
		// 页面显示倒计时
		$(".second").html(sec);
		$(".minute").html(min);
		$(".hour").html(hour);
		
		// 判断计时结束
		if (seconds <= 0)
			clearInterval(timer);
	}, 1000);
	
//	 搜索栏吸顶
//	require(["jquery"], function(){
//		$(window).ready(function(){
//			var _top = $("#logo").offset().top;
//			console.log(_top);
//			// 文档滚动高度
//			var scroll_top = $(document).scrollTop();
//			if(scroll_top > _top){
//				$(".logo_part").css({
//					"position" : "fixed",
//					"top" : 0
//				});
//			$(".main").css("margin-top", $(".logo-part").height());
//			}else{
//				$(".logo-part").css({
//					"position" : "static",
//					"top" : 0
//				});
//				$(".main").css("margin-top", 0);
//			}
//		});
//	});
	
	
	// 轮播图
	require(["jquery","bootstrap"], function() {
		$(".carousel").carousel({ // 控制切换时间
   			 interval: 2000
		})
		$("#myCarousel").hover(function(){
			$(".carousel-control ").css({
				background:"blue",
				display : "block",
				position:"absolute",
				top :200
			});
		}, function(){
			$(".carousel-control").css({
				display : "none",
			});
		});
	});
	// 下拉列表(bug)
	require(["jquery"], function(){
		$(".typeLi").hover(function(){
			$(".List").css({background:"white"});
			$(".child").eq($(this).index()).css({display:"block"})
					   .parents(".typeLi")
					   .siblings("li")
					   .children(".child").hide();
		}, function(){
			$(".List").css({background:"none"});
			$(".child").eq($(this).index())
				       .css({display:"none"})
				       .parents(".typeLi")
				       .siblings("li")
				       .children(".child").hide();
		});
	});
	
});