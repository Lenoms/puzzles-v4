(this["webpackJsonppuzzles-v4"]=this["webpackJsonppuzzles-v4"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var r=c(0),o=c.n(r),n=c(26),a=c.n(n),s=(c(35),c(36),c(3)),l=c(6),i=(c(37),c(2));var b=function(e){var t,c=Object(s.o)();return Object(i.jsx)("div",{className:"book",onClick:function(){e.level&&c("/puzzles-v4/".concat(e.level))},style:(t={background:e.colour},Object(l.a)(t,"background","linear-gradient(180deg, ".concat(e.colour," 0%, rgb(0, 0, 0) 100%)")),Object(l.a)(t,"height","".concat(e.height,"%")),t),children:e.level})};c(39);function j(e,t){var c=["rgb(128, 0, 0)","rgb(0, 0, 128)","rgb(0, 128, 0)","rgb(128, 128, 0)","rgb(64, 0, 64)","rgb(128, 64, 0)","rgb(128, 0, 128)","rgb(64, 32, 0)","rgb(0, 128, 128)","rgb(128, 0, 64)"];for(var r=[],o=0;o<e;o++){var n={colour:c[Math.floor(Math.random()*c.length)],height:Math.floor(51*Math.random())+40};r.push(n)}return r}function d(e,t,c){for(var r=0;r<e.length;r++)if(e[r].coords[0]===t&&e[r].coords[1]===c)return r;return-1}var u=function(e){var t=[j(20),j(20),j(20)];return Object(i.jsx)("div",{className:"bookshelf-container",children:t.map((function(c,r){return Object(i.jsx)("div",{className:"bookshelf-shelf",children:t[r].map((function(t,c){return Object(i.jsx)(b,{colour:t.colour,height:t.height,level:-1!==d(e.bookshelfLevels,r,c)?e.bookshelfLevels[d(e.bookshelfLevels,r,c)].name:null},"book-".concat(r,",").concat(c))}))},"bookshelf-".concat(r))}))})},v=[{name:"one",coords:[0,2]},{name:"two",coords:[0,6]},{name:"three",coords:[0,15]},{name:"six",coords:[1,4]},{name:"seven",coords:[1,12]},{name:"eleven",coords:[2,1]},{name:"twelve",coords:[2,10]}],h=[{name:"four",coords:[0,4]},{name:"five",coords:[0,18]},{name:"eight",coords:[1,2]},{name:"nine",coords:[1,9]},{name:"ten",coords:[1,14]},{name:"thirteen",coords:[2,4]},{name:"fourteen",coords:[2,12]},{name:"fifteen",coords:[2,18]}];c(40);var O=function(){return Object(i.jsxs)("div",{className:"library-container",children:[Object(i.jsx)("div",{className:"library-ceiling",children:Object(i.jsx)("div",{className:"light"})}),Object(i.jsxs)("div",{className:"bookshelf-row",children:[Object(i.jsx)(u,{bookshelfLevels:v}),Object(i.jsx)(u,{bookshelfLevels:h})]}),Object(i.jsx)("div",{className:"library-floor"})]})},g=c(5),x=(c(41),{"puzzles-v4":"hello",one:"apple",two:"banana",three:"chromalevo",four:"pineapple",five:"apricot"});var f=function(){var e=Object(r.useState)(!0),t=Object(g.a)(e,2),c=t[0],o=t[1],n=Object(r.useState)(""),a=Object(g.a)(n,2),l=a[0],b=a[1],j=Object(s.m)();return Object(i.jsxs)("div",{className:"answer-hint-box-container ".concat(c?"short":"additional-content"),children:[Object(i.jsxs)("div",{className:"answer-text-and-arrow-container",children:[Object(i.jsx)("input",{type:"text",className:"answer-text-box",value:l,onChange:function(e){b(e.target.value),function(e,t){var c=t.pathname.split("/").pop();return e.toUpperCase()===x[c].toUpperCase()}(e.target.value,j)&&console.log("Level complete!")},placeholder:"Answer"}),Object(i.jsx)("div",{className:"dropdown-arrow ".concat(c?"down-arrow":"up-arrow"),onClick:function(){o(!c)}})]}),!c&&Object(i.jsx)("div",{className:"dropdown-section",children:Object(i.jsx)("p",{children:"Additional content"})})]})};function m(e){return Object(i.jsxs)("div",{className:"flower",children:[Object(i.jsx)("div",{class:"petal",style:{backgroundColor:"".concat(e.colour)}}),Object(i.jsx)("div",{class:"petal",style:{backgroundColor:"".concat(e.colour)}}),Object(i.jsx)("div",{class:"petal",style:{backgroundColor:"".concat(e.colour)}}),Object(i.jsx)("div",{class:"petal",style:{backgroundColor:"".concat(e.colour)}}),Object(i.jsx)("div",{class:"petal",style:{backgroundColor:"".concat(e.colour)}}),Object(i.jsx)("div",{class:"petal",style:{backgroundColor:"".concat(e.colour)}}),Object(i.jsx)("div",{class:"petal",style:{backgroundColor:"".concat(e.colour)}}),Object(i.jsx)("div",{class:"petal",style:{backgroundColor:"".concat(e.colour)}}),Object(i.jsx)("div",{class:"center"})]})}c(42);var p=function(){var e=function(e){var t=[],c=["red","orange","yellow","green","blue","purple","pink","violet","white","cyan"];function r(e,t){return Math.floor(Math.random()*(t-e+1))+e}for(var o=0;o<e;o++){var n={colour:c[r(0,c.length-1)],top:"".concat(r(0,100),"%"),left:"".concat(r(0,100),"%")};t.push(n)}return t}(50);return Object(i.jsxs)("div",{className:"level-1-div",children:[Object(i.jsx)(f,{}),e.map((function(e){return Object(i.jsx)("div",{className:"flower-container",style:{top:e.top,left:e.left},children:Object(i.jsx)(m,{colour:e.colour})})}))]})},w=c(8);function N(e){var t=Object(r.useState)(!1),c=Object(g.a)(t,2),o=c[0],n=c[1];return Object(i.jsx)("div",{className:"torch ".concat(o?"torch-on":"torch-off"),onClick:function(){return e.handleToggle(e.index,!o),void n(!o)}})}c(43);var k={0:"",1:"B",2:"C",3:"D",4:"E",5:"F",6:"G",7:"H",8:"I",9:"J",10:"K",11:"L",12:"M",13:"N",14:"O",15:"P"};var y=function(){var e=Object(r.useState)([!1,!1,!1,!1]),t=Object(g.a)(e,2),c=t[0],o=t[1],n=function(e,t){var r=Object(w.a)(c);r[e]=t,o(r)};return Object(r.useEffect)((function(){var e=parseInt(c.map(Number).join(""),2);document.getElementsByClassName("level-2-answer-container")[0].innerHTML=k[e]}),[c]),Object(i.jsxs)("div",{className:"level-2-div",children:[Object(i.jsx)(f,{}),Object(i.jsxs)("div",{className:"torch-container",children:[Object(i.jsx)(N,{index:0,handleToggle:n}),Object(i.jsx)(N,{index:1,handleToggle:n}),Object(i.jsx)(N,{index:2,handleToggle:n}),Object(i.jsx)(N,{index:3,handleToggle:n})]}),Object(i.jsx)("div",{className:"level-2-answer-container"})]})};var z=function(){return Object(i.jsxs)("div",{className:"colour-wizard",children:[Object(i.jsx)("div",{className:"colour-wizard-head"}),Object(i.jsx)("div",{className:"colour-wizard-body"})]})};var C=function(e){return Object(i.jsx)("div",{className:"dot",style:{backgroundColor:"".concat(e.colour)},children:e.letter})},M=c(9);function L(e){for(var t in I)if(I[t]===e)return t;return null}var I={"rgb(255, 0, 0)":"C","rgb(255, 165, 0)":"H","rgb(255, 255, 0)":"R","rgb(85, 168, 48)":"O","rgb(0, 255, 255)":"M","rgb(0, 0, 255)":"A","rgb(128, 0, 128)":"L","rgb(255, 20, 147)":"E","rgb(255, 69, 0)":"V","rgb(255, 215, 0)":"K","rgb(0, 128, 0)":"B","rgb(0, 128, 128)":"D","rgb(0, 0, 128)":"F","rgb(255, 102, 255)":"G","rgb(232, 120, 120)":"I","rgb(128, 0, 255)":"J"},T=function(e){var t,c=[],r=Object(M.a)(e);try{for(r.s();!(t=r.n()).done;){var o=L(t.value);o&&c.push(o)}}catch(n){r.e(n)}finally{r.f()}return c.join(", ")}("CHROMALEVO"),E=function(){for(var e=["rgb(255, 0, 0)","rgb(255, 165, 0)","rgb(255, 255, 0)","rgb(85, 168, 48)","rgb(0, 255, 255)","rgb(0, 0, 255)","rgb(128, 0, 128)","rgb(255, 20, 147)","rgb(255, 69, 0)","rgb(255, 215, 0)","rgb(0, 128, 0)","rgb(0, 128, 128)","rgb(0, 0, 128)","rgb(255, 102, 255)","rgb(232, 120, 120)","rgb(128, 0, 255)"],t=[],c=null,r=0;r<10;r++){for(var o=[],n=0;n<12;n++){var a=void 0;do{a=Math.floor(Math.random()*e.length)}while(e[a]===c);var s={colour:e[a],letter:I[e[a]]};o.push(s),c=e[a]}t.push(o)}return t}();c(44);var S=function(){var e=Object(r.useState)(!1),t=Object(g.a)(e,2),c=t[0],o=t[1];return Object(i.jsxs)("div",{className:"level-3-div",children:[Object(i.jsx)(f,{}),E.map((function(e){return Object(i.jsx)("div",{className:"dot-row",children:e.map((function(e){return Object(i.jsx)(C,{colour:e.colour,letter:e.letter})}))})})),Object(i.jsxs)("div",{className:"colour-wizard-box",onClick:function(){o(!c)},children:[Object(i.jsx)(z,{}),c&&Object(i.jsxs)("div",{className:"colour-wizard-text",children:["Greetings Reader! I am the Colour Wizard! It's so nice of you to visit my book. I don't see many travellers these days. The solution to this book is: "," ",Object(i.jsx)("br",{}),Object(i.jsx)("br",{})," ",T]})]})]})};var A=function(){var e=Object(s.m)();return Object(i.jsxs)(s.c,{location:e,children:[Object(i.jsx)(s.a,{exact:!0,path:"/puzzles-v4",element:Object(i.jsx)(O,{})}),Object(i.jsx)(s.a,{exact:!0,path:"/puzzles-v4/one",element:Object(i.jsx)(p,{})}),Object(i.jsx)(s.a,{exact:!0,path:"/puzzles-v4/two",element:Object(i.jsx)(y,{})}),Object(i.jsx)(s.a,{exact:!0,path:"/puzzles-v4/three",element:Object(i.jsx)(S,{})})]},e.pathname)};var H=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("div",{className:"app-level-container",style:{width:"".concat(window.innerWidth,"px"),height:"".concat(window.innerHeight,"px")},children:Object(i.jsx)(A,{})})})},B=c(15);a.a.createRoot(document.getElementById("root")).render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(B.a,{children:Object(i.jsx)(H,{})})}))}},[[45,1,2]]]);
//# sourceMappingURL=main.0968c930.chunk.js.map