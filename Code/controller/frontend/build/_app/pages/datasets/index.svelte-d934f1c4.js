import{S as e,i as t,s as l,e as a,t as s,k as n,c,a as r,g as o,d as i,n as h,b as d,N as f,f as p,F as u,G as v,h as E,Q as w,M as g,j as m,L as T,m as b,o as y,v as x,r as D,w as C,z as B,T as I}from"../../chunks/vendor-c052606d.js";import{T as V,x as k,g as S,a as N,n as R}from"../../chunks/requests-ecdf3b79.js";/* empty css                                                       */const{document:F}=I;function O(e,t,l){const a=e.slice();return a[8]=t[l],a[10]=l,a}function H(e,t,l){const a=e.slice();return a[11]=t[l],a[10]=l,a}function U(e,t,l){const a=e.slice();return a[13]=t[l],a[10]=l,a}function A(e){let t,l,v,E,w,m,T,b,y,x,D,C=e[1],B=[];for(let a=0;a<C.length;a+=1)B[a]=L(U(e,C,a));return{c(){t=a("div"),l=a("div"),v=a("table"),E=a("thead"),w=a("tr"),m=a("th"),T=s("Filename"),b=n(),y=a("th"),x=s("Actions"),D=n();for(let e=0;e<B.length;e+=1)B[e].c();this.h()},l(e){t=c(e,"DIV",{class:!0});var a=r(t);l=c(a,"DIV",{class:!0});var s=r(l);v=c(s,"TABLE",{class:!0,style:!0});var n=r(v);E=c(n,"THEAD",{});var d=r(E);w=c(d,"TR",{class:!0});var f=r(w);m=c(f,"TH",{class:!0});var p=r(m);T=o(p,"Filename"),p.forEach(i),b=h(f),y=c(f,"TH",{class:!0});var u=r(y);x=o(u,"Actions"),u.forEach(i),f.forEach(i),d.forEach(i),D=h(n);for(let t=0;t<B.length;t+=1)B[t].l(n);n.forEach(i),s.forEach(i),a.forEach(i),this.h()},h(){d(m,"class","w3-left-align"),d(y,"class","w3-right-align"),d(w,"class","w3-dark-grey"),d(v,"class","w3-table-all"),f(v,"width","100%"),d(l,"class","w3-responsive"),d(t,"class","w3-container")},m(e,a){p(e,t,a),u(t,l),u(l,v),u(v,E),u(E,w),u(w,m),u(m,T),u(w,b),u(w,y),u(y,x),u(v,D);for(let t=0;t<B.length;t+=1)B[t].m(v,null)},p(e,t){if(50&t){let l;for(C=e[1],l=0;l<C.length;l+=1){const a=U(e,C,l);B[l]?B[l].p(a,t):(B[l]=L(a),B[l].c(),B[l].m(v,null))}for(;l<B.length;l+=1)B[l].d(1);B.length=C.length}},d(e){e&&i(t),g(B,e)}}}function L(e){let t,l,f,g,m,T,b,y,x,D,C,B,I,V,k=e[13]+"";return{c(){t=a("tr"),l=a("td"),f=s(k),g=n(),m=a("td"),T=a("div"),b=a("button"),y=s("Edit"),x=n(),D=a("button"),C=s("Download"),B=n(),this.h()},l(e){t=c(e,"TR",{});var a=r(t);l=c(a,"TD",{class:!0});var s=r(l);f=o(s,k),s.forEach(i),g=h(a),m=c(a,"TD",{class:!0});var n=r(m);T=c(n,"DIV",{});var d=r(T);b=c(d,"BUTTON",{index:!0});var p=r(b);y=o(p,"Edit"),p.forEach(i),x=h(d),D=c(d,"BUTTON",{index:!0});var u=r(D);C=o(u,"Download"),u.forEach(i),d.forEach(i),n.forEach(i),B=h(a),a.forEach(i),this.h()},h(){d(l,"class","w3-left-align"),d(b,"index",e[10]),d(D,"index",e[10]),d(m,"class","w3-right-align")},m(a,s){p(a,t,s),u(t,l),u(l,f),u(t,g),u(t,m),u(m,T),u(T,b),u(b,y),u(T,x),u(T,D),u(D,C),u(t,B),I||(V=[v(b,"click",e[5]),v(D,"click",e[4])],I=!0)},p(e,t){2&t&&k!==(k=e[13]+"")&&E(f,k)},d(e){e&&i(t),I=!1,w(V)}}}function j(e){let t,l,v,E,w,m,T,b,y,x,D,C,B=e[2],I=[];for(let a=0;a<B.length;a+=1)I[a]=G(H(e,B,a));return{c(){t=a("div"),l=a("div"),v=a("table"),E=a("thead"),w=a("tr"),m=a("th"),T=s("Content"),b=n(),y=a("th"),x=s("Labels"),D=n(),C=a("tbody");for(let e=0;e<I.length;e+=1)I[e].c();this.h()},l(e){t=c(e,"DIV",{class:!0});var a=r(t);l=c(a,"DIV",{class:!0});var s=r(l);v=c(s,"TABLE",{id:!0,class:!0,style:!0});var n=r(v);E=c(n,"THEAD",{});var d=r(E);w=c(d,"TR",{class:!0});var f=r(w);m=c(f,"TH",{class:!0});var p=r(m);T=o(p,"Content"),p.forEach(i),b=h(f),y=c(f,"TH",{class:!0});var u=r(y);x=o(u,"Labels"),u.forEach(i),f.forEach(i),d.forEach(i),D=h(n),C=c(n,"TBODY",{});var g=r(C);for(let t=0;t<I.length;t+=1)I[t].l(g);g.forEach(i),n.forEach(i),s.forEach(i),a.forEach(i),this.h()},h(){d(m,"class","w3-left-align"),d(y,"class","w3-right-align"),d(w,"class","w3-dark-grey"),d(v,"id","editTable"),d(v,"class","w3-table-all"),f(v,"width","100%"),d(l,"class","w3-responsive"),d(t,"class","w3-container")},m(e,a){p(e,t,a),u(t,l),u(l,v),u(v,E),u(E,w),u(w,m),u(m,T),u(w,b),u(w,y),u(y,x),u(v,D),u(v,C);for(let t=0;t<I.length;t+=1)I[t].m(C,null)},p(e,t){if(4&t){let l;for(B=e[2],l=0;l<B.length;l+=1){const a=H(e,B,l);I[l]?I[l].p(a,t):(I[l]=G(a),I[l].c(),I[l].m(C,null))}for(;l<I.length;l+=1)I[l].d(1);I.length=B.length}},d(e){e&&i(t),g(I,e)}}}function G(e){let t,l,f,v,w,g,m,T,b=JSON.stringify(e[11],null,2)+"";return{c(){t=a("tr"),l=a("td"),f=s(b),v=n(),w=a("td"),g=a("div"),m=a("input"),T=n(),this.h()},l(e){t=c(e,"TR",{});var a=r(t);l=c(a,"TD",{class:!0});var s=r(l);f=o(s,b),s.forEach(i),v=h(a),w=c(a,"TD",{class:!0});var n=r(w);g=c(n,"DIV",{});var d=r(g);m=c(d,"INPUT",{class:!0,type:!0,checked:!0,index:!0}),d.forEach(i),n.forEach(i),T=h(a),a.forEach(i),this.h()},h(){d(l,"class","w3-left-align"),d(m,"class","w3-check"),d(m,"type","checkbox"),m.checked="",d(m,"index",e[10]),d(w,"class","w3-right-align")},m(e,a){p(e,t,a),u(t,l),u(l,f),u(t,v),u(t,w),u(w,g),u(g,m),u(t,T)},p(e,t){4&t&&b!==(b=JSON.stringify(e[11],null,2)+"")&&E(f,b)},d(e){e&&i(t)}}}function $(e){let t,l,v,E,w,m,T,b,y,x,D,C=e[0],B=[];for(let a=0;a<C.length;a+=1)B[a]=P(O(e,C,a));return{c(){t=a("div"),l=a("div"),v=a("table"),E=a("thead"),w=a("tr"),m=a("th"),T=s("Filename"),b=n(),y=a("th"),x=s("Actions"),D=n();for(let e=0;e<B.length;e+=1)B[e].c();this.h()},l(e){t=c(e,"DIV",{class:!0});var a=r(t);l=c(a,"DIV",{class:!0});var s=r(l);v=c(s,"TABLE",{class:!0,style:!0});var n=r(v);E=c(n,"THEAD",{});var d=r(E);w=c(d,"TR",{class:!0});var f=r(w);m=c(f,"TH",{class:!0});var p=r(m);T=o(p,"Filename"),p.forEach(i),b=h(f),y=c(f,"TH",{class:!0});var u=r(y);x=o(u,"Actions"),u.forEach(i),f.forEach(i),d.forEach(i),D=h(n);for(let t=0;t<B.length;t+=1)B[t].l(n);n.forEach(i),s.forEach(i),a.forEach(i),this.h()},h(){d(m,"class","w3-left-align"),d(y,"class","w3-right-align"),d(w,"class","w3-dark-grey"),d(v,"class","w3-table-all"),f(v,"width","100%"),d(l,"class","w3-responsive"),d(t,"class","w3-container")},m(e,a){p(e,t,a),u(t,l),u(l,v),u(v,E),u(E,w),u(w,m),u(m,T),u(w,b),u(w,y),u(y,x),u(v,D);for(let t=0;t<B.length;t+=1)B[t].m(v,null)},p(e,t){if(129&t){let l;for(C=e[0],l=0;l<C.length;l+=1){const a=O(e,C,l);B[l]?B[l].p(a,t):(B[l]=P(a),B[l].c(),B[l].m(v,null))}for(;l<B.length;l+=1)B[l].d(1);B.length=C.length}},d(e){e&&i(t),g(B,e)}}}function P(e){let t,l,f,w,g,m,T,b,y,x,D=e[8]+"";return{c(){t=a("tr"),l=a("td"),f=s(D),w=n(),g=a("td"),m=a("button"),T=s("Download"),b=n(),this.h()},l(e){t=c(e,"TR",{});var a=r(t);l=c(a,"TD",{class:!0});var s=r(l);f=o(s,D),s.forEach(i),w=h(a),g=c(a,"TD",{class:!0});var n=r(g);m=c(n,"BUTTON",{index:!0});var d=r(m);T=o(d,"Download"),d.forEach(i),n.forEach(i),b=h(a),a.forEach(i),this.h()},h(){d(l,"class","w3-left-align"),d(m,"index",e[10]),d(g,"class","w3-right-align")},m(a,s){p(a,t,s),u(t,l),u(l,f),u(t,w),u(t,g),u(g,m),u(m,T),u(t,b),y||(x=v(m,"click",e[7]),y=!0)},p(e,t){1&t&&D!==(D=e[8]+"")&&E(f,D)},d(e){e&&i(t),y=!1,x()}}}function q(e){let t,l,E,g,B,I,k,S,N,R,O,H,U,L,G,P,q,z,Y,_,K,W,X,Z,ee,te,le,ae,se,ne,ce,re,oe,ie,he,de,fe,pe,ue,ve,Ee,we,ge,me,Te,be,ye,xe,De,Ce,Be,Ie,Ve,ke,Se,Ne,Re,Fe,Oe,He,Ue,Ae,Le,je;l=new V({});let Ge=e[1].length>0&&A(e),$e=e[2].length>0&&j(e),Pe=e[0].length>0&&$(e);return{c(){t=n(),m(l.$$.fragment),E=n(),g=a("div"),B=a("h1"),I=a("b"),k=s("Capfiles"),S=n(),Ge&&Ge.c(),N=n(),R=a("hr"),O=n(),H=a("div"),U=a("h1"),L=a("b"),G=s("Edit Capfile Content"),P=s('\n\non click on "Edit" in capfiles table, displays table with capfile content\n\n\n'),q=a("div"),z=a("div"),Y=a("button"),_=s("Apply Filter"),K=n(),W=a("div"),X=a("input"),Z=n(),ee=a("br"),te=n(),le=a("div"),ae=a("button"),se=s("Toggle All Labels"),ne=n(),ce=a("br"),re=n(),$e&&$e.c(),oe=n(),ie=a("br"),he=n(),de=a("div"),fe=a("div"),pe=a("input"),ue=n(),ve=a("div"),Ee=a("button"),we=s("Convert to CSV and Store to GridFs"),ge=n(),me=a("div"),Te=a("button"),be=s("Download Table as CSV"),ye=n(),xe=a("hr"),De=n(),Ce=a("div"),Be=a("h1"),Ie=a("b"),Ve=s("Gridfs Files (CSVs stored in GridFS)"),ke=n(),Se=a("button"),Ne=s("Reload GrifFS"),Re=n(),Fe=a("hr"),Oe=n(),Pe&&Pe.c(),He=n(),Ue=a("hr"),this.h()},l(e){T('[data-svelte="svelte-qmgm2y"]',F.head).forEach(i),t=h(e),b(l.$$.fragment,e),E=h(e),g=c(e,"DIV",{class:!0});var a=r(g);B=c(a,"H1",{class:!0,style:!0});var s=r(B);I=c(s,"B",{});var n=r(I);k=o(n,"Capfiles"),n.forEach(i),s.forEach(i),a.forEach(i),S=h(e),Ge&&Ge.l(e),N=h(e),R=c(e,"HR",{class:!0}),O=h(e),H=c(e,"DIV",{class:!0});var d=r(H);U=c(d,"H1",{class:!0,style:!0});var f=r(U);L=c(f,"B",{});var p=r(L);G=o(p,"Edit Capfile Content"),p.forEach(i),f.forEach(i),d.forEach(i),P=o(e,'\n\non click on "Edit" in capfiles table, displays table with capfile content\n\n\n'),q=c(e,"DIV",{class:!0});var u=r(q);z=c(u,"DIV",{class:!0});var v=r(z);Y=c(v,"BUTTON",{ref:!0,class:!0});var w=r(Y);_=o(w,"Apply Filter"),w.forEach(i),v.forEach(i),K=h(u),W=c(u,"DIV",{class:!0});var m=r(W);X=c(m,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),m.forEach(i),u.forEach(i),Z=h(e),ee=c(e,"BR",{}),te=h(e),le=c(e,"DIV",{class:!0});var y=r(le);ae=c(y,"BUTTON",{class:!0});var x=r(ae);se=o(x,"Toggle All Labels"),x.forEach(i),y.forEach(i),ne=h(e),ce=c(e,"BR",{}),re=h(e),$e&&$e.l(e),oe=h(e),ie=c(e,"BR",{}),he=h(e),de=c(e,"DIV",{class:!0});var D=r(de);fe=c(D,"DIV",{class:!0});var C=r(fe);pe=c(C,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),C.forEach(i),ue=h(D),ve=c(D,"DIV",{class:!0});var V=r(ve);Ee=c(V,"BUTTON",{class:!0});var A=r(Ee);we=o(A,"Convert to CSV and Store to GridFs"),A.forEach(i),V.forEach(i),ge=h(D),me=c(D,"DIV",{class:!0});var j=r(me);Te=c(j,"BUTTON",{class:!0});var $=r(Te);be=o($,"Download Table as CSV"),$.forEach(i),j.forEach(i),D.forEach(i),ye=h(e),xe=c(e,"HR",{class:!0}),De=h(e),Ce=c(e,"DIV",{class:!0});var J=r(Ce);Be=c(J,"H1",{class:!0,style:!0});var M=r(Be);Ie=c(M,"B",{});var Q=r(Ie);Ve=o(Q,"Gridfs Files (CSVs stored in GridFS)"),Q.forEach(i),M.forEach(i),J.forEach(i),ke=h(e),Se=c(e,"BUTTON",{class:!0});var Ae=r(Se);Ne=o(Ae,"Reload GrifFS"),Ae.forEach(i),Re=h(e),Fe=c(e,"HR",{class:!0}),Oe=h(e),Pe&&Pe.l(e),He=h(e),Ue=c(e,"HR",{class:!0}),this.h()},h(){F.title="Database",d(B,"class","w3-text-yellow"),f(B,"text-shadow","1px 1px 0 #444"),d(g,"class","w3-panel w3-blue"),d(R,"class","svelte-lxonyp"),d(U,"class","w3-text-yellow"),f(U,"text-shadow","1px 1px 0 #444"),d(H,"class","w3-panel w3-blue"),d(Y,"ref","filterTable"),d(Y,"class","w3-col w3-input w3-border"),d(z,"class","w3-third"),d(X,"id","filterTable"),d(X,"class","w3-input w3-border"),d(X,"name","name"),d(X,"type","text"),d(X,"placeholder","Filter String"),d(W,"class","w3-rest"),d(q,"class","w3-row w3-section"),d(ae,"class","w3-col w3-input w3-border"),d(le,"class","w3-row w3-section"),d(pe,"id","filenameCSV"),d(pe,"class","w3-input w3-border"),d(pe,"name","filename"),d(pe,"type","text"),d(pe,"placeholder","Filename"),d(fe,"class","w3-third"),d(Ee,"class","w3-col w3-input w3-border"),d(ve,"class","w3-third"),d(Te,"class","w3-col w3-input w3-border"),d(me,"class","w3-rest"),d(de,"class","w3-row w3-section"),d(xe,"class","svelte-lxonyp"),d(Be,"class","w3-text-yellow"),f(Be,"text-shadow","1px 1px 0 #444"),d(Ce,"class","w3-panel w3-blue"),d(Se,"class","w3-col w3-input w3-border"),d(Fe,"class","svelte-lxonyp"),d(Ue,"class","svelte-lxonyp")},m(a,s){p(a,t,s),y(l,a,s),p(a,E,s),p(a,g,s),u(g,B),u(B,I),u(I,k),p(a,S,s),Ge&&Ge.m(a,s),p(a,N,s),p(a,R,s),p(a,O,s),p(a,H,s),u(H,U),u(U,L),u(L,G),p(a,P,s),p(a,q,s),u(q,z),u(z,Y),u(Y,_),u(q,K),u(q,W),u(W,X),p(a,Z,s),p(a,ee,s),p(a,te,s),p(a,le,s),u(le,ae),u(ae,se),p(a,ne,s),p(a,ce,s),p(a,re,s),$e&&$e.m(a,s),p(a,oe,s),p(a,ie,s),p(a,he,s),p(a,de,s),u(de,fe),u(fe,pe),u(de,ue),u(de,ve),u(ve,Ee),u(Ee,we),u(de,ge),u(de,me),u(me,Te),u(Te,be),p(a,ye,s),p(a,xe,s),p(a,De,s),p(a,Ce,s),u(Ce,Be),u(Be,Ie),u(Ie,Ve),p(a,ke,s),p(a,Se,s),u(Se,Ne),p(a,Re,s),p(a,Fe,s),p(a,Oe,s),Pe&&Pe.m(a,s),p(a,He,s),p(a,Ue,s),Ae=!0,Le||(je=[v(Y,"click",M),v(ae,"click",Q),v(Ee,"click",J),v(Te,"click",e[6]),v(Se,"click",e[3])],Le=!0)},p(e,[t]){e[1].length>0?Ge?Ge.p(e,t):(Ge=A(e),Ge.c(),Ge.m(N.parentNode,N)):Ge&&(Ge.d(1),Ge=null),e[2].length>0?$e?$e.p(e,t):($e=j(e),$e.c(),$e.m(oe.parentNode,oe)):$e&&($e.d(1),$e=null),e[0].length>0?Pe?Pe.p(e,t):(Pe=$(e),Pe.c(),Pe.m(He.parentNode,He)):Pe&&(Pe.d(1),Pe=null)},i(e){Ae||(x(l.$$.fragment,e),Ae=!0)},o(e){D(l.$$.fragment,e),Ae=!1},d(e){e&&i(t),C(l,e),e&&i(E),e&&i(g),e&&i(S),Ge&&Ge.d(e),e&&i(N),e&&i(R),e&&i(O),e&&i(H),e&&i(P),e&&i(q),e&&i(Z),e&&i(ee),e&&i(te),e&&i(le),e&&i(ne),e&&i(ce),e&&i(re),$e&&$e.d(e),e&&i(oe),e&&i(ie),e&&i(he),e&&i(de),e&&i(ye),e&&i(xe),e&&i(De),e&&i(Ce),e&&i(ke),e&&i(Se),e&&i(Re),e&&i(Fe),e&&i(Oe),Pe&&Pe.d(e),e&&i(He),e&&i(Ue),Le=!1,w(je)}}}function J(){}function z(e,t){let l=document.createElement("a");document.body.appendChild(l),l.style="display: none";let a=window.URL.createObjectURL(e);l.href=a,l.download=t,l.click(),window.URL.revokeObjectURL(a)}function M(){let e=document.getElementById("editTable"),t=this.parentElement.nextElementSibling.firstElementChild.value,l=e.children[1].childNodes;for(let a=0;a<l.length;a++){l[a].style.display="none";let e=l[a].getElementsByTagName("td")[0];e&&e.innerText.toUpperCase().indexOf(t)>-1&&(l[a].style.display="")}}function Q(){let e=document.getElementById("editTable").children[1].childNodes;for(let t=0;t<e.length;t++)if("none"!=e[t].style.display){let l=e[t].getElementsByTagName("td")[1].firstElementChild.firstElementChild;l.checked=!l.checked}}function Y(e,t,l){let a=[],s=[],n=[];function c(){k("/datasets/all",(function(e){let t=JSON.parse(e.response);t.data&&(R.success("Found data."),l(0,a=t.data),console.log("gridfsData",a))}))}return B((async()=>{c(),k("/capfile/all",(function(e){let t=JSON.parse(e.response);t.data&&(R.success("Found data."),l(1,s=t.data),console.log("capfileData",s))}))})),[a,s,n,c,function(){let e=this.parentElement.parentElement.parentElement.firstElementChild.innerText;S("/capfile/download","POST",{filepath:e},(function(e){z(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))}))},function(){let e=this.parentElement.parentElement.parentElement.firstElementChild.innerText;N("/capfile/edit","POST",{filepath:e},(function(e){e.data&&(l(2,n=e.data),console.log("editData:",n),R.success("Loading data successfull."))}))},function(){let e=document.getElementById("filenameCSV").innerText;if(""==e)return"csv"!=e.split(".")[-1]?void R.danger("File ending must be .csv"):void R.danger("Please provide a filename with .csv ending");let t=document.getElementById("editTable"),l=[],a=[],s=t.querySelectorAll("thead th");for(let c=0;c<s.length;c++)a.push(s[c].innerText);l.push(a.join(";"));let n=t.querySelectorAll("tbody tr");for(let c=0;c<n.length;c++)if(a=[],"none"!=n[c].style.display){let e=n[c].getElementsByTagName("td");a.push(e[0].innerText),e[1].firstElementChild.firstElementChild.checked?a.push("True"):a.push("False"),l.push(a.join(";"))}z(new Blob([l.join("\n")],{type:"text/csv"}),e)},function(){console.log(this.parentElement.parentElement.firstElementChild.innerText);let e=this.parentElement.parentElement.firstElementChild.innerText;S("/datasets/download","POST",{filename:e},(function(e){z(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))}))}]}export default class extends e{constructor(e){super(),t(this,e,Y,q,l,{})}}
