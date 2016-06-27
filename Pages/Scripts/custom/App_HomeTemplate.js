

    $(function(){

        $("#InfoForm").validate();
        $("#sendCodeForm").validate();
        $("#updatePassForm").validate();
        $("#checkPassForm").validate();

        $("#chooseAdminImg").click(function(){
            i=1;
            art.dialog.open('queryImageManageByPbAndCidForChoose.htm?location=Head&CSRFToken=0b5606f8-27b2-4262-a34b-9dddc78d0b23&size=10000', {
                lock: true,
                opacity:0.3,
                width: '900px',
                height: '400px',
                title: '选择图片'
            });
        });

        var logoflag = "http://img01.ningpai.com/1426758561857.jpg";
        if(logoflag==null||logoflag==''){
            //获取登录logo
            $.ajax({
                url: "ajaxGetSysBasic.htm",

                success: function(data){
                    if(data.indexLogo!=""){
                        $("#logo").attr("src",data.indexLogo);
                    }
                }});
        }


        $.ajax({
            url:"getBasicSetName.htm",
            success:function(data){
                if(data!=""){
                    $('#link').attr("href",data.bsetAddress);
                    $('#shouye').attr("href",data.bsetAddress);
                    $("title").html("首页模板 - "+data.bsetName);
                    $('#thirdlink').attr("href",data.bsetThirdAddress);
                    jQuery('#erweima').qrcode({
                        render  : "canvas",
                        width   : 50,
                        height  : 50,
                        text    : data.bsetAddress
                    });
                }
            }});



        /* 导航弹出菜单 */

        $('.nav ul li').each(function(){
            $(this).mouseenter(function(e){
                var positionX =$(this).width()/2 - 200;
                $(this).append('<div class="menu_down popover bottom" style="position:absolute;top: 32px; left: ' + positionX + 'px; display: block;"><div class="arrow" style="left: 44%;"></div><div class="popover-content">' + $(this).next().html() + '</div></div>');
                $(this).mouseleave(function(){
                    $(this).find(".menu_down").remove();
                });
            });

        });


        $.ajax({
            url: "initNotice.htm?"+Math.random(),
            context: document.body,
            async:true,
            success: function(data){

                /* 顶部右侧功能辅助导航 */
                var message_num = data.count,//信息数量
                    $message = '';

                if(data.list!=null&&data.list.length!=0){
                    /* for (var i = 0; i < data.list.length; i++) {
                            var d= new Date(data.list[i].payTime);
                             $message+='<p><a href="orderlist.htm?menuId=89&menuParentId=1165&myselfId=947&orderCode='+data.list[i].orderNo+'"';
                             if(i==0){
                                 $message+='class="text-danger"';
                             }
                             $message+='>';
                             $message+='<span>'+(setNumToTen(d.getMonth()+1))+'-'+setNumToTen(d.getDate())+'</span>';
                             $message+='<i class="glyphicon glyphicon-comment"></i>';
                             $message+='订单:'+data.list[i].orderNo+'</a>';
                             $message+='</p>';
                    }
                  $(".message_list").html($message);
                  $("#messagecount").html('您有<span>'+message_num+'</span>条未读消息');*/
                    $(".youjian .badge").html(message_num);
                } else{
                    $(".youjian .badge").html("0");
                }

            }});


    });


function setNumToTen(data){
    if(data<10){
        return "0"+data;
    }else{
        return data;
    }

}


function goOut(){
    $('#goout').modal('show');
}

var uurl='getmobile.htm?CSRFToken=0b5606f8-27b2-4262-a34b-9dddc78d0b23';

function fankui(){
    if($("#feedbackcontent").val()!=''){
        $("#feedbackcontent").removeClass('error');
        jQuery.ajax({
            url : "sendemailusersite.htm?CSRFToken=0b5606f8-27b2-4262-a34b-9dddc78d0b23&feedbackname=qmbbc&feedbackcontent="+$("#feedbackcontent").val(),
            success : function(html) {
                if (html == 1) {
                    $('#feedback').modal('hide');
                    $("#feedbackcontent").val('');
                    showNoAlert('反馈成功');
                } else {
                    $('#feedback').modal('hide');
                    showNoAlert('反馈失败');

                }
            }
        });
    }else{
        $("#feedbackcontent").addClass('error');
    }

}

/**
 * 删除单个记录的确认框
 * @param deleteUrl 删除链接。
 */
function showNoAlert(tips) {
    $("#ViewmodalDialog").remove();
    var confirmDialog =
    '<div class="modal fade" id="ViewmodalDialog"  role="dialog">'+
    '    <div class="modal-dialog">'+
    '        <div class="modal-content">'+
    '            <div class="modal-header">'+
    '                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
    '               <h4 class="modal-title">系统提示</h4>'+
    '           </div>'+
    '           <div class="modal-body">'+tips+
    '           </div>'+
    '           <div class="modal-footer">'+
    '               <button type="button" class="btn btn-default" data-dismiss="modal" onclick="$(\'#ViewmodalDialog\').modal(\'hide\');">确定</button>'+
    '           </div>'+
    '       </div>'+
    '   </div>'+
    '</div>';
    $(document.body).append(confirmDialog);
    $('#ViewmodalDialog').modal('show');
}

var updateFlag = '';
function modifyPwd(){
    $('#mcode').val('');
    $('#userkeyold').val('');
    //修改密码
    updateFlag = '0';
    $.ajax({
        type : 'post',
        url : uurl,
        success : function(data) {
            if(data.mobile == null || data.mobile.trim().length == 0){
                $("#dalog-checkPass-sms").modal('show');
            }else{
                $("#viewmobile").text(data.mobile);
                $("#dalog-send-sms").modal("show");
            }
        }
    });
}


function modifyInfo(){
    $('#mcode').val('');
    $('#userkeyold').val('');
    //修改资料
    updateFlag = '1';
    $.ajax({
        type : 'post',
        url : uurl,
        success : function(data) {
            if(data.mobile == null || data.mobile.trim().length == 0){
                $("#dalog-checkPass-sms").modal("show");
            }else{
                $("#viewmobile").text(data.mobile);
                $("#dalog-send-sms").modal("show");
            }
        }
    });
}

function sendCode(){
    // var url = 'getcodecore.htm?code='+code+"&CSRFToken="+$("#hi_token").val();
    var url = 'sendcodecore.htm?mobile='+$(".mobile").text()+"&CSRFToken=0b5606f8-27b2-4262-a34b-9dddc78d0b23";
    $.ajax({
        type : 'post',
        url : url,
        async : false,
        success : function(data) {
            if (data > 0) {

                time($("#sendCodeButton"));
                $("#sendCodeButtonTip").text('发送成功');
            } else if(data == 0) {
                $("#sendCodeButtonTip").text('发送失败');
            }else if(data == -1){
                $("#sendCodeButtonTip").text('60秒内只能发送一次!');
            }
        }
    });
}

var wait = 60;
function time(o) {
    if (wait == 0) {
        o.attr("disabled", false);
        o.val('发送验证码');
        wait = 60;
    } else {
        o.attr("disabled", true);
        o.val("重新发送(" + wait + ")");
        wait--;
        setTimeout(function() {
            time(o);
        },
        1000);
    }
}


function checkCode(){
    if( $("#sendCodeForm").valid()){
        var url = 'getcodecore.htm?code='+$("#mcode").val()+"&CSRFToken=0b5606f8-27b2-4262-a34b-9dddc78d0b23";
        $.ajax({
            type : 'post',
            url : url,
            async : false,
            success : function(data) {
                if (data > 0) {

                    if(updateFlag=='0'){
                        $("#dalog-send-sms").modal("hide");
                        $("#dalog-updatepass-sms").modal('show');
                    }else{
                        getMobileForm();
                        $("#dalog-send-sms").modal("hide");
                        $("#dalog-Info-sms").modal('show');
                    }


                } else if(data == 0) {
                    $("#mcode").addClass('error');
                    $("#errorCode").html("<label class='error'>验证码不正确</label>");
                    return;
                }else if(data == -1){
                    $("#mcode").addClass('error');
                    $("#errorCode").html("<label class='error'>验证码已过期</label>");

                    return;
                }
            }
        });
    }


}

function checkPass(){
    if($("#checkPassForm").valid()){
        var userkey=$("#userkeyold");
        var url="checkUserKeyMain.htm?userKey="+userkey.val()+"&CSRFToken=0b5606f8-27b2-4262-a34b-9dddc78d0b23";
        $.ajax({
            type: 'post',
            url:url,
            async:false,
            success: function(data) {
                if (data > 0){
                    $("#dalog-checkPass-sms").modal('hide');
                    if(updateFlag=='0'){
                        $("#dalog-updatepass-sms").modal('show');
                    }else{
                        getMobileForm();
                        $("#dalog-Info-sms").modal('show');
                    }
                } else {
                    $("#userkeyold").addClass('error');
                    $("#oldpassuse").html('<label class="error">原始密码不正确</label>');
                }
            }
        });
    }

}

function getMobileForm(){
    $.ajax({
        type : 'post',
        url : 'getmobile.htm?CSRFToken=0b5606f8-27b2-4262-a34b-9dddc78d0b23',
        success : function(data) {
            if(data.mobile != null && data.mobile.trim().length != 0){
                $("#mobileupdate").val(data.mobile);
            }

        }
    });
}
function updatepass(){
    if($("#updatePassForm").valid()){
        var bValid = true;
        var userkey=$("#userkey"),
        newuserkey=$("#newuserkey");
        var url="checkUserKey.htm?userKey="+userkey.val()+"&CSRFToken=0b5606f8-27b2-4262-a34b-9dddc78d0b23";
        $.ajax({
            type: 'post',
            url:url,
            async:false,
            success: function(data) {
                if (data > 0){
                    bValid=true&&bValid;
                } else {
                    $("#userkey").addClass('error');
                    $("#oldpass").html('<label class="error">原始密码不正确</label>');
                    bValid=false&&bValid;
                }
            }
        });

        if(bValid){
            var url="modifiedUserKey.htm?userKey="+userkey.val()+"&newuserkey="+newuserkey.val()+"&CSRFToken=0b5606f8-27b2-4262-a34b-9dddc78d0b23";
            $.ajax({
                type: 'post',
                url:url,
                async:false,
                success: function(data) {
                    if (data > 0){
                        $("#dalog-updatepass-sms").modal('hide');
                        showNoAlert('修改成功');
                    } else {
                        $("#dalog-updatepass-sms").modal('hide');
                        $("#mcode").val('');
                        showNoAlert('修改失败');
                    }
                }
            });
        }


    }


}




//图片回调
function saveChoooseImageHead(url,id) {
    if(typeof (url) != 'string') {
        url = url[0];
    }
    if(url.indexOf(',')!=-1){
        url=url.substring(0,url.indexOf(','));
    }

    $("#headImgs").attr("src",url);
    $("#photoImg1").val(url);

}

function subInfoForm(){
    if($("#InfoForm").valid()){
        $("#InfoForm").submit();
    }
}




var ckey = 'guide_step';
var path = '/';
$(document).ready(function() {
    $(".shop-guide-wrapper").hide();
    continueLastStep();
});
//根据cookie判断跳转的页面
function continueLastStep(){
    var step = $.cookie(ckey);
    if(step==null||step=='0'){
        // 记录向导的步骤
        $.cookie(ckey, '0', { expires: 365, path: path });
        $("#step-0").show();
    }else{
        $("#step-"+step).show();
    }
}
// 跳转到某个步骤
function nextStep(step){
    if(step=='1'){  //开始向导
        $.cookie('guideSidebar', null);
        $.cookie('closeAutoGuide', 'true', { expires: 1 });  //关闭自动弹出开店向导
        $("#guideSidebar").removeClass("hide-i");
    }
    // cookie值修改
    $.cookie(ckey, step, { expires: 365, path: path });
    $(".shop-guide-wrapper").hide();
    $("#step-"+step).show();
}
//完成
function completeStep(){
    //隐藏向导侧栏
    $('#kdxd').modal('hide');
    nextStep('1');
}
//跳转到相应的页面
function toSetPage(url){
    closeDialog();
    if(url!=null && url.indexOf("/store")==0){
        unfoldMenu(url, '2');
    }else{
        unfoldMenu(url, '1');
    }
}

function toB2c(furl, extended, cssTargetUrl,subUrl){
    unfoldMenu(furl, extended, cssTargetUrl,subUrl);
    closeDialog();
}
//点击“应用市场”，判断
function appMarket() {
    $.ajax({
        url:'queryAppMarketKeyState.htm?CSRFToken=0b5606f8-27b2-4262-a34b-9dddc78d0b23',
        async:false,
        success:function(result) {
            if(result==-1) {
                //                    showSimpleConfirmAlert("初次访问应用市场，需要获取秘钥，点击“确定”获取","goAppMarket()");
                $("#appProtocalModal").modal("show");
                return;
            }
            if(result==-2) {
                showSimpleConfirmAlert("您的秘钥已过期，点击“确定”重新获取秘钥","goAppMarket()");
                return;
            }
            window.location='app.htm?CSRFToken=0b5606f8-27b2-4262-a34b-9dddc78d0b23';
        }
    });
}
//应用市场协议中，点击“同意”，判断基本信息
function goAppMarket() {
    $.ajax({
        url:'newgetLoginPatcha.htm?CSRFToken=0b5606f8-27b2-4262-a34b-9dddc78d0b23',
        success:function(data) {
            var tip = '请在系统→基本信息中填写您网站的';
            var errorName = '';
            if(data.bsetName=='') {
                errorName += '名称、';
            }
            if(data.bsetAddress=='') {
                errorName += '地址、';
            }
            if(data.bsetAdmin=='') {
                errorName += '联系人、';
            }
            if(data.bsetPhone=='') {
                errorName += '联系电话、';
            }
            if(data.bsetEmail=='') {
                errorName += '联系邮箱、';
            }
            if(errorName!='') {
                errorName = errorName.substr(0,errorName.lastIndexOf(''))
                showSimpleConfirmAlert(errorName,'goBasicset()')
                return;
            }
            window.location='app.htm?CSRFToken=0b5606f8-27b2-4262-a34b-9dddc78d0b23';
        }
    });
}

function goBasicset() {
    window.location = 'basicset.htm';
}

/**
 * 简单的确认框，返回true或false
 */
function showSimpleConfirmAlert(tips,functionName) {
    $('#modalDialog').remove();
    var confirmDialog =
            '<div class="modal fade" id="modalDialog" tabindex="-1" role="dialog">'+
            '    <div class="modal-dialog">'+
            '        <div class="modal-content">'+
            '            <div class="modal-header">'+
            '                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '               <h4 class="modal-title">确认提示</h4>'+
            '           </div>'+
            '           <div class="modal-body">'
            +tips+
            '           </div>'+
            '           <div class="modal-footer">'+
            '             <button type="button" class="btn btn-primary" onclick="'+functionName+'">确定</button>'+
            '               <button type="button" class="btn btn-default" data-dismiss="modal" onclick="$(\'#modalDialog\').modal(\'hide\');">取消</button>'+
            '           </div>'+
            '       </div>'+
            '   </div>'+
            '</div>';
    $(document.body).append(confirmDialog);
    $('#modalDialog').modal('show');
}

