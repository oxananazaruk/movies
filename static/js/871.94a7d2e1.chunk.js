"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[871],{6871:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(5861),a=t(9439),s=t(7757),i=t.n(s),c=t(2791),u=t(7689),o=t(1087),p=t(3430),d=t(4390),h=t(184),l=function(e){var r=e.movie,t=r.genres,n=r.title,a=r.overview,s=r.poster_path,i=r.vote_average,c="https://image.tmdb.org/t/p/w200"+s;return(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:c,alt:n}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:n}),(0,h.jsxs)("p",{children:["User score: ",Math.round(10*i),"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:a}),(0,h.jsx)("h3",{children:"Genres"}),t.map((function(e){var r=e.name,t=e.id;return(0,h.jsxs)("span",{children:[r," "]},t)}))]})]})};function v(){var e=(0,c.useState)(null),r=(0,a.Z)(e,2),t=r[0],s=r[1],v=(0,c.useState)(!1),f=(0,a.Z)(v,2),x=f[0],w=f[1],j=(0,c.useState)(!1),m=(0,a.Z)(j,2),g=m[0],b=m[1],_=(0,u.UO)();return(0,c.useEffect)((function(){function e(){return(e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,d.Mc)(_.movieId);case 4:r=e.sent,s(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b(!0);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[_.movieId]),(0,h.jsxs)("div",{children:[x&&(0,h.jsx)(p.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0}),g&&(0,h.jsx)("b",{children:"Oops! Something went wrong! Please try reloading this page!"}),t&&(0,h.jsx)(l,{movie:t}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"reviews",children:"Reviews"})})]}),(0,h.jsx)(u.j3,{})]})}},4390:function(e,r,t){t.d(r,{LI:function(){return o},Mc:function(){return p},wr:function(){return u}});var n=t(5861),a=t(7757),s=t.n(a),i=t(5294),c="a74d577cd193b62ed06f68b282af6a8f";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day?api_key=".concat(c));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?api_key=".concat(c,"&query=").concat(r));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(r,"?api_key=").concat(c));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=871.94a7d2e1.chunk.js.map