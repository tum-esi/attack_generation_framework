import{S as e,i as a,s as t,e as s,t as r,k as n,c,a as l,g as o,d as i,n as h,b as f,f as d,F as u,l as v,M as p,N as g,G as E,O as m,h as w,P as b,j as y,L as T,m as D,o as S,v as k,r as I,w as N,Q as x,R as C,z as O,T as A,U as H}from"../../chunks/vendor-f082dd3c.js";/* empty css                                                       */import{T as _,x as B,n as V,a as z,m as R}from"../../chunks/requests-7d85c18d.js";import{s as U,a as P,t as j}from"../../chunks/store-f3921c5d.js";const{document:L}=A;function M(e,a,t){const s=e.slice();return s[21]=a[t],s[23]=t,s}function $(e,a,t){const s=e.slice();return s[24]=a[t][0],s[25]=a[t][1],s}function F(e,a,t){const s=e.slice();return s[28]=a[t].short_id,s[29]=a[t].name,s[30]=a[t].ports,s[23]=t,s}function G(e,a,t){const s=e.slice();return s[32]=a[t],s[23]=t,s}function J(e,a,t){const s=e.slice();return s[24]=a[t][0],s[25]=a[t][1],s}function q(e,a,t){const s=e.slice();return s[24]=a[t][0],s[25]=a[t][1],s}function Q(e){let a,t,v,g,E,m,w,b,y,T,D,S,k,I,N,x=e[0],C=[];for(let s=0;s<x.length;s+=1)C[s]=Z(G(e,x,s));return{c(){a=s("table"),t=s("thead"),v=s("tr"),g=s("th"),E=r("ID"),m=n(),w=s("th"),b=r("Name"),y=n(),T=s("th"),D=r("Activated"),S=n(),k=s("th"),I=r("Actions"),N=n();for(let e=0;e<C.length;e+=1)C[e].c();this.h()},l(e){a=c(e,"TABLE",{class:!0});var s=l(a);t=c(s,"THEAD",{});var r=l(t);v=c(r,"TR",{class:!0});var n=l(v);g=c(n,"TH",{});var f=l(g);E=o(f,"ID"),f.forEach(i),m=h(n),w=c(n,"TH",{});var d=l(w);b=o(d,"Name"),d.forEach(i),y=h(n),T=c(n,"TH",{});var u=l(T);D=o(u,"Activated"),u.forEach(i),S=h(n),k=c(n,"TH",{});var p=l(k);I=o(p,"Actions"),p.forEach(i),n.forEach(i),r.forEach(i),N=h(s);for(let a=0;a<C.length;a+=1)C[a].l(s);s.forEach(i),this.h()},h(){f(v,"class","w3-dark-grey"),f(a,"class","w3-table-all w3-centered")},m(e,s){d(e,a,s),u(a,t),u(t,v),u(v,g),u(g,E),u(v,m),u(v,w),u(w,b),u(v,y),u(v,T),u(T,D),u(v,S),u(v,k),u(k,I),u(a,N);for(let t=0;t<C.length;t+=1)C[t].m(a,null)},p(e,t){if(4357&t[0]){let s;for(x=e[0],s=0;s<x.length;s+=1){const r=G(e,x,s);C[s]?C[s].p(r,t):(C[s]=Z(r),C[s].c(),C[s].m(a,null))}for(;s<C.length;s+=1)C[s].d(1);C.length=x.length}},d(e){e&&i(a),p(C,e)}}}function K(e){let a,t,v,p,g,m,w,y,T,D,S,k,I,N,C,O,A=[],_=new Map,B=Object.entries(e[32]);const V=e=>e[24];for(let s=0;s<B.length;s+=1){let a=J(e,B,s),t=V(a);_.set(t,A[s]=X(t,a))}return{c(){a=s("tr");for(let e=0;e<A.length;e+=1)A[e].c();t=n(),v=s("td"),p=s("div"),g=s("div"),m=s("button"),w=r("Activate"),y=n(),T=s("button"),D=r("Copy"),S=n(),k=s("button"),I=r("Delete"),N=n(),this.h()},l(e){a=c(e,"TR",{index:!0});var s=l(a);for(let a=0;a<A.length;a+=1)A[a].l(s);t=h(s),v=c(s,"TD",{class:!0});var r=l(v);p=c(r,"DIV",{class:!0});var n=l(p);g=c(n,"DIV",{class:!0});var f=l(g);m=c(f,"BUTTON",{});var d=l(m);w=o(d,"Activate"),d.forEach(i),y=h(f),T=c(f,"BUTTON",{});var u=l(T);D=o(u,"Copy"),u.forEach(i),S=h(f),k=c(f,"BUTTON",{});var E=l(k);I=o(E,"Delete"),E.forEach(i),f.forEach(i),n.forEach(i),r.forEach(i),N=h(s),s.forEach(i),this.h()},h(){f(g,"class","w3-bar"),f(p,"class","w3-show-inline-block"),f(v,"class","svelte-17uzir7"),f(a,"index",e[23])},m(s,r){d(s,a,r);for(let e=0;e<A.length;e+=1)A[e].m(a,null);u(a,t),u(a,v),u(v,p),u(p,g),u(g,m),u(m,w),u(g,y),u(g,T),u(T,D),u(g,S),u(g,k),u(k,I),u(a,N),C||(O=[E(m,"click",e[8]),E(T,"click",ue),E(k,"click",e[12])],C=!0)},p(e,s){1&s[0]&&(B=Object.entries(e[32]),A=b(A,s,V,1,e,B,_,a,H,X,t,J))},d(e){e&&i(a);for(let a=0;a<A.length;a+=1)A[a].d();C=!1,x(O)}}}function W(e){let a,t,v,p,m,w,y,T,D,S,k,I,N,C,O,A,_=[],B=new Map,V=Object.entries(e[32]);const z=e=>e[24];for(let s=0;s<V.length;s+=1){let a=q(e,V,s),t=z(a);B.set(t,_[s]=Y(t,a))}return{c(){a=s("tr");for(let e=0;e<_.length;e+=1)_[e].c();t=n(),v=s("td"),p=s("div"),m=s("div"),w=s("button"),y=r("Activate"),T=n(),D=s("button"),S=r("Copy"),k=n(),I=s("button"),N=r("Delete"),C=n(),this.h()},l(e){a=c(e,"TR",{index:!0,style:!0});var s=l(a);for(let a=0;a<_.length;a+=1)_[a].l(s);t=h(s),v=c(s,"TD",{class:!0});var r=l(v);p=c(r,"DIV",{class:!0});var n=l(p);m=c(n,"DIV",{class:!0});var f=l(m);w=c(f,"BUTTON",{});var d=l(w);y=o(d,"Activate"),d.forEach(i),T=h(f),D=c(f,"BUTTON",{});var u=l(D);S=o(u,"Copy"),u.forEach(i),k=h(f),I=c(f,"BUTTON",{});var g=l(I);N=o(g,"Delete"),g.forEach(i),f.forEach(i),n.forEach(i),r.forEach(i),C=h(s),s.forEach(i),this.h()},h(){f(m,"class","w3-bar"),f(p,"class","w3-show-inline-block"),f(v,"class","svelte-17uzir7"),f(a,"index",e[23]),g(a,"background-color","#acddb4")},m(s,r){d(s,a,r);for(let e=0;e<_.length;e+=1)_[e].m(a,null);u(a,t),u(a,v),u(v,p),u(p,m),u(m,w),u(w,y),u(m,T),u(m,D),u(D,S),u(m,k),u(m,I),u(I,N),u(a,C),O||(A=[E(w,"click",e[8]),E(D,"click",ue),E(I,"click",e[12])],O=!0)},p(e,s){1&s[0]&&(V=Object.entries(e[32]),_=b(_,s,z,1,e,V,B,a,H,Y,t,q))},d(e){e&&i(a);for(let a=0;a<_.length;a+=1)_[a].d();O=!1,x(A)}}}function X(e,a){let t,n,h=a[25]+"";return{key:e,first:null,c(){t=s("td"),n=r(h),this.h()},l(e){t=c(e,"TD",{class:!0});var a=l(t);n=o(a,h),a.forEach(i),this.h()},h(){f(t,"class","svelte-17uzir7"),this.first=t},m(e,a){d(e,t,a),u(t,n)},p(e,t){a=e,1&t[0]&&h!==(h=a[25]+"")&&w(n,h)},d(e){e&&i(t)}}}function Y(e,a){let t,n,h=a[25]+"";return{key:e,first:null,c(){t=s("td"),n=r(h),this.h()},l(e){t=c(e,"TD",{class:!0});var a=l(t);n=o(a,h),a.forEach(i),this.h()},h(){f(t,"class","svelte-17uzir7"),this.first=t},m(e,a){d(e,t,a),u(t,n)},p(e,t){a=e,1&t[0]&&h!==(h=a[25]+"")&&w(n,h)},d(e){e&&i(t)}}}function Z(e){let a;function t(e,a){return e[2]==e[23]||e[0][e[23]].activated?W:K}let s=t(e),r=s(e);return{c(){r.c(),a=v()},l(e){r.l(e),a=v()},m(e,t){r.m(e,t),d(e,a,t)},p(e,n){s===(s=t(e))&&r?r.p(e,n):(r.d(1),r=s(e),r&&(r.c(),r.m(a.parentNode,a)))},d(e){r.d(e),e&&i(a)}}}function ee(e){let a,t,v,g,E,m,w,b,y,T,D,S,k,I,N,x=e[3],C=[];for(let s=0;s<x.length;s+=1)C[s]=se(F(e,x,s));return{c(){a=s("table"),t=s("thead"),v=s("tr"),g=s("th"),E=r("ShortID"),m=n(),w=s("th"),b=r("Name"),y=n(),T=s("th"),D=r("Ports"),S=n(),k=s("th"),I=r("Actions"),N=n();for(let e=0;e<C.length;e+=1)C[e].c();this.h()},l(e){a=c(e,"TABLE",{class:!0});var s=l(a);t=c(s,"THEAD",{});var r=l(t);v=c(r,"TR",{class:!0});var n=l(v);g=c(n,"TH",{});var f=l(g);E=o(f,"ShortID"),f.forEach(i),m=h(n),w=c(n,"TH",{});var d=l(w);b=o(d,"Name"),d.forEach(i),y=h(n),T=c(n,"TH",{});var u=l(T);D=o(u,"Ports"),u.forEach(i),S=h(n),k=c(n,"TH",{});var p=l(k);I=o(p,"Actions"),p.forEach(i),n.forEach(i),r.forEach(i),N=h(s);for(let a=0;a<C.length;a+=1)C[a].l(s);s.forEach(i),this.h()},h(){f(v,"class","w3-dark-grey"),f(a,"class","w3-table-all w3-centered")},m(e,s){d(e,a,s),u(a,t),u(t,v),u(v,g),u(g,E),u(v,m),u(v,w),u(w,b),u(v,y),u(v,T),u(T,D),u(v,S),u(v,k),u(k,I),u(a,N);for(let t=0;t<C.length;t+=1)C[t].m(a,null)},p(e,t){if(1560&t[0]){let s;for(x=e[3],s=0;s<x.length;s+=1){const r=F(e,x,s);C[s]?C[s].p(r,t):(C[s]=se(r),C[s].c(),C[s].m(a,null))}for(;s<C.length;s+=1)C[s].d(1);C.length=x.length}},d(e){e&&i(a),p(C,e)}}}function ae(e){let a,t,v,p,g,m,b,y,T,D,S,k,I,N,C,O,A,H,_,B,V,z=e[28]+"",R=e[29]+"",U=e[30]+"";return{c(){a=s("tr"),t=s("td"),v=r(z),p=n(),g=s("td"),m=r(R),b=n(),y=s("td"),T=r(U),D=n(),S=s("td"),k=s("div"),I=s("div"),N=s("button"),C=r("Activate"),O=n(),A=s("button"),H=r("Deactivate"),_=n(),this.h()},l(e){a=c(e,"TR",{index:!0});var s=l(a);t=c(s,"TD",{class:!0});var r=l(t);v=o(r,z),r.forEach(i),p=h(s),g=c(s,"TD",{class:!0});var n=l(g);m=o(n,R),n.forEach(i),b=h(s),y=c(s,"TD",{class:!0});var f=l(y);T=o(f,U),f.forEach(i),D=h(s),S=c(s,"TD",{class:!0});var d=l(S);k=c(d,"DIV",{class:!0});var u=l(k);I=c(u,"DIV",{class:!0});var E=l(I);N=c(E,"BUTTON",{});var w=l(N);C=o(w,"Activate"),w.forEach(i),O=h(E),A=c(E,"BUTTON",{});var x=l(A);H=o(x,"Deactivate"),x.forEach(i),E.forEach(i),u.forEach(i),d.forEach(i),_=h(s),s.forEach(i),this.h()},h(){f(t,"class","svelte-17uzir7"),f(g,"class","svelte-17uzir7"),f(y,"class","svelte-17uzir7"),f(I,"class","w3-bar"),f(k,"class","w3-show-inline-block"),f(S,"class","svelte-17uzir7"),f(a,"index",e[23])},m(s,r){d(s,a,r),u(a,t),u(t,v),u(a,p),u(a,g),u(g,m),u(a,b),u(a,y),u(y,T),u(a,D),u(a,S),u(S,k),u(k,I),u(I,N),u(N,C),u(I,O),u(I,A),u(A,H),u(a,_),B||(V=[E(N,"click",e[9]),E(A,"click",e[10])],B=!0)},p(e,a){8&a[0]&&z!==(z=e[28]+"")&&w(v,z),8&a[0]&&R!==(R=e[29]+"")&&w(m,R),8&a[0]&&U!==(U=e[30]+"")&&w(T,U)},d(e){e&&i(a),B=!1,x(V)}}}function te(e){let a,t,v,p,g,m,b,y,T,D,S,k,I,N,C,O,A,H,_,B,V,z,R=e[28]+"",U=e[29]+"",P=e[30]+"";return{c(){a=s("tr"),t=s("td"),v=r(R),p=n(),g=s("td"),m=r(U),b=n(),y=s("td"),T=r(P),D=n(),S=s("td"),k=s("div"),I=s("div"),N=s("button"),C=r("Activate"),O=n(),A=s("button"),H=r("Deactivate"),_=n(),this.h()},l(e){a=c(e,"TR",{index:!0,style:!0});var s=l(a);t=c(s,"TD",{class:!0});var r=l(t);v=o(r,R),r.forEach(i),p=h(s),g=c(s,"TD",{class:!0});var n=l(g);m=o(n,U),n.forEach(i),b=h(s),y=c(s,"TD",{class:!0});var f=l(y);T=o(f,P),f.forEach(i),D=h(s),S=c(s,"TD",{class:!0});var d=l(S);k=c(d,"DIV",{class:!0});var u=l(k);I=c(u,"DIV",{class:!0});var E=l(I);N=c(E,"BUTTON",{});var w=l(N);C=o(w,"Activate"),w.forEach(i),O=h(E),A=c(E,"BUTTON",{});var x=l(A);H=o(x,"Deactivate"),x.forEach(i),E.forEach(i),u.forEach(i),d.forEach(i),_=h(s),s.forEach(i),this.h()},h(){f(t,"class","svelte-17uzir7"),f(g,"class","svelte-17uzir7"),f(y,"class","svelte-17uzir7"),f(I,"class","w3-bar"),f(k,"class","w3-show-inline-block"),f(S,"class","svelte-17uzir7"),f(a,"index",e[23]),f(a,"style",B=e[4][e[23]])},m(s,r){d(s,a,r),u(a,t),u(t,v),u(a,p),u(a,g),u(g,m),u(a,b),u(a,y),u(y,T),u(a,D),u(a,S),u(S,k),u(k,I),u(I,N),u(N,C),u(I,O),u(I,A),u(A,H),u(a,_),V||(z=[E(N,"click",e[9]),E(A,"click",e[10])],V=!0)},p(e,t){8&t[0]&&R!==(R=e[28]+"")&&w(v,R),8&t[0]&&U!==(U=e[29]+"")&&w(m,U),8&t[0]&&P!==(P=e[30]+"")&&w(T,P),16&t[0]&&B!==(B=e[4][e[23]])&&f(a,"style",B)},d(e){e&&i(a),V=!1,x(z)}}}function se(e){let a;function t(e,a){return e[23]in e[4]?te:ae}let s=t(e),r=s(e);return{c(){r.c(),a=v()},l(e){r.l(e),a=v()},m(e,t){r.m(e,t),d(e,a,t)},p(e,n){s===(s=t(e))&&r?r.p(e,n):(r.d(1),r=s(e),r&&(r.c(),r.m(a.parentNode,a)))},d(e){r.d(e),e&&i(a)}}}function re(e){let a,t=e[1].configurations.length>0&&ne(e);return{c(){t&&t.c(),a=v()},l(e){t&&t.l(e),a=v()},m(e,s){t&&t.m(e,s),d(e,a,s)},p(e,s){e[1].configurations.length>0?t?t.p(e,s):(t=ne(e),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},d(e){t&&t.d(e),e&&i(a)}}}function ne(e){let a,t=e[1].configurations,s=[];for(let r=0;r<t.length;r+=1)s[r]=fe(M(e,t,r));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();a=v()},l(e){for(let a=0;a<s.length;a+=1)s[a].l(e);a=v()},m(e,t){for(let a=0;a<s.length;a+=1)s[a].m(e,t);d(e,a,t)},p(e,r){if(130&r[0]){let n;for(t=e[1].configurations,n=0;n<t.length;n+=1){const c=M(e,t,n);s[n]?s[n].p(c,r):(s[n]=fe(c),s[n].c(),s[n].m(a.parentNode,a))}for(;n<s.length;n+=1)s[n].d(1);s.length=t.length}},d(e){p(s,e),e&&i(a)}}}function ce(e){let a,t,v,p,g,E,m,b=e[24]+"";return{c(){a=s("label"),t=s("b"),v=r(b),p=n(),g=s("input"),this.h()},l(e){a=c(e,"LABEL",{class:!0});var s=l(a);t=c(s,"B",{});var r=l(t);v=o(r,b),r.forEach(i),s.forEach(i),p=h(e),g=c(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(a,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","list"),f(g,"key",E=e[24]),g.value=m=e[25].join()},m(e,s){d(e,a,s),u(a,t),u(t,v),d(e,p,s),d(e,g,s)},p(e,a){2&a[0]&&b!==(b=e[24]+"")&&w(v,b),2&a[0]&&E!==(E=e[24])&&f(g,"key",E),2&a[0]&&m!==(m=e[25].join())&&(g.value=m)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function le(e){let a,t,v,p,g,E,m,b=e[24]+"";return{c(){a=s("input"),p=n(),g=s("label"),E=s("b"),m=r(b),this.h()},l(e){a=c(e,"INPUT",{class:!0,type:!0,key:!0,checked:!0}),p=h(e),g=c(e,"LABEL",{class:!0});var t=l(g);E=c(t,"B",{});var s=l(E);m=o(s,b),s.forEach(i),t.forEach(i),this.h()},h(){f(a,"class","w3-check"),f(a,"type","checkbox"),f(a,"key",t=e[24]),a.checked=v=e[25],f(g,"class","")},m(e,t){d(e,a,t),d(e,p,t),d(e,g,t),u(g,E),u(E,m)},p(e,s){2&s[0]&&t!==(t=e[24])&&f(a,"key",t),2&s[0]&&v!==(v=e[25])&&(a.checked=v),2&s[0]&&b!==(b=e[24]+"")&&w(m,b)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function oe(e){let a,t,v,p,g,E,m,b=e[24]+"";return{c(){a=s("label"),t=s("b"),v=r(b),p=n(),g=s("input"),this.h()},l(e){a=c(e,"LABEL",{class:!0});var s=l(a);t=c(s,"B",{});var r=l(t);v=o(r,b),r.forEach(i),s.forEach(i),p=h(e),g=c(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(a,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","string"),f(g,"key",E=e[24]),g.value=m=e[25]},m(e,s){d(e,a,s),u(a,t),u(t,v),d(e,p,s),d(e,g,s)},p(e,a){2&a[0]&&b!==(b=e[24]+"")&&w(v,b),2&a[0]&&E!==(E=e[24])&&f(g,"key",E),2&a[0]&&m!==(m=e[25])&&(g.value=m)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function ie(e){let a,t,v,p,g,E,m,b=e[24]+"";return{c(){a=s("label"),t=s("b"),v=r(b),p=n(),g=s("input"),this.h()},l(e){a=c(e,"LABEL",{class:!0});var s=l(a);t=c(s,"B",{});var r=l(t);v=o(r,b),r.forEach(i),s.forEach(i),p=h(e),g=c(e,"INPUT",{class:!0,type:!0,convert:!0,key:!0,value:!0}),this.h()},h(){f(a,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","string"),f(g,"convert","required"),f(g,"key",E=e[24]),g.value=m=e[25]},m(e,s){d(e,a,s),u(a,t),u(t,v),d(e,p,s),d(e,g,s)},p(e,a){2&a[0]&&b!==(b=e[24]+"")&&w(v,b),2&a[0]&&E!==(E=e[24])&&f(g,"key",E),2&a[0]&&m!==(m=e[25])&&(g.value=m)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function he(e,a){let t;function r(e,a){return"number"==typeof e[25]?ie:"string"==typeof e[25]?oe:"boolean"==typeof e[25]?le:"object"==typeof e[25]?ce:void 0}let n=r(a),o=n&&n(a);return{key:e,first:null,c(){t=s("p"),o&&o.c(),this.h()},l(e){t=c(e,"P",{});var a=l(t);o&&o.l(a),a.forEach(i),this.h()},h(){this.first=t},m(e,a){d(e,t,a),o&&o.m(t,null)},p(e,s){n===(n=r(a=e))&&o?o.p(a,s):(o&&o.d(1),o=n&&n(a),o&&(o.c(),o.m(t,null)))},d(e){e&&i(t),o&&o.d()}}}function fe(e){let a,t,v,p,y,T,D,S,k,I,N,x,C,O,A,_,B,V,z,R,U,P,j=e[21].container_info.name+"",L=[],M=new Map,F=Object.entries(e[21].configs);const G=e=>e[24];for(let s=0;s<F.length;s+=1){let a=$(e,F,s),t=G(a);M.set(t,L[s]=he(t,a))}return{c(){a=s("div"),t=s("div"),v=s("h2"),p=r(j),y=n(),T=s("p"),D=r("Description here from application configs"),S=n(),k=s("div"),I=s("form"),N=s("h5"),x=r("Update Form"),C=n();for(let e=0;e<L.length;e+=1)L[e].c();O=n(),A=s("p"),_=s("input"),z=n(),R=s("hr"),this.h()},l(e){a=c(e,"DIV",{class:!0});var s=l(a);t=c(s,"DIV",{class:!0});var r=l(t);v=c(r,"H2",{class:!0,style:!0});var n=l(v);p=o(n,j),n.forEach(i),y=h(r),T=c(r,"P",{});var f=l(T);D=o(f,"Description here from application configs"),f.forEach(i),r.forEach(i),S=h(s),k=c(s,"DIV",{class:!0});var d=l(k);I=c(d,"FORM",{name:!0,port:!0,index:!0,class:!0});var u=l(I);N=c(u,"H5",{class:!0,style:!0});var g=l(N);x=o(g,"Update Form"),g.forEach(i),C=h(u);for(let a=0;a<L.length;a+=1)L[a].l(u);O=h(u),A=c(u,"P",{});var E=l(A);_=c(E,"INPUT",{class:!0,type:!0,value:!0}),E.forEach(i),u.forEach(i),d.forEach(i),s.forEach(i),z=h(e),R=c(e,"HR",{class:!0}),this.h()},h(){f(v,"class","w3-text-orange"),g(v,"text-shadow","1px 1px 0 #444"),f(t,"class","w3-third w3-container w3-blue"),f(N,"class","w3-text-orange"),g(N,"text-shadow","1px 1px 0 #444"),f(_,"class","w3-blue"),f(_,"type","submit"),_.value="Update",f(I,"name",B=e[21].container_info.name),f(I,"port",V=e[21].container_info.ports),f(I,"index",e[23]),f(I,"class","w3-container"),f(k,"class","w3-twothird w3-container w3-gray"),f(a,"class","w3-row w3-border"),f(R,"class","svelte-17uzir7")},m(s,r){d(s,a,r),u(a,t),u(t,v),u(v,p),u(t,y),u(t,T),u(T,D),u(a,S),u(a,k),u(k,I),u(I,N),u(N,x),u(I,C);for(let e=0;e<L.length;e+=1)L[e].m(I,null);u(I,O),u(I,A),u(A,_),d(s,z,r),d(s,R,r),U||(P=E(I,"submit",m(e[7])),U=!0)},p(e,a){2&a[0]&&j!==(j=e[21].container_info.name+"")&&w(p,j),2&a[0]&&(F=Object.entries(e[21].configs),L=b(L,a,G,1,e,F,M,I,H,he,O,$)),2&a[0]&&B!==(B=e[21].container_info.name)&&f(I,"name",B),2&a[0]&&V!==(V=e[21].container_info.ports)&&f(I,"port",V)},d(e){e&&i(a);for(let a=0;a<L.length;a+=1)L[a].d();e&&i(z),e&&i(R),U=!1,P()}}}function de(e){let a,t,v,p,m,w,b,C,O,A,H,B,V,z,R,U,P,j,M,$,F,G,J,q,K,W,X,Y,Z,ae,te,se,ne,ce,le,oe,ie,he,fe,de,ue,pe,ge,Ee,me,we,be,ye,Te,De,Se,ke,Ie,Ne,xe,Ce,Oe,Ae,He,_e,Be,Ve,ze,Re,Ue,Pe,je,Le,Me,$e,Fe,Ge,Je,qe,Qe,Ke,We,Xe,Ye,Ze,ea,aa,ta,sa,ra,na,ca,la,oa,ia,ha,fa,da,ua,va,pa,ga,Ea,ma,wa,ba,ya,Ta,Da,Sa,ka,Ia,Na,xa,Ca,Oa,Aa,Ha,_a,Ba,Va,za,Ra,Ua,Pa,ja,La,Ma,$a,Fa,Ga,Ja,qa,Qa,Ka,Wa,Xa,Ya,Za,et,at,tt,st,rt,nt,ct,lt,ot,it,ht,ft,dt;t=new _({});let ut=e[0].length>0&&Q(e),vt=e[3].length>0&&ee(e),pt="configurations"in e[1]&&re(e);return{c(){a=n(),y(t.$$.fragment),v=n(),p=s("hr"),m=n(),w=s("div"),b=s("h1"),C=s("b"),O=r("Scenario Management"),A=n(),H=s("hr"),B=n(),V=s("section"),z=s("h3"),R=r("Select scenario"),U=n(),P=s("section"),ut&&ut.c(),j=n(),M=s("div"),$=s("div"),F=s("button"),G=r("Create Scenario"),J=n(),q=s("div"),K=s("input"),W=n(),X=s("div"),Y=s("div"),Z=s("button"),ae=r("Rename Scenario"),te=n(),se=s("div"),ne=s("input"),ce=n(),le=s("div"),oe=s("input"),ie=n(),he=s("hr"),fe=n(),de=s("div"),ue=s("h1"),pe=s("b"),ge=r("Configuration"),Ee=n(),me=s("hr"),we=n(),be=s("section"),ye=s("h3"),Te=r("Select containers"),De=n(),Se=s("section"),vt&&vt.c(),ke=n(),Ie=s("hr"),Ne=n(),xe=s("section"),Ce=s("h3"),Oe=r("Configure containers"),Ae=n(),He=s("section"),_e=s("button"),Be=r("Reset Configurations"),Ve=n(),pt&&pt.c(),ze=n(),Re=s("button"),Ue=r("Save Configurations"),Pe=n(),je=s("hr"),Le=n(),Me=s("div"),$e=s("h1"),Fe=s("b"),Ge=r("Scenario Type"),Je=n(),qe=s("div"),Qe=s("div"),Ke=s("a"),We=s("div"),Xe=r("Communication"),Ye=n(),Ze=s("a"),ea=s("div"),aa=r("Static"),ta=n(),sa=s("a"),ra=s("div"),na=r("Driving Simulation"),ca=n(),la=s("div"),oa=s("p"),ia=r("Communication is the capital city of England."),ha=n(),fa=s("div"),da=s("hr"),ua=n(),va=s("div"),pa=s("h1"),ga=s("b"),Ea=r("Configuration"),ma=n(),wa=s("hr"),ba=n(),ya=s("section"),Ta=s("h3"),Da=r("Generate Frames from Video"),Sa=n(),ka=s("hr"),Ia=n(),Na=s("section"),xa=s("h3"),Ca=r("Generate Attack"),Oa=n(),Aa=s("hr"),Ha=n(),_a=s("section"),Ba=s("h3"),Va=r("Validate Dataset"),za=n(),Ra=s("div"),Ua=s("hr"),Pa=n(),ja=s("div"),La=s("h1"),Ma=s("b"),$a=r("Configuration"),Fa=n(),Ga=s("hr"),Ja=n(),qa=s("section"),Qa=s("h3"),Ka=r("Select Driving Path"),Wa=n(),Xa=s("hr"),Ya=n(),Za=s("section"),et=s("h3"),at=r("Select Sensors"),tt=n(),st=s("hr"),rt=n(),nt=s("section"),ct=s("h3"),lt=r("Attack Configuration"),ot=n(),it=s("hr"),this.h()},l(e){T('[data-svelte="svelte-101i1i0"]',L.head).forEach(i),a=h(e),D(t.$$.fragment,e),v=h(e),p=c(e,"HR",{class:!0}),m=h(e),w=c(e,"DIV",{class:!0});var s=l(w);b=c(s,"H1",{class:!0,style:!0});var r=l(b);C=c(r,"B",{});var n=l(C);O=o(n,"Scenario Management"),n.forEach(i),r.forEach(i),s.forEach(i),A=h(e),H=c(e,"HR",{class:!0}),B=h(e),V=c(e,"SECTION",{class:!0});var f=l(V);z=c(f,"H3",{});var d=l(z);R=o(d,"Select scenario"),d.forEach(i),f.forEach(i),U=h(e),P=c(e,"SECTION",{class:!0});var u=l(P);ut&&ut.l(u),j=h(u),M=c(u,"DIV",{class:!0});var g=l(M);$=c(g,"DIV",{class:!0});var E=l($);F=c(E,"BUTTON",{ref:!0,class:!0});var y=l(F);G=o(y,"Create Scenario"),y.forEach(i),E.forEach(i),J=h(g),q=c(g,"DIV",{class:!0});var S=l(q);K=c(S,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),S.forEach(i),g.forEach(i),W=h(u),X=c(u,"DIV",{class:!0});var k=l(X);Y=c(k,"DIV",{class:!0});var I=l(Y);Z=c(I,"BUTTON",{ref:!0,class:!0});var N=l(Z);ae=o(N,"Rename Scenario"),N.forEach(i),I.forEach(i),te=h(k),se=c(k,"DIV",{class:!0});var x=l(se);ne=c(x,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),x.forEach(i),ce=h(k),le=c(k,"DIV",{class:!0});var _=l(le);oe=c(_,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),_.forEach(i),k.forEach(i),u.forEach(i),ie=h(e),he=c(e,"HR",{class:!0}),fe=h(e),de=c(e,"DIV",{class:!0});var Q=l(de);ue=c(Q,"H1",{class:!0,style:!0});var ee=l(ue);pe=c(ee,"B",{});var re=l(pe);ge=o(re,"Configuration"),re.forEach(i),ee.forEach(i),Q.forEach(i),Ee=h(e),me=c(e,"HR",{class:!0}),we=h(e),be=c(e,"SECTION",{class:!0});var ve=l(be);ye=c(ve,"H3",{});var ht=l(ye);Te=o(ht,"Select containers"),ht.forEach(i),ve.forEach(i),De=h(e),Se=c(e,"SECTION",{class:!0});var ft=l(Se);vt&&vt.l(ft),ft.forEach(i),ke=h(e),Ie=c(e,"HR",{class:!0}),Ne=h(e),xe=c(e,"SECTION",{class:!0});var dt=l(xe);Ce=c(dt,"H3",{});var gt=l(Ce);Oe=o(gt,"Configure containers"),gt.forEach(i),dt.forEach(i),Ae=h(e),He=c(e,"SECTION",{class:!0});var Et=l(He);_e=c(Et,"BUTTON",{class:!0});var mt=l(_e);Be=o(mt,"Reset Configurations"),mt.forEach(i),Ve=h(Et),pt&&pt.l(Et),ze=h(Et),Re=c(Et,"BUTTON",{class:!0});var wt=l(Re);Ue=o(wt,"Save Configurations"),wt.forEach(i),Et.forEach(i),Pe=h(e),je=c(e,"HR",{class:!0}),Le=h(e),Me=c(e,"DIV",{class:!0});var bt=l(Me);$e=c(bt,"H1",{class:!0,style:!0});var yt=l($e);Fe=c(yt,"B",{});var Tt=l(Fe);Ge=o(Tt,"Scenario Type"),Tt.forEach(i),yt.forEach(i),bt.forEach(i),Je=h(e),qe=c(e,"DIV",{class:!0});var Dt=l(qe);Qe=c(Dt,"DIV",{class:!0});var St=l(Qe);Ke=c(St,"A",{href:!0});var kt=l(Ke);We=c(kt,"DIV",{class:!0});var It=l(We);Xe=o(It,"Communication"),It.forEach(i),kt.forEach(i),Ye=h(St),Ze=c(St,"A",{href:!0});var Nt=l(Ze);ea=c(Nt,"DIV",{class:!0});var xt=l(ea);aa=o(xt,"Static"),xt.forEach(i),Nt.forEach(i),ta=h(St),sa=c(St,"A",{href:!0});var Ct=l(sa);ra=c(Ct,"DIV",{class:!0});var Ot=l(ra);na=o(Ot,"Driving Simulation"),Ot.forEach(i),Ct.forEach(i),St.forEach(i),ca=h(Dt),la=c(Dt,"DIV",{id:!0,class:!0,style:!0});var At=l(la);oa=c(At,"P",{});var Ht=l(oa);ia=o(Ht,"Communication is the capital city of England."),Ht.forEach(i),At.forEach(i),ha=h(Dt),fa=c(Dt,"DIV",{id:!0,class:!0,style:!0});var _t=l(fa);da=c(_t,"HR",{class:!0}),ua=h(_t),va=c(_t,"DIV",{class:!0});var Bt=l(va);pa=c(Bt,"H1",{class:!0,style:!0});var Vt=l(pa);ga=c(Vt,"B",{});var zt=l(ga);Ea=o(zt,"Configuration"),zt.forEach(i),Vt.forEach(i),Bt.forEach(i),ma=h(_t),wa=c(_t,"HR",{class:!0}),ba=h(_t),ya=c(_t,"SECTION",{class:!0});var Rt=l(ya);Ta=c(Rt,"H3",{});var Ut=l(Ta);Da=o(Ut,"Generate Frames from Video"),Ut.forEach(i),Rt.forEach(i),Sa=h(_t),ka=c(_t,"HR",{class:!0}),Ia=h(_t),Na=c(_t,"SECTION",{class:!0});var Pt=l(Na);xa=c(Pt,"H3",{});var jt=l(xa);Ca=o(jt,"Generate Attack"),jt.forEach(i),Pt.forEach(i),Oa=h(_t),Aa=c(_t,"HR",{class:!0}),Ha=h(_t),_a=c(_t,"SECTION",{class:!0});var Lt=l(_a);Ba=c(Lt,"H3",{});var Mt=l(Ba);Va=o(Mt,"Validate Dataset"),Mt.forEach(i),Lt.forEach(i),_t.forEach(i),za=h(Dt),Ra=c(Dt,"DIV",{id:!0,class:!0,style:!0});var $t=l(Ra);Ua=c($t,"HR",{class:!0}),Pa=h($t),ja=c($t,"DIV",{class:!0});var Ft=l(ja);La=c(Ft,"H1",{class:!0,style:!0});var Gt=l(La);Ma=c(Gt,"B",{});var Jt=l(Ma);$a=o(Jt,"Configuration"),Jt.forEach(i),Gt.forEach(i),Ft.forEach(i),Fa=h($t),Ga=c($t,"HR",{class:!0}),Ja=h($t),qa=c($t,"SECTION",{class:!0});var qt=l(qa);Qa=c(qt,"H3",{});var Qt=l(Qa);Ka=o(Qt,"Select Driving Path"),Qt.forEach(i),qt.forEach(i),Wa=h($t),Xa=c($t,"HR",{class:!0}),Ya=h($t),Za=c($t,"SECTION",{class:!0});var Kt=l(Za);et=c(Kt,"H3",{});var Wt=l(et);at=o(Wt,"Select Sensors"),Wt.forEach(i),Kt.forEach(i),tt=h($t),st=c($t,"HR",{class:!0}),rt=h($t),nt=c($t,"SECTION",{class:!0});var Xt=l(nt);ct=c(Xt,"H3",{});var Yt=l(ct);lt=o(Yt,"Attack Configuration"),Yt.forEach(i),Xt.forEach(i),$t.forEach(i),Dt.forEach(i),ot=h(e),it=c(e,"HR",{class:!0}),this.h()},h(){L.title="Configuration and Scheduling",f(p,"class","svelte-17uzir7"),f(b,"class","w3-text-yellow"),g(b,"text-shadow","1px 1px 0 #444"),f(w,"class","w3-panel w3-blue"),f(H,"class","svelte-17uzir7"),f(V,"class","page-headline"),f(F,"ref","createNewScenario"),f(F,"class","w3-col w3-input w3-border"),f($,"class","w3-third"),f(K,"id","createNewScenario"),f(K,"class","w3-input w3-border"),f(K,"name","name"),f(K,"type","text"),f(K,"placeholder","Scenario Name"),f(q,"class","w3-rest"),f(M,"class","w3-row w3-section"),f(Z,"ref","renameScenario"),f(Z,"class","w3-col w3-input w3-border"),f(Y,"class","w3-third"),f(ne,"id","renameScenarioID"),f(ne,"class","w3-input w3-border"),f(ne,"name","id"),f(ne,"type","text"),f(ne,"placeholder","Scenario Identifier"),f(se,"class","w3-third"),f(oe,"id","renameScenario"),f(oe,"class","w3-input w3-border"),f(oe,"name","name"),f(oe,"type","text"),f(oe,"placeholder","Scenario Name"),f(le,"class","w3-rest"),f(X,"class","w3-row w3-section"),f(P,"class","w3-container"),f(he,"class","svelte-17uzir7"),f(ue,"class","w3-text-yellow"),g(ue,"text-shadow","1px 1px 0 #444"),f(de,"class","w3-panel w3-blue"),f(me,"class","svelte-17uzir7"),f(be,"class","page-headline"),f(Se,"class","w3-container"),f(Ie,"class","svelte-17uzir7"),f(xe,"class","page-headline"),f(_e,"class","w3-col w3-input w3-border w3-margin-bottom"),f(Re,"class","w3-col w3-input w3-border w3-margin-top"),f(He,"class","w3-container"),f(je,"class","svelte-17uzir7"),f($e,"class","w3-text-yellow"),g($e,"text-shadow","1px 1px 0 #444"),f(Me,"class","w3-panel w3-blue"),f(We,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(Ke,"href","javascript:void(0)"),f(ea,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(Ze,"href","javascript:void(0)"),f(ra,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(sa,"href","javascript:void(0)"),f(Qe,"class","w3-row"),f(la,"id","Communication"),f(la,"class","w3-container city"),g(la,"display","none"),f(da,"class","svelte-17uzir7"),f(pa,"class","w3-text-yellow"),g(pa,"text-shadow","1px 1px 0 #444"),f(va,"class","w3-panel w3-blue"),f(wa,"class","svelte-17uzir7"),f(ya,"class","page-headline"),f(ka,"class","svelte-17uzir7"),f(Na,"class","page-headline"),f(Aa,"class","svelte-17uzir7"),f(_a,"class","page-headline"),f(fa,"id","Static"),f(fa,"class","w3-container city"),g(fa,"display","none"),f(Ua,"class","svelte-17uzir7"),f(La,"class","w3-text-yellow"),g(La,"text-shadow","1px 1px 0 #444"),f(ja,"class","w3-panel w3-blue"),f(Ga,"class","svelte-17uzir7"),f(qa,"class","page-headline"),f(Xa,"class","svelte-17uzir7"),f(Za,"class","page-headline"),f(st,"class","svelte-17uzir7"),f(nt,"class","page-headline"),f(Ra,"id","Driving Simulation"),f(Ra,"class","w3-container city"),g(Ra,"display","none"),f(qe,"class","w3-container"),f(it,"class","svelte-17uzir7")},m(s,r){d(s,a,r),S(t,s,r),d(s,v,r),d(s,p,r),d(s,m,r),d(s,w,r),u(w,b),u(b,C),u(C,O),d(s,A,r),d(s,H,r),d(s,B,r),d(s,V,r),u(V,z),u(z,R),d(s,U,r),d(s,P,r),ut&&ut.m(P,null),u(P,j),u(P,M),u(M,$),u($,F),u(F,G),u(M,J),u(M,q),u(q,K),u(P,W),u(P,X),u(X,Y),u(Y,Z),u(Z,ae),u(X,te),u(X,se),u(se,ne),u(X,ce),u(X,le),u(le,oe),d(s,ie,r),d(s,he,r),d(s,fe,r),d(s,de,r),u(de,ue),u(ue,pe),u(pe,ge),d(s,Ee,r),d(s,me,r),d(s,we,r),d(s,be,r),u(be,ye),u(ye,Te),d(s,De,r),d(s,Se,r),vt&&vt.m(Se,null),d(s,ke,r),d(s,Ie,r),d(s,Ne,r),d(s,xe,r),u(xe,Ce),u(Ce,Oe),d(s,Ae,r),d(s,He,r),u(He,_e),u(_e,Be),u(He,Ve),pt&&pt.m(He,null),u(He,ze),u(He,Re),u(Re,Ue),d(s,Pe,r),d(s,je,r),d(s,Le,r),d(s,Me,r),u(Me,$e),u($e,Fe),u(Fe,Ge),d(s,Je,r),d(s,qe,r),u(qe,Qe),u(Qe,Ke),u(Ke,We),u(We,Xe),u(Qe,Ye),u(Qe,Ze),u(Ze,ea),u(ea,aa),u(Qe,ta),u(Qe,sa),u(sa,ra),u(ra,na),u(qe,ca),u(qe,la),u(la,oa),u(oa,ia),u(qe,ha),u(qe,fa),u(fa,da),u(fa,ua),u(fa,va),u(va,pa),u(pa,ga),u(ga,Ea),u(fa,ma),u(fa,wa),u(fa,ba),u(fa,ya),u(ya,Ta),u(Ta,Da),u(fa,Sa),u(fa,ka),u(fa,Ia),u(fa,Na),u(Na,xa),u(xa,Ca),u(fa,Oa),u(fa,Aa),u(fa,Ha),u(fa,_a),u(_a,Ba),u(Ba,Va),u(qe,za),u(qe,Ra),u(Ra,Ua),u(Ra,Pa),u(Ra,ja),u(ja,La),u(La,Ma),u(Ma,$a),u(Ra,Fa),u(Ra,Ga),u(Ra,Ja),u(Ra,qa),u(qa,Qa),u(Qa,Ka),u(Ra,Wa),u(Ra,Xa),u(Ra,Ya),u(Ra,Za),u(Za,et),u(et,at),u(Ra,tt),u(Ra,st),u(Ra,rt),u(Ra,nt),u(nt,ct),u(ct,lt),d(s,ot,r),d(s,it,r),ht=!0,ft||(dt=[E(F,"click",e[13]),E(Z,"click",e[11]),E(_e,"click",e[5]),E(Re,"click",e[6]),E(Ke,"click",ve),E(Ze,"click",ve),E(sa,"click",ve)],ft=!0)},p(e,a){e[0].length>0?ut?ut.p(e,a):(ut=Q(e),ut.c(),ut.m(P,j)):ut&&(ut.d(1),ut=null),e[3].length>0?vt?vt.p(e,a):(vt=ee(e),vt.c(),vt.m(Se,null)):vt&&(vt.d(1),vt=null),"configurations"in e[1]?pt?pt.p(e,a):(pt=re(e),pt.c(),pt.m(He,ze)):pt&&(pt.d(1),pt=null)},i(e){ht||(k(t.$$.fragment,e),ht=!0)},o(e){I(t.$$.fragment,e),ht=!1},d(e){e&&i(a),N(t,e),e&&i(v),e&&i(p),e&&i(m),e&&i(w),e&&i(A),e&&i(H),e&&i(B),e&&i(V),e&&i(U),e&&i(P),ut&&ut.d(),e&&i(ie),e&&i(he),e&&i(fe),e&&i(de),e&&i(Ee),e&&i(me),e&&i(we),e&&i(be),e&&i(De),e&&i(Se),vt&&vt.d(),e&&i(ke),e&&i(Ie),e&&i(Ne),e&&i(xe),e&&i(Ae),e&&i(He),pt&&pt.d(),e&&i(Pe),e&&i(je),e&&i(Le),e&&i(Me),e&&i(Je),e&&i(qe),e&&i(ot),e&&i(it),ft=!1,x(dt)}}}function ue(){console.log(this,"copyScenario")}function ve(){let e=this.firstChild.innerText;var a,t,s;for(console.log(this,"this"),t=document.getElementsByClassName("city"),a=0;a<t.length;a++)t[a].style.display="none";for(s=document.getElementsByClassName("tablink"),a=0;a<t.length;a++)s[a].className=s[a].className.replace(" w3-border-red","");document.getElementById(e).style.display="block",this.firstChild.className+=" w3-border-red"}function pe(e,a,t){let s=[],r={},n=!1;const c=U.subscribe((e=>{t(0,s=e)})),l=P.subscribe((e=>{t(1,r=e)})),o=j.subscribe((e=>{n=e}));let i;C((()=>{c(),l(),o()}));let h=[{short_id:"123",name:"DoS Attack",ports:"8010"},{short_id:"1243",name:"Replay Attack",ports:"8020"},{short_id:"122",name:"MitM",ports:"8030"}],f={};function d(){let e=!1;for(let a=0;a<s.length;a++)s[a].activated&&(e=!0);return e}return O((async()=>{!async function(e){n?B("/localservices",(function(a){let s=JSON.parse(a.response);s.data&&t(3,h=s.data),e(),console.log("localservices loaded:",h)})):B("/containers",(function(a){let s=JSON.parse(a.response);s.data&&t(3,h=s.data),e(),console.log("containers loaded:",h)}))}((function(){if(s.length<1)B("/api/db1/scenarios",(function(e){let a=JSON.parse(e.response);if(a.data){for(let e=0;e<a.data.length;e++)a.data[e].activated=!1;U.set(a.data)}}));else if(Object.keys(r).length>0)for(var e=0;e<r.configurations.length;e++)for(var a=0;a<h.length;a++){let s=a.toString();h[a].short_id==r.configurations[e].container_info.short_id&&t(4,f[s]="background-color: #acddb4;",f)}}))})),[s,r,i,h,f,async function(){if(!d())return void V.danger("please create and activate a scenario first.");let e=[];for(let a=0;a<r.configurations.length;a++){console.log(r.configurations[a],"data");let t=r.configurations[a].container_info.name,s=r.configurations[a].container_info.ports.split(",")[0].split("/")[0];console.log(t,s,"name and port");let n=R("GET","/containers/"+t+"/"+s+"/configs");e.push(n)}Promise.allSettled(e).then((function(e){for(let a=0;a<e.length;a++)"fulfilled"==e[a].status&&t(1,r.configurations[a].configs=e[a].value.data.data,r);P.set(r)})),console.log("config_containers:",r)},async function(){if(console.log("saving scenario configurations"),!d())return void V.danger("please create and activate a scenario first.");let e="/api/db1/scenario_configurations",a="POST";"_id"in r&&(a="PUT",e="/api/db1/scenario_configurations/"+r._id),console.log("writing data:",r," to url:",e," and method:",a),z(e,a,r,(function(e){console.log(e,"response from saveContainersConfig"),t(1,r._id=e.data,r),P.set(r),V.success("Configuration saved successfull.")}))},async function(){if(!d())return void V.danger("please create and activate a scenario first.");let e={},a=parseInt(this.getAttribute("index")),s=this.getAttribute("name"),c=this.getAttribute("port").split(",")[0].split("/")[0];console.log(a,s,c,"printing index");let l=this.querySelectorAll("input");for(let t=0;t<l.length;t++){let a=l[t],s=a.getAttribute("type"),r=a.getAttribute("key"),n=a.value;null==n&&(n=""),"submit"!=s&&("checkbox"==s?e[r]=a.checked:"list"==s?e[r]=n.split(","):a.hasAttribute("convert")?e[r]=Number(n):e[r]=n)}if(n){let n="/localservices/"+s+"/"+c+"/configs";console.log(e,"nanan",n),z(n,"PUT",e,(function(s){t(1,r.configurations[a].configs=e,r),P.set(r),V.success("Configuration update successfull.")}))}else{z("/containers/"+s+"/"+c+"/configs","POST",e,(function(s){t(1,r.configurations[a].configs=e,r),P.set(r),V.success("Configuration update successfull.")}))}},function(){let e,a=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");for(let r=0;r<s.length;r++)r==a?(t(2,i=r),t(0,s[r].activated=!0,s),e=s[r]):t(0,s[r].activated=!1,s);U.set(s);for(let s of Object.keys(f))t(4,f[s]="",f);t(1,r={}),t(1,r.ref=e._id,r),t(1,r.name=e.name,r),t(1,r.configurations=[],r),P.set(r);let n="/api/db1/scenario_configurations/ref-"+e._id;B(n,(function(e){let a=JSON.parse(e.response);if(a.data&&a.data.length>0){t(1,r=a.data[0]);for(let e=0;e<h.length;e++){let a=e.toString();t(4,f[a]="",f);let s=h[e].short_id;for(let e=0;e<r.configurations.length;e++){s==r.configurations[e].container_info.short_id&&(t(4,f[a]="background-color: #acddb4;",f),e=r.configurations.length)}}P.set(r)}}))},function(){if(!d())return void V.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");t(4,f[e]="background-color: #acddb4;",f);let a=h[parseInt(e)],s={},c=a.name,l=a.ports.split(",")[0].split("/")[0];if(n){B("/localservices/"+c+"/"+l+"/configs",(function(e){let t=JSON.parse(e.response);t.data&&"data"in t.data&&(s=t.data.data),r.configurations.push({container_info:a,configs:s}),P.set(r)}))}else{B("/containers/"+c+"/"+l+"/configs",(function(e){let t=JSON.parse(e.response);t.data&&"data"in t.data&&(s=t.data.data),r.configurations.push({container_info:a,configs:s}),P.set(r)}))}},function(){if(!d())return void V.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");t(4,f[e]="",f);let a=h[parseInt(e)].short_id,s=-1;for(let t=0;t<r.configurations.length;t++)r.configurations[t].container_info.short_id==a&&(s=t,t=r.configurations.length);s>-1&&r.configurations.splice(s,1),P.set(r)},function(){let e=this.getAttribute("ref"),a=document.getElementById(e+"ID"),r=document.getElementById(e);if(""!=a.value&&""!=r.value){let e=!1,n=-1;for(let t=0;t<s.length;t++)s[t]._id==a.value&&(e=!0,n=t,t=s.length);if(!e)return void V.danger("scenario identifier does not exist.");let c="/api/db1/scenarios/"+a.value,l={name:r.value};z(c,"PUT",l,(function(e){t(0,s[n].name=r.value,s),U.set(s),V.success("Scenario renamed successfully.")}))}else V.danger("please provide scenario identifier and new name.")},function(){let e=!1,a=parseInt(this.parentElement.parentElement.parentElement.parentElement.getAttribute("index"));s[a].activated&&(e=!0);let n=s[a]._id;if(z("/api/db1/scenarios/"+n,"DELETE",{},(function(e){s.splice(a,1),U.set(s),V.success("Scenario deleted successfully.")})),z("/api/db1/scenario_configurations/ref-"+n,"DELETE",{},(function(e){V.success("Scenario configuration deleted successfully.")})),e){t(1,r={}),P.set(r);for(let e of Object.keys(f))t(4,f[e]="",f)}},function(){let e=this.getAttribute("ref");if(""!=e){let a=document.getElementById(e);if(""!=a.value){let e={name:a.value},t="/api/db1/scenarios";console.log("createNewScenario request with body:",e," and url:",t),z(t,"POST",e,(function(e){console.log(e,"response from createNewScenario"),s.push({_id:e.data,name:a.value,activated:!1}),U.set(s),V.success("New scenario created.")}))}else V.danger("please provide scenario name.")}}]}export default class extends e{constructor(e){super(),a(this,e,pe,de,t,{},[-1,-1])}}