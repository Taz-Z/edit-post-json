(this.webpackJsonpjsonmaker=this.webpackJsonpjsonmaker||[]).push([[0],{40:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(13),r=c.n(i),o=c(17),s=c(44),l=c(45),d=c(43),j=(c(33),c(26)),h=(c(37),c(3)),b=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(null),r=Object(o.a)(i,2),b=r[0],u=r[1],O=Object(n.useState)(!1),p=Object(o.a)(O,2),m=p[0],f=p[1],x=Object(n.useState)(!1),g=Object(o.a)(x,2),y=g[0],v=g[1];Object(n.useEffect)((function(){var e=new URLSearchParams(window.location.search);if(e.get("setup"))v(!0);else{var t=e.get("fileKey");if(t)if(e.get("id")){var c="http://54.237.13.12:4000/api/json/"+t;console.log(c),fetch(c).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(){f(!0)}))}else f(!0);else f(!0)}}),[]);return y?Object(h.jsx)(s.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:!0,onHide:function(){},children:Object(h.jsx)(s.a.Header,{children:Object(h.jsx)(s.a.Title,{id:"contained-modal-title-vcenter",children:"You are successfully setup!"})})}):m?Object(h.jsx)(s.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:!0,onHide:function(){},children:Object(h.jsx)(s.a.Header,{children:Object(h.jsx)(s.a.Title,{id:"contained-modal-title-vcenter",children:"Please click the link from the embed"})})}):b?Object(h.jsx)(s.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:!0,onHide:function(){},children:Object(h.jsx)(s.a.Header,{children:Object(h.jsx)(s.a.Title,{id:"contained-modal-title-vcenter",children:"Sent your file to be uploaded, you may close your browser :)"})})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("head",{children:Object(h.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",crossOrigin:"anonymous"})}),Object(h.jsx)(l.a,{bg:"dark",variant:"dark",sticky:"top",children:Object(h.jsx)(d.a,{children:Object(h.jsxs)(l.a.Brand,{href:"#home",children:[Object(h.jsx)("img",{alt:"",src:"https://cdn.discordapp.com/icons/733117510420791358/a_2a2e9349029a56a1da08e999e0ac31e1.webp",width:"30",height:"30",className:"d-inline-block align-top"})," ","GCG Price Sheet Modifiers"]})})}),Object(h.jsx)("body",{style:{paddingBottom:"56px"},children:c&&Object(h.jsx)(j.a,{value:c,onChange:a})}),Object(h.jsx)("footer",{children:Object(h.jsx)(l.a,{bg:"dark",variant:"dark",fixed:"bottom",children:Object(h.jsx)(d.a,{children:Object(h.jsx)(l.a.Brand,{href:"#home",onClick:function(){u(!0);var e=new URLSearchParams(window.location.search),t=e.get("fileKey"),n=e.get("id"),a="http://54.237.13.12:4000/api/json/"+"".concat(t,"/").concat(n);fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})},children:"Click here to automatically upload this file"})})})})]})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ec03f13f.chunk.js.map