import{S as t,i as e,s as a,e as o,t as n,c as s,a as r,g as l,d as i,f as c,F as u,h as d,k as f,n as h,b as m,G as p,H as g,a4 as v,a5 as w,j as E,m as S,o as b,a6 as k,v as y,r as $,w as I,Q as D,z as T,a7 as V,l as x,u as O,M as N,N as M,L as C,R as H,B as L}from"../../chunks/vendor-5d015fce.js";import{T as j}from"../../chunks/index-b7ca9129.js";import{T as B,n as P,x as R,a as F,g as _}from"../../chunks/requests-b02e315d.js";import{s as A,a as K,b as U}from"../../chunks/store-50f97f41.js";/* empty css                                                       */function q(t){let e,a,f,h,m,p,g=t[2].frame+"",v=t[2].timestamp.toFixed(3)+"";return{c(){e=o("h6"),a=n("Frame: "),f=n(g),h=n(" at time t="),m=n(v),p=n(" seconds.")},l(t){e=s(t,"H6",{});var o=r(e);a=l(o,"Frame: "),f=l(o,g),h=l(o," at time t="),m=l(o,v),p=l(o," seconds."),o.forEach(i)},m(t,o){c(t,e,o),u(e,a),u(e,f),u(e,h),u(e,m),u(e,p)},p(t,e){4&e&&g!==(g=t[2].frame+"")&&d(f,g),4&e&&v!==(v=t[2].timestamp.toFixed(3)+"")&&d(m,v)},d(t){t&&i(e)}}}function W(t){let e,a,n,l,d,v,w=t[0]&&q(t);return{c(){e=o("div"),w&&w.c(),a=f(),n=o("img"),this.h()},l(t){e=s(t,"DIV",{ref:!0,class:!0});var o=r(e);w&&w.l(o),a=h(o),n=s(o,"IMG",{src:!0,alt:!0}),o.forEach(i),this.h()},h(){n.src!==(l=t[1])&&m(n,"src",l),m(n,"alt",J),m(e,"ref","display"),m(e,"class","image-display")},m(t,o){c(t,e,o),w&&w.m(e,null),u(e,a),u(e,n),d||(v=p(e,"click",z),d=!0)},p(t,[o]){t[0]?w?w.p(t,o):(w=q(t),w.c(),w.m(e,a)):w&&(w.d(1),w=null),2&o&&n.src!==(l=t[1])&&m(n,"src",l)},i:g,o:g,d(t){t&&i(e),w&&w.d(),d=!1,v()}}}let J="carla viewer";function z(){console.log(frame)}function G(t,e,a){let{sensorName:o=""}=e,{showStats:n=!0}=e,{src:s=""}=e,{meta:r={frame:0,timestamp:0}}=e,{sensorData:l={}}=e;return t.$$set=t=>{"sensorName"in t&&a(3,o=t.sensorName),"showStats"in t&&a(0,n=t.showStats),"src"in t&&a(1,s=t.src),"meta"in t&&a(2,r=t.meta),"sensorData"in t&&a(4,l=t.sensorData)},[n,s,r,o,l]}class Q extends t{constructor(t){super(),e(this,t,G,W,a,{sensorName:3,showStats:0,src:1,meta:2,sensorData:4})}}var X=[{latitude:.0009193044393214223,longitude:.001347095566868799,altitude:8},{latitude:.0008084837556765478,longitude:.0013115403148145012,altitude:8},{latitude:.0007186522272633056,longitude:.001383405537544063,altitude:8},{latitude:.0006288206988642742,longitude:.0013115403148145012,altitude:8},{latitude:.0005389891704510319,longitude:.001383405537544063,altitude:7.5},{latitude:.0004491576420520005,longitude:.0013115403148145012,altitude:6},{latitude:.0003593261136387582,longitude:.001383405537544063,altitude:5},{latitude:.00026949458522551595,longitude:.0013115403148145012,altitude:3},{latitude:.00017966305681227368,longitude:.001383405537544063,altitude:2.5},{latitude:8983152841324227e-20,longitude:.0013115403148145012,altitude:2},{latitude:0,longitude:.001383405537544063,altitude:2},{latitude:-8983152842745312e-20,longitude:.0013115403148145012,altitude:2},{latitude:-.00017966305682648454,longitude:.001383405537544063,altitude:1},{latitude:-.00026949458522551595,longitude:.0013115403148145012,altitude:1}];function Y(t){let e,a,g,T,V,x,O,N,M,C,H,L,j,P,R,F,_,A,K,U,q,W,J,z,G,X,Y,Z,tt,et,at,ot,nt,st,rt,lt,it,ct,ut,dt,ft,ht,mt,pt,gt,vt,wt,Et,St,bt,kt,yt,$t,It,Dt,Tt,Vt,xt,Ot,Nt,Mt,Ct,Ht,Lt,jt,Bt,Pt,Rt,Ft,_t,At,Kt,Ut,qt,Wt,Jt,zt,Gt,Qt,Xt,Yt,Zt,te=t[4].throttle.toFixed(3)+"",ee=t[4].brake.toFixed(3)+"",ae=t[4].steer.toFixed(3)+"";function oe(e){t[12](e)}function ne(e){t[13](e)}e=new B({});let se={sensorName:"autopilot-camera1",showStats:!0};function re(e){t[14](e)}function le(e){t[15](e)}void 0!==t[0]&&(se.src=t[0]),void 0!==t[2]&&(se.meta=t[2]),H=new Q({props:se}),v.push((()=>w(H,"src",oe))),v.push((()=>w(H,"meta",ne)));let ie={sensorName:"autopilot-camera2",showStats:!0};return void 0!==t[1]&&(ie.src=t[1]),void 0!==t[3]&&(ie.meta=t[3]),R=new Q({props:ie}),v.push((()=>w(R,"src",re))),v.push((()=>w(R,"meta",le))),{c(){E(e.$$.fragment),a=f(),g=o("div"),T=o("div"),V=o("div"),x=o("div"),O=o("div"),N=o("h4"),M=n("Dash Cam"),C=f(),E(H.$$.fragment),P=f(),E(R.$$.fragment),A=f(),K=o("div"),U=o("h4"),q=n("Manual Control"),W=f(),J=o("input"),z=f(),G=o("h4"),X=n("Vehicle Inputs"),Y=f(),Z=o("div"),tt=o("div"),et=o("label"),at=n("Throttle:"),ot=f(),nt=o("div"),st=o("div"),rt=n(te),lt=f(),it=o("div"),ct=o("div"),ut=o("label"),dt=n("Brake:"),ft=f(),ht=o("div"),mt=o("div"),pt=n(ee),gt=f(),vt=o("div"),wt=o("div"),Et=o("label"),St=n("Steer:"),bt=f(),kt=o("div"),yt=o("div"),$t=n(ae),It=f(),Dt=o("div"),Tt=o("div"),Vt=o("h4"),xt=n("Position"),Ot=f(),Nt=o("p"),Mt=n(t[6]),Ct=f(),Ht=o("div"),Lt=o("h4"),jt=n("Orientation"),Bt=f(),Pt=o("p"),Rt=n(t[7]),Ft=f(),_t=o("div"),At=o("h4"),Kt=n("Speed"),Ut=f(),qt=o("p"),Wt=n(t[5]),Jt=f(),zt=o("div"),Gt=o("button"),Qt=n("Reset Vehicle"),this.h()},l(o){S(e.$$.fragment,o),a=h(o),g=s(o,"DIV",{class:!0});var n=r(g);T=s(n,"DIV",{class:!0});var c=r(T);V=s(c,"DIV",{class:!0});var u=r(V);x=s(u,"DIV",{class:!0});var d=r(x);O=s(d,"DIV",{class:!0});var f=r(O);N=s(f,"H4",{});var m=r(N);M=l(m,"Dash Cam"),m.forEach(i),C=h(f),S(H.$$.fragment,f),P=h(f),S(R.$$.fragment,f),f.forEach(i),A=h(d),K=s(d,"DIV",{class:!0});var p=r(K);U=s(p,"H4",{});var v=r(U);q=l(v,"Manual Control"),v.forEach(i),W=h(p),J=s(p,"INPUT",{type:!0}),z=h(p),G=s(p,"H4",{});var w=r(G);X=l(w,"Vehicle Inputs"),w.forEach(i),Y=h(p),Z=s(p,"DIV",{});var E=r(Z);tt=s(E,"DIV",{cols:!0,class:!0});var b=r(tt);et=s(b,"LABEL",{for:!0});var k=r(et);at=l(k,"Throttle:"),k.forEach(i),b.forEach(i),ot=h(E),nt=s(E,"DIV",{class:!0});var y=r(nt);st=s(y,"DIV",{class:!0});var $=r(st);rt=l($,te),$.forEach(i),y.forEach(i),E.forEach(i),lt=h(p),it=s(p,"DIV",{});var I=r(it);ct=s(I,"DIV",{class:!0});var D=r(ct);ut=s(D,"LABEL",{for:!0});var L=r(ut);dt=l(L,"Brake:"),L.forEach(i),D.forEach(i),ft=h(I),ht=s(I,"DIV",{class:!0});var j=r(ht);mt=s(j,"DIV",{class:!0});var B=r(mt);pt=l(B,ee),B.forEach(i),j.forEach(i),I.forEach(i),gt=h(p),vt=s(p,"DIV",{});var F=r(vt);wt=s(F,"DIV",{class:!0});var _=r(wt);Et=s(_,"LABEL",{for:!0});var Q=r(Et);St=l(Q,"Steer:"),Q.forEach(i),_.forEach(i),bt=h(F),kt=s(F,"DIV",{cols:!0,class:!0});var Xt=r(kt);yt=s(Xt,"DIV",{class:!0});var Yt=r(yt);$t=l(Yt,ae),Yt.forEach(i),Xt.forEach(i),F.forEach(i),It=h(p),Dt=s(p,"DIV",{class:!0});var Zt=r(Dt);Tt=s(Zt,"DIV",{});var oe=r(Tt);Vt=s(oe,"H4",{});var ne=r(Vt);xt=l(ne,"Position"),ne.forEach(i),Ot=h(oe),Nt=s(oe,"P",{class:!0});var se=r(Nt);Mt=l(se,t[6]),se.forEach(i),oe.forEach(i),Ct=h(Zt),Ht=s(Zt,"DIV",{});var re=r(Ht);Lt=s(re,"H4",{});var le=r(Lt);jt=l(le,"Orientation"),le.forEach(i),Bt=h(re),Pt=s(re,"P",{class:!0});var ie=r(Pt);Rt=l(ie,t[7]),ie.forEach(i),re.forEach(i),Ft=h(Zt),_t=s(Zt,"DIV",{});var ce=r(_t);At=s(ce,"H4",{});var ue=r(At);Kt=l(ue,"Speed"),ue.forEach(i),Ut=h(ce),qt=s(ce,"P",{class:!0});var de=r(qt);Wt=l(de,t[5]),de.forEach(i),ce.forEach(i),Zt.forEach(i),Jt=h(p),zt=s(p,"DIV",{class:!0});var fe=r(zt);Gt=s(fe,"BUTTON",{class:!0});var he=r(Gt);Qt=l(he,"Reset Vehicle"),he.forEach(i),fe.forEach(i),p.forEach(i),d.forEach(i),u.forEach(i),c.forEach(i),n.forEach(i),this.h()},h(){m(O,"class","col-xl-6"),m(J,"type","checkbox"),m(et,"for","range-throttle"),m(tt,"cols","2"),m(tt,"class","align-self-center"),m(st,"class","mt-2"),m(nt,"class","align-self-center"),m(ut,"for","range-brake"),m(ct,"class","align-self-center"),m(mt,"class","mt-2"),m(ht,"class","align-self-center"),m(Et,"for","range-throttle"),m(wt,"class","align-self-center"),m(yt,"class","mt-2"),m(kt,"cols","2"),m(kt,"class","align-self-center"),m(Nt,"class","svelte-au1azq"),m(Pt,"class","svelte-au1azq"),m(qt,"class","svelte-au1azq"),m(Dt,"class","mt-3"),m(Gt,"class","my-1 align-self-center"),m(zt,"class","text-center"),m(K,"class","col-xl-6"),m(x,"class","w3-container"),m(V,"class","autopilot"),m(T,"class","w3-responsive"),m(g,"class","w3-container")},m(o,n){b(e,o,n),c(o,a,n),c(o,g,n),u(g,T),u(T,V),u(V,x),u(x,O),u(O,N),u(N,M),u(O,C),b(H,O,null),u(O,P),b(R,O,null),u(x,A),u(x,K),u(K,U),u(U,q),u(K,W),u(K,J),u(K,z),u(K,G),u(G,X),u(K,Y),u(K,Z),u(Z,tt),u(tt,et),u(et,at),u(Z,ot),u(Z,nt),u(nt,st),u(st,rt),u(K,lt),u(K,it),u(it,ct),u(ct,ut),u(ut,dt),u(it,ft),u(it,ht),u(ht,mt),u(mt,pt),u(K,gt),u(K,vt),u(vt,wt),u(wt,Et),u(Et,St),u(vt,bt),u(vt,kt),u(kt,yt),u(yt,$t),u(K,It),u(K,Dt),u(Dt,Tt),u(Tt,Vt),u(Vt,xt),u(Tt,Ot),u(Tt,Nt),u(Nt,Mt),u(Dt,Ct),u(Dt,Ht),u(Ht,Lt),u(Lt,jt),u(Ht,Bt),u(Ht,Pt),u(Pt,Rt),u(Dt,Ft),u(Dt,_t),u(_t,At),u(At,Kt),u(_t,Ut),u(_t,qt),u(qt,Wt),u(K,Jt),u(K,zt),u(zt,Gt),u(Gt,Qt),Xt=!0,Yt||(Zt=[p(J,"change",t[8]),p(Gt,"click",t[9])],Yt=!0)},p(t,e){const a={};!L&&1&e[0]&&(L=!0,a.src=t[0],k((()=>L=!1))),!j&&4&e[0]&&(j=!0,a.meta=t[2],k((()=>j=!1))),H.$set(a);const o={};!F&&2&e[0]&&(F=!0,o.src=t[1],k((()=>F=!1))),!_&&8&e[0]&&(_=!0,o.meta=t[3],k((()=>_=!1))),R.$set(o),(!Xt||16&e[0])&&te!==(te=t[4].throttle.toFixed(3)+"")&&d(rt,te),(!Xt||16&e[0])&&ee!==(ee=t[4].brake.toFixed(3)+"")&&d(pt,ee),(!Xt||16&e[0])&&ae!==(ae=t[4].steer.toFixed(3)+"")&&d($t,ae),(!Xt||64&e[0])&&d(Mt,t[6]),(!Xt||128&e[0])&&d(Rt,t[7]),(!Xt||32&e[0])&&d(Wt,t[5])},i(t){Xt||(y(e.$$.fragment,t),y(H.$$.fragment,t),y(R.$$.fragment,t),Xt=!0)},o(t){$(e.$$.fragment,t),$(H.$$.fragment,t),$(R.$$.fragment,t),Xt=!1},d(t){I(e,t),t&&i(a),t&&i(g),I(H),I(R),Yt=!1,D(Zt)}}}let Z=.1;function tt(t,e){let a=0;for(let o=0;o<3;o++)a+=t[o]*e[o];return a}function et(t){return Math.sqrt(tt(t,t))}function at(t,e,a){let{title:o}=e,{input_data:n}=e,s="",r="",l={timestamp:0,frame:0},i={timestamp:0,frame:0},c=[{name:"autopilot-gnss",type:"gnss"},{name:"autopilot-imu",type:"imu"},{name:"autopilot-tachometer",type:"tachometer"},{name:"autopilot-camera1",type:"camera"},{name:"autopilot-camera2",type:"camera"}],u=!1,d=null,f=!1,h=0,m=X,p=0,g=[0,-1,0],v={throttle:0,brake:0,steer:0},w={Kp:.5,Ki:.001,Kd:.02,tau:1,integrator:0,differentiator:0,lastError:0,lastMeasurement:0},E={Kp:.01,Ki:0,Kd:.01,tau:1,integrator:0,differentiator:0,lastError:0,lastMeasurement:0},S={},b="",k="-",y="",$="Lat: -, Lon: -, Alt: -",I="",D="-";function x(t){let e=S[t];return e||null}function O(t){let e=String.fromCharCode(t.keyCode).toLowerCase();u&&d===e||(u=!0,d=e,"w"===e?a(4,v.throttle=1,v):"a"===e?a(4,v.steer=-1,v):"s"===e?a(4,v.brake=1,v):"d"===e&&a(4,v.steer=1,v),M())}function N(t){u=!1;let e=String.fromCharCode(t.keyCode).toLowerCase();"w"===e?a(4,v.throttle=0,v):"a"===e?a(4,v.steer=0,v):"s"===e?a(4,v.brake=0,v):"d"===e&&a(4,v.steer=0,v),M()}function M(){V({method:"POST",url:"/control",data:v,headers:{"content-type":"application/json"}}).catch((function(t){P.danger("apply control failed")}))}function C(){console.log("entering autopilotControl function",m),console.log("sensorData[autopilot-tachometer]",S["autopilot-tachometer"]);let t=S["autopilot-tachometer"].speed,e=S["autopilot-gnss"],o=S["autopilot-imu"].orientation;console.log("test");let n=n;console.log("test");let s=m[p];console.log("test"),console.log("Current: "+t+" m/s, Target: "+n+" m/s"),console.log("Current: "+e+", Target: "+s);let r=function(t,e){let a=e-t,o=t,n=w.Kp*a,s=w.integrator+.5*w.Ki*Z*(w.lastError+a),r=(2*w.Kd*(o-w.lastMeasurement)+(2*w.tau-Z)*w.differentiator)/(2*w.tau+Z),l=Math.min(Math.max(n+s+r,-1),1);return w.integrator=s,w.differentiator=r,w.lastError=a,w.lastMeasurement=o,l}(t,n),l=function(t,e,a){let o=[60*(a.longitude-t.longitude)*1852,60*-(a.latitude-t.latitude)*1852,0],n=Math.acos(Math.min(Math.max(tt(o,g)/(et(o)*et(g)),-1),1));n=n/Math.PI*180,function(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}(g,o)[2]<0&&(n=360-n);let s=n-e;s>180?s-=360:s<-180&&(s+=360);let r=e,l=E.Kp*s,i=E.integrator+.5*E.Ki*Z*(E.lastError+s),c=(2*E.Kd*(r-E.lastMeasurement)+(2*E.tau-Z)*E.differentiator)/(2*E.tau+Z),u=Math.min(Math.max(l+i+c,-1),1);E.integrator=i,E.differentiator=c,E.lastError=s,E.lastMeasurement=r,et(o)<2&&p++;p>=m.length&&(p=0);return u}(e,o,s);console.log("Computed Acceleration: "+r+", Steering: "+l),r>=0?(a(4,v.throttle=Math.min(r,.75),v),a(4,v.brake=0,v)):(a(4,v.throttle=0,v),a(4,v.brake=Math.min(Math.abs(r),1),v)),l>v.steer+.1?l=v.steer+.1:l<v.steer-.1&&(l=v.steer-.1),a(4,v.steer=l>=0?Math.min(1,l):Math.max(-1,l),v),console.log("Throttle: "+v.throttle+", Brake: "+v.brake+", Steer: "+v.steer),M()}return T((async()=>{V({method:"POST",url:"/config",headers:{"content-type":"application/json"},data:{newSensors:c}}).then((t=>{c.forEach((t=>{!function(t){let e="http://localhost:8000/sensor/"+t.type+"/"+t.name+"/websocket";e=e.replace("http","ws");let o=new WebSocket(e);o.onopen=function(){console.log("WebSocket connection established with "+e)},o.onmessage=function(e){let o=JSON.parse(e.data);S[t.name]=o,"autopilot-camera1"==t.name&&(a(0,s="data:image/jpeg;base64,"+o.image),a(2,l={timestamp:o.timestamp,frame:o.frame})),"autopilot-camera2"==t.name&&(a(1,r="data:image/jpeg;base64,"+o.image),a(3,i={timestamp:o.timestamp,frame:o.frame})),"autopilot-tachometer"==t.name&&(b=x("autopilot-tachometer"),b&&a(5,k=b.speed.toFixed(3)+" m/s")),"autopilot-gnss"==t.name&&(y=x("autopilot-gnss"),y&&a(6,$="Lat: "+y.latitude+" °\nLon: "+y.longitude+" °\nAlt: "+y.altitude.toFixed(2)+" m")),"autopilot-imu"==t.name&&(I=x("autopilot-imu"),I&&a(7,D=I.orientation.toFixed(3)+" °"))}}(t)}));let e={enabled:!0,updateInterval:.1,imageWidth:800,imageHeight:600,fov:90},o="/sensor/camera/autopilot-camera1";V({method:"POST",url:o,data:{settings:e},headers:{"content-type":"application/json"}}).catch((function(t){P.danger("axos request 1 to carla failed")})),e.position={x:-6,y:0,z:5},e.rotation={roll:0,pitch:-35,yaw:0},o="/sensor/camera/autopilot-camera2",V({method:"POST",url:o,data:{settings:e},headers:{"content-type":"application/json"}}).catch((function(t){P.danger("axos request 2 to carla failed")}));o="/sensor/imu/autopilot-imu",V({method:"POST",url:o,data:{settings:{enabled:!0,updateInterval:.1}},headers:{"content-type":"application/json"}}).catch((function(t){P.danger("axos request 3 to carla failed")}));o="/sensor/gnss/autopilot-gnss",V({method:"POST",url:o,data:{settings:{enabled:!0,updateInterval:.1}},headers:{"content-type":"application/json"}}).catch((function(t){P.danger("axos request 4 to carla failed")}));o="/sensor/tachometer/autopilot-tachometer",V({method:"POST",url:o,data:{settings:{enabled:!0,updateInterval:.1}},headers:{"content-type":"application/json"}}).then((()=>{P.info("autopilot mode on.")})),P.success("The required sensors for the autopilot have been successfully created.")}),(t=>{P.danger("failed to call /config sensor")}))})),t.$$set=t=>{"title"in t&&a(10,o=t.title),"input_data"in t&&a(11,n=t.input_data)},[s,r,l,i,v,k,$,D,function(){f=!f,console.log("manual control:",f),f?(console.log("switching manual control."),window.addEventListener("keydown",O),window.addEventListener("keyup",N),h&&clearInterval(h),a(4,v.throttle=0,v),a(4,v.brake=1,v),a(4,v.steer=0,v)):(console.log("switching auto control with path.",m),window.removeEventListener("keydown",O),window.removeEventListener("keyup",N),h=setInterval(C,20))},function(){p=0,a(4,v.throttle=0,v),a(4,v.brake=1,v),a(4,v.steer=0,v),w.integrator=0,w.differentiator=0,w.lastError=0,w.lastMeasurement=0,E.integrator=0,E.differentiator=0,E.lastError=0,E.lastMeasurement=0,V({method:"POST",url:"/config",headers:{"content-type":"application/json"},data:{simulation:{reset:!0}}}).then((()=>{console.log("Simulation was reset!")}),(t=>{console.log(t)}))},o,n,function(t){s=t,a(0,s)},function(t){l=t,a(2,l)},function(t){r=t,a(1,r)},function(t){i=t,a(3,i)}]}class ot extends t{constructor(t){super(),e(this,t,at,Y,a,{title:10,input_data:11},[-1,-1])}}function nt(t){let e,a,d,v,w,E,S,b,k,y;return{c(){e=o("div"),a=o("span"),d=n("×"),v=f(),w=o("img"),S=f(),b=o("div"),this.h()},l(t){e=s(t,"DIV",{id:!0,class:!0});var o=r(e);a=s(o,"SPAN",{class:!0});var n=r(a);d=l(n,"×"),n.forEach(i),v=h(o),w=s(o,"IMG",{class:!0,id:!0,src:!0}),S=h(o),b=s(o,"DIV",{id:!0,class:!0}),r(b).forEach(i),o.forEach(i),this.h()},h(){m(a,"class","close svelte-rk4oiy"),m(w,"class","modal-content svelte-rk4oiy"),m(w,"id","img01"),w.src!==(E="")&&m(w,"src",""),m(b,"id","caption"),m(b,"class","svelte-rk4oiy"),m(e,"id","myModal"),m(e,"class","modal svelte-rk4oiy")},m(t,o){c(t,e,o),u(e,a),u(a,d),u(e,v),u(e,w),u(e,S),u(e,b),k||(y=p(a,"click",st),k=!0)},p:g,i:g,o:g,d(t){t&&i(e),k=!1,y()}}}function st(){document.getElementById("myModal").style.display="none"}function rt(t,e){var a=document.getElementById("myModal"),o=document.getElementById("img01"),n=document.getElementById("caption");a.style.display="block",o.src=t,n.innerHTML=e}function lt(t,e,a){return[rt]}class it extends t{constructor(t){super(),e(this,t,lt,nt,a,{changeImage:0})}get changeImage(){return rt}}function ct(t,e,a){const o=t.slice();return o[33]=e[a],o[35]=a,o}function ut(t,e,a){const o=t.slice();return o[36]=e[a],o[35]=a,o}function dt(t,e,a){const o=t.slice();return o[36]=e[a],o[35]=a,o}function ft(t,e,a){const o=t.slice();return o[39]=e[a],o[40]=e,o[41]=a,o}function ht(t){let e,a,g,v,w,E,S,b,k,I,T,V,x,N,M,C,H,j,B,P,R,F,_,A,K,U,q,W,J,z,G,Q,X,Y,Z,tt,et="configurations"in t[1]&&mt(t);return{c(){e=o("h4"),a=n("Scenario: "),g=n(t[3]),v=n(" Number of Containers: "),w=n(t[4]),E=n("."),S=f(),b=o("div"),k=o("div"),I=o("button"),T=n("Start Simulation"),V=f(),x=o("div"),N=o("button"),M=n("Stop Simulation"),C=f(),H=o("div"),j=o("button"),B=n("Reset WS Connection"),P=f(),R=o("hr"),F=f(),_=o("section"),A=o("h3"),K=n("Application Logs"),U=f(),q=o("button"),W=n("Clear Logs"),J=f(),et&&et.c(),z=f(),G=o("br"),Q=f(),X=o("hr"),this.h()},l(o){e=s(o,"H4",{});var n=r(e);a=l(n,"Scenario: "),g=l(n,t[3]),v=l(n," Number of Containers: "),w=l(n,t[4]),E=l(n,"."),n.forEach(i),S=h(o),b=s(o,"DIV",{class:!0});var c=r(b);k=s(c,"DIV",{class:!0});var u=r(k);I=s(u,"BUTTON",{class:!0});var d=r(I);T=l(d,"Start Simulation"),d.forEach(i),u.forEach(i),V=h(c),x=s(c,"DIV",{class:!0});var f=r(x);N=s(f,"BUTTON",{class:!0});var m=r(N);M=l(m,"Stop Simulation"),m.forEach(i),f.forEach(i),C=h(c),H=s(c,"DIV",{class:!0});var p=r(H);j=s(p,"BUTTON",{class:!0});var y=r(j);B=l(y,"Reset WS Connection"),y.forEach(i),p.forEach(i),c.forEach(i),P=h(o),R=s(o,"HR",{class:!0}),F=h(o),_=s(o,"SECTION",{class:!0});var $=r(_);A=s($,"H3",{});var D=r(A);K=l(D,"Application Logs"),D.forEach(i),$.forEach(i),U=h(o),q=s(o,"BUTTON",{class:!0});var O=r(q);W=l(O,"Clear Logs"),O.forEach(i),J=h(o),et&&et.l(o),z=h(o),G=s(o,"BR",{}),Q=h(o),X=s(o,"HR",{class:!0}),this.h()},h(){m(I,"class","w3-col w3-input w3-border"),m(k,"class","w3-third"),m(N,"class","w3-col w3-input w3-border"),m(x,"class","w3-third"),m(j,"class","w3-col w3-input w3-border"),m(H,"class","w3-third"),m(b,"class","w3-row w3-section"),m(R,"class","svelte-drd2kv"),m(_,"class","page-headline"),m(q,"class","w3-col w3-input w3-border w3-button"),m(X,"class","svelte-drd2kv")},m(o,n){c(o,e,n),u(e,a),u(e,g),u(e,v),u(e,w),u(e,E),c(o,S,n),c(o,b,n),u(b,k),u(k,I),u(I,T),u(b,V),u(b,x),u(x,N),u(N,M),u(b,C),u(b,H),u(H,j),u(j,B),c(o,P,n),c(o,R,n),c(o,F,n),c(o,_,n),u(_,A),u(A,K),c(o,U,n),c(o,q,n),u(q,W),c(o,J,n),et&&et.m(o,n),c(o,z,n),c(o,G,n),c(o,Q,n),c(o,X,n),Y=!0,Z||(tt=[p(I,"click",t[16]),p(N,"click",t[17]),p(j,"click",t[18]),p(q,"click",t[8])],Z=!0)},p(t,e){(!Y||8&e[0])&&d(g,t[3]),(!Y||16&e[0])&&d(w,t[4]),"configurations"in t[1]?et?(et.p(t,e),2&e[0]&&y(et,1)):(et=mt(t),et.c(),y(et,1),et.m(z.parentNode,z)):et&&(L(),$(et,1,1,(()=>{et=null})),O())},i(t){Y||(y(et),Y=!0)},o(t){$(et),Y=!1},d(t){t&&i(e),t&&i(S),t&&i(b),t&&i(P),t&&i(R),t&&i(F),t&&i(_),t&&i(U),t&&i(q),t&&i(J),et&&et.d(t),t&&i(z),t&&i(G),t&&i(Q),t&&i(X),Z=!1,D(tt)}}}function mt(t){let e,a,o=t[1].configurations.length>0&&pt(t);return{c(){o&&o.c(),e=x()},l(t){o&&o.l(t),e=x()},m(t,n){o&&o.m(t,n),c(t,e,n),a=!0},p(t,a){t[1].configurations.length>0?o?(o.p(t,a),2&a[0]&&y(o,1)):(o=pt(t),o.c(),y(o,1),o.m(e.parentNode,e)):o&&(L(),$(o,1,1,(()=>{o=null})),O())},i(t){a||(y(o),a=!0)},o(t){$(o),a=!1},d(t){o&&o.d(t),t&&i(e)}}}function pt(t){let e,a,o=t[1].configurations,n=[];for(let r=0;r<o.length;r+=1)n[r]=Et(ft(t,o,r));const s=t=>$(n[t],1,1,(()=>{n[t]=null}));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=x()},l(t){for(let e=0;e<n.length;e+=1)n[e].l(t);e=x()},m(t,o){for(let e=0;e<n.length;e+=1)n[e].m(t,o);c(t,e,o),a=!0},p(t,a){if(34&a[0]){let r;for(o=t[1].configurations,r=0;r<o.length;r+=1){const s=ft(t,o,r);n[r]?(n[r].p(s,a),y(n[r],1)):(n[r]=Et(s),n[r].c(),y(n[r],1),n[r].m(e.parentNode,e))}for(L(),r=o.length;r<n.length;r+=1)s(r);O()}},i(t){if(!a){for(let t=0;t<o.length;t+=1)y(n[t]);a=!0}},o(t){n=n.filter(Boolean);for(let e=0;e<n.length;e+=1)$(n[e]);a=!1},d(t){N(n,t),t&&i(e)}}}function gt(t){let e,a,o=t[41].toString()in t[5],n=o&&vt(t);return{c(){n&&n.c(),e=x()},l(t){n&&n.l(t),e=x()},m(t,o){n&&n.m(t,o),c(t,e,o),a=!0},p(t,a){32&a[0]&&(o=t[41].toString()in t[5]),o?n?(n.p(t,a),32&a[0]&&y(n,1)):(n=vt(t),n.c(),y(n,1),n.m(e.parentNode,e)):n&&(L(),$(n,1,1,(()=>{n=null})),O())},i(t){a||(y(n),a=!0)},o(t){$(n),a=!1},d(t){n&&n.d(t),t&&i(e)}}}function vt(t){let e,a,o=t[5][t[41].toString()].length>0,n=o&&wt(t);return{c(){n&&n.c(),e=x()},l(t){n&&n.l(t),e=x()},m(t,o){n&&n.m(t,o),c(t,e,o),a=!0},p(t,a){32&a[0]&&(o=t[5][t[41].toString()].length>0),o?n?(n.p(t,a),32&a[0]&&y(n,1)):(n=wt(t),n.c(),y(n,1),n.m(e.parentNode,e)):n&&(L(),$(n,1,1,(()=>{n=null})),O())},i(t){a||(y(n),a=!0)},o(t){$(n),a=!1},d(t){n&&n.d(t),t&&i(e)}}}function wt(t){let e,a,m,p,g,D,T=t[39].container_info.name+"";function V(e){t[19](e,t[41])}let x={title:t[39].container_info.name,headers:Object.keys(t[5][t[41].toString()][0])};return void 0!==t[5][t[41].toString()]&&(x.data=t[5][t[41].toString()]),p=new j({props:x}),v.push((()=>w(p,"data",V))),{c(){e=o("h5"),a=n(T),m=f(),E(p.$$.fragment)},l(t){e=s(t,"H5",{});var o=r(e);a=l(o,T),o.forEach(i),m=h(t),S(p.$$.fragment,t)},m(t,o){c(t,e,o),u(e,a),c(t,m,o),b(p,t,o),D=!0},p(e,o){t=e,(!D||2&o[0])&&T!==(T=t[39].container_info.name+"")&&d(a,T);const n={};2&o[0]&&(n.title=t[39].container_info.name),32&o[0]&&(n.headers=Object.keys(t[5][t[41].toString()][0])),!g&&32&o[0]&&(g=!0,n.data=t[5][t[41].toString()],k((()=>g=!1))),p.$set(n)},i(t){D||(y(p.$$.fragment,t),D=!0)},o(t){$(p.$$.fragment,t),D=!1},d(t){t&&i(e),t&&i(m),I(p,t)}}}function Et(t){let e,a,o=Object.keys(t[5]).length>0,n=o&&gt(t);return{c(){n&&n.c(),e=x()},l(t){n&&n.l(t),e=x()},m(t,o){n&&n.m(t,o),c(t,e,o),a=!0},p(t,a){32&a[0]&&(o=Object.keys(t[5]).length>0),o?n?(n.p(t,a),32&a[0]&&y(n,1)):(n=gt(t),n.c(),y(n,1),n.m(e.parentNode,e)):n&&(L(),$(n,1,1,(()=>{n=null})),O())},i(t){a||(y(n),a=!0)},o(t){$(n),a=!1},d(t){n&&n.d(t),t&&i(e)}}}function St(t){let e,a,d,g,v,w,E,S,b,k,y,$,I,T,V,x,O,N,C,H,L,j,B,P=t[6].length>0&&bt(t);return{c(){e=o("div"),a=o("div"),d=o("button"),g=n("Start Simulation"),v=f(),w=o("hr"),E=f(),S=o("div"),b=o("h1"),k=o("b"),y=n("Edit Files"),$=f(),P&&P.c(),I=f(),T=o("hr"),V=f(),x=o("div"),O=o("div"),N=o("button"),C=n("Delete Files"),H=f(),L=o("hr"),this.h()},l(t){e=s(t,"DIV",{class:!0});var o=r(e);a=s(o,"DIV",{class:!0});var n=r(a);d=s(n,"BUTTON",{class:!0});var c=r(d);g=l(c,"Start Simulation"),c.forEach(i),n.forEach(i),o.forEach(i),v=h(t),w=s(t,"HR",{class:!0}),E=h(t),S=s(t,"DIV",{class:!0});var u=r(S);b=s(u,"H1",{class:!0,style:!0});var f=r(b);k=s(f,"B",{});var m=r(k);y=l(m,"Edit Files"),m.forEach(i),f.forEach(i),u.forEach(i),$=h(t),P&&P.l(t),I=h(t),T=s(t,"HR",{class:!0}),V=h(t),x=s(t,"DIV",{class:!0});var p=r(x);O=s(p,"DIV",{class:!0});var D=r(O);N=s(D,"BUTTON",{class:!0});var M=r(N);C=l(M,"Delete Files"),M.forEach(i),D.forEach(i),p.forEach(i),H=h(t),L=s(t,"HR",{class:!0}),this.h()},h(){m(d,"class","w3-col w3-input w3-border"),m(a,"class","w3-rest"),m(e,"class","w3-row w3-section"),m(w,"class","svelte-drd2kv"),m(b,"class","w3-text-yellow"),M(b,"text-shadow","1px 1px 0 #444"),m(S,"class","w3-panel w3-blue"),m(T,"class","svelte-drd2kv"),m(N,"class","w3-col w3-input w3-border"),m(O,"class","w3-rest"),m(x,"class","w3-row w3-section"),m(L,"class","svelte-drd2kv")},m(o,n){c(o,e,n),u(e,a),u(a,d),u(d,g),c(o,v,n),c(o,w,n),c(o,E,n),c(o,S,n),u(S,b),u(b,k),u(k,y),c(o,$,n),P&&P.m(o,n),c(o,I,n),c(o,T,n),c(o,V,n),c(o,x,n),u(x,O),u(O,N),u(N,C),c(o,H,n),c(o,L,n),j||(B=[p(d,"click",t[11]),p(N,"click",t[13])],j=!0)},p(t,e){t[6].length>0?P?P.p(t,e):(P=bt(t),P.c(),P.m(I.parentNode,I)):P&&(P.d(1),P=null)},d(t){t&&i(e),t&&i(v),t&&i(w),t&&i(E),t&&i(S),t&&i($),P&&P.d(t),t&&i(I),t&&i(T),t&&i(V),t&&i(x),t&&i(H),t&&i(L),j=!1,D(B)}}}function bt(t){let e,a,n,l,d,p,g=Object.keys(t[6][0]),v=[];for(let o=0;o<g.length;o+=1)v[o]=kt(dt(t,g,o));let w=t[6],E=[];for(let o=0;o<w.length;o+=1)E[o]=Dt(ct(t,w,o));return{c(){e=o("div"),a=o("div"),n=o("table"),l=o("thead"),d=o("tr");for(let t=0;t<v.length;t+=1)v[t].c();p=f();for(let t=0;t<E.length;t+=1)E[t].c();this.h()},l(t){e=s(t,"DIV",{class:!0});var o=r(e);a=s(o,"DIV",{class:!0});var c=r(a);n=s(c,"TABLE",{class:!0,style:!0});var u=r(n);l=s(u,"THEAD",{});var f=r(l);d=s(f,"TR",{class:!0});var m=r(d);for(let e=0;e<v.length;e+=1)v[e].l(m);m.forEach(i),f.forEach(i),p=h(u);for(let e=0;e<E.length;e+=1)E[e].l(u);u.forEach(i),c.forEach(i),o.forEach(i),this.h()},h(){m(d,"class","w3-dark-grey"),m(n,"class","w3-table-all"),M(n,"width","100%"),m(a,"class","w3-responsive"),m(e,"class","w3-container")},m(t,o){c(t,e,o),u(e,a),u(a,n),u(n,l),u(l,d);for(let e=0;e<v.length;e+=1)v[e].m(d,null);u(n,p);for(let e=0;e<E.length;e+=1)E[e].m(n,null)},p(t,e){if(64&e[0]){let a;for(g=Object.keys(t[6][0]),a=0;a<g.length;a+=1){const o=dt(t,g,a);v[a]?v[a].p(o,e):(v[a]=kt(o),v[a].c(),v[a].m(d,null))}for(;a<v.length;a+=1)v[a].d(1);v.length=g.length}if(16448&e[0]){let a;for(w=t[6],a=0;a<w.length;a+=1){const o=ct(t,w,a);E[a]?E[a].p(o,e):(E[a]=Dt(o),E[a].c(),E[a].m(n,null))}for(;a<E.length;a+=1)E[a].d(1);E.length=w.length}},d(t){t&&i(e),N(v,t),N(E,t)}}}function kt(t){let e,a,f=t[36]+"";return{c(){e=o("th"),a=n(f)},l(t){e=s(t,"TH",{});var o=r(e);a=l(o,f),o.forEach(i)},m(t,o){c(t,e,o),u(e,a)},p(t,e){64&e[0]&&f!==(f=t[36]+"")&&d(a,f)},d(t){t&&i(e)}}}function yt(t){let e,a,f=t[33][t[36]]+"";return{c(){e=o("td"),a=n(f)},l(t){e=s(t,"TD",{});var o=r(e);a=l(o,f),o.forEach(i)},m(t,o){c(t,e,o),u(e,a)},p(t,e){64&e[0]&&f!==(f=t[33][t[36]]+"")&&d(a,f)},d(t){t&&i(e)}}}function $t(t){let e,a,f,h,m=t[33][t[36]]+"";return{c(){e=o("td"),a=n(m)},l(t){e=s(t,"TD",{});var o=r(e);a=l(o,m),o.forEach(i)},m(o,n){c(o,e,n),u(e,a),f||(h=p(e,"click",t[14]),f=!0)},p(t,e){64&e[0]&&m!==(m=t[33][t[36]]+"")&&d(a,m)},d(t){t&&i(e),f=!1,h()}}}function It(t){let e;function a(t,e){return"filename"==t[36]?$t:yt}let o=a(t),n=o(t);return{c(){n.c(),e=x()},l(t){n.l(t),e=x()},m(t,a){n.m(t,a),c(t,e,a)},p(t,s){o===(o=a(t))&&n?n.p(t,s):(n.d(1),n=o(t),n&&(n.c(),n.m(e.parentNode,e)))},d(t){n.d(t),t&&i(e)}}}function Dt(t){let e,a,n=Object.keys(t[6][0]),l=[];for(let o=0;o<n.length;o+=1)l[o]=It(ut(t,n,o));return{c(){e=o("tr");for(let t=0;t<l.length;t+=1)l[t].c();a=f()},l(t){e=s(t,"TR",{});var o=r(e);for(let e=0;e<l.length;e+=1)l[e].l(o);a=h(o),o.forEach(i)},m(t,o){c(t,e,o);for(let a=0;a<l.length;a+=1)l[a].m(e,null);u(e,a)},p(t,o){if(16448&o[0]){let s;for(n=Object.keys(t[6][0]),s=0;s<n.length;s+=1){const r=ut(t,n,s);l[s]?l[s].p(r,o):(l[s]=It(r),l[s].c(),l[s].m(e,a))}for(;s<l.length;s+=1)l[s].d(1);l.length=n.length}},d(t){t&&i(e),N(l,t)}}}function Tt(t){let e,a,d,g,D,T,V,x,O,N,M,C,H,L;function j(e){t[20](e)}let B={title:"AutoPilot Component"};return void 0!==t[7]&&(B.input_data=t[7]),x=new ot({props:B}),v.push((()=>w(x,"input_data",j))),{c(){e=o("div"),a=o("div"),d=o("button"),g=n("Start Simulation"),D=f(),T=o("hr"),V=f(),E(x.$$.fragment),N=f(),M=o("hr"),this.h()},l(t){e=s(t,"DIV",{class:!0});var o=r(e);a=s(o,"DIV",{class:!0});var n=r(a);d=s(n,"BUTTON",{class:!0});var c=r(d);g=l(c,"Start Simulation"),c.forEach(i),n.forEach(i),o.forEach(i),D=h(t),T=s(t,"HR",{class:!0}),V=h(t),S(x.$$.fragment,t),N=h(t),M=s(t,"HR",{class:!0}),this.h()},h(){m(d,"class","w3-col w3-input w3-border"),m(a,"class","w3-rest"),m(e,"class","w3-row w3-section"),m(T,"class","svelte-drd2kv"),m(M,"class","svelte-drd2kv")},m(o,n){c(o,e,n),u(e,a),u(a,d),u(d,g),c(o,D,n),c(o,T,n),c(o,V,n),b(x,o,n),c(o,N,n),c(o,M,n),C=!0,H||(L=p(d,"click",t[12]),H=!0)},p(t,e){const a={};!O&&128&e[0]&&(O=!0,a.input_data=t[7],k((()=>O=!1))),x.$set(a)},i(t){C||(y(x.$$.fragment,t),C=!0)},o(t){$(x.$$.fragment,t),C=!1},d(t){t&&i(e),t&&i(D),t&&i(T),t&&i(V),I(x,t),t&&i(N),t&&i(M),H=!1,L()}}}function Vt(t){let e,a,d,p,g,v,w,k,D,T,V,x,N,H,j,P,R,F,_;a=new B({});p=new it({props:{}}),t[15](p);let A="Communication"==t[2]&&ht(t),K="Static"==t[2]&&St(t),U="Driving Simulation"==t[2]&&Tt(t);return{c(){e=f(),E(a.$$.fragment),d=f(),E(p.$$.fragment),g=f(),v=o("hr"),w=f(),k=o("div"),D=o("h1"),T=o("b"),V=n("Simulation"),x=f(),N=o("hr"),H=f(),A&&A.c(),j=f(),K&&K.c(),P=f(),U&&U.c(),R=f(),F=o("hr"),this.h()},l(t){C('[data-svelte="svelte-1smsifb"]',document.head).forEach(i),e=h(t),S(a.$$.fragment,t),d=h(t),S(p.$$.fragment,t),g=h(t),v=s(t,"HR",{class:!0}),w=h(t),k=s(t,"DIV",{class:!0});var o=r(k);D=s(o,"H1",{class:!0,style:!0});var n=r(D);T=s(n,"B",{});var c=r(T);V=l(c,"Simulation"),c.forEach(i),n.forEach(i),o.forEach(i),x=h(t),N=s(t,"HR",{class:!0}),H=h(t),A&&A.l(t),j=h(t),K&&K.l(t),P=h(t),U&&U.l(t),R=h(t),F=s(t,"HR",{class:!0}),this.h()},h(){document.title="Simulation",m(v,"class","svelte-drd2kv"),m(D,"class","w3-text-yellow"),M(D,"text-shadow","1px 1px 0 #444"),m(k,"class","w3-panel w3-blue"),m(N,"class","svelte-drd2kv"),m(F,"class","svelte-drd2kv")},m(t,o){c(t,e,o),b(a,t,o),c(t,d,o),b(p,t,o),c(t,g,o),c(t,v,o),c(t,w,o),c(t,k,o),u(k,D),u(D,T),u(T,V),c(t,x,o),c(t,N,o),c(t,H,o),A&&A.m(t,o),c(t,j,o),K&&K.m(t,o),c(t,P,o),U&&U.m(t,o),c(t,R,o),c(t,F,o),_=!0},p(t,e){p.$set({}),"Communication"==t[2]?A?(A.p(t,e),4&e[0]&&y(A,1)):(A=ht(t),A.c(),y(A,1),A.m(j.parentNode,j)):A&&(L(),$(A,1,1,(()=>{A=null})),O()),"Static"==t[2]?K?K.p(t,e):(K=St(t),K.c(),K.m(P.parentNode,P)):K&&(K.d(1),K=null),"Driving Simulation"==t[2]?U?(U.p(t,e),4&e[0]&&y(U,1)):(U=Tt(t),U.c(),y(U,1),U.m(R.parentNode,R)):U&&(L(),$(U,1,1,(()=>{U=null})),O())},i(t){_||(y(a.$$.fragment,t),y(p.$$.fragment,t),y(A),y(U),_=!0)},o(t){$(a.$$.fragment,t),$(p.$$.fragment,t),$(A),$(U),_=!1},d(o){o&&i(e),I(a,o),o&&i(d),t[15](null),I(p,o),o&&i(g),o&&i(v),o&&i(w),o&&i(k),o&&i(x),o&&i(N),o&&i(H),A&&A.d(o),o&&i(j),K&&K.d(o),o&&i(P),U&&U.d(o),o&&i(R),o&&i(F)}}}function xt(t,e,a){let o,n=[],s={},r="";const l=A.subscribe((t=>{n=t})),i=K.subscribe((t=>{a(1,s=t)})),c=U.subscribe((t=>{a(2,r=t)}));let u=[],d=[];H((()=>{l(),i(),c();for(let t=0;t<u.length;t++)u[t].close();for(let t=0;t<d.length;t++)d[t].close()}));let f="Please create and select a scenario before starting the simulation.",h=!1,m=0,p=[],g={},w=[],E=[];function S(){for(const[t,e]of Object.entries(g))a(5,g[t]=[],g)}async function b(t){if(!h)return void P.danger("please create and activate a scenario first.");"start"==t&&S(),F("/simulation/comm","POST",{command:t,configs:s},(function(t){t.data&&(P.success("simulation started."),console.log("response of simulation",t.data))}))}function k(){for(var t=0;t<u.length;t++)ws=u[t],ws.close()}T((async()=>{let t="";for(let e=0;e<n.length;e++)n[e].activated&&(a(3,f=n[e].name),h=!0,t="/api/db1/scenario_configurations/ref-"+n[e]._id);!function(t,e){R(t,(function(t){let a=JSON.parse(t.response);a.data&&a.data.length>0&&(K.set(a.data[0]),e())}))}(t,(function(){if("Communication"==s.type){"configurations"in s&&a(4,m=s.configurations.length);for(var t=0;t<m;t++){a(5,g[t.toString()]=[],g);let e="ws://localhost:8000/simulation/comm/ws/"+t.toString(),o=new WebSocket(e);o.onopen=function(){window.console.log("Successfully connected to the echo websocket server...")},o.onmessage=function(t){let e=JSON.parse(t.data);console.log(e,"printing JSON now");let o=e.client_index,n=JSON.parse(e.data);"status"in n?p[o]=n.status:a(5,g[o]=[...g[o],n],g)},u.push(o)}}if("Static"==s.type){console.log("hello static sample");let t=new WebSocket("ws://localhost:8000/simulation/static/ws");t.onopen=function(){window.console.log("static simulation websocket")},t.onmessage=function(t){let e=JSON.parse(t.data);a(6,w=[...w,e])},d.push(t)}"Communication"==s.type&&console.log("hello driving scenario")}))}));return[o,s,r,f,m,g,w,E,S,b,k,function(){F("/simulation/static","POST",{configs:s},(function(t){t.data&&(P.success("simulation started."),console.log("response of simulation",t.data))}))},function(){F("/simulation/static","POST",{configs:s},(function(t){t.data&&(P.success("simulation started."),console.log("response of simulation",t.data))}))},function(){F("/simulation/static","DELETE",{configs:s},(function(t){t.data&&(P.success("Delete successful."),a(6,w=[]),console.log("response of simulation",t.data))}))},function(){let t=this.innerText;_("/simulation/static","POST",{configs:s,filename:t},(function(e){if(e){let a=new Blob([e.response],{type:"octet/stream"}),n=(window.URL||window.webkitURL).createObjectURL(a);o.changeImage(n,t)}}))},function(t){v[t?"unshift":"push"]((()=>{o=t,a(0,o)}))},()=>b("start"),()=>b("stop"),()=>k(),function(e,o){t.$$.not_equal(g[o.toString()],e)&&(g[o.toString()]=e,a(5,g))},function(t){E=t,a(7,E)}]}export default class extends t{constructor(t){super(),e(this,t,xt,Vt,a,{},[-1,-1])}}
