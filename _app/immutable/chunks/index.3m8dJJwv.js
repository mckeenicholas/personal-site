import{n as w,V as q,f as W,W as G,z as E,A as j,B as O,X as H,Y as B,Z as L,b as J,_ as K,$ as Q,a0 as T,a1 as tt,a2 as U,a3 as et,a4 as nt,a5 as it,a6 as st,a7 as rt}from"./scheduler.C41YQ-iD.js";const X=typeof window<"u";let I=X?()=>window.performance.now():()=>Date.now(),N=X?t=>requestAnimationFrame(t):w;const k=new Set;function Y(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&N(Y)}function V(t){let e;return k.size===0&&N(Y),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}const C=new Map;let M=0;function at(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ft(t,e){const n={stylesheet:G(e),rules:{}};return C.set(t,n),n}function P(t,e,n,s,u,a,l,i=0){const c=16.666/s;let r=`{
`;for(let $=0;$<=1;$+=c){const m=e+(n-e)*a($);r+=$*100+`%{${l(m,1-m)}}
`}const d=r+`100% {${l(n,1-n)}}
}`,o=`__svelte_${at(d)}_${i}`,g=q(t),{stylesheet:h,rules:f}=C.get(g)||ft(g,t);f[o]||(f[o]=!0,h.insertRule(`@keyframes ${o} ${d}`,h.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${o} ${s}ms linear ${u}ms 1 both`,M+=1,o}function R(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),u=n.length-s.length;u&&(t.style.animation=s.join(", "),M-=u,M||ot())}function ot(){N(()=>{M||(C.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&W(e)}),C.clear())})}let S;function D(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function v(t,e,n){t.dispatchEvent(H(`${e?"intro":"outro"}${n}`))}const A=new Set;let p;function ht(){p={r:0,c:[],p}}function gt(){p.r||E(p.c),p=p.p}function ut(t,e){t&&t.i&&(A.delete(t),t.i(e))}function mt(t,e,n,s){if(t&&t.o){if(A.has(t))return;A.add(t),p.c.push(()=>{A.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const F={duration:0};function pt(t,e,n){const s={direction:"in"};let u=e(t,n,s),a=!1,l,i,c=0;function r(){l&&R(t,l)}function d(){const{delay:g=0,duration:h=300,easing:f=B,tick:_=w,css:$}=u||F;$&&(l=P(t,0,1,h,g,f,$,c++)),_(0,1);const m=I()+g,y=m+h;i&&i.abort(),a=!0,O(()=>v(t,!0,"start")),i=V(x=>{if(a){if(x>=y)return _(1,0),v(t,!0,"end"),r(),a=!1;if(x>=m){const b=f((x-m)/h);_(b,1-b)}}return a})}let o=!1;return{start(){o||(o=!0,R(t),j(u)?(u=u(s),D().then(d)):d())},invalidate(){o=!1},end(){a&&(r(),a=!1)}}}function yt(t,e,n){const s={direction:"out"};let u=e(t,n,s),a=!0,l;const i=p;i.r+=1;let c;function r(){const{delay:d=0,duration:o=300,easing:g=B,tick:h=w,css:f}=u||F;f&&(l=P(t,1,0,o,d,g,f));const _=I()+d,$=_+o;O(()=>v(t,!1,"start")),"inert"in t&&(c=t.inert,t.inert=!0),V(m=>{if(a){if(m>=$)return h(0,1),v(t,!1,"end"),--i.r||E(i.c),!1;if(m>=_){const y=g((m-_)/o);h(1-y,y)}}return a})}return j(u)?D().then(()=>{u=u(s),r()}):r(),{end(d){d&&"inert"in t&&(t.inert=c),d&&u.tick&&u.tick(1,0),a&&(l&&R(t,l),a=!1)}}}function xt(t,e,n,s){let a=e(t,n,{direction:"both"}),l=s?0:1,i=null,c=null,r=null,d;function o(){r&&R(t,r)}function g(f,_){const $=f.b-l;return _*=Math.abs($),{a:l,b:f.b,d:$,duration:_,start:f.start,end:f.start+_,group:f.group}}function h(f){const{delay:_=0,duration:$=300,easing:m=B,tick:y=w,css:x}=a||F,b={start:I()+_,b:f};f||(b.group=p,p.r+=1),"inert"in t&&(f?d!==void 0&&(t.inert=d):(d=t.inert,t.inert=!0)),i||c?c=b:(x&&(o(),r=P(t,l,f,$,_,m,x)),f&&y(0,1),i=g(b,$),O(()=>v(t,f,"start")),V(z=>{if(c&&z>c.start&&(i=g(c,$),c=null,v(t,i.b,"start"),x&&(o(),r=P(t,l,i.b,i.duration,0,m,a.css))),i){if(z>=i.end)y(l=i.b,1-l),v(t,i.b,"end"),c||(i.b?o():--i.group.r||E(i.group.c)),i=null;else if(z>=i.start){const Z=z-i.start;l=i.a+i.d*m(Z/i.duration),y(l,1-l)}}return!!(i||c)}))}return{run(f){j(a)?D().then(()=>{a=a({direction:f?"in":"out"}),h(f)}):h(f)},end(){o(),i=c=null}}}function vt(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function wt(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function lt(t,e,n){const{fragment:s,after_update:u}=t.$$;s&&s.m(e,n),O(()=>{const a=t.$$.on_mount.map(et).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...a):E(a),t.$$.on_mount=[]}),u.forEach(O)}function ct(t,e){const n=t.$$;n.fragment!==null&&(T(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){t.$$.dirty[0]===-1&&(nt.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function kt(t,e,n,s,u,a,l=null,i=[-1]){const c=tt;U(t);const r=t.$$={fragment:null,ctx:[],props:a,update:w,not_equal:u,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:L(),dirty:i,skip_bound:!1,root:e.target||c.$$.root};l&&l(r.root);let d=!1;if(r.ctx=n?n(t,e.props||{},(o,g,...h)=>{const f=h.length?h[0]:g;return r.ctx&&u(r.ctx[o],r.ctx[o]=f)&&(!r.skip_bound&&r.bound[o]&&r.bound[o](f),d&&dt(t,o)),g}):[],r.update(),d=!0,E(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){st();const o=J(e.target);r.fragment&&r.fragment.l(o),o.forEach(W)}else r.fragment&&r.fragment.c();e.intro&&ut(t.$$.fragment),lt(t,e.target,e.anchor),rt(),K()}U(c)}class Et{$$=void 0;$$set=void 0;$destroy(){ct(this,1),this.$destroy=w}$on(e,n){if(!j(n))return w;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const u=s.indexOf(n);u!==-1&&s.splice(u,1)}}$set(e){this.$$set&&!Q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _t="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(_t);export{Et as S,bt as a,mt as b,wt as c,ct as d,gt as e,vt as f,ht as g,yt as h,kt as i,pt as j,xt as k,lt as m,ut as t};