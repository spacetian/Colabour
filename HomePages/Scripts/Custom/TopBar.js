﻿

$(document).ready(function () {

    $(".topBar").append(topBar);
    $(".topBar").append(topBarRight);

    // #region TopBar Event
    function dias(n) {
        $(".bh-mask").fadeIn();
        $(".dia" + n).fadeIn();
    };
    function clss() {
        $(".bh-dialog").fadeOut();
        $(".bh-mask").fadeOut();
    }
    //分享链接给好友 弹出层
    function shareUrl() {
        var basePath = $('#basePath').val();
        var str = window.location.href;
        var b = str.indexOf('/', str.indexOf('/') + 2);
        //		var a = str.indexOf("//")+2;
        var local = str.substring(0, b);
        var customerId = $('#customer_id').val(); //当前登录的用户ID
        if (customerId == null || customerId == "") {
            dias(102);
        } else {
            //给会员id加密
            var b = new Base64();
            var result = 'customer_id=' + customerId;
            var str = b.encode('"' + result + '"');
            var url = local + basePath + '/register.html?' + str;
            $('#content').html(url);
            dias(101);
        }
        //复制成功弹出复制成功窗口
        $('#copy').zclip({
            path: '/js/ZeroClipboard.swf',
            copy: function () {
                return $("#content").html();
            },
            afterCopy: function () {
                dias(103);
            }
        });
    }

    //推荐该网站给好友- 登录
    function login() {
        var basePath = $('#basePath').val();
        //获取页面登录的 href
        window.location.href = basePath + '/login.html';

    }

    //对会员ID进行加密
    function Base64() {
        _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        this.encode = function (input) {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;
            input = _utf8_encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
            }
            return output;
        }

        // public method for decoding
        this.decode = function (input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = _keyStr.indexOf(input.charAt(i++));
                enc2 = _keyStr.indexOf(input.charAt(i++));
                enc3 = _keyStr.indexOf(input.charAt(i++));
                enc4 = _keyStr.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
            }
            output = _utf8_decode(output);
            return output;
        }

        // private method for UTF-8 encoding
        _utf8_encode = function (string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }

            }
            return utftext;
        }

        // private method for UTF-8 decoding
        _utf8_decode = function (utftext) {
            var string = "";
            var i = 0;
            var c = c1 = c2 = 0;
            while (i < utftext.length) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                } else if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }
            return string;
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
})

// #region TopBar 
var topBar =
    "   <div class='section_headerTop'>                                                                            " +
    "       <div class='slot slot_headerTop01'>                                                                    " +
    "       <ul class='siteNav right'>                                                                             " +
    "           <li>                                                                                               " +
    "               <span>您好，欢迎来到福气商城</span>                                                            " +
    "           </li>                                                                                              " +
    "           <input type='hidden' id='customer_id' value=''>                                                    " +
    "           <li class='login_info'>                                                                            " +
    "               <a class='site_login' href='LoginU.html'>[请登录]</a>                                          " +
    "               <a class='site_register' href='http://kstore.qianmi.com/register.html'>[免费注册]</a>          " +
    "           </li>                                                                                              " +
    "           <li class='loginout_info'></li>                                                                    " +
    "           <li class='nav_item navCenter'>                                                                    " +
    "               <a href='http://kstore.qianmi.com/customer/index.html' target='_blank'>                        " +
    "                   会员中心                                                                                   " +
    "                   <s></s>                                                                                    " +
    "               </a>                                                                                           " +
    "               <div class='navInfo'>                                                                          " +
    "                   <a href='http://kstore.qianmi.com/customer/myorder.html' target='_blank'>我的订单</a>      " +
    "               </div>                                                                                         " +
    "           </li>                                                                                              " +
    "           <li class='nav_item'>                                                                              " +
    "               <a href='javascript:;' onclick='addToFavorite('福气商城');'>加入收藏</a>                       " +
    "           </li>                                                                                              " +
    "           <li class='nav_item'>                                                                              " +
    "               <a href='javascript:;' onclick='shareUrl();'>分享给好友</a>                                    " +
    "           </li>                                                                                              " +
    "       </ul>                                                                                                  " +
    "   </div>                                                                                                     " +
    "   <div class='slot slot_headerTop02'></div>                                                                  " +
    " </div>";



var topBarRight =
    "       <div class='bh-mask'></div>                                                                                      "+ 
    "   <div id='ctDia' class='bh-dialog dia0'>                                                                              "+
    "       <div class='dia-tit'>                                                                                            "+
    "           <h4>加入收藏</h4>                                                                                            "+
    "           <a class='dia-close' href='javascript:;' onclick='clss(this)'></a>                                           "+
    "       </div>                                                                                                           "+
    "       <div class='dia-cont'>                                                                                           "+
    "           <p style='text-align: center;line-height:100px;'>请使用菜单栏或Ctrl+D进行添加！</p>                          "+
    "       </div>                                                                                                           "+
    "       <div class='dia-btn'>                                                                                            "+
    "           <a href='javascript:;' onclick='clss(this)'>确定</a>                                                         "+
    "       </div>                                                                                                           "+
    "   </div>                                                                                                               "+
    "   <div id='ctDia' class='bh-dialog dia101'>                                                                            "+
    "       <div class='dia-tit'>                                                                                            "+
    "           <h4>分享好友</h4>                                                                                            "+
    "           <a class='dia-close' href='javascript:;' onclick='clss(this)'></a>                                           "+
    "       </div>                                                                                                           "+
    "       <div class='dia-cont'>                                                                                           "+
    "           <div class='dia_collect_intro tc pt30' style='text-align: center;padding-top: 30px;'>                        "+
    "               <span id='content' style='font-size:16px'></span>                                                        "+
    "           </div>                                                                                                       "+
    "           <div class='dia-btn' style='padding-top: 30px;'>                                                             "+
    "               <a id='copy' data-clipboard-target='content' href='javascript:;'>复制</a>                                "+
    "               <a onclick='clss(this)' href='javascript:;'>取消</a>                                                     "+
    "               <br>                                                                                                     "+
    "               <span style='color: red; font-size:12px'>亲！如果您的好友成功注册为会员，会有积分送给您哦！</span>       "+
    "           </div>                                                                                                       "+
    "           <!--/dia_ops-->                                                                                              "+
    "       </div>                                                                                                           "+
    "       <!--/dia_cont-->                                                                                                 "+
    "   </div>                                                                                                               "+
    "   <!--/dialog-->                                                                                                       "+
    "   <div id='ctDia' class='bh-dialog dia102'>                                                                            "+
    "       <div class='dia-tit'>                                                                                            "+
    "           <h4>登录提示</h4>                                                                                            "+
    "           <a class='dia-close' href='javascript:;' onclick='clss(this)'></a>                                           "+
    "       </div>                                                                                                           "+
    "       <div class='dia-cont'>                                                                                           "+
    "           <p style='text-align: center;line-height:100px;'>您未登录！现在确认要登录吗？</p>                            "+
    "       </div>                                                                                                           "+
    "       <div class='dia-btn'>                                                                                            "+
    "           <a onclick='login()' href='javascript:;'>确定</a>                                                            "+
    "           <a href='javascript:;' onclick='clss(this)'>取消</a>                                                         "+
    "       </div>                                                                                                           "+
    "   </div>                                                                                                               "+
    "   <!--/dialog-->                                                                                                       "+
    "   <div id='ctDia' class='bh-dialog dia103'>                                                                            "+
    "       <div class='dia-tit'>                                                                                            "+
    "           <h4>操作提示</h4>                                                                                            "+
    "           <a class='dia-close' href='javascript:;' onclick='clss(this)'></a>                                           "+
    "       </div>                                                                                                           "+
    "       <div class='dia-cont'>                                                                                           "+
    "           <p style='text-align: center'>复制成功！</p>                                                                 "+
    "       </div>                                                                                                           "+
    "       <div class='dia-btn'>                                                                                            "+
    "           <a href='javascript:;' onclick='clss()'>确定</a>                                                             "+
    "       </div>                                                                                                           "+
    "   </div>                                                                                                               "+
    "   <!--/dialog-->                                                                                                       "+
    "   <div class='bh-mask'></div>                                                                                          ";

//#endregion

