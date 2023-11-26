"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[495],{1495:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,i,a,o,c,u,s,p,l=t(5861),d=t(9439),f=t(7757),h=t.n(f),x=t(2791),g=t(5218),m=t(4390),b=t(3430),y=t(5705),v=t(168),w=t(5867),Z=w.ZP.div(r||(r=(0,v.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: ",";\n  padding-left: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  color: ",";\n  background-color: ",";\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.grey})),j=(0,w.ZP)(y.l0)(i||(i=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),k=(0,w.ZP)(y.gN)(a||(a=(0,v.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: ",";\n  padding-right: ",";\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(1)})),_=w.ZP.label(o||(o=(0,v.Z)(["\n  width: 100%;\n"]))),P=w.ZP.button(c||(c=(0,v.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),S=w.ZP.div(u||(u=(0,v.Z)(["\n  margin: 0 auto;\n  margin-top: ",";\n  text-align: center;\n"])),(function(n){return n.theme.spacing(4)})),q=w.ZP.ul(s||(s=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: ",";\n  row-gap: ",";\n  justify-content: center;\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(4)})),z=w.ZP.li(p||(p=(0,v.Z)(["\n  flex-basis: calc((100% - 48px) / 4);\n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n  border-radius: ",";\n  display: flex;\n  gap: ",";\n  flex-direction: column;\n  align-items: center;\n"])),(function(n){return n.theme.radii.lg}),(function(n){return n.theme.spacing(2)})),C=t(8185),L=t(184),F=function(n){var e=n.onSubmit,t=n.results;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Z,{children:(0,L.jsx)(y.J9,{initialValues:{query:""},onSubmit:function(n,t){e(n),t.resetForm()},children:(0,L.jsxs)(j,{children:[(0,L.jsx)(P,{type:"submit",children:(0,L.jsx)(C.dVI,{})}),(0,L.jsx)(_,{children:(0,L.jsx)(k,{name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})})]})})}),(0,L.jsx)(S,{children:(0,L.jsx)(q,{children:t.map((function(n){var e=n.id,t=n.title,r="https://image.tmdb.org/t/p/w200"+n.poster_path;return(0,L.jsxs)(z,{children:[(0,L.jsx)("img",{src:r,alt:t}),(0,L.jsx)("p",{children:t})]},e)}))})})]})};function I(){var n=(0,x.useState)(!1),e=(0,d.Z)(n,2),t=e[0],r=e[1],i=(0,x.useState)(!1),a=(0,d.Z)(i,2),o=a[0],c=a[1],u=(0,x.useState)(""),s=(0,d.Z)(u,2),p=s[0],f=s[1],y=(0,x.useState)([]),v=(0,d.Z)(y,2),w=v[0],Z=v[1];(0,x.useEffect)((function(){var n=p.slice(p.indexOf("/")+1,p.length);if(""!==n.trim()){var e=function(){var e=(0,l.Z)(h().mark((function e(){var t,r;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.LI)(n);case 2:if(t=e.sent,r=t.results,console.log(r),0!==r.length){e.next=7;break}return e.abrupt("return",g.ZP.error("Sorry, there are no images matching your search query. Please try again."));case 7:Z(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r(!0),c(!1),e()}catch(o){c(!0)}finally{r(!1)}}}),[p,o]);return(0,L.jsxs)("div",{children:[(0,L.jsx)(F,{onSubmit:function(n){var e=n.query;f("".concat(Date.now(),"/").concat(e)),Z([])},results:w}),t&&(0,L.jsx)(b.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})]})}},4390:function(n,e,t){t.d(e,{LI:function(){return s},wr:function(){return u}});var r=t(5861),i=t(7757),a=t.n(i),o=t(5294),c="a74d577cd193b62ed06f68b282af6a8f";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=495.3aa5b2b3.chunk.js.map