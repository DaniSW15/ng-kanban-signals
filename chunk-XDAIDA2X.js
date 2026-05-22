import{$ as Me,$a as V,A as ai,Aa as se,Ab as Ja,B as xe,Ba as pt,Bb as ue,C as jo,Ca as tt,Cb as fi,D as La,Da as nt,Db as es,Ea as _t,Fa as Ko,G as Ho,Gb as O,H as Va,Hb as b,I as Uo,Ia as C,Ib as bt,J as si,Ja as A,Jb as pi,K as pe,Ka as S,Kb as Be,L as Nt,La as Ua,Lb as ze,M as ae,Ma as Wa,Mb as pn,N as Ba,Na as de,Nb as ts,O as Je,Oa as Fe,Ob as De,P as Z,Pb as P,Qa as gt,Qb as xt,R as li,Ra as $o,Rb as _i,S as v,Sb as gi,T,Ta as Vt,Tb as ns,Ua as N,Ub as is,V as p,Va as Ga,Vb as os,W as mn,Wa as Ka,X as l,Xa as K,Xb as rs,Ya as $,Z as Lt,Za as $a,Zb as bi,_ as Wo,_a as Ya,a as Lo,aa as Ie,ab as m,b as oe,ba as za,bb as h,ca as R,cb as ce,d as Ke,da as F,db as Bt,e as f,ea as di,eb as zt,f as oi,fb as Ne,g as Vo,ga as k,gb as it,h as Bo,ha as D,hb as Ye,i as Ta,ia as ci,ib as I,j as Ra,jb as B,k as Pe,kb as ve,l as Aa,la as M,lb as W,ma as _e,mb as mi,na as we,nb as Le,o as re,oa as $e,ob as H,p as Oa,pa as E,pb as U,qa as Go,qb as qa,r as Pa,ra as ui,rb as Za,s as Ft,sa as ja,sb as Yo,t as ri,ta as hi,tb as fn,u as Fa,ua as Ha,ub as L,v as Ee,va as et,vb as Ve,w as le,wa as g,wb as x,x as zo,xa as Te,xb as ye,y as Na,ya as ft,yb as Xa,za as he,zb as Qa}from"./chunk-LIGK3UKQ.js";import{a as _,b as G}from"./chunk-2NFLSA4Y.js";var xi=class i{STORAGE_KEY="kanban_tasks";tasksSignal=M(this.loadFromLocalStorage());filterPriority=M("all");filteredTasks=b(()=>{let t=this.filterPriority(),e=this.tasksSignal();return t==="all"?e:e.filter(n=>n.priority===t)});taskByColumn=b(()=>{let t=this.filteredTasks();return{todo:t.filter(e=>e.status==="toDo").sort((e,n)=>e.id-n.id),inProgress:t.filter(e=>e.status==="inProgress").sort((e,n)=>e.id-n.id),done:t.filter(e=>e.status==="done").sort((e,n)=>e.id-n.id)}});constructor(){_e(()=>{let t=this.tasksSignal();localStorage.setItem(this.STORAGE_KEY,JSON.stringify(t))})}addTask(t){let e=G(_({id:Date.now()},t),{status:t.status||"toDo"});this.tasksSignal.update(n=>[...n,e])}updateTask(t){this.tasksSignal.update(e=>e.map(n=>n.id===t.id?t:n))}deleteTask(t){this.tasksSignal.update(e=>e.filter(n=>n.id!==t))}moveTask(t,e){this.tasksSignal.update(n=>n.map(o=>o.id===t?G(_({},o),{status:e}):o))}loadFromLocalStorage(){try{let t=localStorage.getItem(this.STORAGE_KEY);if(t){let e=JSON.parse(t);return this.migrateTasks(e)}else return this.loadMockData()}catch(t){return console.error(...ec("3170342232_72_6_72_50_11","Error loading tasks:",t)),this.loadMockData()}}migrateTasks(t){return t.map(e=>({id:e.id,title:e.title,description:e.description||"",priority:e.priority,status:e.status||"toDo"}))}loadMockData(){return[{id:Date.now(),title:"Aprender Angular Signals",description:"Estudiar signals, computed y effect",priority:"high",status:"toDo"},{id:Date.now()+1,title:"Construir Kanban",description:"Implementar columnas con control flow nativo",priority:"medium",status:"inProgress"},{id:Date.now()+2,title:"Hacer deploy",description:"Publicar la aplicaci\xF3n",priority:"low",status:"done"}]}resetToMockData(){this.tasksSignal.set(this.loadMockData())}clearAllTasks(){this.tasksSignal.set([])}static \u0275fac=function(e){return new(e||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})};function Jd(){try{return(0,eval)("globalThis._console_ninja")||(0,eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x3bccce=_0x3f31;(function(_0x4cc790,_0x57b2ac){var _0x249599=_0x3f31,_0x59d275=_0x4cc790();while(!![]){try{var _0x4ad8ab=-parseInt(_0x249599(0x17f))/0x1*(-parseInt(_0x249599(0xbb))/0x2)+parseInt(_0x249599(0x168))/0x3*(-parseInt(_0x249599(0x122))/0x4)+-parseInt(_0x249599(0x141))/0x5+-parseInt(_0x249599(0x106))/0x6+-parseInt(_0x249599(0x18f))/0x7*(-parseInt(_0x249599(0x1ad))/0x8)+parseInt(_0x249599(0xc9))/0x9*(-parseInt(_0x249599(0x10b))/0xa)+parseInt(_0x249599(0x13a))/0xb*(parseInt(_0x249599(0xb6))/0xc);if(_0x4ad8ab===_0x57b2ac)break;else _0x59d275['push'](_0x59d275['shift']());}catch(_0x238842){_0x59d275['push'](_0x59d275['shift']());}}}(_0x5e98,0x88d83));function z(_0x4341e0,_0x59fdda,_0x255161,_0x5a3dd8,_0xbceddf,_0x39681f){var _0x3b658c=_0x3f31,_0x9a39a1,_0x415d78,_0x45fe4d,_0x4c8890;this[_0x3b658c(0xcc)]=_0x4341e0,this[_0x3b658c(0xf3)]=_0x59fdda,this[_0x3b658c(0x165)]=_0x255161,this[_0x3b658c(0x11b)]=_0x5a3dd8,this[_0x3b658c(0x159)]=_0xbceddf,this[_0x3b658c(0x1ba)]=_0x39681f,this['_allowedToSend']=!0x0,this[_0x3b658c(0x1c0)]=!0x0,this[_0x3b658c(0x130)]=!0x1,this['_connecting']=!0x1,this[_0x3b658c(0xe4)]=((_0x415d78=(_0x9a39a1=_0x4341e0[_0x3b658c(0x161)])==null?void 0x0:_0x9a39a1[_0x3b658c(0x19c)])==null?void 0x0:_0x415d78[_0x3b658c(0xc7)])===_0x3b658c(0xee),this[_0x3b658c(0xdc)]=!((_0x4c8890=(_0x45fe4d=this[_0x3b658c(0xcc)]['process'])==null?void 0x0:_0x45fe4d['versions'])!=null&&_0x4c8890[_0x3b658c(0xf0)])&&!this[_0x3b658c(0xe4)],this[_0x3b658c(0x18c)]=null,this[_0x3b658c(0x155)]=0x0,this[_0x3b658c(0xc2)]=0x14,this['_webSocketErrorDocsLink']='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x3b658c(0xdc)]?_0x3b658c(0xcf):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x3b658c(0x16e)];}z[_0x3bccce(0x146)][_0x3bccce(0x134)]=async function(){var _0x2d59ec=_0x3bccce,_0x32ce43,_0x3dd5b7;if(this[_0x2d59ec(0x18c)])return this[_0x2d59ec(0x18c)];let _0x191a2b;if(this[_0x2d59ec(0xdc)]||this['_inNextEdge'])_0x191a2b=this['global'][_0x2d59ec(0xc6)];else{if((_0x32ce43=this['global'][_0x2d59ec(0x161)])!=null&&_0x32ce43[_0x2d59ec(0x127)])_0x191a2b=(_0x3dd5b7=this[_0x2d59ec(0xcc)][_0x2d59ec(0x161)])==null?void 0x0:_0x3dd5b7[_0x2d59ec(0x127)];else try{_0x191a2b=(await new Function(_0x2d59ec(0x185),_0x2d59ec(0x1c5),_0x2d59ec(0x11b),_0x2d59ec(0x179))(await(0x0,eval)(_0x2d59ec(0x16a)),await(0x0,eval)('import(\\x27url\\x27)'),this['nodeModules']))[_0x2d59ec(0x18e)];}catch{try{_0x191a2b=require(require(_0x2d59ec(0x185))[_0x2d59ec(0x100)](this[_0x2d59ec(0x11b)],'ws'));}catch{throw new Error(_0x2d59ec(0x196));}}}return this[_0x2d59ec(0x18c)]=_0x191a2b,_0x191a2b;},z[_0x3bccce(0x146)][_0x3bccce(0x1a8)]=function(){var _0x1327c2=_0x3bccce;this[_0x1327c2(0x174)]||this[_0x1327c2(0x130)]||this[_0x1327c2(0x155)]>=this[_0x1327c2(0xc2)]||(this[_0x1327c2(0x1c0)]=!0x1,this[_0x1327c2(0x174)]=!0x0,this[_0x1327c2(0x155)]++,this[_0x1327c2(0x12e)]=new Promise((_0x5c923b,_0x1aba26)=>{var _0x2265d2=_0x1327c2;this[_0x2265d2(0x134)]()[_0x2265d2(0xf4)](_0x138923=>{var _0x3544da=_0x2265d2;let _0x5b4d2a=new _0x138923(_0x3544da(0x11c)+(!this[_0x3544da(0xdc)]&&this[_0x3544da(0x159)]?_0x3544da(0x177):this[_0x3544da(0xf3)])+':'+this[_0x3544da(0x165)]);_0x5b4d2a[_0x3544da(0xb7)]=()=>{var _0x52be26=_0x3544da;this[_0x52be26(0x17e)]=!0x1,this[_0x52be26(0xd5)](_0x5b4d2a),this['_attemptToReconnectShortly'](),_0x1aba26(new Error(_0x52be26(0x188)));},_0x5b4d2a['onopen']=()=>{var _0x4c14a1=_0x3544da;this[_0x4c14a1(0xdc)]||_0x5b4d2a[_0x4c14a1(0xec)]&&_0x5b4d2a[_0x4c14a1(0xec)]['unref']&&_0x5b4d2a[_0x4c14a1(0xec)][_0x4c14a1(0x1ae)](),_0x5c923b(_0x5b4d2a);},_0x5b4d2a[_0x3544da(0xea)]=()=>{var _0x24ebec=_0x3544da;this[_0x24ebec(0x1c0)]=!0x0,this[_0x24ebec(0xd5)](_0x5b4d2a),this[_0x24ebec(0x1c2)]();},_0x5b4d2a[_0x3544da(0x14e)]=_0x3fc7f1=>{var _0x25c89e=_0x3544da;try{if(!(_0x3fc7f1!=null&&_0x3fc7f1[_0x25c89e(0xd1)])||!this[_0x25c89e(0x1ba)])return;let _0x2ab68a=JSON[_0x25c89e(0xe8)](_0x3fc7f1[_0x25c89e(0xd1)]);this[_0x25c89e(0x1ba)](_0x2ab68a[_0x25c89e(0x19a)],_0x2ab68a[_0x25c89e(0x186)],this[_0x25c89e(0xcc)],this[_0x25c89e(0xdc)]);}catch{}};})[_0x2265d2(0xf4)](_0x1f2633=>(this[_0x2265d2(0x130)]=!0x0,this[_0x2265d2(0x174)]=!0x1,this[_0x2265d2(0x1c0)]=!0x1,this['_allowedToSend']=!0x0,this[_0x2265d2(0x155)]=0x0,_0x1f2633))[_0x2265d2(0xe2)](_0x5bafe3=>(this[_0x2265d2(0x130)]=!0x1,this['_connecting']=!0x1,console['warn'](_0x2265d2(0x13c)+this[_0x2265d2(0x16e)]),_0x1aba26(new Error(_0x2265d2(0x121)+(_0x5bafe3&&_0x5bafe3[_0x2265d2(0x1b0)])))));}));},z['prototype'][_0x3bccce(0xd5)]=function(_0x20904a){var _0x2e26a8=_0x3bccce;this[_0x2e26a8(0x130)]=!0x1,this[_0x2e26a8(0x174)]=!0x1;try{_0x20904a[_0x2e26a8(0xea)]=null,_0x20904a[_0x2e26a8(0xb7)]=null,_0x20904a['onopen']=null;}catch{}try{_0x20904a[_0x2e26a8(0x19b)]<0x2&&_0x20904a[_0x2e26a8(0xf5)]();}catch{}},z['prototype'][_0x3bccce(0x1c2)]=function(){var _0x120c79=_0x3bccce;clearTimeout(this[_0x120c79(0x17a)]),!(this[_0x120c79(0x155)]>=this[_0x120c79(0xc2)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x374d9c=_0x120c79,_0x2c033a;this[_0x374d9c(0x130)]||this['_connecting']||(this[_0x374d9c(0x1a8)](),(_0x2c033a=this[_0x374d9c(0x12e)])==null||_0x2c033a[_0x374d9c(0xe2)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x120c79(0x17a)]['unref']&&this['_reconnectTimeout'][_0x120c79(0x1ae)]());},z[_0x3bccce(0x146)][_0x3bccce(0xb8)]=async function(_0x22c768){var _0x51e33a=_0x3bccce;try{if(!this[_0x51e33a(0x17e)])return;this['_allowedToConnectOnSend']&&this[_0x51e33a(0x1a8)](),(await this[_0x51e33a(0x12e)])['send'](JSON[_0x51e33a(0xbd)](_0x22c768));}catch(_0x5260c8){this[_0x51e33a(0x170)]?console[_0x51e33a(0xbc)](this[_0x51e33a(0x1a7)]+':\\x20'+(_0x5260c8&&_0x5260c8['message'])):(this[_0x51e33a(0x170)]=!0x0,console[_0x51e33a(0xbc)](this[_0x51e33a(0x1a7)]+':\\x20'+(_0x5260c8&&_0x5260c8[_0x51e33a(0x1b0)]),_0x22c768)),this[_0x51e33a(0x17e)]=!0x1,this[_0x51e33a(0x1c2)]();}};function _0x5e98(){var _0x3c1a84=['now','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','10.0.2.2','data','console','concat','_hasSymbolPropertyOnItsPath','_disposeWebsocket','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','null','resetWhenQuietMs','react-native','resolve','test','_inBrowser','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','hostname','fromCharCode','_consoleNinjaAllowedToStart','number','catch','bound\\x20Promise','_inNextEdge','parent','timeStamp','undefined','parse','reduceOnAccumulatedProcessingTimeMs','onclose','_undefined','_socket','remix','edge','name','node','_getOwnPropertySymbols','astro','host','then','close','angular','Number','positiveInfinity','log','Set','_console_ninja','','_isMap','getOwnPropertySymbols','perf_hooks','join','constructor','_objectToString','ninjaSuppressConsole','slice','index','5700192QCRPnQ','match','type','versions','[object\\x20Map]','10SYTKRC','trace','_setNodeQueryPath','resetOnProcessingTimeAverageMs','_addFunctionsNode','props','_numberRegExp','isArray','_getOwnPropertyNames','origin','_p_','elements','autoExpand','52841','negativeInfinity','cappedElements','nodeModules','ws://','[object\\x20Set]','reducePolicy',["localhost","127.0.0.1","example.cypress.io","10.0.2.2","MacBook-Air.local","192.168.16.52"],'nan','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','209580XQJBhV','boolean','setter','_hasSetOnItsPath','Map','_WebSocket','sortProps','startsWith','object','push','_setNodeExpressionPath','_console_ninja_session','_ws','valueOf','_connected','emulator','root_exp','modules','getWebSocketClass','disabledTrace','_additionalMetadata','_processTreeNodeResult','_addObjectProperty','_addLoadNode','1016268sxaONp','elapsed','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','replace','Error','toUpperCase','serialize','222005KTsWxj','\\x20browser','1.0.0','capped','_isPrimitiveType','prototype','some','autoExpandMaxDepth','toLowerCase','Promise','totalStrLength','symbol',"/Users/danisw.dev/.vscode/extensions/wallabyjs.console-ninja-1.0.528/node_modules",'onmessage','_isPrimitiveWrapperType','time','android','_isSet','map',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','_connectAttemptCount','bigint','_cleanNode','_sortProps','dockerizedApp','allStrLength','performance','_ninjaIgnoreNextError','current','length','_p_length','perLogpoint','process','_propertyName','bind','resolveGetters','port','angular','[object\\x20Array]','21dutNaI','\\x20server','import(\\x27path\\x27)','HTMLAllCollection','get','autoExpandPropertyCount','_webSocketErrorDocsLink','_type','_extendedWarning','root_exp_id','reduceOnCount','strLength','_connecting','getOwnPropertyNames','getOwnPropertyDescriptor','gateway.docker.internal','count','return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());','_reconnectTimeout','[object\\x20Date]','stack','unknown','_allowedToSend','37PXcKeV','_getOwnPropertyDescriptor','array','indexOf','noFunctions','getter','path','args','_keyStrRegExp','logger\\x20websocket\\x20error','_addProperty','value','NEGATIVE_INFINITY','_WebSocketClass','_isArray','default','686PkUofF','expo','_treeNodePropertiesBeforeFullValue','autoExpandPreviousObjects','_HTMLAllCollection','reducedLimits','_treeNodePropertiesAfterFullValue','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','cappedProps','disabledLog','hits','method','readyState','env','_isNegativeZero','ExpoDevice','POSITIVE_INFINITY','reduceLimits','expressionsToEvaluate','unshift','string','funcName','toString','autoExpandLimit','_sendErrorMessage','_connectToHostNow','hasOwnProperty','function','call','String','1288kqqczz','unref','isExpressionToEvaluate','message','negativeZero','_Symbol',{"resolveGetters":false,"defaultLimits":{"props":100,"elements":100,"strLength":51200,"totalStrLength":51200,"autoExpandLimit":5000,"autoExpandMaxDepth":10},"reducedLimits":{"props":5,"elements":5,"strLength":256,"totalStrLength":768,"autoExpandLimit":30,"autoExpandMaxDepth":2},"reducePolicy":{"perLogpoint":{"reduceOnCount":50,"reduceOnAccumulatedProcessingTimeMs":100,"resetWhenQuietMs":500,"resetOnProcessingTimeAverageMs":100},"global":{"reduceOnCount":1000,"reduceOnAccumulatedProcessingTimeMs":300,"resetWhenQuietMs":50,"resetOnProcessingTimeAverageMs":100}}},'[object\\x20BigInt]','_dateToString','_setNodeLabel','level','next.js','depth','eventReceivedCallback','error','includes','_blacklistedProperty','stackTraceLimit','date','_allowedToConnectOnSend','iterator','_attemptToReconnectShortly','...','_isUndefined','url','hrtime','Buffer','264ieXPUE','onerror','send','charAt','Boolean','46652kCJfEm','warn','stringify','defaultLimits','127.0.0.1','coverage','RegExp','_maxConnectAttemptCount','location','_setNodeId','_setNodePermissions','WebSocket','NEXT_RUNTIME','forEach','8906967csHRqh','_property','substr','global','_regExpToString'];_0x5e98=function(){return _0x3c1a84;};return _0x5e98();}function _0x3f31(_0x87199c,_0x5d8a33){var _0x5e98d6=_0x5e98();return _0x3f31=function(_0x3f31ad,_0x358784){_0x3f31ad=_0x3f31ad-0xb5;var _0x36bfb3=_0x5e98d6[_0x3f31ad];return _0x36bfb3;},_0x3f31(_0x87199c,_0x5d8a33);}function H(_0x366540,_0x1ad816,_0x529823,_0x2cd57a,_0x57c670,_0x2877db,_0x42454c,_0x5d3dc4=ne){var _0x13ef61=_0x3bccce;let _0x186b3d=_0x529823['split'](',')[_0x13ef61(0x153)](_0x115c45=>{var _0x4f73cf=_0x13ef61,_0x38a131,_0x59c12e,_0x417e95,_0x4e5840,_0x38edbd,_0x2a14ec,_0x36ea69,_0x5adcee;try{if(!_0x366540[_0x4f73cf(0x12d)]){let _0x3a90f3=((_0x59c12e=(_0x38a131=_0x366540[_0x4f73cf(0x161)])==null?void 0x0:_0x38a131[_0x4f73cf(0x109)])==null?void 0x0:_0x59c12e[_0x4f73cf(0xf0)])||((_0x4e5840=(_0x417e95=_0x366540[_0x4f73cf(0x161)])==null?void 0x0:_0x417e95[_0x4f73cf(0x19c)])==null?void 0x0:_0x4e5840['NEXT_RUNTIME'])==='edge';(_0x57c670===_0x4f73cf(0x1b8)||_0x57c670===_0x4f73cf(0xed)||_0x57c670===_0x4f73cf(0xf2)||_0x57c670===_0x4f73cf(0xf6))&&(_0x57c670+=_0x3a90f3?_0x4f73cf(0x169):_0x4f73cf(0x142));let _0x14780d='';_0x57c670===_0x4f73cf(0xd9)&&(_0x14780d=(((_0x36ea69=(_0x2a14ec=(_0x38edbd=_0x366540[_0x4f73cf(0x190)])==null?void 0x0:_0x38edbd['modules'])==null?void 0x0:_0x2a14ec[_0x4f73cf(0x19e)])==null?void 0x0:_0x36ea69['osName'])||'emulator')[_0x4f73cf(0x149)](),_0x14780d&&(_0x57c670+='\\x20'+_0x14780d,(_0x14780d===_0x4f73cf(0x151)||_0x14780d===_0x4f73cf(0x131)&&((_0x5adcee=_0x366540['location'])==null?void 0x0:_0x5adcee[_0x4f73cf(0xde)])===_0x4f73cf(0xd0))&&(_0x1ad816=_0x4f73cf(0xd0)))),_0x366540[_0x4f73cf(0x12d)]={'id':+new Date(),'tool':_0x57c670},_0x42454c&&_0x57c670&&!_0x3a90f3&&(_0x14780d?console[_0x4f73cf(0xf9)]('Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20'+_0x14780d+_0x4f73cf(0x154)):console['log']('%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20'+(_0x57c670[_0x4f73cf(0xb9)](0x0)[_0x4f73cf(0x13f)]()+_0x57c670[_0x4f73cf(0xcb)](0x1))+',',_0x4f73cf(0xd6),_0x4f73cf(0xdd)));}let _0x51969a=new z(_0x366540,_0x1ad816,_0x115c45,_0x2cd57a,_0x2877db,_0x5d3dc4);return _0x51969a[_0x4f73cf(0xb8)][_0x4f73cf(0x163)](_0x51969a);}catch(_0x16c9cf){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x16c9cf&&_0x16c9cf[_0x4f73cf(0x1b0)]),()=>{};}});return _0x2d0a9b=>_0x186b3d[_0x13ef61(0xc8)](_0x39c874=>_0x39c874(_0x2d0a9b));}function ne(_0x3070f6,_0x32371d,_0x287e65,_0x4dc2bc){_0x4dc2bc&&_0x3070f6==='reload'&&_0x287e65['location']['reload']();}function b(_0x2c46f3){var _0x3fb916=_0x3bccce,_0x36fdf0,_0xf5f639;let _0x3a2230=function(_0x36c956,_0x559d27){return _0x559d27-_0x36c956;},_0x30376f;if(_0x2c46f3[_0x3fb916(0x15b)])_0x30376f=function(){var _0x5cc7dc=_0x3fb916;return _0x2c46f3[_0x5cc7dc(0x15b)][_0x5cc7dc(0xce)]();};else{if(_0x2c46f3[_0x3fb916(0x161)]&&_0x2c46f3[_0x3fb916(0x161)][_0x3fb916(0x1c6)]&&((_0xf5f639=(_0x36fdf0=_0x2c46f3[_0x3fb916(0x161)])==null?void 0x0:_0x36fdf0[_0x3fb916(0x19c)])==null?void 0x0:_0xf5f639[_0x3fb916(0xc7)])!==_0x3fb916(0xee))_0x30376f=function(){return _0x2c46f3['process']['hrtime']();},_0x3a2230=function(_0x4325b1,_0xb89673){return 0x3e8*(_0xb89673[0x0]-_0x4325b1[0x0])+(_0xb89673[0x1]-_0x4325b1[0x1])/0xf4240;};else try{let {performance:_0x3d3014}=require(_0x3fb916(0xff));_0x30376f=function(){return _0x3d3014['now']();};}catch{_0x30376f=function(){return+new Date();};}}return{'elapsed':_0x3a2230,'timeStamp':_0x30376f,'now':()=>Date['now']()};}function X(_0x59d7d9,_0x563c9a,_0xc9c262){var _0x3ecb33=_0x3bccce,_0x389b48,_0x362b75,_0x5add1b,_0x133dcf,_0x54b544,_0x49acd7,_0x2e6435;if(_0x59d7d9[_0x3ecb33(0xe0)]!==void 0x0)return _0x59d7d9[_0x3ecb33(0xe0)];let _0x59b293=((_0x362b75=(_0x389b48=_0x59d7d9[_0x3ecb33(0x161)])==null?void 0x0:_0x389b48[_0x3ecb33(0x109)])==null?void 0x0:_0x362b75['node'])||((_0x133dcf=(_0x5add1b=_0x59d7d9['process'])==null?void 0x0:_0x5add1b[_0x3ecb33(0x19c)])==null?void 0x0:_0x133dcf[_0x3ecb33(0xc7)])===_0x3ecb33(0xee),_0x4960cb=!!(_0xc9c262===_0x3ecb33(0xd9)&&((_0x54b544=_0x59d7d9[_0x3ecb33(0x190)])==null?void 0x0:_0x54b544[_0x3ecb33(0x133)]));function _0x2499ae(_0x2069c1){var _0x4b89b3=_0x3ecb33;if(_0x2069c1[_0x4b89b3(0x129)]('/')&&_0x2069c1['endsWith']('/')){let _0x4213bf=new RegExp(_0x2069c1[_0x4b89b3(0x104)](0x1,-0x1));return _0x4407d0=>_0x4213bf[_0x4b89b3(0xdb)](_0x4407d0);}else{if(_0x2069c1[_0x4b89b3(0x1bc)]('*')||_0x2069c1[_0x4b89b3(0x1bc)]('?')){let _0x1c99b3=new RegExp('^'+_0x2069c1[_0x4b89b3(0x13d)](/\\./g,String[_0x4b89b3(0xdf)](0x5c)+'.')[_0x4b89b3(0x13d)](/\\*/g,'.*')[_0x4b89b3(0x13d)](/\\?/g,'.')+String[_0x4b89b3(0xdf)](0x24));return _0x71cca3=>_0x1c99b3['test'](_0x71cca3);}else return _0x136229=>_0x136229===_0x2069c1;}}let _0x2694fe=_0x563c9a['map'](_0x2499ae);return _0x59d7d9['_consoleNinjaAllowedToStart']=_0x59b293||!_0x563c9a,!_0x59d7d9[_0x3ecb33(0xe0)]&&((_0x49acd7=_0x59d7d9[_0x3ecb33(0xc3)])==null?void 0x0:_0x49acd7[_0x3ecb33(0xde)])&&(_0x59d7d9['_consoleNinjaAllowedToStart']=_0x2694fe[_0x3ecb33(0x147)](_0x40a30a=>_0x40a30a(_0x59d7d9['location']['hostname']))),_0x4960cb&&!_0x59d7d9[_0x3ecb33(0xe0)]&&!((_0x2e6435=_0x59d7d9['location'])!=null&&_0x2e6435['hostname'])&&(_0x59d7d9[_0x3ecb33(0xe0)]=!0x0),_0x59d7d9[_0x3ecb33(0xe0)];}function J(_0x2ef3dc,_0x374cb9,_0x2adc0c,_0x48da5d,_0x2d63c0,_0x3b6fce){var _0xf1105=_0x3bccce;_0x2ef3dc=_0x2ef3dc,_0x374cb9=_0x374cb9,_0x2adc0c=_0x2adc0c,_0x48da5d=_0x48da5d,_0x2d63c0=_0x2d63c0,_0x2d63c0=_0x2d63c0||{},_0x2d63c0[_0xf1105(0xbe)]=_0x2d63c0[_0xf1105(0xbe)]||{},_0x2d63c0[_0xf1105(0x194)]=_0x2d63c0['reducedLimits']||{},_0x2d63c0['reducePolicy']=_0x2d63c0[_0xf1105(0x11e)]||{},_0x2d63c0[_0xf1105(0x11e)][_0xf1105(0x160)]=_0x2d63c0[_0xf1105(0x11e)]['perLogpoint']||{},_0x2d63c0[_0xf1105(0x11e)][_0xf1105(0xcc)]=_0x2d63c0[_0xf1105(0x11e)][_0xf1105(0xcc)]||{};let _0x184542={'perLogpoint':{'reduceOnCount':_0x2d63c0[_0xf1105(0x11e)][_0xf1105(0x160)][_0xf1105(0x172)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x2d63c0[_0xf1105(0x11e)][_0xf1105(0x160)][_0xf1105(0xe9)]||0x64,'resetWhenQuietMs':_0x2d63c0['reducePolicy'][_0xf1105(0x160)][_0xf1105(0xd8)]||0x1f4,'resetOnProcessingTimeAverageMs':_0x2d63c0[_0xf1105(0x11e)]['perLogpoint'][_0xf1105(0x10e)]||0x64},'global':{'reduceOnCount':_0x2d63c0['reducePolicy']['global'][_0xf1105(0x172)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x2d63c0['reducePolicy'][_0xf1105(0xcc)][_0xf1105(0xe9)]||0x12c,'resetWhenQuietMs':_0x2d63c0[_0xf1105(0x11e)][_0xf1105(0xcc)][_0xf1105(0xd8)]||0x32,'resetOnProcessingTimeAverageMs':_0x2d63c0[_0xf1105(0x11e)]['global'][_0xf1105(0x10e)]||0x64}},_0x4daa0c=b(_0x2ef3dc),_0x56adc0=_0x4daa0c[_0xf1105(0x13b)],_0x27a290=_0x4daa0c[_0xf1105(0xe6)];function _0x4b6695(){var _0x5e8eee=_0xf1105;this[_0x5e8eee(0x187)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x5e8eee(0x111)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x5e8eee(0xeb)]=_0x2ef3dc[_0x5e8eee(0xe7)],this[_0x5e8eee(0x193)]=_0x2ef3dc[_0x5e8eee(0x16b)],this['_getOwnPropertyDescriptor']=Object[_0x5e8eee(0x176)],this[_0x5e8eee(0x113)]=Object[_0x5e8eee(0x175)],this[_0x5e8eee(0x1b2)]=_0x2ef3dc['Symbol'],this[_0x5e8eee(0xcd)]=RegExp[_0x5e8eee(0x146)][_0x5e8eee(0x1a5)],this[_0x5e8eee(0x1b5)]=Date[_0x5e8eee(0x146)][_0x5e8eee(0x1a5)];}_0x4b6695['prototype'][_0xf1105(0x140)]=function(_0x3261e7,_0x2a85a5,_0x3cae09,_0x3665c0){var _0x1b56af=_0xf1105,_0x480b53=this,_0x318937=_0x3cae09[_0x1b56af(0x117)];function _0x3c86d9(_0x3a7ae5,_0x2f6d30,_0x51459e){var _0x4403e2=_0x1b56af;_0x2f6d30[_0x4403e2(0x108)]='unknown',_0x2f6d30[_0x4403e2(0x1bb)]=_0x3a7ae5['message'],_0x48ae90=_0x51459e[_0x4403e2(0xf0)][_0x4403e2(0x15d)],_0x51459e[_0x4403e2(0xf0)]['current']=_0x2f6d30,_0x480b53[_0x4403e2(0x191)](_0x2f6d30,_0x51459e);}let _0x4d5312,_0x366e19,_0x4e293d=_0x2ef3dc['ninjaSuppressConsole'];_0x2ef3dc[_0x1b56af(0x103)]=!0x0,_0x2ef3dc[_0x1b56af(0xd2)]&&(_0x4d5312=_0x2ef3dc['console'][_0x1b56af(0x1bb)],_0x366e19=_0x2ef3dc[_0x1b56af(0xd2)][_0x1b56af(0xbc)],_0x4d5312&&(_0x2ef3dc[_0x1b56af(0xd2)][_0x1b56af(0x1bb)]=function(){}),_0x366e19&&(_0x2ef3dc[_0x1b56af(0xd2)]['warn']=function(){}));try{try{_0x3cae09['level']++,_0x3cae09[_0x1b56af(0x117)]&&_0x3cae09[_0x1b56af(0x192)][_0x1b56af(0x12b)](_0x2a85a5);var _0x2b9bff,_0x365e06,_0x51eada,_0x2f7f6b,_0x395c4d=[],_0x2430fe=[],_0x31200e,_0x21f5bd=this[_0x1b56af(0x16f)](_0x2a85a5),_0x1de47f=_0x21f5bd===_0x1b56af(0x181),_0x6d9a23=!0x1,_0x4d80ed=_0x21f5bd===_0x1b56af(0x1aa),_0x221405=this[_0x1b56af(0x145)](_0x21f5bd),_0x142872=this[_0x1b56af(0x14f)](_0x21f5bd),_0x53c606=_0x221405||_0x142872,_0x3928e5={},_0x5f3923=0x0,_0x1a3a29=!0x1,_0x48ae90,_0x4ef1ce=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x3cae09['depth']){if(_0x1de47f){if(_0x365e06=_0x2a85a5['length'],_0x365e06>_0x3cae09[_0x1b56af(0x116)]){for(_0x51eada=0x0,_0x2f7f6b=_0x3cae09[_0x1b56af(0x116)],_0x2b9bff=_0x51eada;_0x2b9bff<_0x2f7f6b;_0x2b9bff++)_0x2430fe[_0x1b56af(0x12b)](_0x480b53[_0x1b56af(0x189)](_0x395c4d,_0x2a85a5,_0x21f5bd,_0x2b9bff,_0x3cae09));_0x3261e7[_0x1b56af(0x11a)]=!0x0;}else{for(_0x51eada=0x0,_0x2f7f6b=_0x365e06,_0x2b9bff=_0x51eada;_0x2b9bff<_0x2f7f6b;_0x2b9bff++)_0x2430fe[_0x1b56af(0x12b)](_0x480b53[_0x1b56af(0x189)](_0x395c4d,_0x2a85a5,_0x21f5bd,_0x2b9bff,_0x3cae09));}_0x3cae09[_0x1b56af(0x16d)]+=_0x2430fe[_0x1b56af(0x15e)];}if(!(_0x21f5bd===_0x1b56af(0xd7)||_0x21f5bd===_0x1b56af(0xe7))&&!_0x221405&&_0x21f5bd!=='String'&&_0x21f5bd!==_0x1b56af(0xb5)&&_0x21f5bd!==_0x1b56af(0x156)){var _0x42574d=_0x3665c0[_0x1b56af(0x110)]||_0x3cae09[_0x1b56af(0x110)];if(this[_0x1b56af(0x152)](_0x2a85a5)?(_0x2b9bff=0x0,_0x2a85a5[_0x1b56af(0xc8)](function(_0x1fe9c2){var _0x34f0dd=_0x1b56af;if(_0x5f3923++,_0x3cae09[_0x34f0dd(0x16d)]++,_0x5f3923>_0x42574d){_0x1a3a29=!0x0;return;}if(!_0x3cae09[_0x34f0dd(0x1af)]&&_0x3cae09[_0x34f0dd(0x117)]&&_0x3cae09[_0x34f0dd(0x16d)]>_0x3cae09[_0x34f0dd(0x1a6)]){_0x1a3a29=!0x0;return;}_0x2430fe['push'](_0x480b53['_addProperty'](_0x395c4d,_0x2a85a5,_0x34f0dd(0xfa),_0x2b9bff++,_0x3cae09,function(_0x1073eb){return function(){return _0x1073eb;};}(_0x1fe9c2)));})):this[_0x1b56af(0xfd)](_0x2a85a5)&&_0x2a85a5['forEach'](function(_0x9aea6,_0x3dacb6){var _0x57160a=_0x1b56af;if(_0x5f3923++,_0x3cae09[_0x57160a(0x16d)]++,_0x5f3923>_0x42574d){_0x1a3a29=!0x0;return;}if(!_0x3cae09[_0x57160a(0x1af)]&&_0x3cae09[_0x57160a(0x117)]&&_0x3cae09[_0x57160a(0x16d)]>_0x3cae09[_0x57160a(0x1a6)]){_0x1a3a29=!0x0;return;}var _0x443b52=_0x3dacb6[_0x57160a(0x1a5)]();_0x443b52[_0x57160a(0x15e)]>0x64&&(_0x443b52=_0x443b52[_0x57160a(0x104)](0x0,0x64)+_0x57160a(0x1c3)),_0x2430fe[_0x57160a(0x12b)](_0x480b53[_0x57160a(0x189)](_0x395c4d,_0x2a85a5,'Map',_0x443b52,_0x3cae09,function(_0x1c464c){return function(){return _0x1c464c;};}(_0x9aea6)));}),!_0x6d9a23){try{for(_0x31200e in _0x2a85a5)if(!(_0x1de47f&&_0x4ef1ce[_0x1b56af(0xdb)](_0x31200e))&&!this[_0x1b56af(0x1bd)](_0x2a85a5,_0x31200e,_0x3cae09)){if(_0x5f3923++,_0x3cae09[_0x1b56af(0x16d)]++,_0x5f3923>_0x42574d){_0x1a3a29=!0x0;break;}if(!_0x3cae09[_0x1b56af(0x1af)]&&_0x3cae09['autoExpand']&&_0x3cae09[_0x1b56af(0x16d)]>_0x3cae09[_0x1b56af(0x1a6)]){_0x1a3a29=!0x0;break;}_0x2430fe['push'](_0x480b53[_0x1b56af(0x138)](_0x395c4d,_0x3928e5,_0x2a85a5,_0x21f5bd,_0x31200e,_0x3cae09));}}catch{}if(_0x3928e5[_0x1b56af(0x15f)]=!0x0,_0x4d80ed&&(_0x3928e5['_p_name']=!0x0),!_0x1a3a29){var _0x281cac=[][_0x1b56af(0xd3)](this[_0x1b56af(0x113)](_0x2a85a5))[_0x1b56af(0xd3)](this[_0x1b56af(0xf1)](_0x2a85a5));for(_0x2b9bff=0x0,_0x365e06=_0x281cac[_0x1b56af(0x15e)];_0x2b9bff<_0x365e06;_0x2b9bff++)if(_0x31200e=_0x281cac[_0x2b9bff],!(_0x1de47f&&_0x4ef1ce[_0x1b56af(0xdb)](_0x31200e[_0x1b56af(0x1a5)]()))&&!this[_0x1b56af(0x1bd)](_0x2a85a5,_0x31200e,_0x3cae09)&&!_0x3928e5[typeof _0x31200e!=_0x1b56af(0x14c)?_0x1b56af(0x115)+_0x31200e['toString']():_0x31200e]){if(_0x5f3923++,_0x3cae09[_0x1b56af(0x16d)]++,_0x5f3923>_0x42574d){_0x1a3a29=!0x0;break;}if(!_0x3cae09[_0x1b56af(0x1af)]&&_0x3cae09[_0x1b56af(0x117)]&&_0x3cae09[_0x1b56af(0x16d)]>_0x3cae09[_0x1b56af(0x1a6)]){_0x1a3a29=!0x0;break;}_0x2430fe['push'](_0x480b53['_addObjectProperty'](_0x395c4d,_0x3928e5,_0x2a85a5,_0x21f5bd,_0x31200e,_0x3cae09));}}}}}if(_0x3261e7['type']=_0x21f5bd,_0x53c606?(_0x3261e7[_0x1b56af(0x18a)]=_0x2a85a5[_0x1b56af(0x12f)](),this['_capIfString'](_0x21f5bd,_0x3261e7,_0x3cae09,_0x3665c0)):_0x21f5bd===_0x1b56af(0x1bf)?_0x3261e7[_0x1b56af(0x18a)]=this['_dateToString'][_0x1b56af(0x1ab)](_0x2a85a5):_0x21f5bd===_0x1b56af(0x156)?_0x3261e7['value']=_0x2a85a5[_0x1b56af(0x1a5)]():_0x21f5bd===_0x1b56af(0xc1)?_0x3261e7[_0x1b56af(0x18a)]=this[_0x1b56af(0xcd)][_0x1b56af(0x1ab)](_0x2a85a5):_0x21f5bd===_0x1b56af(0x14c)&&this['_Symbol']?_0x3261e7[_0x1b56af(0x18a)]=this[_0x1b56af(0x1b2)]['prototype'][_0x1b56af(0x1a5)][_0x1b56af(0x1ab)](_0x2a85a5):!_0x3cae09[_0x1b56af(0x1b9)]&&!(_0x21f5bd===_0x1b56af(0xd7)||_0x21f5bd===_0x1b56af(0xe7))&&(delete _0x3261e7['value'],_0x3261e7[_0x1b56af(0x144)]=!0x0),_0x1a3a29&&(_0x3261e7[_0x1b56af(0x197)]=!0x0),_0x48ae90=_0x3cae09['node'][_0x1b56af(0x15d)],_0x3cae09[_0x1b56af(0xf0)]['current']=_0x3261e7,this[_0x1b56af(0x191)](_0x3261e7,_0x3cae09),_0x2430fe['length']){for(_0x2b9bff=0x0,_0x365e06=_0x2430fe['length'];_0x2b9bff<_0x365e06;_0x2b9bff++)_0x2430fe[_0x2b9bff](_0x2b9bff);}_0x395c4d['length']&&(_0x3261e7['props']=_0x395c4d);}catch(_0x31e085){_0x3c86d9(_0x31e085,_0x3261e7,_0x3cae09);}this[_0x1b56af(0x136)](_0x2a85a5,_0x3261e7),this[_0x1b56af(0x195)](_0x3261e7,_0x3cae09),_0x3cae09[_0x1b56af(0xf0)][_0x1b56af(0x15d)]=_0x48ae90,_0x3cae09[_0x1b56af(0x1b7)]--,_0x3cae09[_0x1b56af(0x117)]=_0x318937,_0x3cae09[_0x1b56af(0x117)]&&_0x3cae09['autoExpandPreviousObjects']['pop']();}finally{_0x4d5312&&(_0x2ef3dc['console'][_0x1b56af(0x1bb)]=_0x4d5312),_0x366e19&&(_0x2ef3dc[_0x1b56af(0xd2)][_0x1b56af(0xbc)]=_0x366e19),_0x2ef3dc[_0x1b56af(0x103)]=_0x4e293d;}return _0x3261e7;},_0x4b6695['prototype'][_0xf1105(0xf1)]=function(_0x2dffd5){var _0x36e625=_0xf1105;return Object['getOwnPropertySymbols']?Object[_0x36e625(0xfe)](_0x2dffd5):[];},_0x4b6695[_0xf1105(0x146)][_0xf1105(0x152)]=function(_0x38b8f3){var _0x1dc055=_0xf1105;return!!(_0x38b8f3&&_0x2ef3dc['Set']&&this[_0x1dc055(0x102)](_0x38b8f3)===_0x1dc055(0x11d)&&_0x38b8f3[_0x1dc055(0xc8)]);},_0x4b6695[_0xf1105(0x146)][_0xf1105(0x1bd)]=function(_0x2e1402,_0x599573,_0x327e2a){var _0x266432=_0xf1105;if(!_0x327e2a[_0x266432(0x164)]){let _0x4a8695=this[_0x266432(0x180)](_0x2e1402,_0x599573);if(_0x4a8695&&_0x4a8695[_0x266432(0x16c)])return!0x0;}return _0x327e2a['noFunctions']?typeof _0x2e1402[_0x599573]==_0x266432(0x1aa):!0x1;},_0x4b6695[_0xf1105(0x146)][_0xf1105(0x16f)]=function(_0x17d3cd){var _0x33bb02=_0xf1105,_0x51eeb7='';return _0x51eeb7=typeof _0x17d3cd,_0x51eeb7==='object'?this[_0x33bb02(0x102)](_0x17d3cd)===_0x33bb02(0x167)?_0x51eeb7='array':this[_0x33bb02(0x102)](_0x17d3cd)===_0x33bb02(0x17b)?_0x51eeb7=_0x33bb02(0x1bf):this[_0x33bb02(0x102)](_0x17d3cd)===_0x33bb02(0x1b4)?_0x51eeb7='bigint':_0x17d3cd===null?_0x51eeb7='null':_0x17d3cd[_0x33bb02(0x101)]&&(_0x51eeb7=_0x17d3cd[_0x33bb02(0x101)]['name']||_0x51eeb7):_0x51eeb7===_0x33bb02(0xe7)&&this['_HTMLAllCollection']&&_0x17d3cd instanceof this[_0x33bb02(0x193)]&&(_0x51eeb7=_0x33bb02(0x16b)),_0x51eeb7;},_0x4b6695['prototype'][_0xf1105(0x102)]=function(_0x599a50){var _0x1c1569=_0xf1105;return Object[_0x1c1569(0x146)][_0x1c1569(0x1a5)]['call'](_0x599a50);},_0x4b6695[_0xf1105(0x146)][_0xf1105(0x145)]=function(_0x981ad6){var _0x3765e0=_0xf1105;return _0x981ad6===_0x3765e0(0x123)||_0x981ad6==='string'||_0x981ad6==='number';},_0x4b6695[_0xf1105(0x146)]['_isPrimitiveWrapperType']=function(_0x587693){var _0x56b72b=_0xf1105;return _0x587693===_0x56b72b(0xba)||_0x587693==='String'||_0x587693===_0x56b72b(0xf7);},_0x4b6695[_0xf1105(0x146)][_0xf1105(0x189)]=function(_0x5315b6,_0x963e84,_0x1d7c45,_0x2640dd,_0x429168,_0x476f09){var _0x593df4=this;return function(_0x10cfd6){var _0x59774c=_0x3f31,_0x557bef=_0x429168[_0x59774c(0xf0)]['current'],_0x402196=_0x429168[_0x59774c(0xf0)]['index'],_0x4d62aa=_0x429168[_0x59774c(0xf0)][_0x59774c(0xe5)];_0x429168[_0x59774c(0xf0)][_0x59774c(0xe5)]=_0x557bef,_0x429168[_0x59774c(0xf0)][_0x59774c(0x105)]=typeof _0x2640dd==_0x59774c(0xe1)?_0x2640dd:_0x10cfd6,_0x5315b6['push'](_0x593df4[_0x59774c(0xca)](_0x963e84,_0x1d7c45,_0x2640dd,_0x429168,_0x476f09)),_0x429168['node'][_0x59774c(0xe5)]=_0x4d62aa,_0x429168['node'][_0x59774c(0x105)]=_0x402196;};},_0x4b6695[_0xf1105(0x146)]['_addObjectProperty']=function(_0x4a7321,_0x51f979,_0x4c6bab,_0x5d94c7,_0x27c326,_0x597901,_0x34f06d){var _0x2a8b1a=_0xf1105,_0x2652ab=this;return _0x51f979[typeof _0x27c326!=_0x2a8b1a(0x14c)?'_p_'+_0x27c326[_0x2a8b1a(0x1a5)]():_0x27c326]=!0x0,function(_0x3b6cce){var _0x26f7b0=_0x2a8b1a,_0x357f84=_0x597901['node'][_0x26f7b0(0x15d)],_0x16e668=_0x597901[_0x26f7b0(0xf0)][_0x26f7b0(0x105)],_0x2b6940=_0x597901['node'][_0x26f7b0(0xe5)];_0x597901['node'][_0x26f7b0(0xe5)]=_0x357f84,_0x597901[_0x26f7b0(0xf0)][_0x26f7b0(0x105)]=_0x3b6cce,_0x4a7321[_0x26f7b0(0x12b)](_0x2652ab[_0x26f7b0(0xca)](_0x4c6bab,_0x5d94c7,_0x27c326,_0x597901,_0x34f06d)),_0x597901[_0x26f7b0(0xf0)][_0x26f7b0(0xe5)]=_0x2b6940,_0x597901[_0x26f7b0(0xf0)][_0x26f7b0(0x105)]=_0x16e668;};},_0x4b6695[_0xf1105(0x146)][_0xf1105(0xca)]=function(_0x5a4ee8,_0x46576b,_0x4a16f5,_0x363bf8,_0x5691f8){var _0x3dbbb9=_0xf1105,_0x1dae2c=this;_0x5691f8||(_0x5691f8=function(_0x407398,_0x12cce1){return _0x407398[_0x12cce1];});var _0x1775e5=_0x4a16f5[_0x3dbbb9(0x1a5)](),_0x5a1af9=_0x363bf8['expressionsToEvaluate']||{},_0x538d1f=_0x363bf8[_0x3dbbb9(0x1b9)],_0xeadf82=_0x363bf8[_0x3dbbb9(0x1af)];try{var _0x239d4c=this['_isMap'](_0x5a4ee8),_0x3fa586=_0x1775e5;_0x239d4c&&_0x3fa586[0x0]==='\\x27'&&(_0x3fa586=_0x3fa586[_0x3dbbb9(0xcb)](0x1,_0x3fa586[_0x3dbbb9(0x15e)]-0x2));var _0x4d3d53=_0x363bf8[_0x3dbbb9(0x1a1)]=_0x5a1af9[_0x3dbbb9(0x115)+_0x3fa586];_0x4d3d53&&(_0x363bf8[_0x3dbbb9(0x1b9)]=_0x363bf8[_0x3dbbb9(0x1b9)]+0x1),_0x363bf8['isExpressionToEvaluate']=!!_0x4d3d53;var _0x1e90e1=typeof _0x4a16f5==_0x3dbbb9(0x14c),_0x5557fc={'name':_0x1e90e1||_0x239d4c?_0x1775e5:this[_0x3dbbb9(0x162)](_0x1775e5)};if(_0x1e90e1&&(_0x5557fc[_0x3dbbb9(0x14c)]=!0x0),!(_0x46576b===_0x3dbbb9(0x181)||_0x46576b===_0x3dbbb9(0x13e))){var _0x2322a4=this[_0x3dbbb9(0x180)](_0x5a4ee8,_0x4a16f5);if(_0x2322a4&&(_0x2322a4['set']&&(_0x5557fc[_0x3dbbb9(0x124)]=!0x0),_0x2322a4[_0x3dbbb9(0x16c)]&&!_0x4d3d53&&!_0x363bf8[_0x3dbbb9(0x164)]))return _0x5557fc[_0x3dbbb9(0x184)]=!0x0,this[_0x3dbbb9(0x137)](_0x5557fc,_0x363bf8),_0x5557fc;}var _0x480f9e;try{_0x480f9e=_0x5691f8(_0x5a4ee8,_0x4a16f5);}catch(_0x669526){return _0x5557fc={'name':_0x1775e5,'type':_0x3dbbb9(0x17d),'error':_0x669526[_0x3dbbb9(0x1b0)]},this[_0x3dbbb9(0x137)](_0x5557fc,_0x363bf8),_0x5557fc;}var _0x4afb8b=this[_0x3dbbb9(0x16f)](_0x480f9e),_0x125bef=this['_isPrimitiveType'](_0x4afb8b);if(_0x5557fc[_0x3dbbb9(0x108)]=_0x4afb8b,_0x125bef)this[_0x3dbbb9(0x137)](_0x5557fc,_0x363bf8,_0x480f9e,function(){_0x5557fc['value']=_0x480f9e['valueOf'](),!_0x4d3d53&&_0x1dae2c['_capIfString'](_0x4afb8b,_0x5557fc,_0x363bf8,{});});else{var _0x26d191=_0x363bf8[_0x3dbbb9(0x117)]&&_0x363bf8[_0x3dbbb9(0x1b7)]<_0x363bf8['autoExpandMaxDepth']&&_0x363bf8[_0x3dbbb9(0x192)][_0x3dbbb9(0x182)](_0x480f9e)<0x0&&_0x4afb8b!==_0x3dbbb9(0x1aa)&&_0x363bf8[_0x3dbbb9(0x16d)]<_0x363bf8['autoExpandLimit'];_0x26d191||_0x363bf8[_0x3dbbb9(0x1b7)]<_0x538d1f||_0x4d3d53?this[_0x3dbbb9(0x140)](_0x5557fc,_0x480f9e,_0x363bf8,_0x4d3d53||{}):this[_0x3dbbb9(0x137)](_0x5557fc,_0x363bf8,_0x480f9e,function(){var _0x33aa2d=_0x3dbbb9;_0x4afb8b===_0x33aa2d(0xd7)||_0x4afb8b==='undefined'||(delete _0x5557fc[_0x33aa2d(0x18a)],_0x5557fc['capped']=!0x0);});}return _0x5557fc;}finally{_0x363bf8[_0x3dbbb9(0x1a1)]=_0x5a1af9,_0x363bf8[_0x3dbbb9(0x1b9)]=_0x538d1f,_0x363bf8[_0x3dbbb9(0x1af)]=_0xeadf82;}},_0x4b6695[_0xf1105(0x146)]['_capIfString']=function(_0x2712b6,_0x5ecf0a,_0x5823db,_0x584ac9){var _0x295ac6=_0xf1105,_0x1f41d6=_0x584ac9[_0x295ac6(0x173)]||_0x5823db[_0x295ac6(0x173)];if((_0x2712b6===_0x295ac6(0x1a3)||_0x2712b6===_0x295ac6(0x1ac))&&_0x5ecf0a['value']){let _0x4c36ee=_0x5ecf0a[_0x295ac6(0x18a)]['length'];_0x5823db[_0x295ac6(0x15a)]+=_0x4c36ee,_0x5823db[_0x295ac6(0x15a)]>_0x5823db[_0x295ac6(0x14b)]?(_0x5ecf0a['capped']='',delete _0x5ecf0a[_0x295ac6(0x18a)]):_0x4c36ee>_0x1f41d6&&(_0x5ecf0a[_0x295ac6(0x144)]=_0x5ecf0a['value']['substr'](0x0,_0x1f41d6),delete _0x5ecf0a[_0x295ac6(0x18a)]);}},_0x4b6695[_0xf1105(0x146)][_0xf1105(0xfd)]=function(_0x3c4107){var _0x3201a3=_0xf1105;return!!(_0x3c4107&&_0x2ef3dc[_0x3201a3(0x126)]&&this[_0x3201a3(0x102)](_0x3c4107)===_0x3201a3(0x10a)&&_0x3c4107['forEach']);},_0x4b6695[_0xf1105(0x146)]['_propertyName']=function(_0x4f24bf){var _0x28c62a=_0xf1105;if(_0x4f24bf[_0x28c62a(0x107)](/^\\d+$/))return _0x4f24bf;var _0x2ed853;try{_0x2ed853=JSON[_0x28c62a(0xbd)](''+_0x4f24bf);}catch{_0x2ed853='\\x22'+this[_0x28c62a(0x102)](_0x4f24bf)+'\\x22';}return _0x2ed853['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x2ed853=_0x2ed853[_0x28c62a(0xcb)](0x1,_0x2ed853[_0x28c62a(0x15e)]-0x2):_0x2ed853=_0x2ed853[_0x28c62a(0x13d)](/'/g,'\\x5c\\x27')['replace'](/\\\\"/g,'\\x22')['replace'](/(^"|"$)/g,'\\x27'),_0x2ed853;},_0x4b6695['prototype'][_0xf1105(0x137)]=function(_0x1d3d3a,_0x1021e5,_0x15f618,_0x4429f5){var _0x538813=_0xf1105;this[_0x538813(0x191)](_0x1d3d3a,_0x1021e5),_0x4429f5&&_0x4429f5(),this[_0x538813(0x136)](_0x15f618,_0x1d3d3a),this[_0x538813(0x195)](_0x1d3d3a,_0x1021e5);},_0x4b6695[_0xf1105(0x146)][_0xf1105(0x191)]=function(_0x4e9752,_0x45cd5c){var _0xdedfe4=_0xf1105;this['_setNodeId'](_0x4e9752,_0x45cd5c),this[_0xdedfe4(0x10d)](_0x4e9752,_0x45cd5c),this['_setNodeExpressionPath'](_0x4e9752,_0x45cd5c),this['_setNodePermissions'](_0x4e9752,_0x45cd5c);},_0x4b6695[_0xf1105(0x146)][_0xf1105(0xc4)]=function(_0x522053,_0x233fb7){},_0x4b6695[_0xf1105(0x146)][_0xf1105(0x10d)]=function(_0x3cd83a,_0x33e46b){},_0x4b6695[_0xf1105(0x146)][_0xf1105(0x1b6)]=function(_0x1df63c,_0x4c9023){},_0x4b6695[_0xf1105(0x146)][_0xf1105(0x1c4)]=function(_0x447c56){return _0x447c56===this['_undefined'];},_0x4b6695[_0xf1105(0x146)][_0xf1105(0x195)]=function(_0x37008c,_0x582d37){var _0x6feac6=_0xf1105;this['_setNodeLabel'](_0x37008c,_0x582d37),this['_setNodeExpandableState'](_0x37008c),_0x582d37[_0x6feac6(0x128)]&&this[_0x6feac6(0x158)](_0x37008c),this[_0x6feac6(0x10f)](_0x37008c,_0x582d37),this[_0x6feac6(0x139)](_0x37008c,_0x582d37),this[_0x6feac6(0x157)](_0x37008c);},_0x4b6695[_0xf1105(0x146)][_0xf1105(0x136)]=function(_0x11d9f1,_0x18aa13){var _0x572668=_0xf1105;try{_0x11d9f1&&typeof _0x11d9f1['length']==_0x572668(0xe1)&&(_0x18aa13[_0x572668(0x15e)]=_0x11d9f1[_0x572668(0x15e)]);}catch{}if(_0x18aa13[_0x572668(0x108)]===_0x572668(0xe1)||_0x18aa13[_0x572668(0x108)]===_0x572668(0xf7)){if(isNaN(_0x18aa13[_0x572668(0x18a)]))_0x18aa13[_0x572668(0x120)]=!0x0,delete _0x18aa13[_0x572668(0x18a)];else switch(_0x18aa13[_0x572668(0x18a)]){case Number[_0x572668(0x19f)]:_0x18aa13[_0x572668(0xf8)]=!0x0,delete _0x18aa13['value'];break;case Number[_0x572668(0x18b)]:_0x18aa13[_0x572668(0x119)]=!0x0,delete _0x18aa13[_0x572668(0x18a)];break;case 0x0:this[_0x572668(0x19d)](_0x18aa13['value'])&&(_0x18aa13[_0x572668(0x1b1)]=!0x0);break;}}else _0x18aa13['type']===_0x572668(0x1aa)&&typeof _0x11d9f1['name']==_0x572668(0x1a3)&&_0x11d9f1[_0x572668(0xef)]&&_0x18aa13['name']&&_0x11d9f1['name']!==_0x18aa13[_0x572668(0xef)]&&(_0x18aa13[_0x572668(0x1a4)]=_0x11d9f1[_0x572668(0xef)]);},_0x4b6695['prototype'][_0xf1105(0x19d)]=function(_0x43322c){var _0xec3877=_0xf1105;return 0x1/_0x43322c===Number[_0xec3877(0x18b)];},_0x4b6695[_0xf1105(0x146)]['_sortProps']=function(_0x14e6e9){var _0x19519e=_0xf1105;!_0x14e6e9[_0x19519e(0x110)]||!_0x14e6e9[_0x19519e(0x110)][_0x19519e(0x15e)]||_0x14e6e9['type']===_0x19519e(0x181)||_0x14e6e9[_0x19519e(0x108)]==='Map'||_0x14e6e9[_0x19519e(0x108)]==='Set'||_0x14e6e9[_0x19519e(0x110)]['sort'](function(_0x7dcfd2,_0x156d16){var _0x588999=_0x19519e,_0x1d0be9=_0x7dcfd2[_0x588999(0xef)]['toLowerCase'](),_0x58196a=_0x156d16[_0x588999(0xef)][_0x588999(0x149)]();return _0x1d0be9<_0x58196a?-0x1:_0x1d0be9>_0x58196a?0x1:0x0;});},_0x4b6695['prototype'][_0xf1105(0x10f)]=function(_0x194763,_0x2be225){var _0x43b3d9=_0xf1105;if(!(_0x2be225[_0x43b3d9(0x183)]||!_0x194763[_0x43b3d9(0x110)]||!_0x194763[_0x43b3d9(0x110)][_0x43b3d9(0x15e)])){for(var _0x275593=[],_0x302734=[],_0x2c0053=0x0,_0x156b23=_0x194763['props']['length'];_0x2c0053<_0x156b23;_0x2c0053++){var _0x29bc21=_0x194763[_0x43b3d9(0x110)][_0x2c0053];_0x29bc21[_0x43b3d9(0x108)]===_0x43b3d9(0x1aa)?_0x275593[_0x43b3d9(0x12b)](_0x29bc21):_0x302734[_0x43b3d9(0x12b)](_0x29bc21);}if(!(!_0x302734[_0x43b3d9(0x15e)]||_0x275593[_0x43b3d9(0x15e)]<=0x1)){_0x194763[_0x43b3d9(0x110)]=_0x302734;var _0x10b4f4={'functionsNode':!0x0,'props':_0x275593};this['_setNodeId'](_0x10b4f4,_0x2be225),this[_0x43b3d9(0x1b6)](_0x10b4f4,_0x2be225),this['_setNodeExpandableState'](_0x10b4f4),this[_0x43b3d9(0xc5)](_0x10b4f4,_0x2be225),_0x10b4f4['id']+='\\x20f',_0x194763['props'][_0x43b3d9(0x1a2)](_0x10b4f4);}}},_0x4b6695[_0xf1105(0x146)]['_addLoadNode']=function(_0x59c2cf,_0x5c7199){},_0x4b6695[_0xf1105(0x146)]['_setNodeExpandableState']=function(_0x3a2618){},_0x4b6695[_0xf1105(0x146)][_0xf1105(0x18d)]=function(_0x161e22){var _0x56bf19=_0xf1105;return Array[_0x56bf19(0x112)](_0x161e22)||typeof _0x161e22==_0x56bf19(0x12a)&&this[_0x56bf19(0x102)](_0x161e22)===_0x56bf19(0x167);},_0x4b6695[_0xf1105(0x146)][_0xf1105(0xc5)]=function(_0x4dd36f,_0x895f0e){},_0x4b6695[_0xf1105(0x146)]['_cleanNode']=function(_0x180c30){var _0x427a41=_0xf1105;delete _0x180c30[_0x427a41(0xd4)],delete _0x180c30[_0x427a41(0x125)],delete _0x180c30['_hasMapOnItsPath'];},_0x4b6695['prototype'][_0xf1105(0x12c)]=function(_0xacf1dc,_0xc0a93c){};let _0x1a4db7=new _0x4b6695(),_0x5ed964={'props':_0x2d63c0[_0xf1105(0xbe)][_0xf1105(0x110)]||0x64,'elements':_0x2d63c0[_0xf1105(0xbe)][_0xf1105(0x116)]||0x64,'strLength':_0x2d63c0[_0xf1105(0xbe)][_0xf1105(0x173)]||0x400*0x32,'totalStrLength':_0x2d63c0['defaultLimits'][_0xf1105(0x14b)]||0x400*0x32,'autoExpandLimit':_0x2d63c0[_0xf1105(0xbe)]['autoExpandLimit']||0x1388,'autoExpandMaxDepth':_0x2d63c0[_0xf1105(0xbe)][_0xf1105(0x148)]||0xa},_0x488ffc={'props':_0x2d63c0[_0xf1105(0x194)][_0xf1105(0x110)]||0x5,'elements':_0x2d63c0[_0xf1105(0x194)][_0xf1105(0x116)]||0x5,'strLength':_0x2d63c0['reducedLimits'][_0xf1105(0x173)]||0x100,'totalStrLength':_0x2d63c0['reducedLimits']['totalStrLength']||0x100*0x3,'autoExpandLimit':_0x2d63c0[_0xf1105(0x194)]['autoExpandLimit']||0x1e,'autoExpandMaxDepth':_0x2d63c0[_0xf1105(0x194)][_0xf1105(0x148)]||0x2};if(_0x3b6fce){let _0x404c58=_0x1a4db7[_0xf1105(0x140)][_0xf1105(0x163)](_0x1a4db7);_0x1a4db7[_0xf1105(0x140)]=function(_0x37de55,_0x26cce8,_0x774d4d,_0xc4a132){return _0x404c58(_0x37de55,_0x3b6fce(_0x26cce8),_0x774d4d,_0xc4a132);};}function _0x41cd13(_0x391559,_0x4c8a60,_0x10cc53,_0x13add4,_0x3812a8,_0x34b8b7){var _0x8bf13b=_0xf1105;let _0x340869,_0x362f9a;try{_0x362f9a=_0x27a290(),_0x340869=_0x2adc0c[_0x4c8a60],!_0x340869||_0x362f9a-_0x340869['ts']>_0x184542[_0x8bf13b(0x160)][_0x8bf13b(0xd8)]&&_0x340869['count']&&_0x340869[_0x8bf13b(0x150)]/_0x340869[_0x8bf13b(0x178)]<_0x184542[_0x8bf13b(0x160)]['resetOnProcessingTimeAverageMs']?(_0x2adc0c[_0x4c8a60]=_0x340869={'count':0x0,'time':0x0,'ts':_0x362f9a},_0x2adc0c[_0x8bf13b(0x199)]={}):_0x362f9a-_0x2adc0c['hits']['ts']>_0x184542[_0x8bf13b(0xcc)]['resetWhenQuietMs']&&_0x2adc0c['hits']['count']&&_0x2adc0c['hits'][_0x8bf13b(0x150)]/_0x2adc0c['hits'][_0x8bf13b(0x178)]<_0x184542['global'][_0x8bf13b(0x10e)]&&(_0x2adc0c[_0x8bf13b(0x199)]={});let _0x3a50f0=[],_0x92428a=_0x340869[_0x8bf13b(0x1a0)]||_0x2adc0c[_0x8bf13b(0x199)]['reduceLimits']?_0x488ffc:_0x5ed964,_0x24a6a1=_0x242403=>{var _0x33d1d6=_0x8bf13b;let _0xaa7ad1={};return _0xaa7ad1[_0x33d1d6(0x110)]=_0x242403['props'],_0xaa7ad1['elements']=_0x242403['elements'],_0xaa7ad1[_0x33d1d6(0x173)]=_0x242403[_0x33d1d6(0x173)],_0xaa7ad1['totalStrLength']=_0x242403['totalStrLength'],_0xaa7ad1['autoExpandLimit']=_0x242403[_0x33d1d6(0x1a6)],_0xaa7ad1[_0x33d1d6(0x148)]=_0x242403[_0x33d1d6(0x148)],_0xaa7ad1[_0x33d1d6(0x128)]=!0x1,_0xaa7ad1[_0x33d1d6(0x183)]=!_0x374cb9,_0xaa7ad1['depth']=0x1,_0xaa7ad1['level']=0x0,_0xaa7ad1['expId']=_0x33d1d6(0x171),_0xaa7ad1['rootExpression']=_0x33d1d6(0x132),_0xaa7ad1[_0x33d1d6(0x117)]=!0x0,_0xaa7ad1[_0x33d1d6(0x192)]=[],_0xaa7ad1['autoExpandPropertyCount']=0x0,_0xaa7ad1[_0x33d1d6(0x164)]=_0x2d63c0[_0x33d1d6(0x164)],_0xaa7ad1['allStrLength']=0x0,_0xaa7ad1[_0x33d1d6(0xf0)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0xaa7ad1;};for(var _0x5bd495=0x0;_0x5bd495<_0x3812a8[_0x8bf13b(0x15e)];_0x5bd495++)_0x3a50f0[_0x8bf13b(0x12b)](_0x1a4db7[_0x8bf13b(0x140)]({'timeNode':_0x391559===_0x8bf13b(0x150)||void 0x0},_0x3812a8[_0x5bd495],_0x24a6a1(_0x92428a),{}));if(_0x391559==='trace'||_0x391559===_0x8bf13b(0x1bb)){let _0x1c7378=Error[_0x8bf13b(0x1be)];try{Error['stackTraceLimit']=0x1/0x0,_0x3a50f0['push'](_0x1a4db7['serialize']({'stackNode':!0x0},new Error()[_0x8bf13b(0x17c)],_0x24a6a1(_0x92428a),{'strLength':0x1/0x0}));}finally{Error[_0x8bf13b(0x1be)]=_0x1c7378;}}return{'method':'log','version':_0x48da5d,'args':[{'ts':_0x10cc53,'session':_0x13add4,'args':_0x3a50f0,'id':_0x4c8a60,'context':_0x34b8b7}]};}catch(_0x50f884){return{'method':_0x8bf13b(0xf9),'version':_0x48da5d,'args':[{'ts':_0x10cc53,'session':_0x13add4,'args':[{'type':_0x8bf13b(0x17d),'error':_0x50f884&&_0x50f884[_0x8bf13b(0x1b0)]}],'id':_0x4c8a60,'context':_0x34b8b7}]};}finally{try{if(_0x340869&&_0x362f9a){let _0x1e55bb=_0x27a290();_0x340869[_0x8bf13b(0x178)]++,_0x340869[_0x8bf13b(0x150)]+=_0x56adc0(_0x362f9a,_0x1e55bb),_0x340869['ts']=_0x1e55bb,_0x2adc0c[_0x8bf13b(0x199)][_0x8bf13b(0x178)]++,_0x2adc0c[_0x8bf13b(0x199)][_0x8bf13b(0x150)]+=_0x56adc0(_0x362f9a,_0x1e55bb),_0x2adc0c[_0x8bf13b(0x199)]['ts']=_0x1e55bb,(_0x340869[_0x8bf13b(0x178)]>_0x184542[_0x8bf13b(0x160)][_0x8bf13b(0x172)]||_0x340869[_0x8bf13b(0x150)]>_0x184542[_0x8bf13b(0x160)][_0x8bf13b(0xe9)])&&(_0x340869[_0x8bf13b(0x1a0)]=!0x0),(_0x2adc0c[_0x8bf13b(0x199)][_0x8bf13b(0x178)]>_0x184542[_0x8bf13b(0xcc)][_0x8bf13b(0x172)]||_0x2adc0c[_0x8bf13b(0x199)][_0x8bf13b(0x150)]>_0x184542['global'][_0x8bf13b(0xe9)])&&(_0x2adc0c[_0x8bf13b(0x199)]['reduceLimits']=!0x0);}}catch{}}}return _0x41cd13;}function G(_0x608e03){var _0x301f67=_0x3bccce;if(_0x608e03&&typeof _0x608e03=='object'&&_0x608e03[_0x301f67(0x101)])switch(_0x608e03[_0x301f67(0x101)][_0x301f67(0xef)]){case _0x301f67(0x14a):return _0x608e03[_0x301f67(0x1a9)](Symbol[_0x301f67(0x1c1)])?Promise['resolve']():_0x608e03;case _0x301f67(0xe3):return Promise[_0x301f67(0xda)]();}return _0x608e03;}((_0x482a1c,_0x1f56df,_0x381e75,_0x5223ca,_0x4c2047,_0x25c77c,_0x5d01c1,_0xc877f3,_0x3cd5c3,_0x37cab3,_0x4c8a1b,_0x5ed381)=>{var _0x3b6697=_0x3bccce;if(_0x482a1c['_console_ninja'])return _0x482a1c[_0x3b6697(0xfb)];let _0x351a4c={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x482a1c,_0xc877f3,_0x4c2047))return _0x482a1c[_0x3b6697(0xfb)]=_0x351a4c,_0x482a1c[_0x3b6697(0xfb)];let _0x5788b3=b(_0x482a1c),_0x30e432=_0x5788b3[_0x3b6697(0x13b)],_0x1e618e=_0x5788b3[_0x3b6697(0xe6)],_0x371766=_0x5788b3['now'],_0x37c13f={'hits':{},'ts':{}},_0x293551=J(_0x482a1c,_0x3cd5c3,_0x37c13f,_0x25c77c,_0x5ed381,_0x4c2047===_0x3b6697(0x1b8)?G:void 0x0),_0x4882d1=(_0x15b63f,_0x323d18,_0x3f5e52,_0x599fe2,_0x52c4b8,_0x26b20b)=>{var _0x3bd643=_0x3b6697;let _0x25dfaf=_0x482a1c[_0x3bd643(0xfb)];try{return _0x482a1c[_0x3bd643(0xfb)]=_0x351a4c,_0x293551(_0x15b63f,_0x323d18,_0x3f5e52,_0x599fe2,_0x52c4b8,_0x26b20b);}finally{_0x482a1c[_0x3bd643(0xfb)]=_0x25dfaf;}},_0x317870=_0x84c9b1=>{_0x37c13f['ts'][_0x84c9b1]=_0x1e618e();},_0x34d8c2=(_0x3fc2b3,_0x333dc0)=>{let _0x37c098=_0x37c13f['ts'][_0x333dc0];if(delete _0x37c13f['ts'][_0x333dc0],_0x37c098){let _0x3cbf03=_0x30e432(_0x37c098,_0x1e618e());_0x237f05(_0x4882d1('time',_0x3fc2b3,_0x371766(),_0x5361c8,[_0x3cbf03],_0x333dc0));}},_0x4bfac0=_0x31aa10=>{var _0x392fda=_0x3b6697,_0x139dbd;return _0x4c2047===_0x392fda(0x1b8)&&_0x482a1c[_0x392fda(0x114)]&&((_0x139dbd=_0x31aa10==null?void 0x0:_0x31aa10[_0x392fda(0x186)])==null?void 0x0:_0x139dbd[_0x392fda(0x15e)])&&(_0x31aa10[_0x392fda(0x186)][0x0]['origin']=_0x482a1c[_0x392fda(0x114)]),_0x31aa10;};_0x482a1c[_0x3b6697(0xfb)]={'consoleLog':(_0x2c9f43,_0x32505d)=>{var _0x5c63b2=_0x3b6697;_0x482a1c[_0x5c63b2(0xd2)][_0x5c63b2(0xf9)][_0x5c63b2(0xef)]!==_0x5c63b2(0x198)&&_0x237f05(_0x4882d1(_0x5c63b2(0xf9),_0x2c9f43,_0x371766(),_0x5361c8,_0x32505d));},'consoleTrace':(_0x255c8e,_0x11d324)=>{var _0x814db3=_0x3b6697,_0x1152b0,_0x1733a2;_0x482a1c[_0x814db3(0xd2)][_0x814db3(0xf9)][_0x814db3(0xef)]!==_0x814db3(0x135)&&((_0x1733a2=(_0x1152b0=_0x482a1c[_0x814db3(0x161)])==null?void 0x0:_0x1152b0[_0x814db3(0x109)])!=null&&_0x1733a2[_0x814db3(0xf0)]&&(_0x482a1c[_0x814db3(0x15c)]=!0x0),_0x237f05(_0x4bfac0(_0x4882d1('trace',_0x255c8e,_0x371766(),_0x5361c8,_0x11d324))));},'consoleError':(_0x31b51e,_0x4681db)=>{var _0xab43c0=_0x3b6697;_0x482a1c[_0xab43c0(0x15c)]=!0x0,_0x237f05(_0x4bfac0(_0x4882d1(_0xab43c0(0x1bb),_0x31b51e,_0x371766(),_0x5361c8,_0x4681db)));},'consoleTime':_0x12f1f2=>{_0x317870(_0x12f1f2);},'consoleTimeEnd':(_0x24fc5b,_0x3502f6)=>{_0x34d8c2(_0x3502f6,_0x24fc5b);},'autoLog':(_0x3ba61f,_0x428a41)=>{_0x237f05(_0x4882d1('log',_0x428a41,_0x371766(),_0x5361c8,[_0x3ba61f]));},'autoLogMany':(_0x158141,_0x35bce6)=>{var _0x1a82c3=_0x3b6697;_0x237f05(_0x4882d1(_0x1a82c3(0xf9),_0x158141,_0x371766(),_0x5361c8,_0x35bce6));},'autoTrace':(_0x29d1a9,_0x7b7474)=>{var _0x502e85=_0x3b6697;_0x237f05(_0x4bfac0(_0x4882d1(_0x502e85(0x10c),_0x7b7474,_0x371766(),_0x5361c8,[_0x29d1a9])));},'autoTraceMany':(_0x402454,_0x2083c4)=>{var _0x19bf0f=_0x3b6697;_0x237f05(_0x4bfac0(_0x4882d1(_0x19bf0f(0x10c),_0x402454,_0x371766(),_0x5361c8,_0x2083c4)));},'autoTime':(_0x36dd1d,_0x4c058c,_0x1804b2)=>{_0x317870(_0x1804b2);},'autoTimeEnd':(_0x3ef5fa,_0x409b0c,_0x4355c5)=>{_0x34d8c2(_0x409b0c,_0x4355c5);},'coverage':_0x4f70d6=>{var _0x1407e0=_0x3b6697;_0x237f05({'method':_0x1407e0(0xc0),'version':_0x25c77c,'args':[{'id':_0x4f70d6}]});}};let _0x237f05=H(_0x482a1c,_0x1f56df,_0x381e75,_0x5223ca,_0x4c2047,_0x37cab3,_0x4c8a1b),_0x5361c8=_0x482a1c['_console_ninja_session'];return _0x482a1c[_0x3b6697(0xfb)];})(globalThis,_0x3bccce(0xbf),_0x3bccce(0x118),_0x3bccce(0x14d),_0x3bccce(0x166),_0x3bccce(0x143),'1779431560297',_0x3bccce(0x11f),_0x3bccce(0xfc),'','1',_0x3bccce(0x1b3));`)}catch(i){console.error(i)}}function ec(i,...t){try{Jd().consoleError(i,t)}catch{}return t}function vt(i){return i.buttons===0||i.detail===0}function yt(i){let t=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var qo;function as(){if(qo==null){let i=typeof document<"u"?document.head:null;qo=!!(i&&(i.createShadowRoot||i.attachShadow))}return qo}function Ct(i){if(as()){let t=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function _n(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let t=i.shadowRoot.activeElement;if(t===i)break;i=t}return i}function X(i){return i.composedPath?i.composedPath()[0]:i.target}var Zo;try{Zo=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Zo=!1}var z=(()=>{class i{_platformId=l(ja);isBrowser=this._platformId?os(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Zo)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var gn;function ss(){if(gn==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>gn=!0}))}finally{gn=gn||!1}return gn}function jt(i){return ss()?i:!!i.capture}function qe(i,t=0){return ls(i)?Number(i):arguments.length===2?t:0}function ls(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function Q(i){return i instanceof E?i.nativeElement:i}var ds=new p("cdk-input-modality-detector-options"),cs={ignoreKeys:[18,17,224,91,16]},us=650,Xo={passive:!0,capture:!0},hs=(()=>{class i{_platform=l(z);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new oi(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=X(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<us||(this._modality.next(vt(e)?"keyboard":"mouse"),this._mostRecentTarget=X(e))};_onTouchstart=e=>{if(yt(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=X(e)};constructor(){let e=l(D),n=l(F),o=l(ds,{optional:!0});if(this._options=_(_({},cs),o),this.modalityDetected=this._modality.pipe(si(1)),this.modalityChanged=this.modalityDetected.pipe(jo()),this._platform.isBrowser){let r=l(he).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(n,"keydown",this._onKeydown,Xo),r.listen(n,"mousedown",this._onMousedown,Xo),r.listen(n,"touchstart",this._onTouchstart,Xo)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),bn=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(bn||{}),ms=new p("cdk-focus-monitor-default-options"),vi=jt({passive:!0,capture:!0}),xn=(()=>{class i{_ngZone=l(D);_platform=l(z);_inputModalityDetector=l(hs);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(F);_stopInputModalityDetector=new f;constructor(){let e=l(ms,{optional:!0});this._detectionMode=e?.detectionMode||bn.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=X(e);for(let o=n;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,n=!1){let o=Q(e);if(!this._platform.isBrowser||o.nodeType!==1)return Pe();let r=Ct(o)||this._document,a=this._elementInfo.get(o);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new f,rootNode:r};return this._elementInfo.set(o,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=Q(e),o=this._elementInfo.get(n);o&&(o.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(o))}focusVia(e,n,o){let r=Q(e),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([s,d])=>this._originChanged(s,n,d)):(this._setOrigin(n),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===bn.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===bn.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?us:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,n){let o=this._elementInfo.get(n),r=X(e);!o||!o.checkChildren&&n!==r||this._originChanged(n,this._getFocusOrigin(r),o)}_onBlur(e,n){let o=this._elementInfo.get(n);!o||o.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(o,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,o=this._rootNodeFocusListenerCount.get(n)||0;o||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,vi),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,vi)}),this._rootNodeFocusListenerCount.set(n,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ae(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let o=this._rootNodeFocusListenerCount.get(n);o>1?this._rootNodeFocusListenerCount.set(n,o-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,vi),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,vi),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,o){this._setClasses(e,n),this._emitOrigin(o,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((o,r)=>{(r===e||o.checkChildren&&r.contains(e))&&n.push([r,o])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var yi=new WeakMap,me=(()=>{class i{_appRef;_injector=l(R);_environmentInjector=l(Lt);load(e){let n=this._appRef=this._appRef||this._injector.get(Vt),o=yi.get(n);o||(o={loaders:new Set,refs:[]},yi.set(n,o),n.onDestroy(()=>{yi.get(n)?.refs.forEach(r=>r.destroy()),yi.delete(n)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(gi(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var wi=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return i})(),Ci;function tc(){if(Ci===void 0&&(Ci=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(Ci=i.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return Ci}function wt(i){return tc()?.createHTML(i)||i}function fs(i,t,e){let n=e.sanitize(et.HTML,t);i.innerHTML=wt(n||"")}function ot(i){return Array.isArray(i)?i:[i]}var ps=new Set,Dt,Di=(()=>{class i{_platform=l(z);_nonce=l(Ha,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ic}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&nc(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function nc(i,t){if(!ps.has(i))try{Dt||(Dt=document.createElement("style"),t&&Dt.setAttribute("nonce",t),Dt.setAttribute("type","text/css"),document.head.appendChild(Dt)),Dt.sheet&&(Dt.sheet.insertRule(`@media ${i} {body{ }}`,0),ps.add(i))}catch(e){console.error(e)}}function ic(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var Qo=(()=>{class i{_mediaMatcher=l(Di);_zone=l(D);_queries=new Map;_destroySubject=new f;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return _s(ot(e)).some(o=>this._registerQuery(o).mql.matches)}observe(e){let o=_s(ot(e)).map(a=>this._registerQuery(a).observable),r=Oa(o);return r=Pa(r.pipe(xe(1)),r.pipe(si(1),ai(0))),r.pipe(re(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:d,query:c})=>{s.matches=s.matches||d,s.breakpoints[c]=d}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),r={observable:new Ke(a=>{let s=d=>this._zone.run(()=>a.next(d));return n.addListener(s),()=>{n.removeListener(s)}}).pipe(pe(n),re(({matches:a})=>({query:e,matches:a})),ae(this._destroySubject)),mql:n};return this._queries.set(e,r),r}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function _s(i){return i.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}var oc=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ei=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({providers:[oc]})}return i})();var tr=(()=>{class i{_platform=l(z);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return ac(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=rc(fc(e));if(n&&(gs(n)===-1||!this.isVisible(n)))return!1;let o=e.nodeName.toLowerCase(),r=gs(e);return e.hasAttribute("contenteditable")?r!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!hc(e)?!1:o==="audio"?e.hasAttribute("controls")?r!==-1:!1:o==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,n){return mc(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function rc(i){try{return i.frameElement}catch{return null}}function ac(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function sc(i){let t=i.nodeName.toLowerCase();return t==="input"||t==="select"||t==="button"||t==="textarea"}function lc(i){return cc(i)&&i.type=="hidden"}function dc(i){return uc(i)&&i.hasAttribute("href")}function cc(i){return i.nodeName.toLowerCase()=="input"}function uc(i){return i.nodeName.toLowerCase()=="a"}function vs(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let t=i.getAttribute("tabindex");return!!(t&&!isNaN(parseInt(t,10)))}function gs(i){if(!vs(i))return null;let t=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(t)?-1:t}function hc(i){let t=i.nodeName.toLowerCase(),e=t==="input"&&i.type;return e==="text"||e==="password"||t==="select"||t==="textarea"}function mc(i){return lc(i)?!1:sc(i)||dc(i)||i.hasAttribute("contenteditable")||vs(i)}function fc(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var er=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(t){this._enabled=t,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}_enabled=!0;constructor(t,e,n,o,r=!1,a){this._element=t,this._checker=e,this._ngZone=n,this._document=o,this._injector=a,r||this.attachAnchors()}destroy(){let t=this._startAnchor,e=this._endAnchor;t&&(t.removeEventListener("focus",this.startAnchorListener),t.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(t){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(t)))})}focusFirstTabbableElementWhenReady(t){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(t)))})}focusLastTabbableElementWhenReady(t){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(t)))})}_getRegionBoundary(t){let e=this._element.querySelectorAll(`[cdk-focus-region-${t}], [cdkFocusRegion${t}], [cdk-focus-${t}]`);return t=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(t){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(t),!!n}return e.focus(t),!0}return this.focusFirstTabbableElement(t)}focusFirstTabbableElement(t){let e=this._getRegionBoundary("start");return e&&e.focus(t),!!e}focusLastTabbableElement(t){let e=this._getRegionBoundary("end");return e&&e.focus(t),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;let e=t.children;for(let n=0;n<e.length;n++){let o=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(o)return o}return null}_getLastTabbableElement(t){if(this._checker.isFocusable(t)&&this._checker.isTabbable(t))return t;let e=t.children;for(let n=e.length-1;n>=0;n--){let o=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(o)return o}return null}_createAnchor(){let t=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,t),t.classList.add("cdk-visually-hidden"),t.classList.add("cdk-focus-trap-anchor"),t.setAttribute("aria-hidden","true"),t}_toggleAnchorTabIndex(t,e){t?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(t){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(t,this._startAnchor),this._toggleAnchorTabIndex(t,this._endAnchor))}_executeOnStable(t){this._injector?Te(t,{injector:this._injector}):setTimeout(t)}},nr=(()=>{class i{_checker=l(tr);_ngZone=l(D);_document=l(F);_injector=l(R);constructor(){l(me).load(wi)}create(e,n=!1){return new er(e,this._checker,this._ngZone,this._document,n,this._injector)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ys=new p("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Cs=new p("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),pc=0,vn=(()=>{class i{_ngZone=l(D);_defaultOptions=l(Cs,{optional:!0});_liveElement;_document=l(F);_sanitizer=l(bi);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(ys,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let o=this._defaultOptions,r,a;return n.length===1&&typeof n[0]=="number"?a=n[0]:[r,a]=n,this.clear(),clearTimeout(this._previousTimeout),r||(r=o&&o.politeness?o.politeness:"polite"),a==null&&o&&(a=o.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:fs(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",n=this._document.getElementsByClassName(e),o=this._document.createElement("div");for(let r=0;r<n.length;r++)n[r].remove();return o.classList.add(e),o.classList.add("cdk-visually-hidden"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-live","polite"),o.id=`cdk-live-announcer-${pc++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<n.length;o++){let r=n[o],a=r.getAttribute("aria-owns");a?a.indexOf(e)===-1&&r.setAttribute("aria-owns",a+" "+e):r.setAttribute("aria-owns",e)}}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var rt=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(rt||{}),bs="cdk-high-contrast-black-on-white",xs="cdk-high-contrast-white-on-black",Jo="cdk-high-contrast-active",ws=(()=>{class i{_platform=l(z);_hasCheckedHighContrastMode=!1;_document=l(F);_breakpointSubscription;constructor(){this._breakpointSubscription=l(Qo).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return rt.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,o=n&&n.getComputedStyle?n.getComputedStyle(e):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return rt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return rt.BLACK_ON_WHITE}return rt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Jo,bs,xs),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===rt.BLACK_ON_WHITE?e.add(Jo,bs):n===rt.WHITE_ON_BLACK&&e.add(Jo,xs)}}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ir=(()=>{class i{constructor(){l(ws)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[Ei]})}return i})();var _c=200,Si=class{_letterKeyStream=new f;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new f;selectedItem=this._selectedItem;constructor(t,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:_c;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(t),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(t){this._selectedItemIndex=t}setItems(t){this._items=t}handleKey(t){let e=t.keyCode;t.key&&t.key.length===1?this._letterKeyStream.next(t.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(t){this._letterKeyStream.pipe(Je(e=>this._pressedLetters.push(e)),ai(t),le(()=>this._pressedLetters.length>0),re(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let o=(this._selectedItemIndex+n)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function Ce(i,...t){return t.length?t.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var ki=class{_items;_activeItemIndex=M(-1);_activeItem=M(null);_wrap=!1;_typeaheadSubscription=oe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=t=>t.disabled;constructor(t,e){this._items=t,t instanceof Go?this._itemChangesSubscription=t.changes.subscribe(n=>this._itemsChanged(n.toArray())):gt(t)&&(this._effectRef=_e(()=>this._itemsChanged(t()),{injector:e}))}tabOut=new f;change=new f;skipPredicate(t){return this._skipPredicateFn=t,this}withWrap(t=!0){return this._wrap=t,this}withVerticalOrientation(t=!0){return this._vertical=t,this}withHorizontalOrientation(t){return this._horizontal=t,this}withAllowedModifierKeys(t){return this._allowedModifierKeys=t,this}withTypeAhead(t=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Si(e,{debounceInterval:typeof t=="number"?t:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(t=!0){return this._homeAndEnd=t,this}withPageUpDown(t=!0,e=10){return this._pageUpAndDown={enabled:t,delta:e},this}setActiveItem(t){let e=this._activeItem();this.updateActiveItem(t),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(t){let e=t.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!t[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(o||Ce(t,"shiftKey"))&&this._typeahead?.handleKey(t);return}this._typeahead?.reset(),t.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(t){let e=this._getItemsArray(),n=typeof t=="number"?t:e.indexOf(t),o=e[n];this._activeItem.set(o??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(t){this._wrap?this._setActiveInWrapMode(t):this._setActiveInDefaultMode(t)}_setActiveInWrapMode(t){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let o=(this._activeItemIndex()+t*n+e.length)%e.length,r=e[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(t){this._setActiveItemByIndex(this._activeItemIndex()+t,t)}_setActiveItemByIndex(t,e){let n=this._getItemsArray();if(n[t]){for(;this._skipPredicateFn(n[t]);)if(t+=e,!n[t])return;this.setActiveItem(t)}}_getItemsArray(){return gt(this._items)?this._items():this._items instanceof Go?this._items.toArray():this._items}_itemsChanged(t){this._typeahead?.setItems(t);let e=this._activeItem();if(e){let n=t.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var yn=class extends ki{setActiveItem(t){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(t),this.activeItem&&this.activeItem.setActiveStyles()}};var ar={},te=class i{_appId=l(ui);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(t,e=!1){return this._appId!=="ng"&&(t+=this._appId),ar.hasOwnProperty(t)||(ar[t]=0),`${t}${e?i._infix+"-":""}${ar[t]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})};var ks=" ";function Ms(i,t,e){let n=Is(i,t);e=e.trim(),!n.some(o=>o.trim()===e)&&(n.push(e),i.setAttribute(t,n.join(ks)))}function sr(i,t,e){let n=Is(i,t);e=e.trim();let o=n.filter(r=>r!==e);o.length?i.setAttribute(t,o.join(ks)):i.removeAttribute(t)}function Is(i,t){return i.getAttribute(t)?.match(/\S+/g)??[]}var Re=(function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i})(Re||{}),Mi,Et;function Ii(){if(Et==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Et=!1,Et;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Et=!0;else{let i=Element.prototype.scrollTo;i?Et=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Et=!1}}return Et}function Ht(){if(typeof document!="object"||!document)return Re.NORMAL;if(Mi==null){let i=document.createElement("div"),t=i.style;i.dir="rtl",t.width="1px",t.overflow="auto",t.visibility="hidden",t.pointerEvents="none",t.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",i.appendChild(e),document.body.appendChild(i),Mi=Re.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,Mi=i.scrollLeft===0?Re.NEGATED:Re.INVERTED),i.remove()}return Mi}function lr(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ut,Ts=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function dr(){if(Ut)return Ut;if(typeof document!="object"||!document)return Ut=new Set(Ts),Ut;let i=document.createElement("input");return Ut=new Set(Ts.filter(t=>(i.setAttribute("type",t),i.type===t))),Ut}var gc=new p("MATERIAL_ANIMATIONS"),Rs=null;function bc(){return l(gc,{optional:!0})?.animationsDisabled||l(hi,{optional:!0})==="NoopAnimations"?"di-disabled":(Rs??=l(Di).matchMedia("(prefers-reduced-motion)").matches,Rs?"reduced-motion":"enabled")}function ge(){return bc()!=="enabled"}function ne(i){return i==null?"":typeof i=="string"?i:`${i}px`}function Wt(i){return i!=null&&`${i}`!="false"}var Se=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(Se||{}),cr=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Se.HIDDEN;constructor(t,e,n,o=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},As=jt({passive:!0,capture:!0}),ur=class{_events=new Map;addHandler(t,e,n,o){let r=this._events.get(e);if(r){let a=r.get(n);a?a.add(o):r.set(n,new Set([o]))}else this._events.set(e,new Map([[n,new Set([o])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,As)})}removeHandler(t,e,n){let o=this._events.get(t);if(!o)return;let r=o.get(e);r&&(r.delete(n),r.size===0&&o.delete(e),o.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,As)))}_delegateEventHandler=t=>{let e=X(t);e&&this._events.get(t.type)?.forEach((n,o)=>{(o===e||o.contains(e))&&n.forEach(r=>r.handleEvent(t))})}},Cn={enterDuration:225,exitDuration:150},xc=800,Os=jt({passive:!0,capture:!0}),Ps=["mousedown","touchstart"],Fs=["mouseup","mouseleave","touchend","touchcancel"],vc=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return i})(),wn=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ur;constructor(t,e,n,o,r){this._target=t,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=Q(n)),r&&r.get(me).load(vc)}fadeInRipple(t,e,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=_(_({},Cn),n.animation);n.centered&&(t=o.left+o.width/2,e=o.top+o.height/2);let a=n.radius||yc(t,e,o),s=t-o.left,d=e-o.top,c=r.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${d-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,n.color!=null&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u);let y=window.getComputedStyle(u),j=y.transitionProperty,J=y.transitionDuration,ee=j==="none"||J==="0s"||J==="0s, 0s"||o.width===0&&o.height===0,q=new cr(this,u,n,ee);u.style.transform="scale3d(1, 1, 1)",q.state=Se.FADING_IN,n.persistent||(this._mostRecentTransientRipple=q);let ie=null;return!ee&&(c||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ii=()=>{ie&&(ie.fallbackTimer=null),clearTimeout(Pt),this._finishRippleTransition(q)},Ot=()=>this._destroyRipple(q),Pt=setTimeout(Ot,c+100);u.addEventListener("transitionend",ii),u.addEventListener("transitioncancel",Ot),ie={onTransitionEnd:ii,onTransitionCancel:Ot,fallbackTimer:Pt}}),this._activeRipples.set(q,ie),(ee||!c)&&this._finishRippleTransition(q),q}fadeOutRipple(t){if(t.state===Se.FADING_OUT||t.state===Se.HIDDEN)return;let e=t.element,n=_(_({},Cn),t.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",t.state=Se.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=Q(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Ps.forEach(n=>{i._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Fs.forEach(e=>{this._triggerElement.addEventListener(e,this,Os)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===Se.FADING_IN?this._startFadeOutTransition(t):t.state===Se.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=Se.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=Se.HIDDEN,e!==null&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=vt(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+xc;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!yt(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===Se.VISIBLE||t.config.terminateOnPointerUp&&t.state===Se.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Ps.forEach(e=>i._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(Fs.forEach(e=>t.removeEventListener(e,this,Os)),this._pointerUpEventsRegistered=!1))}};function yc(i,t,e){let n=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),o=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+o*o)}var hr=new p("mat-ripple-global-options"),Ns=(()=>{class i{_elementRef=l(E);_animationsDisabled=ge();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(D),n=l(z),o=l(hr,{optional:!0}),r=l(R);this._globalOptions=o||{},this._rippleRenderer=new wn(this,e,this._elementRef,n,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,o){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,_(_({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,o){n&2&&L("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var Cc={capture:!0},wc=["focus","mousedown","mouseenter","touchstart"],mr="mat-ripple-loader-uninitialized",fr="mat-ripple-loader-class-name",Ls="mat-ripple-loader-centered",Ti="mat-ripple-loader-disabled",Vs=(()=>{class i{_document=l(F);_animationsDisabled=ge();_globalRippleOptions=l(hr,{optional:!0});_platform=l(z);_ngZone=l(D);_injector=l(R);_eventCleanups;_hosts=new Map;constructor(){let e=l(he).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>wc.map(n=>e.listen(this._document,n,this._onInteraction,Cc)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(mr,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(fr))&&e.setAttribute(fr,n.className||""),n.centered&&e.setAttribute(Ls,""),n.disabled&&e.setAttribute(Ti,"")}setDisabled(e,n){let o=this._hosts.get(e);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):n?e.setAttribute(Ti,""):e.removeAttribute(Ti)}_onInteraction=e=>{let n=X(e);if(n instanceof HTMLElement){let o=n.closest(`[${mr}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(fr)),e.append(n);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??Cn.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??Cn.exitDuration,s={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(Ti),rippleConfig:{centered:e.hasAttribute(Ls),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},d=new wn(s,this._ngZone,n,this._platform,this._injector),c=!s.rippleDisabled;c&&d.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:d,hasSetUpEvents:c}),e.removeAttribute(mr)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ri=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return i})();var Dc=["mat-icon-button",""],Ec=["*"],Sc=new p("MAT_BUTTON_CONFIG");function Bs(i){return i==null?void 0:xt(i)}var pr=(()=>{class i{_elementRef=l(E);_ngZone=l(D);_animationsDisabled=ge();_config=l(Sc,{optional:!0});_focusMonitor=l(xn);_cleanupClick;_renderer=l(se);_rippleLoader=l(Vs);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(me).load(Ri);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,o){n&2&&(N("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),Ve(o.color?"mat-"+o.color:""),L("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",P],disabled:[2,"disabled","disabled",P],ariaDisabled:[2,"aria-disabled","ariaDisabled",P],disabledInteractive:[2,"disabledInteractive","disabledInteractive",P],tabIndex:[2,"tabIndex","tabIndex",Bs],_tabindex:[2,"tabindex","_tabindex",Bs]}})}return i})(),_r=(()=>{class i extends pr{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[de],attrs:Dc,ngContentSelectors:Ec,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,o){n&1&&(ve(),Ne(0,"span",0),W(1),Ne(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return i})();var kc=new p("cdk-dir-doc",{providedIn:"root",factory:()=>l(F)}),Mc=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function zs(i){let t=i?.toLowerCase()||"";return t==="auto"&&typeof navigator<"u"&&navigator?.language?Mc.test(navigator.language)?"rtl":"ltr":t==="rtl"?"rtl":"ltr"}var fe=(()=>{class i{get value(){return this.valueSignal()}valueSignal=M("ltr");change=new k;constructor(){let e=l(kc,{optional:!0});if(e){let n=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(zs(n||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Y=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({})}return i})();var Ai=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[Y]})}return i})();var Ic=["matButton",""],Tc=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Rc=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var js=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),at=(()=>{class i extends pr{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Ac(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?js.get(this._appearance):null,r=js.get(e);o&&n.remove(...o),n.add(...r),this._appearance=e}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[de],attrs:Ic,ngContentSelectors:Rc,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,o){n&1&&(ve(Tc),Ne(0,"span",0),W(1),Bt(2,"span",1),W(3,1),zt(),W(4,2),Ne(5,"span",2)(6,"span",3)),n&2&&L("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return i})();function Ac(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var je=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[Ai,Y]})}return i})();function Oc(i,t){if(i&1){let e=it();m(0,"button",9),I("click",function(){Me(e);let o=B();return Ie(o.onMove("inProgress"))}),x(1,"\u2192 Iniciar"),h()}}function Pc(i,t){if(i&1){let e=it();m(0,"button",10),I("click",function(){Me(e);let o=B();return Ie(o.onMove("toDo"))}),x(1,"\u2190 Volver"),h(),m(2,"button",11),I("click",function(){Me(e);let o=B();return Ie(o.onMove("done"))}),x(3,"\u2705 Completar"),h()}}function Fc(i,t){if(i&1){let e=it();m(0,"button",12),I("click",function(){Me(e);let o=B();return Ie(o.onMove("inProgress"))}),x(1,"\u21BA Reabrir"),h()}}var Oi=class i{task=ze.required();taskMoved=Be();taskEdited=Be();taskDeleted=Be();onMove(t){this.taskMoved.emit(t)}onEdit(){this.taskEdited.emit(this.task())}onDelete(t){this.taskDeleted.emit(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-task-card-component"]],inputs:{task:[1,"task"]},outputs:{taskMoved:"taskMoved",taskEdited:"taskEdited",taskDeleted:"taskDeleted"},decls:17,vars:12,consts:[[1,"task-card"],[1,"task-header"],[1,"task-description"],[1,"task-actions"],["mat-stroked-button","","color","primary","aria-label","Mover a En Progreso",1,"move-btn"],["mat-button","","aria-label","Reabrir en En Progreso",1,"move-btn","back-btn"],[1,"task-actions-secondary"],["mat-button","","color","accent",1,"edit-btn",3,"click"],["mat-button","","color","warn",1,"delete-btn",3,"click"],["mat-stroked-button","","color","primary","aria-label","Mover a En Progreso",1,"move-btn",3,"click"],["mat-button","","aria-label","Volver a Por Hacer",1,"move-btn","back-btn",3,"click"],["mat-stroked-button","","color","primary","aria-label","Marcar como Hecho",1,"move-btn",3,"click"],["mat-button","","aria-label","Reabrir en En Progreso",1,"move-btn","back-btn",3,"click"]],template:function(e,n){if(e&1&&(m(0,"div",0)(1,"div",1)(2,"h3"),x(3),h(),m(4,"span"),x(5),h()(),m(6,"p",2),x(7),h(),m(8,"div",3),K(9,Oc,2,0,"button",4)(10,Pc,4,0)(11,Fc,2,0,"button",5),h(),m(12,"div",6)(13,"button",7),I("click",function(){return n.onEdit()}),x(14,"\u270F\uFE0F Editar"),h(),m(15,"button",8),I("click",function(){return n.onDelete(n.task().id)}),x(16,"\u{1F5D1}\uFE0F Eliminar"),h()()()),e&2){let o;N("aria-label","Tarea: "+n.task().title+", prioridad "+n.task().priority),g(3),ye(n.task().title),g(),Ve(Ja("priority-badge ",n.task().priority)),N("aria-label","Prioridad "+n.task().priority),g(),Qa(" ",n.task().priority==="low"?"\u{1F7E2}":n.task().priority==="medium"?"\u{1F7E1}":"\u{1F534}"," ",n.task().priority," "),g(2),ye(n.task().description),g(2),$((o=n.task().status)==="toDo"?9:o==="inProgress"?10:o==="done"?11:-1),g(4),N("aria-label","Editar tarea "+n.task().title),g(2),N("aria-label","Eliminar tarea "+n.task().title)}},dependencies:[je,at],styles:[".task-card[_ngcontent-%COMP%]{background:var(--app-bg, white);color:var(--text-main, #333);border-radius:6px;box-shadow:0 2px 4px #0000001a;padding:12px;margin-bottom:12px;transition:transform .2s,box-shadow .2s,background .3s ease}.task-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 6px #0003}.task-card.completed[_ngcontent-%COMP%]{opacity:.7;background:var(--filter-bg, #f0f0f0)}.task-card[_ngcontent-%COMP%]   .task-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}.task-card[_ngcontent-%COMP%]   .task-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1rem}.task-card[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%]{font-size:.7rem;padding:2px 6px;border-radius:4px}.task-card[_ngcontent-%COMP%]   .priority-badge.low[_ngcontent-%COMP%]{background:#c8e6c9;color:#2e7d32}.task-card[_ngcontent-%COMP%]   .priority-badge.medium[_ngcontent-%COMP%]{background:#fff9c4;color:#f57f17}.task-card[_ngcontent-%COMP%]   .priority-badge.high[_ngcontent-%COMP%]{background:#ffcdd2;color:#c62828}.task-card[_ngcontent-%COMP%]   .task-description[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-main);opacity:.8;margin:8px 0;word-break:break-word}.task-card[_ngcontent-%COMP%]   .task-actions-secondary[_ngcontent-%COMP%]{margin-top:8px;display:flex;gap:8px}.task-card[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]{display:flex;gap:8px;margin-top:8px}.task-card[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:4px 8px;font-size:.75rem;border:none;border-radius:4px;cursor:pointer;transition:opacity .2s}.task-card[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:.8}.task-card[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   button.move-btn[_ngcontent-%COMP%]{background:#2196f3;color:#fff}.task-card[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   button.back-btn[_ngcontent-%COMP%]{background:#9e9e9e;color:#fff}.task-card[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   button.edit-btn[_ngcontent-%COMP%]{background:#ff9800;color:#fff}.task-card[_ngcontent-%COMP%]   .task-actions[_ngcontent-%COMP%]   button.delete-btn[_ngcontent-%COMP%]{background:#f44336;color:#fff}"],changeDetection:0})};var Nc=20,Gt=(()=>{class i{_ngZone=l(D);_platform=l(z);_renderer=l(he).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new f;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Nc){return this._platform.isBrowser?new Ke(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(zo(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Pe()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let o=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(le(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,e)&&n.push(r)}),n}_scrollableContainsElement(e,n){let o=Q(n),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Hs=(()=>{class i{elementRef=l(E);scrollDispatcher=l(Gt);ngZone=l(D);dir=l(fe,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new f;_renderer=l(se);_cleanupScroll;_elementScrolled=new f;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,o=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=o?e.end:e.start),e.right==null&&(e.right=o?e.start:e.end),e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),o&&Ht()!=Re.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),Ht()==Re.INVERTED?e.left=e.right:Ht()==Re.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;Ii()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n="left",o="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?o:n:e=="end"&&(e=a?n:o),a&&Ht()==Re.INVERTED?e==n?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:a&&Ht()==Re.NEGATED?e==n?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==n?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),Lc=20,He=(()=>{class i{_platform=l(z);_listeners;_viewportSize=null;_change=new f;_document=l(F);constructor(){let e=l(D),n=l(he).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[n.listen("window","resize",o),n.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+n,height:o,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),a=-r.top||e.body?.scrollTop||n.scrollY||o.scrollTop||0,s=-r.left||e.body?.scrollLeft||n.scrollX||o.scrollLeft||0;return{top:a,left:s}}change(e=Lc){return e>0?this._change.pipe(zo(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Sn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({})}return i})(),gr=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[Y,Sn,Y,Sn]})}return i})();function vr(i){let t=i.cloneNode(!0),e=t.querySelectorAll("[id]"),n=i.nodeName.toLowerCase();t.removeAttribute("id");for(let o=0;o<e.length;o++)e[o].removeAttribute("id");return n==="canvas"?Gs(i,t):(n==="input"||n==="select"||n==="textarea")&&Ws(i,t),Us("canvas",i,t,Gs),Us("input, textarea, select",i,t,Ws),t}function Us(i,t,e,n){let o=t.querySelectorAll(i);if(o.length){let r=e.querySelectorAll(i);for(let a=0;a<o.length;a++)n(o[a],r[a])}}var Bc=0;function Ws(i,t){t.type!=="file"&&(t.value=i.value),t.type==="radio"&&t.name&&(t.name=`mat-clone-${t.name}-${Bc++}`)}function Gs(i,t){let e=t.getContext("2d");if(e)try{e.drawImage(i,0,0)}catch{}}function Sr(i){let t=i.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height,x:t.x,y:t.y}}function yr(i,t,e){let{top:n,bottom:o,left:r,right:a}=i;return e>=n&&e<=o&&t>=r&&t<=a}function zc(i,t){let e=t.left<i.left,n=t.left+t.width>i.right,o=t.top<i.top,r=t.top+t.height>i.bottom;return e||n||o||r}function In(i,t,e){i.top+=t,i.bottom=i.top+i.height,i.left+=e,i.right=i.left+i.width}function Ks(i,t,e,n){let{top:o,right:r,bottom:a,left:s,width:d,height:c}=i,u=d*t,y=c*t;return n>o-y&&n<a+y&&e>s-u&&e<r+u}var Pi=class{_document;positions=new Map;constructor(t){this._document=t}clear(){this.positions.clear()}cache(t){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),t.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:Sr(e)})})}handleScroll(t){let e=X(t),n=this.positions.get(e);if(!n)return null;let o=n.scrollPosition,r,a;if(e===this._document){let c=this.getViewportScrollPosition();r=c.top,a=c.left}else r=e.scrollTop,a=e.scrollLeft;let s=o.top-r,d=o.left-a;return this.positions.forEach((c,u)=>{c.clientRect&&e!==u&&e.contains(u)&&In(c.clientRect,s,d)}),o.top=r,o.left=a,{top:s,left:d}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function rl(i,t){let e=i.rootNodes;if(e.length===1&&e[0].nodeType===t.ELEMENT_NODE)return e[0];let n=t.createElement("div");return e.forEach(o=>n.appendChild(o)),n}function kr(i,t,e){for(let n in t)if(t.hasOwnProperty(n)){let o=t[n];o?i.setProperty(n,o,e?.has(n)?"important":""):i.removeProperty(n)}return i}function Kt(i,t){let e=t?"":"none";kr(i.style,{"touch-action":t?"":"none","-webkit-user-drag":t?"":"none","-webkit-tap-highlight-color":t?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function $s(i,t,e){kr(i.style,{position:t?"":"fixed",top:t?"":"0",opacity:t?"":"0",left:t?"":"-999em"},e)}function Fi(i,t){return t&&t!="none"?i+" "+t:i}function Ys(i,t){i.style.width=`${t.width}px`,i.style.height=`${t.height}px`,i.style.transform=Tn(t.left,t.top)}function Tn(i,t){return`translate3d(${Math.round(i)}px, ${Math.round(t)}px, 0)`}var kn={capture:!0},br={passive:!1,capture:!0},jc=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(n,o){},styles:[`@layer cdk-resets {
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
`],encapsulation:2,changeDetection:0})}return i})(),Mr=(()=>{class i{_ngZone=l(D);_document=l(F);_styleLoader=l(me);_renderer=l(he).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new f;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=M([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new f;pointerUp=new f;constructor(){}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,br)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(e,n){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(jc),this._activeDragInstances.update(o=>[...o,e]),this._activeDragInstances().length===1)){let o=n.type.startsWith("touch"),r=s=>this.pointerUp.next(s),a=[["scroll",s=>this._scroll.next(s),kn],["selectstart",this._preventDefaultWhileDragging,br]];o?a.push(["touchend",r,kn],["touchcancel",r,kn]):a.push(["mouseup",r,kn]),o||a.push(["mousemove",s=>this.pointerMove.next(s),br]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=a.map(([s,d,c])=>this._renderer.listen(this._document,s,d,c))})}}stopDragging(e){this._activeDragInstances.update(n=>{let o=n.indexOf(e);return o>-1?(n.splice(o,1),[...n]):n}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let n=[this._scroll];return e&&e!==this._document&&n.push(new Ke(o=>this._ngZone.runOutsideAngular(()=>{let r=this._renderer.listen(e,"scroll",a=>{this._activeDragInstances().length&&o.next(a)},kn);return()=>{r()}}))),Ee(...n)}registerDirectiveNode(e,n){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,n)}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e)}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault()};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e))};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function qs(i){let t=i.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(i)*t}function Hc(i){let t=getComputedStyle(i),e=xr(t,"transition-property"),n=e.find(s=>s==="transform"||s==="all");if(!n)return 0;let o=e.indexOf(n),r=xr(t,"transition-duration"),a=xr(t,"transition-delay");return qs(r[o])+qs(a[o])}function xr(i,t){return i.getPropertyValue(t).split(",").map(n=>n.trim())}var Uc=new Set(["position"]),Cr=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(t,e,n,o,r,a,s,d,c,u){this._document=t,this._rootElement=e,this._direction=n,this._initialDomRect=o,this._previewTemplate=r,this._previewClass=a,this._pickupPositionOnPage=s,this._initialTransform=d,this._zIndex=c,this._renderer=u}attach(t){this._preview=this._createPreview(),t.appendChild(this._preview),Zs(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(t){this._preview.style.transform=t}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(t){this._preview.classList.add(t)}getTransitionDuration(){return Hc(this._preview)}addEventListener(t,e){return this._renderer.listen(this._preview,t,e)}_createPreview(){let t=this._previewTemplate,e=this._previewClass,n=t?t.template:null,o;if(n&&t){let r=t.matchSize?this._initialDomRect:null,a=t.viewContainer.createEmbeddedView(n,t.context);a.detectChanges(),o=rl(a,this._document),this._previewEmbeddedView=a,t.matchSize?Ys(o,r):o.style.transform=Tn(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else o=vr(this._rootElement),Ys(o,this._initialDomRect),this._initialTransform&&(o.style.transform=this._initialTransform);return kr(o.style,{"pointer-events":"none",margin:Zs(o)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},Uc),Kt(o,!1),o.classList.add("cdk-drag-preview"),o.setAttribute("popover","manual"),o.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(r=>o.classList.add(r)):o.classList.add(e)),o}};function Zs(i){return"showPopover"in i}var Wc={passive:!0},Xs={passive:!1},Gc={passive:!1,capture:!0},Kc=800,Qs="cdk-drag-placeholder",Js=new Set(["position"]);function $c(i,t,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let n=i.get(se,null,{optional:!0})||i.get(he).createRenderer(null,null);return new wr(t,e,i.get(F),i.get(D),i.get(He),i.get(Mr),n)}var wr=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=M(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new f;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=oe.EMPTY;_pointerUpSubscription=oe.EMPTY;_scrollSubscription=oe.EMPTY;_resizeSubscription=oe.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(t){t!==this._disabled&&(this._disabled=t,this._toggleNativeDragInteractions(),this._handles.forEach(e=>Kt(e,t)))}_disabled=!1;beforeStarted=new f;started=new f;released=new f;ended=new f;entered=new f;exited=new f;dropped=new f;moved=this._moveEvents;data;constrainPosition;constructor(t,e,n,o,r,a,s){this._config=e,this._document=n,this._ngZone=o,this._viewportRuler=r,this._dragDropRegistry=a,this._renderer=s,this.withRootElement(t).withParent(e.parentDragRef||null),this._parentPositions=new Pi(n),a.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(t){this._handles=t.map(n=>Q(n)),this._handles.forEach(n=>Kt(n,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(n=>{this._handles.indexOf(n)>-1&&e.add(n)}),this._disabledHandles=e,this}withPreviewTemplate(t){return this._previewTemplate=t,this}withPlaceholderTemplate(t){return this._placeholderTemplate=t,this}withRootElement(t){let e=Q(t);if(e!==this._rootElement){this._removeRootElementListeners();let n=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[n.listen(e,"mousedown",this._pointerDown,Xs),n.listen(e,"touchstart",this._pointerDown,Wc),n.listen(e,"dragstart",this._nativeDragStart,Xs)]),this._initialTransform=void 0,this._rootElement=e}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(t){return this._boundaryElement=t?Q(t):null,this._resizeSubscription.unsubscribe(),t&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(t){return this._parentDragRef=t,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&zc(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let t=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),n=0,o=0;e.left<t.left?n=t.left-e.left:e.right>t.right&&(n=t.right-e.right),e.top<t.top?o=t.top-e.top:e.bottom>t.bottom&&(o=t.bottom-e.bottom);let r=this._activeTransform.x,a=this._activeTransform.y,s=r+n,d=a+o;this._rootElement.style.transform=Tn(s,d),this._activeTransform={x:s,y:d},this._passiveTransform={x:s,y:d}}}disableHandle(t){!this._disabledHandles.has(t)&&this._handles.indexOf(t)>-1&&(this._disabledHandles.add(t),Kt(t,!0))}enableHandle(t){this._disabledHandles.has(t)&&(this._disabledHandles.delete(t),Kt(t,this.disabled))}withDirection(t){return this._direction=t,this}_withDropContainer(t){this._dropContainer=t}getFreeDragPosition(){let t=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:t.x,y:t.y}}setFreeDragPosition(t){return this._activeTransform={x:0,y:0},this._passiveTransform.x=t.x,this._passiveTransform.y=t.y,this._dropContainer||this._applyRootElementTransform(t.x,t.y),this}withPreviewContainer(t){return this._previewContainer=t,this}_sortFromLastPointerPosition(){let t=this._lastKnownPointerPosition;t&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(t),t)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=t=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(t);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,t)}else this.disabled||this._initializeDragSequence(this._rootElement,t)};_pointerMove=t=>{let e=this._getPointerPositionOnPage(t);if(!this._hasStartedDragging()){let o=Math.abs(e.x-this._pickupPositionOnPage.x),r=Math.abs(e.y-this._pickupPositionOnPage.y);if(o+r>=this._config.dragStartThreshold){let s=Date.now()>=this._dragStartTime+this._getDragStartDelay(t),d=this._dropContainer;if(!s){this._endDragSequence(t);return}(!d||!d.isDragging()&&!d.isReceiving())&&(t.cancelable&&t.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(t)))}return}t.cancelable&&t.preventDefault();let n=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(n),this._dropContainer)this._updateActiveDropContainer(n,e);else{let o=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,r=this._activeTransform;r.x=n.x-o.x+this._passiveTransform.x,r.y=n.y-o.y+this._passiveTransform.y,this._applyRootElementTransform(r.x,r.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:n,event:t,distance:this._getDragDistance(n),delta:this._pointerDirectionDelta})})};_pointerUp=t=>{this._endDragSequence(t)};_endDragSequence(t){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:t}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(t),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(t);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:t})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(t){Mn(t)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),n=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",Yc,Gc)}),n){let o=this._rootElement,r=o.parentNode,a=this._placeholder=this._createPlaceholderElement(),s=this._marker=this._marker||this._document.createComment("");r.insertBefore(s,o),this._initialTransform=o.style.transform||"",this._preview=new Cr(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(r,e)),$s(o,!1,Js),this._document.body.appendChild(r.replaceChild(a,o)),this.started.next({source:this,event:t}),n.start(),this._initialContainer=n,this._initialIndex=n.getItemIndex(this)}else this.started.next({source:this,event:t}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(n?n.getScrollableParents():[])}_initializeDragSequence(t,e){this._parentDragRef&&e.stopPropagation();let n=this.isDragging(),o=Mn(e),r=!o&&e.button!==0,a=this._rootElement,s=X(e),d=!o&&this._lastTouchEventTime&&this._lastTouchEventTime+Kc>Date.now(),c=o?yt(e):vt(e);if(s&&s.draggable&&e.type==="mousedown"&&e.preventDefault(),n||r||d||c)return;if(this._handles.length){let j=a.style;this._rootElementTapHighlight=j.webkitTapHighlightColor||"",j.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(j=>this._updateOnScroll(j)),this._boundaryElement&&(this._boundaryRect=Sr(this._boundaryElement));let u=this._previewTemplate;this._pickupPositionInElement=u&&u.template&&!u.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,t,e);let y=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:y.x,y:y.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(t){$s(this._rootElement,!0,Js),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,n=e.getItemIndex(this),o=this._getPointerPositionOnPage(t),r=this._getDragDistance(o),a=e._isOverContainer(o.x,o.y);this.ended.next({source:this,distance:r,dropPoint:o,event:t}),this.dropped.next({item:this,currentIndex:n,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:a,distance:r,dropPoint:o,event:t}),e.drop(this,n,this._initialIndex,this._initialContainer,a,r,o,t),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:t,y:e},{x:n,y:o}){let r=this._initialContainer._getSiblingContainerFromPosition(this,t,e);!r&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(t,e)&&(r=this._initialContainer),r&&r!==this._dropContainer&&this._ngZone.run(()=>{let a=this._dropContainer.getItemIndex(this),s=this._dropContainer.getItemAtIndex(a+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(r,this._dropContainer,s),this._dropContainer=r,this._dropContainer.enter(this,t,e,r===this._initialContainer&&r.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:r,currentIndex:r.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(n,o),this._dropContainer._sortItem(this,t,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(t,e):this._applyPreviewTransform(t-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let t=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(t.left,t.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(n=>{let o=s=>{(!s||this._preview&&X(s)===this._preview.element&&s.propertyName==="transform")&&(a(),n(),clearTimeout(r))},r=setTimeout(o,e*1.5),a=this._preview.addEventListener("transitionend",o)}))}_createPlaceholderElement(){let t=this._placeholderTemplate,e=t?t.template:null,n;return e?(this._placeholderRef=t.viewContainer.createEmbeddedView(e,t.context),this._placeholderRef.detectChanges(),n=rl(this._placeholderRef,this._document)):n=vr(this._rootElement),n.style.pointerEvents="none",n.classList.add(Qs),n}_getPointerPositionInElement(t,e,n){let o=e===this._rootElement?null:e,r=o?o.getBoundingClientRect():t,a=Mn(n)?n.targetTouches[0]:n,s=this._getViewportScrollPosition(),d=a.pageX-r.left-s.left,c=a.pageY-r.top-s.top;return{x:r.left-t.left+d,y:r.top-t.top+c}}_getPointerPositionOnPage(t){let e=this._getViewportScrollPosition(),n=Mn(t)?t.touches[0]||t.changedTouches[0]||{pageX:0,pageY:0}:t,o=n.pageX-e.left,r=n.pageY-e.top;if(this._ownerSVGElement){let a=this._ownerSVGElement.getScreenCTM();if(a){let s=this._ownerSVGElement.createSVGPoint();return s.x=o,s.y=r,s.matrixTransform(a.inverse())}}return{x:o,y:r}}_getConstrainedPointerPosition(t){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:n,y:o}=this.constrainPosition?this.constrainPosition(t,this,this._initialDomRect,this._pickupPositionInElement):t;if(this.lockAxis==="x"||e==="x"?o=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(n=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:r,y:a}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,s=this._boundaryRect,{width:d,height:c}=this._getPreviewRect(),u=s.top+a,y=s.bottom-(c-a),j=s.left+r,J=s.right-(d-r);n=el(n,j,J),o=el(o,u,y)}return{x:n,y:o}}_updatePointerDirectionDelta(t){let{x:e,y:n}=t,o=this._pointerDirectionDelta,r=this._pointerPositionAtLastDirectionChange,a=Math.abs(e-r.x),s=Math.abs(n-r.y);return a>this._config.pointerDirectionChangeThreshold&&(o.x=e>r.x?1:-1,r.x=e),s>this._config.pointerDirectionChangeThreshold&&(o.y=n>r.y?1:-1,r.y=n),o}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let t=this._handles.length>0||!this.isDragging();t!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=t,Kt(this._rootElement,t))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(t=>t()),this._rootElementCleanups=void 0}_applyRootElementTransform(t,e){let n=1/this.scale,o=Tn(t*n,e*n),r=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=r.transform&&r.transform!="none"?r.transform:""),r.transform=Fi(o,this._initialTransform)}_applyPreviewTransform(t,e){let n=this._previewTemplate?.template?void 0:this._initialTransform,o=Tn(t,e);this._preview.setTransform(Fi(o,n))}_getDragDistance(t){let e=this._pickupPositionOnPage;return e?{x:t.x-e.x,y:t.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:t,y:e}=this._passiveTransform;if(t===0&&e===0||this.isDragging()||!this._boundaryElement)return;let n=this._rootElement.getBoundingClientRect(),o=this._boundaryElement.getBoundingClientRect();if(o.width===0&&o.height===0||n.width===0&&n.height===0)return;let r=o.left-n.left,a=n.right-o.right,s=o.top-n.top,d=n.bottom-o.bottom;o.width>n.width?(r>0&&(t+=r),a>0&&(t-=a)):t=0,o.height>n.height?(s>0&&(e+=s),d>0&&(e-=d)):e=0,(t!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:t})}_getDragStartDelay(t){let e=this.dragStartDelay;return typeof e=="number"?e:Mn(t)?e.touch:e?e.mouse:0}_updateOnScroll(t){let e=this._parentPositions.handleScroll(t);if(e){let n=X(t);this._boundaryRect&&n!==this._boundaryElement&&n.contains(this._boundaryElement)&&In(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=Ct(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(t,e){let n=this._previewContainer||"global";if(n==="parent")return t;if(n==="global"){let o=this._document;return e||o.fullscreenElement||o.webkitFullscreenElement||o.mozFullScreenElement||o.msFullscreenElement||o.body}return Q(n)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=t=>{if(this._handles.length){let e=this._getTargetHandle(t);e&&!this._disabledHandles.has(e)&&!this.disabled&&t.preventDefault()}else this.disabled||t.preventDefault()};_getTargetHandle(t){return this._handles.find(e=>t.target&&(t.target===e||e.contains(t.target)))}_conditionallyInsertAnchor(t,e,n){if(t===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let o=this._anchor??=vr(this._placeholder);o.classList.remove(Qs),o.classList.add("cdk-drag-anchor"),o.style.transform="",n?n.before(o):Q(e.element).appendChild(o)}}};function el(i,t,e){return Math.max(t,Math.min(e,i))}function Mn(i){return i.type[0]==="t"}function Yc(i){i.preventDefault()}function al(i,t,e){let n=tl(t,i.length-1),o=tl(e,i.length-1);if(n===o)return;let r=i[n],a=o<n?-1:1;for(let s=n;s!==o;s+=a)i[s]=i[s+a];i[o]=r}function tl(i,t){return Math.max(0,Math.min(t,i))}var Ni=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(t){this._dragDropRegistry=t}_previousSwap={drag:null,delta:0,overlaps:!1};start(t){this.withItems(t)}sort(t,e,n,o){let r=this._itemPositions,a=this._getItemIndexFromPointerPosition(t,e,n,o);if(a===-1&&r.length>0)return null;let s=this.orientation==="horizontal",d=r.findIndex(ie=>ie.drag===t),c=r[a],u=r[d].clientRect,y=c.clientRect,j=d>a?1:-1,J=this._getItemOffsetPx(u,y,j),ee=this._getSiblingOffsetPx(d,r,j),q=r.slice();return al(r,d,a),r.forEach((ie,ii)=>{if(q[ii]===ie)return;let Ot=ie.drag===t,Pt=Ot?J:ee,Ma=Ot?t.getPlaceholderElement():ie.drag.getRootElement();ie.offset+=Pt;let Ia=Math.round(ie.offset*(1/ie.drag.scale));s?(Ma.style.transform=Fi(`translate3d(${Ia}px, 0, 0)`,ie.initialTransform),In(ie.clientRect,0,Pt)):(Ma.style.transform=Fi(`translate3d(0, ${Ia}px, 0)`,ie.initialTransform),In(ie.clientRect,Pt,0))}),this._previousSwap.overlaps=yr(y,e,n),this._previousSwap.drag=c.drag,this._previousSwap.delta=s?o.x:o.y,{previousIndex:d,currentIndex:a}}enter(t,e,n,o){let r=this._activeDraggables,a=r.indexOf(t),s=t.getPlaceholderElement();a>-1&&r.splice(a,1);let d=o==null||o<0?this._getItemIndexFromPointerPosition(t,e,n):o,c=r[d];if(c===t&&(c=r[d+1]),!c&&(d==null||d===-1||d<r.length-1)&&this._shouldEnterAsFirstChild(e,n)&&(c=r[0]),c&&!this._dragDropRegistry.isDragging(c)){let u=c.getRootElement();u.parentElement.insertBefore(s,u),r.splice(d,0,t)}else this._element.appendChild(s),r.push(t);s.style.transform="",this._cacheItemPositions()}withItems(t){this._activeDraggables=t.slice(),this._cacheItemPositions()}withSortPredicate(t){this._sortPredicate=t}reset(){this._activeDraggables?.forEach(t=>{let e=t.getRootElement();if(e){let n=this._itemPositions.find(o=>o.drag===t)?.initialTransform;e.style.transform=n||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(t){return this._getVisualItemPositions().findIndex(e=>e.drag===t)}getItemAtIndex(t){return this._getVisualItemPositions()[t]?.drag||null}updateOnScroll(t,e){this._itemPositions.forEach(({clientRect:n})=>{In(n,t,e)}),this._itemPositions.forEach(({drag:n})=>{this._dragDropRegistry.isDragging(n)&&n._sortFromLastPointerPosition()})}withElementContainer(t){this._element=t}_cacheItemPositions(){let t=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let n=e.getVisibleElement();return{drag:e,offset:0,initialTransform:n.style.transform||"",clientRect:Sr(n)}}).sort((e,n)=>t?e.clientRect.left-n.clientRect.left:e.clientRect.top-n.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(t,e,n){let o=this.orientation==="horizontal",r=o?e.left-t.left:e.top-t.top;return n===-1&&(r+=o?e.width-t.width:e.height-t.height),r}_getSiblingOffsetPx(t,e,n){let o=this.orientation==="horizontal",r=e[t].clientRect,a=e[t+n*-1],s=r[o?"width":"height"]*n;if(a){let d=o?"left":"top",c=o?"right":"bottom";n===-1?s-=a.clientRect[d]-r[c]:s+=r[d]-a.clientRect[c]}return s}_shouldEnterAsFirstChild(t,e){if(!this._activeDraggables.length)return!1;let n=this._itemPositions,o=this.orientation==="horizontal";if(n[0].drag!==this._activeDraggables[0]){let a=n[n.length-1].clientRect;return o?t>=a.right:e>=a.bottom}else{let a=n[0].clientRect;return o?t<=a.left:e<=a.top}}_getItemIndexFromPointerPosition(t,e,n,o){let r=this.orientation==="horizontal",a=this._itemPositions.findIndex(({drag:s,clientRect:d})=>{if(s===t)return!1;if(o){let c=r?o.x:o.y;if(s===this._previousSwap.drag&&this._previousSwap.overlaps&&c===this._previousSwap.delta)return!1}return r?e>=Math.floor(d.left)&&e<Math.floor(d.right):n>=Math.floor(d.top)&&n<Math.floor(d.bottom)});return a===-1||!this._sortPredicate(a,t)?-1:a}},Dr=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(t,e){this._document=t,this._dragDropRegistry=e}start(t){let e=this._element.childNodes;this._relatedNodes=[];for(let n=0;n<e.length;n++){let o=e[n];this._relatedNodes.push([o,o.nextSibling])}this.withItems(t)}sort(t,e,n,o){let r=this._getItemIndexFromPointerPosition(t,e,n),a=this._previousSwap;if(r===-1||this._activeItems[r]===t)return null;let s=this._activeItems[r];if(a.drag===s&&a.overlaps&&a.deltaX===o.x&&a.deltaY===o.y)return null;let d=this.getItemIndex(t),c=t.getPlaceholderElement(),u=s.getRootElement();r>d?u.after(c):u.before(c),al(this._activeItems,d,r);let y=this._getRootNode().elementFromPoint(e,n);return a.deltaX=o.x,a.deltaY=o.y,a.drag=s,a.overlaps=u===y||u.contains(y),{previousIndex:d,currentIndex:r}}enter(t,e,n,o){let r=this._activeItems.indexOf(t);r>-1&&this._activeItems.splice(r,1);let a=o==null||o<0?this._getItemIndexFromPointerPosition(t,e,n):o;a===-1&&(a=this._getClosestItemIndexToPointer(t,e,n));let s=this._activeItems[a];s&&!this._dragDropRegistry.isDragging(s)?(this._activeItems.splice(a,0,t),s.getRootElement().before(t.getPlaceholderElement())):(this._activeItems.push(t),this._element.appendChild(t.getPlaceholderElement()))}withItems(t){this._activeItems=t.slice()}withSortPredicate(t){this._sortPredicate=t}reset(){let t=this._element,e=this._previousSwap;for(let n=this._relatedNodes.length-1;n>-1;n--){let[o,r]=this._relatedNodes[n];o.parentNode===t&&o.nextSibling!==r&&(r===null?t.appendChild(o):r.parentNode===t&&t.insertBefore(o,r))}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(t){return this._activeItems.indexOf(t)}getItemAtIndex(t){return this._activeItems[t]||null}updateOnScroll(){this._activeItems.forEach(t=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition()})}withElementContainer(t){t!==this._element&&(this._element=t,this._rootNode=void 0)}_getItemIndexFromPointerPosition(t,e,n){let o=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(n)),r=o?this._activeItems.findIndex(a=>{let s=a.getRootElement();return o===s||s.contains(o)}):-1;return r===-1||!this._sortPredicate(r,t)?-1:r}_getRootNode(){return this._rootNode||(this._rootNode=Ct(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(t,e,n){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let o=1/0,r=-1;for(let a=0;a<this._activeItems.length;a++){let s=this._activeItems[a];if(s!==t){let{x:d,y:c}=s.getRootElement().getBoundingClientRect(),u=Math.hypot(e-d,n-c);u<o&&(o=u,r=a)}}return r}},nl=.05,sl=.05,ke=(function(i){return i[i.NONE=0]="NONE",i[i.UP=1]="UP",i[i.DOWN=2]="DOWN",i})(ke||{}),be=(function(i){return i[i.NONE=0]="NONE",i[i.LEFT=1]="LEFT",i[i.RIGHT=2]="RIGHT",i})(be||{});function qc(i,t){return new Er(t,i.get(Mr),i.get(F),i.get(D),i.get(He))}var Er=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new f;entered=new f;exited=new f;dropped=new f;sorted=new f;receivingStarted=new f;receivingStopped=new f;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=oe.EMPTY;_verticalScrollDirection=ke.NONE;_horizontalScrollDirection=be.NONE;_scrollNode;_stopScrollTimers=new f;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(t,e,n,o,r){this._dragDropRegistry=e,this._ngZone=o,this._viewportRuler=r;let a=this.element=Q(t);this._document=n,this.withOrientation("vertical").withElementContainer(a),e.registerDropContainer(this),this._parentPositions=new Pi(n)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(t,e,n,o){this._draggingStarted(),o==null&&this.sortingDisabled&&(o=this._draggables.indexOf(t)),this._sortStrategy.enter(t,e,n,o),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:t,container:this,currentIndex:this.getItemIndex(t)})}exit(t){this._reset(),this.exited.next({item:t,container:this})}drop(t,e,n,o,r,a,s,d={}){this._reset(),this.dropped.next({item:t,currentIndex:e,previousIndex:n,container:this,previousContainer:o,isPointerOverContainer:r,distance:a,dropPoint:s,event:d})}withItems(t){let e=this._draggables;return this._draggables=t,t.forEach(n=>n._withDropContainer(this)),this.isDragging()&&(e.filter(o=>o.isDragging()).every(o=>t.indexOf(o)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(t){return this._direction=t,this._sortStrategy instanceof Ni&&(this._sortStrategy.direction=t),this}connectedTo(t){return this._siblings=t.slice(),this}withOrientation(t){if(t==="mixed")this._sortStrategy=new Dr(this._document,this._dragDropRegistry);else{let e=new Ni(this._dragDropRegistry);e.direction=this._direction,e.orientation=t,this._sortStrategy=e}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,n)=>this.sortPredicate(e,n,this)),this}withScrollableParents(t){let e=this._container;return this._scrollableElements=t.indexOf(e)===-1?[e,...t]:t.slice(),this}withElementContainer(t){if(t===this._container)return this;let e=Q(this.element),n=this._scrollableElements.indexOf(this._container),o=this._scrollableElements.indexOf(t);return n>-1&&this._scrollableElements.splice(n,1),o>-1&&this._scrollableElements.splice(o,1),this._sortStrategy&&this._sortStrategy.withElementContainer(t),this._cachedShadowRoot=null,this._scrollableElements.unshift(t),this._container=t,this}getScrollableParents(){return this._scrollableElements}getItemIndex(t){return this._isDragging?this._sortStrategy.getItemIndex(t):this._draggables.indexOf(t)}getItemAtIndex(t){return this._isDragging?this._sortStrategy.getItemAtIndex(t):this._draggables[t]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(t,e,n,o){if(this.sortingDisabled||!this._domRect||!Ks(this._domRect,nl,e,n))return;let r=this._sortStrategy.sort(t,e,n,o);r&&this.sorted.next({previousIndex:r.previousIndex,currentIndex:r.currentIndex,container:this,item:t})}_startScrollingIfNecessary(t,e){if(this.autoScrollDisabled)return;let n,o=ke.NONE,r=be.NONE;if(this._parentPositions.positions.forEach((a,s)=>{s===this._document||!a.clientRect||n||Ks(a.clientRect,nl,t,e)&&([o,r]=Zc(s,a.clientRect,this._direction,t,e),(o||r)&&(n=s))}),!o&&!r){let{width:a,height:s}=this._viewportRuler.getViewportSize(),d={width:a,height:s,top:0,right:a,bottom:s,left:0};o=ll(d,e),r=dl(d,t),n=window}n&&(o!==this._verticalScrollDirection||r!==this._horizontalScrollDirection||n!==this._scrollNode)&&(this._verticalScrollDirection=o,this._horizontalScrollDirection=r,this._scrollNode=n,(o||r)&&n?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let t=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=t.msScrollSnapType||t.scrollSnapType||"",t.scrollSnapType=t.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let t=this._container.style;t.scrollSnapType=t.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),Fa(0,Bo).pipe(ae(this._stopScrollTimers)).subscribe(()=>{let t=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===ke.UP?t.scrollBy(0,-e):this._verticalScrollDirection===ke.DOWN&&t.scrollBy(0,e),this._horizontalScrollDirection===be.LEFT?t.scrollBy(-e,0):this._horizontalScrollDirection===be.RIGHT&&t.scrollBy(e,0)})};_isOverContainer(t,e){return this._domRect!=null&&yr(this._domRect,t,e)}_getSiblingContainerFromPosition(t,e,n){return this._siblings.find(o=>o._canReceive(t,e,n))}_canReceive(t,e,n){if(!this._domRect||!yr(this._domRect,e,n)||!this.enterPredicate(t,this))return!1;let o=this._getShadowRoot().elementFromPoint(e,n);return o?o===this._container||this._container.contains(o):!1}_startReceiving(t,e){let n=this._activeSiblings;!n.has(t)&&e.every(o=>this.enterPredicate(o,this)||this._draggables.indexOf(o)>-1)&&(n.add(t),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:t,receiver:this,items:e}))}_stopReceiving(t){this._activeSiblings.delete(t),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:t,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(t=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(t);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let t=Ct(this._container);this._cachedShadowRoot=t||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let t=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,t))}};function ll(i,t){let{top:e,bottom:n,height:o}=i,r=o*sl;return t>=e-r&&t<=e+r?ke.UP:t>=n-r&&t<=n+r?ke.DOWN:ke.NONE}function dl(i,t){let{left:e,right:n,width:o}=i,r=o*sl;return t>=e-r&&t<=e+r?be.LEFT:t>=n-r&&t<=n+r?be.RIGHT:be.NONE}function Zc(i,t,e,n,o){let r=ll(t,o),a=dl(t,n),s=ke.NONE,d=be.NONE;if(r){let c=i.scrollTop;r===ke.UP?c>0&&(s=ke.UP):i.scrollHeight-c>i.clientHeight&&(s=ke.DOWN)}if(a){let c=i.scrollLeft;e==="rtl"?a===be.RIGHT?c<0&&(d=be.RIGHT):i.scrollWidth+c>i.clientWidth&&(d=be.LEFT):a===be.LEFT?c>0&&(d=be.LEFT):i.scrollWidth-c>i.clientWidth&&(d=be.RIGHT)}return[s,d]}var il=new p("CDK_DRAG_PARENT");var Xc=new p("CdkDragHandle");var cl=new p("CDK_DRAG_CONFIG"),ul=new p("CdkDropList"),hl=(()=>{class i{element=l(E);dropContainer=l(ul,{optional:!0,skipSelf:!0});_ngZone=l(D);_viewContainerRef=l(_t);_dir=l(fe,{optional:!0});_changeDetectorRef=l(De);_selfHandle=l(Xc,{optional:!0,self:!0});_parentDrag=l(il,{optional:!0,skipSelf:!0});_dragDropRegistry=l(Mr);_destroyed=new f;_handles=new oi([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new k;released=new k;ended=new k;entered=new k;exited=new k;dropped=new k;moved=new Ke(e=>{let n=this._dragRef.moved.pipe(re(o=>({source:this,pointerPosition:o.pointerPosition,event:o.event,delta:o.delta,distance:o.distance}))).subscribe(e);return()=>{n.unsubscribe()}});_injector=l(R);constructor(){let e=this.dropContainer,n=l(cl,{optional:!0});this._dragRef=$c(this._injector,this.element,{dragStartThreshold:n&&n.dragStartThreshold!=null?n.dragStartThreshold:5,pointerDirectionChangeThreshold:n&&n.pointerDirectionChangeThreshold!=null?n.pointerDirectionChangeThreshold:5,zIndex:n?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),n&&this._assignDefaults(n),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(ae(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){Te(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(e){let n=e.rootElementSelector,o=e.freeDragPosition;n&&!n.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,o&&!o.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(e){let n=this._handles.getValue();n.push(e),this._handles.next(n)}_removeHandle(e){let n=this._handles.getValue(),o=n.indexOf(e);o>-1&&(n.splice(o,1),this._handles.next(n))}_setPreviewTemplate(e){this._previewTemplate=e}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(e){this._placeholderTemplate=e}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let e=this.element.nativeElement,n=e;this.rootElementSelector&&(n=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(n||e)}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):Q(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let n=this._dir,o=this.dragStartDelay,r=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,a=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof o=="object"&&o?o:qe(o),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(r).withPreviewTemplate(a).withPreviewContainer(this.previewContainer||"global"),n&&e.withDirection(n.value)}}),e.beforeStarted.pipe(xe(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let n=this.element.nativeElement.parentElement;for(;n;){let o=this._dragDropRegistry.getDragDirectiveForNode(n);if(o){e.withParent(o._dragRef);break}n=n.parentElement}})}_handleEvents(e){e.started.subscribe(n=>{this.started.emit({source:this,event:n.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(n=>{this.released.emit({source:this,event:n.event})}),e.ended.subscribe(n=>{this.ended.emit({source:this,distance:n.distance,dropPoint:n.dropPoint,event:n.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(n=>{this.entered.emit({container:n.container.data,item:this,currentIndex:n.currentIndex})}),e.exited.subscribe(n=>{this.exited.emit({container:n.container.data,item:this})}),e.dropped.subscribe(n=>{this.dropped.emit({previousIndex:n.previousIndex,currentIndex:n.currentIndex,previousContainer:n.previousContainer.data,container:n.container.data,isPointerOverContainer:n.isPointerOverContainer,item:this,distance:n.distance,dropPoint:n.dropPoint,event:n.event})})}_assignDefaults(e){let{lockAxis:n,dragStartDelay:o,constrainPosition:r,previewClass:a,boundaryElement:s,draggingDisabled:d,rootElementSelector:c,previewContainer:u}=e;this.disabled=d??!1,this.dragStartDelay=o||0,this.lockAxis=n||null,r&&(this.constrainPosition=r),a&&(this.previewClass=a),s&&(this.boundaryElement=s),c&&(this.rootElementSelector=c),u&&(this.previewContainer=u)}_setupHandlesListener(){this._handles.pipe(Je(e=>{let n=e.map(o=>o.element);this._selfHandle&&this.rootElementSelector&&n.push(this.element),this._dragRef.withHandles(n)}),Nt(e=>Ee(...e.map(n=>n._stateChanges.pipe(pe(n))))),ae(this._destroyed)).subscribe(e=>{let n=this._dragRef,o=e.element.nativeElement;e.disabled?n.disableHandle(o):n.enableHandle(o)})}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(n,o){n&2&&L("cdk-drag-disabled",o.disabled)("cdk-drag-dragging",o._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",P],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",xt]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[ue([{provide:il,useExisting:i}]),we]})}return i})(),ol=new p("CdkDropListGroup");var ml=(()=>{class i{element=l(E);_changeDetectorRef=l(De);_scrollDispatcher=l(Gt);_dir=l(fe,{optional:!0});_group=l(ol,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new f;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=l(te).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new k;entered=new k;exited=new k;sorted=new k;_unsortedItems=new Set;constructor(){let e=l(cl,{optional:!0}),n=l(R);this._dropListRef=qc(n,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(o,r)=>this.enterPredicate(o.data,r.data),this._dropListRef.sortPredicate=(o,r,a)=>this.sortPredicate(o,r.data,a.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),i._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(n=>n._dragRef))}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let n=this._latestSortedRefs.indexOf(e._dragRef);n>-1&&(this._latestSortedRefs.splice(n,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,n)=>e._dragRef.getVisibleElement().compareDocumentPosition(n._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=i._dropLists.indexOf(this);e>-1&&i._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(pe(this._dir.value),ae(this._destroyed)).subscribe(n=>e.withDirection(n)),e.beforeStarted.subscribe(()=>{let n=ot(this.connectedTo).map(o=>{if(typeof o=="string"){let r=i._dropLists.find(a=>a.id===o);return r}return o});if(this._group&&this._group._items.forEach(o=>{n.indexOf(o)===-1&&n.push(o)}),!this._scrollableParentsResolved){let o=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(r=>r.getElementRef().nativeElement);this._dropListRef.withScrollableParents(o),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let o=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(o)}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=qe(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(n.filter(o=>o&&o!==this).map(o=>o._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(n=>n._dragRef)),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(n=>{this.entered.emit({container:this,item:n.item.data,currentIndex:n.currentIndex})}),e.exited.subscribe(n=>{this.exited.emit({container:this,item:n.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(n=>{this.sorted.emit({previousIndex:n.previousIndex,currentIndex:n.currentIndex,container:this,item:n.item.data})}),e.dropped.subscribe(n=>{this.dropped.emit({previousIndex:n.previousIndex,currentIndex:n.currentIndex,previousContainer:n.previousContainer.data,container:n.container.data,item:n.item.data,isPointerOverContainer:n.isPointerOverContainer,distance:n.distance,dropPoint:n.dropPoint,event:n.event}),this._changeDetectorRef.markForCheck()}),Ee(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(e){let{lockAxis:n,draggingDisabled:o,sortingDisabled:r,listAutoScrollDisabled:a,listOrientation:s}=e;this.disabled=o??!1,this.sortingDisabled=r??!1,this.autoScrollDisabled=a??!1,this.orientation=s||"vertical",this.lockAxis=n||null}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e)}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(n,o){n&2&&(N("id",o.id),L("cdk-drop-list-disabled",o.disabled)("cdk-drop-list-dragging",o._dropListRef.isDragging())("cdk-drop-list-receiving",o._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",P],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",P],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",P],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",P]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[ue([{provide:ol,useValue:void 0},{provide:ul,useExisting:i}])]})}return i})();var Qc=(i,t)=>t.id;function Jc(i,t){if(i&1){let e=it();m(0,"app-task-card-component",6),Ka("task-leave"),Ga("task-enter"),I("taskMoved",function(o){let r=Me(e).$implicit,a=B();return Ie(a.onMove(r,o))})("taskEdited",function(o){Me(e);let r=B();return Ie(r.editTask(o))})("taskDeleted",function(o){Me(e);let r=B();return Ie(r.deleteTask(o))}),h()}if(i&2){let e=t.$implicit;V("cdkDragData",e)("task",e)}}function eu(i,t){if(i&1&&(m(0,"div",5)(1,"p"),x(2),h()()),i&2){let e=B();g(2),ye(e.emptyStateMessage())}}var Li=class i{title=ze("");tasks=ze([]);taskMoved=Be();taskEdited=Be();taskDeleted=Be();emptyStateMessage=ze("");columnType=ze("todo");onMove(t,e){this.taskMoved.emit({task:t,newStatus:e})}editTask(t){this.taskEdited.emit(t)}deleteTask(t){this.taskDeleted.emit(t)}columnClassMap={todo:"column todo-column",inProgress:"column in-progress-column",done:"column done-column"};getColumnClass=b(()=>this.columnClassMap[this.columnType()]??"column");static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-column-component"]],inputs:{title:[1,"title"],tasks:[1,"tasks"],emptyStateMessage:[1,"emptyStateMessage"],columnType:[1,"columnType"]},outputs:{taskMoved:"taskMoved",taskEdited:"taskEdited",taskDeleted:"taskDeleted"},decls:10,vars:8,consts:[["role","region",1,"column"],[1,"column-header"],["aria-live","polite",1,"task-count"],["role","list",1,"tasks-container"],["role","listitem","cdkDrag","",3,"cdkDragData","task"],[1,"empty-column"],["role","listitem","cdkDrag","",3,"taskMoved","taskEdited","taskDeleted","cdkDragData","task"]],template:function(e,n){e&1&&(m(0,"div",0)(1,"div",1)(2,"h2"),x(3),h(),m(4,"span",2),x(5),h()(),m(6,"div",3),$a(7,Jc,1,2,"app-task-card-component",4,Qc,!1,eu,3,1,"div",5),h()()),e&2&&(Ve(n.getColumnClass()),N("aria-label",n.title()),g(3),ye(n.title()),g(),N("aria-label",n.tasks().length+" tareas"),g(),ye(n.tasks().length),g(),N("aria-label","Tareas en "+n.title()),g(),Ya(n.tasks()))},dependencies:[Oi,hl],styles:["[_nghost-%COMP%]{display:block}.column[_ngcontent-%COMP%]{background:var(--filter-bg, #f4f5f7);border-radius:8px;padding:16px;min-height:500px;transition:background .3s ease}.column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;padding-bottom:8px;border-bottom:2px solid var(--text-main)}.column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.2rem;color:var(--text-main)}.column[_ngcontent-%COMP%]   .column-header[_ngcontent-%COMP%]   .task-count[_ngcontent-%COMP%]{background:var(--app-bg, #fff);color:var(--text-main);padding:2px 8px;border-radius:12px;font-size:.8rem;font-weight:700}.empty-column[_ngcontent-%COMP%]{text-align:center;color:#999;padding:40px 20px}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translateY(-10px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes _ngcontent-%COMP%_slideOut{0%{opacity:1;transform:translateY(0) scale(1)}to{opacity:0;transform:translateY(10px) scale(.97)}}.task-enter[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideIn .25s ease-out}.task-leave[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideOut .2s ease-in}"],changeDetection:0})};var vl=new p("");function Rr(i){return i==null||Ar(i)===0}function Ar(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var yl=new p(""),Cl=new p(""),tu=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,st=class{static min(t){return nu(t)}static max(t){return iu(t)}static required(t){return ou(t)}static requiredTrue(t){return ru(t)}static email(t){return au(t)}static minLength(t){return su(t)}static maxLength(t){return lu(t)}static pattern(t){return du(t)}static nullValidator(t){return wl()}static compose(t){return Il(t)}static composeAsync(t){return Tl(t)}};function nu(i){return t=>{if(t.value==null||i==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<i?{min:{min:i,actual:t.value}}:null}}function iu(i){return t=>{if(t.value==null||i==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>i?{max:{max:i,actual:t.value}}:null}}function ou(i){return Rr(i.value)?{required:!0}:null}function ru(i){return i.value===!0?null:{required:!0}}function au(i){return Rr(i.value)||tu.test(i.value)?null:{email:!0}}function su(i){return t=>{let e=t.value?.length??Ar(t.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function lu(i){return t=>{let e=t.value?.length??Ar(t.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function du(i){if(!i)return wl;let t,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=i.toString(),t=i),n=>{if(Rr(n.value))return null;let o=n.value;return t.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function wl(i){return null}function Dl(i){return i!=null}function El(i){return $o(i)?Ra(i):i}function Sl(i){let t={};return i.forEach(e=>{t=e!=null?_(_({},t),e):t}),Object.keys(t).length===0?null:t}function kl(i,t){return t.map(e=>e(i))}function cu(i){return!i.validate}function Ml(i){return i.map(t=>cu(t)?t:e=>t.validate(e))}function Il(i){if(!i)return null;let t=i.filter(Dl);return t.length==0?null:function(e){return Sl(kl(e,t))}}function Or(i){return i!=null?Il(Ml(i)):null}function Tl(i){if(!i)return null;let t=i.filter(Dl);return t.length==0?null:function(e){let n=kl(e,t).map(El);return ri(n).pipe(re(Sl))}}function Pr(i){return i!=null?Tl(Ml(i)):null}function fl(i,t){return i===null?[t]:Array.isArray(i)?[...i,t]:[i,t]}function Rl(i){return i._rawValidators}function Al(i){return i._rawAsyncValidators}function Ir(i){return i?Array.isArray(i)?i:[i]:[]}function Bi(i,t){return Array.isArray(i)?i.includes(t):i===t}function pl(i,t){let e=Ir(t);return Ir(i).forEach(o=>{Bi(e,o)||e.push(o)}),e}function _l(i,t){return Ir(t).filter(e=>!Bi(i,e))}var zi=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Or(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Pr(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},qt=class extends zi{name;get formDirective(){return null}get path(){return null}},lt=class extends zi{_parent=null;name=null;valueAccessor=null};var Rn="VALID",Vi="INVALID",$t="PENDING",An="DISABLED",dt=class{},ji=class extends dt{value;source;constructor(t,e){super(),this.value=t,this.source=e}},Pn=class extends dt{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},Fn=class extends dt{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},Yt=class extends dt{status;source;constructor(t,e){super(),this.status=t,this.source=e}},Hi=class extends dt{source;constructor(t){super(),this.source=t}},Ui=class extends dt{source;constructor(t){super(),this.source=t}};function Ol(i){return(Ki(i)?i.validators:i)||null}function uu(i){return Array.isArray(i)?Or(i):i||null}function Pl(i,t){return(Ki(t)?t.asyncValidators:i)||null}function hu(i){return Array.isArray(i)?Pr(i):i||null}function Ki(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function mu(i,t,e){let n=i.controls;if(!(t?Object.keys(n):n).length)throw new Z(1e3,"");if(!n[e])throw new Z(1001,"")}function fu(i,t,e){i._forEachChild((n,o)=>{if(e[o]===void 0)throw new Z(-1002,"")})}var Zt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return O(this.statusReactive)}set status(t){O(()=>this.statusReactive.set(t))}_status=b(()=>this.statusReactive());statusReactive=M(void 0);get valid(){return this.status===Rn}get invalid(){return this.status===Vi}get pending(){return this.status===$t}get disabled(){return this.status===An}get enabled(){return this.status!==An}errors;get pristine(){return O(this.pristineReactive)}set pristine(t){O(()=>this.pristineReactive.set(t))}_pristine=b(()=>this.pristineReactive());pristineReactive=M(!0);get dirty(){return!this.pristine}get touched(){return O(this.touchedReactive)}set touched(t){O(()=>this.touchedReactive.set(t))}_touched=b(()=>this.touchedReactive());touchedReactive=M(!1);get untouched(){return!this.touched}_events=new f;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(pl(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(pl(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(_l(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(_l(t,this._rawAsyncValidators))}hasValidator(t){return Bi(this._rawValidators,t)}hasAsyncValidator(t){return Bi(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(G(_({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new Fn(!0,n))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=t.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:n})}),t.onlySelf||this._parent?._updateTouched(t,n),e&&t.emitEvent!==!1&&this._events.next(new Fn(!1,n))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(G(_({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new Pn(!1,n))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=t.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,n),e&&t.emitEvent!==!1&&this._events.next(new Pn(!0,n))}markAsPending(t={}){this.status=$t;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Yt(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(G(_({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=An,this.errors=null,this._forEachChild(o=>{o.disable(G(_({},t),{onlySelf:!0}))}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new ji(this.value,n)),this._events.next(new Yt(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(G(_({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Rn,this._forEachChild(n=>{n.enable(G(_({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(G(_({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Rn||this.status===$t)&&this._runAsyncValidator(n,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new ji(this.value,e)),this._events.next(new Yt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(G(_({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?An:Rn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=$t,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let n=El(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,o)=>n&&n._find(o),this)}getError(t,e){let n=e?this.get(e):this;return n?.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new Yt(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n)}_initObservables(){this.valueChanges=new k,this.statusChanges=new k}_calculateStatus(){return this._allControlsDisabled()?An:this.errors?Vi:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus($t)?$t:this._anyControlsHaveStatus(Vi)?Vi:Rn}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,t.onlySelf||this._parent?._updatePristine(t,e),o&&this._events.next(new Pn(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new Fn(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Ki(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=uu(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=hu(this._rawAsyncValidators)}},Nn=class extends Zt{constructor(t,e,n){super(Ol(e),Pl(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){fu(this,!0,t),Object.keys(t).forEach(n=>{mu(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let o=this.controls[n];o&&o.patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,o)=>{n.reset(t?t[o]:null,G(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ui(this))}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,n,o)=>((n.enabled||this.disabled)&&(e[o]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((o,r)=>{n=e(n,o,r)}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var Fl=new p("",{factory:()=>Nl}),Nl="always";function Tr(i,t,e=Nl){Fr(i,t),t.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(i.disabled),_u(i,t),bu(i,t),gu(i,t),pu(i,t)}function gl(i,t,e=!0){let n=()=>{};t?.valueAccessor?.registerOnChange(n),t?.valueAccessor?.registerOnTouched(n),Gi(i,t),i&&(t._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Wi(i,t){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function pu(i,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(e),t._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function Fr(i,t){let e=Rl(i);t.validator!==null?i.setValidators(fl(e,t.validator)):typeof e=="function"&&i.setValidators([e]);let n=Al(i);t.asyncValidator!==null?i.setAsyncValidators(fl(n,t.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let o=()=>i.updateValueAndValidity();Wi(t._rawValidators,o),Wi(t._rawAsyncValidators,o)}function Gi(i,t){let e=!1;if(i!==null){if(t.validator!==null){let o=Rl(i);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==t.validator);r.length!==o.length&&(e=!0,i.setValidators(r))}}if(t.asyncValidator!==null){let o=Al(i);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==t.asyncValidator);r.length!==o.length&&(e=!0,i.setAsyncValidators(r))}}}let n=()=>{};return Wi(t._rawValidators,n),Wi(t._rawAsyncValidators,n),e}function _u(i,t){t.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ll(i,t)})}function gu(i,t){t.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ll(i,t),i.updateOn!=="submit"&&i.markAsTouched()})}function Ll(i,t){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function bu(i,t){let e=(n,o)=>{t.valueAccessor.writeValue(n),o&&t.viewToModelUpdate(n)};i.registerOnChange(e),t._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function Vl(i,t){i==null,Fr(i,t)}function xu(i,t){return Gi(i,t)}function Bl(i,t){i._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function vu(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}var yu={provide:qt,useExisting:li(()=>Ln)},On=Promise.resolve(),Ln=(()=>{class i extends qt{callSetDisabledState;get submitted(){return O(this.submittedReactive)}_submitted=b(()=>this.submittedReactive());submittedReactive=M(!1);_directives=new Set;form;ngSubmit=new k;options;constructor(e,n,o){super(),this.callSetDisabledState=o,this.form=new Nn({},Or(e),Pr(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){On.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),Tr(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){On.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){On.then(()=>{let n=this._findContainer(e.path),o=new Nn({});Vl(o,e),n.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){On.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){On.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Bl(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Hi(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||i)(pt(yl,10),pt(Cl,10),pt(Fl,8))};static \u0275dir=S({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,o){n&1&&I("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ue([yu]),de]})}return i})();function bl(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}function xl(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Cu=class extends Zt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,n){super(Ol(e),Pl(n,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ki(e)&&(e.nonNullable||e.initialValueIsDefault)&&(xl(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ui(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){bl(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){bl(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){xl(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var wu=i=>i instanceof Cu;var Du=(()=>{class i extends qt{callSetDisabledState;get submitted(){return O(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=b(()=>this._submittedReactive());_submittedReactive=M(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Gi(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return Tr(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){gl(e.control||null,e,!1),vu(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Bl(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Hi(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,o=this.form.get(e.path);n!==o&&(gl(n||null,e),wu(o)&&(Tr(o,e,this.callSetDisabledState),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Vl(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&xu(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Fr(this.form,this),this._oldForm&&Gi(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||i)(pt(yl,10),pt(Cl,10),pt(Fl,8))};static \u0275dir=S({type:i,features:[de,we]})}return i})();var Eu={provide:qt,useExisting:li(()=>Vn)},Vn=(()=>{class i extends Du{form=null;ngSubmit=new k;get control(){return this.form}static \u0275fac=(()=>{let e;return function(o){return(e||(e=$e(i)))(o||i)}})();static \u0275dir=S({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,o){n&1&&I("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ue([Eu]),de]})}return i})();var Nr=0;function Su(){return Nr}function ct(i,t){return(...e)=>{try{return Nr=t,i(...e)}finally{Nr=0}}}function ku(i){return!i}function zl(i){return i}function Ae(i){return Array.isArray(i)}function Xt(i){return(typeof i=="object"||typeof i=="function")&&i!=null}var St=Symbol(),eo=Symbol(),zn=class{predicates;fns=[];constructor(t){this.predicates=t}push(t){this.fns.push(jl(this.predicates,t))}mergeIn(t){let e=this.predicates?t.fns.map(n=>jl(this.predicates,n)):t.fns;this.fns.push(...e)}},Yi=class extends zn{get defaultValue(){return!1}compute(t){return this.fns.some(e=>{let n=e(t);return n&&n!==eo})}},Qt=class i extends zn{ignore;static ignoreNull(t){return new i(t,e=>e===null)}constructor(t,e){super(t),this.ignore=e}get defaultValue(){return[]}compute(t){return this.fns.reduce((e,n)=>{let o=n(t);return o===void 0||o===eo?e:Ae(o)?[...e,...this.ignore?o.filter(r=>!this.ignore(r)):o]:this.ignore&&this.ignore(o)?e:[...e,o]},[])}},Lr=class extends Qt{constructor(t){super(t,void 0)}},Vr=class extends zn{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(t,e){super(t),this.key=e}compute(t){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let n=0;n<this.fns.length;n++){let o=this.fns[n](t);o!==eo&&(e=this.key.reducer.reduce(e,o))}return e}};function jl(i,t){return i.length===0?t:e=>{for(let n of i){let o=e.stateOf(n.path),r=O(o.structure.pathKeys).length-n.depth;for(let a=0;a<r;a++)o=o.structure.parent;if(!n.fn(o.context))return eo}return t(e)}}var Jt=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(t){this.predicates=t,this.hidden=new Yi(t),this.disabledReasons=new Lr(t),this.readonly=new Yi(t),this.syncErrors=Qt.ignoreNull(t),this.syncTreeErrors=Qt.ignoreNull(t),this.asyncErrors=Qt.ignoreNull(t)}hasMetadata(t){return this.metadata.has(t)}getMetadataKeys(){return this.metadata.keys()}getMetadata(t){return this.metadata.has(t)||this.metadata.set(t,new Vr(this.predicates,t)),this.metadata.get(t)}mergeIn(t){this.hidden.mergeIn(t.hidden),this.disabledReasons.mergeIn(t.disabledReasons),this.readonly.mergeIn(t.readonly),this.syncErrors.mergeIn(t.syncErrors),this.syncTreeErrors.mergeIn(t.syncTreeErrors),this.asyncErrors.mergeIn(t.asyncErrors);for(let e of t.getMetadataKeys()){let n=t.metadata.get(e);this.getMetadata(e).mergeIn(n)}}},qi=class{depth;constructor(t){this.depth=t}build(){return new Zi(this,[],0)}},en=class i extends qi{constructor(t){super(t)}current;all=[];addHiddenRule(t){this.getCurrent().addHiddenRule(t)}addDisabledReasonRule(t){this.getCurrent().addDisabledReasonRule(t)}addReadonlyRule(t){this.getCurrent().addReadonlyRule(t)}addSyncErrorRule(t){this.getCurrent().addSyncErrorRule(t)}addSyncTreeErrorRule(t){this.getCurrent().addSyncTreeErrorRule(t)}addAsyncErrorRule(t){this.getCurrent().addAsyncErrorRule(t)}addMetadataRule(t,e){this.getCurrent().addMetadataRule(t,e)}getChild(t){if(t===St){let e=this.getCurrent().children;e.size>(e.has(St)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(t)}hasLogic(t){return this===t?!0:this.all.some(({builder:e})=>e.hasLogic(t))}mergeIn(t,e){e?this.all.push({builder:t,predicate:{fn:ct(e.fn,this.depth),path:e.path}}):this.all.push({builder:t}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new jn(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new i(0)}},jn=class extends qi{logic=new Jt([]);children=new Map;constructor(t){super(t)}addHiddenRule(t){this.logic.hidden.push(ct(t,this.depth))}addDisabledReasonRule(t){this.logic.disabledReasons.push(ct(t,this.depth))}addReadonlyRule(t){this.logic.readonly.push(ct(t,this.depth))}addSyncErrorRule(t){this.logic.syncErrors.push(ct(t,this.depth))}addSyncTreeErrorRule(t){this.logic.syncTreeErrors.push(ct(t,this.depth))}addAsyncErrorRule(t){this.logic.asyncErrors.push(ct(t,this.depth))}addMetadataRule(t,e){this.logic.getMetadata(t).push(ct(e,this.depth))}getChild(t){return this.children.has(t)||this.children.set(t,new en(this.depth+1)),this.children.get(t)}hasLogic(t){return this===t}},Zi=class i{builder;predicates;depth;logic;constructor(t,e,n){this.builder=t,this.predicates=e,this.depth=n,this.logic=t?Mu(t,e,n):new Jt([])}getChild(t){let e=this.builder?Wl(this.builder,t):[];if(e.length===0)return new i(void 0,[],this.depth+1);if(e.length===1){let{builder:n,predicates:o}=e[0];return new i(n,[...this.predicates,...o.map(r=>zr(r,this.depth))],this.depth+1)}else{let n=e.map(({builder:o,predicates:r})=>new i(o,[...this.predicates,...r.map(a=>zr(a,this.depth))],this.depth+1));return new Br(n)}}hasLogic(t){return this.builder?.hasLogic(t)??!1}},Br=class i{all;logic;constructor(t){this.all=t,this.logic=new Jt([]);for(let e of t)this.logic.mergeIn(e.logic)}getChild(t){return new i(this.all.flatMap(e=>e.getChild(t)))}hasLogic(t){return this.all.some(e=>e.hasLogic(t))}};function Wl(i,t){if(i instanceof en)return i.all.flatMap(({builder:e,predicate:n})=>{let o=Wl(e,t);return n?o.map(({builder:r,predicates:a})=>({builder:r,predicates:[...a,n]})):o});if(i instanceof jn)return[...t!==St&&i.children.has(St)?[{builder:i.getChild(St),predicates:[]}]:[],...i.children.has(t)?[{builder:i.getChild(t),predicates:[]}]:[]];throw new Z(1909,!1)}function Mu(i,t,e){let n=new Jt(t);if(i instanceof en){let o=i.all.map(({builder:r,predicate:a})=>new Zi(r,a?[...t,zr(a,e)]:t,e));for(let r of o)n.mergeIn(r.logic)}else if(i instanceof jn)n.mergeIn(i.logic);else throw new Z(1909,!1);return n}function zr(i,t){return G(_({},i),{depth:t})}var Gl=Symbol("PATH"),Ze=class i{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Iu);logicBuilder;constructor(t,e,n,o){this.keys=t,this.parent=n,this.keyInParent=o,this.root=e??this,n||(this.logicBuilder=en.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(t){return this.children.has(t)||this.children.set(t,new i([...this.keys,t],this.root,this,t)),this.children.get(t)}mergeIn(t,e){let n=t.compile();this.builder.mergeIn(n.builder,e)}static unwrapFieldPath(t){return t[Gl]}static newRoot(){return new i([],void 0,void 0,void 0)}},Iu={get(i,t){return t===Gl?i:i.getChild(t).fieldPathProxy}},$i,Bn=new Map,Xi=class i{schemaFn;constructor(t){this.schemaFn=t}compile(){if(Bn.has(this))return Bn.get(this);let t=Ze.newRoot();Bn.set(this,t);let e=$i;try{$i=t,this.schemaFn(t.fieldPathProxy)}finally{$i=e}return t}static create(t){return t instanceof i?t:new i(t)}static rootCompile(t){try{return Bn.clear(),t===void 0?Ze.newRoot():t instanceof i?t.compile():new i(t).compile()}finally{Bn.clear()}}};function Tu(i){return i instanceof Xi||typeof i=="function"}function Qr(i){if($i!==Ze.unwrapFieldPath(i).root)throw new Z(1908,!1)}function Un(i,t,e){return Qr(i),Ze.unwrapFieldPath(i).builder.addMetadataRule(t,e),t}var ut={list(){return{reduce:(i,t)=>t===void 0?i:[...i,t],getInitial:()=>[]}},min(){return{reduce:(i,t)=>i===void 0||t===void 0?i??t:Math.min(i,t),getInitial:()=>{}}},max(){return{reduce:(i,t)=>i===void 0||t===void 0?i??t:Math.max(i,t),getInitial:()=>{}}},or(){return{reduce:(i,t)=>i||t,getInitial:()=>!1}},and(){return{reduce:(i,t)=>i&&t,getInitial:()=>!0}},override:Ru};function Ru(i){return{reduce:(t,e)=>e,getInitial:()=>i?.()}}var Qi=class{reducer;create;brand;constructor(t,e){this.reducer=t,this.create=e}};function Ue(i){return new Qi(i??ut.override())}var Jr=Ue(ut.or()),Kl=Ue(ut.max()),$l=Ue(ut.min()),ea=Ue(ut.max()),Yl=Ue(ut.min()),ql=Ue(ut.list());function Au(i){return i.errors().length>0?"invalid":i.pending()?"unknown":"valid"}var jr=class{node;constructor(t){this.node=t}rawSyncTreeErrors=b(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=b(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Ou(this.node.submitState.submissionErrors())]);syncValid=b(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(t,e)=>e&&t.validationState.syncValid(),ku));syncTreeErrors=b(()=>this.rawSyncTreeErrors().filter(t=>t.fieldTree===this.node.fieldTree));rawAsyncErrors=b(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=b(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(t=>t==="pending"||t.fieldTree===this.node.fieldTree));parseErrors=b(()=>this.node.formFieldBindings().flatMap(t=>t.parseErrors()));errors=b(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(t=>t!=="pending")]);errorSummary=b(()=>{let t=this.node.structure.reduceChildren(this.errors(),(e,n)=>[...n,...e.errorSummary()]);return O(()=>t.sort(Pu)),t});pending=b(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(t,e)=>e||t.validationState.asyncErrors().includes("pending")));status=b(()=>{if(this.shouldSkipValidation())return"valid";let t=Au(this);return this.node.structure.reduceChildren(t,(e,n)=>n==="invalid"||e.validationState.status()==="invalid"?"invalid":n==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=b(()=>this.status()==="valid");invalid=b(()=>this.status()==="invalid");shouldSkipValidation=b(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function Ou(i){return i===void 0?[]:Ae(i)?i:[i]}function ta(i,t){if(Ae(i))for(let e of i)e.fieldTree??=t;else i&&(i.fieldTree??=t);return i}function Hl(i){return i.formField?i.formField.element:i.fieldTree().formFieldBindings().reduce((t,e)=>!t||!e.element?t??e.element:t.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:t,void 0)}function Pu(i,t){let e=Hl(i),n=Hl(t);return e===n?0:e===void 0||n===void 0?e===void 0?1:-1:e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var Hr=Ue(),Ur=class{node;cache=new WeakMap;constructor(t){this.node=t}resolve(t){if(!this.cache.has(t)){let e=b(()=>{let n=Ze.unwrapFieldPath(t),o=this.node,r=Su();for(;r>0||!o.structure.logic.hasLogic(n.root.builder);)if(r--,o=o.structure.parent,o===void 0)throw new Z(1900,!1);for(let a of n.keys)if(o=o.structure.getChild(a),o===void 0)throw new Z(1901,!1);return o.fieldTree});this.cache.set(t,e)}return this.cache.get(t)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=b(()=>{let t=this.key();if(!Ae(O(this.node.structure.parent.value)))throw new Z(1906,!1);return Number(t)});fieldTreeOf=t=>this.resolve(t);stateOf=t=>this.resolve(t)();valueOf=t=>{let e=this.resolve(t)().value();if(e instanceof Zt)throw new Z(1907,!1);return e}},Wr=class{node;metadata=new Map;constructor(t){this.node=t;for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let n=this.node.logicNode.logic.getMetadata(e),o=O(()=>Wo(this.node.structure.injector,()=>e.create(b(()=>n.compute(this.node.context)))));this.metadata.set(e,o)}}get(t){if(this.has(t)&&!this.metadata.has(t)){if(t.create)throw new Z(1912,!1);let e=this.node.logicNode.logic.getMetadata(t);this.metadata.set(t,b(()=>e.compute(this.node.context)))}return this.metadata.get(t)}has(t){return this.node.logicNode.logic.hasMetadata(t)}},Fu={get(i,t,e){let n=i(),o=n.structure.getChild(t);if(o!==void 0)return o.fieldTree;let r=O(n.value);if(Ae(r)){if(t==="length")return n.value().length;if(t===Symbol.iterator)return()=>(n.value(),Array.prototype[Symbol.iterator].apply(n.fieldTree))}if(Xt(r)&&t===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(i,t){let e=O(i().value),n=Reflect.getOwnPropertyDescriptor(e,t);return n&&!n.configurable&&(n.configurable=!0),n},ownKeys(i){let t=O(i().value);return typeof t=="object"&&t!==null?Reflect.ownKeys(t):[]}};function Nu(i,t){let e=b(()=>i()[t()]);return e[Lo]=i[Lo],e.set=n=>{i.update(o=>Lu(o,n,t()))},e.update=n=>{e.set(n(O(e)))},e.asReadonly=()=>e,e}function Lu(i,t,e){if(Ae(i)){let n=[...i];return n[e]=t,n}else return G(_({},i),{[e]:t})}var Ji=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=R.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(t,e,n){this.logic=t,this.node=e,this.createChildNode=n}children(){let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>O(e.reader))}getChild(t){let e=t.toString(),n=O(this.childrenMap)?.byPropertyKey.get(e)?.reader;return n||(n=this.createReader(e)),n()}reduceChildren(t,e,n){let o=this.childrenMap();if(!o)return t;let r=t;for(let a of o.byPropertyKey.values()){if(n?.(r))break;r=e(O(a.reader),r)}return r}destroy(){this.injector.destroy()}createKeyInParent(t,e,n){if(t.kind==="root")return Zl;if(e===void 0){let o=n;return b(()=>{if(this.parent.structure.getChild(o)!==this.node)throw new Z(-1902,!1);return o})}else{let o=n;return b(()=>{let r=this.parent.structure.value();if(!Ae(r))throw new Z(1903,!1);let a=r[o];if(Xt(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===e)return o;for(let s=0;s<r.length;s++){let d=r[s];if(Xt(d)&&d.hasOwnProperty(this.parent.structure.identitySymbol)&&d[this.parent.structure.identitySymbol]===e)return o=s.toString()}throw new Z(1904,!1)})}}createChildrenMap(){return bt({source:this.value,computation:(t,e)=>{if(!Xt(t))return;let n=e?.value??{byPropertyKey:new Map},o,r=Ae(t);n!==void 0&&(r?o=Bu(n,t,this.identitySymbol):o=zu(n,t));for(let a of Object.keys(t)){let s,d=t[a];if(d===void 0){n.byPropertyKey.has(a)&&(o??=_({},n),o.byPropertyKey.delete(a));continue}r&&Xt(d)&&!Ae(d)&&(s=d[this.identitySymbol]??=Symbol(""));let c;s&&(n.byTrackingKey?.has(s)||(o??=_({},n),o.byTrackingKey??=new Map,o.byTrackingKey.set(s,this.createChildNode(a,s,r))),c=(o??n).byTrackingKey.get(s));let u=n.byPropertyKey.get(a);u===void 0?(o??=_({},n),o.byPropertyKey.set(a,{reader:this.createReader(a),node:c??this.createChildNode(a,s,r)})):c&&c!==u.node&&(o??=_({},n),u.node=c)}return o??n}})}createReader(t){return b(()=>this.childrenMap()?.byPropertyKey.get(t)?.node)}},Gr=class extends Ji{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Vu}get keyInParent(){return Zl}childrenMap;constructor(t,e,n,o,r){super(e,t,r),this.fieldManager=n,this.value=o,this.childrenMap=this.createChildrenMap()}},Kr=class extends Ji{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(t,e,n,o,r,a){super(e,t,a),this.logic=e,this.parent=n,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:n,pathNode:void 0,logic:e,initialKeyInParent:r,identityInParent:o,fieldAdapter:void 0},o,r),this.pathKeys=b(()=>[...n.structure.pathKeys(),this.keyInParent()]),this.value=Nu(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Vu=b(()=>[]),Zl=b(()=>{throw new Z(1905,!1)});function Bu(i,t,e){let n,o=new Set(i.byPropertyKey.keys()),r=new Set(i.byTrackingKey?.keys());for(let a=0;a<t.length;a++){let s=t[a];o.delete(a.toString()),Xt(s)&&s.hasOwnProperty(e)&&r.delete(s[e])}if(o.size>0){n??=_({},i);for(let a of o)n.byPropertyKey.delete(a)}if(r.size>0){n??=_({},i);for(let a of r)n.byTrackingKey?.delete(a)}return n}function zu(i,t){let e;for(let n of i.byPropertyKey.keys())t.hasOwnProperty(n)||(e??=_({},i),e.byPropertyKey.delete(n));return e}var $r=class{node;selfSubmitting=M(!1);submissionErrors;constructor(t){this.node=t,this.submissionErrors=bt({source:this.node.structure.value,computation:()=>[]})}submitting=b(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},Hn=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new Ur(this)}fieldProxy=new Proxy(()=>this,Fu);pathNode;constructor(t){this.pathNode=t.pathNode,this.fieldAdapter=t.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,t),this.validationState=this.fieldAdapter.createValidationState(this,t),this.nodeState=this.fieldAdapter.createNodeState(this,t),this.metadataState=new Wr(this),this.submitState=new $r(this),this.controlValue=this.controlValueSignal()}focusBoundControl(t){this.getBindingForFocus()?.focus(t)}getBindingForFocus(){let t=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(Ul,void 0);return t||this.structure.children().map(e=>e.getBindingForFocus()).reduce(Ul,void 0)}pendingSync=bt({source:()=>this.value(),computation:(t,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata($l)}get maxLength(){return this.metadata(Yl)}get min(){return this.metadata(Kl)}get minLength(){return this.metadata(ea)}get pattern(){return this.metadata(ql)??ju}get required(){return this.metadata(Jr)??Hu}metadata(t){return this.metadataState.get(t)}hasMetadata(t){return this.metadataState.has(t)}markAsTouched(){O(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(t){O(()=>this._reset(t))}_reset(t){t!==void 0&&this.value.set(t),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.structure.children())e._reset()}controlValueSignal(){let t=bt(this.value),{set:e,update:n}=t;return t.set=o=>{e(o),this.markAsDirty(),this.debounceSync()},t.update=o=>{n(o),this.markAsDirty(),this.debounceSync()},t}sync(){this.value.set(this.controlValue())}flushSync(){let t=this.pendingSync();t&&!t.signal.aborted&&(t.abort(),this.sync())}async debounceSync(){let t=O(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(t){let e=new AbortController,n=t(e.signal);if(n&&(this.pendingSync.set(e),await n,e.signal.aborted))return}this.sync()}static newRoot(t,e,n,o){return o.newRoot(t,e,n,o)}createStructure(t){return t.kind==="root"?new Gr(this,t.logic,t.fieldManager,t.value,this.newChild.bind(this)):new Kr(this,t.logic,t.parent,t.identityInParent,t.initialKeyInParent,this.newChild.bind(this))}newChild(t,e,n){let o,r;return n?(o=this.pathNode.getChild(St),r=this.structure.logic.getChild(St)):(o=this.pathNode.getChild(t),r=this.structure.logic.getChild(t)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:o,logic:r,initialKeyInParent:t,identityInParent:e,fieldAdapter:this.fieldAdapter})}},ju=b(()=>[]),Hu=b(()=>!1);function Ul(i,t){return i?t&&i.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t:i:t}var Yr=class{node;selfTouched=M(!1);selfDirty=M(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=M([]);constructor(t){this.node=t}dirty=b(()=>{let t=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,n)=>n||e.nodeState.dirty(),zl)});touched=b(()=>{let t=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,n)=>n||e.nodeState.touched(),zl)});disabledReasons=b(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=b(()=>!!this.disabledReasons().length);readonly=b(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=b(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=b(()=>{let t=this.node.structure.parent;return t?`${t.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=b(()=>{if(this.node.logicNode.logic.hasMetadata(Hr)){let e=this.node.logicNode.logic.getMetadata(Hr).compute(this.node.context);if(e)return n=>e(this.node.context,n)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=b(()=>this.hidden()||this.disabled()||this.readonly())},qr=class{newRoot(t,e,n,o){return new Hn({kind:"root",fieldManager:t,value:e,pathNode:n,logic:n.builder.build(),fieldAdapter:o})}newChild(t){return new Hn(t)}createNodeState(t){return new Yr(t)}createValidationState(t){return new jr(t)}createStructure(t,e){return t.createStructure(e)}},Zr=class{injector;rootName;submitOptions;constructor(t,e,n){this.injector=t,this.rootName=e??`${this.injector.get(ui)}.form${Uu++}`,this.submitOptions=n}structures=new Set;createFieldManagementEffect(t){_e(()=>{let e=new Set;this.markStructuresLive(t,e);for(let n of this.structures)e.has(n)||(this.structures.delete(n),O(()=>n.destroy()))},{injector:this.injector})}markStructuresLive(t,e){e.add(t);for(let n of t.children())this.markStructuresLive(n.structure,e)}},Uu=0;function Wu(i){let t,e,n;return i.length===3?[t,e,n]=i:i.length===2?Tu(i[1])?[t,e]=i:[t,n]=i:[t]=i,[t,e,n]}function Wn(...i){let[t,e,n]=Wu(i),o=n?.injector??l(R),r=Wo(o,()=>Xi.rootCompile(e)),a=new Zr(o,n?.name,n?.submission),s=n?.adapter??new qr,d=Hn.newRoot(a,t,r,s);return a.createFieldManagementEffect(d.structure),d.fieldTree}async function Xl(i,t){let e=O(i);if(O(e.submitState.submitting))return!1;let n=t===void 0?e.structure.root.fieldProxy:i,o={root:e.structure.root.fieldProxy,submitted:i};t=typeof t=="function"?{action:t}:t??e.structure.fieldManager.submitOptions;let r=t?.action;if(!r)throw new Z(1915,!1);let a=t?.onInvalid,s=t?.ignoreValidators??"pending",d=!0;O(()=>{Ql(e),s==="none"?d=e.valid():s==="pending"&&(d=!e.invalid())});try{if(d){e.submitState.selfSubmitting.set(!0);let c=await O(()=>r?.(n,o));return c&&Gu(e,c),!c||Ae(c)&&c.length===0}else O(()=>a?.(n,o));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function Ql(i){if(!i.validationState.shouldSkipValidation()){i.markAsTouched();for(let t of i.structure.children())Ql(t)}}function Gu(i,t){Ae(t)||(t=[t]);let e=new Map;for(let n of t){let o=ta(n,i.fieldTree),r=o.fieldTree(),a=e.get(r);a||(a=[],e.set(r,a)),a.push(o)}for(let[n,o]of e)n.submitState.submissionErrors.set(o)}var Xr=class{kind="compat";control;fieldTree;context;message;constructor({context:t,kind:e,control:n}){this.context=t,this.kind=e,this.control=n}};function Jl(i){if(i.length===0)return null;let t={};for(let e of i)t[e.kind]=e instanceof Xr?e.context:e;return t}var Ku=new p("");function $u(i){let t=i;return typeof t.length=="number"?t.length:t.size}function to(i,t){return i instanceof Function?i(t):i}function nd(i){return typeof i=="number"?isNaN(i):i===""||i===!1||i==null}function ed(i){return i===void 0?[]:Array.isArray(i)?i:[i]}function id(i,t){Qr(i),Ze.unwrapFieldPath(i).builder.addSyncErrorRule(n=>ta(t(n),n.fieldTree))}function Yu(i){return new na(i)}function qu(i,t){return new ia(i,t)}var Gn=class{__brand=void 0;kind="";fieldTree;message;constructor(t){t&&Object.assign(this,t)}},na=class extends Gn{kind="required"};var ia=class extends Gn{minLength;kind="minLength";constructor(t,e){super(e),this.minLength=t}};var oa=class extends Gn{kind="parse"};function tn(i,t,e){let n=Un(i,Ue(),o=>typeof t=="number"?t:t(o));Un(i,ea,({state:o})=>o.metadata(n)()),id(i,o=>{if(nd(o.value()))return;let r=o.state.metadata(n)();if(r!==void 0&&$u(o.value())<r)return e?.error?to(e.error,o):qu(r,{message:to(e?.message,o)})})}function nn(i,t){let e=Un(i,Ue(),n=>t?.when?t.when(n):!0);Un(i,Jr,({state:n})=>n.metadata(e)()),id(i,n=>{if(n.state.metadata(e)()&&nd(n.value()))return t?.error?to(t.error,n):Yu({message:to(t?.message,n)})})}var Zu=new p("");function Xu(i,t,e){let n=bt({source:i,computation:()=>[]}),o=r=>{let a=e(r);n.set(ed(a.error)),a.value!==void 0&&t(a.value),n.set(ed(a.error))};return{errors:n.asReadonly(),setRawValue:o}}var ra=class{field;constructor(t){this.field=t}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return Jl(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new Z(1910,!1)}valueAccessor=null;hasValidator(t){return t===st.required?this.field().required():!1}updateValueAndValidity(){}},aa={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},Qu=(()=>{let i={};for(let t of Object.keys(aa))i[aa[t]]=t;return i})();function sa(i,t){let e=Qu[t];return i[e]?.()}var la=Object.values(aa);function no(){return{}}function kt(i,t,e){return i[t]!==e?(i[t]=e,!0):!1}function Ju(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"}function eh(i){if(i.tagName!=="INPUT")return!1;let t=i.type;return t==="date"||t==="datetime-local"||t==="month"||t==="number"||t==="range"||t==="time"||t==="week"}function th(i){return i.tagName==="INPUT"||i.tagName==="TEXTAREA"}function nh(i,t){let e;if(i.validity.badInput)return{error:new oa};switch(i.type){case"checkbox":return{value:i.checked};case"number":case"range":case"datetime-local":if(e=O(t),typeof e=="number"||e===null)return{value:i.value===""?null:i.valueAsNumber};break;case"date":case"month":case"time":case"week":if(e=O(t),e===null||e instanceof Date)return{value:i.valueAsDate};if(typeof e=="number")return{value:i.valueAsNumber};break}return{value:i.value}}function ih(i,t){switch(i.type){case"checkbox":i.checked=t;return;case"radio":i.checked=t===i.value;return;case"number":case"range":case"datetime-local":if(typeof t=="number"){td(i,t);return}else if(t===null){i.value="";return}break;case"date":case"month":case"time":case"week":if(t===null||t instanceof Date){i.valueAsDate=t;return}else if(typeof t=="number"){td(i,t);return}}i.value=t}function td(i,t){isNaN(t)?i.value="":i.valueAsNumber=t}function da(i,t,e,n){switch(e){case"name":i.setAttribute(t,e,n);break;case"disabled":case"readonly":case"required":n?i.setAttribute(t,e,""):i.removeAttribute(t,e);break;case"max":case"min":case"minLength":case"maxLength":n!==void 0?i.setAttribute(t,e,n.toString()):i.removeAttribute(t,e);break}}function oh(i,t){i.listenToCustomControlModel(n=>t.state().controlValue.set(n)),i.listenToCustomControlOutput("touchedChange",()=>t.state().markAsTouched()),t.registerAsBinding(i.customControl);let e=no();return()=>{let n=t.state(),o=n.controlValue();kt(e,"controlValue",o)&&i.setCustomControlModelInput(o);for(let r of la){let a;r==="errors"?a=t.errors():a=sa(n,r),kt(e,r,a)&&(i.setInputOnDirectives(r,a),t.elementAcceptsNativeProperty(r)&&!i.customControlHasInput(r)&&da(t.renderer,t.nativeFormElement,r,a))}}}function rh(i,t){t.controlValueAccessor.registerOnChange(n=>t.state().controlValue.set(n)),t.controlValueAccessor.registerOnTouched(()=>t.state().markAsTouched()),t.registerAsBinding();let e=no();return()=>{let n=t.state(),o=n.value();kt(e,"controlValue",o)&&O(()=>t.controlValueAccessor.writeValue(o));for(let r of la){let a=sa(n,r);if(kt(e,r,a)){let s=i.setInputOnDirectives(r,a);r==="disabled"&&t.controlValueAccessor.setDisabledState?O(()=>t.controlValueAccessor.setDisabledState(a)):!s&&t.elementAcceptsNativeProperty(r)&&da(t.renderer,t.nativeFormElement,r,a)}}}}function ah(i,t,e){if(typeof MutationObserver!="function")return;let n=new MutationObserver(o=>{o.some(r=>sh(r))&&t()});n.observe(i,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>n.disconnect())}function sh(i){if(i.type==="childList"||i.type==="characterData"){if(i.target instanceof Comment)return!1;for(let t of i.addedNodes)if(!(t instanceof Comment))return!0;for(let t of i.removedNodes)if(!(t instanceof Comment))return!0;return!1}return i.type==="attributes"&&i.target instanceof HTMLOptionElement}function lh(i,t,e){let n=!1,o=t.nativeFormElement,r=Xu(()=>t.state().value(),s=>t.state().controlValue.set(s),()=>nh(o,t.state().value));e.set(r.errors),i.listenToDom("input",()=>r.setRawValue(void 0)),i.listenToDom("blur",()=>t.state().markAsTouched()),t.registerAsBinding(),o.tagName==="SELECT"&&ah(o,()=>{n&&(o.value=t.state().controlValue())},t.destroyRef);let a=no();return()=>{let s=t.state(),d=s.controlValue();kt(a,"controlValue",d)&&ih(o,d);for(let c of la){let u=sa(s,c);kt(a,c,u)&&(i.setInputOnDirectives(c,u),t.elementAcceptsNativeProperty(c)&&da(t.renderer,o,c,u))}n=!0}}var dh=Symbol(),ch=new p(""),io=(()=>{class i{field=ze.required({alias:"formField"});renderer=l(se);destroyRef=l(di);state=b(()=>this.field()());injector=l(R);element=l(E).nativeElement;elementIsNativeFormElement=Ju(this.element);elementAcceptsNumericValues=eh(this.element);elementAcceptsTextualValues=th(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=l(vl,{optional:!0,self:!0});config=l(Ku,{optional:!0});parseErrorsSource=M(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new ra(this.state)}parseErrors=b(()=>this.parseErrorsSource()?.().map(e=>G(_({},e),{fieldTree:O(this.state).fieldTree,formField:this}))??[]);errors=b(()=>this.state().errors().filter(e=>!e.formField||e.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([o,r])=>[o,b(()=>r(this))]);if(e.length===0)return;let n=no();_i({write:()=>{for(let[o,r]of e){let a=r();kt(n,o,a)&&(a?this.renderer.addClass(this.element,o):this.renderer.removeClass(this.element,o))}}},{injector:this.injector})}focus(e){this.focuser(e)}registerAsBinding(e){if(this.isFieldBinding)throw new Z(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=n=>e.focus(n)),_e(n=>{let o=this.state();o.nodeState.formFieldBindings.update(r=>[...r,this]),n(()=>{o.nodeState.formFieldBindings.update(r=>r.filter(a=>a!==this))})},{injector:this.injector})}[dh];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=rh(e,this);else if(e.customControl)this.\u0275ngControlUpdate=oh(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=lh(e,this,this.parseErrorsSource);else throw new Z(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[ue([{provide:ch,useExisting:i},{provide:lt,useFactory:()=>l(i).interopNgControl},{provide:Zu,useFactory:()=>l(i).parseErrorsSource}]),Ua("formField")]})}return i})(),oo=(()=>{class i{fieldTree=ze.required({alias:"formRoot"});onSubmit(e){e.preventDefault(),Xl(this.fieldTree())}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["form","formRoot",""]],hostAttrs:["novalidate",""],hostBindings:function(n,o){n&1&&I("submit",function(a){return o.onSubmit(a)})},inputs:{fieldTree:[1,"formRoot","fieldTree"]}})}return i})();function od(i){return Error(`Unable to find icon with the name "${i}"`)}function uh(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function rd(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function ad(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var Xe=class{url;svgText;options;svgElement=null;constructor(t,e,n){this.url=t,this.svgText=e,this.options=n}},ld=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,o,r){this._httpClient=e,this._sanitizer=n,this._errorHandler=r,this._document=o}addSvgIcon(e,n,o){return this.addSvgIconInNamespace("",e,n,o)}addSvgIconLiteral(e,n,o){return this.addSvgIconLiteralInNamespace("",e,n,o)}addSvgIconInNamespace(e,n,o,r){return this._addSvgIconConfig(e,n,new Xe(o,null,r))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,o,r){let a=this._sanitizer.sanitize(et.HTML,o);if(!a)throw ad(o);let s=wt(a);return this._addSvgIconConfig(e,n,new Xe("",s,r))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,o){return this._addSvgIconSetConfig(e,new Xe(n,null,o))}addSvgIconSetLiteralInNamespace(e,n,o){let r=this._sanitizer.sanitize(et.HTML,n);if(!r)throw ad(n);let a=wt(r);return this._addSvgIconSetConfig(e,new Xe("",a,o))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(et.RESOURCE_URL,e);if(!n)throw rd(e);let o=this._cachedIconsByUrl.get(n);return o?Pe(ro(o)):this._loadSvgIconFromConfig(new Xe(e,null)).pipe(Je(r=>this._cachedIconsByUrl.set(n,r)),re(r=>ro(r)))}getNamedSvgIcon(e,n=""){let o=sd(n,e),r=this._svgIconConfigs.get(o);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(n,e),r)return this._svgIconConfigs.set(o,r),this._getSvgFromConfig(r);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):Aa(od(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Pe(ro(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(re(n=>ro(n)))}_getSvgFromIconSetConfigs(e,n){let o=this._extractIconWithNameFromAnySet(e,n);if(o)return Pe(o);let r=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Na(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(et.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),Pe(null)})));return ri(r).pipe(re(()=>{let a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw od(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let o=n.length-1;o>=0;o--){let r=n[o];if(r.svgText&&r.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(r),s=this._extractSvgIconFromSet(a,e,r.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Je(n=>e.svgText=n),re(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Pe(null):this._fetchIcon(e).pipe(Je(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,o){let r=e.querySelector(`[id="${n}"]`);if(!r)return null;let a=r.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,o);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),o);let s=this._svgElementFromString(wt("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,o)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let o=n.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(e){let n=this._svgElementFromString(wt("<svg></svg>")),o=e.attributes;for(let r=0;r<o.length;r++){let{name:a,value:s}=o[r];a!=="id"&&n.setAttribute(a,s)}for(let r=0;r<e.childNodes.length;r++)e.childNodes[r].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[r].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:o}=e,r=o?.withCredentials??!1;if(!this._httpClient)throw uh();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(et.RESOURCE_URL,n);if(!a)throw rd(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let d=this._httpClient.get(a,{responseType:"text",withCredentials:r}).pipe(re(c=>wt(c)),La(()=>this._inProgressUrlFetches.delete(a)),Va());return this._inProgressUrlFetches.set(a,d),d}_addSvgIconConfig(e,n,o){return this._svgIconConfigs.set(sd(e,n),o),this}_addSvgIconSetConfig(e,n){let o=this._iconSetConfigs.get(e);return o?o.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let o=0;o<this._resolvers.length;o++){let r=this._resolvers[o](n,e);if(r)return hh(r)?new Xe(r.url,null,r.options):new Xe(r,null)}}static \u0275fac=function(n){return new(n||i)(mn(rs,8),mn(bi),mn(F,8),mn(ci))};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ro(i){return i.cloneNode(!0)}function sd(i,t){return i+":"+t}function hh(i){return!!(i.url&&i.options)}var mh=["*"],fh=new p("MAT_ICON_DEFAULT_OPTIONS"),ph=new p("mat-icon-location",{providedIn:"root",factory:()=>{let i=l(F),t=i?i.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}}),dd=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],_h=dd.map(i=>`[${i}]`).join(", "),gh=/^url\(['"]?#(.*?)['"]?\)$/,ao=(()=>{class i{_elementRef=l(E);_iconRegistry=l(ld);_location=l(ph);_errorHandler=l(ci);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=oe.EMPTY;constructor(){let e=l(new pi("aria-hidden"),{optional:!0}),n=l(fh,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let o=e.childNodes[n];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>e.classList.remove(o)),n.forEach(o=>e.classList.add(o)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((o,r)=>{o.forEach(a=>{r.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(_h),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<n.length;r++)dd.forEach(a=>{let s=n[r],d=s.getAttribute(a),c=d?d.match(gh):null;if(c){let u=o.get(s);u||(u=[],o.set(s,u)),u.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,o]=this._splitIconName(e);n&&(this._svgNamespace=n),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,n).pipe(xe(1)).subscribe(r=>this._setSvgElement(r),r=>{let a=`Error retrieving icon ${n}:${o}! ${r.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,o){n&2&&(N("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),Ve(o.color?"mat-"+o.color:""),L("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",P],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:mh,decls:1,vars:0,template:function(n,o){n&1&&(ve(),W(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return i})(),so=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[Y]})}return i})();var bh=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,o){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return i})(),xh={passive:!0},ud=(()=>{class i{_platform=l(z);_ngZone=l(D);_renderer=l(he).createRenderer(null,null);_styleLoader=l(me);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ta;this._styleLoader.load(bh);let n=Q(e),o=this._monitoredElements.get(n);if(o)return o.subject;let r=new f,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>r.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>r.next({target:c.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",s,xh)));return this._monitoredElements.set(n,{subject:r,unlisten:d}),r}stopMonitoring(e){let n=Q(e),o=this._monitoredElements.get(n);o&&(o.unlisten(),o.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var hd=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({})}return i})();var md=new p("MAT_INPUT_VALUE_ACCESSOR");var ca=class{_box;_destroyed=new f;_resizeSubject=new f;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new Ke(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),n.unsubscribe(),this._elementObservables.delete(t)}}).pipe(le(e=>e.some(n=>n.target===t)),Uo({bufferSize:1,refCount:!0}),ae(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},fd=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=l(D);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let o=n?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new ca(o)),this._observers.get(o).observe(e)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var vh=["notch"],yh=["matFormFieldNotchedOutline",""],Ch=["*"],pd=["iconPrefixContainer"],_d=["textPrefixContainer"],gd=["iconSuffixContainer"],bd=["textSuffixContainer"],wh=["textField"],Dh=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Eh=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Sh(i,t){i&1&&ce(0,"span",21)}function kh(i,t){if(i&1&&(m(0,"label",20),W(1,1),K(2,Sh,1,0,"span",21),h()),i&2){let e=B(2);V("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),N("for",e._control.disableAutomaticLabeling?null:e._control.id),g(2),$(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Mh(i,t){if(i&1&&K(0,kh,3,5,"label",20),i&2){let e=B();$(e._hasFloatingLabel()?0:-1)}}function Ih(i,t){i&1&&ce(0,"div",7)}function Th(i,t){}function Rh(i,t){if(i&1&&Fe(0,Th,0,0,"ng-template",13),i&2){B(2);let e=fn(1);V("ngTemplateOutlet",e)}}function Ah(i,t){if(i&1&&(m(0,"div",9),K(1,Rh,1,1,null,13),h()),i&2){let e=B();V("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),g(),$(e._forceDisplayInfixLabel()?-1:1)}}function Oh(i,t){i&1&&(m(0,"div",10,2),W(2,2),h())}function Ph(i,t){i&1&&(m(0,"div",11,3),W(2,3),h())}function Fh(i,t){}function Nh(i,t){if(i&1&&Fe(0,Fh,0,0,"ng-template",13),i&2){B();let e=fn(1);V("ngTemplateOutlet",e)}}function Lh(i,t){i&1&&(m(0,"div",14,4),W(2,4),h())}function Vh(i,t){i&1&&(m(0,"div",15,5),W(2,5),h())}function Bh(i,t){i&1&&ce(0,"div",16)}function zh(i,t){i&1&&(m(0,"div",18),W(1,6),h())}function jh(i,t){if(i&1&&(m(0,"mat-hint",22),x(1),h()),i&2){let e=B(2);V("id",e._hintLabelId),g(),ye(e.hintLabel)}}function Hh(i,t){if(i&1&&(m(0,"div",19),K(1,jh,2,2,"mat-hint",22),W(2,7),ce(3,"div",23),W(4,8),h()),i&2){let e=B();g(),$(e.hintLabel?1:-1)}}var We=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["mat-label"]]})}return i})(),Uh=new p("MatError");var co=(()=>{class i{align="start";id=l(te).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,o){n&2&&(Ye("id",o.id),N("align",null),L("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),Wh=new p("MatPrefix");var Gh=new p("MatSuffix");var Ed=new p("FloatingLabelParent"),xd=(()=>{class i{_elementRef=l(E);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(fd);_ngZone=l(D);_parent=l(Ed);_resizeSubscription=new oe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Kh(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,o){n&2&&L("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Kh(i){let t=i;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var vd="mdc-line-ripple--active",lo="mdc-line-ripple--deactivating",yd=(()=>{class i{_elementRef=l(E);_cleanupTransitionEnd;constructor(){let e=l(D),n=l(se);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(lo),e.add(vd)}deactivate(){this._elementRef.nativeElement.classList.add(lo)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,o=n.contains(lo);e.propertyName==="opacity"&&o&&n.remove(vd,lo)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Cd=(()=>{class i{_elementRef=l(E);_ngZone=l(D);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,o){if(n&1&&Le(vh,5),n&2){let r;H(r=U())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,o){n&2&&L("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:yh,ngContentSelectors:Ch,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,o){n&1&&(ve(),Ne(0,"div",1),Bt(1,"div",2,0),W(3),zt(),Ne(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),Kn=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i})}return i})();var $n=new p("MatFormField"),$h=new p("MAT_FORM_FIELD_DEFAULT_OPTIONS"),wd="fill",Yh="auto",Dd="fixed",qh="translateY(-50%)",Qe=(()=>{class i{_elementRef=l(E);_changeDetectorRef=l(De);_platform=l(z);_idGenerator=l(te);_ngZone=l(D);_defaults=l($h,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=pn("iconPrefixContainer");_textPrefixContainerSignal=pn("textPrefixContainer");_iconSuffixContainerSignal=pn("iconSuffixContainer");_textSuffixContainerSignal=pn("textSuffixContainer");_prefixSuffixContainers=b(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=ts(We);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Wt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Yh}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||wd;this._appearanceSignal.set(n)}_appearanceSignal=M(wd);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Dd}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Dd}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new f;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ge();constructor(){let e=this._defaults,n=l(fe);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),_e(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=b(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,o="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(o+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(o+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(pe([void 0,void 0]),re(()=>[n.errorState,n.userAriaDescribedBy]),Ho(),le(([[r,a],[s,d]])=>r!==s||a!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(ae(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ee(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){_i({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=b(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let n=this._control.describedByIds,o;if(n){let r=this._describedByIds||e;o=e.concat(n.filter(a=>a&&!r.includes(a)))}else o=e;this._control.setDescribedByIds(o),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",y=`${a+s}px`,J=`calc(${u} * (${y} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ee=`var(--mat-mdc-form-field-label-transform, ${qh} translateX(${J}))`,q=a+s+d+c;return[ee,q]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,o]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-form-field"]],contentQueries:function(n,o,r){if(n&1&&(qa(r,o._labelChild,We,5),mi(r,Kn,5)(r,Wh,5)(r,Gh,5)(r,Uh,5)(r,co,5)),n&2){Yo();let a;H(a=U())&&(o._formFieldControl=a.first),H(a=U())&&(o._prefixChildren=a),H(a=U())&&(o._suffixChildren=a),H(a=U())&&(o._errorChildren=a),H(a=U())&&(o._hintChildren=a)}},viewQuery:function(n,o){if(n&1&&(Za(o._iconPrefixContainerSignal,pd,5)(o._textPrefixContainerSignal,_d,5)(o._iconSuffixContainerSignal,gd,5)(o._textSuffixContainerSignal,bd,5),Le(wh,5)(pd,5)(_d,5)(gd,5)(bd,5)(xd,5)(Cd,5)(yd,5)),n&2){Yo(4);let r;H(r=U())&&(o._textField=r.first),H(r=U())&&(o._iconPrefixContainer=r.first),H(r=U())&&(o._textPrefixContainer=r.first),H(r=U())&&(o._iconSuffixContainer=r.first),H(r=U())&&(o._textSuffixContainer=r.first),H(r=U())&&(o._floatingLabel=r.first),H(r=U())&&(o._notchedOutline=r.first),H(r=U())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,o){n&2&&L("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ue([{provide:$n,useExisting:i},{provide:Ed,useExisting:i}])],ngContentSelectors:Eh,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,o){if(n&1&&(ve(Dh),Fe(0,Mh,1,1,"ng-template",null,0,es),m(2,"div",6,1),I("click",function(a){return o._control.onContainerClick(a)}),K(4,Ih,1,0,"div",7),m(5,"div",8),K(6,Ah,2,2,"div",9),K(7,Oh,3,0,"div",10),K(8,Ph,3,0,"div",11),m(9,"div",12),K(10,Nh,1,1,null,13),W(11),h(),K(12,Lh,3,0,"div",14),K(13,Vh,3,0,"div",15),h(),K(14,Bh,1,0,"div",16),h(),m(15,"div",17),K(16,zh,2,0,"div",18)(17,Hh,5,1,"div",19),h()),n&2){let r;g(2),L("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),g(2),$(!o._hasOutline()&&!o._control.disabled?4:-1),g(2),$(o._hasOutline()?6:-1),g(),$(o._hasIconPrefix?7:-1),g(),$(o._hasTextPrefix?8:-1),g(2),$(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),g(2),$(o._hasTextSuffix?12:-1),g(),$(o._hasIconSuffix?13:-1),g(),$(o._hasOutline()?-1:14),g(),L("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();g(),$((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[xd,Cd,is,yd,co],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return i})();var uo=(()=>{class i{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var on=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(t,e,n,o,r){this._defaultMatcher=t,this.ngControl=e,this._parentFormGroup=n,this._parentForm=o,this._stateChanges=r}updateErrorState(){let t=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=n?.isErrorState(o,e)??!1;r!==t&&(this.errorState=r,this._stateChanges.next())}};var Oe=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[Ei,Qe,Y]})}return i})();var Jh=["button","checkbox","file","hidden","image","radio","range","reset","submit"],em=new p("MAT_INPUT_CONFIG"),ho=(()=>{class i{_elementRef=l(E);_platform=l(z);ngControl=l(lt,{optional:!0,self:!0});_autofillMonitor=l(ud);_ngZone=l(D);_formField=l($n,{optional:!0});_renderer=l(se);_uid=l(te).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(em,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new f;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Wt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(st.required)??!1}set required(e){this._required=Wt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&dr().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Wt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>dr().has(e));constructor(){let e=l(Ln,{optional:!0}),n=l(Vn,{optional:!0}),o=l(uo),r=l(md,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();r?gt(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new on(o,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&_e(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Jh.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,o){n&1&&I("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),n&2&&(Ye("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),N("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),L("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",P]},exportAs:["matInput"],features:[ue([{provide:Kn,useExisting:i}]),we]})}return i})(),mo=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[Oe,Oe,hd,Y]})}return i})();var Yn=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new f;constructor(t=!1,e,n=!0,o){this._multiple=t,this._emitChanges=n,this.compareWith=o,e&&e.length&&(t?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...t){this._verifyValueAssignment(t),t.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...t){this._verifyValueAssignment(t),t.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...t){this._verifyValueAssignment(t);let e=this.selected,n=new Set(t.map(r=>this._getConcreteValue(r)));t.forEach(r=>this._markSelected(r)),e.filter(r=>!n.has(this._getConcreteValue(r,n))).forEach(r=>this._unmarkSelected(r));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let e=this._hasQueuedChanges();return t&&this._emitChangeEvent(),e}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(t,n))return n;return t}else return t}};var qn=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},rn=class extends qn{component;viewContainerRef;injector;projectableNodes;bindings;constructor(t,e,n,o,r){super(),this.component=t,this.viewContainerRef=e,this.injector=n,this.projectableNodes=o,this.bindings=r||null}},Mt=class extends qn{templateRef;viewContainerRef;context;injector;constructor(t,e,n,o){super(),this.templateRef=t,this.viewContainerRef=e,this.context=n,this.injector=o}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}},ha=class extends qn{element;constructor(t){super(),this.element=t instanceof E?t.nativeElement:t}},an=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof rn)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof Mt)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof ha)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},fo=class extends an{outletElement;_appRef;_defaultInjector;constructor(t,e,n){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=n}attachComponentPortal(t){let e;if(t.viewContainerRef){let n=t.injector||t.viewContainerRef.injector,o=n.get(Ko,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:n,ngModuleRef:o,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,o=t.injector||this._defaultInjector||R.NULL,r=o.get(Lt,n.injector);e=gi(t.component,{elementInjector:o,environmentInjector:r,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,n=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return n.rootNodes.forEach(o=>this.outletElement.appendChild(o)),n.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(n);o!==-1&&e.remove(o)}),this._attachedPortal=t,n}attachDomPortal=t=>{let e=t.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var Zn=(()=>{class i extends an{_moduleRef=l(Ko,{optional:!0});_document=l(F);_viewContainerRef=l(_t);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new k;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let n=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=n.createComponent(e.component,{index:n.length,injector:e.injector||n.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=e=>{let n=e.element;n.parentNode;let o=this._document.createComment("dom-portal");e.setAttachedHost(this),n.parentNode.insertBefore(o,n),this._getRootNode().appendChild(n),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(n,o)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[de]})}return i})(),It=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({})}return i})();var Sd=Ii();function dn(i){return new po(i.get(He),i.get(F))}var po=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(t,e){this._viewportRuler=t,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||"",this._previousHTMLStyles.top=t.style.top||"",t.style.left=ne(-this._previousScrollPosition.left),t.style.top=ne(-this._previousScrollPosition.top),t.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,n=t.style,o=e.style,r=n.scrollBehavior||"",a=o.scrollBehavior||"";this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,t.classList.remove("cdk-global-scrollblock"),Sd&&(n.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Sd&&(n.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,n=this._viewportRuler.getViewportSize();return e.scrollHeight>n.height||e.scrollWidth>n.width}};function Od(i,t){return new _o(i.get(Gt),i.get(D),i.get(He),t)}var _o=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(t,e,n,o){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=n,this._config=o}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(le(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Xn=class{enable(){}disable(){}attach(){}};function ma(i,t){return t.some(e=>{let n=i.bottom<e.top,o=i.top>e.bottom,r=i.right<e.left,a=i.left>e.right;return n||o||r||a})}function kd(i,t){return t.some(e=>{let n=i.top<e.top,o=i.bottom>e.bottom,r=i.left<e.left,a=i.right>e.right;return n||o||r||a})}function Jn(i,t){return new go(i.get(Gt),i.get(He),i.get(D),t)}var go=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,n,o){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=n,this._config=o}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:o}=this._viewportRuler.getViewportSize();ma(e,[{width:n,height:o,bottom:o,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Pd=(()=>{class i{_injector=l(R);constructor(){}noop=()=>new Xn;close=e=>Od(this._injector,e);block=()=>dn(this._injector);reposition=e=>Jn(this._injector,e);static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Rt=class{positionStrategy;scrollStrategy=new Xn;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let n of e)t[n]!==void 0&&(this[n]=t[n])}}};var bo=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var Fd=(()=>{class i{_attachedOverlays=[];_document=l(F);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let n=this._attachedOverlays.indexOf(e);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,n,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(n):!0}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Nd=(()=>{class i extends Fd{_ngZone=l(D);_renderer=l(he).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let n=this._attachedOverlays;for(let o=n.length-1;o>-1;o--){let r=n[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=$e(i)))(o||i)}})();static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ld=(()=>{class i extends Fd{_platform=l(z);_ngZone=l(D);_renderer=l(he).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let n=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(n,"pointerdown",this._pointerDownListener,o),r.listen(n,"click",this._clickListener,o),r.listen(n,"auxclick",this._clickListener,o),r.listen(n,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=X(e)};_clickListener=e=>{let n=X(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let s=r[a],d=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,d))){if(Md(s.overlayElement,n)||Md(s.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>d.next(e)):d.next(e)}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=$e(i)))(o||i)}})();static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Md(i,t){let e=typeof ShadowRoot<"u"&&ShadowRoot,n=t;for(;n;){if(n===i)return!0;n=e&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var Vd=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return i})(),yo=(()=>{class i{_platform=l(z);_containerElement;_document=l(F);_styleLoader=l(me);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||lr()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let n=this._document.createElement("div");n.classList.add(e),lr()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(Vd)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),fa=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,n,o){this._renderer=e,this._ngZone=n,this.element=t.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents="none",t.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function pa(i){return i&&i.nodeType===1}var sn=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new f;_attachments=new f;_detachments=new f;_positionStrategy;_scrollStrategy;_locationChanges=oe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new f;_outsidePointerEvents=new f;_afterNextRenderRef;constructor(t,e,n,o,r,a,s,d,c,u=!1,y,j){this._portalOutlet=t,this._host=e,this._pane=n,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=s,this._location=d,this._outsideClickDispatcher=c,this._animationsDisabled=u,this._injector=y,this._renderer=j,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Te(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=_(_({},this._config),t),this._updateElementSize()}setDirection(t){this._config=G(_({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t=="string"?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=ne(this._config.width),t.height=ne(this._config.height),t.minWidth=ne(this._config.minWidth),t.minHeight=ne(this._config.minHeight),t.maxWidth=ne(this._config.maxWidth),t.maxHeight=ne(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;pa(t)?t.after(this._host):t?.type==="parent"?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let t="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new fa(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,n){let o=ot(e||[]).filter(r=>!!r);o.length&&(n?t.classList.add(...o):t.classList.remove(...o))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=Te(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}},Id="cdk-overlay-connected-position-bounding-box",tm=/([A-Za-z%]+)$/;function _a(i,t){return new xo(t,i.get(He),i.get(F),i.get(z),i.get(yo))}var xo=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new f;_resizeSubscription=oe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,n,o,r){this._viewportRuler=e,this._document=n,this._platform=o,this._overlayContainer=r,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(Id),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,n=this._viewportRect,o=this._containerRect,r=[],a;for(let s of this._preferredPositions){let d=this._getOriginPoint(t,o,s),c=this._getOverlayPoint(d,e,s),u=this._getOverlayFit(c,e,n,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,d);return}if(this._canFitWithFlexibleDimensions(u,c,n)){r.push({position:s,origin:d,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(d,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:c,originPoint:d,position:s,overlayRect:e})}if(r.length){let s=null,d=-1;for(let c of r){let u=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);u>d&&(d=u,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Tt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Id),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof E?this._origin.nativeElement:pa(this._origin)?this._origin:null}_getOriginPoint(t,e,n){let o;if(n.originX=="center")o=t.left+t.width/2;else{let a=this._isRtl()?t.right:t.left,s=this._isRtl()?t.left:t.right;o=n.originX=="start"?a:s}e.left<0&&(o-=e.left);let r;return n.originY=="center"?r=t.top+t.height/2:r=n.originY=="top"?t.top:t.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(t,e,n){let o;n.overlayX=="center"?o=-e.width/2:n.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return n.overlayY=="center"?r=-e.height/2:r=n.overlayY=="top"?0:-e.height,{x:t.x+o,y:t.y+r}}_getOverlayFit(t,e,n,o){let r=Rd(e),{x:a,y:s}=t,d=this._getOffset(o,"x"),c=this._getOffset(o,"y");d&&(a+=d),c&&(s+=c);let u=0-a,y=a+r.width-n.width,j=0-s,J=s+r.height-n.height,ee=this._subtractOverflows(r.width,u,y),q=this._subtractOverflows(r.height,j,J),ie=ee*q;return{visibleArea:ie,isCompletelyWithinViewport:r.width*r.height===ie,fitsInViewportVertically:q===r.height,fitsInViewportHorizontally:ee==r.width}}_canFitWithFlexibleDimensions(t,e,n){if(this._hasFlexibleDimensions){let o=n.bottom-e.y,r=n.right-e.x,a=Td(this._overlayRef.getConfig().minHeight),s=Td(this._overlayRef.getConfig().minWidth),d=t.fitsInViewportVertically||a!=null&&a<=o,c=t.fitsInViewportHorizontally||s!=null&&s<=r;return d&&c}return!1}_pushOverlayOnScreen(t,e,n){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let o=Rd(e),r=this._viewportRect,a=Math.max(t.x+o.width-r.width,0),s=Math.max(t.y+o.height-r.height,0),d=Math.max(r.top-n.top-t.y,0),c=Math.max(r.left-n.left-t.x,0),u=0,y=0;return o.width<=r.width?u=c||-a:u=t.x<this._getViewportMarginStart()?r.left-n.left-t.x:0,o.height<=r.height?y=d||-s:y=t.y<this._getViewportMarginTop()?r.top-n.top-t.y:0,this._previousPushAmount={x:u,y},{x:t.x+u,y:t.y+y}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!nm(this._lastScrollVisibility,n)){let o=new bo(t,n);this._positionChanges.next(o)}this._lastScrollVisibility=n}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,o=t.overlayY;t.overlayX==="center"?n="center":this._isRtl()?n=t.overlayX==="start"?"right":"left":n=t.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${n} ${o}`}_calculateBoundingBoxRect(t,e){let n=this._viewportRect,o=this._isRtl(),r,a,s;if(e.overlayY==="top")a=t.y,r=n.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=n.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=n.height-s+this._getViewportMarginTop();else{let J=Math.min(n.bottom-t.y+n.top,t.y),ee=this._lastBoundingBoxSize.height;r=J*2,a=t.y-J,r>ee&&!this._isInitialRender&&!this._growAfterOpen&&(a=t.y-ee/2)}let d=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,c=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,u,y,j;if(c)j=n.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=t.x-this._getViewportMarginStart();else if(d)y=t.x,u=n.right-t.x-this._getViewportMarginEnd();else{let J=Math.min(n.right-t.x+n.left,t.x),ee=this._lastBoundingBoxSize.width;u=J*2,y=t.x-J,u>ee&&!this._isInitialRender&&!this._growAfterOpen&&(y=t.x-ee/2)}return{top:a,left:y,bottom:s,right:j,width:u,height:r}}_setBoundingBoxStyles(t,e){let n=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=ne(n.width),o.height=ne(n.height),o.top=ne(n.top)||"auto",o.bottom=ne(n.bottom)||"auto",o.left=ne(n.left)||"auto",o.right=ne(n.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=ne(r)),a&&(o.maxWidth=ne(a))}this._lastBoundingBoxSize=n,Tt(this._boundingBox.style,o)}_resetBoundingBoxStyles(){Tt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Tt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,e){let n={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let u=this._viewportRuler.getViewportScrollPosition();Tt(n,this._getExactOverlayY(e,t,u)),Tt(n,this._getExactOverlayX(e,t,u))}else n.position="static";let s="",d=this._getOffset(e,"x"),c=this._getOffset(e,"y");d&&(s+=`translateX(${d}px) `),c&&(s+=`translateY(${c}px)`),n.transform=s.trim(),a.maxHeight&&(o?n.maxHeight=ne(a.maxHeight):r&&(n.maxHeight="")),a.maxWidth&&(o?n.maxWidth=ne(a.maxWidth):r&&(n.maxWidth="")),Tt(this._pane.style,n)}_getExactOverlayY(t,e,n){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,n)),t.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;o.bottom=`${a-(r.y+this._overlayRect.height)}px`}else o.top=ne(r.y);return o}_getExactOverlayX(t,e,n){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,n));let a;if(this._isRtl()?a=t.overlayX==="end"?"left":"right":a=t.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;o.right=`${s-(r.x+this._overlayRect.width)}px`}else o.left=ne(r.x);return o}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),n=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:kd(t,n),isOriginOutsideView:ma(t,n),isOverlayClipped:kd(e,n),isOverlayOutsideView:ma(e,n)}}_subtractOverflows(t,...e){return e.reduce((n,o)=>n-Math.max(o,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+t-this._getViewportMarginEnd(),bottom:n.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e==="x"?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&ot(t).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof E)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,n=t.height||0;return{top:t.y,bottom:t.y+n,left:t.x,right:t.x+e,height:n,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();t&&(e.style.display="block");let n=e.getBoundingClientRect();return t&&(e.style.display=""),n}};function Tt(i,t){for(let e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return i}function Td(i){if(typeof i!="number"&&i!=null){let[t,e]=i.split(tm);return!e||e==="px"?parseFloat(t):null}return i||null}function Rd(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function nm(i,t){return i===t?!0:i.isOriginClipped===t.isOriginClipped&&i.isOriginOutsideView===t.isOriginOutsideView&&i.isOverlayClipped===t.isOverlayClipped&&i.isOverlayOutsideView===t.isOverlayOutsideView}var Ad="cdk-global-overlay-wrapper";function cn(i){return new vo}var vo=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(Ad),this._isDisposed=!1}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._xOffset=t,this._xPosition="left",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._xOffset=t,this._xPosition="right",this}start(t=""){return this._xOffset=t,this._xPosition="start",this}end(t=""){return this._xOffset=t,this._xPosition="end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._xPosition="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,n=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:a,maxHeight:s}=n,d=(o==="100%"||o==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(r==="100%"||r==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,y=this._xOffset,j=this._overlayRef.getConfig().direction==="rtl",J="",ee="",q="";d?q="flex-start":u==="center"?(q="center",j?ee=y:J=y):j?u==="left"||u==="end"?(q="flex-end",J=y):(u==="right"||u==="start")&&(q="flex-start",ee=y):u==="left"||u==="start"?(q="flex-start",J=y):(u==="right"||u==="end")&&(q="flex-end",ee=y),t.position=this._cssPosition,t.marginLeft=d?"0":J,t.marginTop=c?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=d?"0":ee,e.justifyContent=q,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,n=e.style;e.classList.remove(Ad),n.justifyContent=n.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=!0}},Bd=(()=>{class i{_injector=l(R);constructor(){}global(){return cn()}flexibleConnectedTo(e){return _a(this._injector,e)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ei=new p("OVERLAY_DEFAULT_CONFIG");function ti(i,t){i.get(me).load(Vd);let e=i.get(yo),n=i.get(F),o=i.get(te),r=i.get(Vt),a=i.get(fe),s=i.get(se,null,{optional:!0})||i.get(he).createRenderer(null,null),d=new Rt(t),c=i.get(ei,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||a.value,"showPopover"in n.body?d.usePopover=t?.usePopover??c:d.usePopover=!1;let u=n.createElement("div"),y=n.createElement("div");u.id=o.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),y.appendChild(u),d.usePopover&&(y.setAttribute("popover","manual"),y.classList.add("cdk-overlay-popover"));let j=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return pa(j)?j.after(y):j?.type==="parent"?j.element.appendChild(y):e.getContainerElement().appendChild(y),new sn(new fo(u,r,i),y,u,d,i.get(D),i.get(Nd),n,i.get(ns),i.get(Ld),t?.disableAnimations??i.get(hi,null,{optional:!0})==="NoopAnimations",i.get(Lt),s)}var zd=(()=>{class i{scrollStrategies=l(Pd);_positionBuilder=l(Bd);_injector=l(R);constructor(){}create(e){return ti(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),im=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],om=new p("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(R);return()=>Jn(i)}}),ln=(()=>{class i{elementRef=l(E);constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),jd=new p("cdk-connected-overlay-default-config"),Co=(()=>{class i{_dir=l(fe,{optional:!0});_injector=l(R);_overlayRef;_templatePortal;_backdropSubscription=oe.EMPTY;_attachSubscription=oe.EMPTY;_detachSubscription=oe.EMPTY;_positionSubscription=oe.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=l(om);_ngZone=l(D);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new k;positionChange=new k;attach=new k;detach=new k;overlayKeydown=new k;overlayOutsideClick=new k;constructor(){let e=l(ft),n=l(_t),o=l(jd,{optional:!0}),r=l(ei,{optional:!0});this.usePopover=r?.usePopover===!1?null:"global",this._templatePortal=new Mt(e,n),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=im);let e=this._overlayRef=ti(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(n=>{this.overlayKeydown.next(n),n.keyCode===27&&!this.disableClose&&!Ce(n)&&(n.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(n=>{let o=this._getOriginElement(),r=X(n);(!o||o!==r&&!o.contains(r))&&this.overlayOutsideClick.next(n)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),n=new Rt({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(n.height=this.height),(this.minWidth||this.minWidth===0)&&(n.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(n.minHeight=this.minHeight),this.backdropClass&&(n.backdropClass=this.backdropClass),this.panelClass&&(n.panelClass=this.panelClass),n}_updatePositionStrategy(e){let n=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(n).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=_a(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof ln?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof ln?this.origin.elementRef.nativeElement:this.origin instanceof E?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(n=>this.backdropClick.emit(n)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Ba(()=>this.positionChange.observers.length>0)).subscribe(n=>{this._ngZone.run(()=>this.positionChange.emit(n)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",P],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",P],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",P],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",P],push:[2,"cdkConnectedOverlayPush","push",P],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",P],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",P],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[we]})}return i})(),At=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({providers:[zd],imports:[Y,It,gr,gr]})}return i})();var Hd=(()=>{class i{_animationsDisabled=ge();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(n,o){n&2&&L("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(n,o){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return i})();var rm=["text"],am=[[["mat-icon"]],"*"],sm=["mat-icon","*"];function lm(i,t){if(i&1&&ce(0,"mat-pseudo-checkbox",1),i&2){let e=B();V("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function dm(i,t){if(i&1&&ce(0,"mat-pseudo-checkbox",3),i&2){let e=B();V("disabled",e.disabled)}}function cm(i,t){if(i&1&&(m(0,"span",4),x(1),h()),i&2){let e=B();g(),Xa("(",e.group.label,")")}}var ba=new p("MAT_OPTION_PARENT_COMPONENT"),xa=new p("MatOptgroup");var ga=class{source;isUserInput;constructor(t,e=!1){this.source=t,this.isUserInput=e}},Ge=(()=>{class i{_element=l(E);_changeDetectorRef=l(De);_parent=l(ba,{optional:!0});group=l(xa,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(te).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=M(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new k;_text;_stateChanges=new f;constructor(){let e=l(me);e.load(Ri),e.load(wi),this._signalDisableRipple=!!this._parent&&gt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let o=this._getHostElement();typeof o.focus=="function"&&o.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ce(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ga(this,e))}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-option"]],viewQuery:function(n,o){if(n&1&&Le(rm,7),n&2){let r;H(r=U())&&(o._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(n,o){n&1&&I("click",function(){return o._selectViaInteraction()})("keydown",function(a){return o._handleKeydown(a)}),n&2&&(Ye("id",o.id),N("aria-selected",o.selected)("aria-disabled",o.disabled.toString()),L("mdc-list-item--selected",o.selected)("mat-mdc-option-multiple",o.multiple)("mat-mdc-option-active",o.active)("mdc-list-item--disabled",o.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",P]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:sm,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(n,o){n&1&&(ve(am),K(0,lm,1,2,"mat-pseudo-checkbox",1),W(1),m(2,"span",2,0),W(4,1),h(),K(5,dm,1,1,"mat-pseudo-checkbox",3),K(6,cm,2,1,"span",4),ce(7,"div",5)),n&2&&($(o.multiple?0:-1),g(5),$(!o.multiple&&o.selected&&!o.hideSingleSelectionIndicator?5:-1),g(),$(o.group&&o.group._inert?6:-1),g(),V("matRippleTrigger",o._getHostElement())("matRippleDisabled",o.disabled||o.disableRipple))},dependencies:[Hd,Ns],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return i})();function Ud(i,t,e){if(e.length){let n=t.toArray(),o=e.toArray(),r=0;for(let a=0;a<i+1;a++)n[a].group&&n[a].group===o[r]&&r++;return r}return 0}function Wd(i,t,e,n){return i<e?i:i+t>e+n?Math.max(0,i-n+t):e}var Gd=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[Y]})}return i})();var va=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[Ai,Gd,Ge,Y]})}return i})();var um=["trigger"],hm=["panel"],mm=[[["mat-select-trigger"]],"*"],fm=["mat-select-trigger","*"];function pm(i,t){if(i&1&&(m(0,"span",4),x(1),h()),i&2){let e=B();g(),ye(e.placeholder)}}function _m(i,t){i&1&&W(0)}function gm(i,t){if(i&1&&(m(0,"span",11),x(1),h()),i&2){let e=B(2);g(),ye(e.triggerValue)}}function bm(i,t){if(i&1&&(m(0,"span",5),K(1,_m,1,0)(2,gm,2,1,"span",11),h()),i&2){let e=B();g(),$(e.customTrigger?1:2)}}function xm(i,t){if(i&1){let e=it();m(0,"div",12,1),I("keydown",function(o){Me(e);let r=B();return Ie(r._handleKeydown(o))}),W(2,1),h()}if(i&2){let e=B();Ve(e.panelClass),L("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),N("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var vm=new p("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(R);return()=>Jn(i)}}),ym=new p("MAT_SELECT_CONFIG"),Cm=new p("MatSelectTrigger"),ya=class{source;value;constructor(t,e){this.source=t,this.value=e}},un=(()=>{class i{_viewportRuler=l(He);_changeDetectorRef=l(De);_elementRef=l(E);_dir=l(fe,{optional:!0});_idGenerator=l(te);_renderer=l(se);_parentFormField=l($n,{optional:!0});ngControl=l(lt,{self:!0,optional:!0});_liveAnnouncer=l(vn);_defaultOptions=l(ym,{optional:!0});_animationsDisabled=ge();_popoverLocation;_initialized=new f;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let o=this.panel.nativeElement,r=Ud(e,this.options,this.optionGroups),a=n._getHostElement();e===0&&r===1?o.scrollTop=0:o.scrollTop=Wd(a.offsetTop,a.offsetHeight,o.scrollTop,o.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ya(this,e)}_scrollStrategyFactory=l(vm);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new f;_errorStateTracker;stateChanges=new f;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=M(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(st.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Ft(()=>{let e=this.options;return e?e.changes.pipe(pe(e),Nt(()=>Ee(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(Nt(()=>this.optionSelectionChanges))});openedChange=new k;_openedStream=this.openedChange.pipe(le(e=>e),re(()=>{}));_closedStream=this.openedChange.pipe(le(e=>!e),re(()=>{}));selectionChange=new k;valueChange=new k;constructor(){let e=l(uo),n=l(Ln,{optional:!0}),o=l(Vn,{optional:!0}),r=l(new pi("tabindex"),{optional:!0}),a=l(ei,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new on(e,this.ngControl,o,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Yn(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ae(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ae(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(pe(null),ae(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let o=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?o.setAttribute("aria-labelledby",e):o.removeAttribute("aria-labelledby")}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(xe(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let n=`${this.id}-panel`;this._trackedModal&&sr(this._trackedModal,"aria-owns",n),Ms(e,"aria-owns",n),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;sr(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(o),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),o=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,o=n===40||n===38||n===37||n===39,r=n===13||n===32,a=this._keyManager;if(!a.isTyping()&&r&&!Ce(e)||(this.multiple||e.altKey)&&o)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let d=this.selected;d&&s!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,o=e.keyCode,r=o===40||o===38,a=n.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!a&&(o===13||o===32)&&n.activeItem&&!Ce(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!a&&this._multiple&&o===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(s?d.select():d.deselect())})}else{let s=n.activeItemIndex;n.onKeydown(e),this._multiple&&r&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==s&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ce(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(o=>{if(this._selectionModel.isSelected(o))return!1;try{return(o.value!=null||this.canSelectNullableOptions)&&this._compareWith(o.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof ln?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new yn(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ee(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ae(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ee(...this.options.map(n=>n._stateChanges)).pipe(ae(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let o=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(o!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),o!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,o)=>this.sortComparator?this.sortComparator(n,o,e):e.indexOf(n)-e.indexOf(o)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(o=>o.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(e){let n=X(e);n&&(n.tagName==="MAT-OPTION"||n.classList.contains("cdk-overlay-backdrop")||n.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-select"]],contentQueries:function(n,o,r){if(n&1&&mi(r,Cm,5)(r,Ge,5)(r,xa,5),n&2){let a;H(a=U())&&(o.customTrigger=a.first),H(a=U())&&(o.options=a),H(a=U())&&(o.optionGroups=a)}},viewQuery:function(n,o){if(n&1&&Le(um,5)(hm,5)(Co,5),n&2){let r;H(r=U())&&(o.trigger=r.first),H(r=U())&&(o.panel=r.first),H(r=U())&&(o._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(n,o){n&1&&I("keydown",function(a){return o._handleKeydown(a)})("focus",function(){return o._onFocus()})("blur",function(){return o._onBlur()}),n&2&&(N("id",o.id)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o.panelOpen?o.id+"-panel":null)("aria-expanded",o.panelOpen)("aria-label",o.ariaLabel||null)("aria-required",o.required.toString())("aria-disabled",o.disabled.toString())("aria-invalid",o.errorState)("aria-activedescendant",o._getAriaActiveDescendant()),L("mat-mdc-select-disabled",o.disabled)("mat-mdc-select-invalid",o.errorState)("mat-mdc-select-required",o.required)("mat-mdc-select-empty",o.empty)("mat-mdc-select-multiple",o.multiple)("mat-select-open",o.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",P],disableRipple:[2,"disableRipple","disableRipple",P],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:xt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",P],placeholder:"placeholder",required:[2,"required","required",P],multiple:[2,"multiple","multiple",P],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",P],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",xt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",P]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ue([{provide:Kn,useExisting:i},{provide:ba,useExisting:i}]),we],ngContentSelectors:fm,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(n,o){if(n&1&&(ve(mm),m(0,"div",2,0),I("click",function(){return o.open()}),m(3,"div",3),K(4,pm,2,1,"span",4)(5,bm,3,1,"span",5),h(),m(6,"div",6)(7,"div",7),za(),m(8,"svg",8),ce(9,"path",9),h()()()(),Fe(10,xm,3,16,"ng-template",10),I("detach",function(){return o.close()})("backdropClick",function(){return o.close()})("overlayKeydown",function(a){return o._handleOverlayKeydown(a)})),n&2){let r=fn(1);g(3),N("id",o._valueId),g(),$(o.empty?4:5),g(6),V("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",o._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",o._scrollStrategy)("cdkConnectedOverlayOrigin",o._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",o._positions)("cdkConnectedOverlayWidth",o._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",o._popoverLocation)}},dependencies:[ln,Co],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return i})();var hn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({imports:[At,va,Y,Sn,Oe,va]})}return i})();var Eo=class i{taskCreated=Be();taskModel=M({title:"",description:"",priority:"medium"});taskFormSignal=Wn(this.taskModel,t=>{nn(t.title),tn(t.title,3,{message:"El t\xEDtulo debe tener al menos 3 caracteres"}),nn(t.description),tn(t.description,10,{message:"La descripci\xF3n debe tener al menos 10 caracteres"})},{submission:{action:async t=>{t().valid()&&(this.taskCreated.emit(t().value()),t().reset({title:"",description:"",priority:"medium"}))}}});static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-task-form-component"]],outputs:{taskCreated:"taskCreated"},decls:23,vars:5,consts:[[1,"task-form",3,"formRoot"],["appearance","outline"],["matInput","","placeholder","Ej: Comprar leche",3,"formField"],["matInput","","placeholder","Ej: Ir al supermercado por la tarde",3,"formField"],[3,"formField"],["value","low"],["value","medium"],["value","high"],["mat-raised-button","","color","primary","type","submit",1,"submit-btn",3,"disabled"]],template:function(e,n){e&1&&(m(0,"form",0)(1,"mat-form-field",1)(2,"mat-label"),x(3,"T\xEDtulo"),h(),ce(4,"input",2),tt(),h(),m(5,"mat-form-field",1)(6,"mat-label"),x(7,"Descripci\xF3n"),h(),ce(8,"input",3),tt(),h(),m(9,"mat-form-field",1)(10,"mat-label"),x(11,"Prioridad"),h(),m(12,"mat-select",4)(13,"mat-option",5),x(14,"\u{1F7E2} Baja"),h(),m(15,"mat-option",6),x(16,"\u{1F7E1} Media"),h(),m(17,"mat-option",7),x(18,"\u{1F534} Alta"),h()(),tt(),h(),m(19,"button",8)(20,"mat-icon"),x(21,"add"),h(),x(22," Crear Tarea "),h()()),e&2&&(V("formRoot",n.taskFormSignal),g(4),V("formField",n.taskFormSignal.title),nt(),g(4),V("formField",n.taskFormSignal.description),nt(),g(4),V("formField",n.taskFormSignal.priority),nt(),g(7),V("disabled",n.taskFormSignal().invalid()))},dependencies:[io,oo,je,at,so,ao,mo,ho,Qe,We,hn,un,Ge,Oe],styles:[".task-form[_ngcontent-%COMP%]{display:flex;gap:1rem;align-items:center;padding:1rem;background:var(--filter-bg);color:var(--text-main);border-radius:8px;box-shadow:0 4px 6px #0000001a;margin-bottom:2rem;flex-wrap:wrap}mat-form-field[_ngcontent-%COMP%]{flex:1;min-width:200px}.submit-btn[_ngcontent-%COMP%]{height:56px}"],changeDetection:0})};function wm(i,t){}var ht=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Da=(()=>{class i extends an{_elementRef=l(E);_focusTrapFactory=l(nr);_config;_interactivityChecker=l(tr);_ngZone=l(D);_focusMonitor=l(xn);_renderer=l(se);_changeDetectorRef=l(De);_injector=l(R);_platform=l(z);_document=l(F);_portalOutlet;_focusTrapped=new f;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=l(ht,{optional:!0})||new ht,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let n=this._ariaLabelledByQueue.indexOf(e);n>-1&&(this._ariaLabelledByQueue.splice(n,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),n}attachTemplatePortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),n}attachDomPortal=e=>{this._portalOutlet.hasAttached();let n=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),n};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),a(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",o),a=this._renderer.listen(e,"mousedown",o)})),e.focus(n)}_focusByCssSelector(e,n){let o=this._elementRef.nativeElement.querySelector(e);o&&this._forceFocus(o,n)}_trapFocus(e){this._isDestroyed||Te(()=>{let n=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||n.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,n=null;if(typeof e=="string"?n=this._document.querySelector(e):typeof e=="boolean"?n=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(n=e),this._config.restoreFocus&&n&&typeof n.focus=="function"){let o=_n(),r=this._elementRef.nativeElement;(!o||o===this._document.body||o===r||r.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(n,this._closeInteractionType),this._closeInteractionType=null):n.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,n=_n();return e===n||e.contains(n)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=_n()))}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(n,o){if(n&1&&Le(Zn,7),n&2){let r;H(r=U())&&(o._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(n,o){n&2&&N("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[de],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(n,o){n&1&&Fe(0,wm,0,0,"ng-template",0)},dependencies:[Zn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),ni=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new f;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(t,e){this.overlayRef=t,this.config=e,this.disableClose=e.disableClose,this.backdropClick=t.backdropClick(),this.keydownEvents=t.keydownEvents(),this.outsidePointerEvents=t.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(n=>{n.keyCode===27&&!this.disableClose&&!Ce(n)&&(n.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=t.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(t,e){if(this._canClose(t)){let n=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(t),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(t="",e=""){return this.overlayRef.updateSize({width:t,height:e}),this}addPanelClass(t){return this.overlayRef.addPanelClass(t),this}removePanelClass(t){return this.overlayRef.removePanelClass(t),this}_canClose(t){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(t,e,this.componentInstance))}},Dm=new p("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=l(R);return()=>dn(i)}}),Em=new p("DialogData"),Sm=new p("DefaultDialogConfig");function km(i){let t=M(i),e=new k;return{valueSignal:t,get value(){return t()},change:e,ngOnDestroy(){e.complete()}}}var Ea=(()=>{class i{_injector=l(R);_defaultOptions=l(Sm,{optional:!0});_parentDialog=l(i,{optional:!0,skipSelf:!0});_overlayContainer=l(yo);_idGenerator=l(te);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new f;_afterOpenedAtThisLevel=new f;_ariaHiddenElements=new Map;_scrollStrategy=l(Dm);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Ft(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(pe(void 0)));constructor(){}open(e,n){let o=this._defaultOptions||new ht;n=_(_({},o),n),n.id=n.id||this._idGenerator.getId("cdk-dialog-"),n.id&&this.getDialogById(n.id);let r=this._getOverlayConfig(n),a=ti(this._injector,r),s=new ni(a,n),d=this._attachContainer(a,s,n);if(s.containerInstance=d,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();d._focusTrapped?d._focusTrapped.pipe(xe(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(e,s,d,n),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){wa(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){wa(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),wa(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let n=new Rt({positionStrategy:e.positionStrategy||cn().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(n.backdropClass=e.backdropClass),n}_attachContainer(e,n,o){let r=o.injector||o.viewContainerRef?.injector,a=[{provide:ht,useValue:o},{provide:ni,useValue:n},{provide:sn,useValue:e}],s;o.container?typeof o.container=="function"?s=o.container:(s=o.container.type,a.push(...o.container.providers(o))):s=Da;let d=new rn(s,o.viewContainerRef,R.create({parent:r||this._injector,providers:a}));return e.attach(d).instance}_attachDialogContent(e,n,o,r){if(e instanceof ft){let a=this._createInjector(r,n,o,void 0),s={$implicit:r.data,dialogRef:n};r.templateContext&&(s=_(_({},s),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),o.attachTemplatePortal(new Mt(e,null,s,a))}else{let a=this._createInjector(r,n,o,this._injector),s=o.attachComponentPortal(new rn(e,r.viewContainerRef,a));n.componentRef=s,n.componentInstance=s.instance}}_createInjector(e,n,o,r){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:Em,useValue:e.data},{provide:ni,useValue:n}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(n,e,o)):s.push(...e.providers)),e.direction&&(!a||!a.get(fe,null,{optional:!0}))&&s.push({provide:fe,useValue:km(e.direction)}),R.create({parent:a||r,providers:s})}_removeOpenDialog(e,n){let o=this.openDialogs.indexOf(e);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,a)=>{r?a.setAttribute("aria-hidden",r):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),n&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let n=e.parentElement.children;for(let o=n.length-1;o>-1;o--){let r=n[o];r!==e&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function wa(i,t){let e=i.length;for(;e--;)t(i[e])}var Kd=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({providers:[Ea],imports:[At,It,ir,It]})}return i})();function Mm(i,t){}var ko=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Sa="mdc-dialog--open",$d="mdc-dialog--opening",Yd="mdc-dialog--closing",Im=150,Tm=75,Rm=(()=>{class i extends Da{_animationStateChanged=new k;_animationsEnabled=!ge();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Zd(this._config.enterAnimationDuration)??Im:0;_exitAnimationDuration=this._animationsEnabled?Zd(this._config.exitAnimationDuration)??Tm:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(qd,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add($d,Sa)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Sa),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Sa),this._animationsEnabled?(this._hostElement.style.setProperty(qd,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Yd)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove($d,Yd)}_waitForAnimationToComplete(e,n){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(n,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let n=super.attachComponentPortal(e);return n.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),n}static \u0275fac=(()=>{let e;return function(o){return(e||(e=$e(i)))(o||i)}})();static \u0275cmp=C({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(n,o){n&2&&(Ye("id",o._config.id),N("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),L("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[de],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(n,o){n&1&&(m(0,"div",0)(1,"div",1),Fe(2,Mm,0,0,"ng-template",2),h()())},dependencies:[Zn],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return i})(),qd="--mat-dialog-transition-duration";function Zd(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?qe(i.substring(0,i.length-2)):i.endsWith("s")?qe(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var So=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(So||{}),mt=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Vo(1);_beforeClosed=new Vo(1);_result;_closeFallbackTimeout;_state=So.OPEN;_closeInteractionType;constructor(t,e,n){this._ref=t,this._config=e,this._containerInstance=n,this.disableClose=e.disableClose,this.id=t.id,t.addPanelClass("mat-mdc-dialog-panel"),n._animationStateChanged.pipe(le(o=>o.state==="opened"),xe(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(le(o=>o.state==="closed"),xe(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),t.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ee(this.backdropClick(),this.keydownEvents().pipe(le(o=>o.keyCode===27&&!this.disableClose&&!Ce(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),Am(this,o.type==="keydown"?"keyboard":"mouse"))})}close(t){let e=this._config.closePredicate;e&&!e(t,this._config,this.componentInstance)||(this._result=t,this._containerInstance._animationStateChanged.pipe(le(n=>n.state==="closing"),xe(1)).subscribe(n=>{this._beforeClosed.next(t),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),n.totalTime+100)}),this._state=So.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(t){let e=this._ref.config.positionStrategy;return t&&(t.left||t.right)?t.left?e.left(t.left):e.right(t.right):e.centerHorizontally(),t&&(t.top||t.bottom)?t.top?e.top(t.top):e.bottom(t.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(t="",e=""){return this._ref.updateSize(t,e),this}addPanelClass(t){return this._ref.addPanelClass(t),this}removePanelClass(t){return this._ref.removePanelClass(t),this}getState(){return this._state}_finishDialogClose(){this._state=So.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Am(i,t,e){return i._closeInteractionType=t,i.close(e)}var ka=new p("MatMdcDialogData"),Om=new p("mat-mdc-dialog-default-options"),Pm=new p("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(R);return()=>dn(i)}}),Mo=(()=>{class i{_defaultOptions=l(Om,{optional:!0});_scrollStrategy=l(Pm);_parentDialog=l(i,{optional:!0,skipSelf:!0});_idGenerator=l(te);_injector=l(R);_dialog=l(Ea);_animationsDisabled=ge();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new f;_afterOpenedAtThisLevel=new f;dialogConfigClass=ko;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Ft(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(pe(void 0)));constructor(){this._dialogRefConstructor=mt,this._dialogContainerType=Rm,this._dialogDataToken=ka}open(e,n){let o;n=_(_({},this._defaultOptions||new ko),n),n.id=n.id||this._idGenerator.getId("mat-mdc-dialog-"),n.scrollStrategy=n.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,G(_({},n),{positionStrategy:cn(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||n.enterAnimationDuration?.toLocaleString()==="0"||n.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:n},{provide:ht,useValue:n}]},templateContext:()=>({dialogRef:o}),providers:(a,s,d)=>(o=new this._dialogRefConstructor(a,n,d),o.updatePosition(n?.position),[{provide:this._dialogContainerType,useValue:d},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(o);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let n=e.length;for(;n--;)e[n].close()}static \u0275fac=function(n){return new(n||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Xd=(()=>{class i{_dialogRef=l(mt,{optional:!0});_elementRef=l(E);_dialog=l(Mo);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Fm(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i})}return i})(),Io=(()=>{class i extends Xd{id=l(te).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=$e(i)))(o||i)}})();static \u0275dir=S({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(n,o){n&2&&Ye("id",o.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[de]})}return i})(),To=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=S({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Wa([Hs])]})}return i})(),Ro=(()=>{class i extends Xd{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=$e(i)))(o||i)}})();static \u0275dir=S({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(n,o){n&2&&L("mat-mdc-dialog-actions-align-start",o.align==="start")("mat-mdc-dialog-actions-align-center",o.align==="center")("mat-mdc-dialog-actions-align-end",o.align==="end")},inputs:{align:"align"},features:[de]})}return i})();function Fm(i,t){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?t.find(n=>n.id===e.id):null}var Ao=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=A({type:i});static \u0275inj=T({providers:[Mo],imports:[Kd,At,It,Y]})}return i})();var Oo=class i{dialogRef=l(mt);data=l(ka);editModel=M({title:this.data.task.title,description:this.data.task.description,priority:this.data.task.priority});editFormSignal=Wn(this.editModel,t=>{nn(t.title),tn(t.title,3,{message:"El t\xEDtulo debe tener al menos 3 caracteres"}),nn(t.description),tn(t.description,10,{message:"La descripci\xF3n debe tener al menos 10 caracteres"})},{submission:{action:async t=>{if(t().valid()){let e=_(_({},this.data.task),t().value());this.dialogRef.close(e)}}}});closeModal(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-task-edit-component"]],decls:27,vars:5,consts:[["mat-dialog-title",""],["id","editForm",1,"edit-task-form",3,"formRoot"],["appearance","outline"],["matInput","","placeholder","T\xEDtulo",3,"formField"],["matInput","","placeholder","Descripci\xF3n","rows","3",3,"formField"],[3,"formField"],["value","low"],["value","medium"],["value","high"],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","type","submit","form","editForm",3,"disabled"]],template:function(e,n){e&1&&(m(0,"h2",0),x(1,"Editar Tarea"),h(),m(2,"mat-dialog-content")(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),x(6,"T\xEDtulo"),h(),ce(7,"input",3),tt(),h(),m(8,"mat-form-field",2)(9,"mat-label"),x(10,"Descripci\xF3n"),h(),ce(11,"textarea",4),tt(),h(),m(12,"mat-form-field",2)(13,"mat-label"),x(14,"Prioridad"),h(),m(15,"mat-select",5)(16,"mat-option",6),x(17,"\u{1F7E2} Baja"),h(),m(18,"mat-option",7),x(19,"\u{1F7E1} Media"),h(),m(20,"mat-option",8),x(21,"\u{1F534} Alta"),h()(),tt(),h()()(),m(22,"mat-dialog-actions",9)(23,"button",10),I("click",function(){return n.closeModal()}),x(24,"Cancelar"),h(),m(25,"button",11),x(26,"Guardar"),h()()),e&2&&(g(3),V("formRoot",n.editFormSignal),g(4),V("formField",n.editFormSignal.title),nt(),g(4),V("formField",n.editFormSignal.description),nt(),g(4),V("formField",n.editFormSignal.priority),nt(),g(10),V("disabled",n.editFormSignal().invalid()))},dependencies:[oo,io,Ao,Io,Ro,To,je,at,Oe,Qe,We,mo,ho,hn,un,Ge],styles:[".edit-task-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding-top:1rem}"],changeDetection:0})};var Po=class i{dialogRef=l(mt);onConfirm(){this.dialogRef.close(!0)}onDecline(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-confirm-dialog"]],decls:10,vars:0,consts:[["mat-dialog-title",""],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(e,n){e&1&&(m(0,"h2",0),x(1,"Eliminar Tarea"),h(),m(2,"mat-dialog-content")(3,"p"),x(4,"\xBFEst\xE1s seguro de que deseas eliminar esta tarea de forma permanente?"),h()(),m(5,"mat-dialog-actions",1)(6,"button",2),I("click",function(){return n.onDecline()}),x(7,"Cancelar"),h(),m(8,"button",3),I("click",function(){return n.onConfirm()}),x(9,"Eliminar"),h()())},dependencies:[Ao,Io,Ro,To,je,at],styles:["p[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:20px}"],changeDetection:0})};var Fo=class i{isDarkMode=M(this.getInitialTheme());constructor(){_e(()=>{let t=this.isDarkMode()?"dark":"light";t==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme"),localStorage.setItem("theme",t)})}toggleTheme(){this.isDarkMode.update(t=>!t)}getInitialTheme(){let t=localStorage.getItem("theme");return t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}static \u0275fac=function(e){return new(e||i)};static \u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"})};var Nm=()=>["inProgressList","doneList"],Lm=()=>["todoList","doneList"],Vm=()=>["todoList","inProgressList"],No=class i{taskService=l(xi);dialog=l(Mo);themeService=l(Fo);announcer=l(vn);statusLabelMap={toDo:"Por Hacer",inProgress:"En Progreso",done:"Hecho"};changeFilter(t){this.taskService.filterPriority.set(t)}onTaskCreated(t){this.taskService.addTask(G(_({},t),{status:"toDo"}))}deleteTask(t){this.dialog.open(Po,{width:"350px"}).afterClosed().subscribe(n=>{n&&(this.taskService.deleteTask(t),this.announcer.announce("Tarea eliminada"))})}moveTask(t,e){this.taskService.moveTask(t.id,e),this.announcer.announce(`"${t.title}" movida a ${this.statusLabelMap[e]}`)}columnStatusMap={todo:"toDo",inProgress:"inProgress",done:"done"};onDrop(t,e){if(t.previousContainer!==t.container){let n=t.item.data,o=this.columnStatusMap[e]??"toDo";this.moveTask(n,o)}}editTask(t){this.dialog.open(Oo,{width:"400px",data:{task:t}}).afterClosed().subscribe(n=>{n&&this.taskService.updateTask(n)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-kanban"]],decls:27,vars:13,consts:[[1,"kanban-header"],["mat-icon-button","","aria-label","Toggle Dark Mode",3,"click"],[1,"kanban-board"],[3,"taskCreated"],[1,"filter-bar"],["appearance","outline"],["value","all",3,"selectionChange"],["value","all"],["value","low"],["value","medium"],["value","high"],["cdkDropListGroup","",1,"kanban-columns"],["cdkDropList","","id","todoList","columnType","todo","title","\u{1F4CC} Por Hacer","emptyStateMessage","\u2728 No hay tareas pendientes",3,"cdkDropListDropped","taskMoved","taskEdited","taskDeleted","cdkDropListConnectedTo","cdkDropListData","tasks"],["cdkDropList","","id","inProgressList","columnType","inProgress","title","\u23F3 En Progreso","emptyStateMessage","\u23F3 No hay tareas en progreso",3,"cdkDropListDropped","taskMoved","taskEdited","taskDeleted","cdkDropListConnectedTo","tasks","cdkDropListData"],["cdkDropList","","id","doneList","columnType","done","title","\u2705 Hecho","emptyStateMessage","\u2705 Tareas completadas aparecer\xE1n aqu\xED",3,"cdkDropListDropped","taskMoved","taskEdited","taskDeleted","cdkDropListConnectedTo","tasks","cdkDropListData"]],template:function(e,n){e&1&&(m(0,"header",0)(1,"h1"),x(2,"\u{1F4CB} Mi Tablero Kanban"),h(),m(3,"p"),x(4,"Organiza tus tareas de manera eficiente y visual"),h(),m(5,"button",1),I("click",function(){return n.themeService.toggleTheme()}),m(6,"mat-icon"),x(7),h()()(),m(8,"div",2)(9,"app-task-form-component",3),I("taskCreated",function(r){return n.onTaskCreated(r)}),h(),m(10,"div",4)(11,"mat-form-field",5)(12,"mat-label"),x(13,"\u{1F50D} Filtrar por prioridad"),h(),m(14,"mat-select",6),I("selectionChange",function(r){return n.changeFilter(r.value)}),m(15,"mat-option",7),x(16,"\u{1F4CB} Todas"),h(),m(17,"mat-option",8),x(18,"\u{1F7E2} Baja"),h(),m(19,"mat-option",9),x(20,"\u{1F7E1} Media"),h(),m(21,"mat-option",10),x(22,"\u{1F534} Alta"),h()()()(),m(23,"div",11)(24,"app-column-component",12),I("cdkDropListDropped",function(r){return n.onDrop(r,"todo")})("taskMoved",function(r){return n.moveTask(r.task,r.newStatus)})("taskEdited",function(r){return n.editTask(r)})("taskDeleted",function(r){return n.deleteTask(r)}),h(),m(25,"app-column-component",13),I("cdkDropListDropped",function(r){return n.onDrop(r,"inProgress")})("taskMoved",function(r){return n.moveTask(r.task,r.newStatus)})("taskEdited",function(r){return n.editTask(r)})("taskDeleted",function(r){return n.deleteTask(r)}),h(),m(26,"app-column-component",14),I("cdkDropListDropped",function(r){return n.onDrop(r,"done")})("taskMoved",function(r){return n.moveTask(r.task,r.newStatus)})("taskEdited",function(r){return n.editTask(r)})("taskDeleted",function(r){return n.deleteTask(r)}),h()()()),e&2&&(g(7),ye(n.themeService.isDarkMode()?"dark_mode":"light_mode"),g(17),V("cdkDropListConnectedTo",fi(10,Nm))("cdkDropListData",n.taskService.taskByColumn().todo)("tasks",n.taskService.taskByColumn().todo),g(),V("cdkDropListConnectedTo",fi(11,Lm))("tasks",n.taskService.taskByColumn().inProgress)("cdkDropListData",n.taskService.taskByColumn().inProgress),g(),V("cdkDropListConnectedTo",fi(12,Vm))("tasks",n.taskService.taskByColumn().done)("cdkDropListData",n.taskService.taskByColumn().done))},dependencies:[Li,Eo,ml,hn,Qe,We,un,Ge,Oe,so,ao,je,_r],styles:[".kanban-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:20px;background:var(--header-bg);color:var(--header-text);transition:background .3s ease}.kanban-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:24px}.kanban-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px;opacity:.8}.kanban-header[_ngcontent-%COMP%]   .dark-mode-toggle[_ngcontent-%COMP%]{color:#fff}.kanban-board[_ngcontent-%COMP%]{padding:20px;max-width:1400px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.filter-bar[_ngcontent-%COMP%]{margin-bottom:20px;padding:10px;background:var(--filter-bg);border-radius:4px;transition:background .3s ease}.filter-bar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{margin-left:10px;padding:5px 10px;border-radius:4px}.kanban-columns[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}@media(max-width:1024px){.kanban-columns[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(max-width:768px){.kanban-columns[_ngcontent-%COMP%]{grid-template-columns:1fr}}"],changeDetection:0})};var f1=[{path:"",component:No}];export{f1 as kanbanRoutes};
