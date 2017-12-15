require.config({
	baseUrl : "/project/",
	paths : {
		"jquery" : "lib/jquery/jquery-1.12.4.min",
		"cookie" : "lib/jquery_plugins/jquery.cookie",
		"load" : "js/loadHeaderFoot",
		"hf" : "js/load-hf",
		"template" : "lib/arttemplate/template",
		"bootstrap" : "lib/bootstrap/js/bootstrap.min",
		"zoom" : "lib/jquery_plugins/jquery.elevateZoom-2.2.3.min",
		"fly" :"lib/jquery_plugins/jquery.fly.min",
		"con" : "confirm"
	},
	shim : {
		"bootstrap" : {deps:["jquery"]},
		 "zoom" : {deps:["jquery"]},
		 "con" : {deps:["jquery"]}
		}
});


