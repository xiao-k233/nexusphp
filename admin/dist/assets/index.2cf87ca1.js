var k=Object.defineProperty,S=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var f=(e,a,t)=>a in e?k(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,b=(e,a)=>{for(var t in a||(a={}))I.call(a,t)&&f(e,t,a[t]);if(g)for(var t of g(a))P.call(a,t)&&f(e,t,a[t]);return e},w=(e,a)=>S(e,M(a));import{B as q,u as B,o as A,t as H,e as c,y as L,f as v,q as x,w as r,E as N,h as i,k as o,z as j,p as z,m as V,l as R}from"./vendor.7b1bb722.js";import{_ as $,a as y}from"./index.86235a22.js";import{u as F,r as G}from"./table.77a09864.js";const J={name:"ExamTable",setup(){const e=q(null),a=B(),t=F();A(()=>{console.log("ExamTable onMounted"),s()});const s=async()=>{t.loading=!0;let l=await y.listExam(t.query);G(l,t),t.loading=!1},h=()=>{a.push({name:"exam-form"})},m=l=>{a.push({path:"/exam-form",query:{id:l}})},p=async l=>{let u=await y.deleteExam(l);N.success(u.msg),t.query.page=1,await s()},n=l=>{t.multipleSelection=l},_=l=>{t.query.page=l,s()};return w(b({},H(t)),{multipleTable:e,handleSelectionChange:n,handleAdd:h,handleEdit:m,handleDelete:p,fetchTableData:s,changePage:_})}},C=e=>(z("data-v-79667e75"),e=e(),V(),e),K={class:"nexus-table-header"},O=C(()=>i("div",{class:"left"},null,-1)),Q={class:"right"},U=R("Add"),W=["innerHTML"],X=["innerHTML"],Y=["onClick"],Z=C(()=>i("a",{style:{cursor:"pointer"}},"Delete",-1));function ee(e,a,t,s,h,m){const p=c("el-button"),n=c("el-table-column"),_=c("el-popconfirm"),l=c("el-table"),u=c("el-pagination"),T=c("el-card"),D=L("loading");return v(),x(T,{class:""},{header:r(()=>[i("div",K,[O,i("div",Q,[o(p,{type:"primary",icon:"Plus",onClick:s.handleAdd},{default:r(()=>[U]),_:1},8,["onClick"])])])]),default:r(()=>[j((v(),x(l,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark",onSelectionChange:s.handleSelectionChange},{default:r(()=>[o(n,{type:"selection",width:"55"}),o(n,{prop:"id",label:"Id",width:"50"}),o(n,{prop:"name",label:"Name"}),o(n,{label:"Indexes",width:"250px"},{default:r(d=>[i("p",{style:{"white-space":"pre-line"},innerHTML:d.row.indexes_formatted},null,8,W)]),_:1}),o(n,{prop:"begin",label:"Begin",width:"160"}),o(n,{prop:"end",label:"End",width:"160"}),o(n,{prop:"duration_text",label:"Duration"}),o(n,{label:"Target users",width:"350px"},{default:r(d=>[i("p",{style:{"white-space":"pre-line"},innerHTML:d.row.filters_formatted},null,8,X)]),_:1}),o(n,{prop:"is_discovered_text",label:"Discovered",width:"110"}),o(n,{prop:"priority",label:"Priority"}),o(n,{prop:"status_text",label:"Status"}),o(n,{label:"Action",width:"120"},{default:r(d=>[i("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:E=>s.handleEdit(d.row.id)},"Edit",8,Y),o(_,{title:"Confirm Delete ?",onConfirm:E=>s.handleDelete(d.row.id)},{reference:r(()=>[Z]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data","onSelectionChange"])),[[D,e.loading]]),o(u,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.perPage,"current-page":e.currentPage,onCurrentChange:s.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})}var le=$(J,[["render",ee],["__scopeId","data-v-79667e75"]]);export{le as default};