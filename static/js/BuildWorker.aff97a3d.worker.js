!function(t){self.webpackChunk=function(n,r){for(var a in r)t[a]=r[a];for(;n.length;)e[n.pop()]=1};var n={},e={0:1};function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var n=[];return n.push(Promise.resolve().then((function(){e[t]||importScripts(r.p+"static/js/"+({}[t]||t)+"."+{1:"b4706f9f"}[t]+".chunk.worker.js")}))),Promise.all(n)},r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)r.d(e,a,function(n){return t[n]}.bind(null,a));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/genshin-optimizer/",r(r.s=12)}([function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(5);function a(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,a=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(u){a=!0,c=u}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return e}}(t,n)||Object(r.a)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}e.d(n,"a",(function(){return c}))},function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(6);var a=e(5);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},function(t,n,e){"use strict";e.d(n,"e",(function(){return u})),e.d(n,"b",(function(){return l})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return f})),e.d(n,"d",(function(){return v}));var r=e(1),a=e(2),c=e(4),i=e(0),o=e(7);function u(t,n,e){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new Set;function l(t,n,e){var r=Object.entries(t).some((function(t){var e,r=Object(i.a)(t,2),a=r[0];return r[1]>(null!==(e=n[a])&&void 0!==e?e:0)})),a=Object.entries(n).some((function(n){var e,r=Object(i.a)(n,2),a=r[0];return r[1]>(null!==(e=t[a])&&void 0!==e?e:0)}));if(o){var c=[a,r];r=c[0],a=c[1]}return r||!a&&e}var s={other:{}};for(var f in n)for(var m in n[f]){var v,h=Object.entries(n[f][m]).filter((function(t){var n=Object(i.a)(t,1)[0];return e.has(n)}));if(h.length>0)s[f]=null!==(v=s[f])&&void 0!==v?v:{},s[f][m]=Object.fromEntries(h)}var d=t.map((function(t){var n={},r=t.setKey in s?t.setKey:"other";e.has(t.mainStatKey)&&(n[t.mainStatKey]=t.mainStatVal);var a,i=Object(c.a)(t.substats);try{for(i.s();!(a=i.n()).done;){var o,u=a.value,l=u.key,f=u.value;l&&e.has(l)&&(n[l]=(null!==(o=n[l])&&void 0!==o?o:0)+f)}}catch(v){i.e(v)}finally{i.f()}for(var m in n)m.endsWith("enemyRes_")&&(n[m]=-n[m]);return{artifact:t,stats:n,set:r}}));return d=d.filter((function(t){var n=t.artifact,e=t.stats,r=t.set;return d.every((function(t){var a=t.artifact,c=t.stats,i=t.set;return r!==i||l(e,c,n.id<=a.id)}))})),o||(d=d.filter((function(t){var n=t.artifact,e=t.stats,c=t.set,o=[].concat(Object(a.a)(Object.values(s[c])),[{}]).map((function(t){var n=Object(r.a)({},e);return Object.entries(t).forEach((function(t){var e,r=Object(i.a)(t,2),a=r[0],c=r[1];return n[a]=(null!==(e=n[a])&&void 0!==e?e:0)+(null!==c&&void 0!==c?c:0)})),n}));return d.every((function(t){var e=t.artifact,r=t.stats,a=t.set;return c===a||0!==(o=o.filter((function(t){return l(t,r,n.id<=e.id)}))).length}))}))),[].concat(Object(a.a)(t.filter((function(t){return u.has(t.setKey)}))),Object(a.a)(d.map((function(t){return t.artifact})).filter((function(t){return!u.has(t.setKey)}))))}function l(t,n){for(var e=new Set(n.map((function(t){return t.key}))),a={},i=Object.keys(t),o=0,u=i;o<u.length;o++){var l,s,f=u[o],m={},v=Object(c.a)(null!==(l=t[f])&&void 0!==l?l:[]);try{for(v.s();!(s=v.n()).done;){var h=s.value;e.has(h.setKey)?m[h.setKey]?m[h.setKey].push(h):m[h.setKey]=[h]:m.null?m.null.push(h):m.null=[h]}}catch(_){v.e(_)}finally{v.f()}a[f]=Object.freeze(m)}var d={},y={},p=[];return function t(e){if(e>=i.length){var o,u=Object(c.a)(n);try{for(u.s();!(o=u.n()).done;){var l,s=o.value,f=s.key,m=s.num;if((null!==(l=d[f])&&void 0!==l?l:0)<m)return}}catch(_){u.e(_)}finally{u.f()}p.push(Object(r.a)({},y))}else{var v=i[e],h=a[v];for(var b in h){var g;d[b]=(null!==(g=d[b])&&void 0!==g?g:0)+1,y[v]=h[b],t(e+1),d[b]-=1}}}(0),p}function s(t,n){return l(t,n).reduce((function(t,n){return t+Object.entries(n).reduce((function(t,n){return t*n[1].length}),1)}),0)}function f(t,n,e,a){var i=Object.keys(n),o={},u={};!function t(l,s){if(l>=i.length)a(u,s);else{var f,v=i[l],h=Object(c.a)(n[v]);try{for(h.s();!(f=h.n()).done;){var d=f.value,y=Object(r.a)({},s);m(v,d,o,u,y,e),t(l+1,y),o[d.setKey]-=1}}catch(p){h.e(p)}finally{h.f()}}}(0,t)}function m(t,n,e,r,a,c){var o,u,l=n.setKey;r[t]=n,e[l]=(null!==(o=e[l])&&void 0!==o?o:0)+1,n.mainStatKey in a&&(a[n.mainStatKey]+=n.mainStatVal),n.substats.forEach((function(t){(null===t||void 0===t?void 0:t.key)in a&&(a[t.key]+=t.value)}));var s=null===(u=c[l])||void 0===u?void 0:u[e[l]];s&&Object.entries(s).forEach((function(t){var n=Object(i.a)(t,2),e=n[0],r=n[1];e in a&&(a[e]+=r)}))}function v(t,n,e){var r=n.hitMode,a=void 0===r?"":r,c=n.infusionAura,i=void 0===c?"":c,u=n.infusionSelf,l=void 0===u?"":u,s=n.reactionMode,f=void 0===s?null:s,m=n.characterEle,v=void 0===m?"anemo":m,h=n.weaponType,d=void 0===h?"sword":h;if(Object.keys(o.a).includes(t))return"".concat(t,"_elemental_").concat(a);if(e||"catalyst"!==d||(e=v),"elemental"===t||"burst"===t||"skill"===t||e)return f&&f.startsWith(e||v)?"".concat(f,"_").concat(t,"_").concat(a):"".concat(e||v,"_").concat(t,"_").concat(a);var y="physical";return l?y=l:i&&(y=i),f&&f.startsWith(y)?"".concat(f,"_").concat(t,"_").concat(a):"".concat(y,"_").concat(t,"_").concat(a)}},function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(5);function a(t,n){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=Object(r.a)(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var a=0,c=function(){};return{s:c,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,u=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return o=t.done,t},e:function(t){u=!0,i=t},f:function(){try{o||null==e.return||e.return()}finally{if(u)throw i}}}}},function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(6);function a(t,n){if(t){if("string"===typeof t)return Object(r.a)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(t,n):void 0}}},function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,"a",(function(){return r}))},function(t,n,e){"use strict";n.a={physical:{name:"Physical"},anemo:{name:"Anemo"},geo:{name:"Geo"},electro:{name:"Electro"},hydro:{name:"Hydro"},pyro:{name:"Pyro"},cryo:{name:"Cryo"}}},function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"b",(function(){return o}));var r=e(0),a=e(2);var c=function(t,n,e){return t<n?n:t>e?e:t};function i(t,n){return n.reduce((function(t,n){return null===t||void 0===t?void 0:t[n]}),t)}function o(t,n,e,c){e(t)?c(t,n):t&&"object"===typeof t&&Object.entries(t).forEach((function(t){var i=Object(r.a)(t,2),u=i[0];return o(i[1],[].concat(Object(a.a)(n),[u]),e,c)}))}},function(t,n,e){t.exports=e(10)},function(t,n,e){var r=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(R){u=function(t,n,e){return t[n]=e}}function l(t,n,e,r){var a=n&&n.prototype instanceof y?n:y,c=Object.create(a.prototype),i=new D(r||[]);return c._invoke=function(t,n,e){var r=f;return function(a,c){if(r===v)throw new Error("Generator is already running");if(r===h){if("throw"===a)throw c;return P()}for(e.method=a,e.arg=c;;){var i=e.delegate;if(i){var o=S(i,e);if(o){if(o===d)continue;return o}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===f)throw r=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=v;var u=s(t,n,e);if("normal"===u.type){if(r=e.done?h:m,u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r=h,e.method="throw",e.arg=u.arg)}}}(t,e,i),c}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(R){return{type:"throw",arg:R}}}t.wrap=l;var f="suspendedStart",m="suspendedYield",v="executing",h="completed",d={};function y(){}function p(){}function _(){}var b={};b[c]=function(){return this};var g=Object.getPrototypeOf,O=g&&g(g(A([])));O&&O!==e&&r.call(O,c)&&(b=O);var j=_.prototype=y.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function w(t,n){function e(a,c,i,o){var u=s(t[a],t,c);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&r.call(f,"__await")?n.resolve(f.__await).then((function(t){e("next",t,i,o)}),(function(t){e("throw",t,i,o)})):n.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return e("throw",t,i,o)}))}o(u.arg)}var a;this._invoke=function(t,r){function c(){return new n((function(n,a){e(t,r,n,a)}))}return a=a?a.then(c,c):c()}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=s(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var c=a.arg;return c?c.done?(e[t.resultName]=c.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function M(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function A(t){if(t){var e=t[c];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:n,done:!0}}return p.prototype=j.constructor=_,_.constructor=p,p.displayName=u(_,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"===typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,u(t,o,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},E(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(n,e,r,a,c){void 0===c&&(c=Promise);var i=new w(l(n,e,r,a),c);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(j),u(j,o,"Generator"),j[c]=function(){return this},j.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=A,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return o.type="throw",o.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var c=this.tryEntries.length-1;c>=0;--c){var i=this.tryEntries[c],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=n&&n<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=t,i.arg=n,c?(this.method="next",this.next=c.finallyLoc,d):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),M(e),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var a=r.arg;M(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),d}},t}(t.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},function(t,n){$RefreshReg$=function(){},$RefreshSig$=function(){return function(){}}},function(t,n,e){"use strict";e.r(n);var r=e(9),a=e.n(r),c=e(4),i=e(1),o=e(2),u=e(0);function l(t,n,e,r,a,c,i){try{var o=t[c](i),u=o.value}catch(l){return void e(l)}o.done?n(u):Promise.resolve(u).then(r,a)}e(11);var s=e(8),f=e(7),m={hit:"DMG",avgHit:"Avg. DMG",critHit:"CRIT Hit DMG"},v={normal:"Normal Att.",charged:"Charged Att.",plunging:"Plunging Att.",elemental:"Elemental Att.",skill:"Ele. Skill",burst:"Ele. Burst"},h=f.a,d=[-1,17.165606,18.535048,19.904854,21.274902,22.6454,24.649612,26.640642,28.868587,31.36768,34.143345,37.201,40.66,44.446667,48.56352,53.74848,59.081898,64.420044,69.72446,75.12314,80.58478,86.11203,91.70374,97.24463,102.812645,108.40956,113.20169,118.102905,122.97932,129.72733,136.29291,142.67085,149.02902,155.41699,161.8255,169.10631,176.51808,184.07274,191.70952,199.55692,207.38205,215.3989,224.16566,233.50217,243.35057,256.06308,268.5435,281.52606,295.01364,309.0672,323.6016,336.75754,350.5303,364.4827,378.61917,398.6004,416.39825,434.387,452.95105,472.60623,492.8849,513.56854,539.1032,565.51056,592.53876,624.4434,651.47015,679.4968,707.79407,736.67145,765.64026,794.7734,824.67737,851.1578,877.74207,914.2291,946.74677,979.4114,1011.223,1044.7917,1077.4437,1109.9976,1142.9766,1176.3695,1210.1844,1253.8357,1288.9528,1325.4841,1363.4569,1405.0974,1446.8535],y=[-1,91.1791,98.707664,106.23622,113.76477,121.29332,128.82188,136.35042,143.87898,151.40752,158.93608,169.99149,181.07625,192.19037,204.0482,215.939,227.86275,247.68594,267.5421,287.4312,303.82642,320.22522,336.62762,352.31927,368.01093,383.70255,394.43237,405.18146,415.94992,426.73764,437.5447,450.6,463.7003,476.84558,491.1275,502.55457,514.0121,531.4096,549.9796,568.5849,584.9965,605.67035,626.3862,646.0523,665.7556,685.4961,700.8394,723.3331,745.8653,768.4357,786.79193,809.5388,832.32904,855.16266,878.0396,899.4848,919.362,946.0396,974.7642,1003.5786,1030.077,1056.635,1085.2463,1113.9244,1149.2587,1178.0648,1200.2238,1227.6603,1257.243,1284.9174,1314.7529,1342.6652,1372.7524,1396.321,1427.3124,1458.3745,1482.3358,1511.9109,1541.5493,1569.1537,1596.8143,1622.4197,1648.074,1666.3761,1684.6782,1702.9803,1726.1047,1754.6715,1785.8666,1817.1375,1851.0603],p={flat:{name:"",default:1},characterHP:{name:"HP",pretty:"Character Base HP",const:!0},characterDEF:{name:"DEF",pretty:"Character Base DEF",const:!0},characterATK:{name:"ATK",pretty:"Character Base ATK",const:!0},characterEle:{name:"Character Element Key",default:"anemo",const:!0},characterLevel:{name:"Character Level",default:1,const:!0},weaponATK:{name:"Weapon ATK",pretty:"ATK Weapon",const:!0},baseATK:{name:"ATK",pretty:"ATK Base",const:!0},hp:{name:"HP",pretty:"Flat HP"},hp_:{name:"HP",unit:"%",pretty:"HP Bonus"},atk:{name:"ATK",pretty:"Flat ATK"},atk_:{name:"ATK",unit:"%",pretty:"ATK Bonus"},def:{name:"DEF",pretty:"Flat DEF"},def_:{name:"DEF",unit:"%",pretty:"DEF Bonus"},dmg_:{name:"All DMG Bonus",unit:"%"},finalHP:{name:"HP",pretty:"HP"},finalATK:{name:"ATK",pretty:"ATK"},finalDEF:{name:"DEF",pretty:"DEF"},critHit_base_multi:{name:"Crit Multiplier",unit:"multi"},eleMas:{name:"Elemental Mastery"},enerRech_:{name:"Energy Recharge",unit:"%",default:100},critRate_:{name:"CRIT Rate",unit:"%",default:5},critDMG_:{name:"CRIT DMG",unit:"%",default:50},weakspotDMG_:{name:"Weakspot DMG",unit:"%"},heal_:{name:"Healing Bonus",unit:"%"},incHeal_:{name:"Incoming Healing Bonus",unit:"%"},powShield_:{name:"Shield Strength",unit:"%"},cdRed_:{name:"CD Red.",unit:"%"},skillCDRed_:{name:"Ele. Skill CD Red.",unit:"%"},burstCDRed_:{name:"Ele. Burst CD Red.",unit:"%"},moveSPD_:{name:"Movement SPD",unit:"%"},atkSPD_:{name:"ATK SPD",unit:"%"},stamina:{name:"Stamina"},staminaDec_:{name:"Stamina Consumption Dec.",unit:"%"},staminaSprintDec_:{name:"Sprinting Stamina Consumption Dec.",unit:"%"},staminaGlidingDec_:{name:"Gliding Stamina Consumption Dec.",unit:"%"},staminaChargedDec_:{name:"Charged Attack Stamina Consumption Dec.",unit:"%"},heal_multi:{name:"Heal multiplier",unit:"multi"},transformative_level_multi:{name:"Reaction Level Multiplier",unit:"multi",const:!0},amplificative_dmg_:{name:"Amplificative Reaction DMG Bonus",unit:"%"},transformative_dmg_:{name:"Transformative Reaction DMG Bonus",unit:"%"},crystalize_eleMas_:{name:"Crystalize Bonus (Elemental Mastery)",unit:"%",variant:"crystalize"},crystalize_multi:{name:"Crystalize Multiplier",unit:"multi",const:!0,variant:"crystalize"},crystalize_dmg_:{name:"Crystalize Bonus",unit:"%",variant:"crystalize"},crystalize_hit:{name:"Crystalize Shield HP",variant:"crystalize"},burning_dmg_:{name:"Burning DMG Bonus",variant:"burning"},enemyLevel:{name:"Enemy Level",const:!0},enemyLevel_multi:{name:"Enemy Level RES Multiplier",unit:"multi",const:!0},enemyDEFRed_:{name:"Enemy DEF Reduction",unit:"%",const:!0},infusionSelf:{name:"Elemental Infusion",const:!0,default:""},autoBoost:{name:"Normal Attack Level Boost",const:!0},skillBoost:{name:"Ele. Skill Level Boost",const:!0},burstBoost:{name:"Ele. Burst Level Boost",const:!0}},_={baseATK:function(t,n){return n.characterATK+n.weaponATK},finalATK:function(t,n){return n.baseATK*(1+t.atk_/100)+t.atk},finalHP:function(t,n){return n.characterHP*(1+t.hp_/100)+t.hp},finalDEF:function(t,n){return n.characterDEF*(1+t.def_/100)+t.def},critHit_base_multi:function(t){return 1+t.critDMG_/100},enemyLevel_multi:function(t,n){return(100+n.characterLevel)/(100+n.characterLevel+(100+n.enemyLevel)*(1-n.enemyDEFRed_/100))},heal_multi:function(t){return 1+t.heal_/100+t.incHeal_/100},transformative_level_multi:function(t,n){return d[n.characterLevel]},amplificative_dmg_:function(t){return 2500/9*t.eleMas/(1400+t.eleMas)},transformative_dmg_:function(t){return 1600*t.eleMas/(2e3+t.eleMas)},crystalize_eleMas_:function(t){return 4e3/9*t.eleMas/(1400+t.eleMas)},crystalize_multi:function(t,n){return y[n.characterLevel]},crystalize_hit:function(t,n){return(100+t.crystalize_dmg_+t.crystalize_eleMas_)/100*n.crystalize_multi}};["pyro","cryo","electro","hydro"].forEach((function(t){p["".concat(t,"_crystalize_hit")]={name:"Crystalize Shield ".concat(h[t].name," Effective HP"),variant:t},_["".concat(t,"_crystalize_hit")]=function(t){return 2.5*t.crystalize_hit}}));function b(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n.modifiers,a=void 0===r?{}:r,c={},i={},o=t.map((function(t){var r,o,l,s,f,m,v,h,d=null!==(r=a[t])&&void 0!==r?r:{},y=Object.entries(d).filter((function(t){var n,e=Object(u.a)(t,1)[0];return null===(n=p[e])||void 0===n?void 0:n.const})),b=Object.entries(d).filter((function(t){var n,e=Object(u.a)(t,1)[0];return!(null===(n=p[e])||void 0===n?void 0:n.const)})),g=function(t,n){return y.reduce((function(t,e){var r=Object(u.a)(e,2),a=r[0],c=r[1];return t+n[a]*c}),0)},O=function(t,n){return b.reduce((function(n,e){var r=Object(u.a)(e,2),a=r[0],c=r[1];return n+t[a]*c}),0)},j=0;switch(y.length&&(j+=1),b.length&&(j+=2),_[t]||(j+=(null===(o=p[t])||void 0===o?void 0:o.const)?4:8),j){case 0:h=_[t];break;case 1:h=function(n,e){return _[t](n,e)+g(0,e)};break;case 2:h=function(n,e){return _[t](n,e)+O(n)};break;case 3:h=function(n,e){return _[t](n,e)+g(0,e)+O(n)};break;case 4:h=function(n,e){return e[t]};break;case 5:h=function(n,e){return e[t]+g(0,e)};break;case 6:h=function(n,e){return e[t]+O(n)};break;case 7:h=function(n,e){return e[t]+g(0,e)+O(n)};break;case 8:h=function(n,e){return n[t]};break;case 9:h=function(n,e){return n[t]+g(0,e)};break;case 10:h=function(n,e){return n[t]+O(n)};break;default:h=function(n,e){return n[t]+g(0,e)+O(n)}}var E=h;return e&&console.log((null===(l=p[t])||void 0===l?void 0:l.const)?"Const":"Dynamic",t,y,b,""+_[t]),t in _||(n[t]=null!==(s=null!==(f=n[t])&&void 0!==f?f:null===(m=p[t])||void 0===m?void 0:m.default)&&void 0!==s?s:0),(null===(v=p[t])||void 0===v?void 0:v.const)?(i[t]=n[t],i[t]=E(n,i),n[t]=i[t],void(b.length&&console.error("Constant key ".concat(t," depends on a dynamic modifer ").concat(b,". The result will be incorrect.")))):(t in _||(c[t]=n[t]),[t,E])})).filter((function(t){return t}));return e&&console.log(c,i),{initialStats:c,formula:function(t){o.forEach((function(n){var e=Object(u.a)(n,2),r=e[0],a=e[1];return t[r]=a(t,i)})),Object.assign(t,i)}}}Object.entries(v).forEach((function(t){var n=Object(u.a)(t,2),e=n[0],r=n[1];p["".concat(e,"_dmg_")]={name:"".concat(r," DMG Bonus"),unit:"%"},p["".concat(e,"_critRate_")]={name:"".concat(r," CRIT Rate Bonus"),unit:"%"},p["final_".concat(e,"_critRate_")]={name:"".concat(r," CRIT Rate"),unit:"%"},_["final_".concat(e,"_critRate_")]=function(t){return Object(s.a)(t.critRate_+t["".concat(e,"_critRate_")],0,100)}})),Object.entries(h).forEach((function(t){var n=Object(u.a)(t,2),e=n[0],r=n[1].name,a={variant:e};p["".concat(e,"_dmg_")]=Object(i.a)({name:"".concat(r," DMG Bonus"),unit:"%"},a),p["".concat(e,"_res_")]=Object(i.a)({name:"".concat(r," DMG RES"),unit:"%"},a),p["".concat(e,"_enemyRes_")]=Object(i.a)({name:"Enemy ".concat(r," DMG RES"),unit:"%",default:10},a),p["".concat(e,"_enemyImmunity")]=Object(i.a)({name:"Enemy ".concat(r," Immunity"),default:!1,const:!0},a),p["".concat(e,"_enemyRes_multi")]=Object(i.a)({name:"Enemy ".concat(r," RES Multiplier"),unit:"multi"},a),p["".concat(e,"_bonus_multi")]=Object(i.a)({name:"".concat(r," Attack Bonus DMG Multiplier"),unit:"multi"},a),_["".concat(e,"_enemyRes_multi")]=function(t,n){return n["".concat(e,"_enemyImmunity")]?0:(r=t["".concat(e,"_enemyRes_")],(r/=100)<0?1-r/2:r>=.75?1/(4*r+1):1-r);var r}})),Object.entries(v).forEach((function(t){var n=Object(u.a)(t,2),e=n[0],r=n[1];p["".concat(e,"_avgHit_base_multi")]={name:"".concat(r," Avg. Multiplier"),unit:"multi"},_["".concat(e,"_avgHit_base_multi")]=function(t){return 1+t.critDMG_*t["final_".concat(e,"_critRate_")]/1e4},Object.entries(h).forEach((function(t){var n=Object(u.a)(t,2),a=n[0],c=(n[1].name,{variant:a});p["".concat(a,"_").concat(e,"_hit_base_multi")]=Object(i.a)({name:"".concat(r," Base Multiplier"),unit:"multi"},c),_["".concat(a,"_").concat(e,"_hit_base_multi")]=function(t,n){return(100+t.dmg_+t["".concat(a,"_dmg_")]+t["".concat(e,"_dmg_")])/100},Object.entries(m).forEach((function(t){var n=Object(u.a)(t,2),o=n[0],l=n[1];p["".concat(a,"_").concat(e,"_").concat(o)]=Object(i.a)({name:"".concat(r," ").concat(l)},c),_["".concat(a,"_").concat(e,"_").concat(o)]=function(t){return t.finalATK*t["".concat(a,"_").concat(e,"_").concat(o,"_multi")]},p["".concat(a,"_").concat(e,"_").concat(o,"_multi")]=Object(i.a)({name:"".concat(r," ").concat(l," Multiplier"),unit:"multi"},c)})),_["".concat(a,"_").concat(e,"_hit_multi")]=function(t,n){return t["".concat(a,"_").concat(e,"_hit_base_multi")]*n.enemyLevel_multi*t["".concat(a,"_enemyRes_multi")]},_["".concat(a,"_").concat(e,"_critHit_multi")]=function(t){return t["".concat(a,"_").concat(e,"_hit_multi")]*t.critHit_base_multi},_["".concat(a,"_").concat(e,"_avgHit_multi")]=function(t){return t["".concat(a,"_").concat(e,"_hit_multi")]*t["".concat(e,"_avgHit_base_multi")]}}))})),Object.entries({overloaded:{name:"Overloaded",multi:2,variants:["pyro"]},shattered:{name:"Shattered",multi:1.5,variants:["physical"]},electrocharged:{name:"Electro-Charged",multi:1.2,variants:["electro"]},superconduct:{name:"Superconduct",multi:.5,variants:["cryo"]},swirl:{name:"Swirl",multi:.6,variants:["pyro","hydro","electro","cryo"]}}).forEach((function(t){var n=Object(u.a)(t,2),e=n[0],r=n[1],a=r.name,c=r.multi,o=r.variants,l={variant:e};if(p["".concat(e,"_dmg_")]=Object(i.a)({name:"".concat(a," DMG Bonus"),unit:"%"},l),p["".concat(e,"_multi")]=Object(i.a)({name:"".concat(a," Multiplier"),unit:"multi",const:!0},l),_["".concat(e,"_multi")]=function(t,n){return c*n.transformative_level_multi},1===o.length){var s=Object(u.a)(o,1)[0],f={variant:e};p["".concat(e,"_hit")]=Object(i.a)({name:"".concat(a," DMG")},f),_["".concat(e,"_hit")]=function(t,n){return(100+t.transformative_dmg_+t["".concat(e,"_dmg_")])/100*n["".concat(e,"_multi")]*t["".concat(s,"_enemyRes_multi")]}}else o.forEach((function(t){var n={variant:t};p["".concat(t,"_").concat(e,"_hit")]=Object(i.a)({name:"".concat(h[t].name," ").concat(a," DMG")},n),_["".concat(t,"_").concat(e,"_hit")]=function(n,r){return(100+n.transformative_dmg_+n["".concat(e,"_dmg_")])/100*r["".concat(e,"_multi")]*n["".concat(t,"_enemyRes_multi")]}}))})),Object.entries({vaporize:{name:"Vaporize",variants:{pyro:1.5,hydro:2}},melt:{name:"Melt",variants:{pyro:2,cryo:1.5}}}).forEach((function(t){var n=Object(u.a)(t,2),e=n[0],r=n[1],a=r.name,c=r.variants,o={variant:e};p["".concat(e,"_dmg_")]=Object(i.a)({name:"".concat(a," DMG Bonus"),unit:"%"},o),Object.entries(c).forEach((function(t){var n=Object(u.a)(t,2),r=n[0],c=n[1];p["".concat(r,"_").concat(e,"_multi")]=Object(i.a)({name:"".concat(a," Multiplier"),unit:"multi"},o),_["".concat(r,"_").concat(e,"_multi")]=function(t){return c*(100+t.amplificative_dmg_+t["".concat(e,"_dmg_")])/100},Object.entries(m).forEach((function(t){var n=Object(u.a)(t,2),c=n[0],l=n[1];Object.entries(v).forEach((function(t){var n=Object(u.a)(t,2),s=n[0],f=n[1];p["".concat(r,"_").concat(e,"_").concat(s,"_").concat(c,"_multi")]=Object(i.a)({name:"".concat(a," ").concat(f," ").concat(l," Multiplier"),unit:"multi"},o),p["".concat(r,"_").concat(e,"_").concat(s,"_").concat(c)]=Object(i.a)({name:"".concat(a," ").concat(f," ").concat(l)},o),_["".concat(r,"_").concat(e,"_").concat(s,"_").concat(c,"_multi")]=function(t){return t["".concat(r,"_").concat(s,"_").concat(c,"_multi")]*t["".concat(r,"_").concat(e,"_multi")]},_["".concat(r,"_").concat(e,"_").concat(s,"_").concat(c)]=function(t){return t.finalATK*t["".concat(r,"_").concat(e,"_").concat(s,"_").concat(c,"_multi")]}}))}))}))}));var g=e(3);function O(t){var n=new Set;return t(new Proxy({},{get:function(t,e,r){n.add(e.toString())}}),new Proxy({},{get:function(t,e,r){n.add(e.toString())}})),Object(o.a)(n)}var j=Object.freeze(Object.fromEntries(Object.entries(_).map((function(t){var n=Object(u.a)(t,2);return[n[0],O(n[1])]}))));function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.keys(p),e=new Set;return n.forEach((function(n){return w(n,t,e)})),Object(o.a)(e)}function w(t,n,e){var r,a;e.has(t)||(null===(r=j[t])||void 0===r||r.forEach((function(t){return w(t,n,e)})),Object.keys(null!==(a=n[t])&&void 0!==a?a:{}).forEach((function(t){return w(t,n,e)})),e.add(t))}var S=e.e(1).then(e.bind(null,13)).then((function(t){return k.formulas=t.default,t.default})),k=function t(){if(function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this instanceof t)throw Error("A static class cannot be instantiated.")};k.formulas={},k.get=function(t){return S.then((function(n){return Object(s.c)(n,t)}))},onmessage=function(){var t,n=(t=a.a.mark((function t(n){var e,r,l,s,f,m,v,h,d,y,p,_,O,j,w,S,M,D,A,P,R,x,L,T,K,C,B,G,F,H,z,I,N,V,W,$,Y,U,q;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=performance.now(),r=n.data,l=r.splitArtifacts,s=r.setFilters,f=r.minFilters,m=void 0===f?{}:f,v=r.maxFilters,h=void 0===v?{}:v,d=r.initialStats,y=r.artifactSetEffects,p=r.maxBuildsToShow,_=r.optimizationTarget,O=r.ascending,j=r.turbo,w=void 0!==j&&j,"string"!==typeof _){t.next=7;break}S=function(t){return t[_]},M=[_],t.next=21;break;case 7:return t.next=9,k.get(_);case 9:if("function"!==typeof(D=t.sent)){t.next=17;break}A=D(d),P=Object(u.a)(A,2),S=P[0],M=P[1],t.next=20;break;case 17:return postMessage({progress:0,timing:0},void 0),postMessage({builds:[],timing:0},void 0),t.abrupt("return");case 20:1===M.length&&(R=M[0],S=function(t){return t[R]});case 21:x=E(d.modifiers,[].concat(Object(o.a)(M),Object(o.a)(Object.keys(m)),Object(o.a)(Object.keys(h)))),L=Object(g.c)(l,s),T=l,K=L,w&&0===Object.keys(O?m:h).length&&(T=(C=function(t){return Object.fromEntries(Object.entries(l).map((function(n){var e=Object(u.a)(n,2),r=e[0],a=e[1];return[r,Object(g.e)(a,y,new Set(x),O,new Set(t))]})))})([]),(K=Object(g.c)(T,s))<1&&(T=C(s.map((function(t){return t.key}))),K=Object(g.c)(T,s))),B=b(x,d),G=B.initialStats,F=B.formula,H=[],z=-1/0,I=0,N=L-K,V=function(){H.sort((function(t,n){return n.buildFilterVal-t.buildFilterVal})),H.splice(p)},W=function(t,n){if(++I%1e4||postMessage({progress:I,timing:performance.now()-e,skipped:N},void 0),F(n),!Object.entries(m).some((function(t){var e=Object(u.a)(t,2),r=e[0],a=e[1];return n[r]<a}))&&!Object.entries(h).some((function(t){var e=Object(u.a)(t,2),r=e[0],a=e[1];return n[r]>a}))){var r=O?-S(n):S(n);r>=z&&(H.push({buildFilterVal:r,artifacts:Object(i.a)({},t)}),H.length>=1e3&&(V(),z=H[H.length-1].buildFilterVal))}},$=Object(c.a)(Object(g.b)(T,s));try{for($.s();!(Y=$.n()).done;)U=Y.value,Object(g.a)(G,U,y,W)}catch(a){$.e(a)}finally{$.f()}V(),w&&(H=[H[0]]),q=performance.now(),postMessage({progress:I,timing:q-e,skipped:N},void 0),postMessage({builds:H,timing:q-e,skipped:N},void 0);case 37:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,a){var c=t.apply(n,e);function i(t){l(c,r,a,i,o,"next",t)}function o(t){l(c,r,a,i,o,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}()}]);
//# sourceMappingURL=BuildWorker.aff97a3d.worker.js.map