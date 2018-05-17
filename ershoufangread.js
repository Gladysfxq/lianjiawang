 function getQuery(){
                var str = (location.search.length > 0 ? location.search.substring(1) : ''),
                args = {},
                items = str.length ? str.split("&") : [],
                item = null,
                name = null,
                value = null;
                for (i=0; i < items.length; i++){
                    item = items[i].split("=");
                    name = decodeURIComponent(item[0]);
                    value = decodeURIComponent(item[1]);
                    if (name.length) {
                        args[name] = value;
                    }
                }
                return args;
            }
var car = new Vue({
	el: "#app",
	data: {

	},
	mounted:function(){

	},
	methods:{
		getData:function(){
			var infoID = getQuery().id;
			var that = this;
			$.ajax({
				'url': ' http://lianjia.com/api/ershoufang/info',
				'type': 'get',
				'datatype': 'json',
				'data':{
                   id: infoID;
				},
			})
		}

	},