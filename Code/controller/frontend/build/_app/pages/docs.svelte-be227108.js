import{S as e,i as o,s as a,k as t,e as s,t as r,L as n,d as i,n as c,c as l,a as p,g as f,b as h,f as d,G as u,H as m}from"../chunks/vendor-dc4ce95f.js";function g(e){let o,a,g,v,k,w,E,I,L,b,x,C,H,P,U,j,y,A,D,W,_,G,S,V,q,z,B,F;return{c(){o=t(),a=s("div"),g=s("h3"),v=r("How to build a container testbed network?"),k=t(),w=s("ul"),E=s("li"),I=r("Create a docker network and connect all containers to this network (this allows containers to discover each other)"),L=t(),b=s("li"),x=r("If persistent storage is in use, make sure to map volumes to folders specified in /persistent/example_app because /persistent has volume mappings to the local computer folder ./persistent"),C=t(),H=s("li"),P=r("(keep in mind)"),U=t(),j=s("h3"),y=r("Containers Page"),A=t(),D=s("ul"),W=s("li"),_=r("When starting a new container, make sure to specify ports as follows: (1) 8199-8299:8200 for ranges e.g. as with attack-generator, (2) 8300:8300,5900:5900,6080:80 for multiple mappings e.g. as with receiver."),G=t(),S=s("h3"),V=r("Configuration Page"),q=t(),z=s("ul"),B=s("li"),F=r("Add new protocols and attacks (option to select source IP of containers for spoofing, random choice of source ip, etc.)."),this.h()},l(e){n('[data-svelte="svelte-1six0cj"]',document.head).forEach(i),o=c(e),a=l(e,"DIV",{class:!0});var t=p(a);g=l(t,"H3",{});var s=p(g);v=f(s,"How to build a container testbed network?"),s.forEach(i),k=c(t),w=l(t,"UL",{});var r=p(w);E=l(r,"LI",{});var h=p(E);I=f(h,"Create a docker network and connect all containers to this network (this allows containers to discover each other)"),h.forEach(i),L=c(r),b=l(r,"LI",{});var d=p(b);x=f(d,"If persistent storage is in use, make sure to map volumes to folders specified in /persistent/example_app because /persistent has volume mappings to the local computer folder ./persistent"),d.forEach(i),C=c(r),H=l(r,"LI",{});var u=p(H);P=f(u,"(keep in mind)"),u.forEach(i),r.forEach(i),U=c(t),j=l(t,"H3",{});var m=p(j);y=f(m,"Containers Page"),m.forEach(i),A=c(t),D=l(t,"UL",{});var J=p(D);W=l(J,"LI",{});var K=p(W);_=f(K,"When starting a new container, make sure to specify ports as follows: (1) 8199-8299:8200 for ranges e.g. as with attack-generator, (2) 8300:8300,5900:5900,6080:80 for multiple mappings e.g. as with receiver."),K.forEach(i),J.forEach(i),G=c(t),S=l(t,"H3",{});var M=p(S);V=f(M,"Configuration Page"),M.forEach(i),q=c(t),z=l(t,"UL",{});var N=p(z);B=l(N,"LI",{});var O=p(B);F=f(O,"Add new protocols and attacks (option to select source IP of containers for spoofing, random choice of source ip, etc.)."),O.forEach(i),N.forEach(i),t.forEach(i),this.h()},h(){document.title="Docs",h(a,"class","content svelte-cf77e8")},m(e,t){d(e,o,t),d(e,a,t),u(a,g),u(g,v),u(a,k),u(a,w),u(w,E),u(E,I),u(w,L),u(w,b),u(b,x),u(w,C),u(w,H),u(H,P),u(a,U),u(a,j),u(j,y),u(a,A),u(a,D),u(D,W),u(W,_),u(a,G),u(a,S),u(S,V),u(a,q),u(a,z),u(z,B),u(B,F)},p:m,i:m,o:m,d(e){e&&i(o),e&&i(a)}}}const v=!1,k=!0,w=!0;export default class extends e{constructor(e){super(),o(this,e,null,g,a,{})}}export{v as hydrate,w as prerender,k as router};
