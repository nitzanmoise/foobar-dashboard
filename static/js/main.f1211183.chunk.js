(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(4),i=n.n(s),j=(n(10),n(2)),d="https://foo-bar-managers.herokuapp.com/";function l(e){fetch(d,{method:"get",headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(e){if(e.ok)return e.json();console.log("GET failed!")})).then((function(t){return e(t)}))}n(11);var o=n.p+"static/media/beer.6b6f4b38.png";var u=function(e){return Object(r.jsxs)("div",{className:"Order",children:[Object(r.jsx)("p",{className:"highlight line-number",children:e.lineNumber+1}),Object(r.jsx)("img",{className:"beerimg",src:o,alt:"beerImage"}),Object(r.jsx)("div",{children:e.order.order.map((function(e,t){return Object(r.jsx)("p",{className:"order-details",children:e},t)}))}),Object(r.jsxs)("p",{children:[" # ",e.order.id]})]})};var b=function(e){return Object(r.jsx)("div",{className:"QueueList",children:e.orders.map((function(e,t){return Object(r.jsx)(u,{lineNumber:t,order:e},t)}))})};var h=function(e){var t=e.data.queue;return Object(r.jsxs)("div",{className:"Queue panel",children:[Object(r.jsx)("h1",{children:"Queue"}),Object(r.jsx)("div",{className:"queue-header"}),Object(r.jsx)(b,{orders:t})]})};var O=function(e){var t=Object(c.useState)(new Date),n=Object(j.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){var e=setInterval((function(){return s(new Date)}),1e3);return function(){clearInterval(e)}})),Object(r.jsxs)("div",{className:"Clock panel",children:[Object(r.jsx)("h1",{children:"Clock"}),Object(r.jsxs)("p",{children:[" Closing At: ",e.data.bar.closingTime]}),Object(r.jsxs)("p",{children:[" Time : ",a.toLocaleTimeString()]}),Object(r.jsxs)("p",{children:[" Date : ",a.toLocaleDateString()]})]})};var v=function(e){return Object(r.jsxs)("div",{className:"serving",children:[Object(r.jsxs)("p",{className:"highlight line-number",children:[" ",e.lineNumber+1," "]}),Object(r.jsxs)("p",{children:[" # ",e.sevingOrder.id]})]})};var x=function(e){return Object(r.jsx)("div",{className:"ServingList",children:e.serving.map((function(e,t){return Object(r.jsx)(v,{lineNumber:t,sevingOrder:e},t)}))})};var m=function(e){var t=e.data.serving;return Object(r.jsxs)("div",{className:"Serving panel",children:[Object(r.jsx)("h1",{children:"Serving"}),Object(r.jsx)(x,{serving:t})]})},f=n.p+"static/media/toast.f9072d13.svg";var p=function(e){return console.log(e),Object(r.jsxs)("div",{className:"ReadyList panel",children:[Object(r.jsx)("h1",{id:"highlight-title",children:"Ready To Go!"}),e.data.serving.map((function(e,t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{className:"beersimg",src:f,alt:"beersImage"}),Object(r.jsx)("h1",{className:"readyNr",children:e.id})]},t)}))]})};var g=function(e){var t=e.data.bartenders;return Object(r.jsxs)("div",{className:"Crew panel",children:[Object(r.jsx)("h1",{children:"Crew"}),t.map((function(e,t){return Object(r.jsxs)("p",{children:[" ",e.name," is ",e.statusDetail]},t)}))]})};var N=function(e){var t=e.data.taps;return Object(r.jsxs)("div",{className:"Taps panel ",children:[Object(r.jsx)("h1",{children:"Taps"}),Object(r.jsx)("div",{className:"taps-beer",children:t.map((function(e,t){return Object(r.jsx)("p",{children:e.beer},t)}))})]})};var T=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"Main",children:[Object(r.jsx)(O,{data:t}),Object(r.jsx)(m,{data:t}),Object(r.jsx)(p,{data:t}),Object(r.jsx)(g,{data:t}),Object(r.jsx)(N,{data:t}),Object(r.jsx)(h,{data:t}),Object(r.jsx)(p,{data:t})]})};var C=function(e){return Object(r.jsx)("div",{className:"Header",children:Object(r.jsx)("h1",{children:e.data.bar.name})})};function S(){return Object(r.jsx)("h1",{children:"Loading..."})}var L=function(e){var t=Object(c.useState)({}),n=Object(j.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)({}),o=Object(j.a)(i,2),u=o[0],b=o[1];return console.log(a),console.log(u),Object(c.useEffect)((function(){var e;l(s),e=b,fetch(d+"beertypes",{method:"get",headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(e){if(e.ok)return e.json();console.log("GET failed!")})).then((function(t){return e(t)})),setInterval((function(){l(s)}),1e4),l(s)}),[]),Object(r.jsxs)("div",{className:"App",children:[!a.bar&&Object(r.jsx)(S,{}),a.bar&&Object(r.jsx)(C,{data:a}),a.bar&&Object(r.jsx)(T,{data:a})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root")),k()}},[[12,1,2]]]);
//# sourceMappingURL=main.f1211183.chunk.js.map