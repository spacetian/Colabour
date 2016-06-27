
$(document).ready(function () {
    browserRedirect();
})

//#region 判断客户是在手机还是PC上浏览商城
function browserRedirect() {
    var url = window.location.href;
    if (url.indexOf("weixin") > -1) {
        url = url.replace(/item/, "mobile/getwxcode3.htm?toUrl=item");
        if (url.lastIndexOf(".html") == -1) {
            url = url.replace(/#/, ".html#");
        }
        url = url.substring(0, url.indexOf("#"));
        location = url;
    }
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        //跳转到移动版
        location = "/mobile/";
    }
}


// #endregion

//加入收藏
function addToFavorite(siteName) {
    try {
        window.external.AddFavorite($("#basePath").val(), siteName);
    } catch (e) {
        try {
            window.sidebar.addPanel($("#basePath").val(), siteName, "");
        } catch (e) {
            $(".collect_tip_cancel").click(function () {
                cls();
            });
            sdia('ctDia');
        }
    }
}

$(function () {
    //图片延迟加载
    $("img.lazy").lazyload({
        threshold: 200,
        effect: "fadeIn",
        failurelimit: 10,
        placeholder: "/index_seven/images/lazy_img.png",
        skip_invisible: false
    });

});


//#region  当前服务请求地址
var ServiceProvider = new Object();

/*  good/list/lottery	查询所有上架商品	GET	 */
ServiceProvider.GetAllLotteryProduct = "http://192.168.1.116:8080/good/list/lottery" ; 

// #endregion


function log(msg) {
    if (window["console"]) {
        console.log(msg);
    }
}