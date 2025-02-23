"use strict";(self.webpackChunkbasket_remote=self.webpackChunkbasket_remote||[]).push([[464],{56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],c=0;c<e.length;c++){var i=e[c],u=r.base?i[0]+r.base:i[0],l=o[u]||0,p="".concat(u," ").concat(l);o[u]=l+1;var d=n(p),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}s.push(p)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var c=n(o[s]);t[c].references--}for(var i=r(e,a),u=0;u<o.length;u++){var l=n(o[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=i}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},159:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},330:(e,t,n)=>{var r=n(72),a=n.n(r),o=n(825),s=n.n(o),c=n(659),i=n.n(c),u=n(56),l=n.n(u),p=n(159),d=n.n(p),f=n(113),m=n.n(f),v=n(693),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=d(),a()(v.A,h),v.A&&v.A.locals&&v.A.locals},464:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(86);n(330);const a=()=>r.createElement("div",{className:"basketContainer"},r.createElement("p",{className:"basketTitle"},"Basket-rem"),r.createElement("ul",null,r.createElement("li",null,"Product 4")))},601:e=>{e.exports=function(e){return e[1]}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},693:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),a=n.n(r),o=n(314),s=n.n(o)()(a());s.push([e.id,".basketContainer {\n    background-color: #f8f9fa;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.basketTitle {\n    font-size: 24px;\n    font-weight: 600;\n    margin-bottom: 20px;\n}",""]);const c=s},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}}]);