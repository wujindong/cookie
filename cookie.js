var Cookie = {
    /**
     *
     * @param name
     * @returns {*}
     */
    get: function (name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd))
        }
        return cookieValue;
    },
    /**
     *
     * @param name
     * @param value
     * @param expires 有效期
     * @param path 路径
     * @param domain 域
     * @param secure 安全
     */
    set: function (name, value, path, domain,expires, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += ";expires=" + expires.toGMTString();
        }
        if (path) {
            cookieText += ";path=" + path;
        }
        if (domain) {
            cookieText += ";domain=" + domain;
        }
        if (secure) {
            cookieText += ";secure";
        }
        document.cookie = cookieText;
    },
    /**
     *
     * @param name
     * @param path
     * @param domain
     * @param secure
     */
    unset: function (name, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    }
};


//设置cookie,包括域、路径、有效期
Cookie.set("name","HelloWord",'/xxx/xxx',"www.baidu.com",new Date());

//删除cookie
Cookie.unset("name","xx/xxx","www.baidu.com");

//设置安全的cookie
Cookie.set("name","HelloWord",null,null,null,true);
