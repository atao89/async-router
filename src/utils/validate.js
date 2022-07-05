export const isPhone = () => {
    //获取浏览器navigator对象的userAgent属性（浏览器用于HTTP请求的用户代理头的值）
    //通过正则表达式的test方法判断是否包含“Mobile”字符串
    var isPhone = /mobile/i.test(navigator.userAgent);
    //如果包含“Mobile”（是手机设备）则返回true
    if (isPhone) {
        return 'mobile'
    } else {
        return 'desktop'
    }
}