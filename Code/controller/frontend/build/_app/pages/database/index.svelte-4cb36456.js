import{S as t,i as e,s,e as l,t as a,k as n,c,a as o,g as r,d as i,n as h,b as f,f as u,F as d,h as g,G as p,M as v,j as m,L as w,m as E,N as b,o as D,v as x,r as C,w as N,Q as O,a4 as B}from"../../chunks/vendor-c052606d.js";import{T as S,x as T,n as $,a as k}from"../../chunks/requests-213c1aee.js";function y(t,e,s){const l=t.slice();return l[11]=e[s],l[12]=e,l[13]=s,l}function L(t,e,s){const l=t.slice();return l[14]=e[s][0],l[15]=e[s][1],l}function I(t,e,s){const l=t.slice();return l[11]=e[s],l[18]=e,l[13]=s,l}function J(t){let e,s,n,h,v=t[11]+"",m=t[13];const w=()=>t[7](e,m),E=()=>t[7](null,m);return{c(){e=l("li"),s=a(v),this.h()},l(t){e=c(t,"LI",{class:!0});var l=o(e);s=r(l,v),l.forEach(i),this.h()},h(){f(e,"class","db-collection svelte-1ve4g5t")},m(l,a){u(l,e,a),d(e,s),w(),n||(h=p(e,"click",t[5]),n=!0)},p(e,l){t=e,4&l&&v!==(v=t[11]+"")&&g(s,v),m!==t[13]&&(E(),m=t[13],w())},d(t){t&&i(e),E(),n=!1,h()}}}function j(t){let e,s,p,m,w,E,b=t[14]+"",D=t[15],x=[];for(let l=0;l<D.length;l+=1)x[l]=J(I(t,D,l));return{c(){e=l("div"),s=a(b),p=n(),m=l("ul");for(let t=0;t<x.length;t+=1)x[t].c();w=n(),E=l("br"),this.h()},l(t){e=c(t,"DIV",{class:!0});var l=o(e);s=r(l,b),l.forEach(i),p=h(t),m=c(t,"UL",{});var a=o(m);for(let e=0;e<x.length;e+=1)x[e].l(a);w=h(a),E=c(a,"BR",{}),a.forEach(i),this.h()},h(){f(e,"class","db-name svelte-1ve4g5t")},m(t,l){u(t,e,l),d(e,s),u(t,p,l),u(t,m,l);for(let e=0;e<x.length;e+=1)x[e].m(m,null);d(m,w),d(m,E)},p(t,e){if(4&e&&b!==(b=t[14]+"")&&g(s,b),37&e){let s;for(D=t[15],s=0;s<D.length;s+=1){const l=I(t,D,s);x[s]?x[s].p(l,e):(x[s]=J(l),x[s].c(),x[s].m(m,w))}for(;s<x.length;s+=1)x[s].d(1);x.length=D.length}},d(t){t&&i(e),t&&i(p),t&&i(m),v(x,t)}}}function H(t){let e,s,f,p=JSON.stringify(t[11],void 0,2)+"",v=t[13];const m=()=>t[8](e,v),w=()=>t[8](null,v);return{c(){e=l("li"),s=a(p),f=n()},l(t){e=c(t,"LI",{});var l=o(e);s=r(l,p),f=h(l),l.forEach(i)},m(t,l){u(t,e,l),d(e,s),d(e,f),m()},p(e,l){t=e,8&l&&p!==(p=JSON.stringify(t[11],void 0,2)+"")&&g(s,p),v!==t[13]&&(w(),v=t[13],m())},d(t){t&&i(e),w()}}}function R(t){let e,s,g,B,T,$,k,I,J,R,U,V,F,q,M,G,Q,z,A,K,P,W,X,Y,Z,_,tt,et,st,lt,at;s=new S({});let nt=Object.entries(t[2]),ct=[];for(let l=0;l<nt.length;l+=1)ct[l]=j(L(t,nt,l));let ot=t[3],rt=[];for(let l=0;l<ot.length;l+=1)rt[l]=H(y(t,ot,l));return{c(){e=n(),m(s.$$.fragment),g=n(),B=l("hr"),T=n(),$=l("div"),k=l("h1"),I=l("b"),J=a("Databases and Collections"),R=n(),U=l("button"),V=a("DBs and Collections"),F=n(),q=l("br"),M=n();for(let t=0;t<ct.length;t+=1)ct[t].c();G=n(),Q=l("hr"),z=n(),A=l("div"),K=l("h1"),P=l("b"),W=a("Collection Data"),X=n(),Y=l("div"),Z=l("button"),_=a("Clear Collection Data"),tt=n(),et=l("ul");for(let t=0;t<rt.length;t+=1)rt[t].c();this.h()},l(t){w('[data-svelte="svelte-qmgm2y"]',document.head).forEach(i),e=h(t),E(s.$$.fragment,t),g=h(t),B=c(t,"HR",{class:!0}),T=h(t),$=c(t,"DIV",{class:!0});var l=o($);k=c(l,"H1",{class:!0,style:!0});var a=o(k);I=c(a,"B",{});var n=o(I);J=r(n,"Databases and Collections"),n.forEach(i),a.forEach(i),l.forEach(i),R=h(t),U=c(t,"BUTTON",{class:!0});var f=o(U);V=r(f,"DBs and Collections"),f.forEach(i),F=h(t),q=c(t,"BR",{}),M=h(t);for(let e=0;e<ct.length;e+=1)ct[e].l(t);G=h(t),Q=c(t,"HR",{class:!0}),z=h(t),A=c(t,"DIV",{class:!0});var u=o(A);K=c(u,"H1",{class:!0,style:!0});var d=o(K);P=c(d,"B",{});var p=o(P);W=r(p,"Collection Data"),p.forEach(i),d.forEach(i),u.forEach(i),X=h(t),Y=c(t,"DIV",{class:!0});var v=o(Y);Z=c(v,"BUTTON",{class:!0});var m=o(Z);_=r(m,"Clear Collection Data"),m.forEach(i),v.forEach(i),tt=h(t),et=c(t,"UL",{});var b=o(et);for(let e=0;e<rt.length;e+=1)rt[e].l(b);b.forEach(i),this.h()},h(){document.title="Database",f(B,"class","svelte-1ve4g5t"),f(k,"class","w3-text-yellow"),b(k,"text-shadow","1px 1px 0 #444"),f($,"class","w3-panel w3-blue"),f(U,"class","w3-col w3-input w3-border"),f(Q,"class","svelte-1ve4g5t"),f(K,"class","w3-text-yellow"),b(K,"text-shadow","1px 1px 0 #444"),f(A,"class","w3-panel w3-blue"),f(Z,"class","w3-col w3-input w3-border"),f(Y,"class","w3-row w3-section")},m(l,a){u(l,e,a),D(s,l,a),u(l,g,a),u(l,B,a),u(l,T,a),u(l,$,a),d($,k),d(k,I),d(I,J),u(l,R,a),u(l,U,a),d(U,V),u(l,F,a),u(l,q,a),u(l,M,a);for(let t=0;t<ct.length;t+=1)ct[t].m(l,a);u(l,G,a),u(l,Q,a),u(l,z,a),u(l,A,a),d(A,K),d(K,P),d(P,W),u(l,X,a),u(l,Y,a),d(Y,Z),d(Z,_),u(l,tt,a),u(l,et,a);for(let t=0;t<rt.length;t+=1)rt[t].m(et,null);st=!0,lt||(at=[p(U,"click",t[4]),p(Z,"click",t[6])],lt=!0)},p(t,[e]){if(37&e){let s;for(nt=Object.entries(t[2]),s=0;s<nt.length;s+=1){const l=L(t,nt,s);ct[s]?ct[s].p(l,e):(ct[s]=j(l),ct[s].c(),ct[s].m(G.parentNode,G))}for(;s<ct.length;s+=1)ct[s].d(1);ct.length=nt.length}if(10&e){let s;for(ot=t[3],s=0;s<ot.length;s+=1){const l=y(t,ot,s);rt[s]?rt[s].p(l,e):(rt[s]=H(l),rt[s].c(),rt[s].m(et,null))}for(;s<rt.length;s+=1)rt[s].d(1);rt.length=ot.length}},i(t){st||(x(s.$$.fragment,t),st=!0)},o(t){C(s.$$.fragment,t),st=!1},d(t){t&&i(e),N(s,t),t&&i(g),t&&i(B),t&&i(T),t&&i($),t&&i(R),t&&i(U),t&&i(F),t&&i(q),t&&i(M),v(ct,t),t&&i(G),t&&i(Q),t&&i(z),t&&i(A),t&&i(X),t&&i(Y),t&&i(tt),t&&i(et),v(rt,t),lt=!1,O(at)}}}function U(t,e,s){let l=[],a=[],n={},c="",o="",r=[];return[l,a,n,r,function(){T("/allapi",(function(t){let e=JSON.parse(t.response);e.data&&($.success("Found data."),s(2,n=JSON.parse(e.data)),console.log(n))}))},function(){let t=this.innerText,e=this.parentElement.previousElementSibling.innerHTML;c=t,o=e,T("/api/"+e+"/"+t,(function(t){let e=JSON.parse(t.response);e.data&&($.success("Found data."),s(3,r=e.data))}))},function(){""==c&&""==o&&$.danger("click on a collection name first."),k("/api/"+o+"/"+c,"DELETE",{},(function(t){JSON.parse(xhr.response).error||$.success("Collection deleted.")}))},function(t,e){B[t?"unshift":"push"]((()=>{l[e]=t,s(0,l)}))},function(t,e){B[t?"unshift":"push"]((()=>{a[e]=t,s(1,a)}))}]}export default class extends t{constructor(t){super(),e(this,t,U,R,s,{})}}
