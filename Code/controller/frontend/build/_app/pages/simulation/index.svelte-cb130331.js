import{S as t,i as n,s as e,l as s,f as a,v as o,e as r,t as c,k as l,j as i,c as u,a as f,g as d,d as h,n as g,m,F as p,o as v,h as w,a6 as S,r as b,w as k,u as $,M as E,L as N,b as O,N as T,G as j,Q as y,R as x,z as B,B as H,a4 as R,a5 as C}from"../../chunks/vendor-c052606d.js";import{T as _}from"../../chunks/index-e04611e2.js";import{T as I,n as D,a as L}from"../../chunks/requests-2b3ce117.js";import{s as V,a as U}from"../../chunks/store-7a6f43c6.js";/* empty css                                                       */function J(t,n,e){const s=t.slice();return s[19]=n[e],s[20]=n,s[21]=e,s}function W(t){let n,e,r=t[0].configurations.length>0&&q(t);return{c(){r&&r.c(),n=s()},l(t){r&&r.l(t),n=s()},m(t,s){r&&r.m(t,s),a(t,n,s),e=!0},p(t,e){t[0].configurations.length>0?r?(r.p(t,e),1&e&&o(r,1)):(r=q(t),r.c(),o(r,1),r.m(n.parentNode,n)):r&&(H(),b(r,1,1,(()=>{r=null})),$())},i(t){e||(o(r),e=!0)},o(t){b(r),e=!1},d(t){r&&r.d(t),t&&h(n)}}}function q(t){let n,e,r=t[0].configurations,c=[];for(let s=0;s<r.length;s+=1)c[s]=F(J(t,r,s));const l=t=>b(c[t],1,1,(()=>{c[t]=null}));return{c(){for(let t=0;t<c.length;t+=1)c[t].c();n=s()},l(t){for(let n=0;n<c.length;n+=1)c[n].l(t);n=s()},m(t,s){for(let n=0;n<c.length;n+=1)c[n].m(t,s);a(t,n,s),e=!0},p(t,e){if(9&e){let s;for(r=t[0].configurations,s=0;s<r.length;s+=1){const a=J(t,r,s);c[s]?(c[s].p(a,e),o(c[s],1)):(c[s]=F(a),c[s].c(),o(c[s],1),c[s].m(n.parentNode,n))}for(H(),s=r.length;s<c.length;s+=1)l(s);$()}},i(t){if(!e){for(let t=0;t<r.length;t+=1)o(c[t]);e=!0}},o(t){c=c.filter(Boolean);for(let n=0;n<c.length;n+=1)b(c[n]);e=!1},d(t){E(c,t),t&&h(n)}}}function A(t){let n,e,r=t[21].toString()in t[3],c=r&&P(t);return{c(){c&&c.c(),n=s()},l(t){c&&c.l(t),n=s()},m(t,s){c&&c.m(t,s),a(t,n,s),e=!0},p(t,e){8&e&&(r=t[21].toString()in t[3]),r?c?(c.p(t,e),8&e&&o(c,1)):(c=P(t),c.c(),o(c,1),c.m(n.parentNode,n)):c&&(H(),b(c,1,1,(()=>{c=null})),$())},i(t){e||(o(c),e=!0)},o(t){b(c),e=!1},d(t){c&&c.d(t),t&&h(n)}}}function P(t){let n,e,r=t[3][t[21].toString()].length>0,c=r&&z(t);return{c(){c&&c.c(),n=s()},l(t){c&&c.l(t),n=s()},m(t,s){c&&c.m(t,s),a(t,n,s),e=!0},p(t,e){8&e&&(r=t[3][t[21].toString()].length>0),r?c?(c.p(t,e),8&e&&o(c,1)):(c=z(t),c.c(),o(c,1),c.m(n.parentNode,n)):c&&(H(),b(c,1,1,(()=>{c=null})),$())},i(t){e||(o(c),e=!0)},o(t){b(c),e=!1},d(t){c&&c.d(t),t&&h(n)}}}function z(t){let n,e,s,$,E,N,O,T=t[19].container_info.name+"";function j(n){t[10](n,t[21])}let y={title:t[19].container_info.name,headers:Object.keys(t[3][t[21].toString()][0])};return void 0!==t[3][t[21].toString()]&&(y.data=t[3][t[21].toString()]),$=new _({props:y}),R.push((()=>C($,"data",j))),{c(){n=r("h5"),e=c(T),s=l(),i($.$$.fragment),N=l()},l(t){n=u(t,"H5",{});var a=f(n);e=d(a,T),a.forEach(h),s=g(t),m($.$$.fragment,t),N=g(t)},m(t,o){a(t,n,o),p(n,e),a(t,s,o),v($,t,o),a(t,N,o),O=!0},p(n,s){t=n,(!O||1&s)&&T!==(T=t[19].container_info.name+"")&&w(e,T);const a={};1&s&&(a.title=t[19].container_info.name),8&s&&(a.headers=Object.keys(t[3][t[21].toString()][0])),!E&&8&s&&(E=!0,a.data=t[3][t[21].toString()],S((()=>E=!1))),$.$set(a)},i(t){O||(o($.$$.fragment,t),O=!0)},o(t){b($.$$.fragment,t),O=!1},d(t){t&&h(n),t&&h(s),k($,t),t&&h(N)}}}function F(t){let n,e,r=Object.keys(t[3]).length>0,c=r&&A(t);return{c(){c&&c.c(),n=s()},l(t){c&&c.l(t),n=s()},m(t,s){c&&c.m(t,s),a(t,n,s),e=!0},p(t,e){8&e&&(r=Object.keys(t[3]).length>0),r?c?(c.p(t,e),8&e&&o(c,1)):(c=A(t),c.c(),o(c,1),c.m(n.parentNode,n)):c&&(H(),b(c,1,1,(()=>{c=null})),$())},i(t){e||(o(c),e=!0)},o(t){b(c),e=!1},d(t){c&&c.d(t),t&&h(n)}}}function G(t){let n,e,s,S,E,x,B,R,C,_,D,L,V,U,J,q,A,P,z,F,G,M,Q,K,X,Y,Z,tt,nt,et,st,at,ot,rt,ct,lt,it,ut,ft,dt,ht,gt,mt,pt,vt,wt,St,bt;e=new I({});let kt="configurations"in t[0]&&W(t);return{c(){n=l(),i(e.$$.fragment),s=l(),S=r("hr"),E=l(),x=r("div"),B=r("h1"),R=r("b"),C=c("Simulation"),_=l(),D=r("hr"),L=l(),V=r("h4"),U=c("Scenario: "),J=c(t[1]),q=c(" Number of Containers: "),A=c(t[2]),P=c("."),z=l(),F=r("div"),G=r("div"),M=r("button"),Q=c("Start Simulation"),K=l(),X=r("div"),Y=r("button"),Z=c("Stop Simulation"),tt=l(),nt=r("div"),et=r("button"),st=c("Reset WS Connection"),at=l(),ot=r("hr"),rt=l(),ct=r("section"),lt=r("h3"),it=c("Application Logs"),ut=l(),ft=r("button"),dt=c("Clear Logs"),ht=l(),kt&&kt.c(),gt=l(),mt=r("br"),pt=l(),vt=r("hr"),this.h()},l(a){N('[data-svelte="svelte-1smsifb"]',document.head).forEach(h),n=g(a),m(e.$$.fragment,a),s=g(a),S=u(a,"HR",{class:!0}),E=g(a),x=u(a,"DIV",{class:!0});var o=f(x);B=u(o,"H1",{class:!0,style:!0});var r=f(B);R=u(r,"B",{});var c=f(R);C=d(c,"Simulation"),c.forEach(h),r.forEach(h),o.forEach(h),_=g(a),D=u(a,"HR",{class:!0}),L=g(a),V=u(a,"H4",{});var l=f(V);U=d(l,"Scenario: "),J=d(l,t[1]),q=d(l," Number of Containers: "),A=d(l,t[2]),P=d(l,"."),l.forEach(h),z=g(a),F=u(a,"DIV",{class:!0});var i=f(F);G=u(i,"DIV",{class:!0});var p=f(G);M=u(p,"BUTTON",{class:!0});var v=f(M);Q=d(v,"Start Simulation"),v.forEach(h),p.forEach(h),K=g(i),X=u(i,"DIV",{class:!0});var w=f(X);Y=u(w,"BUTTON",{class:!0});var b=f(Y);Z=d(b,"Stop Simulation"),b.forEach(h),w.forEach(h),tt=g(i),nt=u(i,"DIV",{class:!0});var k=f(nt);et=u(k,"BUTTON",{class:!0});var $=f(et);st=d($,"Reset WS Connection"),$.forEach(h),k.forEach(h),i.forEach(h),at=g(a),ot=u(a,"HR",{class:!0}),rt=g(a),ct=u(a,"SECTION",{class:!0});var O=f(ct);lt=u(O,"H3",{});var T=f(lt);it=d(T,"Application Logs"),T.forEach(h),O.forEach(h),ut=g(a),ft=u(a,"BUTTON",{class:!0});var j=f(ft);dt=d(j,"Clear Logs"),j.forEach(h),ht=g(a),kt&&kt.l(a),gt=g(a),mt=u(a,"BR",{}),pt=g(a),vt=u(a,"HR",{class:!0}),this.h()},h(){document.title="Simulation",O(S,"class","svelte-drd2kv"),O(B,"class","w3-text-yellow"),T(B,"text-shadow","1px 1px 0 #444"),O(x,"class","w3-panel w3-blue"),O(D,"class","svelte-drd2kv"),O(M,"class","w3-col w3-input w3-border"),O(G,"class","w3-third"),O(Y,"class","w3-col w3-input w3-border"),O(X,"class","w3-third"),O(et,"class","w3-col w3-input w3-border"),O(nt,"class","w3-third"),O(F,"class","w3-row w3-section"),O(ot,"class","svelte-drd2kv"),O(ct,"class","page-headline"),O(ft,"class","w3-col w3-input w3-border w3-button"),O(vt,"class","svelte-drd2kv")},m(o,r){a(o,n,r),v(e,o,r),a(o,s,r),a(o,S,r),a(o,E,r),a(o,x,r),p(x,B),p(B,R),p(R,C),a(o,_,r),a(o,D,r),a(o,L,r),a(o,V,r),p(V,U),p(V,J),p(V,q),p(V,A),p(V,P),a(o,z,r),a(o,F,r),p(F,G),p(G,M),p(M,Q),p(F,K),p(F,X),p(X,Y),p(Y,Z),p(F,tt),p(F,nt),p(nt,et),p(et,st),a(o,at,r),a(o,ot,r),a(o,rt,r),a(o,ct,r),p(ct,lt),p(lt,it),a(o,ut,r),a(o,ft,r),p(ft,dt),a(o,ht,r),kt&&kt.m(o,r),a(o,gt,r),a(o,mt,r),a(o,pt,r),a(o,vt,r),wt=!0,St||(bt=[j(M,"click",t[7]),j(Y,"click",t[8]),j(et,"click",t[9]),j(ft,"click",t[4])],St=!0)},p(t,[n]){(!wt||2&n)&&w(J,t[1]),(!wt||4&n)&&w(A,t[2]),"configurations"in t[0]?kt?(kt.p(t,n),1&n&&o(kt,1)):(kt=W(t),kt.c(),o(kt,1),kt.m(gt.parentNode,gt)):kt&&(H(),b(kt,1,1,(()=>{kt=null})),$())},i(t){wt||(o(e.$$.fragment,t),o(kt),wt=!0)},o(t){b(e.$$.fragment,t),b(kt),wt=!1},d(t){t&&h(n),k(e,t),t&&h(s),t&&h(S),t&&h(E),t&&h(x),t&&h(_),t&&h(D),t&&h(L),t&&h(V),t&&h(z),t&&h(F),t&&h(at),t&&h(ot),t&&h(rt),t&&h(ct),t&&h(ut),t&&h(ft),t&&h(ht),kt&&kt.d(t),t&&h(gt),t&&h(mt),t&&h(pt),t&&h(vt),St=!1,y(bt)}}}function M(t,n,e){let s=[],a={};const o=V.subscribe((t=>{s=t})),r=U.subscribe((t=>{e(0,a=t)}));let c=[];x((()=>{o(),r();for(let t=0;t<c.length;t++)c[t].close()}));let l="Please create and select a scenario before starting the simulation.",i=!1,u=0,f=[],d={};function h(){for(const[t,n]of Object.entries(d))e(3,d[t]=[],d)}async function g(t){if(!i)return void D.danger("please create and activate a scenario first.");"start"==t&&h(),L("/simulation","POST",{command:t,configs:a},(function(t){t.data&&D.success("simulation started.")}))}function m(){for(var t=0;t<c.length;t++)ws=c[t],ws.close()}c=[],B((async()=>{for(let n=0;n<s.length;n++)s[n].activated&&(e(1,l=s[n].name),i=!0);"configurations"in a&&e(2,u=a.configurations.length);for(var t=0;t<u;t++){e(3,d[t.toString()]=[],d);let n="ws://localhost:8000/simulation/ws/"+t.toString(),s=new WebSocket(n);s.onopen=function(){window.console.log("Successfully connected to the echo websocket server...")},s.onmessage=function(t){let n=JSON.parse(t.data);console.log(n,"printing JSON now");let s=n.client_index,a=JSON.parse(n.data);"status"in a?f[s]=a.status:e(3,d[s]=[...d[s],a],d)},c.push(s)}}));return[a,l,u,d,h,g,m,()=>g("start"),()=>g("stop"),()=>m(),function(n,s){t.$$.not_equal(d[s.toString()],n)&&(d[s.toString()]=n,e(3,d))}]}export default class extends t{constructor(t){super(),n(this,t,M,G,e,{})}}
