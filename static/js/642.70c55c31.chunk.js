"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[642],{642:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,i,c,s=e(5861),u=e(9439),o=e(7757),p=e.n(o),f=e(2791),l=e(3430),d=e(4390),h=e(168),x=e(5867),g=x.zo.div(r||(r=(0,h.Z)(["\n  margin: 0 auto;\n  text-align: center;\n"]))),m=x.zo.h2(a||(a=(0,h.Z)(["\n  margin-bottom: ",";\n  color: ",";\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.black})),v=x.zo.ul(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: ",";\n  row-gap: ",";\n  justify-content: center;\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(4)})),w=x.zo.li(c||(c=(0,h.Z)(["\n  flex-basis: calc((100% - 48px) / 4);\n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n  border-radius: ",";\n  display: flex;\n  gap: ",";\n  flex-direction: column;\n  align-items: center;\n"])),(function(n){return n.theme.radii.lg}),(function(n){return n.theme.spacing(2)})),b=e(7689),y=e(1087),Z=e(184),k=function(n){var t=n.items,e=(0,b.TH)();return(0,Z.jsxs)(g,{children:[(0,Z.jsx)(m,{children:"Trending today"}),(0,Z.jsx)(v,{children:t.map((function(n){var t=n.id,r=n.title,a="https://image.tmdb.org/t/p/w200"+n.poster_path;return(0,Z.jsx)(w,{children:(0,Z.jsxs)(y.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,Z.jsx)("img",{src:a,alt:r}),(0,Z.jsx)("p",{children:r})]})},t)}))})]})};function j(){var n=(0,f.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,f.useState)(!1),i=(0,u.Z)(a,2),c=i[0],o=i[1],h=(0,f.useState)(!1),x=(0,u.Z)(h,2),g=x[0],m=x[1];return(0,f.useEffect)((function(){function n(){return(n=(0,s.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),m(!1),n.next=5,(0,d.wr)();case 5:t=n.sent,r(t.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),m(!0);case 12:return n.prev=12,o(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,Z.jsxs)("div",{children:[c&&(0,Z.jsx)(l.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0}),g&&(0,Z.jsx)("b",{children:"Oops! Something went wrong! Please try reloading this page!"}),e.length>0&&(0,Z.jsx)(k,{items:e})]})}},4390:function(n,t,e){e.d(t,{LI:function(){return o},Mc:function(){return p},wr:function(){return u}});var r=e(5861),a=e(7757),i=e.n(a),c=e(5294),s="a74d577cd193b62ed06f68b282af6a8f";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=642.70c55c31.chunk.js.map