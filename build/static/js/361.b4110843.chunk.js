"use strict";(self.webpackChunkfilmoteka_react_firebase=self.webpackChunkfilmoteka_react_firebase||[]).push([[361],{202:function(n,t,e){e.d(t,{JZ:function(){return h},Pg:function(){return d},Pt:function(){return f},fV:function(){return s},pp:function(){return l},yB:function(){return u}});var r=e(4165),i=e(5861),o=e(4569),c=e.n(o),a="b6be36a5da27d5ea7b8b28c63f72e28e";c().defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t,e,i,o=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,e=o.length>1&&void 0!==o[1]?o[1]:"movie",i=o.length>2&&void 0!==o[2]?o[2]:"week",n.next=5,c().get("/trending/".concat(e,"/").concat(i,"?api_key=").concat(a,"&page=").concat(t)).then((function(n){return n.data}));case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t,e=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.length>0&&void 0!==e[0]?e[0]:1,e.length>1?e[1]:void 0,n.next=4,c()("/movie/upcoming?api_key=".concat(a,"&page=").concat(t)).then((function(n){return n.data}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t,e=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.length>0&&void 0!==e[0]?e[0]:1,e.length>1?e[1]:void 0,n.next=4,c()("/movie/top_rated?api_key=".concat(a,"&page=").concat(t)).then((function(n){return n.data}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"?api_key=").concat(a)).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t,e,i,o=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,e=o.length>1?o[1]:void 0,i=o.length>2?o[2]:void 0,console.log(i),n.next=6,c().get("/search/movie?api_key=".concat(a,"&query=").concat(e,"&page=").concat(t).concat(i&&"&year=".concat(i))).then((function(n){var t=n.data;return{results:t.results,pages:t.total_pages}}));case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c()("/genre/movie/list?api_key=".concat(a)).then((function(n){return n.data.genres}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},6698:function(n,t,e){e.d(t,{U:function(){return Z}});var r,i,o,c,a=e(885),s=e(168),u=e(6031),l=e(2791),d=e(4161),f=e(5148),h=e(7609),p=e(3329),g=u.ZP.form(r||(r=(0,s.Z)(["\n\nposition: relative;\nheight:55px;\nwidth: 615px;\nmargin: 0 auto;\n"]))),x=u.ZP.label(i||(i=(0,s.Z)(["\nwidth: 100%;\n"]))),v=u.ZP.input(o||(o=(0,s.Z)(["\nwidth: 100%;\nborder-radius: ",";\nborder: ",";\npadding:  14px 25px;\noutline: none;\n&::placeholder{\n    font-size: 24px;\n    color: ",";\n}\n"])),d.n.borders.radius,d.n.borders.searchBorder,d.n.fontColors.placeholder),m=(0,u.ZP)(f.Qh)(c||(c=(0,s.Z)(["\nposition: absolute;\ntop: 12px;\nright: 22px;\nwidth: 32px;\nheight: 32px;\nfill: ",";\n"])),d.n.fontColors.accentSecond),Z=function(n){var t=n.onHandleSubmit,e=(0,l.useState)(""),r=(0,a.Z)(e,2),i=r[0],o=r[1];return(0,p.jsxs)(g,{onSubmit:function(n){return function(n,e){n.preventDefault(),t(e),o("")}(n,i)},children:[(0,p.jsx)(x,{children:(0,p.jsx)(v,{name:"film-search",value:i,onChange:function(n){return o(n.target.value)},placeholder:"Search..."})}),(0,p.jsx)(m,{type:"submit",children:(0,p.jsx)(f.Ld,{children:(0,p.jsx)("use",{href:"".concat(h.Z,"#icon-Research")})})})]})}},3066:function(n,t,e){e.d(t,{sS:function(){return D}});var r,i,o,c,a,s,u,l,d,f,h,p,g,x=e(168),v=e(6031),m=e(885),Z=e(4161),y=e(2791),j=e(3504),b=e(6871),w=e(4401),P=e(3329),S=v.ZP.li(r||(r=(0,x.Z)(["\nposition: ",";\nwidth: 100%;\nmin-height: 100%;\n\n/* &:nth-child(1){\n    grid-row: ",";\n    grid-column: ",";\n}\n&:nth-child(4){\n    @media screen and (max-width:1054px) {\n        grid-row: ",";\n    }\n    grid-row: ",";\n    grid-column: ",";\n}\n&:nth-child(11){\n   grid-row: ",";\n    grid-column: ","; \n} */\n\n&:hover, &:focus{\n    background: ",";\n}\n"])),(function(n){return"grid"===n.liststyle&&"relative"}),(function(n){return"grid"===n.listStyle&&"1/3"}),(function(n){return"grid"===n.listStyle&&"1/3"}),(function(n){return"grid"===n.listStyle&&"3/5"}),(function(n){return"grid"===n.listStyle&&"2/4"}),(function(n){return"grid"===n.listStyle&&"-3/-1"}),(function(n){return"grid"===n.listStyle&&"4/6"}),(function(n){return"grid"===n.listStyle&&"2/4"}),(function(n){return"list"===n.liststyle&&Z.n.bcgColors.listCardLinear})),k=(0,v.ZP)(j.rU)(i||(i=(0,x.Z)(["\ndisplay: ",";\nheight: 100%;\nalign-items: center;\ncolor: inherit;\ncursor: pointer;\n"])),(function(n){return"list"===n.liststyle&&"flex"})),C=v.ZP.div(o||(o=(0,x.Z)(["\ndisplay: block;\nheight: 100%;\nwidth:  "," ;\n"])),(function(n){return"grid"===n.liststyle?"100%":"20%"})),T=v.ZP.div(c||(c=(0,x.Z)(["\n\nposition:  ",";\nbottom: ",";\nleft: ",";\n\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\nheight: ",";\npadding: ",";\n\ncolor: ",";\nbackground: ",";\nborder-top-right-radius: ",";\nborder-top-left-radius: ",";\n\n"])),(function(n){return"grid"===n.liststyle&&"absolute"}),(function(n){return"grid"===n.liststyle&&"0"}),(function(n){return"grid"===n.liststyle&&"0"}),(function(n){return"grid"===n.liststyle?"73%":"100%"}),(function(n){return"grid"===n.liststyle?"12%":"40px 20px 20px"}),(function(n){return"grid"===n.liststyle&&Z.n.fontColors.primary}),(function(n){return"grid"===n.liststyle&&Z.n.bcgColors.gridCardHoverLinear}),(function(n){return"grid"===n.liststyle&&Z.n.borders.radius}),(function(n){return"grid"===n.liststyle&&Z.n.borders.radius})),_=v.ZP.p(a||(a=(0,x.Z)(["\nfont-size:  ",";\nflex-grow: 1;\n\n"])),(function(n){return n.overview?"20px":"32px"})),L=v.ZP.span(s||(s=(0,x.Z)(["\nfont-size: 20px;\ncolor: ",";\nalign-self: center;\n\n\n&:hover, &:focus{\n    text-decoration: underline;\n}\n"])),Z.n.fontColors.accentSecond),A=function(n){var t=n.id,e=n.name,r=n.poster,i=n.overview,o=n.liststyle,c=(0,y.useState)(!1),a=(0,m.Z)(c,2),s=a[0],u=a[1],l=(0,b.TH)();return(0,P.jsx)(S,{liststyle:o,onMouseOver:function(){return u(!0)},onMouseOut:function(){return u(!1)},children:(0,P.jsxs)(k,{liststyle:o,id:t,to:"".concat(l.pathname,"/").concat(t),state:{background:l},children:[(0,P.jsx)(C,{liststyle:o,children:(0,P.jsx)("img",{src:r?"https://image.tmdb.org/t/p/original".concat(r):w,alt:e})}),"list"===o&&(0,P.jsxs)(T,{liststyle:o,children:[(0,P.jsx)(_,{children:e}),(0,P.jsx)(_,{overview:"true",children:i}),(0,P.jsx)(L,{children:"Detailes"})]}),s&&"grid"===o&&(0,P.jsxs)(T,{liststyle:o,children:[(0,P.jsx)(_,{children:e}),(0,P.jsx)(L,{children:"Detailes"})]})]})})},F=e(3802),z=e(9434),H=e(5148),O=e(7609),V=e(2237),I=v.ZP.div(u||(u=(0,x.Z)(["\ndisplay: flex;\njustify-content: end;\nalign-items: center;\nmargin-bottom: 25px;\n"]))),M=(0,v.ZP)(H.Qh)(l||(l=(0,x.Z)(["\nwidth: 24px;\nheight: 24px;\n\nfill: ",";\n&:hover, &:focus{\n    fill: ",";\n}\n\n"])),(function(n){return"light"===n.colorTheme?Z.n.fontColors.primary:Z.n.fontColors.secondary}),(function(n){return"light"===n.colorTheme?Z.n.fontColors.accentSecond:Z.n.fontColors.accentFirst})),N=function(n){var t=n.listView,e=n.colorTheme,r=(0,z.I0)(),i=function(n){var t=n.currentTarget.getAttribute(["data-view"]);r((0,V.Kj)(t))};return(0,P.jsx)(I,{children:"grid"===t?(0,P.jsx)(M,{colorTheme:e,onClick:function(n){return i(n)},type:"button","data-view":"list",children:(0,P.jsx)(H.Ld,{children:(0,P.jsx)("use",{href:"".concat(O.Z,"#icon-list-format")})})}):(0,P.jsx)(M,{colorTheme:e,onClick:function(n){return i(n)},type:"button","data-view":"grid",children:(0,P.jsx)(H.Ld,{children:(0,P.jsx)("use",{href:"".concat(O.Z,"#icon-grid")})})})})},Q=v.ZP.div(d||(d=(0,x.Z)(["\n\n"]))),U=v.ZP.ul(f||(f=(0,x.Z)(["\ndisplay: grid;\ngrid-template-columns: ",";\ngrid-auto-rows: ",";\ngrid-gap: 25px;\n"])),(function(n){return"grid"===n.listStyle?"repeat(auto-fill, minmax(235px, auto))":"1fr"}),(function(n){return"grid"===n.listStyle?"minmax(300px, auto)":"minmax(320px, auto)"})),D=function(n){var t=n.filmsArr,e=n.colorTheme,r=n.listView,i=(0,F.p)().listStyle;return(0,P.jsxs)(Q,{children:[(0,P.jsx)(N,{colorTheme:e,listView:r}),(0,P.jsx)(U,{listStyle:i,children:null===t||void 0===t?void 0:t.map((function(n){return(0,P.jsx)(A,{id:n.id,name:n.title,overview:n.overview,liststyle:i,date:n.release_date,poster:n.poster_path},n.id)}))})]})};e(202),v.ZP.div(h||(h=(0,x.Z)(["\ndisplay: flex;\n\n"]))),v.ZP.p(p||(p=(0,x.Z)(["\nfont-size: 24px;\n/* color: ","; */\nmargin-right: 15px;\n"])),Z.n.fontColors.primary),(0,v.ZP)(H.Qh)(g||(g=(0,x.Z)(["\nwidth: 30px;\nheight: 30px;\nfill: inherit;\n"]))),e(6698),e(4693),e(2707)},1589:function(n,t,e){e.d(t,{i:function(){return I}});var r,i,o,c,a,s,u,l=e(3066),d=e(168),f=e(6031),h=e(4161),p=e(5148),g=e(885),x=e(7609),v=e(6871),m=e(2791),Z=e(3329),y=(0,f.ZP)(p.Qh)(r||(r=(0,d.Z)(["\nwidth: 45px;\nheight: 45px;\nposition: relative;\nfill: inherit;\n&:hover, &:focus{\n  fill: ",";  \n}\n"])),(function(n){return"light"===n.colorTheme?h.n.fontColors.accentSecond:h.n.fontColors.accentFirst})),j=f.ZP.span(i||(i=(0,d.Z)(["\nposition: absolute;\ntop: 100%;\nleft: -50%;\nmin-width: 300%;\nfont-size: 16px;\ncolor:  ",";\ntext-align: start;\nborder-radius: ",";\n\n"])),(function(n){return"light"===n.colorTheme?h.n.fontColors.primary:h.n.fontColors.secondary}),h.n.borders.radius),b=function(n){var t=n.colorTheme,e=(n.title,n.pathArr),r=(0,m.useState)(""),i=(0,g.Z)(r,2),o=i[0],c=i[1],a=(0,m.useState)(!1),s=(0,g.Z)(a,2),u=s[0],l=s[1],d=(0,v.s0)(),f=(0,v.TH)(),h=e.find((function(n){return n.path===f.pathname})),b=e.indexOf(h);return(0,Z.jsxs)(y,{colorTheme:t,type:"button",onMouseOut:function(){return l(!1)},onMouseOver:function(){return function(n){if(b===n.length-1)return c(n[0].title),void l(!0);c(n[b+1].title),l(!0)}(e)},onClick:function(){var n;b!==(n=e).length-1?d(n[b+1].path):d(n[0].path)},children:[(0,Z.jsx)(p.Ld,{children:(0,Z.jsx)("use",{href:"".concat(x.Z,"#icon-right-arrow")})}),u&&(0,Z.jsx)(j,{colorTheme:t,children:o})]})},w=e(6698),P=f.ZP.div(o||(o=(0,d.Z)(["\n\n\n"]))),S=f.ZP.div(c||(c=(0,d.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: space-around;\n"]))),k=f.ZP.h1(a||(a=(0,d.Z)(["\nfont-size: 50px;\n\n"]))),C=function(n){var t=n.colorTheme,e=n.title,r=n.pathArr,i=n.search,o=n.onSearch;return(0,Z.jsxs)(P,{children:[e&&(0,Z.jsxs)(S,{children:[(0,Z.jsx)(k,{children:e}),(0,Z.jsx)(b,{colorTheme:t,pathArr:r})]}),i&&(0,Z.jsx)(w.U,{onHandleSubmit:o})]})},T=e(9434),_=e(1762),L=e(5028),A=f.ZP.button(s||(s=(0,d.Z)(["\nbackground-color: transparent;\ncolor: "," ; \nfont-size: 25px;\ncursor: pointer;\nborder: none;\n\n&:hover, &:focus{\n  color: ",";\n}\n"])),(function(n){var t;return(null===(t=n.content)||void 0===t?void 0:t.toString())===n.fetchPage?h.n.fontColors.accentFirst:"inherit"}),h.n.fontColors.accentFirst),F=function(n){var t=n.content,e=n.value,r=(0,T.I0)(),i=(0,L.k)().fetchPage,o=(0,v.TH)();return(0,Z.jsx)(A,{fetchPage:i,content:t,type:"button",value:e,onClick:function(n){var t;t=n.target.value,o.state=null,r((0,_.l)(t))},children:t},"".concat(t,"_").concat(e))},z=f.ZP.div(u||(u=(0,d.Z)(["\njustify-self: center;\nmax-width: 500px;\ndisplay: inline-flex;\njustify-content: space-between;\n"]))),H=function(n){var t=n.totalPages,e=(n.onPageClick,n.search,(0,m.useState)([])),r=(0,g.Z)(e,2),i=r[0],o=r[1],c=(0,L.k)().fetchPage;(0,m.useEffect)((function(){console.log("totalPages",t);for(var n=[],e=1;e<=t;e+=1)n.push(e);o(n)}),[t]);return(0,Z.jsxs)(z,{children:[(0,Z.jsx)(F,{value:"1",content:"<<"}),c>1&&(0,Z.jsx)(F,{value:Number(c)-1,content:"<"}),i.length<=10?i.map((function(n){return(0,Z.jsx)(F,{value:n,content:n})})):c<=5?(0,Z.jsxs)(Z.Fragment,{children:[i.filter((function(n,t){return t<=5})).map((function(n){return(0,Z.jsx)(F,{value:n,content:n})})),(0,Z.jsx)("span",{children:" ... "}),(0,Z.jsx)(F,{value:i.length,content:i.length})]}):c>=i.length-4?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(F,{value:"1",content:"1"}),(0,Z.jsx)("span",{children:" ... "}),i.filter((function(n,t){return t>=i.length-6})).map((function(n){return(0,Z.jsx)(F,{value:n,content:n})}))]}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(F,{value:"1",content:"1"}),(0,Z.jsx)("span",{children:" ... "}),i.filter((function(n,t){return t>=Number(c)-2&&t<=Number(c)+5})).map((function(n){return(0,Z.jsx)(F,{value:n,content:n})})),(0,Z.jsx)("span",{children:" ... "}),(0,Z.jsx)(F,{value:i.length,content:i.length})]}),c<i.length&&(0,Z.jsx)(F,{value:Number(c)+1,content:">"}),(0,Z.jsx)(F,{value:i[i.length-1],content:">>"})]})},O=e(3802),V=e(1172),I=function(n){var t=n.filmsList,e=n.title,r=n.pathArr,i=n.totalPages,o=(n.setFetchPage,n.search),c=n.onSearch,a=n.loadingStatus,s=(0,O.p)(),u=s.colorTheme,d=s.listStyle;return(0,Z.jsxs)(p.PP,{children:[(0,Z.jsx)(C,{title:e,pathArr:r,colorTheme:u,search:o,onSearch:c}),"pending"===a&&(0,Z.jsx)(V.W,{}),"loaded"===a&&t.length>0&&(0,Z.jsx)(l.sS,{filmsArr:t,colorTheme:u,listView:d}),"loaded"===a&&0!==i&&(0,Z.jsx)(H,{totalPages:i})]})}},5028:function(n,t,e){e.d(t,{k:function(){return a}});e(2791);var r=e(9434),i=function(n){return n.fetchPage.page},o=e(6871),c=e(1762),a=function(){(0,o.TH)();var n=(0,r.v9)(i),t=(0,r.I0)();return{fetchPage:n,setPage:function(n){t((0,c.l)(n))}}}},5138:function(n,t,e){e.d(t,{_:function(){return o}});var r=e(885),i=e(2791),o=function(){var n=(0,i.useState)(""),t=(0,r.Z)(n,2);return{loadingStatus:t[0],setLoadingStatus:t[1]}}},4401:function(n,t,e){n.exports=e.p+"static/media/noImage.1eb8f2f3700dea5bc5e9.png"}}]);
//# sourceMappingURL=361.b4110843.chunk.js.map