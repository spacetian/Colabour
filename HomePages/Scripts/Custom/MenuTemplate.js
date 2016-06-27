
$(document).ready(function () {
    var html = template('sort', data);
    var menu = template('menu', data);
    $(".menucat").after(html);
    $(".showlist").append(menu);

    ShowMenuItems();

})


/* 鼠标滑过全部商品分类时的事件*/
function ShowMenuItems()
{
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

//#region 左边商品菜单

var s=0;
var data = {
    list: [
              {
                  "menuSort": [

                  {"msort":"电脑办公","mhref":"/list/3854-3854.html"}


                  ],
                  "links":[
                                  {"lname":"笔记本","lhref":"/list/3856-3854.html"}
                          ,
                                  {"lname":"笔记本","lhref":"/list/3856-3854.html"}
                          ,
                                  {"lname":"SSD固态硬盘","lhref":"/list/3873-3854.html"}
                          ,
                                  {"lname":"路由器","lhref":"/list/3914-3854.html"}


                  ]}
         ,
              {
                  "menuSort": [

                  {"msort":"钟表","mhref":"/list/4632-4632.html"}


                  ],
                  "links":[
                                  {"lname":"天梭","lhref":"/list/4637-4632.html"}
                          ,
                                  {"lname":"李维斯","lhref":"/list/4648-4632.html"}
                          ,
                                  {"lname":"卡西欧","lhref":"/list/4649-4632.html"}
                          ,
                                  {"lname":"劳力士","lhref":"/list/4642-4632.html"}


                  ]}
         ,
              {
                  "menuSort": [

                  {"msort":"珠宝首饰","mhref":"/list/4670-4670.html"}


                  ],
                  "links":[
                  ]}
         ,
              {
                  "menuSort": [

                  {"msort":"个护化妆","mhref":"/list/4358-4358.html"}
                ,
                  {"msort":"母婴","mhref":"/list/4457-4457.html"}
                ,
                  {"msort":"","mhref":"/list/0-0.html"}
                ,
                  {"msort":"","mhref":"/list/0-0.html"}


                  ],
                  "links":[
                                  {"lname":"爽肤水","lhref":"/list/4374-4358.html"}
                          ,
                                  {"lname":"香皂","lhref":"/list/4390-4358.html"}
                          ,
                                  {"lname":"洗发","lhref":"/list/4416-4358.html"}
                          ,
                                  {"lname":"香水","lhref":"/list/4439-4358.html"}


                  ]}
         ,
              {
                  "menuSort": [

                  {"msort":"服装内衣","mhref":"/list/3886-3886.html"}
                ,
                  {"msort":"","mhref":"/list/0-0.html"}
                ,
                  {"msort":"","mhref":"/list/0-0.html"}
                ,
                  {"msort":"","mhref":"/list/0-0.html"}


                  ],
                  "links":[
                                  {"lname":"衬衫","lhref":"/list/3892-3886.html"}
                          ,
                                  {"lname":"POLO衫","lhref":"/list/4322-3886.html"}
                          ,
                                  {"lname":"牛仔裤","lhref":"/list/3901-3886.html"}
                          ,
                                  {"lname":"游泳镜","lhref":"/list/3997-3886.html"}


                  ]}
         ,
              {
                  "menuSort": [

                  {"msort":"食品饮料、保健食品","mhref":"/list/4159-4159.html"}
                ,
                  {"msort":"","mhref":"/list/0-0.html"}
                ,
                  {"msort":"","mhref":"/list/0-0.html"}


                  ],
                  "links":[
                                  {"lname":"饼干蛋糕","lhref":"/list/4170-4159.html"}
                          ,
                                  {"lname":"坚果炒货","lhref":"/list/4196-4159.html"}
                          ,
                                  {"lname":"铁观音","lhref":"/list/4213-4159.html"}


                  ]}
         ,
              {
                  "menuSort": [

                  {"msort":"礼品箱包","mhref":"/list/4258-4258.html"}
                ,
                  {"msort":"鞋靴","mhref":"/list/4225-4225.html"}
                ,
                  {"msort":"","mhref":"/list/0-0.html"}
                ,
                  {"msort":"","mhref":"/list/0-0.html"}


                  ],
                  "links":[
                                  {"lname":"单肩包","lhref":"/list/4267-4258.html"}
                          ,
                                  {"lname":"手拿包/晚宴包","lhref":"/list/4266-4258.html"}
                          ,
                                  {"lname":"男士手包","lhref":"/list/4274-4258.html"}
                          ,
                                  {"lname":"工艺礼品","lhref":"/list/4290-4258.html"}


                  ]}
         ,
              {
                  "menuSort": [

                  {"msort":"手机、配件","mhref":"/list/4017-4017.html"}
                ,
                  {"msort":"数码","mhref":"/list/4066-4066.html"}
                ,
                  {"msort":"","mhref":"/list/0-0.html"}
                ,
                  {"msort":"","mhref":"/list/0-0.html"}


                  ],
                  "links":[
                                  {"lname":"蓝牙耳机","lhref":"/list/4049-4017.html"}
                          ,
                                  {"lname":"iPhone配件","lhref":"/list/4062-4017.html"}
                          ,
                                  {"lname":"数码相机","lhref":"/list/4073-4066.html"}


                  ]}
         ,
              {
                  "menuSort": [

                  {"msort":"家用电器","mhref":"/list/4023-4023.html"}
                ,
                  {"msort":"厨具","mhref":"/list/4571-4571.html"}


                  ],
                  "links":[
                                  {"lname":"平板电视","lhref":"/list/4031-4023.html"}
                          ,
                                  {"lname":"空调","lhref":"/list/4032-4023.html"}
                          ,
                                  {"lname":"电风扇","lhref":"/list/4105-4023.html"}


                  ]}

    ],
    menu: [

        {"mid":"submenu-1",

            "bHref":"http://www.baidu.com","bImg":"http://114.215.114.9:10000/M00/00/1B/ctdyCVVuxkaASFLYAAAlHSo55Y8187.jpg",
            "hotLinks":[
            ],"brand":[
                    {"bdHref":"http://www.baidu.com","bdImg":"http://114.215.114.9:10000/M00/00/44/ctdyCVV2TVqAAvyBAAAYGZdAvpw465.jpg"}
                  ,
                    {"bdHref":"item/3918.html","bdImg":"http://114.215.114.9:10000/M00/00/44/ctdyCVV2TvKAMtvLAAAJi_cFLag120.jpg"}
                  ,
                    {"bdHref":"","bdImg":"http://114.215.114.9:10000/M00/00/44/ctdyCVV2Ts2AGZhUAAAK06LkAt0582.jpg"}
                  ,
                    {"bdHref":"","bdImg":"http://114.215.114.9:10000/M00/00/47/ctdyCVV2U2OADiqdAAAJ8ivldNc111.jpg"}

            ],"mlist":[
                    {"mhref":"/list/3855-3854.html","msort":"电脑整机",
                        "menus":[
                                    {"shref":"/list/3856-3854.html","sname":"笔记本"}
                                ,
                                    {"shref":"/list/3862-3854.html","sname":"超级本"}
                                ,
                                    {"shref":"/list/3863-3854.html","sname":"游戏本"}
                                ,
                                    {"shref":"/list/3864-3854.html","sname":"平板电脑"}
                                ,
                                    {"shref":"/list/3865-3854.html","sname":"平板电脑配件"}
                                ,
                                    {"shref":"/list/3866-3854.html","sname":"台式机"}
                                ,
                                    {"shref":"/list/3867-3854.html","sname":"服务器/工作站"}

                        ]}
                   ,
                    {"mhref":"/list/3857-3854.html","msort":"电脑配件",
                        "menus":[
                                    {"shref":"/list/3869-3854.html","sname":"CPU"}
                                ,
                                    {"shref":"/list/3870-3854.html","sname":"主板"}
                                ,
                                    {"shref":"/list/3871-3854.html","sname":"显卡"}
                                ,
                                    {"shref":"/list/3872-3854.html","sname":"硬盘"}
                                ,
                                    {"shref":"/list/3873-3854.html","sname":"SSD固态硬盘"}
                                ,
                                    {"shref":"/list/3874-3854.html","sname":"内存"}
                                ,
                                    {"shref":"/list/3875-3854.html","sname":"机箱"}
                                ,
                                    {"shref":"/list/3876-3854.html","sname":"电源"}
                                ,
                                    {"shref":"/list/3877-3854.html","sname":"显示器"}
                                ,
                                    {"shref":"/list/3878-3854.html","sname":"刻录机/光驱"}
                                ,
                                    {"shref":"/list/3879-3854.html","sname":"散热器"}
                                ,
                                    {"shref":"/list/3880-3854.html","sname":"声卡/扩展卡"}
                                ,
                                    {"shref":"/list/3881-3854.html","sname":"装机配件"}
                                ,
                                    {"shref":"/list/3882-3854.html","sname":"组装电脑"}

                        ]}
                   ,
                    {"mhref":"/list/3858-3854.html","msort":"外设产品",
                        "menus":[
                                    {"shref":"/list/3883-3854.html","sname":"移动硬盘"}
                                ,
                                    {"shref":"/list/3884-3854.html","sname":"U盘"}
                                ,
                                    {"shref":"/list/3885-3854.html","sname":"鼠标"}
                                ,
                                    {"shref":"/list/3899-3854.html","sname":"键盘"}
                                ,
                                    {"shref":"/list/3900-3854.html","sname":"鼠标垫"}
                                ,
                                    {"shref":"/list/3902-3854.html","sname":"摄像头"}
                                ,
                                    {"shref":"/list/3904-3854.html","sname":"手写板"}
                                ,
                                    {"shref":"/list/3905-3854.html","sname":"外置盒"}
                                ,
                                    {"shref":"/list/3906-3854.html","sname":"插座"}
                                ,
                                    {"shref":"/list/3908-3854.html","sname":"线缆"}
                                ,
                                    {"shref":"/list/3909-3854.html","sname":"UPS电源"}
                                ,
                                    {"shref":"/list/3910-3854.html","sname":"电脑工具"}
                                ,
                                    {"shref":"/list/3911-3854.html","sname":"游戏设备"}
                                ,
                                    {"shref":"/list/3912-3854.html","sname":"电玩"}
                                ,
                                    {"shref":"/list/3913-3854.html","sname":"电脑清洁"}

                        ]}
                   ,
                    {"mhref":"/list/3859-3854.html","msort":"网络产品",
                        "menus":[
                                    {"shref":"/list/3914-3854.html","sname":"路由器"}
                                ,
                                    {"shref":"/list/3915-3854.html","sname":"网卡"}
                                ,
                                    {"shref":"/list/3916-3854.html","sname":"交换机"}
                                ,
                                    {"shref":"/list/3917-3854.html","sname":"网络存储"}
                                ,
                                    {"shref":"/list/3918-3854.html","sname":"4G/3G上网"}
                                ,
                                    {"shref":"/list/3919-3854.html","sname":"网络盒子"}
                                ,
                                    {"shref":"/list/3922-3854.html","sname":"网络配件"}

                        ]}
                   ,
                    {"mhref":"/list/3860-3854.html","msort":"办公设备",
                        "menus":[
                                    {"shref":"/list/3926-3854.html","sname":"投影机"}
                                ,
                                    {"shref":"/list/3929-3854.html","sname":"投影配件"}
                                ,
                                    {"shref":"/list/3931-3854.html","sname":"多功能一体机"}
                                ,
                                    {"shref":"/list/3932-3854.html","sname":"打印机"}
                                ,
                                    {"shref":"/list/3934-3854.html","sname":"传真设备"}
                                ,
                                    {"shref":"/list/3935-3854.html","sname":"验钞/点钞机"}
                                ,
                                    {"shref":"/list/3936-3854.html","sname":"扫描设备"}
                                ,
                                    {"shref":"/list/3939-3854.html","sname":"复合机"}
                                ,
                                    {"shref":"/list/3949-3854.html","sname":"碎纸机"}
                                ,
                                    {"shref":"/list/3951-3854.html","sname":"考勤机"}
                                ,
                                    {"shref":"/list/3953-3854.html","sname":"收款/POS机"}
                                ,
                                    {"shref":"/list/3954-3854.html","sname":"会议音频视频"}
                                ,
                                    {"shref":"/list/3955-3854.html","sname":"保险柜"}
                                ,
                                    {"shref":"/list/3956-3854.html","sname":"装订/封装机"}
                                ,
                                    {"shref":"/list/3957-3854.html","sname":"安防监控"}
                                ,
                                    {"shref":"/list/3958-3854.html","sname":"办公家具"}
                                ,
                                    {"shref":"/list/3959-3854.html","sname":"白板"}

                        ]}
                   ,
                    {"mhref":"/list/3861-3854.html","msort":"文具/耗材",
                        "menus":[
                                    {"shref":"/list/3987-3854.html","sname":"硒鼓/墨粉"}
                                ,
                                    {"shref":"/list/3988-3854.html","sname":"墨盒"}
                                ,
                                    {"shref":"/list/3990-3854.html","sname":"色带"}
                                ,
                                    {"shref":"/list/3993-3854.html","sname":"纸类"}
                                ,
                                    {"shref":"/list/3994-3854.html","sname":"办公文具"}
                                ,
                                    {"shref":"/list/3996-3854.html","sname":"学生文具"}
                                ,
                                    {"shref":"/list/4000-3854.html","sname":"财会用品"}
                                ,
                                    {"shref":"/list/4002-3854.html","sname":"文件管理"}
                                ,
                                    {"shref":"/list/4005-3854.html","sname":"本册/便签"}
                                ,
                                    {"shref":"/list/4007-3854.html","sname":"计算器"}
                                ,
                                    {"shref":"/list/4010-3854.html","sname":"笔类"}
                                ,
                                    {"shref":"/list/4012-3854.html","sname":"画具画材"}
                                ,
                                    {"shref":"/list/4014-3854.html","sname":"刻录碟片/附件"}

                        ]}


            ]}
        ,

        {"mid":"submenu-2",

            "hotLinks":[
            ],"brand":[
            ],"mlist":[
                    {"mhref":"/list/4633-4632.html","msort":"瑞士品牌",
                        "menus":[
                                    {"shref":"/list/4637-4632.html","sname":"天梭"}
                                ,
                                    {"shref":"/list/4638-4632.html","sname":"浪琴"}
                                ,
                                    {"shref":"/list/4639-4632.html","sname":"美度"}
                                ,
                                    {"shref":"/list/4640-4632.html","sname":"欧米茄"}
                                ,
                                    {"shref":"/list/4641-4632.html","sname":"卡地亚"}
                                ,
                                    {"shref":"/list/4642-4632.html","sname":"劳力士"}

                        ]}
                   ,
                    {"mhref":"/list/4635-4632.html","msort":"日韩品牌",
                        "menus":[
                                    {"shref":"/list/4649-4632.html","sname":"卡西欧"}
                                ,
                                    {"shref":"/list/4650-4632.html","sname":"西铁城"}
                                ,
                                    {"shref":"/list/4651-4632.html","sname":"精工"}
                                ,
                                    {"shref":"/list/4652-4632.html","sname":"东方"}

                        ]}
                   ,
                    {"mhref":"/list/4634-4632.html","msort":"欧美品牌",
                        "menus":[
                                    {"shref":"/list/4643-4632.html","sname":"ck"}
                                ,
                                    {"shref":"/list/4645-4632.html","sname":"巴宝莉"}
                                ,
                                    {"shref":"/list/4644-4632.html","sname":"阿玛尼"}
                                ,
                                    {"shref":"/list/4646-4632.html","sname":"斯沃琪"}
                                ,
                                    {"shref":"/list/4647-4632.html","sname":"guess"}
                                ,
                                    {"shref":"/list/4648-4632.html","sname":"李维斯"}

                        ]}
                   ,
                    {"mhref":"/list/4636-4632.html","msort":"国内品牌",
                        "menus":[
                                    {"shref":"/list/4653-4632.html","sname":"飞亚达"}
                                ,
                                    {"shref":"/list/4654-4632.html","sname":"天王"}
                                ,
                                    {"shref":"/list/4655-4632.html","sname":"罗西尼"}
                                ,
                                    {"shref":"/list/4655-4632.html","sname":"罗西尼"}
                                ,
                                    {"shref":"/list/4656-4632.html","sname":"海鸥"}
                                ,
                                    {"shref":"/list/4657-4632.html","sname":"依波表"}

                        ]}


            ]}
        ,

        {"mid":"submenu-3",

            "hotLinks":[
            ],"brand":[
            ],"mlist":[
                    {"mhref":"/list/4671-4670.html","msort":"珠宝",
                        "menus":[
                                    {"shref":"/list/4674-4670.html","sname":"黄金吊坠"}
                                ,
                                    {"shref":"/list/4675-4670.html","sname":"珍珠吊坠"}
                                ,
                                    {"shref":"/list/4677-4670.html","sname":"翡翠玉石"}
                                ,
                                    {"shref":"/list/4674-4670.html","sname":"黄金项链"}

                        ]}
                   ,
                    {"mhref":"/list/4672-4670.html","msort":"时尚饰品",
                        "menus":[
                                    {"shref":"/list/4678-4670.html","sname":"木手串"}
                                ,
                                    {"shref":"/list/4679-4670.html","sname":"清凉夏饰"}
                                ,
                                    {"shref":"/list/4680-4670.html","sname":"银手镯"}

                        ]}


            ]}
        ,

        {"mid":"submenu-4",

            "hotLinks":[
            ],"brand":[
            ],"mlist":[
                    {"mhref":"/list/4359-4358.html","msort":"面部护肤",
                        "menus":[
                                    {"shref":"/list/4365-4358.html","sname":"清洁"}
                                ,
                                    {"shref":"/list/4366-4358.html","sname":"护肤"}
                                ,
                                    {"shref":"/list/4367-4358.html","sname":"面膜"}
                                ,
                                    {"shref":"/list/4368-4358.html","sname":"剃须"}
                                ,
                                    {"shref":"/list/4369-4358.html","sname":"套装"}
                                ,
                                    {"shref":"/list/4370-4358.html","sname":"防晒隔离"}
                                ,
                                    {"shref":"/list/4371-4358.html","sname":"T区护理"}
                                ,
                                    {"shref":"/list/4372-4358.html","sname":"眼部护理"}
                                ,
                                    {"shref":"/list/4373-4358.html","sname":"精华露"}
                                ,
                                    {"shref":"/list/4374-4358.html","sname":"爽肤水"}

                        ]}
                   ,
                    {"mhref":"/list/4360-4358.html","msort":"身体护肤",
                        "menus":[
                                    {"shref":"/list/4375-4358.html","sname":"沐浴"}
                                ,
                                    {"shref":"/list/4376-4358.html","sname":"润肤"}
                                ,
                                    {"shref":"/list/4377-4358.html","sname":"颈部"}
                                ,
                                    {"shref":"/list/4378-4358.html","sname":"手足"}
                                ,
                                    {"shref":"/list/4379-4358.html","sname":"纤体塑形"}
                                ,
                                    {"shref":"/list/4380-4358.html","sname":"美胸"}
                                ,
                                    {"shref":"/list/4382-4358.html","sname":"染发/造型"}
                                ,
                                    {"shref":"/list/4383-4358.html","sname":"香薰精油"}
                                ,
                                    {"shref":"/list/4384-4358.html","sname":"磨砂/浴盆"}
                                ,
                                    {"shref":"/list/4385-4358.html","sname":"手工/香皂"}
                                ,
                                    {"shref":"/list/4389-4358.html","sname":"磨砂膏"}
                                ,
                                    {"shref":"/list/4390-4358.html","sname":"香皂"}

                        ]}
                   ,
                    {"mhref":"/list/4361-4358.html","msort":"口腔护理",
                        "menus":[
                                    {"shref":"/list/4391-4358.html","sname":"牙膏/牙粉"}
                                ,
                                    {"shref":"/list/4392-4358.html","sname":"牙刷/压线"}
                                ,
                                    {"shref":"/list/4393-4358.html","sname":"漱口水"}

                        ]}
                   ,
                    {"mhref":"/list/4362-4358.html","msort":"女性护理",
                        "menus":[
                                    {"shref":"/list/4395-4358.html","sname":"卫生巾"}
                                ,
                                    {"shref":"/list/4396-4358.html","sname":"卫生护垫"}
                                ,
                                    {"shref":"/list/4398-4358.html","sname":"私密护理"}
                                ,
                                    {"shref":"/list/4400-4358.html","sname":"脱毛膏"}

                        ]}
                   ,
                    {"mhref":"/list/4363-4358.html","msort":"洗发护发",
                        "menus":[
                                    {"shref":"/list/4416-4358.html","sname":"洗发"}
                                ,
                                    {"shref":"/list/4417-4358.html","sname":"护发"}
                                ,
                                    {"shref":"/list/4419-4358.html","sname":"染发"}
                                ,
                                    {"shref":"/list/4427-4358.html","sname":"造型"}
                                ,
                                    {"shref":"/list/4428-4358.html","sname":"假发"}

                        ]}
                   ,
                    {"mhref":"/list/4364-4358.html","msort":"香水彩妆",
                        "menus":[
                                    {"shref":"/list/4439-4358.html","sname":"香水"}
                                ,
                                    {"shref":"/list/4440-4358.html","sname":"底妆"}
                                ,
                                    {"shref":"/list/4442-4358.html","sname":"腮红"}
                                ,
                                    {"shref":"/list/4443-4358.html","sname":"眼部"}
                                ,
                                    {"shref":"/list/4445-4358.html","sname":"唇部"}
                                ,
                                    {"shref":"/list/4446-4358.html","sname":"美甲"}
                                ,
                                    {"shref":"/list/4448-4358.html","sname":"美容工具"}
                                ,
                                    {"shref":"/list/4451-4358.html","sname":"卸妆"}
                                ,
                                    {"shref":"/list/4453-4358.html","sname":"眉笔"}
                                ,
                                    {"shref":"/list/4454-4358.html","sname":"睫毛膏"}

                        ]}
                   ,
                    {"mhref":"/list/4458-4457.html","msort":"奶粉",
                        "menus":[
                                    {"shref":"/list/4490-4457.html","sname":"婴幼奶粉"}
                                ,
                                    {"shref":"/list/4504-4457.html","sname":"成人奶粉"}

                        ]}


            ]}
        ,

        {"mid":"submenu-5",

            "hotLinks":[
            ],"brand":[
            ],"mlist":[
                    {"mhref":"/list/3887-3886.html","msort":"女装",
                        "menus":[
                                    {"shref":"/list/3891-3886.html","sname":"T恤"}
                                ,
                                    {"shref":"/list/3892-3886.html","sname":"衬衫"}
                                ,
                                    {"shref":"/list/3893-3886.html","sname":"针织衫"}
                                ,
                                    {"shref":"/list/3894-3886.html","sname":"雪纺衫"}
                                ,
                                    {"shref":"/list/3895-3886.html","sname":"卫衣"}
                                ,
                                    {"shref":"/list/3896-3886.html","sname":"马甲"}
                                ,
                                    {"shref":"/list/3897-3886.html","sname":"连衣裙"}
                                ,
                                    {"shref":"/list/3898-3886.html","sname":"半身裙"}
                                ,
                                    {"shref":"/list/3892-3886.html","sname":"衬衫"}
                                ,
                                    {"shref":"/list/3903-3886.html","sname":"休闲裤"}
                                ,
                                    {"shref":"/list/3907-3886.html","sname":"打底裤"}
                                ,
                                    {"shref":"/list/3920-3886.html","sname":"正装裤"}
                                ,
                                    {"shref":"/list/3921-3886.html","sname":"小西装"}
                                ,
                                    {"shref":"/list/3923-3886.html","sname":"短外套"}
                                ,
                                    {"shref":"/list/3924-3886.html","sname":"风衣"}
                                ,
                                    {"shref":"/list/3925-3886.html","sname":"毛呢大衣"}
                                ,
                                    {"shref":"/list/3927-3886.html","sname":"真皮皮衣"}
                                ,
                                    {"shref":"/list/3928-3886.html","sname":"棉服"}
                                ,
                                    {"shref":"/list/3928-3886.html","sname":"棉服"}
                                ,
                                    {"shref":"/list/3930-3886.html","sname":"羽绒服"}
                                ,
                                    {"shref":"/list/3933-3886.html","sname":"大码女装"}
                                ,
                                    {"shref":"/list/3933-3886.html","sname":"大码女装"}
                                ,
                                    {"shref":"/list/3937-3886.html","sname":"中老年女装"}
                                ,
                                    {"shref":"/list/3938-3886.html","sname":"婚纱"}
                                ,
                                    {"shref":"/list/3940-3886.html","sname":"打底衫"}
                                ,
                                    {"shref":"/list/3941-3886.html","sname":"旗袍/唐装"}
                                ,
                                    {"shref":"/list/3947-3886.html","sname":"礼服"}
                                ,
                                    {"shref":"/list/3942-3886.html","sname":"加绒裤"}
                                ,
                                    {"shref":"/list/3947-3886.html","sname":"礼服"}
                                ,
                                    {"shref":"/list/3943-3886.html","sname":"吊带/背心"}
                                ,
                                    {"shref":"/list/3948-3886.html","sname":"仿皮皮衣"}
                                ,
                                    {"shref":"/list/3944-3886.html","sname":"羊绒衫"}
                                ,
                                    {"shref":"/list/3945-3886.html","sname":"短裤"}
                                ,
                                    {"shref":"/list/3950-3886.html","sname":"羊毛衫"}
                                ,
                                    {"shref":"/list/3946-3886.html","sname":"皮草"}
                                ,
                                    {"shref":"/list/3952-3886.html","sname":"设计师/潮牌"}

                        ]}
                   ,
                    {"mhref":"/list/3888-3886.html","msort":"男装",
                        "menus":[
                                    {"shref":"/list/4320-3886.html","sname":"男衬衫"}
                                ,
                                    {"shref":"/list/4321-3886.html","sname":"男T恤"}
                                ,
                                    {"shref":"/list/4322-3886.html","sname":"POLO衫"}
                                ,
                                    {"shref":"/list/4323-3886.html","sname":"男针织衫"}
                                ,
                                    {"shref":"/list/4324-3886.html","sname":"男羊绒衫"}
                                ,
                                    {"shref":"/list/4325-3886.html","sname":"男卫衣"}
                                ,
                                    {"shref":"/list/4326-3886.html","sname":"马甲/背心"}
                                ,
                                    {"shref":"/list/4328-3886.html","sname":"男风衣"}
                                ,
                                    {"shref":"/list/4329-3886.html","sname":"呢大衣"}
                                ,
                                    {"shref":"/list/4330-3886.html","sname":"皮衣"}
                                ,
                                    {"shref":"/list/4331-3886.html","sname":"西服"}
                                ,
                                    {"shref":"/list/4332-3886.html","sname":"男棉服"}
                                ,
                                    {"shref":"/list/4333-3886.html","sname":"男羽绒服"}
                                ,
                                    {"shref":"/list/4334-3886.html","sname":"男牛仔裤"}
                                ,
                                    {"shref":"/list/4335-3886.html","sname":"男休闲裤"}
                                ,
                                    {"shref":"/list/4336-3886.html","sname":"男西裤"}
                                ,
                                    {"shref":"/list/4336-3886.html","sname":"男西裤"}
                                ,
                                    {"shref":"/list/4337-3886.html","sname":"西服套装"}
                                ,
                                    {"shref":"/list/4338-3886.html","sname":"大码男装"}
                                ,
                                    {"shref":"/list/4339-3886.html","sname":"中老年男装"}
                                ,
                                    {"shref":"/list/4341-3886.html","sname":"工装"}
                                ,
                                    {"shref":"/list/4342-3886.html","sname":"男加绒裤"}
                                ,
                                    {"shref":"/list/4343-3886.html","sname":"卫裤/运动裤"}
                                ,
                                    {"shref":"/list/4344-3886.html","sname":"男短裤"}
                                ,
                                    {"shref":"/list/4345-3886.html","sname":"男羊毛衫"}

                        ]}
                   ,
                    {"mhref":"/list/3889-3886.html","msort":"内衣",
                        "menus":[
                                    {"shref":"/list/3960-3886.html","sname":"文胸"}
                                ,
                                    {"shref":"/list/3961-3886.html","sname":"女式内裤"}
                                ,
                                    {"shref":"/list/3962-3886.html","sname":"男士内裤"}
                                ,
                                    {"shref":"/list/3963-3886.html","sname":"睡衣/家居服"}
                                ,
                                    {"shref":"/list/3964-3886.html","sname":"塑身美体"}
                                ,
                                    {"shref":"/list/3965-3886.html","sname":"泳衣"}
                                ,
                                    {"shref":"/list/3967-3886.html","sname":"抹胸"}
                                ,
                                    {"shref":"/list/3968-3886.html","sname":"连裤袜/丝袜"}
                                ,
                                    {"shref":"/list/3969-3886.html","sname":"美腿袜"}
                                ,
                                    {"shref":"/list/3970-3886.html","sname":"商务男袜"}
                                ,
                                    {"shref":"/list/3971-3886.html","sname":"保暖内衣"}
                                ,
                                    {"shref":"/list/3977-3886.html","sname":"内衣配件"}
                                ,
                                    {"shref":"/list/3972-3886.html","sname":"情侣睡衣"}
                                ,
                                    {"shref":"/list/3973-3886.html","sname":"文胸套装"}
                                ,
                                    {"shref":"/list/3974-3886.html","sname":"少女文胸"}
                                ,
                                    {"shref":"/list/3975-3886.html","sname":"休闲棉袜"}
                                ,
                                    {"shref":"/list/3978-3886.html","sname":"打底裤袜"}
                                ,
                                    {"shref":"/list/3979-3886.html","sname":"秋衣秋裤"}
                                ,
                                    {"shref":"/list/3980-3886.html","sname":"情趣内衣"}

                        ]}
                   ,
                    {"mhref":"/list/3890-3886.html","msort":"服饰配件",
                        "menus":[
                                    {"shref":"/list/3981-3886.html","sname":"太阳镜"}
                                ,
                                    {"shref":"/list/3982-3886.html","sname":"光学镜架/镜片"}
                                ,
                                    {"shref":"/list/3983-3886.html","sname":"围巾/手套/帽子套装"}
                                ,
                                    {"shref":"/list/3984-3886.html","sname":"袖口"}
                                ,
                                    {"shref":"/list/3985-3886.html","sname":"棒球帽"}
                                ,
                                    {"shref":"/list/3986-3886.html","sname":"毛绒帽"}
                                ,
                                    {"shref":"/list/3989-3886.html","sname":"遮阳帽"}
                                ,
                                    {"shref":"/list/3991-3886.html","sname":"老花镜"}
                                ,
                                    {"shref":"/list/3992-3886.html","sname":"装饰眼镜"}
                                ,
                                    {"shref":"/list/3992-3886.html","sname":"装饰眼镜"}
                                ,
                                    {"shref":"/list/3995-3886.html","sname":"防辐射眼镜"}
                                ,
                                    {"shref":"/list/3997-3886.html","sname":"游泳镜"}
                                ,
                                    {"shref":"/list/3998-3886.html","sname":"女士丝巾/围巾/披肩"}
                                ,
                                    {"shref":"/list/3998-3886.html","sname":"女士丝巾/围巾/披肩"}
                                ,
                                    {"shref":"/list/3999-3886.html","sname":"男士丝巾/围巾"}
                                ,
                                    {"shref":"/list/4001-3886.html","sname":"鸭舌帽"}
                                ,
                                    {"shref":"/list/4003-3886.html","sname":"贝雷帽"}
                                ,
                                    {"shref":"/list/4004-3886.html","sname":"礼帽"}
                                ,
                                    {"shref":"/list/4006-3886.html","sname":"真皮手套"}
                                ,
                                    {"shref":"/list/4008-3886.html","sname":"毛绒手套"}
                                ,
                                    {"shref":"/list/4009-3886.html","sname":"男士腰带/礼盒"}
                                ,
                                    {"shref":"/list/4011-3886.html","sname":"女士腰带/礼盒"}
                                ,
                                    {"shref":"/list/4013-3886.html","sname":"钥匙扣"}
                                ,
                                    {"shref":"/list/4015-3886.html","sname":"遮阳伞/雨伞"}
                                ,
                                    {"shref":"/list/4016-3886.html","sname":"口罩"}
                                ,
                                    {"shref":"/list/4018-3886.html","sname":"耳罩/耳包"}
                                ,
                                    {"shref":"/list/4020-3886.html","sname":"假领"}
                                ,
                                    {"shref":"/list/4021-3886.html","sname":"毛绒/布面料"}
                                ,
                                    {"shref":"/list/4022-3886.html","sname":"领带/领结/领带夹"}

                        ]}


            ]}
        ,

        {"mid":"submenu-6",

            "hotLinks":[
            ],"brand":[
            ],"mlist":[
                    {"mhref":"/list/4162-4159.html","msort":"进口食品",
                        "menus":[
                                    {"shref":"/list/4170-4159.html","sname":"饼干蛋糕"}
                                ,
                                    {"shref":"/list/4171-4159.html","sname":"糖果/巧克力"}
                                ,
                                    {"shref":"/list/4172-4159.html","sname":"休闲零食"}
                                ,
                                    {"shref":"/list/4173-4159.html","sname":"冲调饮品"}
                                ,
                                    {"shref":"/list/4174-4159.html","sname":"牛奶"}

                        ]}
                   ,
                    {"mhref":"/list/4163-4159.html","msort":"地方特产",
                        "menus":[
                                    {"shref":"/list/4182-4159.html","sname":"新疆特产"}
                                ,
                                    {"shref":"/list/4183-4159.html","sname":"北京特产"}
                                ,
                                    {"shref":"/list/4184-4159.html","sname":"山西特产"}
                                ,
                                    {"shref":"/list/4185-4159.html","sname":"内蒙古特产"}
                                ,
                                    {"shref":"/list/4186-4159.html","sname":"福建特产"}
                                ,
                                    {"shref":"/list/4187-4159.html","sname":"湖南特产"}
                                ,
                                    {"shref":"/list/4188-4159.html","sname":"四川特产"}
                                ,
                                    {"shref":"/list/4189-4159.html","sname":"云南特产"}
                                ,
                                    {"shref":"/list/4190-4159.html","sname":"东北特产"}
                                ,
                                    {"shref":"/list/4195-4159.html","sname":"其他特产"}

                        ]}
                   ,
                    {"mhref":"/list/4164-4159.html","msort":"休闲食品",
                        "menus":[
                                    {"shref":"/list/4196-4159.html","sname":"坚果炒货"}
                                ,
                                    {"shref":"/list/4197-4159.html","sname":"肉干肉脯"}
                                ,
                                    {"shref":"/list/4198-4159.html","sname":"蜜饯果干"}
                                ,
                                    {"shref":"/list/4199-4159.html","sname":"无糖食品"}

                        ]}
                   ,
                    {"mhref":"/list/4165-4159.html","msort":"粮油调味",
                        "menus":[
                                    {"shref":"/list/4200-4159.html","sname":"米面杂粮"}
                                ,
                                    {"shref":"/list/4201-4159.html","sname":"食用油"}
                                ,
                                    {"shref":"/list/4202-4159.html","sname":"调味品"}
                                ,
                                    {"shref":"/list/4203-4159.html","sname":"南北干货"}
                                ,
                                    {"shref":"/list/4204-4159.html","sname":"方便食品"}
                                ,
                                    {"shref":"/list/4205-4159.html","sname":"有机食品"}

                        ]}
                   ,
                    {"mhref":"/list/4167-4159.html","msort":"饮料冲调",
                        "menus":[
                                    {"shref":"/list/4206-4159.html","sname":"饮用水"}
                                ,
                                    {"shref":"/list/4207-4159.html","sname":"饮料"}
                                ,
                                    {"shref":"/list/4208-4159.html","sname":"牛奶饮品"}
                                ,
                                    {"shref":"/list/4209-4159.html","sname":"咖啡/奶茶"}
                                ,
                                    {"shref":"/list/4210-4159.html","sname":"冲饮谷物"}
                                ,
                                    {"shref":"/list/4211-4159.html","sname":"蜂蜜/柚子茶"}
                                ,
                                    {"shref":"/list/4212-4159.html","sname":"即冲奶粉"}

                        ]}
                   ,
                    {"mhref":"/list/4169-4159.html","msort":"茗茶",
                        "menus":[
                                    {"shref":"/list/4213-4159.html","sname":"铁观音"}
                                ,
                                    {"shref":"/list/4214-4159.html","sname":"普洱"}
                                ,
                                    {"shref":"/list/4215-4159.html","sname":"龙井"}
                                ,
                                    {"shref":"/list/4216-4159.html","sname":"绿茶"}
                                ,
                                    {"shref":"/list/4217-4159.html","sname":"红茶"}
                                ,
                                    {"shref":"/list/4218-4159.html","sname":"乌龙茶"}
                                ,
                                    {"shref":"/list/4219-4159.html","sname":"花草茶"}
                                ,
                                    {"shref":"/list/4220-4159.html","sname":"花果茶"}
                                ,
                                    {"shref":"/list/4221-4159.html","sname":"养生茶"}
                                ,
                                    {"shref":"/list/4222-4159.html","sname":"黑茶"}
                                ,
                                    {"shref":"/list/4223-4159.html","sname":"白茶"}
                                ,
                                    {"shref":"/list/4224-4159.html","sname":"其他茶"}

                        ]}


            ]}
        ,

        {"mid":"submenu-7",

            "hotLinks":[
            ],"brand":[
            ],"mlist":[
                    {"mhref":"/list/4259-4258.html","msort":"潮流女包",
                        "menus":[
                                    {"shref":"/list/4265-4258.html","sname":"钱包"}
                                ,
                                    {"shref":"/list/4266-4258.html","sname":"手拿包/晚宴包"}
                                ,
                                    {"shref":"/list/4267-4258.html","sname":"单肩包"}
                                ,
                                    {"shref":"/list/4268-4258.html","sname":"双肩包"}
                                ,
                                    {"shref":"/list/4269-4258.html","sname":"手提包"}
                                ,
                                    {"shref":"/list/4270-4258.html","sname":"斜挎包"}
                                ,
                                    {"shref":"/list/4271-4258.html","sname":"钥匙包"}
                                ,
                                    {"shref":"/list/4272-4258.html","sname":"卡包/零钱包"}

                        ]}
                   ,
                    {"mhref":"/list/4260-4258.html","msort":"精品男包",
                        "menus":[
                                    {"shref":"/list/4273-4258.html","sname":"钱包/卡包"}
                                ,
                                    {"shref":"/list/4274-4258.html","sname":"男士手包"}
                                ,
                                    {"shref":"/list/4275-4258.html","sname":"商务公文包"}
                                ,
                                    {"shref":"/list/4276-4258.html","sname":"单肩/斜挎包"}

                        ]}
                   ,
                    {"mhref":"/list/4261-4258.html","msort":"功能箱包",
                        "menus":[
                                    {"shref":"/list/4277-4258.html","sname":"电脑包"}
                                ,
                                    {"shref":"/list/4278-4258.html","sname":"拉杆箱/拉杆包"}
                                ,
                                    {"shref":"/list/4279-4258.html","sname":"旅行包"}
                                ,
                                    {"shref":"/list/4280-4258.html","sname":"旅行配件"}
                                ,
                                    {"shref":"/list/4281-4258.html","sname":"休闲运动包"}
                                ,
                                    {"shref":"/list/4282-4258.html","sname":"登山包"}
                                ,
                                    {"shref":"/list/4283-4258.html","sname":"妈咪包"}
                                ,
                                    {"shref":"/list/4284-4258.html","sname":"书包"}
                                ,
                                    {"shref":"/list/4285-4258.html","sname":"腰包/胸包"}

                        ]}
                   ,
                    {"mhref":"/list/4262-4258.html","msort":"礼品",
                        "menus":[
                                    {"shref":"/list/4286-4258.html","sname":"火机烟具"}
                                ,
                                    {"shref":"/list/4287-4258.html","sname":"礼品文具"}
                                ,
                                    {"shref":"/list/4288-4258.html","sname":"军刀军具"}
                                ,
                                    {"shref":"/list/4289-4258.html","sname":"收藏品"}
                                ,
                                    {"shref":"/list/4290-4258.html","sname":"工艺礼品"}
                                ,
                                    {"shref":"/list/4291-4258.html","sname":"创意礼品"}
                                ,
                                    {"shref":"/list/4292-4258.html","sname":"礼盒礼券"}
                                ,
                                    {"shref":"/list/4293-4258.html","sname":"鲜花绿植"}
                                ,
                                    {"shref":"/list/4294-4258.html","sname":"婚庆用品"}
                                ,
                                    {"shref":"/list/4295-4258.html","sname":"美妆礼品"}
                                ,
                                    {"shref":"/list/4296-4258.html","sname":"古董把玩"}

                        ]}
                   ,
                    {"mhref":"/list/4263-4258.html","msort":"奢侈品",
                        "menus":[
                                    {"shref":"/list/4297-4258.html","sname":"箱包"}
                                ,
                                    {"shref":"/list/4298-4258.html","sname":"服饰"}
                                ,
                                    {"shref":"/list/4299-4258.html","sname":"腰带"}
                                ,
                                    {"shref":"/list/4300-4258.html","sname":"太阳镜/眼镜框"}
                                ,
                                    {"shref":"/list/4301-4258.html","sname":"配件"}
                                ,
                                    {"shref":"/list/4303-4258.html","sname":"名品腕表"}
                                ,
                                    {"shref":"/list/4304-4258.html","sname":"高档化妆品"}
                                ,
                                    {"shref":"/list/4302-4258.html","sname":"饰品"}

                        ]}
                   ,
                    {"mhref":"/list/4264-4258.html","msort":"婚庆",
                        "menus":[
                                    {"shref":"/list/4305-4258.html","sname":"婚嫁首饰"}
                                ,
                                    {"shref":"/list/4306-4258.html","sname":"婚纱摄影"}
                                ,
                                    {"shref":"/list/4307-4258.html","sname":"婚纱礼服"}
                                ,
                                    {"shref":"/list/4308-4258.html","sname":"婚庆礼品/用品"}
                                ,
                                    {"shref":"/list/4309-4258.html","sname":"婚宴"}

                        ]}
                   ,
                    {"mhref":"/list/4226-4225.html","msort":"流行男鞋",
                        "menus":[
                                    {"shref":"/list/4228-4225.html","sname":"商务休闲鞋"}
                                ,
                                    {"shref":"/list/4229-4225.html","sname":"正装鞋"}
                                ,
                                    {"shref":"/list/4230-4225.html","sname":"休闲鞋"}
                                ,
                                    {"shref":"/list/4231-4225.html","sname":"凉鞋/沙滩鞋"}
                                ,
                                    {"shref":"/list/4232-4225.html","sname":"男靴"}
                                ,
                                    {"shref":"/list/4233-4225.html","sname":"功能鞋"}
                                ,
                                    {"shref":"/list/4234-4225.html","sname":"拖鞋/人字拖"}
                                ,
                                    {"shref":"/list/4235-4225.html","sname":"雨鞋/雨靴"}
                                ,
                                    {"shref":"/list/4236-4225.html","sname":"传统布鞋"}
                                ,
                                    {"shref":"/list/4237-4225.html","sname":"鞋配件"}
                                ,
                                    {"shref":"/list/4238-4225.html","sname":"帆布鞋"}
                                ,
                                    {"shref":"/list/4239-4225.html","sname":"增高鞋"}
                                ,
                                    {"shref":"/list/4240-4225.html","sname":"工装鞋"}
                                ,
                                    {"shref":"/list/4241-4225.html","sname":"定制鞋"}

                        ]}
                   ,
                    {"mhref":"/list/4227-4225.html","msort":"时尚女鞋",
                        "menus":[
                                    {"shref":"/list/4242-4225.html","sname":"高跟鞋"}
                                ,
                                    {"shref":"/list/4243-4225.html","sname":"单鞋"}
                                ,
                                    {"shref":"/list/4244-4225.html","sname":"凉鞋"}
                                ,
                                    {"shref":"/list/4245-4225.html","sname":"女靴"}
                                ,
                                    {"shref":"/list/4246-4225.html","sname":"雪地靴"}
                                ,
                                    {"shref":"/list/4247-4225.html","sname":"踝靴"}
                                ,
                                    {"shref":"/list/4248-4225.html","sname":"筒靴"}
                                ,
                                    {"shref":"/list/4249-4225.html","sname":"妈妈鞋"}
                                ,
                                    {"shref":"/list/4250-4225.html","sname":"特色鞋"}
                                ,
                                    {"shref":"/list/4251-4225.html","sname":"鱼嘴鞋"}
                                ,
                                    {"shref":"/list/4252-4225.html","sname":"布鞋/绣花鞋"}
                                ,
                                    {"shref":"/list/4253-4225.html","sname":"马丁靴"}
                                ,
                                    {"shref":"/list/4254-4225.html","sname":"坡跟鞋"}
                                ,
                                    {"shref":"/list/4255-4225.html","sname":"松糕鞋"}
                                ,
                                    {"shref":"/list/4256-4225.html","sname":"内增高"}
                                ,
                                    {"shref":"/list/4257-4225.html","sname":"防水台"}

                        ]}


            ]}
        ,

        {"mid":"submenu-8",

            "hotLinks":[
            ],"brand":[
            ],"mlist":[
                    {"mhref":"/list/4019-4017.html","msort":"手机通讯",
                        "menus":[
                                    {"shref":"/list/4035-4017.html","sname":"手机"}
                                ,
                                    {"shref":"/list/4037-4017.html","sname":"对讲机"}

                        ]}
                   ,
                    {"mhref":"/list/4024-4017.html","msort":"运营商",
                        "menus":[
                                    {"shref":"/list/4039-4017.html","sname":"合约机"}
                                ,
                                    {"shref":"/list/4043-4017.html","sname":"装宽带"}
                                ,
                                    {"shref":"/list/4045-4017.html","sname":"办套餐"}

                        ]}
                   ,
                    {"mhref":"/list/4025-4017.html","msort":"手机配件",
                        "menus":[
                                    {"shref":"/list/4048-4017.html","sname":"电池/移动电源"}
                                ,
                                    {"shref":"/list/4057-4017.html","sname":"手机存储卡"}
                                ,
                                    {"shref":"/list/4049-4017.html","sname":"蓝牙耳机"}
                                ,
                                    {"shref":"/list/4051-4017.html","sname":"充电器/数据线"}
                                ,
                                    {"shref":"/list/4053-4017.html","sname":"手机耳机"}
                                ,
                                    {"shref":"/list/4055-4017.html","sname":"手机贴膜"}
                                ,
                                    {"shref":"/list/4058-4017.html","sname":"手机保护套"}
                                ,
                                    {"shref":"/list/4060-4017.html","sname":"车载配件"}
                                ,
                                    {"shref":"/list/4062-4017.html","sname":"iPhone配件"}
                                ,
                                    {"shref":"/list/4063-4017.html","sname":"创意配件"}
                                ,
                                    {"shref":"/list/4064-4017.html","sname":"便携/无线音响"}
                                ,
                                    {"shref":"/list/4065-4017.html","sname":"手机饰品"}

                        ]}
                   ,
                    {"mhref":"/list/4067-4066.html","msort":"摄影摄像",
                        "menus":[
                                    {"shref":"/list/4073-4066.html","sname":"数码相机"}
                                ,
                                    {"shref":"/list/4074-4066.html","sname":"单电/微单相机"}
                                ,
                                    {"shref":"/list/4075-4066.html","sname":"单反相机"}
                                ,
                                    {"shref":"/list/4076-4066.html","sname":"摄像机"}
                                ,
                                    {"shref":"/list/4077-4066.html","sname":"拍立得"}
                                ,
                                    {"shref":"/list/4078-4066.html","sname":"运动相机"}
                                ,
                                    {"shref":"/list/4079-4066.html","sname":"镜头"}
                                ,
                                    {"shref":"/list/4080-4066.html","sname":"户外器材"}
                                ,
                                    {"shref":"/list/4081-4066.html","sname":"影棚器材"}
                                ,
                                    {"shref":"/list/4082-4066.html","sname":"数码相框"}

                        ]}
                   ,
                    {"mhref":"/list/4068-4066.html","msort":"数码配件",
                        "menus":[
                                    {"shref":"/list/4083-4066.html","sname":"存储卡"}
                                ,
                                    {"shref":"/list/4084-4066.html","sname":"读卡器"}
                                ,
                                    {"shref":"/list/4085-4066.html","sname":"滤镜"}
                                ,
                                    {"shref":"/list/4086-4066.html","sname":"闪光灯/手柄"}
                                ,
                                    {"shref":"/list/4087-4066.html","sname":"相机包"}
                                ,
                                    {"shref":"/list/4088-4066.html","sname":"三脚架/云台"}
                                ,
                                    {"shref":"/list/4089-4066.html","sname":"相机清洁/贴膜"}
                                ,
                                    {"shref":"/list/4090-4066.html","sname":"机身附件"}
                                ,
                                    {"shref":"/list/4091-4066.html","sname":"镜头附件"}
                                ,
                                    {"shref":"/list/4092-4066.html","sname":"电池/充电器"}
                                ,
                                    {"shref":"/list/4093-4066.html","sname":"移动电源"}

                        ]}


            ]}
        ,

        {"mid":"submenu-9",

            "hotLinks":[
            ],"brand":[
            ],"mlist":[
                    {"mhref":"/list/4026-4023.html","msort":"大家电",
                        "menus":[
                                    {"shref":"/list/4031-4023.html","sname":"平板电视"}
                                ,
                                    {"shref":"/list/4032-4023.html","sname":"空调"}
                                ,
                                    {"shref":"/list/4033-4023.html","sname":"冰箱"}
                                ,
                                    {"shref":"/list/4034-4023.html","sname":"洗衣机"}
                                ,
                                    {"shref":"/list/4036-4023.html","sname":"家庭影院"}
                                ,
                                    {"shref":"/list/4038-4023.html","sname":"DVD播放机"}
                                ,
                                    {"shref":"/list/4040-4023.html","sname":"迷你音响"}
                                ,
                                    {"shref":"/list/4042-4023.html","sname":"烟机/灶具"}
                                ,
                                    {"shref":"/list/4044-4023.html","sname":"热水器"}
                                ,
                                    {"shref":"/list/4046-4023.html","sname":"消毒柜/洗碗机"}
                                ,
                                    {"shref":"/list/4047-4023.html","sname":"冰柜/冰吧"}
                                ,
                                    {"shref":"/list/4050-4023.html","sname":"酒柜"}
                                ,
                                    {"shref":"/list/4052-4023.html","sname":"家电配件"}
                                ,
                                    {"shref":"/list/4054-4023.html","sname":"功放"}

                        ]}
                   ,
                    {"mhref":"/list/4027-4023.html","msort":"生活电器",
                        "menus":[
                                    {"shref":"/list/4096-4023.html","sname":"加湿器"}
                                ,
                                    {"shref":"/list/4097-4023.html","sname":"扫地机器人"}
                                ,
                                    {"shref":"/list/4098-4023.html","sname":"吸尘器"}
                                ,
                                    {"shref":"/list/4099-4023.html","sname":"挂烫机/熨斗"}
                                ,
                                    {"shref":"/list/4100-4023.html","sname":"电话机"}
                                ,
                                    {"shref":"/list/4101-4023.html","sname":"清洁机"}
                                ,
                                    {"shref":"/list/4102-4023.html","sname":"除湿机"}
                                ,
                                    {"shref":"/list/4103-4023.html","sname":"干衣机"}
                                ,
                                    {"shref":"/list/4103-4023.html","sname":"干衣机"}
                                ,
                                    {"shref":"/list/4104-4023.html","sname":"收录/音机"}
                                ,
                                    {"shref":"/list/4105-4023.html","sname":"电风扇"}
                                ,
                                    {"shref":"/list/4106-4023.html","sname":"冷风扇"}
                                ,
                                    {"shref":"/list/4107-4023.html","sname":"其他生活电器"}
                                ,
                                    {"shref":"/list/4108-4023.html","sname":"生活电器配件"}
                                ,
                                    {"shref":"/list/4110-4023.html","sname":"净水设备"}
                                ,
                                    {"shref":"/list/4112-4023.html","sname":"饮水机"}
                                ,
                                    {"shref":"/list/4094-4023.html","sname":"取暖电器"}

                        ]}
                   ,
                    {"mhref":"/list/4028-4023.html","msort":"厨房电器",
                        "menus":[
                                    {"shref":"/list/4114-4023.html","sname":"料理/榨汁机"}
                                ,
                                    {"shref":"/list/4118-4023.html","sname":"豆浆机"}
                                ,
                                    {"shref":"/list/4124-4023.html","sname":"电压力锅"}
                                ,
                                    {"shref":"/list/4122-4023.html","sname":"电饭煲"}
                                ,
                                    {"shref":"/list/4125-4023.html","sname":"面包机"}
                                ,
                                    {"shref":"/list/4127-4023.html","sname":"咖啡机"}
                                ,
                                    {"shref":"/list/4128-4023.html","sname":"微波炉"}
                                ,
                                    {"shref":"/list/4129-4023.html","sname":"电烤箱"}
                                ,
                                    {"shref":"/list/4131-4023.html","sname":"电磁炉"}
                                ,
                                    {"shref":"/list/4134-4023.html","sname":"电饼铛/烧烤盘"}
                                ,
                                    {"shref":"/list/4136-4023.html","sname":"煮蛋器"}
                                ,
                                    {"shref":"/list/4138-4023.html","sname":"酸奶机"}
                                ,
                                    {"shref":"/list/4139-4023.html","sname":"电炖锅"}
                                ,
                                    {"shref":"/list/4141-4023.html","sname":"电水壶/热水瓶"}
                                ,
                                    {"shref":"/list/4143-4023.html","sname":"多用途锅"}
                                ,
                                    {"shref":"/list/4145-4023.html","sname":"果蔬解毒机"}
                                ,
                                    {"shref":"/list/4146-4023.html","sname":"其他厨房电器"}
                                ,
                                    {"shref":"/list/4149-4023.html","sname":"养生壶/煎药壶"}
                                ,
                                    {"shref":"/list/4150-4023.html","sname":"电热饭盒"}

                        ]}
                   ,
                    {"mhref":"/list/4029-4023.html","msort":"个护健康",
                        "menus":[
                                    {"shref":"/list/4152-4023.html","sname":"剃须刀"}
                                ,
                                    {"shref":"/list/4155-4023.html","sname":"剃/脱毛器"}
                                ,
                                    {"shref":"/list/4156-4023.html","sname":"口腔理护"}
                                ,
                                    {"shref":"/list/4157-4023.html","sname":"电吹风"}
                                ,
                                    {"shref":"/list/4158-4023.html","sname":"美容器"}
                                ,
                                    {"shref":"/list/4160-4023.html","sname":"理发器"}
                                ,
                                    {"shref":"/list/4161-4023.html","sname":"卷/直发器"}
                                ,
                                    {"shref":"/list/4166-4023.html","sname":"按摩椅"}
                                ,
                                    {"shref":"/list/4168-4023.html","sname":"按摩器"}
                                ,
                                    {"shref":"/list/4175-4023.html","sname":"足浴盆"}
                                ,
                                    {"shref":"/list/4177-4023.html","sname":"健康秤/厨房秤"}
                                ,
                                    {"shref":"/list/4178-4023.html","sname":"血糖仪"}
                                ,
                                    {"shref":"/list/4179-4023.html","sname":"体温计"}
                                ,
                                    {"shref":"/list/4180-4023.html","sname":"其他健康电器"}
                                ,
                                    {"shref":"/list/4181-4023.html","sname":"计步器/脂肪检测仪"}

                        ]}
                   ,
                    {"mhref":"/list/4030-4023.html","msort":"五金家装",
                        "menus":[
                                    {"shref":"/list/4352-4023.html","sname":"厨卫五金"}
                                ,
                                    {"shref":"/list/4353-4023.html","sname":"门铃"}
                                ,
                                    {"shref":"/list/4354-4023.html","sname":"电器开关"}
                                ,
                                    {"shref":"/list/4355-4023.html","sname":"电工电料"}
                                ,
                                    {"shref":"/list/4356-4023.html","sname":"监控安防"}
                                ,
                                    {"shref":"/list/4357-4023.html","sname":"电线/线缆"}
                                ,
                                    {"shref":"/list/4191-4023.html","sname":"电动工具"}
                                ,
                                    {"shref":"/list/4192-4023.html","sname":"手动工具"}
                                ,
                                    {"shref":"/list/4193-4023.html","sname":"仪表仪器"}
                                ,
                                    {"shref":"/list/4194-4023.html","sname":"浴霸/排气扇"}
                                ,
                                    {"shref":"/list/4346-4023.html","sname":"灯具"}
                                ,
                                    {"shref":"/list/4347-4023.html","sname":"LED灯"}
                                ,
                                    {"shref":"/list/4348-4023.html","sname":"洁身器"}
                                ,
                                    {"shref":"/list/4349-4023.html","sname":"水槽"}
                                ,
                                    {"shref":"/list/4350-4023.html","sname":"龙头"}
                                ,
                                    {"shref":"/list/4351-4023.html","sname":"淋浴花洒"}

                        ]}
                   ,
                    {"mhref":"/list/4572-4571.html","msort":"烹饪锅具",
                        "menus":[
                                    {"shref":"/list/4578-4571.html","sname":"炒锅"}
                                ,
                                    {"shref":"/list/4579-4571.html","sname":"煎锅"}
                                ,
                                    {"shref":"/list/4580-4571.html","sname":"压力锅"}
                                ,
                                    {"shref":"/list/4581-4571.html","sname":"蒸锅"}
                                ,
                                    {"shref":"/list/4582-4571.html","sname":"汤锅"}
                                ,
                                    {"shref":"/list/4583-4571.html","sname":"锅具套装"}
                                ,
                                    {"shref":"/list/4584-4571.html","sname":"煲类"}
                                ,
                                    {"shref":"/list/4585-4571.html","sname":"水壶"}
                                ,
                                    {"shref":"/list/4586-4571.html","sname":"火锅"}

                        ]}


            ]}

    ]
};

//#endregion

