require(["config"], function(){
	require(["jquery","template","load","cookie"], function($,template){
		// 利用模板渲染数据商品列表
		$.getJSON("../mock/list.json", function(resData){
			var data = {
				lists : resData.data  //key value键值对形式，key必须和html页面的each 后的对象一致
			}
			var html = template("product_list", data);
			$(".box").html(html);
		});
		// 利用模板渲染猜你喜欢处商品
		$.getJSON("../mock/like.json", function(Data){
			var datas = {
				likes : Data.likes
			}
			var html1 = template("product_like", datas);
			$(".s").html(html1);
		});
		
		// 添加购物车
		$(".box").on("click", ".part1", function(e){ // 时间委派
			var pro = $(this);
			console.log(pro)
			var product = { // 将商品信息装进一个对象
				id : pro.find(".id").val(), // 商品 id
				title : pro.find(".title").text(), // 商品名称
				price : pro.find(".price").text(), // 商品价格
				img : pro.find(".img").attr("src"), // 商品图片
				amount : 1, // 
			}
			console.log(product)
			$.cookie.json = true; // cookie操作
			// 将 cookie 里面的商品读取出来
			var _products = $.cookie("products") || [];
//			console.log(_products)
			// 当前商品是否已经被选购过
			var index = exist(product.id, _products);
			console.log(index)
			if(index !== -1) {// 存在
				_products[index].amount++;
				
			}else{
				_products.push(product);
			}
			console.log(_products)
			// 重新存回 cookie
			$.cookie("products", _products, {expires:7, path:"/"});
			console.log("bingo")
		});
		// 指定id的商品在所有已选购的数组中是否存在
	// 存在则返回其在数组中的下标，不存在返回-1
		function exist(id, products) {
			for (var i = 0; i < products.length; i++) {
				if (products[i].id == id)
					return i;
			}
				return -1;
		}
	});
});