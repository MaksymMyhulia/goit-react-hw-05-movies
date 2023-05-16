"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[281],{2429:function(n,e,t){t.d(e,{O:function(){return o}});var r=t(1087),a=t(7689),u=t(184),o=function(n){var e=n.movies,t=(0,a.TH)();return(0,u.jsx)("ul",{children:e.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{to:"/movies/".concat(n.id),state:{from:t},children:n.title||n.name})},n.id)}))})}},4281:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,u,o=t(5861),c=t(9439),i=t(4687),s=t.n(i),p=t(2791),f=t(1087),d=t(1414),l=t(168),h=t(3081),m=h.Z.form(r||(r=(0,l.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\ngap: 12px;\n\nmargin: 0 auto;\nmargin-bottom: ","px;\npadding: ","px;\n\nwidth: 480px;\nmax-width: 100%;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]})),x=h.Z.input(a||(a=(0,l.Z)(["\n  width: 320px;\n  padding: ","px ","px;\n  border-radius: ","px;\n  border: none;\n  box-shadow: ",";\n  color: ",";\n  background-color: ",";\n\n  font-size: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.shadows.normal}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.fontSizes.m})),g=h.Z.button(u||(u=(0,l.Z)(["\n  font-size: 24px;\n  padding: 0 10px;\n  padding: ","px ","px;\n  border-radius: ","px;\n  border: none;\n  box-shadow: ",";\n  transition: all 0.25s ease-in-out;\n  cursor: pointer;\n  background-color: ",";\n  color: ",";\n\n  transition: transform 250ms linear;\n  outline: none;\n  :hover,\n  :focus {\n      background-color: ",";\n      box-shadow: -2px -2px 5px #fff, 2px 2px 5px #8ba793;\n      color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.shadows.normal}),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.secondaryBackground}),(function(n){return n.theme.colors.white})),v=t(2429),b=t(9217),y=t(184),w=function(){var n=(0,p.useState)(null),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)("idle"),u=(0,c.Z)(a,2),i=u[0],l=u[1],h=(0,f.lr)({}),w=(0,c.Z)(h,2),k=w[0],Z=w[1];function _(){return(_=(0,o.Z)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l("pending"),n.next=4,(0,d.pg)(e);case 4:t=n.sent,r(t),l("responded"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),l("rejected");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}return(0,p.useEffect)((function(){var n=k.get("query");n&&function(n){_.apply(this,arguments)}(n)}),[k]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(m,{onSubmit:function(n){n.preventDefault();var e=n.target.query.value,t=e.trim()?{query:e}:{};Z(t)},children:[(0,y.jsx)(x,{type:"text",name:"query",placeholder:"Search..."}),(0,y.jsx)(g,{type:"submit",children:"Submit"})]}),"responded"===i&&(0,y.jsx)(v.O,{movies:t}),"pending"===i&&(0,y.jsx)(b.a,{}),"rejected"===i&&(0,y.jsx)("h2",{children:"Sorry we didn't find this page"})]})}},1414:function(n,e,t){t.d(e,{L_:function(){return h},Me:function(){return d},_k:function(){return i},jC:function(){return x},pg:function(){return p}});var r=t(5861),a=t(4687),u=t.n(a),o=t(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="80849c20aa63241eb028c4e7b7d0f3a8";function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/all/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US&external_source=imdb_id"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=281.5ef393b9.chunk.js.map