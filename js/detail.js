require(["config"], function(){
	require(["jquery", "load", "zoom"], function(){
		// 放大镜
		$("#img_0").elevateZoom({
			gallery:'gal1',
			cursor: 'pointer',
			galleryActiveClass: 'active', 
			imageCrossfade: true, 
			loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif',
			lensShape : "square",
			zoomType : "window",
			zoomWindowWidth: 300,
			zoomWindowHeight: 300,
			cursor:"pointer",
			zoomWindowOffetx: 50,
			imageCrossfade:true,
			borderSize:2
			}); 
		$("#gal1").bind("click", function(e) {  
		  var ez = $('#gal1').data('elevateZoom');	
			$.fancybox(ez.getGalleryList());
		  return false;
		});
	});
});