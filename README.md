#设置cookie,包括域、路径、有效期
Cookie.set("name","HelloWord",'/xxx/xxx',"www.baidu.com",new Date());

#删除cookie
Cookie.unset("name","xx/xxx","www.baidu.com");

#设置安全的cookie
Cookie.set("name","HelloWord",null,null,null,true);