function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{cajc:function(t,e,n){"use strict";n.r(e),n.d(e,"NewsDetailsModule",(function(){return I}));var c,i=n("PCNd"),o=n("tyNb"),a=n("fXoL"),s=n("+0xr"),r=n("M9IT"),l=n("AytR"),b=n("tk/3"),u=((c=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"getNewsFeed",value:function(t,e){var n="/v1/search?tags=front_page";return t&&(n="/v1/search?page="+e),this.http.get(l.a.url+n)}}]),t}()).\u0275fac=function(t){return new(t||c)(a.Yb(b.a))},c.\u0275prov=a.Kb({token:c,factory:c.\u0275fac,providedIn:"root"}),c),d=n("Qu3c"),m=n("NFeN"),f=n("TU8p"),p=n("ofXK");function h(t,e){1&t&&(a.Ub(0,"th",12),a.Ac(1," Index "),a.Tb())}function g(t,e){if(1&t){var n=a.Vb();a.Ub(0,"td",13),a.Ub(1,"div",14),a.Ub(2,"mat-icon",15),a.cc("click",(function(){a.tc(n);var t=e.$implicit;return a.gc().increaseCount(t)})),a.Ac(3,"keyboard_arrow_up"),a.Tb(),a.Ac(4),a.Tb(),a.Tb()}if(2&t){var c=e.$implicit;a.Cb(4),a.Cc(" ",c.points," ")}}function C(t,e){1&t&&(a.Ub(0,"th",12),a.Ac(1," Comments "),a.Tb())}function w(t,e){if(1&t&&(a.Ub(0,"td",16),a.Ub(1,"span",17),a.Ub(2,"mat-icon",18),a.Ac(3,"comment"),a.Tb(),a.Tb(),a.Tb()),2&t){var n=e.$implicit;a.Cb(2),a.nc("matBadge",n.num_comments)}}function v(t,e){1&t&&(a.Ub(0,"th",12),a.Ac(1," News Details "),a.Tb())}function _(t,e){if(1&t){var n=a.Vb();a.Ub(0,"td",13),a.Ub(1,"span",19),a.Ub(2,"a",20),a.Ac(3),a.Tb(),a.Tb(),a.Ub(4,"span",21),a.Ac(5),a.hc(6,"date"),a.Tb(),a.Ub(7,"span",22),a.Ub(8,"mat-icon",23),a.cc("click",(function(){a.tc(n);var t=e.$implicit;return a.gc().hideFeed(t)})),a.Ac(9,"remove_circle"),a.Tb(),a.Tb(),a.Tb()}if(2&t){var c=e.$implicit;a.Cb(1),a.nc("matTooltip",c.url),a.Cb(2),a.Bc(c.title),a.Cb(2),a.Cc("Created at: ",a.jc(6,3,c.created_at,"MMM d, y"),"")}}function P(t,e){1&t&&(a.Ub(0,"th",12),a.Ac(1," Author "),a.Tb())}function T(t,e){if(1&t&&(a.Ub(0,"td",13),a.Ub(1,"span",24),a.Ac(2),a.Ub(3,"mat-icon"),a.Ac(4,"account_circle"),a.Tb(),a.Tb(),a.Tb()),2&t){var n=e.$implicit;a.Cb(2),a.Cc(" ",n.author," ")}}function y(t,e){1&t&&a.Pb(0,"tr",25)}function O(t,e){1&t&&a.Pb(0,"tr",26)}var k,M,U,S=function(){return[5,10,20]},z=((k=function(){function t(e){_classCallCheck(this,t),this.gridService=e,this.displayedColumns=["Index","Comments","News","author"],this.dataSource=new s.k([]),this.news=[],this.totalPage=0,this.totalRecords=0}return _createClass(t,[{key:"ngOnInit",value:function(){switch(this.type){case"news-feed":this.getAllNewsFeed(!1,0)}}},{key:"getAllNewsFeed",value:function(t,e){var n=this;sessionStorage.getItem("news")&&!1===t?(this.news=JSON.parse(sessionStorage.getItem("news")),this.dataSource=new s.k(this.news.hits)):this.gridService.getNewsFeed(t,e).subscribe((function(t){n.news=t,n.dataSource=new s.k(n.news.hits),sessionStorage.setItem("news",JSON.stringify(n.news))})),this.totalPage=this.news.nbPages,this.totalRecords=this.news.nbHits}},{key:"increaseCount",value:function(t){this.news.hits.map((function(e){e.objectID===t.objectID&&e.points++})),sessionStorage.setItem("news",JSON.stringify(this.news))}},{key:"getPagination",value:function(t){this.getAllNewsFeed(!0,t.pageIndex+1)}},{key:"hideFeed",value:function(t){var e=this.news.hits.findIndex((function(e){return e.objectID===t.objectID}));this.news.hits.splice(e,1),this.dataSource=new s.k(this.news.hits),sessionStorage.setItem("news",JSON.stringify(this.news))}}]),t}()).\u0275fac=function(t){return new(t||k)(a.Ob(u))},k.\u0275cmp=a.Ib({type:k,selectors:[["app-grid"]],viewQuery:function(t,e){var n;1&t&&a.xc(r.a,!0),2&t&&a.qc(n=a.dc())&&(e.paginator=n.first)},inputs:{type:"type"},decls:17,vars:7,consts:[[1,"mat-elevation-z8"],["mat-table","",1,"mat-elevation-z8","news-details",3,"dataSource"],["matColumnDef","Index"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Comments"],["mat-cell","","class","comment-wrapper",4,"matCellDef"],["matColumnDef","News"],["matColumnDef","author"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions","length","pageSize","page"],["mat-header-cell",""],["mat-cell",""],["matTooltip","points"],[1,"arrow-icon",3,"click"],["mat-cell","",1,"comment-wrapper"],["matTooltip","Comments",1,"comment"],[3,"matBadge"],["aria-label","links",1,"title",3,"matTooltip"],["href",""],[1,"created-at"],["matTooltip","Click to Hide"],[1,"hide",3,"click"],["matTooltip","Author",1,"author"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(a.Ub(0,"div",0),a.Ub(1,"table",1),a.Sb(2,2),a.zc(3,h,2,0,"th",3),a.zc(4,g,5,1,"td",4),a.Rb(),a.Sb(5,5),a.zc(6,C,2,0,"th",3),a.zc(7,w,4,1,"td",6),a.Rb(),a.Sb(8,7),a.zc(9,v,2,0,"th",3),a.zc(10,_,10,6,"td",4),a.Rb(),a.Sb(11,8),a.zc(12,P,2,0,"th",3),a.zc(13,T,5,1,"td",4),a.Rb(),a.zc(14,y,1,0,"tr",9),a.zc(15,O,1,0,"tr",10),a.Tb(),a.Ub(16,"mat-paginator",11),a.cc("page",(function(t){return e.getPagination(t)})),a.Tb(),a.Tb()),2&t&&(a.Cb(1),a.mc("dataSource",e.dataSource),a.Cb(13),a.mc("matHeaderRowDef",e.displayedColumns),a.Cb(1),a.mc("matRowDefColumns",e.displayedColumns),a.Cb(1),a.mc("pageSizeOptions",a.oc(6,S))("length",e.totalRecords)("pageSize",20))},directives:[s.j,s.c,s.e,s.b,s.g,s.i,r.a,s.d,s.a,d.a,m.a,f.a,s.f,s.h],pipes:[p.e],styles:["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center;font-size:17px;font-weight:700}.created-at[_ngcontent-%COMP%]{font-size:12px;margin-left:1%;color:#868484}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2){width:auto}.title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);font-size:17px;text-decoration:none}.comment[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#c2c2c2;vertical-align:bottom;padding-right:24px}.mat-badge-content[_ngcontent-%COMP%]{font-size:12px!important}.comment[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background-color:grey;font-size:12px}.comment[_ngcontent-%COMP%]{font-size:12px;color:#c2c2c2}.comment-wrapper[_ngcontent-%COMP%]{text-align:center}.author[_ngcontent-%COMP%]{text-align:right;float:right;color:#c2c2c2}.author[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#c2c2c2;vertical-align:middle}.arrow-icon[_ngcontent-%COMP%]{cursor:pointer}.mat-badge-content[_ngcontent-%COMP%]{font-size:12px}.hide[_ngcontent-%COMP%]{color:#c2c2c2;vertical-align:sub;padding-right:24px;font-size:18px;padding-left:10px;cursor:pointer}"]}),k),x=[{path:"",component:(M=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),M.\u0275fac=function(t){return new(t||M)},M.\u0275cmp=a.Ib({type:M,selectors:[["app-news-feeds"]],decls:6,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],["type","news-feed"]],template:function(t,e){1&t&&(a.Ub(0,"div",0),a.Ub(1,"div",1),a.Ub(2,"div",2),a.Ub(3,"div"),a.Ub(4,"div"),a.Pb(5,"app-grid",3),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb())},directives:[z],styles:[""]}),M)}],I=((U=function t(){_classCallCheck(this,t)}).\u0275mod=a.Mb({type:U}),U.\u0275inj=a.Lb({factory:function(t){return new(t||U)},imports:[[i.a,o.e.forChild(x)],i.a]}),U)}}]);