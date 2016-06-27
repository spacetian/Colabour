



// #region 网页底部

var sFootHtml =
"    <div class='service mt20 clearfix' style='padding-left:125px;display:inline-block;'>                                                                                                                                                           " +
"    	<dl class='svc_box svc_01 fl' style='background-image: url(http://114.215.114.9:10000/M00/00/41/ctdyCVV1WV6AFcBJAAAD3kUtfGc673.jpg);width:170px;'>                                                                    " +
"            <dt>购物指南</dt>                                                                                                                                                                                                " +
"            <dd>                                                                                                                                                                                                             " +
"            		<div><a href='/help/92' target='_blank'>购物流程</a></div>                                                                                                                                                " +
"            		<div><a href='/help/94' target='_blank'>账户安全</a></div>                                                                                                                                                " +
"            		<div><a href='/help/93' target='_blank'>联系客服</a></div>                                                                                                                                                " +
"            		<div><a href='/help/96' target='_blank'>会员介绍</a></div>                                                                                                                                                " +
"            	                                                                                                                                                                                                              " +
"            </dd>                                                                                                                                                                                                            " +
"        </dl>                                                                                                                                                                                                                " +
"    	<dl class='svc_box svc_01 fl' style='background-image: url(http://114.215.114.9:10000/M00/00/41/ctdyCVV1WiSAZ5ZHAAAC2s1p9pQ546.jpg);width:170px;'>                                                                    " +
"            <dt>配送方式</dt>                                                                                                                                                                                                " +
"            <dd>                                                                                                                                                                                                             " +
"            		<div><a href='/help/97' target='_blank'>千米快递</a></div>                                                                                                                                                " +
"            		<div><a href='/help/102' target='_blank'>配送服务查询</a></div>                                                                                                                                           " +
"            		<div><a href='/help/104' target='_blank'>上门自提</a></div>                                                                                                                                               " +
"            		<div><a href='/help/103' target='_blank'>物流费用收费标准</a></div>                                                                                                                                       " +
"            	                                                                                                                                                                                                              " +
"            </dd>                                                                                                                                                                                                            " +
"        </dl>                                                                                                                                                                                                                " +
"    	<dl class='svc_box svc_01 fl' style='background-image: url(http://114.215.114.9:10000/M00/00/41/ctdyCVV1WbiAN6hLAAACu78yzW0352.jpg);width:170px;'>                                                                    " +
"            <dt>支付方式</dt>                                                                                                                                                                                                " +
"            <dd>                                                                                                                                                                                                             " +
"            		<div><a href='/help/98' target='_blank'>货到付款</a></div>                                                                                                                                                " +
"            		<div><a href='/help/99' target='_blank'>在线支付</a></div>                                                                                                                                                " +
"            		<div><a href='/help/100' target='_blank'>分期付款</a></div>                                                                                                                                               " +
"            		<div><a href='/help/101' target='_blank'>邮局汇款</a></div>                                                                                                                                               " +
"            	                                                                                                                                                                                                              " +
"            </dd>                                                                                                                                                                                                            " +
"        </dl>                                                                                                                                                                                                                " +
"    	<dl class='svc_box svc_01 fl' style='background-image: url(http://114.215.114.9:10000/M00/00/41/ctdyCVV1WeOAVD4-AAAC2zJDsbo715.jpg);width:170px;'>                                                                    " +
"            <dt>售后服务</dt>                                                                                                                                                                                                " +
"            <dd>                                                                                                                                                                                                             " +
"            		<div><a href='/help/105' target='_blank'>售后政策</a></div>                                                                                                                                               " +
"            		<div><a href='/help/106' target='_blank'>价格保护</a></div>                                                                                                                                               " +
"            		<div><a href='/help/107' target='_blank'>退单说明</a></div>                                                                                                                                               " +
"            		<div><a href='/help/108' target='_blank'>取消订单</a></div>                                                                                                                                               " +
"            	                                                                                                                                                                                                              " +
"            </dd>                                                                                                                                                                                                            " +
"        </dl>                                                                                                                                                                                                                " +
"    	<dl class='svc_box svc_01 fl' style='background-image: url(http://114.215.114.9:10000/M00/00/41/ctdyCVV1WgCANoc1AAAC2t38x1M813.jpg);width:170px;'>                                                                    " +
"            <dt>联系我们</dt>                                                                                                                                                                                                " +
"            <dd>                                                                                                                                                                                                             " +
"            		<div><a href='/help/109' target='_blank'>商家入驻</a></div>                                                                                                                                               " +
"            		<div><a href='/help/110' target='_blank'>营销中心</a></div>                                                                                                                                               " +
"            		<div><a href='/help/111' target='_blank'>关于我们</a></div>                                                                                                                                               " +
"            		<div><a href='/help/91' target='_blank'>广告服务</a></div>                                                                                                                                                " +
"            	                                                                                                                                                                                                              " +
"            </dd>                                                                                                                                                                                                            " +
"        </dl>                                                                                                                                                                                                                " +
"    </div><!--/service-->                                                                                                                                                                                                    " +
"                                                                                                                                                                                                                             " +
"    <div class='footer mt20'>                                                                                                                                                                                                " +
"        <ul class='ft_links tc'>                                                                                                                                                                                             " +
"        </ul><!--/ft_links-->                                                                                                                                                                                                " +
"                                                                                                                                                                                                                             " +
"        <div style='margin: 15px 0px;' id='bq'>                                                                                                                                                                              " +
"        <a style='color:#666666;font-family:tahoma, arial, 宋体;line-height:normal;text-align:center;background-color:#FFFFFF;'> </a>                                                                                        " +
"        <span style='color:#666666;font-family:tahoma, arial, 宋体;line-height:normal;text-align:center;background-color:#FFFFFF;'> </span>                                                                                  " +
"            <ul class='ft_links tc'                                                                                                                                                                                          " +
"                style='color:#666666;font-family:tahoma, arial, 宋体;line-height:normal;text-align:center;margin:0px;padding:0px;list-style:none;background-color:#FFFFFF;'>                                                 " +
"               <a></a>                                                                                                                                                                                                       " +
"               <li style='margin:0px 5px;padding:0px;display:inline-block;zoom:1;'>                                                                                                                                          " +
"	                <a href='http://www.baidu.com'></a><a href='http://www.qianmi.com' target='_blank'>关于我们</a>                                                                                                           " +
"               </li>                                                                                                                                                                                                         " +
"           |                                                                                                                                                                                                                 " +
"               <li style='margin:0px 5px;padding:0px;display:inline-block;zoom:1;'>                                                                                                                                          " +
"	                <a href='http://www.qianmi.com' target='_blank'>联系我们</a>                                                                                                                                              " +
"               </li>                                                                                                                                                                                                         " +
"           |                                                                                                                                                                                                                 " +
"               <li style='margin:0px 5px;padding:0px;display:inline-block;zoom:1;'>                                                                                                                                          " +
"	                <a href='http://www.qianmi.com' target='_blank'>人才招聘</a>                                                                                                                                              " +
"               </li>                                                                                                                                                                                                         " +
"           |                                                                                                                                                                                                                 " +
"               <li style='margin:0px 5px;padding:0px;display:inline-block;zoom:1;'>                                                                                                                                          " +
"	                <a href='http://www.qianmi.com' target='_blank'>商家入驻</a>                                                                                                                                              " +
"               </li>                                                                                                                                                                                                         " +
"           |                                                                                                                                                                                                                 " +
"               <li style='margin:0px 5px;padding:0px;display:inline-block;zoom:1;'>                                                                                                                                          " +
"	                <a href='http://www.qianmi.com' target='_blank'>广告服务</a>                                                                                                                                              " +
"               </li>                                                                                                                                                                                                         " +
"           |                                                                                                                                                                                                                 " +
"               <li style='margin:0px 5px;padding:0px;display:inline-block;zoom:1;'>                                                                                                                                          " +
"	                <a href='http://www.qianmi.com' target='_blank'>手机千米</a>                                                                                                                                              " +
"               </li>                                                                                                                                                                                                         " +
"           |                                                                                                                                                                                                                 " +
"               <li style='margin:0px 5px;padding:0px;display:inline-block;zoom:1;'>                                                                                                                                          " +
"	                <a href='http://114.215.114.9:7700/toFriendLink.html' target='_blank'>友情链接</a>                                                                                                                        " +
"               </li>                                                                                                                                                                                                         " +
"           |                                                                                                                                                                                                                 " +
"               <li style='margin:0px 5px;padding:0px;display:inline-block;zoom:1;'>                                                                                                                                          " +
"	                <a href='http://www.qianmi.com' target='_blank'>销售联盟</a>                                                                                                                                              " +
"               </li>                                                                                                                                                                                                         " +
"           |                                                                                                                                                                                                                 " +
"              <li style='margin:0px 5px;padding:0px;display:inline-block;zoom:1;'>                                                                                                                                           " +
"	                <a href='http://www.qianmi.com' target='_blank'>English Site</a>                                                                                                                                          " +
"              </li>                                                                                                                                                                                                          " +
"            </ul>                                                                                                                                                                                                            " +
"            <div class='copyright tc mt15' style='color:#666666;font-family:tahoma, arial, 宋体;line-height:normal;text-align:center;margin:15px 0px 0px;padding:0px;background-color:#FFFFFF;'>                             " +
"              <p class='mb20' style='margin-top:0px;margin-bottom:20px;padding:0px;'>                                                                                                                                        " +
"	                南京市公安局朝阳分局备案编号110105014669&nbsp;&nbsp;|&nbsp;&nbsp;京ICP证070359号&nbsp;&nbsp;|&nbsp;&nbsp;互联网药品信息服务资格证编号(京)-非经营性-2011-0034                                              " +
"              </p>                                                                                                                                                                                                           " +
"              <p class='mb20' style='margin-top:0px;margin-bottom:20px;padding:0px;'>                                                                                                                                        " +
"	                Copyright&nbsp;©&nbsp;2004-2014 &nbsp;江苏千米网络科技有限公司&nbsp;版权所有                                                                                                                              " +
"              </p>                                                                                                                                                                                                           " +
"              <p>                                                                                                                                                                                                            " +
"	                <br>                                                                                                                                                                                                      " +
"              </p>                                                                                                                                                                                                           " +
"            </div>                                                                                                                                                                                                           " +
"            <div class='auth_wp tc' style='color:#666666;font-family:tahoma, arial, 宋体;line-height:normal;text-align:center;margin:0px;padding:0px;background-color:#FFFFFF;'>                                             " +
"                <a href='http://www.baidu.com' target='_blank' rel='nofollow' style='margin:0px 5px;padding:0px;color:#666666;text-decoration:none;font-family:Arial, Verdana, 宋体;'>                                       " +
"                <img alt='经营性网站备案中心' src='http://img10.360buyimg.com/da/20110329/108_40_zZOKnl.gif' class='err-product'                                                                                             " +
"                    style='margin:0px;padding:0px;vertical-align:middle;background:url(http://misc.360buyimg.com/lib/skin/e/i/error-jd.gif) 50% 50% no-repeat;' height='40' width='108'></a>                                 " +
"                 <a href='https://ss.cnnic.cn/verifyseal.dll?sn=2008070300100000031&amp;ct=df&amp;pa=294005' tabindex='-1' id='urlknet' target='_blank' rel='nofollow'                                                       " +
"                     style='margin:0px 5px;padding:0px;color:#666666;text-decoration:none;font-family:Arial, Verdana, 宋体;'>                                                                                                " +
"                        <img alt='可信网站' name='CNNIC_seal'                                                                                                                                                                " +
"                        src='http://img11.360buyimg.com/da/g8/M03/0C/0E/rBEHaFCFC5QIAAAAAAASVQX9RAYAACb2wHUV1kAABJt760.gif'                                                                                                  " +
"                        class='err-product'                                                                                                                                                                                  " +
"                        style='margin:0px;padding:0px;vertical-align:middle;background:url(http://misc.360buyimg.com/lib/skin/e/i/error-jd.gif) 50% 50% no-repeat;' height='40' border='true' width='108'>                   " +
"                </a>                                                                                                                                                                                                         " +
"                <a href='http://www.bj.cyberpolice.cn/index.do' target='_blank' rel='nofollow' style='margin:0px 5px;padding:0px;color:#666666;text-decoration:none;font-family:Arial, Verdana, 宋体;'>                      " +
"                <img alt='朝阳网络警察' src='http://img12.360buyimg.com/da/g5/M02/0D/17/rBEIDE_nzcIIAAAAAAB30mYXo5QAACrhACj22IAAHfq378.png' class='err-product'                                                              " +
"                style='margin:0px;padding:0px;vertical-align:middle;background:url(http://misc.360buyimg.com/lib/skin/e/i/error-jd.gif) 50% 50% no-repeat;' height='40' width='108'></a>                                     " +
"                <a href='https://search.szfw.org/cert/l/CX20120111001803001836' target='_blank' rel='nofollow' style='margin:0px 5px;padding:0px;color:#666666;text-decoration:none;font-family:Arial, Verdana, 宋体;'>      " +
"   '                <img src='http://img13.360buyimg.com/da/20120221/112_40_WvArIl.png' class='err-product'                                                                                                                  " +
"'   style='margin:0px;padding:0px;vertical-align:middle;background:url(http://misc.360buyimg.com/lib/skin/e/i/error-jd.gif) 50% 50% no-repeat;' height='40' width='112'></a>                                                 " +
"            </div>                                                                                                                                                                                                           " +
"                                                                                                                                                                                                                             " +
"	    <ul style='text-align:center;margin-top:20px;'>                                                                                                                                                                       " +
"    	<!--站长统计-->                                                                                                                                                                                                       " +
"        	<li>                                                                                                                                                                                                              " +
"        	</li>                                                                                                                                                                                                             " +
"    </ul>                                                                                                                                                                                                                    " +
"    	</div>                                                                                                                                                                                                                " +
"    	                                                                                                                                                                                                                      " +
"    </div><!--/footer-->                                                                                                                                                                                                     ";


//#endregion    


var productListData =
    [
        {
            "categoryId": 1,
            "categoryName": "手机",
            "goodId": 1,
            "goodName": "测试商品1",
            "leftNum": 97,
            "lotteryId": 5,
            "pictureUrl": "test",
            "price": 100,
            "salesNum": 3,
            "totalNum": 100
        },
        {
            "categoryId": 1,
            "categoryName": "手机",
            "goodId": 1,
            "goodName": "测试商品1",
            "leftNum": 100,
            "lotteryId": 15,
            "pictureUrl": "test",
            "price": 100,
            "salesNum": 0,
            "totalNum": 100
        },
        {
            "categoryId": 1,
            "categoryName": "手机",
            "goodId": 1,
            "goodName": "测试商品1",
            "leftNum": 100,
            "lotteryId": 16,
            "pictureUrl": "test",
            "price": 100,
            "salesNum": 0,
            "totalNum": 100
        },
        {
            "categoryId": 1,
            "categoryName": "手机",
            "goodId": 1,
            "goodName": "测试商品1",
            "leftNum": 100,
            "lotteryId": 17,
            "pictureUrl": "test",
            "price": 100,
            "salesNum": 0,
            "totalNum": 100
        },
        {
            "categoryId": 1,
            "categoryName": "手机",
            "goodId": 1,
            "goodName": "测试商品1",
            "leftNum": 100,
            "lotteryId": 18,
            "pictureUrl": "test",
            "price": 100,
            "salesNum": 0,
            "totalNum": 100
        },
        {
            "categoryId": 1,
            "categoryName": "手机",
            "goodId": 1,
            "goodName": "测试商品1",
            "leftNum": 100,
            "lotteryId": 19,
            "pictureUrl": "test",
            "price": 100,
            "salesNum": 0,
            "totalNum": 100
        },
        {
            "categoryId": 1,
            "categoryName": "手机",
            "goodId": 1,
            "goodName": "测试商品1",
            "leftNum": 100,
            "lotteryId": 20,
            "pictureUrl": "test",
            "price": 100,
            "salesNum": 0,
            "totalNum": 100
        },
        {
            "categoryId": 1,
            "categoryName": "手机",
            "goodId": 1,
            "goodName": "测试商品1",
            "leftNum": 100,
            "lotteryId": 21,
            "pictureUrl": "test",
            "price": 100,
            "salesNum": 0,
            "totalNum": 100
        },
        {
            "categoryId": 1,
            "categoryName": "手机",
            "goodId": 1,
            "goodName": "测试商品1",
            "leftNum": 100,
            "lotteryId": 22,
            "pictureUrl": "test",
            "price": 100,
            "salesNum": 0,
            "totalNum": 100
        },
        {
            "categoryId": 1,
            "categoryName": "手机",
            "goodId": 1,
            "goodName": "测试商品1",
            "leftNum": 100,
            "lotteryId": 23,
            "pictureUrl": "test",
            "price": 100,
            "salesNum": 0,
            "totalNum": 100
        },
        {
            "categoryId": 1,
            "categoryName": "手机",
            "goodId": 1,
            "goodName": "测试商品1",
            "leftNum": 100,
            "lotteryId": 24,
            "pictureUrl": "test",
            "price": 100,
            "salesNum": 0,
            "totalNum": 100
        },
        {
            "categoryId": 1,
            "categoryName": "手机",
            "goodId": 1,
            "goodName": "测试商品1",
            "leftNum": 100,
            "lotteryId": 25,
            "pictureUrl": "test",
            "price": 100,
            "salesNum": 0,
            "totalNum": 100
        },
        {
            "categoryId": 1,
            "categoryName": "手机",
            "goodId": 1,
            "goodName": "测试商品1",
            "leftNum": 99,
            "lotteryId": 26,
            "pictureUrl": "test",
            "price": 100,
            "salesNum": 1,
            "totalNum": 100
        },
        {
            "categoryId": 1,
            "categoryName": "手机",
            "goodId": 1,
            "goodName": "测试商品1",
            "leftNum": 100,
            "lotteryId": 27,
            "pictureUrl": "test",
            "price": 100,
            "salesNum": 0,
            "totalNum": 100
        },
        {
            "categoryId": 1,
            "categoryName": "手机",
            "goodId": 1,
            "goodName": "测试商品1",
            "leftNum": 100,
            "lotteryId": 28,
            "pictureUrl": "test",
            "price": 100,
            "salesNum": 0,
            "totalNum": 100
        },
        {
            "categoryId": 2,
            "categoryName": "服饰",
            "goodId": 2,
            "goodName": "测试商品2",
            "leftNum": 2147483647,
            "lotteryId": 4,
            "pictureUrl": "test",
            "price": 500000,
            "salesNum": 0,
            "totalNum": 2147483647
        },
        {
            "categoryId": 2,
            "categoryName": "服饰",
            "goodId": 2,
            "goodName": "测试商品2",
            "leftNum": 500000,
            "lotteryId": 6,
            "pictureUrl": "test",
            "price": 500000,
            "salesNum": 0,
            "totalNum": 500000
        },
        {
            "categoryId": 2,
            "categoryName": "服饰",
            "goodId": 2,
            "goodName": "测试商品2",
            "leftNum": 500000,
            "lotteryId": 7,
            "pictureUrl": "test",
            "price": 500000,
            "salesNum": 0,
            "totalNum": 500000
        },
        {
            "categoryId": 2,
            "categoryName": "服饰",
            "goodId": 2,
            "goodName": "测试商品2",
            "leftNum": 500000,
            "lotteryId": 8,
            "pictureUrl": "test",
            "price": 500000,
            "salesNum": 0,
            "totalNum": 500000
        },
        {
            "categoryId": 2,
            "categoryName": "服饰",
            "goodId": 2,
            "goodName": "测试商品2",
            "leftNum": 500000,
            "lotteryId": 9,
            "pictureUrl": "test",
            "price": 500000,
            "salesNum": 0,
            "totalNum": 500000
        },
        {
            "categoryId": 2,
            "categoryName": "服饰",
            "goodId": 2,
            "goodName": "测试商品2",
            "leftNum": 500000,
            "lotteryId": 10,
            "pictureUrl": "test",
            "price": 500000,
            "salesNum": 0,
            "totalNum": 500000
        },
        {
            "categoryId": 3,
            "categoryName": "日用品",
            "goodId": 3,
            "goodName": "测试商品3",
            "leftNum": 50000,
            "lotteryId": 13,
            "pictureUrl": "test",
            "price": 50000,
            "salesNum": 0,
            "totalNum": 50000
        },
        {
            "categoryId": 3,
            "categoryName": "日用品",
            "goodId": 3,
            "goodName": "测试商品3",
            "leftNum": 50000,
            "lotteryId": 14,
            "pictureUrl": "test",
            "price": 50000,
            "salesNum": 0,
            "totalNum": 50000
        }
    ];
