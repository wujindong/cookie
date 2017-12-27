#设置cookie,包括域、路径、有效期  <br/>
Cookie.set("name","HelloWord",'/xxx/xxx',"www.baidu.com",new Date());

#删除cookie<br/>
Cookie.unset("name","xx/xxx","www.baidu.com");

#设置安全的cookie <br/>
Cookie.set("name","HelloWord",null,null,null,true);