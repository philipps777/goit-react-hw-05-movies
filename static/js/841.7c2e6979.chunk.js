/*! For license information please see 841.7c2e6979.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[841],{687:function(t,r,n){n.d(r,{Df:function(){return c},Eb:function(){return l},Hu:function(){return f},Pg:function(){return s},Ph:function(){return u}});var e=n(861),o=n(243);function i(){i=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,n){return t[r]=n}}function f(t,r,n,e){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new G(e||[]);return o(a,"_invoke",{value:_(t,n,c)}),a}function h(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",d="executing",v="completed",y={};function g(){}function x(){}function m(){}var w={};l(w,c,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(S([])));L&&L!==n&&e.call(L,c)&&(w=L);var j=m.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function n(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function _(r,n,e){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=Z(c,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var s=h(r,n,e);if("normal"===s.type){if(o=e.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=v,e.method="throw",e.arg=s.arg)}}}function Z(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,Z(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),y;var i=h(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function S(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return x.prototype=m,o(j,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:x,configurable:!0}),x.displayName=l(m,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===x||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},E(k.prototype),l(k.prototype,u,(function(){return this})),r.AsyncIterator=k,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new k(f(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(j),l(j,s,"Generator"),l(j,c,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=S,G.prototype={constructor:G,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:S(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),y}},r}o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a="6aeaa8beaecf2aa788be79aa448ce67d",c=function(){var t=(0,e.Z)(i().mark((function t(){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("trending/movie/week?api_key=".concat(a));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,e.Z)(i().mark((function t(r){var n,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("search/movie?api_key=".concat(a,"&query=").concat(r,"&language=en-US&page=1&include_adult=false"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(i().mark((function t(r){var n,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(r,"?api_key=").concat(a,"&language=en-US"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(i().mark((function t(r){var n,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(r,"/credits?api_key=").concat(a,"&language=en-US"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.cast);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(i().mark((function t(r){var n,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(r,"/reviews?api_key=").concat(a,"&language=en-US"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},133:function(t,r,n){n.d(r,{II:function(){return f},UI:function(){return l},Yb:function(){return s},zx:function(){return h}});var e,o,i,a,c=n(168),u=n(867),s=u.ZP.div(e||(e=(0,c.Z)(["\n  width: 100%;\n  padding: 160px 30px 30px 30px;\n  margin-bottom: 15px;\n  border: 1px solid rgba(13, 37, 63, 1);\n  //   border-radius: 0 0 8px 8px;\n  //   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  //   background-image: linear-gradient(\n  //     to right,\n  //     rgba(1, 180, 228, 1) 0%,\n  //     rgba(13, 37, 63, 1) 100%\n  //   );\n  //   display: flex;\n  // //   align-items: center;\n  //   justify-content: space-around\n  background-color: #2d424a;\n  display: flex;\n  justify-content: center;\n"]))),l=u.ZP.form(o||(o=(0,c.Z)(["\n  display: flex;\n\n  //   justify-content: center\n  //   background-color: #2d424a;\n  //   border-radius: 5px;\n  //   overflow: hidden;\n  gap: 10px;\n\n  margin: 0 auto;\n  position: relative;\n  top: 0;\n  left: 0;\n"]))),f=u.ZP.input(i||(i=(0,c.Z)(["\n  padding: 6px 6px;\n  border: 3px solid #ccc;\n  border-radius: 4px;\n  font-family: inherit;\n  font-size: 20px;\n  color: #333;\n  transition: border-color 0.3s, box-shadow 0.3s;\n\n  &:focus {\n    outline: none;\n    border-color: orange;\n    box-shadow: 0 0 5px rgba(102, 175, 233, 0.5);\n  }\n"]))),h=u.ZP.button(a||(a=(0,c.Z)(["\n  display: inline-flex;\n  padding: 10px 7px;\n  border: 1px solid black;\n  border-radius: 8px;\n  font-family: inherit;\n  font-size: 20px;\n  background-color: cyan;\n  color: black;\n  cursor: pointer;\n  text-align: center;\n  &:hover {\n    background-color: orange;\n  }\n"])))},751:function(t,r,n){n.d(r,{f:function(){return e},l:function(){return o}});var e="https://image.tmdb.org/t/p/w500/",o="https://via.placeholder.com/182x273"},841:function(t,r,n){n.r(r);var e=n(861),o=n(439),i=n(791),a=n(689),c=n(87),u=n(687),s=n(751),l=n(133),f=n(65),h=n(366),p=n(184);function d(){d=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,n){return t[r]=n}}function l(t,r,n,e){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new G(e||[]);return o(a,"_invoke",{value:_(t,n,c)}),a}function f(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var h="suspendedStart",p="executing",v="completed",y={};function g(){}function x(){}function m(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(S([])));L&&L!==n&&e.call(L,a)&&(w=L);var j=m.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function _(r,n,e){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=Z(c,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===h)throw o=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=p;var s=f(r,n,e);if("normal"===s.type){if(o=e.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=v,e.method="throw",e.arg=s.arg)}}}function Z(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,Z(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),y;var i=f(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function S(r){if(r||""===r){var n=r[a];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return x.prototype=m,o(j,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:x,configurable:!0}),x.displayName=s(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===x||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},E(k.prototype),s(k.prototype,c,(function(){return this})),r.AsyncIterator=k,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new k(l(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=S,G.prototype={constructor:G,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:S(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),y}},r}r.default=function(){var t,r,n,v=(0,a.UO)().movieId,y=(0,i.useState)(""),g=(0,o.Z)(y,2),x=g[0],m=g[1],w=(0,a.TH)(),b=null!==(t=null===(r=w.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/movies";if((0,i.useEffect)((function(){var t=function(){var t=(0,e.Z)(d().mark((function t(){var r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Pg)(v);case 3:r=t.sent,m(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[v]),x)return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(f.$0,{children:[(0,p.jsx)(h.JE,{children:(0,p.jsx)("span",{children:(0,p.jsx)(l.zx,{children:(0,p.jsx)(c.rU,{to:b,children:"Go back"})})})}),(0,p.jsxs)(h.t0,{children:[(0,p.jsx)(h.zP,{src:"".concat(x.poster_path?s.f+x.poster_path:s.l+"?text="+x.original_title),alt:"get"}),(0,p.jsxs)("div",{children:[(0,p.jsx)(h.Gv,{children:x.original_title}),(0,p.jsxs)(h.KJ,{children:["Rating: ",Math.round(x.vote_average)]}),(0,p.jsx)(h.KJ,{children:"Overview"}),(0,p.jsx)(h.nZ,{children:x.overview}),(0,p.jsx)(h.KJ,{children:"Genres"}),(0,p.jsx)(h.v0,{children:null===(n=x.genres)||void 0===n?void 0:n.map((function(t){return(0,p.jsx)("li",{children:t.name},t.id)}))})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)(h.Gv,{children:"Additional information"}),(0,p.jsxs)(h.CK,{children:[(0,p.jsx)(h.HC,{children:(0,p.jsx)(c.OL,{to:"cast",state:w.state,children:(0,p.jsx)(l.zx,{children:"Cast"})})}),(0,p.jsx)(h.HC,{children:(0,p.jsx)(c.OL,{to:"reviews",state:w.state,children:(0,p.jsx)(l.zx,{children:"Reviews"})})})]}),(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading subpage..."}),children:(0,p.jsx)(a.j3,{})})]})]})})}},366:function(t,r,n){n.d(r,{CK:function(){return b},Gv:function(){return g},HC:function(){return L},JE:function(){return j},KJ:function(){return x},nZ:function(){return m},t0:function(){return v},v0:function(){return w},zP:function(){return y}});var e,o,i,a,c,u,s,l,f,h,p=n(168),d=n(867),v=(d.ZP.span(e||(e=(0,p.Z)(["\n\nmargin top: 100px;\n"]))),d.ZP.div(o||(o=(0,p.Z)(["\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  padding-left: 14px;\n"])))),y=d.ZP.img(i||(i=(0,p.Z)(["\n  max-width: 182px;\n  //   background: #424242;\n  border-radius: 15px;\n"]))),g=d.ZP.h2(a||(a=(0,p.Z)(["\n  font-size: 26px;\n  margin-bottom: 12px;\n  padding-left: 14px;\n"]))),x=d.ZP.h3(c||(c=(0,p.Z)(["\n  font-size: 16px;\n  margin-bottom: 6px;\n"]))),m=d.ZP.p(u||(u=(0,p.Z)(["\n  font-size: 16px;\n  color: #888888;\n  margin-bottom: 12px;\n"]))),w=d.ZP.ul(s||(s=(0,p.Z)(["\n  font-size: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  padding: 0;\n\n  border-radius: 20px;\n  color: #888888;\n  margin-bottom: 12px;\n"]))),b=d.ZP.ul(l||(l=(0,p.Z)(["\n  display: flex;\n  gap: 18px;\n  padding: 0 14px;\n  flex-direction: column;\n  border-radius: 20px;\n"]))),L=d.ZP.li(f||(f=(0,p.Z)(["\n  span {\n    color: #ffc700;\n  }\n\n  a:hover,\n  a:focus,\n  a:active {\n    color: #ffc700;\n    span {\n      color: white;\n    }\n  }\n"]))),j=d.ZP.div(h||(h=(0,p.Z)(["\n  max-width: 1440px;\n  padding: 0 14px;\n\n  margin-right: auto;\n"])))}}]);
//# sourceMappingURL=841.7c2e6979.chunk.js.map