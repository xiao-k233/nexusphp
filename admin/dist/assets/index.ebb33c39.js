var I=Object.defineProperty,N=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var R=(l,o,a)=>o in l?I(l,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[o]=a,H=(l,o)=>{for(var a in o||(o={}))M.call(o,a)&&R(l,a,o[a]);if(P)for(var a of P(o))z.call(o,a)&&R(l,a,o[a]);return l},x=(l,o)=>N(l,j(o));import{B as E,u as A,r as F,o as L,t as Q,e as u,y as G,f as b,q as U,w as r,E as f,h as y,k as t,g as J,A as K,F as O,z as W,j as X,l as C}from"./vendor.7b1bb722.js";import{_ as Y,a as h}from"./index.918d62b3.js";import{u as Z,r as $}from"./table.77a09864.js";const ee={name:"HrTable",setup(){const l=E(null),o=A(),a=Z();let s=F({status:[]});L(()=>{console.log("MedalTable onMounted"),k(),c()});const c=async()=>{a.loading=!0;let e=await h.listHr(a.query);$(e,a),a.loading=!1},B=()=>{o.push({name:"agent-deny-form"})},p=async()=>{let e=a.multipleSelection.map(T=>T.id);if(e.length==0){f.error("No data selected !");return}console.log(e);let i=await h.pardonHrBulk({id:e});f.success(i.msg),a.query.page=1,await c()},g=e=>{o.push({path:"/hr-detail",query:{id:e}})},m=async e=>{let i=await h.deleteHr(e);f.success(i.msg),a.query.page=1,await c()},w=async()=>{let e=a.multipleSelection.map(T=>T.id);if(e.length==0){f.error("No data selected !");return}console.log(e);let i=await h.deleteHrBulk({id:e});f.success(i.msg),a.query.page=1,await c()},q=e=>{a.multipleSelection=e},_=e=>{a.query.page=e,c()},k=async()=>{let e=await h.listHrStatus();s.status=e.data},d=()=>{a.query.status="",a.query.uid="",a.query.username="",a.query.torrent_id=""},v=(e,i)=>e.user.username,D=(e,i)=>'<a href="" target="_blank">'+e.torrent.name+"</a>",S=(e,i)=>e.snatch.upload_text,V=(e,i)=>e.snatch.download_text,n=(e,i)=>e.snatch.share_ratio;return x(H({},Q(a)),{extraData:s,multipleTable:l,handleSelectionChange:q,handlePardon:B,handleDetail:g,handleDelete:m,handlePardonBulk:p,handleDeleteBulk:w,fetchTableData:c,changePage:_,handleReset:d,formatColumnUsername:v,formatColumnTorrent:D,formatColumnUploaded:S,formatColumnDownloaded:V,formatColumnShareRatio:n})}},te={class:"nexus-table-header"},ae={class:"left"},le=C("Remove"),oe=C("Pardon"),ne=C("Query"),re=C("Reset"),se=["title","href"],de=["onClick"];function ue(l,o,a,s,c,B){const p=u("el-button"),g=u("el-popconfirm"),m=u("el-form-item"),w=u("el-option"),q=u("el-select"),_=u("el-input"),k=u("el-form"),d=u("el-table-column"),v=u("el-table"),D=u("el-pagination"),S=u("el-card"),V=G("loading");return b(),U(S,{class:""},{header:r(()=>[y("div",te,[y("div",ae,[t(k,{inline:!0,model:l.query},{default:r(()=>[t(m,null,{default:r(()=>[t(g,{title:"Confirm Remove ?",onConfirm:s.handleDeleteBulk},{reference:r(()=>[t(p,{type:"default"},{default:r(()=>[le]),_:1})]),_:1},8,["onConfirm"]),t(g,{title:"Confirm Pardon ?",onConfirm:s.handlePardonBulk},{reference:r(()=>[t(p,{type:"default"},{default:r(()=>[oe]),_:1})]),_:1},8,["onConfirm"])]),_:1}),t(m,{label:""},{default:r(()=>[t(q,{modelValue:l.query.status,"onUpdate:modelValue":o[0]||(o[0]=n=>l.query.status=n),filterable:"",placeholder:"Status"},{default:r(()=>[(b(!0),J(O,null,K(s.extraData.status,n=>(b(),U(w,{key:n.status,label:n.text,value:n.status},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(m,{label:""},{default:r(()=>[t(_,{placeholder:"UID",modelValue:l.query.uid,"onUpdate:modelValue":o[1]||(o[1]=n=>l.query.uid=n)},null,8,["modelValue"])]),_:1}),t(m,{label:""},{default:r(()=>[t(_,{placeholder:"Username",modelValue:l.query.username,"onUpdate:modelValue":o[2]||(o[2]=n=>l.query.username=n)},null,8,["modelValue"])]),_:1}),t(m,{label:""},{default:r(()=>[t(_,{placeholder:"Torrent ID",modelValue:l.query.torrent_id,"onUpdate:modelValue":o[3]||(o[3]=n=>l.query.torrent_id=n)},null,8,["modelValue"])]),_:1}),t(m,null,{default:r(()=>[t(p,{type:"primary",onClick:s.fetchTableData},{default:r(()=>[ne]),_:1},8,["onClick"]),t(p,{type:"primary",onClick:s.handleReset},{default:r(()=>[re]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])])])]),default:r(()=>[W((b(),U(v,{ref:"multipleTable",data:l.tableData,"tooltip-effect":"dark",onSelectionChange:s.handleSelectionChange},{default:r(()=>[t(d,{type:"selection",width:"55"}),t(d,{prop:"id",label:"Id",width:"100"}),t(d,{prop:"",label:"Username",width:"120",formatter:s.formatColumnUsername},null,8,["formatter"]),t(d,{prop:"",label:"Torrent"},{default:r(n=>[y("a",{class:"text-one-line",title:n.row.torrent.name,href:n.row.torrent.details_url,target:"_blank"},X(n.row.torrent.name),9,se)]),_:1}),t(d,{prop:"",label:"Uploaded",width:"200",formatter:s.formatColumnUploaded},null,8,["formatter"]),t(d,{prop:"",label:"Downloaded",width:"200",formatter:s.formatColumnDownloaded},null,8,["formatter"]),t(d,{prop:"",label:"Share ratio",width:"120",formatter:s.formatColumnShareRatio},null,8,["formatter"]),t(d,{prop:"seed_time_required",label:"Seed time required",width:"160"}),t(d,{prop:"inspect_time_left",label:"Inspect time left",width:"160"}),t(d,{prop:"status_text",label:"Status",width:"70"}),t(d,{label:"Action",width:"120"},{default:r(n=>[y("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:e=>s.handleDetail(n.row.id)},"Detail",8,de)]),_:1})]),_:1},8,["data","onSelectionChange"])),[[V,l.loading]]),t(D,{background:"",layout:"prev, pager, next",total:l.total,"page-size":l.perPage,"current-page":l.currentPage,onCurrentChange:s.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})}var _e=Y(ee,[["render",ue],["__scopeId","data-v-9699ec70"]]);export{_e as default};