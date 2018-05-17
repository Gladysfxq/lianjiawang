



## 首页
**简要描述：** 

- 二手房首页接口

**请求URL：** 
- ` http://lianjia.com/api/ershoufang/index

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    	"banner" : [
    	   {
    	      "id":10,
    	      "img" : "",
    	      "url" : "",
    	   },
    	],
		"hotpush" : [
    	   {
    	      "id":10,
    	      "img" : "",
    	      "url" : "",
    	   },
    	],
    	"house_lists" : [
    		{
    			"id" : "",
    			"title" : "",
				"image":"",
    			"type" : "",
				"area" : "",
    			"orientation" : "",
    			"xiaoqu":"",
				"price":"",
				"unit_price":"",
				"tab":["ggg"]
    		}
    	],
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |
|banner  |array    |广告头图  |
|hotpush |array    |热推|
|blog_lists  |array    |房屋列表|



***
- 二手房首页条件接口

**请求URL：** 
- ` http://lianjia.com/api/ershoufang/condition

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    	"region" : [
    	   {
    	      "id":10,
    	      "name" : "",
    	      "region2":[
				{
					"id":,
				    "name":,
			 	}
			  ]
    	   },
    	],
		"price_section" : [
    	   {
    	      "id":,
    	      "name" : "",
    	      "url" : "",
    	   },
    	],
    	"house_type" : [
    		{
			  "id":,
    	      "name" : "",
    	      "url" : "",
    		}
    	],
        "orientation" : [
    		{
			  "id":,
    	      "name" : "",
    	      "url" : "",
    		}
    	],
        "area" : [
    		{
			  "id":,
    	      "name" : "",
    	      "url" : "",
    		}
    	],
       "tab" : [
    		{
			  "id":,
    	      "name" : "",
    	      "url" : "",
    		}
    	],
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |
|region  |array    |区域  |
|price_section |array    |价格|
|house_type  |array    |房型|
|orientation  |array    |朝向|
|area  |array    |面积|
|tab  |array    |标签|


***


## 详情页
**简要描述：** 

- 详情页接口

**请求URL：** 
- ` http://lianjia.com/api/ershoufang/info
- **请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |int |房屋id|

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    	"house_info" : [
    		{
    			"id" : "",
    			"title" : "",
				"image_lists":[
					{
					"image":"",
					}
				]
				"price":"",
    			"type" : "",
				"area" : "",
    			"orientation" : "",
    			"xiaoqu":"",
				"nuit_price":"",
    		}
    	],
		"related_house" : [
    	   {
    	      "id" :"",
    	      "title" : "",
			  "image":"",
    		  "type" : "",
			  "area" : "",
    		  "orientation" : "",
    		  "xiaoqu":"",
			  "price":"",
			  "nuit_price":"",
    	   },
    	],
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |
|house_info  |array    |房屋详情  |
|related_house |array    |相关推荐|
1