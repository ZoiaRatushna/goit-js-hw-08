var o={};o=function o(e,n,t){function i(a,c){if(!n[a]){if(!e[a]){var s=void 0;if(!c&&s)return s(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var p=n[a]={exports:{}};e[a][0].call(p.exports,(function(o){return i(e[a][1][o]||o)}),p,p.exports,o,e,n,t)}return n[a].exports}for(var r=void 0,a=0;a<t.length;a++)i(t[a]);return i}({1:[function(o,e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var t=function(o){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=o.trim(),!0===e?n.children:n.firstChild},i=function(o,e){var n=o.children;return 1===n.length&&n[0].tagName===e},r=function(o){return null!=(o=o||document.querySelector(".basicLightbox"))&&!0===o.ownerDocument.body.contains(o)};n.visible=r,n.create=function(o,e){var n=function(o,e){var n=t('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=n.querySelector(".basicLightbox__placeholder");o.forEach((function(o){return r.appendChild(o)}));var a=i(r,"IMG"),c=i(r,"VIDEO"),s=i(r,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(o=function(o){var e="string"==typeof o,n=o instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(t(o,!0)):"TEMPLATE"===o.tagName?[o.content.cloneNode(!0)]:Array.from(o.children)}(o),e=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(o=Object.assign({},o)).closable&&(o.closable=!0),null==o.className&&(o.className=""),null==o.onShow&&(o.onShow=function(){}),null==o.onClose&&(o.onClose=function(){}),"boolean"!=typeof o.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof o.className)throw new Error("Property `className` must be a string");if("function"!=typeof o.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof o.onClose)throw new Error("Property `onClose` must be a function");return o}(e)),a=function(o){return!1!==e.onClose(c)&&function(o,e){return o.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(o)||o.parentElement.removeChild(o),e()}),410),!0}(n,(function(){if("function"==typeof o)return o(c)}))};!0===e.closable&&n.addEventListener("click",(function(o){o.target===n&&a()}));var c={element:function(){return n},visible:function(){return r(n)},show:function(o){return!1!==e.onShow(c)&&function(o,e){return document.body.appendChild(o),setTimeout((function(){requestAnimationFrame((function(){return o.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof o)return o(c)}))},close:a};return c}},{}]},{},[1])(1);const e=document.querySelector(".gallery"),n=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}].map((({preview:o,original:e,description:n})=>`<div class = "gallery__item">\n<a class = "gallery__link" href = "${e}">\n<img class = "gallery__image"\n  src = "${o}"\n  data-source = "${e}"\n  alt = "${n}"/>\n</a></div>`)).join("");e.insertAdjacentHTML("afterbegin",n),e.addEventListener("click",(function n(t){if(t.preventDefault(),!t.target.classList.contains("gallery__image"))return;e.addEventListener("click",n);const i=o.create(`<div class = "modal">\n <img src = "${t.target.dataset.source}" width = "800" height = "600">\n</div>`,{onShow:o=>{window.addEventListener("keydown",r),console.log("onShow",o)},onClose:o=>{window.removeEventListener("keydown",r),console.log("onClose",o)}});function r(o){"Escape"===o.code&&i.close()}i.show()}));
//# sourceMappingURL=01-gallery.4850314d.js.map
