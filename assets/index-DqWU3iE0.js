(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function mv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var am={exports:{}},Ml={},lm={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To=Symbol.for("react.element"),gv=Symbol.for("react.portal"),vv=Symbol.for("react.fragment"),_v=Symbol.for("react.strict_mode"),xv=Symbol.for("react.profiler"),yv=Symbol.for("react.provider"),Sv=Symbol.for("react.context"),Mv=Symbol.for("react.forward_ref"),Ev=Symbol.for("react.suspense"),wv=Symbol.for("react.memo"),Tv=Symbol.for("react.lazy"),xf=Symbol.iterator;function Av(t){return t===null||typeof t!="object"?null:(t=xf&&t[xf]||t["@@iterator"],typeof t=="function"?t:null)}var cm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},um=Object.assign,dm={};function As(t,e,n){this.props=t,this.context=e,this.refs=dm,this.updater=n||cm}As.prototype.isReactComponent={};As.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};As.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fm(){}fm.prototype=As.prototype;function ad(t,e,n){this.props=t,this.context=e,this.refs=dm,this.updater=n||cm}var ld=ad.prototype=new fm;ld.constructor=ad;um(ld,As.prototype);ld.isPureReactComponent=!0;var yf=Array.isArray,hm=Object.prototype.hasOwnProperty,cd={current:null},pm={key:!0,ref:!0,__self:!0,__source:!0};function mm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hm.call(e,i)&&!pm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:To,type:t,key:s,ref:o,props:r,_owner:cd.current}}function Cv(t,e){return{$$typeof:To,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===To}function Rv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sf=/\/+/g;function Yl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Rv(""+t.key):e.toString(36)}function Ca(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case To:case gv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Yl(o,0):i,yf(r)?(n="",t!=null&&(n=t.replace(Sf,"$&/")+"/"),Ca(r,e,n,"",function(c){return c})):r!=null&&(ud(r)&&(r=Cv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Sf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",yf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Yl(s,a);o+=Ca(s,e,n,l,r)}else if(l=Av(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Yl(s,a++),o+=Ca(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ko(t,e,n){if(t==null)return t;var i=[],r=0;return Ca(t,i,"","",function(s){return e.call(n,s,r++)}),i}function bv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},Ra={transition:null},Pv={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Ra,ReactCurrentOwner:cd};function gm(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:ko,forEach:function(t,e,n){ko(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ko(t,function(){e++}),e},toArray:function(t){return ko(t,function(e){return e})||[]},only:function(t){if(!ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=As;je.Fragment=vv;je.Profiler=xv;je.PureComponent=ad;je.StrictMode=_v;je.Suspense=Ev;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pv;je.act=gm;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=um({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)hm.call(e,l)&&!pm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:To,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:Sv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yv,_context:t},t.Consumer=t};je.createElement=mm;je.createFactory=function(t){var e=mm.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:Mv,render:t}};je.isValidElement=ud;je.lazy=function(t){return{$$typeof:Tv,_payload:{_status:-1,_result:t},_init:bv}};je.memo=function(t,e){return{$$typeof:wv,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Ra.transition;Ra.transition={};try{t()}finally{Ra.transition=e}};je.unstable_act=gm;je.useCallback=function(t,e){return $t.current.useCallback(t,e)};je.useContext=function(t){return $t.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};je.useEffect=function(t,e){return $t.current.useEffect(t,e)};je.useId=function(){return $t.current.useId()};je.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return $t.current.useMemo(t,e)};je.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};je.useRef=function(t){return $t.current.useRef(t)};je.useState=function(t){return $t.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return $t.current.useTransition()};je.version="18.3.1";lm.exports=je;var nt=lm.exports;const Lv=mv(nt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv=nt,Dv=Symbol.for("react.element"),Nv=Symbol.for("react.fragment"),Uv=Object.prototype.hasOwnProperty,Fv=Iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ov={key:!0,ref:!0,__self:!0,__source:!0};function vm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Uv.call(e,i)&&!Ov.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Dv,type:t,key:s,ref:o,props:r,_owner:Fv.current}}Ml.Fragment=Nv;Ml.jsx=vm;Ml.jsxs=vm;am.exports=Ml;var T=am.exports,nu={},_m={exports:{}},pn={},xm={exports:{}},ym={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,Y){var Q=N.length;N.push(Y);e:for(;0<Q;){var se=Q-1>>>1,ye=N[se];if(0<r(ye,Y))N[se]=Y,N[Q]=ye,Q=se;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var Y=N[0],Q=N.pop();if(Q!==Y){N[0]=Q;e:for(var se=0,ye=N.length,He=ye>>>1;se<He;){var G=2*(se+1)-1,te=N[G],de=G+1,ae=N[de];if(0>r(te,Q))de<ye&&0>r(ae,te)?(N[se]=ae,N[de]=Q,se=de):(N[se]=te,N[G]=Q,se=G);else if(de<ye&&0>r(ae,Q))N[se]=ae,N[de]=Q,se=de;else break e}}return Y}function r(N,Y){var Q=N.sortIndex-Y.sortIndex;return Q!==0?Q:N.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=N)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function y(N){if(x=!1,v(N),!_)if(n(l)!==null)_=!0,j(b);else{var Y=n(c);Y!==null&&$(y,Y.startTime-N)}}function b(N,Y){_=!1,x&&(x=!1,u(P),P=-1),p=!0;var Q=f;try{for(v(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||N&&!L());){var se=h.callback;if(typeof se=="function"){h.callback=null,f=h.priorityLevel;var ye=se(h.expirationTime<=Y);Y=t.unstable_now(),typeof ye=="function"?h.callback=ye:h===n(l)&&i(l),v(Y)}else i(l);h=n(l)}if(h!==null)var He=!0;else{var G=n(c);G!==null&&$(y,G.startTime-Y),He=!1}return He}finally{h=null,f=Q,p=!1}}var C=!1,A=null,P=-1,w=5,S=-1;function L(){return!(t.unstable_now()-S<w)}function V(){if(A!==null){var N=t.unstable_now();S=N;var Y=!0;try{Y=A(!0,N)}finally{Y?B():(C=!1,A=null)}}else C=!1}var B;if(typeof g=="function")B=function(){g(V)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,W=q.port2;q.port1.onmessage=V,B=function(){W.postMessage(null)}}else B=function(){m(V,0)};function j(N){A=N,C||(C=!0,B())}function $(N,Y){P=m(function(){N(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,j(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var Q=f;f=Y;try{return N()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,Y){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=f;f=N;try{return Y()}finally{f=Q}},t.unstable_scheduleCallback=function(N,Y,Q){var se=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?se+Q:se):Q=se,N){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Q+ye,N={id:d++,callback:Y,priorityLevel:N,startTime:Q,expirationTime:ye,sortIndex:-1},Q>se?(N.sortIndex=Q,e(c,N),n(l)===null&&N===n(c)&&(x?(u(P),P=-1):x=!0,$(y,Q-se))):(N.sortIndex=ye,e(l,N),_||p||(_=!0,j(b))),N},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(N){var Y=f;return function(){var Q=f;f=Y;try{return N.apply(this,arguments)}finally{f=Q}}}})(ym);xm.exports=ym;var kv=xm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv=nt,hn=kv;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sm=new Set,ao={};function Er(t,e){fs(t,e),fs(t+"Capture",e)}function fs(t,e){for(ao[t]=e,t=0;t<e.length;t++)Sm.add(e[t])}var ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=Object.prototype.hasOwnProperty,Bv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mf={},Ef={};function Hv(t){return iu.call(Ef,t)?!0:iu.call(Mf,t)?!1:Bv.test(t)?Ef[t]=!0:(Mf[t]=!0,!1)}function Vv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Gv(t,e,n,i){if(e===null||typeof e>"u"||Vv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var dd=/[\-:]([a-z])/g;function fd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dd,fd);Nt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dd,fd);Nt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dd,fd);Nt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function hd(t,e,n,i){var r=Nt.hasOwnProperty(e)?Nt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Gv(e,n,r,i)&&(n=null),i||r===null?Hv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var hi=zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zo=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),pd=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),Mm=Symbol.for("react.provider"),Em=Symbol.for("react.context"),md=Symbol.for("react.forward_ref"),su=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),gd=Symbol.for("react.memo"),Mi=Symbol.for("react.lazy"),wm=Symbol.for("react.offscreen"),wf=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=wf&&t[wf]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,$l;function Xs(t){if($l===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$l=e&&e[1]||""}return`
`+$l+t}var Kl=!1;function Zl(t,e){if(!t||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xs(t):""}function Wv(t){switch(t.tag){case 5:return Xs(t.type);case 16:return Xs("Lazy");case 13:return Xs("Suspense");case 19:return Xs("SuspenseList");case 0:case 2:case 15:return t=Zl(t.type,!1),t;case 11:return t=Zl(t.type.render,!1),t;case 1:return t=Zl(t.type,!0),t;default:return""}}function au(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jr:return"Fragment";case Wr:return"Portal";case ru:return"Profiler";case pd:return"StrictMode";case su:return"Suspense";case ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Em:return(t.displayName||"Context")+".Consumer";case Mm:return(t._context.displayName||"Context")+".Provider";case md:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gd:return e=t.displayName||null,e!==null?e:au(t.type)||"Memo";case Mi:e=t._payload,t=t._init;try{return au(t(e))}catch{}}return null}function jv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return au(e);case 8:return e===pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Xv(t){var e=Tm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bo(t){t._valueTracker||(t._valueTracker=Xv(t))}function Am(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Tm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ha(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lu(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Hi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cm(t,e){e=e.checked,e!=null&&hd(t,"checked",e,!1)}function cu(t,e){Cm(t,e);var n=Hi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uu(t,e.type,n):e.hasOwnProperty("defaultValue")&&uu(t,e.type,Hi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Af(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uu(t,e,n){(e!=="number"||Ha(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qs=Array.isArray;function is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Hi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function du(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Cf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(qs(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hi(n)}}function Rm(t,e){var n=Hi(e.value),i=Hi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Rf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ho,Pm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ho.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qv=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(t){qv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zs[e]=Zs[t]})});function Lm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zs.hasOwnProperty(t)&&Zs[t]?(""+e).trim():e+"px"}function Im(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Lm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Yv=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hu(t,e){if(e){if(Yv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function pu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mu=null;function vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gu=null,rs=null,ss=null;function bf(t){if(t=Ro(t)){if(typeof gu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Cl(e),gu(t.stateNode,t.type,e))}}function Dm(t){rs?ss?ss.push(t):ss=[t]:rs=t}function Nm(){if(rs){var t=rs,e=ss;if(ss=rs=null,bf(t),e)for(t=0;t<e.length;t++)bf(e[t])}}function Um(t,e){return t(e)}function Fm(){}var Ql=!1;function Om(t,e,n){if(Ql)return t(e,n);Ql=!0;try{return Um(t,e,n)}finally{Ql=!1,(rs!==null||ss!==null)&&(Fm(),Nm())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var i=Cl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var vu=!1;if(ci)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){vu=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{vu=!1}function $v(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Qs=!1,Va=null,Ga=!1,_u=null,Kv={onError:function(t){Qs=!0,Va=t}};function Zv(t,e,n,i,r,s,o,a,l){Qs=!1,Va=null,$v.apply(Kv,arguments)}function Qv(t,e,n,i,r,s,o,a,l){if(Zv.apply(this,arguments),Qs){if(Qs){var c=Va;Qs=!1,Va=null}else throw Error(ne(198));Ga||(Ga=!0,_u=c)}}function wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function km(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pf(t){if(wr(t)!==t)throw Error(ne(188))}function Jv(t){var e=t.alternate;if(!e){if(e=wr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Pf(r),t;if(s===i)return Pf(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function zm(t){return t=Jv(t),t!==null?Bm(t):null}function Bm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Bm(t);if(e!==null)return e;t=t.sibling}return null}var Hm=hn.unstable_scheduleCallback,Lf=hn.unstable_cancelCallback,e_=hn.unstable_shouldYield,t_=hn.unstable_requestPaint,xt=hn.unstable_now,n_=hn.unstable_getCurrentPriorityLevel,_d=hn.unstable_ImmediatePriority,Vm=hn.unstable_UserBlockingPriority,Wa=hn.unstable_NormalPriority,i_=hn.unstable_LowPriority,Gm=hn.unstable_IdlePriority,El=null,Xn=null;function r_(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(El,t,void 0,(t.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:a_,s_=Math.log,o_=Math.LN2;function a_(t){return t>>>=0,t===0?32:31-(s_(t)/o_|0)|0}var Vo=64,Go=4194304;function Ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ja(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ys(a):(s&=o,s!==0&&(i=Ys(s)))}else o=n&~r,o!==0?i=Ys(o):s!==0&&(i=Ys(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Dn(e),r=1<<n,i|=t[n],e&=~r;return i}function l_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=l_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function xu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wm(){var t=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),t}function Jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dn(e),t[e]=n}function u_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Dn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Dn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function jm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Xm,yd,qm,Ym,$m,yu=!1,Wo=[],Li=null,Ii=null,Di=null,uo=new Map,fo=new Map,Ti=[],d_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function If(t,e){switch(t){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Di=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function Ds(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ro(e),e!==null&&yd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function f_(t,e,n,i,r){switch(e){case"focusin":return Li=Ds(Li,t,e,n,i,r),!0;case"dragenter":return Ii=Ds(Ii,t,e,n,i,r),!0;case"mouseover":return Di=Ds(Di,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return uo.set(s,Ds(uo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fo.set(s,Ds(fo.get(s)||null,t,e,n,i,r)),!0}return!1}function Km(t){var e=cr(t.target);if(e!==null){var n=wr(e);if(n!==null){if(e=n.tag,e===13){if(e=km(n),e!==null){t.blockedOn=e,$m(t.priority,function(){qm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ba(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Su(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);mu=i,n.target.dispatchEvent(i),mu=null}else return e=Ro(n),e!==null&&yd(e),t.blockedOn=n,!1;e.shift()}return!0}function Df(t,e,n){ba(t)&&n.delete(e)}function h_(){yu=!1,Li!==null&&ba(Li)&&(Li=null),Ii!==null&&ba(Ii)&&(Ii=null),Di!==null&&ba(Di)&&(Di=null),uo.forEach(Df),fo.forEach(Df)}function Ns(t,e){t.blockedOn===e&&(t.blockedOn=null,yu||(yu=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,h_)))}function ho(t){function e(r){return Ns(r,t)}if(0<Wo.length){Ns(Wo[0],t);for(var n=1;n<Wo.length;n++){var i=Wo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Li!==null&&Ns(Li,t),Ii!==null&&Ns(Ii,t),Di!==null&&Ns(Di,t),uo.forEach(e),fo.forEach(e),n=0;n<Ti.length;n++)i=Ti[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ti.length&&(n=Ti[0],n.blockedOn===null);)Km(n),n.blockedOn===null&&Ti.shift()}var os=hi.ReactCurrentBatchConfig,Xa=!0;function p_(t,e,n,i){var r=Qe,s=os.transition;os.transition=null;try{Qe=1,Sd(t,e,n,i)}finally{Qe=r,os.transition=s}}function m_(t,e,n,i){var r=Qe,s=os.transition;os.transition=null;try{Qe=4,Sd(t,e,n,i)}finally{Qe=r,os.transition=s}}function Sd(t,e,n,i){if(Xa){var r=Su(t,e,n,i);if(r===null)cc(t,e,i,qa,n),If(t,i);else if(f_(r,t,e,n,i))i.stopPropagation();else if(If(t,i),e&4&&-1<d_.indexOf(t)){for(;r!==null;){var s=Ro(r);if(s!==null&&Xm(s),s=Su(t,e,n,i),s===null&&cc(t,e,i,qa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else cc(t,e,i,null,n)}}var qa=null;function Su(t,e,n,i){if(qa=null,t=vd(i),t=cr(t),t!==null)if(e=wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=km(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qa=t,null}function Zm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n_()){case _d:return 1;case Vm:return 4;case Wa:case i_:return 16;case Gm:return 536870912;default:return 16}default:return 16}}var Ri=null,Md=null,Pa=null;function Qm(){if(Pa)return Pa;var t,e=Md,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pa=r.slice(t,1<i?1-i:void 0)}function La(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function jo(){return!0}function Nf(){return!1}function mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?jo:Nf,this.isPropagationStopped=Nf,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),e}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ed=mn(Cs),Co=ht({},Cs,{view:0,detail:0}),g_=mn(Co),ec,tc,Us,wl=ht({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Us&&(Us&&t.type==="mousemove"?(ec=t.screenX-Us.screenX,tc=t.screenY-Us.screenY):tc=ec=0,Us=t),ec)},movementY:function(t){return"movementY"in t?t.movementY:tc}}),Uf=mn(wl),v_=ht({},wl,{dataTransfer:0}),__=mn(v_),x_=ht({},Co,{relatedTarget:0}),nc=mn(x_),y_=ht({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),S_=mn(y_),M_=ht({},Cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),E_=mn(M_),w_=ht({},Cs,{data:0}),Ff=mn(w_),T_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=C_[t])?!!e[t]:!1}function wd(){return R_}var b_=ht({},Co,{key:function(t){if(t.key){var e=T_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=La(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?A_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wd,charCode:function(t){return t.type==="keypress"?La(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?La(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),P_=mn(b_),L_=ht({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=mn(L_),I_=ht({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wd}),D_=mn(I_),N_=ht({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),U_=mn(N_),F_=ht({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),O_=mn(F_),k_=[9,13,27,32],Td=ci&&"CompositionEvent"in window,Js=null;ci&&"documentMode"in document&&(Js=document.documentMode);var z_=ci&&"TextEvent"in window&&!Js,Jm=ci&&(!Td||Js&&8<Js&&11>=Js),kf=" ",zf=!1;function eg(t,e){switch(t){case"keyup":return k_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function B_(t,e){switch(t){case"compositionend":return tg(e);case"keypress":return e.which!==32?null:(zf=!0,kf);case"textInput":return t=e.data,t===kf&&zf?null:t;default:return null}}function H_(t,e){if(Xr)return t==="compositionend"||!Td&&eg(t,e)?(t=Qm(),Pa=Md=Ri=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jm&&e.locale!=="ko"?null:e.data;default:return null}}var V_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!V_[t.type]:e==="textarea"}function ng(t,e,n,i){Dm(i),e=Ya(e,"onChange"),0<e.length&&(n=new Ed("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var eo=null,po=null;function G_(t){hg(t,0)}function Tl(t){var e=$r(t);if(Am(e))return t}function W_(t,e){if(t==="change")return e}var ig=!1;if(ci){var ic;if(ci){var rc="oninput"in document;if(!rc){var Hf=document.createElement("div");Hf.setAttribute("oninput","return;"),rc=typeof Hf.oninput=="function"}ic=rc}else ic=!1;ig=ic&&(!document.documentMode||9<document.documentMode)}function Vf(){eo&&(eo.detachEvent("onpropertychange",rg),po=eo=null)}function rg(t){if(t.propertyName==="value"&&Tl(po)){var e=[];ng(e,po,t,vd(t)),Om(G_,e)}}function j_(t,e,n){t==="focusin"?(Vf(),eo=e,po=n,eo.attachEvent("onpropertychange",rg)):t==="focusout"&&Vf()}function X_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(po)}function q_(t,e){if(t==="click")return Tl(e)}function Y_(t,e){if(t==="input"||t==="change")return Tl(e)}function $_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:$_;function mo(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!iu.call(e,r)||!Fn(t[r],e[r]))return!1}return!0}function Gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wf(t,e){var n=Gf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gf(n)}}function sg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function og(){for(var t=window,e=Ha();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ha(t.document)}return e}function Ad(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function K_(t){var e=og(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&sg(n.ownerDocument.documentElement,n)){if(i!==null&&Ad(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Wf(n,s);var o=Wf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Z_=ci&&"documentMode"in document&&11>=document.documentMode,qr=null,Mu=null,to=null,Eu=!1;function jf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eu||qr==null||qr!==Ha(i)||(i=qr,"selectionStart"in i&&Ad(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),to&&mo(to,i)||(to=i,i=Ya(Mu,"onSelect"),0<i.length&&(e=new Ed("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=qr)))}function Xo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yr={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},sc={},ag={};ci&&(ag=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function Al(t){if(sc[t])return sc[t];if(!Yr[t])return t;var e=Yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ag)return sc[t]=e[n];return t}var lg=Al("animationend"),cg=Al("animationiteration"),ug=Al("animationstart"),dg=Al("transitionend"),fg=new Map,Xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(t,e){fg.set(t,e),Er(e,[t])}for(var oc=0;oc<Xf.length;oc++){var ac=Xf[oc],Q_=ac.toLowerCase(),J_=ac[0].toUpperCase()+ac.slice(1);Xi(Q_,"on"+J_)}Xi(lg,"onAnimationEnd");Xi(cg,"onAnimationIteration");Xi(ug,"onAnimationStart");Xi("dblclick","onDoubleClick");Xi("focusin","onFocus");Xi("focusout","onBlur");Xi(dg,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ex=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function qf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Qv(i,e,void 0,t),t.currentTarget=null}function hg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;qf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;qf(r,a,c),s=l}}}if(Ga)throw t=_u,Ga=!1,_u=null,t}function st(t,e){var n=e[Ru];n===void 0&&(n=e[Ru]=new Set);var i=t+"__bubble";n.has(i)||(pg(e,t,2,!1),n.add(i))}function lc(t,e,n){var i=0;e&&(i|=4),pg(n,t,i,e)}var qo="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[qo]){t[qo]=!0,Sm.forEach(function(n){n!=="selectionchange"&&(ex.has(n)||lc(n,!1,t),lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qo]||(e[qo]=!0,lc("selectionchange",!1,e))}}function pg(t,e,n,i){switch(Zm(e)){case 1:var r=p_;break;case 4:r=m_;break;default:r=Sd}n=r.bind(null,e,n,t),r=void 0,!vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function cc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=cr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Om(function(){var c=s,d=vd(n),h=[];e:{var f=fg.get(t);if(f!==void 0){var p=Ed,_=t;switch(t){case"keypress":if(La(n)===0)break e;case"keydown":case"keyup":p=P_;break;case"focusin":_="focus",p=nc;break;case"focusout":_="blur",p=nc;break;case"beforeblur":case"afterblur":p=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=__;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=D_;break;case lg:case cg:case ug:p=S_;break;case dg:p=U_;break;case"scroll":p=g_;break;case"wheel":p=O_;break;case"copy":case"cut":case"paste":p=E_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Of}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?f!==null?f+"Capture":null:f;x=[];for(var g=c,v;g!==null;){v=g;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,u!==null&&(y=co(g,u),y!=null&&x.push(vo(g,y,v)))),m)break;g=g.return}0<x.length&&(f=new p(f,_,null,n,d),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==mu&&(_=n.relatedTarget||n.fromElement)&&(cr(_)||_[ui]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?cr(_):null,_!==null&&(m=wr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=Uf,y="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Of,y="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:$r(p),v=_==null?f:$r(_),f=new x(y,g+"leave",p,n,d),f.target=m,f.relatedTarget=v,y=null,cr(d)===c&&(x=new x(u,g+"enter",_,n,d),x.target=v,x.relatedTarget=m,y=x),m=y,p&&_)t:{for(x=p,u=_,g=0,v=x;v;v=Ar(v))g++;for(v=0,y=u;y;y=Ar(y))v++;for(;0<g-v;)x=Ar(x),g--;for(;0<v-g;)u=Ar(u),v--;for(;g--;){if(x===u||u!==null&&x===u.alternate)break t;x=Ar(x),u=Ar(u)}x=null}else x=null;p!==null&&Yf(h,f,p,x,!1),_!==null&&m!==null&&Yf(h,m,_,x,!0)}}e:{if(f=c?$r(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=W_;else if(Bf(f))if(ig)b=Y_;else{b=X_;var C=j_}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=q_);if(b&&(b=b(t,c))){ng(h,b,n,d);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&uu(f,"number",f.value)}switch(C=c?$r(c):window,t){case"focusin":(Bf(C)||C.contentEditable==="true")&&(qr=C,Mu=c,to=null);break;case"focusout":to=Mu=qr=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,jf(h,n,d);break;case"selectionchange":if(Z_)break;case"keydown":case"keyup":jf(h,n,d)}var A;if(Td)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Xr?eg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Jm&&n.locale!=="ko"&&(Xr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Xr&&(A=Qm()):(Ri=d,Md="value"in Ri?Ri.value:Ri.textContent,Xr=!0)),C=Ya(c,P),0<C.length&&(P=new Ff(P,t,null,n,d),h.push({event:P,listeners:C}),A?P.data=A:(A=tg(n),A!==null&&(P.data=A)))),(A=z_?B_(t,n):H_(t,n))&&(c=Ya(c,"onBeforeInput"),0<c.length&&(d=new Ff("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=A))}hg(h,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ya(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=co(t,n),s!=null&&i.unshift(vo(t,s,r)),s=co(t,e),s!=null&&i.push(vo(t,s,r))),t=t.return}return i}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=co(n,s),l!=null&&o.unshift(vo(n,l,a))):r||(l=co(n,s),l!=null&&o.push(vo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tx=/\r\n?/g,nx=/\u0000|\uFFFD/g;function $f(t){return(typeof t=="string"?t:""+t).replace(tx,`
`).replace(nx,"")}function Yo(t,e,n){if(e=$f(e),$f(t)!==e&&n)throw Error(ne(425))}function $a(){}var wu=null,Tu=null;function Au(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,ix=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(t){return Kf.resolve(null).then(t).catch(sx)}:Cu;function sx(t){setTimeout(function(){throw t})}function uc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ho(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ho(e)}function Ni(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Rs,_o="__reactProps$"+Rs,ui="__reactContainer$"+Rs,Ru="__reactEvents$"+Rs,ox="__reactListeners$"+Rs,ax="__reactHandles$"+Rs;function cr(t){var e=t[Gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ui]||n[Gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zf(t);t!==null;){if(n=t[Gn])return n;t=Zf(t)}return e}t=n,n=t.parentNode}return null}function Ro(t){return t=t[Gn]||t[ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Cl(t){return t[_o]||null}var bu=[],Kr=-1;function qi(t){return{current:t}}function at(t){0>Kr||(t.current=bu[Kr],bu[Kr]=null,Kr--)}function rt(t,e){Kr++,bu[Kr]=t.current,t.current=e}var Vi={},Ht=qi(Vi),tn=qi(!1),vr=Vi;function hs(t,e){var n=t.type.contextTypes;if(!n)return Vi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function Ka(){at(tn),at(Ht)}function Qf(t,e,n){if(Ht.current!==Vi)throw Error(ne(168));rt(Ht,e),rt(tn,n)}function mg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,jv(t)||"Unknown",r));return ht({},n,i)}function Za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,vr=Ht.current,rt(Ht,t),rt(tn,tn.current),!0}function Jf(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=mg(t,e,vr),i.__reactInternalMemoizedMergedChildContext=t,at(tn),at(Ht),rt(Ht,t)):at(tn),rt(tn,n)}var ii=null,Rl=!1,dc=!1;function gg(t){ii===null?ii=[t]:ii.push(t)}function lx(t){Rl=!0,gg(t)}function Yi(){if(!dc&&ii!==null){dc=!0;var t=0,e=Qe;try{var n=ii;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ii=null,Rl=!1}catch(r){throw ii!==null&&(ii=ii.slice(t+1)),Hm(_d,Yi),r}finally{Qe=e,dc=!1}}return null}var Zr=[],Qr=0,Qa=null,Ja=0,_n=[],xn=0,_r=null,si=1,oi="";function rr(t,e){Zr[Qr++]=Ja,Zr[Qr++]=Qa,Qa=t,Ja=e}function vg(t,e,n){_n[xn++]=si,_n[xn++]=oi,_n[xn++]=_r,_r=t;var i=si;t=oi;var r=32-Dn(i)-1;i&=~(1<<r),n+=1;var s=32-Dn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,si=1<<32-Dn(e)+r|n<<r|i,oi=s+t}else si=1<<s|n<<r|i,oi=t}function Cd(t){t.return!==null&&(rr(t,1),vg(t,1,0))}function Rd(t){for(;t===Qa;)Qa=Zr[--Qr],Zr[Qr]=null,Ja=Zr[--Qr],Zr[Qr]=null;for(;t===_r;)_r=_n[--xn],_n[xn]=null,oi=_n[--xn],_n[xn]=null,si=_n[--xn],_n[xn]=null}var fn=null,dn=null,ct=!1,Ln=null;function _g(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function eh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,dn=Ni(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_r!==null?{id:si,overflow:oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,dn=null,!0):!1;default:return!1}}function Pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lu(t){if(ct){var e=dn;if(e){var n=e;if(!eh(t,e)){if(Pu(t))throw Error(ne(418));e=Ni(n.nextSibling);var i=fn;e&&eh(t,e)?_g(i,n):(t.flags=t.flags&-4097|2,ct=!1,fn=t)}}else{if(Pu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ct=!1,fn=t}}}function th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function $o(t){if(t!==fn)return!1;if(!ct)return th(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Au(t.type,t.memoizedProps)),e&&(e=dn)){if(Pu(t))throw xg(),Error(ne(418));for(;e;)_g(t,e),e=Ni(e.nextSibling)}if(th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=Ni(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=fn?Ni(t.stateNode.nextSibling):null;return!0}function xg(){for(var t=dn;t;)t=Ni(t.nextSibling)}function ps(){dn=fn=null,ct=!1}function bd(t){Ln===null?Ln=[t]:Ln.push(t)}var cx=hi.ReactCurrentBatchConfig;function Fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Ko(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function nh(t){var e=t._init;return e(t._payload)}function yg(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=ki(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,v,y){return g===null||g.tag!==6?(g=_c(v,u.mode,y),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,y){var b=v.type;return b===jr?d(u,g,v.props.children,y,v.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Mi&&nh(b)===g.type)?(y=r(g,v.props),y.ref=Fs(u,g,v),y.return=u,y):(y=ka(v.type,v.key,v.props,null,u.mode,y),y.ref=Fs(u,g,v),y.return=u,y)}function c(u,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=xc(v,u.mode,y),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function d(u,g,v,y,b){return g===null||g.tag!==7?(g=gr(v,u.mode,y,b),g.return=u,g):(g=r(g,v),g.return=u,g)}function h(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=_c(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case zo:return v=ka(g.type,g.key,g.props,null,u.mode,v),v.ref=Fs(u,null,g),v.return=u,v;case Wr:return g=xc(g,u.mode,v),g.return=u,g;case Mi:var y=g._init;return h(u,y(g._payload),v)}if(qs(g)||Ls(g))return g=gr(g,u.mode,v,null),g.return=u,g;Ko(u,g)}return null}function f(u,g,v,y){var b=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(u,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zo:return v.key===b?l(u,g,v,y):null;case Wr:return v.key===b?c(u,g,v,y):null;case Mi:return b=v._init,f(u,g,b(v._payload),y)}if(qs(v)||Ls(v))return b!==null?null:d(u,g,v,y,null);Ko(u,v)}return null}function p(u,g,v,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(v)||null,a(g,u,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case zo:return u=u.get(y.key===null?v:y.key)||null,l(g,u,y,b);case Wr:return u=u.get(y.key===null?v:y.key)||null,c(g,u,y,b);case Mi:var C=y._init;return p(u,g,v,C(y._payload),b)}if(qs(y)||Ls(y))return u=u.get(v)||null,d(g,u,y,b,null);Ko(g,y)}return null}function _(u,g,v,y){for(var b=null,C=null,A=g,P=g=0,w=null;A!==null&&P<v.length;P++){A.index>P?(w=A,A=null):w=A.sibling;var S=f(u,A,v[P],y);if(S===null){A===null&&(A=w);break}t&&A&&S.alternate===null&&e(u,A),g=s(S,g,P),C===null?b=S:C.sibling=S,C=S,A=w}if(P===v.length)return n(u,A),ct&&rr(u,P),b;if(A===null){for(;P<v.length;P++)A=h(u,v[P],y),A!==null&&(g=s(A,g,P),C===null?b=A:C.sibling=A,C=A);return ct&&rr(u,P),b}for(A=i(u,A);P<v.length;P++)w=p(A,u,P,v[P],y),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?P:w.key),g=s(w,g,P),C===null?b=w:C.sibling=w,C=w);return t&&A.forEach(function(L){return e(u,L)}),ct&&rr(u,P),b}function x(u,g,v,y){var b=Ls(v);if(typeof b!="function")throw Error(ne(150));if(v=b.call(v),v==null)throw Error(ne(151));for(var C=b=null,A=g,P=g=0,w=null,S=v.next();A!==null&&!S.done;P++,S=v.next()){A.index>P?(w=A,A=null):w=A.sibling;var L=f(u,A,S.value,y);if(L===null){A===null&&(A=w);break}t&&A&&L.alternate===null&&e(u,A),g=s(L,g,P),C===null?b=L:C.sibling=L,C=L,A=w}if(S.done)return n(u,A),ct&&rr(u,P),b;if(A===null){for(;!S.done;P++,S=v.next())S=h(u,S.value,y),S!==null&&(g=s(S,g,P),C===null?b=S:C.sibling=S,C=S);return ct&&rr(u,P),b}for(A=i(u,A);!S.done;P++,S=v.next())S=p(A,u,P,S.value,y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?P:S.key),g=s(S,g,P),C===null?b=S:C.sibling=S,C=S);return t&&A.forEach(function(V){return e(u,V)}),ct&&rr(u,P),b}function m(u,g,v,y){if(typeof v=="object"&&v!==null&&v.type===jr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case zo:e:{for(var b=v.key,C=g;C!==null;){if(C.key===b){if(b=v.type,b===jr){if(C.tag===7){n(u,C.sibling),g=r(C,v.props.children),g.return=u,u=g;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Mi&&nh(b)===C.type){n(u,C.sibling),g=r(C,v.props),g.ref=Fs(u,C,v),g.return=u,u=g;break e}n(u,C);break}else e(u,C);C=C.sibling}v.type===jr?(g=gr(v.props.children,u.mode,y,v.key),g.return=u,u=g):(y=ka(v.type,v.key,v.props,null,u.mode,y),y.ref=Fs(u,g,v),y.return=u,u=y)}return o(u);case Wr:e:{for(C=v.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=xc(v,u.mode,y),g.return=u,u=g}return o(u);case Mi:return C=v._init,m(u,g,C(v._payload),y)}if(qs(v))return _(u,g,v,y);if(Ls(v))return x(u,g,v,y);Ko(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=_c(v,u.mode,y),g.return=u,u=g),o(u)):n(u,g)}return m}var ms=yg(!0),Sg=yg(!1),el=qi(null),tl=null,Jr=null,Pd=null;function Ld(){Pd=Jr=tl=null}function Id(t){var e=el.current;at(el),t._currentValue=e}function Iu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function as(t,e){tl=t,Pd=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(Pd!==t)if(t={context:t,memoizedValue:e,next:null},Jr===null){if(tl===null)throw Error(ne(308));Jr=t,tl.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return e}var ur=null;function Dd(t){ur===null?ur=[t]:ur.push(t)}function Mg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Dd(e)):(n.next=r.next,r.next=n),e.interleaved=n,di(t,i)}function di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ei=!1;function Nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,di(t,n)}return r=i.interleaved,r===null?(e.next=e,Dd(i)):(e.next=r.next,r.next=e),i.interleaved=e,di(t,n)}function Ia(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xd(t,n)}}function ih(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nl(t,e,n,i){var r=t.updateQueue;Ei=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(f=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){h=_.call(p,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,f=typeof _=="function"?_.call(p,h,f):_,f==null)break e;h=ht({},h,f);break e;case 2:Ei=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);yr|=o,t.lanes=o,t.memoizedState=h}}function rh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var bo={},qn=qi(bo),xo=qi(bo),yo=qi(bo);function dr(t){if(t===bo)throw Error(ne(174));return t}function Ud(t,e){switch(rt(yo,e),rt(xo,t),rt(qn,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fu(e,t)}at(qn),rt(qn,e)}function gs(){at(qn),at(xo),at(yo)}function wg(t){dr(yo.current);var e=dr(qn.current),n=fu(e,t.type);e!==n&&(rt(xo,t),rt(qn,n))}function Fd(t){xo.current===t&&(at(qn),at(xo))}var dt=qi(0);function il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fc=[];function Od(){for(var t=0;t<fc.length;t++)fc[t]._workInProgressVersionPrimary=null;fc.length=0}var Da=hi.ReactCurrentDispatcher,hc=hi.ReactCurrentBatchConfig,xr=0,ft=null,Mt=null,bt=null,rl=!1,no=!1,So=0,ux=0;function Ut(){throw Error(ne(321))}function kd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function zd(t,e,n,i,r,s){if(xr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Da.current=t===null||t.memoizedState===null?px:mx,t=n(i,r),no){s=0;do{if(no=!1,So=0,25<=s)throw Error(ne(301));s+=1,bt=Mt=null,e.updateQueue=null,Da.current=gx,t=n(i,r)}while(no)}if(Da.current=sl,e=Mt!==null&&Mt.next!==null,xr=0,bt=Mt=ft=null,rl=!1,e)throw Error(ne(300));return t}function Bd(){var t=So!==0;return So=0,t}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ft.memoizedState=bt=t:bt=bt.next=t,bt}function wn(){if(Mt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=bt===null?ft.memoizedState:bt.next;if(e!==null)bt=e,Mt=t;else{if(t===null)throw Error(ne(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},bt===null?ft.memoizedState=bt=t:bt=bt.next=t}return bt}function Mo(t,e){return typeof e=="function"?e(t):e}function pc(t){var e=wn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((xr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ft.lanes|=d,yr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Fn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mc(t){var e=wn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Fn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Tg(){}function Ag(t,e){var n=ft,i=wn(),r=e(),s=!Fn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,Hd(bg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Eo(9,Rg.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(ne(349));xr&30||Cg(n,e,r)}return r}function Cg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Rg(t,e,n,i){e.value=n,e.getSnapshot=i,Pg(e)&&Lg(t)}function bg(t,e,n){return n(function(){Pg(e)&&Lg(t)})}function Pg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function Lg(t){var e=di(t,1);e!==null&&Nn(e,t,1,-1)}function sh(t){var e=Bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},e.queue=t,t=t.dispatch=hx.bind(null,ft,t),[e.memoizedState,t]}function Eo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ig(){return wn().memoizedState}function Na(t,e,n,i){var r=Bn();ft.flags|=t,r.memoizedState=Eo(1|e,n,void 0,i===void 0?null:i)}function bl(t,e,n,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var o=Mt.memoizedState;if(s=o.destroy,i!==null&&kd(i,o.deps)){r.memoizedState=Eo(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Eo(1|e,n,s,i)}function oh(t,e){return Na(8390656,8,t,e)}function Hd(t,e){return bl(2048,8,t,e)}function Dg(t,e){return bl(4,2,t,e)}function Ng(t,e){return bl(4,4,t,e)}function Ug(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Fg(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,Ug.bind(null,e,t),n)}function Vd(){}function Og(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function kg(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function zg(t,e,n){return xr&21?(Fn(n,e)||(n=Wm(),ft.lanes|=n,yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function dx(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=hc.transition;hc.transition={};try{t(!1),e()}finally{Qe=n,hc.transition=i}}function Bg(){return wn().memoizedState}function fx(t,e,n){var i=Oi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Hg(t))Vg(e,n);else if(n=Mg(t,e,n,i),n!==null){var r=qt();Nn(n,t,i,r),Gg(n,e,i)}}function hx(t,e,n){var i=Oi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hg(t))Vg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Fn(a,o)){var l=e.interleaved;l===null?(r.next=r,Dd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Mg(t,e,r,i),n!==null&&(r=qt(),Nn(n,t,i,r),Gg(n,e,i))}}function Hg(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function Vg(t,e){no=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xd(t,n)}}var sl={readContext:En,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},px={readContext:En,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:oh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Na(4194308,4,Ug.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Na(4194308,4,t,e)},useInsertionEffect:function(t,e){return Na(4,2,t,e)},useMemo:function(t,e){var n=Bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Bn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=fx.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:sh,useDebugValue:Vd,useDeferredValue:function(t){return Bn().memoizedState=t},useTransition:function(){var t=sh(!1),e=t[0];return t=dx.bind(null,t[1]),Bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Bn();if(ct){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Pt===null)throw Error(ne(349));xr&30||Cg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,oh(bg.bind(null,i,s,t),[t]),i.flags|=2048,Eo(9,Rg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Bn(),e=Pt.identifierPrefix;if(ct){var n=oi,i=si;n=(i&~(1<<32-Dn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ux++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mx={readContext:En,useCallback:Og,useContext:En,useEffect:Hd,useImperativeHandle:Fg,useInsertionEffect:Dg,useLayoutEffect:Ng,useMemo:kg,useReducer:pc,useRef:Ig,useState:function(){return pc(Mo)},useDebugValue:Vd,useDeferredValue:function(t){var e=wn();return zg(e,Mt.memoizedState,t)},useTransition:function(){var t=pc(Mo)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Tg,useSyncExternalStore:Ag,useId:Bg,unstable_isNewReconciler:!1},gx={readContext:En,useCallback:Og,useContext:En,useEffect:Hd,useImperativeHandle:Fg,useInsertionEffect:Dg,useLayoutEffect:Ng,useMemo:kg,useReducer:mc,useRef:Ig,useState:function(){return mc(Mo)},useDebugValue:Vd,useDeferredValue:function(t){var e=wn();return Mt===null?e.memoizedState=t:zg(e,Mt.memoizedState,t)},useTransition:function(){var t=mc(Mo)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Tg,useSyncExternalStore:Ag,useId:Bg,unstable_isNewReconciler:!1};function bn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Du(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pl={isMounted:function(t){return(t=t._reactInternals)?wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Oi(t),s=li(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Nn(e,t,r,i),Ia(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Oi(t),s=li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Nn(e,t,r,i),Ia(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Oi(t),r=li(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ui(t,r,i),e!==null&&(Nn(e,t,i,n),Ia(e,t,i))}};function ah(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!mo(n,i)||!mo(r,s):!0}function Wg(t,e,n){var i=!1,r=Vi,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=nn(e)?vr:Ht.current,i=e.contextTypes,s=(i=i!=null)?hs(t,r):Vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function lh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Pl.enqueueReplaceState(e,e.state,null)}function Nu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Nd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=nn(e)?vr:Ht.current,r.context=hs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Du(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pl.enqueueReplaceState(r,r.state,null),nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,e){try{var n="",i=e;do n+=Wv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vx=typeof WeakMap=="function"?WeakMap:Map;function jg(t,e,n){n=li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){al||(al=!0,ju=i),Uu(t,e)},n}function Xg(t,e,n){n=li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Uu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uu(t,e),typeof i!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ch(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new vx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Lx.bind(null,t,e,n),e.then(t,t))}function uh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=li(-1,1),e.tag=2,Ui(n,e,1))),n.lanes|=1),t)}var _x=hi.ReactCurrentOwner,en=!1;function Wt(t,e,n,i){e.child=t===null?Sg(e,null,n,i):ms(e,t.child,n,i)}function fh(t,e,n,i,r){n=n.render;var s=e.ref;return as(e,r),i=zd(t,e,n,i,s,r),n=Bd(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fi(t,e,r)):(ct&&n&&Cd(e),e.flags|=1,Wt(t,e,i,r),e.child)}function hh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Kd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,qg(t,e,s,i,r)):(t=ka(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(o,i)&&t.ref===e.ref)return fi(t,e,r)}return e.flags|=1,t=ki(s,i),t.ref=e.ref,t.return=e,e.child=t}function qg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(mo(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,fi(t,e,r)}return Fu(t,e,n,i,r)}function Yg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(ts,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(ts,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(ts,un),un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(ts,un),un|=i;return Wt(t,e,r,n),e.child}function $g(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fu(t,e,n,i,r){var s=nn(n)?vr:Ht.current;return s=hs(e,s),as(e,r),n=zd(t,e,n,i,s,r),i=Bd(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fi(t,e,r)):(ct&&i&&Cd(e),e.flags|=1,Wt(t,e,n,r),e.child)}function ph(t,e,n,i,r){if(nn(n)){var s=!0;Za(e)}else s=!1;if(as(e,r),e.stateNode===null)Ua(t,e),Wg(e,n,i),Nu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=En(c):(c=nn(n)?vr:Ht.current,c=hs(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&lh(e,o,i,c),Ei=!1;var f=e.memoizedState;o.state=f,nl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||tn.current||Ei?(typeof d=="function"&&(Du(e,n,d,i),l=e.memoizedState),(a=Ei||ah(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Eg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:bn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=nn(n)?vr:Ht.current,l=hs(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&lh(e,o,i,l),Ei=!1,f=e.memoizedState,o.state=f,nl(e,i,o,r);var _=e.memoizedState;a!==h||f!==_||tn.current||Ei?(typeof p=="function"&&(Du(e,n,p,i),_=e.memoizedState),(c=Ei||ah(e,n,c,i,f,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Ou(t,e,n,i,s,r)}function Ou(t,e,n,i,r,s){$g(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Jf(e,n,!1),fi(t,e,s);i=e.stateNode,_x.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ms(e,t.child,null,s),e.child=ms(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=i.state,r&&Jf(e,n,!0),e.child}function Kg(t){var e=t.stateNode;e.pendingContext?Qf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qf(t,e.context,!1),Ud(t,e.containerInfo)}function mh(t,e,n,i,r){return ps(),bd(r),e.flags|=256,Wt(t,e,n,i),e.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zg(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(dt,r&1),t===null)return Lu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dl(o,i,0,null),t=gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zu(n),e.memoizedState=ku,t):Gd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return xx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ki(a,s):(s=gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?zu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ku,i}return s=t.child,t=s.sibling,i=ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Gd(t,e){return e=Dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zo(t,e,n,i){return i!==null&&bd(i),ms(e,t.child,null,n),t=Gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=gc(Error(ne(422))),Zo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Dl({mode:"visible",children:i.children},r,0,null),s=gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ms(e,t.child,null,o),e.child.memoizedState=zu(o),e.memoizedState=ku,s);if(!(e.mode&1))return Zo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=gc(s,i,void 0),Zo(t,e,o,i)}if(a=(o&t.childLanes)!==0,en||a){if(i=Pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,di(t,r),Nn(i,t,r,-1))}return $d(),i=gc(Error(ne(421))),Zo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ix.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,dn=Ni(r.nextSibling),fn=e,ct=!0,Ln=null,t!==null&&(_n[xn++]=si,_n[xn++]=oi,_n[xn++]=_r,si=t.id,oi=t.overflow,_r=e),e=Gd(e,i.children),e.flags|=4096,e)}function gh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Iu(t.return,e,n)}function vc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Qg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gh(t,n,e);else if(t.tag===19)gh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&il(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),vc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&il(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}vc(e,!0,n,null,s);break;case"together":vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ua(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yx(t,e,n){switch(e.tag){case 3:Kg(e),ps();break;case 5:wg(e);break;case 1:nn(e.type)&&Za(e);break;case 4:Ud(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(el,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?Zg(t,e,n):(rt(dt,dt.current&1),t=fi(t,e,n),t!==null?t.sibling:null);rt(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Qg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Yg(t,e,n)}return fi(t,e,n)}var Jg,Bu,e0,t0;Jg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bu=function(){};e0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,dr(qn.current);var s=null;switch(n){case"input":r=lu(t,r),i=lu(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=du(t,r),i=du(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=$a)}hu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ao.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ao.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};t0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Os(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Sx(t,e,n){var i=e.pendingProps;switch(Rd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return nn(e.type)&&Ka(),Ft(e),null;case 3:return i=e.stateNode,gs(),at(tn),at(Ht),Od(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&($o(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(Yu(Ln),Ln=null))),Bu(t,e),Ft(e),null;case 5:Fd(e);var r=dr(yo.current);if(n=e.type,t!==null&&e.stateNode!=null)e0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Ft(e),null}if(t=dr(qn.current),$o(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Gn]=e,i[_o]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<$s.length;r++)st($s[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Tf(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":Cf(i,s),st("invalid",i)}hu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,a,t),r=["children",""+a]):ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(n){case"input":Bo(i),Af(i,s,!0);break;case"textarea":Bo(i),Rf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=$a)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Gn]=e,t[_o]=i,Jg(t,e,!1,!1),e.stateNode=t;e:{switch(o=pu(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<$s.length;r++)st($s[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":Tf(t,i),r=lu(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),st("invalid",t);break;case"textarea":Cf(t,i),r=du(t,i),st("invalid",t);break;default:r=i}hu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Im(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Pm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&lo(t,l):typeof l=="number"&&lo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&hd(t,s,l,o))}switch(n){case"input":Bo(t),Af(t,i,!1);break;case"textarea":Bo(t),Rf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Hi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?is(t,!!i.multiple,s,!1):i.defaultValue!=null&&is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=$a)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)t0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=dr(yo.current),dr(qn.current),$o(e)){if(i=e.stateNode,n=e.memoizedProps,i[Gn]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:Yo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Gn]=e,e.stateNode=i}return Ft(e),null;case 13:if(at(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&dn!==null&&e.mode&1&&!(e.flags&128))xg(),ps(),e.flags|=98560,s=!1;else if(s=$o(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Gn]=e}else ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Ln!==null&&(Yu(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Et===0&&(Et=3):$d())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return gs(),Bu(t,e),t===null&&go(e.stateNode.containerInfo),Ft(e),null;case 10:return Id(e.type._context),Ft(e),null;case 17:return nn(e.type)&&Ka(),Ft(e),null;case 19:if(at(dt),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Os(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=il(t),o!==null){for(e.flags|=128,Os(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>_s&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304)}else{if(!i)if(t=il(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return Ft(e),null}else 2*xt()-s.renderingStartTime>_s&&n!==1073741824&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=dt.current,rt(dt,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Yd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function Mx(t,e){switch(Rd(e),e.tag){case 1:return nn(e.type)&&Ka(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gs(),at(tn),at(Ht),Od(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fd(e),null;case 13:if(at(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(dt),null;case 4:return gs(),null;case 10:return Id(e.type._context),null;case 22:case 23:return Yd(),null;case 24:return null;default:return null}}var Qo=!1,zt=!1,Ex=typeof WeakSet=="function"?WeakSet:Set,ge=null;function es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function Hu(t,e,n){try{n()}catch(i){gt(t,e,i)}}var vh=!1;function wx(t,e){if(wu=Xa,t=og(),Ad(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tu={focusedElem:t,selectionRange:n},Xa=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:bn(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){gt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=vh,vh=!1,_}function io(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hu(e,n,s)}r=r.next}while(r!==i)}}function Ll(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function n0(t){var e=t.alternate;e!==null&&(t.alternate=null,n0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gn],delete e[_o],delete e[Ru],delete e[ox],delete e[ax])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function i0(t){return t.tag===5||t.tag===3||t.tag===4}function _h(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||i0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$a));else if(i!==4&&(t=t.child,t!==null))for(Gu(t,e,n),t=t.sibling;t!==null;)Gu(t,e,n),t=t.sibling}function Wu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wu(t,e,n),t=t.sibling;t!==null;)Wu(t,e,n),t=t.sibling}var Lt=null,Pn=!1;function mi(t,e,n){for(n=n.child;n!==null;)r0(t,e,n),n=n.sibling}function r0(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 5:zt||es(n,e);case 6:var i=Lt,r=Pn;Lt=null,mi(t,e,n),Lt=i,Pn=r,Lt!==null&&(Pn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Pn?(t=Lt,n=n.stateNode,t.nodeType===8?uc(t.parentNode,n):t.nodeType===1&&uc(t,n),ho(t)):uc(Lt,n.stateNode));break;case 4:i=Lt,r=Pn,Lt=n.stateNode.containerInfo,Pn=!0,mi(t,e,n),Lt=i,Pn=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hu(n,e,o),r=r.next}while(r!==i)}mi(t,e,n);break;case 1:if(!zt&&(es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}mi(t,e,n);break;case 21:mi(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,mi(t,e,n),zt=i):mi(t,e,n);break;default:mi(t,e,n)}}function xh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ex),e.forEach(function(i){var r=Dx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,Pn=!1;break e;case 3:Lt=a.stateNode.containerInfo,Pn=!0;break e;case 4:Lt=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(Lt===null)throw Error(ne(160));r0(s,o,r),Lt=null,Pn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)s0(e,t),e=e.sibling}function s0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),zn(t),i&4){try{io(3,t,t.return),Ll(3,t)}catch(x){gt(t,t.return,x)}try{io(5,t,t.return)}catch(x){gt(t,t.return,x)}}break;case 1:Tn(e,t),zn(t),i&512&&n!==null&&es(n,n.return);break;case 5:if(Tn(e,t),zn(t),i&512&&n!==null&&es(n,n.return),t.flags&32){var r=t.stateNode;try{lo(r,"")}catch(x){gt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cm(r,s),pu(a,o);var c=pu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Im(r,h):d==="dangerouslySetInnerHTML"?Pm(r,h):d==="children"?lo(r,h):hd(r,d,h,c)}switch(a){case"input":cu(r,s);break;case"textarea":Rm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?is(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?is(r,!!s.multiple,s.defaultValue,!0):is(r,!!s.multiple,s.multiple?[]:"",!1))}r[_o]=s}catch(x){gt(t,t.return,x)}}break;case 6:if(Tn(e,t),zn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){gt(t,t.return,x)}}break;case 3:if(Tn(e,t),zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(x){gt(t,t.return,x)}break;case 4:Tn(e,t),zn(t);break;case 13:Tn(e,t),zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xd=xt())),i&4&&xh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(c=zt)||d,Tn(e,t),zt=c):Tn(e,t),zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ge=t,d=t.child;d!==null;){for(h=ge=d;ge!==null;){switch(f=ge,p=f.child,f.tag){case 0:case 11:case 14:case 15:io(4,f,f.return);break;case 1:es(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){gt(i,n,x)}}break;case 5:es(f,f.return);break;case 22:if(f.memoizedState!==null){Sh(h);continue}}p!==null?(p.return=f,ge=p):Sh(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Lm("display",o))}catch(x){gt(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){gt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Tn(e,t),zn(t),i&4&&xh(t);break;case 21:break;default:Tn(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(i0(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(lo(r,""),i.flags&=-33);var s=_h(t);Wu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=_h(t);Gu(t,a,o);break;default:throw Error(ne(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Tx(t,e,n){ge=t,o0(t)}function o0(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Qo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zt;a=Qo;var c=zt;if(Qo=o,(zt=l)&&!c)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?Mh(r):l!==null?(l.return=o,ge=l):Mh(r);for(;s!==null;)ge=s,o0(s),s=s.sibling;ge=r,Qo=a,zt=c}yh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):yh(t)}}function yh(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Ll(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ho(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}zt||e.flags&512&&Vu(e)}catch(f){gt(e,e.return,f)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Sh(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Mh(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ll(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{Vu(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{Vu(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var Ax=Math.ceil,ol=hi.ReactCurrentDispatcher,Wd=hi.ReactCurrentOwner,Mn=hi.ReactCurrentBatchConfig,Xe=0,Pt=null,St=null,It=0,un=0,ts=qi(0),Et=0,wo=null,yr=0,Il=0,jd=0,ro=null,Qt=null,Xd=0,_s=1/0,ni=null,al=!1,ju=null,Fi=null,Jo=!1,bi=null,ll=0,so=0,Xu=null,Fa=-1,Oa=0;function qt(){return Xe&6?xt():Fa!==-1?Fa:Fa=xt()}function Oi(t){return t.mode&1?Xe&2&&It!==0?It&-It:cx.transition!==null?(Oa===0&&(Oa=Wm()),Oa):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:Zm(t.type)),t):1}function Nn(t,e,n,i){if(50<so)throw so=0,Xu=null,Error(ne(185));Ao(t,n,i),(!(Xe&2)||t!==Pt)&&(t===Pt&&(!(Xe&2)&&(Il|=n),Et===4&&Ai(t,It)),rn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(_s=xt()+500,Rl&&Yi()))}function rn(t,e){var n=t.callbackNode;c_(t,e);var i=ja(t,t===Pt?It:0);if(i===0)n!==null&&Lf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Lf(n),e===1)t.tag===0?lx(Eh.bind(null,t)):gg(Eh.bind(null,t)),rx(function(){!(Xe&6)&&Yi()}),n=null;else{switch(jm(i)){case 1:n=_d;break;case 4:n=Vm;break;case 16:n=Wa;break;case 536870912:n=Gm;break;default:n=Wa}n=p0(n,a0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function a0(t,e){if(Fa=-1,Oa=0,Xe&6)throw Error(ne(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var i=ja(t,t===Pt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=cl(t,i);else{e=i;var r=Xe;Xe|=2;var s=c0();(Pt!==t||It!==e)&&(ni=null,_s=xt()+500,mr(t,e));do try{bx();break}catch(a){l0(t,a)}while(!0);Ld(),ol.current=s,Xe=r,St!==null?e=0:(Pt=null,It=0,e=Et)}if(e!==0){if(e===2&&(r=xu(t),r!==0&&(i=r,e=qu(t,r))),e===1)throw n=wo,mr(t,0),Ai(t,i),rn(t,xt()),n;if(e===6)Ai(t,i);else{if(r=t.current.alternate,!(i&30)&&!Cx(r)&&(e=cl(t,i),e===2&&(s=xu(t),s!==0&&(i=s,e=qu(t,s))),e===1))throw n=wo,mr(t,0),Ai(t,i),rn(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:sr(t,Qt,ni);break;case 3:if(Ai(t,i),(i&130023424)===i&&(e=Xd+500-xt(),10<e)){if(ja(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Cu(sr.bind(null,t,Qt,ni),e);break}sr(t,Qt,ni);break;case 4:if(Ai(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Dn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ax(i/1960))-i,10<i){t.timeoutHandle=Cu(sr.bind(null,t,Qt,ni),i);break}sr(t,Qt,ni);break;case 5:sr(t,Qt,ni);break;default:throw Error(ne(329))}}}return rn(t,xt()),t.callbackNode===n?a0.bind(null,t):null}function qu(t,e){var n=ro;return t.current.memoizedState.isDehydrated&&(mr(t,e).flags|=256),t=cl(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&Yu(e)),t}function Yu(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function Cx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Fn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ai(t,e){for(e&=~jd,e&=~Il,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dn(e),i=1<<n;t[n]=-1,e&=~i}}function Eh(t){if(Xe&6)throw Error(ne(327));ls();var e=ja(t,0);if(!(e&1))return rn(t,xt()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var i=xu(t);i!==0&&(e=i,n=qu(t,i))}if(n===1)throw n=wo,mr(t,0),Ai(t,e),rn(t,xt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,sr(t,Qt,ni),rn(t,xt()),null}function qd(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(_s=xt()+500,Rl&&Yi())}}function Sr(t){bi!==null&&bi.tag===0&&!(Xe&6)&&ls();var e=Xe;Xe|=1;var n=Mn.transition,i=Qe;try{if(Mn.transition=null,Qe=1,t)return t()}finally{Qe=i,Mn.transition=n,Xe=e,!(Xe&6)&&Yi()}}function Yd(){un=ts.current,at(ts)}function mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ix(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Rd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ka();break;case 3:gs(),at(tn),at(Ht),Od();break;case 5:Fd(i);break;case 4:gs();break;case 13:at(dt);break;case 19:at(dt);break;case 10:Id(i.type._context);break;case 22:case 23:Yd()}n=n.return}if(Pt=t,St=t=ki(t.current,null),It=un=e,Et=0,wo=null,jd=Il=yr=0,Qt=ro=null,ur!==null){for(e=0;e<ur.length;e++)if(n=ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ur=null}return t}function l0(t,e){do{var n=St;try{if(Ld(),Da.current=sl,rl){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rl=!1}if(xr=0,bt=Mt=ft=null,no=!1,So=0,Wd.current=null,n===null||n.return===null){Et=1,wo=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=uh(o);if(p!==null){p.flags&=-257,dh(p,o,a,s,e),p.mode&1&&ch(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){ch(s,c,e),$d();break e}l=Error(ne(426))}}else if(ct&&a.mode&1){var m=uh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),dh(m,o,a,s,e),bd(vs(l,a));break e}}s=l=vs(l,a),Et!==4&&(Et=2),ro===null?ro=[s]:ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=jg(s,l,e);ih(s,u);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Fi===null||!Fi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Xg(s,a,e);ih(s,y);break e}}s=s.return}while(s!==null)}d0(n)}catch(b){e=b,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function c0(){var t=ol.current;return ol.current=sl,t===null?sl:t}function $d(){(Et===0||Et===3||Et===2)&&(Et=4),Pt===null||!(yr&268435455)&&!(Il&268435455)||Ai(Pt,It)}function cl(t,e){var n=Xe;Xe|=2;var i=c0();(Pt!==t||It!==e)&&(ni=null,mr(t,e));do try{Rx();break}catch(r){l0(t,r)}while(!0);if(Ld(),Xe=n,ol.current=i,St!==null)throw Error(ne(261));return Pt=null,It=0,Et}function Rx(){for(;St!==null;)u0(St)}function bx(){for(;St!==null&&!e_();)u0(St)}function u0(t){var e=h0(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?d0(t):St=e,Wd.current=null}function d0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Mx(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,St=null;return}}else if(n=Sx(n,e,un),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Et===0&&(Et=5)}function sr(t,e,n){var i=Qe,r=Mn.transition;try{Mn.transition=null,Qe=1,Px(t,e,n,i)}finally{Mn.transition=r,Qe=i}return null}function Px(t,e,n,i){do ls();while(bi!==null);if(Xe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(u_(t,s),t===Pt&&(St=Pt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,p0(Wa,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var o=Qe;Qe=1;var a=Xe;Xe|=4,Wd.current=null,wx(t,n),s0(n,t),K_(Tu),Xa=!!wu,Tu=wu=null,t.current=n,Tx(n),t_(),Xe=a,Qe=o,Mn.transition=s}else t.current=n;if(Jo&&(Jo=!1,bi=t,ll=r),s=t.pendingLanes,s===0&&(Fi=null),r_(n.stateNode),rn(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(al)throw al=!1,t=ju,ju=null,t;return ll&1&&t.tag!==0&&ls(),s=t.pendingLanes,s&1?t===Xu?so++:(so=0,Xu=t):so=0,Yi(),null}function ls(){if(bi!==null){var t=jm(ll),e=Mn.transition,n=Qe;try{if(Mn.transition=null,Qe=16>t?16:t,bi===null)var i=!1;else{if(t=bi,bi=null,ll=0,Xe&6)throw Error(ne(331));var r=Xe;for(Xe|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var d=ge;switch(d.tag){case 0:case 11:case 15:io(8,d,s)}var h=d.child;if(h!==null)h.return=d,ge=h;else for(;ge!==null;){d=ge;var f=d.sibling,p=d.return;if(n0(d),d===c){ge=null;break}if(f!==null){f.return=p,ge=f;break}ge=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:io(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ge=u;break e}ge=s.return}}var g=t.current;for(ge=g;ge!==null;){o=ge;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ge=v;else e:for(o=g;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ll(9,a)}}catch(b){gt(a,a.return,b)}if(a===o){ge=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ge=y;break e}ge=a.return}}if(Xe=r,Yi(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(El,t)}catch{}i=!0}return i}finally{Qe=n,Mn.transition=e}}return!1}function wh(t,e,n){e=vs(n,e),e=jg(t,e,1),t=Ui(t,e,1),e=qt(),t!==null&&(Ao(t,1,e),rn(t,e))}function gt(t,e,n){if(t.tag===3)wh(t,t,n);else for(;e!==null;){if(e.tag===3){wh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fi===null||!Fi.has(i))){t=vs(n,t),t=Xg(e,t,1),e=Ui(e,t,1),t=qt(),e!==null&&(Ao(e,1,t),rn(e,t));break}}e=e.return}}function Lx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(It&n)===n&&(Et===4||Et===3&&(It&130023424)===It&&500>xt()-Xd?mr(t,0):jd|=n),rn(t,e)}function f0(t,e){e===0&&(t.mode&1?(e=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):e=1);var n=qt();t=di(t,e),t!==null&&(Ao(t,e,n),rn(t,n))}function Ix(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),f0(t,n)}function Dx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),f0(t,n)}var h0;h0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,yx(t,e,n);en=!!(t.flags&131072)}else en=!1,ct&&e.flags&1048576&&vg(e,Ja,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ua(t,e),t=e.pendingProps;var r=hs(e,Ht.current);as(e,n),r=zd(null,e,i,t,r,n);var s=Bd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,Za(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Nd(e),r.updater=Pl,e.stateNode=r,r._reactInternals=e,Nu(e,i,t,n),e=Ou(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Cd(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ua(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ux(i),t=bn(i,t),r){case 0:e=Fu(null,e,i,t,n);break e;case 1:e=ph(null,e,i,t,n);break e;case 11:e=fh(null,e,i,t,n);break e;case 14:e=hh(null,e,i,bn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Fu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),ph(t,e,i,r,n);case 3:e:{if(Kg(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Eg(t,e),nl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=vs(Error(ne(423)),e),e=mh(t,e,i,n,r);break e}else if(i!==r){r=vs(Error(ne(424)),e),e=mh(t,e,i,n,r);break e}else for(dn=Ni(e.stateNode.containerInfo.firstChild),fn=e,ct=!0,Ln=null,n=Sg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ps(),i===r){e=fi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return wg(e),t===null&&Lu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Au(i,r)?o=null:s!==null&&Au(i,s)&&(e.flags|=32),$g(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&Lu(e),null;case 13:return Zg(t,e,n);case 4:return Ud(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ms(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),fh(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(el,i._currentValue),i._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===r.children&&!tn.current){e=fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=li(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Iu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Iu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,as(e,n),r=En(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=bn(i,e.pendingProps),r=bn(i.type,r),hh(t,e,i,r,n);case 15:return qg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Ua(t,e),e.tag=1,nn(i)?(t=!0,Za(e)):t=!1,as(e,n),Wg(e,i,r),Nu(e,i,r,n),Ou(null,e,i,!0,t,n);case 19:return Qg(t,e,n);case 22:return Yg(t,e,n)}throw Error(ne(156,e.tag))};function p0(t,e){return Hm(t,e)}function Nx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,i){return new Nx(t,e,n,i)}function Kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ux(t){if(typeof t=="function")return Kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===md)return 11;if(t===gd)return 14}return 2}function ki(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ka(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Kd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case jr:return gr(n.children,r,s,e);case pd:o=8,r|=8;break;case ru:return t=yn(12,n,e,r|2),t.elementType=ru,t.lanes=s,t;case su:return t=yn(13,n,e,r),t.elementType=su,t.lanes=s,t;case ou:return t=yn(19,n,e,r),t.elementType=ou,t.lanes=s,t;case wm:return Dl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mm:o=10;break e;case Em:o=9;break e;case md:o=11;break e;case gd:o=14;break e;case Mi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=yn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function gr(t,e,n,i){return t=yn(7,t,i,e),t.lanes=n,t}function Dl(t,e,n,i){return t=yn(22,t,i,e),t.elementType=wm,t.lanes=n,t.stateNode={isHidden:!1},t}function _c(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function xc(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Fx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zd(t,e,n,i,r,s,o,a,l){return t=new Fx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nd(s),t}function Ox(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function m0(t){if(!t)return Vi;t=t._reactInternals;e:{if(wr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(nn(n))return mg(t,n,e)}return e}function g0(t,e,n,i,r,s,o,a,l){return t=Zd(n,i,!0,t,r,s,o,a,l),t.context=m0(null),n=t.current,i=qt(),r=Oi(n),s=li(i,r),s.callback=e??null,Ui(n,s,r),t.current.lanes=r,Ao(t,r,i),rn(t,i),t}function Nl(t,e,n,i){var r=e.current,s=qt(),o=Oi(r);return n=m0(n),e.context===null?e.context=n:e.pendingContext=n,e=li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ui(r,e,o),t!==null&&(Nn(t,r,o,s),Ia(t,r,o)),o}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Th(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qd(t,e){Th(t,e),(t=t.alternate)&&Th(t,e)}function kx(){return null}var v0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jd(t){this._internalRoot=t}Ul.prototype.render=Jd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Nl(t,e,null,null)};Ul.prototype.unmount=Jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Sr(function(){Nl(null,t,null,null)}),e[ui]=null}};function Ul(t){this._internalRoot=t}Ul.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ym();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ti.length&&e!==0&&e<Ti[n].priority;n++);Ti.splice(n,0,t),n===0&&Km(t)}};function ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ah(){}function zx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ul(o);s.call(c)}}var o=g0(e,i,t,0,null,!1,!1,"",Ah);return t._reactRootContainer=o,t[ui]=o.current,go(t.nodeType===8?t.parentNode:t),Sr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ul(l);a.call(c)}}var l=Zd(t,0,!1,null,null,!1,!1,"",Ah);return t._reactRootContainer=l,t[ui]=l.current,go(t.nodeType===8?t.parentNode:t),Sr(function(){Nl(e,l,n,i)}),l}function Ol(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ul(o);a.call(l)}}Nl(e,o,t,r)}else o=zx(n,e,t,r,i);return ul(o)}Xm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ys(e.pendingLanes);n!==0&&(xd(e,n|1),rn(e,xt()),!(Xe&6)&&(_s=xt()+500,Yi()))}break;case 13:Sr(function(){var i=di(t,1);if(i!==null){var r=qt();Nn(i,t,1,r)}}),Qd(t,1)}};yd=function(t){if(t.tag===13){var e=di(t,134217728);if(e!==null){var n=qt();Nn(e,t,134217728,n)}Qd(t,134217728)}};qm=function(t){if(t.tag===13){var e=Oi(t),n=di(t,e);if(n!==null){var i=qt();Nn(n,t,e,i)}Qd(t,e)}};Ym=function(){return Qe};$m=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};gu=function(t,e,n){switch(e){case"input":if(cu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cl(i);if(!r)throw Error(ne(90));Am(i),cu(i,r)}}}break;case"textarea":Rm(t,n);break;case"select":e=n.value,e!=null&&is(t,!!n.multiple,e,!1)}};Um=qd;Fm=Sr;var Bx={usingClientEntryPoint:!1,Events:[Ro,$r,Cl,Dm,Nm,qd]},ks={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hx={bundleType:ks.bundleType,version:ks.version,rendererPackageName:ks.rendererPackageName,rendererConfig:ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zm(t),t===null?null:t.stateNode},findFiberByHostInstance:ks.findFiberByHostInstance||kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{El=ea.inject(Hx),Xn=ea}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bx;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(e))throw Error(ne(200));return Ox(t,e,null,n)};pn.createRoot=function(t,e){if(!ef(t))throw Error(ne(299));var n=!1,i="",r=v0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zd(t,1,!1,null,null,n,!1,i,r),t[ui]=e.current,go(t.nodeType===8?t.parentNode:t),new Jd(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=zm(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return Sr(t)};pn.hydrate=function(t,e,n){if(!Fl(e))throw Error(ne(200));return Ol(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!ef(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=v0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=g0(e,null,t,1,n??null,r,!1,s,o),t[ui]=e.current,go(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ul(e)};pn.render=function(t,e,n){if(!Fl(e))throw Error(ne(200));return Ol(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!Fl(t))throw Error(ne(40));return t._reactRootContainer?(Sr(function(){Ol(null,null,t,!1,function(){t._reactRootContainer=null,t[ui]=null})}),!0):!1};pn.unstable_batchedUpdates=qd;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fl(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Ol(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426";function _0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_0)}catch(t){console.error(t)}}_0(),_m.exports=pn;var Vx=_m.exports,Ch=Vx;nu.createRoot=Ch.createRoot,nu.hydrateRoot=Ch.hydrateRoot;/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x0=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=nt.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>nt.createElement("svg",{ref:l,...Wx,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:x0("lucide",r),...a},[...o.map(([c,d])=>nt.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=(t,e)=>{const n=nt.forwardRef(({className:i,...r},s)=>nt.createElement(jx,{ref:s,iconNode:e,className:x0(`lucide-${Gx(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=Je("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=Je("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=Je("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=Je("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=Je("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=Je("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=Je("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=Je("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=Je("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=Je("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=Je("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=Je("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=Je("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Je("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Je("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=Je("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=Je("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=Je("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Je("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=Je("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=Je("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=Je("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Je("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Je("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Je("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=Je("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=Je("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Je("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=Je("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function ay(){const[t,e]=nt.useState(!1),[n,i]=nt.useState(!1);nt.useEffect(()=>{const s=()=>{e(window.scrollY>30)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const r=[{name:"Technical Skills",href:"#skills"},{name:"AI Projects",href:"#projects"},{name:"Experience & Research",href:"#experience"},{name:"Certificates",href:"#certificates"},{name:"Education",href:"#education"},{name:"Contact",href:"#contact"}];return T.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,transition:"all 0.3s ease",padding:t?"12px 0":"20px 0",background:t?"var(--bg-glass)":"transparent",backdropFilter:t?"blur(16px)":"none",WebkitBackdropFilter:t?"blur(16px)":"none",borderBottom:t?"1px solid var(--border-glass)":"1px solid transparent"},children:[T.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[T.jsxs("a",{href:"#hero",style:{textDecoration:"none",display:"flex",alignItems:"center",gap:"10px"},children:[T.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"var(--radius-sm)",background:"var(--accent-gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:"bold",boxShadow:"var(--shadow-glow)"},children:T.jsx(tf,{size:22})}),T.jsxs("span",{style:{fontSize:"1.25rem",fontWeight:800,color:"var(--text-main)",letterSpacing:"-0.02em"},children:["Mani Kethan ",T.jsx("span",{style:{color:"var(--accent-primary)"},children:"Reddy"})]})]}),T.jsx("nav",{style:{display:"none",alignItems:"center",gap:"8px"},className:"desktop-nav",children:r.map(s=>T.jsxs("a",{href:s.href,className:"nav-link-item",children:[T.jsx("span",{children:s.name}),T.jsx("div",{className:"nav-link-indicator"})]},s.name))}),T.jsx("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:T.jsx("button",{onClick:()=>i(!n),style:{width:"40px",height:"40px",borderRadius:"var(--radius-sm)",background:"var(--bg-glass-card)",border:"1px solid var(--border-glass)",color:"var(--text-main)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},className:"mobile-menu-btn",children:n?T.jsx(C0,{size:20}):T.jsx(iy,{size:20})})})]}),n&&T.jsx("div",{className:"glass-panel",style:{position:"absolute",top:"100%",left:0,right:0,padding:"24px",display:"flex",flexDirection:"column",gap:"16px",borderTop:"1px solid var(--border-glass)"},children:r.map(s=>T.jsx("a",{href:s.href,onClick:()=>i(!1),style:{color:"var(--text-main)",textDecoration:"none",fontSize:"1.1rem",fontWeight:600},children:s.name},s.name))}),T.jsx("style",{children:`
        .nav-link-item {
          position: relative;
          padding: 8px 16px;
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: var(--radius-sm);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .nav-link-indicator {
          position: absolute;
          bottom: 4px;
          left: 16px;
          right: 16px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-primary), #a855f7);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .nav-link-item:hover {
          color: var(--accent-primary);
          background: rgba(6, 182, 212, 0.08);
          transform: translateY(-2px);
          text-shadow: 0 0 12px rgba(6, 182, 212, 0.4);
        }

        .nav-link-item:hover .nav-link-indicator {
          transform: scaleX(1);
        }

        @media (min-width: 840px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rf="165",ly=0,Ph=1,cy=2,R0=1,uy=2,ti=3,Gi=0,sn=1,ri=2,zi=0,cs=1,$u=2,Lh=3,Ih=4,dy=5,ar=100,fy=101,hy=102,py=103,my=104,gy=200,vy=201,_y=202,xy=203,Ku=204,Zu=205,yy=206,Sy=207,My=208,Ey=209,wy=210,Ty=211,Ay=212,Cy=213,Ry=214,by=0,Py=1,Ly=2,fl=3,Iy=4,Dy=5,Ny=6,Uy=7,b0=0,Fy=1,Oy=2,Bi=0,ky=1,zy=2,By=3,P0=4,Hy=5,Vy=6,Gy=7,L0=300,xs=301,ys=302,Qu=303,Ju=304,kl=306,ed=1e3,fr=1001,td=1002,Sn=1003,Wy=1004,ta=1005,In=1006,yc=1007,hr=1008,Wi=1009,jy=1010,Xy=1011,hl=1012,I0=1013,Ss=1014,Pi=1015,zl=1016,D0=1017,N0=1018,Ms=1020,qy=35902,Yy=1021,$y=1022,jn=1023,Ky=1024,Zy=1025,us=1026,Es=1027,Qy=1028,U0=1029,Jy=1030,F0=1031,O0=1033,Sc=33776,Mc=33777,Ec=33778,wc=33779,Dh=35840,Nh=35841,Uh=35842,Fh=35843,Oh=36196,kh=37492,zh=37496,Bh=37808,Hh=37809,Vh=37810,Gh=37811,Wh=37812,jh=37813,Xh=37814,qh=37815,Yh=37816,$h=37817,Kh=37818,Zh=37819,Qh=37820,Jh=37821,Tc=36492,ep=36494,tp=36495,eS=36283,np=36284,ip=36285,rp=36286,tS=3200,nS=3201,k0=0,iS=1,Ci="",Hn="srgb",$i="srgb-linear",sf="display-p3",Bl="display-p3-linear",pl="linear",ot="srgb",ml="rec709",gl="p3",Cr=7680,sp=519,rS=512,sS=513,oS=514,z0=515,aS=516,lS=517,cS=518,uS=519,op=35044,ap="300 es",ai=2e3,vl=2001;class bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ac=Math.PI/180,nd=180/Math.PI;function Po(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function jt(t,e,n){return Math.max(e,Math.min(n,t))}function dS(t,e){return(t%e+e)%e}function Cc(t,e,n){return(1-n)*t+n*e}function zs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,n=0){Be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],p=i[5],_=i[8],x=r[0],m=r[3],u=r[6],g=r[1],v=r[4],y=r[7],b=r[2],C=r[5],A=r[8];return s[0]=o*x+a*g+l*b,s[3]=o*m+a*v+l*C,s[6]=o*u+a*y+l*A,s[1]=c*x+d*g+h*b,s[4]=c*m+d*v+h*C,s[7]=c*u+d*y+h*A,s[2]=f*x+p*g+_*b,s[5]=f*m+p*v+_*C,s[8]=f*u+p*y+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,p=c*s-o*l,_=n*h+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Rc.makeScale(e,n)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Rc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rc=new Oe;function B0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _l(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fS(){const t=_l("canvas");return t.style.display="block",t}const lp={};function H0(t){t in lp||(lp[t]=!0,console.warn(t))}function hS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const cp=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),up=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),na={[$i]:{transfer:pl,primaries:ml,toReference:t=>t,fromReference:t=>t},[Hn]:{transfer:ot,primaries:ml,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Bl]:{transfer:pl,primaries:gl,toReference:t=>t.applyMatrix3(up),fromReference:t=>t.applyMatrix3(cp)},[sf]:{transfer:ot,primaries:gl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(up),fromReference:t=>t.applyMatrix3(cp).convertLinearToSRGB()}},pS=new Set([$i,Bl]),Ze={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!pS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=na[e].toReference,r=na[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return na[t].primaries},getTransfer:function(t){return t===Ci?pl:na[t].transfer}};function ds(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Rr;class mS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rr===void 0&&(Rr=_l("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_l("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ds(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ds(n[i]/255)*255):n[i]=ds(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gS=0;class V0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Po(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pc(r[o].image)):s.push(Pc(r[o]))}else s=Pc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Pc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?mS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vS=0;class Yt extends bs{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=fr,r=fr,s=In,o=hr,a=jn,l=Wi,c=Yt.DEFAULT_ANISOTROPY,d=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=Po(),this.name="",this.source=new V0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=L0;Yt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(p+1)/2,b=(u+1)/2,C=(d+f)/4,A=(h+x)/4,P=(_+m)/4;return v>y&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=A/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(h-x)/g,this.z=(f-d)/g,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _S extends bs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new V0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends _S{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class G0 extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xS extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==f||c!==p||d!==_){let m=1-a;const u=l*f+c*p+d*_+h*x,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const b=Math.sqrt(v),C=Math.atan2(b,u*g);m=Math.sin(m*C)/b,a=Math.sin(a*C)/b}const y=a*g;if(l=l*m+f*y,c=c*m+p*y,d=d*m+_*y,h=h*m+x*y,m===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=b,c*=b,d*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+d*h+l*p-c*f,e[n+1]=l*_+d*f+c*h-a*p,e[n+2]=c*_+d*p+a*f-l*h,e[n+3]=d*_-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"YXZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"ZXY":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"ZYX":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"YZX":this._x=f*d*h+c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h-f*p*_;break;case"XZY":this._x=f*d*h-c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(dp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(dp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lc=new U,dp=new Lo;class Io{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(An.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(An.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=An.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ia.copy(i.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),ra.subVectors(this.max,Bs),br.subVectors(e.a,Bs),Pr.subVectors(e.b,Bs),Lr.subVectors(e.c,Bs),gi.subVectors(Pr,br),vi.subVectors(Lr,Pr),Qi.subVectors(br,Lr);let n=[0,-gi.z,gi.y,0,-vi.z,vi.y,0,-Qi.z,Qi.y,gi.z,0,-gi.x,vi.z,0,-vi.x,Qi.z,0,-Qi.x,-gi.y,gi.x,0,-vi.y,vi.x,0,-Qi.y,Qi.x,0];return!Ic(n,br,Pr,Lr,ra)||(n=[1,0,0,0,1,0,0,0,1],!Ic(n,br,Pr,Lr,ra))?!1:(sa.crossVectors(gi,vi),n=[sa.x,sa.y,sa.z],Ic(n,br,Pr,Lr,ra))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new U,new U,new U,new U,new U,new U,new U,new U],An=new U,ia=new Io,br=new U,Pr=new U,Lr=new U,gi=new U,vi=new U,Qi=new U,Bs=new U,ra=new U,sa=new U,Ji=new U;function Ic(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ji.fromArray(t,s);const a=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),l=e.dot(Ji),c=n.dot(Ji),d=i.dot(Ji);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const yS=new Io,Hs=new U,Dc=new U;class Do{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):yS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const n=Hs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(Dc)),this.expandByPoint(Hs.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new U,Nc=new U,oa=new U,_i=new U,Uc=new U,aa=new U,Fc=new U;class Hl{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nc.copy(e).add(n).multiplyScalar(.5),oa.copy(n).sub(e).normalize(),_i.copy(this.origin).sub(Nc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(oa),a=_i.dot(this.direction),l=-_i.dot(oa),c=_i.lengthSq(),d=Math.abs(1-o*o);let h,f,p,_;if(d>0)if(h=o*l-a,f=o*a-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const x=1/d;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Nc).addScaledVector(oa,f),p}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){Uc.subVectors(n,e),aa.subVectors(i,e),Fc.crossVectors(Uc,aa);let o=this.direction.dot(Fc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const l=a*this.direction.dot(aa.crossVectors(_i,aa));if(l<0)return null;const c=a*this.direction.dot(Uc.cross(_i));if(c<0||l+c>o)return null;const d=-a*_i.dot(Fc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,n,i,r,s,o,a,l,c,d,h,f,p,_,x,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,p,_,x,m)}set(e,n,i,r,s,o,a,l,c,d,h,f,p,_,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=_,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,p=o*h,_=a*d,x=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,_=c*d,x=c*h;n[0]=f+x*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=p*a-_,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,_=c*d,x=c*h;n[0]=f-x*a,n[4]=-o*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*d,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,p=o*h,_=a*d,x=a*h;n[0]=l*d,n[4]=_*c-p,n[8]=f*c+x,n[1]=l*h,n[5]=x*c+f,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*d,n[4]=x-f*h,n[8]=_*h+p,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*h+_,n[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+x,n[5]=o*d,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*d,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SS,e,MS)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),xi.crossVectors(i,ln),xi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),xi.crossVectors(i,ln)),xi.normalize(),la.crossVectors(ln,xi),r[0]=xi.x,r[4]=la.x,r[8]=ln.x,r[1]=xi.y,r[5]=la.y,r[9]=ln.y,r[2]=xi.z,r[6]=la.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],p=i[13],_=i[2],x=i[6],m=i[10],u=i[14],g=i[3],v=i[7],y=i[11],b=i[15],C=r[0],A=r[4],P=r[8],w=r[12],S=r[1],L=r[5],V=r[9],B=r[13],q=r[2],W=r[6],j=r[10],$=r[14],N=r[3],Y=r[7],Q=r[11],se=r[15];return s[0]=o*C+a*S+l*q+c*N,s[4]=o*A+a*L+l*W+c*Y,s[8]=o*P+a*V+l*j+c*Q,s[12]=o*w+a*B+l*$+c*se,s[1]=d*C+h*S+f*q+p*N,s[5]=d*A+h*L+f*W+p*Y,s[9]=d*P+h*V+f*j+p*Q,s[13]=d*w+h*B+f*$+p*se,s[2]=_*C+x*S+m*q+u*N,s[6]=_*A+x*L+m*W+u*Y,s[10]=_*P+x*V+m*j+u*Q,s[14]=_*w+x*B+m*$+u*se,s[3]=g*C+v*S+y*q+b*N,s[7]=g*A+v*L+y*W+b*Y,s[11]=g*P+v*V+y*j+b*Q,s[15]=g*w+v*B+y*$+b*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],p=e[14],_=e[3],x=e[7],m=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+x*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*d-s*l*d)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],p=e[11],_=e[12],x=e[13],m=e[14],u=e[15],g=h*m*c-x*f*c+x*l*p-a*m*p-h*l*u+a*f*u,v=_*f*c-d*m*c-_*l*p+o*m*p+d*l*u-o*f*u,y=d*x*c-_*h*c+_*a*p-o*x*p-d*a*u+o*h*u,b=_*h*l-d*x*l-_*a*f+o*x*f+d*a*m-o*h*m,C=n*g+i*v+r*y+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=g*A,e[1]=(x*f*s-h*m*s-x*r*p+i*m*p+h*r*u-i*f*u)*A,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*u+i*l*u)*A,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=v*A,e[5]=(d*m*s-_*f*s+_*r*p-n*m*p-d*r*u+n*f*u)*A,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*u-n*l*u)*A,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(_*h*s-d*x*s-_*i*p+n*x*p+d*i*u-n*h*u)*A,e[10]=(o*x*s-_*a*s+_*i*c-n*x*c-o*i*u+n*a*u)*A,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*p-n*a*p)*A,e[12]=b*A,e[13]=(d*x*r-_*h*r+_*i*f-n*x*f-d*i*m+n*h*m)*A,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*m-n*a*m)*A,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,p=s*d,_=s*h,x=o*d,m=o*h,u=a*h,g=l*c,v=l*d,y=l*h,b=i.x,C=i.y,A=i.z;return r[0]=(1-(x+u))*b,r[1]=(p+y)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(f+u))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(_+v)*A,r[9]=(m-g)*A,r[10]=(1-(f+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const o=Ir.set(r[4],r[5],r[6]).length(),a=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,d=1/o,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=d,Cn.elements[5]*=d,Cn.elements[6]*=d,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,n.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ai){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(a===ai)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===vl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ai){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,p=(i+r)*d;let _,x;if(a===ai)_=(o+s)*h,x=-2*h;else if(a===vl)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ir=new U,Cn=new lt,SS=new U(0,0,0),MS=new U(1,1,1),xi=new U,la=new U,ln=new U,fp=new lt,hp=new Lo;class Yn{constructor(e=0,n=0,i=0,r=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hp.setFromEuler(this),this.setFromQuaternion(hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ES=0;const pp=new U,Dr=new Lo,Qn=new lt,ca=new U,Vs=new U,wS=new U,TS=new Lo,mp=new U(1,0,0),gp=new U(0,1,0),vp=new U(0,0,1),_p={type:"added"},AS={type:"removed"},Nr={type:"childadded",child:null},Oc={type:"childremoved",child:null};class Bt extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new U,n=new Yn,i=new Lo,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Oe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(mp,e)}rotateY(e){return this.rotateOnAxis(gp,e)}rotateZ(e){return this.rotateOnAxis(vp,e)}translateOnAxis(e,n){return pp.copy(e).applyQuaternion(this.quaternion),this.position.add(pp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mp,e)}translateY(e){return this.translateOnAxis(gp,e)}translateZ(e){return this.translateOnAxis(vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ca.copy(e):ca.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Vs,ca,this.up):Qn.lookAt(ca,Vs,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(Qn),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_p),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(AS),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_p),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,wS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,TS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new U(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new U,Jn=new U,kc=new U,ei=new U,Ur=new U,Fr=new U,xp=new U,zc=new U,Bc=new U,Hc=new U;class Wn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Rn.subVectors(e,n),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Rn.subVectors(r,n),Jn.subVectors(i,n),kc.subVectors(e,n);const o=Rn.dot(Rn),a=Rn.dot(Jn),l=Rn.dot(kc),c=Jn.dot(Jn),d=Jn.dot(kc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*d)*f,_=(o*d-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static isFrontFacing(e,n,i,r){return Rn.subVectors(i,n),Jn.subVectors(e,n),Rn.cross(Jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Rn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ur.subVectors(r,i),Fr.subVectors(s,i),zc.subVectors(e,i);const l=Ur.dot(zc),c=Fr.dot(zc);if(l<=0&&c<=0)return n.copy(i);Bc.subVectors(e,r);const d=Ur.dot(Bc),h=Fr.dot(Bc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Ur,o);Hc.subVectors(e,s);const p=Ur.dot(Hc),_=Fr.dot(Hc);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Fr,a);const m=d*_-p*h;if(m<=0&&h-d>=0&&p-_>=0)return xp.subVectors(s,r),a=(h-d)/(h-d+(p-_)),n.copy(r).addScaledVector(xp,a);const u=1/(m+x+f);return o=x*u,a=f*u,n.copy(i).addScaledVector(Ur,o).addScaledVector(Fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},ua={h:0,s:0,l:0};function Vc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=dS(e,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Vc(o,s,e+1/3),this.g=Vc(o,s,e),this.b=Vc(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=W0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}copyLinearToSRGB(e){return this.r=bc(e.r),this.g=bc(e.g),this.b=bc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Ze.fromWorkingColorSpace(kt.copy(this),e),Math.round(jt(kt.r*255,0,255))*65536+Math.round(jt(kt.g*255,0,255))*256+Math.round(jt(kt.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Hn){Ze.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+n,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(yi),e.getHSL(ua);const i=Cc(yi.h,ua.h,n),r=Cc(yi.s,ua.s,n),s=Cc(yi.l,ua.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new ze;ze.NAMES=W0;let CS=0;class Tr extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=cs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ku,this.blendDst=Zu,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ku&&(i.blendSrc=this.blendSrc),this.blendDst!==Zu&&(i.blendDst=this.blendDst),this.blendEquation!==ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class af extends Tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=b0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new U,da=new Be;class Un{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=op,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return H0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)da.fromBufferAttribute(this,n),da.applyMatrix3(e),this.setXY(n,da.x,da.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=zs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==op&&(e.usage=this.usage),e}}class j0 extends Un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class X0 extends Un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Dt extends Un{constructor(e,n,i){super(new Float32Array(e),n,i)}}let RS=0;const vn=new lt,Gc=new Bt,Or=new U,cn=new Io,Gs=new Io,Rt=new U;class on extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B0(e)?X0:j0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Do);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(cn.min,Gs.min),cn.expandByPoint(Rt),Rt.addVectors(cn.max,Gs.max),cn.expandByPoint(Rt)):(cn.expandByPoint(Gs.min),cn.expandByPoint(Gs.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Rt.fromBufferAttribute(a,c),l&&(Or.fromBufferAttribute(e,c),Rt.add(Or)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new U,l[P]=new U;const c=new U,d=new U,h=new U,f=new Be,p=new Be,_=new Be,x=new U,m=new U;function u(P,w,S){c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,w),_.fromBufferAttribute(s,S),d.sub(c),h.sub(c),p.sub(f),_.sub(f);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(L),a[P].add(x),a[w].add(x),a[S].add(x),l[P].add(m),l[w].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,w=g.length;P<w;++P){const S=g[P],L=S.start,V=S.count;for(let B=L,q=L+V;B<q;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new U,y=new U,b=new U,C=new U;function A(P){b.fromBufferAttribute(r,P),C.copy(b);const w=a[P];v.copy(w),v.sub(b.multiplyScalar(b.dot(w))).normalize(),y.crossVectors(C,w);const L=y.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,L)}for(let P=0,w=g.length;P<w;++P){const S=g[P],L=S.start,V=S.count;for(let B=L,q=L+V;B<q;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,d=new U,h=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let u=0;u<d;u++)f[_++]=c[p++]}return new Un(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new on,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yp=new lt,er=new Hl,fa=new Do,Sp=new U,kr=new U,zr=new U,Br=new U,Wc=new U,ha=new U,pa=new Be,ma=new Be,ga=new Be,Mp=new U,Ep=new U,wp=new U,va=new U,_a=new U;class Xt extends Bt{constructor(e=new on,n=new af){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ha.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Wc.fromBufferAttribute(h,e),o?ha.addScaledVector(Wc,d):ha.addScaledVector(Wc.sub(n),d))}n.add(ha)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(fa.containsPoint(er.origin)===!1&&(er.intersectSphere(fa,Sp)===null||er.origin.distanceToSquared(Sp)>(e.far-e.near)**2))&&(yp.copy(s).invert(),er.copy(e.ray).applyMatrix4(yp),!(i.boundingBox!==null&&er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,b=v;y<b;y+=3){const C=a.getX(y),A=a.getX(y+1),P=a.getX(y+2);r=xa(this,u,e,i,c,d,h,C,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,u=x;m<u;m+=3){const g=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=xa(this,o,e,i,c,d,h,g,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,b=v;y<b;y+=3){const C=y,A=y+1,P=y+2;r=xa(this,u,e,i,c,d,h,C,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,u=x;m<u;m+=3){const g=m,v=m+1,y=m+2;r=xa(this,o,e,i,c,d,h,g,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function bS(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gi,a),l===null)return null;_a.copy(a),_a.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(_a);return c<n.near||c>n.far?null:{distance:c,point:_a.clone(),object:t}}function xa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,kr),t.getVertexPosition(l,zr),t.getVertexPosition(c,Br);const d=bS(t,e,n,i,kr,zr,Br,va);if(d){r&&(pa.fromBufferAttribute(r,a),ma.fromBufferAttribute(r,l),ga.fromBufferAttribute(r,c),d.uv=Wn.getInterpolation(va,kr,zr,Br,pa,ma,ga,new Be)),s&&(pa.fromBufferAttribute(s,a),ma.fromBufferAttribute(s,l),ga.fromBufferAttribute(s,c),d.uv1=Wn.getInterpolation(va,kr,zr,Br,pa,ma,ga,new Be)),o&&(Mp.fromBufferAttribute(o,a),Ep.fromBufferAttribute(o,l),wp.fromBufferAttribute(o,c),d.normal=Wn.getInterpolation(va,kr,zr,Br,Mp,Ep,wp,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new U,materialIndex:0};Wn.getNormal(kr,zr,Br,h.normal),d.face=h}return d}class No extends on{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(h,2));function _(x,m,u,g,v,y,b,C,A,P,w){const S=y/A,L=b/P,V=y/2,B=b/2,q=C/2,W=A+1,j=P+1;let $=0,N=0;const Y=new U;for(let Q=0;Q<j;Q++){const se=Q*L-B;for(let ye=0;ye<W;ye++){const He=ye*S-V;Y[x]=He*g,Y[m]=se*v,Y[u]=q,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[u]=C>0?1:-1,d.push(Y.x,Y.y,Y.z),h.push(ye/A),h.push(1-Q/P),$+=1}}for(let Q=0;Q<P;Q++)for(let se=0;se<A;se++){const ye=f+se+W*Q,He=f+se+W*(Q+1),G=f+(se+1)+W*(Q+1),te=f+(se+1)+W*Q;l.push(ye,He,te),l.push(He,G,te),N+=6}a.addGroup(p,N,w),p+=N,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=ws(t[n]);for(const r in i)e[r]=i[r]}return e}function PS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function q0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const LS={clone:ws,merge:Gt};var IS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IS,this.fragmentShader=DS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=PS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Y0 extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new U,Tp=new Be,Ap=new Be;class Jt extends Y0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=nd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,n){return this.getViewBounds(e,Tp,Ap),n.subVectors(Ap,Tp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ac*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hr=-90,Vr=1;class NS extends Bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(Hr,Vr,e,n);r.layers=this.layers,this.add(r);const s=new Jt(Hr,Vr,e,n);s.layers=this.layers,this.add(s);const o=new Jt(Hr,Vr,e,n);o.layers=this.layers,this.add(o);const a=new Jt(Hr,Vr,e,n);a.layers=this.layers,this.add(a);const l=new Jt(Hr,Vr,e,n);l.layers=this.layers,this.add(l);const c=new Jt(Hr,Vr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class $0 extends Yt{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:xs,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class US extends Mr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:In}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new No(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:zi});s.uniforms.tEquirect.value=n;const o=new Xt(r,s),a=n.minFilter;return n.minFilter===hr&&(n.minFilter=In),new NS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const jc=new U,FS=new U,OS=new Oe;class wi{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=jc.subVectors(i,n).cross(FS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||OS.getNormalMatrix(e),r=this.coplanarPoint(jc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Do,ya=new U;class lf{constructor(e=new wi,n=new wi,i=new wi,r=new wi,s=new wi,o=new wi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],p=r[8],_=r[9],x=r[10],m=r[11],u=r[12],g=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,m-p,y-u).normalize(),i[1].setComponents(l+s,f+c,m+p,y+u).normalize(),i[2].setComponents(l+o,f+d,m+_,y+g).normalize(),i[3].setComponents(l-o,f-d,m-_,y-g).normalize(),i[4].setComponents(l-a,f-h,m-x,y-v).normalize(),n===ai)i[5].setComponents(l+a,f+h,m+x,y+v).normalize();else if(n===vl)i[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ya.x=r.normal.x>0?e.max.x:e.min.x,ya.y=r.normal.y>0?e.max.y:e.min.y,ya.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function K0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function kS(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&f.length===0&&t.bufferSubData(c,0,d),f.length!==0){for(let p=0,_=f.length;p<_;p++){const x=f[p];t.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Vl extends on{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,p=[],_=[],x=[],m=[];for(let u=0;u<d;u++){const g=u*f-o;for(let v=0;v<c;v++){const y=v*h-s;_.push(y,-g,0),x.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const v=g+c*u,y=g+c*(u+1),b=g+1+c*(u+1),C=g+1+c*u;p.push(v,y,C),p.push(y,b,C)}this.setIndex(p),this.setAttribute("position",new Dt(_,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.widthSegments,e.heightSegments)}}var zS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,HS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,YS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$S=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,QS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,lM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mM="gl_FragColor = linearToOutputTexel( gl_FragColor );",gM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,LM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,OM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,i1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,p1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,A1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,O1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,X1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:zS,alphahash_pars_fragment:BS,alphamap_fragment:HS,alphamap_pars_fragment:VS,alphatest_fragment:GS,alphatest_pars_fragment:WS,aomap_fragment:jS,aomap_pars_fragment:XS,batching_pars_vertex:qS,batching_vertex:YS,begin_vertex:$S,beginnormal_vertex:KS,bsdfs:ZS,iridescence_fragment:QS,bumpmap_pars_fragment:JS,clipping_planes_fragment:eM,clipping_planes_pars_fragment:tM,clipping_planes_pars_vertex:nM,clipping_planes_vertex:iM,color_fragment:rM,color_pars_fragment:sM,color_pars_vertex:oM,color_vertex:aM,common:lM,cube_uv_reflection_fragment:cM,defaultnormal_vertex:uM,displacementmap_pars_vertex:dM,displacementmap_vertex:fM,emissivemap_fragment:hM,emissivemap_pars_fragment:pM,colorspace_fragment:mM,colorspace_pars_fragment:gM,envmap_fragment:vM,envmap_common_pars_fragment:_M,envmap_pars_fragment:xM,envmap_pars_vertex:yM,envmap_physical_pars_fragment:LM,envmap_vertex:SM,fog_vertex:MM,fog_pars_vertex:EM,fog_fragment:wM,fog_pars_fragment:TM,gradientmap_pars_fragment:AM,lightmap_pars_fragment:CM,lights_lambert_fragment:RM,lights_lambert_pars_fragment:bM,lights_pars_begin:PM,lights_toon_fragment:IM,lights_toon_pars_fragment:DM,lights_phong_fragment:NM,lights_phong_pars_fragment:UM,lights_physical_fragment:FM,lights_physical_pars_fragment:OM,lights_fragment_begin:kM,lights_fragment_maps:zM,lights_fragment_end:BM,logdepthbuf_fragment:HM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:GM,logdepthbuf_vertex:WM,map_fragment:jM,map_pars_fragment:XM,map_particle_fragment:qM,map_particle_pars_fragment:YM,metalnessmap_fragment:$M,metalnessmap_pars_fragment:KM,morphinstance_vertex:ZM,morphcolor_vertex:QM,morphnormal_vertex:JM,morphtarget_pars_vertex:e1,morphtarget_vertex:t1,normal_fragment_begin:n1,normal_fragment_maps:i1,normal_pars_fragment:r1,normal_pars_vertex:s1,normal_vertex:o1,normalmap_pars_fragment:a1,clearcoat_normal_fragment_begin:l1,clearcoat_normal_fragment_maps:c1,clearcoat_pars_fragment:u1,iridescence_pars_fragment:d1,opaque_fragment:f1,packing:h1,premultiplied_alpha_fragment:p1,project_vertex:m1,dithering_fragment:g1,dithering_pars_fragment:v1,roughnessmap_fragment:_1,roughnessmap_pars_fragment:x1,shadowmap_pars_fragment:y1,shadowmap_pars_vertex:S1,shadowmap_vertex:M1,shadowmask_pars_fragment:E1,skinbase_vertex:w1,skinning_pars_vertex:T1,skinning_vertex:A1,skinnormal_vertex:C1,specularmap_fragment:R1,specularmap_pars_fragment:b1,tonemapping_fragment:P1,tonemapping_pars_fragment:L1,transmission_fragment:I1,transmission_pars_fragment:D1,uv_pars_fragment:N1,uv_pars_vertex:U1,uv_vertex:F1,worldpos_vertex:O1,background_vert:k1,background_frag:z1,backgroundCube_vert:B1,backgroundCube_frag:H1,cube_vert:V1,cube_frag:G1,depth_vert:W1,depth_frag:j1,distanceRGBA_vert:X1,distanceRGBA_frag:q1,equirect_vert:Y1,equirect_frag:$1,linedashed_vert:K1,linedashed_frag:Z1,meshbasic_vert:Q1,meshbasic_frag:J1,meshlambert_vert:eE,meshlambert_frag:tE,meshmatcap_vert:nE,meshmatcap_frag:iE,meshnormal_vert:rE,meshnormal_frag:sE,meshphong_vert:oE,meshphong_frag:aE,meshphysical_vert:lE,meshphysical_frag:cE,meshtoon_vert:uE,meshtoon_frag:dE,points_vert:fE,points_frag:hE,shadow_vert:pE,shadow_frag:mE,sprite_vert:gE,sprite_frag:vE},le={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Vn={basic:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ze(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Gt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Gt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ze(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Gt([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Gt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Gt([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Gt([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Gt([le.common,le.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Gt([le.lights,le.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Vn.physical={uniforms:Gt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Sa={r:0,b:0,g:0},nr=new Yn,_E=new lt;function xE(t,e,n,i,r,s,o){const a=new ze(0);let l=s===!0?0:1,c,d,h=null,f=0,p=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function x(g){let v=!1;const y=_(g);y===null?u(a,l):y&&y.isColor&&(u(y,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,v){const y=_(v);y&&(y.isCubeTexture||y.mapping===kl)?(d===void 0&&(d=new Xt(new No(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:ws(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),nr.copy(v.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(_E.makeRotationFromEuler(nr)),d.material.toneMapped=Ze.getTransfer(y.colorSpace)!==ot,(h!==y||f!==y.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,h=y,f=y.version,p=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Xt(new Vl(2,2),new ji({name:"BackgroundMaterial",uniforms:ws(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,v){g.getRGB(Sa,q0(t)),i.buffers.color.setClear(Sa.r,Sa.g,Sa.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(a,l)},render:x,addToRenderList:m}}function yE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,L,V,B,q){let W=!1;const j=h(B,V,L);s!==j&&(s=j,c(s.object)),W=p(S,B,V,q),W&&_(S,B,V,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(S,L,V,B),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function h(S,L,V){const B=V.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let W=q[L.id];W===void 0&&(W={},q[L.id]=W);let j=W[B];return j===void 0&&(j=f(l()),W[B]=j),j}function f(S){const L=[],V=[],B=[];for(let q=0;q<n;q++)L[q]=0,V[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,L,V,B){const q=s.attributes,W=L.attributes;let j=0;const $=V.getAttributes();for(const N in $)if($[N].location>=0){const Q=q[N];let se=W[N];if(se===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),Q===void 0||Q.attribute!==se||se&&Q.data!==se.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function _(S,L,V,B){const q={},W=L.attributes;let j=0;const $=V.getAttributes();for(const N in $)if($[N].location>=0){let Q=W[N];Q===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const se={};se.attribute=Q,Q&&Q.data&&(se.data=Q.data),q[N]=se,j++}s.attributes=q,s.attributesNum=j,s.index=B}function x(){const S=s.newAttributes;for(let L=0,V=S.length;L<V;L++)S[L]=0}function m(S){u(S,0)}function u(S,L){const V=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;V[S]=1,B[S]===0&&(t.enableVertexAttribArray(S),B[S]=1),q[S]!==L&&(t.vertexAttribDivisor(S,L),q[S]=L)}function g(){const S=s.newAttributes,L=s.enabledAttributes;for(let V=0,B=L.length;V<B;V++)L[V]!==S[V]&&(t.disableVertexAttribArray(V),L[V]=0)}function v(S,L,V,B,q,W,j){j===!0?t.vertexAttribIPointer(S,L,V,q,W):t.vertexAttribPointer(S,L,V,B,q,W)}function y(S,L,V,B){x();const q=B.attributes,W=V.getAttributes(),j=L.defaultAttributeValues;for(const $ in W){const N=W[$];if(N.location>=0){let Y=q[$];if(Y===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),Y!==void 0){const Q=Y.normalized,se=Y.itemSize,ye=e.get(Y);if(ye===void 0)continue;const He=ye.buffer,G=ye.type,te=ye.bytesPerElement,de=G===t.INT||G===t.UNSIGNED_INT||Y.gpuType===I0;if(Y.isInterleavedBufferAttribute){const ae=Y.data,Ue=ae.stride,De=Y.offset;if(ae.isInstancedInterleavedBuffer){for(let Ve=0;Ve<N.locationSize;Ve++)u(N.location+Ve,ae.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ve=0;Ve<N.locationSize;Ve++)m(N.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Ve=0;Ve<N.locationSize;Ve++)v(N.location+Ve,se/N.locationSize,G,Q,Ue*te,(De+se/N.locationSize*Ve)*te,de)}else{if(Y.isInstancedBufferAttribute){for(let ae=0;ae<N.locationSize;ae++)u(N.location+ae,Y.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ae=0;ae<N.locationSize;ae++)m(N.location+ae);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ae=0;ae<N.locationSize;ae++)v(N.location+ae,se/N.locationSize,G,Q,se*te,se/N.locationSize*ae*te,de)}}else if(j!==void 0){const Q=j[$];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(N.location,Q);break;case 3:t.vertexAttrib3fv(N.location,Q);break;case 4:t.vertexAttrib4fv(N.location,Q);break;default:t.vertexAttrib1fv(N.location,Q)}}}}g()}function b(){P();for(const S in i){const L=i[S];for(const V in L){const B=L[V];for(const q in B)d(B[q].object),delete B[q];delete L[V]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const V in L){const B=L[V];for(const q in B)d(B[q].object),delete B[q];delete L[V]}delete i[S.id]}function A(S){for(const L in i){const V=i[L];if(V[S.id]===void 0)continue;const B=V[S.id];for(const q in B)d(B[q].object),delete B[q];delete V[S.id]}}function P(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function SE(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function a(c,d,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<h;p++)this.render(c[p],d[p]);else{f.multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=d[_];n.update(p,i,1)}}function l(c,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],d[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x];for(let x=0;x<f.length;x++)n.update(_,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ME(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==jn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const A=C===zl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Wi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Pi&&!A)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:u,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:y,maxSamples:b}}function EE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new wi,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const g=s?0:i,v=g*4;let y=u.clippingState||null;l.value=y,y=d(_,f,v,p);for(let b=0;b!==v;++b)y[b]=n[b];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const u=p+x*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,y=p;v!==x;++v,y+=4)o.copy(h[v]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function wE(t){let e=new WeakMap;function n(o,a){return a===Qu?o.mapping=xs:a===Ju&&(o.mapping=ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qu||a===Ju)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new US(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class TE extends Y0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ns=4,Cp=[.125,.215,.35,.446,.526,.582],lr=20,Xc=new TE,Rp=new ze;let qc=null,Yc=0,$c=0,Kc=!1;const or=(1+Math.sqrt(5))/2,Gr=1/or,bp=[new U(-or,Gr,0),new U(or,Gr,0),new U(-Gr,0,or),new U(Gr,0,or),new U(0,or,-Gr),new U(0,or,Gr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Pp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Yc,$c),this._renderer.xr.enabled=Kc,e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xs||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:zl,format:jn,colorSpace:$i,depthBuffer:!1},r=Lp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AE(s)),this._blurMaterial=CE(s,e,n)}return r}_compileMaterial(e){const n=new Xt(this._lodPlanes[0],e);this._renderer.compile(n,Xc)}_sceneToCubeUV(e,n,i,r){const a=new Jt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Rp),d.toneMapping=Bi,d.autoClear=!1;const p=new af({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new Xt(new No,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Rp),x=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;Ma(r,g*v,u>2?v:0,v,v),d.setRenderTarget(r),x&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===xs||e.mapping===ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ip());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ma(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bp[(r-s-1)%bp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Xt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*lr-1),x=s/_,m=isFinite(s)?1+Math.floor(d*x):lr;m>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);const u=[];let g=0;for(let A=0;A<lr;++A){const P=A/x,w=Math.exp(-P*P/2);u.push(w),A===0?g+=w:A<m&&(g+=2*w)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const y=this._sizeLods[r],b=3*y*(r>v-ns?r-v+ns:0),C=4*(this._cubeSize-y);Ma(n,b,C,3*y,2*y),l.setRenderTarget(n),l.render(h,Xc)}}function AE(t){const e=[],n=[],i=[];let r=t;const s=t-ns+1+Cp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ns?l=Cp[o-t+ns-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,_=6,x=3,m=2,u=1,g=new Float32Array(x*_*p),v=new Float32Array(m*_*p),y=new Float32Array(u*_*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,P=C>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];g.set(w,x*_*C),v.set(f,m*_*C);const S=[C,C,C,C,C,C];y.set(S,u*_*C)}const b=new on;b.setAttribute("position",new Un(g,x)),b.setAttribute("uv",new Un(v,m)),b.setAttribute("faceIndex",new Un(y,u)),e.push(b),r>ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Lp(t,e,n){const i=new Mr(t,e,n);return i.texture.mapping=kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ma(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function CE(t,e,n){const i=new Float32Array(lr),r=new U(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Ip(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Dp(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function cf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qu||l===Ju,d=l===xs||l===ys;if(c||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Pp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Pp(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function bE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&H0("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function PE(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,u=x.length;m<u;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let v=0,y=g.length;v<y;v+=3){const b=g[v+0],C=g[v+1],A=g[v+2];f.push(b,C,C,A,A,b)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,y=g.length/3-1;v<y;v+=3){const b=v+0,C=v+1,A=v+2;f.push(b,C,C,A,A,b)}}else return;const m=new(B0(f)?X0:j0)(f,1);m.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function LE(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,f*o,_),n.update(p,i,_))}function d(f,p,_){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<_;m++)this.render(f[m]/o,p[m]);else{x.multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}}function h(f,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g];for(let g=0;g<x.length;g++)n.update(u,i,x[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function IE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function DE(t,e,n){const i=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let b=a.attributes.position.count*y,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*C*4*h),P=new G0(A,b,C,h);P.type=Pi,P.needsUpdate=!0;const w=y*4;for(let L=0;L<h;L++){const V=u[L],B=g[L],q=v[L],W=b*C*4*L;for(let j=0;j<V.count;j++){const $=j*w;_===!0&&(r.fromBufferAttribute(V,j),A[W+$+0]=r.x,A[W+$+1]=r.y,A[W+$+2]=r.z,A[W+$+3]=0),x===!0&&(r.fromBufferAttribute(B,j),A[W+$+4]=r.x,A[W+$+5]=r.y,A[W+$+6]=r.z,A[W+$+7]=0),m===!0&&(r.fromBufferAttribute(q,j),A[W+$+8]=r.x,A[W+$+9]=r.y,A[W+$+10]=r.z,A[W+$+11]=q.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new Be(b,C)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function NE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Z0 extends Yt{constructor(e,n,i,r,s,o,a,l,c,d=us){if(d!==us&&d!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===us&&(i=Ss),i===void 0&&d===Es&&(i=Ms),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Q0=new Yt,J0=new Z0(1,1);J0.compareFunction=z0;const ev=new G0,tv=new xS,nv=new $0,Np=[],Up=[],Fp=new Float32Array(16),Op=new Float32Array(9),kp=new Float32Array(4);function Ps(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Np[r];if(s===void 0&&(s=new Float32Array(r),Np[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gl(t,e){let n=Up[e];n===void 0&&(n=new Int32Array(e),Up[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function UE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function zE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;kp.set(i),t.uniformMatrix2fv(this.addr,!1,kp),Tt(n,i)}}function BE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Op.set(i),t.uniformMatrix3fv(this.addr,!1,Op),Tt(n,i)}}function HE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(wt(n,i))return;Fp.set(i),t.uniformMatrix4fv(this.addr,!1,Fp),Tt(n,i)}}function VE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function XE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function KE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?J0:Q0;n.setTexture2D(e||s,r)}function ZE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||tv,r)}function QE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||nv,r)}function JE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ev,r)}function ew(t){switch(t){case 5126:return UE;case 35664:return FE;case 35665:return OE;case 35666:return kE;case 35674:return zE;case 35675:return BE;case 35676:return HE;case 5124:case 35670:return VE;case 35667:case 35671:return GE;case 35668:case 35672:return WE;case 35669:case 35673:return jE;case 5125:return XE;case 36294:return qE;case 36295:return YE;case 36296:return $E;case 35678:case 36198:case 36298:case 36306:case 35682:return KE;case 35679:case 36299:case 36307:return ZE;case 35680:case 36300:case 36308:case 36293:return QE;case 36289:case 36303:case 36311:case 36292:return JE}}function tw(t,e){t.uniform1fv(this.addr,e)}function nw(t,e){const n=Ps(e,this.size,2);t.uniform2fv(this.addr,n)}function iw(t,e){const n=Ps(e,this.size,3);t.uniform3fv(this.addr,n)}function rw(t,e){const n=Ps(e,this.size,4);t.uniform4fv(this.addr,n)}function sw(t,e){const n=Ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ow(t,e){const n=Ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function aw(t,e){const n=Ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lw(t,e){t.uniform1iv(this.addr,e)}function cw(t,e){t.uniform2iv(this.addr,e)}function uw(t,e){t.uniform3iv(this.addr,e)}function dw(t,e){t.uniform4iv(this.addr,e)}function fw(t,e){t.uniform1uiv(this.addr,e)}function hw(t,e){t.uniform2uiv(this.addr,e)}function pw(t,e){t.uniform3uiv(this.addr,e)}function mw(t,e){t.uniform4uiv(this.addr,e)}function gw(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Q0,s[o])}function vw(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||tv,s[o])}function _w(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||nv,s[o])}function xw(t,e,n){const i=this.cache,r=e.length,s=Gl(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||ev,s[o])}function yw(t){switch(t){case 5126:return tw;case 35664:return nw;case 35665:return iw;case 35666:return rw;case 35674:return sw;case 35675:return ow;case 35676:return aw;case 5124:case 35670:return lw;case 35667:case 35671:return cw;case 35668:case 35672:return uw;case 35669:case 35673:return dw;case 5125:return fw;case 36294:return hw;case 36295:return pw;case 36296:return mw;case 35678:case 36198:case 36298:case 36306:case 35682:return gw;case 35679:case 36299:case 36307:return vw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return xw}}class Sw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ew(n.type)}}class Mw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yw(n.type)}}class Ew{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function zp(t,e){t.seq.push(e),t.map[e.id]=e}function ww(t,e,n){const i=t.name,r=i.length;for(Zc.lastIndex=0;;){const s=Zc.exec(i),o=Zc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zp(n,c===void 0?new Sw(a,t,e):new Mw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Ew(a),zp(n,h)),n=h}}}class Ba{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);ww(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Bp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Tw=37297;let Aw=0;function Cw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Rw(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===gl&&n===ml?i="LinearDisplayP3ToLinearSRGB":e===ml&&n===gl&&(i="LinearSRGBToLinearDisplayP3"),t){case $i:case Bl:return[i,"LinearTransferOETF"];case Hn:case sf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Hp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Cw(t.getShaderSource(e),o)}else return r}function bw(t,e){const n=Rw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Pw(t,e){let n;switch(e){case ky:n="Linear";break;case zy:n="Reinhard";break;case By:n="OptimizedCineon";break;case P0:n="ACESFilmic";break;case Vy:n="AgX";break;case Gy:n="Neutral";break;case Hy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Lw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function Iw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Dw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ks(t){return t!==""}function Vp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(t){return t.replace(Nw,Fw)}const Uw=new Map;function Fw(t,e){let n=Fe[e];if(n===void 0){const i=Uw.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return id(n)}const Ow=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wp(t){return t.replace(Ow,kw)}function kw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===R0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===uy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Bw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case xs:case ys:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function Vw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case b0:e="ENVMAP_BLENDING_MULTIPLY";break;case Fy:e="ENVMAP_BLENDING_MIX";break;case Oy:e="ENVMAP_BLENDING_ADD";break}return e}function Gw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Ww(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=zw(n),c=Bw(n),d=Hw(n),h=Vw(n),f=Gw(n),p=Lw(n),_=Iw(s),x=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ks).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ks).join(`
`),u.length>0&&(u+=`
`)):(m=[jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),u=[jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Bi?Pw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,bw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ks).join(`
`)),o=id(o),o=Vp(o,n),o=Gp(o,n),a=id(a),a=Vp(a,n),a=Gp(a,n),o=Wp(o),a=Wp(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+m+o,y=g+u+a,b=Bp(r,r.VERTEX_SHADER,v),C=Bp(r,r.FRAGMENT_SHADER,y);r.attachShader(x,b),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(L){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(b).trim(),q=r.getShaderInfoLog(C).trim();let W=!0,j=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,C);else{const $=Hp(r,b,"vertex"),N=Hp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+$+`
`+N)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||q==="")&&(j=!1);j&&(L.diagnostics={runnable:W,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:u}})}r.deleteShader(b),r.deleteShader(C),P=new Ba(r,x),w=Dw(r,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,Tw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Aw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=C,this}let jw=0;class Xw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new qw(e),n.set(e,i)),i}}class qw{constructor(e){this.id=jw++,this.code=e,this.usedTimes=0}}function Yw(t,e,n,i,r,s,o){const a=new of,l=new Xw,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,L,V,B){const q=V.fog,W=B.geometry,j=w.isMeshStandardMaterial?V.environment:null,$=(w.isMeshStandardMaterial?n:e).get(w.envMap||j),N=$&&$.mapping===kl?$.image.height:null,Y=_[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,se=Q!==void 0?Q.length:0;let ye=0;W.morphAttributes.position!==void 0&&(ye=1),W.morphAttributes.normal!==void 0&&(ye=2),W.morphAttributes.color!==void 0&&(ye=3);let He,G,te,de;if(Y){const et=Vn[Y];He=et.vertexShader,G=et.fragmentShader}else He=w.vertexShader,G=w.fragmentShader,l.update(w),te=l.getVertexShaderID(w),de=l.getFragmentShaderID(w);const ae=t.getRenderTarget(),Ue=B.isInstancedMesh===!0,De=B.isBatchedMesh===!0,Ve=!!w.map,I=!!w.matcap,Ge=!!$,We=!!w.aoMap,it=!!w.lightMap,he=!!w.bumpMap,Re=!!w.normalMap,we=!!w.displacementMap,be=!!w.emissiveMap,$e=!!w.metalnessMap,R=!!w.roughnessMap,M=w.anisotropy>0,H=w.clearcoat>0,Z=w.dispersion>0,J=w.iridescence>0,ee=w.sheen>0,Se=w.transmission>0,ce=M&&!!w.anisotropyMap,ue=H&&!!w.clearcoatMap,Le=H&&!!w.clearcoatNormalMap,ie=H&&!!w.clearcoatRoughnessMap,_e=J&&!!w.iridescenceMap,Ie=J&&!!w.iridescenceThicknessMap,Te=ee&&!!w.sheenColorMap,fe=ee&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,ke=!!w.specularColorMap,vt=!!w.specularIntensityMap,D=Se&&!!w.transmissionMap,pe=Se&&!!w.thicknessMap,X=!!w.gradientMap,K=!!w.alphaMap,oe=w.alphaTest>0,Pe=!!w.alphaHash,qe=!!w.extensions;let _t=Bi;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(_t=t.toneMapping);const At={shaderID:Y,shaderType:w.type,shaderName:w.name,vertexShader:He,fragmentShader:G,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:de,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:De,batchingColor:De&&B._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&B.instanceColor!==null,instancingMorph:Ue&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:$i,alphaToCoverage:!!w.alphaToCoverage,map:Ve,matcap:I,envMap:Ge,envMapMode:Ge&&$.mapping,envMapCubeUVHeight:N,aoMap:We,lightMap:it,bumpMap:he,normalMap:Re,displacementMap:f&&we,emissiveMap:be,normalMapObjectSpace:Re&&w.normalMapType===iS,normalMapTangentSpace:Re&&w.normalMapType===k0,metalnessMap:$e,roughnessMap:R,anisotropy:M,anisotropyMap:ce,clearcoat:H,clearcoatMap:ue,clearcoatNormalMap:Le,clearcoatRoughnessMap:ie,dispersion:Z,iridescence:J,iridescenceMap:_e,iridescenceThicknessMap:Ie,sheen:ee,sheenColorMap:Te,sheenRoughnessMap:fe,specularMap:Ne,specularColorMap:ke,specularIntensityMap:vt,transmission:Se,transmissionMap:D,thicknessMap:pe,gradientMap:X,opaque:w.transparent===!1&&w.blending===cs&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:oe,alphaHash:Pe,combine:w.combine,mapUv:Ve&&x(w.map.channel),aoMapUv:We&&x(w.aoMap.channel),lightMapUv:it&&x(w.lightMap.channel),bumpMapUv:he&&x(w.bumpMap.channel),normalMapUv:Re&&x(w.normalMap.channel),displacementMapUv:we&&x(w.displacementMap.channel),emissiveMapUv:be&&x(w.emissiveMap.channel),metalnessMapUv:$e&&x(w.metalnessMap.channel),roughnessMapUv:R&&x(w.roughnessMap.channel),anisotropyMapUv:ce&&x(w.anisotropyMap.channel),clearcoatMapUv:ue&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:fe&&x(w.sheenRoughnessMap.channel),specularMapUv:Ne&&x(w.specularMap.channel),specularColorMapUv:ke&&x(w.specularColorMap.channel),specularIntensityMapUv:vt&&x(w.specularIntensityMap.channel),transmissionMapUv:D&&x(w.transmissionMap.channel),thicknessMapUv:pe&&x(w.thicknessMap.channel),alphaMapUv:K&&x(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Re||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Ve||K),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:Ve&&w.map.isVideoTexture===!0&&Ze.getTransfer(w.map.colorSpace)===ot,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ri,flipSided:w.side===sn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:qe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qe&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function u(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(g(S,w),v(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function g(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),w.push(a.mask)}function y(w){const S=_[w.type];let L;if(S){const V=Vn[S];L=LS.clone(V.uniforms)}else L=w.uniforms;return L}function b(w,S){let L;for(let V=0,B=d.length;V<B;V++){const q=d[V];if(q.cacheKey===S){L=q,++L.usedTimes;break}}return L===void 0&&(L=new Ww(t,S,w,s),d.push(L)),L}function C(w){if(--w.usedTimes===0){const S=d.indexOf(w);d[S]=d[d.length-1],d.pop(),w.destroy()}}function A(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:b,releaseProgram:C,releaseShaderCache:A,programs:d,dispose:P}}function $w(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Kw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Xp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,_,x,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=x,u.group=m),e++,u}function a(h,f,p,_,x,m){const u=o(h,f,p,_,x,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,f,p,_,x,m){const u=o(h,f,p,_,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||Kw),i.length>1&&i.sort(f||Xp),r.length>1&&r.sort(f||Xp)}function d(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function Zw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new qp,t.set(i,[o])):r>=s.length?(o=new qp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Qw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new ze};break;case"SpotLight":n={position:new U,direction:new U,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function Jw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let eT=0;function tT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nT(t){const e=new Qw,n=Jw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new lt,o=new lt;function a(c){let d=0,h=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,_=0,x=0,m=0,u=0,g=0,v=0,y=0,b=0,C=0,A=0;c.sort(tT);for(let w=0,S=c.length;w<S;w++){const L=c[w],V=L.color,B=L.intensity,q=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=V.r*B,h+=V.g*B,f+=V.b*B;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],B);A++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,N=n.get(L);N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=L.shadow.matrix,g++}i.directional[p]=j,p++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(V).multiplyScalar(B),j.distance=q,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[x]=j;const $=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,$.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[x]=$.matrix,L.castShadow){const N=n.get(L);N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=W,y++}x++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(V).multiplyScalar(B),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=j,m++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const $=L.shadow,N=n.get(L);N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,N.shadowCameraNear=$.camera.near,N.shadowCameraFar=$.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=W,i.pointShadowMatrix[_]=L.shadow.matrix,v++}i.point[_]=j,_++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(B),j.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[u]=j,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==g||P.numPointShadows!==v||P.numSpotShadows!==y||P.numSpotMaps!==b||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,P.directionalLength=p,P.pointLength=_,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=g,P.numPointShadows=v,P.numSpotShadows=y,P.numSpotMaps=b,P.numLightProbes=A,i.version=eT++)}function l(c,d){let h=0,f=0,p=0,_=0,x=0;const m=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const v=c[u];if(v.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Yp(t){const e=new nT(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function iT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Yp(t),e.set(r,[a])):s>=o.length?(a=new Yp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class rT extends Tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sT extends Tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lT(t,e,n){let i=new lf;const r=new Be,s=new Be,o=new ut,a=new rT({depthPacking:nS}),l=new sT,c={},d=n.maxTextureSize,h={[Gi]:sn,[sn]:Gi,[ri]:ri},f=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:oT,fragmentShader:aT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new on;_.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R0;let u=this.type;this.render=function(C,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),V=t.state;V.setBlending(zi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=u!==ti&&this.type===ti,q=u===ti&&this.type!==ti;for(let W=0,j=C.length;W<j;W++){const $=C[W],N=$.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const Y=N.getFrameExtents();if(r.multiply(Y),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Y.x),r.x=s.x*Y.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Y.y),r.y=s.y*Y.y,N.mapSize.y=s.y)),N.map===null||B===!0||q===!0){const se=this.type!==ti?{minFilter:Sn,magFilter:Sn}:{};N.map!==null&&N.map.dispose(),N.map=new Mr(r.x,r.y,se),N.map.texture.name=$.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Q=N.getViewportCount();for(let se=0;se<Q;se++){const ye=N.getViewport(se);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),V.viewport(o),N.updateMatrices($,se),i=N.getFrustum(),y(A,P,N.camera,$,this.type)}N.isPointLightShadow!==!0&&this.type===ti&&g(N,P),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,L)};function g(C,A){const P=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Mr(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,P,f,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,P,p,x,null)}function v(C,A,P,w){let S=null;const L=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=S.uuid,B=A.uuid;let q=c[V];q===void 0&&(q={},c[V]=q);let W=q[B];W===void 0&&(W=S.clone(),q[B]=W,A.addEventListener("dispose",b)),S=W}if(S.visible=A.visible,S.wireframe=A.wireframe,w===ti?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=t.properties.get(S);V.light=P}return S}function y(C,A,P,w,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ti)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const B=e.update(C),q=C.material;if(Array.isArray(q)){const W=B.groups;for(let j=0,$=W.length;j<$;j++){const N=W[j],Y=q[N.materialIndex];if(Y&&Y.visible){const Q=v(C,Y,w,S);C.onBeforeShadow(t,C,A,P,B,Q,N),t.renderBufferDirect(P,null,B,Q,C,N),C.onAfterShadow(t,C,A,P,B,Q,N)}}}else if(q.visible){const W=v(C,q,w,S);C.onBeforeShadow(t,C,A,P,B,W,null),t.renderBufferDirect(P,null,B,W,C,null),C.onAfterShadow(t,C,A,P,B,W,null)}}const V=C.children;for(let B=0,q=V.length;B<q;B++)y(V[B],A,P,w,S)}function b(C){C.target.removeEventListener("dispose",b);for(const P in c){const w=c[P],S=C.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function cT(t){function e(){let D=!1;const pe=new ut;let X=null;const K=new ut(0,0,0,0);return{setMask:function(oe){X!==oe&&!D&&(t.colorMask(oe,oe,oe,oe),X=oe)},setLocked:function(oe){D=oe},setClear:function(oe,Pe,qe,_t,At){At===!0&&(oe*=_t,Pe*=_t,qe*=_t),pe.set(oe,Pe,qe,_t),K.equals(pe)===!1&&(t.clearColor(oe,Pe,qe,_t),K.copy(pe))},reset:function(){D=!1,X=null,K.set(-1,0,0,0)}}}function n(){let D=!1,pe=null,X=null,K=null;return{setTest:function(oe){oe?de(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(oe){pe!==oe&&!D&&(t.depthMask(oe),pe=oe)},setFunc:function(oe){if(X!==oe){switch(oe){case by:t.depthFunc(t.NEVER);break;case Py:t.depthFunc(t.ALWAYS);break;case Ly:t.depthFunc(t.LESS);break;case fl:t.depthFunc(t.LEQUAL);break;case Iy:t.depthFunc(t.EQUAL);break;case Dy:t.depthFunc(t.GEQUAL);break;case Ny:t.depthFunc(t.GREATER);break;case Uy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}X=oe}},setLocked:function(oe){D=oe},setClear:function(oe){K!==oe&&(t.clearDepth(oe),K=oe)},reset:function(){D=!1,pe=null,X=null,K=null}}}function i(){let D=!1,pe=null,X=null,K=null,oe=null,Pe=null,qe=null,_t=null,At=null;return{setTest:function(et){D||(et?de(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(et){pe!==et&&!D&&(t.stencilMask(et),pe=et)},setFunc:function(et,On,kn){(X!==et||K!==On||oe!==kn)&&(t.stencilFunc(et,On,kn),X=et,K=On,oe=kn)},setOp:function(et,On,kn){(Pe!==et||qe!==On||_t!==kn)&&(t.stencilOp(et,On,kn),Pe=et,qe=On,_t=kn)},setLocked:function(et){D=et},setClear:function(et){At!==et&&(t.clearStencil(et),At=et)},reset:function(){D=!1,pe=null,X=null,K=null,oe=null,Pe=null,qe=null,_t=null,At=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},h=new WeakMap,f=[],p=null,_=!1,x=null,m=null,u=null,g=null,v=null,y=null,b=null,C=new ze(0,0,0),A=0,P=!1,w=null,S=null,L=null,V=null,B=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),W=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=j>=2);let N=null,Y={};const Q=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),ye=new ut().fromArray(Q),He=new ut().fromArray(se);function G(D,pe,X,K){const oe=new Uint8Array(4),Pe=t.createTexture();t.bindTexture(D,Pe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<X;qe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(pe+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return Pe}const te={};te[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(fl),he(!1),Re(Ph),de(t.CULL_FACE),We(zi);function de(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function ae(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Ue(D,pe){return d[D]!==pe?(t.bindFramebuffer(D,pe),d[D]=pe,D===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=pe),D===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function De(D,pe){let X=f,K=!1;if(D){X=h.get(pe),X===void 0&&(X=[],h.set(pe,X));const oe=D.textures;if(X.length!==oe.length||X[0]!==t.COLOR_ATTACHMENT0){for(let Pe=0,qe=oe.length;Pe<qe;Pe++)X[Pe]=t.COLOR_ATTACHMENT0+Pe;X.length=oe.length,K=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,K=!0);K&&t.drawBuffers(X)}function Ve(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const I={[ar]:t.FUNC_ADD,[fy]:t.FUNC_SUBTRACT,[hy]:t.FUNC_REVERSE_SUBTRACT};I[py]=t.MIN,I[my]=t.MAX;const Ge={[gy]:t.ZERO,[vy]:t.ONE,[_y]:t.SRC_COLOR,[Ku]:t.SRC_ALPHA,[wy]:t.SRC_ALPHA_SATURATE,[My]:t.DST_COLOR,[yy]:t.DST_ALPHA,[xy]:t.ONE_MINUS_SRC_COLOR,[Zu]:t.ONE_MINUS_SRC_ALPHA,[Ey]:t.ONE_MINUS_DST_COLOR,[Sy]:t.ONE_MINUS_DST_ALPHA,[Ty]:t.CONSTANT_COLOR,[Ay]:t.ONE_MINUS_CONSTANT_COLOR,[Cy]:t.CONSTANT_ALPHA,[Ry]:t.ONE_MINUS_CONSTANT_ALPHA};function We(D,pe,X,K,oe,Pe,qe,_t,At,et){if(D===zi){_===!0&&(ae(t.BLEND),_=!1);return}if(_===!1&&(de(t.BLEND),_=!0),D!==dy){if(D!==x||et!==P){if((m!==ar||v!==ar)&&(t.blendEquation(t.FUNC_ADD),m=ar,v=ar),et)switch(D){case cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $u:t.blendFunc(t.ONE,t.ONE);break;case Lh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ih:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $u:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Lh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ih:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,g=null,y=null,b=null,C.set(0,0,0),A=0,x=D,P=et}return}oe=oe||pe,Pe=Pe||X,qe=qe||K,(pe!==m||oe!==v)&&(t.blendEquationSeparate(I[pe],I[oe]),m=pe,v=oe),(X!==u||K!==g||Pe!==y||qe!==b)&&(t.blendFuncSeparate(Ge[X],Ge[K],Ge[Pe],Ge[qe]),u=X,g=K,y=Pe,b=qe),(_t.equals(C)===!1||At!==A)&&(t.blendColor(_t.r,_t.g,_t.b,At),C.copy(_t),A=At),x=D,P=!1}function it(D,pe){D.side===ri?ae(t.CULL_FACE):de(t.CULL_FACE);let X=D.side===sn;pe&&(X=!X),he(X),D.blending===cs&&D.transparent===!1?We(zi):We(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),be(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function he(D){w!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),w=D)}function Re(D){D!==ly?(de(t.CULL_FACE),D!==S&&(D===Ph?t.cullFace(t.BACK):D===cy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),S=D}function we(D){D!==L&&(W&&t.lineWidth(D),L=D)}function be(D,pe,X){D?(de(t.POLYGON_OFFSET_FILL),(V!==pe||B!==X)&&(t.polygonOffset(pe,X),V=pe,B=X)):ae(t.POLYGON_OFFSET_FILL)}function $e(D){D?de(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function R(D){D===void 0&&(D=t.TEXTURE0+q-1),N!==D&&(t.activeTexture(D),N=D)}function M(D,pe,X){X===void 0&&(N===null?X=t.TEXTURE0+q-1:X=N);let K=Y[X];K===void 0&&(K={type:void 0,texture:void 0},Y[X]=K),(K.type!==D||K.texture!==pe)&&(N!==X&&(t.activeTexture(X),N=X),t.bindTexture(D,pe||te[D]),K.type=D,K.texture=pe)}function H(){const D=Y[N];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(D){ye.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),ye.copy(D))}function fe(D){He.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),He.copy(D))}function Ne(D,pe){let X=l.get(pe);X===void 0&&(X=new WeakMap,l.set(pe,X));let K=X.get(D);K===void 0&&(K=t.getUniformBlockIndex(pe,D.name),X.set(D,K))}function ke(D,pe){const K=l.get(pe).get(D);a.get(pe)!==K&&(t.uniformBlockBinding(pe,K,D.__bindingPointIndex),a.set(pe,K))}function vt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,Y={},d={},h=new WeakMap,f=[],p=null,_=!1,x=null,m=null,u=null,g=null,v=null,y=null,b=null,C=new ze(0,0,0),A=0,P=!1,w=null,S=null,L=null,V=null,B=null,ye.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:ae,bindFramebuffer:Ue,drawBuffers:De,useProgram:Ve,setBlending:We,setMaterial:it,setFlipSided:he,setCullFace:Re,setLineWidth:we,setPolygonOffset:be,setScissorTest:$e,activeTexture:R,bindTexture:M,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:_e,texImage3D:Ie,updateUBOMapping:Ne,uniformBlockBinding:ke,texStorage2D:Le,texStorage3D:ie,texSubImage2D:ee,texSubImage3D:Se,compressedTexSubImage2D:ce,compressedTexSubImage3D:ue,scissor:Te,viewport:fe,reset:vt}}function uT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return p?new OffscreenCanvas(R,M):_l("canvas")}function x(R,M,H){let Z=1;const J=$e(R);if((J.width>H||J.height>H)&&(Z=H/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(Z*J.width),Se=Math.floor(Z*J.height);h===void 0&&(h=_(ee,Se));const ce=M?_(ee,Se):h;return ce.width=ee,ce.height=Se,ce.getContext("2d").drawImage(R,0,0,ee,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ee+"x"+Se+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Sn&&R.minFilter!==In}function u(R){t.generateMipmap(R)}function g(R,M,H,Z,J=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=M;if(M===t.RED&&(H===t.FLOAT&&(ee=t.R32F),H===t.HALF_FLOAT&&(ee=t.R16F),H===t.UNSIGNED_BYTE&&(ee=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.R8UI),H===t.UNSIGNED_SHORT&&(ee=t.R16UI),H===t.UNSIGNED_INT&&(ee=t.R32UI),H===t.BYTE&&(ee=t.R8I),H===t.SHORT&&(ee=t.R16I),H===t.INT&&(ee=t.R32I)),M===t.RG&&(H===t.FLOAT&&(ee=t.RG32F),H===t.HALF_FLOAT&&(ee=t.RG16F),H===t.UNSIGNED_BYTE&&(ee=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RG8UI),H===t.UNSIGNED_SHORT&&(ee=t.RG16UI),H===t.UNSIGNED_INT&&(ee=t.RG32UI),H===t.BYTE&&(ee=t.RG8I),H===t.SHORT&&(ee=t.RG16I),H===t.INT&&(ee=t.RG32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),M===t.RGBA){const Se=J?pl:Ze.getTransfer(Z);H===t.FLOAT&&(ee=t.RGBA32F),H===t.HALF_FLOAT&&(ee=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ee=Se===ot?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(R,M){let H;return R?M===null||M===Ss||M===Ms?H=t.DEPTH24_STENCIL8:M===Pi?H=t.DEPTH32F_STENCIL8:M===hl&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ss||M===Ms?H=t.DEPTH_COMPONENT24:M===Pi?H=t.DEPTH_COMPONENT32F:M===hl&&(H=t.DEPTH_COMPONENT16),H}function y(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Sn&&R.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),A(M),M.isVideoTexture&&d.delete(M)}function C(R){const M=R.target;M.removeEventListener("dispose",C),w(M)}function A(R){const M=i.get(R);if(M.__webglInit===void 0)return;const H=R.source,Z=f.get(H);if(Z){const J=Z[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(R),Object.keys(Z).length===0&&f.delete(H)}i.remove(R)}function P(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const H=R.source,Z=f.get(H);delete Z[M.__cacheKey],o.memory.textures--}function w(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let J=0;J<M.__webglFramebuffer[Z].length;J++)t.deleteFramebuffer(M.__webglFramebuffer[Z][J]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=R.textures;for(let Z=0,J=H.length;Z<J;Z++){const ee=i.get(H[Z]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(H[Z])}i.remove(R)}let S=0;function L(){S=0}function V(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function B(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function q(R,M){const H=i.get(R);if(R.isVideoTexture&&we(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(H,R,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function W(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){He(H,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function j(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){He(H,R,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function $(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){G(H,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const N={[ed]:t.REPEAT,[fr]:t.CLAMP_TO_EDGE,[td]:t.MIRRORED_REPEAT},Y={[Sn]:t.NEAREST,[Wy]:t.NEAREST_MIPMAP_NEAREST,[ta]:t.NEAREST_MIPMAP_LINEAR,[In]:t.LINEAR,[yc]:t.LINEAR_MIPMAP_NEAREST,[hr]:t.LINEAR_MIPMAP_LINEAR},Q={[rS]:t.NEVER,[uS]:t.ALWAYS,[sS]:t.LESS,[z0]:t.LEQUAL,[oS]:t.EQUAL,[cS]:t.GEQUAL,[aS]:t.GREATER,[lS]:t.NOTEQUAL};function se(R,M){if(M.type===Pi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===In||M.magFilter===yc||M.magFilter===ta||M.magFilter===hr||M.minFilter===In||M.minFilter===yc||M.minFilter===ta||M.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,N[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,N[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,N[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Sn||M.minFilter!==ta&&M.minFilter!==hr||M.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ye(R,M){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const Z=M.source;let J=f.get(Z);J===void 0&&(J={},f.set(Z,J));const ee=B(M);if(ee!==R.__cacheKey){J[ee]===void 0&&(J[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[ee].usedTimes++;const Se=J[R.__cacheKey];Se!==void 0&&(J[R.__cacheKey].usedTimes--,Se.usedTimes===0&&P(M)),R.__cacheKey=ee,R.__webglTexture=J[ee].texture}return H}function He(R,M,H){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const J=ye(R,M),ee=M.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+H);const Se=i.get(ee);if(ee.version!==Se.__version||J===!0){n.activeTexture(t.TEXTURE0+H);const ce=Ze.getPrimaries(Ze.workingColorSpace),ue=M.colorSpace===Ci?null:Ze.getPrimaries(M.colorSpace),Le=M.colorSpace===Ci||ce===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ie=x(M.image,!1,r.maxTextureSize);ie=be(M,ie);const _e=s.convert(M.format,M.colorSpace),Ie=s.convert(M.type);let Te=g(M.internalFormat,_e,Ie,M.colorSpace,M.isVideoTexture);se(Z,M);let fe;const Ne=M.mipmaps,ke=M.isVideoTexture!==!0,vt=Se.__version===void 0||J===!0,D=ee.dataReady,pe=y(M,ie);if(M.isDepthTexture)Te=v(M.format===Es,M.type),vt&&(ke?n.texStorage2D(t.TEXTURE_2D,1,Te,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Te,ie.width,ie.height,0,_e,Ie,null));else if(M.isDataTexture)if(Ne.length>0){ke&&vt&&n.texStorage2D(t.TEXTURE_2D,pe,Te,Ne[0].width,Ne[0].height);for(let X=0,K=Ne.length;X<K;X++)fe=Ne[X],ke?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,fe.width,fe.height,_e,Ie,fe.data):n.texImage2D(t.TEXTURE_2D,X,Te,fe.width,fe.height,0,_e,Ie,fe.data);M.generateMipmaps=!1}else ke?(vt&&n.texStorage2D(t.TEXTURE_2D,pe,Te,ie.width,ie.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,_e,Ie,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Te,ie.width,ie.height,0,_e,Ie,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Te,Ne[0].width,Ne[0].height,ie.depth);for(let X=0,K=Ne.length;X<K;X++)if(fe=Ne[X],M.format!==jn)if(_e!==null)if(ke){if(D)if(M.layerUpdates.size>0){for(const oe of M.layerUpdates){const Pe=fe.width*fe.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,oe,fe.width,fe.height,1,_e,fe.data.slice(Pe*oe,Pe*(oe+1)),0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,ie.depth,_e,fe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Te,fe.width,fe.height,ie.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,ie.depth,_e,Ie,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Te,fe.width,fe.height,ie.depth,0,_e,Ie,fe.data)}else{ke&&vt&&n.texStorage2D(t.TEXTURE_2D,pe,Te,Ne[0].width,Ne[0].height);for(let X=0,K=Ne.length;X<K;X++)fe=Ne[X],M.format!==jn?_e!==null?ke?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,fe.width,fe.height,_e,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Te,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,fe.width,fe.height,_e,Ie,fe.data):n.texImage2D(t.TEXTURE_2D,X,Te,fe.width,fe.height,0,_e,Ie,fe.data)}else if(M.isDataArrayTexture)if(ke){if(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Te,ie.width,ie.height,ie.depth),D)if(M.layerUpdates.size>0){let X;switch(Ie){case t.UNSIGNED_BYTE:switch(_e){case t.ALPHA:X=1;break;case t.LUMINANCE:X=1;break;case t.LUMINANCE_ALPHA:X=2;break;case t.RGB:X=3;break;case t.RGBA:X=4;break;default:throw new Error(`Unknown texel size for format ${_e}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:X=1;break;default:throw new Error(`Unknown texel size for type ${Ie}.`)}const K=ie.width*ie.height*X;for(const oe of M.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,ie.width,ie.height,1,_e,Ie,ie.data.slice(K*oe,K*(oe+1)));M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ie,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,_e,Ie,ie.data);else if(M.isData3DTexture)ke?(vt&&n.texStorage3D(t.TEXTURE_3D,pe,Te,ie.width,ie.height,ie.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ie,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,_e,Ie,ie.data);else if(M.isFramebufferTexture){if(vt)if(ke)n.texStorage2D(t.TEXTURE_2D,pe,Te,ie.width,ie.height);else{let X=ie.width,K=ie.height;for(let oe=0;oe<pe;oe++)n.texImage2D(t.TEXTURE_2D,oe,Te,X,K,0,_e,Ie,null),X>>=1,K>>=1}}else if(Ne.length>0){if(ke&&vt){const X=$e(Ne[0]);n.texStorage2D(t.TEXTURE_2D,pe,Te,X.width,X.height)}for(let X=0,K=Ne.length;X<K;X++)fe=Ne[X],ke?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,_e,Ie,fe):n.texImage2D(t.TEXTURE_2D,X,Te,_e,Ie,fe);M.generateMipmaps=!1}else if(ke){if(vt){const X=$e(ie);n.texStorage2D(t.TEXTURE_2D,pe,Te,X.width,X.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Ie,ie)}else n.texImage2D(t.TEXTURE_2D,0,Te,_e,Ie,ie);m(M)&&u(Z),Se.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function G(R,M,H){if(M.image.length!==6)return;const Z=ye(R,M),J=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const ee=i.get(J);if(J.version!==ee.__version||Z===!0){n.activeTexture(t.TEXTURE0+H);const Se=Ze.getPrimaries(Ze.workingColorSpace),ce=M.colorSpace===Ci?null:Ze.getPrimaries(M.colorSpace),ue=M.colorSpace===Ci||Se===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let K=0;K<6;K++)!Le&&!ie?_e[K]=x(M.image[K],!0,r.maxCubemapSize):_e[K]=ie?M.image[K].image:M.image[K],_e[K]=be(M,_e[K]);const Ie=_e[0],Te=s.convert(M.format,M.colorSpace),fe=s.convert(M.type),Ne=g(M.internalFormat,Te,fe,M.colorSpace),ke=M.isVideoTexture!==!0,vt=ee.__version===void 0||Z===!0,D=J.dataReady;let pe=y(M,Ie);se(t.TEXTURE_CUBE_MAP,M);let X;if(Le){ke&&vt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ne,Ie.width,Ie.height);for(let K=0;K<6;K++){X=_e[K].mipmaps;for(let oe=0;oe<X.length;oe++){const Pe=X[oe];M.format!==jn?Te!==null?ke?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,Pe.width,Pe.height,Te,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,Ne,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,Pe.width,Pe.height,Te,fe,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,Ne,Pe.width,Pe.height,0,Te,fe,Pe.data)}}}else{if(X=M.mipmaps,ke&&vt){X.length>0&&pe++;const K=$e(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ne,K.width,K.height)}for(let K=0;K<6;K++)if(ie){ke?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,_e[K].width,_e[K].height,Te,fe,_e[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,_e[K].width,_e[K].height,0,Te,fe,_e[K].data);for(let oe=0;oe<X.length;oe++){const qe=X[oe].image[K].image;ke?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,qe.width,qe.height,Te,fe,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,Ne,qe.width,qe.height,0,Te,fe,qe.data)}}else{ke?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Te,fe,_e[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,Te,fe,_e[K]);for(let oe=0;oe<X.length;oe++){const Pe=X[oe];ke?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,Te,fe,Pe.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,Ne,Te,fe,Pe.image[K])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),ee.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function te(R,M,H,Z,J,ee){const Se=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),ue=g(H.internalFormat,Se,ce,H.colorSpace);if(!i.get(M).__hasExternalTextures){const ie=Math.max(1,M.width>>ee),_e=Math.max(1,M.height>>ee);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ee,ue,ie,_e,M.depth,0,Se,ce,null):n.texImage2D(J,ee,ue,ie,_e,0,Se,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Re(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,J,i.get(H).__webglTexture,0,he(M)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,J,i.get(H).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(R,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const Z=M.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,ee=v(M.stencilBuffer,J),Se=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=he(M);Re(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,ee,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,R)}else{const Z=M.textures;for(let J=0;J<Z.length;J++){const ee=Z[J],Se=s.convert(ee.format,ee.colorSpace),ce=s.convert(ee.type),ue=g(ee.internalFormat,Se,ce,ee.colorSpace),Le=he(M);H&&Re(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ue,M.width,M.height):Re(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,ue,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ue,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const Z=i.get(M.depthTexture).__webglTexture,J=he(M);if(M.depthTexture.format===us)Re(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(M.depthTexture.format===Es)Re(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ue(R){const M=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ae(M.__webglFramebuffer,R)}else if(H){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]=t.createRenderbuffer(),de(M.__webglDepthbuffer[Z],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),de(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(R,M,H){const Z=i.get(R);M!==void 0&&te(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ue(R)}function Ve(R){const M=R.texture,H=i.get(R),Z=i.get(M);R.addEventListener("dispose",C);const J=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),ee){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ce]=[];for(let ue=0;ue<M.mipmaps.length;ue++)H.__webglFramebuffer[ce][ue]=t.createFramebuffer()}else H.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)H.__webglFramebuffer[ce]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ce=0,ue=J.length;ce<ue;ce++){const Le=i.get(J[ce]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Re(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){const ue=J[ce];H.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ce]);const Le=s.convert(ue.format,ue.colorSpace),ie=s.convert(ue.type),_e=g(ue.internalFormat,Le,ie,ue.colorSpace,R.isXRRenderTarget===!0),Ie=he(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,_e,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,H.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),de(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),se(t.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)te(H.__webglFramebuffer[ce][ue],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else te(H.__webglFramebuffer[ce],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ce=0,ue=J.length;ce<ue;ce++){const Le=J[ce],ie=i.get(Le);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),se(t.TEXTURE_2D,Le),te(H.__webglFramebuffer,R,Le,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(Le)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Z.__webglTexture),se(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)te(H.__webglFramebuffer[ue],R,M,t.COLOR_ATTACHMENT0,ce,ue);else te(H.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ce,0);m(M)&&u(ce),n.unbindTexture()}R.depthBuffer&&Ue(R)}function I(R){const M=R.textures;for(let H=0,Z=M.length;H<Z;H++){const J=M[H];if(m(J)){const ee=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(J).__webglTexture;n.bindTexture(ee,Se),u(ee),n.unbindTexture()}}}const Ge=[],We=[];function it(R){if(R.samples>0){if(Re(R)===!1){const M=R.textures,H=R.width,Z=R.height;let J=t.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(R),ce=M.length>1;if(ce)for(let ue=0;ue<M.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ue]);const Le=i.get(M[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,H,Z,0,0,H,Z,J,t.NEAREST),l===!0&&(Ge.length=0,We.length=0,Ge.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ge.push(ee),We.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,We)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ge))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ue=0;ue<M.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ue]);const Le=i.get(M[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function he(R){return Math.min(r.maxSamples,R.samples)}function Re(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function we(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function be(R,M){const H=R.colorSpace,Z=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==$i&&H!==Ci&&(Ze.getTransfer(H)===ot?(Z!==jn||J!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function $e(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=De,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Re}function dT(t,e){function n(i,r=Ci){let s;const o=Ze.getTransfer(r);if(i===Wi)return t.UNSIGNED_BYTE;if(i===D0)return t.UNSIGNED_SHORT_4_4_4_4;if(i===N0)return t.UNSIGNED_SHORT_5_5_5_1;if(i===qy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===jy)return t.BYTE;if(i===Xy)return t.SHORT;if(i===hl)return t.UNSIGNED_SHORT;if(i===I0)return t.INT;if(i===Ss)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===zl)return t.HALF_FLOAT;if(i===Yy)return t.ALPHA;if(i===$y)return t.RGB;if(i===jn)return t.RGBA;if(i===Ky)return t.LUMINANCE;if(i===Zy)return t.LUMINANCE_ALPHA;if(i===us)return t.DEPTH_COMPONENT;if(i===Es)return t.DEPTH_STENCIL;if(i===Qy)return t.RED;if(i===U0)return t.RED_INTEGER;if(i===Jy)return t.RG;if(i===F0)return t.RG_INTEGER;if(i===O0)return t.RGBA_INTEGER;if(i===Sc||i===Mc||i===Ec||i===wc)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Sc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Sc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dh||i===Nh||i===Uh||i===Fh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Dh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oh||i===kh||i===zh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Oh||i===kh)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bh||i===Hh||i===Vh||i===Gh||i===Wh||i===jh||i===Xh||i===qh||i===Yh||i===$h||i===Kh||i===Zh||i===Qh||i===Jh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$h)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tc||i===ep||i===tp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Tc)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ep)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eS||i===np||i===ip||i===rp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Tc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===np)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ip)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ms?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class fT extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pr extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hT={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new pr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const pT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ji({vertexShader:pT,fragmentShader:mT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xt(new Vl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class vT extends bs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,_=null;const x=new gT,m=n.getContextAttributes();let u=null,g=null;const v=[],y=[],b=new Be;let C=null;const A=new Jt;A.layers.enable(1),A.viewport=new ut;const P=new Jt;P.layers.enable(2),P.viewport=new ut;const w=[A,P],S=new fT;S.layers.enable(1),S.layers.enable(2);let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=v[G];return te===void 0&&(te=new Qc,v[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=v[G];return te===void 0&&(te=new Qc,v[G]=te),te.getGripSpace()},this.getHand=function(G){let te=v[G];return te===void 0&&(te=new Qc,v[G]=te),te.getHandSpace()};function B(G){const te=y.indexOf(G.inputSource);if(te===-1)return;const de=v[te];de!==void 0&&(de.update(G.inputSource,G.frame,c||o),de.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",W);for(let G=0;G<v.length;G++){const te=y[G];te!==null&&(y[G]=null,v[G].disconnect(te))}L=null,V=null,x.reset(),e.setRenderTarget(u),p=null,f=null,h=null,r=null,g=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",q),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Mr(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,de=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?Es:us,de=m.stencil?Ms:Ss);const Ue={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Mr(f.textureWidth,f.textureHeight,{format:jn,type:Wi,depthTexture:new Z0(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(G){for(let te=0;te<G.removed.length;te++){const de=G.removed[te],ae=y.indexOf(de);ae>=0&&(y[ae]=null,v[ae].disconnect(de))}for(let te=0;te<G.added.length;te++){const de=G.added[te];let ae=y.indexOf(de);if(ae===-1){for(let De=0;De<v.length;De++)if(De>=y.length){y.push(de),ae=De;break}else if(y[De]===null){y[De]=de,ae=De;break}if(ae===-1)break}const Ue=v[ae];Ue&&Ue.connect(de)}}const j=new U,$=new U;function N(G,te,de){j.setFromMatrixPosition(te.matrixWorld),$.setFromMatrixPosition(de.matrixWorld);const ae=j.distanceTo($),Ue=te.projectionMatrix.elements,De=de.projectionMatrix.elements,Ve=Ue[14]/(Ue[10]-1),I=Ue[14]/(Ue[10]+1),Ge=(Ue[9]+1)/Ue[5],We=(Ue[9]-1)/Ue[5],it=(Ue[8]-1)/Ue[0],he=(De[8]+1)/De[0],Re=Ve*it,we=Ve*he,be=ae/(-it+he),$e=be*-it;te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX($e),G.translateZ(be),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const R=Ve+be,M=I+be,H=Re-$e,Z=we+(ae-$e),J=Ge*I/M*R,ee=We*I/M*R;G.projectionMatrix.makePerspective(H,Z,J,ee,R,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Y(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;x.texture!==null&&(G.near=x.depthNear,G.far=x.depthFar),S.near=P.near=A.near=G.near,S.far=P.far=A.far=G.far,(L!==S.near||V!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,V=S.far,A.near=L,A.far=V,P.near=L,P.far=V,A.updateProjectionMatrix(),P.updateProjectionMatrix(),G.updateProjectionMatrix());const te=G.parent,de=S.cameras;Y(S,te);for(let ae=0;ae<de.length;ae++)Y(de[ae],te);de.length===2?N(S,A,P):S.projectionMatrix.copy(A.projectionMatrix),Q(G,S,te)};function Q(G,te,de){de===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=nd*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let se=null;function ye(G,te){if(d=te.getViewerPose(c||o),_=te,d!==null){const de=d.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ae=!1;de.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let De=0;De<de.length;De++){const Ve=de[De];let I=null;if(p!==null)I=p.getViewport(Ve);else{const We=h.getViewSubImage(f,Ve);I=We.viewport,De===0&&(e.setRenderTargetTextures(g,We.colorTexture,f.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(g))}let Ge=w[De];Ge===void 0&&(Ge=new Jt,Ge.layers.enable(De),Ge.viewport=new ut,w[De]=Ge),Ge.matrix.fromArray(Ve.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ve.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(I.x,I.y,I.width,I.height),De===0&&(S.matrix.copy(Ge.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push(Ge)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const De=h.getDepthInformation(de[0]);De&&De.isValid&&De.texture&&x.init(e,De,r.renderState)}}for(let de=0;de<v.length;de++){const ae=y[de],Ue=v[de];ae!==null&&Ue!==void 0&&Ue.update(ae,te,c||o)}se&&se(G,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const He=new K0;He.setAnimationLoop(ye),this.setAnimationLoop=function(G){se=G},this.dispose=function(){}}}const ir=new Yn,_T=new lt;function xT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,q0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,g,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===sn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===sn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),v=g.envMap,y=g.envMapRotation;v&&(m.envMap.value=v,ir.copy(y),ir.x*=-1,ir.y*=-1,ir.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),m.envMapRotation.value.setFromMatrix4(_T.makeRotationFromEuler(ir)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===sn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const y=v.program;i.uniformBlockBinding(g,y)}function c(g,v){let y=r[g.id];y===void 0&&(_(g),y=d(g),r[g.id]=y,g.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(g,b);const C=e.render.frame;s[g.id]!==C&&(f(g),s[g.id]=C)}function d(g){const v=h();g.__bindingPointIndex=v;const y=t.createBuffer(),b=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const v=r[g.id],y=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,A=y.length;C<A;C++){const P=Array.isArray(y[C])?y[C]:[y[C]];for(let w=0,S=P.length;w<S;w++){const L=P[w];if(p(L,C,w,b)===!0){const V=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let W=0;W<B.length;W++){const j=B[W],$=x(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,V+q,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,q),q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,y,b){const C=g.value,A=v+"_"+y;if(b[A]===void 0)return typeof C=="number"||typeof C=="boolean"?b[A]=C:b[A]=C.clone(),!0;{const P=b[A];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return b[A]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function _(g){const v=g.uniforms;let y=0;const b=16;for(let A=0,P=v.length;A<P;A++){const w=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,L=w.length;S<L;S++){const V=w[S],B=Array.isArray(V.value)?V.value:[V.value];for(let q=0,W=B.length;q<W;q++){const j=B[q],$=x(j),N=y%b;N!==0&&b-N<$.boundary&&(y+=b-N),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=$.storage}}}const C=y%b;return C>0&&(y+=b-C),g.__size=y,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class iv{constructor(e={}){const{canvas:n=fS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=Bi,this.toneMappingExposure=1;const v=this;let y=!1,b=0,C=0,A=null,P=-1,w=null;const S=new ut,L=new ut;let V=null;const B=new ze(0);let q=0,W=n.width,j=n.height,$=1,N=null,Y=null;const Q=new ut(0,0,W,j),se=new ut(0,0,W,j);let ye=!1;const He=new lf;let G=!1,te=!1;const de=new lt,ae=new U,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Ve(){return A===null?$:1}let I=i;function Ge(E,F){return n.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rf}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",X,!1),n.addEventListener("webglcontextcreationerror",K,!1),I===null){const F="webgl2";if(I=Ge(F,E),I===null)throw Ge(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let We,it,he,Re,we,be,$e,R,M,H,Z,J,ee,Se,ce,ue,Le,ie,_e,Ie,Te,fe,Ne,ke;function vt(){We=new bE(I),We.init(),fe=new dT(I,We),it=new ME(I,We,e,fe),he=new cT(I),Re=new IE(I),we=new $w,be=new uT(I,We,he,we,it,fe,Re),$e=new wE(v),R=new RE(v),M=new kS(I),Ne=new yE(I,M),H=new PE(I,M,Re,Ne),Z=new NE(I,H,M,Re),_e=new DE(I,it,be),ue=new EE(we),J=new Yw(v,$e,R,We,it,Ne,ue),ee=new xT(v,we),Se=new Zw,ce=new iT(We),ie=new xE(v,$e,R,he,Z,f,l),Le=new lT(v,Z,it),ke=new yT(I,Re,it,he),Ie=new SE(I,We,Re),Te=new LE(I,We,Re),Re.programs=J.programs,v.capabilities=it,v.extensions=We,v.properties=we,v.renderLists=Se,v.shadowMap=Le,v.state=he,v.info=Re}vt();const D=new vT(v,I);this.xr=D,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=We.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=We.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(W,j,!1))},this.getSize=function(E){return E.set(W,j)},this.setSize=function(E,F,k=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,j=F,n.width=Math.floor(E*$),n.height=Math.floor(F*$),k===!0&&(n.style.width=E+"px",n.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(W*$,j*$).floor()},this.setDrawingBufferSize=function(E,F,k){W=E,j=F,$=k,n.width=Math.floor(E*k),n.height=Math.floor(F*k),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,F,k,z){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,F,k,z),he.viewport(S.copy(Q).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,F,k,z){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,F,k,z),he.scissor(L.copy(se).multiplyScalar($).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(E){he.setScissorTest(ye=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(E=!0,F=!0,k=!0){let z=0;if(E){let O=!1;if(A!==null){const re=A.texture.format;O=re===O0||re===F0||re===U0}if(O){const re=A.texture.type,me=re===Wi||re===Ss||re===hl||re===Ms||re===D0||re===N0,ve=ie.getClearColor(),xe=ie.getClearAlpha(),Ae=ve.r,Ce=ve.g,Ee=ve.b;me?(p[0]=Ae,p[1]=Ce,p[2]=Ee,p[3]=xe,I.clearBufferuiv(I.COLOR,0,p)):(_[0]=Ae,_[1]=Ce,_[2]=Ee,_[3]=xe,I.clearBufferiv(I.COLOR,0,_))}else z|=I.COLOR_BUFFER_BIT}F&&(z|=I.DEPTH_BUFFER_BIT),k&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",X,!1),n.removeEventListener("webglcontextcreationerror",K,!1),Se.dispose(),ce.dispose(),we.dispose(),$e.dispose(),R.dispose(),Z.dispose(),Ne.dispose(),ke.dispose(),J.dispose(),D.dispose(),D.removeEventListener("sessionstart",On),D.removeEventListener("sessionend",kn),Ki.stop()};function pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=Re.autoReset,F=Le.enabled,k=Le.autoUpdate,z=Le.needsUpdate,O=Le.type;vt(),Re.autoReset=E,Le.enabled=F,Le.autoUpdate=k,Le.needsUpdate=z,Le.type=O}function K(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){const F=E.target;F.removeEventListener("dispose",oe),Pe(F)}function Pe(E){qe(E),we.remove(E)}function qe(E){const F=we.get(E).programs;F!==void 0&&(F.forEach(function(k){J.releaseProgram(k)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,k,z,O,re){F===null&&(F=Ue);const me=O.isMesh&&O.matrixWorld.determinant()<0,ve=dv(E,F,k,z,O);he.setMaterial(z,me);let xe=k.index,Ae=1;if(z.wireframe===!0){if(xe=H.getWireframeAttribute(k),xe===void 0)return;Ae=2}const Ce=k.drawRange,Ee=k.attributes.position;let Ye=Ce.start*Ae,pt=(Ce.start+Ce.count)*Ae;re!==null&&(Ye=Math.max(Ye,re.start*Ae),pt=Math.min(pt,(re.start+re.count)*Ae)),xe!==null?(Ye=Math.max(Ye,0),pt=Math.min(pt,xe.count)):Ee!=null&&(Ye=Math.max(Ye,0),pt=Math.min(pt,Ee.count));const mt=pt-Ye;if(mt<0||mt===1/0)return;Ne.setup(O,z,ve,k,xe);let an,Ke=Ie;if(xe!==null&&(an=M.get(xe),Ke=Te,Ke.setIndex(an)),O.isMesh)z.wireframe===!0?(he.setLineWidth(z.wireframeLinewidth*Ve()),Ke.setMode(I.LINES)):Ke.setMode(I.TRIANGLES);else if(O.isLine){let Me=z.linewidth;Me===void 0&&(Me=1),he.setLineWidth(Me*Ve()),O.isLineSegments?Ke.setMode(I.LINES):O.isLineLoop?Ke.setMode(I.LINE_LOOP):Ke.setMode(I.LINE_STRIP)}else O.isPoints?Ke.setMode(I.POINTS):O.isSprite&&Ke.setMode(I.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?Ke.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):Ke.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)Ke.renderInstances(Ye,mt,O.count);else if(k.isInstancedBufferGeometry){const Me=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Vt=Math.min(k.instanceCount,Me);Ke.renderInstances(Ye,mt,Vt)}else Ke.render(Ye,mt)};function _t(E,F,k){E.transparent===!0&&E.side===ri&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,Fo(E,F,k),E.side=Gi,E.needsUpdate=!0,Fo(E,F,k),E.side=ri):Fo(E,F,k)}this.compile=function(E,F,k=null){k===null&&(k=E),m=ce.get(k),m.init(F),g.push(m),k.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),E!==k&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const z=new Set;return E.traverse(function(O){const re=O.material;if(re)if(Array.isArray(re))for(let me=0;me<re.length;me++){const ve=re[me];_t(ve,k,O),z.add(ve)}else _t(re,k,O),z.add(re)}),g.pop(),m=null,z},this.compileAsync=function(E,F,k=null){const z=this.compile(E,F,k);return new Promise(O=>{function re(){if(z.forEach(function(me){we.get(me).currentProgram.isReady()&&z.delete(me)}),z.size===0){O(E);return}setTimeout(re,10)}We.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let At=null;function et(E){At&&At(E)}function On(){Ki.stop()}function kn(){Ki.start()}const Ki=new K0;Ki.setAnimationLoop(et),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(E){At=E,D.setAnimationLoop(E),E===null?Ki.stop():Ki.start()},D.addEventListener("sessionstart",On),D.addEventListener("sessionend",kn),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(F),F=D.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,F,A),m=ce.get(E,g.length),m.init(F),g.push(m),de.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),He.setFromProjectionMatrix(de),te=this.localClippingEnabled,G=ue.init(this.clippingPlanes,te),x=Se.get(E,u.length),x.init(),u.push(x),D.enabled===!0&&D.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&Wl(re,F,-1/0,v.sortObjects)}Wl(E,F,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(N,Y),De=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,De&&ie.addToRenderList(x,E),this.info.render.frame++,G===!0&&ue.beginShadows();const k=m.state.shadowsArray;Le.render(k,E,F),G===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=x.opaque,O=x.transmissive;if(m.setupLights(),F.isArrayCamera){const re=F.cameras;if(O.length>0)for(let me=0,ve=re.length;me<ve;me++){const xe=re[me];pf(z,O,E,xe)}De&&ie.render(E);for(let me=0,ve=re.length;me<ve;me++){const xe=re[me];hf(x,E,xe,xe.viewport)}}else O.length>0&&pf(z,O,E,F),De&&ie.render(E),hf(x,E,F);A!==null&&(be.updateMultisampleRenderTarget(A),be.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,F),Ne.resetDefaultState(),P=-1,w=null,g.pop(),g.length>0?(m=g[g.length-1],G===!0&&ue.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Wl(E,F,k,z){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||He.intersectsSprite(E)){z&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(de);const me=Z.update(E),ve=E.material;ve.visible&&x.push(E,me,ve,k,ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||He.intersectsObject(E))){const me=Z.update(E),ve=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ae.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),ae.copy(me.boundingSphere.center)),ae.applyMatrix4(E.matrixWorld).applyMatrix4(de)),Array.isArray(ve)){const xe=me.groups;for(let Ae=0,Ce=xe.length;Ae<Ce;Ae++){const Ee=xe[Ae],Ye=ve[Ee.materialIndex];Ye&&Ye.visible&&x.push(E,me,Ye,k,ae.z,Ee)}}else ve.visible&&x.push(E,me,ve,k,ae.z,null)}}const re=E.children;for(let me=0,ve=re.length;me<ve;me++)Wl(re[me],F,k,z)}function hf(E,F,k,z){const O=E.opaque,re=E.transmissive,me=E.transparent;m.setupLightsView(k),G===!0&&ue.setGlobalState(v.clippingPlanes,k),z&&he.viewport(S.copy(z)),O.length>0&&Uo(O,F,k),re.length>0&&Uo(re,F,k),me.length>0&&Uo(me,F,k),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function pf(E,F,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Mr(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?zl:Wi,minFilter:hr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const re=m.state.transmissionRenderTarget[z.id],me=z.viewport||S;re.setSize(me.z,me.w);const ve=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(B),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),De?ie.render(k):v.clear();const xe=v.toneMapping;v.toneMapping=Bi;const Ae=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),G===!0&&ue.setGlobalState(v.clippingPlanes,z),Uo(E,k,z),be.updateMultisampleRenderTarget(re),be.updateRenderTargetMipmap(re),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ee=0,Ye=F.length;Ee<Ye;Ee++){const pt=F[Ee],mt=pt.object,an=pt.geometry,Ke=pt.material,Me=pt.group;if(Ke.side===ri&&mt.layers.test(z.layers)){const Vt=Ke.side;Ke.side=sn,Ke.needsUpdate=!0,mf(mt,k,z,an,Ke,Me),Ke.side=Vt,Ke.needsUpdate=!0,Ce=!0}}Ce===!0&&(be.updateMultisampleRenderTarget(re),be.updateRenderTargetMipmap(re))}v.setRenderTarget(ve),v.setClearColor(B,q),Ae!==void 0&&(z.viewport=Ae),v.toneMapping=xe}function Uo(E,F,k){const z=F.isScene===!0?F.overrideMaterial:null;for(let O=0,re=E.length;O<re;O++){const me=E[O],ve=me.object,xe=me.geometry,Ae=z===null?me.material:z,Ce=me.group;ve.layers.test(k.layers)&&mf(ve,F,k,xe,Ae,Ce)}}function mf(E,F,k,z,O,re){E.onBeforeRender(v,F,k,z,O,re),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,F,k,z,E,re),O.transparent===!0&&O.side===ri&&O.forceSinglePass===!1?(O.side=sn,O.needsUpdate=!0,v.renderBufferDirect(k,F,z,O,E,re),O.side=Gi,O.needsUpdate=!0,v.renderBufferDirect(k,F,z,O,E,re),O.side=ri):v.renderBufferDirect(k,F,z,O,E,re),E.onAfterRender(v,F,k,z,O,re)}function Fo(E,F,k){F.isScene!==!0&&(F=Ue);const z=we.get(E),O=m.state.lights,re=m.state.shadowsArray,me=O.state.version,ve=J.getParameters(E,O.state,re,F,k),xe=J.getProgramCacheKey(ve);let Ae=z.programs;z.environment=E.isMeshStandardMaterial?F.environment:null,z.fog=F.fog,z.envMap=(E.isMeshStandardMaterial?R:$e).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",oe),Ae=new Map,z.programs=Ae);let Ce=Ae.get(xe);if(Ce!==void 0){if(z.currentProgram===Ce&&z.lightsStateVersion===me)return vf(E,ve),Ce}else ve.uniforms=J.getUniforms(E),E.onBuild(k,ve,v),E.onBeforeCompile(ve,v),Ce=J.acquireProgram(ve,xe),Ae.set(xe,Ce),z.uniforms=ve.uniforms;const Ee=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=ue.uniform),vf(E,ve),z.needsLights=hv(E),z.lightsStateVersion=me,z.needsLights&&(Ee.ambientLightColor.value=O.state.ambient,Ee.lightProbe.value=O.state.probe,Ee.directionalLights.value=O.state.directional,Ee.directionalLightShadows.value=O.state.directionalShadow,Ee.spotLights.value=O.state.spot,Ee.spotLightShadows.value=O.state.spotShadow,Ee.rectAreaLights.value=O.state.rectArea,Ee.ltc_1.value=O.state.rectAreaLTC1,Ee.ltc_2.value=O.state.rectAreaLTC2,Ee.pointLights.value=O.state.point,Ee.pointLightShadows.value=O.state.pointShadow,Ee.hemisphereLights.value=O.state.hemi,Ee.directionalShadowMap.value=O.state.directionalShadowMap,Ee.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ee.spotShadowMap.value=O.state.spotShadowMap,Ee.spotLightMatrix.value=O.state.spotLightMatrix,Ee.spotLightMap.value=O.state.spotLightMap,Ee.pointShadowMap.value=O.state.pointShadowMap,Ee.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Ce,z.uniformsList=null,Ce}function gf(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Ba.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function vf(E,F){const k=we.get(E);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function dv(E,F,k,z,O){F.isScene!==!0&&(F=Ue),be.resetTextureUnits();const re=F.fog,me=z.isMeshStandardMaterial?F.environment:null,ve=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:$i,xe=(z.isMeshStandardMaterial?R:$e).get(z.envMap||me),Ae=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ce=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ee=!!k.morphAttributes.position,Ye=!!k.morphAttributes.normal,pt=!!k.morphAttributes.color;let mt=Bi;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(mt=v.toneMapping);const an=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ke=an!==void 0?an.length:0,Me=we.get(z),Vt=m.state.lights;if(G===!0&&(te===!0||E!==w)){const gn=E===w&&z.id===P;ue.setState(z,E,gn)}let tt=!1;z.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Vt.state.version||Me.outputColorSpace!==ve||O.isBatchedMesh&&Me.batching===!1||!O.isBatchedMesh&&Me.batching===!0||O.isBatchedMesh&&Me.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Me.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Me.instancing===!1||!O.isInstancedMesh&&Me.instancing===!0||O.isSkinnedMesh&&Me.skinning===!1||!O.isSkinnedMesh&&Me.skinning===!0||O.isInstancedMesh&&Me.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Me.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Me.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Me.instancingMorph===!1&&O.morphTexture!==null||Me.envMap!==xe||z.fog===!0&&Me.fog!==re||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ue.numPlanes||Me.numIntersection!==ue.numIntersection)||Me.vertexAlphas!==Ae||Me.vertexTangents!==Ce||Me.morphTargets!==Ee||Me.morphNormals!==Ye||Me.morphColors!==pt||Me.toneMapping!==mt||Me.morphTargetsCount!==Ke)&&(tt=!0):(tt=!0,Me.__version=z.version);let $n=Me.currentProgram;tt===!0&&($n=Fo(z,F,O));let Oo=!1,Zi=!1,jl=!1;const Ct=$n.getUniforms(),pi=Me.uniforms;if(he.useProgram($n.program)&&(Oo=!0,Zi=!0,jl=!0),z.id!==P&&(P=z.id,Zi=!0),Oo||w!==E){Ct.setValue(I,"projectionMatrix",E.projectionMatrix),Ct.setValue(I,"viewMatrix",E.matrixWorldInverse);const gn=Ct.map.cameraPosition;gn!==void 0&&gn.setValue(I,ae.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&Ct.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ct.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,Zi=!0,jl=!0)}if(O.isSkinnedMesh){Ct.setOptional(I,O,"bindMatrix"),Ct.setOptional(I,O,"bindMatrixInverse");const gn=O.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ct.setValue(I,"boneTexture",gn.boneTexture,be))}O.isBatchedMesh&&(Ct.setOptional(I,O,"batchingTexture"),Ct.setValue(I,"batchingTexture",O._matricesTexture,be),Ct.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&Ct.setValue(I,"batchingColorTexture",O._colorsTexture,be));const Xl=k.morphAttributes;if((Xl.position!==void 0||Xl.normal!==void 0||Xl.color!==void 0)&&_e.update(O,k,$n),(Zi||Me.receiveShadow!==O.receiveShadow)&&(Me.receiveShadow=O.receiveShadow,Ct.setValue(I,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(pi.envMap.value=xe,pi.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&F.environment!==null&&(pi.envMapIntensity.value=F.environmentIntensity),Zi&&(Ct.setValue(I,"toneMappingExposure",v.toneMappingExposure),Me.needsLights&&fv(pi,jl),re&&z.fog===!0&&ee.refreshFogUniforms(pi,re),ee.refreshMaterialUniforms(pi,z,$,j,m.state.transmissionRenderTarget[E.id]),Ba.upload(I,gf(Me),pi,be)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ba.upload(I,gf(Me),pi,be),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ct.setValue(I,"center",O.center),Ct.setValue(I,"modelViewMatrix",O.modelViewMatrix),Ct.setValue(I,"normalMatrix",O.normalMatrix),Ct.setValue(I,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const gn=z.uniformsGroups;for(let ql=0,pv=gn.length;ql<pv;ql++){const _f=gn[ql];ke.update(_f,$n),ke.bind(_f,$n)}}return $n}function fv(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function hv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,F,k){we.get(E.texture).__webglTexture=F,we.get(E.depthTexture).__webglTexture=k;const z=we.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const k=we.get(E);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,k=0){A=E,b=F,C=k;let z=!0,O=null,re=!1,me=!1;if(E){const xe=we.get(E);xe.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(I.FRAMEBUFFER,null),z=!1):xe.__webglFramebuffer===void 0?be.setupRenderTarget(E):xe.__hasExternalTextures&&be.rebindTextures(E,we.get(E.texture).__webglTexture,we.get(E.depthTexture).__webglTexture);const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(me=!0);const Ce=we.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[F])?O=Ce[F][k]:O=Ce[F],re=!0):E.samples>0&&be.useMultisampledRTT(E)===!1?O=we.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[k]:O=Ce,S.copy(E.viewport),L.copy(E.scissor),V=E.scissorTest}else S.copy(Q).multiplyScalar($).floor(),L.copy(se).multiplyScalar($).floor(),V=ye;if(he.bindFramebuffer(I.FRAMEBUFFER,O)&&z&&he.drawBuffers(E,O),he.viewport(S),he.scissor(L),he.setScissorTest(V),re){const xe=we.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,k)}else if(me){const xe=we.get(E.texture),Ae=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,xe.__webglTexture,k||0,Ae)}P=-1},this.readRenderTargetPixels=function(E,F,k,z,O,re,me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(ve=ve[me]),ve){he.bindFramebuffer(I.FRAMEBUFFER,ve);try{const xe=E.texture,Ae=xe.format,Ce=xe.type;if(!it.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-z&&k>=0&&k<=E.height-O&&I.readPixels(F,k,z,O,fe.convert(Ae),fe.convert(Ce),re)}finally{const xe=A!==null?we.get(A).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(E,F,k,z,O,re,me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(ve=ve[me]),ve){he.bindFramebuffer(I.FRAMEBUFFER,ve);try{const xe=E.texture,Ae=xe.format,Ce=xe.type;if(!it.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-z&&k>=0&&k<=E.height-O){const Ee=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ee),I.bufferData(I.PIXEL_PACK_BUFFER,re.byteLength,I.STREAM_READ),I.readPixels(F,k,z,O,fe.convert(Ae),fe.convert(Ce),0),I.flush();const Ye=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await hS(I,Ye,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Ee),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,re)}finally{I.deleteBuffer(Ee),I.deleteSync(Ye)}return re}}finally{const xe=A!==null?we.get(A).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(E,F=null,k=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-k),O=Math.floor(E.image.width*z),re=Math.floor(E.image.height*z),me=F!==null?F.x:0,ve=F!==null?F.y:0;be.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,me,ve,O,re),he.unbindTexture()},this.copyTextureToTexture=function(E,F,k=null,z=null,O=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,k=null);let re,me,ve,xe,Ae,Ce;k!==null?(re=k.max.x-k.min.x,me=k.max.y-k.min.y,ve=k.min.x,xe=k.min.y):(re=E.image.width,me=E.image.height,ve=0,xe=0),z!==null?(Ae=z.x,Ce=z.y):(Ae=0,Ce=0);const Ee=fe.convert(F.format),Ye=fe.convert(F.type);be.setTexture2D(F,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const pt=I.getParameter(I.UNPACK_ROW_LENGTH),mt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),an=I.getParameter(I.UNPACK_SKIP_PIXELS),Ke=I.getParameter(I.UNPACK_SKIP_ROWS),Me=I.getParameter(I.UNPACK_SKIP_IMAGES),Vt=E.isCompressedTexture?E.mipmaps[O]:E.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Vt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Vt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ve),I.pixelStorei(I.UNPACK_SKIP_ROWS,xe),E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,Ae,Ce,re,me,Ee,Ye,Vt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,Ae,Ce,Vt.width,Vt.height,Ee,Vt.data):I.texSubImage2D(I.TEXTURE_2D,O,Ae,Ce,Ee,Ye,Vt),I.pixelStorei(I.UNPACK_ROW_LENGTH,pt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,an),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Me),O===0&&F.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(E,F,k=null,z=null,O=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0);let re,me,ve,xe,Ae,Ce,Ee,Ye,pt;const mt=E.isCompressedTexture?E.mipmaps[O]:E.image;k!==null?(re=k.max.x-k.min.x,me=k.max.y-k.min.y,ve=k.max.z-k.min.z,xe=k.min.x,Ae=k.min.y,Ce=k.min.z):(re=mt.width,me=mt.height,ve=mt.depth,xe=0,Ae=0,Ce=0),z!==null?(Ee=z.x,Ye=z.y,pt=z.z):(Ee=0,Ye=0,pt=0);const an=fe.convert(F.format),Ke=fe.convert(F.type);let Me;if(F.isData3DTexture)be.setTexture3D(F,0),Me=I.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)be.setTexture2DArray(F,0),Me=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Vt=I.getParameter(I.UNPACK_ROW_LENGTH),tt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),$n=I.getParameter(I.UNPACK_SKIP_PIXELS),Oo=I.getParameter(I.UNPACK_SKIP_ROWS),Zi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,mt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ae),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ce),E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Me,O,Ee,Ye,pt,re,me,ve,an,Ke,mt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Me,O,Ee,Ye,pt,re,me,ve,an,mt.data):I.texSubImage3D(Me,O,Ee,Ye,pt,re,me,ve,an,Ke,mt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Vt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$n),I.pixelStorei(I.UNPACK_SKIP_ROWS,Oo),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zi),O===0&&F.generateMipmaps&&I.generateMipmap(Me),he.unbindTexture()},this.initRenderTarget=function(E){we.get(E).__webglFramebuffer===void 0&&be.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?be.setTextureCube(E,0):E.isData3DTexture?be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?be.setTexture2DArray(E,0):be.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){b=0,C=0,A=null,he.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===sf?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===Bl?"display-p3":"srgb"}}class uf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=n}clone(){return new uf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rv extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class df extends Tr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xl=new U,yl=new U,$p=new lt,Ws=new Hl,Ea=new Do,Jc=new U,Kp=new U;class sv extends Bt{constructor(e=new on,n=new df){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)xl.fromBufferAttribute(n,r-1),yl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=xl.distanceTo(yl);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(r),Ea.radius+=s,e.ray.intersectsSphere(Ea)===!1)return;$p.copy(r).invert(),Ws.copy(e.ray).applyMatrix4($p);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const u=d.getX(x),g=d.getX(x+1),v=wa(this,e,Ws,l,u,g);v&&n.push(v)}if(this.isLineLoop){const x=d.getX(_-1),m=d.getX(p),u=wa(this,e,Ws,l,x,m);u&&n.push(u)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const u=wa(this,e,Ws,l,x,x+1);u&&n.push(u)}if(this.isLineLoop){const x=wa(this,e,Ws,l,_-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function wa(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(xl.fromBufferAttribute(o,r),yl.fromBufferAttribute(o,s),n.distanceSqToSegment(xl,yl,Jc,Kp)>i)return;Jc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Jc);if(!(l<e.near||l>e.far))return{distance:l,point:Kp.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const Zp=new U,Qp=new U;class ST extends sv{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Zp.fromBufferAttribute(n,r),Qp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Zp.distanceTo(Qp);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ov extends Tr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jp=new lt,rd=new Hl,Ta=new Do,Aa=new U;class MT extends Bt{constructor(e=new on,n=new ov){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),Ta.radius+=s,e.ray.intersectsSphere(Ta)===!1)return;Jp.copy(r).invert(),rd.copy(e.ray).applyMatrix4(Jp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,x=p;_<x;_++){const m=c.getX(_);Aa.fromBufferAttribute(h,m),em(Aa,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,x=p;_<x;_++)Aa.fromBufferAttribute(h,_),em(Aa,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function em(t,e,n,i,r,s,o){const a=rd.distanceSqToPoint(t);if(a<n){const l=new U;rd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ET extends Yt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ff extends on{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(s.slice(),3)),this.setAttribute("uv",new Dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const v=new U,y=new U,b=new U;for(let C=0;C<n.length;C+=3)p(n[C+0],v),p(n[C+1],y),p(n[C+2],b),l(v,y,b,g)}function l(g,v,y,b){const C=b+1,A=[];for(let P=0;P<=C;P++){A[P]=[];const w=g.clone().lerp(y,P/C),S=v.clone().lerp(y,P/C),L=C-P;for(let V=0;V<=L;V++)V===0&&P===C?A[P][V]=w:A[P][V]=w.clone().lerp(S,V/L)}for(let P=0;P<C;P++)for(let w=0;w<2*(C-P)-1;w++){const S=Math.floor(w/2);w%2===0?(f(A[P][S+1]),f(A[P+1][S]),f(A[P][S])):(f(A[P][S+1]),f(A[P+1][S+1]),f(A[P+1][S]))}}function c(g){const v=new U;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(g),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function d(){const g=new U;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const y=m(g)/2/Math.PI+.5,b=u(g)/Math.PI+.5;o.push(y,1-b)}_(),h()}function h(){for(let g=0;g<o.length;g+=6){const v=o[g+0],y=o[g+2],b=o[g+4],C=Math.max(v,y,b),A=Math.min(v,y,b);C>.9&&A<.1&&(v<.2&&(o[g+0]+=1),y<.2&&(o[g+2]+=1),b<.2&&(o[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function p(g,v){const y=g*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function _(){const g=new U,v=new U,y=new U,b=new U,C=new Be,A=new Be,P=new Be;for(let w=0,S=0;w<s.length;w+=9,S+=6){g.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),y.set(s[w+6],s[w+7],s[w+8]),C.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),b.copy(g).add(v).add(y).divideScalar(3);const L=m(b);x(C,S+0,g,L),x(A,S+2,v,L),x(P,S+4,y,L)}}function x(g,v,y,b){b<0&&g.x===1&&(o[v]=g.x-1),y.x===0&&y.z===0&&(o[v]=b/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ff(e.vertices,e.indices,e.radius,e.details)}}class Ts extends ff{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ts(e.radius,e.detail)}}class Sl extends on{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new U,h=new U,f=new U;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const x=_/r*s,m=p/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(x),h.y=(e+n*Math.cos(m))*Math.sin(x),h.z=n*Math.sin(m),a.push(h.x,h.y,h.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const x=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,g=(r+1)*p+_;o.push(x,m,g),o.push(m,u,g)}this.setIndex(o),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class oo extends Tr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k0,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wT extends oo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class av extends Bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const eu=new lt,tm=new U,nm=new U;class TT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lf,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;tm.setFromMatrixPosition(e.matrixWorld),n.position.copy(tm),nm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(nm),n.updateMatrixWorld(),eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(eu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const im=new lt,js=new U,tu=new U;class AT extends TT{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),js.setFromMatrixPosition(e.matrixWorld),i.position.copy(js),tu.copy(i.position),tu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(tu),i.updateMatrixWorld(),r.makeTranslation(-js.x,-js.y,-js.z),im.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(im)}}class sd extends av{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new AT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lv extends av{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class cv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=rm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function rm(){return(typeof performance>"u"?Date:performance).now()}const sm=new lt;class CT{constructor(e,n,i=0,r=1/0){this.ray=new Hl(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new of,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return sm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sm),this}intersectObject(e,n=!0,i=[]){return od(e,this,i,n),i.sort(om),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)od(e[r],this,i,n);return i.sort(om),i}}function om(t,e){return t.distance-e.distance}function od(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)od(s[o],e,n,!0)}}class RT extends ST{constructor(e=10,n=10,i=4473924,r=8947848){i=new ze(i),r=new ze(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let f=0,p=0,_=-a;f<=n;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const x=f===s?i:r;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}const d=new on;d.setAttribute("position",new Dt(l,3)),d.setAttribute("color",new Dt(c,3));const h=new df({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rf);const uv="/portfolio-Mani-Kethan-Reddy/assets/profile-BcRKD7AW.jpg";function bT(){const t=nt.useRef(null),[e,n]=nt.useState(0),i=["Computer Science (AI & ML) Engineer","LLM & RAG Systems Architect","Full-Stack AI Application Developer","Machine Learning & PyTorch Specialist"],r=s=>"/portfolio-Mani-Kethan-Reddy/"+s;return nt.useEffect(()=>{const s=setInterval(()=>{n(o=>(o+1)%i.length)},3e3);return()=>clearInterval(s)},[]),nt.useEffect(()=>{const s=t.current;if(!s)return;s.innerHTML="";const o=new rv;o.fog=new uf(593174,.018);const a=new Jt(60,s.clientWidth/s.clientHeight,.1,1e3);a.position.set(0,.5,7.5);const l=new iv({antialias:!0,alpha:!0});l.setSize(s.clientWidth,s.clientHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.toneMapping=P0,l.toneMappingExposure=1.3,s.appendChild(l.domElement);const c=new lv(16777215,1.4);o.add(c);const d=new sd(440020,8,35);d.position.set(4,4,5),o.add(d);const h=new sd(11032055,8,35);h.position.set(-3,-3,3),o.add(h);const f=new pr;o.add(f);const p=new pr;p.position.set(4.8,1.8,-1.5),f.add(p);const _=new Ts(1.2,2),x=new oo({color:440020,roughness:.1,metalness:.9,emissive:440020,emissiveIntensity:.65,wireframe:!1}),m=new Xt(_,x);p.add(m);const u=new Ts(1.6,1),g=new wT({color:3718648,emissive:11032055,emissiveIntensity:.35,roughness:.1,metalness:.8,transmission:.9,opacity:.75,transparent:!0,wireframe:!0}),v=new Xt(u,g);p.add(v);const y=new Sl(2.3,.04,16,100),b=new oo({color:440020,emissive:440020,emissiveIntensity:.9,roughness:.2}),C=new Xt(y,b);C.rotation.x=Math.PI/3,p.add(C);const A=new Sl(2.8,.035,16,100),P=new oo({color:11032055,emissive:11032055,emissiveIntensity:.9,roughness:.2}),w=new Xt(A,P);w.rotation.y=Math.PI/4,p.add(w);const S=new RT(50,50,440020,2042173);S.position.y=-3.2,S.material.opacity=.45,S.material.transparent=!0,f.add(S);const L=750,V=new on,B=new Float32Array(L*3),q=new Float32Array(L*3),W=new Float32Array(L*3);for(let he=0;he<L;he++){const Re=he*3,we=(Math.random()-.5)*22,be=(Math.random()-.5)*18,$e=(Math.random()-.5)*12-2;B[Re]=we,B[Re+1]=be,B[Re+2]=$e,q[Re]=we,q[Re+1]=be,q[Re+2]=$e,W[Re]=0,W[Re+1]=0,W[Re+2]=0}V.setAttribute("position",new Un(B,3));const j=document.createElement("canvas");j.width=128,j.height=128;const $=j.getContext("2d"),N=$.createRadialGradient(64,64,0,64,64,64);N.addColorStop(0,"rgba(56, 189, 248, 1)"),N.addColorStop(.35,"rgba(6, 182, 212, 0.75)"),N.addColorStop(.7,"rgba(168, 85, 247, 0.3)"),N.addColorStop(1,"rgba(0, 0, 0, 0)"),$.fillStyle=N,$.fillRect(0,0,128,128);const Y=new ET(j),Q=new ov({size:.28,map:Y,transparent:!0,opacity:.9,blending:$u,depthWrite:!1,sizeAttenuation:!0}),se=new MT(V,Q);o.add(se);const ye=new CT,He=new Be(-999,-999),G=new wi(new U(0,0,1),0),te=new U(-999,-999,0),de=he=>{He.x=he.clientX/window.innerWidth*2-1,He.y=-(he.clientY/window.innerHeight)*2+1,ye.setFromCamera(He,a),ye.ray.intersectPlane(G,te)};window.addEventListener("mousemove",de);const ae=()=>{s&&(a.aspect=s.clientWidth/s.clientHeight,a.updateProjectionMatrix(),l.setSize(s.clientWidth,s.clientHeight))};window.addEventListener("resize",ae);const Ue=3.8,De=.45,Ve=.06,I=.86;let Ge;const We=new cv,it=()=>{Ge=requestAnimationFrame(it);const he=We.getElapsedTime(),Re=se.geometry.attributes.position,we=Re.array;for(let $e=0;$e<L;$e++){const R=$e*3,M=we[R],H=we[R+1],Z=we[R+2],J=q[R],ee=q[R+1],Se=q[R+2],ce=Math.sin(he*.9+$e*.5)*.003,ue=Math.cos(he*.8+$e*.5)*.003,Le=M-te.x,ie=H-te.y,_e=Z-te.z,Ie=Math.sqrt(Le*Le+ie*ie+_e*_e);if(Ie<Ue&&Ie>.001){const ke=(1-Ie/Ue)*De;W[R]+=Le/Ie*ke,W[R+1]+=ie/Ie*ke,W[R+2]+=_e/Ie*ke}const Te=J-M,fe=ee-H,Ne=Se-Z;W[R]+=Te*Ve+ce,W[R+1]+=fe*Ve+ue,W[R+2]+=Ne*Ve,W[R]*=I,W[R+1]*=I,W[R+2]*=I,we[R]+=W[R],we[R+1]+=W[R+1],we[R+2]+=W[R+2]}Re.needsUpdate=!0,m.rotation.x=he*.4,m.rotation.y=he*.5,v.rotation.x=he*-.2,v.rotation.y=he*-.3,C.rotation.z=he*.6,w.rotation.z=he*-.5;const be=1+Math.sin(he*2.5)*.07;m.scale.setScalar(be),S.position.z=he*.8%1,d.position.x=Math.sin(he*.8)*6,d.position.y=Math.cos(he*.5)*6,h.position.x=Math.cos(he*.6)*6,h.position.y=Math.sin(he*.7)*6,l.render(o,a)};return it(),()=>{window.removeEventListener("mousemove",de),window.removeEventListener("resize",ae),cancelAnimationFrame(Ge),s&&s.contains(l.domElement)&&s.removeChild(l.domElement),l.dispose()}},[]),T.jsxs("section",{id:"hero",style:{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",paddingTop:"100px",paddingBottom:"60px",overflow:"hidden"},children:[T.jsx("div",{ref:t,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:1,pointerEvents:"none"}}),T.jsx("div",{className:"container",style:{position:"relative",zIndex:10},children:T.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"50px",alignItems:"center"},children:[T.jsx("div",{style:{display:"flex",justifyContent:"center"},children:T.jsxs("div",{style:{position:"relative",width:"280px",height:"280px"},children:[T.jsx("div",{style:{position:"absolute",top:"-8px",left:"-8px",right:"-8px",bottom:"-8px",borderRadius:"50%",background:"linear-gradient(135deg, var(--accent-primary), #a855f7, #10b981)",boxShadow:"0 0 35px var(--accent-glow)",animation:"spin 12s linear infinite",opacity:.85}}),T.jsx("div",{style:{position:"relative",width:"100%",height:"100%",borderRadius:"50%",overflow:"hidden",border:"4px solid var(--bg-primary)",background:"var(--bg-glass-card)"},children:T.jsx("img",{src:uv,alt:"Mani Kethan Reddy Challa",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})}),T.jsxs("div",{className:"glass-card",style:{position:"absolute",bottom:"-10px",left:"50%",transform:"translateX(-50%)",padding:"6px 16px",borderRadius:"var(--radius-full)",fontSize:"0.78rem",fontFamily:"var(--font-mono)",color:"#10b981",whiteSpace:"nowrap",boxShadow:"0 10px 25px rgba(0,0,0,0.6)",border:"1px solid rgba(16,185,129,0.4)",display:"flex",alignItems:"center",gap:"6px"},children:[T.jsx(A0,{size:14})," Open to AI/ML Roles"]})]})}),T.jsxs("div",{children:[T.jsxs("div",{className:"section-tag",style:{display:"inline-flex",alignItems:"center",gap:"8px",marginBottom:"16px"},children:[T.jsx(za,{size:16})," Computer Science (AI & ML) Engineer"]}),T.jsxs("h1",{style:{fontSize:"clamp(2.2rem, 4.2vw, 3.4rem)",fontWeight:900,lineHeight:1.15,marginBottom:"20px"},children:["Turning Vision Into Reality With ",T.jsx("span",{className:"gradient-text",children:"AI & Code."})]}),T.jsx("div",{style:{minHeight:"44px",marginBottom:"20px",display:"flex",alignItems:"center"},children:T.jsxs("div",{style:{fontFamily:"var(--font-mono)",fontSize:"1.1rem",color:"var(--accent-primary)",display:"inline-flex",alignItems:"center",gap:"10px",padding:"8px 18px",background:"rgba(6, 182, 212, 0.08)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-glass)"},children:[T.jsx(M0,{size:18}),T.jsx("span",{children:i[e]})]})}),T.jsx("p",{style:{fontSize:"1.05rem",color:"var(--text-muted)",lineHeight:1.7,marginBottom:"32px",maxWidth:"580px"},children:"As a dedicated AI & Machine Learning Specialist, I transform ideas into intelligent web applications, Retrieval-Augmented Generation (RAG) models, and high-performance algorithms."}),T.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"14px",marginBottom:"44px",alignItems:"center"},children:[T.jsxs("a",{href:r("Mani_Kethan_Reddy_Resume.pdf"),target:"_blank",rel:"noreferrer",className:"btn-primary",style:{padding:"12px 26px",fontSize:"0.95rem"},children:["Resume ",T.jsx(E0,{size:18})]}),T.jsxs("a",{href:"#contact",className:"btn-secondary",style:{padding:"12px 26px",fontSize:"0.95rem"},children:["Contact Me ",T.jsx(dl,{size:18})]}),T.jsxs("a",{href:"#projects",className:"btn-secondary",style:{padding:"12px 26px",fontSize:"0.95rem"},children:["Explore Projects ",T.jsx(Xx,{size:18})]})]}),T.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"14px",maxWidth:"520px"},children:[T.jsxs("div",{className:"glass-card",style:{padding:"14px",textAlign:"center"},children:[T.jsx("div",{style:{fontSize:"1.7rem",fontWeight:800,color:"var(--accent-primary)"},children:"4+"}),T.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-dim)",marginTop:"2px"},children:"AI Projects"})]}),T.jsxs("div",{className:"glass-card",style:{padding:"14px",textAlign:"center"},children:[T.jsx("div",{style:{fontSize:"1.7rem",fontWeight:800,color:"var(--accent-primary)"},children:"2x"}),T.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-dim)",marginTop:"2px"},children:"Hackathon Finalist"})]}),T.jsxs("div",{className:"glass-card",style:{padding:"14px",textAlign:"center"},children:[T.jsx("div",{style:{fontSize:"1.7rem",fontWeight:800,color:"var(--accent-primary)"},children:"1"}),T.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-dim)",marginTop:"2px"},children:"IJERT Publication"})]})]})]})]})}),T.jsx("div",{style:{position:"fixed",bottom:"24px",right:"24px",zIndex:90,display:"flex",alignItems:"center",justifyContent:"center"},children:T.jsx("a",{href:"#contact",style:{position:"relative",width:"84px",height:"84px",borderRadius:"50%",background:"var(--bg-glass-panel)",border:"1px solid var(--accent-glow)",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",color:"#fff",boxShadow:"0 10px 30px rgba(0,0,0,0.6)",transition:"transform 0.3s ease"},onMouseEnter:s=>s.currentTarget.style.transform="scale(1.1)",onMouseLeave:s=>s.currentTarget.style.transform="scale(1)",children:T.jsx("div",{style:{fontSize:"0.75rem",fontWeight:800,fontFamily:"var(--font-mono)",color:"var(--accent-primary)",textAlign:"center"},children:"HIRE ME"})})}),T.jsx("style",{children:`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `})]})}function PT(){const[t,e]=nt.useState("all"),n=nt.useRef(null),i=[{id:"all",label:"All Skills"},{id:"aiml",label:"AI & Machine Learning"},{id:"languages",label:"Programming Languages"},{id:"web",label:"Web & Frameworks"},{id:"tools",label:"Tools & APIs"}],r=[{name:"Python & Data Science",category:"languages",level:95,icon:bh,exp:"Core",desc:"Primary language for ML modeling, data structures, Flask backends, and prompt engineering pipelines."},{name:"RAG & Vector Search (FAISS)",category:"aiml",level:92,icon:za,exp:"Advanced",desc:"Retrieval-Augmented Generation, vector embeddings, FAISS indexing, and semantic context retrieval."},{name:"PyTorch & ONNX Runtime",category:"aiml",level:88,icon:tf,exp:"Advanced",desc:"Deep learning model inference, Hugging Face Transformers, vision classification pipelines."},{name:"Large Language Models (LLMs)",category:"aiml",level:90,icon:za,exp:"Advanced",desc:"Integration with Ollama LLMs, prompt engineering, document summarization engines."},{name:"Java & Data Structures",category:"languages",level:88,icon:M0,exp:"Core",desc:"Strong foundation in Java programming, object-oriented design, algorithms, and DSA problem solving."},{name:"SQL & Database Design",category:"languages",level:85,icon:ey,exp:"Core",desc:"Relational database schemas, query optimization, structured data storage."},{name:"React.js & Web Tech",category:"web",level:86,icon:ny,exp:"Web",desc:"Interactive frontend interfaces, HTML5, CSS3, JavaScript component design."},{name:"Flask & REST APIs",category:"web",level:90,icon:sy,exp:"Web",desc:"Python lightweight web services, Google API integrations, JSON endpoints."},{name:"Chrome Extension APIs",category:"tools",level:88,icon:$x,exp:"Tools",desc:"Browser side panel UI development, background scripts, DOM manipulation for AlgoSolveo."},{name:"Git & GitHub",category:"tools",level:92,icon:bh,exp:"Tools",desc:"Version control, open-source collaboration, feature branching, code reviews."}];nt.useEffect(()=>{const o=n.current;if(!o)return;o.innerHTML="";const a=new rv,l=new Jt(50,o.clientWidth/o.clientHeight,.1,100);l.position.z=5.2;const c=new iv({antialias:!0,alpha:!0});c.setSize(o.clientWidth,o.clientHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.appendChild(c.domElement);const d=new pr;a.add(d);const h=[{name:"Python",color:440020,pos:[0,0,0],radius:.45},{name:"PyTorch",color:11032055,pos:[-1.6,.9,-.4],radius:.35},{name:"RAG / FAISS",color:1096065,pos:[1.6,.8,-.2],radius:.38},{name:"Ollama LLM",color:3900150,pos:[1.4,-.9,-.5],radius:.32},{name:"SQL",color:16096779,pos:[-1.4,-.8,-.3],radius:.33},{name:"Java",color:15485081,pos:[0,1.6,-.6],radius:.32},{name:"Flask APIs",color:9133302,pos:[0,-1.5,-.4],radius:.32}],f=[];h.forEach(y=>{const b=new Ts(y.radius,2),C=new oo({color:y.color,roughness:.2,metalness:.8,emissive:y.color,emissiveIntensity:.5,wireframe:!1}),A=new Xt(b,C);A.position.set(...y.pos);const P=new Ts(y.radius*1.25,1),w=new af({color:y.color,wireframe:!0,transparent:!0,opacity:.4}),S=new Xt(P,w);A.add(S),d.add(A),f.push({mesh:A,wireMesh:S,data:y})});const p=new df({color:440020,transparent:!0,opacity:.4});for(let y=0;y<h.length;y++)for(let b=y+1;b<h.length;b++){const C=new U(...h[y].pos),A=new U(...h[b].pos);if(C.distanceTo(A)<2.8){const w=new on().setFromPoints([C,A]),S=new sv(w,p);d.add(S)}}const _=new sd(16777215,3.5,12);_.position.set(2,3,4),a.add(_);const x=new lv(16777215,.8);a.add(x);let m;const u=new cv,g=()=>{m=requestAnimationFrame(g);const y=u.getElapsedTime();d.rotation.y=y*.25,d.rotation.x=Math.sin(y*.2)*.1,f.forEach((b,C)=>{b.mesh.rotation.x=y*.3,b.mesh.rotation.y=y*.4,b.wireMesh.rotation.z=y*-.5;const A=1+Math.sin(y*3+C)*.05;b.mesh.scale.setScalar(A)}),c.render(a,l)};g();const v=()=>{o&&(l.aspect=o.clientWidth/o.clientHeight,l.updateProjectionMatrix(),c.setSize(o.clientWidth,o.clientHeight))};return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),cancelAnimationFrame(m),o.contains(c.domElement)&&o.removeChild(c.domElement),c.dispose()}},[]);const s=t==="all"?r:r.filter(o=>o.category===t);return T.jsx("section",{id:"skills",style:{padding:"100px 0",position:"relative"},children:T.jsxs("div",{className:"container",children:[T.jsxs("div",{style:{textAlign:"center",marginBottom:"60px"},children:[T.jsxs("div",{className:"section-tag",children:[T.jsx(za,{size:16})," Technical Stack & Skills"]}),T.jsxs("h2",{className:"section-title",children:["Specialized in ",T.jsx("span",{className:"gradient-text",children:"AI, RAG & Machine Learning"})]}),T.jsx("p",{className:"section-desc",style:{margin:"0 auto"},children:"A comprehensive technical toolkit spanning AI models, Large Language Models, PyTorch, FAISS vector search, and full-stack web applications."})]}),T.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"30px",alignItems:"center",marginBottom:"40px"},children:[T.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:i.map(o=>T.jsxs("button",{onClick:()=>e(o.id),className:"glass-card",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 24px",cursor:"pointer",borderColor:t===o.id?"var(--accent-primary)":"var(--border-glass)",background:t===o.id?"rgba(6,182,212,0.12)":"var(--bg-glass-card)",color:t===o.id?"var(--accent-primary)":"var(--text-main)",fontWeight:600,fontSize:"1rem",textAlign:"left"},children:[T.jsx("span",{children:o.label}),t===o.id&&T.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"var(--accent-primary)",boxShadow:"var(--shadow-glow)"}})]},o.id))}),T.jsx("div",{className:"glass-panel",style:{height:"280px",position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:T.jsx("div",{ref:n,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0}})})]}),T.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"24px"},children:s.map((o,a)=>{const l=o.icon;return T.jsxs("div",{className:"glass-card",style:{padding:"24px",position:"relative",overflow:"hidden"},children:[T.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px"},children:[T.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"var(--radius-sm)",background:"rgba(6, 182, 212, 0.1)",border:"1px solid var(--accent-glow)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent-primary)"},children:T.jsx(l,{size:22})}),T.jsx("span",{style:{fontSize:"0.8rem",fontFamily:"var(--font-mono)",color:"var(--accent-primary)",padding:"4px 10px",background:"rgba(255,255,255,0.05)",borderRadius:"var(--radius-full)"},children:o.exp})]}),T.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:700,marginBottom:"8px"},children:o.name}),T.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",lineHeight:1.5,marginBottom:"20px"},children:o.desc}),T.jsxs("div",{children:[T.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",fontWeight:600,color:"var(--text-dim)",marginBottom:"6px"},children:[T.jsx("span",{children:"Proficiency"}),T.jsxs("span",{children:[o.level,"%"]})]}),T.jsx("div",{style:{width:"100%",height:"6px",background:"rgba(255,255,255,0.08)",borderRadius:"3px",overflow:"hidden"},children:T.jsx("div",{style:{width:`${o.level}%`,height:"100%",background:"var(--accent-gradient)",borderRadius:"3px",transition:"width 1s ease-out"}})})]})]},a)})})]})})}function LT({project:t,onClose:e}){if(!t)return null;const n=t.githubUrl||t.github||"#",i=t.fullDesc||t.fullDescription||t.desc,r=t.highlights||t.features||[],s=t.categoryTag||t.categoryLabel||t.category;return T.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:1e3,background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"},onClick:e,children:T.jsxs("div",{className:"glass-panel",style:{maxWidth:"850px",width:"100%",maxHeight:"90vh",overflowY:"auto",padding:"36px",position:"relative",border:"1px solid rgba(255, 255, 255, 0.15)",boxShadow:"0 25px 60px rgba(0,0,0,0.8)"},onClick:o=>o.stopPropagation(),children:[T.jsx("button",{onClick:e,style:{position:"absolute",top:"20px",right:"20px",width:"40px",height:"40px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:T.jsx(C0,{size:20})}),T.jsx("div",{style:{borderRadius:"var(--radius-md)",overflow:"hidden",marginBottom:"28px",border:"1px solid var(--border-glass)"},children:T.jsx("img",{src:t.image,alt:t.title,style:{width:"100%",height:"340px",objectFit:"cover"}})}),T.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px",marginBottom:"16px"},children:[T.jsxs("div",{children:[T.jsx("span",{className:"section-tag",style:{marginBottom:"8px"},children:s}),T.jsx("h2",{style:{fontSize:"1.8rem",fontWeight:800},children:t.title})]}),T.jsx("div",{children:T.jsxs("a",{href:n,target:"_blank",rel:"noreferrer",className:"btn-primary",style:{padding:"10px 22px",fontSize:"0.9rem"},children:[T.jsx(nf,{size:18})," View GitHub Repository"]})})]}),T.jsx("p",{style:{fontSize:"1.05rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"28px"},children:i}),r.length>0&&T.jsxs("div",{style:{marginBottom:"28px"},children:[T.jsxs("h3",{style:{fontSize:"1.15rem",fontWeight:700,marginBottom:"14px",display:"flex",alignItems:"center",gap:"8px"},children:[T.jsx(Qx,{size:18,color:"var(--accent-primary)"})," Technical Architecture & Innovations"]}),T.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"12px"},children:r.map((o,a)=>T.jsxs("div",{style:{padding:"14px",background:"rgba(0, 0, 0, 0.25)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-glass)",fontSize:"0.88rem",color:"var(--text-main)",display:"flex",alignItems:"flex-start",gap:"10px"},children:[T.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"var(--accent-primary)",marginTop:"6px",flexShrink:0}}),T.jsx("span",{children:o})]},a))})]}),T.jsxs("div",{children:[T.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:700,marginBottom:"12px"},children:"Technologies Used"}),T.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:t.tags.map((o,a)=>T.jsx("span",{style:{padding:"6px 14px",borderRadius:"var(--radius-full)",background:"rgba(6, 182, 212, 0.1)",border:"1px solid var(--accent-glow)",color:"var(--accent-primary)",fontSize:"0.85rem",fontFamily:"var(--font-mono)"},children:o},a))})]})]})})}const IT="/portfolio-Mani-Kethan-Reddy/assets/algosolveo-Nd8wH_Hz.png",DT="/portfolio-Mani-Kethan-Reddy/assets/birds-ai-aTuRxAQf.png",NT="/portfolio-Mani-Kethan-Reddy/assets/rag-summarizer-CKCJdy3n.png",UT="/portfolio-Mani-Kethan-Reddy/assets/college-chatbot-BZEO10gh.png";function FT(){const[t,e]=nt.useState(null),n=[{id:"algosolveo",title:"AlgoSolveo - LeetCode Tutor Chrome Extension",category:"Browser Extension & AI",categoryTag:"Chrome Extension & AI",desc:"AI-powered Chrome side panel extension providing interactive, guided tutoring for LeetCode & DSA problems across 315 problems and 49 patterns.",fullDesc:"AlgoSolveo is a sophisticated Chrome side panel extension built to provide real-time, step-by-step DSA guidance. It features 3 tutoring modes (Socratic Hinting, Code Debugger, Optimal Solution), 315 curated problems across 49 patterns, and intelligent progress tracking.",image:IT,tags:["JavaScript","Chrome Extension APIs","AI Tutoring","DSA Roadmap"],highlights:["315 Curated DSA Problems across 49 Core Patterns","3 Tutoring Styles: Socratic Hints, Debugging, Optimal Code","Chrome Side Panel API & Contextual DOM Parsing"],githubUrl:"https://github.com/M-k-reddy/AlgoSolveo",github:"https://github.com/M-k-reddy/AlgoSolveo",liveUrl:"https://github.com/M-k-reddy/AlgoSolveo"},{id:"birds-ai",title:"Birds Species Detection",category:"AI & Computer Vision",categoryTag:"AI & Computer Vision",desc:"AI-powered bird species classification web app featuring a two-stage classification pipeline across 525 classes with real-time Wikipedia API info lookup.",fullDesc:"High-accuracy computer vision system that classifies bird species across 525 distinct classes using PyTorch and ONNX Runtime inference. Features a non-bird filter stage and Wikipedia REST API integration for live taxonomy & habitat information.",image:DT,tags:["Python","PyTorch","React.js","Flask","ONNX Runtime"],highlights:["525 Bird Classes + Non-Bird Filtering Stage","ONNX Runtime Inference for High FPS Response","Wikipedia API Integration for Taxonomy & Info"],githubUrl:"https://github.com/M-k-reddy/Birds-Species-Detection",github:"https://github.com/M-k-reddy/Birds-Species-Detection",liveUrl:"https://github.com/M-k-reddy/Birds-Species-Detection"},{id:"rag-summarizer",title:"AI-Based Content Summarization using RAG",category:"RAG & Published Research",categoryTag:"RAG & Published Research",desc:"Published in IJERT Journal. AI document summarization system using Retrieval-Augmented Generation, Ollama LLM, and FAISS vector retrieval.",fullDesc:"Official published research project (IJERT Vol 15, Issue 06). Combines vector embeddings with FAISS vector database and local Ollama LLMs to analyze long-form documents and generate accurate semantic summaries without hallucination.",image:NT,tags:["Python","RAG","Ollama LLM","FAISS","Flask"],highlights:["Published in IJERT International Research Journal","FAISS Vector Embedding Database for Semantic Context","Local Ollama LLM Integration for Zero Data Privacy Leakage"],githubUrl:"https://github.com/M-k-reddy/AI-based-Content-Summarization-Using-RAG",github:"https://github.com/M-k-reddy/AI-based-Content-Summarization-Using-RAG",liveUrl:"https://github.com/M-k-reddy/AI-based-Content-Summarization-Using-RAG"},{id:"college-chatbot",title:"College ChatBot",category:"NLP & Google API",categoryTag:"NLP & Google API",desc:"Developed at MLRIT Hackathon using Flask, Google API, and prompt engineering to assist students with dynamic college query resolution.",fullDesc:"Interactive query resolution bot built during the MLRIT Hackathon using Flask and Google API. Handles student queries regarding college schedules, syllabus, campus notices, and academic info.",image:UT,tags:["Python","Flask","Google API","HTML/CSS","Prompt Engineering"],highlights:["MLRIT Hackathon Award-Winning Prototype","Dynamic College Query Dataset & Fast Inference","Google API & Prompt Engineering Strategy"],githubUrl:"https://github.com/M-k-reddy/college-chatbot",github:"https://github.com/M-k-reddy/college-chatbot",liveUrl:"https://github.com/M-k-reddy/college-chatbot"}];return T.jsxs("section",{id:"projects",style:{padding:"100px 0",position:"relative"},children:[T.jsxs("div",{className:"container",children:[T.jsxs("div",{style:{textAlign:"center",marginBottom:"60px"},children:[T.jsxs("div",{className:"section-tag",children:[T.jsx(A0,{size:16})," Featured Work"]}),T.jsxs("h2",{className:"section-title",children:["Engineered ",T.jsx("span",{className:"gradient-text",children:"AI & Full-Stack Projects"})]}),T.jsx("p",{className:"section-desc",style:{margin:"0 auto"},children:"Explore my latest production-ready machine learning systems, browser extensions, and published research."})]}),T.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"30px"},children:n.map(i=>T.jsxs("div",{className:"glass-card",style:{borderRadius:"var(--radius-md)",overflow:"hidden",display:"flex",flexDirection:"column",cursor:"pointer",transition:"transform 0.3s ease, border-color 0.3s ease"},onClick:()=>e(i),children:[T.jsxs("div",{style:{position:"relative",width:"100%",height:"210px",overflow:"hidden",background:"#000"},children:[T.jsx("img",{src:i.image,alt:i.title,style:{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 0.5s ease"},onMouseEnter:r=>r.currentTarget.style.transform="scale(1.05)",onMouseLeave:r=>r.currentTarget.style.transform="scale(1)"}),T.jsx("div",{style:{position:"absolute",top:"14px",left:"14px",padding:"4px 12px",borderRadius:"var(--radius-full)",background:"rgba(9, 13, 22, 0.85)",border:"1px solid var(--accent-glow)",fontSize:"0.75rem",fontFamily:"var(--font-mono)",color:"var(--accent-primary)",backdropFilter:"blur(8px)"},children:i.categoryTag})]}),T.jsxs("div",{style:{padding:"24px",flex:1,display:"flex",flexDirection:"column"},children:[T.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"12px"},children:[T.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:800,lineHeight:1.3},children:i.title}),T.jsx("a",{href:i.githubUrl,target:"_blank",rel:"noreferrer",style:{color:"var(--accent-primary)",padding:"6px",borderRadius:"50%",background:"rgba(6, 182, 212, 0.1)",border:"1px solid var(--accent-glow)",display:"flex",alignItems:"center",justifyContent:"center",transition:"transform 0.2s ease, background 0.2s ease"},onClick:r=>r.stopPropagation(),title:"View GitHub Repository",onMouseEnter:r=>r.currentTarget.style.transform="scale(1.15)",onMouseLeave:r=>r.currentTarget.style.transform="scale(1)",children:T.jsx(ty,{size:18})})]}),T.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"20px",flex:1},children:i.desc}),T.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:i.tags.map((r,s)=>T.jsx("span",{style:{fontSize:"0.75rem",fontFamily:"var(--font-mono)",padding:"4px 10px",borderRadius:"var(--radius-sm)",background:"rgba(255,255,255,0.05)",border:"1px solid var(--border-glass)",color:"var(--text-dim)"},children:r},s))})]})]},i.id))})]}),t&&T.jsx(LT,{project:t,onClose:()=>e(null)})]})}function OT(){const t=[{role:"Intern — DRDO (RCI)",company:"Research Centre Imarat (Government / PSU / Defence)",period:"12/2022 – 05/2023",location:"Hyderabad, Telangana, India",description:"Gained hands-on experience in specialized hardware-software validation and quality checks within a real-time defense engineering environment.",achievements:["Involved in fabrication and assembly of specialized cable assemblies for defense systems","Participated in rigorous testing procedures, quality control checks, electrical testing, and validation processes","Exposure to high-reliability engineering protocols in real-time defense environments"],tags:["Defense Systems","Electrical Testing","Quality Assurance","Systems Assembly","DRDO RCI"]}],e=[{title:"AI-Based Content Summarization using RAG",journal:"IJERT (International Journal of Engineering Research & Technology)",volume:"Volume 15, Issue 06, June 2026",date:"16/06/2026",highlights:["Developed an AI-powered content summarization system using Retrieval-Augmented Generation (RAG)","Integrated FAISS vector index and Large Language Models (LLMs) for efficient semantic document retrieval","Built the solution using Python to generate accurate, context-aware summaries"]}],n=[{title:"First Runner-Up — Zeneith-Data Voyage",org:"Scope Club at MLRIT",detail:"72-hour National Level Hackathon"},{title:"First Runner-Up — AI FUSION FEST",org:"AI and Intel Club at CMRTC",detail:"National level 24-hour Virtual Hackathon"}];return T.jsx("section",{id:"experience",style:{padding:"100px 0",position:"relative"},children:T.jsxs("div",{className:"container",children:[T.jsxs("div",{style:{textAlign:"center",marginBottom:"60px"},children:[T.jsxs("div",{className:"section-tag",children:[T.jsx(Kx,{size:16})," Industry Experience & Research"]}),T.jsxs("h2",{className:"section-title",children:["Hands-on Defense Internship & ",T.jsx("span",{className:"gradient-text",children:"Published Research"})]}),T.jsx("p",{className:"section-desc",style:{margin:"0 auto"},children:"Real-world exposure at DRDO (RCI) and peer-reviewed AI publication in IJERT Journal."})]}),T.jsxs("div",{style:{maxWidth:"850px",margin:"0 auto 80px",position:"relative"},children:[T.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:"20px",width:"2px",background:"linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary), transparent)",boxShadow:"0 0 12px var(--accent-glow)"}}),t.map((i,r)=>T.jsxs("div",{style:{position:"relative",paddingLeft:"60px",marginBottom:"48px"},children:[T.jsx("div",{style:{position:"absolute",left:"11px",top:"0",width:"20px",height:"20px",borderRadius:"50%",background:"var(--accent-gradient)",boxShadow:"0 0 16px var(--accent-glow)",border:"3px solid var(--bg-primary)"}}),T.jsxs("div",{className:"glass-card",style:{padding:"30px"},children:[T.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",marginBottom:"12px"},children:[T.jsxs("div",{children:[T.jsx("h3",{style:{fontSize:"1.35rem",fontWeight:800},children:i.role}),T.jsx("div",{style:{fontSize:"1rem",fontWeight:600,color:"var(--accent-primary)",marginTop:"2px"},children:i.company})]}),T.jsxs("div",{style:{display:"flex",gap:"12px",fontSize:"0.85rem",color:"var(--text-dim)",fontFamily:"var(--font-mono)"},children:[T.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[T.jsx(y0,{size:14})," ",i.period]}),T.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[T.jsx(T0,{size:14})," ",i.location]})]})]}),T.jsx("p",{style:{fontSize:"0.95rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"20px"},children:i.description}),T.jsx("div",{style:{marginBottom:"20px",display:"flex",flexDirection:"column",gap:"8px"},children:i.achievements.map((s,o)=>T.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px",fontSize:"0.9rem",color:"var(--text-main)"},children:[T.jsx(S0,{size:16,color:"var(--accent-primary)",style:{flexShrink:0,marginTop:"3px"}}),T.jsx("span",{children:s})]},o))}),T.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:i.tags.map((s,o)=>T.jsx("span",{style:{fontSize:"0.75rem",fontFamily:"var(--font-mono)",padding:"4px 10px",borderRadius:"var(--radius-full)",background:"rgba(6,182,212,0.1)",color:"var(--accent-primary)",border:"1px solid var(--accent-glow)"},children:s},o))})]})]},r))]}),T.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"30px",maxWidth:"1000px",margin:"0 auto"},children:[T.jsxs("div",{className:"glass-panel",style:{padding:"32px"},children:[T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",color:"var(--accent-primary)",marginBottom:"16px"},children:[T.jsx(Yx,{size:24}),T.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:800,color:"var(--text-main)"},children:"Research Publication"})]}),e.map((i,r)=>T.jsxs("div",{children:[T.jsx("h4",{style:{fontSize:"1.1rem",fontWeight:700,marginBottom:"6px"},children:i.title}),T.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--accent-primary)",fontFamily:"var(--font-mono)",marginBottom:"16px"},children:[i.journal," • ",i.volume]}),T.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"16px"},children:i.highlights.map((s,o)=>T.jsxs("div",{style:{fontSize:"0.88rem",color:"var(--text-muted)",display:"flex",alignItems:"flex-start",gap:"8px"},children:[T.jsx("span",{style:{color:"var(--accent-primary)"},children:"•"}),T.jsx("span",{children:s})]},o))})]},r))]}),T.jsxs("div",{className:"glass-panel",style:{padding:"32px"},children:[T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",color:"var(--accent-primary)",marginBottom:"16px"},children:[T.jsx(oy,{size:24}),T.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:800,color:"var(--text-main)"},children:"Hackathons & Awards"})]}),T.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:n.map((i,r)=>T.jsxs("div",{style:{padding:"14px 18px",background:"rgba(0,0,0,0.25)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-glass)"},children:[T.jsx("div",{style:{fontSize:"0.98rem",fontWeight:700,color:"var(--text-main)"},children:i.title}),T.jsx("div",{style:{fontSize:"0.85rem",color:"var(--accent-primary)",marginTop:"2px"},children:i.org}),T.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-dim)",marginTop:"2px"},children:i.detail})]},r))})]})]})]})})}const kT="/portfolio-Mani-Kethan-Reddy/assets/ijert-research-paper-BSfAFGiA.png",zT="/portfolio-Mani-Kethan-Reddy/assets/salesforce-agentforce-BiIvGhhu.png",BT="/portfolio-Mani-Kethan-Reddy/assets/ijert-research-paper-DDIvkorG.pdf",HT="/portfolio-Mani-Kethan-Reddy/assets/salesforce-agentforce-I-4gZB-q.pdf";function VT(){const t=[{id:"ijert-paper",title:"AI-Based Content Summarization using RAG",issuer:"IJERT Journal (International Journal of Engineering Research & Technology)",type:"Published Journal Paper",volume:"Volume 15, Issue 06, June 2026",desc:"Official research paper publication detailing an AI document summarization system integrating Retrieval-Augmented Generation (RAG), FAISS vector embeddings, and local Ollama LLMs.",image:kT,pdfUrl:BT,badge:"IJERT International Journal",highlights:["Retrieval-Augmented Generation (RAG) Architecture","FAISS Vector Embedding Retrieval Pipeline","Ollama Local LLM Document Summarization"]},{id:"salesforce-agentforce",title:"Salesforce Certified Agentforce Specialist",issuer:"Salesforce Certification",type:"Official Certification",volume:"Salesforce Agentforce Specialist",desc:"Professional certification validating expertise in building autonomous AI agents, prompt engineering, CRM integrations, and Salesforce Agentforce AI workflows.",image:zT,pdfUrl:HT,badge:"Salesforce Certified",highlights:["Autonomous AI Agent Architecture & Workflows","Prompt Engineering & Agentforce Reasoning Engine","CRM Data Integration & Trust Layer Safety"]}];return T.jsx("section",{id:"certificates",style:{padding:"100px 0",position:"relative"},children:T.jsxs("div",{className:"container",children:[T.jsxs("div",{style:{textAlign:"center",marginBottom:"60px"},children:[T.jsxs("div",{className:"section-tag",children:[T.jsx(qx,{size:16})," Research & Certifications"]}),T.jsxs("h2",{className:"section-title",children:["Published ",T.jsx("span",{className:"gradient-text",children:"Journal & Official Credentials"})]}),T.jsx("p",{className:"section-desc",style:{margin:"0 auto"},children:"Verified research paper publication in IJERT and official Salesforce Certified Agentforce Specialist certification."})]}),T.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"30px"},children:t.map(e=>T.jsxs("div",{className:"glass-card",style:{borderRadius:"var(--radius-md)",overflow:"hidden",display:"flex",flexDirection:"column"},children:[T.jsxs("div",{style:{position:"relative",width:"100%",height:"220px",overflow:"hidden",background:"#000"},children:[T.jsx("img",{src:e.image,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),T.jsx("div",{style:{position:"absolute",top:"14px",left:"14px",padding:"4px 12px",borderRadius:"var(--radius-full)",background:"rgba(9, 13, 22, 0.85)",border:"1px solid var(--accent-glow)",fontSize:"0.75rem",fontFamily:"var(--font-mono)",color:"var(--accent-primary)",backdropFilter:"blur(8px)"},children:e.badge})]}),T.jsxs("div",{style:{padding:"24px",flex:1,display:"flex",flexDirection:"column"},children:[T.jsxs("div",{style:{fontSize:"0.8rem",fontFamily:"var(--font-mono)",color:"var(--text-dim)",marginBottom:"6px"},children:[e.type," • ",e.volume]}),T.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:800,lineHeight:1.3,marginBottom:"10px"},children:e.title}),T.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.6,marginBottom:"20px",flex:1},children:e.desc}),T.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"24px"},children:e.highlights.map((n,i)=>T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.82rem",color:"var(--text-main)"},children:[T.jsx(S0,{size:14,style:{color:"var(--accent-primary)",flexShrink:0}}),T.jsx("span",{children:n})]},i))}),T.jsxs("a",{href:e.pdfUrl,target:"_blank",rel:"noreferrer",className:"btn-primary",style:{width:"100%",justifyContent:"center",padding:"10px 16px",fontSize:"0.88rem"},children:["View Official Document ",T.jsx(E0,{size:16})]})]})]},e.id))})]})})}function GT(){const t=[{degree:"B.Tech — Computer Science and Machine Learning",institution:"CMR Technical Campus",period:"08/2023 – 04/2026",desc:"Specialized coursework in Artificial Intelligence, Machine Learning, Deep Learning, Python, Java, Data Structures, and RAG architectures."},{degree:"Diploma — Electronics and Communication Engineering",institution:"TKR College Of Engineering and Technology",period:"09/2020 – 06/2023",desc:"Core foundation in electronics, circuit analysis, microcontrollers, embedded systems, and communication engineering."},{degree:"SSC (Secondary School Certificate)",institution:"Narayana High School",period:"06/2019 – 06/2020",desc:"Secondary education with high distinction in mathematics and physical sciences."}];return T.jsx("section",{id:"education",style:{padding:"100px 0",background:"rgba(0, 0, 0, 0.25)"},children:T.jsxs("div",{className:"container",children:[T.jsxs("div",{style:{textAlign:"center",marginBottom:"60px"},children:[T.jsxs("div",{className:"section-tag",children:[T.jsx(Rh,{size:16})," Academic Background"]}),T.jsxs("h2",{className:"section-title",children:["Education & ",T.jsx("span",{className:"gradient-text",children:"Academic Qualifications"})]}),T.jsx("p",{className:"section-desc",style:{margin:"0 auto"},children:"Academic qualifications in Computer Science, AI/ML, and Electronics Engineering."})]}),T.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"30px",maxWidth:"1000px",margin:"0 auto"},children:t.map((e,n)=>T.jsxs("div",{className:"glass-card",style:{padding:"28px"},children:[T.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"var(--radius-sm)",background:"rgba(6, 182, 212, 0.1)",border:"1px solid var(--accent-glow)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--accent-primary)",marginBottom:"16px"},children:T.jsx(Rh,{size:22})}),T.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:800,marginBottom:"6px"},children:e.degree}),T.jsx("div",{style:{fontSize:"0.95rem",fontWeight:600,color:"var(--accent-primary)",marginBottom:"8px"},children:e.institution}),T.jsxs("div",{style:{fontSize:"0.82rem",fontFamily:"var(--font-mono)",color:"var(--text-dim)",display:"flex",alignItems:"center",gap:"6px",marginBottom:"14px"},children:[T.jsx(y0,{size:14})," ",e.period]}),T.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-muted)",lineHeight:1.5},children:e.desc})]},n))})]})})}function WT(){const[t,e]=nt.useState({name:"",email:"",subject:"",message:""}),[n,i]=nt.useState(!1),[r,s]=nt.useState(""),[o,a]=nt.useState(!1),l="challamanikethanreddy@gmail.com",c=()=>{navigator.clipboard.writeText(l),i(!0),setTimeout(()=>i(!1),2500)},d=h=>{if(h.preventDefault(),!t.name||!t.email||!t.message){s("Please fill in all required fields.");return}a(!0),setTimeout(()=>{a(!1),s("🎉 Thank you! Your message has been sent to Mani Kethan."),e({name:"",email:"",subject:"",message:""}),setTimeout(()=>s(""),5e3)},1e3)};return T.jsx("section",{id:"contact",style:{padding:"100px 0",position:"relative"},children:T.jsxs("div",{className:"container",children:[T.jsxs("div",{style:{textAlign:"center",marginBottom:"60px"},children:[T.jsxs("div",{className:"section-tag",children:[T.jsx(dl,{size:16})," Get In Touch"]}),T.jsxs("h2",{className:"section-title",children:["Let's Collaborate on ",T.jsx("span",{className:"gradient-text",children:"AI Innovation"})]}),T.jsx("p",{className:"section-desc",style:{margin:"0 auto"},children:"Open to AI/ML engineering roles, research collaborations, hackathons, and software engineering opportunities."})]}),T.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"40px"},children:[T.jsxs("div",{children:[T.jsxs("div",{className:"glass-panel",style:{padding:"32px",marginBottom:"24px"},children:[T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"20px"},children:[T.jsx("img",{src:uv,alt:"Mani Kethan Reddy",style:{width:"64px",height:"64px",borderRadius:"50%",objectFit:"cover",border:"2px solid var(--accent-primary)",boxShadow:"0 0 20px var(--accent-glow)"}}),T.jsxs("div",{children:[T.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:800},children:"Mani Kethan Reddy"}),T.jsx("div",{style:{fontSize:"0.85rem",color:"var(--accent-primary)"},children:"Computer Science (AI & ML) Engineer"})]})]}),T.jsx("p",{style:{color:"var(--text-muted)",lineHeight:1.6,marginBottom:"24px"},children:"Passionate about building intelligent RAG systems, PyTorch computer vision applications, and AI-assisted software. Let's discuss engineering opportunities or research projects!"}),T.jsxs("div",{onClick:c,style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",background:"rgba(0,0,0,0.3)",border:"1px solid var(--border-glass)",borderRadius:"var(--radius-md)",cursor:"pointer",marginBottom:"20px"},children:[T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[T.jsx(dl,{size:18,color:"var(--accent-primary)"}),T.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.88rem",color:"var(--text-main)"},children:l})]}),T.jsx("button",{style:{background:"none",border:"none",color:"var(--accent-primary)",cursor:"pointer"},children:n?T.jsx(Zx,{size:18}):T.jsx(Jx,{size:18})})]}),T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",color:"var(--text-muted)",fontSize:"0.9rem"},children:[T.jsx(T0,{size:18,color:"var(--accent-primary)"}),T.jsx("span",{children:"Hyderabad, Telangana, India"})]})]}),T.jsxs("div",{className:"glass-card",style:{padding:"24px"},children:[T.jsx("div",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--text-dim)",textTransform:"uppercase",marginBottom:"16px"},children:"Professional Profiles"}),T.jsxs("div",{style:{display:"flex",gap:"14px"},children:[T.jsxs("a",{href:"https://github.com/M-k-reddy",target:"_blank",rel:"noreferrer",title:"GitHub Profile",style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 18px",borderRadius:"var(--radius-sm)",background:"rgba(255,255,255,0.05)",border:"1px solid var(--border-glass)",color:"var(--text-main)",textDecoration:"none",fontSize:"0.9rem",fontWeight:600},children:[T.jsx(nf,{size:20,color:"var(--accent-primary)"})," GitHub"]}),T.jsxs("a",{href:"https://linkedin.com/in/challa-manikethanreddy",target:"_blank",rel:"noreferrer",title:"LinkedIn Profile",style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 18px",borderRadius:"var(--radius-sm)",background:"rgba(255,255,255,0.05)",border:"1px solid var(--border-glass)",color:"var(--text-main)",textDecoration:"none",fontSize:"0.9rem",fontWeight:600},children:[T.jsx(w0,{size:20,color:"var(--accent-primary)"})," LinkedIn"]})]})]})]}),T.jsxs("div",{className:"glass-panel",style:{padding:"36px",position:"relative"},children:[r&&T.jsx("div",{style:{padding:"14px",borderRadius:"var(--radius-sm)",background:"rgba(6, 182, 212, 0.15)",border:"1px solid var(--accent-glow)",color:"var(--text-main)",fontSize:"0.9rem",marginBottom:"20px"},children:r}),T.jsxs("form",{onSubmit:d,style:{display:"flex",flexDirection:"column",gap:"20px"},children:[T.jsxs("div",{children:[T.jsx("label",{style:{display:"block",fontSize:"0.85rem",fontWeight:600,color:"var(--text-muted)",marginBottom:"8px"},children:"Your Name *"}),T.jsx("input",{type:"text",required:!0,placeholder:"Recruiter / Collaborator Name",value:t.name,onChange:h=>e({...t,name:h.target.value}),style:{width:"100%",padding:"14px 18px",borderRadius:"var(--radius-sm)",background:"rgba(0, 0, 0, 0.3)",border:"1px solid var(--border-glass)",color:"var(--text-main)",fontSize:"0.95rem",outline:"none"}})]}),T.jsxs("div",{children:[T.jsx("label",{style:{display:"block",fontSize:"0.85rem",fontWeight:600,color:"var(--text-muted)",marginBottom:"8px"},children:"Email Address *"}),T.jsx("input",{type:"email",required:!0,placeholder:"your.name@company.com",value:t.email,onChange:h=>e({...t,email:h.target.value}),style:{width:"100%",padding:"14px 18px",borderRadius:"var(--radius-sm)",background:"rgba(0, 0, 0, 0.3)",border:"1px solid var(--border-glass)",color:"var(--text-main)",fontSize:"0.95rem",outline:"none"}})]}),T.jsxs("div",{children:[T.jsx("label",{style:{display:"block",fontSize:"0.85rem",fontWeight:600,color:"var(--text-muted)",marginBottom:"8px"},children:"Subject"}),T.jsx("input",{type:"text",placeholder:"AI Engineering Role / Project Discussion",value:t.subject,onChange:h=>e({...t,subject:h.target.value}),style:{width:"100%",padding:"14px 18px",borderRadius:"var(--radius-sm)",background:"rgba(0, 0, 0, 0.3)",border:"1px solid var(--border-glass)",color:"var(--text-main)",fontSize:"0.95rem",outline:"none"}})]}),T.jsxs("div",{children:[T.jsx("label",{style:{display:"block",fontSize:"0.85rem",fontWeight:600,color:"var(--text-muted)",marginBottom:"8px"},children:"Message *"}),T.jsx("textarea",{required:!0,rows:4,placeholder:"Your message details...",value:t.message,onChange:h=>e({...t,message:h.target.value}),style:{width:"100%",padding:"14px 18px",borderRadius:"var(--radius-sm)",background:"rgba(0, 0, 0, 0.3)",border:"1px solid var(--border-glass)",color:"var(--text-main)",fontSize:"0.95rem",outline:"none",resize:"vertical"}})]}),T.jsxs("button",{type:"submit",disabled:o,className:"btn-primary",style:{width:"100%",justifyContent:"center",marginTop:"10px"},children:[o?"Sending...":"Send Message"," ",T.jsx(ry,{size:18})]})]})]})]})]})})}function jT(){const t=new Date().getFullYear();return T.jsx("footer",{style:{padding:"40px 0",borderTop:"1px solid var(--border-glass)",background:"rgba(5, 8, 16, 0.8)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)"},children:T.jsxs("div",{className:"container",style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"20px"},children:[T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[T.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"var(--radius-sm)",background:"var(--accent-gradient)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:"bold"},children:T.jsx(tf,{size:18})}),T.jsxs("span",{style:{fontSize:"0.9rem",color:"var(--text-muted)"},children:["© ",t," Mani Kethan Reddy Challa. All rights reserved."]})]}),T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[T.jsx("a",{href:"https://github.com/M-k-reddy",target:"_blank",rel:"noreferrer",style:{color:"var(--text-dim)",transition:"color 0.2s ease"},onMouseEnter:e=>e.currentTarget.style.color="var(--accent-primary)",onMouseLeave:e=>e.currentTarget.style.color="var(--text-dim)",children:T.jsx(nf,{size:18})}),T.jsx("a",{href:"https://linkedin.com/in/challa-manikethanreddy",target:"_blank",rel:"noreferrer",style:{color:"var(--text-dim)",transition:"color 0.2s ease"},onMouseEnter:e=>e.currentTarget.style.color="var(--accent-primary)",onMouseLeave:e=>e.currentTarget.style.color="var(--text-dim)",children:T.jsx(w0,{size:18})}),T.jsx("a",{href:"mailto:challamanikethanreddy@gmail.com",style:{color:"var(--text-dim)",transition:"color 0.2s ease"},onMouseEnter:e=>e.currentTarget.style.color="var(--accent-primary)",onMouseLeave:e=>e.currentTarget.style.color="var(--text-dim)",children:T.jsx(dl,{size:18})})]})]})})}function XT(){const[t,e]=nt.useState("dark"),[n,i]=nt.useState("cyan");return nt.useEffect(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),nt.useEffect(()=>{document.documentElement.setAttribute("data-accent",n)},[n]),T.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg-primary)",color:"var(--text-main)"},children:[T.jsx(ay,{}),T.jsxs("main",{children:[T.jsx(bT,{}),T.jsx(PT,{}),T.jsx(FT,{}),T.jsx(OT,{}),T.jsx(VT,{}),T.jsx(GT,{}),T.jsx(WT,{})]}),T.jsx(jT,{})]})}nu.createRoot(document.getElementById("root")).render(T.jsx(Lv.StrictMode,{children:T.jsx(XT,{})}));
