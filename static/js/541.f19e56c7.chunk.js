"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[541],{2541:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(5861),a=r(9439),c=r(7757),u=r.n(c),i=r(2791),s=r(7689),o=r(3430),p=r(4390),f=r(184);function h(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],h=(0,i.useState)(!1),d=(0,a.Z)(h,2),l=d[0],v=d[1],w=(0,i.useState)(!1),g=(0,a.Z)(w,2),m=g[0],x=g[1],b=(0,s.UO)();return(0,i.useEffect)((function(){function t(){return(t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),x(!1),t.next=5,(0,p.uV)(b.movieId);case 5:e=t.sent,c(e.cast),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),x(!0);case 12:return t.prev=12,v(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[b.movieId]),console.log(r),(0,f.jsxs)("div",{children:[l&&(0,f.jsx)(o.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0}),m&&(0,f.jsx)("b",{children:"Oops! Something went wrong! Please try reloading this page!"}),r.length>0&&(0,f.jsx)("ul",{children:r.map((function(t){var e=t.id,r=t.profile_path,n=t.name,a=t.character,c="https://image.tmdb.org/t/p/w200"+r;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:c,alt:n}),(0,f.jsx)("p",{children:n}),(0,f.jsxs)("p",{children:["Character: ",a]})]},e)}))})]})}},4390:function(t,e,r){r.d(e,{LI:function(){return o},Mc:function(){return p},uV:function(){return f},wr:function(){return s}});var n=r(5861),a=r(7757),c=r.n(a),u=r(5294),i="a74d577cd193b62ed06f68b282af6a8f";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=541.f19e56c7.chunk.js.map