import{V as s,C as e,S as t,i as a,s as n,e as l,t as r,k as c,c as i,a as o,g as h,d as u,n as f,b as d,N as g,f as m,F as p,h as v,W as b,X as w,Y as y,Z as E,_ as I,$ as k,B as D,P as V,a0 as C,u as T,v as $,r as x,I as B,a1 as M,a2 as S,H as _}from"./vendor-88cff2d8.js";const j=(()=>{const t=e([]),a=(s,e="default")=>{t.update((t=>[...t,{id:"_"+Math.random().toString(36).substr(2,9),type:e,message:s}]))},n=s(t,((s,e)=>{if(e(s),s.length>0){const s=setTimeout((()=>{t.update((s=>(s.shift(),s)))}),3e3);return()=>{clearTimeout(s)}}})),{subscribe:l}=n;return{subscribe:l,send:a,danger:s=>a(s,"danger"),warning:s=>a(s,"warning"),info:s=>a(s,"info"),success:s=>a(s,"success")}})();function F(s,e,t){const a=s.slice();return a[2]=e[t],a}function H(s){let e,t;return{c(){e=l("i"),this.h()},l(s){e=i(s,"I",{class:!0}),o(e).forEach(u),this.h()},h(){d(e,"class",t=b(s[2].icon)+" svelte-rlsdwl")},m(s,t){m(s,e,t)},p(s,a){2&a&&t!==(t=b(s[2].icon)+" svelte-rlsdwl")&&d(e,"class",t)},d(s){s&&u(e)}}}function N(s,e){let t,a,n,b,D,V,C,T,$=e[2].message+"",x=_,B=e[2].icon&&H(e);return{key:s,first:null,c(){t=l("div"),a=l("div"),n=r($),b=c(),B&&B.c(),D=c(),this.h()},l(s){t=i(s,"DIV",{class:!0,style:!0});var e=o(t);a=i(e,"DIV",{class:!0});var l=o(a);n=h(l,$),l.forEach(u),b=f(e),B&&B.l(e),D=f(e),e.forEach(u),this.h()},h(){d(a,"class","content svelte-rlsdwl"),d(t,"class","toast svelte-rlsdwl"),g(t,"background",e[0][e[2].type]),this.first=t},m(s,e){m(s,t,e),p(t,a),p(a,n),p(t,b),B&&B.m(t,null),p(t,D),T=!0},p(s,a){e=s,(!T||2&a)&&$!==($=e[2].message+"")&&v(n,$),e[2].icon?B?B.p(e,a):(B=H(e),B.c(),B.m(t,D)):B&&(B.d(1),B=null),(!T||3&a)&&g(t,"background",e[0][e[2].type])},r(){C=t.getBoundingClientRect()},f(){w(t),x(),y(t,C)},a(){x(),x=E(t,C,M,{})},i(s){T||(I((()=>{V||(V=k(t,S,{y:-30},!0)),V.run(1)})),T=!0)},o(s){V||(V=k(t,S,{y:-30},!1)),V.run(0),T=!1},d(s){s&&u(t),B&&B.d(),s&&V&&V.end()}}}function P(s){let e,t,a=[],n=new Map,r=s[1];const c=s=>s[2].id;for(let l=0;l<r.length;l+=1){let e=F(s,r,l),t=c(e);n.set(t,a[l]=N(t,e))}return{c(){e=l("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=i(s,"DIV",{class:!0});var t=o(e);for(let e=0;e<a.length;e+=1)a[e].l(t);t.forEach(u),this.h()},h(){d(e,"class","notifications svelte-rlsdwl")},m(s,n){m(s,e,n);for(let t=0;t<a.length;t+=1)a[t].m(e,null);t=!0},p(s,[t]){if(3&t){r=s[1],D();for(let s=0;s<a.length;s+=1)a[s].r();a=V(a,t,c,1,s,r,n,e,C,N,null,F);for(let s=0;s<a.length;s+=1)a[s].a();T()}},i(s){if(!t){for(let s=0;s<r.length;s+=1)$(a[s]);t=!0}},o(s){for(let e=0;e<a.length;e+=1)x(a[e]);t=!1},d(s){s&&u(e);for(let e=0;e<a.length;e+=1)a[e].d()}}}function R(s,e,t){let a;B(s,j,(s=>t(1,a=s)));let{themes:n={danger:"#E26D69",success:"#84C991",warning:"#f0ad4e",info:"#5bc0de",default:"#aaaaaa"}}=e;return s.$$set=s=>{"themes"in s&&t(0,n=s.themes)},[n,a]}class W extends t{constructor(s){super(),a(this,s,R,P,n,{themes:0})}}export{W as T,j as n};
