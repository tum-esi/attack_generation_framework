function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function i(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function a(t,n,e){t.$$.on_destroy.push(c(n,e))}function f(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function d(t,n,e,o,r,s,i){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(u){const r=l(n,e,o,i);t.p(r,u)}}function h(t){return null==t?"":t}const p="undefined"!=typeof window;let g=p?()=>window.performance.now():()=>Date.now(),m=p?t=>requestAnimationFrame(t):t;const $=new Set;function y(t){$.forEach((n=>{n.c(t)||($.delete(n),n.f())})),0!==$.size&&m(y)}function b(t){let n;return 0===$.size&&m(y),{promise:new Promise((e=>{$.add(n={c:t,f:e})})),abort(){$.delete(n)}}}function _(t,n){t.appendChild(n)}function w(t,n,e){t.insertBefore(n,e||null)}function x(t){t.parentNode.removeChild(t)}function v(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function k(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function C(){return E(" ")}function S(){return E("")}function A(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function M(t){return function(n){return n.preventDefault(),t.call(this,n)}}function R(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function j(t){return Array.from(t.childNodes)}function O(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const s=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):k(n)}function q(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return E(n)}function N(t){return q(t," ")}function T(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function B(t,n){t.value=null==n?"":n}function P(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function z(t,n,e){t.classList[e?"add":"remove"](n)}function D(t,n=document.body){return Array.from(n.querySelectorAll(t))}const L=new Set;let F,H=0;function W(t,n,e,o,r,s,i,u=0){const c=16.666/o;let a="{\n";for(let m=0;m<=1;m+=c){const t=n+(e-n)*s(m);a+=100*m+`%{${i(t,1-t)}}\n`}const f=a+`100% {${i(e,1-e)}}\n}`,l=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(f)}_${u}`,d=t.ownerDocument;L.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(k("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[l]||(p[l]=!0,h.insertRule(`@keyframes ${l} ${f}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${l} ${o}ms linear ${r}ms 1 both`,H+=1,l}function G(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),H-=r,H||m((()=>{H||(L.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),L.clear())})))}function I(e,o,r,s){if(!o)return t;const i=e.getBoundingClientRect();if(o.left===i.left&&o.right===i.right&&o.top===i.top&&o.bottom===i.bottom)return t;const{delay:u=0,duration:c=300,easing:a=n,start:f=g()+u,end:l=f+c,tick:d=t,css:h}=r(e,{from:o,to:i},s);let p,m=!0,$=!1;function y(){h&&G(e,p),m=!1}return b((t=>{if(!$&&t>=f&&($=!0),$&&t>=l&&(d(1,0),y()),!m)return!1;if($){const n=0+1*a((t-f)/c);d(n,1-n)}return!0})),h&&(p=W(e,0,1,c,u,a,h)),u||($=!0),d(0,1),y}function J(t){const n=getComputedStyle(t);if("absolute"!==n.position&&"fixed"!==n.position){const{width:e,height:o}=n,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=e,t.style.height=o,K(t,r)}}function K(t,n){const e=t.getBoundingClientRect();if(n.left!==e.left||n.top!==e.top){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform;t.style.transform=`${r} translate(${n.left-e.left}px, ${n.top-e.top}px)`}}function Q(t){F=t}function U(){if(!F)throw new Error("Function called outside component initialization");return F}function V(t){U().$$.on_mount.push(t)}function X(t){U().$$.after_update.push(t)}function Y(t){U().$$.on_destroy.push(t)}function Z(t,n){U().$$.context.set(t,n)}function tt(t){return U().$$.context.get(t)}const nt=[],et=[],ot=[],rt=[],st=Promise.resolve();let it=!1;function ut(t){ot.push(t)}function ct(t){rt.push(t)}let at=!1;const ft=new Set;function lt(){if(!at){at=!0;do{for(let t=0;t<nt.length;t+=1){const n=nt[t];Q(n),dt(n.$$)}for(Q(null),nt.length=0;et.length;)et.pop()();for(let t=0;t<ot.length;t+=1){const n=ot[t];ft.has(n)||(ft.add(n),n())}ot.length=0}while(nt.length);for(;rt.length;)rt.pop()();it=!1,at=!1,ft.clear()}}function dt(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(ut)}}let ht;function pt(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const gt=new Set;let mt;function $t(){mt={r:0,c:[],p:mt}}function yt(){mt.r||s(mt.c),mt=mt.p}function bt(t,n){t&&t.i&&(gt.delete(t),t.i(n))}function _t(t,n,e,o){if(t&&t.o){if(gt.has(t))return;gt.add(t),mt.c.push((()=>{gt.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const wt={duration:0};function xt(e,o,r,u){let c=o(e,r),a=u?0:1,f=null,l=null,d=null;function h(){d&&G(e,d)}function p(t,n){const e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function m(o){const{delay:r=0,duration:i=300,easing:u=n,tick:m=t,css:$}=c||wt,y={start:g()+r,b:o};o||(y.group=mt,mt.r+=1),f||l?l=y:($&&(h(),d=W(e,a,o,i,r,u,$)),o&&m(0,1),f=p(y,i),ut((()=>pt(e,o,"start"))),b((t=>{if(l&&t>l.start&&(f=p(l,i),l=null,pt(e,f.b,"start"),$&&(h(),d=W(e,a,f.b,f.duration,0,u,c.css))),f)if(t>=f.end)m(a=f.b,1-a),pt(e,f.b,"end"),l||(f.b?h():--f.group.r||s(f.group.c)),f=null;else if(t>=f.start){const n=t-f.start;a=f.a+f.d*u(n/f.duration),m(a,1-a)}return!(!f&&!l)})))}return{run(t){i(c)?(ht||(ht=Promise.resolve(),ht.then((()=>{ht=null}))),ht).then((()=>{c=c(),m(t)})):m(t)},end(){h(),f=l=null}}}const vt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function kt(t,n){t.d(1),n.delete(t.key)}function Et(t,n){t.f(),function(t,n){_t(t,1,1,(()=>{n.delete(t.key)}))}(t,n)}function Ct(t,n,e,o,r,s,i,u,c,a,f,l){let d=t.length,h=s.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const m=[],$=new Map,y=new Map;for(p=h;p--;){const t=l(r,s,p),u=e(t);let c=i.get(u);c?o&&c.p(t,n):(c=a(u,t),c.c()),$.set(u,m[p]=c),u in g&&y.set(u,Math.abs(p-g[u]))}const b=new Set,_=new Set;function w(t){bt(t,1),t.m(u,f),i.set(t.key,t),f=t.first,h--}for(;d&&h;){const n=m[h-1],e=t[d-1],o=n.key,r=e.key;n===e?(f=n.first,d--,h--):$.has(r)?!i.has(o)||b.has(o)?w(n):_.has(r)?d--:y.get(o)>y.get(r)?(_.add(o),w(n)):(b.add(r),d--):(c(e,i),d--)}for(;d--;){const n=t[d];$.has(n.key)||c(n,i)}for(;h;)w(m[h-1]);return m}function St(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],u=n[s];if(u){for(const t in i)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[s]=u}else for(const t in i)r[t]=1}for(const i in o)i in e||(e[i]=void 0);return e}function At(t){return"object"==typeof t&&null!==t?t:{}}function Mt(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function Rt(t){t&&t.c()}function jt(t,n){t&&t.l(n)}function Ot(t,n,e,r){const{fragment:u,on_mount:c,on_destroy:a,after_update:f}=t.$$;u&&u.m(n,e),r||ut((()=>{const n=c.map(o).filter(i);a?a.push(...n):s(n),t.$$.on_mount=[]})),f.forEach(ut)}function qt(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Nt(t,n){-1===t.$$.dirty[0]&&(nt.push(t),it||(it=!0,st.then(lt)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Tt(n,e,o,i,u,c,a=[-1]){const f=F;Q(n);const l=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:u,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:r(),dirty:a,skip_bound:!1};let d=!1;if(l.ctx=o?o(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&u(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&Nt(n,t)),e})):[],l.update(),d=!0,s(l.before_update),l.fragment=!!i&&i(l.ctx),e.target){if(e.hydrate){const t=j(e.target);l.fragment&&l.fragment.l(t),t.forEach(x)}else l.fragment&&l.fragment.c();e.intro&&bt(n.$$.fragment),Ot(n,e.target,e.anchor,e.customElement),lt()}Q(f)}class Bt{$destroy(){qt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Pt=[];function zt(t,n){return{subscribe:Dt(t,n).subscribe}}function Dt(n,e=t){let o;const r=[];function s(t){if(u(n,t)&&(n=t,o)){const t=!Pt.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),Pt.push(t,n)}if(t){for(let t=0;t<Pt.length;t+=2)Pt[t][0](Pt[t+1]);Pt.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(i,u=t){const c=[i,u];return r.push(c),1===r.length&&(o=e(s)||t),i(n),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function Lt(n,e,o){const r=!Array.isArray(n),u=r?[n]:n,a=e.length<2;return zt(o,(n=>{let o=!1;const f=[];let l=0,d=t;const h=()=>{if(l)return;d();const o=e(r?f[0]:f,n);a?n(o):d=i(o)?o:t},p=u.map(((t,n)=>c(t,(t=>{f[n]=t,l&=~(1<<n),o&&h()}),(()=>{l|=1<<n}))));return o=!0,h(),function(){s(p),d()}}))}function Ft(t){const n=t-1;return n*n*n+1}function Ht(t,n,e={}){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform,s=n.from.width/t.clientWidth,u=n.from.height/t.clientHeight,c=(n.from.left-n.to.left)/s,a=(n.from.top-n.to.top)/u,f=Math.sqrt(c*c+a*a),{delay:l=0,duration:d=(t=>120*Math.sqrt(t)),easing:h=Ft}=e;return{delay:l,duration:i(d)?d(f):d,easing:h,css:(t,n)=>`transform: ${r} translate(${n*c}px, ${n*a}px);`}}function Wt(t,{delay:n=0,duration:e=400,easing:o=Ft,x:r=0,y:s=0,opacity:i=0}={}){const u=getComputedStyle(t),c=+u.opacity,a="none"===u.transform?"":u.transform,f=c*(1-i);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*r}px, ${(1-t)*s}px);\n\t\t\topacity: ${c-f*n}`}}export{xt as $,e as A,$t as B,Dt as C,tt as D,z as E,_ as F,A as G,t as H,a as I,f as J,d as K,D as L,v as M,P as N,M as O,Ct as P,s as Q,Y as R,Bt as S,vt as T,kt as U,Lt as V,h as W,J as X,K as Y,I as Z,ut as _,j as a,Et as a0,Ht as a1,Wt as a2,zt as a3,et as a4,Mt as a5,ct as a6,B as a7,R as b,O as c,x as d,k as e,w as f,q as g,T as h,Tt as i,Rt as j,C as k,S as l,jt as m,N as n,Ot as o,St as p,At as q,_t as r,u as s,E as t,yt as u,bt as v,qt as w,Z as x,X as y,V as z};
