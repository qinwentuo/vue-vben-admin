import{d as e,h as s,o as t,i as o,w as i,j as a,a0 as r,m as l}from"./index.21e8ff59.js";import"./_stringToArray.0ef76801.js";import"./domUtils.99413d3b.js";import"./index.2f48e981.js";import{_ as n,a as d}from"./index.ccac31ab.js";import"./FullscreenOutlined.1f4f5c68.js";import"./RightOutlined.404e21a2.js";import"./useTimeout.6dfc64b8.js";import"./index.24e08a3a.js";import"./animation.164e71fc.js";import"./useScrollTo.22d7cad4.js";import"./useAttrs.5f761777.js";import"./useWindowSizeFn.25716901.js";var c=e({components:{BasicModal:n},setup(){const[e,{closeModal:s,setModalProps:t}]=d();return{register:e,closeModal:s,setModalProps:()=>{t({title:"Modal New Title"})}}}});const p=l("从内部关闭弹窗"),m=l("从内部修改title");c.render=function(e,l,n,d,c,u){const f=s("a-button"),j=s("BasicModal");return t(),o(j,r(e.$attrs,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:i((()=>[a(f,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:i((()=>[p])),_:1},8,["onClick"]),a(f,{type:"primary",onClick:e.setModalProps},{default:i((()=>[m])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default c;