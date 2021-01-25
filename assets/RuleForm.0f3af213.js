import{_ as e}from"./index.46e5b397.js";import{a as i}from"./index.6ff2b8a1.js";import{d as s,g as o,h as t,o as r,i as a,w as l,j as n,m as d}from"./index.06f3ee29.js";import{_ as p}from"./index.192de65f.js";import{u as m}from"./useForm.bc255b70.js";import"./index.33949cd9.js";import"./responsiveObserve.c545f1cc.js";import"./index.ca107bc6.js";import"./vendor.0d1494f4.js";import"./findIndex.e0eb9451.js";import"./isEqual.74a158b4.js";import"./_baseProperty.74f89655.js";import"./toInteger.c1d92202.js";import"./index.980e8b38.js";import"./index.6f563249.js";import"./SearchOutlined.80b97ace.js";import"./CheckOutlined.170c5a81.js";import"./DownOutlined.a2b62231.js";import"./index.05074f4c.js";import"./index.a3e88181.js";import"./UpOutlined.c18e08b2.js";import"./index.5f26cfb9.js";import"./EyeOutlined.9c30adbb.js";import"./index.1856500c.js";import"./colors.150c899a.js";import"./RightOutlined.3a6167aa.js";import"./RedoOutlined.8be832f0.js";import"./index.7729c420.js";import"./EllipsisOutlined.9da6daab.js";import"./types.ea4e42e6.js";import"./Tree.918118f3.js";import"./util.6f4aed49.js";import"./useAttrs.75e4bdd4.js";import"./index.95c10fda.js";import"./index.316663d4.js";import"./uuid.0357dfa3.js";import"./index.51a23a15.js";import"./DeleteOutlined.084cf4d3.js";import"./index.894ac7ce.js";import"./useTimeout.6f68f351.js";import"./useWindowSizeFn.c470727d.js";import"./FullscreenOutlined.bbb91eb1.js";import"./index.33e2796b.js";import"./index.be890f15.js";import"./index.2b3a1b55.js";import"./LeftOutlined.117bdb10.js";import"./download.0962c71e.js";import"./domUtils.8545414a.js";import"./_stringToArray.de50b038.js";import"./index.de8bd41e.js";import"./useScrollTo.0454a233.js";import"./animation.557dbdd5.js";import"./index.c2c2071e.js";import"./index.3617ac63.js";import"./usePageContext.5934f257.js";import"./transButton.0234a19c.js";import"./ArrowLeftOutlined.8c726f84.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa"}]},{field:"field44",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,i)=>i?"1"===i?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var u=s({components:{BasicForm:e,CollapseContainer:i,PageWrapper:p},setup(){const{createMessage:e}=o(),[i,{validateFields:s,clearValidate:t,getFieldsValue:r,setFieldsValue:a}]=m({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:i,schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))},getFormValues:function(){const i=r();e.success("values:"+JSON.stringify(i))},setFormValues:function(){a({field1:1111,field5:["1"],field7:"1"})},validateForm:async function(){try{await s()}catch(e){}},resetValidate:async function(){t()}}}});const f={class:"mb-4"},j=d("手动校验表单"),b=d("清空校验信息"),x=d("获取表单值"),g=d("设置表单值");u.render=function(e,i,s,o,d,p){const m=t("a-button"),c=t("BasicForm"),u=t("CollapseContainer"),v=t("PageWrapper");return r(),a(v,{title:"表单校验示例"},{default:l((()=>[n("div",f,[n(m,{onClick:e.validateForm,class:"mr-2"},{default:l((()=>[j])),_:1},8,["onClick"]),n(m,{onClick:e.resetValidate,class:"mr-2"},{default:l((()=>[b])),_:1},8,["onClick"]),n(m,{onClick:e.getFormValues,class:"mr-2"},{default:l((()=>[x])),_:1},8,["onClick"]),n(m,{onClick:e.setFormValues,class:"mr-2"},{default:l((()=>[g])),_:1},8,["onClick"])]),n(u,{title:"表单校验"},{default:l((()=>[n(c,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;