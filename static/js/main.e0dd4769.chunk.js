(this.webpackJsonpmemory_game=this.webpackJsonpmemory_game||[]).push([[0],[,,,,,,,,,,function(c,t,e){},function(c,t,e){},,function(c,t,e){},function(c,t,e){"use strict";e.r(t);var a=e(1),n=e.n(a),s=e(5),r=e.n(s),i=(e(10),e(3)),d=e(2),m=(e(11),e.p+"static/media/card-back.96434ac4.jpg"),j=e(0);var u=function(c){var t=c.cardInfo,e=c.handleChoices,a=c.flip,n=c.disabled,s=a?"flipped":"";return Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card__img "+s,children:[Object(j.jsx)("img",{src:t.src,alt:"card front",className:"card__front"}),Object(j.jsx)("img",{src:m,alt:"card back",className:"card__back",onClick:function(){n||e(t)}})]})})},b=(e(13),[{src:e.p+"static/media/match-2.b60bcce0.jpg",matched:!1},{src:e.p+"static/media/match-5.6c7c8df9.jpg",matched:!1},{src:e.p+"static/media/match-6.eb37f754.jpg",matched:!1},{src:e.p+"static/media/match-7.6860622d.jpg",matched:!1},{src:e.p+"static/media/match-9.3e85e0aa.jpg",matched:!1},{src:e.p+"static/media/match-10.edf6850b.jpg",matched:!1},{src:e.p+"static/media/match-11.eec98188.jpg",matched:!1},{src:e.p+"static/media/match-12.2705dcf3.jpg",matched:!1}]);var l=function(){var c=Object(a.useState)([]),t=Object(d.a)(c,2),e=t[0],n=t[1],s=Object(a.useState)(0),r=Object(d.a)(s,2),m=r[0],l=r[1],o=Object(a.useState)(null),h=Object(d.a)(o,2),p=h[0],f=h[1],O=Object(a.useState)(null),g=Object(d.a)(O,2),x=g[0],v=g[1],_=Object(a.useState)(!1),N=Object(d.a)(_,2),k=N[0],S=N[1],C=function(){var c=[].concat(b,b).sort((function(){return Math.random()-.5})).map((function(c){return Object(i.a)(Object(i.a)({},c),{},{id:Math.random()})}));f(null),v(null),n(c),l(0)},M=function(c){p?v(c):f(c)};Object(a.useEffect)((function(){p&&x&&(S(!0),p.src===x.src?(n((function(c){return c.map((function(c){return c.src===p.src?Object(i.a)(Object(i.a)({},c),{},{matched:!0}):c}))})),w()):setTimeout((function(){return w()}),1e3))}),[p,x]);var w=function(){f(null),v(null),l((function(c){return c+1})),S(!1)};return Object(a.useEffect)((function(){C()}),[]),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("h1",{children:"Animal Match"}),Object(j.jsxs)("div",{className:"app__subheader",children:[Object(j.jsx)("button",{onClick:C,children:"New Game"}),Object(j.jsxs)("p",{children:["Turns : ",m]})]}),Object(j.jsx)("div",{className:"app__cards",children:e.map((function(c){return Object(j.jsx)(u,{cardInfo:c,handleChoices:M,flip:c===p||c===x||c.matched,disabled:k},c.id)}))})]})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.e0dd4769.chunk.js.map