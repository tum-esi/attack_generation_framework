import{S as e,i as a,s as t,e as s,t as l,k as c,c as n,a as r,g as o,d as i,n as h,b as f,f as u,F as d,l as v,M as p,N as g,G as m,O as E,h as w,P as b,j as y,L as x,m as T,o as k,v as S,r as I,w as D,Q as N,R as A,z as B,T as O,U as C}from"../../chunks/vendor-c052606d.js";/* empty css                                                       */import{T as H,x as z,n as _,a as V,m as U}from"../../chunks/requests-2b3ce117.js";import{s as P,a as R,t as L,b as j}from"../../chunks/store-ce76cd4a.js";const{document:M}=O;function $(e,a,t){const s=e.slice();return s[27]=a[t],s[29]=t,s}function J(e,a,t){const s=e.slice();return s[30]=a[t],s[29]=t,s}function q(e,a,t){const s=e.slice();return s[32]=a[t][0],s[33]=a[t][1],s}function F(e,a,t){const s=e.slice();return s[36]=a[t].short_id,s[37]=a[t].name,s[38]=a[t].ports,s[29]=t,s}function G(e,a,t){const s=e.slice();return s[40]=a[t],s[29]=t,s}function Q(e,a,t){const s=e.slice();return s[32]=a[t][0],s[33]=a[t][1],s}function K(e,a,t){const s=e.slice();return s[32]=a[t][0],s[33]=a[t][1],s}function W(e){let a,t,v,g,m,E,w,b,y,x,T,k,S,I,D,N=e[0],A=[];for(let s=0;s<N.length;s+=1)A[s]=ae(G(e,N,s));return{c(){a=s("table"),t=s("thead"),v=s("tr"),g=s("th"),m=l("ID"),E=c(),w=s("th"),b=l("Name"),y=c(),x=s("th"),T=l("Activated"),k=c(),S=s("th"),I=l("Actions"),D=c();for(let e=0;e<A.length;e+=1)A[e].c();this.h()},l(e){a=n(e,"TABLE",{class:!0});var s=r(a);t=n(s,"THEAD",{});var l=r(t);v=n(l,"TR",{class:!0});var c=r(v);g=n(c,"TH",{});var f=r(g);m=o(f,"ID"),f.forEach(i),E=h(c),w=n(c,"TH",{});var u=r(w);b=o(u,"Name"),u.forEach(i),y=h(c),x=n(c,"TH",{});var d=r(x);T=o(d,"Activated"),d.forEach(i),k=h(c),S=n(c,"TH",{});var p=r(S);I=o(p,"Actions"),p.forEach(i),c.forEach(i),l.forEach(i),D=h(s);for(let a=0;a<A.length;a+=1)A[a].l(s);s.forEach(i),this.h()},h(){f(v,"class","w3-dark-grey"),f(a,"class","w3-table-all w3-centered")},m(e,s){u(e,a,s),d(a,t),d(t,v),d(v,g),d(g,m),d(v,E),d(v,w),d(w,b),d(v,y),d(v,x),d(x,T),d(v,k),d(v,S),d(S,I),d(a,D);for(let t=0;t<A.length;t+=1)A[t].m(a,null)},p(e,t){if(34821&t[0]){let s;for(N=e[0],s=0;s<N.length;s+=1){const l=G(e,N,s);A[s]?A[s].p(l,t):(A[s]=ae(l),A[s].c(),A[s].m(a,null))}for(;s<A.length;s+=1)A[s].d(1);A.length=N.length}},d(e){e&&i(a),p(A,e)}}}function X(e){let a,t,v,p,g,E,w,y,x,T,k,S,I,D=[],A=new Map,B=Object.entries(e[40]);const O=e=>e[32];for(let s=0;s<B.length;s+=1){let a=Q(e,B,s),t=O(a);A.set(t,D[s]=Z(t,a))}return{c(){a=s("tr");for(let e=0;e<D.length;e+=1)D[e].c();t=c(),v=s("td"),p=s("div"),g=s("div"),E=s("button"),w=l("Activate"),y=c(),x=s("button"),T=l("Delete"),k=c(),this.h()},l(e){a=n(e,"TR",{index:!0});var s=r(a);for(let a=0;a<D.length;a+=1)D[a].l(s);t=h(s),v=n(s,"TD",{class:!0});var l=r(v);p=n(l,"DIV",{class:!0});var c=r(p);g=n(c,"DIV",{class:!0});var f=r(g);E=n(f,"BUTTON",{});var u=r(E);w=o(u,"Activate"),u.forEach(i),y=h(f),x=n(f,"BUTTON",{});var d=r(x);T=o(d,"Delete"),d.forEach(i),f.forEach(i),c.forEach(i),l.forEach(i),k=h(s),s.forEach(i),this.h()},h(){f(g,"class","w3-bar"),f(p,"class","w3-show-inline-block"),f(v,"class","svelte-llwuxz"),f(a,"index",e[29])},m(s,l){u(s,a,l);for(let e=0;e<D.length;e+=1)D[e].m(a,null);d(a,t),d(a,v),d(v,p),d(p,g),d(g,E),d(E,w),d(g,y),d(g,x),d(x,T),d(a,k),S||(I=[m(E,"click",e[11]),m(x,"click",e[15])],S=!0)},p(e,s){1&s[0]&&(B=Object.entries(e[40]),D=b(D,s,O,1,e,B,A,a,C,Z,t,Q))},d(e){e&&i(a);for(let a=0;a<D.length;a+=1)D[a].d();S=!1,N(I)}}}function Y(e){let a,t,v,p,E,w,y,x,T,k,S,I,D,A=[],B=new Map,O=Object.entries(e[40]);const H=e=>e[32];for(let s=0;s<O.length;s+=1){let a=K(e,O,s),t=H(a);B.set(t,A[s]=ee(t,a))}return{c(){a=s("tr");for(let e=0;e<A.length;e+=1)A[e].c();t=c(),v=s("td"),p=s("div"),E=s("div"),w=s("button"),y=l("Activate"),x=c(),T=s("button"),k=l("Delete"),S=c(),this.h()},l(e){a=n(e,"TR",{index:!0,style:!0});var s=r(a);for(let a=0;a<A.length;a+=1)A[a].l(s);t=h(s),v=n(s,"TD",{class:!0});var l=r(v);p=n(l,"DIV",{class:!0});var c=r(p);E=n(c,"DIV",{class:!0});var f=r(E);w=n(f,"BUTTON",{});var u=r(w);y=o(u,"Activate"),u.forEach(i),x=h(f),T=n(f,"BUTTON",{});var d=r(T);k=o(d,"Delete"),d.forEach(i),f.forEach(i),c.forEach(i),l.forEach(i),S=h(s),s.forEach(i),this.h()},h(){f(E,"class","w3-bar"),f(p,"class","w3-show-inline-block"),f(v,"class","svelte-llwuxz"),f(a,"index",e[29]),g(a,"background-color","#acddb4")},m(s,l){u(s,a,l);for(let e=0;e<A.length;e+=1)A[e].m(a,null);d(a,t),d(a,v),d(v,p),d(p,E),d(E,w),d(w,y),d(E,x),d(E,T),d(T,k),d(a,S),I||(D=[m(w,"click",e[11]),m(T,"click",e[15])],I=!0)},p(e,s){1&s[0]&&(O=Object.entries(e[40]),A=b(A,s,H,1,e,O,B,a,C,ee,t,K))},d(e){e&&i(a);for(let a=0;a<A.length;a+=1)A[a].d();I=!1,N(D)}}}function Z(e,a){let t,c,h=a[33]+"";return{key:e,first:null,c(){t=s("td"),c=l(h),this.h()},l(e){t=n(e,"TD",{class:!0});var a=r(t);c=o(a,h),a.forEach(i),this.h()},h(){f(t,"class","svelte-llwuxz"),this.first=t},m(e,a){u(e,t,a),d(t,c)},p(e,t){a=e,1&t[0]&&h!==(h=a[33]+"")&&w(c,h)},d(e){e&&i(t)}}}function ee(e,a){let t,c,h=a[33]+"";return{key:e,first:null,c(){t=s("td"),c=l(h),this.h()},l(e){t=n(e,"TD",{class:!0});var a=r(t);c=o(a,h),a.forEach(i),this.h()},h(){f(t,"class","svelte-llwuxz"),this.first=t},m(e,a){u(e,t,a),d(t,c)},p(e,t){a=e,1&t[0]&&h!==(h=a[33]+"")&&w(c,h)},d(e){e&&i(t)}}}function ae(e){let a;function t(e,a){return e[2]==e[29]||e[0][e[29]].activated?Y:X}let s=t(e),l=s(e);return{c(){l.c(),a=v()},l(e){l.l(e),a=v()},m(e,t){l.m(e,t),u(e,a,t)},p(e,c){s===(s=t(e))&&l?l.p(e,c):(l.d(1),l=s(e),l&&(l.c(),l.m(a.parentNode,a)))},d(e){l.d(e),e&&i(a)}}}function te(e){let a,t,v,g,m,E,w,b,y,x,T,k,S,I,D,N=e[4],A=[];for(let s=0;s<N.length;s+=1)A[s]=ce(F(e,N,s));return{c(){a=s("table"),t=s("thead"),v=s("tr"),g=s("th"),m=l("ShortID"),E=c(),w=s("th"),b=l("Name"),y=c(),x=s("th"),T=l("Ports"),k=c(),S=s("th"),I=l("Actions"),D=c();for(let e=0;e<A.length;e+=1)A[e].c();this.h()},l(e){a=n(e,"TABLE",{class:!0});var s=r(a);t=n(s,"THEAD",{});var l=r(t);v=n(l,"TR",{class:!0});var c=r(v);g=n(c,"TH",{});var f=r(g);m=o(f,"ShortID"),f.forEach(i),E=h(c),w=n(c,"TH",{});var u=r(w);b=o(u,"Name"),u.forEach(i),y=h(c),x=n(c,"TH",{});var d=r(x);T=o(d,"Ports"),d.forEach(i),k=h(c),S=n(c,"TH",{});var p=r(S);I=o(p,"Actions"),p.forEach(i),c.forEach(i),l.forEach(i),D=h(s);for(let a=0;a<A.length;a+=1)A[a].l(s);s.forEach(i),this.h()},h(){f(v,"class","w3-dark-grey"),f(a,"class","w3-table-all w3-centered")},m(e,s){u(e,a,s),d(a,t),d(t,v),d(v,g),d(g,m),d(v,E),d(v,w),d(w,b),d(v,y),d(v,x),d(x,T),d(v,k),d(v,S),d(S,I),d(a,D);for(let t=0;t<A.length;t+=1)A[t].m(a,null)},p(e,t){if(12336&t[0]){let s;for(N=e[4],s=0;s<N.length;s+=1){const l=F(e,N,s);A[s]?A[s].p(l,t):(A[s]=ce(l),A[s].c(),A[s].m(a,null))}for(;s<A.length;s+=1)A[s].d(1);A.length=N.length}},d(e){e&&i(a),p(A,e)}}}function se(e){let a,t,v,p,g,E,b,y,x,T,k,S,I,D,A,B,O,C,H,z,_,V=e[36]+"",U=e[37]+"",P=e[38]+"";return{c(){a=s("tr"),t=s("td"),v=l(V),p=c(),g=s("td"),E=l(U),b=c(),y=s("td"),x=l(P),T=c(),k=s("td"),S=s("div"),I=s("div"),D=s("button"),A=l("Activate"),B=c(),O=s("button"),C=l("Deactivate"),H=c(),this.h()},l(e){a=n(e,"TR",{index:!0});var s=r(a);t=n(s,"TD",{class:!0});var l=r(t);v=o(l,V),l.forEach(i),p=h(s),g=n(s,"TD",{class:!0});var c=r(g);E=o(c,U),c.forEach(i),b=h(s),y=n(s,"TD",{class:!0});var f=r(y);x=o(f,P),f.forEach(i),T=h(s),k=n(s,"TD",{class:!0});var u=r(k);S=n(u,"DIV",{class:!0});var d=r(S);I=n(d,"DIV",{class:!0});var m=r(I);D=n(m,"BUTTON",{});var w=r(D);A=o(w,"Activate"),w.forEach(i),B=h(m),O=n(m,"BUTTON",{});var N=r(O);C=o(N,"Deactivate"),N.forEach(i),m.forEach(i),d.forEach(i),u.forEach(i),H=h(s),s.forEach(i),this.h()},h(){f(t,"class","svelte-llwuxz"),f(g,"class","svelte-llwuxz"),f(y,"class","svelte-llwuxz"),f(I,"class","w3-bar"),f(S,"class","w3-show-inline-block"),f(k,"class","svelte-llwuxz"),f(a,"index",e[29])},m(s,l){u(s,a,l),d(a,t),d(t,v),d(a,p),d(a,g),d(g,E),d(a,b),d(a,y),d(y,x),d(a,T),d(a,k),d(k,S),d(S,I),d(I,D),d(D,A),d(I,B),d(I,O),d(O,C),d(a,H),z||(_=[m(D,"click",e[12]),m(O,"click",e[13])],z=!0)},p(e,a){16&a[0]&&V!==(V=e[36]+"")&&w(v,V),16&a[0]&&U!==(U=e[37]+"")&&w(E,U),16&a[0]&&P!==(P=e[38]+"")&&w(x,P)},d(e){e&&i(a),z=!1,N(_)}}}function le(e){let a,t,v,p,g,E,b,y,x,T,k,S,I,D,A,B,O,C,H,z,_,V,U=e[36]+"",P=e[37]+"",R=e[38]+"";return{c(){a=s("tr"),t=s("td"),v=l(U),p=c(),g=s("td"),E=l(P),b=c(),y=s("td"),x=l(R),T=c(),k=s("td"),S=s("div"),I=s("div"),D=s("button"),A=l("Activate"),B=c(),O=s("button"),C=l("Deactivate"),H=c(),this.h()},l(e){a=n(e,"TR",{index:!0,style:!0});var s=r(a);t=n(s,"TD",{class:!0});var l=r(t);v=o(l,U),l.forEach(i),p=h(s),g=n(s,"TD",{class:!0});var c=r(g);E=o(c,P),c.forEach(i),b=h(s),y=n(s,"TD",{class:!0});var f=r(y);x=o(f,R),f.forEach(i),T=h(s),k=n(s,"TD",{class:!0});var u=r(k);S=n(u,"DIV",{class:!0});var d=r(S);I=n(d,"DIV",{class:!0});var m=r(I);D=n(m,"BUTTON",{});var w=r(D);A=o(w,"Activate"),w.forEach(i),B=h(m),O=n(m,"BUTTON",{});var N=r(O);C=o(N,"Deactivate"),N.forEach(i),m.forEach(i),d.forEach(i),u.forEach(i),H=h(s),s.forEach(i),this.h()},h(){f(t,"class","svelte-llwuxz"),f(g,"class","svelte-llwuxz"),f(y,"class","svelte-llwuxz"),f(I,"class","w3-bar"),f(S,"class","w3-show-inline-block"),f(k,"class","svelte-llwuxz"),f(a,"index",e[29]),f(a,"style",z=e[5][e[29]])},m(s,l){u(s,a,l),d(a,t),d(t,v),d(a,p),d(a,g),d(g,E),d(a,b),d(a,y),d(y,x),d(a,T),d(a,k),d(k,S),d(S,I),d(I,D),d(D,A),d(I,B),d(I,O),d(O,C),d(a,H),_||(V=[m(D,"click",e[12]),m(O,"click",e[13])],_=!0)},p(e,t){16&t[0]&&U!==(U=e[36]+"")&&w(v,U),16&t[0]&&P!==(P=e[37]+"")&&w(E,P),16&t[0]&&R!==(R=e[38]+"")&&w(x,R),32&t[0]&&z!==(z=e[5][e[29]])&&f(a,"style",z)},d(e){e&&i(a),_=!1,N(V)}}}function ce(e){let a;function t(e,a){return e[29]in e[5]?le:se}let s=t(e),l=s(e);return{c(){l.c(),a=v()},l(e){l.l(e),a=v()},m(e,t){l.m(e,t),u(e,a,t)},p(e,c){s===(s=t(e))&&l?l.p(e,c):(l.d(1),l=s(e),l&&(l.c(),l.m(a.parentNode,a)))},d(e){l.d(e),e&&i(a)}}}function ne(e){let a,t=e[1].configurations.length>0&&re(e);return{c(){t&&t.c(),a=v()},l(e){t&&t.l(e),a=v()},m(e,s){t&&t.m(e,s),u(e,a,s)},p(e,s){e[1].configurations.length>0?t?t.p(e,s):(t=re(e),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},d(e){t&&t.d(e),e&&i(a)}}}function re(e){let a,t=e[1].configurations,s=[];for(let l=0;l<t.length;l+=1)s[l]=de(J(e,t,l));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();a=v()},l(e){for(let a=0;a<s.length;a+=1)s[a].l(e);a=v()},m(e,t){for(let a=0;a<s.length;a+=1)s[a].m(e,t);u(e,a,t)},p(e,l){if(1026&l[0]){let c;for(t=e[1].configurations,c=0;c<t.length;c+=1){const n=J(e,t,c);s[c]?s[c].p(n,l):(s[c]=de(n),s[c].c(),s[c].m(a.parentNode,a))}for(;c<s.length;c+=1)s[c].d(1);s.length=t.length}},d(e){p(s,e),e&&i(a)}}}function oe(e){let a,t,v,p,g,m,E,b=e[32]+"";return{c(){a=s("label"),t=s("b"),v=l(b),p=c(),g=s("input"),this.h()},l(e){a=n(e,"LABEL",{class:!0});var s=r(a);t=n(s,"B",{});var l=r(t);v=o(l,b),l.forEach(i),s.forEach(i),p=h(e),g=n(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(a,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","list"),f(g,"key",m=e[32]),g.value=E=e[33].join()},m(e,s){u(e,a,s),d(a,t),d(t,v),u(e,p,s),u(e,g,s)},p(e,a){2&a[0]&&b!==(b=e[32]+"")&&w(v,b),2&a[0]&&m!==(m=e[32])&&f(g,"key",m),2&a[0]&&E!==(E=e[33].join())&&(g.value=E)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function ie(e){let a,t,v,p,g,m,E,b=e[32]+"";return{c(){a=s("input"),p=c(),g=s("label"),m=s("b"),E=l(b),this.h()},l(e){a=n(e,"INPUT",{class:!0,type:!0,key:!0,checked:!0}),p=h(e),g=n(e,"LABEL",{class:!0});var t=r(g);m=n(t,"B",{});var s=r(m);E=o(s,b),s.forEach(i),t.forEach(i),this.h()},h(){f(a,"class","w3-check"),f(a,"type","checkbox"),f(a,"key",t=e[32]),a.checked=v=e[33],f(g,"class","")},m(e,t){u(e,a,t),u(e,p,t),u(e,g,t),d(g,m),d(m,E)},p(e,s){2&s[0]&&t!==(t=e[32])&&f(a,"key",t),2&s[0]&&v!==(v=e[33])&&(a.checked=v),2&s[0]&&b!==(b=e[32]+"")&&w(E,b)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function he(e){let a,t,v,p,g,m,E,b=e[32]+"";return{c(){a=s("label"),t=s("b"),v=l(b),p=c(),g=s("input"),this.h()},l(e){a=n(e,"LABEL",{class:!0});var s=r(a);t=n(s,"B",{});var l=r(t);v=o(l,b),l.forEach(i),s.forEach(i),p=h(e),g=n(e,"INPUT",{class:!0,type:!0,key:!0,value:!0}),this.h()},h(){f(a,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","string"),f(g,"key",m=e[32]),g.value=E=e[33]},m(e,s){u(e,a,s),d(a,t),d(t,v),u(e,p,s),u(e,g,s)},p(e,a){2&a[0]&&b!==(b=e[32]+"")&&w(v,b),2&a[0]&&m!==(m=e[32])&&f(g,"key",m),2&a[0]&&E!==(E=e[33])&&(g.value=E)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function fe(e){let a,t,v,p,g,m,E,b=e[32]+"";return{c(){a=s("label"),t=s("b"),v=l(b),p=c(),g=s("input"),this.h()},l(e){a=n(e,"LABEL",{class:!0});var s=r(a);t=n(s,"B",{});var l=r(t);v=o(l,b),l.forEach(i),s.forEach(i),p=h(e),g=n(e,"INPUT",{class:!0,type:!0,convert:!0,key:!0,value:!0}),this.h()},h(){f(a,"class",""),f(g,"class","w3-input w3-border"),f(g,"type","string"),f(g,"convert","required"),f(g,"key",m=e[32]),g.value=E=e[33]},m(e,s){u(e,a,s),d(a,t),d(t,v),u(e,p,s),u(e,g,s)},p(e,a){2&a[0]&&b!==(b=e[32]+"")&&w(v,b),2&a[0]&&m!==(m=e[32])&&f(g,"key",m),2&a[0]&&E!==(E=e[33])&&(g.value=E)},d(e){e&&i(a),e&&i(p),e&&i(g)}}}function ue(e,a){let t;function l(e,a){return"number"==typeof e[33]?fe:"string"==typeof e[33]?he:"boolean"==typeof e[33]?ie:"object"==typeof e[33]?oe:void 0}let c=l(a),o=c&&c(a);return{key:e,first:null,c(){t=s("p"),o&&o.c(),this.h()},l(e){t=n(e,"P",{});var a=r(t);o&&o.l(a),a.forEach(i),this.h()},h(){this.first=t},m(e,a){u(e,t,a),o&&o.m(t,null)},p(e,s){c===(c=l(a=e))&&o?o.p(a,s):(o&&o.d(1),o=c&&c(a),o&&(o.c(),o.m(t,null)))},d(e){e&&i(t),o&&o.d()}}}function de(e){let a,t,v,p,y,x,T,k,S,I,D,N,A,B,O,H,z,_,V,U,P,R,L=e[30].container_info.name+"",j=[],M=new Map,$=Object.entries(e[30].configs);const J=e=>e[32];for(let s=0;s<$.length;s+=1){let a=q(e,$,s),t=J(a);M.set(t,j[s]=ue(t,a))}return{c(){a=s("div"),t=s("div"),v=s("h2"),p=l(L),y=c(),x=s("p"),T=l("Description here from application configs"),k=c(),S=s("div"),I=s("form"),D=s("h5"),N=l("Update Form"),A=c();for(let e=0;e<j.length;e+=1)j[e].c();B=c(),O=s("p"),H=s("input"),V=c(),U=s("hr"),this.h()},l(e){a=n(e,"DIV",{class:!0});var s=r(a);t=n(s,"DIV",{class:!0});var l=r(t);v=n(l,"H2",{class:!0,style:!0});var c=r(v);p=o(c,L),c.forEach(i),y=h(l),x=n(l,"P",{});var f=r(x);T=o(f,"Description here from application configs"),f.forEach(i),l.forEach(i),k=h(s),S=n(s,"DIV",{class:!0});var u=r(S);I=n(u,"FORM",{name:!0,port:!0,index:!0,class:!0});var d=r(I);D=n(d,"H5",{class:!0,style:!0});var g=r(D);N=o(g,"Update Form"),g.forEach(i),A=h(d);for(let a=0;a<j.length;a+=1)j[a].l(d);B=h(d),O=n(d,"P",{});var m=r(O);H=n(m,"INPUT",{class:!0,type:!0,value:!0}),m.forEach(i),d.forEach(i),u.forEach(i),s.forEach(i),V=h(e),U=n(e,"HR",{class:!0}),this.h()},h(){f(v,"class","w3-text-orange"),g(v,"text-shadow","1px 1px 0 #444"),f(t,"class","w3-third w3-container w3-blue"),f(D,"class","w3-text-orange"),g(D,"text-shadow","1px 1px 0 #444"),f(H,"class","w3-blue"),f(H,"type","submit"),H.value="Update",f(I,"name",z=e[30].container_info.name),f(I,"port",_=e[30].container_info.ports),f(I,"index",e[29]),f(I,"class","w3-container"),f(S,"class","w3-twothird w3-container w3-gray"),f(a,"class","w3-row w3-border"),f(U,"class","svelte-llwuxz")},m(s,l){u(s,a,l),d(a,t),d(t,v),d(v,p),d(t,y),d(t,x),d(x,T),d(a,k),d(a,S),d(S,I),d(I,D),d(D,N),d(I,A);for(let e=0;e<j.length;e+=1)j[e].m(I,null);d(I,B),d(I,O),d(O,H),u(s,V,l),u(s,U,l),P||(R=m(I,"submit",E(e[10])),P=!0)},p(e,a){2&a[0]&&L!==(L=e[30].container_info.name+"")&&w(p,L),2&a[0]&&($=Object.entries(e[30].configs),j=b(j,a,J,1,e,$,M,I,C,ue,B,q)),2&a[0]&&z!==(z=e[30].container_info.name)&&f(I,"name",z),2&a[0]&&_!==(_=e[30].container_info.ports)&&f(I,"port",_)},d(e){e&&i(a);for(let a=0;a<j.length;a+=1)j[a].d();e&&i(V),e&&i(U),P=!1,R()}}}function ve(e){let a,t=e[6],s=[];for(let l=0;l<t.length;l+=1)s[l]=pe($(e,t,l));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();a=v()},l(e){for(let a=0;a<s.length;a+=1)s[a].l(e);a=v()},m(e,t){for(let a=0;a<s.length;a+=1)s[a].m(e,t);u(e,a,t)},p(e,l){if(64&l[0]){let c;for(t=e[6],c=0;c<t.length;c+=1){const n=$(e,t,c);s[c]?s[c].p(n,l):(s[c]=pe(n),s[c].c(),s[c].m(a.parentNode,a))}for(;c<s.length;c+=1)s[c].d(1);s.length=t.length}},d(e){p(s,e),e&&i(a)}}}function pe(e){let a,t,v,p,g,m,E,b=e[27]+"";return{c(){a=s("label"),t=l(b),v=c(),p=s("input"),g=c(),m=s("span"),E=c(),this.h()},l(e){a=n(e,"LABEL",{class:!0});var s=r(a);t=o(s,b),v=h(s),p=n(s,"INPUT",{type:!0,checked:!0,name:!0,class:!0}),g=h(s),m=n(s,"SPAN",{class:!0}),r(m).forEach(i),E=h(s),s.forEach(i),this.h()},h(){f(p,"type","radio"),p.checked="checked",f(p,"name","radio"),f(p,"class","svelte-llwuxz"),f(m,"class","checkmark svelte-llwuxz"),f(a,"class","container svelte-llwuxz")},m(e,s){u(e,a,s),d(a,t),d(a,v),d(a,p),d(a,g),d(a,m),d(a,E)},p(e,a){64&a[0]&&b!==(b=e[27]+"")&&w(t,b)},d(e){e&&i(a)}}}function ge(e){let a,t,v,p,E,w,b,A,B,O,C,z,_,V,U,P,R,L,j,$,J,q,F,G,Q,K,X,Y,Z,ee,ae,se,le,ce,re,oe,ie,he,fe,ue,de,pe,ge,Ee,we,be,ye,xe,Te,ke,Se,Ie,De,Ne,Ae,Be,Oe,Ce,He,ze,_e,Ve,Ue,Pe,Re,Le,je,Me,$e,Je,qe,Fe,Ge,Qe,Ke,We,Xe,Ye,Ze,ea,aa,ta,sa,la,ca,na,ra,oa,ia,ha,fa,ua,da,va,pa,ga,ma,Ea,wa,ba,ya,xa,Ta,ka,Sa,Ia,Da,Na,Aa,Ba,Oa,Ca,Ha,za,_a,Va,Ua,Pa,Ra,La,ja,Ma,$a,Ja,qa,Fa,Ga,Qa,Ka,Wa,Xa,Ya,Za,et,at,tt,st,lt,ct,nt,rt,ot,it,ht,ft,ut,dt,vt,pt,gt,mt,Et,wt,bt,yt,xt,Tt,kt,St,It,Dt,Nt,At,Bt,Ot,Ct,Ht,zt,_t,Vt,Ut,Pt,Rt,Lt,jt,Mt,$t,Jt,qt,Ft;t=new H({});let Gt=e[0].length>0&&W(e),Qt=e[4].length>0&&te(e),Kt="configurations"in e[1]&&ne(e),Wt=e[6].length>0&&ve(e);return{c(){a=c(),y(t.$$.fragment),v=c(),p=s("hr"),E=c(),w=s("div"),b=s("h1"),A=s("b"),B=l("Scenario Management"),O=c(),C=s("hr"),z=c(),_=s("section"),V=s("h3"),U=l("Select scenario"),P=c(),R=s("section"),Gt&&Gt.c(),L=c(),j=s("div"),$=s("div"),J=s("button"),q=l("Create Scenario"),F=c(),G=s("div"),Q=s("input"),K=c(),X=s("div"),Y=s("div"),Z=s("button"),ee=l("Rename Scenario"),ae=c(),se=s("div"),le=s("input"),ce=c(),re=s("div"),oe=s("input"),ie=c(),he=s("hr"),fe=c(),ue=s("div"),de=s("h1"),pe=s("b"),ge=l("Scenario Type"),Ee=c(),we=s("div"),be=s("div"),ye=s("a"),xe=s("div"),Te=l("Communication"),ke=c(),Se=s("a"),Ie=s("div"),De=l("Static"),Ne=c(),Ae=s("a"),Be=s("div"),Oe=l("Driving Simulation"),Ce=c(),He=s("div"),ze=s("hr"),_e=c(),Ve=s("div"),Ue=s("h1"),Pe=s("b"),Re=l("Configuration"),Le=c(),je=s("hr"),Me=c(),$e=s("section"),Je=s("h3"),qe=s("b"),Fe=l("Select containers"),Ge=c(),Qe=s("section"),Qt&&Qt.c(),Ke=c(),We=s("hr"),Xe=c(),Ye=s("section"),Ze=s("h3"),ea=s("b"),aa=l("Configure containers"),ta=c(),sa=s("section"),Kt&&Kt.c(),ca=c(),na=s("div"),ra=s("hr"),oa=c(),ia=s("div"),ha=s("h1"),fa=s("b"),ua=l("Configuration"),da=c(),va=s("hr"),pa=c(),ga=s("section"),ma=s("h3"),Ea=s("b"),wa=l("Select Static Datasets"),ba=c(),Wt&&Wt.c(),ya=c(),xa=s("hr"),Ta=c(),ka=s("section"),Sa=s("h3"),Ia=s("b"),Da=l("Select Attack"),Na=c(),Aa=s("label"),Ba=l("Image Blurring\n                "),Oa=s("input"),Ca=c(),Ha=s("span"),za=c(),_a=s("label"),Va=l("Blacking Images\n                "),Ua=s("input"),Pa=c(),Ra=s("span"),La=c(),ja=s("input"),Ma=c(),$a=s("hr"),Ja=c(),qa=s("section"),Fa=s("h3"),Ga=s("b"),Qa=l("Validate Dataset"),Ka=c(),Wa=s("input"),Xa=c(),Ya=s("label"),Za=s("b"),et=l("Algorithm1"),at=c(),tt=s("hr"),lt=c(),ct=s("div"),nt=s("hr"),rt=c(),ot=s("div"),it=s("h1"),ht=s("b"),ft=l("Configuration"),ut=c(),dt=s("hr"),vt=c(),pt=s("section"),gt=s("h3"),mt=s("b"),Et=l("Select Driving Path"),wt=c(),bt=s("hr"),yt=c(),xt=s("section"),Tt=s("h3"),kt=s("b"),St=l("Select Sensors"),It=c(),Dt=s("hr"),Nt=c(),At=s("section"),Bt=s("h3"),Ot=s("b"),Ct=l("Attack Configuration"),zt=c(),_t=s("hr"),Vt=c(),Ut=s("button"),Pt=l("Reset Configurations"),Rt=c(),Lt=s("button"),jt=l("Save Configurations"),Mt=c(),$t=s("hr"),this.h()},l(e){x('[data-svelte="svelte-101i1i0"]',M.head).forEach(i),a=h(e),T(t.$$.fragment,e),v=h(e),p=n(e,"HR",{class:!0}),E=h(e),w=n(e,"DIV",{class:!0});var s=r(w);b=n(s,"H1",{class:!0,style:!0});var l=r(b);A=n(l,"B",{});var c=r(A);B=o(c,"Scenario Management"),c.forEach(i),l.forEach(i),s.forEach(i),O=h(e),C=n(e,"HR",{class:!0}),z=h(e),_=n(e,"SECTION",{class:!0});var f=r(_);V=n(f,"H3",{});var u=r(V);U=o(u,"Select scenario"),u.forEach(i),f.forEach(i),P=h(e),R=n(e,"SECTION",{class:!0});var d=r(R);Gt&&Gt.l(d),L=h(d),j=n(d,"DIV",{class:!0});var g=r(j);$=n(g,"DIV",{class:!0});var m=r($);J=n(m,"BUTTON",{ref:!0,class:!0});var y=r(J);q=o(y,"Create Scenario"),y.forEach(i),m.forEach(i),F=h(g),G=n(g,"DIV",{class:!0});var k=r(G);Q=n(k,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),k.forEach(i),g.forEach(i),K=h(d),X=n(d,"DIV",{class:!0});var S=r(X);Y=n(S,"DIV",{class:!0});var I=r(Y);Z=n(I,"BUTTON",{ref:!0,class:!0});var D=r(Z);ee=o(D,"Rename Scenario"),D.forEach(i),I.forEach(i),ae=h(S),se=n(S,"DIV",{class:!0});var N=r(se);le=n(N,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),N.forEach(i),ce=h(S),re=n(S,"DIV",{class:!0});var H=r(re);oe=n(H,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),H.forEach(i),S.forEach(i),d.forEach(i),ie=h(e),he=n(e,"HR",{class:!0}),fe=h(e),ue=n(e,"DIV",{class:!0});var W=r(ue);de=n(W,"H1",{class:!0,style:!0});var te=r(de);pe=n(te,"B",{});var ne=r(pe);ge=o(ne,"Scenario Type"),ne.forEach(i),te.forEach(i),W.forEach(i),Ee=h(e),we=n(e,"DIV",{class:!0});var ve=r(we);be=n(ve,"DIV",{class:!0});var me=r(be);ye=n(me,"A",{href:!0});var la=r(ye);xe=n(la,"DIV",{class:!0});var st=r(xe);Te=o(st,"Communication"),st.forEach(i),la.forEach(i),ke=h(me),Se=n(me,"A",{href:!0});var Ht=r(Se);Ie=n(Ht,"DIV",{class:!0});var Jt=r(Ie);De=o(Jt,"Static"),Jt.forEach(i),Ht.forEach(i),Ne=h(me),Ae=n(me,"A",{href:!0});var qt=r(Ae);Be=n(qt,"DIV",{class:!0});var Ft=r(Be);Oe=o(Ft,"Driving Simulation"),Ft.forEach(i),qt.forEach(i),me.forEach(i),Ce=h(ve),He=n(ve,"DIV",{id:!0,class:!0,style:!0});var Xt=r(He);ze=n(Xt,"HR",{class:!0}),_e=h(Xt),Ve=n(Xt,"DIV",{class:!0});var Yt=r(Ve);Ue=n(Yt,"H1",{class:!0,style:!0});var Zt=r(Ue);Pe=n(Zt,"B",{});var es=r(Pe);Re=o(es,"Configuration"),es.forEach(i),Zt.forEach(i),Yt.forEach(i),Le=h(Xt),je=n(Xt,"HR",{class:!0}),Me=h(Xt),$e=n(Xt,"SECTION",{class:!0});var as=r($e);Je=n(as,"H3",{});var ts=r(Je);qe=n(ts,"B",{});var ss=r(qe);Fe=o(ss,"Select containers"),ss.forEach(i),ts.forEach(i),as.forEach(i),Ge=h(Xt),Qe=n(Xt,"SECTION",{class:!0});var ls=r(Qe);Qt&&Qt.l(ls),ls.forEach(i),Ke=h(Xt),We=n(Xt,"HR",{class:!0}),Xe=h(Xt),Ye=n(Xt,"SECTION",{class:!0});var cs=r(Ye);Ze=n(cs,"H3",{});var ns=r(Ze);ea=n(ns,"B",{});var rs=r(ea);aa=o(rs,"Configure containers"),rs.forEach(i),ns.forEach(i),cs.forEach(i),ta=h(Xt),sa=n(Xt,"SECTION",{class:!0});var os=r(sa);Kt&&Kt.l(os),os.forEach(i),Xt.forEach(i),ca=h(ve),na=n(ve,"DIV",{id:!0,class:!0,style:!0});var is=r(na);ra=n(is,"HR",{class:!0}),oa=h(is),ia=n(is,"DIV",{class:!0});var hs=r(ia);ha=n(hs,"H1",{class:!0,style:!0});var fs=r(ha);fa=n(fs,"B",{});var us=r(fa);ua=o(us,"Configuration"),us.forEach(i),fs.forEach(i),hs.forEach(i),da=h(is),va=n(is,"HR",{class:!0}),pa=h(is),ga=n(is,"SECTION",{class:!0});var ds=r(ga);ma=n(ds,"H3",{});var vs=r(ma);Ea=n(vs,"B",{});var ps=r(Ea);wa=o(ps,"Select Static Datasets"),ps.forEach(i),vs.forEach(i),ba=h(ds),Wt&&Wt.l(ds),ds.forEach(i),ya=h(is),xa=n(is,"HR",{class:!0}),Ta=h(is),ka=n(is,"SECTION",{class:!0});var gs=r(ka);Sa=n(gs,"H3",{});var ms=r(Sa);Ia=n(ms,"B",{});var Es=r(Ia);Da=o(Es,"Select Attack"),Es.forEach(i),ms.forEach(i),Na=h(gs),Aa=n(gs,"LABEL",{class:!0});var ws=r(Aa);Ba=o(ws,"Image Blurring\n                "),Oa=n(ws,"INPUT",{type:!0,checked:!0,name:!0,class:!0}),Ca=h(ws),Ha=n(ws,"SPAN",{class:!0}),r(Ha).forEach(i),ws.forEach(i),za=h(gs),_a=n(gs,"LABEL",{class:!0});var bs=r(_a);Va=o(bs,"Blacking Images\n                "),Ua=n(bs,"INPUT",{type:!0,checked:!0,name:!0,class:!0}),Pa=h(bs),Ra=n(bs,"SPAN",{class:!0}),r(Ra).forEach(i),bs.forEach(i),La=h(gs),ja=n(gs,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),gs.forEach(i),Ma=h(is),$a=n(is,"HR",{class:!0}),Ja=h(is),qa=n(is,"SECTION",{class:!0});var ys=r(qa);Fa=n(ys,"H3",{});var xs=r(Fa);Ga=n(xs,"B",{});var Ts=r(Ga);Qa=o(Ts,"Validate Dataset"),Ts.forEach(i),xs.forEach(i),Ka=h(ys),Wa=n(ys,"INPUT",{class:!0,type:!0,checked:!0}),Xa=h(ys),Ya=n(ys,"LABEL",{class:!0});var ks=r(Ya);Za=n(ks,"B",{});var Ss=r(Za);et=o(Ss,"Algorithm1"),Ss.forEach(i),ks.forEach(i),ys.forEach(i),at=h(is),tt=n(is,"HR",{class:!0}),is.forEach(i),lt=h(ve),ct=n(ve,"DIV",{id:!0,class:!0,style:!0});var Is=r(ct);nt=n(Is,"HR",{class:!0}),rt=h(Is),ot=n(Is,"DIV",{class:!0});var Ds=r(ot);it=n(Ds,"H1",{class:!0,style:!0});var Ns=r(it);ht=n(Ns,"B",{});var As=r(ht);ft=o(As,"Configuration"),As.forEach(i),Ns.forEach(i),Ds.forEach(i),ut=h(Is),dt=n(Is,"HR",{class:!0}),vt=h(Is),pt=n(Is,"SECTION",{class:!0});var Bs=r(pt);gt=n(Bs,"H3",{});var Os=r(gt);mt=n(Os,"B",{});var Cs=r(mt);Et=o(Cs,"Select Driving Path"),Cs.forEach(i),Os.forEach(i),Bs.forEach(i),wt=h(Is),bt=n(Is,"HR",{class:!0}),yt=h(Is),xt=n(Is,"SECTION",{class:!0});var Hs=r(xt);Tt=n(Hs,"H3",{});var zs=r(Tt);kt=n(zs,"B",{});var _s=r(kt);St=o(_s,"Select Sensors"),_s.forEach(i),zs.forEach(i),Hs.forEach(i),It=h(Is),Dt=n(Is,"HR",{class:!0}),Nt=h(Is),At=n(Is,"SECTION",{class:!0});var Vs=r(At);Bt=n(Vs,"H3",{});var Us=r(Bt);Ot=n(Us,"B",{});var Ps=r(Ot);Ct=o(Ps,"Attack Configuration"),Ps.forEach(i),Us.forEach(i),Vs.forEach(i),Is.forEach(i),ve.forEach(i),zt=h(e),_t=n(e,"HR",{class:!0}),Vt=h(e),Ut=n(e,"BUTTON",{class:!0});var Rs=r(Ut);Pt=o(Rs,"Reset Configurations"),Rs.forEach(i),Rt=h(e),Lt=n(e,"BUTTON",{class:!0});var Ls=r(Lt);jt=o(Ls,"Save Configurations"),Ls.forEach(i),Mt=h(e),$t=n(e,"HR",{class:!0}),this.h()},h(){M.title="Configuration and Scheduling",f(p,"class","svelte-llwuxz"),f(b,"class","w3-text-yellow"),g(b,"text-shadow","1px 1px 0 #444"),f(w,"class","w3-panel w3-blue"),f(C,"class","svelte-llwuxz"),f(_,"class","page-headline"),f(J,"ref","createNewScenario"),f(J,"class","w3-col w3-input w3-border"),f($,"class","w3-third"),f(Q,"id","createNewScenario"),f(Q,"class","w3-input w3-border"),f(Q,"name","name"),f(Q,"type","text"),f(Q,"placeholder","Scenario Name"),f(G,"class","w3-rest"),f(j,"class","w3-row w3-section"),f(Z,"ref","renameScenario"),f(Z,"class","w3-col w3-input w3-border"),f(Y,"class","w3-third"),f(le,"id","renameScenarioID"),f(le,"class","w3-input w3-border"),f(le,"name","id"),f(le,"type","text"),f(le,"placeholder","Scenario Identifier"),f(se,"class","w3-third"),f(oe,"id","renameScenario"),f(oe,"class","w3-input w3-border"),f(oe,"name","name"),f(oe,"type","text"),f(oe,"placeholder","Scenario Name"),f(re,"class","w3-rest"),f(X,"class","w3-row w3-section"),f(R,"class","w3-container"),f(he,"class","svelte-llwuxz"),f(de,"class","w3-text-yellow"),g(de,"text-shadow","1px 1px 0 #444"),f(ue,"class","w3-panel w3-blue"),f(xe,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(ye,"href","javascript:void(0)"),f(Ie,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(Se,"href","javascript:void(0)"),f(Be,"class","w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"),f(Ae,"href","javascript:void(0)"),f(be,"class","w3-row"),f(ze,"class","svelte-llwuxz"),f(Ue,"class","w3-text-yellow"),g(Ue,"text-shadow","1px 1px 0 #444"),f(Ve,"class","w3-panel w3-blue"),f(je,"class","svelte-llwuxz"),f($e,"class","page-headline"),f(Qe,"class","w3-container"),f(We,"class","svelte-llwuxz"),f(Ye,"class","page-headline"),f(sa,"class","w3-container"),f(He,"id","Communication"),f(He,"class","w3-container city"),f(He,"style",la=e[3].Communication),f(ra,"class","svelte-llwuxz"),f(ha,"class","w3-text-yellow"),g(ha,"text-shadow","1px 1px 0 #444"),f(ia,"class","w3-panel w3-blue"),f(va,"class","svelte-llwuxz"),f(ga,"class","page-headline"),f(xa,"class","svelte-llwuxz"),f(Oa,"type","radio"),Oa.checked="checked",f(Oa,"name","radio2"),f(Oa,"class","svelte-llwuxz"),f(Ha,"class","checkmark svelte-llwuxz"),f(Aa,"class","container svelte-llwuxz"),f(Ua,"type","radio"),Ua.checked="checked",f(Ua,"name","radio2"),f(Ua,"class","svelte-llwuxz"),f(Ra,"class","checkmark svelte-llwuxz"),f(_a,"class","container svelte-llwuxz"),f(ja,"id","numberImages"),f(ja,"class","w3-input w3-border"),f(ja,"name","numberImg"),f(ja,"type","text"),f(ja,"placeholder","Number of Images to Attack"),f(ka,"class","page-headline"),f($a,"class","svelte-llwuxz"),f(Wa,"class","w3-check"),f(Wa,"type","checkbox"),Wa.checked="",f(Ya,"class",""),f(qa,"class","page-headline"),f(tt,"class","svelte-llwuxz"),f(na,"id","Static"),f(na,"class","w3-container city"),f(na,"style",st=e[3].Static),f(nt,"class","svelte-llwuxz"),f(it,"class","w3-text-yellow"),g(it,"text-shadow","1px 1px 0 #444"),f(ot,"class","w3-panel w3-blue"),f(dt,"class","svelte-llwuxz"),f(pt,"class","page-headline"),f(bt,"class","svelte-llwuxz"),f(xt,"class","page-headline"),f(Dt,"class","svelte-llwuxz"),f(At,"class","page-headline"),f(ct,"id","Driving Simulation"),f(ct,"class","w3-container city"),f(ct,"style",Ht=e[3]["Driving Simulation"]),f(we,"class","w3-container"),f(_t,"class","svelte-llwuxz"),f(Ut,"class","w3-col w3-input w3-border w3-margin-bottom"),f(Lt,"class","w3-col w3-input w3-border w3-margin-top"),f($t,"class","svelte-llwuxz")},m(s,l){u(s,a,l),k(t,s,l),u(s,v,l),u(s,p,l),u(s,E,l),u(s,w,l),d(w,b),d(b,A),d(A,B),u(s,O,l),u(s,C,l),u(s,z,l),u(s,_,l),d(_,V),d(V,U),u(s,P,l),u(s,R,l),Gt&&Gt.m(R,null),d(R,L),d(R,j),d(j,$),d($,J),d(J,q),d(j,F),d(j,G),d(G,Q),d(R,K),d(R,X),d(X,Y),d(Y,Z),d(Z,ee),d(X,ae),d(X,se),d(se,le),d(X,ce),d(X,re),d(re,oe),u(s,ie,l),u(s,he,l),u(s,fe,l),u(s,ue,l),d(ue,de),d(de,pe),d(pe,ge),u(s,Ee,l),u(s,we,l),d(we,be),d(be,ye),d(ye,xe),d(xe,Te),d(be,ke),d(be,Se),d(Se,Ie),d(Ie,De),d(be,Ne),d(be,Ae),d(Ae,Be),d(Be,Oe),d(we,Ce),d(we,He),d(He,ze),d(He,_e),d(He,Ve),d(Ve,Ue),d(Ue,Pe),d(Pe,Re),d(He,Le),d(He,je),d(He,Me),d(He,$e),d($e,Je),d(Je,qe),d(qe,Fe),d(He,Ge),d(He,Qe),Qt&&Qt.m(Qe,null),d(He,Ke),d(He,We),d(He,Xe),d(He,Ye),d(Ye,Ze),d(Ze,ea),d(ea,aa),d(He,ta),d(He,sa),Kt&&Kt.m(sa,null),d(we,ca),d(we,na),d(na,ra),d(na,oa),d(na,ia),d(ia,ha),d(ha,fa),d(fa,ua),d(na,da),d(na,va),d(na,pa),d(na,ga),d(ga,ma),d(ma,Ea),d(Ea,wa),d(ga,ba),Wt&&Wt.m(ga,null),d(na,ya),d(na,xa),d(na,Ta),d(na,ka),d(ka,Sa),d(Sa,Ia),d(Ia,Da),d(ka,Na),d(ka,Aa),d(Aa,Ba),d(Aa,Oa),d(Aa,Ca),d(Aa,Ha),d(ka,za),d(ka,_a),d(_a,Va),d(_a,Ua),d(_a,Pa),d(_a,Ra),d(ka,La),d(ka,ja),d(na,Ma),d(na,$a),d(na,Ja),d(na,qa),d(qa,Fa),d(Fa,Ga),d(Ga,Qa),d(qa,Ka),d(qa,Wa),d(qa,Xa),d(qa,Ya),d(Ya,Za),d(Za,et),d(na,at),d(na,tt),d(we,lt),d(we,ct),d(ct,nt),d(ct,rt),d(ct,ot),d(ot,it),d(it,ht),d(ht,ft),d(ct,ut),d(ct,dt),d(ct,vt),d(ct,pt),d(pt,gt),d(gt,mt),d(mt,Et),d(ct,wt),d(ct,bt),d(ct,yt),d(ct,xt),d(xt,Tt),d(Tt,kt),d(kt,St),d(ct,It),d(ct,Dt),d(ct,Nt),d(ct,At),d(At,Bt),d(Bt,Ot),d(Ot,Ct),u(s,zt,l),u(s,_t,l),u(s,Vt,l),u(s,Ut,l),d(Ut,Pt),u(s,Rt,l),u(s,Lt,l),d(Lt,jt),u(s,Mt,l),u(s,$t,l),Jt=!0,qt||(Ft=[m(J,"click",e[16]),m(Z,"click",e[14]),m(xe,"click",e[7]),m(ye,"click",me),m(Ie,"click",e[7]),m(Se,"click",me),m(Be,"click",e[7]),m(Ae,"click",me),m(Ut,"click",e[8]),m(Lt,"click",e[9])],qt=!0)},p(e,a){e[0].length>0?Gt?Gt.p(e,a):(Gt=W(e),Gt.c(),Gt.m(R,L)):Gt&&(Gt.d(1),Gt=null),e[4].length>0?Qt?Qt.p(e,a):(Qt=te(e),Qt.c(),Qt.m(Qe,null)):Qt&&(Qt.d(1),Qt=null),"configurations"in e[1]?Kt?Kt.p(e,a):(Kt=ne(e),Kt.c(),Kt.m(sa,null)):Kt&&(Kt.d(1),Kt=null),(!Jt||8&a[0]&&la!==(la=e[3].Communication))&&f(He,"style",la),e[6].length>0?Wt?Wt.p(e,a):(Wt=ve(e),Wt.c(),Wt.m(ga,null)):Wt&&(Wt.d(1),Wt=null),(!Jt||8&a[0]&&st!==(st=e[3].Static))&&f(na,"style",st),(!Jt||8&a[0]&&Ht!==(Ht=e[3]["Driving Simulation"]))&&f(ct,"style",Ht)},i(e){Jt||(S(t.$$.fragment,e),Jt=!0)},o(e){I(t.$$.fragment,e),Jt=!1},d(e){e&&i(a),D(t,e),e&&i(v),e&&i(p),e&&i(E),e&&i(w),e&&i(O),e&&i(C),e&&i(z),e&&i(_),e&&i(P),e&&i(R),Gt&&Gt.d(),e&&i(ie),e&&i(he),e&&i(fe),e&&i(ue),e&&i(Ee),e&&i(we),Qt&&Qt.d(),Kt&&Kt.d(),Wt&&Wt.d(),e&&i(zt),e&&i(_t),e&&i(Vt),e&&i(Ut),e&&i(Rt),e&&i(Lt),e&&i(Mt),e&&i($t),qt=!1,N(Ft)}}}function me(){let e=this.firstChild.innerText;var a,t,s;for(console.log(this,"this"),t=document.getElementsByClassName("city"),a=0;a<t.length;a++)t[a].style.display="none";for(s=document.getElementsByClassName("tablink"),a=0;a<t.length;a++)s[a].className=s[a].className.replace(" w3-border-red","");document.getElementById(e).style.display="block",this.firstChild.className+=" w3-border-red"}function Ee(e,a,t){let s=[],l={},c=!1,n="";const r=P.subscribe((e=>{t(0,s=e)})),o=R.subscribe((e=>{t(1,l=e)})),i=L.subscribe((e=>{c=e})),h=j.subscribe((e=>{n=e}));let f;A((()=>{r(),o(),i(),h()}));let u={Communication:"display:none",Static:"display:none","Driving Simulation":"display:none"},d=[{short_id:"123",name:"DoS Attack",ports:"8010"},{short_id:"1243",name:"Replay Attack",ports:"8020"},{short_id:"122",name:"MitM",ports:"8030"}],v={},p=[];function g(){let e=!1;for(let a=0;a<s.length;a++)s[a].activated&&(e=!0);return e}return B((async()=>{t(3,u[n]="display:block",u),async function(e){c?z("/localservices",(function(a){let s=JSON.parse(a.response);s.data&&t(4,d=s.data),e()})):z("/containers",(function(a){let s=JSON.parse(a.response);s.data&&t(4,d=s.data),e()}))}((function(){if(s.length<1)z("/api/db1/scenarios",(function(e){let a=JSON.parse(e.response);if(a.data){for(let e=0;e<a.data.length;e++)a.data[e].activated=!1;P.set(a.data)}}));else if(Object.keys(l).length>0){j.set(l.type);for(var e=0;e<l.configurations.length;e++)for(var a=0;a<d.length;a++){let s=a.toString();d[a].short_id==l.configurations[e].container_info.short_id&&t(5,v[s]="background-color: #acddb4;",v)}}})),async function(){z("/staticfiles",(function(e){let a=JSON.parse(e.response);a.data&&(console.log(a.data),t(6,p=a.data))}))}()})),[s,l,f,u,d,v,p,async function(){j.set(this.innerText);for(let e in u)e==this.innerText?t(3,u[e]="display:block",u):t(3,u[e]="display:none",u)},async function(){if(!g())return void _.danger("please create and activate a scenario first.");let e=[];for(let a=0;a<l.configurations.length;a++){let t=l.configurations[a].container_info.name,s=l.configurations[a].container_info.ports.split(",")[0].split("/")[0],c=U("GET","/containers/"+t+"/"+s+"/configs");e.push(c)}Promise.allSettled(e).then((function(e){for(let a=0;a<e.length;a++)"fulfilled"==e[a].status&&t(1,l.configurations[a].configs=e[a].value.data.data,l);R.set(l)}))},async function(){if(console.log("saving scenario configurations"),!g())return void _.danger("please create and activate a scenario first.");let e="/api/db1/scenario_configurations",a="POST";"_id"in l&&(a="PUT",e="/api/db1/scenario_configurations/"+l._id),t(1,l.type=n,l),V(e,a,l,(function(e){console.log(e,"response from saveContainersConfig"),t(1,l._id=e.data,l),R.set(l),_.success("Configuration saved successfull.")}))},async function(){if(!g())return void _.danger("please create and activate a scenario first.");let e={},a=parseInt(this.getAttribute("index")),s=this.getAttribute("name"),n=this.getAttribute("port").split(",")[0].split("/")[0];console.log(a,s,n,"printing index");let r=this.querySelectorAll("input");for(let t=0;t<r.length;t++){let a=r[t],s=a.getAttribute("type"),l=a.getAttribute("key"),c=a.value;null==c&&(c=""),"submit"!=s&&("checkbox"==s?e[l]=a.checked:"list"==s?e[l]=c.split(","):a.hasAttribute("convert")?e[l]=Number(c):e[l]=c)}if(c){V("/localservices/"+s+"/"+n+"/configs","PUT",e,(function(s){t(1,l.configurations[a].configs=e,l),R.set(l),_.success("Configuration update successfull.")}))}else{V("/containers/"+s+"/"+n+"/configs","POST",e,(function(s){t(1,l.configurations[a].configs=e,l),R.set(l),_.success("Configuration update successfull.")}))}},function(){let e,a=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");for(let l=0;l<s.length;l++)l==a?(t(2,f=l),t(0,s[l].activated=!0,s),e=s[l]):t(0,s[l].activated=!1,s);P.set(s);for(let s of Object.keys(v))t(5,v[s]="",v);t(1,l={}),t(1,l.ref=e._id,l),t(1,l.name=e.name,l),t(1,l.configurations=[],l),R.set(l);let c="/api/db1/scenario_configurations/ref-"+e._id;z(c,(function(e){let a=JSON.parse(e.response);if(a.data&&a.data.length>0){t(1,l=a.data[0]),console.log("scenario_configurations:",l);for(let e=0;e<d.length;e++){let a=e.toString();t(5,v[a]="",v);let s=d[e].short_id;for(let e=0;e<l.configurations.length;e++){s==l.configurations[e].container_info.short_id&&(t(5,v[a]="background-color: #acddb4;",v),e=l.configurations.length)}}R.set(l)}}))},function(){if(!g())return void _.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");t(5,v[e]="background-color: #acddb4;",v);let a=d[parseInt(e)],s={},n=a.name,r=a.ports.split(",")[0].split("/")[0];if(c){z("/localservices/"+n+"/"+r+"/configs",(function(e){let t=JSON.parse(e.response);t.data&&"data"in t.data&&(s=t.data.data),l.configurations.push({container_info:a,configs:s}),R.set(l)}))}else{z("/containers/"+n+"/"+r+"/configs",(function(e){let t=JSON.parse(e.response);t.data&&"data"in t.data&&(s=t.data.data),l.configurations.push({container_info:a,configs:s}),R.set(l)}))}},function(){if(!g())return void _.danger("please create and activate a scenario first.");let e=this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");t(5,v[e]="",v);let a=d[parseInt(e)].short_id,s=-1;for(let t=0;t<l.configurations.length;t++)l.configurations[t].container_info.short_id==a&&(s=t,t=l.configurations.length);s>-1&&l.configurations.splice(s,1),R.set(l)},function(){let e=this.getAttribute("ref"),a=document.getElementById(e+"ID"),l=document.getElementById(e);if(""!=a.value&&""!=l.value){let e=!1,c=-1;for(let t=0;t<s.length;t++)s[t]._id==a.value&&(e=!0,c=t,t=s.length);if(!e)return void _.danger("scenario identifier does not exist.");let n="/api/db1/scenarios/"+a.value,r={name:l.value};V(n,"PUT",r,(function(e){t(0,s[c].name=l.value,s),P.set(s),_.success("Scenario renamed successfully.")}))}else _.danger("please provide scenario identifier and new name.")},function(){let e=!1,a=parseInt(this.parentElement.parentElement.parentElement.parentElement.getAttribute("index"));s[a].activated&&(e=!0);let c=s[a]._id;if(V("/api/db1/scenarios/"+c,"DELETE",{},(function(e){s.splice(a,1),P.set(s),_.success("Scenario deleted successfully.")})),V("/api/db1/scenario_configurations/ref-"+c,"DELETE",{},(function(e){_.success("Scenario configuration deleted successfully.")})),e){t(1,l={}),R.set(l);for(let e of Object.keys(v))t(5,v[e]="",v)}},function(){let e=this.getAttribute("ref");if(""!=e){let a=document.getElementById(e);if(""!=a.value){let e={name:a.value},t="/api/db1/scenarios";console.log("createNewScenario request with body:",e," and url:",t),V(t,"POST",e,(function(e){console.log(e,"response from createNewScenario"),s.push({_id:e.data,name:a.value,activated:!1}),P.set(s),_.success("New scenario created.")}))}else _.danger("please provide scenario name.")}}]}export default class extends e{constructor(e){super(),a(this,e,Ee,ge,t,{},[-1,-1])}}
