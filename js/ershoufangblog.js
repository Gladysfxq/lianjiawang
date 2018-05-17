var app = new Vue({
	el: "#app",
	data:{ 
     houselist: [],
     house_type: [],
     listb: [],
     district: [],
     isShowAll: false,
     isShowArea: false,
     isShowPrice: false,
     isShowModel: false,
     isShowMore: false,
     isShowhide: false,
     isShowA: false,
     isShowQu: false,
     isShowDi: false,
     isShowD: false,
	},
	mounted:function(){
    this.getData();
    this.getList();
	},
	methods: {
	  getData: function(){
	  	var that = this;
      $.ajax({
        'url': 'http://lianjia.com/api/ershoufang/index',
        'type': 'get',
        'dataType': 'json',
        'data': {

        },
        success:function(res){
           that.houselist = res.data.house_lists;
           that.housetype = res.data.house_type;
           console.log(that.houselist)
        }
      })
	  },
    getList:function(){
      var that = this;
      $.ajax({
        'url': 'http://lianjia.com/api/ershoufang/condition',
        'type': 'get',
        'dataType': 'json',
        'data': {
        },
        success: function(res){
          console.log(res);
          console.log(that.listb);
          that.listb = res.data.region;
        }
      })
    },
     clickRegion:function(item,index){
    },
    clickOne: function(itemb){
      var that = this;
      that.listb.forEach(function(xi){
          if(xi.id == itemb.id){
            that.district = xi.region2;//找到数组中的数组；
          }
          // console.log(that.district)
      })
      that.isShowD =true;
    },
    clickArea: function(){
    	this.isShowAll = true;
    	this.isShowArea = true;
    	this.isShowPrice = false;
      this.isShowModel = false;
      this.isShowMore = false;
      this.isShowhide = true;
      this.isShowA = true;

    },
    clickPrice: function(){
    	this.isShowAll = true;
    	this.isShowArea = false;
    	this.isShowPrice = true;
      this.isShowModel = false;
      this.isShowMore = false;
      this.isShowhide = true;
      this.isShowA = true;
    },
    clickModel: function(){
    	this.isShowAll = true;
    	this.isShowArea = false;
    	this.isShowPrice = false;
      this.isShowModel = true;
      this.isShowMore = false;
      this.isShowhide = true;
      this.isShowA = true;

    },
    clickMore: function(){
    	this.isShowAll = true;
    	this.isShowArea = false;
    	this.isShowPrice = false;
      this.isShowModel = false;
      this.isShowMore = true;
      this.isShowhide = true;
      this.isShowA = true;
    },
    clickQu: function(){
      this.isShowQu = true;
      this.isShowDi = false;
    },
    clickDi: function(){
      this.isShowDi = true;
      this.isShowQu = false;
    },
    clickD: function(item,index){
      this.isShowD = true;
    }
	}
})