"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[414],{687:function(e,t,n){n.d(t,{Df:function(){return o},Eb:function(){return p},Hu:function(){return v},Pg:function(){return f},Ph:function(){return i}});var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="6aeaa8beaecf2aa788be79aa448ce67d",o=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/week?api_key=".concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},725:function(e,t,n){var r=n(689),a=n(87),u=n(184);t.Z=function(e){var t=e.movies,n=(0,r.TH)();return(0,u.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.original_title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{state:{from:n},to:"/movies/".concat(t),children:r})},t)}))})}},414:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),o=n(87),i=n(687),f=n(184),p=function(e){var t=e.setSearchParams,n=(0,s.useState)(""),r=(0,a.Z)(n,2),u=r[0],c=r[1];return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({query:u})},children:[(0,f.jsx)("input",{type:"text",placeholder:"Name movie",autoFocus:!0,value:u,onChange:function(e){var t=e.target.value;c(t)}}),(0,f.jsx)("button",{type:"submit",disabled:!u,children:"Search"})]})},v=n(725),l=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],l=(0,o.lr)(),h=(0,a.Z)(l,2),d=h[0],m=h[1];return(0,s.useEffect)((function(){var e=d.get("query");if(e){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.Ph)(e);case 3:n=t.sent,u(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}}),[d]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{setSearchParams:m}),n.length>0&&(0,f.jsx)(v.Z,{movies:n})]})}}}]);
//# sourceMappingURL=414.c871fb83.chunk.js.map