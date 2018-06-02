global._ = require('lodash')
var moment = require('moment')
var momenttz = require('moment-timezone')
global.jQuery= require('jquery')
global.window = require('window')
global.window = _.assignIn(global.window, global)
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
global.window.document = dom.window.document;
global.document = dom.window.document;
//console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
global.seajs = {
    data:{}
}
global.template = ()=>{

}
global.template.helper = ()=>{

}
global.platform = require('platform')
global.moment = function(){
    var args = Array.prototype.slice.call(arguments);
    var mom = moment.apply(moment, args);
    mom.tz = momenttz;
    return mom;
}
global.location = global.window.location = {
    hash:'',
    host:'',
    hostname:'',
    href:'',
    pathname:'',
    port:'',
    protocol:'',
    search:'',
    assign:()=>{},
    reload:()=>{},
    replace:()=>{},
}
global.navigator = {
    userAgent:'',
    platform:''
}
global.$ = (obj)=>{
    if(typeof obj !== 'object') obj = global.window;
    let obj2 = jQuery(obj);
    obj2.on = ()=>{return jQuery(global.window)}
    obj2.off = ()=>{return jQuery(global.window)}
    obj2.delegate = ()=>{return jQuery(global.window)}
    obj2.unload = ()=>{return jQuery(global.window)}
    return obj2;
}
global.$.extend = _.extend;
global.$.i18n = ()=>{return '';}

global.BWEUM = {
    info: {
        "stand": true,
        "agentType": "browser",
        "agent": "bi-collector.oneapm.com/static/js/bw-send-411.4.5.js",
        "beaconUrl": "bi-collector.oneapm.com/beacon",
        "licenseKey": "eNbi7~7AYNNBa6rU",
        "applicationID": 2273143
    }
};

global.FOCUSMEDIA = {
brandBelongId: 8001
};

global.RKHD = true;
global.WANXUE =  false;
global.FUGUODATONG =  false;
global.YiXueJiaoYu =  false;
global.DEFAULTS = window.DEFAULTS = {
USER_DEFAULT_ICON: 'https://rs-gray.ingageapp.com/static/img/default_face.png',
TENANT_DEFULT_ICON: 'https://rs-gray.ingageapp.com/static/img/v3.0/logo.png',
TENANT_CUSTOM_ICON: ''
};



global.SESSION = window.SESSION = {
prj: 'web',
isDev: false,
user: {"id":273709,"icon":"https://xsybucket.s3.cn-north-1.amazonaws.com.cn/102/2016/12/10/e0172328-1862-45eb-8415-f2b4bd22273a.jpg","name":"张磊","notify":1,"language-code":"en","language":"en","type":0},
isPrm : false,
userConfig:{
    isMobileFixUser:"false",
},
serviceConfig: {
    workBench: ("0" === '1'),
    userType: "sales"
},
fieldServiceConfig: {
    dispatchPlatform: ("0" === '1')
},
company: '',
depart: {"id":521010,"groupId":58311156,"specialType":0,"name":"PaaS前端","hasChild":false,"type":4},
isReadonlyDesigner:false,
isXsyCrmAdmin: false,
pcCode: 0,
tenantId: 102,
tenantName: '仁科互动',
tenantIcon: 'https://rs-gray.ingageapp.com/static/img/v3.0/logo.png', 
cometClientId: '1527950811313',
usingWebSocket: true,
currencyUnit: '元',
currencyUnit_resourceKey:'UNIT.settingCurrency.1003',
unitSetCurrencyMap: '',
keywords: {"rescenter":"知识库","rescenter_resourceKey":"XdMDObj.rescenter","privatemessage":"企业微信","privatemessage_resourceKey":"XdMDObj.privatemessage","warehousedetail":"仓库明细","warehousedetail_resourceKey":"XdMDObj.warehouseDetail","visit":"巡访记录","visit_resourceKey":"XdMDObj.visit","warehouse":"仓库","warehouse_resourceKey":"XdMDObj.warehouse","dayreport":"工作报告","dayreport_resourceKey":"XdMDObj.dayreport","leadhighsea":"销售线索","leadhighsea_resourceKey":"XdMDObj.lead","leadhighsea_appendResourceKey":"common.app.langpool","serviceknowledge":"知识条目","serviceknowledge_resourceKey":"XdMDObj.serviceKnowledge","servicevisithistory":"互动历史","servicevisithistory_resourceKey":"XdMDObj.serviceVisitHistory","partner":"合作伙伴","partner_resourceKey":"XdMDObj.partner","customentity18":"专业服务售前支持","customentity18_resourceKey":"XdMDObj.customEntity18","asset":"资产","asset_resourceKey":"XdMDObj.asset","attendance":"考勤统计","attendance_resourceKey":"XdMDObj.attendance","monthreport":"月报","monthreport_resourceKey":"XdMDObj.monthreport","customentity10":"售前支持","customentity10_resourceKey":"XdMDObj.customEntity10","customentity12":"Week","customentity12_resourceKey":"XdMDObj.customEntity12","customentity72__c":"客户成功计划","customentity72__c_resourceKey":"XdMDObj.customEntity72__c","customentity11":"WBS","customentity11_resourceKey":"XdMDObj.customEntity11","isv":"ISV","isv_resourceKey":"XdMDObj.ISV","customentity13":"Time Sheet","customentity13_resourceKey":"XdMDObj.customEntity13","fieldjob":"派工单","fieldjob_resourceKey":"XdMDObj.fieldJob","409":"报价单","409_resourceKey":"XdMDObj.quotationEntity","408":"价格表明细","408_resourceKey":"XdMDObj.priceDetail","407":"价格表","407_resourceKey":"XdMDObj.priceManager","401":"商机报备","401_resourceKey":"XdMDObj.opportunity_register","402":"商机联系人","402_resourceKey":"XdMDObj.opportunity_register_contact","dashboard":"仪表盘","dashboard_resourceKey":"XdMDObj.dashboard","invoiceold":"开票记录","invoiceold_resourceKey":"XdMDObj.invoiceOld","userprofile":"用户Profile","userprofile_resourceKey":"XdMDObj.userprofile","goalpro":"目标","goalpro_resourceKey":"XdMDObj.goalPro","customentity29":"开账号申请","customentity29_resourceKey":"XdMDObj.customEntity29","customentity28":"开发票申请","customentity28_resourceKey":"XdMDObj.customEntity28","customentity67__c":"外包费用支付","customentity67__c_resourceKey":"XdMDObj.customEntity67__c","deliveryrecord":"交付记录","deliveryrecord_resourceKey":"XdMDObj.deliveryRecord","systemcount":"系统使用概况","systemcount_resourceKey":"XdMDMenu.common.app.systemcount","customentity23":"客户问题反馈","customentity23_resourceKey":"XdMDObj.customEntity23","customentity22":"售前支持明细","customentity22_resourceKey":"XdMDObj.customEntity22","customentity21":"复杂项目售前Check List","customentity21_resourceKey":"XdMDObj.customEntity21","salesanalysis":"销售绩效分析","salesanalysis_resourceKey":"XdMDObj.salesanalysis","lookopportunity":"找商机","lookopportunity_resourceKey":"XdMDMenu.common.app.lookopportunity","materialreturn":"退料单","materialreturn_resourceKey":"XdMDObj.MaterialReturn","rfb":"产品需求反馈（旧）","rfb_resourceKey":"XdMDObj.rfb","418":"目标","418_resourceKey":"XdMDObj.goalPro","417":"目标模型条件","417_resourceKey":"XdMDObj.goalModelCond","customentity77__c":"Demo租户升级及展期申请","customentity77__c_resourceKey":"XdMDObj.customEntity77__c","416":"目标模型","416_resourceKey":"XdMDObj.goalModel","customentity74__c":"客户使用成熟度评估","customentity74__c_resourceKey":"XdMDObj.customEntity74__c","marketinglead":"营销线索","marketinglead_resourceKey":"XdMDObj.marketingLead","customentity73__c":"行动计划及跟进历史","customentity73__c_resourceKey":"XdMDObj.customEntity73__c","419":"目标实例关联对象","419_resourceKey":"XdMDObj.goalProRelatObject","410":"报价单明细","410_resourceKey":"XdMDObj.quotationDetailEntity","stockin":"入库单","stockin_resourceKey":"XdMDObj.stockIn","quotationdetailentity":"报价单明细","quotationdetailentity_resourceKey":"XdMDObj.quotationDetailEntity","notice":"消息","notice_resourceKey":"XdMDObj.notice","412":"交付记录明细","412_resourceKey":"XdMDObj.deliveryRecordDetail","411":"交付记录","411_resourceKey":"XdMDObj.deliveryRecord","customentity59__c":"员工简历-工作经历","customentity59__c_resourceKey":"XdMDObj.customEntity59__c","payment":"回款记录","payment_resourceKey":"XdMDObj.payment","customentity38":"线索自动分配配置","customentity38_resourceKey":"XdMDObj.customEntity38","customentity37":"V2MOM","customentity37_resourceKey":"XdMDObj.customEntity37","customentity39":"线索自动分配记录","customentity39_resourceKey":"XdMDObj.customEntity39","customentity33":"WBS延期和增加工时","customentity33_resourceKey":"XdMDObj.customEntity33","customentity36":"系统故障记录","customentity36_resourceKey":"XdMDObj.customEntity36","customentity30":"渠道高效工作簿","customentity30_resourceKey":"XdMDObj.customEntity30","customentity31":"客户活跃度","customentity31_resourceKey":"XdMDObj.customEntity31","expense":"费用","expense_resourceKey":"XdMDObj.expense","competitor":"竞争对手","competitor_resourceKey":"XdMDObj.competitor","422":"营销线索","422_resourceKey":"XdMDObj.marketingLead","accounthighseareport":"客户","accounthighseareport_resourceKey":"XdMDObj.account","customentity86__c":"部门公告","customentity86__c_resourceKey":"XdMDObj.customEntity86__c","isvfeedback__c":"ISV问题反馈","isvfeedback__c_resourceKey":"XdMDObj.isvFeedBack__c","entitybelongtype":"标准业务类型","entitybelongtype_resourceKey":"XdMDObj.entityBelongType","lead":"销售线索","lead_resourceKey":"XdMDObj.lead","servicecase":"服务工单","servicecase_resourceKey":"XdMDObj.serviceCase","customentity56__c":"员工简历","customentity56__c_resourceKey":"XdMDObj.customEntity56__c","terminal":"终端","terminal_resourceKey":"XdMDObj.terminal","customentity82__c":"代理费支付申请","customentity82__c_resourceKey":"XdMDObj.customEntity82__c","weekreport":"周报","weekreport_resourceKey":"XdMDObj.weekreport","bimanage":"数据看板","bimanage_resourceKey":"XdMDMenu.common.app.bimanage","customentity48__c":"内部公共资源信息管理","customentity48__c_resourceKey":"XdMDObj.customEntity48__c","customentity61__c":"员工简历-培训经历","customentity61__c_resourceKey":"XdMDObj.customEntity61__c","agent":"代理商","agent_resourceKey":"XdMDObj.agent","customentity84__c":"产品对应分析表","customentity84__c_resourceKey":"XdMDObj.customEntity84__c","productlicence__c":"产品License","productlicence__c_resourceKey":"XdMDObj.ProductLicence__c","customentity45__c":"业绩拆分","customentity45__c_resourceKey":"XdMDObj.customEntity45__c","qualityinspectiondetails":"质检明细","qualityinspectiondetails_resourceKey":"XdMDObj.qualityInspectionDetails","customentity46__c":"项目进展周报","customentity46__c_resourceKey":"XdMDObj.customEntity46__c","case":"服务个案","case_resourceKey":"XdMDObj.case","servicechat":"会话","servicechat_resourceKey":"XdMDObj.serviceChat","trackanalysis":"轨迹分析","trackanalysis_resourceKey":"XdMDObj.trackanalysis","department":"部门","department_resourceKey":"XdMDObj.department","stocktransferdetail":"移库单明细","stocktransferdetail_resourceKey":"XdMDObj.stockTransferDetail","customentity81__c":"PaaS合作协议补充协议","customentity81__c_resourceKey":"XdMDObj.customEntity81__c","453":"访客","453_resourceKey":"XdMDObj.serviceVisitor","454":"互动历史","454_resourceKey":"XdMDObj.serviceVisitHistory","451":"语音","451_resourceKey":"XdMDObj.serviceCall","stockout":"出库单","stockout_resourceKey":"XdMDObj.stockOut","452":"会话","452_resourceKey":"XdMDObj.serviceChat","457":"评价","457_resourceKey":"XdMDObj.serviceEvaluation","458":"派工单","458_resourceKey":"XdMDObj.fieldJob","goalmodelcond":"目标模型条件","goalmodelcond_resourceKey":"XdMDObj.goalModelCond","455":"服务工单","455_resourceKey":"XdMDObj.serviceCase","456":"知识条目","456_resourceKey":"XdMDObj.serviceKnowledge","busitype":"定制业务类型","busitype_resourceKey":"XdMDObj.busiType","subagreements__c":"ISV产品代理补充协议","subagreements__c_resourceKey":"XdMDObj.SubAgreements__c","feed":"动态","feed_resourceKey":"XdMDObj.feed","459":"资产","459_resourceKey":"XdMDObj.asset","customentity75__c":"timesheet日志","customentity75__c_resourceKey":"XdMDObj.customEntity75__c","activity":"活动安排","activity_resourceKey":"XdMDObj.activity","customentity71__c":"回款","customentity71__c_resourceKey":"XdMDObj.customEntity71__c","productrequirement":"产品需求","productrequirement_resourceKey":"XdMDObj.productRequirement","fieldjobpool":"派工池","fieldjobpool_resourceKey":"XdMDObj.fieldJobPool","paasagreement__c":"PAAS合作协议（ISV）","paasagreement__c_resourceKey":"XdMDObj.PAASAgreement__c","forecast":"销售预测","forecast_resourceKey":"XdMDObj.forecast","approval":"审批","approval_resourceKey":"XdMDMenu.common.app.approval","visitcollect":"巡访统计","visitcollect_resourceKey":"XdMDObj.visitcollect","colleague":"通讯录","colleague_resourceKey":"XdMDObj.colleague","customentity83__c":"代理费支付申请明细","customentity83__c_resourceKey":"XdMDObj.customEntity83__c","461":"结算单明细","461_resourceKey":"XdMDObj.chargeDetail","460":"结算单","460_resourceKey":"XdMDObj.charge","462":"检查项","462_resourceKey":"XdMDObj.fieldJobCheckItem","463":"仓库","463_resourceKey":"XdMDObj.warehouse","464":"仓库明细","464_resourceKey":"XdMDObj.warehouseDetail","465":"领料单","465_resourceKey":"XdMDObj.materialRequisition","charge":"结算单","charge_resourceKey":"XdMDObj.charge","466":"质检","466_resourceKey":"XdMDObj.qualityInspection","467":"质检明细","467_resourceKey":"XdMDObj.qualityInspectionDetails","468":"未知问题","468_resourceKey":"XdMDObj.unknownEntry","469":"产品需求","469_resourceKey":"XdMDObj.productRequirement","announcementpartner":"合作伙伴公告","announcementpartner_resourceKey":"partner.announcement","servicevisitor":"访客","servicevisitor_resourceKey":"XdMDObj.serviceVisitor","activityrecord":"活动记录","activityrecord_resourceKey":"XdMDObj.activityrecord","487":"退料单","487_resourceKey":"XdMDObj.MaterialReturn","materialrequisition":"领料单","materialrequisition_resourceKey":"XdMDObj.materialRequisition","486":"领料单明细","486_resourceKey":"XdMDObj.materialRequisitionDetail","489":"入库单","489_resourceKey":"XdMDObj.stockIn","488":"退料明细","488_resourceKey":"XdMDObj.MaterialReturnItem","customentity62__c":"SOW处理流程","customentity62__c_resourceKey":"XdMDObj.customEntity62__c","report":"报表","report_resourceKey":"XdMDObj.report","checkinmap":"签到地图","checkinmap_resourceKey":"XdMDMenu.common.app.checkinmap","pricemanager":"价格表","pricemanager_resourceKey":"XdMDObj.priceManager","customentity79__c":"售前支持申请","customentity79__c_resourceKey":"XdMDObj.customEntity79__c","workreport":"工作报告","workreport_resourceKey":"XdMDMenu.common.app.workreport","opportunity_register":"商机报备","opportunity_register_resourceKey":"XdMDObj.opportunity_register","customentity47__c":"客户满意度调查","customentity47__c_resourceKey":"XdMDObj.customEntity47__c","deliveryrecorddetail":"交付记录明细","deliveryrecorddetail_resourceKey":"XdMDObj.deliveryRecordDetail","serviceevaluation":"评价","serviceevaluation_resourceKey":"XdMDObj.serviceEvaluation","materialreturnitem":"退料明细","materialreturnitem_resourceKey":"XdMDObj.MaterialReturnItem","meetingroomprerecord":"会议室预订记录","meetingroomprerecord_resourceKey":"XdMDObj.meetingRoomPreRecord","isvoutsourcingagreements__c":"ISV外包开发合同","isvoutsourcingagreements__c_resourceKey":"XdMDObj.ISVOutSourcingAgreements__c","qualityinspection":"质检","qualityinspection_resourceKey":"XdMDObj.qualityInspection","orderproduct":"订单明细","orderproduct_resourceKey":"XdMDObj.orderProduct","goal":"目标简版","goal_resourceKey":"XdMDObj.goal","470":"客服状态","470_resourceKey":"XdMDObj.serviceAgentWorkStatus","471":"微信模板消息发送记录","471_resourceKey":"XdMDObj.wxTemplateMessRecord","customentity76__c":"市场部撞库检测数据","customentity76__c_resourceKey":"XdMDObj.customEntity76__c","pricedetail":"价格表明细","pricedetail_resourceKey":"XdMDObj.priceDetail","stocktransfer":"移库单","stocktransfer_resourceKey":"XdMDObj.stockTransfer","contact":"联系人","contact_resourceKey":"XdMDObj.contact","customentity66__c":"外包合同签订","customentity66__c_resourceKey":"XdMDObj.customEntity66__c","stockoutdetail":"出库单明细","stockoutdetail_resourceKey":"XdMDObj.stockOutDetail","campaign":"市场活动","campaign_resourceKey":"XdMDObj.campaign","servicecall":"语音","servicecall_resourceKey":"XdMDObj.serviceCall","servicedashboard":"客服仪表盘","servicedashboard_resourceKey":"XdMDMenu.common.app.servicedashboard","opportunityproduct":"商机明细","opportunityproduct_resourceKey":"XdMDObj.opportunityProduct","fieldjobevaluation":"派工评价","fieldjobevaluation_resourceKey":"XdMDObj.fieldJobEvaluation","customentity43__c":"数据权限申请","customentity43__c_resourceKey":"XdMDObj.customEntity43__c","customentity40":"内销请假记录","customentity40_resourceKey":"XdMDObj.customEntity40","496":"派工评价","496_resourceKey":"XdMDObj.fieldJobEvaluation","495":"派工池","495_resourceKey":"XdMDObj.fieldJobPool","customentity42":"内部IT需求管理","customentity42_resourceKey":"XdMDObj.customEntity42","497":"活动安排","497_resourceKey":"XdMDObj.activity","491":"出库单","491_resourceKey":"XdMDObj.stockOut","product":"产品","product_resourceKey":"XdMDObj.product","492":"出库单明细","492_resourceKey":"XdMDObj.stockOutDetail","493":"移库单","493_resourceKey":"XdMDObj.stockTransfer","494":"移库单明细","494_resourceKey":"XdMDObj.stockTransferDetail","490":"入库单明细","490_resourceKey":"XdMDObj.stockInDetail","account":"客户","account_resourceKey":"XdMDObj.account","apply":"审批","apply_resourceKey":"XdMDObj.apply","customentity3":"实施项目","customentity3_resourceKey":"XdMDObj.customEntity3","meetingroominfo":"会议室基本信息","meetingroominfo_resourceKey":"XdMDObj.meetingRoomInfo","highsea":"客户","highsea_resourceKey":"XdMDObj.account","highsea_appendResourceKey":"common.app.langpool","goalprodetail":"目标实例明细","goalprodetail_resourceKey":"XdMDObj.goalProDetail","paymentplan":"回款计划","paymentplan_resourceKey":"XdMDObj.paymentplan","customentity57__c":"员工简历-教育背景","customentity57__c_resourceKey":"XdMDObj.customEntity57__c","wxtemplatemessrecord":"微信模板消息发送记录","wxtemplatemessrecord_resourceKey":"XdMDObj.wxTemplateMessRecord","contract":"合同","contract_resourceKey":"XdMDObj.contract","paymentapplication__c":"ISV支付申请","paymentapplication__c_resourceKey":"XdMDObj.PaymentApplication__c","customentity50__c":"ISV产品代理主协议","customentity50__c_resourceKey":"XdMDObj.customEntity50__c","customentity80__c":"系统数据权限申请","customentity80__c_resourceKey":"XdMDObj.customEntity80__c","chargedetail":"结算单明细","chargedetail_resourceKey":"XdMDObj.chargeDetail","customentity7":"销售-实施-客户成功交接单","customentity7_resourceKey":"XdMDObj.customEntity7","customentity6":"会议室预定","customentity6_resourceKey":"XdMDObj.customEntity6","customentity5":"常见问题","customentity5_resourceKey":"XdMDObj.customEntity5","customentity70__c":"MAC地址报备","customentity70__c_resourceKey":"XdMDObj.customEntity70__c","customentity4":"客户成功案例","customentity4_resourceKey":"XdMDObj.customEntity4","customentity9":"产品项目管理","customentity9_resourceKey":"XdMDObj.customEntity9","customentity8":"渠道服务","customentity8_resourceKey":"XdMDObj.customEntity8","customentity60__c":"员工简历-项目经历","customentity60__c_resourceKey":"XdMDObj.customEntity60__c","expenseaccount":"报销单","expenseaccount_resourceKey":"XdMDObj.expenseaccount","workreportstatistic":"工作报告统计","workreportstatistic_resourceKey":"XdMDObj.workreportstatistic","stockindetail":"入库单明细","stockindetail_resourceKey":"XdMDObj.stockInDetail","fieldjobcheckitem":"检查项","fieldjobcheckitem_resourceKey":"XdMDObj.fieldJobCheckItem","solution":"解决方案","solution_resourceKey":"XdMDObj.solution","materialrequisitiondetail":"领料单明细","materialrequisitiondetail_resourceKey":"XdMDObj.materialRequisitionDetail","order":"订单","order_resourceKey":"XdMDObj.order","goalprorelatobject":"目标实例关联对象","goalprorelatobject_resourceKey":"XdMDObj.goalProRelatObject","opportunity_register_contact":"商机联系人","opportunity_register_contact_resourceKey":"XdMDObj.opportunity_register_contact","task":"任务","task_resourceKey":"XdMDObj.task","goalmodel":"目标模型","goalmodel_resourceKey":"XdMDObj.goalModel","unknownentry":"未知问题","unknownentry_resourceKey":"XdMDObj.unknownEntry","serviceagentworkstatus":"客服状态","serviceagentworkstatus_resourceKey":"XdMDObj.serviceAgentWorkStatus","customentity68__c":"time sheet","customentity68__c_resourceKey":"XdMDObj.customEntity68__c","schedule":"日程","schedule_resourceKey":"XdMDObj.schedule","opportunity":"销售机会","opportunity_resourceKey":"XdMDObj.opportunity","leadhighseareport":"销售线索","leadhighseareport_resourceKey":"XdMDObj.lead","quotationentity":"报价单","quotationentity_resourceKey":"XdMDObj.quotationEntity","customentity64__c":"工时查询结果","customentity64__c_resourceKey":"XdMDObj.customEntity64__c","group":"群组","group_resourceKey":"XdMDObj.group","user":"用户","user_resourceKey":"XdMDObj.user","customentity58__c":"员工简历-资格证书","customentity58__c_resourceKey":"XdMDObj.customEntity58__c","customentity63__c":"工时任务","customentity63__c_resourceKey":"XdMDObj.customEntity63__c"},
hasPrmContentAccess: '0',

resDomain: 'https://rs-gray.ingageapp.com',
menuData: {"foldCrm":0,"foldMenu":0},
guideData: {"userGuide":"0","foldBtn":1,"unFoldBtn":1,"oaMenu":1,"oaFoldMenu":1},
menuItems: [{"id":9,"icon":"app_account","name":"客户","name_resourceKey":"XdMDObj.account","link":"account.action"}, {"id":11,"icon":"app_contact","name":"联系人","name_resourceKey":"XdMDObj.contact","link":"contact.action"}, {"id":14,"icon":"app_leads","name":"线索","name_resourceKey":"XdMDObj.lead","link":"lead.action"}, {"id":12,"icon":"app_contract","name":"合同","name_resourceKey":"XdMDObj.contract","link":"contract.action"}, {"id":10,"icon":"app_opp","name":"商机","name_resourceKey":"XdMDObj.opportunity","link":"opportunity.action"}, {"id":24,"icon":"app_highsea","name":"客户公海池","name_resourceKey":"XdMDObj.account","name_appendResourceKey":"common.app.langpool","link":"highsea.action"}, {"id":18,"icon":"app_sl","name":"解决方案","name_resourceKey":"XdMDObj.solution","link":"solution.action"}, {"id":17,"icon":"app_case","name":"服务个案","name_resourceKey":"XdMDObj.case","link":"case.action"}, {"id":100495704,"icon":"puzzle","name":"员工简历-培训经历","name_resourceKey":"XdMDObj.customEntity61__c","link":"customize.action?belongId=100495704","svgId":1120,"svgColor":"#95b7e6"}, {"id":100495703,"icon":"puzzle","name":"员工简历-项目经历","name_resourceKey":"XdMDObj.customEntity60__c","link":"customize.action?belongId=100495703","svgId":1120,"svgColor":"#95b7e6"}, {"id":100498301,"icon":"puzzle","name":"员工简历-工作经历","name_resourceKey":"XdMDObj.customEntity59__c","link":"customize.action?belongId=100498301","svgId":1120,"svgColor":"#95b7e6"}, {"id":100498103,"icon":"puzzle","name":"员工简历-资格证书","name_resourceKey":"XdMDObj.customEntity58__c","link":"customize.action?belongId=100498103","svgId":1120,"svgColor":"#95b7e6"}, {"id":100498102,"icon":"activity","name":"员工简历-教育背景","name_resourceKey":"XdMDObj.customEntity57__c","link":"customize.action?belongId=100498102","svgId":8,"svgColor":"#d895e6"}, {"id":100498101,"icon":"puzzle","name":"员工简历","name_resourceKey":"XdMDObj.customEntity56__c","link":"customize.action?belongId=100498101","svgId":1120,"svgColor":"#95b7e6"}, {"id":13,"icon":"app_market","name":"市场活动","name_resourceKey":"XdMDObj.campaign","link":"campaign.action"}, {"id":25,"icon":"app_leadhighsea","name":"线索公海池","name_resourceKey":"XdMDObj.lead","name_appendResourceKey":"common.app.langpool","link":"leadhighsea.action"}, {"id":34,"icon":"app_salesanalysis","name":"销售绩效分析","name_resourceKey":"XdMDObj.salesanalysis","link":"salesanalysis.action"}, {"id":20,"icon":"app_yibiao","name":"仪表盘","name_resourceKey":"XdMDObj.dashboard","link":"dashboard.action"}, {"id":21,"icon":"app_baobiao","name":"报表","name_resourceKey":"XdMDObj.report","link":"report.action"}, {"id":33,"icon":"app_workreportstatistic","name":"工作报告统计","name_resourceKey":"XdMDObj.workreportstatistic","link":"workreportstatistic.action"}, {"id":35,"icon":"app_attendance","name":"考勤统计","name_resourceKey":"XdMDObj.attendance","link":"attendance.action"}, {"id":39,"icon":"app_checkinmap","name":"签到地图","name_resourceKey":"XdMDMenu.common.app.checkinmap","link":"checkinmap.action"}, {"id":40,"icon":"app_systemcount","name":"系统使用概况","name_resourceKey":"XdMDMenu.common.app.systemcount","link":"systemcount.action"}, {"id":112,"icon":"app_bimanage","name":"数据看板","name_resourceKey":"XdMDMenu.common.app.bimanage","svgId":1157,"svgColor":"#00cc99","link":"bimanage.action"}],
totalOaViewAuth: 'true',
favoriteMenuItems: [{"id":9,"icon":"app_account","name":"客户","name_resourceKey":"XdMDObj.account","link":"account.action"}, {"id":12,"icon":"app_contract","name":"合同","name_resourceKey":"XdMDObj.contract","link":"contract.action"}, {"id":100498101,"icon":"puzzle","name":"员工简历","name_resourceKey":"XdMDObj.customEntity56__c","link":"customize.action?belongId=100498101","svgId":1120,"svgColor":"#95b7e6"}, {"id":10,"icon":"app_opp","name":"商机","name_resourceKey":"XdMDObj.opportunity","link":"opportunity.action"}, {"id":24,"icon":"app_highsea","name":"客户公海池","name_resourceKey":"XdMDObj.account","name_appendResourceKey":"common.app.langpool","link":"highsea.action"}],
oaMenuItems: [{"name":"schedule"}, {"name":"task"}, {"name":"rescenter"}, {"name":"approval"}, {"name":"workreport"}, {"name":"colleague"}, {"name":"group"}, {"name":"privateMessage"}, {"name":"expenseaccount"}],
hasCrmAccess: true,
privateMsgUnRead: 0,
tenantType: '0',
partnerAccess: {"knowledgemanagement":false,"addressbook":false,"prmLic":false},
documentAllAccess:true,
partVisible:false,
financeStartMonth: '1',
logoUrl: '',
navValue: '',
callCenterObj: '{"phone":0,"record":0,"report":0,"monitor":0}',
pageStartTime: new Date(),
currentTime: '1527950811329',
serverTimeOffset: (new Date()) * 1 - 1527950811329,
currentVersion: '4.6',
languageUrl:'https://xsybucket.s3.cn-north-1.amazonaws.com.cn/%2F102/FRONT_WEB/en/%2F2018/06/01/e8f18e64-d47f-4036-bd2b-56f36a8334e4.js',
userTimezoneCfg: '{"resourceKey":"TZ.asiaShanghai","dstOffset":0,"displayName_resourceKey":"China Standard Time","offset":28800000,"timezoneId":"Asia/Shanghai","apiKey":"Asia/Shanghai","effectiveStartTime":0}'
};
if(SESSION.user["language-code"] == "zh"){
    SESSION.user.language = "zh-cn";
}
SESSION.plugin = {
    locale:{
        datepicker:"en-GB",
        fullcalendar:"en-gb",
        jqxwidget:"en",
        moment:"en",
        timepicker:"en",
        ueditor:"en",
    }
}