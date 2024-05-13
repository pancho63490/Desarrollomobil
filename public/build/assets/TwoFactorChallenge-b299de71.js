import{d,T as x,o as a,e as s,b as o,u as t,w as m,F as c,Z as h,a as i,g as n,i as _,n as C,m as w}from"./app-cd776759.js";import{A as V}from"./AuthenticationCard-03566e41.js";import{_ as T}from"./AuthenticationCardLogo-3dee4f79.js";import{_ as p,a as v}from"./TextInput-1f031118.js";import{_ as g}from"./InputLabel-4a09989c.js";import{_ as $}from"./PrimaryButton-27bac4a6.js";import"./_plugin-vue_export-helper-c27b6911.js";const I={class:"mb-4 text-sm text-gray-600"},U={key:0},B={key:1},F={class:"flex items-center justify-end mt-4"},S={__name:"TwoFactorChallenge",setup(N){const r=d(!1),e=x({code:"",recovery_code:""}),f=d(null),y=d(null),k=async()=>{r.value^=!0,await w(),r.value?(f.value.focus(),e.code=""):(y.value.focus(),e.recovery_code="")},b=()=>{e.post(route("two-factor.login"))};return(A,l)=>(a(),s(c,null,[o(t(h),{title:"Two-factor Confirmation"}),o(V,null,{logo:m(()=>[o(T)]),default:m(()=>[i("div",I,[r.value?(a(),s(c,{key:1},[n(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(a(),s(c,{key:0},[n(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),i("form",{onSubmit:_(b,["prevent"])},[r.value?(a(),s("div",B,[o(g,{for:"recovery_code",value:"Recovery Code"}),o(p,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:f,modelValue:t(e).recovery_code,"onUpdate:modelValue":l[1]||(l[1]=u=>t(e).recovery_code=u),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.recovery_code},null,8,["message"])])):(a(),s("div",U,[o(g,{for:"code",value:"Code"}),o(p,{id:"code",ref_key:"codeInput",ref:y,modelValue:t(e).code,"onUpdate:modelValue":l[0]||(l[0]=u=>t(e).code=u),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.code},null,8,["message"])])),i("div",F,[i("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:_(k,["prevent"])},[r.value?(a(),s(c,{key:1},[n(" Use an authentication code ")],64)):(a(),s(c,{key:0},[n(" Use a recovery code ")],64))]),o($,{class:C(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>[n(" Log in ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{S as default};
