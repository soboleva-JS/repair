!function(t){var e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var s=(t,e="+7 (___) ___-__-__")=>{const i=document.querySelectorAll(t);function s(t){const i=t.keyCode,s=e,o=s.replace(/\D/g,""),n=this.value.replace(/\D/g,"");let r=0,l=s.replace(/[_\d]/g,(function(t){return r<n.length?n.charAt(r++)||o.charAt(r):t}));r=l.indexOf("_"),-1!=r&&(l=l.slice(0,r));let a=s.substr(0,this.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||i>47&&i<58)&&(this.value=l),"blur"==t.type&&this.value.length<5&&(this.value="")}for(const t of i)t.addEventListener("input",s),t.addEventListener("focus",s),t.addEventListener("blur",s)};var o=()=>{const t=(t,e,i)=>{const s=document.querySelectorAll(t),o=document.querySelector(e),n=o.querySelectorAll(i);document.addEventListener("click",e=>{e.target===o&&(o.style.visibility="hidden",o.querySelectorAll(".nav-arrow").forEach(t=>t.style.visibility="hidden")),s.forEach(i=>{e.target.closest(t)&&(o.style.visibility="visible",o.querySelector(".nav-arrow_right").style.visibility="visible")}),n.forEach(t=>{t===e.target&&(o.style.visibility="hidden",o.querySelectorAll(".nav-arrow").forEach(t=>t.style.visibility="hidden"))})})},e=(t,e)=>{const i=document.querySelector(t),s=i.querySelectorAll(e);document.addEventListener("click",t=>{t.target===i&&(i.style.visibility="hidden"),i.querySelectorAll(".nav-arrow").forEach(t=>t.style.visibility="hidden"),s.forEach(e=>{e===t.target&&(i.closest(".popup").style.visibility="hidden")})})};s('input[name="phone"]'),t(".link-list-repair",".popup-repair-types",".close"),t(".link-list-menu",".popup-repair-types",".close"),t(".button_wide",".popup-consultation",".close"),t(".checkbox__descr_round-feedback",".popup-privacy",".close"),t(".checkbox__descr",".popup-privacy",".close"),e(".popup-thank",".close"),e(".popup-portfolio",".close"),t(".transparency-item",".popup-transparency",".close")};var n=()=>{const t=document.querySelector(".popup-dialog-menu");t.style.visibility="hidden",window.addEventListener("resize",()=>{window.innerWidth<=575?"translate3d(645px, 0px, 0px)"==t.style.transform&&(t.style.transform="translate3d(0px, -100vh, 0px)"):"translate3d(0px, -100vh, 0px)"==t.style.transform&&(t.style.transform="translate3d(645px, 0px, 0px)")});const e=()=>{window.innerWidth<=575?""==t.style.transform||"translate3d(0px, -100vh, 0px)"==t.style.transform?(t.style.transform="translate3d(0px, 0px, 0px)",t.style.visibility="visible"):(t.style.transform="translate3d(0px, -100vh, 0px)",t.style.visibility="hidden"):""==t.style.transform||"translate3d(645px, 0px, 0px)"==t.style.transform?(t.style.transform="translate3d(0px, 0px, 0px)",t.style.visibility="visible"):(t.style.transform="translate3d(645px, 0px, 0px)",t.style.visibility="hidden")},i=function(t){let e;t.preventDefault(),e=t.target.getAttribute("href")?document.getElementById(t.target.getAttribute("href").slice(1)):document.getElementById(t.target.parentNode.getAttribute("href").slice(1)),e.scrollIntoView({behavior:"smooth"})};document.body.addEventListener("click",s=>{s.target.closest(".header-contacts__arrow")&&(()=>{const t=document.querySelector(".header-contacts__phone-number-accord");"absolute"!=t.style.position&&t.style.position?(t.childNodes[0].style.opacity="0",t.style.position="absolute"):(t.childNodes[0].style.opacity="1",t.style.position="relative")})(),s.target.closest(".popup-dialog-menu")||"translate3d(0px, 0px, 0px)"!==t.style.transform||e(),(s.target.closest(".menu")||s.target.closest(".close-menu"))&&e(),s.target.closest(".popup-menu-nav__item")&&(e(),i(event)),s.target.closest(".button-footer")&&i(s),s.target.closest(".link-list-menu")&&e()})};var r=()=>{const t=document.querySelectorAll("form"),e=document.querySelectorAll("input"),i="Загрузка...",s="Что-то пошло не так...";document.querySelectorAll('input[name="name"]').forEach(t=>t.addEventListener("input",()=>{t.value=t.value.replace(/[^а-яёa-z]/gi,"")})),t.forEach(t=>{t.addEventListener("submit",o=>{if(t.querySelector(".customSpanPolicy")&&t.querySelector(".customSpanPolicy").remove(),o.preventDefault(),t.querySelector(".checkbox__input").checked&&t.querySelector('input[name="phone"]').value.length>12){let o=document.createElement("div");o.style.color="black",o.classList.add("status"),t.appendChild(o),o.textContent=i;const n=new FormData(t);let r={};n.forEach((t,e)=>r[e]=t),(t=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"multipart/form-data"},body:JSON.stringify(t)}))(r).then(t=>{if(200!==t.status)throw new Error("status error not 200");document.querySelectorAll(".popup").forEach(t=>{t.style.visibility="hidden"}),document.querySelector(".popup-thank").style.visibility="visible"}).catch(t=>{console.log("error: ",t),document.querySelector(".status").textContent=s}).finally(()=>{e.forEach(t=>{t.value=""}),setTimeout(()=>{document.querySelector(".status").remove()},1e3),t.querySelector(".checkbox__input").checked=!1})}else if(!t.querySelector(".checkbox__input").checked&&t.querySelector('input[name="phone"]').value.length>12){const e=document.createElement("span");e.textContent="Необходимо cогласиться ",e.style.color="red",e.classList.add("customSpanPolicy"),t.querySelector(".checkbox__descr").prepend(e),setTimeout(()=>{e.remove()},2e3)}})})};var l=()=>{let t;const e=(t,e)=>{document.querySelector(".popup-repair-types-content-table").innerHTML="",t.forEach((t,i)=>{if(0!==i&&e===i-1){const e=document.createElement("table");e.classList.add("popup-repair-types-content-table__list"),document.querySelector(".popup-repair-types-content-table").append(e);const s=document.createElement("tbody");e.append(s),t.priceList.forEach((t,o)=>{const n=document.createElement("tr");n.classList.add("mobile-row"),n.innerHTML=`\n    <td class="repair-types-name">${t.typeService}</td>    \n    <td class="repair-types-value">${t.units}</td>\n    <td class="repair-types-value">${t.cost}</td> \n  `,s.append(n),0===o&&e.classList.add("tab"+i)})}})};var i;i=i=>(i=>{t=i,i.forEach((s,o)=>{if(0===o)document.querySelector(".popup-repair-types-content__head-date").textContent=i[0].date;else{const i=document.createElement("button");i.classList.add("button_o"),i.classList.add("popup-repair-types-nav__item"),i.textContent=s.title,document.querySelector(".nav-list-popup-repair").append(i),e(t,0)}}),document.querySelectorAll(".popup-repair-types-nav__item")[0].classList.add("active"),document.querySelector(".popup-repair-types-content__head-title").textContent=document.querySelectorAll(".popup-repair-types-nav__item")[0].textContent})(i),fetch("./db/db.json").then(t=>{if(200!==t.status)throw new Error("network status not 200");return t.json()}).then(t=>i(t)).catch(t=>console.log(t));const s=document.querySelector(".nav-list-popup-repair");s.addEventListener("click",i=>{let o=i.target.closest(".popup-repair-types-nav__item");document.querySelector(".popup-repair-types-content__head-title").textContent=o.textContent,s.querySelectorAll(".popup-repair-types-nav__item").forEach((i,n)=>{i===o&&(i=>{const o=s.querySelectorAll(".popup-repair-types-nav__item");for(let s=0;s<o.length;s++)i===s?(o[s].classList.add("active"),e(t,s)):o[s].classList.remove("active")})(n)})})};var a=()=>{(()=>{const t=document.querySelector(".scheme"),e=document.querySelector("#scheme-list"),i=e.querySelectorAll(".scheme-nav__item"),s=t.querySelectorAll(".scheme-description-block"),o=t.querySelector(".wrap-wrap");e.addEventListener("click",t=>{let e=t.target.closest(".scheme-nav__item");e&&i.forEach((t,n)=>{t===e&&(t=>{for(let e=0;e<s.length;e++)t===e?(i[e].classList.add("active"),o.style.transform=`translateX(-${1176*e}px)`,s[e].classList.add("visible-content-block")):(i[e].classList.remove("active"),s[e].classList.remove("visible-content-block"))})(n)})})})();const t=(t,e,i,s,o)=>{const n=document.querySelector(t),r=document.querySelector(e),l=n.querySelector(i),a=n.querySelector(s),d=n.querySelector(o),c=[...l.children];a.style.visibility="hidden",n.addEventListener("click",t=>{const e=+l.clientWidth,i=+r.clientWidth;let s=Math.floor((e-i)/(c.length-2));if(t.target==d||t.target.parentNode==d){a.style.visibility="visible";const t=+l.style.transform.replace(/[^0-9\-]/g,"");t>=-(e-i)+s&&(l.style.transform=`translateX(${t-s}px)`),t<2*s-(e-i)&&(d.style.visibility="hidden")}if(t.target==a||t.target.parentNode==a){d.style.visibility="visible";const t=+l.style.transform.replace(/[^0-9\-]/g,"");t<0&&(l.style.transform=`translateX(${t+s}px)`),t>-2*s&&(a.style.visibility="hidden")}}),window.addEventListener("resize",()=>{l.style.transform="translateX(0px)",a.style.visibility="hidden"})};t(".repair-types",".repair-types-tab",".nav-list-repair",".nav-arrow_left",".nav-arrow_right"),t(".scheme",".nav",".nav-list",".nav-arrow_left",".nav-arrow_right"),t(".designs",".nav-designs",".nav-list-designs",".nav-arrow_left",".nav-arrow_right");const e=(t,e,i)=>{const s=document.querySelector(t),o=[...s.querySelector(e).children];s.addEventListener("click",t=>{t.target.closest(e)&&o.forEach(e=>{t.target==e?e.classList.add(i):e.classList.remove(i)})}),window.addEventListener("resize",()=>{o.forEach((t,e)=>{t.classList.remove(i),0==e&&t.classList.add(i)})})};e(".repair-types-tab",".nav-list-repair","active"),e(".designs",".nav-list-designs","active")};var d=()=>{const t=document.querySelector(".accordion"),e=t.querySelector("ul").querySelectorAll("li");t.addEventListener("click",t=>{const i=event.target.closest("li");i&&e.forEach((t,s)=>{t===i&&(t=>{e.forEach((e,i)=>{i===t?(e.querySelector("h2").classList.add("msg-active"),e.querySelector("div").style.opacity="1"):(e.querySelector("h2").classList.remove("msg-active"),e.querySelector("div").style.opacity="0")})})(s)})})};class c{constructor({index:t,block:e,main:i,wrap:s,position:o=0,next:n,prev:r,slidesToShow:l=3,infinity:a=!1,responsive:d=[],counterCurrent:c,counterTotal:p,activeClass:h,changeTexts:u}){this.index=t,this.block=document.querySelector(e),this.main=this.block.querySelector(i),this.wrap=this.block.querySelector(s),this.slides=[...document.querySelector(s).children],this.next=this.block.querySelector(n),this.prev=this.block.querySelector(r),this.slidesToShow=l,this.options={position:o,widthSlide:Math.floor(100/this.slidesToShow),infinity:a},this.responsive=d,this.activeClass=h,this.counterCurrent=this.block.querySelector(c),this.counterTotal=this.block.querySelector(p),this.texts=[...document.querySelectorAll(u)]}init(){this.counterTotal&&(this.counterTotal.textContent=this.slides.length),this.counterCurrent&&(this.counterCurrent.textContent=this.options.position+1),this.activeClass&&(this.slides[this.options.position].classList.contains(this.activeClass)||this.slides[this.options.position].classList.add(this.activeClass)),this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("glo-slider"+this.index),this.wrap.classList.add("glo-slider__wrap"+this.index);for(const t of this.slides)t.classList.add("glo-slider__item"+this.index)}addStyle(){let t=document.getElementById("sliderCarousel-style"+this.index);t||(t=document.createElement("style"),t.id="sliderCarousel-style"+this.index),t.textContent=`\n    .glo-slider${this.index}{\n        overflow: hidden;\n    }\n    .glo-slider__wrap${this.index}{\n        display: flex;\n        transition: transform .5s;\n        will-change: transform;\n    }\n    .glo-slider__item${this.index}{\n        display: flex;\n        align-items: center;\n        flex: 0 0 ${this.options.widthSlide}%;\n        margin: 0 auto;\n        width: 100%;\n        height: 100%;\n    }\n    .glo-slider__next${this.index},\n    .glo-slider__prev${this.index} {\n        margin: 0 15px 0 0;\n        width: 50px;\n        height: 50px;\n        border: 1px solid #19b5fe;\n        border-radius: 50%;\n        background: transparent;\n        color: #19b5fe;\n        font-size: 28px;\n        text-align: center;\n        padding-top: 0;\n        transition: .2s ease-in-out;\n    }\n    .glo-slider__next${this.index}:hover,\n    .glo-slider__prev${this.index}:hover {\n        background: #19b5fe;\n        color: #fff;\n    }\n    `,document.head.appendChild(t)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){if((this.options.infinity||this.options.position>0)&&(this.options.position--,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`,this.counterCurrent&&(this.counterCurrent.textContent=this.options.position+1),this.activeClass&&(this.slides[this.options.position].classList.add(this.activeClass),this.options.position==this.slides.length-1?this.slides[0].classList.remove(this.activeClass):this.slides[this.options.position+1].classList.remove(this.activeClass)),this.texts.length>0)){for(const t of this.texts)t.style.display="none";this.texts[this.options.position].style.display="block"}}nextSlider(){if((this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(this.options.position++,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`,this.counterCurrent&&(this.counterCurrent.textContent=this.options.position+1),this.activeClass&&(this.slides[this.options.position].classList.add(this.activeClass),0==this.options.position?this.slides[this.slides.length-1].classList.remove(this.activeClass):this.slides[this.options.position-1].classList.remove(this.activeClass)),this.texts.length>0)){for(const t of this.texts)t.style.display="none";this.texts[this.options.position].style.display="block"}}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev"+this.index,this.next.className="glo-slider__next"+this.index,this.main.appendChild(this.prev),this.main.appendChild(this.next),this.prev.textContent="<",this.next.textContent=">"}responseInit(){const t=this.slidesToShow,e=this.responsive.map(t=>t.breakpoint),i=Math.max(...e),s=s=>{if(!0){if(this.wrap.style.transform="translateX(0)",this.options.position=0,this.activeClass){for(const t of this.slides)t.classList.remove(this.activeClass);this.slides[this.options.position].classList.add(this.activeClass)}if(this.texts.length>0){for(const t of this.texts)t.style.display="none";this.texts[this.options.position].style.display="block"}this.counterCurrent&&(this.counterCurrent.textContent=this.options.position+1)}const o=document.documentElement.clientWidth;if(o<i)for(let t=0;t<e.length;t++)o<e[t]&&(this.slidesToShow=this.responsive[t].slideToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=t,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle()};window.addEventListener("resize",()=>{s()}),this.counterCurrent&&(this.counterCurrent.textContent=this.options.position+1)}}var p=()=>{document.querySelector(".designs-slider-wrap").innerHTML;new c({index:0,block:".partners",main:".partners-slider",wrap:".partnersSliderWrap",position:0,next:".slider-arrow_right",prev:".slider-arrow_left",slidesToShow:4,infinity:!0,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}).init();new c({index:1,block:".reviews",main:".reviews-slider",wrap:".reviewsSliderWrap",position:0,next:".slider-arrow_right",prev:".slider-arrow_left",slidesToShow:1,infinity:!0}).init();new c({index:2,block:".transparency",main:".transparency-slider",wrap:".transparencySliderWrap",position:0,next:".slider-arrow_right",prev:".slider-arrow_left",slidesToShow:3,infinity:!0,responsive:[{breakpoint:1090,slideToShow:1}]}).init();new c({index:3,block:".popup-transparency",main:".popup-transparency-slider",wrap:".popupTransparencySliderWrap",position:0,next:".popup-arrow_transparency_right",prev:".popup-arrow_transparency_left",slidesToShow:1,infinity:!0,counterCurrent:".slider-counter-content__current",counterTotal:".slider-counter-content__total"}).init();(()=>{const t=document.querySelector(".repair-types"),e=(t.querySelector(".nav-list-repair"),[...t.querySelector(".repair-types-slider").children]);let i=new c({index:"LLL",block:".repair-types",main:".repair-types-slider",wrap:".types-repair1",position:0,next:".slider-arrow_right",prev:".slider-arrow_left",slidesToShow:1,infinity:!0,counterCurrent:".slider-counter-content__current",counterTotal:".slider-counter-content__total"});i.init(),t.addEventListener("click",s=>{if(s.target.closest(".repair-types-nav__item")){i=null;const o=s.target.className.replace(/[^0-9]/g,"");e.forEach(e=>{e.className.replace(/[^0-9]/g,"")===o&&(t.querySelector(".repair-types-slider").children[0].before(e),i=new c({index:"LLL",block:".repair-types",main:".repair-types-slider",wrap:".types-repair"+o,position:0,next:".slider-arrow_right",prev:".slider-arrow_left",slidesToShow:1,infinity:!0,counterCurrent:".slider-counter-content__current",counterTotal:".slider-counter-content__total"}),i.init())})}})})();new c({index:4,block:".problems .wrapper_small.desktop-hide",main:".problems-slider",wrap:".problemsSliderWrapWrap",position:0,next:".slider-arrow_right-problems",prev:".slider-arrow_left-problems",slidesToShow:1,infinity:!0,activeClass:"active-item"}).init();new c({index:7,block:".formula .wrapper_small.desktop-hide",main:".formula-slider",wrap:".formulaSliderWrapWrap",position:0,next:".slider-arrow_right-formula",prev:".slider-arrow_left-formula",slidesToShow:1,infinity:!0,activeClass:"active-item"}).init();(()=>{const t=document.querySelector(".portfolio-slider.mobile-hide"),e=t.querySelector(".portfolioSliderDesktopWrapWrap"),i=document.querySelector(".slider-arrow_right-portfolio.mobile-hide"),s=document.querySelector(".slider-arrow_left-portfolio.mobile-hide");let o,n,r,l;i.addEventListener("click",()=>{(()=>{const a=+Math.floor(e.style.transform.replace(/[^0-9\-]/g,""));document.documentElement.clientWidth>1024?(o=Math.floor(t.clientWidth/3),n=Math.floor(t.clientWidth/3*2),0!=a&&a?a<0&&(e.style.transform=`translateX(-${n}px)`,i.style.display="none"):(e.style.transform=`translateX(-${o}px)`,s.style.display="flex")):document.documentElement.clientWidth>900?(o=Math.floor(t.clientWidth/2),n=Math.floor(t.clientWidth/2*2),r=Math.floor(t.clientWidth/2*3),0!=a&&a?a>-n?e.style.transform=`translateX(-${n}px)`:a>-r&&(e.style.transform=`translateX(-${r}px)`,i.style.display="none"):(e.style.transform=`translateX(-${o}px)`,s.style.display="flex")):document.documentElement.clientWidth>575&&(o=Math.floor(.85*t.clientWidth),n=Math.floor(.85*t.clientWidth*2),r=Math.floor(.85*t.clientWidth*3),l=Math.floor(.85*t.clientWidth*4),0!=a&&a?a>-n?e.style.transform=`translateX(-${n}px)`:a>-r?e.style.transform=`translateX(-${r}px)`:a>-l&&(e.style.transform=`translateX(-${l}px)`,i.style.display="none"):(e.style.transform=`translateX(-${o}px)`,s.style.display="flex"))})()}),s.addEventListener("click",()=>{(()=>{const a=+Math.floor(e.style.transform.replace(/[^0-9\-]/g,""));document.documentElement.clientWidth>1024?(o=Math.floor(t.clientWidth/3),n=Math.floor(t.clientWidth/3*2),a<-o?e.style.transform=`translateX(${-o}px)`:a<0&&a>-n&&(e.style.transform="translateX(0px)",s.style.display="none",i.style.display="flex")):document.documentElement.clientWidth>900?(o=Math.floor(t.clientWidth/2),n=Math.floor(t.clientWidth/2*2),r=Math.floor(t.clientWidth/2*3),a<-n?(e.style.transform=`translateX(${-n}px)`,i.style.display="flex"):a<-o?e.style.transform=`translateX(${-o}px)`:a<0&&(e.style.transform="translateX(0px)",s.style.display="none",i.style.display="flex")):(document.documentElement.clientWidth,o=Math.floor(.85*t.clientWidth),n=Math.floor(.85*t.clientWidth*2),r=Math.floor(.85*t.clientWidth*3),l=Math.floor(.85*t.clientWidth*4),a<-r?(e.style.transform=`translateX(${-r}px)`,s.style.display="flex"):a<-n?e.style.transform=`translateX(${-n}px)`:a<-o?e.style.transform=`translateX(${-o}px)`:a<0&&(e.style.transform="translateX(0px)",s.style.display="none",i.style.display="flex"))})()}),window.addEventListener("resize",()=>{e.style.transform="translateX(0px)",document.documentElement.clientWidth>575?(s.style.display="none",i.style.display="flex"):(s.style.display="none",i.style.display="none")})})();const t=new c({index:6,block:".popup-portfolio",main:".popup-portfolio-slider",wrap:".popupPortfolioSliderWrap",position:0,next:".popup-arrow_right",prev:".popup-arrow_left",slidesToShow:1,infinity:!0,counterCurrent:".slider-counter-content__current",counterTotal:".slider-counter-content__total",changeTexts:".popup-portfolio-text"});t.init();new c({index:5,block:".portfolio",main:".portfolio-slider-mobile.tablet-hide.desktop-hide",wrap:".portfolioSliderMobileWrapWrap",position:0,next:".slider-arrow-tablet-mobile_right",prev:".slider-arrow-tablet-mobile_left",slidesToShow:1,infinity:!0,counterCurrent:".slider-counter-content__current",counterTotal:".slider-counter-content__total"}).init(),document.querySelector(".portfolio-slider-wrap").addEventListener("click",e=>{e.target.closest(".portfolio-slider.mobile-hide")?document.querySelectorAll(".portfolio-slider.mobile-hide .portfolio-slider__slide-frame").forEach((i,s)=>{if(i==e.target.closest(".portfolio-slider__slide-frame")){const e=document.querySelector(".popup-portfolio");e.style.visibility="visible",e.querySelectorAll(".popup-portfolio-text").forEach((e,i)=>{e.style.display="none",i==s&&(t.options.position=i,t.wrap.style.transform=`translateX(-${t.options.position*t.options.widthSlide}%)`,t.counterCurrent.textContent=t.options.position+1,e.style.display="block")})}}):e.target.closest(".portfolio-slider-mobile.tablet-hide.desktop-hide")&&document.querySelectorAll(".portfolio-slider-mobile.tablet-hide.desktop-hide .portfolio-slider__slide-frame").forEach((i,s)=>{if(i==e.target.closest(".portfolio-slider__slide-frame")){const e=document.querySelector(".popup-portfolio");e.style.visibility="visible",e.querySelectorAll(".popup-portfolio-text").forEach((e,i)=>{e.style.display="none",i==s&&(t.options.position=i,t.wrap.style.transform=`translateX(-${t.options.position*t.options.widthSlide}%)`,t.counterCurrent.textContent=t.options.position+1,e.style.display="block")})}})}),window.addEventListener("resize",()=>{document.querySelector(".popupPortfolioSliderWrap").style.transform="translateY(0px)",document.querySelectorAll(".popup-portfolio-text").forEach((t,e)=>{t.style.display=0==e?"block":"none"})})};class h{constructor({index:t,block:e,main:i,wrap:s,positionX:o=0,positionY:n=0,next:r,prev:l,slidesToShow:a=1,infinity:d=!1,responsive:c=[],counterCurrent:p,counterTotal:h,activeClass:u,changeTexts:y,btnsSel:m,previewSel:v}){this.index=t,this.block=document.querySelector(e),this.main=this.block.querySelector(i),this.wrap=this.block.querySelector(s),this.slides=[...document.querySelector(s).children],this.next=this.block.querySelector(r),this.prev=this.block.querySelector(l),this.slidesToShow=a,this.btns=[...document.querySelectorAll(m)],this.previews=[...document.querySelectorAll(v)],this.options={positionX:o,positionY:n,widthSlide:Math.floor(100/this.slidesToShow),heightSlide:Math.floor(100/[...this.slides[o].children].length),infinity:d},this.responsive=c,this.activeClass=u,this.counterCurrent=this.block.querySelector(p),this.counterTotal=this.block.querySelector(h),this.texts=[...document.querySelectorAll(y)]}init(){document.documentElement.clientWidth>575?this.options.heightSlide=Math.floor(100/[...this.slides[this.options.positionX].children].length):this.options.heightSlide=Math.floor(100/this.slidesToShow),this.previews.forEach((t,e)=>{t.classList.remove("visible"),e==this.options.positionX&&(t.classList.add("visible"),t.children[0].children[0].classList.add("preview_active"))}),this.counterTotal&&(this.counterTotal.textContent=[...this.slides[0].children].length),this.counterCurrent&&(this.counterCurrent.textContent=this.options.positionY+1),this.activeClass&&(this.slides[this.options.positionX].classList.contains(this.activeClass)||this.slides[this.options.positionX].classList.add(this.activeClass)),this.addGloClass(),this.addStyle(),this.changeSlider(),this.changePreview(),this.prev.addEventListener("click",()=>{(this.options.infinity||this.options.positionY>0)&&(this.options.positionY--,this.options.positionY<0&&(this.options.positionY=[...this.slides[this.options.positionX].children].length-this.slidesToShow),this.slides[this.options.positionX].style.transform=`translateY(-${this.options.positionY*this.options.widthSlide}%)`,this.counterCurrent&&(this.counterCurrent.textContent=this.options.positionY+1))}),this.next.addEventListener("click",()=>{(this.options.infinity||this.options.positionY<[...this.slides[this.options.positionX].children].length-this.slidesToShow)&&(this.options.positionY++,this.options.positionY>[...this.slides[this.options.positionX].children].length-this.slidesToShow&&(this.options.positionY=0),this.slides[this.options.positionX].style.transform=`translateY(-${this.options.positionY*this.options.widthSlide}%)`,this.counterCurrent&&(this.counterCurrent.textContent=this.options.positionY+1))}),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("glo-slider"+this.index),this.wrap.classList.add("glo-slider__wrap"+this.index);for(const t of this.slides){t.classList.add("glo-slider__item"+this.index);for(const e of t.children)e.classList.add("glo-slider__item"+this.index)}}addStyle(){let t=document.getElementById("sliderCarousel-style"+this.index);t||(t=document.createElement("style"),t.id="sliderCarousel-style"+this.index),t.textContent=`\n    .glo-slider${this.index}{\n        overflow: hidden;\n        position: relative;\n    }\n    .glo-slider__wrap${this.index}{\n        display: flex;\n        transition: transform .5s;\n        will-change: transform;\n        width: 100%;\n        height: 100%;\n        position: relative;\n    }\n    .glo-slider__item${this.index}{\n        width: 100%;\n        height: 100%;\n        position: relative;\n        flex: 0 0 ${this.options.widthSlide}%;\n        margin: 0 auto;\n    }\n    .glo-slider__next${this.index},\n    .glo-slider__prev${this.index} {\n        margin: 0 15px 0 0;\n        width: 50px;\n        height: 50px;\n        border: 1px solid #19b5fe;\n        border-radius: 50%;\n        background: transparent;\n        color: #19b5fe;\n        font-size: 28px;\n        text-align: center;\n        padding-top: 0;\n        transition: .2s ease-in-out;\n    }\n    .glo-slider__next${this.index}:hover,\n    .glo-slider__prev${this.index}:hover {\n        background: #19b5fe;\n        color: #fff;\n    }\n    `,document.head.appendChild(t)}changeSlider(){this.btns.forEach((t,e)=>{t.addEventListener("click",()=>{document.querySelectorAll(".preview-block__item-inner.preview_active").forEach(t=>t.classList.remove("preview_active")),this.slides[this.options.positionX].style.transform="translateY(0px)",this.wrap.style.transform=`translateX(-${e*this.options.widthSlide}%)`,this.options.positionX=e,this.previews.length>0&&document.documentElement.clientWidth>1024?this.previews.forEach((t,e)=>{t.classList.remove("visible"),e==this.options.positionX&&(t.classList.add("visible"),t.children[0].children[0].classList.add("preview_active"))}):(this.slides.forEach(t=>{t.style.transform="translateY(0px)"}),this.options.positionY=0,this.counterCurrent&&(this.counterCurrent.textContent=this.options.positionY+1,this.counterTotal.textContent=[...this.slides[this.options.positionX].children].length))})})}changePreview(){this.previews.forEach((t,e)=>{t.addEventListener("click",e=>{t.querySelectorAll(".preview-block__item-inner.preview_active").forEach(t=>t.classList.remove("preview_active"));for(const i in t.children)t.children[i]==e.target.closest(".preview-block__item")&&(t.children[i].children[0].classList.add("preview_active"),this.options.positionY=i,this.slides[this.options.positionX].style.transform=`translateY(-${i*this.options.widthSlide}%)`)})})}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev"+this.index,this.next.className="glo-slider__next"+this.index,this.main.appendChild(this.prev),this.main.appendChild(this.next),this.prev.textContent="<",this.next.textContent=">"}responseInit(){const t=this.slidesToShow,e=this.responsive.map(t=>t.breakpoint),i=Math.max(...e),s=s=>{if(!0){if(this.options.positionX=0,this.options.positionY=0,this.wrap.style.transform="translateX(0)",this.slides[this.options.positionX].style.transform="translateY(0px)",this.activeClass){for(const t of this.slides)t.classList.remove(this.activeClass);this.slides[this.options.positionX].classList.add(this.activeClass)}if(this.texts.length>0){for(const t of this.texts)t.style.display="none";this.texts[this.options.positionX].style.display="block"}this.previews.forEach((t,e)=>{t.classList.remove("visible"),e==this.options.positionX&&(t.classList.add("visible"),t.children[0].children[0].classList.add("preview_active"))}),this.counterTotal&&(this.counterTotal.textContent=[...this.slides[0].children].length),this.counterCurrent&&(this.counterCurrent.textContent=this.options.positionY+1)}const o=document.documentElement.clientWidth;if(o<i)for(let t=0;t<e.length;t++)o<e[t]&&(this.slidesToShow=this.responsive[t].slideToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=t,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle()};window.addEventListener("resize",()=>{s()}),this.counterCurrent&&(this.counterCurrent.textContent=this.options.positionX+1)}}var u=()=>{new h({index:"1",block:".designs",main:".designs-slider",wrap:".customWrapDesign",positionX:0,positionY:0,next:".slider-arrow-tablet-mobile.slider-arrow-tablet-mobile_right.desktop-hide",prev:".slider-arrow-tablet-mobile.slider-arrow-tablet-mobile_left.desktop-hide",slidesToShow:1,infinity:!0,counterCurrent:".slider-counter-content__current",counterTotal:".slider-counter-content__total",btnsSel:".button_o.designs-nav__item.designs-nav__item_base",previewSel:".preview-block"}).init()};var y=()=>{document.querySelectorAll("div.mobile-hide div.problems-item").forEach((t,e)=>{t.addEventListener("mouseenter",()=>{const i=document.querySelector(".problems-item-popup-"+(e+1));i.style.visibility="visible",i.style.opacity="1";const s=t.getBoundingClientRect().top,o=i.clientHeight;t.classList.toggle("active-item"),1!=e&&(i.classList.remove("problems-item-popup-1"),i.classList.remove("problems-item-popup-3"),i.classList.remove("problems-item-popup-4"),i.classList.add("problems-item-popup-2")),s<o&&(i.classList.remove("problems-item-popup-2"),i.classList.add("problems-item-popup-1"))}),t.addEventListener("mouseleave",e=>{t.classList.toggle("active-item"),document.querySelectorAll(".mobile-hide.tablet-hide .problems-item-popup").forEach((t,e)=>{t.style.opacity="0.5",t.style.visibility="hidden",t.classList.remove("problems-item-popup-1"),t.classList.remove("problems-item-popup-2"),t.classList.add("problems-item-popup-"+(e+1))})})});document.querySelectorAll("div.mobile-hide div.formula-item").forEach(t=>{t.addEventListener("mouseenter",()=>{const e=document.querySelector(".formula-item-popup-0"+t.className.replace(/[^1-9]/g,""));e.style.visibility="visible",e.style.opacity="1";const i=t.getBoundingClientRect().top,s=e.clientHeight;e.style.bottom="80px",t.classList.add("active-item"),i<s&&(e.style.top="140px",e.classList.add("formulaFormula"))}),t.addEventListener("mouseleave",()=>{document.querySelectorAll(".mobile-hide.tablet-hide .formula-item-popup").forEach(t=>{t.style.opacity="0.5",t.style.visibility="hidden",t.classList.remove("formulaFormula"),t.style.top=""}),t.classList.remove("active-item")})})};n(),o(),r(),l(),a(),d(),p(),u(),y()}]);