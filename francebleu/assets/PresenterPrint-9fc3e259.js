import{d,i as _,a as p,u,b as h,c as m,e as f,f as n,g as t,t as o,h as a,F as g,r as v,n as x,j as b,o as l,k as y,l as N,m as k,p as P,q as w,_ as S}from"./index-42d50a1f.js";import{N as V}from"./NoteDisplay-7e9d4e11.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},F={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(R){_(p),u(`
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
`),h({title:`Notes - ${m.title}`});const r=f(()=>b.map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,i)=>(l(),n("div",{id:"page-root",style:x(a(w))},[t("div",j,[t("div",L,[t("h1",T,o(a(m).title),1),t("div",B,o(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(a(r),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",F,o(e==null?void 0:e.no)+"/"+o(a(y)),1),N(" "+o(e==null?void 0:e.title)+" ",1),H])]),k(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(r).length-1?(l(),n("hr",z)):P("v-if",!0)]))),128))])],4))}}),E=S(M,[["__file","/Users/lang/RF/rex-svelte-bleu/slides/node_modules/.pnpm/@slidev+client@0.42.4_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
