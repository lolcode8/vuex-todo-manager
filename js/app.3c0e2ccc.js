(function(t){function e(e){for(var o,c,i=e[0],s=e[1],u=e[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vuex-todo-manager/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},4712:function(t,e,n){"use strict";var o=n("89e5"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("AddTodo"),n("FilterTodos"),n("Todos")],1)])},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Todos")]),t._m(0),n("div",{staticClass:"todos"},t._l(t.allTodos,(function(e){return n("div",{key:e.id,staticClass:"todo",class:{"is-complete":e.completed},on:{dblclick:function(n){return t.onDblClick(e)}}},[t._v(" "+t._s(e.title)+" "),n("i",{staticClass:"fas fa-trash-alt",on:{click:function(n){return t.deleteTodo(e.id)}}})])})),0)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"legend"},[n("span",[t._v("Double click to mark as complete")]),n("span",[n("span",{staticClass:"incomplete-box"}),t._v(" = Incomplete ")]),n("span",[n("span",{staticClass:"complete-box"}),t._v(" = Complete ")])])}],s=n("5530"),u=n("2f62"),d={name:"Todos",methods:Object(s["a"])({},Object(u["b"])(["fetchTodos","deleteTodo","updateTodo"]),{onDblClick:function(t){var e=Object(s["a"])({},t,{completed:!t.completed});this.updateTodo(e)}}),computed:Object(s["a"])({},Object(u["c"])(["allTodos"])),created:function(){this.fetchTodos()}},l=d,p=(n("8959"),n("2877")),f=Object(p["a"])(l,c,i,!1,null,"04c0a2c5",null),m=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Add Todo")]),n("div",{staticClass:"add"},[n("form",{on:{submit:t.onSubmit}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Add Todo!"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("input",{attrs:{type:"submit",value:"Submit"}})])])])},b=[],h={name:"AddTodo",data:function(){return{title:""}},methods:Object(s["a"])({},Object(u["b"])(["addTodo"]),{onSubmit:function(t){t.preventDefault(),this.addTodo(this.title)}})},T=h,g=(n("bc5d"),Object(p["a"])(T,v,b,!1,null,"f0024648",null)),_=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" FilterTodos: "),n("select",{on:{change:function(e){return t.filterTodos(e)}}},[n("option",{attrs:{value:"200"}},[t._v("200")]),n("option",{attrs:{value:"100"}},[t._v("100")]),n("option",{attrs:{value:"50"}},[t._v("50")]),n("option",{attrs:{value:"20"}},[t._v("20")]),n("option",{attrs:{value:"10"}},[t._v("10")]),n("option",{attrs:{value:"5"}},[t._v("5")])])])},O=[],j={name:"FilterTodos",methods:Object(s["a"])({},Object(u["b"])(["filterTodos"]))},x=j,y=(n("4712"),Object(p["a"])(x,w,O,!1,null,"310f556e",null)),k=y.exports,C={name:"App",components:{Todos:m,AddTodo:_,FilterTodos:k}},R=C,S=(n("034f"),Object(p["a"])(R,r,a,!1,null,null,null)),P=S.exports,A=(n("4de4"),n("c740"),n("a434"),n("96cf"),n("1da1")),$=n("bc3a"),E=n.n($),D="https://jsonplaceholder.typicode.com/todos",F={todos:[]},I={allTodos:function(t){return t.todos}},M={fetchTodos:function(t){return Object(A["a"])(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,E.a.get(D);case 3:o=e.sent,r=o.data,n("setTodos",r);case 6:case"end":return e.stop()}}),e)})))()},addTodo:function(t,e){return Object(A["a"])(regeneratorRuntime.mark((function n(){var o,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.commit,n.next=3,E.a.post(D,{title:e,completed:!1});case 3:r=n.sent,a=r.data,o("newTodo",a);case 6:case"end":return n.stop()}}),n)})))()},deleteTodo:function(t,e){return Object(A["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.commit,n.next=3,E.a.delete("".concat(D,"/").concat(e));case 3:o("removeTodo",e);case 4:case"end":return n.stop()}}),n)})))()},filterTodos:function(t,e){return Object(A["a"])(regeneratorRuntime.mark((function n(){var o,r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.commit,r=parseInt(e.target.options[e.target.options.selectedIndex].innerText),n.next=4,E.a.get("".concat(D,"?_limit=").concat(r));case 4:a=n.sent,c=a.data,o("setTodos",c);case 7:case"end":return n.stop()}}),n)})))()},updateTodo:function(t,e){return Object(A["a"])(regeneratorRuntime.mark((function n(){var o,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.commit,n.next=3,E.a.put("".concat(D,"/").concat(e.id),e);case 3:r=n.sent,a=r.data,o("updateTodo",a);case 6:case"end":return n.stop()}}),n)})))()}},J={setTodos:function(t,e){return t.todos=e},newTodo:function(t,e){return t.todos.unshift(e)},removeTodo:function(t,e){return t.todos=t.todos.filter((function(t){return t.id!==e}))},updateTodo:function(t,e){var n=t.todos.findIndex((function(t){return t.id===e.id}));-1!==n&&t.todos.splice(n,1,e)}},N={state:F,getters:I,actions:M,mutations:J};o["a"].use(u["a"]);var q=new u["a"].Store({modules:{todos:N}});o["a"].config.productionTip=!1,new o["a"]({store:q,render:function(t){return t(P)}}).$mount("#app")},"85ec":function(t,e,n){},8959:function(t,e,n){"use strict";var o=n("afaf"),r=n.n(o);r.a},"89e5":function(t,e,n){},afaf:function(t,e,n){},bc5d:function(t,e,n){"use strict";var o=n("c4c8"),r=n.n(o);r.a},c4c8:function(t,e,n){}});
//# sourceMappingURL=app.3c0e2ccc.js.map