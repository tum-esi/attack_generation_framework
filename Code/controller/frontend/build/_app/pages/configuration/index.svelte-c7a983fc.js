import{S as e,i as t,s as a,e as s,t as r,k as c,c as n,a as l,g as i,d as o,n as h,b as f,f as d,F as u,l as v,M as p,N as g,G as E,O as m,h as w,P as b,j as y,L as T,m as S,o as k,v as D,r as I,w as N,Q as x,R as C,z as O,T as A,U as H}from"../../chunks/vendor-c052606d.js";/* empty css                                                       */import{T as _,x as B,n as V,a as z,m as R}from"../../chunks/requests-2b3ce117.js";import{s as U,a as P,t as j}from"../../chunks/store-7a6f43c6.js";const{document:L}=A;function M(e,t,a){const s=e.slice();return s[25]=t[a],s[27]=a,s}function $(e,t,a){const s=e.slice();return s[28]=t[a][0],s[29]=t[a][1],s}function F(e,t,a){const s=e.slice();return s[32]=t[a].short_id,s[33]=t[a].name,s[34]=t[a].ports,s[27]=a,s}function G(e,t,a){const s=e.slice();return s[36]=t[a],s[27]=a,s}function J(e,t,a){const s=e.slice();return s[28]=t[a][0],s[29]=t[a][1],s}function q(e,t,a){const s=e.slice();return s[28]=t[a][0],s[29]=t[a][1],s}function Q(e){let t,a,v,g,E,m,w,b,y,T,S,k,D,I,N,x=e[0],C=[];for(let s=0;s<x.length;s+=1)C[s]=Z(G(e,x,s));return{c(){t=s("table"),a=s("thead"),v=s("tr"),g=s("th"),E=r("ID"),m=c(),w=s("th"),b=r("Name"),y=c(),T=s("th"),S=r("Activated"),k=c(),D=s("th"),I=r("Actions"),N=c();for(let e=0;e<C.length;e+=1)C[e].c();this.h()},l(e){t=n(e,"TABLE",{class:!0});var s=l(t);a=n(s,"THEAD",{});var r=l(a);v=n(r,"TR",{class:!0});var c=l(v);g=n(c,"TH",{});var f=l(g);E=i(f,"ID"),f.forEach(o),m=h(c),w=n(c,"TH",{});var d=l(w);b=i(d,"Name"),d.forEach(o),y=h(c),T=n(c,"TH",{});var u=l(T);S=i(u,"Activated"),u.forEach(o),k=h(c),D=n(c,"TH",{});var p=l(D);I=i(p,"Actions"),p.forEach(o),c.forEach(o),r.forEach(o),N=h(s);for(let t=0;t<C.length;t+=1)C[t].l(s);s.forEach(o),this.h()},h(){f(v,"class","w3-dark-grey"),f(t,"class","w3-table-all w3-centered")},m(e,s){d(e,t,s),u(t,a),u(a,v),u(v,g),u(g,E),u(v,m),u(v,w),u(w,b),u(v,y),u(v,T),u(T,S),u(v,k),u(v,D),u(D,I),u(t,N);for(let a=0;a<C.length;a+=1)C[a].m(t,null)},p(e,a){if(34825&a[0]){let s;for(x=e[0],s=0;s<x.length;s+=1){const r=G(e,x,s);C[s]?C[s].p(r,a):(C[s]=Z(r),C[s].c(),C[s].m(t,null))}for(;s<C.length;s+=1)C[s].d(1);C.length=x.length}},d(e){e&&o(t),p(C,e)}}}function K(e){let t,a,v,p,g,m,w,y,T,S,k,D,I,N,C,O,A=[],_=new Map,B=Object.entries(e[36]);const V=e=>e[28];for(let s=0;s<B.length;s+=1){let t=J(e,B,s),a=V(t);_.set(a,A[s]=X(a,t))}return{c(){t=s("tr");for(let e=0;e<A.length;e+=1)A[e].c();a=c(),v=s("td"),p=s("div"),g=s("div"),m=s("button"),w=r("Activate"),y=c(),T=s("button"),S=r("Copy"),k=c(),D=s("button"),I=r("Delete"),N=c(),this.h()},l(e){t=n(e,"TR",{index:!0});var s=l(t);for(let t=0;t<A.length;t+=1)A[t].l(s);a=h(s),v=n(s,"TD",{class:!0});var r=l(v);p=n(r,"DIV",{class:!0});var c=l(p);g=n(c,"DIV",{class:!0});var f=l(g);m=n(f,"BUTTON",{});var d=l(m);w=i(d,"Activate"),d.forEach(o),y=h(f),T=n(f,"BUTTON",{});var u=l(T);S=i(u,"Copy"),u.forEach(o),k=h(f),D=n(f,"BUTTON",{});var E=l(D);I=i(E,"Delete"),E.forEach(o),f.forEach(o),c.forEach(o),r.forEach(o),N=h(s),s.forEach(o),this.h()},h(){f(g,"class","w3-bar"),f(p,"class","w3-show-inline-block"),f(v,"class","svelte-17uzir7"),f(t,"index",e[27])},m(s,r){d(s,t,r);for(let e=0;e<A.length;e+=1)A[e].m(t,null);u(t,a),u(t,v),u(v,p),u(p,g),u(g,m),u(m,w),u(g,y),u(g,T),u(T,S),u(g,k),u(g,D),u(D,I),u(t,N),C||(O=[E(m,"click",e[11]),E(T,"click",ue),E(D,"click",e[15])],C=!0)},p(e,s){1&s[0]&&(B=Object.entries(e[36]),A=b(A,s,V,1,e,B,_,t,H,X,a,J))},d(e){e&&o(t);for(let t=0;t<A.length;t+=1)A[t].d();C=!1,x(O)}}}function W(e){let t,a,v,p,m,w,y,T,S,k,D,I,N,C,O,A,_=[],B=new Map,V=Object.entries(e[36]);const z=e=>e[28];for(let s=0;s<V.length;s+=1){let t=q(e,V,s),a=z(t);B.set(a,_[s]=Y(a,t))}return{c(){t=s("tr");for(let e=0;e<_.length;e+=1)_[e].c();a=c(),v=s("td"),p=s("div"),m=s("div"),w=s("button"),y=r("Activate"),T=c(),S=s("button"),k=r("Copy"),D=c(),I=s("button"),N=r("Delete"),C=c(),this.h()},l(e){t=n(e,"TR",{index:!0,style:!0});var s=l(t);for(let t=0;t<_.length;t+=1)_[t].l(s);a=h(s),v=n(s,"TD",{class:!0});var r=l(v);p=n(r,"DIV",{class:!0});var c=l(p);m=n(c,"DIV",{class:!0});var f=l(m);w=n(f,"BUTTON",{});var d=l(w);y=i(d,"Activate"),d.forEach(o),T=h(f),S=n(f,"BUTTON",{});var u=l(S);k=i(u,"Copy"),u.forEach(o),D=h(f),I=n(f,"BUTTON",{});var g=l(I);N=i(g,"Delete"),g.forEach(o),f.forEach(o),c.forEach(o),r.forEach(o),C=h(s),s.forEach(o),this.h()},h(){f(m,"class","w3-bar"),f(p,"class","w3-show-inline-block"),f(v,"class","svelte-17uzir7"),f(t,"index",e[27]),g(t,"background-color","#acddb4")},m(s,r){d(s,t,r);for(let e=0;e<_.length;e+=1)_[e].m(t,null);u(t,a),u(t,v),u(v,p),u(p,m),u(m,w),u(w,y),u(m,T),u(m,S),u(S,k),u(m,D),u(m,I),u(I,N),u(t,C),O||(A=[E(w,"click",e[11]),E(S,"click",ue),E(I,"click",e[15])],O=!0)},p(e,s){1&s[0]&&(V=Object.entries(e[36]),_=b(_,s,z,1,e,V,B,t,H,Y,a,q))},d(e){e&&o(t);for(let t=0;t<_.length;t+=1)_[t].d();O=!1,x(A)}}}function X(e,t){let a,c,h=t[29]+"";return{key:e,first:null,c(){a=s("td"),c=r(h),this.h()},l(e){a=n(e,"TD",{class:!0});var t=l(a);c=i(t,h),t.forEach(o),this.h()},h(){f(a,"class","svelte-17uzir7"),this.first=a},m(e,t){d(e,a,t),u(a,c)},p(e,a){t=e,1&a[0]&&h!==(h=t[29]+"")&&w(c,h)},d(e){e&&o(a)}}}function Y(e,t){let a,c,h=t[29]+"";return{key:e,first:null,c(){a=s("td"),c=r(h),this.h()},l(e){a=n(e,"TD",{class:!0});var t=l(a);c=i(t,h),t.forEach(o),this.h()},h(){f(a,"class","svelte-17uzir7"),this.first=a},m(e,t){d(e,a,t),u(a,c)},p(e,a){t=e,1&a[0]&&h!==(h=t[29]+"")&&w(c,h)},d(e){e&&o(a)}}}function Z(e){let t;function a(e,t){return e[3]==e[27]||e[0][e[27]].activated?W:K}let s=a(e),r=s(e);return{c(){r.c(),t=v()},l(e){r.l(e),t=v()},m(e,a){r.m(e,a),d(e,t,a)},p(e,c){s===(s=a(e))&&r?r.p(e,c):(r.d(1),r=s(e),r&&(r.c(),r.m(t.parentNode,t)))},d(e){r.d(e),e&&o(t)}}}function ee(e){let t,a,v,g,E,m,w,b,y,T,S,k,D,I,N,x=e[5],C=[];for(let s=0;s<x.length;s+=1)C[s]=se(F(e,x,s));return{c(){t=s("table"),a=s("thead"),v=s("tr"),g=s("th"),E=r("ShortID"),m=c(),w=s("th"),b=r("Name"),y=c(),T=s("th"),S=r("Ports"),k=c(),D=s("th"),I=r("Actions"),N=c();for(let e=0;e<C.length;e+=1)C[e].c();this.h()},l(e){t=n(e,"TABLE",{class:!0});var s=l(t);a=n(s,"THEAD",{});var r=l(a);v=n(r,"TR",{class:!0});var c=l(v);g=n(c,"TH",{});var f=l(g);E=i(f,"ShortID"),f.forEach(o),m=h(c),w=n(c,"TH",{});var d=l(w);b=i(d,"Name"),d.forEach(o),y=h(c),T=n(c,"TH",{});var u=l(T);S=i(u,"Ports"),u.forEach(o),k=h(c),D=n(c,"TH",{});var p=l(D);I=i(p,"Actions"),p.forEach(o),c.forEach(o),r.forEach(o),N=h(s);for(let t=0;t<C.length;t+=1)C[t].l(s);s.forEach(o),this.h()},h(){f(v,"class","w3-dark-grey"),f(t,"class","w3-table-all w3-centered")},m(e,s){d(e,t,s),u(t,a),u(a,v),u(v,g),u(g,E),u(v,m),u(v,w),u(w,b),u(v,y),u(v,T),u(T,S),u(v,k),u(v,D),u(D,I),u(t,N);for(let a=0;a<C.length;a+=1)C[a].m(t,null)},p(e,a){if(12384&a[0]){let s;for(x=e[5],s=0;s<x.length;s+=1){const r=F(e,x,s);C[s]?C[s].p(r,a):(C[s]=se(r),C[s].c(),C[s].m(t,null))}for(;s<C.length;s+=1)C[s].d(1);C.length=x.length}},d(e){e&&o(t),p(C,e)}}}function te(e){let t,a,v,p,g,m,b,y,T,S,k,D,I,N,C,O,A,H,_,B,V,z=e[32]+"",R=e[33]+"",U=e[34]+"";return{c(){t=s("tr"),a=s("td"),v=r(z),p=c(),g=s("td"),m=r(R),b=c(),y=s("td"),T=r(U),S=c(),k=s("td"),D=s("div"),I=s("div"),N=s("button"),C=r("Activate"),O=c(),A=s("button"),H=r("Deactivate"),_=c(),this.h()},l(e){t=n(e,"TR",{index:!0});var s=l(t);a=n(s,"TD",{class:!0});var r=l(a);v=i(r,z),r.forEach(o),p=h(s),g=n(s,"TD",{class:!0});var c=l(g);m=i(c,R),c.forEach(o),b=h(s),y=n(s,"TD",{class:!0});var f=l(y);T=i(f,U),f.forEach(o),S=h(s),k=n(s,"TD",{class:!0});var d=l(k);D=n(d,"DIV",{class:!0});var u=l(D);I=n(u,"DIV",{class:!0});var E=l(I);N=n(E,"BUTTON",{});var w=l(N);C=i(w,"Activate"),w.forEach(o),O=h(E),A=n(E,"BUTTON",{});var x=l(A);H=i(x,"Deactivate"),x.forEach(o),E.forEach(o),u.forEach(o),d.forEach(o),_=h(s),s.forEach(o),this.h()},h(){f(a,"class","svelte-17uzir7"),f(g,"class","svelte-17uzir7"),f(y,"class","svelte-17uzir7"),f(I,"class","w3-bar"),f(D,"class","w3-show-inline-block"),f(k,"class","svelte-17uzir7"),f(t,"index",e[27])},m(s,r){d(s,t,r),u(t,a),u(a,v),u(t,p),u(t,g),u(g,m),u(t,b),u(t,y),u(y,T),u(t,S),u(t,k),u(k,D),u(D,I),u(I,N),u(N,C),u(I,O),u(I,A),u(A,H),u(t,_),B||(V=[E(N,"click",e[12]),E(A,"click",e[13])],B=!0)},p(e,t){32&t[0]&&z!==(z=e[32]+"")&&w(v,z),32&t[0]&&R!==(R=e[33]+"")&&w(m,R),32&t[0]&&U!==(U=e[34]+"")&&w(T,U)},d(e){e&&o(t),B=!1,x(V)}}}function ae(e){let t,a,v,p,g,m,b,y,T,S,k,D,I,N,C,O,A,H,_,B,V,z,R=e[32]+"",U=e[33]+"",P=e[34]+"";return{c(){t=s("tr"),a=s("td"),v=r(R),p=c(),g=s("td"),m=r(U),b=c(),y=s("td"),T=r(P),S=c(),k=s("td"),D=s("div"),I=s("div"),N=s("button"),C=r("Activate"),O=c(),A=s("button"),H=r("Deactivate"),_=c(),this.h()},l(e){t=n(e,"TR",{index:!0,style:!0});var s=l(t);a=n(s,"TD",{class:!0});var r=l(a);v=i(r,R),r.forEach(o),p=h(s),g=n(s,"TD",{class:!0});var c=l(g);m=i(c,U),c.forEach(o),b=h(s),y=n(s,"TD",{class:!0});var f=l(y);T=i(f,P),f.forEach(o),S=h(s),k=n(s,"TD",{class:!0});var d=l(k);D=n(d,"DIV",{class:!0});var u=l(D);I=n(u,"DIV",{class:!0});var E=l(I);N=n(E,"BUTTON",{});var w=l(N);C=i(w,"Activate"),w.forEach(o),O=h(E),A=n(E,"BUTTON",{});var x=l(A);H=i(x,"Deactivate"),x.forEach(o),E.forEach(o),u.forEach(o),d.forEach(o),_=h(s),s.forEach(o),this.h()},h(){f(a,"class","svelte-17uzir7"),f(g,"class","svelte-17uzir7"),f(y,"class","svelte-17uzir7"),f(I,"class","w3-bar"),f(D,"class","w3-show-inline-block"),f(k,"class","svelte-17uzir7"),f(t,"index",e[27]),f(t,"style",B=e[6][e[27]])},m(s,r){d(s,t,r),u(t,a),u(a,v),u(t,p),u(t,g),u(g,m),u(t,b),u(t,y),u(y,T),u(t,S),u(t,k),u(k,D),u(D,I),u(I,N),u(N,C),u(I,O),u(I,A),u(A,H),u(t,_),V||(z=[E(N,"click",e[12]),E(A,"click",e[13])],V=!0)},p(e,a){32&a[0]&&R!==(R=e[32]+"")&&w(v,R),32&a[0]&&U!==(U=e[33]+"")&&w(m,U),32&a[0]&&P!==(P=e[34]+"")&&w(T,P),64&a[0]&&B!==(B=e[6][e[27]])&&f(t,"style",B)},d(e){e&&o(t),V=!1,x(z)}}}function se(e){let t;function a(e,t){return e[27]in e[6]?ae:te}let s=a(e),r=s(e);return{c(){r.c(),t=v()},l(e){r.l(e),t=v()},m(e,a){r.m(e,a),d(e,t,a)},p(e,c){s===(s=a(e))&&r?r.p(e,c):(r.d(1),r=s(e),r&&(r.c(),r.m(t.parentNode,t)))},d(e){r.d(e),e&&o(t)}}}function re(e){let t,a=e[1].configurations.length>0&&ce(e);return{c(){a&&a.c(),t=v()},l(e){a&&a.l(e),t=v()},m(e,s){a&&a.m(e,s),d(e,t,s)},p(e,s){e[1].configurations.length>0?a?a.p(e,s):(a=ce(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(e){a&&a.d(e),e&&o(t)}}}function ce(e){let t,a=e[1].configurations,s=[];for(let r=0;r<a.length;r+=1)s[r]=fe(M(e,a,r));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=v()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=v()},m(e,a){for(let t=0;t<s.length;t+=1)s[t].m(e,a);d(e,t,a)},p(e,r){if(1026&r[0]){let c;for(a=e[1].configurations,c=0;c<a.length;c+=1){const n=M(e,a,c);s[c]?s[c].p(n,r):(s[c]=fe(n),s[c].c(),s[c].m(t.parentNode,t))}for(;c<s.length;c+=1)s[c].d(1);s.length=a.length}},d(e){p(s,e),e&&o(t)}}}function ne(e){let t,a,v,p,g,E,m,b=e[28]+"";return{c(){t=s("label"),a=s("b"),v=r(b),p=c(),g=s("input"),this.h()},l(e){t=n(e,"LABEL",{class:!0});var s=l(t);a=n(s,"B",{});var r=l(a);v=i(r,b),r.forEach(o),s.forEach(o),p=h(e),g=n(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(t,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","list"),f(g,"key",E=e[28]),g.value=m=e[29].join()},m(e,s){d(e,t,s),u(t,a),u(a,v),d(e,p,s),d(e,g,s)},p(e,t){2&t[0]&&b!==(b=e[28]+"")&&w(v,b),2&t[0]&&E!==(E=e[28])&&f(g,"key",E),2&t[0]&&m!==(m=e[29].join())&&(g.value=m)},d(e){e&&o(t),e&&o(p),e&&o(g)}}}function le(e){let t,a,v,p,g,E,m,b=e[28]+"";return{c(){t=s("input"),p=c(),g=s("label"),E=s("b"),m=r(b),this.h()},l(e){t=n(e,"INPUT",{class:!0,type:!0,key:!0,checked:!0}),p=h(e),g=n(e,"LABEL",{class:!0});var a=l(g);E=n(a,"B",{});var s=l(E);m=i(s,b),s.forEach(o),a.forEach(o),this.h()},h(){f(t,"class","w3-check"),f(t,"type","checkbox"),f(t,"key",a=e[28]),t.checked=v=e[29],f(g,"class","")},m(e,a){d(e,t,a),d(e,p,a),d(e,g,a),u(g,E),u(E,m)},p(e,s){2&s[0]&&a!==(a=e[28])&&f(t,"key",a),2&s[0]&&v!==(v=e[29])&&(t.checked=v),2&s[0]&&b!==(b=e[28]+"")&&w(m,b)},d(e){e&&o(t),e&&o(p),e&&o(g)}}}function ie(e){let t,a,v,p,g,E,m,b=e[28]+"";return{c(){t=s("label"),a=s("b"),v=r(b),p=c(),g=s("input"),this.h()},l(e){t=n(e,"LABEL",{class:!0});var s=l(t);a=n(s,"B",{});var r=l(a);v=i(r,b),r.forEach(o),s.forEach(o),p=h(e),g=n(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(t,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","string"),f(g,"key",E=e[28]),g.value=m=e[29]},m(e,s){d(e,t,s),u(t,a),u(a,v),d(e,p,s),d(e,g,s)},p(e,t){2&t[0]&&b!==(b=e[28]+"")&&w(v,b),2&t[0]&&E!==(E=e[28])&&f(g,"key",E),2&t[0]&&m!==(m=e[29])&&(g.value=m)},d(e){e&&o(t),e&&o(p),e&&o(g)}}}function oe(e){let t,a,v,p,g,E,m,b=e[28]+"";return{c(){t=s("label"),a=s("b"),v=r(b),p=c(),g=s("input"),this.h()},l(e){t=n(e,"LABEL",{class:!0});var s=l(t);a=n(s,"B",{});var r=l(a);v=i(r,b),r.forEach(o),s.forEach(o),p=h(e),g=n(e,"INPUT",{class:!0,type:!0,convert:!0,key:!0,value:!0}),this.h()},h(){f(t,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","string"),f(g,"convert","required"),f(g,"key",E=e[28]),g.value=m=e[29]},m(e,s){d(e,t,s),u(t,a),u(a,v),d(e,p,s),d(e,g,s)},p(e,t){2&t[0]&&b!==(b=e[28]+"")&&w(v,b),2&t[0]&&E!==(E=e[28])&&f(g,"key",E),2&t[0]&&m!==(m=e[29])&&(g.value=m)},d(e){e&&o(t),e&&o(p),e&&o(g)}}}function he(e,t){let a;function r(e,t){return"number"==typeof e[29]?oe:"string"==typeof e[29]?ie:"boolean"==typeof e[29]?le:"object"==typeof e[29]?ne:void 0}let c=r(t),i=c&&c(t);return{key:e,first:null,c(){a=s("p"),i&&i.c(),this.h()},l(e){a=n(e,"P",{});var t=l(a);i&&i.l(t),t.forEach(o),this.h()},h(){this.first=a},m(e,t){d(e,a,t),i&&i.m(a,null)},p(e,s){c===(c=r(t=e))&&i?i.p(t,s):(i&&i.d(1),i=c&&c(t),i&&(i.c(),i.m(a,null)))},d(e){e&&o(a),i&&i.d()}}}function fe(e){let t,a,v,p,y,T,S,k,D,I,N,x,C,O,A,_,B,V,z,R,U,P,j=e[25].container_info.name+"",L=[],M=new Map,F=Object.entries(e[25].configs);const G=e=>e[28];for(let s=0;s<F.length;s+=1){let t=$(e,F,s),a=G(t);M.set(a,L[s]=he(a,t))}return{c(){t=s("div"),a=s("div"),v=s("h2"),p=r(j),y=c(),T=s("p"),S=r("Description here from application configs"),k=c(),D=s("div"),I=s("form"),N=s("h5"),x=r("Update Form"),C=c();for(let e=0;e<L.length;e+=1)L[e].c();O=c(),A=s("p"),_=s("input"),z=c(),R=s("hr"),this.h()},l(e){t=n(e,"DIV",{class:!0});var s=l(t);a=n(s,"DIV",{class:!0});var r=l(a);v=n(r,"H2",{class:!0,style:!0});var c=l(v);p=i(c,j),c.forEach(o),y=h(r),T=n(r,"P",{});var f=l(T);S=i(f,"Description here from application configs"),f.forEach(o),r.forEach(o),k=h(s),D=n(s,"DIV",{class:!0});var d=l(D);I=n(d,"FORM",{name:!0,port:!0,index:!0,class:!0});var u=l(I);N=n(u,"H5",{class:!0,style:!0});var g=l(N);x=i(g,"Update Form"),g.forEach(o),C=h(u);for(let t=0;t<L.length;t+=1)L[t].l(u);O=h(u),A=n(u,"P",{});var E=l(A);_=n(E,"INPUT",{class:!0,type:!0,value:!0}),E.forEach(o),u.forEach(o),d.forEach(o),s.forEach(o),z=h(e),R=n(e,"HR",{class:!0}),this.h()},h(){f(v,"class","w3-text-orange"),g(v,"text-shadow","1px 1px 0 #444"),f(a,"class","w3-third w3-container w3-blue"),f(N,"class","w3-text-orange"),g(N,"text-shadow","1px 1px 0 #444"),f(_,"class","w3-blue"),f(_,"type","submit"),_.value="Update",f(I,"name",B=e[25].container_info.name),f(I,"port",V=e[25].container_info.ports),f(I,"index",e[27]),f(I,"class","w3-container"),f(D,"class","w3-twothird w3-container w3-gray"),f(t,"class","w3-row w3-border"),f(R,"class","svelte-17uzir7")},m(s,r){d(s,t,r),u(t,a),u(a,v),u(v,p),u(a,y),u(a,T),u(T,S),u(t,k),u(t,D),u(D,I),u(I,N),u(N,x),u(I,C);for(let e=0;e<L.length;e+=1)L[e].m(I,null);u(I,O),u(I,A),u(A,_),d(s,z,r),d(s,R,r),U||(P=E(I,"submit",m(e[10])),U=!0)},p(e,t){2&t[0]&&j!==(j=e[25].container_info.name+"")&&w(p,j),2&t[0]&&(F=Object.entries(e[25].configs),L=b(L,t,G,1,e,F,M,I,H,he,O,$)),2&t[0]&&B!==(B=e[25].container_info.name)&&f(I,"name",B),2&t[0]&&V!==(V=e[25].container_info.ports)&&f(I,"port",V)},d(e){e&&o(t);for(let t=0;t<L.length;t+=1)L[t].d();e&&o(z),e&&o(R),U=!1,P()}}}function de(e){let t,a,v,p,m,w,b,C,O,A,H,B,V,z,R,U,P,j,M,$,F,G,J,q,K,W,X,Y,Z,te,ae,se,ce,ne,le,ie,oe,he,fe,de,ue,pe,ge,Ee,me,we,be,ye,Te,Se,ke,De,Ie,Ne,xe,Ce,Oe,Ae,He,_e,Be,Ve,ze,Re,Ue,Pe,je,Le,Me,$e,Fe,Ge,Je,qe,Qe,Ke,We,Xe,Ye,Ze,et,tt,at,st,rt,ct,nt,lt,it,ot,ht,ft,dt,ut,vt,pt,gt,Et,mt,wt,bt,yt,Tt,St,kt,Dt,It,Nt,xt,Ct,Ot,At,Ht,_t,Bt,Vt,zt,Rt,Ut,Pt,jt,Lt,Mt,$t,Ft,Gt,Jt,qt,Qt,Kt,Wt,Xt,Yt,Zt,ea,ta,aa,sa,ra,ca,na,la,ia,oa,ha,fa,da;a=new _({});let ua=e[0].length>0&&Q(e),va=e[5].length>0&&ee(e),pa="configurations"in e[1]&&re(e);return{c(){t=c(),y(a.$$.fragment),v=c(),p=s("hr"),m=c(),w=s("div"),b=s("h1"),C=s("b"),O=r("Scenario Management"),A=c(),H=s("hr"),B=c(),V=s("section"),z=s("h3"),R=r("Select scenario"),U=c(),P=s("section"),ua&&ua.c(),j=c(),M=s("div"),$=s("div"),F=s("button"),G=r("Create Scenario"),J=c(),q=s("div"),K=s("input"),W=c(),X=s("div"),Y=s("div"),Z=s("button"),te=r("Rename Scenario"),ae=c(),se=s("div"),ce=s("input"),ne=c(),le=s("div"),ie=s("input"),oe=c(),he=s("hr"),fe=c(),de=s("div"),ue=s("h1"),pe=s("b"),ge=r("Scenario Type"),Ee=c(),me=s("div"),we=s("div"),be=s("a"),ye=s("div"),Te=r("Communication"),Se=c(),ke=s("a"),De=s("div"),Ie=r("Static"),Ne=c(),xe=s("a"),Ce=s("div"),Oe=r("Driving Simulation"),Ae=c(),He=s("div"),_e=s("hr"),Be=c(),Ve=s("div"),ze=s("h1"),Re=s("b"),Ue=r("Configuration"),Pe=c(),je=s("hr"),Le=c(),Me=s("section"),$e=s("h3"),Fe=r("Select containers"),Ge=c(),Je=s("section"),va&&va.c(),qe=c(),Qe=s("hr"),Ke=c(),We=s("section"),Xe=s("h3"),Ye=r("Configure containers"),Ze=c(),et=s("section"),tt=s("button"),at=r("Reset Configurations"),st=c(),pa&&pa.c(),rt=c(),ct=s("button"),nt=r("Save Configurations"),it=c(),ot=s("div"),ht=s("hr"),ft=c(),dt=s("div"),ut=s("h1"),vt=s("b"),pt=r("Configuration"),gt=c(),Et=s("hr"),mt=c(),wt=s("section"),bt=s("h3"),yt=r("Generate Frames from Video"),Tt=c(),St=s("hr"),kt=c(),Dt=s("section"),It=s("h3"),Nt=r("Generate Attack"),xt=c(),Ct=s("hr"),Ot=c(),At=s("section"),Ht=s("h3"),_t=r("Validate Dataset"),Vt=c(),zt=s("div"),Rt=s("hr"),Ut=c(),Pt=s("div"),jt=s("h1"),Lt=s("b"),Mt=r("Configuration"),$t=c(),Ft=s("hr"),Gt=c(),Jt=s("section"),qt=s("h3"),Qt=r("Select Driving Path"),Kt=c(),Wt=s("hr"),Xt=c(),Yt=s("section"),Zt=s("h3"),ea=r("Select Sensors"),ta=c(),aa=s("hr"),sa=c(),ra=s("section"),ca=s("h3"),na=r("Attack Configuration"),ia=c(),oa=s("hr"),this.h()},l(e){T('[data-svelte="svelte-101i1i0"]',L.head).forEach(o),t=h(e),S(a.$$.fragment,e),v=h(e),p=n(e,"HR",{class:!0}),m=h(e),w=n(e,"DIV",{class:!0});var s=l(w);b=n(s,"H1",{class:!0,style:!0});var r=l(b);C=n(r,"B",{});var c=l(C);O=i(c,"Scenario Management"),c.forEach(o),r.forEach(o),s.forEach(o),A=h(e),H=n(e,"HR",{class:!0}),B=h(e),V=n(e,"SECTION",{class:!0});var f=l(V);z=n(f,"H3",{});var d=l(z);R=i(d,"Select scenario"),d.forEach(o),f.forEach(o),U=h(e),P=n(e,"SECTION",{class:!0});var u=l(P);ua&&ua.l(u),j=h(u),M=n(u,"DIV",{class:!0});var g=l(M);$=n(g,"DIV",{class:!0});var E=l($);F=n(E,"BUTTON",{ref:!0,class:!0});var y=l(F);G=i(y,"Create Scenario"),y.forEach(o),E.forEach(o),J=h(g),q=n(g,"DIV",{class:!0});var k=l(q);K=n(k,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),k.forEach(o),g.forEach(o),W=h(u),X=n(u,"DIV",{class:!0});var D=l(X);Y=n(D,"DIV",{class:!0});var I=l(Y);Z=n(I,"BUTTON",{ref:!0,class:!0});var N=l(Z);te=i(N,"Rename Scenario"),N.forEach(o),I.forEach(o),ae=h(D),se=n(D,"DIV",{class:!0});var x=l(se);ce=n(x,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),x.forEach(o),ne=h(D),le=n(D,"DIV",{class:!0});var _=l(le);ie=n(_,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),_.forEach(o),D.forEach(o),u.forEach(o),oe=h(e),he=n(e,"HR",{class:!0}),fe=h(e),de=n(e,"DIV",{class:!0});var Q=l(de);ue=n(Q,"H1",{class:!0,style:!0});var ee=l(ue);pe=n(ee,"B",{});var re=l(pe);ge=i(re,"Scenario Type"),re.forEach(o),ee.forEach(o),Q.forEach(o),Ee=h(e),me=n(e,"DIV",{class:!0});var ve=l(me);we=n(ve,"DIV",{class:!0});var lt=l(we);be=n(lt,"A",{href:!0});var Bt=l(be);ye=n(Bt,"DIV",{class:!0});var la=l(ye);Te=i(la,"Communication"),la.forEach(o),Bt.forEach(o),Se=h(lt),ke=n(lt,"A",{href:!0});var ha=l(ke);De=n(ha,"DIV",{class:!0});var fa=l(De);Ie=i(fa,"Static"),fa.forEach(o),ha.forEach(o),Ne=h(lt),xe=n(lt,"A",{href:!0});var da=l(xe);Ce=n(da,"DIV",{class:!0});var ga=l(Ce);Oe=i(ga,"Driving Simulation"),ga.forEach(o),da.forEach(o),lt.forEach(o),Ae=h(ve),He=n(ve,"DIV",{id:!0,class:!0,style:!0});var Ea=l(He);_e=n(Ea,"HR",{class:!0}),Be=h(Ea),Ve=n(Ea,"DIV",{class:!0});var ma=l(Ve);ze=n(ma,"H1",{class:!0,style:!0});var wa=l(ze);Re=n(wa,"B",{});var ba=l(Re);Ue=i(ba,"Configuration"),ba.forEach(o),wa.forEach(o),ma.forEach(o),Pe=h(Ea),je=n(Ea,"HR",{class:!0}),Le=h(Ea),Me=n(Ea,"SECTION",{class:!0});var ya=l(Me);$e=n(ya,"H3",{});var Ta=l($e);Fe=i(Ta,"Select containers"),Ta.forEach(o),ya.forEach(o),Ge=h(Ea),Je=n(Ea,"SECTION",{class:!0});var Sa=l(Je);va&&va.l(Sa),Sa.forEach(o),qe=h(Ea),Qe=n(Ea,"HR",{class:!0}),Ke=h(Ea),We=n(Ea,"SECTION",{class:!0});var ka=l(We);Xe=n(ka,"H3",{});var Da=l(Xe);Ye=i(Da,"Configure containers"),Da.forEach(o),ka.forEach(o),Ze=h(Ea),et=n(Ea,"SECTION",{class:!0});var Ia=l(et);tt=n(Ia,"BUTTON",{class:!0});var Na=l(tt);at=i(Na,"Reset Configurations"),Na.forEach(o),st=h(Ia),pa&&pa.l(Ia),rt=h(Ia),ct=n(Ia,"BUTTON",{class:!0});var xa=l(ct);nt=i(xa,"Save Configurations"),xa.forEach(o),Ia.forEach(o),Ea.forEach(o),it=h(ve),ot=n(ve,"DIV",{id:!0,class:!0,style:!0});var Ca=l(ot);ht=n(Ca,"HR",{class:!0}),ft=h(Ca),dt=n(Ca,"DIV",{class:!0});var Oa=l(dt);ut=n(Oa,"H1",{class:!0,style:!0});var Aa=l(ut);vt=n(Aa,"B",{});var Ha=l(vt);pt=i(Ha,"Configuration"),Ha.forEach(o),Aa.forEach(o),Oa.forEach(o),gt=h(Ca),Et=n(Ca,"HR",{class:!0}),mt=h(Ca),wt=n(Ca,"SECTION",{class:!0});var _a=l(wt);bt=n(_a,"H3",{});var Ba=l(bt);yt=i(Ba,"Generate Frames from Video"),Ba.forEach(o),_a.forEach(o),Tt=h(Ca),St=n(Ca,"HR",{class:!0}),kt=h(Ca),Dt=n(Ca,"SECTION",{class:!0});var Va=l(Dt);It=n(Va,"H3",{});var za=l(It);Nt=i(za,"Generate Attack"),za.forEach(o),Va.forEach(o),xt=h(Ca),Ct=n(Ca,"HR",{class:!0}),Ot=h(Ca),At=n(Ca,"SECTION",{class:!0});var Ra=l(At);Ht=n(Ra,"H3",{});var Ua=l(Ht);_t=i(Ua,"Validate Dataset"),Ua.forEach(o),Ra.forEach(o),Ca.forEach(o),Vt=h(ve),zt=n(ve,"DIV",{id:!0,class:!0,style:!0});var Pa=l(zt);Rt=n(Pa,"HR",{class:!0}),Ut=h(Pa),Pt=n(Pa,"DIV",{class:!0});var ja=l(Pt);jt=n(ja,"H1",{class:!0,style:!0});var La=l(jt);Lt=n(La,"B",{});var Ma=l(Lt);Mt=i(Ma,"Configuration"),Ma.forEach(o),La.forEach(o),ja.forEach(o),$t=h(Pa),Ft=n(Pa,"HR",{class:!0}),Gt=h(Pa),Jt=n(Pa,"SECTION",{class:!0});var $a=l(Jt);qt=n($a,"H3",{});var Fa=l(qt);Qt=i(Fa,"Select Driving Path"),Fa.forEach(o),$a.forEach(o),Kt=h(Pa),Wt=n(Pa,"HR",{class:!0}),Xt=h(Pa),Yt=n(Pa,"SECTION",{class:!0});var Ga=l(Yt);Zt=n(Ga,"H3",{});var Ja=l(Zt);ea=i(Ja,"Select Sensors"),Ja.forEach(o),Ga.forEach(o),ta=h(Pa),aa=n(Pa,"HR",{class:!0}),sa=h(Pa),ra=n(Pa,"SECTION",{class:!0});var qa=l(ra);ca=n(qa,"H3",{});var Qa=l(ca);na=i(Qa,"Attack Configuration"),Qa.forEach(o),qa.forEach(o),Pa.forEach(o),ve.forEach(o),ia=h(e),oa=n(e,"HR",{class:!0}),this.h()},h(){L.title="Configuration and Scheduling",f(p,"class","svelte-17uzir7"),f(b,"class","w3-text-yellow"),g(b,"text-shadow","1px 1px 0 #444"),f(w,"class","w3-panel w3-blue"),f(H,"class","svelte-17uzir7"),f(V,"class","page-headline"),f(F,"ref","createNewScenario"),f(F,"class","w3-col w3-input w3-border"),f($,"class","w3-third"),f(K,"id","createNewScenario"),f(K,"class","w3-input w3-border"),f(K,"name","name"),f(K,"type","text"),f(K,"placeholder","Scenario Name"),f(q,"class","w3-rest"),f(M,"class","w3-row w3-section"),f(Z,"ref","renameScenario"),f(Z,"class","w3-col w3-input w3-border"),f(Y,"class","w3-third"),f(ce,"id","renameScenarioID"),f(ce,"class","w3-input w3-border"),f(ce,"name","id"),f(ce,"type","text"),f(ce,"placeholder","Scenario Identifier"),f(se,"class","w3-third"),f(ie,"id","renameScenario"),f(ie,"class","w3-input w3-border"),f(ie,"name","name"),f(ie,"type","text"),f(ie,"placeholder","Scenario Name"),f(le,"class","w3-rest"),f(X,"class","w3-row w3-section"),f(P,"class","w3-container"),f(he,"class","svelte-17uzir7"),f(ue,"class","w3-text-yellow"),g(ue,"text-shadow","1px 1px 0 #444"),f(de,"class","w3-panel w3-blue"),f(ye,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(be,"href","javascript:void(0)"),f(De,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(ke,"href","javascript:void(0)"),f(Ce,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(xe,"href","javascript:void(0)"),f(we,"class","w3-row"),f(_e,"class","svelte-17uzir7"),f(ze,"class","w3-text-yellow"),g(ze,"text-shadow","1px 1px 0 #444"),f(Ve,"class","w3-panel w3-blue"),f(je,"class","svelte-17uzir7"),f(Me,"class","page-headline"),f(Je,"class","w3-container"),f(Qe,"class","svelte-17uzir7"),f(We,"class","page-headline"),f(tt,"class","w3-col w3-input w3-border w3-margin-bottom"),f(ct,"class","w3-col w3-input w3-border w3-margin-top"),f(et,"class","w3-container"),f(He,"id","Communication"),f(He,"class","w3-container city"),f(He,"style",lt=e[4][e[2]]),f(ht,"class","svelte-17uzir7"),f(ut,"class","w3-text-yellow"),g(ut,"text-shadow","1px 1px 0 #444"),f(dt,"class","w3-panel w3-blue"),f(Et,"class","svelte-17uzir7"),f(wt,"class","page-headline"),f(St,"class","svelte-17uzir7"),f(Dt,"class","page-headline"),f(Ct,"class","svelte-17uzir7"),f(At,"class","page-headline"),f(ot,"id","Static"),f(ot,"class","w3-container city"),f(ot,"style",Bt=e[4][e[2]]),f(Rt,"class","svelte-17uzir7"),f(jt,"class","w3-text-yellow"),g(jt,"text-shadow","1px 1px 0 #444"),f(Pt,"class","w3-panel w3-blue"),f(Ft,"class","svelte-17uzir7"),f(Jt,"class","page-headline"),f(Wt,"class","svelte-17uzir7"),f(Yt,"class","page-headline"),f(aa,"class","svelte-17uzir7"),f(ra,"class","page-headline"),f(zt,"id","Driving Simulation"),f(zt,"class","w3-container city"),f(zt,"style",la=e[4][e[2]]),f(me,"class","w3-container"),f(oa,"class","svelte-17uzir7")},m(s,r){d(s,t,r),k(a,s,r),d(s,v,r),d(s,p,r),d(s,m,r),d(s,w,r),u(w,b),u(b,C),u(C,O),d(s,A,r),d(s,H,r),d(s,B,r),d(s,V,r),u(V,z),u(z,R),d(s,U,r),d(s,P,r),ua&&ua.m(P,null),u(P,j),u(P,M),u(M,$),u($,F),u(F,G),u(M,J),u(M,q),u(q,K),u(P,W),u(P,X),u(X,Y),u(Y,Z),u(Z,te),u(X,ae),u(X,se),u(se,ce),u(X,ne),u(X,le),u(le,ie),d(s,oe,r),d(s,he,r),d(s,fe,r),d(s,de,r),u(de,ue),u(ue,pe),u(pe,ge),d(s,Ee,r),d(s,me,r),u(me,we),u(we,be),u(be,ye),u(ye,Te),u(we,Se),u(we,ke),u(ke,De),u(De,Ie),u(we,Ne),u(we,xe),u(xe,Ce),u(Ce,Oe),u(me,Ae),u(me,He),u(He,_e),u(He,Be),u(He,Ve),u(Ve,ze),u(ze,Re),u(Re,Ue),u(He,Pe),u(He,je),u(He,Le),u(He,Me),u(Me,$e),u($e,Fe),u(He,Ge),u(He,Je),va&&va.m(Je,null),u(He,qe),u(He,Qe),u(He,Ke),u(He,We),u(We,Xe),u(Xe,Ye),u(He,Ze),u(He,et),u(et,tt),u(tt,at),u(et,st),pa&&pa.m(et,null),u(et,rt),u(et,ct),u(ct,nt),u(me,it),u(me,ot),u(ot,ht),u(ot,ft),u(ot,dt),u(dt,ut),u(ut,vt),u(vt,pt),u(ot,gt),u(ot,Et),u(ot,mt),u(ot,wt),u(wt,bt),u(bt,yt),u(ot,Tt),u(ot,St),u(ot,kt),u(ot,Dt),u(Dt,It),u(It,Nt),u(ot,xt),u(ot,Ct),u(ot,Ot),u(ot,At),u(At,Ht),u(Ht,_t),u(me,Vt),u(me,zt),u(zt,Rt),u(zt,Ut),u(zt,Pt),u(Pt,jt),u(jt,Lt),u(Lt,Mt),u(zt,$t),u(zt,Ft),u(zt,Gt),u(zt,Jt),u(Jt,qt),u(qt,Qt),u(zt,Kt),u(zt,Wt),u(zt,Xt),u(zt,Yt),u(Yt,Zt),u(Zt,ea),u(zt,ta),u(zt,aa),u(zt,sa),u(zt,ra),u(ra,ca),u(ca,na),d(s,ia,r),d(s,oa,r),ha=!0,fa||(da=[E(F,"click",e[16]),E(Z,"click",e[14]),E(ye,"click",e[7]),E(be,"click",ve),E(De,"click",e[7]),E(ke,"click",ve),E(Ce,"click",e[7]),E(xe,"click",ve),E(tt,"click",e[8]),E(ct,"click",e[9])],fa=!0)},p(e,t){e[0].length>0?ua?ua.p(e,t):(ua=Q(e),ua.c(),ua.m(P,j)):ua&&(ua.d(1),ua=null),e[5].length>0?va?va.p(e,t):(va=ee(e),va.c(),va.m(Je,null)):va&&(va.d(1),va=null),"configurations"in e[1]?pa?pa.p(e,t):(pa=re(e),pa.c(),pa.m(et,rt)):pa&&(pa.d(1),pa=null),(!ha||20&t[0]&&lt!==(lt=e[4][e[2]]))&&f(He,"style",lt),(!ha||20&t[0]&&Bt!==(Bt=e[4][e[2]]))&&f(ot,"style",Bt),(!ha||20&t[0]&&la!==(la=e[4][e[2]]))&&f(zt,"style",la)},i(e){ha||(D(a.$$.fragment,e),ha=!0)},o(e){I(a.$$.fragment,e),ha=!1},d(e){e&&o(t),N(a,e),e&&o(v),e&&o(p),e&&o(m),e&&o(w),e&&o(A),e&&o(H),e&&o(B),e&&o(V),e&&o(U),e&&o(P),ua&&ua.d(),e&&o(oe),e&&o(he),e&&o(fe),e&&o(de),e&&o(Ee),e&&o(me),va&&va.d(),pa&&pa.d(),e&&o(ia),e&&o(oa),fa=!1,x(da)}}}function ue(){console.log(this,"copyScenario")}function ve(){let e=this.firstChild.innerText;var t,a,s;for(console.log(this,"this"),a=document.getElementsByClassName("city"),t=0;t<a.length;t++)a[t].style.display="none";for(s=document.getElementsByClassName("tablink"),t=0;t<a.length;t++)s[t].className=s[t].className.replace(" w3-border-red","");document.getElementById(e).style.display="block",this.firstChild.className+=" w3-border-red"}function pe(e,t,a){let s=[],r={},c=!1,n="";const l=U.subscribe((e=>{a(0,s=e)})),i=P.subscribe((e=>{a(1,r=e)})),o=j.subscribe((e=>{c=e})),h=scenarioTypeStore.subscribe((e=>{a(2,n=e)}));let f;C((()=>{l(),i(),o(),h()}));let d={Communication:"display:none",Static:"display:none","Driving Simulation":"display:none"},u=[{short_id:"123",name:"DoS Attack",ports:"8010"},{short_id:"1243",name:"Replay Attack",ports:"8020"},{short_id:"122",name:"MitM",ports:"8030"}],v={};async function p(){scenarioTypeStore.set(this.innerText);for(let e in d)e==this.innerText?a(4,d[e]="display:block",d):a(4,d[e]="display:none",d)}function g(){let e=!1;for(let t=0;t<s.length;t++)s[t].activated&&(e=!0);return e}return O((async()=>{p(),async function(e){c?B("/localservices",(function(t){let s=JSON.parse(t.response);s.data&&a(5,u=s.data),e(),console.log("localservices loaded:",u)})):B("/containers",(function(t){let s=JSON.parse(t.response);s.data&&a(5,u=s.data),e(),console.log("containers loaded:",u)}))}((function(){if(s.length<1)B("/api/db1/scenarios",(function(e){let t=JSON.parse(e.response);if(t.data){for(let e=0;e<t.data.length;e++)t.data[e].activated=!1;U.set(t.data)}}));else if(Object.keys(r).length>0)for(var e=0;e<r.configurations.length;e++)for(var t=0;t<u.length;t++){let s=t.toString();u[t].short_id==r.configurations[e].container_info.short_id&&a(6,v[s]="background-color: #acddb4;",v)}}))})),[s,r,n,f,d,u,v,p,async function(){if(!g())return void V.danger("please create and activate a scenario first.");let e=[];for(let t=0;t<r.configurations.length;t++){console.log(r.configurations[t],"data");let a=r.configurations[t].container_info.name,s=r.configurations[t].container_info.ports.split(",")[0].split("/")[0];console.log(a,s,"name and port");let c=R("GET","/containers/"+a+"/"+s+"/configs");e.push(c)}Promise.allSettled(e).then((function(e){for(let t=0;t<e.length;t++)"fulfilled"==e[t].status&&a(1,r.configurations[t].configs=e[t].value.data.data,r);P.set(r)})),console.log("config_containers:",r)},async function(){if(console.log("saving scenario configurations"),!g())return void V.danger("please create and activate a scenario first.");let e="/api/db1/scenario_configurations",t="POST";"_id"in r&&(t="PUT",e="/api/db1/scenario_configurations/"+r._id),console.log("writing data:",r," to url:",e," and method:",t),z(e,t,r,(function(e){console.log(e,"response from saveContainersConfig"),a(1,r._id=e.data,r),P.set(r),V.success("Configuration saved successfull.")}))},async function(){if(!g())return void V.danger("please create and activate a scenario first.");let e={},t=parseInt(this.getAttribute("index")),s=this.getAttribute("name"),n=this.getAttribute("port").split(",")[0].split("/")[0];console.log(t,s,n,"printing index");let l=this.querySelectorAll("input");for(let a=0;a<l.length;a++){let t=l[a],s=t.getAttribute("type"),r=t.getAttribute("key"),c=t.value;null==c&&(c=""),"submit"!=s&&("checkbox"==s?e[r]=t.checked:"list"==s?e[r]=c.split(","):t.hasAttribute("convert")?e[r]=Number(c):e[r]=c)}if(c){z("/localservices/"+s+"/"+n+"/configs","PUT",e,(function(s){a(1,r.configurations[t].configs=e,r),P.set(r),V.success("Configuration update successfull.")}))}else{z("/containers/"+s+"/"+n+"/configs","POST",e,(function(s){a(1,r.configurations[t].configs=e,r),P.set(r),V.success("Configuration update successfull.")}))}},function(){let e,t=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");for(let r=0;r<s.length;r++)r==t?(a(3,f=r),a(0,s[r].activated=!0,s),e=s[r]):a(0,s[r].activated=!1,s);U.set(s);for(let s of Object.keys(v))a(6,v[s]="",v);a(1,r={}),a(1,r.ref=e._id,r),a(1,r.name=e.name,r),a(1,r.configurations=[],r),P.set(r);let c="/api/db1/scenario_configurations/ref-"+e._id;B(c,(function(e){let t=JSON.parse(e.response);if(t.data&&t.data.length>0){a(1,r=t.data[0]);for(let e=0;e<u.length;e++){let t=e.toString();a(6,v[t]="",v);let s=u[e].short_id;for(let e=0;e<r.configurations.length;e++){s==r.configurations[e].container_info.short_id&&(a(6,v[t]="background-color: #acddb4;",v),e=r.configurations.length)}}P.set(r)}}))},function(){if(!g())return void V.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");a(6,v[e]="background-color: #acddb4;",v);let t=u[parseInt(e)],s={},n=t.name,l=t.ports.split(",")[0].split("/")[0];if(c){B("/localservices/"+n+"/"+l+"/configs",(function(e){let a=JSON.parse(e.response);a.data&&"data"in a.data&&(s=a.data.data),r.configurations.push({container_info:t,configs:s}),P.set(r)}))}else{B("/containers/"+n+"/"+l+"/configs",(function(e){let a=JSON.parse(e.response);a.data&&"data"in a.data&&(s=a.data.data),r.configurations.push({container_info:t,configs:s}),P.set(r)}))}},function(){if(!g())return void V.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");a(6,v[e]="",v);let t=u[parseInt(e)].short_id,s=-1;for(let a=0;a<r.configurations.length;a++)r.configurations[a].container_info.short_id==t&&(s=a,a=r.configurations.length);s>-1&&r.configurations.splice(s,1),P.set(r)},function(){let e=this.getAttribute("ref"),t=document.getElementById(e+"ID"),r=document.getElementById(e);if(""!=t.value&&""!=r.value){let e=!1,c=-1;for(let a=0;a<s.length;a++)s[a]._id==t.value&&(e=!0,c=a,a=s.length);if(!e)return void V.danger("scenario identifier does not exist.");let n="/api/db1/scenarios/"+t.value,l={name:r.value};z(n,"PUT",l,(function(e){a(0,s[c].name=r.value,s),U.set(s),V.success("Scenario renamed successfully.")}))}else V.danger("please provide scenario identifier and new name.")},function(){let e=!1,t=parseInt(this.parentElement.parentElement.parentElement.parentElement.getAttribute("index"));s[t].activated&&(e=!0);let c=s[t]._id;if(z("/api/db1/scenarios/"+c,"DELETE",{},(function(e){s.splice(t,1),U.set(s),V.success("Scenario deleted successfully.")})),z("/api/db1/scenario_configurations/ref-"+c,"DELETE",{},(function(e){V.success("Scenario configuration deleted successfully.")})),e){a(1,r={}),P.set(r);for(let e of Object.keys(v))a(6,v[e]="",v)}},function(){let e=this.getAttribute("ref");if(""!=e){let t=document.getElementById(e);if(""!=t.value){let e={name:t.value},a="/api/db1/scenarios";console.log("createNewScenario request with body:",e," and url:",a),z(a,"POST",e,(function(e){console.log(e,"response from createNewScenario"),s.push({_id:e.data,name:t.value,activated:!1}),U.set(s),V.success("New scenario created.")}))}else V.danger("please provide scenario name.")}}]}export default class extends e{constructor(e){super(),t(this,e,pe,de,a,{},[-1,-1])}}
