# shenghuojia_v1

## 前台Ajax请求数据约定

### "注册"

### "登录"

### "Home"
1. 觅友
发送ajax请求GRT,返回6条随机对象

返回的字段{
_idcard
avater
nickname
condition 
location
want_rent_price            
}

2. 觅居

发送ajax请求GRT,返回6条随机对象

返回：{

title
房源图片链接
room_style
community
rent_style
rent_price
location
 }
 
3. 郊游

发送ajax请求GRT,返回6条随机对象

返回：{

id
活动图片
name
time     
活动地点（location）      
type
price
host
hot_number
3. 筑巢

发送ajax请求GRT,返回6条随机对象

返回：
      
      文章图片url
      post_name    
      author
 
### "觅友"

 发送ajax请求GRT
   
   如果有搜索条件，返回所有匹配室友的相关字段：

params:{

      "Name":"{username}",
      "City":"{city}",
      "Sex":"{man/woman/unknow}",
      "RejectPets":"{yes/unknow}",
      "RejectSmoking":"{yes/unknow}",
      "RejectNoise":"{yes/unknow}"
}
  如果没有搜索条件（即没有params），返回所有室友的相关字段

返回的相关字段：
_idcard
avater
nickname
condition 
location
want_rent_price       
是否有房源
introduction

### "觅居"

 发送ajax请求GRT
 
   如果有搜索条件，返回所有匹配的相关字段：
   
params:{

      "miju":"part",
      
      "SearchName":"{searchname}",
      
      "City":"{city}",
      
      "zhengzu":"{yes/unknow}",整租
      
      "danjian":"{yes/unknow}",单间
      
      "xiaoqu":"{yes/unknow}",小区
      
      "dianti":"{yes/unknow}",电梯
      
      "jingzhuangxiu":"{yes/unknow}",精装修
      
      "jingditie":"{yes/unknow}"近地铁
      
}

  如果没有搜索条件（即没有params），返回所有房源的相关字段
  
返回：
title
房源图片链接
room_style
community
rent_style
rent_price
location
room_area
room_facility
房东
      
### "郊游"

 发送ajax请求GRT
 
   如果有搜索条件，返回所有匹配的相关字段：
   
params:{

      "jiaoyou":"part",
      
      "Name":"{username}",
      
      "City":"{city}",
      
      "party":"{yes/unknow}",聚会
      
      "perform":"{yes/unknow}",演出
      
      "exhibition":"{yes/unknow}",展览
      
      "experience":"{yes/unknow}"体验课
      
     
}

  如果没有搜索条件（即没有params），返回所有活动的相关字段
  
返回：
id
活动图片url
name
time     
活动地点（location）      
type
price
host
hot_number
introduction      

    
### "筑巢"

 发送ajax请求GRT,返回所有文章的相关信息（无params）
 
返回：
文章图片url
post_name    
author
文章内容content
      
### "觅居详情"
发送ajax请求GRT,返回对应房源的相关信息
params:{
  "title":{title}
}
返回：
title
房源图片链接
rent_price
room_style
rent_style
room_area
community
room_left
room_facility
location
longitude
latitude
房源描述


