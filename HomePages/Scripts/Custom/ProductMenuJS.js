
$(document).ready(function () {

    $(".navLinks").append(sNavLinks); // 添加横向导航链接

    $(".list.dropdown-menu").append(sDropdownMenu);
    $(".showlist").append(sDropdownItems);
    ShowMenuItems();

})


/* 鼠标滑过全部商品分类时的事件*/
function ShowMenuItems() {
    $(".dropdown-menu li:gt(6)").hide();
    $(".showlist").mouseover(function () {
        $(".dropdown-menu li:gt(6)").show();
    }).mouseout(function () {
        $(".dropdown-menu li:gt(6)").hide();
    });
    var t = "";
    $(".dropdown-menu li").mouseover(function () {
        var cur = $(this);
        var index = $(this).index();
        var dl = $(".dropdown-menu").children("li");
        t = setTimeout(function () {
            dl.removeClass("hover").eq(index).addClass("hover");
            $(".menuView:visible").hide();
            $(".menuView").eq(index).show();
        }, 100);
    }).mouseout(function () {
        clearTimeout(t);
    });
    function hideSort() {
        $(".dropdown-menu").find(".hover").removeClass("hover");
        $(".menuView:visible").hide();
    };
    $(".showlist").mouseleave(function () {
        hideSort();
    });
    $(".menucat").mouseover(function () {
        hideSort();
    });
}

var sNavLinks =
 "      <ul>                                                                                                           " +
 "          <li>                                                                                                       " +
 "              <a class='navLink' onclick='clickNav('subject/40','1')' href='javascript:;'>婴儿玩具</a>               " +
 "          </li>                                                                                                      " +
 "          <li>                                                                                                       " +
 "              <a class='navLink' onclick='clickNav('pcapp/download.html','2')' href='javascript:;'>APP下载</a>       " +
 "          </li>                                                                                                      " +
 "          <li>                                                                                                       " +
 "              <a class='navLink' onclick='clickNav('subject/43','3')' href='javascript:;'>精品男装</a>               " +
 "          </li>                                                                                                      " +
 "          <li>                                                                                                       " +
 "              <a class='navLink' onclick='clickNav('subject/44','4')' href='javascript:;'>电脑办公</a>               " +
 "          </li>                                                                                                      " +
 "          <li>                                                                                                       " +
 "              <a class='navLink' onclick='clickNav('subject/49','5')' href='javascript:;'>时尚手机</a>               " +
 "          </li>                                                                                                      " +
 "          <li>                                                                                                       " +
 "              <a class='navLink' onclick='clickNav('marketingrushlist-1.html','6')' href='javascript:;'>抢购</a>     " +
 "          </li>                                                                                                      " +
 "          <li>                                                                                                       " +
 "              <a class='navLink' onclick='clickNav('grouponlist-1.html','7')' href='javascript:;'>团购</a>           " +
 "          </li>                                                                                                      " +
 "          <li>                                                                                                       " +
 "              <a class='navLink' href='Index.html'>一元夺宝</a>                                                      " +
 "          </li>                                                                                                      " +
 "      </ul>                                                                                                          ";


var sDropdownMenu =
     "  <li class=''>                                                                                               "+ 
     "      <a href='http://kstore.qianmi.com/list/3854-3854.html' target='_blank'>电脑办公</a>                     "+
     "      <div class='links'>                                                                                     "+
     "          <a href='http://kstore.qianmi.com/list/3856-3854.html' target='_blank'>笔记本</a>                   "+
     "          <a href='http://kstore.qianmi.com/list/3856-3854.html' target='_blank'>笔记本</a>                   "+
     "          <a href='http://kstore.qianmi.com/list/3873-3854.html' target='_blank'>SSD固态硬盘</a>              "+
     "          <a href='http://kstore.qianmi.com/list/3914-3854.html' target='_blank'>路由器</a>                   "+
     "      </div>                                                                                                  "+
     "  </li>                                                                                                       "+
     "  <li class=''>                                                                                               "+
     "      <a href='http://kstore.qianmi.com/list/4632-4632.html' target='_blank'>钟表</a>                         "+
     "      <div class='links'>                                                                                     "+
     "          <a href='http://kstore.qianmi.com/list/4637-4632.html' target='_blank'>天梭</a>                     "+
     "          <a href='http://kstore.qianmi.com/list/4648-4632.html' target='_blank'>李维斯</a>                   "+
     "          <a href='http://kstore.qianmi.com/list/4649-4632.html' target='_blank'>卡西欧</a>                   "+
     "          <a href='http://kstore.qianmi.com/list/4642-4632.html' target='_blank'>劳力士</a>                   "+
     "      </div>                                                                                                  "+
     "  </li>                                                                                                       "+
     "  <li class=''>                                                                                               "+
     "      <a href='http://kstore.qianmi.com/list/4670-4670.html' target='_blank'>珠宝首饰</a>                     "+
     "      <div class='links'></div>                                                                               "+
     "  </li>                                                                                                       "+
     "  <li class=''>                                                                                               "+
     "      <a href='http://kstore.qianmi.com/list/4358-4358.html' target='_blank'>个护化妆</a>                     "+
     "      <a href='http://kstore.qianmi.com/list/4457-4457.html' target='_blank'>母婴</a>                         "+
     "      <a href='http://kstore.qianmi.com/list/0-0.html' target='_blank'></a>                                   "+
     "      <a href='http://kstore.qianmi.com/list/0-0.html' target='_blank'></a>                                   "+
     "      <div class='links'>                                                                                     "+
     "          <a href='http://kstore.qianmi.com/list/4374-4358.html' target='_blank'>爽肤水</a>                   "+
     "          <a href='http://kstore.qianmi.com/list/4390-4358.html' target='_blank'>香皂</a>                     "+
     "          <a href='http://kstore.qianmi.com/list/4416-4358.html' target='_blank'>洗发</a>                     "+
     "          <a href='http://kstore.qianmi.com/list/4439-4358.html' target='_blank'>香水</a>                     "+
     "      </div>                                                                                                  "+
     "  </li>                                                                                                       "+
     "  <li>                                                                                                        "+
     "      <a href='http://kstore.qianmi.com/list/3886-3886.html' target='_blank'>服装内衣</a>                     "+
     "      <a href='http://kstore.qianmi.com/list/0-0.html' target='_blank'></a>                                   "+
     "      <a href='http://kstore.qianmi.com/list/0-0.html' target='_blank'></a>                                   "+
     "      <a href='http://kstore.qianmi.com/list/0-0.html' target='_blank'></a>                                   "+
     "      <div class='links'>                                                                                     "+
     "          <a href='http://kstore.qianmi.com/list/3892-3886.html' target='_blank'>衬衫</a>                     "+
     "          <a href='http://kstore.qianmi.com/list/4322-3886.html' target='_blank'>POLO衫</a>                   "+
     "          <a href='http://kstore.qianmi.com/list/3901-3886.html' target='_blank'>牛仔裤</a>                   "+
     "          <a href='http://kstore.qianmi.com/list/3997-3886.html' target='_blank'>游泳镜</a>                   "+
     "      </div>                                                                                                  "+
     "  </li>                                                                                                       "+
     "  <li>                                                                                                        "+
     "      <a href='http://kstore.qianmi.com/list/4159-4159.html' target='_blank'>食品饮料、保健食品</a>           "+
     "      <a href='http://kstore.qianmi.com/list/0-0.html' target='_blank'></a>                                   "+
     "      <a href='http://kstore.qianmi.com/list/0-0.html' target='_blank'></a>                                   "+
     "      <div class='links'>                                                                                     "+
     "          <a href='http://kstore.qianmi.com/list/4170-4159.html' target='_blank'>饼干蛋糕</a>                 "+
     "          <a href='http://kstore.qianmi.com/list/4196-4159.html' target='_blank'>坚果炒货</a>                 "+
     "          <a href='http://kstore.qianmi.com/list/4213-4159.html' target='_blank'>铁观音</a>                   "+
     "      </div>                                                                                                  "+
     "  </li>                                                                                                       "+
     "  <li>                                                                                                        "+
     "      <a href='http://kstore.qianmi.com/list/4258-4258.html' target='_blank'>礼品箱包</a>                     "+
     "      <a href='http://kstore.qianmi.com/list/4225-4225.html' target='_blank'>鞋靴</a>                         "+
     "      <a href='http://kstore.qianmi.com/list/0-0.html' target='_blank'></a>                                   "+
     "      <a href='http://kstore.qianmi.com/list/0-0.html' target='_blank'></a>                                   "+
     "      <div class='links'>                                                                                     "+
     "          <a href='http://kstore.qianmi.com/list/4267-4258.html' target='_blank'>单肩包</a>                   "+
     "          <a href='http://kstore.qianmi.com/list/4266-4258.html' target='_blank'>手拿包/晚宴包</a>            "+
     "          <a href='http://kstore.qianmi.com/list/4274-4258.html' target='_blank'>男士手包</a>                 "+
     "          <a href='http://kstore.qianmi.com/list/4290-4258.html' target='_blank'>工艺礼品</a>                 "+
     "      </div>                                                                                                  "+
     "  </li>                                                                                                       "+
     "  <li class='' style='display: none;'>                                                                        "+
     "      <a href='http://kstore.qianmi.com/list/4017-4017.html' target='_blank'>手机、配件</a>                   "+
     "      <a href='http://kstore.qianmi.com/list/4066-4066.html' target='_blank'>数码</a>                         "+
     "      <a href='http://kstore.qianmi.com/list/0-0.html' target='_blank'></a>                                   "+
     "      <a href='http://kstore.qianmi.com/list/0-0.html' target='_blank'></a>                                   "+
     "      <div class='links'>                                                                                     "+
     "          <a href='http://kstore.qianmi.com/list/4049-4017.html' target='_blank'>蓝牙耳机</a>                 "+
     "          <a href='http://kstore.qianmi.com/list/4062-4017.html' target='_blank'>iPhone配件</a>               "+
     "          <a href='http://kstore.qianmi.com/list/4073-4066.html' target='_blank'>数码相机</a>                 "+
     "      </div>                                                                                                  "+
     "  </li>                                                                                                       "+
     "  <li style='display: none;'>                                                                                 "+
     "      <a href='http://kstore.qianmi.com/list/4023-4023.html' target='_blank'>家用电器</a>                     "+
     "      <a href='http://kstore.qianmi.com/list/4571-4571.html' target='_blank'>厨具</a>                         "+
     "      <div class='links'>                                                                                     "+
     "          <a href='http://kstore.qianmi.com/list/4031-4023.html' target='_blank'>平板电视</a>                 "+
     "          <a href='http://kstore.qianmi.com/list/4032-4023.html' target='_blank'>空调</a>                     "+
     "          <a href='http://kstore.qianmi.com/list/4105-4023.html' target='_blank'>电风扇</a>                   "+
     "      </div>                                                                                                  "+
     "  </li>                                                                                                       ";


var sDropdownItems =
      "     <div class='menuView hide' id='submenu-1' style='display: none;'>                                                " +
      "     <div class='hotLinks'></div>                                                                                     " +
      "     <ul>                                                                                                             " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/3855-3854.html' target='_blank'>                              " +
      "                     电脑整机                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/3856-3854.html' target='_blank'>笔记本</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3862-3854.html' target='_blank'>超级本</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3863-3854.html' target='_blank'>游戏本</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3864-3854.html' target='_blank'>平板电脑</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3865-3854.html' target='_blank'>平板电脑配件</a>              " +
      "                 <a href='http://kstore.qianmi.com/list/3866-3854.html' target='_blank'>台式机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3867-3854.html' target='_blank'>服务器/工作站</a>             " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/3857-3854.html' target='_blank'>                              " +
      "                     电脑配件                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/3869-3854.html' target='_blank'>CPU</a>                       " +
      "                 <a href='http://kstore.qianmi.com/list/3870-3854.html' target='_blank'>主板</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3871-3854.html' target='_blank'>显卡</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3872-3854.html' target='_blank'>硬盘</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3873-3854.html' target='_blank'>SSD固态硬盘</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/3874-3854.html' target='_blank'>内存</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3875-3854.html' target='_blank'>机箱</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3876-3854.html' target='_blank'>电源</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3877-3854.html' target='_blank'>显示器</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3878-3854.html' target='_blank'>刻录机/光驱</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/3879-3854.html' target='_blank'>散热器</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3880-3854.html' target='_blank'>声卡/扩展卡</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/3881-3854.html' target='_blank'>装机配件</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3882-3854.html' target='_blank'>组装电脑</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/3858-3854.html' target='_blank'>                              " +
      "                     外设产品                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/3883-3854.html' target='_blank'>移动硬盘</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3884-3854.html' target='_blank'>U盘</a>                       " +
      "                 <a href='http://kstore.qianmi.com/list/3885-3854.html' target='_blank'>鼠标</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3899-3854.html' target='_blank'>键盘</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3900-3854.html' target='_blank'>鼠标垫</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3902-3854.html' target='_blank'>摄像头</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3904-3854.html' target='_blank'>手写板</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3905-3854.html' target='_blank'>外置盒</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3906-3854.html' target='_blank'>插座</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3908-3854.html' target='_blank'>线缆</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3909-3854.html' target='_blank'>UPS电源</a>                   " +
      "                 <a href='http://kstore.qianmi.com/list/3910-3854.html' target='_blank'>电脑工具</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3911-3854.html' target='_blank'>游戏设备</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3912-3854.html' target='_blank'>电玩</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3913-3854.html' target='_blank'>电脑清洁</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/3859-3854.html' target='_blank'>                              " +
      "                     网络产品                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/3914-3854.html' target='_blank'>路由器</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3915-3854.html' target='_blank'>网卡</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3916-3854.html' target='_blank'>交换机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3917-3854.html' target='_blank'>网络存储</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3918-3854.html' target='_blank'>4G/3G上网</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/3919-3854.html' target='_blank'>网络盒子</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3922-3854.html' target='_blank'>网络配件</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/3860-3854.html' target='_blank'>                              " +
      "                     办公设备                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/3926-3854.html' target='_blank'>投影机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3929-3854.html' target='_blank'>投影配件</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3931-3854.html' target='_blank'>多功能一体机</a>              " +
      "                 <a href='http://kstore.qianmi.com/list/3932-3854.html' target='_blank'>打印机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3934-3854.html' target='_blank'>传真设备</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3935-3854.html' target='_blank'>验钞/点钞机</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/3936-3854.html' target='_blank'>扫描设备</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3939-3854.html' target='_blank'>复合机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3949-3854.html' target='_blank'>碎纸机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3951-3854.html' target='_blank'>考勤机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3953-3854.html' target='_blank'>收款/POS机</a>                " +
      "                 <a href='http://kstore.qianmi.com/list/3954-3854.html' target='_blank'>会议音频视频</a>              " +
      "                 <a href='http://kstore.qianmi.com/list/3955-3854.html' target='_blank'>保险柜</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3956-3854.html' target='_blank'>装订/封装机</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/3957-3854.html' target='_blank'>安防监控</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3958-3854.html' target='_blank'>办公家具</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3959-3854.html' target='_blank'>白板</a>                      " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/3861-3854.html' target='_blank'>                              " +
      "                     文具/耗材                                                                                        " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/3987-3854.html' target='_blank'>硒鼓/墨粉</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/3988-3854.html' target='_blank'>墨盒</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3990-3854.html' target='_blank'>色带</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3993-3854.html' target='_blank'>纸类</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3994-3854.html' target='_blank'>办公文具</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3996-3854.html' target='_blank'>学生文具</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4000-3854.html' target='_blank'>财会用品</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4002-3854.html' target='_blank'>文件管理</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4005-3854.html' target='_blank'>本册/便签</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4007-3854.html' target='_blank'>计算器</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4010-3854.html' target='_blank'>笔类</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4012-3854.html' target='_blank'>画具画材</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4014-3854.html' target='_blank'>刻录碟片/附件</a>             " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "     </ul>                                                                                                            " +
      "     <div class='menuImg'>                                                                                            " +
      "         <ul class='bd-list'>                                                                                         " +
      "             <li>                                                                                                     " +
      "                 <a href='http://www.baidu.com/' target='_blank'>                                                     " +
      "                     <img src='Images/ctdyCVV2TVqAAvyBAAAYGZdAvpw465.jpg'>                                            " +
      "                 </a>                                                                                                 " +
      "             </li>                                                                                                    " +
      "             <li>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/item/3918.html' target='_blank'>                                   " +
      "                     <img src='Images/ctdyCVV2TvKAMtvLAAAJi_cFLag120.jpg'>                                            " +
      "                 </a>                                                                                                 " +
      "             </li>                                                                                                    " +
      "             <li>                                                                                                     " +
      "                 <a href='' target='_blank'>                                                                          " +
      "                     <img src='Images/ctdyCVV2Ts2AGZhUAAAK06LkAt0582.jpg'>                                            " +
      "                 </a>                                                                                                 " +
      "             </li>                                                                                                    " +
      "             <li>                                                                                                     " +
      "                 <a href='' target='_blank'>                                                                          " +
      "                     <img src='Images/ctdyCVV2U2OADiqdAAAJ8ivldNc111.jpg'>                                            " +
      "                 </a>                                                                                                 " +
      "             </li>                                                                                                    " +
      "         </ul>                                                                                                        " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "         <a class='bd-pro' href='http://www.baidu.com/' target='_blank'>                                              " +
      "             <img src='Images/ctdyCVVuxkaASFLYAAAlHSo55Y8187.jpg' alt=''>                                             " +
      "         </a>                                                                                                         " +
      "     </div>                                                                                                           " +
      " </div>                                                                                                               " +
      " <div class='menuView hide' id='submenu-2' style='display: none;'>                                                    " +
      "     <div class='hotLinks'></div>                                                                                     " +
      "     <ul>                                                                                                             " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4633-4632.html' target='_blank'>                              " +
      "                     瑞士品牌                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4637-4632.html' target='_blank'>天梭</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4638-4632.html' target='_blank'>浪琴</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4639-4632.html' target='_blank'>美度</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4640-4632.html' target='_blank'>欧米茄</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4641-4632.html' target='_blank'>卡地亚</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4642-4632.html' target='_blank'>劳力士</a>                    " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4635-4632.html' target='_blank'>                              " +
      "                     日韩品牌                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4649-4632.html' target='_blank'>卡西欧</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4650-4632.html' target='_blank'>西铁城</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4651-4632.html' target='_blank'>精工</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4652-4632.html' target='_blank'>东方</a>                      " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4634-4632.html' target='_blank'>                              " +
      "                     欧美品牌                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4643-4632.html' target='_blank'>ck</a>                        " +
      "                 <a href='http://kstore.qianmi.com/list/4645-4632.html' target='_blank'>巴宝莉</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4644-4632.html' target='_blank'>阿玛尼</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4646-4632.html' target='_blank'>斯沃琪</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4647-4632.html' target='_blank'>guess</a>                     " +
      "                 <a href='http://kstore.qianmi.com/list/4648-4632.html' target='_blank'>李维斯</a>                    " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4636-4632.html' target='_blank'>                              " +
      "                     国内品牌                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4653-4632.html' target='_blank'>飞亚达</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4654-4632.html' target='_blank'>天王</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4655-4632.html' target='_blank'>罗西尼</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4655-4632.html' target='_blank'>罗西尼</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4656-4632.html' target='_blank'>海鸥</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4657-4632.html' target='_blank'>依波表</a>                    " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "     </ul>                                                                                                            " +
      "     <div class='menuImg'>                                                                                            " +
      "         <ul class='bd-list'></ul>                                                                                    " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "     </div>                                                                                                           " +
      " </div>                                                                                                               " +
      " <div class='menuView hide' id='submenu-3' style='display: none;'>                                                    " +
      "     <div class='hotLinks'></div>                                                                                     " +
      "     <ul>                                                                                                             " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4671-4670.html' target='_blank'>                              " +
      "                     珠宝                                                                                             " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4674-4670.html' target='_blank'>黄金吊坠</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4675-4670.html' target='_blank'>珍珠吊坠</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4677-4670.html' target='_blank'>翡翠玉石</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4674-4670.html' target='_blank'>黄金项链</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4672-4670.html' target='_blank'>                              " +
      "                     时尚饰品                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4678-4670.html' target='_blank'>木手串</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4679-4670.html' target='_blank'>清凉夏饰</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4680-4670.html' target='_blank'>银手镯</a>                    " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "     </ul>                                                                                                            " +
      "     <div class='menuImg'>                                                                                            " +
      "         <ul class='bd-list'></ul>                                                                                    " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "     </div>                                                                                                           " +
      " </div>                                                                                                               " +
      " <div class='menuView hide' id='submenu-4' style='display: none;'>                                                    " +
      "     <div class='hotLinks'></div>                                                                                     " +
      "     <ul>                                                                                                             " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4359-4358.html' target='_blank'>                              " +
      "                     面部护肤                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4365-4358.html' target='_blank'>清洁</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4366-4358.html' target='_blank'>护肤</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4367-4358.html' target='_blank'>面膜</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4368-4358.html' target='_blank'>剃须</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4369-4358.html' target='_blank'>套装</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4370-4358.html' target='_blank'>防晒隔离</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4371-4358.html' target='_blank'>T区护理</a>                   " +
      "                 <a href='http://kstore.qianmi.com/list/4372-4358.html' target='_blank'>眼部护理</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4373-4358.html' target='_blank'>精华露</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4374-4358.html' target='_blank'>爽肤水</a>                    " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4360-4358.html' target='_blank'>                              " +
      "                     身体护肤                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4375-4358.html' target='_blank'>沐浴</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4376-4358.html' target='_blank'>润肤</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4377-4358.html' target='_blank'>颈部</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4378-4358.html' target='_blank'>手足</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4379-4358.html' target='_blank'>纤体塑形</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4380-4358.html' target='_blank'>美胸</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4382-4358.html' target='_blank'>染发/造型</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4383-4358.html' target='_blank'>香薰精油</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4384-4358.html' target='_blank'>磨砂/浴盆</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4385-4358.html' target='_blank'>手工/香皂</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4389-4358.html' target='_blank'>磨砂膏</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4390-4358.html' target='_blank'>香皂</a>                      " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4361-4358.html' target='_blank'>                              " +
      "                     口腔护理                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4391-4358.html' target='_blank'>牙膏/牙粉</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4392-4358.html' target='_blank'>牙刷/压线</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4393-4358.html' target='_blank'>漱口水</a>                    " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4362-4358.html' target='_blank'>                              " +
      "                     女性护理                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4395-4358.html' target='_blank'>卫生巾</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4396-4358.html' target='_blank'>卫生护垫</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4398-4358.html' target='_blank'>私密护理</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4400-4358.html' target='_blank'>脱毛膏</a>                    " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4363-4358.html' target='_blank'>                              " +
      "                     洗发护发                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4416-4358.html' target='_blank'>洗发</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4417-4358.html' target='_blank'>护发</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4419-4358.html' target='_blank'>染发</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4427-4358.html' target='_blank'>造型</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4428-4358.html' target='_blank'>假发</a>                      " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4364-4358.html' target='_blank'>                              " +
      "                     香水彩妆                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4439-4358.html' target='_blank'>香水</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4440-4358.html' target='_blank'>底妆</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4442-4358.html' target='_blank'>腮红</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4443-4358.html' target='_blank'>眼部</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4445-4358.html' target='_blank'>唇部</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4446-4358.html' target='_blank'>美甲</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4448-4358.html' target='_blank'>美容工具</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4451-4358.html' target='_blank'>卸妆</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4453-4358.html' target='_blank'>眉笔</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4454-4358.html' target='_blank'>睫毛膏</a>                    " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4458-4457.html' target='_blank'>                              " +
      "                     奶粉                                                                                             " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4490-4457.html' target='_blank'>婴幼奶粉</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4504-4457.html' target='_blank'>成人奶粉</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "     </ul>                                                                                                            " +
      "     <div class='menuImg'>                                                                                            " +
      "         <ul class='bd-list'></ul>                                                                                    " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "     </div>                                                                                                           " +
      " </div>                                                                                                               " +
      " <div class='menuView hide' id='submenu-5'>                                                                           " +
      "     <div class='hotLinks'></div>                                                                                     " +
      "     <ul>                                                                                                             " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/3887-3886.html' target='_blank'>                              " +
      "                     女装                                                                                             " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/3891-3886.html' target='_blank'>T恤</a>                       " +
      "                 <a href='http://kstore.qianmi.com/list/3892-3886.html' target='_blank'>衬衫</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3893-3886.html' target='_blank'>针织衫</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3894-3886.html' target='_blank'>雪纺衫</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3895-3886.html' target='_blank'>卫衣</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3896-3886.html' target='_blank'>马甲</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3897-3886.html' target='_blank'>连衣裙</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3898-3886.html' target='_blank'>半身裙</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3892-3886.html' target='_blank'>衬衫</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3903-3886.html' target='_blank'>休闲裤</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3907-3886.html' target='_blank'>打底裤</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3920-3886.html' target='_blank'>正装裤</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3921-3886.html' target='_blank'>小西装</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3923-3886.html' target='_blank'>短外套</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3924-3886.html' target='_blank'>风衣</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3925-3886.html' target='_blank'>毛呢大衣</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3927-3886.html' target='_blank'>真皮皮衣</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3928-3886.html' target='_blank'>棉服</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3928-3886.html' target='_blank'>棉服</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3930-3886.html' target='_blank'>羽绒服</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3933-3886.html' target='_blank'>大码女装</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3933-3886.html' target='_blank'>大码女装</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3937-3886.html' target='_blank'>中老年女装</a>                " +
      "                 <a href='http://kstore.qianmi.com/list/3938-3886.html' target='_blank'>婚纱</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3940-3886.html' target='_blank'>打底衫</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3941-3886.html' target='_blank'>旗袍/唐装</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/3947-3886.html' target='_blank'>礼服</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3942-3886.html' target='_blank'>加绒裤</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3947-3886.html' target='_blank'>礼服</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3943-3886.html' target='_blank'>吊带/背心</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/3948-3886.html' target='_blank'>仿皮皮衣</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3944-3886.html' target='_blank'>羊绒衫</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3945-3886.html' target='_blank'>短裤</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3950-3886.html' target='_blank'>羊毛衫</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3946-3886.html' target='_blank'>皮草</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3952-3886.html' target='_blank'>设计师/潮牌</a>               " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/3888-3886.html' target='_blank'>                              " +
      "                     男装                                                                                             " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4320-3886.html' target='_blank'>男衬衫</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4321-3886.html' target='_blank'>男T恤</a>                     " +
      "                 <a href='http://kstore.qianmi.com/list/4322-3886.html' target='_blank'>POLO衫</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4323-3886.html' target='_blank'>男针织衫</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4324-3886.html' target='_blank'>男羊绒衫</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4325-3886.html' target='_blank'>男卫衣</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4326-3886.html' target='_blank'>马甲/背心</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4328-3886.html' target='_blank'>男风衣</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4329-3886.html' target='_blank'>呢大衣</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4330-3886.html' target='_blank'>皮衣</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4331-3886.html' target='_blank'>西服</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4332-3886.html' target='_blank'>男棉服</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4333-3886.html' target='_blank'>男羽绒服</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4334-3886.html' target='_blank'>男牛仔裤</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4335-3886.html' target='_blank'>男休闲裤</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4336-3886.html' target='_blank'>男西裤</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4336-3886.html' target='_blank'>男西裤</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4337-3886.html' target='_blank'>西服套装</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4338-3886.html' target='_blank'>大码男装</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4339-3886.html' target='_blank'>中老年男装</a>                " +
      "                 <a href='http://kstore.qianmi.com/list/4341-3886.html' target='_blank'>工装</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4342-3886.html' target='_blank'>男加绒裤</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4343-3886.html' target='_blank'>卫裤/运动裤</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/4344-3886.html' target='_blank'>男短裤</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4345-3886.html' target='_blank'>男羊毛衫</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/3889-3886.html' target='_blank'>                              " +
      "                     内衣                                                                                             " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/3960-3886.html' target='_blank'>文胸</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3961-3886.html' target='_blank'>女式内裤</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3962-3886.html' target='_blank'>男士内裤</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3963-3886.html' target='_blank'>睡衣/家居服</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/3964-3886.html' target='_blank'>塑身美体</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3965-3886.html' target='_blank'>泳衣</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3967-3886.html' target='_blank'>抹胸</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3968-3886.html' target='_blank'>连裤袜/丝袜</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/3969-3886.html' target='_blank'>美腿袜</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3970-3886.html' target='_blank'>商务男袜</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3971-3886.html' target='_blank'>保暖内衣</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3977-3886.html' target='_blank'>内衣配件</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3972-3886.html' target='_blank'>情侣睡衣</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3973-3886.html' target='_blank'>文胸套装</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3974-3886.html' target='_blank'>少女文胸</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3975-3886.html' target='_blank'>休闲棉袜</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3978-3886.html' target='_blank'>打底裤袜</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3979-3886.html' target='_blank'>秋衣秋裤</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3980-3886.html' target='_blank'>情趣内衣</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/3890-3886.html' target='_blank'>                              " +
      "                     服饰配件                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/3981-3886.html' target='_blank'>太阳镜</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3982-3886.html' target='_blank'>光学镜架/镜片</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/3983-3886.html' target='_blank'>围巾/手套/帽子套装</a>        " +
      "                 <a href='http://kstore.qianmi.com/list/3984-3886.html' target='_blank'>袖口</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/3985-3886.html' target='_blank'>棒球帽</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3986-3886.html' target='_blank'>毛绒帽</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3989-3886.html' target='_blank'>遮阳帽</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3991-3886.html' target='_blank'>老花镜</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3992-3886.html' target='_blank'>装饰眼镜</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3992-3886.html' target='_blank'>装饰眼镜</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/3995-3886.html' target='_blank'>防辐射眼镜</a>                " +
      "                 <a href='http://kstore.qianmi.com/list/3997-3886.html' target='_blank'>游泳镜</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/3998-3886.html' target='_blank'>女士丝巾/围巾/披肩</a>        " +
      "                 <a href='http://kstore.qianmi.com/list/3998-3886.html' target='_blank'>女士丝巾/围巾/披肩</a>        " +
      "                 <a href='http://kstore.qianmi.com/list/3999-3886.html' target='_blank'>男士丝巾/围巾</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4001-3886.html' target='_blank'>鸭舌帽</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4003-3886.html' target='_blank'>贝雷帽</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4004-3886.html' target='_blank'>礼帽</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4006-3886.html' target='_blank'>真皮手套</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4008-3886.html' target='_blank'>毛绒手套</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4009-3886.html' target='_blank'>男士腰带/礼盒</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4011-3886.html' target='_blank'>女士腰带/礼盒</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4013-3886.html' target='_blank'>钥匙扣</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4015-3886.html' target='_blank'>遮阳伞/雨伞</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/4016-3886.html' target='_blank'>口罩</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4018-3886.html' target='_blank'>耳罩/耳包</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4020-3886.html' target='_blank'>假领</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4021-3886.html' target='_blank'>毛绒/布面料</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/4022-3886.html' target='_blank'>领带/领结/领带夹</a>          " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "     </ul>                                                                                                            " +
      "     <div class='menuImg'>                                                                                            " +
      "         <ul class='bd-list'></ul>                                                                                    " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "     </div>                                                                                                           " +
      " </div>                                                                                                               " +
      " <div class='menuView hide' id='submenu-6'>                                                                           " +
      "     <div class='hotLinks'></div>                                                                                     " +
      "     <ul>                                                                                                             " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4162-4159.html' target='_blank'>                              " +
      "                     进口食品                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4170-4159.html' target='_blank'>饼干蛋糕</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4171-4159.html' target='_blank'>糖果/巧克力</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/4172-4159.html' target='_blank'>休闲零食</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4173-4159.html' target='_blank'>冲调饮品</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4174-4159.html' target='_blank'>牛奶</a>                      " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4163-4159.html' target='_blank'>                              " +
      "                     地方特产                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4182-4159.html' target='_blank'>新疆特产</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4183-4159.html' target='_blank'>北京特产</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4184-4159.html' target='_blank'>山西特产</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4185-4159.html' target='_blank'>内蒙古特产</a>                " +
      "                 <a href='http://kstore.qianmi.com/list/4186-4159.html' target='_blank'>福建特产</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4187-4159.html' target='_blank'>湖南特产</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4188-4159.html' target='_blank'>四川特产</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4189-4159.html' target='_blank'>云南特产</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4190-4159.html' target='_blank'>东北特产</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4195-4159.html' target='_blank'>其他特产</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4164-4159.html' target='_blank'>                              " +
      "                     休闲食品                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4196-4159.html' target='_blank'>坚果炒货</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4197-4159.html' target='_blank'>肉干肉脯</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4198-4159.html' target='_blank'>蜜饯果干</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4199-4159.html' target='_blank'>无糖食品</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4165-4159.html' target='_blank'>                              " +
      "                     粮油调味                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4200-4159.html' target='_blank'>米面杂粮</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4201-4159.html' target='_blank'>食用油</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4202-4159.html' target='_blank'>调味品</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4203-4159.html' target='_blank'>南北干货</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4204-4159.html' target='_blank'>方便食品</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4205-4159.html' target='_blank'>有机食品</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4167-4159.html' target='_blank'>                              " +
      "                     饮料冲调                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4206-4159.html' target='_blank'>饮用水</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4207-4159.html' target='_blank'>饮料</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4208-4159.html' target='_blank'>牛奶饮品</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4209-4159.html' target='_blank'>咖啡/奶茶</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4210-4159.html' target='_blank'>冲饮谷物</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4211-4159.html' target='_blank'>蜂蜜/柚子茶</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/4212-4159.html' target='_blank'>即冲奶粉</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4169-4159.html' target='_blank'>                              " +
      "                     茗茶                                                                                             " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4213-4159.html' target='_blank'>铁观音</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4214-4159.html' target='_blank'>普洱</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4215-4159.html' target='_blank'>龙井</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4216-4159.html' target='_blank'>绿茶</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4217-4159.html' target='_blank'>红茶</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4218-4159.html' target='_blank'>乌龙茶</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4219-4159.html' target='_blank'>花草茶</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4220-4159.html' target='_blank'>花果茶</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4221-4159.html' target='_blank'>养生茶</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4222-4159.html' target='_blank'>黑茶</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4223-4159.html' target='_blank'>白茶</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4224-4159.html' target='_blank'>其他茶</a>                    " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "     </ul>                                                                                                            " +
      "     <div class='menuImg'>                                                                                            " +
      "         <ul class='bd-list'></ul>                                                                                    " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "     </div>                                                                                                           " +
      " </div>                                                                                                               " +
      " <div class='menuView hide' id='submenu-7'>                                                                           " +
      "     <div class='hotLinks'></div>                                                                                     " +
      "     <ul>                                                                                                             " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4259-4258.html' target='_blank'>                              " +
      "                     潮流女包                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4265-4258.html' target='_blank'>钱包</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4266-4258.html' target='_blank'>手拿包/晚宴包</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4267-4258.html' target='_blank'>单肩包</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4268-4258.html' target='_blank'>双肩包</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4269-4258.html' target='_blank'>手提包</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4270-4258.html' target='_blank'>斜挎包</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4271-4258.html' target='_blank'>钥匙包</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4272-4258.html' target='_blank'>卡包/零钱包</a>               " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4260-4258.html' target='_blank'>                              " +
      "                     精品男包                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4273-4258.html' target='_blank'>钱包/卡包</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4274-4258.html' target='_blank'>男士手包</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4275-4258.html' target='_blank'>商务公文包</a>                " +
      "                 <a href='http://kstore.qianmi.com/list/4276-4258.html' target='_blank'>单肩/斜挎包</a>               " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4261-4258.html' target='_blank'>                              " +
      "                     功能箱包                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4277-4258.html' target='_blank'>电脑包</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4278-4258.html' target='_blank'>拉杆箱/拉杆包</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4279-4258.html' target='_blank'>旅行包</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4280-4258.html' target='_blank'>旅行配件</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4281-4258.html' target='_blank'>休闲运动包</a>                " +
      "                 <a href='http://kstore.qianmi.com/list/4282-4258.html' target='_blank'>登山包</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4283-4258.html' target='_blank'>妈咪包</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4284-4258.html' target='_blank'>书包</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4285-4258.html' target='_blank'>腰包/胸包</a>                 " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4262-4258.html' target='_blank'>                              " +
      "                     礼品                                                                                             " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4286-4258.html' target='_blank'>火机烟具</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4287-4258.html' target='_blank'>礼品文具</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4288-4258.html' target='_blank'>军刀军具</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4289-4258.html' target='_blank'>收藏品</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4290-4258.html' target='_blank'>工艺礼品</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4291-4258.html' target='_blank'>创意礼品</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4292-4258.html' target='_blank'>礼盒礼券</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4293-4258.html' target='_blank'>鲜花绿植</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4294-4258.html' target='_blank'>婚庆用品</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4295-4258.html' target='_blank'>美妆礼品</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4296-4258.html' target='_blank'>古董把玩</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4263-4258.html' target='_blank'>                              " +
      "                     奢侈品                                                                                           " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4297-4258.html' target='_blank'>箱包</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4298-4258.html' target='_blank'>服饰</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4299-4258.html' target='_blank'>腰带</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4300-4258.html' target='_blank'>太阳镜/眼镜框</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4301-4258.html' target='_blank'>配件</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4303-4258.html' target='_blank'>名品腕表</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4304-4258.html' target='_blank'>高档化妆品</a>                " +
      "                 <a href='http://kstore.qianmi.com/list/4302-4258.html' target='_blank'>饰品</a>                      " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4264-4258.html' target='_blank'>                              " +
      "                     婚庆                                                                                             " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4305-4258.html' target='_blank'>婚嫁首饰</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4306-4258.html' target='_blank'>婚纱摄影</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4307-4258.html' target='_blank'>婚纱礼服</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4308-4258.html' target='_blank'>婚庆礼品/用品</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4309-4258.html' target='_blank'>婚宴</a>                      " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4226-4225.html' target='_blank'>                              " +
      "                     流行男鞋                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4228-4225.html' target='_blank'>商务休闲鞋</a>                " +
      "                 <a href='http://kstore.qianmi.com/list/4229-4225.html' target='_blank'>正装鞋</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4230-4225.html' target='_blank'>休闲鞋</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4231-4225.html' target='_blank'>凉鞋/沙滩鞋</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/4232-4225.html' target='_blank'>男靴</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4233-4225.html' target='_blank'>功能鞋</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4234-4225.html' target='_blank'>拖鞋/人字拖</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/4235-4225.html' target='_blank'>雨鞋/雨靴</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4236-4225.html' target='_blank'>传统布鞋</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4237-4225.html' target='_blank'>鞋配件</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4238-4225.html' target='_blank'>帆布鞋</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4239-4225.html' target='_blank'>增高鞋</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4240-4225.html' target='_blank'>工装鞋</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4241-4225.html' target='_blank'>定制鞋</a>                    " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4227-4225.html' target='_blank'>                              " +
      "                     时尚女鞋                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4242-4225.html' target='_blank'>高跟鞋</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4243-4225.html' target='_blank'>单鞋</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4244-4225.html' target='_blank'>凉鞋</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4245-4225.html' target='_blank'>女靴</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4246-4225.html' target='_blank'>雪地靴</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4247-4225.html' target='_blank'>踝靴</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4248-4225.html' target='_blank'>筒靴</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4249-4225.html' target='_blank'>妈妈鞋</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4250-4225.html' target='_blank'>特色鞋</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4251-4225.html' target='_blank'>鱼嘴鞋</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4252-4225.html' target='_blank'>布鞋/绣花鞋</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/4253-4225.html' target='_blank'>马丁靴</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4254-4225.html' target='_blank'>坡跟鞋</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4255-4225.html' target='_blank'>松糕鞋</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4256-4225.html' target='_blank'>内增高</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4257-4225.html' target='_blank'>防水台</a>                    " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "     </ul>                                                                                                            " +
      "     <div class='menuImg'>                                                                                            " +
      "         <ul class='bd-list'></ul>                                                                                    " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "     </div>                                                                                                           " +
      " </div>                                                                                                               " +
      " <div class='menuView hide' id='submenu-8' style='display: none;'>                                                    " +
      "     <div class='hotLinks'></div>                                                                                     " +
      "     <ul>                                                                                                             " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4019-4017.html' target='_blank'>                              " +
      "                     手机通讯                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4035-4017.html' target='_blank'>手机</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4037-4017.html' target='_blank'>对讲机</a>                    " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4024-4017.html' target='_blank'>                              " +
      "                     运营商                                                                                           " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4039-4017.html' target='_blank'>合约机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4043-4017.html' target='_blank'>装宽带</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4045-4017.html' target='_blank'>办套餐</a>                    " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4025-4017.html' target='_blank'>                              " +
      "                     手机配件                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4048-4017.html' target='_blank'>电池/移动电源</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4057-4017.html' target='_blank'>手机存储卡</a>                " +
      "                 <a href='http://kstore.qianmi.com/list/4049-4017.html' target='_blank'>蓝牙耳机</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4051-4017.html' target='_blank'>充电器/数据线</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4053-4017.html' target='_blank'>手机耳机</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4055-4017.html' target='_blank'>手机贴膜</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4058-4017.html' target='_blank'>手机保护套</a>                " +
      "                 <a href='http://kstore.qianmi.com/list/4060-4017.html' target='_blank'>车载配件</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4062-4017.html' target='_blank'>iPhone配件</a>                " +
      "                 <a href='http://kstore.qianmi.com/list/4063-4017.html' target='_blank'>创意配件</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4064-4017.html' target='_blank'>便携/无线音响</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4065-4017.html' target='_blank'>手机饰品</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4067-4066.html' target='_blank'>                              " +
      "                     摄影摄像                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4073-4066.html' target='_blank'>数码相机</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4074-4066.html' target='_blank'>单电/微单相机</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4075-4066.html' target='_blank'>单反相机</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4076-4066.html' target='_blank'>摄像机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4077-4066.html' target='_blank'>拍立得</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4078-4066.html' target='_blank'>运动相机</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4079-4066.html' target='_blank'>镜头</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4080-4066.html' target='_blank'>户外器材</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4081-4066.html' target='_blank'>影棚器材</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4082-4066.html' target='_blank'>数码相框</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4068-4066.html' target='_blank'>                              " +
      "                     数码配件                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4083-4066.html' target='_blank'>存储卡</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4084-4066.html' target='_blank'>读卡器</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4085-4066.html' target='_blank'>滤镜</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4086-4066.html' target='_blank'>闪光灯/手柄</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/4087-4066.html' target='_blank'>相机包</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4088-4066.html' target='_blank'>三脚架/云台</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/4089-4066.html' target='_blank'>相机清洁/贴膜</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4090-4066.html' target='_blank'>机身附件</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4091-4066.html' target='_blank'>镜头附件</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4092-4066.html' target='_blank'>电池/充电器</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/4093-4066.html' target='_blank'>移动电源</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "     </ul>                                                                                                            " +
      "     <div class='menuImg'>                                                                                            " +
      "         <ul class='bd-list'></ul>                                                                                    " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "     </div>                                                                                                           " +
      " </div>                                                                                                               " +
      " <div class='menuView hide' id='submenu-9'>                                                                           " +
      "     <div class='hotLinks'></div>                                                                                     " +
      "     <ul>                                                                                                             " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4026-4023.html' target='_blank'>                              " +
      "                     大家电                                                                                           " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4031-4023.html' target='_blank'>平板电视</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4032-4023.html' target='_blank'>空调</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4033-4023.html' target='_blank'>冰箱</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4034-4023.html' target='_blank'>洗衣机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4036-4023.html' target='_blank'>家庭影院</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4038-4023.html' target='_blank'>DVD播放机</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4040-4023.html' target='_blank'>迷你音响</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4042-4023.html' target='_blank'>烟机/灶具</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4044-4023.html' target='_blank'>热水器</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4046-4023.html' target='_blank'>消毒柜/洗碗机</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4047-4023.html' target='_blank'>冰柜/冰吧</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4050-4023.html' target='_blank'>酒柜</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4052-4023.html' target='_blank'>家电配件</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4054-4023.html' target='_blank'>功放</a>                      " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4027-4023.html' target='_blank'>                              " +
      "                     生活电器                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4096-4023.html' target='_blank'>加湿器</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4097-4023.html' target='_blank'>扫地机器人</a>                " +
      "                 <a href='http://kstore.qianmi.com/list/4098-4023.html' target='_blank'>吸尘器</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4099-4023.html' target='_blank'>挂烫机/熨斗</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/4100-4023.html' target='_blank'>电话机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4101-4023.html' target='_blank'>清洁机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4102-4023.html' target='_blank'>除湿机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4103-4023.html' target='_blank'>干衣机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4103-4023.html' target='_blank'>干衣机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4104-4023.html' target='_blank'>收录/音机</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4105-4023.html' target='_blank'>电风扇</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4106-4023.html' target='_blank'>冷风扇</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4107-4023.html' target='_blank'>其他生活电器</a>              " +
      "                 <a href='http://kstore.qianmi.com/list/4108-4023.html' target='_blank'>生活电器配件</a>              " +
      "                 <a href='http://kstore.qianmi.com/list/4110-4023.html' target='_blank'>净水设备</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4112-4023.html' target='_blank'>饮水机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4094-4023.html' target='_blank'>取暖电器</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4028-4023.html' target='_blank'>                              " +
      "                     厨房电器                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4114-4023.html' target='_blank'>料理/榨汁机</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/4118-4023.html' target='_blank'>豆浆机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4124-4023.html' target='_blank'>电压力锅</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4122-4023.html' target='_blank'>电饭煲</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4125-4023.html' target='_blank'>面包机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4127-4023.html' target='_blank'>咖啡机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4128-4023.html' target='_blank'>微波炉</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4129-4023.html' target='_blank'>电烤箱</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4131-4023.html' target='_blank'>电磁炉</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4134-4023.html' target='_blank'>电饼铛/烧烤盘</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4136-4023.html' target='_blank'>煮蛋器</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4138-4023.html' target='_blank'>酸奶机</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4139-4023.html' target='_blank'>电炖锅</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4141-4023.html' target='_blank'>电水壶/热水瓶</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4143-4023.html' target='_blank'>多用途锅</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4145-4023.html' target='_blank'>果蔬解毒机</a>                " +
      "                 <a href='http://kstore.qianmi.com/list/4146-4023.html' target='_blank'>其他厨房电器</a>              " +
      "                 <a href='http://kstore.qianmi.com/list/4149-4023.html' target='_blank'>养生壶/煎药壶</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4150-4023.html' target='_blank'>电热饭盒</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4029-4023.html' target='_blank'>                              " +
      "                     个护健康                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4152-4023.html' target='_blank'>剃须刀</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4155-4023.html' target='_blank'>剃/脱毛器</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4156-4023.html' target='_blank'>口腔理护</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4157-4023.html' target='_blank'>电吹风</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4158-4023.html' target='_blank'>美容器</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4160-4023.html' target='_blank'>理发器</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4161-4023.html' target='_blank'>卷/直发器</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4166-4023.html' target='_blank'>按摩椅</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4168-4023.html' target='_blank'>按摩器</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4175-4023.html' target='_blank'>足浴盆</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4177-4023.html' target='_blank'>健康秤/厨房秤</a>             " +
      "                 <a href='http://kstore.qianmi.com/list/4178-4023.html' target='_blank'>血糖仪</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4179-4023.html' target='_blank'>体温计</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4180-4023.html' target='_blank'>其他健康电器</a>              " +
      "                 <a href='http://kstore.qianmi.com/list/4181-4023.html' target='_blank'>计步器/脂肪检测仪</a>         " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4030-4023.html' target='_blank'>                              " +
      "                     五金家装                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4352-4023.html' target='_blank'>厨卫五金</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4353-4023.html' target='_blank'>门铃</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4354-4023.html' target='_blank'>电器开关</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4355-4023.html' target='_blank'>电工电料</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4356-4023.html' target='_blank'>监控安防</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4357-4023.html' target='_blank'>电线/线缆</a>                 " +
      "                 <a href='http://kstore.qianmi.com/list/4191-4023.html' target='_blank'>电动工具</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4192-4023.html' target='_blank'>手动工具</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4193-4023.html' target='_blank'>仪表仪器</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4194-4023.html' target='_blank'>浴霸/排气扇</a>               " +
      "                 <a href='http://kstore.qianmi.com/list/4346-4023.html' target='_blank'>灯具</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4347-4023.html' target='_blank'>LED灯</a>                     " +
      "                 <a href='http://kstore.qianmi.com/list/4348-4023.html' target='_blank'>洁身器</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4349-4023.html' target='_blank'>水槽</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4350-4023.html' target='_blank'>龙头</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4351-4023.html' target='_blank'>淋浴花洒</a>                  " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "         <li>                                                                                                         " +
      "             <h3>                                                                                                     " +
      "                 <a href='http://kstore.qianmi.com/list/4572-4571.html' target='_blank'>                              " +
      "                     烹饪锅具                                                                                         " +
      "                     <b></b>                                                                                          " +
      "                 </a>                                                                                                 " +
      "             </h3>                                                                                                    " +
      "             <p>                                                                                                      " +
      "                 <a href='http://kstore.qianmi.com/list/4578-4571.html' target='_blank'>炒锅</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4579-4571.html' target='_blank'>煎锅</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4580-4571.html' target='_blank'>压力锅</a>                    " +
      "                 <a href='http://kstore.qianmi.com/list/4581-4571.html' target='_blank'>蒸锅</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4582-4571.html' target='_blank'>汤锅</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4583-4571.html' target='_blank'>锅具套装</a>                  " +
      "                 <a href='http://kstore.qianmi.com/list/4584-4571.html' target='_blank'>煲类</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4585-4571.html' target='_blank'>水壶</a>                      " +
      "                 <a href='http://kstore.qianmi.com/list/4586-4571.html' target='_blank'>火锅</a>                      " +
      "             </p>                                                                                                     " +
      "         </li>                                                                                                        " +
      "     </ul>                                                                                                            " +
      "     <div class='menuImg'>                                                                                            " +
      "         <ul class='bd-list'></ul>                                                                                    " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "         <a class='bd-pro' href='' target='_blank'>                                                                   " +
      "             <img src='' alt=''>                                                                                      " +
      "         </a>                                                                                                         " +
      "     </div>                                                                                                           " +
      " </div>                                                                                                               ";



