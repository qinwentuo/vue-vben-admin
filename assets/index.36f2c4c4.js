import{u as e}from"./useContextMenu.389e0bc8.js";import{a as t}from"./index.6ff2b8a1.js";import{d as i,g as n,h as o,o as s,i as a,w as l,j as r,m as p}from"./index.06f3ee29.js";import{_ as d}from"./index.192de65f.js";import"./index.33e2796b.js";import"./index.7729c420.js";import"./RightOutlined.3a6167aa.js";import"./EllipsisOutlined.9da6daab.js";import"./types.ea4e42e6.js";import"./isEqual.74a158b4.js";import"./toInteger.c1d92202.js";import"./index.95c10fda.js";import"./index.de8bd41e.js";import"./domUtils.8545414a.js";import"./_stringToArray.de50b038.js";import"./useTimeout.6f68f351.js";import"./useScrollTo.0454a233.js";import"./animation.557dbdd5.js";import"./vendor.0d1494f4.js";import"./index.c2c2071e.js";import"./DownOutlined.a2b62231.js";import"./index.3617ac63.js";import"./usePageContext.5934f257.js";import"./transButton.0234a19c.js";import"./ArrowLeftOutlined.8c726f84.js";var m=i({components:{CollapseContainer:t,PageWrapper:d},setup(){const[t]=e(),{createMessage:i}=n();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const c=p("Right Click on me"),u=p("Right Click on me");m.render=function(e,t,i,n,p,d){const m=o("a-button"),j=o("CollapseContainer"),f=o("PageWrapper");return s(),a(f,{title:"右键菜单示例"},{default:l((()=>[r(j,{title:"Simple"},{default:l((()=>[r(m,{type:"primary",onContextmenu:e.handleContext},{default:l((()=>[c])),_:1},8,["onContextmenu"])])),_:1}),r(j,{title:"Multiple",class:"mt-4"},{default:l((()=>[r(m,{type:"primary",onContextmenu:e.handleMultipleContext},{default:l((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default m;