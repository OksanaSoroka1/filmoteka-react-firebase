"use strict";(self.webpackChunkfilmoteka_react_firebase=self.webpackChunkfilmoteka_react_firebase||[]).push([[44],{2044:function(t,e,a){a.r(e),a.d(e,{default:function(){return l}});var i=a(885),s=a(2791),n=a(6871),r=(a(202),a(1589)),c=(a(3824),a(7245)),f=a(5138),o=a(5028),u=a(3329),h=[{path:"/favorites",title:"Favorites movies"},{path:"/watched",title:"Watched movies"},{path:"/wishlist",title:"Wishlist"}],l=function(t){var e=t.title,a=(0,s.useState)([]),l=(0,i.Z)(a,2),d=l[0],p=l[1],k=((0,o.k)().fetchPage,(0,c.R)()),w=k.favorites,v=k.watched,m=k.wishlist,b=(0,n.TH)(),g=(0,f._)(),_=g.loadingStatus,S=g.setLoadingStatus,C=function(t){S("pending"),p(t.map((function(t){return t.info}))),S("loaded")};return(0,s.useEffect)((function(){switch(b.pathname){case"/favorites":C(w);break;case"/watched":C(v);break;case"/wishlist":C(m)}}),[b]),(0,u.jsx)(r.i,{loadingStatus:_,title:e,filmsList:d,pathArr:h})}}}]);
//# sourceMappingURL=44.0a54b982.chunk.js.map