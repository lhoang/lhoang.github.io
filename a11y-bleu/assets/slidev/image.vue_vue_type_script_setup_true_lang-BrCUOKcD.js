import{d as n,H as l,o as i,b as c,f as u,h as d}from"../modules/vue-vy38_FvO.js";function a(e){return e.startsWith("/")?"/a11y-bleu/"+e.slice(1):e}function f(e,o=!1,s="cover"){const t=e&&(e[0]==="#"||e.startsWith("rgb")),r={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?o?`linear-gradient(#0005, #0008), url(${a(e)})`:`url("${a(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:s};return r.background||delete r.background,r}const m=n({__name:"image",props:{image:{type:String},backgroundSize:{type:String,default:"cover"}},setup(e){const o=e,s=l(()=>f(o.image,!1,o.backgroundSize));return(t,r)=>(i(),c("div",{class:"slidev-layout w-full h-full",style:d(s.value)},[u(t.$slots,"default")],4))}});export{m as _};