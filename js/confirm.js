require(["config"], function(){                                            
	require(["jquery", "load"], function(){
		// 确认收货地址
		$.when(
			$.ajax("http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&level=1"),
			$.ajax("http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&level=1&page=2")
		).then ( function(data1, data2){
			var html = "<option value='-1'>请选择省份</option>";
	    	data1[0].showapi_res_body.data.forEach( function(province) {
	    		html += `<option value="${province.id}">${province.areaName}</optiion>`; 
	    	});
	    	data2[0].showapi_res_body.data.forEach( function(province){
	    		html += `<option value="${province.id}">${province.areaName}</optiion>`; 
	    	});
	    	$(".sel1").html(html);
		});
		
		 // 选择省份发生改变时，查询该省份下的所有城市
		$(".sel1").change(function(){
			// 获取选择省份的id
			var _parentId = $(this).val();
			if (_parentId == -1)
				return;
			// 根据选择省份id查询城市
			var url = "http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&parentId=" + _parentId;
			var html = "<option value='-1'>请选择城市</option>";
			$.getJSON(url, function(data){
				data.showapi_res_body.data.forEach(function(city){
					html += `<option value="${city.id}">${city.areaName}</option>`;
				});
				$(".sel2").html(html);
			});
	
			$(".sel3").html(`<option value="-1">请选择区县</option>`);
		});
		
		// 选择城市发生改变时，查询该城市下的所有区县
		$(".sel2").change(function(){
			// 获取选择城市的id
			var _parentId = $(this).val();
			if (_parentId == -1)
				return;
			// 根据选择城市id查询区县
			var url = "http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&parentId=" + _parentId;
			var html = "<option value='-1'>请选择区县</option>";
			$.getJSON(url, function(data){
				data.showapi_res_body.data.forEach(function(district){
					html += `<option value="${district.id}">${district.areaName}</option>`;
				});
				$(".sel3").html(html);
			});
		});
		
		// 表单验证
		$(".p").on("blur", ".who, .phone", function(){
			if(!$(".who").val() && !$(".phone").val())
				$(this).focus();
		});
		
		
	});
});