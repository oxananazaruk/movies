"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[495],{9777:function(n,t,e){e.d(t,{j:function(){return c}});var r,i=e(168),a=e(5867).ZP.b(r||(r=(0,i.Z)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n"])),(function(n){return n.theme.colors.red})),u=e(184),c=function(){return(0,u.jsx)(a,{children:"Oops! Something went wrong! Please try reloading this page!"})}},8866:function(n,t,e){e.d(t,{a:function(){return a}});var r=e(3430),i=e(184),a=function(){return(0,i.jsx)(r.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})}},2429:function(n,t,e){e.d(t,{O:function(){return c}});var r=e(1087),i=e(8603),a=e(6907),u=e(184),c=function(n){var t=n.results,e=n.location;return(0,u.jsx)(i.yR,{children:(0,u.jsx)(i.eW,{children:t.map((function(n){var t=n.id,c=n.title,o=n.poster_path,s="https://image.tmdb.org/t/p/w200"+o;return(0,u.jsx)(i.uA,{children:(0,u.jsxs)(r.rU,{to:"/movies/".concat(t),state:{from:e},children:[o?(0,u.jsx)("img",{src:s,alt:c}):(0,u.jsx)(a.BEZ,{style:{width:"250px",height:"350px",color:"#808080"}}),(0,u.jsx)("p",{children:c})]})},t)}))})})}},8603:function(n,t,e){e.d(t,{eW:function(){return f},uA:function(){return l},yR:function(){return p},yU:function(){return s}});var r,i,a,u,c=e(168),o=e(5867),s=o.ZP.div(r||(r=(0,c.Z)(["\n  margin: 0 auto;\n  padding: 0 ",";\n  width: 100%;\n"])),(function(n){return n.theme.spacing(4)})),p=o.ZP.div(i||(i=(0,c.Z)(["\n  margin: 0 auto;\n  margin-top: ",";\n  text-align: center;\n"])),(function(n){return n.theme.spacing(4)})),f=o.ZP.ul(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: ",";\n  row-gap: ",";\n  justify-content: center;\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(4)})),l=o.ZP.li(u||(u=(0,c.Z)(["\n  flex-basis: calc((100% - 48px) / 4);\n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n  border-radius: ",";\n  display: flex;\n  gap: ",";\n  flex-direction: column;\n  align-items: center;\n"])),(function(n){return n.theme.radii.lg}),(function(n){return n.theme.spacing(2)}))},1495:function(n,t,e){e.r(t),e.d(t,{default:function(){return L}});var r,i,a,u,c,o=e(5861),s=e(9439),p=e(7757),f=e.n(p),l=e(2791),d=e(5218),h=e(4390),x=e(8866),g=e(9777),v=e(1087),m=e(168),y=e(5867),b=y.ZP.div(r||(r=(0,m.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 54px;\n"]))),Z=y.ZP.form(i||(i=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border: 1px solid ",";\n  border-radius: 6px;\n  overflow: hidden;\n"])),(function(n){return n.theme.colors.gray})),w=y.ZP.input(a||(a=(0,m.Z)(["\n  display: inline-block;\n  width: 100%;\n  font-size: 20px;\n  outline: none;\n  border: none;\n  padding: ",";\n"])),(function(n){return n.theme.spacing(2)})),j=y.ZP.label(u||(u=(0,m.Z)(["\n  width: 100%;\n"]))),k=y.ZP.button(c||(c=(0,m.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  border-radius: 6px;\n  &:hover {\n    opacity: 1;\n  }\n"]))),P=e(9126),q=e(184),S=function(n){n.query;var t=(0,v.lr)(),e=(0,s.Z)(t,2),r=e[0],i=e[1];return(0,q.jsx)(b,{children:(0,q.jsxs)(Z,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.query.value.trim();t&&(r.set("query",t),i(r))},children:[(0,q.jsx)(j,{children:(0,q.jsx)(w,{name:"query",type:"text",placeholder:"Search movies"})}),(0,q.jsx)(k,{type:"submit",children:(0,q.jsx)(P.dVI,{})})]})})},_=e(2429),z=e(7689);function L(){var n,t=(0,l.useState)(!1),e=(0,s.Z)(t,2),r=e[0],i=e[1],a=(0,l.useState)(!1),u=(0,s.Z)(a,2),c=u[0],p=u[1],m=(0,l.useState)([]),y=(0,s.Z)(m,2),b=y[0],Z=y[1],w=(0,z.TH)(),j=(0,v.lr)(),k=null!==(n=(0,s.Z)(j,1)[0].get("query"))&&void 0!==n?n:"";return(0,l.useEffect)((function(){if(""!==k.trim()){var n=function(){var n=(0,o.Z)(f().mark((function n(){var t,e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,h.LI)(k);case 2:if(t=n.sent,0!==(e=t.results).length){n.next=6;break}return n.abrupt("return",d.ZP.error("Sorry, there are no images matching your search query. Please try again."));case 6:Z(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();try{i(!0),p(!1),n()}catch(c){p(!0)}finally{i(!1)}}}),[k,c]),(0,q.jsxs)("div",{children:[(0,q.jsx)(S,{query:k}),(0,q.jsx)(_.O,{results:b,location:w}),r&&(0,q.jsx)(x.a,{}),c&&(0,q.jsx)(g.j,{}),(0,q.jsx)(d.x7,{})]})}},4390:function(n,t,e){e.d(t,{Hx:function(){return l},LI:function(){return s},Mc:function(){return p},uV:function(){return f},wr:function(){return o}});var r=e(5861),i=e(7757),a=e.n(i),u=e(5294),c="a74d577cd193b62ed06f68b282af6a8f";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(c,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=495.30b27b16.chunk.js.map