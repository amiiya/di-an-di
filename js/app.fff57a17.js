(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(o,n,t){o.exports=t("2f39")},"0047":function(o,n,t){},1357:function(o,n){var t="amiiya.github.io";t===window.location.host&&"https:"!==window.location.protocol&&(window.location.protocol="https")},"2f39":function(o,n,t){"use strict";t.r(n);t("5c7d"),t("573e"),t("7d6e"),t("e54f"),t("985d"),t("0047");var e=t("2b0e"),i=t("b05d"),a=t("2a19");e["a"].use(i["a"],{config:{},plugins:{Notify:a["a"]}});var r=function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},c=[],l={name:"App"},s=l,u=t("2877"),p=Object(u["a"])(s,r,c,!1,null,null,null),f=p.exports,w=t("8c4f");const d=[{path:"/",component:()=>Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"f241")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"8b24"))},{path:"impressum",name:"impressum",component:()=>Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"acc6"))}]}];d.push({path:"*",component:()=>Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"e51e"))});var h=d;e["a"].use(w["a"]);var m=function(){const o=new w["a"]({scrollBehavior:()=>({x:0,y:0}),routes:h,mode:"history",base:"/"});return o},b=async function(){const o="function"===typeof m?await m({Vue:e["a"]}):m,n={router:o,render:o=>o(f),el:"#q-app"};return{app:n,router:o}},v=t("1357"),y=t.n(v);async function g(){const{app:o,router:n}=await b();let t=!0;const i=o=>{t=!1,window.location.href=o},a=window.location.href.replace(window.location.origin,""),r=[y.a,void 0];for(let l=0;!0===t&&l<r.length;l++)if("function"===typeof r[l])try{await r[l]({app:o,router:n,Vue:e["a"],ssrContext:null,redirect:i,urlPath:a})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!1!==t&&new e["a"](o)}a["a"].setDefaults({position:"bottom",timeout:1e6,color:"primary",icon:"fas fa-exclamation",multiLine:!0,actions:[{icon:"close",color:"white"}]}),g()}},[[0,2,0]]]);