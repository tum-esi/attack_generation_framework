import{S as e,i as a,s as t,j as s,m as n,o,a5 as r,v as l,r as c,w as i,e as d,t as p,k as h,c as u,a as f,g as m,d as w,n as g,b as v,N as b,f as E,F as y,h as I,G as T,M as N,a6 as D,O as S,u as k,Q as O,z as B,a3 as $,a4 as P,B as C}from"../../chunks/vendor-5cf7a4b5.js";import{T as R,x,n as U,a as L}from"../../chunks/requests-f597ce78.js";import{T as V}from"../../chunks/index-222bcf94.js";function A(e,a,t){const s=e.slice();return s[43]=a[t],s[45]=t,s}function H(e,a,t){const s=e.slice();return s[46]=a[t],s[48]=t,s}function j(e,a,t){const s=e.slice();return s[46]=a[t],s[45]=t,s}function J(e){let a,t,d;function p(a){e[28](a)}let h={title:"Checkpoints",headers:Object.keys(e[2][0])};return void 0!==e[2]&&(h.data=e[2]),a=new V({props:h}),$.push((()=>P(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};4&s[0]&&(n.headers=Object.keys(e[2][0])),!t&&4&s[0]&&(t=!0,n.data=e[2],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function q(e){let a,t,d;function p(a){e[29](a)}let h={title:"Checkpoint Configurations",headers:Object.keys(e[3][0])};return void 0!==e[3]&&(h.data=e[3]),a=new V({props:h}),$.push((()=>P(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};8&s[0]&&(n.headers=Object.keys(e[3][0])),!t&&8&s[0]&&(t=!0,n.data=e[3],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function F(e){let a,t,d;function p(a){e[30](a)}let h={title:"Running Containers",headers:Object.keys(e[4][0])};return void 0!==e[4]&&(h.data=e[4]),a=new V({props:h}),$.push((()=>P(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};16&s[0]&&(n.headers=Object.keys(e[4][0])),!t&&16&s[0]&&(t=!0,n.data=e[4],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function M(e){let a,t,d;function p(a){e[31](a)}let h={title:"Images",headers:Object.keys(e[5][0])};return void 0!==e[5]&&(h.data=e[5]),a=new V({props:h}),$.push((()=>P(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};32&s[0]&&(n.headers=Object.keys(e[5][0])),!t&&32&s[0]&&(t=!0,n.data=e[5],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function _(e){let a,t,d;function p(a){e[32](a)}let h={title:"Snapshots",headers:Object.keys(e[0][0])};return void 0!==e[0]&&(h.data=e[0]),a=new V({props:h}),$.push((()=>P(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};1&s[0]&&(n.headers=Object.keys(e[0][0])),!t&&1&s[0]&&(t=!0,n.data=e[0],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function X(e){let a,t,d;function p(a){e[33](a)}let h={title:"Logfiles",headers:Object.keys(e[1][0])};return void 0!==e[1]&&(h.data=e[1]),a=new V({props:h}),$.push((()=>P(a,"data",p))),{c(){s(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){o(a,e,t),d=!0},p(e,s){const n={};2&s[0]&&(n.headers=Object.keys(e[1][0])),!t&&2&s[0]&&(t=!0,n.data=e[1],r((()=>t=!1))),a.$set(n)},i(e){d||(l(a.$$.fragment,e),d=!0)},o(e){c(a.$$.fragment,e),d=!1},d(e){i(a,e)}}}function z(e){let a,t,s,n,o,r,l,c,i,I=Object.keys(e[6][0]),T=[];for(let d=0;d<I.length;d+=1)T[d]=G(j(e,I,d));let D=e[6],S=[];for(let d=0;d<D.length;d+=1)S[d]=K(A(e,D,d));return{c(){a=d("div"),t=d("h5"),s=p("Single Data Samples (JSON)"),n=h(),o=d("div"),r=d("table"),l=d("thead"),c=d("tr");for(let e=0;e<T.length;e+=1)T[e].c();i=h();for(let e=0;e<S.length;e+=1)S[e].c();this.h()},l(e){a=u(e,"DIV",{class:!0});var d=f(a);t=u(d,"H5",{});var p=f(t);s=m(p,"Single Data Samples (JSON)"),p.forEach(w),n=g(d),o=u(d,"DIV",{class:!0});var h=f(o);r=u(h,"TABLE",{class:!0,style:!0});var v=f(r);l=u(v,"THEAD",{});var b=f(l);c=u(b,"TR",{class:!0});var E=f(c);for(let a=0;a<T.length;a+=1)T[a].l(E);E.forEach(w),b.forEach(w),i=g(v);for(let a=0;a<S.length;a+=1)S[a].l(v);v.forEach(w),h.forEach(w),d.forEach(w),this.h()},h(){v(c,"class","w3-dark-grey"),v(r,"class","w3-table-all"),b(r,"width","100%"),v(o,"class","w3-responsive"),v(a,"class","w3-container")},m(e,d){E(e,a,d),y(a,t),y(t,s),y(a,n),y(a,o),y(o,r),y(r,l),y(l,c);for(let a=0;a<T.length;a+=1)T[a].m(c,null);y(r,i);for(let a=0;a<S.length;a+=1)S[a].m(r,null)},p(e,a){if(64&a[0]){let t;for(I=Object.keys(e[6][0]),t=0;t<I.length;t+=1){const s=j(e,I,t);T[t]?T[t].p(s,a):(T[t]=G(s),T[t].c(),T[t].m(c,null))}for(;t<T.length;t+=1)T[t].d(1);T.length=I.length}if(67108928&a[0]){let t;for(D=e[6],t=0;t<D.length;t+=1){const s=A(e,D,t);S[t]?S[t].p(s,a):(S[t]=K(s),S[t].c(),S[t].m(r,null))}for(;t<S.length;t+=1)S[t].d(1);S.length=D.length}},d(e){e&&w(a),N(T,e),N(S,e)}}}function G(e){let a,t,s=e[46]+"";return{c(){a=d("th"),t=p(s)},l(e){a=u(e,"TH",{});var n=f(a);t=m(n,s),n.forEach(w)},m(e,s){E(e,a,s),y(a,t)},p(e,a){64&a[0]&&s!==(s=e[46]+"")&&I(t,s)},d(e){e&&w(a)}}}function Q(e){let a,t,s=e[43][e[46]]+"";return{c(){a=d("td"),t=p(s)},l(e){a=u(e,"TD",{});var n=f(a);t=m(n,s),n.forEach(w)},m(e,s){E(e,a,s),y(a,t)},p(e,a){64&a[0]&&s!==(s=e[43][e[46]]+"")&&I(t,s)},d(e){e&&w(a)}}}function K(e){let a,t,s,n,o=Object.keys(e[6][0]),r=[];for(let l=0;l<o.length;l+=1)r[l]=Q(H(e,o,l));return{c(){a=d("tr");for(let e=0;e<r.length;e+=1)r[e].c();t=h(),this.h()},l(e){a=u(e,"TR",{index:!0});var s=f(a);for(let a=0;a<r.length;a+=1)r[a].l(s);t=g(s),s.forEach(w),this.h()},h(){v(a,"index",e[45])},m(o,l){E(o,a,l);for(let e=0;e<r.length;e+=1)r[e].m(a,null);y(a,t),s||(n=T(a,"click",e[26]),s=!0)},p(e,s){if(64&s[0]){let n;for(o=Object.keys(e[6][0]),n=0;n<o.length;n+=1){const l=H(e,o,n);r[n]?r[n].p(l,s):(r[n]=Q(l),r[n].c(),r[n].m(a,t))}for(;n<r.length;n+=1)r[n].d(1);r.length=o.length}},d(e){e&&w(a),N(r,e),s=!1,n()}}}function W(e){let a,t,r,I,N,B,$,P,x,U,L,V,A,H,j,G,Q,K,W,Y,Z,ee,ae,te,se,ne,oe,re,le,ce,ie,de,pe,he,ue,fe,me,we,ge,ve,be,Ee,ye,Ie,Te,Ne,De,Se,ke,Oe,Be,$e,Pe,Ce,Re,xe,Ue,Le,Ve,Ae,He,je,Je,qe,Fe,Me,_e,Xe,ze,Ge,Qe,Ke,We,Ye,Ze,ea,aa,ta,sa,na,oa,ra,la,ca,ia,da,pa,ha,ua,fa,ma,wa,ga,va,ba,Ea,ya,Ia,Ta,Na,Da,Sa,ka,Oa,Ba,$a,Pa,Ca,Ra,xa,Ua,La,Va,Aa,Ha,ja,Ja,qa,Fa,Ma,_a,Xa,za,Ga,Qa,Ka,Wa,Ya,Za,et,at,tt,st,nt,ot,rt,lt,ct,it,dt,pt,ht,ut,ft,mt,wt,gt,vt,bt,Et,yt,It,Tt,Nt,Dt,St,kt,Ot,Bt,$t,Pt,Ct,Rt,xt,Ut,Lt,Vt,At,Ht,jt,Jt,qt,Ft,Mt,_t,Xt,zt,Gt,Qt,Kt,Wt,Yt,Zt,es,as,ts,ss,ns,os,rs,ls,cs,is,ds,ps,hs,us,fs,ms,ws,gs,vs,bs,Es,ys,Is,Ts,Ns,Ds,Ss,ks,Os,Bs,$s,Ps,Cs,Rs,xs,Us,Ls,Vs,As,Hs,js,Js,qs,Fs,Ms,_s,Xs,zs,Gs,Qs,Ks,Ws,Ys,Zs,en,an,tn,sn,nn,on,rn,ln,cn,dn,pn,hn,un,fn,mn,wn,gn,vn,bn,En,yn,In,Tn,Nn,Dn,Sn,kn,On,Bn,$n,Pn;a=new R({});let Cn=e[2].length>0&&J(e),Rn=e[3].length>0&&q(e),xn=e[4].length>0&&F(e),Un=e[5].length>0&&M(e),Ln=e[0].length>0&&_(e),Vn=e[1].length>0&&X(e),An=e[6].length>0&&z(e);return{c(){s(a.$$.fragment),t=h(),r=d("hr"),I=h(),N=d("div"),B=d("h1"),$=d("b"),P=p("Recovery Handlers"),x=h(),U=d("hr"),L=h(),V=d("h2"),A=p("Upload Checkpoint"),H=h(),j=d("form"),G=d("p"),Q=d("label"),K=d("b"),W=p("Image Repository-Version (e.g. ubuntu:latest, ubuntu:16.04)"),Y=h(),Z=d("input"),ee=h(),ae=d("p"),te=d("label"),se=d("b"),ne=p("Container Name"),oe=h(),re=d("input"),le=h(),ce=d("p"),ie=d("label"),de=d("b"),pe=p("Container Ports (8080:8080,443:443)"),he=h(),ue=d("input"),fe=h(),me=d("p"),we=d("label"),ge=d("b"),ve=p("Container Networks"),be=h(),Ee=d("input"),ye=h(),Ie=d("p"),Te=d("label"),Ne=d("b"),De=p("Container Volumes"),Se=h(),ke=d("input"),Oe=h(),Be=d("p"),$e=d("label"),Pe=d("b"),Ce=p("Container Privileged (yes, no)"),Re=h(),xe=d("input"),Ue=h(),Le=d("p"),Ve=d("label"),Ae=d("b"),He=p("File"),je=h(),Je=d("input"),qe=h(),Fe=d("p"),Me=d("input"),_e=h(),Xe=d("hr"),ze=h(),Ge=d("h2"),Qe=p("Monitoring"),Ke=h(),We=d("br"),Ye=h(),Ze=d("button"),ea=p("Reload all Tables"),aa=h(),ta=d("section"),sa=d("h3"),na=p("Available Checkpoints"),oa=h(),Cn&&Cn.c(),ra=h(),la=d("br"),ca=h(),ia=d("section"),da=d("h3"),pa=p("Checkpoint Configurations"),ha=h(),Rn&&Rn.c(),ua=h(),fa=d("br"),ma=h(),wa=d("section"),ga=d("h3"),va=p("Running Containers"),ba=h(),xn&&xn.c(),Ea=h(),ya=d("br"),Ia=h(),Ta=d("section"),Na=d("h3"),Da=p("Images"),Sa=h(),Un&&Un.c(),ka=h(),Oa=d("br"),Ba=h(),$a=d("section"),Pa=d("h3"),Ca=p("Snapshot Backups"),Ra=h(),Ln&&Ln.c(),xa=h(),Ua=d("hr"),La=h(),Va=d("h2"),Aa=p("Recovery Actions"),Ha=h(),ja=d("div"),Ja=d("div"),qa=d("button"),Fa=p("Snapshot Container ( create image )"),Ma=h(),_a=d("div"),Xa=d("input"),za=h(),Ga=d("div"),Qa=d("input"),Ka=h(),Wa=d("div"),Ya=d("div"),Za=d("button"),et=p("Export Snapshot ( image to .tar )"),at=h(),tt=d("div"),st=d("input"),nt=h(),ot=d("div"),rt=d("input"),lt=h(),ct=d("div"),it=d("div"),dt=d("button"),pt=p("Import Snapshot ( .tar to image )"),ht=h(),ut=d("div"),ft=d("input"),mt=h(),wt=d("div"),gt=d("input"),vt=h(),bt=d("div"),Et=d("div"),yt=d("button"),It=p("Backup Snapshot ( .tar to gridfs )"),Tt=h(),Nt=d("div"),Dt=d("input"),St=h(),kt=d("div"),Ot=d("div"),Bt=d("button"),$t=p("Download Snapshot Backup ( as .tar )"),Pt=h(),Ct=d("div"),Rt=d("input"),xt=h(),Ut=d("div"),Lt=d("div"),Vt=d("button"),At=p("Download Checkpoint/Snapshot ( as .tar )"),Ht=h(),jt=d("div"),Jt=d("input"),qt=h(),Ft=d("div"),Mt=d("div"),_t=d("button"),Xt=p("Recover Container ( load from .tar )"),zt=h(),Gt=d("div"),Qt=d("input"),Kt=h(),Wt=d("div"),Yt=d("input"),Zt=h(),es=d("hr"),as=h(),ts=d("h2"),ss=p("Log Files"),ns=h(),os=d("form"),rs=d("p"),ls=d("label"),cs=d("b"),is=p(".csv File"),ds=h(),ps=d("input"),hs=h(),us=d("p"),fs=d("input"),ms=h(),ws=d("br"),gs=h(),vs=d("div"),bs=d("div"),Es=d("button"),ys=p("Delete Logfile"),Is=h(),Ts=d("div"),Ns=d("input"),Ds=h(),Ss=d("div"),ks=d("div"),Os=d("button"),Bs=p("Download Logfile"),$s=h(),Ps=d("div"),Cs=d("input"),Rs=h(),xs=d("br"),Us=h(),Ls=d("section"),Vs=d("h3"),As=p("Available Logfiles"),Hs=h(),Vn&&Vn.c(),js=h(),Js=d("hr"),qs=h(),Fs=d("h2"),Ms=p("Data Recovery"),_s=h(),Xs=d("br"),zs=h(),Gs=d("button"),Qs=p("Reload Recovery Table"),Ks=h(),Ws=d("br"),Ys=h(),An&&An.c(),Zs=h(),en=d("br"),an=h(),tn=d("textarea"),sn=h(),nn=d("button"),on=p("Prettify"),rn=h(),ln=d("br"),cn=h(),dn=d("div"),pn=d("button"),hn=p("Create Data"),un=h(),fn=d("textarea"),mn=h(),wn=d("div"),gn=d("button"),vn=p("Update Data"),bn=h(),En=d("input"),yn=h(),In=d("textarea"),Tn=h(),Nn=d("div"),Dn=d("button"),Sn=p("Delete Data"),kn=h(),On=d("input"),this.h()},l(e){n(a.$$.fragment,e),t=g(e),r=u(e,"HR",{class:!0}),I=g(e),N=u(e,"DIV",{class:!0});var s=f(N);B=u(s,"H1",{class:!0,style:!0});var o=f(B);$=u(o,"B",{});var l=f($);P=m(l,"Recovery Handlers"),l.forEach(w),o.forEach(w),s.forEach(w),x=g(e),U=u(e,"HR",{class:!0}),L=g(e),V=u(e,"H2",{});var c=f(V);A=m(c,"Upload Checkpoint"),c.forEach(w),H=g(e),j=u(e,"FORM",{class:!0,enctype:!0});var i=f(j);G=u(i,"P",{});var d=f(G);Q=u(d,"LABEL",{});var p=f(Q);K=u(p,"B",{});var h=f(K);W=m(h,"Image Repository-Version (e.g. ubuntu:latest, ubuntu:16.04)"),h.forEach(w),p.forEach(w),Y=g(d),Z=u(d,"INPUT",{class:!0,name:!0,type:!0}),d.forEach(w),ee=g(i),ae=u(i,"P",{});var v=f(ae);te=u(v,"LABEL",{});var b=f(te);se=u(b,"B",{});var E=f(se);ne=m(E,"Container Name"),E.forEach(w),b.forEach(w),oe=g(v),re=u(v,"INPUT",{class:!0,name:!0,type:!0}),v.forEach(w),le=g(i),ce=u(i,"P",{});var y=f(ce);ie=u(y,"LABEL",{});var T=f(ie);de=u(T,"B",{});var D=f(de);pe=m(D,"Container Ports (8080:8080,443:443)"),D.forEach(w),T.forEach(w),he=g(y),ue=u(y,"INPUT",{class:!0,name:!0,type:!0}),y.forEach(w),fe=g(i),me=u(i,"P",{});var S=f(me);we=u(S,"LABEL",{});var k=f(we);ge=u(k,"B",{});var O=f(ge);ve=m(O,"Container Networks"),O.forEach(w),k.forEach(w),be=g(S),Ee=u(S,"INPUT",{class:!0,name:!0,type:!0}),S.forEach(w),ye=g(i),Ie=u(i,"P",{});var C=f(Ie);Te=u(C,"LABEL",{});var R=f(Te);Ne=u(R,"B",{});var J=f(Ne);De=m(J,"Container Volumes"),J.forEach(w),R.forEach(w),Se=g(C),ke=u(C,"INPUT",{class:!0,name:!0,type:!0}),C.forEach(w),Oe=g(i),Be=u(i,"P",{});var q=f(Be);$e=u(q,"LABEL",{});var F=f($e);Pe=u(F,"B",{});var M=f(Pe);Ce=m(M,"Container Privileged (yes, no)"),M.forEach(w),F.forEach(w),Re=g(q),xe=u(q,"INPUT",{class:!0,name:!0,type:!0}),q.forEach(w),Ue=g(i),Le=u(i,"P",{});var _=f(Le);Ve=u(_,"LABEL",{class:!0});var X=f(Ve);Ae=u(X,"B",{});var z=f(Ae);He=m(z,"File"),z.forEach(w),X.forEach(w),je=g(_),Je=u(_,"INPUT",{class:!0,type:!0,name:!0}),_.forEach(w),qe=g(i),Fe=u(i,"P",{});var Bn=f(Fe);Me=u(Bn,"INPUT",{class:!0,name:!0,type:!0,value:!0}),Bn.forEach(w),i.forEach(w),_e=g(e),Xe=u(e,"HR",{class:!0}),ze=g(e),Ge=u(e,"H2",{});var $n=f(Ge);Qe=m($n,"Monitoring"),$n.forEach(w),Ke=g(e),We=u(e,"BR",{}),Ye=g(e),Ze=u(e,"BUTTON",{class:!0});var Pn=f(Ze);ea=m(Pn,"Reload all Tables"),Pn.forEach(w),aa=g(e),ta=u(e,"SECTION",{class:!0});var Hn=f(ta);sa=u(Hn,"H3",{});var jn=f(sa);na=m(jn,"Available Checkpoints"),jn.forEach(w),Hn.forEach(w),oa=g(e),Cn&&Cn.l(e),ra=g(e),la=u(e,"BR",{}),ca=g(e),ia=u(e,"SECTION",{class:!0});var Jn=f(ia);da=u(Jn,"H3",{});var qn=f(da);pa=m(qn,"Checkpoint Configurations"),qn.forEach(w),Jn.forEach(w),ha=g(e),Rn&&Rn.l(e),ua=g(e),fa=u(e,"BR",{}),ma=g(e),wa=u(e,"SECTION",{class:!0});var Fn=f(wa);ga=u(Fn,"H3",{});var Mn=f(ga);va=m(Mn,"Running Containers"),Mn.forEach(w),Fn.forEach(w),ba=g(e),xn&&xn.l(e),Ea=g(e),ya=u(e,"BR",{}),Ia=g(e),Ta=u(e,"SECTION",{class:!0});var _n=f(Ta);Na=u(_n,"H3",{});var Xn=f(Na);Da=m(Xn,"Images"),Xn.forEach(w),_n.forEach(w),Sa=g(e),Un&&Un.l(e),ka=g(e),Oa=u(e,"BR",{}),Ba=g(e),$a=u(e,"SECTION",{class:!0});var zn=f($a);Pa=u(zn,"H3",{});var Gn=f(Pa);Ca=m(Gn,"Snapshot Backups"),Gn.forEach(w),zn.forEach(w),Ra=g(e),Ln&&Ln.l(e),xa=g(e),Ua=u(e,"HR",{class:!0}),La=g(e),Va=u(e,"H2",{});var Qn=f(Va);Aa=m(Qn,"Recovery Actions"),Qn.forEach(w),Ha=g(e),ja=u(e,"DIV",{class:!0});var Kn=f(ja);Ja=u(Kn,"DIV",{class:!0});var Wn=f(Ja);qa=u(Wn,"BUTTON",{class:!0});var Yn=f(qa);Fa=m(Yn,"Snapshot Container ( create image )"),Yn.forEach(w),Wn.forEach(w),Ma=g(Kn),_a=u(Kn,"DIV",{class:!0});var Zn=f(_a);Xa=u(Zn,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Zn.forEach(w),za=g(Kn),Ga=u(Kn,"DIV",{class:!0});var eo=f(Ga);Qa=u(eo,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),eo.forEach(w),Kn.forEach(w),Ka=g(e),Wa=u(e,"DIV",{class:!0});var ao=f(Wa);Ya=u(ao,"DIV",{class:!0});var to=f(Ya);Za=u(to,"BUTTON",{class:!0});var so=f(Za);et=m(so,"Export Snapshot ( image to .tar )"),so.forEach(w),to.forEach(w),at=g(ao),tt=u(ao,"DIV",{class:!0});var no=f(tt);st=u(no,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),no.forEach(w),nt=g(ao),ot=u(ao,"DIV",{class:!0});var oo=f(ot);rt=u(oo,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),oo.forEach(w),ao.forEach(w),lt=g(e),ct=u(e,"DIV",{class:!0});var ro=f(ct);it=u(ro,"DIV",{class:!0});var lo=f(it);dt=u(lo,"BUTTON",{class:!0});var co=f(dt);pt=m(co,"Import Snapshot ( .tar to image )"),co.forEach(w),lo.forEach(w),ht=g(ro),ut=u(ro,"DIV",{class:!0});var io=f(ut);ft=u(io,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),io.forEach(w),mt=g(ro),wt=u(ro,"DIV",{class:!0});var po=f(wt);gt=u(po,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),po.forEach(w),ro.forEach(w),vt=g(e),bt=u(e,"DIV",{class:!0});var ho=f(bt);Et=u(ho,"DIV",{class:!0});var uo=f(Et);yt=u(uo,"BUTTON",{class:!0});var fo=f(yt);It=m(fo,"Backup Snapshot ( .tar to gridfs )"),fo.forEach(w),uo.forEach(w),Tt=g(ho),Nt=u(ho,"DIV",{class:!0});var mo=f(Nt);Dt=u(mo,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),mo.forEach(w),ho.forEach(w),St=g(e),kt=u(e,"DIV",{class:!0});var wo=f(kt);Ot=u(wo,"DIV",{class:!0});var go=f(Ot);Bt=u(go,"BUTTON",{class:!0});var vo=f(Bt);$t=m(vo,"Download Snapshot Backup ( as .tar )"),vo.forEach(w),go.forEach(w),Pt=g(wo),Ct=u(wo,"DIV",{class:!0});var bo=f(Ct);Rt=u(bo,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),bo.forEach(w),wo.forEach(w),xt=g(e),Ut=u(e,"DIV",{class:!0});var Eo=f(Ut);Lt=u(Eo,"DIV",{class:!0});var yo=f(Lt);Vt=u(yo,"BUTTON",{class:!0});var Io=f(Vt);At=m(Io,"Download Checkpoint/Snapshot ( as .tar )"),Io.forEach(w),yo.forEach(w),Ht=g(Eo),jt=u(Eo,"DIV",{class:!0});var To=f(jt);Jt=u(To,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),To.forEach(w),Eo.forEach(w),qt=g(e),Ft=u(e,"DIV",{class:!0});var No=f(Ft);Mt=u(No,"DIV",{class:!0});var Do=f(Mt);_t=u(Do,"BUTTON",{class:!0});var So=f(_t);Xt=m(So,"Recover Container ( load from .tar )"),So.forEach(w),Do.forEach(w),zt=g(No),Gt=u(No,"DIV",{class:!0});var ko=f(Gt);Qt=u(ko,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),ko.forEach(w),Kt=g(No),Wt=u(No,"DIV",{class:!0});var Oo=f(Wt);Yt=u(Oo,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Oo.forEach(w),No.forEach(w),Zt=g(e),es=u(e,"HR",{class:!0}),as=g(e),ts=u(e,"H2",{});var Bo=f(ts);ss=m(Bo,"Log Files"),Bo.forEach(w),ns=g(e),os=u(e,"FORM",{class:!0,enctype:!0});var $o=f(os);rs=u($o,"P",{});var Po=f(rs);ls=u(Po,"LABEL",{class:!0});var Co=f(ls);cs=u(Co,"B",{});var Ro=f(cs);is=m(Ro,".csv File"),Ro.forEach(w),Co.forEach(w),ds=g(Po),ps=u(Po,"INPUT",{class:!0,type:!0,name:!0}),Po.forEach(w),hs=g($o),us=u($o,"P",{});var xo=f(us);fs=u(xo,"INPUT",{class:!0,type:!0,value:!0}),xo.forEach(w),$o.forEach(w),ms=g(e),ws=u(e,"BR",{}),gs=g(e),vs=u(e,"DIV",{class:!0});var Uo=f(vs);bs=u(Uo,"DIV",{class:!0});var Lo=f(bs);Es=u(Lo,"BUTTON",{class:!0});var Vo=f(Es);ys=m(Vo,"Delete Logfile"),Vo.forEach(w),Lo.forEach(w),Is=g(Uo),Ts=u(Uo,"DIV",{class:!0});var Ao=f(Ts);Ns=u(Ao,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Ao.forEach(w),Uo.forEach(w),Ds=g(e),Ss=u(e,"DIV",{class:!0});var Ho=f(Ss);ks=u(Ho,"DIV",{class:!0});var jo=f(ks);Os=u(jo,"BUTTON",{class:!0});var Jo=f(Os);Bs=m(Jo,"Download Logfile"),Jo.forEach(w),jo.forEach(w),$s=g(Ho),Ps=u(Ho,"DIV",{class:!0});var qo=f(Ps);Cs=u(qo,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),qo.forEach(w),Ho.forEach(w),Rs=g(e),xs=u(e,"BR",{}),Us=g(e),Ls=u(e,"SECTION",{class:!0});var Fo=f(Ls);Vs=u(Fo,"H3",{});var Mo=f(Vs);As=m(Mo,"Available Logfiles"),Mo.forEach(w),Fo.forEach(w),Hs=g(e),Vn&&Vn.l(e),js=g(e),Js=u(e,"HR",{class:!0}),qs=g(e),Fs=u(e,"H2",{});var _o=f(Fs);Ms=m(_o,"Data Recovery"),_o.forEach(w),_s=g(e),Xs=u(e,"BR",{}),zs=g(e),Gs=u(e,"BUTTON",{class:!0});var Xo=f(Gs);Qs=m(Xo,"Reload Recovery Table"),Xo.forEach(w),Ks=g(e),Ws=u(e,"BR",{}),Ys=g(e),An&&An.l(e),Zs=g(e),en=u(e,"BR",{}),an=g(e),tn=u(e,"TEXTAREA",{id:!0,class:!0,placeholder:!0,type:!0}),f(tn).forEach(w),sn=g(e),nn=u(e,"BUTTON",{class:!0});var zo=f(nn);on=m(zo,"Prettify"),zo.forEach(w),rn=g(e),ln=u(e,"BR",{}),cn=g(e),dn=u(e,"DIV",{class:!0});var Go=f(dn);pn=u(Go,"BUTTON",{class:!0});var Qo=f(pn);hn=m(Qo,"Create Data"),Qo.forEach(w),un=g(Go),fn=u(Go,"TEXTAREA",{id:!0,class:!0,placeholder:!0,type:!0}),f(fn).forEach(w),Go.forEach(w),mn=g(e),wn=u(e,"DIV",{class:!0});var Ko=f(wn);gn=u(Ko,"BUTTON",{class:!0});var Wo=f(gn);vn=m(Wo,"Update Data"),Wo.forEach(w),bn=g(Ko),En=u(Ko,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),yn=g(Ko),In=u(Ko,"TEXTAREA",{id:!0,class:!0,placeholder:!0,type:!0}),f(In).forEach(w),Ko.forEach(w),Tn=g(e),Nn=u(e,"DIV",{class:!0});var Yo=f(Nn);Dn=u(Yo,"BUTTON",{class:!0});var Zo=f(Dn);Sn=m(Zo,"Delete Data"),Zo.forEach(w),kn=g(Yo),On=u(Yo,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),Yo.forEach(w),this.h()},h(){v(r,"class","svelte-t4qhpe"),v(B,"class","w3-text-yellow"),b(B,"text-shadow","1px 1px 0 #444"),v(N,"class","w3-panel w3-blue"),v(U,"class","svelte-t4qhpe"),v(Z,"class","w3-input w3-border"),v(Z,"name","repo_version"),v(Z,"type","text"),v(re,"class","w3-input w3-border"),v(re,"name","containername"),v(re,"type","text"),v(ue,"class","w3-input w3-border"),v(ue,"name","containerports"),v(ue,"type","text"),v(Ee,"class","w3-input w3-border"),v(Ee,"name","containernetworks"),v(Ee,"type","text"),v(ke,"class","w3-input w3-border"),v(ke,"name","containervolumes"),v(ke,"type","text"),v(xe,"class","w3-input w3-border"),v(xe,"name","containerprivilege"),v(xe,"type","text"),v(Ve,"class","w3-text-blue"),v(Je,"class","w3-input w3-border"),v(Je,"type","file"),v(Je,"name","file"),v(Me,"class","w3-col w3-input w3-border w3-margin-bottom"),v(Me,"name","submitbtn"),v(Me,"type","submit"),Me.value="upload",v(j,"class","w3-container w3-card-4"),v(j,"enctype","multipart/form-data"),v(Xe,"class","svelte-t4qhpe"),v(Ze,"class","w3-col w3-input w3-border w3-margin-bottom"),v(ta,"class","page-headline"),v(ia,"class","page-headline"),v(wa,"class","page-headline"),v(Ta,"class","page-headline"),v($a,"class","page-headline"),v(Ua,"class","svelte-t4qhpe"),v(qa,"class","w3-col w3-input w3-border w3-button"),v(Ja,"class","w3-third"),v(Xa,"id","snapshotContainer"),v(Xa,"class","w3-input w3-border"),v(Xa,"name","containername"),v(Xa,"type","text"),v(Xa,"placeholder","Container Name"),v(_a,"class","w3-third"),v(Qa,"id","snapshotImageTag"),v(Qa,"class","w3-input w3-border"),v(Qa,"name","imagetag"),v(Qa,"type","text"),v(Qa,"placeholder","Image Tag (e.g. myimage-01)"),v(Ga,"class","w3-rest"),v(ja,"class","w3-row w3-section"),v(Za,"class","w3-col w3-input w3-border w3-button"),v(Ya,"class","w3-third"),v(st,"id","exportSnapshot"),v(st,"class","w3-input w3-border"),v(st,"name","imagetag"),v(st,"type","text"),v(st,"placeholder","Image Tag (e.g. myimage-01)"),v(tt,"class","w3-third"),v(rt,"id","exportSnapshotTar"),v(rt,"class","w3-input w3-border"),v(rt,"name","tarname"),v(rt,"type","text"),v(rt,"placeholder",".tar Filename"),v(ot,"class","w3-rest"),v(Wa,"class","w3-row w3-section"),v(dt,"class","w3-col w3-input w3-border w3-button"),v(it,"class","w3-third"),v(ft,"id","importSnapshotTar"),v(ft,"class","w3-input w3-border"),v(ft,"name","tarname"),v(ft,"type","text"),v(ft,"placeholder",".tar Filename"),v(ut,"class","w3-third"),v(gt,"id","importSnapshot"),v(gt,"class","w3-input w3-border"),v(gt,"name","imagetag"),v(gt,"type","text"),v(gt,"placeholder","Image Tag (e.g. myimage-01)"),v(wt,"class","w3-third"),v(ct,"class","w3-row w3-section"),v(yt,"class","w3-col w3-input w3-border w3-button"),v(Et,"class","w3-third"),v(Dt,"id","backupSnapshot"),v(Dt,"class","w3-input w3-border"),v(Dt,"name","tarname"),v(Dt,"type","text"),v(Dt,"placeholder",".tar Filename"),v(Nt,"class","w3-rest"),v(bt,"class","w3-row w3-section"),v(Bt,"class","w3-col w3-input w3-border w3-button"),v(Ot,"class","w3-third"),v(Rt,"id","downloadSnapshotTar"),v(Rt,"class","w3-input w3-border"),v(Rt,"name","snapshotname"),v(Rt,"type","text"),v(Rt,"placeholder","Snapshot Name"),v(Ct,"class","w3-rest"),v(kt,"class","w3-row w3-section"),v(Vt,"class","w3-col w3-input w3-border w3-button"),v(Lt,"class","w3-third"),v(Jt,"id","downloadCheckpointTar"),v(Jt,"class","w3-input w3-border"),v(Jt,"name","checkpointname"),v(Jt,"type","text"),v(Jt,"placeholder","Checkpoint Name"),v(jt,"class","w3-rest"),v(Ut,"class","w3-row w3-section"),v(_t,"class","w3-col w3-input w3-border w3-button"),v(Mt,"class","w3-third"),v(Qt,"id","recoverContainer"),v(Qt,"class","w3-input w3-border"),v(Qt,"name","containername"),v(Qt,"type","text"),v(Qt,"placeholder","Container Name"),v(Gt,"class","w3-third"),v(Yt,"id","recoverContainerTar"),v(Yt,"class","w3-input w3-border"),v(Yt,"name","checkpointname"),v(Yt,"type","text"),v(Yt,"placeholder","Checkpoint Name (.tar filename)"),v(Wt,"class","w3-rest"),v(Ft,"class","w3-row w3-section"),v(es,"class","svelte-t4qhpe"),v(ls,"class","w3-text-blue"),v(ps,"class","w3-input w3-border"),v(ps,"type","file"),v(ps,"name","file"),v(fs,"class","w3-col w3-input w3-border w3-margin-bottom"),v(fs,"type","submit"),fs.value="upload",v(os,"class","w3-container w3-card-4"),v(os,"enctype","multipart/form-data"),v(Es,"class","w3-col w3-input w3-border w3-button"),v(bs,"class","w3-third"),v(Ns,"id","deleteLogfileInput"),v(Ns,"class","w3-input w3-border"),v(Ns,"name","logfileid"),v(Ns,"type","text"),v(Ns,"placeholder","Logfile ID"),v(Ts,"class","w3-rest"),v(vs,"class","w3-row w3-section"),v(Os,"class","w3-col w3-input w3-border w3-button"),v(ks,"class","w3-third"),v(Cs,"id","downloadLogfile"),v(Cs,"class","w3-input w3-border"),v(Cs,"name","logfileid"),v(Cs,"type","text"),v(Cs,"placeholder","Logfile ID"),v(Ps,"class","w3-rest"),v(Ss,"class","w3-row w3-section"),v(Ls,"class","page-headline"),v(Js,"class","svelte-t4qhpe"),v(Gs,"class","w3-col w3-input w3-border w3-margin-bottom"),v(tn,"id","jsonSampleId"),v(tn,"class","textarea w3-input w3-border svelte-t4qhpe"),v(tn,"placeholder","JSON Data"),v(tn,"type","text"),v(nn,"class","w3-col w3-input w3-border w3-button"),v(pn,"class","w3-col w3-input w3-border w3-button"),v(fn,"id","createDataArea"),v(fn,"class","regular textarea w3-input w3-border svelte-t4qhpe"),v(fn,"placeholder","JSON Data"),v(fn,"type","text"),v(dn,"class","w3-row w3-section"),v(gn,"class","w3-col w3-input w3-border w3-button"),v(En,"id","updateDataId"),v(En,"class","w3-input w3-border"),v(En,"name","logfileid"),v(En,"type","text"),v(En,"placeholder","Object Identifier"),v(In,"id","updateDataArea"),v(In,"class","regular textarea w3-input w3-border svelte-t4qhpe"),v(In,"placeholder","JSON Data"),v(In,"type","text"),v(wn,"class","w3-row w3-section"),v(Dn,"class","w3-col w3-input w3-border w3-button"),v(On,"id","deleteDataId"),v(On,"class","w3-input w3-border"),v(On,"name","logfileid"),v(On,"type","text"),v(On,"placeholder","Object Identifier"),v(Nn,"class","w3-row w3-section")},m(s,n){o(a,s,n),E(s,t,n),E(s,r,n),E(s,I,n),E(s,N,n),y(N,B),y(B,$),y($,P),E(s,x,n),E(s,U,n),E(s,L,n),E(s,V,n),y(V,A),E(s,H,n),E(s,j,n),y(j,G),y(G,Q),y(Q,K),y(K,W),y(G,Y),y(G,Z),y(j,ee),y(j,ae),y(ae,te),y(te,se),y(se,ne),y(ae,oe),y(ae,re),y(j,le),y(j,ce),y(ce,ie),y(ie,de),y(de,pe),y(ce,he),y(ce,ue),y(j,fe),y(j,me),y(me,we),y(we,ge),y(ge,ve),y(me,be),y(me,Ee),y(j,ye),y(j,Ie),y(Ie,Te),y(Te,Ne),y(Ne,De),y(Ie,Se),y(Ie,ke),y(j,Oe),y(j,Be),y(Be,$e),y($e,Pe),y(Pe,Ce),y(Be,Re),y(Be,xe),y(j,Ue),y(j,Le),y(Le,Ve),y(Ve,Ae),y(Ae,He),y(Le,je),y(Le,Je),y(j,qe),y(j,Fe),y(Fe,Me),E(s,_e,n),E(s,Xe,n),E(s,ze,n),E(s,Ge,n),y(Ge,Qe),E(s,Ke,n),E(s,We,n),E(s,Ye,n),E(s,Ze,n),y(Ze,ea),E(s,aa,n),E(s,ta,n),y(ta,sa),y(sa,na),E(s,oa,n),Cn&&Cn.m(s,n),E(s,ra,n),E(s,la,n),E(s,ca,n),E(s,ia,n),y(ia,da),y(da,pa),E(s,ha,n),Rn&&Rn.m(s,n),E(s,ua,n),E(s,fa,n),E(s,ma,n),E(s,wa,n),y(wa,ga),y(ga,va),E(s,ba,n),xn&&xn.m(s,n),E(s,Ea,n),E(s,ya,n),E(s,Ia,n),E(s,Ta,n),y(Ta,Na),y(Na,Da),E(s,Sa,n),Un&&Un.m(s,n),E(s,ka,n),E(s,Oa,n),E(s,Ba,n),E(s,$a,n),y($a,Pa),y(Pa,Ca),E(s,Ra,n),Ln&&Ln.m(s,n),E(s,xa,n),E(s,Ua,n),E(s,La,n),E(s,Va,n),y(Va,Aa),E(s,Ha,n),E(s,ja,n),y(ja,Ja),y(Ja,qa),y(qa,Fa),y(ja,Ma),y(ja,_a),y(_a,Xa),y(ja,za),y(ja,Ga),y(Ga,Qa),E(s,Ka,n),E(s,Wa,n),y(Wa,Ya),y(Ya,Za),y(Za,et),y(Wa,at),y(Wa,tt),y(tt,st),y(Wa,nt),y(Wa,ot),y(ot,rt),E(s,lt,n),E(s,ct,n),y(ct,it),y(it,dt),y(dt,pt),y(ct,ht),y(ct,ut),y(ut,ft),y(ct,mt),y(ct,wt),y(wt,gt),E(s,vt,n),E(s,bt,n),y(bt,Et),y(Et,yt),y(yt,It),y(bt,Tt),y(bt,Nt),y(Nt,Dt),E(s,St,n),E(s,kt,n),y(kt,Ot),y(Ot,Bt),y(Bt,$t),y(kt,Pt),y(kt,Ct),y(Ct,Rt),E(s,xt,n),E(s,Ut,n),y(Ut,Lt),y(Lt,Vt),y(Vt,At),y(Ut,Ht),y(Ut,jt),y(jt,Jt),E(s,qt,n),E(s,Ft,n),y(Ft,Mt),y(Mt,_t),y(_t,Xt),y(Ft,zt),y(Ft,Gt),y(Gt,Qt),y(Ft,Kt),y(Ft,Wt),y(Wt,Yt),E(s,Zt,n),E(s,es,n),E(s,as,n),E(s,ts,n),y(ts,ss),E(s,ns,n),E(s,os,n),y(os,rs),y(rs,ls),y(ls,cs),y(cs,is),y(rs,ds),y(rs,ps),y(os,hs),y(os,us),y(us,fs),E(s,ms,n),E(s,ws,n),E(s,gs,n),E(s,vs,n),y(vs,bs),y(bs,Es),y(Es,ys),y(vs,Is),y(vs,Ts),y(Ts,Ns),E(s,Ds,n),E(s,Ss,n),y(Ss,ks),y(ks,Os),y(Os,Bs),y(Ss,$s),y(Ss,Ps),y(Ps,Cs),E(s,Rs,n),E(s,xs,n),E(s,Us,n),E(s,Ls,n),y(Ls,Vs),y(Vs,As),E(s,Hs,n),Vn&&Vn.m(s,n),E(s,js,n),E(s,Js,n),E(s,qs,n),E(s,Fs,n),y(Fs,Ms),E(s,_s,n),E(s,Xs,n),E(s,zs,n),E(s,Gs,n),y(Gs,Qs),E(s,Ks,n),E(s,Ws,n),E(s,Ys,n),An&&An.m(s,n),E(s,Zs,n),E(s,en,n),E(s,an,n),E(s,tn,n),D(tn,e[7]),E(s,sn,n),E(s,nn,n),y(nn,on),E(s,rn,n),E(s,ln,n),E(s,cn,n),E(s,dn,n),y(dn,pn),y(pn,hn),y(dn,un),y(dn,fn),D(fn,e[8]),E(s,mn,n),E(s,wn,n),y(wn,gn),y(gn,vn),y(wn,bn),y(wn,En),y(wn,yn),y(wn,In),D(In,e[9]),E(s,Tn,n),E(s,Nn,n),y(Nn,Dn),y(Dn,Sn),y(Nn,kn),y(Nn,On),Bn=!0,$n||(Pn=[T(j,"submit",S(e[19])),T(Ze,"click",e[11]),T(qa,"click",e[12]),T(Za,"click",e[13]),T(dt,"click",e[14]),T(yt,"click",e[15]),T(Bt,"click",e[17]),T(Vt,"click",e[18]),T(_t,"click",e[16]),T(os,"submit",S(e[21])),T(Es,"click",e[20]),T(Os,"click",e[22]),T(Gs,"click",e[10]),T(tn,"input",e[34]),T(nn,"click",e[27]),T(pn,"click",e[23]),T(fn,"input",e[35]),T(gn,"click",e[24]),T(In,"input",e[36]),T(Dn,"click",e[25])],$n=!0)},p(e,a){e[2].length>0?Cn?(Cn.p(e,a),4&a[0]&&l(Cn,1)):(Cn=J(e),Cn.c(),l(Cn,1),Cn.m(ra.parentNode,ra)):Cn&&(C(),c(Cn,1,1,(()=>{Cn=null})),k()),e[3].length>0?Rn?(Rn.p(e,a),8&a[0]&&l(Rn,1)):(Rn=q(e),Rn.c(),l(Rn,1),Rn.m(ua.parentNode,ua)):Rn&&(C(),c(Rn,1,1,(()=>{Rn=null})),k()),e[4].length>0?xn?(xn.p(e,a),16&a[0]&&l(xn,1)):(xn=F(e),xn.c(),l(xn,1),xn.m(Ea.parentNode,Ea)):xn&&(C(),c(xn,1,1,(()=>{xn=null})),k()),e[5].length>0?Un?(Un.p(e,a),32&a[0]&&l(Un,1)):(Un=M(e),Un.c(),l(Un,1),Un.m(ka.parentNode,ka)):Un&&(C(),c(Un,1,1,(()=>{Un=null})),k()),e[0].length>0?Ln?(Ln.p(e,a),1&a[0]&&l(Ln,1)):(Ln=_(e),Ln.c(),l(Ln,1),Ln.m(xa.parentNode,xa)):Ln&&(C(),c(Ln,1,1,(()=>{Ln=null})),k()),e[1].length>0?Vn?(Vn.p(e,a),2&a[0]&&l(Vn,1)):(Vn=X(e),Vn.c(),l(Vn,1),Vn.m(js.parentNode,js)):Vn&&(C(),c(Vn,1,1,(()=>{Vn=null})),k()),e[6].length>0?An?An.p(e,a):(An=z(e),An.c(),An.m(Zs.parentNode,Zs)):An&&(An.d(1),An=null),128&a[0]&&D(tn,e[7]),256&a[0]&&D(fn,e[8]),512&a[0]&&D(In,e[9])},i(e){Bn||(l(a.$$.fragment,e),l(Cn),l(Rn),l(xn),l(Un),l(Ln),l(Vn),Bn=!0)},o(e){c(a.$$.fragment,e),c(Cn),c(Rn),c(xn),c(Un),c(Ln),c(Vn),Bn=!1},d(e){i(a,e),e&&w(t),e&&w(r),e&&w(I),e&&w(N),e&&w(x),e&&w(U),e&&w(L),e&&w(V),e&&w(H),e&&w(j),e&&w(_e),e&&w(Xe),e&&w(ze),e&&w(Ge),e&&w(Ke),e&&w(We),e&&w(Ye),e&&w(Ze),e&&w(aa),e&&w(ta),e&&w(oa),Cn&&Cn.d(e),e&&w(ra),e&&w(la),e&&w(ca),e&&w(ia),e&&w(ha),Rn&&Rn.d(e),e&&w(ua),e&&w(fa),e&&w(ma),e&&w(wa),e&&w(ba),xn&&xn.d(e),e&&w(Ea),e&&w(ya),e&&w(Ia),e&&w(Ta),e&&w(Sa),Un&&Un.d(e),e&&w(ka),e&&w(Oa),e&&w(Ba),e&&w($a),e&&w(Ra),Ln&&Ln.d(e),e&&w(xa),e&&w(Ua),e&&w(La),e&&w(Va),e&&w(Ha),e&&w(ja),e&&w(Ka),e&&w(Wa),e&&w(lt),e&&w(ct),e&&w(vt),e&&w(bt),e&&w(St),e&&w(kt),e&&w(xt),e&&w(Ut),e&&w(qt),e&&w(Ft),e&&w(Zt),e&&w(es),e&&w(as),e&&w(ts),e&&w(ns),e&&w(os),e&&w(ms),e&&w(ws),e&&w(gs),e&&w(vs),e&&w(Ds),e&&w(Ss),e&&w(Rs),e&&w(xs),e&&w(Us),e&&w(Ls),e&&w(Hs),Vn&&Vn.d(e),e&&w(js),e&&w(Js),e&&w(qs),e&&w(Fs),e&&w(_s),e&&w(Xs),e&&w(zs),e&&w(Gs),e&&w(Ks),e&&w(Ws),e&&w(Ys),An&&An.d(e),e&&w(Zs),e&&w(en),e&&w(an),e&&w(tn),e&&w(sn),e&&w(nn),e&&w(rn),e&&w(ln),e&&w(cn),e&&w(dn),e&&w(mn),e&&w(wn),e&&w(Tn),e&&w(Nn),$n=!1,O(Pn)}}}function Y(e,a){let t=document.createElement("a");document.body.appendChild(t),t.style="display: none";let s=window.URL.createObjectURL(e);t.href=s,t.download=a,t.click(),window.URL.revokeObjectURL(s)}function Z(e,a,t){let s=[],n=[],o=[],r=[],l=[],c=[],i=[],d={},p="{}",h="{}";function u(){x("/data/db2/recoverydata/all",(function(e){console.log("result from fetch",e);let a=JSON.parse(e.response);if(a.data){let e=[];for(let t=0;t<a.data.length;t++)e.push({_id:a.data[t]._id,data:a.data[t]});t(6,i=e),console.log("fetched recoverydata:",i)}}))}async function f(){x("/api/db2/logfiles",(function(e){console.log("result from fetch",e);let a=JSON.parse(e.response);a.data&&(t(1,n=a.data),console.log("fetched logfiles:",n))})),x("/checkpoints",(function(e){console.log("result from fetch checkpoints",e);let a=JSON.parse(e.response);a.data&&(t(2,o=a.data),console.log("fetched checkpoints:",o))})),x("/api/db2/checkpoints",(function(e){console.log("result from fetch",e);let a=JSON.parse(e.response);a.data&&(t(3,r=a.data),console.log("fetched cpConfigs:",r))})),x("/containers",(function(e){let a=JSON.parse(e.response);a.data&&t(4,l=a.data)})),x("/images",(function(e){let a=JSON.parse(e.response);a.data&&t(5,c=a.data)})),x("/snapshots/files",(function(e){console.log("result from fetch",e);let a=JSON.parse(e.response);a.data&&(t(0,s=a.data),console.log("fetched snapshots:",s))})),u()}return B((async()=>{f()})),[s,n,o,r,l,c,i,d,p,h,u,f,function(){let e=document.getElementById("snapshotContainer").value,a=document.getElementById("snapshotImageTag").value;""!=e&&""!=a?a.includes("-")?L("/snapshots/container/"+e+"/"+a,"POST",{},(function(e){f(),U.success("Snapshot creation success.")})):U.danger("Please separate image name and version by dash due to url parameter passing."):U.danger("Please specify a container and image-tag name.")},function(){let e=document.getElementById("exportSnapshot").value,a=document.getElementById("exportSnapshotTar").value;""!=e&&""!=a?e.includes("-")?L("/snapshots/export/"+a+"/"+e,"POST",{},(function(e){f(),U.success("Snapshot export success.")})):U.danger("Please separate image name and version by dash due to url parameter passing."):U.danger("Please specify a imagetag and tarfile name.")},function(){let e=document.getElementById("importSnapshotTar").value,a=document.getElementById("importSnapshot").value;""!=a&&""!=e?a.includes("-")?L("/snapshots/import/"+e+"/"+a,"POST",{},(function(e){f(),U.success("Snapshot import success.")})):U.danger("Please separate image name and version by dash due to url parameter passing."):U.danger("Please specify a imagetag and tarfile name.")},function(){let e=document.getElementById("backupSnapshot").value;""!=e?L("/snapshots/backup/"+e,"POST",{},(function(e){f(),U.success("Snapshot import success.")})):U.danger("Please specify a tarfilename name.")},function(){let e=document.getElementById("recoverContainerTar").value,a=document.getElementById("recoverContainer").value;""!=a&&""!=e?L("/recovery/"+a+"/"+e,"POST",{},(function(e){f(),U.success("Recovery of container successful.")})):U.danger("Please specify a container and .tar name.")},async function(){let e=document.getElementById("downloadSnapshotTar").value;console.log(e),x("/download/snapshots/"+e,(function(e){Y(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))}))},async function(){let e=document.getElementById("downloadCheckpointTar").value;x("/download/tars/"+e,(function(a){Y(new Blob([a.response],{type:"octet/stream"}),e)}))},async function(){var e=new FormData;let a=!1,t={};if(this.querySelectorAll("input").forEach((function(s){"submitbtn"!=s.name&&""!=s.name&&("file"==s.name?(e.append(s.name,s.files[0]),a=!0):t[s.name]=s.value)})),console.log("extra Params:",t),e.append("metadata",new Blob([JSON.stringify(t)],{type:"application/json"})),!a)return void U.danger("please select a file.");var s=new XMLHttpRequest;s.open("POST","/checkpoints"),s.onreadystatechange=function(){if(4!==s.readyState||200!==s.status)return!1;{let e=JSON.parse(s.response);console.log("response from checkpoint:",e),U.success("uploaded tar file to checkpoint")}},s.send(e)},function(){let e,a=document.getElementById("deleteLogfileInput").value,s=!1;for(let t=0;t<n.length;t++)a==n[t]._id&&(s=!0,e=n[t]);if(!s)return void U.danger("Please specify an LogID.");L("/gridfs/db2/logfiles","DELETE",e,(function(e){t(1,n=n.filter((e=>e._id!==a))),U.success("Logfile deleted successfully.")}))},async function(){var e=new FormData;let a=!1,s="";this.querySelectorAll("input").forEach((function(t){""!=t.name&&"file"==t.name&&(console.log(t.files[0]),e.append(t.name,t.files[0]),s=t.files[0].name,a=!0)}));let o="/logfiles/"+s;if(a){var r=new XMLHttpRequest;r.open("POST",o),r.onreadystatechange=function(){if(4!==r.readyState||200!==r.status)return!1;{let e=JSON.parse(r.response);t(1,n=[...n,e.data]),console.log("response from checkpoint:",[r.response])}},r.send(e)}else U.danger("please select a file.")},function(){let e=document.getElementById("downloadLogfile").value,a=!1;console.log("download logfile",n);for(let t=0;t<n.length;t++)parseInt(e)==parseInt(n[t]._id)&&(a=!0);a?x("/download/db2/logfiles/"+e,(function(e){Y(new Blob([e.response],{type:"octet/stream"}),decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]))})):U.danger("Please specify an LogID.")},function(){L("/data/db2/recoverydata","POST",JSON.parse(p),(function(e){u(),U.success("Create data success.")}))},function(){let e=document.getElementById("updateDataId").value;L("/data/db2/recoverydata/"+e,"PUT",JSON.parse(h),(function(e){u(),U.success("Update data success.")}))},function(){let e="/data/db2/recoverydata/"+document.getElementById("deleteDataId").value;console.log("deleting",e),L(e,"DELETE",{},(function(e){u(),U.success("Delete data success.")}))},function(){let e=this.getAttribute("index");console.log(this);for(var a=0;a<i.length;a++)parseInt(e)==a&&(t(7,d=JSON.stringify(i[a].data,void 0,4)),a=i.length)},function(){let e=JSON.parse(d);t(7,d=JSON.stringify(e,void 0,4))},function(e){o=e,t(2,o)},function(e){r=e,t(3,r)},function(e){l=e,t(4,l)},function(e){c=e,t(5,c)},function(e){s=e,t(0,s)},function(e){n=e,t(1,n)},function(){d=this.value,t(7,d)},function(){p=this.value,t(8,p)},function(){h=this.value,t(9,h)}]}export default class extends e{constructor(e){super(),a(this,e,Z,W,t,{},[-1,-1])}}