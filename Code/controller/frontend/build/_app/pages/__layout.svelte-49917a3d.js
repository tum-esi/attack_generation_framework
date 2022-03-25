import{D as a,S as e,i as t,s,e as r,t as i,k as c,c as o,a as n,g as l,d as h,n as v,b as f,E as u,f as w,F as p,G as b,H as m,I as d,J as g,j as E,m as x,o as $,K as A,v as y,r as D,w as C}from"../chunks/vendor-c052606d.js";const k={subscribe:e=>(()=>{const e=a("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function H(a){let e,t,s,d,g,E,x,$,A,y,D,C,k,H,R,I,S,O,_,z,J,T,j,B,F,L,Q,V,G,K,M,P,U,q,W,X,Y,Z,aa,ea,ta,sa,ra,ia,ca,oa,na,la,ha;return{c(){e=r("header"),t=r("div"),s=r("a"),d=i("Home"),g=c(),E=r("a"),x=i("Containers"),$=c(),A=r("a"),y=i("Configuration"),D=c(),C=r("a"),k=i("Simulation"),H=c(),R=r("a"),I=i("Datasets"),S=c(),O=r("a"),_=i("Database"),z=c(),J=r("a"),T=i("Recovery"),j=c(),B=r("button"),F=i("☰"),L=c(),Q=r("div"),V=r("a"),G=i("Home"),K=c(),M=r("a"),P=i("Containers"),U=c(),q=r("a"),W=i("Configuration"),X=c(),Y=r("a"),Z=i("Simulation"),aa=c(),ea=r("a"),ta=i("Datasets"),sa=c(),ra=r("a"),ia=i("Database"),ca=c(),oa=r("a"),na=i("Recovery"),this.h()},l(a){e=o(a,"HEADER",{});var r=n(e);t=o(r,"DIV",{class:!0});var i=n(t);s=o(i,"A",{href:!0,class:!0});var c=n(s);d=l(c,"Home"),c.forEach(h),g=v(i),E=o(i,"A",{href:!0,class:!0});var f=n(E);x=l(f,"Containers"),f.forEach(h),$=v(i),A=o(i,"A",{href:!0,class:!0});var u=n(A);y=l(u,"Configuration"),u.forEach(h),D=v(i),C=o(i,"A",{href:!0,class:!0});var w=n(C);k=l(w,"Simulation"),w.forEach(h),H=v(i),R=o(i,"A",{href:!0,class:!0});var p=n(R);I=l(p,"Datasets"),p.forEach(h),S=v(i),O=o(i,"A",{href:!0,class:!0});var b=n(O);_=l(b,"Database"),b.forEach(h),z=v(i),J=o(i,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var m=n(J);T=l(m,"Recovery"),m.forEach(h),j=v(i),B=o(i,"BUTTON",{class:!0});var N=n(B);F=l(N,"☰"),N.forEach(h),i.forEach(h),L=v(r),Q=o(r,"DIV",{id:!0,class:!0});var la=n(Q);V=o(la,"A",{href:!0,class:!0});var ha=n(V);G=l(ha,"Home"),ha.forEach(h),K=v(la),M=o(la,"A",{href:!0,class:!0});var va=n(M);P=l(va,"Containers"),va.forEach(h),U=v(la),q=o(la,"A",{href:!0,class:!0});var fa=n(q);W=l(fa,"Configuration"),fa.forEach(h),X=v(la),Y=o(la,"A",{href:!0,class:!0});var ua=n(Y);Z=l(ua,"Simulation"),ua.forEach(h),aa=v(la),ea=o(la,"A",{href:!0,class:!0});var wa=n(ea);ta=l(wa,"Datasets"),wa.forEach(h),sa=v(la),ra=o(la,"A",{href:!0,class:!0});var pa=n(ra);ia=l(pa,"Database"),pa.forEach(h),ca=v(la),oa=o(la,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var ba=n(oa);na=l(ba,"Recovery"),ba.forEach(h),la.forEach(h),r.forEach(h),this.h()},h(){f(s,"href","/"),f(s,"class","w3-bar-item w3-button svelte-1xp7w9o"),u(s,"active","/"===a[0].path),f(E,"href","/containers"),f(E,"class","w3-bar-item w3-button w3-hide-small svelte-1xp7w9o"),u(E,"active","/containers"===a[0].path),f(A,"href","/configuration"),f(A,"class","w3-bar-item w3-button w3-hide-small svelte-1xp7w9o"),u(A,"active","/configuration"===a[0].path),f(C,"href","/simulation"),f(C,"class","w3-bar-item w3-button w3-hide-small svelte-1xp7w9o"),u(C,"active","/simulation"===a[0].path),f(R,"href","/datasets"),f(R,"class","w3-bar-item w3-button w3-hide-small svelte-1xp7w9o"),u(R,"active","/datasets"===a[0].path),f(O,"href","/database"),f(O,"class","w3-bar-item w3-button w3-hide-small svelte-1xp7w9o"),u(O,"active","/database"===a[0].path),f(J,"sveltekit:prefetch",""),f(J,"href","/recovery"),f(J,"class","w3-bar-item w3-button w3-hide-small svelte-1xp7w9o"),u(J,"active","/recovery"===a[0].path),f(B,"class","w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"),f(t,"class","w3-bar w3-blue"),f(V,"href","/"),f(V,"class","w3-bar-item w3-button svelte-1xp7w9o"),u(V,"active","/"===a[0].path),f(M,"href","/containers"),f(M,"class","w3-bar-item w3-button svelte-1xp7w9o"),u(M,"active","/containers"===a[0].path),f(q,"href","/configuration"),f(q,"class","w3-bar-item w3-button svelte-1xp7w9o"),u(q,"active","/configuration"===a[0].path),f(Y,"href","/simulation"),f(Y,"class","w3-bar-item w3-button svelte-1xp7w9o"),u(Y,"active","/simulation"===a[0].path),f(ea,"href","/datasets"),f(ea,"class","w3-bar-item w3-button svelte-1xp7w9o"),u(ea,"active","/datasets"===a[0].path),f(ra,"href","/database"),f(ra,"class","w3-bar-item w3-button svelte-1xp7w9o"),u(ra,"active","/database"===a[0].path),f(oa,"sveltekit:prefetch",""),f(oa,"href","/recovery"),f(oa,"class","w3-bar-item w3-button svelte-1xp7w9o"),u(oa,"active","/recovery"===a[0].path),f(Q,"id","demo"),f(Q,"class","w3-bar-block w3-blue w3-hide w3-hide-large w3-hide-medium")},m(a,r){w(a,e,r),p(e,t),p(t,s),p(s,d),p(t,g),p(t,E),p(E,x),p(t,$),p(t,A),p(A,y),p(t,D),p(t,C),p(C,k),p(t,H),p(t,R),p(R,I),p(t,S),p(t,O),p(O,_),p(t,z),p(t,J),p(J,T),p(t,j),p(t,B),p(B,F),p(e,L),p(e,Q),p(Q,V),p(V,G),p(Q,K),p(Q,M),p(M,P),p(Q,U),p(Q,q),p(q,W),p(Q,X),p(Q,Y),p(Y,Z),p(Q,aa),p(Q,ea),p(ea,ta),p(Q,sa),p(Q,ra),p(ra,ia),p(Q,ca),p(Q,oa),p(oa,na),la||(ha=b(B,"click",N),la=!0)},p(a,[e]){1&e&&u(s,"active","/"===a[0].path),1&e&&u(E,"active","/containers"===a[0].path),1&e&&u(A,"active","/configuration"===a[0].path),1&e&&u(C,"active","/simulation"===a[0].path),1&e&&u(R,"active","/datasets"===a[0].path),1&e&&u(O,"active","/database"===a[0].path),1&e&&u(J,"active","/recovery"===a[0].path),1&e&&u(V,"active","/"===a[0].path),1&e&&u(M,"active","/containers"===a[0].path),1&e&&u(q,"active","/configuration"===a[0].path),1&e&&u(Y,"active","/simulation"===a[0].path),1&e&&u(ea,"active","/datasets"===a[0].path),1&e&&u(ra,"active","/database"===a[0].path),1&e&&u(oa,"active","/recovery"===a[0].path)},i:m,o:m,d(a){a&&h(e),la=!1,ha()}}}function N(){var a=document.getElementById("demo");-1==a.className.indexOf("w3-show")?a.className+=" w3-show":a.className=a.className.replace(" w3-show","")}function R(a,e,t){let s;return d(a,k,(a=>t(0,s=a))),[s]}class I extends e{constructor(a){super(),t(this,a,R,H,s,{})}}function S(a){let e,t,s,u,b,m,d,k,H,N,R;e=new I({});const S=a[1].default,O=g(S,a,a[0],null);return{c(){E(e.$$.fragment),t=c(),s=r("main"),O&&O.c(),u=c(),b=r("footer"),m=r("p"),d=i("Contact "),k=r("a"),H=i("Jan Lauinger"),N=i(" if you have Questions."),this.h()},l(a){x(e.$$.fragment,a),t=v(a),s=o(a,"MAIN",{class:!0});var r=n(s);O&&O.l(r),r.forEach(h),u=v(a),b=o(a,"FOOTER",{class:!0});var i=n(b);m=o(i,"P",{});var c=n(m);d=l(c,"Contact "),k=o(c,"A",{href:!0,class:!0});var f=n(k);H=l(f,"Jan Lauinger"),f.forEach(h),N=l(c," if you have Questions."),c.forEach(h),i.forEach(h),this.h()},h(){f(s,"class","svelte-1izrdc8"),f(k,"href","https://kit.svelte.dev"),f(k,"class","svelte-1izrdc8"),f(b,"class","svelte-1izrdc8")},m(a,r){$(e,a,r),w(a,t,r),w(a,s,r),O&&O.m(s,null),w(a,u,r),w(a,b,r),p(b,m),p(m,d),p(m,k),p(k,H),p(m,N),R=!0},p(a,[e]){O&&O.p&&(!R||1&e)&&A(O,S,a,a[0],e,null,null)},i(a){R||(y(e.$$.fragment,a),y(O,a),R=!0)},o(a){D(e.$$.fragment,a),D(O,a),R=!1},d(a){C(e,a),a&&h(t),a&&h(s),O&&O.d(a),a&&h(u),a&&h(b)}}}function O(a,e,t){let{$$slots:s={},$$scope:r}=e;return a.$$set=a=>{"$$scope"in a&&t(0,r=a.$$scope)},[r,s]}export default class extends e{constructor(a){super(),t(this,a,O,S,s,{})}}