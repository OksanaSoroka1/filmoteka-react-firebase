"use strict";(self.webpackChunkbooks_list_firebase=self.webpackChunkbooks_list_firebase||[]).push([[95],{6095:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(885),a=(r(3066),r(2791)),s=r(202),i=(r(3802),r(1589)),u=r(8594),c=r(4165),o=r(5861),l=r(5028),f=r(3329),v=function(){var e=(0,a.useState)(""),t=(0,n.Z)(e,2),r=t[0],v=t[1],g=(0,l.k)(),p=g.fetchPage,d=g.setPage,h=(0,u.v)(),k=(h.filmsList,h.filteredList),Z=h.totalPages,S=h.loadingStatus,b=h.setList,L=function(){var e=(0,a.useState)({year:"",genre:""}),t=(0,n.Z)(e,2),r=t[0],i=t[1],u=(0,a.useState)([]),l=(0,n.Z)(u,2),f=l[0],v=l[1];return(0,a.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,c.Z)().mark((function e(){var t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.JZ)();case 3:t=e.sent,v(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{movieFilters:r,genresList:f,setMovieFilters:i,clearFilter:function(e){switch(e.target.id){case"clearYear":i({genre:r.genre,year:""});break;case"clearGenre":i({genre:"",year:r.year})}}}}(),m=L.movieFilters;L.setMovieFilters,L.clearFilter;(0,a.useEffect)((function(){r&&b(s.Pt,p,r,m.year)}),[r,m.year,p]);return(0,f.jsx)(i.i,{filmsList:k,totalPages:Z,search:!0,onSearch:function(e){return function(e){d("1"),v(e)}(e)},loadingStatus:S})}},8594:function(e,t,r){r.d(t,{v:function(){return o}});var n=r(4165),a=r(5861),s=r(885),i=r(2791),u=r(5138),c=r(6871),o=function(){var e=(0,i.useState)([]),t=(0,s.Z)(e,2),r=t[0],o=t[1],l=(0,i.useState)(0),f=(0,s.Z)(l,2),v=f[0],g=f[1],p=(0,u._)(),d=p.loadingStatus,h=p.setLoadingStatus,k=(0,i.useState)([]),Z=(0,s.Z)(k,2),S=Z[0],b=Z[1],L=(0,c.TH)();(0,i.useEffect)((function(){b(r)}),[r]);var m=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r,a,s){var i,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(i=L.state)||void 0===i||!i.fromModal){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,h("pending"),e.next=6,t(r,a,s);case 6:u=e.sent,h("loaded"),o(u.results),u.pages?g(u.pages):g(u.total_pages),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),h("error"),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,r,n,a){return e.apply(this,arguments)}}();return{filmsList:r,filteredList:S,totalPages:v,loadingStatus:d,setList:m,setFilteredList:b}}}}]);
//# sourceMappingURL=95.95ba7551.chunk.js.map