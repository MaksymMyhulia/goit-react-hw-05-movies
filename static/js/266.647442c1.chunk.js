(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[266],{2429:function(e,t,n){"use strict";n.d(t,{O:function(){return s}});var r=n(1087),a=n(7689),c=n(2007),u=n.n(c),i=n(184),s=function(e){var t=e.movies,n=(0,a.TH)();return(0,i.jsx)("ul",{children:t.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(r.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title||e.name})},e.id)}))})};s.protoType={movies:u().arrayOf(u().object.isRequired).isRequired}},1266:function(e,t,n){"use strict";n.r(t);var r=n(5861),a=n(9439),c=n(4687),u=n.n(c),i=n(2791),s=n(1414),o=n(2429),p=n(9217),f=n(184);t.default=function(){var e=(0,i.useState)(null),t=(0,a.Z)(e,2),n=t[0],c=t[1],d=(0,i.useState)("idle"),l=(0,a.Z)(d,2),h=l[0],v=l[1];function y(){return(y=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v("pending"),e.next=4,(0,s._k)();case 4:t=e.sent,c(t),v("responded"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),v("rejected");case 12:return e.abrupt("return",(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Movies are trending today"}),"responded"===h&&(0,f.jsx)(o.O,{movies:n}),"pending"===h&&(0,f.jsx)(p.a,{}),"rejected"===h&&(0,f.jsx)("h2",{children:"Sorry we didn't find this page"})]}));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}(0,i.useEffect)((function(){!function(){y.apply(this,arguments)}()}))}},1414:function(e,t,n){"use strict";n.d(t,{L_:function(){return h},Me:function(){return d},_k:function(){return s},jC:function(){return y},pg:function(){return p}});var r=n(5861),a=n(4687),c=n.n(a),u=n(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="80849c20aa63241eb028c4e7b7d0f3a8";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/all/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US&external_source=imdb_id"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},888:function(e,t,n){"use strict";var r=n(9047);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,c,u){if(u!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=266.647442c1.chunk.js.map