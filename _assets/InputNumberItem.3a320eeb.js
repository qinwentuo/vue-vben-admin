let e=document.createElement("style");e.innerHTML=".vben-setting-input-number-item[data-v-9dadcc20]{display:flex;justify-content:space-between;margin:16px 0}.vben-setting-input-number-item-input-number[data-v-9dadcc20]{width:126px}",document.head.appendChild(e);import{a as t,aY as i,i as n,o as s,j as a,k as r,n as p,J as d,bi as m}from"./index.7d742332.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f6a63c56.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4b0f7846.js";import"./UpOutlined.303774c9.js";import"./index.6dd17155.js";import{I as o}from"./index.9d065fc1.js";import"./index.d45988b9.js";import"./index.8f4f3761.js";import"./index.baa24a40.js";import"./RightOutlined.c786bfb1.js";import"./SettingOutlined.e6629737.js";import"./useTimeout.bd39ad3f.js";import"./tsxHelper.25a30e7a.js";import"./index.9f18fb3b.js";import"./domUtils.28134c31.js";import"./index.bf1621c1.js";import"./animation.064eed92.js";import"./useScrollTo.a1afc64c.js";import"./useAttrs.b55758f8.js";import"./useHeaderSetting.26ba0683.js";import{b as u}from"./index.414d088f.js";var l=t({name:"InputNumberItem",components:{InputNumber:o},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:t}=i("setting-input-number-item");return{prefixCls:t,handleChange:function(t){e.event&&u(e.event,t)}}}});const c=m("data-v-9dadcc20")(((e,t,i,m,o,u)=>{const l=n("InputNumber");return s(),a("div",{class:e.prefixCls},[r("span",null,p(e.title),1),r(l,d(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}));l.render=c,l.__scopeId="data-v-9dadcc20";export default l;