"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[266],{2429:function(e,n,t){t.d(n,{O:function(){return c}});var r=t(1087),a=t(7689),u=t(184),c=function(e){var n=e.movies,t=(0,a.TH)();return(0,u.jsx)("ul",{children:n.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.title||e.name})},e.id)}))})}},1266:function(e,n,t){t.r(n);var r=t(5861),a=t(9439),u=t(4687),c=t.n(u),i=t(2791),s=t(1414),o=t(2429),p=t(9217),f=t(184);n.default=function(){var e=(0,i.useState)(null),n=(0,a.Z)(e,2),t=n[0],u=n[1],d=(0,i.useState)("idle"),l=(0,a.Z)(d,2),h=l[0],v=l[1];function g(){return(g=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v("pending"),e.next=4,(0,s._k)();case 4:n=e.sent,u(n),v("responded"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),v("rejected");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return(0,i.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Movies are trending today"}),"pending"===h&&(0,f.jsx)(p.a,{}),"responded"===h&&(0,f.jsx)(o.O,{movies:t}),"rejected"===h&&(0,f.jsx)("h2",{children:"Sorry we didn't find this page"})]})}},1414:function(e,n,t){t.d(n,{L_:function(){return h},Me:function(){return d},_k:function(){return s},jC:function(){return g},pg:function(){return p}});var r=t(5861),a=t(4687),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="80849c20aa63241eb028c4e7b7d0f3a8";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US&external_source=imdb_id"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=266.787891ec.chunk.js.map