import{S as t,i as e,s,e as n,t as a,k as o,c as l,a as c,g as r,d as i,n as u,b as f,f as d,F as h,G as m,H as g,h as p,v,l as w,j as S,m as b,o as E,a6 as k,r as y,w as T,u as N,M as $,Q as O,N as D,L as I,R as B,z as x,B as H,a4 as j,a5 as V}from"../../chunks/vendor-c052606d.js";import{T as R}from"../../chunks/index-991a9a56.js";import{T as C,x as L,n as _,a as U,g as M}from"../../chunks/requests-531e903b.js";import{s as P,a as A,b as F}from"../../chunks/store-ce76cd4a.js";/* empty css                                                       */function J(t){let e,s,p,v,w,S,b,E,k,y;return{c(){e=n("div"),s=n("span"),p=a("×"),v=o(),w=n("img"),b=o(),E=n("div"),this.h()},l(t){e=l(t,"DIV",{id:!0,class:!0});var n=c(e);s=l(n,"SPAN",{class:!0});var a=c(s);p=r(a,"×"),a.forEach(i),v=u(n),w=l(n,"IMG",{class:!0,id:!0,src:!0}),b=u(n),E=l(n,"DIV",{id:!0,class:!0}),c(E).forEach(i),n.forEach(i),this.h()},h(){f(s,"class","close svelte-rk4oiy"),f(w,"class","modal-content svelte-rk4oiy"),f(w,"id","img01"),w.src!==(S="")&&f(w,"src",""),f(E,"id","caption"),f(E,"class","svelte-rk4oiy"),f(e,"id","myModal"),f(e,"class","modal svelte-rk4oiy")},m(t,n){d(t,e,n),h(e,s),h(s,p),h(e,v),h(e,w),h(e,b),h(e,E),k||(y=m(s,"click",W),k=!0)},p:g,i:g,o:g,d(t){t&&i(e),k=!1,y()}}}function W(){document.getElementById("myModal").style.display="none"}function q(t,e){var s=document.getElementById("myModal"),n=document.getElementById("img01"),a=document.getElementById("caption");s.style.display="block",n.src=t,a.innerHTML=e}function G(t,e,s){return[q]}class z extends t{constructor(t){super(),e(this,t,G,J,s,{changeImage:0})}get changeImage(){return q}}function Q(t,e,s){const n=t.slice();return n[32]=e[s],n[34]=s,n}function K(t,e,s){const n=t.slice();return n[35]=e[s],n[34]=s,n}function X(t,e,s){const n=t.slice();return n[35]=e[s],n[34]=s,n}function Y(t,e,s){const n=t.slice();return n[38]=e[s],n[39]=e,n[40]=s,n}function Z(t){let e,s,g,w,S,b,E,k,T,$,D,I,B,x,j,V,R,C,L,_,U,M,P,A,F,J,W,q,G,z,Q,K,X,Y,Z,et,st="configurations"in t[1]&&tt(t);return{c(){e=n("h4"),s=a("Scenario: "),g=a(t[3]),w=a(" Number of Containers: "),S=a(t[4]),b=a("."),E=o(),k=n("div"),T=n("div"),$=n("button"),D=a("Start Simulation"),I=o(),B=n("div"),x=n("button"),j=a("Stop Simulation"),V=o(),R=n("div"),C=n("button"),L=a("Reset WS Connection"),_=o(),U=n("hr"),M=o(),P=n("section"),A=n("h3"),F=a("Application Logs"),J=o(),W=n("button"),q=a("Clear Logs"),G=o(),st&&st.c(),z=o(),Q=n("br"),K=o(),X=n("hr"),this.h()},l(n){e=l(n,"H4",{});var a=c(e);s=r(a,"Scenario: "),g=r(a,t[3]),w=r(a," Number of Containers: "),S=r(a,t[4]),b=r(a,"."),a.forEach(i),E=u(n),k=l(n,"DIV",{class:!0});var o=c(k);T=l(o,"DIV",{class:!0});var f=c(T);$=l(f,"BUTTON",{class:!0});var d=c($);D=r(d,"Start Simulation"),d.forEach(i),f.forEach(i),I=u(o),B=l(o,"DIV",{class:!0});var h=c(B);x=l(h,"BUTTON",{class:!0});var m=c(x);j=r(m,"Stop Simulation"),m.forEach(i),h.forEach(i),V=u(o),R=l(o,"DIV",{class:!0});var p=c(R);C=l(p,"BUTTON",{class:!0});var v=c(C);L=r(v,"Reset WS Connection"),v.forEach(i),p.forEach(i),o.forEach(i),_=u(n),U=l(n,"HR",{class:!0}),M=u(n),P=l(n,"SECTION",{class:!0});var y=c(P);A=l(y,"H3",{});var N=c(A);F=r(N,"Application Logs"),N.forEach(i),y.forEach(i),J=u(n),W=l(n,"BUTTON",{class:!0});var O=c(W);q=r(O,"Clear Logs"),O.forEach(i),G=u(n),st&&st.l(n),z=u(n),Q=l(n,"BR",{}),K=u(n),X=l(n,"HR",{class:!0}),this.h()},h(){f($,"class","w3-col w3-input w3-border"),f(T,"class","w3-third"),f(x,"class","w3-col w3-input w3-border"),f(B,"class","w3-third"),f(C,"class","w3-col w3-input w3-border"),f(R,"class","w3-third"),f(k,"class","w3-row w3-section"),f(U,"class","svelte-drd2kv"),f(P,"class","page-headline"),f(W,"class","w3-col w3-input w3-border w3-button"),f(X,"class","svelte-drd2kv")},m(n,a){d(n,e,a),h(e,s),h(e,g),h(e,w),h(e,S),h(e,b),d(n,E,a),d(n,k,a),h(k,T),h(T,$),h($,D),h(k,I),h(k,B),h(B,x),h(x,j),h(k,V),h(k,R),h(R,C),h(C,L),d(n,_,a),d(n,U,a),d(n,M,a),d(n,P,a),h(P,A),h(A,F),d(n,J,a),d(n,W,a),h(W,q),d(n,G,a),st&&st.m(n,a),d(n,z,a),d(n,Q,a),d(n,K,a),d(n,X,a),Y=!0,Z||(et=[m($,"click",t[15]),m(x,"click",t[16]),m(C,"click",t[17]),m(W,"click",t[7])],Z=!0)},p(t,e){(!Y||8&e[0])&&p(g,t[3]),(!Y||16&e[0])&&p(S,t[4]),"configurations"in t[1]?st?(st.p(t,e),2&e[0]&&v(st,1)):(st=tt(t),st.c(),v(st,1),st.m(z.parentNode,z)):st&&(H(),y(st,1,1,(()=>{st=null})),N())},i(t){Y||(v(st),Y=!0)},o(t){y(st),Y=!1},d(t){t&&i(e),t&&i(E),t&&i(k),t&&i(_),t&&i(U),t&&i(M),t&&i(P),t&&i(J),t&&i(W),t&&i(G),st&&st.d(t),t&&i(z),t&&i(Q),t&&i(K),t&&i(X),Z=!1,O(et)}}}function tt(t){let e,s,n=t[1].configurations.length>0&&et(t);return{c(){n&&n.c(),e=w()},l(t){n&&n.l(t),e=w()},m(t,a){n&&n.m(t,a),d(t,e,a),s=!0},p(t,s){t[1].configurations.length>0?n?(n.p(t,s),2&s[0]&&v(n,1)):(n=et(t),n.c(),v(n,1),n.m(e.parentNode,e)):n&&(H(),y(n,1,1,(()=>{n=null})),N())},i(t){s||(v(n),s=!0)},o(t){y(n),s=!1},d(t){n&&n.d(t),t&&i(e)}}}function et(t){let e,s,n=t[1].configurations,a=[];for(let l=0;l<n.length;l+=1)a[l]=ot(Y(t,n,l));const o=t=>y(a[t],1,1,(()=>{a[t]=null}));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=w()},l(t){for(let e=0;e<a.length;e+=1)a[e].l(t);e=w()},m(t,n){for(let e=0;e<a.length;e+=1)a[e].m(t,n);d(t,e,n),s=!0},p(t,s){if(34&s[0]){let l;for(n=t[1].configurations,l=0;l<n.length;l+=1){const o=Y(t,n,l);a[l]?(a[l].p(o,s),v(a[l],1)):(a[l]=ot(o),a[l].c(),v(a[l],1),a[l].m(e.parentNode,e))}for(H(),l=n.length;l<a.length;l+=1)o(l);N()}},i(t){if(!s){for(let t=0;t<n.length;t+=1)v(a[t]);s=!0}},o(t){a=a.filter(Boolean);for(let e=0;e<a.length;e+=1)y(a[e]);s=!1},d(t){$(a,t),t&&i(e)}}}function st(t){let e,s,n=t[40].toString()in t[5],a=n&&nt(t);return{c(){a&&a.c(),e=w()},l(t){a&&a.l(t),e=w()},m(t,n){a&&a.m(t,n),d(t,e,n),s=!0},p(t,s){32&s[0]&&(n=t[40].toString()in t[5]),n?a?(a.p(t,s),32&s[0]&&v(a,1)):(a=nt(t),a.c(),v(a,1),a.m(e.parentNode,e)):a&&(H(),y(a,1,1,(()=>{a=null})),N())},i(t){s||(v(a),s=!0)},o(t){y(a),s=!1},d(t){a&&a.d(t),t&&i(e)}}}function nt(t){let e,s,n=t[5][t[40].toString()].length>0,a=n&&at(t);return{c(){a&&a.c(),e=w()},l(t){a&&a.l(t),e=w()},m(t,n){a&&a.m(t,n),d(t,e,n),s=!0},p(t,s){32&s[0]&&(n=t[5][t[40].toString()].length>0),n?a?(a.p(t,s),32&s[0]&&v(a,1)):(a=at(t),a.c(),v(a,1),a.m(e.parentNode,e)):a&&(H(),y(a,1,1,(()=>{a=null})),N())},i(t){s||(v(a),s=!0)},o(t){y(a),s=!1},d(t){a&&a.d(t),t&&i(e)}}}function at(t){let e,s,f,m,g,w,N=t[38].container_info.name+"";function $(e){t[18](e,t[40])}let O={title:t[38].container_info.name,headers:Object.keys(t[5][t[40].toString()][0])};return void 0!==t[5][t[40].toString()]&&(O.data=t[5][t[40].toString()]),m=new R({props:O}),j.push((()=>V(m,"data",$))),{c(){e=n("h5"),s=a(N),f=o(),S(m.$$.fragment)},l(t){e=l(t,"H5",{});var n=c(e);s=r(n,N),n.forEach(i),f=u(t),b(m.$$.fragment,t)},m(t,n){d(t,e,n),h(e,s),d(t,f,n),E(m,t,n),w=!0},p(e,n){t=e,(!w||2&n[0])&&N!==(N=t[38].container_info.name+"")&&p(s,N);const a={};2&n[0]&&(a.title=t[38].container_info.name),32&n[0]&&(a.headers=Object.keys(t[5][t[40].toString()][0])),!g&&32&n[0]&&(g=!0,a.data=t[5][t[40].toString()],k((()=>g=!1))),m.$set(a)},i(t){w||(v(m.$$.fragment,t),w=!0)},o(t){y(m.$$.fragment,t),w=!1},d(t){t&&i(e),t&&i(f),T(m,t)}}}function ot(t){let e,s,n=Object.keys(t[5]).length>0,a=n&&st(t);return{c(){a&&a.c(),e=w()},l(t){a&&a.l(t),e=w()},m(t,n){a&&a.m(t,n),d(t,e,n),s=!0},p(t,s){32&s[0]&&(n=Object.keys(t[5]).length>0),n?a?(a.p(t,s),32&s[0]&&v(a,1)):(a=st(t),a.c(),v(a,1),a.m(e.parentNode,e)):a&&(H(),y(a,1,1,(()=>{a=null})),N())},i(t){s||(v(a),s=!0)},o(t){y(a),s=!1},d(t){a&&a.d(t),t&&i(e)}}}function lt(t){let e,s,g,p,v,w,S,b,E,k,y,T,N,$,I,B,x,H,j,V,R,C,L,_=t[6].length>0&&ct(t);return{c(){e=n("div"),s=n("div"),g=n("button"),p=a("Start Simulation"),v=o(),w=n("hr"),S=o(),b=n("div"),E=n("h1"),k=n("b"),y=a("Edit Files"),T=o(),_&&_.c(),N=o(),$=n("hr"),I=o(),B=n("div"),x=n("div"),H=n("button"),j=a("Delete Files"),V=o(),R=n("hr"),this.h()},l(t){e=l(t,"DIV",{class:!0});var n=c(e);s=l(n,"DIV",{class:!0});var a=c(s);g=l(a,"BUTTON",{class:!0});var o=c(g);p=r(o,"Start Simulation"),o.forEach(i),a.forEach(i),n.forEach(i),v=u(t),w=l(t,"HR",{class:!0}),S=u(t),b=l(t,"DIV",{class:!0});var f=c(b);E=l(f,"H1",{class:!0,style:!0});var d=c(E);k=l(d,"B",{});var h=c(k);y=r(h,"Edit Files"),h.forEach(i),d.forEach(i),f.forEach(i),T=u(t),_&&_.l(t),N=u(t),$=l(t,"HR",{class:!0}),I=u(t),B=l(t,"DIV",{class:!0});var m=c(B);x=l(m,"DIV",{class:!0});var O=c(x);H=l(O,"BUTTON",{class:!0});var D=c(H);j=r(D,"Delete Files"),D.forEach(i),O.forEach(i),m.forEach(i),V=u(t),R=l(t,"HR",{class:!0}),this.h()},h(){f(g,"class","w3-col w3-input w3-border"),f(s,"class","w3-rest"),f(e,"class","w3-row w3-section"),f(w,"class","svelte-drd2kv"),f(E,"class","w3-text-yellow"),D(E,"text-shadow","1px 1px 0 #444"),f(b,"class","w3-panel w3-blue"),f($,"class","svelte-drd2kv"),f(H,"class","w3-col w3-input w3-border"),f(x,"class","w3-rest"),f(B,"class","w3-row w3-section"),f(R,"class","svelte-drd2kv")},m(n,a){d(n,e,a),h(e,s),h(s,g),h(g,p),d(n,v,a),d(n,w,a),d(n,S,a),d(n,b,a),h(b,E),h(E,k),h(k,y),d(n,T,a),_&&_.m(n,a),d(n,N,a),d(n,$,a),d(n,I,a),d(n,B,a),h(B,x),h(x,H),h(H,j),d(n,V,a),d(n,R,a),C||(L=[m(g,"click",t[10]),m(H,"click",t[12])],C=!0)},p(t,e){t[6].length>0?_?_.p(t,e):(_=ct(t),_.c(),_.m(N.parentNode,N)):_&&(_.d(1),_=null)},d(t){t&&i(e),t&&i(v),t&&i(w),t&&i(S),t&&i(b),t&&i(T),_&&_.d(t),t&&i(N),t&&i($),t&&i(I),t&&i(B),t&&i(V),t&&i(R),C=!1,O(L)}}}function ct(t){let e,s,a,r,m,g,p=Object.keys(t[6][0]),v=[];for(let n=0;n<p.length;n+=1)v[n]=rt(X(t,p,n));let w=t[6],S=[];for(let n=0;n<w.length;n+=1)S[n]=dt(Q(t,w,n));return{c(){e=n("div"),s=n("div"),a=n("table"),r=n("thead"),m=n("tr");for(let t=0;t<v.length;t+=1)v[t].c();g=o();for(let t=0;t<S.length;t+=1)S[t].c();this.h()},l(t){e=l(t,"DIV",{class:!0});var n=c(e);s=l(n,"DIV",{class:!0});var o=c(s);a=l(o,"TABLE",{class:!0,style:!0});var f=c(a);r=l(f,"THEAD",{});var d=c(r);m=l(d,"TR",{class:!0});var h=c(m);for(let e=0;e<v.length;e+=1)v[e].l(h);h.forEach(i),d.forEach(i),g=u(f);for(let e=0;e<S.length;e+=1)S[e].l(f);f.forEach(i),o.forEach(i),n.forEach(i),this.h()},h(){f(m,"class","w3-dark-grey"),f(a,"class","w3-table-all"),D(a,"width","100%"),f(s,"class","w3-responsive"),f(e,"class","w3-container")},m(t,n){d(t,e,n),h(e,s),h(s,a),h(a,r),h(r,m);for(let e=0;e<v.length;e+=1)v[e].m(m,null);h(a,g);for(let e=0;e<S.length;e+=1)S[e].m(a,null)},p(t,e){if(64&e[0]){let s;for(p=Object.keys(t[6][0]),s=0;s<p.length;s+=1){const n=X(t,p,s);v[s]?v[s].p(n,e):(v[s]=rt(n),v[s].c(),v[s].m(m,null))}for(;s<v.length;s+=1)v[s].d(1);v.length=p.length}if(8256&e[0]){let s;for(w=t[6],s=0;s<w.length;s+=1){const n=Q(t,w,s);S[s]?S[s].p(n,e):(S[s]=dt(n),S[s].c(),S[s].m(a,null))}for(;s<S.length;s+=1)S[s].d(1);S.length=w.length}},d(t){t&&i(e),$(v,t),$(S,t)}}}function rt(t){let e,s,o=t[35]+"";return{c(){e=n("th"),s=a(o)},l(t){e=l(t,"TH",{});var n=c(e);s=r(n,o),n.forEach(i)},m(t,n){d(t,e,n),h(e,s)},p(t,e){64&e[0]&&o!==(o=t[35]+"")&&p(s,o)},d(t){t&&i(e)}}}function it(t){let e,s,o=t[32][t[35]]+"";return{c(){e=n("td"),s=a(o)},l(t){e=l(t,"TD",{});var n=c(e);s=r(n,o),n.forEach(i)},m(t,n){d(t,e,n),h(e,s)},p(t,e){64&e[0]&&o!==(o=t[32][t[35]]+"")&&p(s,o)},d(t){t&&i(e)}}}function ut(t){let e,s,o,u,f=t[32][t[35]]+"";return{c(){e=n("td"),s=a(f)},l(t){e=l(t,"TD",{});var n=c(e);s=r(n,f),n.forEach(i)},m(n,a){d(n,e,a),h(e,s),o||(u=m(e,"click",t[13]),o=!0)},p(t,e){64&e[0]&&f!==(f=t[32][t[35]]+"")&&p(s,f)},d(t){t&&i(e),o=!1,u()}}}function ft(t){let e;function s(t,e){return"filename"==t[35]?ut:it}let n=s(t),a=n(t);return{c(){a.c(),e=w()},l(t){a.l(t),e=w()},m(t,s){a.m(t,s),d(t,e,s)},p(t,o){n===(n=s(t))&&a?a.p(t,o):(a.d(1),a=n(t),a&&(a.c(),a.m(e.parentNode,e)))},d(t){a.d(t),t&&i(e)}}}function dt(t){let e,s,a=Object.keys(t[6][0]),r=[];for(let n=0;n<a.length;n+=1)r[n]=ft(K(t,a,n));return{c(){e=n("tr");for(let t=0;t<r.length;t+=1)r[t].c();s=o()},l(t){e=l(t,"TR",{});var n=c(e);for(let e=0;e<r.length;e+=1)r[e].l(n);s=u(n),n.forEach(i)},m(t,n){d(t,e,n);for(let s=0;s<r.length;s+=1)r[s].m(e,null);h(e,s)},p(t,n){if(8256&n[0]){let o;for(a=Object.keys(t[6][0]),o=0;o<a.length;o+=1){const l=K(t,a,o);r[o]?r[o].p(l,n):(r[o]=ft(l),r[o].c(),r[o].m(e,s))}for(;o<r.length;o+=1)r[o].d(1);r.length=a.length}},d(t){t&&i(e),$(r,t)}}}function ht(t){let e,s,o,u,p,v;return{c(){e=n("div"),s=n("div"),o=n("button"),u=a("Start Simulation"),this.h()},l(t){e=l(t,"DIV",{class:!0});var n=c(e);s=l(n,"DIV",{class:!0});var a=c(s);o=l(a,"BUTTON",{class:!0});var f=c(o);u=r(f,"Start Simulation"),f.forEach(i),a.forEach(i),n.forEach(i),this.h()},h(){f(o,"class","w3-col w3-input w3-border"),f(s,"class","w3-rest"),f(e,"class","w3-row w3-section")},m(n,a){d(n,e,a),h(e,s),h(s,o),h(o,u),p||(v=m(o,"click",t[11]),p=!0)},p:g,d(t){t&&i(e),p=!1,v()}}}function mt(t){let e,s,m,g,p,w,k,$,O,B,x,j,V,R,L,_,U,M,P;s=new C({});g=new z({props:{}}),t[14](g);let A="Communication"==t[2]&&Z(t),F="Static"==t[2]&&lt(t),J="Driving Simulation"==t[2]&&ht(t);return{c(){e=o(),S(s.$$.fragment),m=o(),S(g.$$.fragment),p=o(),w=n("hr"),k=o(),$=n("div"),O=n("h1"),B=n("b"),x=a("Simulation"),j=o(),V=n("hr"),R=o(),A&&A.c(),L=o(),F&&F.c(),_=o(),J&&J.c(),U=o(),M=n("hr"),this.h()},l(t){I('[data-svelte="svelte-1smsifb"]',document.head).forEach(i),e=u(t),b(s.$$.fragment,t),m=u(t),b(g.$$.fragment,t),p=u(t),w=l(t,"HR",{class:!0}),k=u(t),$=l(t,"DIV",{class:!0});var n=c($);O=l(n,"H1",{class:!0,style:!0});var a=c(O);B=l(a,"B",{});var o=c(B);x=r(o,"Simulation"),o.forEach(i),a.forEach(i),n.forEach(i),j=u(t),V=l(t,"HR",{class:!0}),R=u(t),A&&A.l(t),L=u(t),F&&F.l(t),_=u(t),J&&J.l(t),U=u(t),M=l(t,"HR",{class:!0}),this.h()},h(){document.title="Simulation",f(w,"class","svelte-drd2kv"),f(O,"class","w3-text-yellow"),D(O,"text-shadow","1px 1px 0 #444"),f($,"class","w3-panel w3-blue"),f(V,"class","svelte-drd2kv"),f(M,"class","svelte-drd2kv")},m(t,n){d(t,e,n),E(s,t,n),d(t,m,n),E(g,t,n),d(t,p,n),d(t,w,n),d(t,k,n),d(t,$,n),h($,O),h(O,B),h(B,x),d(t,j,n),d(t,V,n),d(t,R,n),A&&A.m(t,n),d(t,L,n),F&&F.m(t,n),d(t,_,n),J&&J.m(t,n),d(t,U,n),d(t,M,n),P=!0},p(t,e){g.$set({}),"Communication"==t[2]?A?(A.p(t,e),4&e[0]&&v(A,1)):(A=Z(t),A.c(),v(A,1),A.m(L.parentNode,L)):A&&(H(),y(A,1,1,(()=>{A=null})),N()),"Static"==t[2]?F?F.p(t,e):(F=lt(t),F.c(),F.m(_.parentNode,_)):F&&(F.d(1),F=null),"Driving Simulation"==t[2]?J?J.p(t,e):(J=ht(t),J.c(),J.m(U.parentNode,U)):J&&(J.d(1),J=null)},i(t){P||(v(s.$$.fragment,t),v(g.$$.fragment,t),v(A),P=!0)},o(t){y(s.$$.fragment,t),y(g.$$.fragment,t),y(A),P=!1},d(n){n&&i(e),T(s,n),n&&i(m),t[14](null),T(g,n),n&&i(p),n&&i(w),n&&i(k),n&&i($),n&&i(j),n&&i(V),n&&i(R),A&&A.d(n),n&&i(L),F&&F.d(n),n&&i(_),J&&J.d(n),n&&i(U),n&&i(M)}}}function gt(t,e,s){let n,a=[],o={},l="";const c=P.subscribe((t=>{a=t})),r=A.subscribe((t=>{s(1,o=t)})),i=F.subscribe((t=>{s(2,l=t)}));let u=[],f=[];B((()=>{c(),r(),i();for(let t=0;t<u.length;t++)u[t].close();for(let t=0;t<f.length;t++)f[t].close()}));let d="Please create and select a scenario before starting the simulation.",h=!1,m=0,g=[],p={},v=[];function w(){for(const[t,e]of Object.entries(p))s(5,p[t]=[],p)}async function S(t){if(!h)return void _.danger("please create and activate a scenario first.");"start"==t&&w(),U("/simulation/comm","POST",{command:t,configs:o},(function(t){t.data&&(_.success("simulation started."),console.log("response of simulation",t.data))}))}function b(){for(var t=0;t<u.length;t++)ws=u[t],ws.close()}x((async()=>{let t="";for(let e=0;e<a.length;e++)a[e].activated&&(s(3,d=a[e].name),h=!0,t="/api/db1/scenario_configurations/ref-"+a[e]._id);!function(t,e){L(t,(function(t){let s=JSON.parse(t.response);s.data&&s.data.length>0&&(A.set(s.data[0]),e())}))}(t,(function(){if("Communication"==o.type){"configurations"in o&&s(4,m=o.configurations.length);for(var t=0;t<m;t++){s(5,p[t.toString()]=[],p);let e="ws://localhost:8000/simulation/comm/ws/"+t.toString(),n=new WebSocket(e);n.onopen=function(){window.console.log("Successfully connected to the echo websocket server...")},n.onmessage=function(t){let e=JSON.parse(t.data);console.log(e,"printing JSON now");let n=e.client_index,a=JSON.parse(e.data);"status"in a?g[n]=a.status:s(5,p[n]=[...p[n],a],p)},u.push(n)}}if("Static"==o.type){console.log("hello static sample");let t=new WebSocket("ws://localhost:8000/simulation/static/ws");t.onopen=function(){window.console.log("static simulation websocket")},t.onmessage=function(t){let e=JSON.parse(t.data);s(6,v=[...v,e])},f.push(t)}"Communication"==o.type&&console.log("hello driving scenario")}))}));return[n,o,l,d,m,p,v,w,S,b,function(){U("/simulation/static","POST",{configs:o},(function(t){t.data&&(_.success("simulation started."),console.log("response of simulation",t.data))}))},function(){U("/simulation/static","POST",{configs:o},(function(t){t.data&&(_.success("simulation started."),console.log("response of simulation",t.data))}))},function(){U("/simulation/static","DELETE",{configs:o},(function(t){t.data&&(_.success("Delete successful."),s(6,v=[]),console.log("response of simulation",t.data))}))},function(){console.log(this.innerText);let t=this.innerText;console.log("requesting:",t,configs),M("/simulation/static","POST",{configs:o,filename:t},(function(e){if(e){let s=new Blob([e.response],{type:"octet/stream"}),a=urlCreator.createObjectURL(s);n.changeImage(a,t)}}))},function(t){j[t?"unshift":"push"]((()=>{n=t,s(0,n)}))},()=>S("start"),()=>S("stop"),()=>b(),function(e,n){t.$$.not_equal(p[n.toString()],e)&&(p[n.toString()]=e,s(5,p))}]}export default class extends t{constructor(t){super(),e(this,t,gt,mt,s,{},[-1,-1])}}
