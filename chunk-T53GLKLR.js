import{$ as Me,$a as V,A as li,Aa as se,Ab as ts,B as ve,Ba as gt,Bb as ue,C as Uo,Ca as tt,Cb as gi,D as Ba,Da as nt,Db as ns,Ea as _t,Fa as $o,G as Wo,Gb as O,H as za,Hb as b,I as Go,Ia as w,Ib as vt,J as di,Ja as T,Jb as _i,K as pe,Ka as S,Kb as ze,L as Lt,La as Ga,Lb as je,M as ae,Ma as Ka,Mb as _n,N as ja,Na as de,Nb as is,O as Je,Oa as Ne,Ob as De,P as Z,Pb as F,Qa as bt,Qb as yt,R as ci,Ra as qo,Rb as bi,S as v,Sb as vi,T as R,Ta as Bt,Tb as os,Ua as N,Ub as rs,V as p,Va as Ya,Vb as as,W as pn,Wa as $a,X as l,Xa as G,Xb as ss,Ya as K,Z as Vt,Za as qa,Zb as yi,_ as Ko,_a as Za,a as Bo,aa as Ie,ab as h,b as oe,ba as Ha,bb as m,ca as A,cb as ce,d as Ye,da as P,db as zt,e as f,ea as ui,eb as jt,f as ai,fb as Le,g as zo,ga as k,gb as it,h as jo,ha as D,hb as $e,i as Ta,ia as mi,ib as I,j as Oa,jb as B,k as Pe,kb as ye,l as Fa,la as M,lb as W,ma as ge,mb as pi,na as we,nb as Ve,o as re,oa as Re,ob as H,p as Pa,pa as E,pb as U,qa as Yo,qb as Xa,r as Na,ra as hi,rb as Qa,s as Nt,sa as Ua,sb as Zo,t as si,ta as fi,tb as gn,u as La,ua as Wa,ub as L,v as Ee,va as et,vb as Be,w as le,wa as g,wb as y,x as Ho,xa as Ae,xb as xe,y as Va,ya as pt,yb as Ja,za as me,zb as es}from"./chunk-LIGK3UKQ.js";import{a as _,b as q}from"./chunk-2NFLSA4Y.js";var xi=new WeakMap,he=(()=>{class i{_appRef;_injector=l(A);_environmentInjector=l(Vt);load(e){let n=this._appRef=this._appRef||this._injector.get(Bt),o=xi.get(n);o||(o={loaders:new Set,refs:[]},xi.set(n,o),n.onDestroy(()=>{xi.get(n)?.refs.forEach(r=>r.destroy()),xi.delete(n)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(vi(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Xo;function ls(){if(Xo==null){let i=typeof document<"u"?document.head:null;Xo=!!(i&&(i.createShadowRoot||i.attachShadow))}return Xo}function xt(i){if(ls()){let t=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function bn(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let t=i.shadowRoot.activeElement;if(t===i)break;i=t}return i}function X(i){return i.composedPath?i.composedPath()[0]:i.target}function Ct(i){return i.buttons===0||i.detail===0}function wt(i){let t=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}function qe(i,t=0){return ds(i)?Number(i):arguments.length===2?t:0}function ds(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function Q(i){return i instanceof E?i.nativeElement:i}var Qo;try{Qo=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Qo=!1}var z=(()=>{class i{_platformId=l(Ua);isBrowser=this._platformId?as(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Qo)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var tc=new p("cdk-dir-doc",{providedIn:"root",factory:()=>l(P)}),nc=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function cs(i){let t=i?.toLowerCase()||"";return t==="auto"&&typeof navigator<"u"&&navigator?.language?nc.test(navigator.language)?"rtl":"ltr":t==="rtl"?"rtl":"ltr"}var fe=(()=>{class i{get value(){return this.valueSignal()}valueSignal=M("ltr");change=new k;constructor(){let e=l(tc,{optional:!0});if(e){let n=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(cs(n||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Te=(function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i})(Te||{}),Ci,Dt;function wi(){if(Dt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Dt=!1,Dt;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Dt=!0;else{let i=Element.prototype.scrollTo;i?Dt=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Dt=!1}}return Dt}function Ht(){if(typeof document!="object"||!document)return Te.NORMAL;if(Ci==null){let i=document.createElement("div"),t=i.style;i.dir="rtl",t.width="1px",t.overflow="auto",t.visibility="hidden",t.pointerEvents="none",t.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",i.appendChild(e),document.body.appendChild(i),Ci=Te.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,Ci=i.scrollLeft===0?Te.NEGATED:Te.INVERTED),i.remove()}return Ci}var Y=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({})}return i})();var ic=20,Ut=(()=>{class i{_ngZone=l(D);_platform=l(z);_renderer=l(me).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new f;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=ic){return this._platform.isBrowser?new Ye(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(Ho(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Pe()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let o=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(le(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,e)&&n.push(r)}),n}_scrollableContainsElement(e,n){let o=Q(n),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),us=(()=>{class i{elementRef=l(E);scrollDispatcher=l(Ut);ngZone=l(D);dir=l(fe,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new f;_renderer=l(se);_cleanupScroll;_elementScrolled=new f;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,o=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=o?e.end:e.start),e.right==null&&(e.right=o?e.start:e.end),e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),o&&Ht()!=Te.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),Ht()==Te.INVERTED?e.left=e.right:Ht()==Te.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;wi()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n="left",o="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?o:n:e=="end"&&(e=a?n:o),a&&Ht()==Te.INVERTED?e==n?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:a&&Ht()==Te.NEGATED?e==n?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==n?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),oc=20,He=(()=>{class i{_platform=l(z);_listeners;_viewportSize=null;_change=new f;_document=l(P);constructor(){let e=l(D),n=l(me).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[n.listen("window","resize",o),n.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+n,height:o,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),a=-r.top||e.body?.scrollTop||n.scrollY||o.scrollTop||0,s=-r.left||e.body?.scrollLeft||n.scrollX||o.scrollLeft||0;return{top:a,left:s}}change(e=oc){return e>0?this._change.pipe(Ho(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var vn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({})}return i})(),Jo=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({imports:[Y,vn,Y,vn]})}return i})();var er={},te=class i{_appId=l(hi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(t,e=!1){return this._appId!=="ng"&&(t+=this._appId),er.hasOwnProperty(t)||(er[t]=0),`${t}${e?i._infix+"-":""}${er[t]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})};function ot(i){return Array.isArray(i)?i:[i]}function ir(i){let t=i.cloneNode(!0),e=t.querySelectorAll("[id]"),n=i.nodeName.toLowerCase();t.removeAttribute("id");for(let o=0;o<e.length;o++)e[o].removeAttribute("id");return n==="canvas"?fs(i,t):(n==="input"||n==="select"||n==="textarea")&&hs(i,t),ms("canvas",i,t,fs),ms("input, textarea, select",i,t,hs),t}function ms(i,t,e,n){let o=t.querySelectorAll(i);if(o.length){let r=e.querySelectorAll(i);for(let a=0;a<o.length;a++)n(o[a],r[a])}}var ac=0;function hs(i,t){t.type!=="file"&&(t.value=i.value),t.type==="radio"&&t.name&&(t.name=`mat-clone-${t.name}-${ac++}`)}function fs(i,t){let e=t.getContext("2d");if(e)try{e.drawImage(i,0,0)}catch{}}function dr(i){let t=i.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height,x:t.x,y:t.y}}function or(i,t,e){let{top:n,bottom:o,left:r,right:a}=i;return e>=n&&e<=o&&t>=r&&t<=a}function sc(i,t){let e=t.left<i.left,n=t.left+t.width>i.right,o=t.top<i.top,r=t.top+t.height>i.bottom;return e||n||o||r}function Cn(i,t,e){i.top+=t,i.bottom=i.top+i.height,i.left+=e,i.right=i.left+i.width}function ps(i,t,e,n){let{top:o,right:r,bottom:a,left:s,width:d,height:c}=i,u=d*t,x=c*t;return n>o-x&&n<a+x&&e>s-u&&e<r+u}var Di=class{_document;positions=new Map;constructor(t){this._document=t}clear(){this.positions.clear()}cache(t){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),t.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:dr(e)})})}handleScroll(t){let e=X(t),n=this.positions.get(e);if(!n)return null;let o=n.scrollPosition,r,a;if(e===this._document){let c=this.getViewportScrollPosition();r=c.top,a=c.left}else r=e.scrollTop,a=e.scrollLeft;let s=o.top-r,d=o.left-a;return this.positions.forEach((c,u)=>{c.clientRect&&e!==u&&e.contains(u)&&Cn(c.clientRect,s,d)}),o.top=r,o.left=a,{top:s,left:d}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function Ms(i,t){let e=i.rootNodes;if(e.length===1&&e[0].nodeType===t.ELEMENT_NODE)return e[0];let n=t.createElement("div");return e.forEach(o=>n.appendChild(o)),n}function cr(i,t,e){for(let n in t)if(t.hasOwnProperty(n)){let o=t[n];o?i.setProperty(n,o,e?.has(n)?"important":""):i.removeProperty(n)}return i}function Wt(i,t){let e=t?"":"none";cr(i.style,{"touch-action":t?"":"none","-webkit-user-drag":t?"":"none","-webkit-tap-highlight-color":t?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function gs(i,t,e){cr(i.style,{position:t?"":"fixed",top:t?"":"0",opacity:t?"":"0",left:t?"":"-999em"},e)}function Ei(i,t){return t&&t!="none"?i+" "+t:i}function _s(i,t){i.style.width=`${t.width}px`,i.style.height=`${t.height}px`,i.style.transform=wn(t.left,t.top)}function wn(i,t){return`translate3d(${Math.round(i)}px, ${Math.round(t)}px, 0)`}var yn={capture:!0},tr={passive:!1,capture:!0},lc=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(n,o){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2,changeDetection:0})}return i})(),ur=(()=>{class i{_ngZone=l(D);_document=l(P);_styleLoader=l(he);_renderer=l(me).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new f;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=M([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new f;pointerUp=new f;constructor(){}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,tr)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(e,n){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(lc),this._activeDragInstances.update(o=>[...o,e]),this._activeDragInstances().length===1)){let o=n.type.startsWith("touch"),r=s=>this.pointerUp.next(s),a=[["scroll",s=>this._scroll.next(s),yn],["selectstart",this._preventDefaultWhileDragging,tr]];o?a.push(["touchend",r,yn],["touchcancel",r,yn]):a.push(["mouseup",r,yn]),o||a.push(["mousemove",s=>this.pointerMove.next(s),tr]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=a.map(([s,d,c])=>this._renderer.listen(this._document,s,d,c))})}}stopDragging(e){this._activeDragInstances.update(n=>{let o=n.indexOf(e);return o>-1?(n.splice(o,1),[...n]):n}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let n=[this._scroll];return e&&e!==this._document&&n.push(new Ye(o=>this._ngZone.runOutsideAngular(()=>{let r=this._renderer.listen(e,"scroll",a=>{this._activeDragInstances().length&&o.next(a)},yn);return()=>{r()}}))),Ee(...n)}registerDirectiveNode(e,n){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,n)}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e)}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault()};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e))};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function bs(i){let t=i.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(i)*t}function dc(i){let t=getComputedStyle(i),e=nr(t,"transition-property"),n=e.find(s=>s==="transform"||s==="all");if(!n)return 0;let o=e.indexOf(n),r=nr(t,"transition-duration"),a=nr(t,"transition-delay");return bs(r[o])+bs(a[o])}function nr(i,t){return i.getPropertyValue(t).split(",").map(n=>n.trim())}var cc=new Set(["position"]),rr=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(t,e,n,o,r,a,s,d,c,u){this._document=t,this._rootElement=e,this._direction=n,this._initialDomRect=o,this._previewTemplate=r,this._previewClass=a,this._pickupPositionOnPage=s,this._initialTransform=d,this._zIndex=c,this._renderer=u}attach(t){this._preview=this._createPreview(),t.appendChild(this._preview),vs(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(t){this._preview.style.transform=t}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(t){this._preview.classList.add(t)}getTransitionDuration(){return dc(this._preview)}addEventListener(t,e){return this._renderer.listen(this._preview,t,e)}_createPreview(){let t=this._previewTemplate,e=this._previewClass,n=t?t.template:null,o;if(n&&t){let r=t.matchSize?this._initialDomRect:null,a=t.viewContainer.createEmbeddedView(n,t.context);a.detectChanges(),o=Ms(a,this._document),this._previewEmbeddedView=a,t.matchSize?_s(o,r):o.style.transform=wn(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else o=ir(this._rootElement),_s(o,this._initialDomRect),this._initialTransform&&(o.style.transform=this._initialTransform);return cr(o.style,{"pointer-events":"none",margin:vs(o)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},cc),Wt(o,!1),o.classList.add("cdk-drag-preview"),o.setAttribute("popover","manual"),o.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(r=>o.classList.add(r)):o.classList.add(e)),o}};function vs(i){return"showPopover"in i}var uc={passive:!0},ys={passive:!1},mc={passive:!1,capture:!0},hc=800,xs="cdk-drag-placeholder",Cs=new Set(["position"]);function fc(i,t,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let n=i.get(se,null,{optional:!0})||i.get(me).createRenderer(null,null);return new ar(t,e,i.get(P),i.get(D),i.get(He),i.get(ur),n)}var ar=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=M(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new f;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=oe.EMPTY;_pointerUpSubscription=oe.EMPTY;_scrollSubscription=oe.EMPTY;_resizeSubscription=oe.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(t){t!==this._disabled&&(this._disabled=t,this._toggleNativeDragInteractions(),this._handles.forEach(e=>Wt(e,t)))}_disabled=!1;beforeStarted=new f;started=new f;released=new f;ended=new f;entered=new f;exited=new f;dropped=new f;moved=this._moveEvents;data;constrainPosition;constructor(t,e,n,o,r,a,s){this._config=e,this._document=n,this._ngZone=o,this._viewportRuler=r,this._dragDropRegistry=a,this._renderer=s,this.withRootElement(t).withParent(e.parentDragRef||null),this._parentPositions=new Di(n),a.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(t){this._handles=t.map(n=>Q(n)),this._handles.forEach(n=>Wt(n,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(n=>{this._handles.indexOf(n)>-1&&e.add(n)}),this._disabledHandles=e,this}withPreviewTemplate(t){return this._previewTemplate=t,this}withPlaceholderTemplate(t){return this._placeholderTemplate=t,this}withRootElement(t){let e=Q(t);if(e!==this._rootElement){this._removeRootElementListeners();let n=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[n.listen(e,"mousedown",this._pointerDown,ys),n.listen(e,"touchstart",this._pointerDown,uc),n.listen(e,"dragstart",this._nativeDragStart,ys)]),this._initialTransform=void 0,this._rootElement=e}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(t){return this._boundaryElement=t?Q(t):null,this._resizeSubscription.unsubscribe(),t&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(t){return this._parentDragRef=t,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&sc(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let t=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),n=0,o=0;e.left<t.left?n=t.left-e.left:e.right>t.right&&(n=t.right-e.right),e.top<t.top?o=t.top-e.top:e.bottom>t.bottom&&(o=t.bottom-e.bottom);let r=this._activeTransform.x,a=this._activeTransform.y,s=r+n,d=a+o;this._rootElement.style.transform=wn(s,d),this._activeTransform={x:s,y:d},this._passiveTransform={x:s,y:d}}}disableHandle(t){!this._disabledHandles.has(t)&&this._handles.indexOf(t)>-1&&(this._disabledHandles.add(t),Wt(t,!0))}enableHandle(t){this._disabledHandles.has(t)&&(this._disabledHandles.delete(t),Wt(t,this.disabled))}withDirection(t){return this._direction=t,this}_withDropContainer(t){this._dropContainer=t}getFreeDragPosition(){let t=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:t.x,y:t.y}}setFreeDragPosition(t){return this._activeTransform={x:0,y:0},this._passiveTransform.x=t.x,this._passiveTransform.y=t.y,this._dropContainer||this._applyRootElementTransform(t.x,t.y),this}withPreviewContainer(t){return this._previewContainer=t,this}_sortFromLastPointerPosition(){let t=this._lastKnownPointerPosition;t&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(t),t)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=t=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(t);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,t)}else this.disabled||this._initializeDragSequence(this._rootElement,t)};_pointerMove=t=>{let e=this._getPointerPositionOnPage(t);if(!this._hasStartedDragging()){let o=Math.abs(e.x-this._pickupPositionOnPage.x),r=Math.abs(e.y-this._pickupPositionOnPage.y);if(o+r>=this._config.dragStartThreshold){let s=Date.now()>=this._dragStartTime+this._getDragStartDelay(t),d=this._dropContainer;if(!s){this._endDragSequence(t);return}(!d||!d.isDragging()&&!d.isReceiving())&&(t.cancelable&&t.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(t)))}return}t.cancelable&&t.preventDefault();let n=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(n),this._dropContainer)this._updateActiveDropContainer(n,e);else{let o=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,r=this._activeTransform;r.x=n.x-o.x+this._passiveTransform.x,r.y=n.y-o.y+this._passiveTransform.y,this._applyRootElementTransform(r.x,r.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:n,event:t,distance:this._getDragDistance(n),delta:this._pointerDirectionDelta})})};_pointerUp=t=>{this._endDragSequence(t)};_endDragSequence(t){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:t}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(t),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(t);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:t})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(t){xn(t)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),n=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",pc,mc)}),n){let o=this._rootElement,r=o.parentNode,a=this._placeholder=this._createPlaceholderElement(),s=this._marker=this._marker||this._document.createComment("");r.insertBefore(s,o),this._initialTransform=o.style.transform||"",this._preview=new rr(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(r,e)),gs(o,!1,Cs),this._document.body.appendChild(r.replaceChild(a,o)),this.started.next({source:this,event:t}),n.start(),this._initialContainer=n,this._initialIndex=n.getItemIndex(this)}else this.started.next({source:this,event:t}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(n?n.getScrollableParents():[])}_initializeDragSequence(t,e){this._parentDragRef&&e.stopPropagation();let n=this.isDragging(),o=xn(e),r=!o&&e.button!==0,a=this._rootElement,s=X(e),d=!o&&this._lastTouchEventTime&&this._lastTouchEventTime+hc>Date.now(),c=o?wt(e):Ct(e);if(s&&s.draggable&&e.type==="mousedown"&&e.preventDefault(),n||r||d||c)return;if(this._handles.length){let j=a.style;this._rootElementTapHighlight=j.webkitTapHighlightColor||"",j.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(j=>this._updateOnScroll(j)),this._boundaryElement&&(this._boundaryRect=dr(this._boundaryElement));let u=this._previewTemplate;this._pickupPositionInElement=u&&u.template&&!u.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,t,e);let x=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:x.x,y:x.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(t){gs(this._rootElement,!0,Cs),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,n=e.getItemIndex(this),o=this._getPointerPositionOnPage(t),r=this._getDragDistance(o),a=e._isOverContainer(o.x,o.y);this.ended.next({source:this,distance:r,dropPoint:o,event:t}),this.dropped.next({item:this,currentIndex:n,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:a,distance:r,dropPoint:o,event:t}),e.drop(this,n,this._initialIndex,this._initialContainer,a,r,o,t),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:t,y:e},{x:n,y:o}){let r=this._initialContainer._getSiblingContainerFromPosition(this,t,e);!r&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(t,e)&&(r=this._initialContainer),r&&r!==this._dropContainer&&this._ngZone.run(()=>{let a=this._dropContainer.getItemIndex(this),s=this._dropContainer.getItemAtIndex(a+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(r,this._dropContainer,s),this._dropContainer=r,this._dropContainer.enter(this,t,e,r===this._initialContainer&&r.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:r,currentIndex:r.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(n,o),this._dropContainer._sortItem(this,t,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(t,e):this._applyPreviewTransform(t-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let t=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(t.left,t.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(n=>{let o=s=>{(!s||this._preview&&X(s)===this._preview.element&&s.propertyName==="transform")&&(a(),n(),clearTimeout(r))},r=setTimeout(o,e*1.5),a=this._preview.addEventListener("transitionend",o)}))}_createPlaceholderElement(){let t=this._placeholderTemplate,e=t?t.template:null,n;return e?(this._placeholderRef=t.viewContainer.createEmbeddedView(e,t.context),this._placeholderRef.detectChanges(),n=Ms(this._placeholderRef,this._document)):n=ir(this._rootElement),n.style.pointerEvents="none",n.classList.add(xs),n}_getPointerPositionInElement(t,e,n){let o=e===this._rootElement?null:e,r=o?o.getBoundingClientRect():t,a=xn(n)?n.targetTouches[0]:n,s=this._getViewportScrollPosition(),d=a.pageX-r.left-s.left,c=a.pageY-r.top-s.top;return{x:r.left-t.left+d,y:r.top-t.top+c}}_getPointerPositionOnPage(t){let e=this._getViewportScrollPosition(),n=xn(t)?t.touches[0]||t.changedTouches[0]||{pageX:0,pageY:0}:t,o=n.pageX-e.left,r=n.pageY-e.top;if(this._ownerSVGElement){let a=this._ownerSVGElement.getScreenCTM();if(a){let s=this._ownerSVGElement.createSVGPoint();return s.x=o,s.y=r,s.matrixTransform(a.inverse())}}return{x:o,y:r}}_getConstrainedPointerPosition(t){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:n,y:o}=this.constrainPosition?this.constrainPosition(t,this,this._initialDomRect,this._pickupPositionInElement):t;if(this.lockAxis==="x"||e==="x"?o=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(n=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:r,y:a}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,s=this._boundaryRect,{width:d,height:c}=this._getPreviewRect(),u=s.top+a,x=s.bottom-(c-a),j=s.left+r,J=s.right-(d-r);n=ws(n,j,J),o=ws(o,u,x)}return{x:n,y:o}}_updatePointerDirectionDelta(t){let{x:e,y:n}=t,o=this._pointerDirectionDelta,r=this._pointerPositionAtLastDirectionChange,a=Math.abs(e-r.x),s=Math.abs(n-r.y);return a>this._config.pointerDirectionChangeThreshold&&(o.x=e>r.x?1:-1,r.x=e),s>this._config.pointerDirectionChangeThreshold&&(o.y=n>r.y?1:-1,r.y=n),o}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let t=this._handles.length>0||!this.isDragging();t!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=t,Wt(this._rootElement,t))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(t=>t()),this._rootElementCleanups=void 0}_applyRootElementTransform(t,e){let n=1/this.scale,o=wn(t*n,e*n),r=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=r.transform&&r.transform!="none"?r.transform:""),r.transform=Ei(o,this._initialTransform)}_applyPreviewTransform(t,e){let n=this._previewTemplate?.template?void 0:this._initialTransform,o=wn(t,e);this._preview.setTransform(Ei(o,n))}_getDragDistance(t){let e=this._pickupPositionOnPage;return e?{x:t.x-e.x,y:t.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:t,y:e}=this._passiveTransform;if(t===0&&e===0||this.isDragging()||!this._boundaryElement)return;let n=this._rootElement.getBoundingClientRect(),o=this._boundaryElement.getBoundingClientRect();if(o.width===0&&o.height===0||n.width===0&&n.height===0)return;let r=o.left-n.left,a=n.right-o.right,s=o.top-n.top,d=n.bottom-o.bottom;o.width>n.width?(r>0&&(t+=r),a>0&&(t-=a)):t=0,o.height>n.height?(s>0&&(e+=s),d>0&&(e-=d)):e=0,(t!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:t})}_getDragStartDelay(t){let e=this.dragStartDelay;return typeof e=="number"?e:xn(t)?e.touch:e?e.mouse:0}_updateOnScroll(t){let e=this._parentPositions.handleScroll(t);if(e){let n=X(t);this._boundaryRect&&n!==this._boundaryElement&&n.contains(this._boundaryElement)&&Cn(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=xt(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(t,e){let n=this._previewContainer||"global";if(n==="parent")return t;if(n==="global"){let o=this._document;return e||o.fullscreenElement||o.webkitFullscreenElement||o.mozFullScreenElement||o.msFullscreenElement||o.body}return Q(n)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=t=>{if(this._handles.length){let e=this._getTargetHandle(t);e&&!this._disabledHandles.has(e)&&!this.disabled&&t.preventDefault()}else this.disabled||t.preventDefault()};_getTargetHandle(t){return this._handles.find(e=>t.target&&(t.target===e||e.contains(t.target)))}_conditionallyInsertAnchor(t,e,n){if(t===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let o=this._anchor??=ir(this._placeholder);o.classList.remove(xs),o.classList.add("cdk-drag-anchor"),o.style.transform="",n?n.before(o):Q(e.element).appendChild(o)}}};function ws(i,t,e){return Math.max(t,Math.min(e,i))}function xn(i){return i.type[0]==="t"}function pc(i){i.preventDefault()}function Is(i,t,e){let n=Ds(t,i.length-1),o=Ds(e,i.length-1);if(n===o)return;let r=i[n],a=o<n?-1:1;for(let s=n;s!==o;s+=a)i[s]=i[s+a];i[o]=r}function Ds(i,t){return Math.max(0,Math.min(t,i))}var Si=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(t){this._dragDropRegistry=t}_previousSwap={drag:null,delta:0,overlaps:!1};start(t){this.withItems(t)}sort(t,e,n,o){let r=this._itemPositions,a=this._getItemIndexFromPointerPosition(t,e,n,o);if(a===-1&&r.length>0)return null;let s=this.orientation==="horizontal",d=r.findIndex(ie=>ie.drag===t),c=r[a],u=r[d].clientRect,x=c.clientRect,j=d>a?1:-1,J=this._getItemOffsetPx(u,x,j),ee=this._getSiblingOffsetPx(d,r,j),$=r.slice();return Is(r,d,a),r.forEach((ie,ri)=>{if($[ri]===ie)return;let Ft=ie.drag===t,Pt=Ft?J:ee,Ra=Ft?t.getPlaceholderElement():ie.drag.getRootElement();ie.offset+=Pt;let Aa=Math.round(ie.offset*(1/ie.drag.scale));s?(Ra.style.transform=Ei(`translate3d(${Aa}px, 0, 0)`,ie.initialTransform),Cn(ie.clientRect,0,Pt)):(Ra.style.transform=Ei(`translate3d(0, ${Aa}px, 0)`,ie.initialTransform),Cn(ie.clientRect,Pt,0))}),this._previousSwap.overlaps=or(x,e,n),this._previousSwap.drag=c.drag,this._previousSwap.delta=s?o.x:o.y,{previousIndex:d,currentIndex:a}}enter(t,e,n,o){let r=this._activeDraggables,a=r.indexOf(t),s=t.getPlaceholderElement();a>-1&&r.splice(a,1);let d=o==null||o<0?this._getItemIndexFromPointerPosition(t,e,n):o,c=r[d];if(c===t&&(c=r[d+1]),!c&&(d==null||d===-1||d<r.length-1)&&this._shouldEnterAsFirstChild(e,n)&&(c=r[0]),c&&!this._dragDropRegistry.isDragging(c)){let u=c.getRootElement();u.parentElement.insertBefore(s,u),r.splice(d,0,t)}else this._element.appendChild(s),r.push(t);s.style.transform="",this._cacheItemPositions()}withItems(t){this._activeDraggables=t.slice(),this._cacheItemPositions()}withSortPredicate(t){this._sortPredicate=t}reset(){this._activeDraggables?.forEach(t=>{let e=t.getRootElement();if(e){let n=this._itemPositions.find(o=>o.drag===t)?.initialTransform;e.style.transform=n||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(t){return this._getVisualItemPositions().findIndex(e=>e.drag===t)}getItemAtIndex(t){return this._getVisualItemPositions()[t]?.drag||null}updateOnScroll(t,e){this._itemPositions.forEach(({clientRect:n})=>{Cn(n,t,e)}),this._itemPositions.forEach(({drag:n})=>{this._dragDropRegistry.isDragging(n)&&n._sortFromLastPointerPosition()})}withElementContainer(t){this._element=t}_cacheItemPositions(){let t=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let n=e.getVisibleElement();return{drag:e,offset:0,initialTransform:n.style.transform||"",clientRect:dr(n)}}).sort((e,n)=>t?e.clientRect.left-n.clientRect.left:e.clientRect.top-n.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(t,e,n){let o=this.orientation==="horizontal",r=o?e.left-t.left:e.top-t.top;return n===-1&&(r+=o?e.width-t.width:e.height-t.height),r}_getSiblingOffsetPx(t,e,n){let o=this.orientation==="horizontal",r=e[t].clientRect,a=e[t+n*-1],s=r[o?"width":"height"]*n;if(a){let d=o?"left":"top",c=o?"right":"bottom";n===-1?s-=a.clientRect[d]-r[c]:s+=r[d]-a.clientRect[c]}return s}_shouldEnterAsFirstChild(t,e){if(!this._activeDraggables.length)return!1;let n=this._itemPositions,o=this.orientation==="horizontal";if(n[0].drag!==this._activeDraggables[0]){let a=n[n.length-1].clientRect;return o?t>=a.right:e>=a.bottom}else{let a=n[0].clientRect;return o?t<=a.left:e<=a.top}}_getItemIndexFromPointerPosition(t,e,n,o){let r=this.orientation==="horizontal",a=this._itemPositions.findIndex(({drag:s,clientRect:d})=>{if(s===t)return!1;if(o){let c=r?o.x:o.y;if(s===this._previousSwap.drag&&this._previousSwap.overlaps&&c===this._previousSwap.delta)return!1}return r?e>=Math.floor(d.left)&&e<Math.floor(d.right):n>=Math.floor(d.top)&&n<Math.floor(d.bottom)});return a===-1||!this._sortPredicate(a,t)?-1:a}},sr=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(t,e){this._document=t,this._dragDropRegistry=e}start(t){let e=this._element.childNodes;this._relatedNodes=[];for(let n=0;n<e.length;n++){let o=e[n];this._relatedNodes.push([o,o.nextSibling])}this.withItems(t)}sort(t,e,n,o){let r=this._getItemIndexFromPointerPosition(t,e,n),a=this._previousSwap;if(r===-1||this._activeItems[r]===t)return null;let s=this._activeItems[r];if(a.drag===s&&a.overlaps&&a.deltaX===o.x&&a.deltaY===o.y)return null;let d=this.getItemIndex(t),c=t.getPlaceholderElement(),u=s.getRootElement();r>d?u.after(c):u.before(c),Is(this._activeItems,d,r);let x=this._getRootNode().elementFromPoint(e,n);return a.deltaX=o.x,a.deltaY=o.y,a.drag=s,a.overlaps=u===x||u.contains(x),{previousIndex:d,currentIndex:r}}enter(t,e,n,o){let r=this._activeItems.indexOf(t);r>-1&&this._activeItems.splice(r,1);let a=o==null||o<0?this._getItemIndexFromPointerPosition(t,e,n):o;a===-1&&(a=this._getClosestItemIndexToPointer(t,e,n));let s=this._activeItems[a];s&&!this._dragDropRegistry.isDragging(s)?(this._activeItems.splice(a,0,t),s.getRootElement().before(t.getPlaceholderElement())):(this._activeItems.push(t),this._element.appendChild(t.getPlaceholderElement()))}withItems(t){this._activeItems=t.slice()}withSortPredicate(t){this._sortPredicate=t}reset(){let t=this._element,e=this._previousSwap;for(let n=this._relatedNodes.length-1;n>-1;n--){let[o,r]=this._relatedNodes[n];o.parentNode===t&&o.nextSibling!==r&&(r===null?t.appendChild(o):r.parentNode===t&&t.insertBefore(o,r))}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(t){return this._activeItems.indexOf(t)}getItemAtIndex(t){return this._activeItems[t]||null}updateOnScroll(){this._activeItems.forEach(t=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition()})}withElementContainer(t){t!==this._element&&(this._element=t,this._rootNode=void 0)}_getItemIndexFromPointerPosition(t,e,n){let o=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(n)),r=o?this._activeItems.findIndex(a=>{let s=a.getRootElement();return o===s||s.contains(o)}):-1;return r===-1||!this._sortPredicate(r,t)?-1:r}_getRootNode(){return this._rootNode||(this._rootNode=xt(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(t,e,n){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let o=1/0,r=-1;for(let a=0;a<this._activeItems.length;a++){let s=this._activeItems[a];if(s!==t){let{x:d,y:c}=s.getRootElement().getBoundingClientRect(),u=Math.hypot(e-d,n-c);u<o&&(o=u,r=a)}}return r}},Es=.05,Rs=.05,Se=(function(i){return i[i.NONE=0]="NONE",i[i.UP=1]="UP",i[i.DOWN=2]="DOWN",i})(Se||{}),_e=(function(i){return i[i.NONE=0]="NONE",i[i.LEFT=1]="LEFT",i[i.RIGHT=2]="RIGHT",i})(_e||{});function gc(i,t){return new lr(t,i.get(ur),i.get(P),i.get(D),i.get(He))}var lr=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new f;entered=new f;exited=new f;dropped=new f;sorted=new f;receivingStarted=new f;receivingStopped=new f;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=oe.EMPTY;_verticalScrollDirection=Se.NONE;_horizontalScrollDirection=_e.NONE;_scrollNode;_stopScrollTimers=new f;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(t,e,n,o,r){this._dragDropRegistry=e,this._ngZone=o,this._viewportRuler=r;let a=this.element=Q(t);this._document=n,this.withOrientation("vertical").withElementContainer(a),e.registerDropContainer(this),this._parentPositions=new Di(n)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(t,e,n,o){this._draggingStarted(),o==null&&this.sortingDisabled&&(o=this._draggables.indexOf(t)),this._sortStrategy.enter(t,e,n,o),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:t,container:this,currentIndex:this.getItemIndex(t)})}exit(t){this._reset(),this.exited.next({item:t,container:this})}drop(t,e,n,o,r,a,s,d={}){this._reset(),this.dropped.next({item:t,currentIndex:e,previousIndex:n,container:this,previousContainer:o,isPointerOverContainer:r,distance:a,dropPoint:s,event:d})}withItems(t){let e=this._draggables;return this._draggables=t,t.forEach(n=>n._withDropContainer(this)),this.isDragging()&&(e.filter(o=>o.isDragging()).every(o=>t.indexOf(o)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(t){return this._direction=t,this._sortStrategy instanceof Si&&(this._sortStrategy.direction=t),this}connectedTo(t){return this._siblings=t.slice(),this}withOrientation(t){if(t==="mixed")this._sortStrategy=new sr(this._document,this._dragDropRegistry);else{let e=new Si(this._dragDropRegistry);e.direction=this._direction,e.orientation=t,this._sortStrategy=e}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,n)=>this.sortPredicate(e,n,this)),this}withScrollableParents(t){let e=this._container;return this._scrollableElements=t.indexOf(e)===-1?[e,...t]:t.slice(),this}withElementContainer(t){if(t===this._container)return this;let e=Q(this.element),n=this._scrollableElements.indexOf(this._container),o=this._scrollableElements.indexOf(t);return n>-1&&this._scrollableElements.splice(n,1),o>-1&&this._scrollableElements.splice(o,1),this._sortStrategy&&this._sortStrategy.withElementContainer(t),this._cachedShadowRoot=null,this._scrollableElements.unshift(t),this._container=t,this}getScrollableParents(){return this._scrollableElements}getItemIndex(t){return this._isDragging?this._sortStrategy.getItemIndex(t):this._draggables.indexOf(t)}getItemAtIndex(t){return this._isDragging?this._sortStrategy.getItemAtIndex(t):this._draggables[t]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(t,e,n,o){if(this.sortingDisabled||!this._domRect||!ps(this._domRect,Es,e,n))return;let r=this._sortStrategy.sort(t,e,n,o);r&&this.sorted.next({previousIndex:r.previousIndex,currentIndex:r.currentIndex,container:this,item:t})}_startScrollingIfNecessary(t,e){if(this.autoScrollDisabled)return;let n,o=Se.NONE,r=_e.NONE;if(this._parentPositions.positions.forEach((a,s)=>{s===this._document||!a.clientRect||n||ps(a.clientRect,Es,t,e)&&([o,r]=_c(s,a.clientRect,this._direction,t,e),(o||r)&&(n=s))}),!o&&!r){let{width:a,height:s}=this._viewportRuler.getViewportSize(),d={width:a,height:s,top:0,right:a,bottom:s,left:0};o=As(d,e),r=Ts(d,t),n=window}n&&(o!==this._verticalScrollDirection||r!==this._horizontalScrollDirection||n!==this._scrollNode)&&(this._verticalScrollDirection=o,this._horizontalScrollDirection=r,this._scrollNode=n,(o||r)&&n?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let t=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=t.msScrollSnapType||t.scrollSnapType||"",t.scrollSnapType=t.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let t=this._container.style;t.scrollSnapType=t.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),La(0,jo).pipe(ae(this._stopScrollTimers)).subscribe(()=>{let t=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===Se.UP?t.scrollBy(0,-e):this._verticalScrollDirection===Se.DOWN&&t.scrollBy(0,e),this._horizontalScrollDirection===_e.LEFT?t.scrollBy(-e,0):this._horizontalScrollDirection===_e.RIGHT&&t.scrollBy(e,0)})};_isOverContainer(t,e){return this._domRect!=null&&or(this._domRect,t,e)}_getSiblingContainerFromPosition(t,e,n){return this._siblings.find(o=>o._canReceive(t,e,n))}_canReceive(t,e,n){if(!this._domRect||!or(this._domRect,e,n)||!this.enterPredicate(t,this))return!1;let o=this._getShadowRoot().elementFromPoint(e,n);return o?o===this._container||this._container.contains(o):!1}_startReceiving(t,e){let n=this._activeSiblings;!n.has(t)&&e.every(o=>this.enterPredicate(o,this)||this._draggables.indexOf(o)>-1)&&(n.add(t),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:t,receiver:this,items:e}))}_stopReceiving(t){this._activeSiblings.delete(t),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:t,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(t=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(t);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let t=xt(this._container);this._cachedShadowRoot=t||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let t=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,t))}};function As(i,t){let{top:e,bottom:n,height:o}=i,r=o*Rs;return t>=e-r&&t<=e+r?Se.UP:t>=n-r&&t<=n+r?Se.DOWN:Se.NONE}function Ts(i,t){let{left:e,right:n,width:o}=i,r=o*Rs;return t>=e-r&&t<=e+r?_e.LEFT:t>=n-r&&t<=n+r?_e.RIGHT:_e.NONE}function _c(i,t,e,n,o){let r=As(t,o),a=Ts(t,n),s=Se.NONE,d=_e.NONE;if(r){let c=i.scrollTop;r===Se.UP?c>0&&(s=Se.UP):i.scrollHeight-c>i.clientHeight&&(s=Se.DOWN)}if(a){let c=i.scrollLeft;e==="rtl"?a===_e.RIGHT?c<0&&(d=_e.RIGHT):i.scrollWidth+c>i.clientWidth&&(d=_e.LEFT):a===_e.LEFT?c>0&&(d=_e.LEFT):i.scrollWidth-c>i.clientWidth&&(d=_e.RIGHT)}return[s,d]}var Ss=new p("CDK_DRAG_PARENT");var bc=new p("CdkDragHandle");var Os=new p("CDK_DRAG_CONFIG"),Fs=new p("CdkDropList"),Ps=(()=>{class i{element=l(E);dropContainer=l(Fs,{optional:!0,skipSelf:!0});_ngZone=l(D);_viewContainerRef=l(_t);_dir=l(fe,{optional:!0});_changeDetectorRef=l(De);_selfHandle=l(bc,{optional:!0,self:!0});_parentDrag=l(Ss,{optional:!0,skipSelf:!0});_dragDropRegistry=l(ur);_destroyed=new f;_handles=new ai([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new k;released=new k;ended=new k;entered=new k;exited=new k;dropped=new k;moved=new Ye(e=>{let n=this._dragRef.moved.pipe(re(o=>({source:this,pointerPosition:o.pointerPosition,event:o.event,delta:o.delta,distance:o.distance}))).subscribe(e);return()=>{n.unsubscribe()}});_injector=l(A);constructor(){let e=this.dropContainer,n=l(Os,{optional:!0});this._dragRef=fc(this._injector,this.element,{dragStartThreshold:n&&n.dragStartThreshold!=null?n.dragStartThreshold:5,pointerDirectionChangeThreshold:n&&n.pointerDirectionChangeThreshold!=null?n.pointerDirectionChangeThreshold:5,zIndex:n?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),n&&this._assignDefaults(n),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(ae(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){Ae(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(e){let n=e.rootElementSelector,o=e.freeDragPosition;n&&!n.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,o&&!o.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(e){let n=this._handles.getValue();n.push(e),this._handles.next(n)}_removeHandle(e){let n=this._handles.getValue(),o=n.indexOf(e);o>-1&&(n.splice(o,1),this._handles.next(n))}_setPreviewTemplate(e){this._previewTemplate=e}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(e){this._placeholderTemplate=e}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let e=this.element.nativeElement,n=e;this.rootElementSelector&&(n=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(n||e)}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):Q(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let n=this._dir,o=this.dragStartDelay,r=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,a=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof o=="object"&&o?o:qe(o),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(r).withPreviewTemplate(a).withPreviewContainer(this.previewContainer||"global"),n&&e.withDirection(n.value)}}),e.beforeStarted.pipe(ve(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let n=this.element.nativeElement.parentElement;for(;n;){let o=this._dragDropRegistry.getDragDirectiveForNode(n);if(o){e.withParent(o._dragRef);break}n=n.parentElement}})}_handleEvents(e){e.started.subscribe(n=>{this.started.emit({source:this,event:n.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(n=>{this.released.emit({source:this,event:n.event})}),e.ended.subscribe(n=>{this.ended.emit({source:this,distance:n.distance,dropPoint:n.dropPoint,event:n.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(n=>{this.entered.emit({container:n.container.data,item:this,currentIndex:n.currentIndex})}),e.exited.subscribe(n=>{this.exited.emit({container:n.container.data,item:this})}),e.dropped.subscribe(n=>{this.dropped.emit({previousIndex:n.previousIndex,currentIndex:n.currentIndex,previousContainer:n.previousContainer.data,container:n.container.data,isPointerOverContainer:n.isPointerOverContainer,item:this,distance:n.distance,dropPoint:n.dropPoint,event:n.event})})}_assignDefaults(e){let{lockAxis:n,dragStartDelay:o,constrainPosition:r,previewClass:a,boundaryElement:s,draggingDisabled:d,rootElementSelector:c,previewContainer:u}=e;this.disabled=d??!1,this.dragStartDelay=o||0,this.lockAxis=n||null,r&&(this.constrainPosition=r),a&&(this.previewClass=a),s&&(this.boundaryElement=s),c&&(this.rootElementSelector=c),u&&(this.previewContainer=u)}_setupHandlesListener(){this._handles.pipe(Je(e=>{let n=e.map(o=>o.element);this._selfHandle&&this.rootElementSelector&&n.push(this.element),this._dragRef.withHandles(n)}),Lt(e=>Ee(...e.map(n=>n._stateChanges.pipe(pe(n))))),ae(this._destroyed)).subscribe(e=>{let n=this._dragRef,o=e.element.nativeElement;e.disabled?n.disableHandle(o):n.enableHandle(o)})}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(n,o){n&2&&L("cdk-drag-disabled",o.disabled)("cdk-drag-dragging",o._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",F],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",yt]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[ue([{provide:Ss,useExisting:i}]),we]})}return i})(),ks=new p("CdkDropListGroup");var Ns=(()=>{class i{element=l(E);_changeDetectorRef=l(De);_scrollDispatcher=l(Ut);_dir=l(fe,{optional:!0});_group=l(ks,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new f;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=l(te).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new k;entered=new k;exited=new k;sorted=new k;_unsortedItems=new Set;constructor(){let e=l(Os,{optional:!0}),n=l(A);this._dropListRef=gc(n,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(o,r)=>this.enterPredicate(o.data,r.data),this._dropListRef.sortPredicate=(o,r,a)=>this.sortPredicate(o,r.data,a.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),i._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(n=>n._dragRef))}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let n=this._latestSortedRefs.indexOf(e._dragRef);n>-1&&(this._latestSortedRefs.splice(n,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,n)=>e._dragRef.getVisibleElement().compareDocumentPosition(n._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=i._dropLists.indexOf(this);e>-1&&i._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(pe(this._dir.value),ae(this._destroyed)).subscribe(n=>e.withDirection(n)),e.beforeStarted.subscribe(()=>{let n=ot(this.connectedTo).map(o=>{if(typeof o=="string"){let r=i._dropLists.find(a=>a.id===o);return r}return o});if(this._group&&this._group._items.forEach(o=>{n.indexOf(o)===-1&&n.push(o)}),!this._scrollableParentsResolved){let o=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(r=>r.getElementRef().nativeElement);this._dropListRef.withScrollableParents(o),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let o=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(o)}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=qe(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(n.filter(o=>o&&o!==this).map(o=>o._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(n=>n._dragRef)),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(n=>{this.entered.emit({container:this,item:n.item.data,currentIndex:n.currentIndex})}),e.exited.subscribe(n=>{this.exited.emit({container:this,item:n.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(n=>{this.sorted.emit({previousIndex:n.previousIndex,currentIndex:n.currentIndex,container:this,item:n.item.data})}),e.dropped.subscribe(n=>{this.dropped.emit({previousIndex:n.previousIndex,currentIndex:n.currentIndex,previousContainer:n.previousContainer.data,container:n.container.data,item:n.item.data,isPointerOverContainer:n.isPointerOverContainer,distance:n.distance,dropPoint:n.dropPoint,event:n.event}),this._changeDetectorRef.markForCheck()}),Ee(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(e){let{lockAxis:n,draggingDisabled:o,sortingDisabled:r,listAutoScrollDisabled:a,listOrientation:s}=e;this.disabled=o??!1,this.sortingDisabled=r??!1,this.autoScrollDisabled=a??!1,this.orientation=s||"vertical",this.lockAxis=n||null}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e)}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(n,o){n&2&&(N("id",o.id),L("cdk-drop-list-disabled",o.disabled)("cdk-drop-list-dragging",o._dropListRef.isDragging())("cdk-drop-list-receiving",o._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",F],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",F],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",F],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",F]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[ue([{provide:ks,useValue:void 0},{provide:Fs,useExisting:i}])]})}return i})();function mr(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function ne(i){return i==null?"":typeof i=="string"?i:`${i}px`}var Dn=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},Gt=class extends Dn{component;viewContainerRef;injector;projectableNodes;bindings;constructor(t,e,n,o,r){super(),this.component=t,this.viewContainerRef=e,this.injector=n,this.projectableNodes=o,this.bindings=r||null}},Et=class extends Dn{templateRef;viewContainerRef;context;injector;constructor(t,e,n,o){super(),this.templateRef=t,this.viewContainerRef=e,this.context=n,this.injector=o}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}},hr=class extends Dn{element;constructor(t){super(),this.element=t instanceof E?t.nativeElement:t}},Kt=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof Gt)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof Et)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof hr)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},ki=class extends Kt{outletElement;_appRef;_defaultInjector;constructor(t,e,n){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=n}attachComponentPortal(t){let e;if(t.viewContainerRef){let n=t.injector||t.viewContainerRef.injector,o=n.get($o,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:n,ngModuleRef:o,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,o=t.injector||this._defaultInjector||A.NULL,r=o.get(Vt,n.injector);e=vi(t.component,{elementInjector:o,environmentInjector:r,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,n=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return n.rootNodes.forEach(o=>this.outletElement.appendChild(o)),n.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(n);o!==-1&&e.remove(o)}),this._attachedPortal=t,n}attachDomPortal=t=>{let e=t.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var En=(()=>{class i extends Kt{_moduleRef=l($o,{optional:!0});_document=l(P);_viewContainerRef=l(_t);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new k;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let n=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=n.createComponent(e.component,{index:n.length,injector:e.injector||n.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=e=>{let n=e.element;n.parentNode;let o=this._document.createComment("dom-portal");e.setAttachedHost(this),n.parentNode.insertBefore(o,n),this._getRootNode().appendChild(n),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(n,o)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[de]})}return i})(),St=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({})}return i})();function Ce(i,...t){return t.length?t.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var Ls=wi();function qt(i){return new Mi(i.get(He),i.get(P))}var Mi=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(t,e){this._viewportRuler=t,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||"",this._previousHTMLStyles.top=t.style.top||"",t.style.left=ne(-this._previousScrollPosition.left),t.style.top=ne(-this._previousScrollPosition.top),t.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,n=t.style,o=e.style,r=n.scrollBehavior||"",a=o.scrollBehavior||"";this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,t.classList.remove("cdk-global-scrollblock"),Ls&&(n.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Ls&&(n.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,n=this._viewportRuler.getViewportSize();return e.scrollHeight>n.height||e.scrollWidth>n.width}};function Ws(i,t){return new Ii(i.get(Ut),i.get(D),i.get(He),t)}var Ii=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(t,e,n,o){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=n,this._config=o}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(le(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Sn=class{enable(){}disable(){}attach(){}};function fr(i,t){return t.some(e=>{let n=i.bottom<e.top,o=i.top>e.bottom,r=i.right<e.left,a=i.left>e.right;return n||o||r||a})}function Vs(i,t){return t.some(e=>{let n=i.top<e.top,o=i.bottom>e.bottom,r=i.left<e.left,a=i.right>e.right;return n||o||r||a})}function Mn(i,t){return new Ri(i.get(Ut),i.get(He),i.get(D),t)}var Ri=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,n,o){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=n,this._config=o}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:o}=this._viewportRuler.getViewportSize();fr(e,[{width:n,height:o,bottom:o,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Gs=(()=>{class i{_injector=l(A);constructor(){}noop=()=>new Sn;close=e=>Ws(this._injector,e);block=()=>qt(this._injector);reposition=e=>Mn(this._injector,e);static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Mt=class{positionStrategy;scrollStrategy=new Sn;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let n of e)t[n]!==void 0&&(this[n]=t[n])}}};var Ai=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var Ks=(()=>{class i{_attachedOverlays=[];_document=l(P);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let n=this._attachedOverlays.indexOf(e);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,n,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(n):!0}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ys=(()=>{class i extends Ks{_ngZone=l(D);_renderer=l(me).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let n=this._attachedOverlays;for(let o=n.length-1;o>-1;o--){let r=n[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=Re(i)))(o||i)}})();static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),$s=(()=>{class i extends Ks{_platform=l(z);_ngZone=l(D);_renderer=l(me).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let n=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(n,"pointerdown",this._pointerDownListener,o),r.listen(n,"click",this._clickListener,o),r.listen(n,"auxclick",this._clickListener,o),r.listen(n,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=X(e)};_clickListener=e=>{let n=X(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let s=r[a],d=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,d))){if(Bs(s.overlayElement,n)||Bs(s.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>d.next(e)):d.next(e)}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=Re(i)))(o||i)}})();static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Bs(i,t){let e=typeof ShadowRoot<"u"&&ShadowRoot,n=t;for(;n;){if(n===i)return!0;n=e&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var qs=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),Fi=(()=>{class i{_platform=l(z);_containerElement;_document=l(P);_styleLoader=l(he);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||mr()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let n=this._document.createElement("div");n.classList.add(e),mr()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(qs)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),pr=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,n,o){this._renderer=e,this._ngZone=n,this.element=t.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents="none",t.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function gr(i){return i&&i.nodeType===1}var Yt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new f;_attachments=new f;_detachments=new f;_positionStrategy;_scrollStrategy;_locationChanges=oe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new f;_outsidePointerEvents=new f;_afterNextRenderRef;constructor(t,e,n,o,r,a,s,d,c,u=!1,x,j){this._portalOutlet=t,this._host=e,this._pane=n,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=s,this._location=d,this._outsideClickDispatcher=c,this._animationsDisabled=u,this._injector=x,this._renderer=j,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ae(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=_(_({},this._config),t),this._updateElementSize()}setDirection(t){this._config=q(_({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t=="string"?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=ne(this._config.width),t.height=ne(this._config.height),t.minWidth=ne(this._config.minWidth),t.minHeight=ne(this._config.minHeight),t.maxWidth=ne(this._config.maxWidth),t.maxHeight=ne(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;gr(t)?t.after(this._host):t?.type==="parent"?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let t="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new pr(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,n){let o=ot(e||[]).filter(r=>!!r);o.length&&(n?t.classList.add(...o):t.classList.remove(...o))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=Ae(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}},zs="cdk-overlay-connected-position-bounding-box",vc=/([A-Za-z%]+)$/;function _r(i,t){return new Ti(t,i.get(He),i.get(P),i.get(z),i.get(Fi))}var Ti=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new f;_resizeSubscription=oe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,n,o,r){this._viewportRuler=e,this._document=n,this._platform=o,this._overlayContainer=r,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(zs),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,n=this._viewportRect,o=this._containerRect,r=[],a;for(let s of this._preferredPositions){let d=this._getOriginPoint(t,o,s),c=this._getOverlayPoint(d,e,s),u=this._getOverlayFit(c,e,n,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,d);return}if(this._canFitWithFlexibleDimensions(u,c,n)){r.push({position:s,origin:d,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(d,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:c,originPoint:d,position:s,overlayRect:e})}if(r.length){let s=null,d=-1;for(let c of r){let u=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);u>d&&(d=u,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&kt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(zs),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof E?this._origin.nativeElement:gr(this._origin)?this._origin:null}_getOriginPoint(t,e,n){let o;if(n.originX=="center")o=t.left+t.width/2;else{let a=this._isRtl()?t.right:t.left,s=this._isRtl()?t.left:t.right;o=n.originX=="start"?a:s}e.left<0&&(o-=e.left);let r;return n.originY=="center"?r=t.top+t.height/2:r=n.originY=="top"?t.top:t.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(t,e,n){let o;n.overlayX=="center"?o=-e.width/2:n.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return n.overlayY=="center"?r=-e.height/2:r=n.overlayY=="top"?0:-e.height,{x:t.x+o,y:t.y+r}}_getOverlayFit(t,e,n,o){let r=Hs(e),{x:a,y:s}=t,d=this._getOffset(o,"x"),c=this._getOffset(o,"y");d&&(a+=d),c&&(s+=c);let u=0-a,x=a+r.width-n.width,j=0-s,J=s+r.height-n.height,ee=this._subtractOverflows(r.width,u,x),$=this._subtractOverflows(r.height,j,J),ie=ee*$;return{visibleArea:ie,isCompletelyWithinViewport:r.width*r.height===ie,fitsInViewportVertically:$===r.height,fitsInViewportHorizontally:ee==r.width}}_canFitWithFlexibleDimensions(t,e,n){if(this._hasFlexibleDimensions){let o=n.bottom-e.y,r=n.right-e.x,a=js(this._overlayRef.getConfig().minHeight),s=js(this._overlayRef.getConfig().minWidth),d=t.fitsInViewportVertically||a!=null&&a<=o,c=t.fitsInViewportHorizontally||s!=null&&s<=r;return d&&c}return!1}_pushOverlayOnScreen(t,e,n){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let o=Hs(e),r=this._viewportRect,a=Math.max(t.x+o.width-r.width,0),s=Math.max(t.y+o.height-r.height,0),d=Math.max(r.top-n.top-t.y,0),c=Math.max(r.left-n.left-t.x,0),u=0,x=0;return o.width<=r.width?u=c||-a:u=t.x<this._getViewportMarginStart()?r.left-n.left-t.x:0,o.height<=r.height?x=d||-s:x=t.y<this._getViewportMarginTop()?r.top-n.top-t.y:0,this._previousPushAmount={x:u,y:x},{x:t.x+u,y:t.y+x}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!yc(this._lastScrollVisibility,n)){let o=new Ai(t,n);this._positionChanges.next(o)}this._lastScrollVisibility=n}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,o=t.overlayY;t.overlayX==="center"?n="center":this._isRtl()?n=t.overlayX==="start"?"right":"left":n=t.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${n} ${o}`}_calculateBoundingBoxRect(t,e){let n=this._viewportRect,o=this._isRtl(),r,a,s;if(e.overlayY==="top")a=t.y,r=n.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=n.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=n.height-s+this._getViewportMarginTop();else{let J=Math.min(n.bottom-t.y+n.top,t.y),ee=this._lastBoundingBoxSize.height;r=J*2,a=t.y-J,r>ee&&!this._isInitialRender&&!this._growAfterOpen&&(a=t.y-ee/2)}let d=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,c=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,u,x,j;if(c)j=n.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=t.x-this._getViewportMarginStart();else if(d)x=t.x,u=n.right-t.x-this._getViewportMarginEnd();else{let J=Math.min(n.right-t.x+n.left,t.x),ee=this._lastBoundingBoxSize.width;u=J*2,x=t.x-J,u>ee&&!this._isInitialRender&&!this._growAfterOpen&&(x=t.x-ee/2)}return{top:a,left:x,bottom:s,right:j,width:u,height:r}}_setBoundingBoxStyles(t,e){let n=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=ne(n.width),o.height=ne(n.height),o.top=ne(n.top)||"auto",o.bottom=ne(n.bottom)||"auto",o.left=ne(n.left)||"auto",o.right=ne(n.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=ne(r)),a&&(o.maxWidth=ne(a))}this._lastBoundingBoxSize=n,kt(this._boundingBox.style,o)}_resetBoundingBoxStyles(){kt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){kt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,e){let n={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let u=this._viewportRuler.getViewportScrollPosition();kt(n,this._getExactOverlayY(e,t,u)),kt(n,this._getExactOverlayX(e,t,u))}else n.position="static";let s="",d=this._getOffset(e,"x"),c=this._getOffset(e,"y");d&&(s+=`translateX(${d}px) `),c&&(s+=`translateY(${c}px)`),n.transform=s.trim(),a.maxHeight&&(o?n.maxHeight=ne(a.maxHeight):r&&(n.maxHeight="")),a.maxWidth&&(o?n.maxWidth=ne(a.maxWidth):r&&(n.maxWidth="")),kt(this._pane.style,n)}_getExactOverlayY(t,e,n){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,n)),t.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;o.bottom=`${a-(r.y+this._overlayRect.height)}px`}else o.top=ne(r.y);return o}_getExactOverlayX(t,e,n){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,n));let a;if(this._isRtl()?a=t.overlayX==="end"?"left":"right":a=t.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;o.right=`${s-(r.x+this._overlayRect.width)}px`}else o.left=ne(r.x);return o}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),n=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Vs(t,n),isOriginOutsideView:fr(t,n),isOverlayClipped:Vs(e,n),isOverlayOutsideView:fr(e,n)}}_subtractOverflows(t,...e){return e.reduce((n,o)=>n-Math.max(o,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+t-this._getViewportMarginEnd(),bottom:n.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e==="x"?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&ot(t).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof E)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,n=t.height||0;return{top:t.y,bottom:t.y+n,left:t.x,right:t.x+e,height:n,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();t&&(e.style.display="block");let n=e.getBoundingClientRect();return t&&(e.style.display=""),n}};function kt(i,t){for(let e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return i}function js(i){if(typeof i!="number"&&i!=null){let[t,e]=i.split(vc);return!e||e==="px"?parseFloat(t):null}return i||null}function Hs(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function yc(i,t){return i===t?!0:i.isOriginClipped===t.isOriginClipped&&i.isOriginOutsideView===t.isOriginOutsideView&&i.isOverlayClipped===t.isOverlayClipped&&i.isOverlayOutsideView===t.isOverlayOutsideView}var Us="cdk-global-overlay-wrapper";function Zt(i){return new Oi}var Oi=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(Us),this._isDisposed=!1}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._xOffset=t,this._xPosition="left",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._xOffset=t,this._xPosition="right",this}start(t=""){return this._xOffset=t,this._xPosition="start",this}end(t=""){return this._xOffset=t,this._xPosition="end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._xPosition="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,n=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:a,maxHeight:s}=n,d=(o==="100%"||o==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(r==="100%"||r==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,x=this._xOffset,j=this._overlayRef.getConfig().direction==="rtl",J="",ee="",$="";d?$="flex-start":u==="center"?($="center",j?ee=x:J=x):j?u==="left"||u==="end"?($="flex-end",J=x):(u==="right"||u==="start")&&($="flex-start",ee=x):u==="left"||u==="start"?($="flex-start",J=x):(u==="right"||u==="end")&&($="flex-end",ee=x),t.position=this._cssPosition,t.marginLeft=d?"0":J,t.marginTop=c?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=d?"0":ee,e.justifyContent=$,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,n=e.style;e.classList.remove(Us),n.justifyContent=n.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=!0}},Zs=(()=>{class i{_injector=l(A);constructor(){}global(){return Zt()}flexibleConnectedTo(e){return _r(this._injector,e)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),In=new p("OVERLAY_DEFAULT_CONFIG");function Rn(i,t){i.get(he).load(qs);let e=i.get(Fi),n=i.get(P),o=i.get(te),r=i.get(Bt),a=i.get(fe),s=i.get(se,null,{optional:!0})||i.get(me).createRenderer(null,null),d=new Mt(t),c=i.get(In,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||a.value,"showPopover"in n.body?d.usePopover=t?.usePopover??c:d.usePopover=!1;let u=n.createElement("div"),x=n.createElement("div");u.id=o.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),x.appendChild(u),d.usePopover&&(x.setAttribute("popover","manual"),x.classList.add("cdk-overlay-popover"));let j=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return gr(j)?j.after(x):j?.type==="parent"?j.element.appendChild(x):e.getContainerElement().appendChild(x),new Yt(new ki(u,r,i),x,u,d,i.get(D),i.get(Ys),n,i.get(os),i.get($s),t?.disableAnimations??i.get(fi,null,{optional:!0})==="NoopAnimations",i.get(Vt),s)}var Xs=(()=>{class i{scrollStrategies=l(Gs);_positionBuilder=l(Zs);_injector=l(A);constructor(){}create(e){return Rn(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),xc=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Cc=new p("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(A);return()=>Mn(i)}}),$t=(()=>{class i{elementRef=l(E);constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),Qs=new p("cdk-connected-overlay-default-config"),Pi=(()=>{class i{_dir=l(fe,{optional:!0});_injector=l(A);_overlayRef;_templatePortal;_backdropSubscription=oe.EMPTY;_attachSubscription=oe.EMPTY;_detachSubscription=oe.EMPTY;_positionSubscription=oe.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=l(Cc);_ngZone=l(D);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new k;positionChange=new k;attach=new k;detach=new k;overlayKeydown=new k;overlayOutsideClick=new k;constructor(){let e=l(pt),n=l(_t),o=l(Qs,{optional:!0}),r=l(In,{optional:!0});this.usePopover=r?.usePopover===!1?null:"global",this._templatePortal=new Et(e,n),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=xc);let e=this._overlayRef=Rn(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(n=>{this.overlayKeydown.next(n),n.keyCode===27&&!this.disableClose&&!Ce(n)&&(n.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(n=>{let o=this._getOriginElement(),r=X(n);(!o||o!==r&&!o.contains(r))&&this.overlayOutsideClick.next(n)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),n=new Mt({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(n.height=this.height),(this.minWidth||this.minWidth===0)&&(n.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(n.minHeight=this.minHeight),this.backdropClass&&(n.backdropClass=this.backdropClass),this.panelClass&&(n.panelClass=this.panelClass),n}_updatePositionStrategy(e){let n=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(n).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=_r(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof $t?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof $t?this.origin.elementRef.nativeElement:this.origin instanceof E?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(n=>this.backdropClick.emit(n)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(ja(()=>this.positionChange.observers.length>0)).subscribe(n=>{this._ngZone.run(()=>this.positionChange.emit(n)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",F],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",F],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",F],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",F],push:[2,"cdkConnectedOverlayPush","push",F],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",F],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",F],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[we]})}return i})(),It=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({providers:[Xs],imports:[Y,St,Jo,Jo]})}return i})();var An;function Js(){if(An==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>An=!0}))}finally{An=An||!1}return An}function Xt(i){return Js()?i:!!i.capture}var el=new p("cdk-input-modality-detector-options"),tl={ignoreKeys:[18,17,224,91,16]},nl=650,br={passive:!0,capture:!0},il=(()=>{class i{_platform=l(z);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ai(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=X(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<nl||(this._modality.next(Ct(e)?"keyboard":"mouse"),this._mostRecentTarget=X(e))};_onTouchstart=e=>{if(wt(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=X(e)};constructor(){let e=l(D),n=l(P),o=l(el,{optional:!0});if(this._options=_(_({},tl),o),this.modalityDetected=this._modality.pipe(di(1)),this.modalityChanged=this.modalityDetected.pipe(Uo()),this._platform.isBrowser){let r=l(me).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(n,"keydown",this._onKeydown,br),r.listen(n,"mousedown",this._onMousedown,br),r.listen(n,"touchstart",this._onTouchstart,br)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Tn=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(Tn||{}),ol=new p("cdk-focus-monitor-default-options"),Ni=Xt({passive:!0,capture:!0}),On=(()=>{class i{_ngZone=l(D);_platform=l(z);_inputModalityDetector=l(il);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(P);_stopInputModalityDetector=new f;constructor(){let e=l(ol,{optional:!0});this._detectionMode=e?.detectionMode||Tn.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=X(e);for(let o=n;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,n=!1){let o=Q(e);if(!this._platform.isBrowser||o.nodeType!==1)return Pe();let r=xt(o)||this._document,a=this._elementInfo.get(o);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new f,rootNode:r};return this._elementInfo.set(o,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=Q(e),o=this._elementInfo.get(n);o&&(o.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(o))}focusVia(e,n,o){let r=Q(e),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([s,d])=>this._originChanged(s,n,d)):(this._setOrigin(n),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Tn.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===Tn.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?nl:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,n){let o=this._elementInfo.get(n),r=X(e);!o||!o.checkChildren&&n!==r||this._originChanged(n,this._getFocusOrigin(r),o)}_onBlur(e,n){let o=this._elementInfo.get(n);!o||o.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(o,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,o=this._rootNodeFocusListenerCount.get(n)||0;o||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ni),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ni)}),this._rootNodeFocusListenerCount.set(n,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ae(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let o=this._rootNodeFocusListenerCount.get(n);o>1?this._rootNodeFocusListenerCount.set(n,o-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ni),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ni),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,o){this._setClasses(e,n),this._emitOrigin(o,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((o,r)=>{(r===e||o.checkChildren&&r.contains(e))&&n.push([r,o])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Vi=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})(),Li;function wc(){if(Li===void 0&&(Li=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(Li=i.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return Li}function Rt(i){return wc()?.createHTML(i)||i}function rl(i,t,e){let n=e.sanitize(et.HTML,t);i.innerHTML=Rt(n||"")}var al=new Set,At,Bi=(()=>{class i{_platform=l(z);_nonce=l(Wa,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ec}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Dc(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Dc(i,t){if(!al.has(i))try{At||(At=document.createElement("style"),t&&At.setAttribute("nonce",t),At.setAttribute("type","text/css"),document.head.appendChild(At)),At.sheet&&(At.sheet.insertRule(`@media ${i} {body{ }}`,0),al.add(i))}catch(e){console.error(e)}}function Ec(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var vr=(()=>{class i{_mediaMatcher=l(Bi);_zone=l(D);_queries=new Map;_destroySubject=new f;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return sl(ot(e)).some(o=>this._registerQuery(o).mql.matches)}observe(e){let o=sl(ot(e)).map(a=>this._registerQuery(a).observable),r=Pa(o);return r=Na(r.pipe(ve(1)),r.pipe(di(1),li(0))),r.pipe(re(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:d,query:c})=>{s.matches=s.matches||d,s.breakpoints[c]=d}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),r={observable:new Ye(a=>{let s=d=>this._zone.run(()=>a.next(d));return n.addListener(s),()=>{n.removeListener(s)}}).pipe(pe(n),re(({matches:a})=>({query:e,matches:a})),ae(this._destroySubject)),mql:n};return this._queries.set(e,r),r}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function sl(i){return i.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}var Sc=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var zi=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({providers:[Sc]})}return i})();var Cr=(()=>{class i{_platform=l(z);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Mc(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=kc(Nc(e));if(n&&(ll(n)===-1||!this.isVisible(n)))return!1;let o=e.nodeName.toLowerCase(),r=ll(e);return e.hasAttribute("contenteditable")?r!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Fc(e)?!1:o==="audio"?e.hasAttribute("controls")?r!==-1:!1:o==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,n){return Pc(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function kc(i){try{return i.frameElement}catch{return null}}function Mc(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function Ic(i){let t=i.nodeName.toLowerCase();return t==="input"||t==="select"||t==="button"||t==="textarea"}function Rc(i){return Tc(i)&&i.type=="hidden"}function Ac(i){return Oc(i)&&i.hasAttribute("href")}function Tc(i){return i.nodeName.toLowerCase()=="input"}function Oc(i){return i.nodeName.toLowerCase()=="a"}function ul(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let t=i.getAttribute("tabindex");return!!(t&&!isNaN(parseInt(t,10)))}function ll(i){if(!ul(i))return null;let t=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(t)?-1:t}function Fc(i){let t=i.nodeName.toLowerCase(),e=t==="input"&&i.type;return e==="text"||e==="password"||t==="select"||t==="textarea"}function Pc(i){return Rc(i)?!1:Ic(i)||Ac(i)||i.hasAttribute("contenteditable")||ul(i)}function Nc(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var xr=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(t){this._enabled=t,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}_enabled=!0;constructor(t,e,n,o,r=!1,a){this._element=t,this._checker=e,this._ngZone=n,this._document=o,this._injector=a,r||this.attachAnchors()}destroy(){let t=this._startAnchor,e=this._endAnchor;t&&(t.removeEventListener("focus",this.startAnchorListener),t.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(t){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(t)))})}focusFirstTabbableElementWhenReady(t){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(t)))})}focusLastTabbableElementWhenReady(t){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(t)))})}_getRegionBoundary(t){let e=this._element.querySelectorAll(`[cdk-focus-region-${t}], [cdkFocusRegion${t}], [cdk-focus-${t}]`);return t=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(t){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(t),!!n}return e.focus(t),!0}return this.focusFirstTabbableElement(t)}focusFirstTabbableElement(t){let e=this._getRegionBoundary("start");return e&&e.focus(t),!!e}focusLastTabbableElement(t){let e=this._getRegionBoundary("end");return e&&e.focus(t),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;let e=t.children;for(let n=0;n<e.length;n++){let o=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(o)return o}return null}_getLastTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;let e=t.children;for(let n=e.length-1;n>=0;n--){let o=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(o)return o}return null}_createAnchor(){let t=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,t),t.classList.add("cdk-visually-hidden"),t.classList.add("cdk-focus-trap-anchor"),t.setAttribute("aria-hidden","true"),t}_toggleAnchorTabIndex(t,e){t?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(t){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}_executeOnStable(t){this._injector?Ae(t,{injector:this._injector}):setTimeout(t)}},wr=(()=>{class i{_checker=l(Cr);_ngZone=l(D);_document=l(P);_injector=l(A);constructor(){l(he).load(Vi)}create(e,n=!1){return new xr(e,this._checker,this._ngZone,this._document,n,this._injector)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ml=new p("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),hl=new p("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Lc=0,Fn=(()=>{class i{_ngZone=l(D);_defaultOptions=l(hl,{optional:!0});_liveElement;_document=l(P);_sanitizer=l(yi);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(ml,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let o=this._defaultOptions,r,a;return n.length===1&&typeof n[0]=="number"?a=n[0]:[r,a]=n,this.clear(),clearTimeout(this._previousTimeout),r||(r=o&&o.politeness?o.politeness:"polite"),a==null&&o&&(a=o.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:rl(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",n=this._document.getElementsByClassName(e),o=this._document.createElement("div");for(let r=0;r<n.length;r++)n[r].remove();return o.classList.add(e),o.classList.add("cdk-visually-hidden"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-live","polite"),o.id=`cdk-live-announcer-${Lc++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<n.length;o++){let r=n[o],a=r.getAttribute("aria-owns");a?a.indexOf(e)===-1&&r.setAttribute("aria-owns",a+" "+e):r.setAttribute("aria-owns",e)}}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var rt=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(rt||{}),dl="cdk-high-contrast-black-on-white",cl="cdk-high-contrast-white-on-black",yr="cdk-high-contrast-active",fl=(()=>{class i{_platform=l(z);_hasCheckedHighContrastMode=!1;_document=l(P);_breakpointSubscription;constructor(){this._breakpointSubscription=l(vr).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return rt.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,o=n&&n.getComputedStyle?n.getComputedStyle(e):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return rt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return rt.BLACK_ON_WHITE}return rt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(yr,dl,cl),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===rt.BLACK_ON_WHITE?e.add(yr,dl):n===rt.WHITE_ON_BLACK&&e.add(yr,cl)}}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Dr=(()=>{class i{constructor(){l(fl)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({imports:[zi]})}return i})();function Vc(i,t){}var at=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Sr=(()=>{class i extends Kt{_elementRef=l(E);_focusTrapFactory=l(wr);_config;_interactivityChecker=l(Cr);_ngZone=l(D);_focusMonitor=l(On);_renderer=l(se);_changeDetectorRef=l(De);_injector=l(A);_platform=l(z);_document=l(P);_portalOutlet;_focusTrapped=new f;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=l(at,{optional:!0})||new at,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let n=this._ariaLabelledByQueue.indexOf(e);n>-1&&(this._ariaLabelledByQueue.splice(n,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),n}attachTemplatePortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),n}attachDomPortal=e=>{this._portalOutlet.hasAttached();let n=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),n};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),a(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",o),a=this._renderer.listen(e,"mousedown",o)})),e.focus(n)}_focusByCssSelector(e,n){let o=this._elementRef.nativeElement.querySelector(e);o&&this._forceFocus(o,n)}_trapFocus(e){this._isDestroyed||Ae(()=>{let n=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||n.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,n=null;if(typeof e=="string"?n=this._document.querySelector(e):typeof e=="boolean"?n=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(n=e),this._config.restoreFocus&&n&&typeof n.focus=="function"){let o=bn(),r=this._elementRef.nativeElement;(!o||o===this._document.body||o===r||r.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(n,this._closeInteractionType),this._closeInteractionType=null):n.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,n=bn();return e===n||e.contains(n)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=bn()))}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(n,o){if(n&1&&Ve(En,7),n&2){let r;H(r=U())&&(o._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(n,o){n&2&&N("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[de],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(n,o){n&1&&Ne(0,Vc,0,0,"ng-template",0)},dependencies:[En],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),Pn=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new f;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(t,e){this.overlayRef=t,this.config=e,this.disableClose=e.disableClose,this.backdropClick=t.backdropClick(),this.keydownEvents=t.keydownEvents(),this.outsidePointerEvents=t.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(n=>{n.keyCode===27&&!this.disableClose&&!Ce(n)&&(n.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=t.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(t,e){if(this._canClose(t)){let n=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(t),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(t="",e=""){return this.overlayRef.updateSize({width:t,height:e}),this}addPanelClass(t){return this.overlayRef.addPanelClass(t),this}removePanelClass(t){return this.overlayRef.removePanelClass(t),this}_canClose(t){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(t,e,this.componentInstance))}},Bc=new p("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=l(A);return()=>qt(i)}}),zc=new p("DialogData"),jc=new p("DefaultDialogConfig");function Hc(i){let t=M(i),e=new k;return{valueSignal:t,get value(){return t()},change:e,ngOnDestroy(){e.complete()}}}var kr=(()=>{class i{_injector=l(A);_defaultOptions=l(jc,{optional:!0});_parentDialog=l(i,{optional:!0,skipSelf:!0});_overlayContainer=l(Fi);_idGenerator=l(te);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new f;_afterOpenedAtThisLevel=new f;_ariaHiddenElements=new Map;_scrollStrategy=l(Bc);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Nt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(pe(void 0)));constructor(){}open(e,n){let o=this._defaultOptions||new at;n=_(_({},o),n),n.id=n.id||this._idGenerator.getId("cdk-dialog-"),n.id&&this.getDialogById(n.id);let r=this._getOverlayConfig(n),a=Rn(this._injector,r),s=new Pn(a,n),d=this._attachContainer(a,s,n);if(s.containerInstance=d,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();d._focusTrapped?d._focusTrapped.pipe(ve(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(e,s,d,n),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Er(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){Er(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Er(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let n=new Mt({positionStrategy:e.positionStrategy||Zt().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(n.backdropClass=e.backdropClass),n}_attachContainer(e,n,o){let r=o.injector||o.viewContainerRef?.injector,a=[{provide:at,useValue:o},{provide:Pn,useValue:n},{provide:Yt,useValue:e}],s;o.container?typeof o.container=="function"?s=o.container:(s=o.container.type,a.push(...o.container.providers(o))):s=Sr;let d=new Gt(s,o.viewContainerRef,A.create({parent:r||this._injector,providers:a}));return e.attach(d).instance}_attachDialogContent(e,n,o,r){if(e instanceof pt){let a=this._createInjector(r,n,o,void 0),s={$implicit:r.data,dialogRef:n};r.templateContext&&(s=_(_({},s),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),o.attachTemplatePortal(new Et(e,null,s,a))}else{let a=this._createInjector(r,n,o,this._injector),s=o.attachComponentPortal(new Gt(e,r.viewContainerRef,a));n.componentRef=s,n.componentInstance=s.instance}}_createInjector(e,n,o,r){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:zc,useValue:e.data},{provide:Pn,useValue:n}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(n,e,o)):s.push(...e.providers)),e.direction&&(!a||!a.get(fe,null,{optional:!0}))&&s.push({provide:fe,useValue:Hc(e.direction)}),A.create({parent:a||r,providers:s})}_removeOpenDialog(e,n){let o=this.openDialogs.indexOf(e);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,a)=>{r?a.setAttribute("aria-hidden",r):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),n&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let n=e.parentElement.children;for(let o=n.length-1;o>-1;o--){let r=n[o];r!==e&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Er(i,t){let e=i.length;for(;e--;)t(i[e])}var pl=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({providers:[kr],imports:[It,St,Dr,St]})}return i})();function Qt(i){return i!=null&&`${i}`!="false"}var Uc=new p("MATERIAL_ANIMATIONS"),gl=null;function Wc(){return l(Uc,{optional:!0})?.animationsDisabled||l(fi,{optional:!0})==="NoopAnimations"?"di-disabled":(gl??=l(Bi).matchMedia("(prefers-reduced-motion)").matches,gl?"reduced-motion":"enabled")}function be(){return Wc()!=="enabled"}var Gc=200,ji=class{_letterKeyStream=new f;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new f;selectedItem=this._selectedItem;constructor(t,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:Gc;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(t),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(t){this._selectedItemIndex=t}setItems(t){this._items=t}handleKey(t){let e=t.keyCode;t.key&&t.key.length===1?this._letterKeyStream.next(t.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(t){this._letterKeyStream.pipe(Je(e=>this._pressedLetters.push(e)),li(t),le(()=>this._pressedLetters.length>0),re(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let o=(this._selectedItemIndex+n)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};var Hi=class{_items;_activeItemIndex=M(-1);_activeItem=M(null);_wrap=!1;_typeaheadSubscription=oe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=t=>t.disabled;constructor(t,e){this._items=t,t instanceof Yo?this._itemChangesSubscription=t.changes.subscribe(n=>this._itemsChanged(n.toArray())):bt(t)&&(this._effectRef=ge(()=>this._itemsChanged(t()),{injector:e}))}tabOut=new f;change=new f;skipPredicate(t){return this._skipPredicateFn=t,this}withWrap(t=!0){return this._wrap=t,this}withVerticalOrientation(t=!0){return this._vertical=t,this}withHorizontalOrientation(t){return this._horizontal=t,this}withAllowedModifierKeys(t){return this._allowedModifierKeys=t,this}withTypeAhead(t=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new ji(e,{debounceInterval:typeof t=="number"?t:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(t=!0){return this._homeAndEnd=t,this}withPageUpDown(t=!0,e=10){return this._pageUpAndDown={enabled:t,delta:e},this}setActiveItem(t){let e=this._activeItem();this.updateActiveItem(t),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(t){let e=t.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!t[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(o||Ce(t,"shiftKey"))&&this._typeahead?.handleKey(t);return}this._typeahead?.reset(),t.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(t){let e=this._getItemsArray(),n=typeof t=="number"?t:e.indexOf(t),o=e[n];this._activeItem.set(o??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(t){this._wrap?this._setActiveInWrapMode(t):this._setActiveInDefaultMode(t)}_setActiveInWrapMode(t){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let o=(this._activeItemIndex()+t*n+e.length)%e.length,r=e[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(t){this._setActiveItemByIndex(this._activeItemIndex()+t,t)}_setActiveItemByIndex(t,e){let n=this._getItemsArray();if(n[t]){for(;this._skipPredicateFn(n[t]);)if(t+=e,!n[t])return;this.setActiveItem(t)}}_getItemsArray(){return bt(this._items)?this._items():this._items instanceof Yo?this._items.toArray():this._items}_itemsChanged(t){this._typeahead?.setItems(t);let e=this._activeItem();if(e){let n=t.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Nn=class extends Hi{setActiveItem(t){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(t),this.activeItem&&this.activeItem.setActiveStyles()}};var yl=" ";function xl(i,t,e){let n=Cl(i,t);e=e.trim(),!n.some(o=>o.trim()===e)&&(n.push(e),i.setAttribute(t,n.join(yl)))}function Rr(i,t,e){let n=Cl(i,t);e=e.trim();let o=n.filter(r=>r!==e);o.length?i.setAttribute(t,o.join(yl)):i.removeAttribute(t)}function Cl(i,t){return i.getAttribute(t)?.match(/\S+/g)??[]}function Kc(i,t){}var Wi=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Ar="mdc-dialog--open",wl="mdc-dialog--opening",Dl="mdc-dialog--closing",Yc=150,$c=75,qc=(()=>{class i extends Sr{_animationStateChanged=new k;_animationsEnabled=!be();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Sl(this._config.enterAnimationDuration)??Yc:0;_exitAnimationDuration=this._animationsEnabled?Sl(this._config.exitAnimationDuration)??$c:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(El,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(wl,Ar)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ar),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ar),this._animationsEnabled?(this._hostElement.style.setProperty(El,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Dl)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(wl,Dl)}_waitForAnimationToComplete(e,n){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(n,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let n=super.attachComponentPortal(e);return n.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),n}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Re(i)))(o||i)}})();static \u0275cmp=w({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(n,o){n&2&&($e("id",o._config.id),N("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),L("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[de],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(n,o){n&1&&(h(0,"div",0)(1,"div",1),Ne(2,Kc,0,0,"ng-template",2),m()())},dependencies:[En],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),El="--mat-dialog-transition-duration";function Sl(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?qe(i.substring(0,i.length-2)):i.endsWith("s")?qe(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var Ui=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(Ui||{}),st=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new zo(1);_beforeClosed=new zo(1);_result;_closeFallbackTimeout;_state=Ui.OPEN;_closeInteractionType;constructor(t,e,n){this._ref=t,this._config=e,this._containerInstance=n,this.disableClose=e.disableClose,this.id=t.id,t.addPanelClass("mat-mdc-dialog-panel"),n._animationStateChanged.pipe(le(o=>o.state==="opened"),ve(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(le(o=>o.state==="closed"),ve(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),t.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ee(this.backdropClick(),this.keydownEvents().pipe(le(o=>o.keyCode===27&&!this.disableClose&&!Ce(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),Zc(this,o.type==="keydown"?"keyboard":"mouse"))})}close(t){let e=this._config.closePredicate;e&&!e(t,this._config,this.componentInstance)||(this._result=t,this._containerInstance._animationStateChanged.pipe(le(n=>n.state==="closing"),ve(1)).subscribe(n=>{this._beforeClosed.next(t),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),n.totalTime+100)}),this._state=Ui.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(t){let e=this._ref.config.positionStrategy;return t&&(t.left||t.right)?t.left?e.left(t.left):e.right(t.right):e.centerHorizontally(),t&&(t.top||t.bottom)?t.top?e.top(t.top):e.bottom(t.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(t="",e=""){return this._ref.updateSize(t,e),this}addPanelClass(t){return this._ref.addPanelClass(t),this}removePanelClass(t){return this._ref.removePanelClass(t),this}getState(){return this._state}_finishDialogClose(){this._state=Ui.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Zc(i,t,e){return i._closeInteractionType=t,i.close(e)}var Tr=new p("MatMdcDialogData"),Xc=new p("mat-mdc-dialog-default-options"),Qc=new p("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(A);return()=>qt(i)}}),Gi=(()=>{class i{_defaultOptions=l(Xc,{optional:!0});_scrollStrategy=l(Qc);_parentDialog=l(i,{optional:!0,skipSelf:!0});_idGenerator=l(te);_injector=l(A);_dialog=l(kr);_animationsDisabled=be();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new f;_afterOpenedAtThisLevel=new f;dialogConfigClass=Wi;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Nt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(pe(void 0)));constructor(){this._dialogRefConstructor=st,this._dialogContainerType=qc,this._dialogDataToken=Tr}open(e,n){let o;n=_(_({},this._defaultOptions||new Wi),n),n.id=n.id||this._idGenerator.getId("mat-mdc-dialog-"),n.scrollStrategy=n.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,q(_({},n),{positionStrategy:Zt(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||n.enterAnimationDuration?.toLocaleString()==="0"||n.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:n},{provide:at,useValue:n}]},templateContext:()=>({dialogRef:o}),providers:(a,s,d)=>(o=new this._dialogRefConstructor(a,n,d),o.updatePosition(n?.position),[{provide:this._dialogContainerType,useValue:d},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(o);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let n=e.length;for(;n--;)e[n].close()}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var kl=(()=>{class i{_dialogRef=l(st,{optional:!0});_elementRef=l(E);_dialog=l(Gi);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Jc(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i})}return i})(),Ki=(()=>{class i extends kl{id=l(te).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Re(i)))(o||i)}})();static \u0275dir=S({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(n,o){n&2&&$e("id",o.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[de]})}return i})(),Yi=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Ka([us])]})}return i})(),$i=(()=>{class i extends kl{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Re(i)))(o||i)}})();static \u0275dir=S({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(n,o){n&2&&L("mat-mdc-dialog-actions-align-start",o.align==="start")("mat-mdc-dialog-actions-align-center",o.align==="center")("mat-mdc-dialog-actions-align-end",o.align==="end")},inputs:{align:"align"},features:[de]})}return i})();function Jc(i,t){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?t.find(n=>n.id===e.id):null}var qi=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({providers:[Gi],imports:[pl,It,St,Y]})}return i})();var Ln=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new f;constructor(t=!1,e,n=!0,o){this._multiple=t,this._emitChanges=n,this.compareWith=o,e&&e.length&&(t?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...t){this._verifyValueAssignment(t),t.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...t){this._verifyValueAssignment(t),t.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...t){this._verifyValueAssignment(t);let e=this.selected,n=new Set(t.map(r=>this._getConcreteValue(r)));t.forEach(r=>this._markSelected(r)),e.filter(r=>!n.has(this._getConcreteValue(r,n))).forEach(r=>this._unmarkSelected(r));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let e=this._hasQueuedChanges();return t&&this._emitChangeEvent(),e}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(t,n))return n;return t}else return t}};var Pl=new p("");function Pr(i){return i==null||Nr(i)===0}function Nr(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var Nl=new p(""),Ll=new p(""),eu=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,lt=class{static min(t){return tu(t)}static max(t){return nu(t)}static required(t){return iu(t)}static requiredTrue(t){return ou(t)}static email(t){return ru(t)}static minLength(t){return au(t)}static maxLength(t){return su(t)}static pattern(t){return lu(t)}static nullValidator(t){return Vl()}static compose(t){return Wl(t)}static composeAsync(t){return Gl(t)}};function tu(i){return t=>{if(t.value==null||i==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<i?{min:{min:i,actual:t.value}}:null}}function nu(i){return t=>{if(t.value==null||i==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>i?{max:{max:i,actual:t.value}}:null}}function iu(i){return Pr(i.value)?{required:!0}:null}function ou(i){return i.value===!0?null:{required:!0}}function ru(i){return Pr(i.value)||eu.test(i.value)?null:{email:!0}}function au(i){return t=>{let e=t.value?.length??Nr(t.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function su(i){return t=>{let e=t.value?.length??Nr(t.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function lu(i){if(!i)return Vl;let t,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=i.toString(),t=i),n=>{if(Pr(n.value))return null;let o=n.value;return t.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function Vl(i){return null}function Bl(i){return i!=null}function zl(i){return qo(i)?Oa(i):i}function jl(i){let t={};return i.forEach(e=>{t=e!=null?_(_({},t),e):t}),Object.keys(t).length===0?null:t}function Hl(i,t){return t.map(e=>e(i))}function du(i){return!i.validate}function Ul(i){return i.map(t=>du(t)?t:e=>t.validate(e))}function Wl(i){if(!i)return null;let t=i.filter(Bl);return t.length==0?null:function(e){return jl(Hl(e,t))}}function Lr(i){return i!=null?Wl(Ul(i)):null}function Gl(i){if(!i)return null;let t=i.filter(Bl);return t.length==0?null:function(e){let n=Hl(e,t).map(zl);return si(n).pipe(re(jl))}}function Vr(i){return i!=null?Gl(Ul(i)):null}function Il(i,t){return i===null?[t]:Array.isArray(i)?[...i,t]:[i,t]}function Kl(i){return i._rawValidators}function Yl(i){return i._rawAsyncValidators}function Or(i){return i?Array.isArray(i)?i:[i]:[]}function Xi(i,t){return Array.isArray(i)?i.includes(t):i===t}function Rl(i,t){let e=Or(t);return Or(i).forEach(o=>{Xi(e,o)||e.push(o)}),e}function Al(i,t){return Or(t).filter(e=>!Xi(i,e))}var Qi=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Lr(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Vr(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},tn=class extends Qi{name;get formDirective(){return null}get path(){return null}},dt=class extends Qi{_parent=null;name=null;valueAccessor=null};var Vn="VALID",Zi="INVALID",Jt="PENDING",Bn="DISABLED",ct=class{},Ji=class extends ct{value;source;constructor(t,e){super(),this.value=t,this.source=e}},jn=class extends ct{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},Hn=class extends ct{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},en=class extends ct{status;source;constructor(t,e){super(),this.status=t,this.source=e}},eo=class extends ct{source;constructor(t){super(),this.source=t}},to=class extends ct{source;constructor(t){super(),this.source=t}};function $l(i){return(oo(i)?i.validators:i)||null}function cu(i){return Array.isArray(i)?Lr(i):i||null}function ql(i,t){return(oo(t)?t.asyncValidators:i)||null}function uu(i){return Array.isArray(i)?Vr(i):i||null}function oo(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function mu(i,t,e){let n=i.controls;if(!(t?Object.keys(n):n).length)throw new Z(1e3,"");if(!n[e])throw new Z(1001,"")}function hu(i,t,e){i._forEachChild((n,o)=>{if(e[o]===void 0)throw new Z(-1002,"")})}var nn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return O(this.statusReactive)}set status(t){O(()=>this.statusReactive.set(t))}_status=b(()=>this.statusReactive());statusReactive=M(void 0);get valid(){return this.status===Vn}get invalid(){return this.status===Zi}get pending(){return this.status===Jt}get disabled(){return this.status===Bn}get enabled(){return this.status!==Bn}errors;get pristine(){return O(this.pristineReactive)}set pristine(t){O(()=>this.pristineReactive.set(t))}_pristine=b(()=>this.pristineReactive());pristineReactive=M(!0);get dirty(){return!this.pristine}get touched(){return O(this.touchedReactive)}set touched(t){O(()=>this.touchedReactive.set(t))}_touched=b(()=>this.touchedReactive());touchedReactive=M(!1);get untouched(){return!this.touched}_events=new f;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Rl(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Rl(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Al(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Al(t,this._rawAsyncValidators))}hasValidator(t){return Xi(this._rawValidators,t)}hasAsyncValidator(t){return Xi(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(q(_({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new Hn(!0,n))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=t.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:n})}),t.onlySelf||this._parent?._updateTouched(t,n),e&&t.emitEvent!==!1&&this._events.next(new Hn(!1,n))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(q(_({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new jn(!1,n))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=t.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,n),e&&t.emitEvent!==!1&&this._events.next(new jn(!0,n))}markAsPending(t={}){this.status=Jt;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new en(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(q(_({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Bn,this.errors=null,this._forEachChild(o=>{o.disable(q(_({},t),{onlySelf:!0}))}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ji(this.value,n)),this._events.next(new en(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(q(_({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Vn,this._forEachChild(n=>{n.enable(q(_({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(q(_({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Vn||this.status===Jt)&&this._runAsyncValidator(n,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ji(this.value,e)),this._events.next(new en(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(q(_({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Bn:Vn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=Jt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let n=zl(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,o)=>n&&n._find(o),this)}getError(t,e){let n=e?this.get(e):this;return n?.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new en(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n)}_initObservables(){this.valueChanges=new k,this.statusChanges=new k}_calculateStatus(){return this._allControlsDisabled()?Bn:this.errors?Zi:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Jt)?Jt:this._anyControlsHaveStatus(Zi)?Zi:Vn}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,t.onlySelf||this._parent?._updatePristine(t,e),o&&this._events.next(new jn(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new Hn(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){oo(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=cu(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=uu(this._rawAsyncValidators)}},Un=class extends nn{constructor(t,e,n){super($l(e),ql(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){hu(this,!0,t),Object.keys(t).forEach(n=>{mu(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let o=this.controls[n];o&&o.patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,o)=>{n.reset(t?t[o]:null,q(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new to(this))}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,n,o)=>((n.enabled||this.disabled)&&(e[o]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((o,r)=>{n=e(n,o,r)}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var Zl=new p("",{factory:()=>Xl}),Xl="always";function Fr(i,t,e=Xl){Br(i,t),t.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(i.disabled),pu(i,t),_u(i,t),gu(i,t),fu(i,t)}function Tl(i,t,e=!0){let n=()=>{};t?.valueAccessor?.registerOnChange(n),t?.valueAccessor?.registerOnTouched(n),io(i,t),i&&(t._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function no(i,t){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function fu(i,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(e),t._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function Br(i,t){let e=Kl(i);t.validator!==null?i.setValidators(Il(e,t.validator)):typeof e=="function"&&i.setValidators([e]);let n=Yl(i);t.asyncValidator!==null?i.setAsyncValidators(Il(n,t.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let o=()=>i.updateValueAndValidity();no(t._rawValidators,o),no(t._rawAsyncValidators,o)}function io(i,t){let e=!1;if(i!==null){if(t.validator!==null){let o=Kl(i);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==t.validator);r.length!==o.length&&(e=!0,i.setValidators(r))}}if(t.asyncValidator!==null){let o=Yl(i);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==t.asyncValidator);r.length!==o.length&&(e=!0,i.setAsyncValidators(r))}}}let n=()=>{};return no(t._rawValidators,n),no(t._rawAsyncValidators,n),e}function pu(i,t){t.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ql(i,t)})}function gu(i,t){t.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ql(i,t),i.updateOn!=="submit"&&i.markAsTouched()})}function Ql(i,t){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function _u(i,t){let e=(n,o)=>{t.valueAccessor.writeValue(n),o&&t.viewToModelUpdate(n)};i.registerOnChange(e),t._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function Jl(i,t){i==null,Br(i,t)}function bu(i,t){return io(i,t)}function ed(i,t){i._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function vu(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}var yu={provide:tn,useExisting:ci(()=>Wn)},zn=Promise.resolve(),Wn=(()=>{class i extends tn{callSetDisabledState;get submitted(){return O(this.submittedReactive)}_submitted=b(()=>this.submittedReactive());submittedReactive=M(!1);_directives=new Set;form;ngSubmit=new k;options;constructor(e,n,o){super(),this.callSetDisabledState=o,this.form=new Un({},Lr(e),Vr(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){zn.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),Fr(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){zn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){zn.then(()=>{let n=this._findContainer(e.path),o=new Un({});Jl(o,e),n.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){zn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){zn.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),ed(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new eo(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||i)(gt(Nl,10),gt(Ll,10),gt(Zl,8))};static \u0275dir=S({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,o){n&1&&I("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ue([yu]),de]})}return i})();function Ol(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}function Fl(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var xu=class extends nn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,n){super($l(e),ql(n,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),oo(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Fl(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new to(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Ol(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Ol(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Fl(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Cu=i=>i instanceof xu;var wu=(()=>{class i extends tn{callSetDisabledState;get submitted(){return O(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=b(()=>this._submittedReactive());_submittedReactive=M(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(io(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return Fr(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Tl(e.control||null,e,!1),vu(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,ed(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new eo(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,o=this.form.get(e.path);n!==o&&(Tl(n||null,e),Cu(o)&&(Fr(o,e,this.callSetDisabledState),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Jl(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&bu(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Br(this.form,this),this._oldForm&&io(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||i)(gt(Nl,10),gt(Ll,10),gt(Zl,8))};static \u0275dir=S({type:i,features:[de,we]})}return i})();var Du={provide:tn,useExisting:ci(()=>Gn)},Gn=(()=>{class i extends wu{form=null;ngSubmit=new k;get control(){return this.form}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Re(i)))(o||i)}})();static \u0275dir=S({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,o){n&1&&I("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ue([Du]),de]})}return i})();var on,td=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function zr(){if(on)return on;if(typeof document!="object"||!document)return on=new Set(td),on;let i=document.createElement("input");return on=new Set(td.filter(t=>(i.setAttribute("type",t),i.type===t))),on}var jr=class{_box;_destroyed=new f;_resizeSubject=new f;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new Ye(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),n.unsubscribe(),this._elementObservables.delete(t)}}).pipe(le(e=>e.some(n=>n.target===t)),Go({bufferSize:1,refCount:!0}),ae(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},nd=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=l(D);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let o=n?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new jr(o)),this._observers.get(o).observe(e)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Eu=["notch"],Su=["matFormFieldNotchedOutline",""],ku=["*"],id=["iconPrefixContainer"],od=["textPrefixContainer"],rd=["iconSuffixContainer"],ad=["textSuffixContainer"],Mu=["textField"],Iu=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Ru=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Au(i,t){i&1&&ce(0,"span",21)}function Tu(i,t){if(i&1&&(h(0,"label",20),W(1,1),G(2,Au,1,0,"span",21),m()),i&2){let e=B(2);V("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),N("for",e._control.disableAutomaticLabeling?null:e._control.id),g(2),K(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Ou(i,t){if(i&1&&G(0,Tu,3,5,"label",20),i&2){let e=B();K(e._hasFloatingLabel()?0:-1)}}function Fu(i,t){i&1&&ce(0,"div",7)}function Pu(i,t){}function Nu(i,t){if(i&1&&Ne(0,Pu,0,0,"ng-template",13),i&2){B(2);let e=gn(1);V("ngTemplateOutlet",e)}}function Lu(i,t){if(i&1&&(h(0,"div",9),G(1,Nu,1,1,null,13),m()),i&2){let e=B();V("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),g(),K(e._forceDisplayInfixLabel()?-1:1)}}function Vu(i,t){i&1&&(h(0,"div",10,2),W(2,2),m())}function Bu(i,t){i&1&&(h(0,"div",11,3),W(2,3),m())}function zu(i,t){}function ju(i,t){if(i&1&&Ne(0,zu,0,0,"ng-template",13),i&2){B();let e=gn(1);V("ngTemplateOutlet",e)}}function Hu(i,t){i&1&&(h(0,"div",14,4),W(2,4),m())}function Uu(i,t){i&1&&(h(0,"div",15,5),W(2,5),m())}function Wu(i,t){i&1&&ce(0,"div",16)}function Gu(i,t){i&1&&(h(0,"div",18),W(1,6),m())}function Ku(i,t){if(i&1&&(h(0,"mat-hint",22),y(1),m()),i&2){let e=B(2);V("id",e._hintLabelId),g(),xe(e.hintLabel)}}function Yu(i,t){if(i&1&&(h(0,"div",19),G(1,Ku,2,2,"mat-hint",22),W(2,7),ce(3,"div",23),W(4,8),m()),i&2){let e=B();g(),K(e.hintLabel?1:-1)}}var Ue=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["mat-label"]]})}return i})(),$u=new p("MatError");var ao=(()=>{class i{align="start";id=l(te).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,o){n&2&&($e("id",o.id),N("align",null),L("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),qu=new p("MatPrefix");var Zu=new p("MatSuffix");var hd=new p("FloatingLabelParent"),sd=(()=>{class i{_elementRef=l(E);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(nd);_ngZone=l(D);_parent=l(hd);_resizeSubscription=new oe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Xu(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,o){n&2&&L("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Xu(i){let t=i;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var ld="mdc-line-ripple--active",ro="mdc-line-ripple--deactivating",dd=(()=>{class i{_elementRef=l(E);_cleanupTransitionEnd;constructor(){let e=l(D),n=l(se);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ro),e.add(ld)}deactivate(){this._elementRef.nativeElement.classList.add(ro)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,o=n.contains(ro);e.propertyName==="opacity"&&o&&n.remove(ld,ro)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),cd=(()=>{class i{_elementRef=l(E);_ngZone=l(D);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,o){if(n&1&&Ve(Eu,5),n&2){let r;H(r=U())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,o){n&2&&L("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Su,ngContentSelectors:ku,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,o){n&1&&(ye(),Le(0,"div",1),zt(1,"div",2,0),W(3),jt(),Le(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),Kn=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i})}return i})();var Yn=new p("MatFormField"),Qu=new p("MAT_FORM_FIELD_DEFAULT_OPTIONS"),ud="fill",Ju="auto",md="fixed",em="translateY(-50%)",Ze=(()=>{class i{_elementRef=l(E);_changeDetectorRef=l(De);_platform=l(z);_idGenerator=l(te);_ngZone=l(D);_defaults=l(Qu,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=_n("iconPrefixContainer");_textPrefixContainerSignal=_n("textPrefixContainer");_iconSuffixContainerSignal=_n("iconSuffixContainer");_textSuffixContainerSignal=_n("textSuffixContainer");_prefixSuffixContainers=b(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=is(Ue);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Qt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Ju}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||ud;this._appearanceSignal.set(n)}_appearanceSignal=M(ud);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||md}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||md}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new f;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=be();constructor(){let e=this._defaults,n=l(fe);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ge(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=b(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,o="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(o+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(o+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(pe([void 0,void 0]),re(()=>[n.errorState,n.userAriaDescribedBy]),Wo(),le(([[r,a],[s,d]])=>r!==s||a!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(ae(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ee(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){bi({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=b(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let n=this._control.describedByIds,o;if(n){let r=this._describedByIds||e;o=e.concat(n.filter(a=>a&&!r.includes(a)))}else o=e;this._control.setDescribedByIds(o),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",x=`${a+s}px`,J=`calc(${u} * (${x} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ee=`var(--mat-mdc-form-field-label-transform, ${em} translateX(${J}))`,$=a+s+d+c;return[ee,$]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,o]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["mat-form-field"]],contentQueries:function(n,o,r){if(n&1&&(Xa(r,o._labelChild,Ue,5),pi(r,Kn,5)(r,qu,5)(r,Zu,5)(r,$u,5)(r,ao,5)),n&2){Zo();let a;H(a=U())&&(o._formFieldControl=a.first),H(a=U())&&(o._prefixChildren=a),H(a=U())&&(o._suffixChildren=a),H(a=U())&&(o._errorChildren=a),H(a=U())&&(o._hintChildren=a)}},viewQuery:function(n,o){if(n&1&&(Qa(o._iconPrefixContainerSignal,id,5)(o._textPrefixContainerSignal,od,5)(o._iconSuffixContainerSignal,rd,5)(o._textSuffixContainerSignal,ad,5),Ve(Mu,5)(id,5)(od,5)(rd,5)(ad,5)(sd,5)(cd,5)(dd,5)),n&2){Zo(4);let r;H(r=U())&&(o._textField=r.first),H(r=U())&&(o._iconPrefixContainer=r.first),H(r=U())&&(o._textPrefixContainer=r.first),H(r=U())&&(o._iconSuffixContainer=r.first),H(r=U())&&(o._textSuffixContainer=r.first),H(r=U())&&(o._floatingLabel=r.first),H(r=U())&&(o._notchedOutline=r.first),H(r=U())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,o){n&2&&L("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ue([{provide:Yn,useExisting:i},{provide:hd,useExisting:i}])],ngContentSelectors:Ru,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,o){if(n&1&&(ye(Iu),Ne(0,Ou,1,1,"ng-template",null,0,ns),h(2,"div",6,1),I("click",function(a){return o._control.onContainerClick(a)}),G(4,Fu,1,0,"div",7),h(5,"div",8),G(6,Lu,2,2,"div",9),G(7,Vu,3,0,"div",10),G(8,Bu,3,0,"div",11),h(9,"div",12),G(10,ju,1,1,null,13),W(11),m(),G(12,Hu,3,0,"div",14),G(13,Uu,3,0,"div",15),m(),G(14,Wu,1,0,"div",16),m(),h(15,"div",17),G(16,Gu,2,0,"div",18)(17,Yu,5,1,"div",19),m()),n&2){let r;g(2),L("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),g(2),K(!o._hasOutline()&&!o._control.disabled?4:-1),g(2),K(o._hasOutline()?6:-1),g(),K(o._hasIconPrefix?7:-1),g(),K(o._hasTextPrefix?8:-1),g(2),K(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),g(2),K(o._hasTextSuffix?12:-1),g(),K(o._hasIconSuffix?13:-1),g(),K(o._hasOutline()?-1:14),g(),L("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();g(),K((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[sd,cd,rs,dd,ao],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var ke=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(ke||{}),Hr=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ke.HIDDEN;constructor(t,e,n,o=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},fd=Xt({passive:!0,capture:!0}),Ur=class{_events=new Map;addHandler(t,e,n,o){let r=this._events.get(e);if(r){let a=r.get(n);a?a.add(o):r.set(n,new Set([o]))}else this._events.set(e,new Map([[n,new Set([o])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,fd)})}removeHandler(t,e,n){let o=this._events.get(t);if(!o)return;let r=o.get(e);r&&(r.delete(n),r.size===0&&o.delete(e),o.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,fd)))}_delegateEventHandler=t=>{let e=X(t);e&&this._events.get(t.type)?.forEach((n,o)=>{(o===e||o.contains(e))&&n.forEach(r=>r.handleEvent(t))})}},$n={enterDuration:225,exitDuration:150},tm=800,pd=Xt({passive:!0,capture:!0}),gd=["mousedown","touchstart"],_d=["mouseup","mouseleave","touchend","touchcancel"],nm=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),qn=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ur;constructor(t,e,n,o,r){this._target=t,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=Q(n)),r&&r.get(he).load(nm)}fadeInRipple(t,e,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=_(_({},$n),n.animation);n.centered&&(t=o.left+o.width/2,e=o.top+o.height/2);let a=n.radius||im(t,e,o),s=t-o.left,d=e-o.top,c=r.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${d-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,n.color!=null&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u);let x=window.getComputedStyle(u),j=x.transitionProperty,J=x.transitionDuration,ee=j==="none"||J==="0s"||J==="0s, 0s"||o.width===0&&o.height===0,$=new Hr(this,u,n,ee);u.style.transform="scale3d(1, 1, 1)",$.state=ke.FADING_IN,n.persistent||(this._mostRecentTransientRipple=$);let ie=null;return!ee&&(c||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ri=()=>{ie&&(ie.fallbackTimer=null),clearTimeout(Pt),this._finishRippleTransition($)},Ft=()=>this._destroyRipple($),Pt=setTimeout(Ft,c+100);u.addEventListener("transitionend",ri),u.addEventListener("transitioncancel",Ft),ie={onTransitionEnd:ri,onTransitionCancel:Ft,fallbackTimer:Pt}}),this._activeRipples.set($,ie),(ee||!c)&&this._finishRippleTransition($),$}fadeOutRipple(t){if(t.state===ke.FADING_OUT||t.state===ke.HIDDEN)return;let e=t.element,n=_(_({},$n),t.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",t.state=ke.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=Q(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,gd.forEach(n=>{i._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{_d.forEach(e=>{this._triggerElement.addEventListener(e,this,pd)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===ke.FADING_IN?this._startFadeOutTransition(t):t.state===ke.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=ke.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=ke.HIDDEN,e!==null&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=Ct(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+tm;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!wt(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===ke.VISIBLE||t.config.terminateOnPointerUp&&t.state===ke.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(gd.forEach(e=>i._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(_d.forEach(e=>t.removeEventListener(e,this,pd)),this._pointerUpEventsRegistered=!1))}};function im(i,t,e){let n=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),o=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+o*o)}var Wr=new p("mat-ripple-global-options"),bd=(()=>{class i{_elementRef=l(E);_animationsDisabled=be();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(D),n=l(z),o=l(Wr,{optional:!0}),r=l(A);this._globalOptions=o||{},this._rippleRenderer=new qn(this,e,this._elementRef,n,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,o){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,_(_({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,o){n&2&&L("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var vd=(()=>{class i{_animationsDisabled=be();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(n,o){n&2&&L("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(n,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var so=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var om=["text"],rm=[[["mat-icon"]],"*"],am=["mat-icon","*"];function sm(i,t){if(i&1&&ce(0,"mat-pseudo-checkbox",1),i&2){let e=B();V("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function lm(i,t){if(i&1&&ce(0,"mat-pseudo-checkbox",3),i&2){let e=B();V("disabled",e.disabled)}}function dm(i,t){if(i&1&&(h(0,"span",4),y(1),m()),i&2){let e=B();g(),Ja("(",e.group.label,")")}}var Kr=new p("MAT_OPTION_PARENT_COMPONENT"),Yr=new p("MatOptgroup");var Gr=class{source;isUserInput;constructor(t,e=!1){this.source=t,this.isUserInput=e}},We=(()=>{class i{_element=l(E);_changeDetectorRef=l(De);_parent=l(Kr,{optional:!0});group=l(Yr,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(te).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=M(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new k;_text;_stateChanges=new f;constructor(){let e=l(he);e.load(so),e.load(Vi),this._signalDisableRipple=!!this._parent&&bt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let o=this._getHostElement();typeof o.focus=="function"&&o.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ce(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Gr(this,e))}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["mat-option"]],viewQuery:function(n,o){if(n&1&&Ve(om,7),n&2){let r;H(r=U())&&(o._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(n,o){n&1&&I("click",function(){return o._selectViaInteraction()})("keydown",function(a){return o._handleKeydown(a)}),n&2&&($e("id",o.id),N("aria-selected",o.selected)("aria-disabled",o.disabled.toString()),L("mdc-list-item--selected",o.selected)("mat-mdc-option-multiple",o.multiple)("mat-mdc-option-active",o.active)("mdc-list-item--disabled",o.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",F]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:am,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(n,o){n&1&&(ye(rm),G(0,sm,1,2,"mat-pseudo-checkbox",1),W(1),h(2,"span",2,0),W(4,1),m(),G(5,lm,1,1,"mat-pseudo-checkbox",3),G(6,dm,2,1,"span",4),ce(7,"div",5)),n&2&&(K(o.multiple?0:-1),g(5),K(!o.multiple&&o.selected&&!o.hideSingleSelectionIndicator?5:-1),g(),K(o.group&&o.group._inert?6:-1),g(),V("matRippleTrigger",o._getHostElement())("matRippleDisabled",o.disabled||o.disableRipple))},dependencies:[vd,bd],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();function yd(i,t,e){if(e.length){let n=t.toArray(),o=e.toArray(),r=0;for(let a=0;a<i+1;a++)n[a].group&&n[a].group===o[r]&&r++;return r}return 0}function xd(i,t,e,n){return i<e?i:i+t>e+n?Math.max(0,i-n+t):e}var uo=(()=>{class i{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var rn=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(t,e,n,o,r){this._defaultMatcher=t,this.ngControl=e,this._parentFormGroup=n,this._parentForm=o,this._stateChanges=r}updateErrorState(){let t=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=n?.isErrorState(o,e)??!1;r!==t&&(this.errorState=r,this._stateChanges.next())}};var Oe=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({imports:[zi,Ze,Y]})}return i})();var mo=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({imports:[Y]})}return i})();var Cd=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({imports:[Y]})}return i})();var $r=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({imports:[mo,Cd,We,Y]})}return i})();var hm=["trigger"],fm=["panel"],pm=[[["mat-select-trigger"]],"*"],gm=["mat-select-trigger","*"];function _m(i,t){if(i&1&&(h(0,"span",4),y(1),m()),i&2){let e=B();g(),xe(e.placeholder)}}function bm(i,t){i&1&&W(0)}function vm(i,t){if(i&1&&(h(0,"span",11),y(1),m()),i&2){let e=B(2);g(),xe(e.triggerValue)}}function ym(i,t){if(i&1&&(h(0,"span",5),G(1,bm,1,0)(2,vm,2,1,"span",11),m()),i&2){let e=B();g(),K(e.customTrigger?1:2)}}function xm(i,t){if(i&1){let e=it();h(0,"div",12,1),I("keydown",function(o){Me(e);let r=B();return Ie(r._handleKeydown(o))}),W(2,1),m()}if(i&2){let e=B();Be(e.panelClass),L("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),N("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Cm=new p("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(A);return()=>Mn(i)}}),wm=new p("MAT_SELECT_CONFIG"),Dm=new p("MatSelectTrigger"),qr=class{source;value;constructor(t,e){this.source=t,this.value=e}},an=(()=>{class i{_viewportRuler=l(He);_changeDetectorRef=l(De);_elementRef=l(E);_dir=l(fe,{optional:!0});_idGenerator=l(te);_renderer=l(se);_parentFormField=l(Yn,{optional:!0});ngControl=l(dt,{self:!0,optional:!0});_liveAnnouncer=l(Fn);_defaultOptions=l(wm,{optional:!0});_animationsDisabled=be();_popoverLocation;_initialized=new f;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let o=this.panel.nativeElement,r=yd(e,this.options,this.optionGroups),a=n._getHostElement();e===0&&r===1?o.scrollTop=0:o.scrollTop=xd(a.offsetTop,a.offsetHeight,o.scrollTop,o.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new qr(this,e)}_scrollStrategyFactory=l(Cm);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new f;_errorStateTracker;stateChanges=new f;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=M(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(lt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Nt(()=>{let e=this.options;return e?e.changes.pipe(pe(e),Lt(()=>Ee(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(Lt(()=>this.optionSelectionChanges))});openedChange=new k;_openedStream=this.openedChange.pipe(le(e=>e),re(()=>{}));_closedStream=this.openedChange.pipe(le(e=>!e),re(()=>{}));selectionChange=new k;valueChange=new k;constructor(){let e=l(uo),n=l(Wn,{optional:!0}),o=l(Gn,{optional:!0}),r=l(new _i("tabindex"),{optional:!0}),a=l(In,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new rn(e,this.ngControl,o,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Ln(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ae(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ae(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(pe(null),ae(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let o=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?o.setAttribute("aria-labelledby",e):o.removeAttribute("aria-labelledby")}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ve(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let n=`${this.id}-panel`;this._trackedModal&&Rr(this._trackedModal,"aria-owns",n),xl(e,"aria-owns",n),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Rr(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(o),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),o=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,o=n===40||n===38||n===37||n===39,r=n===13||n===32,a=this._keyManager;if(!a.isTyping()&&r&&!Ce(e)||(this.multiple||e.altKey)&&o)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let d=this.selected;d&&s!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,o=e.keyCode,r=o===40||o===38,a=n.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!a&&(o===13||o===32)&&n.activeItem&&!Ce(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!a&&this._multiple&&o===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(s?d.select():d.deselect())})}else{let s=n.activeItemIndex;n.onKeydown(e),this._multiple&&r&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==s&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ce(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(o=>{if(this._selectionModel.isSelected(o))return!1;try{return(o.value!=null||this.canSelectNullableOptions)&&this._compareWith(o.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof $t?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Nn(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ee(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ae(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ee(...this.options.map(n=>n._stateChanges)).pipe(ae(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let o=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(o!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),o!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,o)=>this.sortComparator?this.sortComparator(n,o,e):e.indexOf(n)-e.indexOf(o)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(o=>o.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(e){let n=X(e);n&&(n.tagName==="MAT-OPTION"||n.classList.contains("cdk-overlay-backdrop")||n.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["mat-select"]],contentQueries:function(n,o,r){if(n&1&&pi(r,Dm,5)(r,We,5)(r,Yr,5),n&2){let a;H(a=U())&&(o.customTrigger=a.first),H(a=U())&&(o.options=a),H(a=U())&&(o.optionGroups=a)}},viewQuery:function(n,o){if(n&1&&Ve(hm,5)(fm,5)(Pi,5),n&2){let r;H(r=U())&&(o.trigger=r.first),H(r=U())&&(o.panel=r.first),H(r=U())&&(o._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(n,o){n&1&&I("keydown",function(a){return o._handleKeydown(a)})("focus",function(){return o._onFocus()})("blur",function(){return o._onBlur()}),n&2&&(N("id",o.id)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o.panelOpen?o.id+"-panel":null)("aria-expanded",o.panelOpen)("aria-label",o.ariaLabel||null)("aria-required",o.required.toString())("aria-disabled",o.disabled.toString())("aria-invalid",o.errorState)("aria-activedescendant",o._getAriaActiveDescendant()),L("mat-mdc-select-disabled",o.disabled)("mat-mdc-select-invalid",o.errorState)("mat-mdc-select-required",o.required)("mat-mdc-select-empty",o.empty)("mat-mdc-select-multiple",o.multiple)("mat-select-open",o.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",F],disableRipple:[2,"disableRipple","disableRipple",F],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:yt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",F],placeholder:"placeholder",required:[2,"required","required",F],multiple:[2,"multiple","multiple",F],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",F],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",yt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",F]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ue([{provide:Kn,useExisting:i},{provide:Kr,useExisting:i}]),we],ngContentSelectors:gm,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(n,o){if(n&1&&(ye(pm),h(0,"div",2,0),I("click",function(){return o.open()}),h(3,"div",3),G(4,_m,2,1,"span",4)(5,ym,3,1,"span",5),m(),h(6,"div",6)(7,"div",7),Ha(),h(8,"svg",8),ce(9,"path",9),m()()()(),Ne(10,xm,3,16,"ng-template",10),I("detach",function(){return o.close()})("backdropClick",function(){return o.close()})("overlayKeydown",function(a){return o._handleOverlayKeydown(a)})),n&2){let r=gn(1);g(3),N("id",o._valueId),g(),K(o.empty?4:5),g(6),V("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",o._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",o._scrollStrategy)("cdkConnectedOverlayOrigin",o._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",o._positions)("cdkConnectedOverlayWidth",o._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",o._popoverLocation)}},dependencies:[$t,Pi],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return i})();var sn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({imports:[It,$r,Y,vn,Oe,$r]})}return i})();function wd(i){return Error(`Unable to find icon with the name "${i}"`)}function Em(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Dd(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Ed(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var Xe=class{url;svgText;options;svgElement=null;constructor(t,e,n){this.url=t,this.svgText=e,this.options=n}},kd=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,o,r){this._httpClient=e,this._sanitizer=n,this._errorHandler=r,this._document=o}addSvgIcon(e,n,o){return this.addSvgIconInNamespace("",e,n,o)}addSvgIconLiteral(e,n,o){return this.addSvgIconLiteralInNamespace("",e,n,o)}addSvgIconInNamespace(e,n,o,r){return this._addSvgIconConfig(e,n,new Xe(o,null,r))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,o,r){let a=this._sanitizer.sanitize(et.HTML,o);if(!a)throw Ed(o);let s=Rt(a);return this._addSvgIconConfig(e,n,new Xe("",s,r))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,o){return this._addSvgIconSetConfig(e,new Xe(n,null,o))}addSvgIconSetLiteralInNamespace(e,n,o){let r=this._sanitizer.sanitize(et.HTML,n);if(!r)throw Ed(n);let a=Rt(r);return this._addSvgIconSetConfig(e,new Xe("",a,o))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(et.RESOURCE_URL,e);if(!n)throw Dd(e);let o=this._cachedIconsByUrl.get(n);return o?Pe(ho(o)):this._loadSvgIconFromConfig(new Xe(e,null)).pipe(Je(r=>this._cachedIconsByUrl.set(n,r)),re(r=>ho(r)))}getNamedSvgIcon(e,n=""){let o=Sd(n,e),r=this._svgIconConfigs.get(o);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(n,e),r)return this._svgIconConfigs.set(o,r),this._getSvgFromConfig(r);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):Fa(wd(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Pe(ho(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(re(n=>ho(n)))}_getSvgFromIconSetConfigs(e,n){let o=this._extractIconWithNameFromAnySet(e,n);if(o)return Pe(o);let r=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Va(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(et.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),Pe(null)})));return si(r).pipe(re(()=>{let a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw wd(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let o=n.length-1;o>=0;o--){let r=n[o];if(r.svgText&&r.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(r),s=this._extractSvgIconFromSet(a,e,r.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Je(n=>e.svgText=n),re(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Pe(null):this._fetchIcon(e).pipe(Je(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,o){let r=e.querySelector(`[id="${n}"]`);if(!r)return null;let a=r.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,o);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),o);let s=this._svgElementFromString(Rt("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,o)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let o=n.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(e){let n=this._svgElementFromString(Rt("<svg></svg>")),o=e.attributes;for(let r=0;r<o.length;r++){let{name:a,value:s}=o[r];a!=="id"&&n.setAttribute(a,s)}for(let r=0;r<e.childNodes.length;r++)e.childNodes[r].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[r].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:o}=e,r=o?.withCredentials??!1;if(!this._httpClient)throw Em();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(et.RESOURCE_URL,n);if(!a)throw Dd(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let d=this._httpClient.get(a,{responseType:"text",withCredentials:r}).pipe(re(c=>Rt(c)),Ba(()=>this._inProgressUrlFetches.delete(a)),za());return this._inProgressUrlFetches.set(a,d),d}_addSvgIconConfig(e,n,o){return this._svgIconConfigs.set(Sd(e,n),o),this}_addSvgIconSetConfig(e,n){let o=this._iconSetConfigs.get(e);return o?o.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let o=0;o<this._resolvers.length;o++){let r=this._resolvers[o](n,e);if(r)return Sm(r)?new Xe(r.url,null,r.options):new Xe(r,null)}}static \u0275fac=function(n){return new(n||i)(pn(ss,8),pn(yi),pn(P,8),pn(mi))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ho(i){return i.cloneNode(!0)}function Sd(i,t){return i+":"+t}function Sm(i){return!!(i.url&&i.options)}var km=["*"],Mm=new p("MAT_ICON_DEFAULT_OPTIONS"),Im=new p("mat-icon-location",{providedIn:"root",factory:()=>{let i=l(P),t=i?i.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}}),Md=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Rm=Md.map(i=>`[${i}]`).join(", "),Am=/^url\(['"]?#(.*?)['"]?\)$/,fo=(()=>{class i{_elementRef=l(E);_iconRegistry=l(kd);_location=l(Im);_errorHandler=l(mi);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=oe.EMPTY;constructor(){let e=l(new _i("aria-hidden"),{optional:!0}),n=l(Mm,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let o=e.childNodes[n];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>e.classList.remove(o)),n.forEach(o=>e.classList.add(o)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((o,r)=>{o.forEach(a=>{r.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(Rm),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<n.length;r++)Md.forEach(a=>{let s=n[r],d=s.getAttribute(a),c=d?d.match(Am):null;if(c){let u=o.get(s);u||(u=[],o.set(s,u)),u.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,o]=this._splitIconName(e);n&&(this._svgNamespace=n),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,n).pipe(ve(1)).subscribe(r=>this._setSvgElement(r),r=>{let a=`Error retrieving icon ${n}:${o}! ${r.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,o){n&2&&(N("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),Be(o.color?"mat-"+o.color:""),L("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",F],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:km,decls:1,vars:0,template:function(n,o){n&1&&(ye(),W(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),po=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({imports:[Y]})}return i})();var Tm={capture:!0},Om=["focus","mousedown","mouseenter","touchstart"],Xr="mat-ripple-loader-uninitialized",Qr="mat-ripple-loader-class-name",Rd="mat-ripple-loader-centered",go="mat-ripple-loader-disabled",Ad=(()=>{class i{_document=l(P);_animationsDisabled=be();_globalRippleOptions=l(Wr,{optional:!0});_platform=l(z);_ngZone=l(D);_injector=l(A);_eventCleanups;_hosts=new Map;constructor(){let e=l(me).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Om.map(n=>e.listen(this._document,n,this._onInteraction,Tm)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(Xr,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(Qr))&&e.setAttribute(Qr,n.className||""),n.centered&&e.setAttribute(Rd,""),n.disabled&&e.setAttribute(go,"")}setDisabled(e,n){let o=this._hosts.get(e);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):n?e.setAttribute(go,""):e.removeAttribute(go)}_onInteraction=e=>{let n=X(e);if(n instanceof HTMLElement){let o=n.closest(`[${Xr}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(Qr)),e.append(n);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??$n.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??$n.exitDuration,s={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(go),rippleConfig:{centered:e.hasAttribute(Rd),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},d=new qn(s,this._ngZone,n,this._platform,this._injector),c=!s.rippleDisabled;c&&d.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:d,hasSetUpEvents:c}),e.removeAttribute(Xr)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Fm=["mat-icon-button",""],Pm=["*"],Nm=new p("MAT_BUTTON_CONFIG");function Td(i){return i==null?void 0:yt(i)}var Jr=(()=>{class i{_elementRef=l(E);_ngZone=l(D);_animationsDisabled=be();_config=l(Nm,{optional:!0});_focusMonitor=l(On);_cleanupClick;_renderer=l(se);_rippleLoader=l(Ad);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(he).load(so);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,o){n&2&&(N("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),Be(o.color?"mat-"+o.color:""),L("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",F],disabled:[2,"disabled","disabled",F],ariaDisabled:[2,"aria-disabled","ariaDisabled",F],disabledInteractive:[2,"disabledInteractive","disabledInteractive",F],tabIndex:[2,"tabIndex","tabIndex",Td],_tabindex:[2,"tabindex","_tabindex",Td]}})}return i})(),ea=(()=>{class i extends Jr{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[de],attrs:Fm,ngContentSelectors:Pm,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,o){n&1&&(ye(),Le(0,"span",0),W(1),Le(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Lm=["matButton",""],Vm=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Bm=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Od=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),ut=(()=>{class i extends Jr{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=zm(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?Od.get(this._appearance):null,r=Od.get(e);o&&n.remove(...o),n.add(...r),this._appearance=e}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[de],attrs:Lm,ngContentSelectors:Bm,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,o){n&1&&(ye(Vm),Le(0,"span",0),W(1),zt(2,"span",1),W(3,1),jt(),W(4,2),Le(5,"span",2)(6,"span",3)),n&2&&L("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function zm(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var Ge=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({imports:[mo,Y]})}return i})();var mt=class{};var ln=class i{repo=l(mt);_tasks=M(this.repo.getAll());filterPriority=M("all");filteredTasks=b(()=>{let t=this.filterPriority(),e=this._tasks();return t==="all"?e:e.filter(n=>n.priority===t)});taskByColumn=b(()=>{let t=this.filteredTasks();return{todo:t.filter(e=>e.status==="toDo").sort((e,n)=>e.id-n.id),inProgress:t.filter(e=>e.status==="inProgress").sort((e,n)=>e.id-n.id),done:t.filter(e=>e.status==="done").sort((e,n)=>e.id-n.id)}});constructor(){ge(()=>this.repo.save(this._tasks()))}addTask(t){let e=q(_({id:Date.now()},t),{status:"toDo"});this._tasks.update(n=>[...n,e])}updateTask(t){this._tasks.update(e=>e.map(n=>n.id===t.id?t:n))}deleteTask(t){this._tasks.update(e=>e.filter(n=>n.id!==t))}moveTask(t,e){this._tasks.update(n=>n.map(o=>o.id===t?q(_({},o),{status:e}):o))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=v({token:i,factory:i.\u0275fac})};var _o=class i{isDarkMode=M(this.getInitialTheme());constructor(){ge(()=>{let t=this.isDarkMode()?"dark":"light";t==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme"),localStorage.setItem("theme",t)})}toggleTheme(){this.isDarkMode.update(t=>!t)}getInitialTheme(){let t=localStorage.getItem("theme");return t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}static \u0275fac=function(e){return new(e||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})};function jm(i,t){if(i&1){let e=it();h(0,"button",9),I("click",function(){Me(e);let o=B();return Ie(o.onMove("inProgress"))}),y(1,"\u2192 Iniciar"),m()}}function Hm(i,t){if(i&1){let e=it();h(0,"button",10),I("click",function(){Me(e);let o=B();return Ie(o.onMove("toDo"))}),y(1,"\u2190 Volver"),m(),h(2,"button",11),I("click",function(){Me(e);let o=B();return Ie(o.onMove("done"))}),y(3,"\u2705 Completar"),m()}}function Um(i,t){if(i&1){let e=it();h(0,"button",12),I("click",function(){Me(e);let o=B();return Ie(o.onMove("inProgress"))}),y(1,"\u21BA Reabrir"),m()}}var bo=class i{task=je.required();taskMoved=ze();taskEdited=ze();taskDeleted=ze();onMove(t){this.taskMoved.emit(t)}onEdit(){this.taskEdited.emit(this.task())}onDelete(t){this.taskDeleted.emit(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-task-card"]],inputs:{task:[1,"task"]},outputs:{taskMoved:"taskMoved",taskEdited:"taskEdited",taskDeleted:"taskDeleted"},decls:17,vars:12,consts:[[1,"task-card"],[1,"task-header"],[1,"task-description"],[1,"task-actions"],["mat-stroked-button","","color","primary","aria-label","Mover a En Progreso",1,"move-btn"],["mat-button","","aria-label","Reabrir en En Progreso",1,"move-btn","back-btn"],[1,"task-actions-secondary"],["mat-button","","color","accent",1,"edit-btn",3,"click"],["mat-button","","color","warn",1,"delete-btn",3,"click"],["mat-stroked-button","","color","primary","aria-label","Mover a En Progreso",1,"move-btn",3,"click"],["mat-button","","aria-label","Volver a Por Hacer",1,"move-btn","back-btn",3,"click"],["mat-stroked-button","","color","primary","aria-label","Marcar como Hecho",1,"move-btn",3,"click"],["mat-button","","aria-label","Reabrir en En Progreso",1,"move-btn","back-btn",3,"click"]],template:function(e,n){if(e&1&&(h(0,"div",0)(1,"div",1)(2,"h3"),y(3),m(),h(4,"span"),y(5),m()(),h(6,"p",2),y(7),m(),h(8,"div",3),G(9,jm,2,0,"button",4)(10,Hm,4,0)(11,Um,2,0,"button",5),m(),h(12,"div",6)(13,"button",7),I("click",function(){return n.onEdit()}),y(14,"\u270F\uFE0F Editar"),m(),h(15,"button",8),I("click",function(){return n.onDelete(n.task().id)}),y(16,"\u{1F5D1}\uFE0F Eliminar"),m()()()),e&2){let o;N("aria-label","Tarea: "+n.task().title+", prioridad "+n.task().priority),g(3),xe(n.task().title),g(),Be(ts("priority-badge ",n.task().priority)),N("aria-label","Prioridad "+n.task().priority),g(),es(" ",n.task().priority==="low"?"\u{1F7E2}":n.task().priority==="medium"?"\u{1F7E1}":"\u{1F534}"," ",n.task().priority," "),g(2),xe(n.task().description),g(2),K((o=n.task().status)==="toDo"?9:o==="inProgress"?10:o==="done"?11:-1),g(4),N("aria-label","Editar tarea "+n.task().title),g(2),N("aria-label","Eliminar tarea "+n.task().title)}},dependencies:[Ge,ut],styles:[".task-card[_ngcontent-%COMP%]{background:var(--app-bg, white);color:var(--text-main, #333);border-radius:6px;box-shadow:0 2px 4px #0000001a;padding:12px;margin-bottom:12px;transition:transform .2s,box-shadow .2s,background .3s ease}.task-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 6px #0003}.task-card.completed[_ngcontent-%COMP%]{opacity:.7;background:var(--filter-bg, #f0f0f0)}.task-card[_ngcontent-%COMP%]   .task-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}.task-card[_ngcontent-%COMP%]   .task-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1rem}.task-card[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%]{font-size:.7rem;padding:2px 6px;border-radius:4px}.task-card[_ngcontent-%COMP%]   .priority-badge.low[_ngcontent-%COMP%]{background:#c8e6c9;color:#2e7d32}.task-card[_ngcontent-%COMP%]   .priority-badge.medium[_ngcontent-%COMP%]{background:#fff9c4;color:#f57f17}.task-card[_ngcontent-%COMP%]   .priority-badge.high[_ngcontent-%COMP%]{background:#ffcdd2;color:#c62828}.task-card[_ngcontent-%COMP%]   .task-description[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-main);opacity:.8;margin:8px 0;word-break:break-word}.task-card[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]{display:flex;gap:8px;margin-top:8px}.task-card[_ngcontent-%COMP%]   .task-actions-secondary[_ngcontent-%COMP%]{margin-top:8px;display:flex;gap:8px}"],changeDetection:0})};var Wm=(i,t)=>t.id;function Gm(i,t){if(i&1){let e=it();h(0,"app-task-card",6),$a("task-leave"),Ya("task-enter"),I("taskMoved",function(o){let r=Me(e).$implicit,a=B();return Ie(a.onMove(r,o))})("taskEdited",function(o){Me(e);let r=B();return Ie(r.onEdit(o))})("taskDeleted",function(o){Me(e);let r=B();return Ie(r.onDelete(o))}),m()}if(i&2){let e=t.$implicit;V("cdkDragData",e)("task",e)}}function Km(i,t){if(i&1&&(h(0,"div",5)(1,"p"),y(2),m()()),i&2){let e=B();g(2),xe(e.emptyStateMessage())}}var vo=class i{title=je("");tasks=je([]);emptyStateMessage=je("");columnType=je("todo");taskMoved=ze();taskEdited=ze();taskDeleted=ze();columnClassMap={todo:"column todo-column",inProgress:"column in-progress-column",done:"column done-column"};columnClass=b(()=>this.columnClassMap[this.columnType()]??"column");onMove(t,e){this.taskMoved.emit({task:t,newStatus:e})}onEdit(t){this.taskEdited.emit(t)}onDelete(t){this.taskDeleted.emit(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-column"]],inputs:{title:[1,"title"],tasks:[1,"tasks"],emptyStateMessage:[1,"emptyStateMessage"],columnType:[1,"columnType"]},outputs:{taskMoved:"taskMoved",taskEdited:"taskEdited",taskDeleted:"taskDeleted"},decls:10,vars:8,consts:[["role","region",1,"column"],[1,"column-header"],["aria-live","polite",1,"task-count"],["role","list",1,"tasks-container"],["role","listitem","cdkDrag","",3,"cdkDragData","task"],[1,"empty-column"],["role","listitem","cdkDrag","",3,"taskMoved","taskEdited","taskDeleted","cdkDragData","task"]],template:function(e,n){e&1&&(h(0,"div",0)(1,"div",1)(2,"h2"),y(3),m(),h(4,"span",2),y(5),m()(),h(6,"div",3),qa(7,Gm,1,2,"app-task-card",4,Wm,!1,Km,3,1,"div",5),m()()),e&2&&(Be(n.columnClass()),N("aria-label",n.title()),g(3),xe(n.title()),g(),N("aria-label",n.tasks().length+" tareas"),g(),xe(n.tasks().length),g(),N("aria-label","Tareas en "+n.title()),g(),Za(n.tasks()))},dependencies:[bo,Ps],styles:["[_nghost-%COMP%]{display:block}.column[_ngcontent-%COMP%]{background:var(--filter-bg, #f4f5f7);border-radius:8px;padding:16px;min-height:500px;transition:background .3s ease}.column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;padding-bottom:8px;border-bottom:2px solid var(--text-main)}.column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.2rem;color:var(--text-main)}.column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]   .task-count[_ngcontent-%COMP%]{background:var(--app-bg, #fff);color:var(--text-main);padding:2px 8px;border-radius:12px;font-size:.8rem;font-weight:700}.empty-column[_ngcontent-%COMP%]{text-align:center;color:#999;padding:40px 20px}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translateY(-10px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes _ngcontent-%COMP%_slideOut{0%{opacity:1;transform:translateY(0) scale(1)}to{opacity:0;transform:translateY(10px) scale(.97)}}.task-enter[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideIn .25s ease-out}.task-leave[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideOut .2s ease-in}"],changeDetection:0})};var ta=0;function Ym(){return ta}function ht(i,t){return(...e)=>{try{return ta=t,i(...e)}finally{ta=0}}}function $m(i){return!i}function Fd(i){return i}function Fe(i){return Array.isArray(i)}function dn(i){return(typeof i=="object"||typeof i=="function")&&i!=null}var Tt=Symbol(),ko=Symbol(),Jn=class{predicates;fns=[];constructor(t){this.predicates=t}push(t){this.fns.push(Pd(this.predicates,t))}mergeIn(t){let e=this.predicates?t.fns.map(n=>Pd(this.predicates,n)):t.fns;this.fns.push(...e)}},xo=class extends Jn{get defaultValue(){return!1}compute(t){return this.fns.some(e=>{let n=e(t);return n&&n!==ko})}},cn=class i extends Jn{ignore;static ignoreNull(t){return new i(t,e=>e===null)}constructor(t,e){super(t),this.ignore=e}get defaultValue(){return[]}compute(t){return this.fns.reduce((e,n)=>{let o=n(t);return o===void 0||o===ko?e:Fe(o)?[...e,...this.ignore?o.filter(r=>!this.ignore(r)):o]:this.ignore&&this.ignore(o)?e:[...e,o]},[])}},na=class extends cn{constructor(t){super(t,void 0)}},ia=class extends Jn{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(t,e){super(t),this.key=e}compute(t){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let n=0;n<this.fns.length;n++){let o=this.fns[n](t);o!==ko&&(e=this.key.reducer.reduce(e,o))}return e}};function Pd(i,t){return i.length===0?t:e=>{for(let n of i){let o=e.stateOf(n.path),r=O(o.structure.pathKeys).length-n.depth;for(let a=0;a<r;a++)o=o.structure.parent;if(!n.fn(o.context))return ko}return t(e)}}var un=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(t){this.predicates=t,this.hidden=new xo(t),this.disabledReasons=new na(t),this.readonly=new xo(t),this.syncErrors=cn.ignoreNull(t),this.syncTreeErrors=cn.ignoreNull(t),this.asyncErrors=cn.ignoreNull(t)}hasMetadata(t){return this.metadata.has(t)}getMetadataKeys(){return this.metadata.keys()}getMetadata(t){return this.metadata.has(t)||this.metadata.set(t,new ia(this.predicates,t)),this.metadata.get(t)}mergeIn(t){this.hidden.mergeIn(t.hidden),this.disabledReasons.mergeIn(t.disabledReasons),this.readonly.mergeIn(t.readonly),this.syncErrors.mergeIn(t.syncErrors),this.syncTreeErrors.mergeIn(t.syncTreeErrors),this.asyncErrors.mergeIn(t.asyncErrors);for(let e of t.getMetadataKeys()){let n=t.metadata.get(e);this.getMetadata(e).mergeIn(n)}}},Co=class{depth;constructor(t){this.depth=t}build(){return new wo(this,[],0)}},mn=class i extends Co{constructor(t){super(t)}current;all=[];addHiddenRule(t){this.getCurrent().addHiddenRule(t)}addDisabledReasonRule(t){this.getCurrent().addDisabledReasonRule(t)}addReadonlyRule(t){this.getCurrent().addReadonlyRule(t)}addSyncErrorRule(t){this.getCurrent().addSyncErrorRule(t)}addSyncTreeErrorRule(t){this.getCurrent().addSyncTreeErrorRule(t)}addAsyncErrorRule(t){this.getCurrent().addAsyncErrorRule(t)}addMetadataRule(t,e){this.getCurrent().addMetadataRule(t,e)}getChild(t){if(t===Tt){let e=this.getCurrent().children;e.size>(e.has(Tt)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(t)}hasLogic(t){return this===t?!0:this.all.some(({builder:e})=>e.hasLogic(t))}mergeIn(t,e){e?this.all.push({builder:t,predicate:{fn:ht(e.fn,this.depth),path:e.path}}):this.all.push({builder:t}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new ei(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new i(0)}},ei=class extends Co{logic=new un([]);children=new Map;constructor(t){super(t)}addHiddenRule(t){this.logic.hidden.push(ht(t,this.depth))}addDisabledReasonRule(t){this.logic.disabledReasons.push(ht(t,this.depth))}addReadonlyRule(t){this.logic.readonly.push(ht(t,this.depth))}addSyncErrorRule(t){this.logic.syncErrors.push(ht(t,this.depth))}addSyncTreeErrorRule(t){this.logic.syncTreeErrors.push(ht(t,this.depth))}addAsyncErrorRule(t){this.logic.asyncErrors.push(ht(t,this.depth))}addMetadataRule(t,e){this.logic.getMetadata(t).push(ht(e,this.depth))}getChild(t){return this.children.has(t)||this.children.set(t,new mn(this.depth+1)),this.children.get(t)}hasLogic(t){return this===t}},wo=class i{builder;predicates;depth;logic;constructor(t,e,n){this.builder=t,this.predicates=e,this.depth=n,this.logic=t?qm(t,e,n):new un([])}getChild(t){let e=this.builder?Vd(this.builder,t):[];if(e.length===0)return new i(void 0,[],this.depth+1);if(e.length===1){let{builder:n,predicates:o}=e[0];return new i(n,[...this.predicates,...o.map(r=>ra(r,this.depth))],this.depth+1)}else{let n=e.map(({builder:o,predicates:r})=>new i(o,[...this.predicates,...r.map(a=>ra(a,this.depth))],this.depth+1));return new oa(n)}}hasLogic(t){return this.builder?.hasLogic(t)??!1}},oa=class i{all;logic;constructor(t){this.all=t,this.logic=new un([]);for(let e of t)this.logic.mergeIn(e.logic)}getChild(t){return new i(this.all.flatMap(e=>e.getChild(t)))}hasLogic(t){return this.all.some(e=>e.hasLogic(t))}};function Vd(i,t){if(i instanceof mn)return i.all.flatMap(({builder:e,predicate:n})=>{let o=Vd(e,t);return n?o.map(({builder:r,predicates:a})=>({builder:r,predicates:[...a,n]})):o});if(i instanceof ei)return[...t!==Tt&&i.children.has(Tt)?[{builder:i.getChild(Tt),predicates:[]}]:[],...i.children.has(t)?[{builder:i.getChild(t),predicates:[]}]:[]];throw new Z(1909,!1)}function qm(i,t,e){let n=new un(t);if(i instanceof mn){let o=i.all.map(({builder:r,predicate:a})=>new wo(r,a?[...t,ra(a,e)]:t,e));for(let r of o)n.mergeIn(r.logic)}else if(i instanceof ei)n.mergeIn(i.logic);else throw new Z(1909,!1);return n}function ra(i,t){return q(_({},i),{depth:t})}var Bd=Symbol("PATH"),Qe=class i{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Zm);logicBuilder;constructor(t,e,n,o){this.keys=t,this.parent=n,this.keyInParent=o,this.root=e??this,n||(this.logicBuilder=mn.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(t){return this.children.has(t)||this.children.set(t,new i([...this.keys,t],this.root,this,t)),this.children.get(t)}mergeIn(t,e){let n=t.compile();this.builder.mergeIn(n.builder,e)}static unwrapFieldPath(t){return t[Bd]}static newRoot(){return new i([],void 0,void 0,void 0)}},Zm={get(i,t){return t===Bd?i:i.getChild(t).fieldPathProxy}},yo,Qn=new Map,Do=class i{schemaFn;constructor(t){this.schemaFn=t}compile(){if(Qn.has(this))return Qn.get(this);let t=Qe.newRoot();Qn.set(this,t);let e=yo;try{yo=t,this.schemaFn(t.fieldPathProxy)}finally{yo=e}return t}static create(t){return t instanceof i?t:new i(t)}static rootCompile(t){try{return Qn.clear(),t===void 0?Qe.newRoot():t instanceof i?t.compile():new i(t).compile()}finally{Qn.clear()}}};function Xm(i){return i instanceof Do||typeof i=="function"}function _a(i){if(yo!==Qe.unwrapFieldPath(i).root)throw new Z(1908,!1)}function ni(i,t,e){return _a(i),Qe.unwrapFieldPath(i).builder.addMetadataRule(t,e),t}var ft={list(){return{reduce:(i,t)=>t===void 0?i:[...i,t],getInitial:()=>[]}},min(){return{reduce:(i,t)=>i===void 0||t===void 0?i??t:Math.min(i,t),getInitial:()=>{}}},max(){return{reduce:(i,t)=>i===void 0||t===void 0?i??t:Math.max(i,t),getInitial:()=>{}}},or(){return{reduce:(i,t)=>i||t,getInitial:()=>!1}},and(){return{reduce:(i,t)=>i&&t,getInitial:()=>!0}},override:Qm};function Qm(i){return{reduce:(t,e)=>e,getInitial:()=>i?.()}}var Eo=class{reducer;create;brand;constructor(t,e){this.reducer=t,this.create=e}};function Ke(i){return new Eo(i??ft.override())}var ba=Ke(ft.or()),zd=Ke(ft.max()),jd=Ke(ft.min()),va=Ke(ft.max()),Hd=Ke(ft.min()),Ud=Ke(ft.list());function Jm(i){return i.errors().length>0?"invalid":i.pending()?"unknown":"valid"}var aa=class{node;constructor(t){this.node=t}rawSyncTreeErrors=b(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=b(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...eh(this.node.submitState.submissionErrors())]);syncValid=b(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(t,e)=>e&&t.validationState.syncValid(),$m));syncTreeErrors=b(()=>this.rawSyncTreeErrors().filter(t=>t.fieldTree===this.node.fieldTree));rawAsyncErrors=b(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=b(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(t=>t==="pending"||t.fieldTree===this.node.fieldTree));parseErrors=b(()=>this.node.formFieldBindings().flatMap(t=>t.parseErrors()));errors=b(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(t=>t!=="pending")]);errorSummary=b(()=>{let t=this.node.structure.reduceChildren(this.errors(),(e,n)=>[...n,...e.errorSummary()]);return O(()=>t.sort(th)),t});pending=b(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(t,e)=>e||t.validationState.asyncErrors().includes("pending")));status=b(()=>{if(this.shouldSkipValidation())return"valid";let t=Jm(this);return this.node.structure.reduceChildren(t,(e,n)=>n==="invalid"||e.validationState.status()==="invalid"?"invalid":n==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=b(()=>this.status()==="valid");invalid=b(()=>this.status()==="invalid");shouldSkipValidation=b(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function eh(i){return i===void 0?[]:Fe(i)?i:[i]}function ya(i,t){if(Fe(i))for(let e of i)e.fieldTree??=t;else i&&(i.fieldTree??=t);return i}function Nd(i){return i.formField?i.formField.element:i.fieldTree().formFieldBindings().reduce((t,e)=>!t||!e.element?t??e.element:t.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:t,void 0)}function th(i,t){let e=Nd(i),n=Nd(t);return e===n?0:e===void 0||n===void 0?e===void 0?1:-1:e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var sa=Ke(),la=class{node;cache=new WeakMap;constructor(t){this.node=t}resolve(t){if(!this.cache.has(t)){let e=b(()=>{let n=Qe.unwrapFieldPath(t),o=this.node,r=Ym();for(;r>0||!o.structure.logic.hasLogic(n.root.builder);)if(r--,o=o.structure.parent,o===void 0)throw new Z(1900,!1);for(let a of n.keys)if(o=o.structure.getChild(a),o===void 0)throw new Z(1901,!1);return o.fieldTree});this.cache.set(t,e)}return this.cache.get(t)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=b(()=>{let t=this.key();if(!Fe(O(this.node.structure.parent.value)))throw new Z(1906,!1);return Number(t)});fieldTreeOf=t=>this.resolve(t);stateOf=t=>this.resolve(t)();valueOf=t=>{let e=this.resolve(t)().value();if(e instanceof nn)throw new Z(1907,!1);return e}},da=class{node;metadata=new Map;constructor(t){this.node=t;for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let n=this.node.logicNode.logic.getMetadata(e),o=O(()=>Ko(this.node.structure.injector,()=>e.create(b(()=>n.compute(this.node.context)))));this.metadata.set(e,o)}}get(t){if(this.has(t)&&!this.metadata.has(t)){if(t.create)throw new Z(1912,!1);let e=this.node.logicNode.logic.getMetadata(t);this.metadata.set(t,b(()=>e.compute(this.node.context)))}return this.metadata.get(t)}has(t){return this.node.logicNode.logic.hasMetadata(t)}},nh={get(i,t,e){let n=i(),o=n.structure.getChild(t);if(o!==void 0)return o.fieldTree;let r=O(n.value);if(Fe(r)){if(t==="length")return n.value().length;if(t===Symbol.iterator)return()=>(n.value(),Array.prototype[Symbol.iterator].apply(n.fieldTree))}if(dn(r)&&t===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(i,t){let e=O(i().value),n=Reflect.getOwnPropertyDescriptor(e,t);return n&&!n.configurable&&(n.configurable=!0),n},ownKeys(i){let t=O(i().value);return typeof t=="object"&&t!==null?Reflect.ownKeys(t):[]}};function ih(i,t){let e=b(()=>i()[t()]);return e[Bo]=i[Bo],e.set=n=>{i.update(o=>oh(o,n,t()))},e.update=n=>{e.set(n(O(e)))},e.asReadonly=()=>e,e}function oh(i,t,e){if(Fe(i)){let n=[...i];return n[e]=t,n}else return q(_({},i),{[e]:t})}var So=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=A.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(t,e,n){this.logic=t,this.node=e,this.createChildNode=n}children(){let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>O(e.reader))}getChild(t){let e=t.toString(),n=O(this.childrenMap)?.byPropertyKey.get(e)?.reader;return n||(n=this.createReader(e)),n()}reduceChildren(t,e,n){let o=this.childrenMap();if(!o)return t;let r=t;for(let a of o.byPropertyKey.values()){if(n?.(r))break;r=e(O(a.reader),r)}return r}destroy(){this.injector.destroy()}createKeyInParent(t,e,n){if(t.kind==="root")return Wd;if(e===void 0){let o=n;return b(()=>{if(this.parent.structure.getChild(o)!==this.node)throw new Z(-1902,!1);return o})}else{let o=n;return b(()=>{let r=this.parent.structure.value();if(!Fe(r))throw new Z(1903,!1);let a=r[o];if(dn(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===e)return o;for(let s=0;s<r.length;s++){let d=r[s];if(dn(d)&&d.hasOwnProperty(this.parent.structure.identitySymbol)&&d[this.parent.structure.identitySymbol]===e)return o=s.toString()}throw new Z(1904,!1)})}}createChildrenMap(){return vt({source:this.value,computation:(t,e)=>{if(!dn(t))return;let n=e?.value??{byPropertyKey:new Map},o,r=Fe(t);n!==void 0&&(r?o=ah(n,t,this.identitySymbol):o=sh(n,t));for(let a of Object.keys(t)){let s,d=t[a];if(d===void 0){n.byPropertyKey.has(a)&&(o??=_({},n),o.byPropertyKey.delete(a));continue}r&&dn(d)&&!Fe(d)&&(s=d[this.identitySymbol]??=Symbol(""));let c;s&&(n.byTrackingKey?.has(s)||(o??=_({},n),o.byTrackingKey??=new Map,o.byTrackingKey.set(s,this.createChildNode(a,s,r))),c=(o??n).byTrackingKey.get(s));let u=n.byPropertyKey.get(a);u===void 0?(o??=_({},n),o.byPropertyKey.set(a,{reader:this.createReader(a),node:c??this.createChildNode(a,s,r)})):c&&c!==u.node&&(o??=_({},n),u.node=c)}return o??n}})}createReader(t){return b(()=>this.childrenMap()?.byPropertyKey.get(t)?.node)}},ca=class extends So{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return rh}get keyInParent(){return Wd}childrenMap;constructor(t,e,n,o,r){super(e,t,r),this.fieldManager=n,this.value=o,this.childrenMap=this.createChildrenMap()}},ua=class extends So{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(t,e,n,o,r,a){super(e,t,a),this.logic=e,this.parent=n,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:n,pathNode:void 0,logic:e,initialKeyInParent:r,identityInParent:o,fieldAdapter:void 0},o,r),this.pathKeys=b(()=>[...n.structure.pathKeys(),this.keyInParent()]),this.value=ih(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var rh=b(()=>[]),Wd=b(()=>{throw new Z(1905,!1)});function ah(i,t,e){let n,o=new Set(i.byPropertyKey.keys()),r=new Set(i.byTrackingKey?.keys());for(let a=0;a<t.length;a++){let s=t[a];o.delete(a.toString()),dn(s)&&s.hasOwnProperty(e)&&r.delete(s[e])}if(o.size>0){n??=_({},i);for(let a of o)n.byPropertyKey.delete(a)}if(r.size>0){n??=_({},i);for(let a of r)n.byTrackingKey?.delete(a)}return n}function sh(i,t){let e;for(let n of i.byPropertyKey.keys())t.hasOwnProperty(n)||(e??=_({},i),e.byPropertyKey.delete(n));return e}var ma=class{node;selfSubmitting=M(!1);submissionErrors;constructor(t){this.node=t,this.submissionErrors=vt({source:this.node.structure.value,computation:()=>[]})}submitting=b(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},ti=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new la(this)}fieldProxy=new Proxy(()=>this,nh);pathNode;constructor(t){this.pathNode=t.pathNode,this.fieldAdapter=t.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,t),this.validationState=this.fieldAdapter.createValidationState(this,t),this.nodeState=this.fieldAdapter.createNodeState(this,t),this.metadataState=new da(this),this.submitState=new ma(this),this.controlValue=this.controlValueSignal()}focusBoundControl(t){this.getBindingForFocus()?.focus(t)}getBindingForFocus(){let t=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(Ld,void 0);return t||this.structure.children().map(e=>e.getBindingForFocus()).reduce(Ld,void 0)}pendingSync=vt({source:()=>this.value(),computation:(t,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata(jd)}get maxLength(){return this.metadata(Hd)}get min(){return this.metadata(zd)}get minLength(){return this.metadata(va)}get pattern(){return this.metadata(Ud)??lh}get required(){return this.metadata(ba)??dh}metadata(t){return this.metadataState.get(t)}hasMetadata(t){return this.metadataState.has(t)}markAsTouched(){O(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(t){O(()=>this._reset(t))}_reset(t){t!==void 0&&this.value.set(t),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.structure.children())e._reset()}controlValueSignal(){let t=vt(this.value),{set:e,update:n}=t;return t.set=o=>{e(o),this.markAsDirty(),this.debounceSync()},t.update=o=>{n(o),this.markAsDirty(),this.debounceSync()},t}sync(){this.value.set(this.controlValue())}flushSync(){let t=this.pendingSync();t&&!t.signal.aborted&&(t.abort(),this.sync())}async debounceSync(){let t=O(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(t){let e=new AbortController,n=t(e.signal);if(n&&(this.pendingSync.set(e),await n,e.signal.aborted))return}this.sync()}static newRoot(t,e,n,o){return o.newRoot(t,e,n,o)}createStructure(t){return t.kind==="root"?new ca(this,t.logic,t.fieldManager,t.value,this.newChild.bind(this)):new ua(this,t.logic,t.parent,t.identityInParent,t.initialKeyInParent,this.newChild.bind(this))}newChild(t,e,n){let o,r;return n?(o=this.pathNode.getChild(Tt),r=this.structure.logic.getChild(Tt)):(o=this.pathNode.getChild(t),r=this.structure.logic.getChild(t)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:o,logic:r,initialKeyInParent:t,identityInParent:e,fieldAdapter:this.fieldAdapter})}},lh=b(()=>[]),dh=b(()=>!1);function Ld(i,t){return i?t&&i.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t:i:t}var ha=class{node;selfTouched=M(!1);selfDirty=M(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=M([]);constructor(t){this.node=t}dirty=b(()=>{let t=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,n)=>n||e.nodeState.dirty(),Fd)});touched=b(()=>{let t=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,n)=>n||e.nodeState.touched(),Fd)});disabledReasons=b(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=b(()=>!!this.disabledReasons().length);readonly=b(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=b(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=b(()=>{let t=this.node.structure.parent;return t?`${t.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=b(()=>{if(this.node.logicNode.logic.hasMetadata(sa)){let e=this.node.logicNode.logic.getMetadata(sa).compute(this.node.context);if(e)return n=>e(this.node.context,n)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=b(()=>this.hidden()||this.disabled()||this.readonly())},fa=class{newRoot(t,e,n,o){return new ti({kind:"root",fieldManager:t,value:e,pathNode:n,logic:n.builder.build(),fieldAdapter:o})}newChild(t){return new ti(t)}createNodeState(t){return new ha(t)}createValidationState(t){return new aa(t)}createStructure(t,e){return t.createStructure(e)}},pa=class{injector;rootName;submitOptions;constructor(t,e,n){this.injector=t,this.rootName=e??`${this.injector.get(hi)}.form${ch++}`,this.submitOptions=n}structures=new Set;createFieldManagementEffect(t){ge(()=>{let e=new Set;this.markStructuresLive(t,e);for(let n of this.structures)e.has(n)||(this.structures.delete(n),O(()=>n.destroy()))},{injector:this.injector})}markStructuresLive(t,e){e.add(t);for(let n of t.children())this.markStructuresLive(n.structure,e)}},ch=0;function uh(i){let t,e,n;return i.length===3?[t,e,n]=i:i.length===2?Xm(i[1])?[t,e]=i:[t,n]=i:[t]=i,[t,e,n]}function ii(...i){let[t,e,n]=uh(i),o=n?.injector??l(A),r=Ko(o,()=>Do.rootCompile(e)),a=new pa(o,n?.name,n?.submission),s=n?.adapter??new fa,d=ti.newRoot(a,t,r,s);return a.createFieldManagementEffect(d.structure),d.fieldTree}async function Gd(i,t){let e=O(i);if(O(e.submitState.submitting))return!1;let n=t===void 0?e.structure.root.fieldProxy:i,o={root:e.structure.root.fieldProxy,submitted:i};t=typeof t=="function"?{action:t}:t??e.structure.fieldManager.submitOptions;let r=t?.action;if(!r)throw new Z(1915,!1);let a=t?.onInvalid,s=t?.ignoreValidators??"pending",d=!0;O(()=>{Kd(e),s==="none"?d=e.valid():s==="pending"&&(d=!e.invalid())});try{if(d){e.submitState.selfSubmitting.set(!0);let c=await O(()=>r?.(n,o));return c&&mh(e,c),!c||Fe(c)&&c.length===0}else O(()=>a?.(n,o));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function Kd(i){if(!i.validationState.shouldSkipValidation()){i.markAsTouched();for(let t of i.structure.children())Kd(t)}}function mh(i,t){Fe(t)||(t=[t]);let e=new Map;for(let n of t){let o=ya(n,i.fieldTree),r=o.fieldTree(),a=e.get(r);a||(a=[],e.set(r,a)),a.push(o)}for(let[n,o]of e)n.submitState.submissionErrors.set(o)}var ga=class{kind="compat";control;fieldTree;context;message;constructor({context:t,kind:e,control:n}){this.context=t,this.kind=e,this.control=n}};function Yd(i){if(i.length===0)return null;let t={};for(let e of i)t[e.kind]=e instanceof ga?e.context:e;return t}var hh=new p("");function fh(i){let t=i;return typeof t.length=="number"?t.length:t.size}function Mo(i,t){return i instanceof Function?i(t):i}function Zd(i){return typeof i=="number"?isNaN(i):i===""||i===!1||i==null}function $d(i){return i===void 0?[]:Array.isArray(i)?i:[i]}function Xd(i,t){_a(i),Qe.unwrapFieldPath(i).builder.addSyncErrorRule(n=>ya(t(n),n.fieldTree))}function ph(i){return new xa(i)}function gh(i,t){return new Ca(i,t)}var oi=class{__brand=void 0;kind="";fieldTree;message;constructor(t){t&&Object.assign(this,t)}},xa=class extends oi{kind="required"};var Ca=class extends oi{minLength;kind="minLength";constructor(t,e){super(e),this.minLength=t}};var wa=class extends oi{kind="parse"};function hn(i,t,e){let n=ni(i,Ke(),o=>typeof t=="number"?t:t(o));ni(i,va,({state:o})=>o.metadata(n)()),Xd(i,o=>{if(Zd(o.value()))return;let r=o.state.metadata(n)();if(r!==void 0&&fh(o.value())<r)return e?.error?Mo(e.error,o):gh(r,{message:Mo(e?.message,o)})})}function fn(i,t){let e=ni(i,Ke(),n=>t?.when?t.when(n):!0);ni(i,ba,({state:n})=>n.metadata(e)()),Xd(i,n=>{if(n.state.metadata(e)()&&Zd(n.value()))return t?.error?Mo(t.error,n):ph({message:Mo(t?.message,n)})})}var _h=new p("");function bh(i,t,e){let n=vt({source:i,computation:()=>[]}),o=r=>{let a=e(r);n.set($d(a.error)),a.value!==void 0&&t(a.value),n.set($d(a.error))};return{errors:n.asReadonly(),setRawValue:o}}var Da=class{field;constructor(t){this.field=t}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return Yd(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new Z(1910,!1)}valueAccessor=null;hasValidator(t){return t===lt.required?this.field().required():!1}updateValueAndValidity(){}},Ea={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},vh=(()=>{let i={};for(let t of Object.keys(Ea))i[Ea[t]]=t;return i})();function Sa(i,t){let e=vh[t];return i[e]?.()}var ka=Object.values(Ea);function Io(){return{}}function Ot(i,t,e){return i[t]!==e?(i[t]=e,!0):!1}function yh(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"}function xh(i){if(i.tagName!=="INPUT")return!1;let t=i.type;return t==="date"||t==="datetime-local"||t==="month"||t==="number"||t==="range"||t==="time"||t==="week"}function Ch(i){return i.tagName==="INPUT"||i.tagName==="TEXTAREA"}function wh(i,t){let e;if(i.validity.badInput)return{error:new wa};switch(i.type){case"checkbox":return{value:i.checked};case"number":case"range":case"datetime-local":if(e=O(t),typeof e=="number"||e===null)return{value:i.value===""?null:i.valueAsNumber};break;case"date":case"month":case"time":case"week":if(e=O(t),e===null||e instanceof Date)return{value:i.valueAsDate};if(typeof e=="number")return{value:i.valueAsNumber};break}return{value:i.value}}function Dh(i,t){switch(i.type){case"checkbox":i.checked=t;return;case"radio":i.checked=t===i.value;return;case"number":case"range":case"datetime-local":if(typeof t=="number"){qd(i,t);return}else if(t===null){i.value="";return}break;case"date":case"month":case"time":case"week":if(t===null||t instanceof Date){i.valueAsDate=t;return}else if(typeof t=="number"){qd(i,t);return}}i.value=t}function qd(i,t){isNaN(t)?i.value="":i.valueAsNumber=t}function Ma(i,t,e,n){switch(e){case"name":i.setAttribute(t,e,n);break;case"disabled":case"readonly":case"required":n?i.setAttribute(t,e,""):i.removeAttribute(t,e);break;case"max":case"min":case"minLength":case"maxLength":n!==void 0?i.setAttribute(t,e,n.toString()):i.removeAttribute(t,e);break}}function Eh(i,t){i.listenToCustomControlModel(n=>t.state().controlValue.set(n)),i.listenToCustomControlOutput("touchedChange",()=>t.state().markAsTouched()),t.registerAsBinding(i.customControl);let e=Io();return()=>{let n=t.state(),o=n.controlValue();Ot(e,"controlValue",o)&&i.setCustomControlModelInput(o);for(let r of ka){let a;r==="errors"?a=t.errors():a=Sa(n,r),Ot(e,r,a)&&(i.setInputOnDirectives(r,a),t.elementAcceptsNativeProperty(r)&&!i.customControlHasInput(r)&&Ma(t.renderer,t.nativeFormElement,r,a))}}}function Sh(i,t){t.controlValueAccessor.registerOnChange(n=>t.state().controlValue.set(n)),t.controlValueAccessor.registerOnTouched(()=>t.state().markAsTouched()),t.registerAsBinding();let e=Io();return()=>{let n=t.state(),o=n.value();Ot(e,"controlValue",o)&&O(()=>t.controlValueAccessor.writeValue(o));for(let r of ka){let a=Sa(n,r);if(Ot(e,r,a)){let s=i.setInputOnDirectives(r,a);r==="disabled"&&t.controlValueAccessor.setDisabledState?O(()=>t.controlValueAccessor.setDisabledState(a)):!s&&t.elementAcceptsNativeProperty(r)&&Ma(t.renderer,t.nativeFormElement,r,a)}}}}function kh(i,t,e){if(typeof MutationObserver!="function")return;let n=new MutationObserver(o=>{o.some(r=>Mh(r))&&t()});n.observe(i,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>n.disconnect())}function Mh(i){if(i.type==="childList"||i.type==="characterData"){if(i.target instanceof Comment)return!1;for(let t of i.addedNodes)if(!(t instanceof Comment))return!0;for(let t of i.removedNodes)if(!(t instanceof Comment))return!0;return!1}return i.type==="attributes"&&i.target instanceof HTMLOptionElement}function Ih(i,t,e){let n=!1,o=t.nativeFormElement,r=bh(()=>t.state().value(),s=>t.state().controlValue.set(s),()=>wh(o,t.state().value));e.set(r.errors),i.listenToDom("input",()=>r.setRawValue(void 0)),i.listenToDom("blur",()=>t.state().markAsTouched()),t.registerAsBinding(),o.tagName==="SELECT"&&kh(o,()=>{n&&(o.value=t.state().controlValue())},t.destroyRef);let a=Io();return()=>{let s=t.state(),d=s.controlValue();Ot(a,"controlValue",d)&&Dh(o,d);for(let c of ka){let u=Sa(s,c);Ot(a,c,u)&&(i.setInputOnDirectives(c,u),t.elementAcceptsNativeProperty(c)&&Ma(t.renderer,o,c,u))}n=!0}}var Rh=Symbol(),Ah=new p(""),Ro=(()=>{class i{field=je.required({alias:"formField"});renderer=l(se);destroyRef=l(ui);state=b(()=>this.field()());injector=l(A);element=l(E).nativeElement;elementIsNativeFormElement=yh(this.element);elementAcceptsNumericValues=xh(this.element);elementAcceptsTextualValues=Ch(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=l(Pl,{optional:!0,self:!0});config=l(hh,{optional:!0});parseErrorsSource=M(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Da(this.state)}parseErrors=b(()=>this.parseErrorsSource()?.().map(e=>q(_({},e),{fieldTree:O(this.state).fieldTree,formField:this}))??[]);errors=b(()=>this.state().errors().filter(e=>!e.formField||e.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([o,r])=>[o,b(()=>r(this))]);if(e.length===0)return;let n=Io();bi({write:()=>{for(let[o,r]of e){let a=r();Ot(n,o,a)&&(a?this.renderer.addClass(this.element,o):this.renderer.removeClass(this.element,o))}}},{injector:this.injector})}focus(e){this.focuser(e)}registerAsBinding(e){if(this.isFieldBinding)throw new Z(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=n=>e.focus(n)),ge(n=>{let o=this.state();o.nodeState.formFieldBindings.update(r=>[...r,this]),n(()=>{o.nodeState.formFieldBindings.update(r=>r.filter(a=>a!==this))})},{injector:this.injector})}[Rh];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=Sh(e,this);else if(e.customControl)this.\u0275ngControlUpdate=Eh(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=Ih(e,this,this.parseErrorsSource);else throw new Z(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[ue([{provide:Ah,useExisting:i},{provide:dt,useFactory:()=>l(i).interopNgControl},{provide:_h,useFactory:()=>l(i).parseErrorsSource}]),Ga("formField")]})}return i})(),Ao=(()=>{class i{fieldTree=je.required({alias:"formRoot"});onSubmit(e){e.preventDefault(),Gd(this.fieldTree())}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["form","formRoot",""]],hostAttrs:["novalidate",""],hostBindings:function(n,o){n&1&&I("submit",function(a){return o.onSubmit(a)})},inputs:{fieldTree:[1,"formRoot","fieldTree"]}})}return i})();var Th=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=w({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,o){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),Oh={passive:!0},Qd=(()=>{class i{_platform=l(z);_ngZone=l(D);_renderer=l(me).createRenderer(null,null);_styleLoader=l(he);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ta;this._styleLoader.load(Th);let n=Q(e),o=this._monitoredElements.get(n);if(o)return o.subject;let r=new f,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>r.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>r.next({target:c.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",s,Oh)));return this._monitoredElements.set(n,{subject:r,unlisten:d}),r}stopMonitoring(e){let n=Q(e),o=this._monitoredElements.get(n);o&&(o.unlisten(),o.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Jd=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({})}return i})();var ec=new p("MAT_INPUT_VALUE_ACCESSOR");var Fh=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Ph=new p("MAT_INPUT_CONFIG"),To=(()=>{class i{_elementRef=l(E);_platform=l(z);ngControl=l(dt,{optional:!0,self:!0});_autofillMonitor=l(Qd);_ngZone=l(D);_formField=l(Yn,{optional:!0});_renderer=l(se);_uid=l(te).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(Ph,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new f;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Qt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(lt.required)??!1}set required(e){this._required=Qt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&zr().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Qt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>zr().has(e));constructor(){let e=l(Wn,{optional:!0}),n=l(Gn,{optional:!0}),o=l(uo),r=l(ec,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();r?bt(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new rn(o,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ge(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Fh.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,o){n&1&&I("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),n&2&&($e("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),N("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),L("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",F]},exportAs:["matInput"],features:[ue([{provide:Kn,useExisting:i}]),we]})}return i})(),Oo=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=T({type:i});static \u0275inj=R({imports:[Oe,Oe,Jd,Y]})}return i})();var Fo=class i{taskCreated=ze();taskModel=M({title:"",description:"",priority:"medium"});taskForm=ii(this.taskModel,t=>{fn(t.title),hn(t.title,3,{message:"El t\xEDtulo debe tener al menos 3 caracteres"}),fn(t.description),hn(t.description,10,{message:"La descripci\xF3n debe tener al menos 10 caracteres"})},{submission:{action:async t=>{t().valid()&&(this.taskCreated.emit(t().value()),t().reset({title:"",description:"",priority:"medium"}))}}});static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-task-form"]],outputs:{taskCreated:"taskCreated"},decls:23,vars:5,consts:[[1,"task-form",3,"formRoot"],["appearance","outline"],["matInput","","placeholder","Ej: Comprar leche",3,"formField"],["matInput","","placeholder","Ej: Ir al supermercado por la tarde",3,"formField"],[3,"formField"],["value","low"],["value","medium"],["value","high"],["mat-raised-button","","color","primary","type","submit",1,"submit-btn",3,"disabled"]],template:function(e,n){e&1&&(h(0,"form",0)(1,"mat-form-field",1)(2,"mat-label"),y(3,"T\xEDtulo"),m(),ce(4,"input",2),tt(),m(),h(5,"mat-form-field",1)(6,"mat-label"),y(7,"Descripci\xF3n"),m(),ce(8,"input",3),tt(),m(),h(9,"mat-form-field",1)(10,"mat-label"),y(11,"Prioridad"),m(),h(12,"mat-select",4)(13,"mat-option",5),y(14,"\u{1F7E2} Baja"),m(),h(15,"mat-option",6),y(16,"\u{1F7E1} Media"),m(),h(17,"mat-option",7),y(18,"\u{1F534} Alta"),m()(),tt(),m(),h(19,"button",8)(20,"mat-icon"),y(21,"add"),m(),y(22," Crear Tarea "),m()()),e&2&&(V("formRoot",n.taskForm),g(4),V("formField",n.taskForm.title),nt(),g(4),V("formField",n.taskForm.description),nt(),g(4),V("formField",n.taskForm.priority),nt(),g(7),V("disabled",n.taskForm().invalid()))},dependencies:[Ro,Ao,Ge,ut,po,fo,Oo,To,Ze,Ue,sn,an,We,Oe],styles:[".task-form[_ngcontent-%COMP%]{display:flex;gap:1rem;align-items:center;padding:1rem;background:var(--filter-bg);color:var(--text-main);border-radius:8px;box-shadow:0 4px 6px #0000001a;margin-bottom:2rem;flex-wrap:wrap}mat-form-field[_ngcontent-%COMP%]{flex:1;min-width:200px}.submit-btn[_ngcontent-%COMP%]{height:56px}"],changeDetection:0})};var Po=class i{dialogRef=l(st);data=l(Tr);editModel=M({title:this.data.task.title,description:this.data.task.description,priority:this.data.task.priority});editForm=ii(this.editModel,t=>{fn(t.title),hn(t.title,3,{message:"El t\xEDtulo debe tener al menos 3 caracteres"}),fn(t.description),hn(t.description,10,{message:"La descripci\xF3n debe tener al menos 10 caracteres"})},{submission:{action:async t=>{if(t().valid()){let e=_(_({},this.data.task),t().value());this.dialogRef.close(e)}}}});closeModal(){this.dialogRef.close(null)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-task-edit"]],decls:27,vars:5,consts:[["mat-dialog-title",""],["id","editForm",1,"edit-task-form",3,"formRoot"],["appearance","outline"],["matInput","","placeholder","T\xEDtulo",3,"formField"],["matInput","","placeholder","Descripci\xF3n","rows","3",3,"formField"],[3,"formField"],["value","low"],["value","medium"],["value","high"],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","type","submit","form","editForm",3,"disabled"]],template:function(e,n){e&1&&(h(0,"h2",0),y(1,"Editar Tarea"),m(),h(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),y(6,"T\xEDtulo"),m(),ce(7,"input",3),tt(),m(),h(8,"mat-form-field",2)(9,"mat-label"),y(10,"Descripci\xF3n"),m(),ce(11,"textarea",4),tt(),m(),h(12,"mat-form-field",2)(13,"mat-label"),y(14,"Prioridad"),m(),h(15,"mat-select",5)(16,"mat-option",6),y(17,"\u{1F7E2} Baja"),m(),h(18,"mat-option",7),y(19,"\u{1F7E1} Media"),m(),h(20,"mat-option",8),y(21,"\u{1F534} Alta"),m()(),tt(),m()()(),h(22,"mat-dialog-actions",9)(23,"button",10),I("click",function(){return n.closeModal()}),y(24,"Cancelar"),m(),h(25,"button",11),y(26,"Guardar"),m()()),e&2&&(g(3),V("formRoot",n.editForm),g(4),V("formField",n.editForm.title),nt(),g(4),V("formField",n.editForm.description),nt(),g(4),V("formField",n.editForm.priority),nt(),g(10),V("disabled",n.editForm().invalid()))},dependencies:[Ao,Ro,qi,Ki,$i,Yi,Ge,ut,Oe,Ze,Ue,Oo,To,sn,an,We],styles:[".edit-task-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding-top:1rem}"],changeDetection:0})};var No=class i{dialogRef=l(st);onConfirm(){this.dialogRef.close(!0)}onDecline(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-confirm-dialog"]],decls:10,vars:0,consts:[["mat-dialog-title",""],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(e,n){e&1&&(h(0,"h2",0),y(1,"Eliminar Tarea"),m(),h(2,"mat-dialog-content")(3,"p"),y(4,"\xBFEst\xE1s seguro de que deseas eliminar esta tarea de forma permanente?"),m()(),h(5,"mat-dialog-actions",1)(6,"button",2),I("click",function(){return n.onDecline()}),y(7,"Cancelar"),m(),h(8,"button",3),I("click",function(){return n.onConfirm()}),y(9,"Eliminar"),m()())},dependencies:[qi,Ki,$i,Yi,Ge,ut],styles:["p[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:20px}"],changeDetection:0})};var Nh=()=>["inProgressList","doneList"],Lh=()=>["todoList","doneList"],Vh=()=>["todoList","inProgressList"],Lo=class i{store=l(ln);themeService=l(_o);dialog=l(Gi);announcer=l(Fn);statusLabelMap={toDo:"Por Hacer",inProgress:"En Progreso",done:"Hecho"};columnStatusMap={todo:"toDo",inProgress:"inProgress",done:"done"};changeFilter(t){this.store.filterPriority.set(t)}onTaskCreated(t){this.store.addTask(t)}moveTask(t,e){this.store.moveTask(t.id,e),this.announcer.announce(`"${t.title}" movida a ${this.statusLabelMap[e]}`)}onDrop(t,e){if(t.previousContainer!==t.container){let n=t.item.data,o=this.columnStatusMap[e]??"toDo";this.moveTask(n,o)}}deleteTask(t){this.dialog.open(No,{width:"350px"}).afterClosed().subscribe(n=>{n&&(this.store.deleteTask(t),this.announcer.announce("Tarea eliminada"))})}editTask(t){this.dialog.open(Po,{width:"400px",data:{task:t}}).afterClosed().subscribe(n=>{n&&this.store.updateTask(n)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-kanban-page"]],decls:27,vars:13,consts:[[1,"kanban-header"],["mat-icon-button","","aria-label","Toggle Dark Mode",3,"click"],[1,"kanban-board"],[3,"taskCreated"],[1,"filter-bar"],["appearance","outline"],["value","all",3,"selectionChange"],["value","all"],["value","low"],["value","medium"],["value","high"],["cdkDropListGroup","",1,"kanban-columns"],["cdkDropList","","id","todoList","columnType","todo","title","\u{1F4CC} Por Hacer","emptyStateMessage","\u2728 No hay tareas pendientes",3,"cdkDropListDropped","taskMoved","taskEdited","taskDeleted","cdkDropListConnectedTo","cdkDropListData","tasks"],["cdkDropList","","id","inProgressList","columnType","inProgress","title","\u23F3 En Progreso","emptyStateMessage","\u23F3 No hay tareas en progreso",3,"cdkDropListDropped","taskMoved","taskEdited","taskDeleted","cdkDropListConnectedTo","cdkDropListData","tasks"],["cdkDropList","","id","doneList","columnType","done","title","\u2705 Hecho","emptyStateMessage","\u2705 Tareas completadas aparecer\xE1n aqu\xED",3,"cdkDropListDropped","taskMoved","taskEdited","taskDeleted","cdkDropListConnectedTo","cdkDropListData","tasks"]],template:function(e,n){e&1&&(h(0,"header",0)(1,"h1"),y(2,"\u{1F4CB} Mi Tablero Kanban"),m(),h(3,"p"),y(4,"Organiza tus tareas de manera eficiente y visual"),m(),h(5,"button",1),I("click",function(){return n.themeService.toggleTheme()}),h(6,"mat-icon"),y(7),m()()(),h(8,"div",2)(9,"app-task-form",3),I("taskCreated",function(r){return n.onTaskCreated(r)}),m(),h(10,"div",4)(11,"mat-form-field",5)(12,"mat-label"),y(13,"\u{1F50D} Filtrar por prioridad"),m(),h(14,"mat-select",6),I("selectionChange",function(r){return n.changeFilter(r.value)}),h(15,"mat-option",7),y(16,"\u{1F4CB} Todas"),m(),h(17,"mat-option",8),y(18,"\u{1F7E2} Baja"),m(),h(19,"mat-option",9),y(20,"\u{1F7E1} Media"),m(),h(21,"mat-option",10),y(22,"\u{1F534} Alta"),m()()()(),h(23,"div",11)(24,"app-column",12),I("cdkDropListDropped",function(r){return n.onDrop(r,"todo")})("taskMoved",function(r){return n.moveTask(r.task,r.newStatus)})("taskEdited",function(r){return n.editTask(r)})("taskDeleted",function(r){return n.deleteTask(r)}),m(),h(25,"app-column",13),I("cdkDropListDropped",function(r){return n.onDrop(r,"inProgress")})("taskMoved",function(r){return n.moveTask(r.task,r.newStatus)})("taskEdited",function(r){return n.editTask(r)})("taskDeleted",function(r){return n.deleteTask(r)}),m(),h(26,"app-column",14),I("cdkDropListDropped",function(r){return n.onDrop(r,"done")})("taskMoved",function(r){return n.moveTask(r.task,r.newStatus)})("taskEdited",function(r){return n.editTask(r)})("taskDeleted",function(r){return n.deleteTask(r)}),m()()()),e&2&&(g(7),xe(n.themeService.isDarkMode()?"dark_mode":"light_mode"),g(17),V("cdkDropListConnectedTo",gi(10,Nh))("cdkDropListData",n.store.taskByColumn().todo)("tasks",n.store.taskByColumn().todo),g(),V("cdkDropListConnectedTo",gi(11,Lh))("cdkDropListData",n.store.taskByColumn().inProgress)("tasks",n.store.taskByColumn().inProgress),g(),V("cdkDropListConnectedTo",gi(12,Vh))("cdkDropListData",n.store.taskByColumn().done)("tasks",n.store.taskByColumn().done))},dependencies:[vo,Fo,Ns,sn,Ze,Ue,an,We,Oe,po,fo,Ge,ea],styles:[".kanban-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:20px;background:var(--header-bg);color:var(--header-text);transition:background .3s ease}.kanban-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:24px}.kanban-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px;opacity:.8}.kanban-board[_ngcontent-%COMP%]{padding:20px;max-width:1400px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.filter-bar[_ngcontent-%COMP%]{margin-bottom:20px;padding:10px;background:var(--filter-bg);border-radius:4px;transition:background .3s ease}.kanban-columns[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}@media(max-width:1024px){.kanban-columns[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(max-width:768px){.kanban-columns[_ngcontent-%COMP%]{grid-template-columns:1fr}}"],changeDetection:0})};var Vo=class i extends mt{STORAGE_KEY="kanban_tasks";getAll(){try{let t=localStorage.getItem(this.STORAGE_KEY);return t?this.migrate(JSON.parse(t)):this.seedMockData()}catch{return this.seedMockData()}}save(t){localStorage.setItem(this.STORAGE_KEY,JSON.stringify(t))}migrate(t){return t.map(e=>({id:e.id,title:e.title,description:e.description??"",priority:e.priority,status:e.status??"toDo"}))}seedMockData(){return[{id:Date.now(),title:"Aprender Angular Signals",description:"Estudiar signals, computed y effect en profundidad",priority:"high",status:"toDo"},{id:Date.now()+1,title:"Construir Kanban",description:"Implementar columnas con control flow nativo de Angular",priority:"medium",status:"inProgress"},{id:Date.now()+2,title:"Revisar arquitectura",description:"Aplicar capas domain, application, infrastructure y presentation",priority:"high",status:"done"}]}static \u0275fac=(()=>{let t;return function(n){return(t||(t=Re(i)))(n||i)}})();static \u0275prov=v({token:i,factory:i.\u0275fac})};var yC=[{path:"",component:Lo,providers:[{provide:mt,useClass:Vo},ln]}];export{yC as kanbanRoutes};
