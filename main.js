(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\n\n.container {\n    font-family: monospace;\n    \n    height: 100dvh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #044c38;\n    color: #eef2b8;\n\n    overflow: hidden;\n\n}\n\n.header {\n    width: 100%;\n    padding: 15px ;\n    font-size: 3em;\n    text-align: center;\n}\n\n.add_project {\n    font-size: 2rem;\n    padding: 5px;\n    border-radius: 3px;\n    cursor: pointer;\n    background-color: #eef2b8;\n\n    transition: all 0.3s ease-in-out;\n}\n\n\n.add_project:hover {\n    background-color: #46770d;\n\n}\n\n.add_project:active {\n    background-color: #8fcef3;\n}\n\n.add_todo {\n    font-size: 0.8em;\n}\n\n\n#add_project_modal {\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(1.25);\n    width: 50%;\n    height: 380px;\n    padding: 20px 30px;\n    background: #66b582;\n    z-index: 1;\n    box-shadow: 0 0 0 50vmax rgba(0,0,0,.5);\n    border-radius: 10px;\n    transition: top 0ms ease-in-out 200ms,\n                opacity 200ms ease-in-out 0ms,\n                transform 200ms ease-in-out 0ms;\n    \n}\n\n.todos,\n.projects {\n    display: flex;\n    flex-direction: column;\n\n    width: 50%;\n    height: 100%;\n    padding: 3em;\n    gap: 10px;\n}\n\n\n\n.content {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    \n}\n\n.project,\n.todo {\n\n    display: flex;\n    justify-content: space-between;\n\n    border: solid;\n    border-width: 0px 0px 0px 6px;\n    box-shadow: 5px 5px 5px rgb(4, 54, 8);\n    border-color: white white white rgb(146, 116, 17);\n    background-color: #eef2b8;\n    padding: 10px;\n    transition: all 0.3s ease-in-out;\n    cursor: pointer;\n\n\n    color: #044c38;\n    font-size: 2em;\n    \n    width: 80%;\n    height: 2rem;\n}\n\n.project:hover,\n.todo:hover {\n    transform: scale(1.03);\n}\n\n.completed {\n    text-decoration: line-through;\n}\n\n\n\n@media (max-width: 600px) {\n    .content {\n        flex-direction: column;\n    }\n}",""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),o=t(825),r=t.n(o),a=t(659),i=t.n(a),c=t(56),d=t.n(c),s=t(540),l=t.n(s),u=t(113),p=t.n(u),m=t(208),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(m.A,f),m.A&&m.A.locals&&m.A.locals;const h=document.querySelector(".add_project"),v=document.querySelector("#add_project_modal"),b=document.querySelector(".closeBtn"),g=document.getElementById("new_project"),x=document.querySelector(".projects"),y=document.querySelector(".todos"),E=localStorage.getItem("projects"),w=E?JSON.parse(E):[];function L(){x.innerHTML="",y.innerHTML="",w.forEach(((e,n)=>{const t=document.createElement("div"),o=document.createElement("button");o.textContent="💀",t.classList.add("project"),t.textContent=e.name,t.appendChild(o),x.appendChild(t),o.addEventListener("click",(()=>{w.splice(n,1),C(w),L(),y.innerHTML=""})),t.addEventListener("click",(()=>{j(e)}))}))}function j(e){if(!w.includes(e))return;y.innerHTML="";const n=document.createElement("form"),t=document.createElement("input"),o=document.createElement("button"),r=document.createElement("ul");n.setAttribute("id","todo_form"),y.appendChild(n),t.setAttribute("id","todo_input"),t.setAttribute("type","text"),t.setAttribute("autocomplete","off"),t.setAttribute("placeholder","Plan your moves..."),t.classList.add("input"),o.setAttribute("type","sumbit"),o.classList.add("add_todo"),o.innerHTML="☄️",r.classList.add("todo_list"),n.appendChild(t),n.appendChild(o),y.appendChild(r),e.todos&&e.todos.forEach(((n,t)=>{const o=document.createElement("li"),a=document.createElement("button");a.textContent="💀",o.textContent=n.task,n.completed&&o.classList.add("completed"),o.appendChild(a),r.appendChild(o),a.addEventListener("click",(()=>{o.remove(),e.todos.splice(t,1),C(w)})),o.addEventListener("click",(()=>{o.classList.toggle("completed"),e.todos[t]&&(e.todos[t].completed=o.classList.contains("completed")),C(w)}))})),n.addEventListener("submit",(n=>{n.preventDefault(),function(e){const n=todo_input.value;e.todos.push({task:n,completed:!1}),C(w)}(e),j(e)}))}function C(e){localStorage.setItem("projects",JSON.stringify(e))}h.addEventListener("click",(()=>{v.show()})),b.addEventListener("click",(()=>{v.close()})),g.addEventListener("submit",(e=>{e.preventDefault(),function(){const e=document.getElementById("project_name").value;w.push({name:e,todos:[]}),C(w),document.getElementById("project_name").value=""}(),L(),v.close()})),L()})()})();