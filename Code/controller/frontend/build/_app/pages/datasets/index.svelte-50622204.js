import{S as a,i as e,s as t,e as l,t as s,k as n,c,a as r,g as o,d as i,n as h,b as d,N as f,f as p,F as v,G as w,h as E,Q as u,M as g,j as m,L as T,m as b,o as D,v as y,r as x,w as C,z as V,T as k}from"../../chunks/vendor-c052606d.js";import{T as I,x as R,g as S,a as B,n as F}from"../../chunks/requests-ecdf3b79.js";/* empty css                                                       */const{document:H}=k;function N(a,e,t){const l=a.slice();return l[7]=e[t],l[9]=t,l}function O(a,e,t){const l=a.slice();return l[10]=e[t],l[9]=t,l}function U(a,e,t){const l=a.slice();return l[12]=e[t],l[9]=t,l}function A(a){let e,t,w,E,u,m,T,b,D,y,x,C=a[1],V=[];for(let l=0;l<C.length;l+=1)V[l]=L(U(a,C,l));return{c(){e=l("div"),t=l("div"),w=l("table"),E=l("thead"),u=l("tr"),m=l("th"),T=s("Filename"),b=n(),D=l("th"),y=s("Actions"),x=n();for(let a=0;a<V.length;a+=1)V[a].c();this.h()},l(a){e=c(a,"DIV",{class:!0});var l=r(e);t=c(l,"DIV",{class:!0});var s=r(t);w=c(s,"TABLE",{class:!0,style:!0});var n=r(w);E=c(n,"THEAD",{});var d=r(E);u=c(d,"TR",{class:!0});var f=r(u);m=c(f,"TH",{class:!0});var p=r(m);T=o(p,"Filename"),p.forEach(i),b=h(f),D=c(f,"TH",{class:!0});var v=r(D);y=o(v,"Actions"),v.forEach(i),f.forEach(i),d.forEach(i),x=h(n);for(let e=0;e<V.length;e+=1)V[e].l(n);n.forEach(i),s.forEach(i),l.forEach(i),this.h()},h(){d(m,"class","w3-left-align"),d(D,"class","w3-right-align"),d(u,"class","w3-dark-grey"),d(w,"class","w3-table-all"),f(w,"width","100%"),d(t,"class","w3-responsive"),d(e,"class","w3-container")},m(a,l){p(a,e,l),v(e,t),v(t,w),v(w,E),v(E,u),v(u,m),v(m,T),v(u,b),v(u,D),v(D,y),v(w,x);for(let e=0;e<V.length;e+=1)V[e].m(w,null)},p(a,e){if(50&e){let t;for(C=a[1],t=0;t<C.length;t+=1){const l=U(a,C,t);V[t]?V[t].p(l,e):(V[t]=L(l),V[t].c(),V[t].m(w,null))}for(;t<V.length;t+=1)V[t].d(1);V.length=C.length}},d(a){a&&i(e),g(V,a)}}}function L(a){let e,t,f,g,m,T,b,D,y,x,C,V,k,I,R=a[12]+"";return{c(){e=l("tr"),t=l("td"),f=s(R),g=n(),m=l("td"),T=l("div"),b=l("button"),D=s("Edit"),y=n(),x=l("button"),C=s("Download"),V=n(),this.h()},l(a){e=c(a,"TR",{});var l=r(e);t=c(l,"TD",{class:!0});var s=r(t);f=o(s,R),s.forEach(i),g=h(l),m=c(l,"TD",{class:!0});var n=r(m);T=c(n,"DIV",{});var d=r(T);b=c(d,"BUTTON",{index:!0});var p=r(b);D=o(p,"Edit"),p.forEach(i),y=h(d),x=c(d,"BUTTON",{index:!0});var v=r(x);C=o(v,"Download"),v.forEach(i),d.forEach(i),n.forEach(i),V=h(l),l.forEach(i),this.h()},h(){d(t,"class","w3-left-align"),d(b,"index",a[9]),d(x,"index",a[9]),d(m,"class","w3-right-align")},m(l,s){p(l,e,s),v(e,t),v(t,f),v(e,g),v(e,m),v(m,T),v(T,b),v(b,D),v(T,y),v(T,x),v(x,C),v(e,V),k||(I=[w(b,"click",a[5]),w(x,"click",a[4])],k=!0)},p(a,e){2&e&&R!==(R=a[12]+"")&&E(f,R)},d(a){a&&i(e),k=!1,u(I)}}}function G(a){let e,t,w,E,u,m,T,b,D,y,x,C=a[2],V=[];for(let l=0;l<C.length;l+=1)V[l]=$(O(a,C,l));return{c(){e=l("div"),t=l("div"),w=l("table"),E=l("thead"),u=l("tr"),m=l("th"),T=s("Content"),b=n(),D=l("th"),y=s("Labels"),x=n();for(let a=0;a<V.length;a+=1)V[a].c();this.h()},l(a){e=c(a,"DIV",{class:!0});var l=r(e);t=c(l,"DIV",{class:!0});var s=r(t);w=c(s,"TABLE",{id:!0,class:!0,style:!0});var n=r(w);E=c(n,"THEAD",{});var d=r(E);u=c(d,"TR",{class:!0});var f=r(u);m=c(f,"TH",{class:!0});var p=r(m);T=o(p,"Content"),p.forEach(i),b=h(f),D=c(f,"TH",{class:!0});var v=r(D);y=o(v,"Labels"),v.forEach(i),f.forEach(i),d.forEach(i),x=h(n);for(let e=0;e<V.length;e+=1)V[e].l(n);n.forEach(i),s.forEach(i),l.forEach(i),this.h()},h(){d(m,"class","w3-left-align"),d(D,"class","w3-right-align"),d(u,"class","w3-dark-grey"),d(w,"id","editTable"),d(w,"class","w3-table-all"),f(w,"width","100%"),d(t,"class","w3-responsive"),d(e,"class","w3-container")},m(a,l){p(a,e,l),v(e,t),v(t,w),v(w,E),v(E,u),v(u,m),v(m,T),v(u,b),v(u,D),v(D,y),v(w,x);for(let e=0;e<V.length;e+=1)V[e].m(w,null)},p(a,e){if(4&e){let t;for(C=a[2],t=0;t<C.length;t+=1){const l=O(a,C,t);V[t]?V[t].p(l,e):(V[t]=$(l),V[t].c(),V[t].m(w,null))}for(;t<V.length;t+=1)V[t].d(1);V.length=C.length}},d(a){a&&i(e),g(V,a)}}}function $(a){let e,t,f,w,u,g,m,T,b=JSON.stringify(a[10],null,2)+"";return{c(){e=l("tr"),t=l("td"),f=s(b),w=n(),u=l("td"),g=l("div"),m=l("input"),T=n(),this.h()},l(a){e=c(a,"TR",{});var l=r(e);t=c(l,"TD",{class:!0});var s=r(t);f=o(s,b),s.forEach(i),w=h(l),u=c(l,"TD",{class:!0});var n=r(u);g=c(n,"DIV",{});var d=r(g);m=c(d,"INPUT",{class:!0,type:!0,checked:!0,index:!0}),d.forEach(i),n.forEach(i),T=h(l),l.forEach(i),this.h()},h(){d(t,"class","w3-left-align"),d(m,"class","w3-check"),d(m,"type","checkbox"),m.checked="",d(m,"index",a[9]),d(u,"class","w3-right-align")},m(a,l){p(a,e,l),v(e,t),v(t,f),v(e,w),v(e,u),v(u,g),v(g,m),v(e,T)},p(a,e){4&e&&b!==(b=JSON.stringify(a[10],null,2)+"")&&E(f,b)},d(a){a&&i(e)}}}function j(a){let e,t,w,E,u,m,T,b,D,y,x,C=a[0],V=[];for(let l=0;l<C.length;l+=1)V[l]=P(N(a,C,l));return{c(){e=l("div"),t=l("div"),w=l("table"),E=l("thead"),u=l("tr"),m=l("th"),T=s("Filename"),b=n(),D=l("th"),y=s("Actions"),x=n();for(let a=0;a<V.length;a+=1)V[a].c();this.h()},l(a){e=c(a,"DIV",{class:!0});var l=r(e);t=c(l,"DIV",{class:!0});var s=r(t);w=c(s,"TABLE",{class:!0,style:!0});var n=r(w);E=c(n,"THEAD",{});var d=r(E);u=c(d,"TR",{class:!0});var f=r(u);m=c(f,"TH",{class:!0});var p=r(m);T=o(p,"Filename"),p.forEach(i),b=h(f),D=c(f,"TH",{class:!0});var v=r(D);y=o(v,"Actions"),v.forEach(i),f.forEach(i),d.forEach(i),x=h(n);for(let e=0;e<V.length;e+=1)V[e].l(n);n.forEach(i),s.forEach(i),l.forEach(i),this.h()},h(){d(m,"class","w3-left-align"),d(D,"class","w3-right-align"),d(u,"class","w3-dark-grey"),d(w,"class","w3-table-all"),f(w,"width","100%"),d(t,"class","w3-responsive"),d(e,"class","w3-container")},m(a,l){p(a,e,l),v(e,t),v(t,w),v(w,E),v(E,u),v(u,m),v(m,T),v(u,b),v(u,D),v(D,y),v(w,x);for(let e=0;e<V.length;e+=1)V[e].m(w,null)},p(a,e){if(65&e){let t;for(C=a[0],t=0;t<C.length;t+=1){const l=N(a,C,t);V[t]?V[t].p(l,e):(V[t]=P(l),V[t].c(),V[t].m(w,null))}for(;t<V.length;t+=1)V[t].d(1);V.length=C.length}},d(a){a&&i(e),g(V,a)}}}function P(a){let e,t,f,u,g,m,T,b,D,y,x=a[7]+"";return{c(){e=l("tr"),t=l("td"),f=s(x),u=n(),g=l("td"),m=l("button"),T=s("Download"),b=n(),this.h()},l(a){e=c(a,"TR",{});var l=r(e);t=c(l,"TD",{class:!0});var s=r(t);f=o(s,x),s.forEach(i),u=h(l),g=c(l,"TD",{class:!0});var n=r(g);m=c(n,"BUTTON",{index:!0});var d=r(m);T=o(d,"Download"),d.forEach(i),n.forEach(i),b=h(l),l.forEach(i),this.h()},h(){d(t,"class","w3-left-align"),d(m,"index",a[9]),d(g,"class","w3-right-align")},m(l,s){p(l,e,s),v(e,t),v(t,f),v(e,u),v(e,g),v(g,m),v(m,T),v(e,b),D||(y=w(m,"click",a[6]),D=!0)},p(a,e){1&e&&x!==(x=a[7]+"")&&E(f,x)},d(a){a&&i(e),D=!1,y()}}}function J(a){let e,t,E,g,V,k,R,S,B,F,N,O,U,L,$,P,J,M,_,K,W,X,Y,Z,aa,ea,ta,la,sa,na,ca,ra,oa,ia,ha,da,fa,pa,va,wa,Ea,ua,ga,ma,Ta,ba,Da,ya,xa,Ca,Va,ka,Ia,Ra,Sa;t=new I({});let Ba=a[1].length>0&&A(a),Fa=a[2].length>0&&G(a),Ha=a[0].length>0&&j(a);return{c(){e=n(),m(t.$$.fragment),E=n(),g=l("div"),V=l("h1"),k=l("b"),R=s("Capfiles"),S=n(),Ba&&Ba.c(),B=n(),F=l("hr"),N=n(),O=l("div"),U=l("h1"),L=l("b"),$=s("Edit Capfile Content"),P=s('\n\non click on "Edit" in capfiles table, displays table with capfile content\n\n\n'),J=l("div"),M=l("div"),_=l("button"),K=s("Apply Filter"),W=n(),X=l("div"),Y=l("input"),Z=n(),aa=l("br"),ea=n(),Fa&&Fa.c(),ta=n(),la=l("br"),sa=n(),na=l("div"),ca=l("div"),ra=l("button"),oa=s("Convert to CSV and Store to GridFs"),ia=n(),ha=l("div"),da=l("button"),fa=s("Download Table as CSV"),pa=n(),va=l("hr"),wa=n(),Ea=l("div"),ua=l("h1"),ga=l("b"),ma=s("Gridfs Files (CSVs stored in GridFS)"),Ta=n(),ba=l("button"),Da=s("Reload GrifFS"),ya=n(),xa=l("hr"),Ca=n(),Ha&&Ha.c(),Va=n(),ka=l("hr"),this.h()},l(a){T('[data-svelte="svelte-qmgm2y"]',H.head).forEach(i),e=h(a),b(t.$$.fragment,a),E=h(a),g=c(a,"DIV",{class:!0});var l=r(g);V=c(l,"H1",{class:!0,style:!0});var s=r(V);k=c(s,"B",{});var n=r(k);R=o(n,"Capfiles"),n.forEach(i),s.forEach(i),l.forEach(i),S=h(a),Ba&&Ba.l(a),B=h(a),F=c(a,"HR",{class:!0}),N=h(a),O=c(a,"DIV",{class:!0});var d=r(O);U=c(d,"H1",{class:!0,style:!0});var f=r(U);L=c(f,"B",{});var p=r(L);$=o(p,"Edit Capfile Content"),p.forEach(i),f.forEach(i),d.forEach(i),P=o(a,'\n\non click on "Edit" in capfiles table, displays table with capfile content\n\n\n'),J=c(a,"DIV",{class:!0});var v=r(J);M=c(v,"DIV",{class:!0});var w=r(M);_=c(w,"BUTTON",{ref:!0,class:!0});var u=r(_);K=o(u,"Apply Filter"),u.forEach(i),w.forEach(i),W=h(v),X=c(v,"DIV",{class:!0});var m=r(X);Y=c(m,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),m.forEach(i),v.forEach(i),Z=h(a),aa=c(a,"BR",{}),ea=h(a),Fa&&Fa.l(a),ta=h(a),la=c(a,"BR",{}),sa=h(a),na=c(a,"DIV",{class:!0});var D=r(na);ca=c(D,"DIV",{class:!0});var y=r(ca);ra=c(y,"BUTTON",{class:!0});var x=r(ra);oa=o(x,"Convert to CSV and Store to GridFs"),x.forEach(i),y.forEach(i),ia=h(D),ha=c(D,"DIV",{class:!0});var C=r(ha);da=c(C,"BUTTON",{class:!0});var I=r(da);fa=o(I,"Download Table as CSV"),I.forEach(i),C.forEach(i),D.forEach(i),pa=h(a),va=c(a,"HR",{class:!0}),wa=h(a),Ea=c(a,"DIV",{class:!0});var A=r(Ea);ua=c(A,"H1",{class:!0,style:!0});var G=r(ua);ga=c(G,"B",{});var j=r(ga);ma=o(j,"Gridfs Files (CSVs stored in GridFS)"),j.forEach(i),G.forEach(i),A.forEach(i),Ta=h(a),ba=c(a,"BUTTON",{class:!0});var q=r(ba);Da=o(q,"Reload GrifFS"),q.forEach(i),ya=h(a),xa=c(a,"HR",{class:!0}),Ca=h(a),Ha&&Ha.l(a),Va=h(a),ka=c(a,"HR",{class:!0}),this.h()},h(){H.title="Database",d(V,"class","w3-text-yellow"),f(V,"text-shadow","1px 1px 0 #444"),d(g,"class","w3-panel w3-blue"),d(F,"class","svelte-lxonyp"),d(U,"class","w3-text-yellow"),f(U,"text-shadow","1px 1px 0 #444"),d(O,"class","w3-panel w3-blue"),d(_,"ref","filterTable"),d(_,"class","w3-col w3-input w3-border"),d(M,"class","w3-third"),d(Y,"id","filterTable"),d(Y,"class","w3-input w3-border"),d(Y,"name","name"),d(Y,"type","text"),d(Y,"placeholder","Filter String"),d(X,"class","w3-rest"),d(J,"class","w3-row w3-section"),d(ra,"class","w3-col w3-input w3-border"),d(ca,"class","w3-half"),d(da,"class","w3-col w3-input w3-border"),d(ha,"class","w3-half"),d(na,"class","w3-row w3-section"),d(va,"class","svelte-lxonyp"),d(ua,"class","w3-text-yellow"),f(ua,"text-shadow","1px 1px 0 #444"),d(Ea,"class","w3-panel w3-blue"),d(ba,"class","w3-col w3-input w3-border"),d(xa,"class","svelte-lxonyp"),d(ka,"class","svelte-lxonyp")},m(l,s){p(l,e,s),D(t,l,s),p(l,E,s),p(l,g,s),v(g,V),v(V,k),v(k,R),p(l,S,s),Ba&&Ba.m(l,s),p(l,B,s),p(l,F,s),p(l,N,s),p(l,O,s),v(O,U),v(U,L),v(L,$),p(l,P,s),p(l,J,s),v(J,M),v(M,_),v(_,K),v(J,W),v(J,X),v(X,Y),p(l,Z,s),p(l,aa,s),p(l,ea,s),Fa&&Fa.m(l,s),p(l,ta,s),p(l,la,s),p(l,sa,s),p(l,na,s),v(na,ca),v(ca,ra),v(ra,oa),v(na,ia),v(na,ha),v(ha,da),v(da,fa),p(l,pa,s),p(l,va,s),p(l,wa,s),p(l,Ea,s),v(Ea,ua),v(ua,ga),v(ga,ma),p(l,Ta,s),p(l,ba,s),v(ba,Da),p(l,ya,s),p(l,xa,s),p(l,Ca,s),Ha&&Ha.m(l,s),p(l,Va,s),p(l,ka,s),Ia=!0,Ra||(Sa=[w(_,"click",Q),w(ra,"click",q),w(da,"click",z),w(ba,"click",a[3])],Ra=!0)},p(a,[e]){a[1].length>0?Ba?Ba.p(a,e):(Ba=A(a),Ba.c(),Ba.m(B.parentNode,B)):Ba&&(Ba.d(1),Ba=null),a[2].length>0?Fa?Fa.p(a,e):(Fa=G(a),Fa.c(),Fa.m(ta.parentNode,ta)):Fa&&(Fa.d(1),Fa=null),a[0].length>0?Ha?Ha.p(a,e):(Ha=j(a),Ha.c(),Ha.m(Va.parentNode,Va)):Ha&&(Ha.d(1),Ha=null)},i(a){Ia||(y(t.$$.fragment,a),Ia=!0)},o(a){x(t.$$.fragment,a),Ia=!1},d(a){a&&i(e),C(t,a),a&&i(E),a&&i(g),a&&i(S),Ba&&Ba.d(a),a&&i(B),a&&i(F),a&&i(N),a&&i(O),a&&i(P),a&&i(J),a&&i(Z),a&&i(aa),a&&i(ea),Fa&&Fa.d(a),a&&i(ta),a&&i(la),a&&i(sa),a&&i(na),a&&i(pa),a&&i(va),a&&i(wa),a&&i(Ea),a&&i(Ta),a&&i(ba),a&&i(ya),a&&i(xa),a&&i(Ca),Ha&&Ha.d(a),a&&i(Va),a&&i(ka),Ra=!1,u(Sa)}}}function q(){}function z(){}function M(a,e){let t=document.createElement("a");document.body.appendChild(t),t.style="display: none";let l=window.URL.createObjectURL(a);t.href=l,t.download=e,t.click(),window.URL.revokeObjectURL(l)}function Q(){let a=document.getElementById("editTable");console.log(a)}function _(a,e,t){let l=[],s=[],n=[];function c(){R("/datasets/all",(function(a){let e=JSON.parse(a.response);e.data&&(F.success("Found data."),t(0,l=e.data),console.log("gridfsData",l))}))}return V((async()=>{c(),R("/capfile/all",(function(a){let e=JSON.parse(a.response);e.data&&(F.success("Found data."),t(1,s=e.data),console.log("capfileData",s))}))})),[l,s,n,c,function(){let a=this.parentElement.parentElement.parentElement.firstElementChild.innerText;S("/capfile/download","POST",{filepath:a},(function(a){M(new Blob([a.response],{type:"octet/stream"}),decodeURIComponent(a.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))}))},function(){let a=this.parentElement.parentElement.parentElement.firstElementChild.innerText;B("/capfile/edit","POST",{filepath:a},(function(a){a.data&&(t(2,n=a.data),console.log("editData:",n),F.success("Loading data successfull."))}))},function(){console.log(this.parentElement.parentElement.firstElementChild.innerText);let a=this.parentElement.parentElement.firstElementChild.innerText;S("/datasets/download","POST",{filename:a},(function(a){M(new Blob([a.response],{type:"octet/stream"}),decodeURIComponent(a.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))}))}]}export default class extends a{constructor(a){super(),e(this,a,_,J,t,{})}}