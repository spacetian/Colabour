
$(document).ready(function () {
    

    DisplayRateProgress(); // 

    mincartDo(); // 购物车

    ShowProductList();

})

/* 夺宝进度条操作*/
function DisplayRateProgress() {
    var FinishOrder = $(".w_number").children()[0].dataset.value;
    var TotalOrder = $(".w_number").children()[1].dataset.value;
    var rate = 100 *FinishOrder/TotalOrder +"%";
    $(".w_line").children().css("width", rate);

}

// #region 购物车

/* 购物车相关*/
function mincartDo(){
    $(".cartit").live("mouseover", minicartonload);
    $("#delect_minicart").live("click",
    function () {
        var emp1 = $(this).next().val();
        var emp2 = $(this).next().next().val();
        $.ajax({
            url: "/delshoppingcartbyid.htm?shoppingCartId=" + emp1 + "&goodsInfoId=" + emp2,
            async: false,
            success: function (dats) {
                if (dats == 1) {
                    minicartonload();
                }
            }
        });
    });
    //预加载mini购物车
    minicartonload();
}

function minicartonload() {
    $(".mcBoxList").html('');
    $(".mcTotalFee").html('0.00');
    $(".cartNum").html('0');
    $(".mcNumChecked").html('0');
    $.ajaxSetup({
        cache: false
    });
    $.ajax({
        url: "/minisscart.htm",
        async: false,
        success: function (datee) {
            var cartgoods = datee.shopcart.miniGoodsList;
            //alert("cartgoods"+cartgoods);
            var cust = datee.cust;
            //alert("cust"+cust);
            if (cust != null) {
                $(".cart_empty").html("<p style='height:35px;'>您的购物车是空的<br /></p>");
            }
            var empvalue = 0;
            //设置我的购物车显示购物车商品数量
            if (cartgoods != null) {
                $(".sc_num em").html(cartgoods.length);
            } else {
                $(".sc_num em").html("0");
            }
            //比如一件商品买了3件,详细统计购买商品数量
            var countgoods = 0;
            //购物车中有商品
            if (cartgoods != null && cartgoods.length > 0) {
                $(".cart_empty").addClass("none");
                $(".cart_cont").removeClass("none");
                //mini购物车头部
                //循环输出购物车中的商品
                $(".mcBoxList").html("");
                for (var i = 0; i < cartgoods.length; i++) {
                    countgoods += cartgoods[i].buNum;
                    var cartgood = "";
                    if (cartgoods[i].fitId == null) {
                        cartgood = ' <div class="mcOrder clearfix">' +

                        ' <div class="mcItem">' + '<a  href="/item/' + cartgoods[i].goodsInfoId + '" class="img">' + '<div class="table-cell">' + '   <i></i><img src="' + cartgoods[i].productPic + '" alt="">' + '  </div>' + ' </a>' + '</div>' + '<div class="mcSqe">' + '<p><a  href="/item/' + cartgoods[i].goodsInfoId + '">' + cartgoods[i].productName + '</a></p>' + '</div>' + ' <div class="mcAmount" style="position:relative;left:30px;">' +
                        //'<span class="minus"></span>'+
                        '<span class="amount">' + cartgoods[i].buNum + '</span>' +
                        //'<span class="plus"></span>'+
                        '</div>' + '<div class="mcCost">' + '<a href="#" class="del"  id = "delect_minicart">删除</a>' + "<input type= 'hidden' class= 'goodsid' value = '" + cartgoods[i].shoppingCartId + "'>" + "<input type= 'hidden' class= 'goodsinfo' value = '" + cartgoods[i].goodsInfoId + "'>" + '<span class="mcPrice">&yen;' + cartgoods[i].productPrice + '<em style="color:#666">×' + cartgoods[i].buNum + '</em></span>' + ' </div>' + '</div>';
                        $(".mcBoxList").append(cartgood);
                    } else {
                        var cartgood = "<div class='tz-bar clearfix'>" +

                        "<div class='ct_info'>[套装]" + cartgoods[i].miniFit.fitName + "<span class='ct_price ml10'><b>优惠：</b>&yen;" + cartgoods[i].miniFit.fitPrice + "<em style='color:#666'>×" + cartgoods[i].buNum + "</em></span>" + "</div>" + "<div class='cout_text pa'></div>" +

                        '<a href="#" class="del"  id = "delect_minicart">删除</a>' + "<input type= 'hidden' class= 'goodsid' value = '" + cartgoods[i].shoppingCartId + "'>" + "<input type= 'hidden' class= 'goodsinfo' value = '" + cartgoods[i].goodsInfoId + "'>" + "</div>";
                        $(".mcBoxList").append(cartgood);

                        var goodsList = cartgoods[i].miniFit.miniGoods;
                        //套装中货品的销售价格
                        var suitPrice = 0;
                        for (var j = 0; j < goodsList.length; j++) {
                            cartgood = ' <div class="mcOrder tzOrder clearfix">' +

                            ' <div class="mcItem">' + '<a  href="/item/' + goodsList[j].goodsInfoId + '" class="img">' + '<div class="table-cell">' + '   <i></i><img src="' + goodsList[j].productPic + '" alt="">' + '  </div>' + ' </a>' + '</div>' + '<div class="mcSqe">' + '<p><a  href="/item/' + goodsList[j].goodsInfoId + '">' + goodsList[j].productName + '</a></p>' + '</div>' + '<div class="mcCost">' + '<span class="mcPrice">&yen;' + goodsList[j].productPrice + '<em style="color:#666">×' + cartgoods[i].buNum + '</em></span>' + ' </div>' + '</div>';
                            suitPrice = suitPrice + goodsList[j].productPrice;
                            $(".mcBoxList").append(cartgood);

                        }
                    }

                    $(".mcOrder").each(function () {
                        var $this = $(this);
                        $this.mouseover(function () {
                            $this.find(".minus, .plus").css("visibility", "visible");
                            $this.find(".del").show();
                        }).mouseout(function () {
                            $this.find(".minus, .plus").css("visibility", "hidden");
                            $this.find(".del").hide();
                        });
                    });

                    //计算总价格
                    if (cartgoods[i].fitId == null) {

                        empvalue = accAdd(empvalue, accMul(cartgoods[i].productPrice, cartgoods[i].buNum));
                    } else {

                        empvalue = accAdd(empvalue, accMul(suitPrice - cartgoods[i].miniFit.fitPrice, cartgoods[i].buNum));
                    }

                }
                //设置mini购物车底部
                $(".mcNumTotal").text(countgoods);
                $(".mcNumChecked").text(countgoods);
                $(".cartNum").text(countgoods);
                $(".mcTotalFee").text(empvalue);
                $(".emCartBox").hide();
            } else {
                $(".emCartBox").show();

            }

        }
    });

};

// #endregion

// #region NAV
    function clickNav(url, sort) {
        $.ajax({
            url: "/navsort.htm?navsort=" + sort,
            async: false,
            success: function (date) { }
        });
        //window.location.href="/"+url;
        if (url.indexOf("ttp://") != -1) {
            window.open(url);
        } else {
            window.open("/" + url);
        }
    }

//------------------搜索提示-liangck-20151127
$(".inputSearch").bind('input propertychange',
function () {
    $.getJSON("/completionWords.htm?t=" + new Date().getTime(), {
        keyWords: $.trim($(this).val())
    },
    function (data) {
        if (data.length > 0) {
            $(".ex_search ul").html("");
            data.forEach(function (c) {
                $(".ex_search ul").append('<li class="search-item"><a href="javascript:;" class="completion-words">' + c.substring(0, 46) + '</a><a class="del_history" href="javascript:;"style="display: none;">删除</a></li>');
            });
            $(".ex_search").show();
        } else {
            $(".ex_search").hide();
        }
    });
});
$(".ex_search").on("click", "ul li",
function () {
    window.location.href = "/goods/searchproduct2.html?title=" + $(this).find(".completion-words").html();
});
$(".close_ex").click(function () {
    $(".ex_search").hide();
    $(".inputSearch").blur();
});
var _n = $(".search-item").length - 1;
$("body").keydown(function (event) {
    if (event.keyCode == 38) {
        if ($(".search-item.cur").length > 0) {
            var _index = $(".search-item.cur").index();
            $(".search-item:eq(" + (_index - 1) + ")").addClass("cur").siblings(".cur").removeClass("cur");
            $(".inputSearch").val($(".search-item.cur").find(".completion-words").html());
        } else {
            $(".search-item:eq(" + (_n) + ")").addClass("cur");
            $(".inputSearch").val($(".search-item.cur").find(".completion-words").html());
        };
    };
    if (event.keyCode == 40) {
        if ($(".search-item.cur").length > 0 && $(".search-item.cur").index() !== _n) {
            var _index = $(".search-item.cur").index();
            $(".search-item:eq(" + (_index + 1) + ")").addClass("cur").siblings(".cur").removeClass("cur");
            $(".inputSearch").val($(".search-item.cur").find(".completion-words").html());
        } else if ($(".search-item.cur").index() == _n) {
            $(".search-item:eq(0)").addClass("cur").siblings(".cur").removeClass("cur");
            $(".inputSearch").val($(".search-item.cur").find(".completion-words").html());
        } else {
            $(".search-item:eq(0)").addClass("cur");
            $(".inputSearch").val($(".search-item.cur").find(".completion-words").html());
        };
    };
});

// #endregion

// #region show product  list
/* 获取夺宝上架的所有产品*/
function ShowProductList() {
    log("showproductlist begin");
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/yayu-web/good/list/lottery", // ServiceProvider.GetAllLotteryProduct,
        data: {},
        dataType:"JSON",
        success: function (result) {
            log("ShowProductList 调用成功 ");
            $(".section-02").empty();
            var sProductAllList = "";
            log(result);
            if (result != null && result != "") {
                var categoryRecord = new Array();
                var floor = 0;
                $.each(result, function (index, item) {

                    //1 添加产品类别
                    if ((categoryRecord.length > 0  && categoryRecord.indexOf(item.categoryId) <0) || categoryRecord.length == 0 )
                    {
                        floor = floor + 1;
                        categoryRecord[index] = item.categoryId;
                        sProductAllList = sProductAllList + " <div class='proLists' name='" + item.categoryName + "' id='" + item.categoryId + "'>" +
                                                                 "<div class='title'><h2> <span>" + floor + "F</span>" + item.categoryName + "</h2> </div> ";

                     
                        //2 添加产品类别二级

                        // 2.1 添加特别商品
                        sProductAllList = sProductAllList + "<div class='proWp'>";
                        sProductAllList = sProductAllList +
                                          " <div class='proBox'>                                                                                 "+
                                          "     <a href='http://kstore.qianmi.com/item/4293' target='_blank'>                                    "+
                                          "         <img src='Images/CgQSa1Yk2OGAejErAAObX3W7qlk203.jpg' style='display: inline; height:540px;'> "+
                                          "     </a>                                                                                             "+
                                          "     <div class='pLinks'>                                                                             "+
                                          "         <ul>                                                                                         "+
                                          "             <li>                                                                                     "+
                                          "                 <a href='http://kstore.qianmi.com/list/3887-3886.html' target='_blank'>女装</a>      "+
                                          "             </li>                                                                                    "+
                                          "             <li>                                                                                     "+
                                          "                 <a href='http://kstore.qianmi.com/list/3888-3886.html' target='_blank'>男装</a>      "+
                                          "             </li>                                                                                    "+
                                          "             <li>                                                                                     "+
                                          "                 <a href='http://kstore.qianmi.com/list/3889-3886.html' target='_blank'>内衣</a>      "+
                                          "             </li>                                                                                    "+
                                          "             <li>                                                                                     "+
                                          "                 <a href='http://kstore.qianmi.com/list/3890-3886.html' target='_blank'>服饰配件</a>  "+
                                          "             </li>                                                                                    "+
                                          "         </ul>                                                                                        "+
                                          "     </div>                                                                                           "+
                                          "     <!--pLinks -->                                                                                   "+
                                          " </div>                                                                                               ";
                        // 3 添加产品
                        sProductAllList += "<div class='proCon'>";
                        sProductAllList += "<div class='proItem' style='display:block;'>";
                        sProductAllList += "<ul class='proList'>";


                        $.each(result, function (indexT, itemT) {
                            if (itemT.categoryId == item.categoryId) {
                                sProductAllList = sProductAllList +
                                " <li>                                                                                            " +
                                "     <div class='activeDiv'>                                                                     " +
                                "         <a class='p-img' href='http://kstore.qianmi.com/item/4354' target='_blank'>             " +
                                "             <img src='Images/ctdyCVVti8SAc8flAAGTsI_9Gbc262.jpg' style='display: inline;'>      " +
                                "         </a>                                                                                    " +
                                "         <p class='p-name'>                                                                      " +
                                "             <a href='http://kstore.qianmi.com/item/4354' target='_blank'>                       ";
                                sProductAllList = sProductAllList + itemT.goodName +
                                "             </a>                                                                                " +
                                "         </p>                                                                                    " +
                                "         <p class='p-price'>                                                                     " +
                                "             ¥                                                                                   ";
                                sProductAllList = sProductAllList +


                                "             <strong>" + itemT.price + "</strong>                                                             " +
                                "         </p>                                                                                    " +
                                "         <div class='divContent'>                                                                " +
                                "             <div class='w_line'>                                                                " +
                                "                 <span class='spanRate'></span>                                                  " +
                                "             </div>                                                                              " +
                                "             <ul class='w_number'>                                                               ";

                                sProductAllList = sProductAllList +

                                "                 <li class='w_amount' data-value='"+ itemT.salesNum +"'>"+ itemT.salesNum +"</li>                                    " +
                                "                 <li class='w_amount' data-value='"+ itemT.totalNum +"'>" + itemT.totalNum +"</li>                                    " +
                                "                 <li class='w_amount' data-value='"+ itemT.leftNum +"'>"+ itemT.leftNum +"</li>                                    " +
                                "                 <li>已夺宝人次</li>                                                             " +
                                "                 <li>总需人次</li>                                                               " +
                                "                 <li>剩余人次</li>                                                               " +
                                "             </ul>                                                                               " +
                                "             <div class='divBtn'>                                                                " +
                                "                 <ul>                                                                            " +
                                "                     <li>                                                                        " +
                                "                         <a class='btnBuy' href='Subject_ProductDetails.html?lotteryId="+ itemT.lotteryId +"'>立即夺宝</a>       " +
                                "                     </li>                                                                       " +
                                "                     <li>                                                                        " +
                                "                         <a href='javascript:cartoon("+ itemT.lotteryId +",1)' class='btnCart'></a>                " +
                                "                     </li>                                                                       " +
                                "                     <li>                                                                        " +
                                "                         <input type='hidden' value='1.0' class=''>                              " +
                                "                     </li>                                                                       " +
                                "                 </ul>                                                                           " +
                                "             </div>                                                                              " +
                                "         </div>                                                                                  " +
                                "     </div>                                                                                      " +
                                " </li>                                                                                           ";
                            }

                        })

                        sProductAllList += "</ul>";

                        sProductAllList += "</div>";  // end of proItem
                        sProductAllList += "</div>"; // end of proCon
                        sProductAllList += "</div>";  // end of proWp
                    


                        sProductAllList = sProductAllList + "</div>"; // 添加产品类别
                    }
             
                })
            }
           $(".section-02").append(sProductAllList);
        }

    })



 
}

//#endregion