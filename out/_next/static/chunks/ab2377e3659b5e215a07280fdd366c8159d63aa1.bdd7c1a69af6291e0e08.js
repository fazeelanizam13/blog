(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"3Mv1":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),o=n("YFqc"),i=n.n(o),c=n("PVCE"),u=n.n(c),s=a.a.createElement;function l(t){var n=t.slug,r=t.title,a=t.date;return s("div",{className:u.a.root},s(i.a,{href:"/posts/".concat(n),as:"".concat(e.env.URL,"/posts/").concat(n)},s("a",{style:{width:"100%"}},s("p",{className:u.a.title},r),s("p",{className:u.a.date},a))))}}).call(this,n("8oxB"))},"6yR0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),o=n("YFqc"),i=n.n(o),c=n("x5hL"),u=n.n(c),s=a.a.createElement;function l(){return s("div",{className:"".concat(u.a.root," ").concat(u.a.stick)},s("div",{className:"".concat(u.a.group," ").concat(u.a.iconGroup)},s(i.a,{href:"/",as:"".concat(e.env.URL,"/")},s("a",null,s("img",{src:"/navbar-icons/home.png",className:u.a.icon,alt:"Home Icon"})))),s("div",{className:"".concat(u.a.group," ").concat(u.a.iconGroup)},s(i.a,{href:"/tags",as:"".concat(e.env.URL,"/tags")},s("a",null,s("img",{src:"/navbar-icons/tags.png",className:u.a.icon,alt:"Tags Icon"}))),s(i.a,{href:"/archives",as:"".concat(e.env.URL,"/archives")},s("a",null,s("img",{src:"/navbar-icons/archives.png",className:u.a.icon,alt:"Archives Icon"})))))}}).call(this,n("8oxB"))},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var s=d[c];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],f=r[s]||new Set;f.has(l)?o=!1:(f.add(l),r[s]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},"8oxB":function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,s=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&p())}function p(){if(!l){var e=c(d);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||l||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"9YCi":function(e,t,n){e.exports={tagContainer:"tags_tagContainer__dzhqv",button:"tags_button__3Mqge",cardContainer:"tags_cardContainer__1q7YI",cards:"tags_cards__17_Rb",goUpLink:"tags_goUpLink__2QUbA",goUpButton:"tags_goUpButton__3sfOF"}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},PVCE:function(e,t,n){e.exports={root:"card_root__3UcHM",title:"card_title__1TrRf",date:"card_date__3hzYp"}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),u=n("nOHt"),s=new Map,l=window.IntersectionObserver,f={};var d=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function p(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],s=a[1],h=(0,u.useRouter)(),m=h&&h.pathname||"/",v=i.default.useMemo((function(){var t=(0,c.resolveHref)(m,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,c.resolveHref)(m,e.as):o||a}}),[m,e.href,e.as]),g=v.href,y=v.as;i.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,c.isLocalURL)(g)&&!f[g+"%"+y])return d(o,(function(){p(h,g,y)}))}),[t,o,g,y,h]);var b=e.children,_=e.replace,w=e.shallow,k=e.scroll,M=e.locale;"string"===typeof b&&(b=i.default.createElement("a",null,b));var x=i.Children.only(b),C={ref:function(e){e&&s(e),x&&"object"===typeof x&&x.ref&&("function"===typeof x.ref?x.ref(e):"object"===typeof x.ref&&(x.ref.current=e))},onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:u}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,g,y,_,w,k,M)}};return t&&(C.onMouseEnter=function(e){(0,c.isLocalURL)(g)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),p(h,g,y,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(C.href=(0,c.addBasePath)((0,c.addLocale)(y,"undefined"!==typeof M?M:h&&h.locale,h&&h.defaultLocale))),i.default.cloneElement(x,C)};t.default=h},"e+cM":function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"i",(function(){return f.a})),n.d(t,"f",(function(){return g})),n.d(t,"c",(function(){return y.a})),n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return x})),n.d(t,"g",(function(){return E})),n.d(t,"d",(function(){return L}));var r=n("q1tI"),a=n.n(r),o=a.a.createElement;function i(e){var t=e.title,n=e.absolutePath,r=e.children;return[o(l,{title:t,absolutePath:n}),o("div",{className:"box"},o(f.a,null),o("div",{className:"contentInBox"},r)),o(g,null)]}var c=n("8Kt/"),u=n.n(c),s=a.a.createElement;function l(e){var t=e.title,n=e.path;return s(u.a,null,s("link",{rel:"preload",href:"fonts/Cabin/static/Cabin-Bold.ttf",as:"font",crossOrigin:""}),s("link",{rel:"preload",href:"fonts/SignikaNegative/SignikaNegative-Regular.ttf",as:"font",crossOrigin:""}),s("link",{rel:"preload",href:"fonts/SignikaNegative/SignikaNegative-Bold.ttf",as:"font",crossOrigin:""}),s("link",{rel:"preload",href:"fonts/OxygenMono/OxygenMono-Regular.ttf",as:"font",crossOrigin:""}),s("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),s("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),s("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, shrink-to-fit=no"}),s("meta",{name:"url",content:"https://fazeelanizam13.github.io/blog/".concat(n)}),s("meta",{name:"description",content:"Frontend Enthusiast, Language Freak, Music and Movie Lover. This is where you'll find my ramblings about all these and more!"}),s("meta",{name:"og-title",property:"og:title",content:"".concat(t," - Blog | Fazeela Nizam")}),s("meta",{name:"og-url",property:"og:url",content:"https://fazeelanizam13.github.io/blog/".concat(n)}),s("meta",{name:"og-description",property:"og:description",content:"Frontend Enthusiast, Language Freak, Music and Movie Lover. This is where you'll find my ramblings about all these and more!"}),s("meta",{property:"og:image",content:"favicon-icons/android-chrome-192x192.png"}),s("link",{rel:"apple-touch-icon",sizes:"180x180",href:"favicon-icons/apple-touch-icon.png"}),s("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"favicon-icons/favicon-32x32.png"}),s("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"favicon-icons/favicon-16x16.png"}),s("title",null,"".concat(t," - Blog | Fazeela Nizam")))}var f=n("6yR0"),d=n("YFqc"),p=n.n(d),h=n("x5hL"),m=n.n(h),v=a.a.createElement;function g(){return v("div",{className:"".concat(m.a.root," ").concat(m.a.footerMobile)},v("div",{className:"".concat(m.a.group," ").concat(m.a.textGroup)},v("span",null,"\xa9 2021 Fazeela Nizam")),v("div",{className:"".concat(m.a.group," ").concat(m.a.textGroup)},v(p.a,{href:"https://fazeelanizam13.github.io/home/"},v("a",{target:"_blank"},"Portfolio")),v(p.a,{href:"https://www.linkedin.com/in/fazeelanizam"},v("a",{target:"_blank"},"LinkedIn")),v(p.a,{href:"https://github.com/fazeelanizam13"},v("a",{target:"_blank"},"GitHub"))))}var y=n("3Mv1"),b=n("9YCi"),_=n.n(b),w=a.a.createElement,k=function(e){var t=e.index,n=e.value,r=e.handleClick;return w(p.a,{href:""},w("a",{className:_.a.button},w("div",{key:t,onClick:function(e){return r(n)}},n)))},M=a.a.createElement,x=function(e){var t=e.values,n=e.handleClick;return M("div",{className:_.a.tagContainer},t.map((function(e,t){return M(k,{key:t,value:e,handleClick:n})})))},C=a.a.createElement,E=function(e){return e>5?C(p.a,{href:""},C("a",{className:_.a.goUpLink},C("div",{className:_.a.goUpButton,onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},"Go Up!"))):null},N=a.a.createElement,L=function(e){var t=e.posts,n=e.selectedValue,r=e.type;return N("div",{className:_.a.cardContainer},N("div",{className:_.a.cards},t.map((function(e,t){var a=e.slug,o=e.title,i=e.date,c=e.month,u=e.tags;if("tag"===r&&u.includes(n)||"month"===r&&c===n)return N("div",{style:{borderBottom:"1px solid #A6A6A6",width:"100%"},key:a},N(y.a,{key:t,slug:a,title:o,date:i}))})),N(E,{cardCount:t.length})))}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},x5hL:function(e,t,n){e.exports={root:"bar_root__3kwMr",stick:"bar_stick__2eafP",group:"bar_group__25sLR",iconGroup:"bar_iconGroup__24mOR",icon:"bar_icon__3qQxp",textGroup:"bar_textGroup__2PROr",footerMobile:"bar_footerMobile__12b4u"}}}]);