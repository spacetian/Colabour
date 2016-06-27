﻿var appProtocalModalShtml =
    "  <div class='modal-dialog' style='z-index:1800;'>                                                                                                        " +
    "      <div class='modal-content'>                                                                                                                         " +
    "          <div class='modal-header'>                                                                                                                      " +
    "              <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button>                     " +
    "              <h4 class='modal-title'>应用市场协议</h4>                                                                                                   " +
    "          </div>                                                                                                                                          " +
    "          <div class='modal-body'>                                                                                                                        " +
    "              <div class='agreement_wp mt15' style='height:300px;overflow-y:scroll;'>                                                                     " +
    "                  <p style='font-family:HannotateSC-W5;line-height:16px;white-space:normal;'>                                                             " +
    "                      本协议是您与网站（简称'本站'，网址：www.XXXX.com）所有者（以下简称为''）之间就网站服务等相关事宜所订立的契约，                      " +
    "                      请您仔细阅读本注册协议，您点击'同意并继续'按钮后，本协议即构成对双方有约束力的法律文件。                                            " +
    "                  </p>                                                                                                                                    " +
    "                  <h5 style='font-family:HannotateSC-W5;white-space:normal;'>                                                                             " +
    "                      第1条 本站服务条款的确认和接纳                                                                                                      " +
    "                  </h5>                                                                                                                                   " +
    "                  <p style='font-family:HannotateSC-W5;line-height:16px;white-space:normal;'>                                                             " +
    "                      1.1本站的各项电子服务的所有权和运作权归所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。                       " +
    "                        用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。                        " +
    "                  </p>                                                                                                                                    " +
    "                  <p style='font-family:HannotateSC-W5;line-height:16px;white-space:normal;'>                                                             " +
    "                      1.2用户点击同意本协议的，即视为用户确认自己具有享受本站服务、下单购物等相应的权利能力和行为能力，能够独立承担法律责任。             " +
    "                  </p>                                                                                                                                    " +
    "                  <p style='font-family:HannotateSC-W5;line-height:16px;white-space:normal;'>                                                             " +
    "                      1.3如果您在18周岁以下，您只能在父母或监护人的监护参与下才能使用本站。                                                               " +
    "                  </p>                                                                                                                                    " +
    "                  <p style='font-family:HannotateSC-W5;line-height:16px;white-space:normal;'>                                                             " +
    "                      1.4保留在中华人民共和国大陆地区法施行之法律允许的范围内独自决定拒绝服务、关闭用户账户、清除或编辑内容或取消订单的权利。             " +
    "                  </p>                                                                                                                                    " +
    "                  <h5 style='font-family:HannotateSC-W5;white-space:normal;'>                                                                             " +
    "                      第2条 本站服务                                                                                                                      " +
    "                  </h5>                                                                                                                                   " +
    "                  <p style='font-family:HannotateSC-W5;line-height:16px;white-space:normal;'>                                                             " +
    "                      2.1通过互联网依法为用户提供互联网信息等服务，用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。                     " +
    "                  </p>                                                                                                                                    " +
    "                  <p style='font-family:HannotateSC-W5;line-height:16px;white-space:normal;'>                                                             " +
    "                      2.2用户必须自行准备如下设备和承担如下开支：（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；        " +
    "                     （2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。                                                                " +
    "                  </p>                                                                                                                                    " +
    "                  <h5 style='font-family:HannotateSC-W5;white-space:normal;'>                                                                             " +
    "                      第3条 用户信息                                                                                                                      " +
    "                  </h5>                                                                                                                                   " +
    "                  <p style='font-family:HannotateSC-W5;line-height:16px;white-space:normal;'>                                                             " +
    "                      3.1用户应自行诚信向本站提供注册资料，用户同意其提供的注册资料真实、准确、完整、合法有效，                                           " +
    "                          用户注册资料如有变动的，应及时更新其注册资料。如果用户提供的注册资料不合法、不真实、                                            " +
    "                       不准确、不详尽的，用户需承担因此引起的相应责任及后果，并且保留终止用户使用各项服务的权利。                                         " +
    "                  </p>                                                                                                                                    " +
    "                  <div>                                                                                                                                   " +
    "                      <br>                                                                                                                                " +
    "                  </div>                                                                                                                                  " +
    "              </div>                                                                                                                                      " +
    "          </div>                                                                                                                                          " +
    "          <div class='modal-footer'>                                                                                                                      " +
    "              <button type='button' class='btn btn-primary' onclick='goAppMarket();'>同意并继续</button>                                                  " +
    "              <button type='button' class='btn btn-default' data-dismiss='modal'>取消</button>                                                            " +
    "          </div>                                                                                                                                          " +
    "      </div><!-- /.modal-content -->                                                                                                                      " +
    "  </div><!-- /.modal-dialog -->                                                                                                                           ";
    

$(document).ready(function () {
    $("#appProtocalModel").append(appProtocalModalShtml.replace(" ", ""));
})
 
