(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(4),n=c.n(s),a=c(5),o=c(6),l=c(8),r=c(7),d=c(1),i=c.n(d),u=(c(13),c(14),c(3)),h=c.n(u),b=c(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.handleReset=function(){e.setState({selectedGood:""})},e.handleClick=function(t){return e.state.selectedGood===t?e.setState({selectedGood:""}):e.setState({selectedGood:t})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(b.jsxs)("main",{className:"section container",children:[t?Object(b.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.handleReset})]}):Object(b.jsx)("h1",{className:"title",children:"No goods selected"}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:j.map((function(c){return Object(b.jsxs)("tr",{"data-cy":"Good",className:h()({"has-background-success-light":t===c}),children:[Object(b.jsx)("td",{children:Object(b.jsx)("button",{"data-cy":t===c?"RemoveButton":"AddButton",type:"button",className:h()("button",{"is-info":t===c}),onClick:function(){return e.handleClick(c)},children:t!==c?"+":"-"})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.a.Component);n.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.69ffbf60.chunk.js.map