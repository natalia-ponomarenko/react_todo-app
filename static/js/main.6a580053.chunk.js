(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(7),c=n.n(l),r=(n(13),n(14),n(15),n(5)),i=n(3),u=n(1),m=function(e){var t=e.todo,n=e.deleteTodo,l=e.toggleTodoComplete,c=e.editTodoTitle,r=Object(a.useState)(!1),i=Object(u.a)(r,2),m=i[0],d=i[1],s=Object(a.useState)(t.title),f=Object(u.a)(s,2),p=f[0],E=f[1];return o.a.createElement("li",{key:t.id,className:"".concat(t.completed?"completed":"","\n      ").concat(m?"editing":""),onDoubleClick:function(){d(!0)}},o.a.createElement("div",{className:"view"},o.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.completed,onChange:function(){l(t)},editable:m}),o.a.createElement("label",null,t.title),o.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return n(t.id)}})),o.a.createElement("input",{type:"text",className:"edit",value:p,onChange:function(e){var t=e.target.value;E(t)},onKeyDown:function(e){"Enter"===e.key&&(c(t,p),d(!1)),"Escape"===e.key&&(E(t.title),d(!1))}}))},d=function(e){var t=e.todos,n=e.deleteTodo,a=e.toggleTodoComplete,l=e.editTodoTitle;return o.a.createElement("ul",{className:"todo-list"},t.map((function(e){return o.a.createElement(m,{todo:e,deleteTodo:n,toggleTodoComplete:a,todos:t,editTodoTitle:l})})))};d.defaultProps={todos:[]};var s=function(e){var t=e.filterChange,n=function(e){t(e)};return o.a.createElement("ul",{className:"filters"},o.a.createElement("li",null,o.a.createElement("a",{href:"#/",className:"",onClick:function(){return n("All")}},"All")),o.a.createElement("li",null,o.a.createElement("a",{href:"#/active",className:"",onClick:function(){return n("Active")}},"Active")),o.a.createElement("li",null,o.a.createElement("a",{href:"#/completed",className:"selected",onClick:function(){return n("Completed")}},"Completed")))},f=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)([]),m=Object(u.a)(c,2),f=m[0],p=m[1],E=Object(a.useState)("All"),b=Object(u.a)(E,2),g=b[0],h=b[1],v=Object(a.useMemo)((function(){return function(e){switch(h(e),e){case"Active":return f.filter((function(e){return!e.completed}));case"Completed":return f.filter((function(e){return e.completed}));case"All":return f}}(g)}),[]),C=function(e){if(""!==e){var t={id:+new Date,title:e,completed:!1};p([].concat(Object(r.a)(f),[t]))}};return console.log(f),o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),C(n),l("")}},o.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:n,onChange:function(e){var t=e.target.value;l(t)}})),o.a.createElement("section",{className:"main"},o.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:function(){var e;e=f.some((function(e){return!1===e.completed}))?f.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{completed:!0})})):f.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{completed:!1})})),p(e)}}),o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as completed")),o.a.createElement(d,{todos:f,deleteTodo:function(e){p((function(t){return t.filter((function(t){return t.id!==e}))}))},toggleTodoComplete:function(e){var t=f.find((function(t){return e.id===t.id}));t.completed=!t.completed,p(Object(r.a)(f))},editTodoTitle:function(e,t){f.find((function(t){return e.id===t.id})).title=t}}),o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},f.filter((function(e){return!e.completed})).length," ","items left"),o.a.createElement(s,{todos:f,filterChange:function(){return v}}),o.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){p((function(e){return e.filter((function(e){return!0!==e.completed}))}))}},"Clear completed")))};var p=function(){return o.a.createElement("section",{className:"todoapp"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement(f,null)))};c.a.render(o.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.6a580053.chunk.js.map