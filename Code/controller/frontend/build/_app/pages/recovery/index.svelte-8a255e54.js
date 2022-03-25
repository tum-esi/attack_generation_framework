import{S as e,i as a,s as t,j as s,m as o,o as r,a5 as n,v as l,r as c,w as i,k as p,e as d,t as f,l as h,n as u,c as m,a as w,g as v,d as g,b,N as E,f as y,F as I,G as $,O as L,u as k,Q as N,z as P,a3 as T,a4 as B,B as D}from"../../chunks/vendor-5cf7a4b5.js";import{T as U,x as C,n as R,a as O,R as x}from"../../chunks/requests-aa4e76e3.js";import{T as V}from"../../chunks/index-72ffb538.js";function S(e){let a,t,p;function d(a){e[8](a)}let f={title:"Checkpoints",headers:Object.keys(e[2][0])};return void 0!==e[2]&&(f.data=e[2]),a=new V({props:f}),T.push((()=>B(a,"data",d))),{c(){s(a.$$.fragment)},l(e){o(a.$$.fragment,e)},m(e,t){r(a,e,t),p=!0},p(e,s){const o={};4&s&&(o.headers=Object.keys(e[2][0])),!t&&4&s&&(t=!0,o.data=e[2],n((()=>t=!1))),a.$set(o)},i(e){p||(l(a.$$.fragment,e),p=!0)},o(e){c(a.$$.fragment,e),p=!1},d(e){i(a,e)}}}function j(e){let a,t,p;function d(a){e[9](a)}let f={title:"Checkpoint Configurations",headers:Object.keys(e[3][0])};return void 0!==e[3]&&(f.data=e[3]),a=new V({props:f}),T.push((()=>B(a,"data",d))),{c(){s(a.$$.fragment)},l(e){o(a.$$.fragment,e)},m(e,t){r(a,e,t),p=!0},p(e,s){const o={};8&s&&(o.headers=Object.keys(e[3][0])),!t&&8&s&&(t=!0,o.data=e[3],n((()=>t=!1))),a.$set(o)},i(e){p||(l(a.$$.fragment,e),p=!0)},o(e){c(a.$$.fragment,e),p=!1},d(e){i(a,e)}}}function H(e){let a,t,p;function d(a){e[10](a)}let f={title:"Snapshots",headers:Object.keys(e[0][0])};return void 0!==e[0]&&(f.data=e[0]),a=new V({props:f}),T.push((()=>B(a,"data",d))),{c(){s(a.$$.fragment)},l(e){o(a.$$.fragment,e)},m(e,t){r(a,e,t),p=!0},p(e,s){const o={};1&s&&(o.headers=Object.keys(e[0][0])),!t&&1&s&&(t=!0,o.data=e[0],n((()=>t=!1))),a.$set(o)},i(e){p||(l(a.$$.fragment,e),p=!0)},o(e){c(a.$$.fragment,e),p=!1},d(e){i(a,e)}}}function A(e){let a,t,p;function d(a){e[11](a)}let f={title:"Logfiles",headers:Object.keys(e[1][0])};return void 0!==e[1]&&(f.data=e[1]),a=new V({props:f}),T.push((()=>B(a,"data",d))),{c(){s(a.$$.fragment)},l(e){o(a.$$.fragment,e)},m(e,t){r(a,e,t),p=!0},p(e,s){const o={};2&s&&(o.headers=Object.keys(e[1][0])),!t&&2&s&&(t=!0,o.data=e[1],n((()=>t=!1))),a.$set(o)},i(e){p||(l(a.$$.fragment,e),p=!0)},o(e){c(a.$$.fragment,e),p=!1},d(e){i(a,e)}}}function F(e){let a,t,n,P,T,B,C,R,O,x,V,F,M,_,z,G,Q,X,K,W,Y,Z,ee,ae,te,se,oe,re,ne,le,ce,ie,pe,de,fe,he,ue,me,we,ve,ge,be,Ee,ye,Ie,$e,Le,ke,Ne,Pe,Te,Be,De,Ue,Ce,Re,Oe,xe,Ve,Se,je,He,Ae,Fe,qe,Je,Me,_e,ze,Ge,Qe,Xe,Ke,We,Ye,Ze,ea,aa,ta,sa,oa,ra,na,la,ca,ia,pa,da,fa,ha,ua,ma,wa,va,ga,ba,Ea,ya,Ia,$a,La,ka,Na,Pa,Ta,Ba,Da,Ua,Ca,Ra,Oa,xa,Va,Sa,ja,Ha,Aa,Fa,qa,Ja,Ma,_a,za,Ga,Qa,Xa,Ka,Wa,Ya,Za,et,at,tt,st,ot,rt,nt,lt,ct,it,pt,dt,ft,ht,ut,mt,wt,vt,gt,bt,Et,yt,It,$t,Lt;a=new U({});let kt=e[2].length>0&&S(e),Nt=e[3].length>0&&j(e),Pt=e[0].length>0&&H(e),Tt=e[1].length>0&&A(e);return{c(){s(a.$$.fragment),t=p(),n=d("hr"),P=p(),T=d("div"),B=d("h1"),C=d("b"),R=f("Recovery Handlers"),O=p(),x=d("hr"),V=p(),F=d("h2"),M=f("Upload Checkpoint"),_=p(),z=d("form"),G=d("p"),Q=d("label"),X=d("b"),K=f("Image Tag"),W=p(),Y=d("input"),Z=p(),ee=d("p"),ae=d("label"),te=d("b"),se=f("Image Version"),oe=p(),re=d("input"),ne=p(),le=d("p"),ce=d("label"),ie=d("b"),pe=f("Container Name"),de=p(),fe=d("input"),he=p(),ue=d("p"),me=d("label"),we=d("b"),ve=f("Container Ports (8080:8080,443:443)"),ge=p(),be=d("input"),Ee=p(),ye=d("p"),Ie=d("label"),$e=d("b"),Le=f("Container Networks"),ke=p(),Ne=d("input"),Pe=p(),Te=d("p"),Be=d("label"),De=d("b"),Ue=f("Container Volumes"),Ce=p(),Re=d("input"),Oe=p(),xe=d("p"),Ve=d("label"),Se=d("b"),je=f("Container Privileged (yes, no)"),He=p(),Ae=d("input"),Fe=p(),qe=d("p"),Je=d("label"),Me=d("b"),_e=f("File"),ze=p(),Ge=d("input"),Qe=p(),Xe=d("p"),Ke=d("input"),We=p(),Ye=d("br"),Ze=p(),kt&&kt.c(),ea=p(),aa=d("br"),ta=p(),Nt&&Nt.c(),sa=p(),oa=d("hr"),ra=p(),na=d("h2"),la=f("Recovery Actions"),ca=p(),ia=d("div"),pa=d("div"),da=d("button"),fa=f("Snapshot Container ( create image as .tar )"),ha=p(),ua=d("div"),ma=d("input"),wa=p(),va=d("div"),ga=d("div"),ba=d("button"),Ea=f("Recover Container ( load from .tar )"),ya=p(),Ia=d("div"),$a=d("input"),La=p(),ka=d("div"),Na=d("div"),Pa=d("button"),Ta=f("Download Snapshot ( as .tar )"),Ba=p(),Da=d("div"),Ua=d("input"),Ca=p(),Ra=d("hr"),Oa=p(),xa=d("h2"),Va=f("Container Snapshots"),Sa=p(),Pt&&Pt.c(),ja=p(),Ha=d("hr"),Aa=p(),Fa=d("h2"),qa=f("Log Files"),Ja=p(),Ma=d("form"),_a=d("p"),za=d("label"),Ga=d("b"),Qa=f(".csv File"),Xa=p(),Ka=d("input"),Wa=p(),Ya=d("p"),Za=d("input"),et=p(),at=d("br"),tt=p(),st=d("div"),ot=d("div"),rt=d("button"),nt=f("Delete Logfile"),lt=p(),ct=d("div"),it=d("input"),pt=p(),dt=d("div"),ft=d("div"),ht=d("button"),ut=f("Download Logfile"),mt=p(),wt=d("div"),vt=d("input"),gt=p(),bt=d("br"),Et=p(),Tt&&Tt.c(),yt=h(),this.h()},l(e){o(a.$$.fragment,e),t=u(e),n=m(e,"HR",{class:!0}),P=u(e),T=m(e,"DIV",{class:!0});var s=w(T);B=m(s,"H1",{class:!0,style:!0});var r=w(B);C=m(r,"B",{});var l=w(C);R=v(l,"Recovery Handlers"),l.forEach(g),r.forEach(g),s.forEach(g),O=u(e),x=m(e,"HR",{class:!0}),V=u(e),F=m(e,"H2",{});var c=w(F);M=v(c,"Upload Checkpoint"),c.forEach(g),_=u(e),z=m(e,"FORM",{class:!0,enctype:!0});var i=w(z);G=m(i,"P",{});var p=w(G);Q=m(p,"LABEL",{});var d=w(Q);X=m(d,"B",{});var f=w(X);K=v(f,"Image Tag"),f.forEach(g),d.forEach(g),W=u(p),Y=m(p,"INPUT",{class:!0,name:!0,type:!0}),p.forEach(g),Z=u(i),ee=m(i,"P",{});var b=w(ee);ae=m(b,"LABEL",{});var E=w(ae);te=m(E,"B",{});var y=w(te);se=v(y,"Image Version"),y.forEach(g),E.forEach(g),oe=u(b),re=m(b,"INPUT",{class:!0,name:!0,type:!0}),b.forEach(g),ne=u(i),le=m(i,"P",{});var I=w(le);ce=m(I,"LABEL",{});var $=w(ce);ie=m($,"B",{});var L=w(ie);pe=v(L,"Container Name"),L.forEach(g),$.forEach(g),de=u(I),fe=m(I,"INPUT",{class:!0,name:!0,type:!0}),I.forEach(g),he=u(i),ue=m(i,"P",{});var k=w(ue);me=m(k,"LABEL",{});var N=w(me);we=m(N,"B",{});var D=w(we);ve=v(D,"Container Ports (8080:8080,443:443)"),D.forEach(g),N.forEach(g),ge=u(k),be=m(k,"INPUT",{class:!0,name:!0,type:!0}),k.forEach(g),Ee=u(i),ye=m(i,"P",{});var U=w(ye);Ie=m(U,"LABEL",{});var S=w(Ie);$e=m(S,"B",{});var j=w($e);Le=v(j,"Container Networks"),j.forEach(g),S.forEach(g),ke=u(U),Ne=m(U,"INPUT",{class:!0,name:!0,type:!0}),U.forEach(g),Pe=u(i),Te=m(i,"P",{});var H=w(Te);Be=m(H,"LABEL",{});var A=w(Be);De=m(A,"B",{});var q=w(De);Ue=v(q,"Container Volumes"),q.forEach(g),A.forEach(g),Ce=u(H),Re=m(H,"INPUT",{class:!0,name:!0,type:!0}),H.forEach(g),Oe=u(i),xe=m(i,"P",{});var J=w(xe);Ve=m(J,"LABEL",{});var It=w(Ve);Se=m(It,"B",{});var $t=w(Se);je=v($t,"Container Privileged (yes, no)"),$t.forEach(g),It.forEach(g),He=u(J),Ae=m(J,"INPUT",{class:!0,name:!0,type:!0}),J.forEach(g),Fe=u(i),qe=m(i,"P",{});var Lt=w(qe);Je=m(Lt,"LABEL",{class:!0});var Bt=w(Je);Me=m(Bt,"B",{});var Dt=w(Me);_e=v(Dt,"File"),Dt.forEach(g),Bt.forEach(g),ze=u(Lt),Ge=m(Lt,"INPUT",{class:!0,type:!0,name:!0}),Lt.forEach(g),Qe=u(i),Xe=m(i,"P",{});var Ut=w(Xe);Ke=m(Ut,"INPUT",{class:!0,name:!0,type:!0,value:!0}),Ut.forEach(g),i.forEach(g),We=u(e),Ye=m(e,"BR",{}),Ze=u(e),kt&&kt.l(e),ea=u(e),aa=m(e,"BR",{}),ta=u(e),Nt&&Nt.l(e),sa=u(e),oa=m(e,"HR",{class:!0}),ra=u(e),na=m(e,"H2",{});var Ct=w(na);la=v(Ct,"Recovery Actions"),Ct.forEach(g),ca=u(e),ia=m(e,"DIV",{class:!0});var Rt=w(ia);pa=m(Rt,"DIV",{class:!0});var Ot=w(pa);da=m(Ot,"BUTTON",{class:!0});var xt=w(da);fa=v(xt,"Snapshot Container ( create image as .tar )"),xt.forEach(g),Ot.forEach(g),ha=u(Rt),ua=m(Rt,"DIV",{class:!0});var Vt=w(ua);ma=m(Vt,"INPUT",{class:!0,name:!0,type:!0,placeholder:!0}),Vt.forEach(g),Rt.forEach(g),wa=u(e),va=m(e,"DIV",{class:!0});var St=w(va);ga=m(St,"DIV",{class:!0});var jt=w(ga);ba=m(jt,"BUTTON",{class:!0});var Ht=w(ba);Ea=v(Ht,"Recover Container ( load from .tar )"),Ht.forEach(g),jt.forEach(g),ya=u(St),Ia=m(St,"DIV",{class:!0});var At=w(Ia);$a=m(At,"INPUT",{class:!0,name:!0,type:!0,placeholder:!0}),At.forEach(g),St.forEach(g),La=u(e),ka=m(e,"DIV",{class:!0});var Ft=w(ka);Na=m(Ft,"DIV",{class:!0});var qt=w(Na);Pa=m(qt,"BUTTON",{class:!0});var Jt=w(Pa);Ta=v(Jt,"Download Snapshot ( as .tar )"),Jt.forEach(g),qt.forEach(g),Ba=u(Ft),Da=m(Ft,"DIV",{class:!0});var Mt=w(Da);Ua=m(Mt,"INPUT",{class:!0,name:!0,type:!0,placeholder:!0}),Mt.forEach(g),Ft.forEach(g),Ca=u(e),Ra=m(e,"HR",{class:!0}),Oa=u(e),xa=m(e,"H2",{});var _t=w(xa);Va=v(_t,"Container Snapshots"),_t.forEach(g),Sa=u(e),Pt&&Pt.l(e),ja=u(e),Ha=m(e,"HR",{class:!0}),Aa=u(e),Fa=m(e,"H2",{});var zt=w(Fa);qa=v(zt,"Log Files"),zt.forEach(g),Ja=u(e),Ma=m(e,"FORM",{class:!0,enctype:!0});var Gt=w(Ma);_a=m(Gt,"P",{});var Qt=w(_a);za=m(Qt,"LABEL",{class:!0});var Xt=w(za);Ga=m(Xt,"B",{});var Kt=w(Ga);Qa=v(Kt,".csv File"),Kt.forEach(g),Xt.forEach(g),Xa=u(Qt),Ka=m(Qt,"INPUT",{class:!0,type:!0,name:!0}),Qt.forEach(g),Wa=u(Gt),Ya=m(Gt,"P",{});var Wt=w(Ya);Za=m(Wt,"INPUT",{class:!0,type:!0,value:!0}),Wt.forEach(g),Gt.forEach(g),et=u(e),at=m(e,"BR",{}),tt=u(e),st=m(e,"DIV",{class:!0});var Yt=w(st);ot=m(Yt,"DIV",{class:!0});var Zt=w(ot);rt=m(Zt,"BUTTON",{class:!0});var es=w(rt);nt=v(es,"Delete Logfile"),es.forEach(g),Zt.forEach(g),lt=u(Yt),ct=m(Yt,"DIV",{class:!0});var as=w(ct);it=m(as,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),as.forEach(g),Yt.forEach(g),pt=u(e),dt=m(e,"DIV",{class:!0});var ts=w(dt);ft=m(ts,"DIV",{class:!0});var ss=w(ft);ht=m(ss,"BUTTON",{class:!0});var os=w(ht);ut=v(os,"Download Logfile"),os.forEach(g),ss.forEach(g),mt=u(ts),wt=m(ts,"DIV",{class:!0});var rs=w(wt);vt=m(rs,"INPUT",{id:!0,class:!0,name:!0,type:!0,placeholder:!0}),rs.forEach(g),ts.forEach(g),gt=u(e),bt=m(e,"BR",{}),Et=u(e),Tt&&Tt.l(e),yt=h(),this.h()},h(){b(n,"class","svelte-drd2kv"),b(B,"class","w3-text-yellow"),E(B,"text-shadow","1px 1px 0 #444"),b(T,"class","w3-panel w3-blue"),b(x,"class","svelte-drd2kv"),b(Y,"class","w3-input w3-border"),b(Y,"name","imagetag"),b(Y,"type","text"),b(re,"class","w3-input w3-border"),b(re,"name","imageversion"),b(re,"type","text"),b(fe,"class","w3-input w3-border"),b(fe,"name","containername"),b(fe,"type","text"),b(be,"class","w3-input w3-border"),b(be,"name","containerports"),b(be,"type","text"),b(Ne,"class","w3-input w3-border"),b(Ne,"name","containernetworks"),b(Ne,"type","text"),b(Re,"class","w3-input w3-border"),b(Re,"name","containervolumes"),b(Re,"type","text"),b(Ae,"class","w3-input w3-border"),b(Ae,"name","containerprivilege"),b(Ae,"type","text"),b(Je,"class","w3-text-blue"),b(Ge,"class","w3-input w3-border"),b(Ge,"type","file"),b(Ge,"name","file"),b(Ke,"class","w3-col w3-input w3-border w3-margin-bottom"),b(Ke,"name","submitbtn"),b(Ke,"type","submit"),Ke.value="upload",b(z,"class","w3-container w3-card-4"),b(z,"enctype","multipart/form-data"),b(oa,"class","svelte-drd2kv"),b(da,"class","w3-col w3-input w3-border w3-button"),b(pa,"class","w3-third"),b(ma,"class","w3-input w3-border"),b(ma,"name","containername"),b(ma,"type","text"),b(ma,"placeholder","Container Name"),b(ua,"class","w3-rest"),b(ia,"class","w3-row w3-section"),b(ba,"class","w3-col w3-input w3-border w3-button"),b(ga,"class","w3-third"),b($a,"class","w3-input w3-border"),b($a,"name","containername"),b($a,"type","text"),b($a,"placeholder","Container Name"),b(Ia,"class","w3-rest"),b(va,"class","w3-row w3-section"),b(Pa,"class","w3-col w3-input w3-border w3-button"),b(Na,"class","w3-third"),b(Ua,"class","w3-input w3-border"),b(Ua,"name","snapshotname"),b(Ua,"type","text"),b(Ua,"placeholder","Snapshot Name"),b(Da,"class","w3-rest"),b(ka,"class","w3-row w3-section"),b(Ra,"class","svelte-drd2kv"),b(Ha,"class","svelte-drd2kv"),b(za,"class","w3-text-blue"),b(Ka,"class","w3-input w3-border"),b(Ka,"type","file"),b(Ka,"name","file"),b(Za,"class","w3-col w3-input w3-border w3-margin-bottom"),b(Za,"type","submit"),Za.value="upload",b(Ma,"class","w3-container w3-card-4"),b(Ma,"enctype","multipart/form-data"),b(rt,"class","w3-col w3-input w3-border w3-button"),b(ot,"class","w3-third"),b(it,"id","deleteLogfileInput"),b(it,"class","w3-input w3-border"),b(it,"name","logfileid"),b(it,"type","text"),b(it,"placeholder","Logfile ID"),b(ct,"class","w3-rest"),b(st,"class","w3-row w3-section"),b(ht,"class","w3-col w3-input w3-border w3-button"),b(ft,"class","w3-third"),b(vt,"id","downloadLogfile"),b(vt,"class","w3-input w3-border"),b(vt,"name","logfileid"),b(vt,"type","text"),b(vt,"placeholder","Logfile ID"),b(wt,"class","w3-rest"),b(dt,"class","w3-row w3-section")},m(s,o){r(a,s,o),y(s,t,o),y(s,n,o),y(s,P,o),y(s,T,o),I(T,B),I(B,C),I(C,R),y(s,O,o),y(s,x,o),y(s,V,o),y(s,F,o),I(F,M),y(s,_,o),y(s,z,o),I(z,G),I(G,Q),I(Q,X),I(X,K),I(G,W),I(G,Y),I(z,Z),I(z,ee),I(ee,ae),I(ae,te),I(te,se),I(ee,oe),I(ee,re),I(z,ne),I(z,le),I(le,ce),I(ce,ie),I(ie,pe),I(le,de),I(le,fe),I(z,he),I(z,ue),I(ue,me),I(me,we),I(we,ve),I(ue,ge),I(ue,be),I(z,Ee),I(z,ye),I(ye,Ie),I(Ie,$e),I($e,Le),I(ye,ke),I(ye,Ne),I(z,Pe),I(z,Te),I(Te,Be),I(Be,De),I(De,Ue),I(Te,Ce),I(Te,Re),I(z,Oe),I(z,xe),I(xe,Ve),I(Ve,Se),I(Se,je),I(xe,He),I(xe,Ae),I(z,Fe),I(z,qe),I(qe,Je),I(Je,Me),I(Me,_e),I(qe,ze),I(qe,Ge),I(z,Qe),I(z,Xe),I(Xe,Ke),y(s,We,o),y(s,Ye,o),y(s,Ze,o),kt&&kt.m(s,o),y(s,ea,o),y(s,aa,o),y(s,ta,o),Nt&&Nt.m(s,o),y(s,sa,o),y(s,oa,o),y(s,ra,o),y(s,na,o),I(na,la),y(s,ca,o),y(s,ia,o),I(ia,pa),I(pa,da),I(da,fa),I(ia,ha),I(ia,ua),I(ua,ma),y(s,wa,o),y(s,va,o),I(va,ga),I(ga,ba),I(ba,Ea),I(va,ya),I(va,Ia),I(Ia,$a),y(s,La,o),y(s,ka,o),I(ka,Na),I(Na,Pa),I(Pa,Ta),I(ka,Ba),I(ka,Da),I(Da,Ua),y(s,Ca,o),y(s,Ra,o),y(s,Oa,o),y(s,xa,o),I(xa,Va),y(s,Sa,o),Pt&&Pt.m(s,o),y(s,ja,o),y(s,Ha,o),y(s,Aa,o),y(s,Fa,o),I(Fa,qa),y(s,Ja,o),y(s,Ma,o),I(Ma,_a),I(_a,za),I(za,Ga),I(Ga,Qa),I(_a,Xa),I(_a,Ka),I(Ma,Wa),I(Ma,Ya),I(Ya,Za),y(s,et,o),y(s,at,o),y(s,tt,o),y(s,st,o),I(st,ot),I(ot,rt),I(rt,nt),I(st,lt),I(st,ct),I(ct,it),y(s,pt,o),y(s,dt,o),I(dt,ft),I(ft,ht),I(ht,ut),I(dt,mt),I(dt,wt),I(wt,vt),y(s,gt,o),y(s,bt,o),y(s,Et,o),Tt&&Tt.m(s,o),y(s,yt,o),It=!0,$t||(Lt=[$(z,"submit",L(e[6])),$(da,"click",q),$(ba,"click",J),$(Pa,"click",J),$(Ma,"submit",L(e[7])),$(rt,"click",e[5]),$(ht,"click",e[4])],$t=!0)},p(e,[a]){e[2].length>0?kt?(kt.p(e,a),4&a&&l(kt,1)):(kt=S(e),kt.c(),l(kt,1),kt.m(ea.parentNode,ea)):kt&&(D(),c(kt,1,1,(()=>{kt=null})),k()),e[3].length>0?Nt?(Nt.p(e,a),8&a&&l(Nt,1)):(Nt=j(e),Nt.c(),l(Nt,1),Nt.m(sa.parentNode,sa)):Nt&&(D(),c(Nt,1,1,(()=>{Nt=null})),k()),e[0].length>0?Pt?(Pt.p(e,a),1&a&&l(Pt,1)):(Pt=H(e),Pt.c(),l(Pt,1),Pt.m(ja.parentNode,ja)):Pt&&(D(),c(Pt,1,1,(()=>{Pt=null})),k()),e[1].length>0?Tt?(Tt.p(e,a),2&a&&l(Tt,1)):(Tt=A(e),Tt.c(),l(Tt,1),Tt.m(yt.parentNode,yt)):Tt&&(D(),c(Tt,1,1,(()=>{Tt=null})),k())},i(e){It||(l(a.$$.fragment,e),l(kt),l(Nt),l(Pt),l(Tt),It=!0)},o(e){c(a.$$.fragment,e),c(kt),c(Nt),c(Pt),c(Tt),It=!1},d(e){i(a,e),e&&g(t),e&&g(n),e&&g(P),e&&g(T),e&&g(O),e&&g(x),e&&g(V),e&&g(F),e&&g(_),e&&g(z),e&&g(We),e&&g(Ye),e&&g(Ze),kt&&kt.d(e),e&&g(ea),e&&g(aa),e&&g(ta),Nt&&Nt.d(e),e&&g(sa),e&&g(oa),e&&g(ra),e&&g(na),e&&g(ca),e&&g(ia),e&&g(wa),e&&g(va),e&&g(La),e&&g(ka),e&&g(Ca),e&&g(Ra),e&&g(Oa),e&&g(xa),e&&g(Sa),Pt&&Pt.d(e),e&&g(ja),e&&g(Ha),e&&g(Aa),e&&g(Fa),e&&g(Ja),e&&g(Ma),e&&g(et),e&&g(at),e&&g(tt),e&&g(st),e&&g(pt),e&&g(dt),e&&g(gt),e&&g(bt),e&&g(Et),Tt&&Tt.d(e),e&&g(yt),$t=!1,N(Lt)}}}function q(){}function J(){}function M(e,a,t){let s=[],o=[],r=[],n=[];return P((async()=>{console.log("regular requests..."),C("/api/db2/logfiles",(function(e){console.log("result from fetch",e);let a=JSON.parse(e.response);a.data&&(t(1,o=a.data),console.log("fetched logfiles:",o))})),C("/checkpoints",(function(e){console.log("result from fetch checkpoints",e);let a=JSON.parse(e.response);a.data&&(t(2,r=a.data),console.log("fetched checkpoints:",r))})),C("/api/db2/checkpoints",(function(e){console.log("result from fetch",e);let a=JSON.parse(e.response);a.data&&(t(3,n=a.data),console.log("fetched cpConfigs:",n))}))})),[s,o,r,n,function(){let e=document.getElementById("downloadLogfile").value,a=!1;for(let t=0;t<o.length;t++)e==o[t]._id&&(a=!0);a?C("/download/db2/logfiles/"+e,(function(e){let a=document.createElement("a");document.body.appendChild(a),a.style="display: none";let t=new Blob([e.response],{type:"octet/stream"}),s=window.URL.createObjectURL(t),o=decodeURIComponent(e.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]);a.href=s,a.download=o,a.click(),window.URL.revokeObjectURL(s)})):R.danger("Please specify an LogID.")},function(){let e,a=document.getElementById("deleteLogfileInput").value,s=!1;for(let t=0;t<o.length;t++)a==o[t]._id&&(s=!0,e=o[t]);if(!s)return void R.danger("Please specify an LogID.");let r="/gridfs/db2/logfiles";console.log("before delete",r,e),O(r,"DELETE",e,(function(e){console.log("res after logfile delete",e),t(1,o=o.filter((e=>e._id!==a))),R.success("Logfile deleted successfully.")}))},async function(){let e={},a=!1;if(this.querySelectorAll("input").forEach((function(t){"submitbtn"!=t.name&&("file"==t.name?(e[t.name]=t.files[0],a=!0):e[t.name]=t.value)})),!a)return void R.danger("please select a file.");x("/checkpoints","POST",e,(function(e){console.log("result...",e)}))},async function(){var e=new FormData;let a=!1,s="";this.querySelectorAll("input").forEach((function(t){""!=t.name&&"file"==t.name&&(console.log(t.files[0]),e.append(t.name,t.files[0]),s=t.files[0].name,a=!0)}));let r="/logfiles/"+s;if(a){var n=new XMLHttpRequest;n.open("POST",r),n.onreadystatechange=function(){if(4!==n.readyState||200!==n.status)return!1;{let e=JSON.parse(n.response);t(1,o=[...o,e.data]),console.log("response from checkpoint:",[n.response])}},n.send(e)}else R.danger("please select a file.")},function(e){r=e,t(2,r)},function(e){n=e,t(3,n)},function(e){s=e,t(0,s)},function(e){o=e,t(1,o)}]}export default class extends e{constructor(e){super(),a(this,e,M,F,t,{})}}