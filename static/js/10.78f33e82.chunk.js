(this.webpackJsonpbc10reactrouting=this.webpackJsonpbc10reactrouting||[]).push([[10],{151:function(e,t,c){"use strict";c.r(t);var n=c(24),i=c(25),a=c(27),r=c(26),s=c(0),l=c(33),d=c(14),h=function(){return{type:l.b}},o=function(e){return{type:l.c,payload:e}},j=function(e){return{type:l.a,payload:e}},u=c(10),b=c(18),O=c(1),p=function(e){Object(a.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(n.a)(this,c);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).dateMovie=function(){var e=new Date;return e.getDate()+"-"+(e.getMonth()+1)+"-"+e.getFullYear()},e.renderTable=function(){var t,c=e.props.data;return null===c||void 0===c||null===(t=c.lichChieu)||void 0===t?void 0:t.map((function(e){return console.log(e),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.thongTinRap.tenCumRap}),Object(O.jsx)("td",{children:e.thongTinRap.tenRap}),Object(O.jsx)("td",{children:new Date(e.ngayChieuGioChieu).toLocaleDateString()}),Object(O.jsx)("td",{children:new Date(e.ngayChieuGioChieu).toLocaleTimeString()}),Object(O.jsx)("td",{children:Object(O.jsx)("a",{href:"#dat-ve",className:"btn btn-success",children:"\u0110\u1eb7t v\xe9"})})]},e.maLichChieu)}))},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props.match.params.id;this.props.fetchDetailMovie(e)}},{key:"render",value:function(){var e=this.props,t=e.loading,c=e.data;return t?Object(O.jsx)(b.a,{}):Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h3",{children:"DetailMoviePage"}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsx)("img",{className:"img-fluid",src:c&&c.hinhAnh,alt:""})}),Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsx)("table",{className:"table",children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"T\xeam phim"}),Object(O.jsx)("td",{children:c&&c.tenPhim})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"M\xf4 t\u1ea3"}),Object(O.jsx)("td",{children:c&&c.moTa})]})]})})})]}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsxs)("table",{className:"table",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"C\u1ee5m r\u1ea1p"}),Object(O.jsx)("th",{children:"T\xean r\u1ea1p"}),Object(O.jsx)("th",{children:"Ng\xe0y chi\u1ebfu"}),Object(O.jsx)("th",{children:"Gi\u1edd chi\u1ebfu"})]})}),Object(O.jsx)("tbody",{children:this.renderTable()})]})})})]})}}]),c}(s.Component);t.default=Object(u.b)((function(e){return{loading:e.detailMovieReducer.loading,data:e.detailMovieReducer.data}}),(function(e){return{fetchDetailMovie:function(t){e(function(e){return function(t){t(h()),d.a.get("QuanLyPhim/LayThongTinPhim?MaPhim=".concat(e)).then((function(e){t(o(e.data))})).catch((function(e){t(j(e))}))}}(t))}}}))(p)}}]);
//# sourceMappingURL=10.78f33e82.chunk.js.map