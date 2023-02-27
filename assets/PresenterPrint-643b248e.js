import{d as _,i as d,a as p,u,b as h,c as m,e as f,f as n,g as t,t as o,h as a,F as g,r as v,n as x,j as y,o as r,k as b,l as k,m as N,p as P,q as V,_ as j}from"./index-aab4dcc6.js";import{N as w}from"./NoteDisplay-c5ba9a61.js";const S={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},z={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=_({__name:"PresenterPrint",setup(q){d(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const l=f(()=>y.slice(0,-1).map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,i)=>(r(),n("div",{id:"page-root",style:x(a(V))},[t("div",S,[t("div",D,[t("h1",L,o(a(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(r(!0),n(g,null,v(a(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",z,[t("div",B,[t("div",C,o(e==null?void 0:e.no)+"/"+o(a(b)),1),k(" "+o(e==null?void 0:e.title)+" ",1),H])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(l).length-1?(r(),n("hr",F)):P("v-if",!0)]))),128))])],4))}}),R=j(M,[["__file","/Users/armands/Documents/Vilks_papīri/Prezentācija/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
