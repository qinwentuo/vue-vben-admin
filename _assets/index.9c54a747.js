let e=document.createElement("style");e.innerHTML=".vben-image-preview .ant-image-preview-operations{background:rgba(0,0,0,.4)}",document.head.appendChild(e);import{a,H as s,aY as r,I as t,Y as i,i as o,o as l,j as n,w as p,K as c,aM as m,b9 as d,J as u,bj as g,k as f}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import{I as v}from"./index.746cad3e.js";import"./CloseOutlined.dbc427c7.js";import"./LeftOutlined.cf4d5a8b.js";import"./RightOutlined.c786bfb1.js";var b=a({name:"ImagePreview",components:{Image:v,PreviewGroup:v.PreviewGroup},props:{functional:s.bool,imageList:{type:Array}},setup(e){const{prefixCls:a}=r("image-preview");return{prefixCls:a,getImageList:t((()=>{const{imageList:a}=e;return a?a.map((e=>i(e)?{src:e,placeholder:!1}:e)):[]}))}}});b.render=function(e,a,s,r,t,i){const v=o("Image"),b=o("PreviewGroup");return l(),n(b,{class:e.prefixCls},{default:p((()=>[!e.imageList||e.$slots.default?c(e.$slots,"default",{key:0}):(l(!0),n(m,{key:1},d(e.getImageList,(e=>(l(),n(v,u({key:e.src},e),g({_:2},[e.placeholder?{name:"placeholder",fn:p((()=>[f(v,u(e,{src:e.placeholder,preview:!1}),null,16,["src"])]))}:void 0]),1040)))),128))])),_:1},8,["class"])};export default b;