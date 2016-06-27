
var openShopWizardShtml =                                                                                                                   
"      <div class='modal-dialog modal-lg'>                                                                                                                                       " +
"          <div class='modal-content'>                                                                                                                                           " +
"              <div class='modal-header'>                                                                                                                                        " +
"                  <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button>                                       " +
"                  <h4 class='modal-title'>开店向导</h4>                                                                                                                         " +
"              </div>                                                                                                                                                            " +
"              <div class='modal-body'>                                                                                                                                          " +
"                  <div class='shop-guide-wrapper' id='step-0' style='display: block;'>                                                                                          " +
"                      <div class='module'>                                                                                                                                      " +
"                          <div class='mtitle'>                                                                                                                                  " +
"                              <h1>欢迎使用系统开店向导，请按以下步骤操作</h1>                                                                                                   " +
"                          </div>                                                                                                                                                " +
"                          <div class='mbody'>                                                                                                                                   " +
"                              <div class='stepInsts step-0'>                                                                                                                    " +
"                                  <div class='stepShow'>&nbsp;</div>                                                                                                            " +
"                                  <ul>                                                                                                                                          " +
"                                      <li>开始准备</li>                                                                                                                         " +
"                                      <li>接口设置</li>                                                                                                                         " +
"                                      <li>添加商品</li>                                                                                                                         " +
"                                      <li>页面设置</li>                                                                                                                         " +
"                                      <li>订单处理</li>                                                                                                                         " +
"                                      <li>完成</li>                                                                                                                             " +
"                                  </ul>                                                                                                                                         " +
"                              </div>                                                                                                                                            " +
"                              <div class='center-btn-wrapper'>                                                                                                                  " +
"                                  <a href='javascript:void(0)' onclick='nextStep(&#39;1&#39;)' class='btn btn-primary'>&nbsp;&nbsp;开始向导&nbsp;&nbsp;</a>                     " +
"                              </div>                                                                                                                                            " +
"                          </div>                                                                                                                                                " +
"                      </div>                                                                                                                                                    " +
"                  </div>                                                                                                                                                        " +
"                  <div class='shop-guide-wrapper' id='step-1' style='display: none;'>                                                                                           " +
"                      <div class='module'>                                                                                                                                      " +
"                          <div class='mtitle'>                                                                                                                                  " +
"                              <div class='stepInsts step-1'>                                                                                                                    " +
"                                  <div class='stepShow'>&nbsp;</div>                                                                                                            " +
"                                  <ul>                                                                                                                                          " +
"                                      <li class='past'>开始准备</li>                                                                                                            " +
"                                      <li>接口设置</li>                                                                                                                         " +
"                                      <li>添加商品</li>                                                                                                                         " +
"                                      <li>页面设置</li>                                                                                                                         " +
"                                      <li>订单处理</li>                                                                                                                         " +
"                                      <li>完成</li>                                                                                                                             " +
"                                  </ul>                                                                                                                                         " +
"                              </div>                                                                                                                                            " +
"                          </div>                                                                                                                                                " +
"                          <div class='mbody'>                                                                                                                                   " +
"                              <div class='inner-content'>                                                                                                                       " +
"                                  <h1>Step1&nbsp;&nbsp;&nbsp;&nbsp;站点设置</h1>                                                                                                " +
"                                  <div class='content'>                                                                                                                         " +
"                                      <p>站点设置用来设置店铺的基本信息，在这里配置网站名称、网站地址、网站logo、版权信息、注册时的用户协议等基本信息。</p>                     " +
"                                      <a href='System_BasicSetting.html?menuId=1&amp;menuParentId=37&amp;myselfId=38'>（现在设置&gt;&gt;）</a>                                  " +
"                                  </div>                                                                                                                                        " +
"                              </div>                                                                                                                                            " +
"                              <div class='corner-btn-wrapper'>                                                                                                                  " +
"                                  <a href='javascript:void(0)' onclick='nextStep(&#39;2&#39;)' class='btn btn-primary'>下一步</a>                                               " +
"                              </div>                                                                                                                                            " +
"                          </div>                                                                                                                                                " +
"                      </div>                                                                                                                                                    " +
"                  </div>                                                                                                                                                        " +
"                  <div class='shop-guide-wrapper' id='step-2' style='display: none;'>                                                                                           " +
"                      <div class='module'>                                                                                                                                      " +
"                          <div class='mtitle'>                                                                                                                                  " +
"                              <div class='stepInsts step-2'>                                                                                                                    " +
"                                  <div class='stepShow'>&nbsp;</div>                                                                                                            " +
"                                  <ul>                                                                                                                                          " +
"                                      <li class='past'>开始准备</li>                                                                                                            " +
"                                      <li class='past'>接口设置</li>                                                                                                            " +
"                                      <li>添加商品</li>                                                                                                                         " +
"                                      <li>页面设置</li>                                                                                                                         " +
"                                      <li>订单处理</li>                                                                                                                         " +
"                                      <li>完成</li>                                                                                                                             " +
"                                  </ul>                                                                                                                                         " +
"                              </div>                                                                                                                                            " +
"                          </div>                                                                                                                                                " +
"                          <div class='mbody'>                                                                                                                                   " +
"                              <div class='inner-content'>                                                                                                                       " +
"                                  <h1>Step2&nbsp;&nbsp;&nbsp;&nbsp;接口设置</h1>                                                                                                " +
"                                  <div class='content'>                                                                                                                         " +
"                                      <h1>1）邮箱接口设置</h1>                                                                                                                  " +
"                                      <p class='embbled'>                                                                                                                       " +
"                                          提交有效的邮件地址（没有的去申请相关的个人邮箱或企业邮箱），你的网店会员账号的注册验证和密码找回等邮件都将使用该邮箱地址发送。        " +
"                                         <a href='System_EmailInterfaceSetting.html?menuId=1&amp;menuParentId=72&amp;myselfId=39'>（现在设置&gt;&gt;）</a><br>                  " +
"                                      </p>                                                                                                                                      " +
"                                      <h1>2）支付接口设置</h1>                                                                                                                  " +
"                                      <p class='embbled'>                                                                                                                       " +
"                                          系统已对接好支付宝支付接口，你需要去申请支付宝企业支付，申请成功后，修改成您的支付宝信息。                                            " +
"                                          <br>                                                                                                                                  " +
"                                          <a href='System_PaySet.html?menuId=1&amp;menuParentId=72&amp;myselfId=78'>（现在设置&gt;&gt;）</a>                                    " +
"                                      </p>                                                                                                                                      " +
"                                  </div>                                                                                                                                        " +
"                              </div>                                                                                                                                            " +
"                              <div class='corner-btn-wrapper'>                                                                                                                  " +
"                                  <a href='javascript:void(0)' onclick='nextStep(&#39;1&#39;)' class='btn btn-default'>上一步</a>                                               " +
"                                  <a href='javascript:void(0)' onclick='nextStep(&#39;3&#39;)' class='btn btn-primary'>下一步</a>                                               " +
"                              </div>                                                                                                                                            " +
"                          </div>                                                                                                                                                " +
"                      </div>                                                                                                                                                    " +
"                  </div>                                                                                                                                                        " +
"                  <div class='shop-guide-wrapper' id='step-3' style='display: none;'>                                                                                           " +
"                      <div class='module'>                                                                                                                                      " +
"                          <div class='mtitle'>                                                                                                                                  " +
"                              <div class='stepInsts step-3'>                                                                                                                    " +
"                                  <div class='stepShow'>&nbsp;</div>                                                                                                            " +
"                                  <ul>                                                                                                                                          " +
"                                      <li class='past'>开始准备</li>                                                                                                            " +
"                                      <li class='past'>接口设置</li>                                                                                                            " +
"                                      <li class='past'>添加商品</li>                                                                                                            " +
"                                      <li>页面设置</li>                                                                                                                         " +
"                                      <li>订单处理</li>                                                                                                                         " +
"                                      <li>完成</li>                                                                                                                             " +
"                                  </ul>                                                                                                                                         " +
"                              </div>                                                                                                                                            " +
"                          </div>                                                                                                                                                " +
"                          <div class='mbody'>                                                                                                                                   " +
"                              <div class='inner-content'>                                                                                                                       " +
"                                  <h1>Step3&nbsp;&nbsp;&nbsp;&nbsp;添加商品</h1>                                                                                                " +
"                                  <div class='content'>                                                                                                                         " +
"                                      <h1>1)添加商品品牌</h1>                                                                                                                   " +
"                                      <p>商品品牌是对您商品个性的一种区分，您需要在这里添加所有商品所需要的品牌。                                                               " +
"                                          <a href='Product_BrandList.htm?menuId=3&amp;menuParentId=8&amp;myselfId=23'>（现在设置&gt;&gt;）</a></p>                              " +
"                                      <h1>2)添加商品分类</h1>                                                                                                                   " +
"                                      <p>商品分类是对您的商品进行分门别类，可以让客户对店铺销售的商品一目了然，快速找到相应商品；                                               " +
"                                              系统需添加配置三级分类，通过第三级分类来添加对应商品。                                                                            " +
"                                          <a href='Product_CategoryManage.html?menuId=3&amp;menuParentId=8&amp;myselfId=20'>（现在设置&gt;&gt;）</a></p>                        " +
"                                      <h1>3)添加商品规格</h1>                                                                                                                   " +
"                                      <p>商品规格是对第三极分类商品的品质的划分，如颜色、尺码等；通过已添加的三级分类，去添加相应的分类商品规格。                               " +
"                                          <a href='http://kstore.qianmi.com/boss/findAllSpec.htm?menuId=3&amp;menuParentId=8&amp;myselfId=22'>（现在设置&gt;&gt;）</a></p>      " +
"                                      <h1>4)添加商品类型</h1>                                                                                                                   " +
"                                      <p>商品类型是对第三级分类商品的所有属性的划分，通过已添加的三级分类，添加相应的分类类型，添加过程中关联已添加的商品品牌和商品规格。       " +
"                                          <a href='Product_TypeList.html?menuId=3&amp;menuParentId=8&amp;myselfId=21'>（现在设置&gt;&gt;）</a></p>                              " +
"                                      <h1>5)修改商品分类</h1>                                                                                                                   " +
"                                      <p>商修改下已添加好的三级分类，把对应的商品类型关联到该分类当中。                                                                         " +
"                                          <a href='Product_CategoryManage.html?menuId=3&amp;menuParentId=8&amp;myselfId=20'>（现在设置&gt;&gt;）</a></p>                        " +
"                                      <h1>6)添加商品</h1>                                                                                                                       " +
"                                      <p>前面配置完后，您可以添加商品了，选择相应的三级分类，添加该分类的商品信息。                                                             " +
"                                         <a href='Product_Add.html?menuId=3&amp;menuParentId=7&amp;myselfId=1587'>（现在设置&gt;&gt;）</a></p>                                  " +
"                                  </div>                                                                                                                                        " +
"                              </div>                                                                                                                                            " +
"                              <div class='corner-btn-wrapper'>                                                                                                                  " +
"                                  <a href='javascript:void(0)' onclick='nextStep(&#39;2&#39;)' class='btn btn-default'>上一步</a>                                               " +
"                                  <a href='javascript:void(0)' onclick='nextStep(&#39;4&#39;)' class='btn btn-primary'>下一步</a>                                               " +
"                              </div>                                                                                                                                            " +
"                          </div>                                                                                                                                                " +
"                      </div>                                                                                                                                                    " +
"                  </div>                                                                                                                                                        " +
"                  <div class='shop-guide-wrapper' id='step-4' style='display: none;'>                                                                                           " +
"                      <div class='module'>                                                                                                                                      " +
"                          <div class='mtitle'>                                                                                                                                  " +
"                              <div class='stepInsts step-4'>                                                                                                                    " +
"                                  <div class='stepShow'>&nbsp;</div>                                                                                                            " +
"                                  <ul>                                                                                                                                          " +
"                                      <li class='past'>开始准备</li>                                                                                                            " +
"                                      <li class='past'>接口设置</li>                                                                                                            " +
"                                      <li class='past'>添加商品</li>                                                                                                            " +
"                                      <li class='past'>页面设置</li>                                                                                                            " +
"                                      <li>订单处理</li>                                                                                                                         " +
"                                      <li>完成</li>                                                                                                                             " +
"                                  </ul>                                                                                                                                         " +
"                              </div>                                                                                                                                            " +
"                          </div>                                                                                                                                                " +
"                          <div class='mbody'>                                                                                                                                   " +
"                              <div class='inner-content'>                                                                                                                       " +
"                                  <h1>Step4&nbsp;&nbsp;&nbsp;&nbsp;页面设置</h1>                                                                                                " +
"                                  <div class='content'>                                                                                                                         " +
"                                      <p class='embbled'>                                                                                                                       " +
"                                      </p><h1>1)挑选模板</h1>                                                                                                                   " +
"                                      系统内置了多套主流的模板，你可以挑选一套，进行你的页面设置。                                                                              " +
"                                          <a href='Site_TemplateSetting.html?menuId=945&amp;menuParentId=1039&amp;myselfId=1041'>（现在设置&gt;&gt;）                           " +
"                                          </a>                                                                                                                                  " +
"                                      <p></p>                                                                                                                                   " +
"                                      <p class='embbled'>                                                                                                                       " +
"                                      </p><h1>2)模板配置</h1>                                                                                                                   " +
"                                      选择好模板后，点击模板配置，配置商品分类、轮播广告、页面广告、楼层等信息。                                                                " +
"                                      <p></p>                                                                                                                                   " +
"                                  </div>                                                                                                                                        " +
"                              </div>                                                                                                                                            " +
"                              <div class='corner-btn-wrapper'>                                                                                                                  " +
"                                  <a href='javascript:void(0)' onclick='nextStep(&#39;3&#39;)' class='btn btn-default'>上一步</a>                                               " +
"                                  <a href='javascript:void(0)' onclick='nextStep(&#39;5&#39;)' class='btn btn-primary'>下一步</a>                                               " +
"                              </div>                                                                                                                                            " +
"                          </div>                                                                                                                                                " +
"                      </div>                                                                                                                                                    " +
"                  </div>                                                                                                                                                        " +
"                  <div class='shop-guide-wrapper' id='step-5' style='display: none;'>                                                                                           " +
"                      <div class='module'>                                                                                                                                      " +
"                          <div class='mtitle'>                                                                                                                                  " +
"                              <div class='stepInsts step-5'>                                                                                                                    " +
"                                  <div class='stepShow'>&nbsp;</div>                                                                                                            " +
"                                  <ul>                                                                                                                                          " +
"                                      <li class='past'>开始准备</li>                                                                                                            " +
"                                      <li class='past'>接口设置</li>                                                                                                            " +
"                                      <li class='past'>添加商品</li>                                                                                                            " +
"                                      <li class='past'>页面设置</li>                                                                                                            " +
"                                      <li class='past'>订单处理</li>                                                                                                            " +
"                                      <li>完成</li>                                                                                                                             " +
"                                  </ul>                                                                                                                                         " +
"                              </div>                                                                                                                                            " +
"                          </div>                                                                                                                                                " +
"                          <div class='mbody'>                                                                                                                                   " +
"                              <div class='inner-content'>                                                                                                                       " +
"                                  <h1>Step5&nbsp;&nbsp;&nbsp;&nbsp;订单处理</h1>                                                                                                " +
"                                  <div class='content'>                                                                                                                         " +
"                                      <p>系统通过拣货、装箱、发货三个步骤来进行订单处理。</p>                                                                                   " +
"                                      <p class='embbled'>                                                                                                                       " +
"                                      </p><h1>1)订单查看</h1>                                                                                                                   " +
"                                      系统可以查看所有订单信息，包含已付款和未付款的，可以对订单状态和价格进行修改。                                                            " +
"                                      <a href='Order_List.html?menuId=89&amp;menuParentId=1165&amp;myselfId=947'>（现在查看&gt;&gt;）</a>                                       " +
"                                      <p></p>                                                                                                                                   " +
"                                      <p class='embbled'>                                                                                                                       " +
"                                      </p><h1>2)拣货处理</h1>                                                                                                                   " +
"                                      在拣货列表，您可以对已付款的订单进行拣货处理。                                                                                            " +
"                                      <a href='Stock_OrderPickingList.html?menuId=1565&amp;menuParentId=1567&amp;myselfId=1441'>（现在拣货&gt;&gt;）</a>                        " +
"                                      <p></p>                                                                                                                                   " +
"                                      <p class='embbled'>                                                                                                                       " +
"                                      </p><h1>3)装箱处理</h1>                                                                                                                   " +
"                                      在拣货列表，您可以对已拣货的订单进行装箱处理。                                                                                            " +
"                                      <a href='Stock_OrderDeliveryList.html?menuId=1565&amp;menuParentId=1567&amp;myselfId=1467'>（现在装箱&gt;&gt;）</a>                       " +
"                                      <p></p>                                                                                                                                   " +
"                                      <p class='embbled'>                                                                                                                       " +
"                                      </p><h1>4)出库处理</h1>                                                                                                                   " +
"                                      在拣货列表，您可以对已装箱的订单进行发货处理。                                                                                            " +
"                                      <a href='Stock_OrderDeliveryList.html?menuId=1565&amp;menuParentId=1567&amp;myselfId=1471'>（现在发货&gt;&gt;）</a>                       " +
"                                      <p></p>                                                                                                                                   " +
"                                  </div>                                                                                                                                        " +
"                              </div>                                                                                                                                            " +
"                              <div class='corner-btn-wrapper'>                                                                                                                  " +
"                                  <a href='javascript:void(0)' onclick='nextStep(&#39;4&#39;)' class='btn btn-default'>上一步</a>                                               " +
"                                  <a href='javascript:void(0)' onclick='nextStep(&#39;6&#39;)' class='btn btn-primary'>下一步</a>                                               " +
"                              </div>                                                                                                                                            " +
"                          </div>                                                                                                                                                " +
"                      </div>                                                                                                                                                    " +
"                  </div>                                                                                                                                                        " +
"                  <div class='shop-guide-wrapper' id='step-6' style='display: none;'>                                                                                           " +
"                      <div class='module'>                                                                                                                                      " +
"                          <div class='mtitle'>                                                                                                                                  " +
"                              <div class='stepInsts step-6'>                                                                                                                    " +
"                                  <div class='stepShow'>&nbsp;</div>                                                                                                            " +
"                                  <ul>                                                                                                                                          " +
"                                      <li class='past'>开始准备</li>                                                                                                            " +
"                                      <li class='past'>接口设置</li>                                                                                                            " +
"                                      <li class='past'>添加商品</li>                                                                                                            " +
"                                      <li class='past'>页面设置</li>                                                                                                            " +
"                                      <li class='past'>订单处理</li>                                                                                                            " +
"                                      <li class='finish'>完成</li>                                                                                                              " +
"                                  </ul>                                                                                                                                         " +
"                              </div>                                                                                                                                            " +
"                          </div>                                                                                                                                                " +
"                          <div class='mbody'>                                                                                                                                   " +
"                              <div class='centered-content'>                                                                                                                    " +
"                                  <h1>祝贺您，您已经完成了系统开店向导！</h1>                                                                                                   " +
"                                  <p>                                                                                                                                           " +
"                                      您可以                                                                                                                                    " +
"                                      <a href='http://kstore.qianmi.com/' id='shouye' target='_blank'>您可以登录企业主站测试购物流程</a>                                        " +
"                                  </p>                                                                                                                                          " +
"                              </div>                                                                                                                                            " +
"                              <div class='center-btn-wrapper'>                                                                                                                  " +
"                                  <a href='javascript:void(0)' onclick='completeStep()' class='btn btn-primary'>&nbsp;&nbsp;完&nbsp;&nbsp;成&nbsp;&nbsp;</a>                    " +
"                              </div>                                                                                                                                            " +
"                          </div>                                                                                                                                                " +
"                      </div>                                                                                                                                                    " +
"                  </div>                                                                                                                                                        " +
"                                                                                                                                                                                " +
"              </div>                                                                                                                                                            " +
"              <div class='modal-footer'>                                                                                                                                        " +
"                  <button type='button' class='btn btn-default' data-dismiss='modal'>关闭</button>                                                                              " +
"              </div>                                                                                                                                                            " +
"          </div>                                                                                                                                                                " +
"      </div>                                                                                                                                                                    " ;

$(document).ready(function(){
    $("#kdxd").append(openShopWizardShtml.replace(" ", ""));
})

