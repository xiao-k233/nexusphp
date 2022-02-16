var J=Object.defineProperty,K=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var L=(e,o,s)=>o in e?J(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,S=(e,o)=>{for(var s in o||(o={}))G.call(o,s)&&L(e,s,o[s]);if(k)for(var s of k(o))Q.call(o,s)&&L(e,s,o[s]);return e},U=(e,o)=>K(e,X(o));import{c as Y,a as Z,b as t,E as b,u as O,d as ee,r as R,o as V,t as te,e as m,f as g,g as v,h as l,i as $,j as x,k as d,w as u,l as f,p as w,m as y,n as oe,q as j,s as se,v as M,x as re}from"./vendor.51c5b88d.js";const ne=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}};ne();function I(e){const o=window.localStorage.getItem(e);try{return JSON.parse(window.localStorage.getItem(e))}catch{return o}}function Qe(e,o){window.localStorage.setItem(e,JSON.stringify(o))}function D(e){window.localStorage.removeItem(e)}const T={login:"Login",introduce:"\u7CFB\u7EDF\u4ECB\u7ECD",dashboard:"Dashboard",add:"\u6DFB\u52A0\u5546\u54C1",swiper:"\u8F6E\u64AD\u56FE\u914D\u7F6E",hot:"\u70ED\u9500\u5546\u54C1\u914D\u7F6E",new:"\u65B0\u54C1\u4E0A\u7EBF\u914D\u7F6E",recommend:"\u4E3A\u4F60\u63A8\u8350\u914D\u7F6E",category:"\u5206\u7C7B\u7BA1\u7406",level2:"\u5206\u7C7B\u4E8C\u7EA7\u7BA1\u7406",level3:"\u5206\u7C7B\u4E09\u7EA7\u7BA1\u7406",good:"\u5546\u54C1\u7BA1\u7406",guest:"\u4F1A\u5458\u7BA1\u7406",order:"\u8BA2\u5355\u7BA1\u7406",order_detail:"\u8BA2\u5355\u8BE6\u60C5",account:"\u4FEE\u6539\u8D26\u6237","agent-allow":"Agent allow","agent-allow-form":"Agent allow form",user:"User","user-form":"User form","user-detail":"User detail",exam:"Exam","exam-form":"Exam form","exam-user":"Exam user",setting:"Setting",medal:"Medal","medal-form":"Medal form"},ae="modulepreload",C={},le="/admin/",_=function(o,s){return!s||s.length===0?o():Promise.all(s.map(n=>{if(n=`${le}${n}`,n in C)return;C[n]=!0;const r=n.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":ae,r||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),r)return new Promise((c,h)=>{i.addEventListener("load",c),i.addEventListener("error",h)})})).then(()=>o())},H=Y({history:Z(),base:"/admin/",routes:[{path:"/",name:"dashboard",component:()=>_(()=>import("./index.743e0dd5.js"),["assets/index.743e0dd5.js","assets/index.4df71842.css","assets/vendor.51c5b88d.js"])},{path:"/login",name:"login",component:()=>_(()=>import("./login.85d15f5f.js"),["assets/login.85d15f5f.js","assets/login.1a491c3a.css","assets/vendor.51c5b88d.js"])},{path:"/user",name:"user",component:()=>_(()=>import("./index.3eda6da3.js"),["assets/index.3eda6da3.js","assets/vendor.51c5b88d.js","assets/table.848ed703.js"])},{path:"/user-form",name:"user-form",component:()=>_(()=>import("./form.028f7132.js"),["assets/form.028f7132.js","assets/vendor.51c5b88d.js"])},{path:"/user-detail",name:"user-detail",component:()=>_(()=>import("./detail.a7564b3a.js"),["assets/detail.a7564b3a.js","assets/detail.9366892a.css","assets/vendor.51c5b88d.js"])},{path:"/exam",name:"exam",component:()=>_(()=>import("./index.c1672f67.js"),["assets/index.c1672f67.js","assets/index.a6dda25b.css","assets/vendor.51c5b88d.js","assets/table.848ed703.js"])},{path:"/exam-form",name:"exam-form",component:()=>_(()=>import("./form.8ef071db.js"),["assets/form.8ef071db.js","assets/vendor.51c5b88d.js"])},{path:"/exam-user",name:"exam-user",component:()=>_(()=>import("./user.22d04a40.js"),["assets/user.22d04a40.js","assets/user.dfb99fb5.css","assets/vendor.51c5b88d.js","assets/table.848ed703.js"])},{path:"/agent-allow",name:"agent-allow",component:()=>_(()=>import("./index.a61f2e7f.js"),["assets/index.a61f2e7f.js","assets/vendor.51c5b88d.js"])},{path:"/agent-allow-form",name:"agent-allow-form",component:()=>_(()=>import("./form.d2bb6860.js"),["assets/form.d2bb6860.js","assets/vendor.51c5b88d.js"])},{path:"/medal",name:"medal",component:()=>_(()=>import("./index.b99ab94b.js"),["assets/index.b99ab94b.js","assets/index.6213754b.css","assets/vendor.51c5b88d.js","assets/table.848ed703.js"])},{path:"/medal-form",name:"medal-form",component:()=>_(()=>import("./form.8bf8f363.js"),["assets/form.8bf8f363.js","assets/vendor.51c5b88d.js"])},{path:"/setting",name:"setting",component:()=>_(()=>import("./index.8b475fe8.js"),["assets/index.8b475fe8.js","assets/vendor.51c5b88d.js","assets/table.848ed703.js"])}]});console.log({BASE_URL:"/admin/",MODE:"production",DEV:!1,PROD:!0});t.defaults.baseURL="/api";t.defaults.withCredentials=!0;t.defaults.headers["X-Requested-With"]="XMLHttpRequest";t.defaults.headers["Content-Type"]="application/json";t.defaults.headers.Accept="application/json";t.defaults.headers.Platform="admin";t.interceptors.request.use(e=>(e.headers.Authorization="Bearer "+I("token"),e),e=>Promise.reject(e));t.interceptors.response.use(e=>(console.log(e),typeof e.data!="object"?(b.error("Server Error 1"),Promise.reject(e)):e.data.ret&&e.data.ret!=0?(b.error(e.data.msg),Promise.reject(e.data)):e.data),e=>{let o=e.response;return console.log(o),o.status==401&&H.push({name:"login"}),b.error(o.data.msg||"Server Error 2"),Promise.reject(e)});const ie={login:(e={})=>t.post("login",e),logout:(e={})=>t.post("logout"),listAllowAgent:(e={})=>t.get("agent-allows",{params:e}),storeAllowAgent:(e={})=>t.post("agent-allows",e),updateAllowAgent:(e,o={})=>t.put("agent-allows/"+e,o),getAllowAgent:e=>t.get("agent-allows/"+e),deleteAllowAgent:e=>t.delete("agent-allows/"+e),listUser:(e={})=>t.get("users",{params:e}),getUser:(e,o={})=>t.get("users/"+e,{params:o}),getUserBase:(e={})=>t.get("user-base",{params:e}),getInviteInfo:(e={})=>t.get("user-invite-info",{params:e}),getUserModComment:(e={})=>t.get("user-mod-comment",{params:e}),storeUser:(e={})=>t.post("users",e),disableUser:(e={})=>t.post("user-disable",e),enableUser:(e={})=>t.post("user-enable",e),resetPassword:(e={})=>t.post("user-reset-password",e),listUserMatchExams:(e={})=>t.get("user-match-exams",{params:e}),listExam:(e={})=>t.get("exams",{params:e}),listExamIndex:(e={})=>t.get("exam-indexes",{params:e}),storeExam:(e={})=>t.post("exams",e),updateExam:(e,o={})=>t.put("exams/"+e,o),getExam:e=>t.get("exams/"+e),deleteExam:e=>t.delete("exams/"+e),listMedal:(e={})=>t.get("medals",{params:e}),storeMedal:(e={})=>t.post("medals",e),updateMedal:(e,o={})=>t.put("medals/"+e,o),getMedal:e=>t.get("medals/"+e),deleteMedal:e=>t.delete("medals/"+e),listClass:(e={})=>t.get("user-classes",{params:e}),listExamUser:(e={})=>t.get("exam-users",{params:e}),deleteExamUser:e=>t.delete("exam-users/"+e),avoidExamUser:e=>t.put("exam-users-avoid",{id:e}),recoverExamUser:e=>t.put("exam-users-recover",{id:e}),storeExamUser:e=>t.post("exam-users",e),storeSetting:e=>t.post("settings",e),listSetting:e=>t.get("settings",{params:e}),listStatData:()=>t.get("dashboard/stat-data"),listLatestUser:()=>t.get("dashboard/latest-user"),listLatestTorrent:()=>t.get("dashboard/latest-torrent"),listSystemInfo:()=>t.get("dashboard/system-info"),removeUserMedal:e=>t.delete("user-medals/"+e),storeUserMedal:e=>t.post("user-medals",e)};var A=(e,o)=>{const s=e.__vccOpts||e;for(const[n,r]of o)s[n]=r;return s};const ue={name:"Header",props:{},setup(e,o){const s=O();ee();const n="userInfo",r=R({name:"dashboard",userInfo:null,hasBack:!1});V(async()=>{console.log("Head onMounted!"),console.log(e);let c=I(n);c&&(r.userInfo=c)});const a=()=>{ie.logout().then(()=>{D("token"),D(n),s.push({name:"login"})})},i=()=>{s.back()};return s.afterEach(c=>{console.log("Head afterEach to",c),c.query,r.name=T[c.name]}),U(S({},te(r)),{logout:a,back:i})}},N=e=>(w("data-v-ca9b15ba"),e=e(),y(),e),de={class:"header"},ce={class:"left"},_e={style:{"font-size":"20px"}},me={class:"right"},pe={class:"author"},fe=N(()=>l("i",{class:"icon el-icon-s-custom"},null,-1)),ge=N(()=>l("i",{class:"el-icon-caret-bottom"},null,-1)),he={class:"nickname"},ve=f("Logout");function xe(e,o,s,n,r,a){const i=m("el-tag"),c=m("el-popover");return g(),v("div",de,[l("div",ce,[e.hasBack?(g(),v("i",{key:0,class:"el-icon-back",onClick:o[0]||(o[0]=(...h)=>n.back&&n.back(...h))})):$("",!0),l("span",_e,x(e.name),1)]),l("div",me,[d(c,{placement:"bottom",width:320,trigger:"click","popper-class":"popper-user-box"},{reference:u(()=>[l("div",pe,[fe,f(" "+x(e.userInfo&&e.userInfo.username||"")+" ",1),ge])]),default:u(()=>[l("div",he,[l("p",null,"Email\uFF1A"+x(e.userInfo&&e.userInfo.email||""),1),l("p",null,"Class\uFF1A"+x(e.userInfo&&e.userInfo.class_text||""),1),d(i,{size:"small",effect:"dark",class:"logout",onClick:n.logout},{default:u(()=>[ve]),_:1},8,["onClick"])])]),_:1})])])}var Ee=A(ue,[["render",xe],["__scopeId","data-v-ca9b15ba"]]);const be={name:"Footer",props:{version:String}},we=e=>(w("data-v-6e9091a0"),e=e(),y(),e),ye={class:"footer"},Ie=we(()=>l("div",{class:"left"},[f("Powered by "),l("a",{target:"_blank",href:"https://nexusphp.org/"},"NexusPHP")],-1)),Ae={key:0,class:"right"};function Pe(e,o,s,n,r,a){return g(),v("div",ye,[Ie,s.version?(g(),v("div",Ae," Version: "+x(s.version),1)):$("",!0)])}var ke=A(be,[["render",Pe],["__scopeId","data-v-6e9091a0"]]);const Le={name:"App",components:{Header:Ee,Footer:ke},setup(){const e=["/login"],o=O(),s=R({defaultOpen:["1","2","3","4"],showMenu:!0,currentPath:"/dashboard",count:{number:1},routerName:o.name,version:""});V(()=>{}),oe(()=>{n()});const n=o.beforeEach((a,i,c)=>{a.path=="/login"||I("token")?c():c({path:"/login"}),s.showMenu=!e.includes(a.path),s.currentPath=a.path,document.title=T[a.name]});return{state:s,updateVersion:a=>{s.version=a.nexus_version.value}}}},p=e=>(w("data-v-83d85a40"),e=e(),y(),e),Se={class:"layout"},Ue=p(()=>l("div",{class:"head"},[l("div",null,[l("span",null,"NexusPHP")])],-1)),Oe=p(()=>l("div",{class:"line"},null,-1)),Re=p(()=>l("i",{class:"el-icon-odometer"},null,-1)),Ve=f("Dashboard"),$e=p(()=>l("span",null,"User",-1)),je=p(()=>l("i",{class:"el-icon-user"},null,-1)),Me=f("User list"),De=p(()=>l("span",null,"System",-1)),Te=p(()=>l("i",{class:"el-icon-menu"},null,-1)),Ce=f("Exam"),He=p(()=>l("i",{class:"el-icon-menu"},null,-1)),Ne=f("Exam user"),Be=p(()=>l("i",{class:"el-icon-menu"},null,-1)),qe=f("Medal"),Fe=p(()=>l("i",{class:"el-icon-menu"},null,-1)),ze=f("Setting"),We={class:"main"};function Je(e,o,s,n,r,a){const i=m("el-menu-item"),c=m("el-menu-item-group"),h=m("el-sub-menu"),q=m("el-menu"),F=m("el-aside"),z=m("Header"),P=m("router-view"),W=m("Footer"),E=m("el-container");return g(),v("div",Se,[n.state.showMenu?(g(),j(E,{key:0,class:"container"},{default:u(()=>[d(F,{class:"aside"},{default:u(()=>[Ue,Oe,d(q,{"default-openeds":n.state.defaultOpen,"background-color":"#222832","text-color":"#fff",router:!0,"default-active":n.state.currentPath},{default:u(()=>[d(i,{index:"/"},{default:u(()=>[Re,Ve]),_:1}),d(h,{index:"2"},{title:u(()=>[$e]),default:u(()=>[d(c,null,{default:u(()=>[d(i,{index:"/user"},{default:u(()=>[je,Me]),_:1})]),_:1})]),_:1}),d(h,{index:"3"},{title:u(()=>[De]),default:u(()=>[d(c,null,{default:u(()=>[d(i,{index:"/exam"},{default:u(()=>[Te,Ce]),_:1})]),_:1}),d(c,null,{default:u(()=>[d(i,{index:"/exam-user"},{default:u(()=>[He,Ne]),_:1})]),_:1}),d(c,null,{default:u(()=>[d(i,{index:"/medal"},{default:u(()=>[Be,qe]),_:1})]),_:1}),d(c,null,{default:u(()=>[d(i,{index:"/setting"},{default:u(()=>[Fe,ze]),_:1})]),_:1})]),_:1})]),_:1},8,["default-openeds","default-active"])]),_:1}),d(E,{class:"content"},{default:u(()=>[d(z,{"router-name":n.state.routerName},null,8,["router-name"]),l("div",We,[d(P,{onUpdateVersion:n.updateVersion},null,8,["onUpdateVersion"])]),d(W,{version:n.state.version},null,8,["version"])]),_:1})]),_:1})):(g(),j(E,{key:1,class:"container"},{default:u(()=>[d(P)]),_:1}))])}var Ke=A(Le,[["render",Je],["__scopeId","data-v-83d85a40"]]);const B=se(Ke);for(const e in M)B.component(e,M[e]);B.use(re).use(H).mount("#app");export{A as _,ie as a,I as b,Qe as l};