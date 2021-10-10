var factory;factory=function(){"use strict";var e='\n<div class="demo-code {{ code-type }}">\n\t<div class="demo-code__container">\n\t\t<div class="demo-code__content">\n\t\t\t{{ demo-code-type }}\n\t\t</div>\n\t\t<div class="demo-code__container-back-btn copy">\n\t\t\t<div class="demo-code__container-back-btn-wrapper">\n\t\t\t\t<h4 class="demo-code__container-back-btn-title">Copy</h4>\n\t\t\t\t<button type="button" class="demo-code__container-btn-copy">\n\t\t\t\t\t<svg fill="#ffffff" height="20" viewBox="0 0 16 16" width="20">\n\t\t\t\t\t\t<path d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path>\n\t\t\t\t\t</svg>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n',t="\n\t".concat(e.replace(/{{ demo-code-type }}/,'\n<pre>\n\t<code class="language-html language">\n{{ demo-code }}\n\t</code>\n</pre>\n'),"\n"),n="\n\t".concat(e.replace(/{{ demo-code-type }}/,'\n<pre>\n\t<code class="language-css language">\n{{ demo-code }}\n\t</code>\n</pre>\n'),"\n"),a="\n\t".concat(e.replace(/{{ demo-code-type }}/,'\n<pre>\n\t<code class="language-javascript language">\n{{ demo-code }}\n\t</code>\n</pre>\n'),"\n"),o="\n\t".concat(e.replace(/{{ demo-code-type }}/,"\n\n"),"\n"),r={html:"".concat(t),css:"".concat(n),js:"".concat(a),demo:"".concat(o)},c=["width","height"],s={padding:"padding",span:{width:"width",height:"height"},span_bef_af:{width:"width",height:"height",left:"left","background-color":"background-color"},span_before:{top:"top",left:"left",transform:"transform"},span_after:{bottom:"bottom",left:"left",transform:"transform"}},l={},p=function createTempHtml_ForDemo(e,t){e=hljs.highlight(e,{language:"xml"}).value;var n=r[t];return n=(n=n.replace(/{{ demo-code }}/,e)).replace(/{{ code-type }}/,"code-".concat(t))},i=function createTempCss_ForDemo(e,t){var n=e.closest(".example-item-active").querySelector(".example__item-content-btn").classList[1],a=function pullsStylesBtn(e){var t={span:{},before_after:{},span_before:{},span_after:{}},n=e.querySelector("span"),a=function pullsStylesBtn_Span_PseudoElements(e){var t={before_after:{},before:{},after:{}};for(var n in s.span_before)t.before[n]=getComputedStyle(e,":before").getPropertyValue(s.span_before[n]);for(var a in s.span_after)t.after[a]=getComputedStyle(e,":after").getPropertyValue(s.span_after[a]);for(var o in s.span_bef_af)t.before_after[o]=getComputedStyle(e,":before").getPropertyValue(s.span_bef_af[o]);return t}(n);return t[s.padding]=getComputedStyle(e).getPropertyValue(s.padding),t.span=function pullsStylesBtn_Span(e){var t={};return t[s.span.width]=getComputedStyle(e).getPropertyValue(s.span.width),t[s.span.height]=getComputedStyle(e).getPropertyValue(s.span.height),parseInt(getComputedStyle(e).getPropertyValue(s.span.height))<=0&&(l.height=1),t}(n),t.span_before=a.before,t.span_after=a.after,t.before_after=a.before_after,t=function checkSameValuesForProperties(e){for(var t in Object.keys(e.span),e.before_after)if(c.includes(t)){var n=parseFloat(e.span[t]),a=parseFloat(e.before_after[t]);if(n===a)e.before_after[t]="100%";else{var o=Math.round(a/(n/100));e.before_after[t]="".concat(o,"%")}}return e}(t)}(e.closest(".example-item-active").querySelector(".example__item-content-btn")),o=r[t];o=o.replace(/{{ code-type }}/,"code-".concat(t));var p=function buildCss_FromTemp(e,t){var n=e.replace(/{{ padding-value-main }}/,"".concat(t.padding));return(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/{{ width-value-span }}/,"".concat(t.span.width))).replace(/{{ height-value-span }}/,"".concat(t.span.height))).replace(/{{ span-before-top }}/,"".concat(t.span_before.top))).replace(/{{ span-before-left }}/,"".concat(t.span_before.left))).replace(/{{ span-before-transform }}/,"".concat(t.span_before.transform))).replace(/{{ span-after-bottom }}/,"".concat(t.span_after.bottom))).replace(/{{ span-after-left }}/,"".concat(t.span_after.left))).replace(/{{ span-after-left }}/,"".concat(t.span_after.left))).replace(/{{ span-after-transform }}/,"".concat(t.span_after.transform))).replace(/{{ span-bef-af-width }}/,"".concat(t.before_after.width))).replace(/{{ span-bef-af-height }}/,"".concat(t.before_after.height))).replace(/{{ span-bef-af-back-color }}/,"".concat(t.before_after["background-color"]))}('\n.{{ name-btn }} {\n\tpadding: {{ padding-value-main }};\n\tborder: none;\n\toutline: none;\n\tbackground-color: transparent;\n\tcursor: pointer;\n}\n\n.{{ name-btn }} span {\n\tposition: relative;\n\tdisplay: block;\n\twidth: {{ width-value-span }};\n\theight: {{ height-value-span }};\n\tborder-radius: 4px;\n\tbackground-color: rgb(254, 254, 254);\n\tfont-size: 0;\n\tcolor: transparent;\n}\n\n.{{ name-btn }} span::before,\n.{{ name-btn }} span::after {\n\tposition: absolute;\n\tcontent: "";\n\twidth: {{ span-bef-af-width }};\n\theight: {{ span-bef-af-height }};\n\tbackground-color: {{ span-bef-af-back-color }};\n}\n\n.{{ name-btn }} span::before {\n\ttop: {{ span-before-top }};\n\tleft: {{ span-before-left }};\n\ttransform: {{ span-before-transform }};\n}\n\n.{{ name-btn }} span::after {\n\tbottom: {{ span-after-bottom }};\n\tleft: {{ span-after-left }};\n\ttransform: {{ span-after-transform }};\n}\n',a),i=buildReadyTemp_Hljs(p=function cleaningCss(e){return Object.keys(l).forEach((function(t){l[t]&&(e=e.replace("\t".concat(t,": 0px;\n"),"")),delete l[t]})),e}(p),[/{{ name-btn }}/g,/\t/g],[n,"  "],"css");return o=o.replace(/{{ demo-code }}/,i)},d=function createTempJs_ForDemo(e,t){var n=e.closest(".example-item-active").querySelector(".example__item-content-btn").classList[1],a=r[t];a=a.replace(/{{ code-type }}/,"code-".concat(t));var o=buildReadyTemp_Hljs('\nconst menuBtn = document.querySelector(".{{ menu-btn-class }}");\n\nmenuBtn.addEventListener("click", () => {\n\tmenuBtn.classList.toggle("{{ menu-btn-class }}--active");\n});\n',[/{{ menu-btn-class }}/g,/\t/g],[n,"  "],"javascript");return a=a.replace(/{{ demo-code }}/,o)};function buildReadyTemp_Hljs(e,t,n,a){var o=e.replace(t[0],n[0]);return o=o.replace(t[1],n[1]),o=hljs.highlight(o,{language:a}).value}var m=function copyToClipboard(e){var t=e.currentTarget.closest(".demo-code__container").querySelector(".language"),n=e.currentTarget.closest(".demo-code__container-back-btn-wrapper").querySelector("h4");!function changeTitleBtnCopy(e,t,n){e.innerHTML=t,setTimeout((function(){e.innerHTML=n}),1500)}(n,"Copied",n.innerHTML);var a=document.createElement("textarea");a.textContent=t.textContent.trim(),document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)};hljs.highlightAll();var f=document.querySelector(".example"),u=f.querySelector(".example__items"),b=document.querySelector(".open-menu-temp");function createBaseTemp(e,t,n,a){var o=e(t,n);a.insertAdjacentHTML("beforeend","\n\t\t".concat(o,"\n\t\t").trim())}var v=function showsCodeForDemo(e){var t=e.currentTarget.dataset.typeCode,n=e.currentTarget.closest(".example-item-active");if(n.querySelector(".code-".concat(t)))return n.querySelector(".code-".concat(t)).remove(),void u.classList.remove("example-items-active");n.querySelector(".demo-code")&&n.querySelector(".demo-code").remove(),"html"===t?createBaseTemp(p,function retrievesTempPressedBtnOpenDemo(e){var t=e.closest(".example-item-active").querySelector(".example__item-content-wrapper-btn").cloneNode(1),n=t.querySelector(".example__item-content-btn");return n.classList.remove("example__item-content-btn"),n.removeAttribute("data-type"),(t=(t=t.innerHTML.trim()).replace(/<span>/g,"\n  <span>")).replace("</span>","</span>\n")}(e.currentTarget),t,n):"css"===t?createBaseTemp(i,e.currentTarget,t,n):"js"===t&&(createBaseTemp(d,e.currentTarget,t,n),function checksIfBlockIsOutOfWindow(e){var t=window.innerWidth,n=document.querySelector("body").clientWidth,a=document.documentElement.scrollWidth,o=a-(a-n),r=e.getBoundingClientRect();if(r.x+r.width>=o){var c=a-t+t-n;e.closest(".demo-code").style.left="-".concat(c+50,"px")}}(n.querySelector(".language-javascript"))),function addEvent_CopyText(e){e.addEventListener("click",m)}(n.querySelector(".demo-code__container-btn-copy")),u.classList.add("example-items-active")},g=function closeMenuDemo(){var e=f.querySelector(".example-item-active");e&&(function closeCodeForDemo(e){u.classList.remove("example-items-active");var t=e.querySelector(".demo-code");t&&t.remove()}(e),e.classList.remove("example-item-active"),e.querySelector(".open-menu").remove())},h=function openMenuDemo(e){g(),e.append(b.content.cloneNode(1)),e.classList.add("example-item-active");var t=e.querySelector(".open-menu");!function changeTempOpenMenu(e){e.classList.add("open-menu-disable"),setTimeout((function(){e.classList.remove("open-menu-disable"),e.classList.add("open-menu-active")}))}(t),function addEventClickShowCode(e){e.querySelectorAll(".open-menu__content-item-btn").forEach((function(e){e.addEventListener("click",v)}))}(t)},_=function changeMenuDemo(){event.currentTarget.dataset.type;var e=event.currentTarget.closest(".example__item");e.classList.contains("example-item-active")?g():h(e)};document.querySelectorAll(".example__item").forEach((function(e){e.querySelector(".example__item-content-btn").addEventListener("click",_)}))},"function"==typeof define&&define.amd?define(factory):factory();
