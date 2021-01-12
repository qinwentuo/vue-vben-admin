import{d as e,r as t,h as i,o,i as n,j as a,w as d}from"./index.21e8ff59.js";import{f as l}from"./index.f09ce96b.js";import"./_stringToArray.0ef76801.js";import"./domUtils.99413d3b.js";import"./index.6b8b099a.js";import"./index.25bbb200.js";import"./index.2f48e981.js";import"./CheckOutlined.ae5c5764.js";import"./index.ccac31ab.js";import{_ as s,a as r}from"./index.74204621.js";import"./FullscreenOutlined.1f4f5c68.js";import"./RightOutlined.404e21a2.js";import"./SettingOutlined.b2d29256.js";import"./useTimeout.6dfc64b8.js";import"./index.24e08a3a.js";import"./animation.164e71fc.js";import"./useScrollTo.22d7cad4.js";import"./useAttrs.5f761777.js";import"./useWindowSizeFn.25716901.js";import"./index.fc7362a8.js";import"./uuid.a6cec785.js";import"./download.471463f3.js";import"./useForm.738bf575.js";import"./useSortable.02b4f4da.js";import"./useExpose.951536e1.js";import{u as m}from"./useTable.ab0a068a.js";import{o as c}from"./select.c1461b7c.js";import{d as p}from"./table.d04a902d.js";const u=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:200},{title:"输入框校验",dataIndex:"name1",editRow:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:c},width:200},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var b=e({components:{BasicTable:s,EditTableHeaderIcon:r,TableAction:l},setup(){const e=t(""),[i]=m({title:"可编辑行示例",api:p,columns:u,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function o(t){var i;e.value=t.key,null==(i=t.onEdit)||i.call(t,!0)}function n(t){var i;e.value="",null==(i=t.onEdit)||i.call(t,!1,!0)}async function a(t){var i;await(null==(i=t.onEdit)?void 0:i.call(t,!1,!0))&&(e.value="")}return{registerTable:i,handleEdit:o,createActions:function(t,i){return t.editable?[{label:"保存",onClick:a.bind(null,t,i)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:n.bind(null,t,i)}}]:[{label:"编辑",disabled:!!e.value&&e.value!==t.key,onClick:o.bind(null,t)}]}}}});const f={class:"p-4"};b.render=function(e,t,l,s,r,m){const c=i("TableAction"),p=i("BasicTable");return o(),n("div",f,[a(p,{onRegister:e.registerTable},{action:d((({record:t,column:i})=>[a(c,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"])])};export default b;