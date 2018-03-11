# shenghuojia_v1

## 前台Ajax请求数据约定

### "注册"

### "登录"

### "Home"
1. 觅友
发送ajax请求GRT,返回所有室友的相关信息

params:{
"miyou":"all"
}

返回的相关信息{

主键（key）


头像url
              

用户名username
              

标签tag

}

2. 觅居

发送ajax请求GRT,返回所有房源的相关信息

params:{
"miju":"all"
}

返回：{

主键（key）
      
房源图片url
      
 标签tag
 
 }
 
3. 郊游

发送ajax请求GRT,返回所有活动的相关信息

params:{
"jiaoyou":"all"
}

返回：{

主键（key）

活动title
      
活动图片url
      
活动time
      
活动地点（location）
      
活动类型（type）
      
费用cost
      
主办方organizer

3. 筑巢

发送ajax请求GRT,返回所有文章的相关信息

params:{
"zhuchao":"all"
}

返回：

      主键（key）
      
      文章图片url
      
      文章title
      
      文章作者author
 
### "觅友"

 发送ajax请求GRT
 
   如果"miyou"属性值为“part”返回匹配室友的相关信息
   
params:{

      "miyou":"part",
      "Name":"{username}",
      "City":"{city}",
      "Sex":"{man/woman/unknow}",
      "RejectPets":"{yes/unknow}",
      "RejectSmoking":"{yes/unknow}",
      "RejectNoise":"{yes/unknow}"
}
  如果"miyou"属性值为“all”返回所有室友的相关信息
params:{
"miyou":"all"
}

返回的相关信息：
              主键（key）
              
              头像url
              
              用户名username
              
              标签tag
              
              是否有房源isHouse
              
              一段介绍introduction

### "觅居"

 发送ajax请求GRT
 
   如果"miju"属性值为“part”返回匹配房源的相关信息
   
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

  如果"miju"属性值为“all”返回所有房源的相关信息
  
params:{
"miju":"all"
}

返回：

      主键（key）
      
      房源图片url
      
      房源title
      
      房租
      
      房型
      
      面积
      
      家电
      
      位置
      
      基础设施
      
      房东
      
### "郊游"

 发送ajax请求GRT
 
   如果"jiaoyou"属性值为“part”返回匹配活动的相关信息
   
params:{

      "jiaoyou":"part",
      
      "Name":"{username}",
      
      "City":"{city}",
      
      "party":"{yes/unknow}",聚会
      
      "perform":"{yes/unknow}",演出
      
      "exhibition":"{yes/unknow}",展览
      
      "experience":"{yes/unknow}"体验课
      
     
}

  如果"jiaoyou"属性值为“all”返回所有活动的相关信息
  
params:{
"jiaoyou":"all"
}

返回：

      主键（key）
      
      活动title
      
      活动图片url
      
      活动time
      
      活动地点（location）
      
      活动类型（type）
      
      费用cost
      
      主办方organizer
      
      活动介绍introduction
      

### "筑巢"

 发送ajax请求GRT,返回所有文章的相关信息
 
params:{
"zhuchao":"all"
}

返回：

      主键（key）
      
      文章图片url
      
      文章title
      
      文章作者author
      
      文章内容content
      
### "觅居详情"

