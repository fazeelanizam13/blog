(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,i=void 0!==o&&o;return n||r&&i}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var s=d[c];if(r.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=r.props[s],f=a[s]||new Set;f.has(l)?o=!1:(f.add(l),a[s]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},"9YCi":function(e,t,n){e.exports={tagContainer:"tags_tagContainer__dzhqv",button:"tags_button__3Mqge",cardContainer:"tags_cardContainer__1q7YI",cards:"tags_cards__17_Rb",goUpLink:"tags_goUpLink__2QUbA",goUpButton:"tags_goUpButton__3sfOF"}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},PVCE:function(e,t,n){e.exports={root:"card_root__3UcHM",title:"card_title__1TrRf",date:"card_date__3hzYp"}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o,i=r(n("q1tI")),c=n("elyg"),u=n("nOHt"),s=new Map,l=window.IntersectionObserver,f={};var d=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function p(e,t,n,a){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),r=a(n,2),o=r[0],s=r[1],h=(0,u.useRouter)(),m=h&&h.pathname||"/",v=i.default.useMemo((function(){var t=(0,c.resolveHref)(m,e.href,!0),n=a(t,2),r=n[0],o=n[1];return{href:r,as:e.as?(0,c.resolveHref)(m,e.as):o||r}}),[m,e.href,e.as]),g=v.href,y=v.as;i.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,c.isLocalURL)(g)&&!f[g+"%"+y])return d(o,(function(){p(h,g,y)}))}),[t,o,g,y,h]);var _=e.children,b=e.replace,k=e.shallow,M=e.scroll,w=e.locale;"string"===typeof _&&(_=i.default.createElement("a",null,_));var x=i.Children.only(_),C={ref:function(e){e&&s(e),x&&"object"===typeof x&&x.ref&&("function"===typeof x.ref?x.ref(e):"object"===typeof x.ref&&(x.ref.current=e))},onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o,locale:u}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,g,y,b,k,M,w)}};return t&&(C.onMouseEnter=function(e){(0,c.isLocalURL)(g)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),p(h,g,y,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(C.href=(0,c.addBasePath)((0,c.addLocale)(y,"undefined"!==typeof w?w:h&&h.locale,h&&h.defaultLocale))),i.default.cloneElement(x,C)};t.default=h},"e+cM":function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"i",(function(){return v})),n.d(t,"f",(function(){return y})),n.d(t,"c",(function(){return M})),n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return I})),n.d(t,"g",(function(){return A})),n.d(t,"d",(function(){return P}));var a=n("q1tI"),r=n.n(a),o=r.a.createElement;function i(e){var t=e.title,n=e.absolutePath,a=e.children;return[o(l,{title:t,absolutePath:n}),o("div",{className:"box"},o(v,null),o("div",{className:"contentInBox"},a)),o(y,null)]}var c=n("8Kt/"),u=n.n(c),s=r.a.createElement;function l(e){var t=e.title,n=e.path;return s(u.a,null,s("link",{rel:"preload",href:"/fonts/Cabin/static/Cabin-Bold.ttf",as:"font",crossOrigin:""}),s("link",{rel:"preload",href:"/fonts/SignikaNegative/SignikaNegative-Regular.ttf",as:"font",crossOrigin:""}),s("link",{rel:"preload",href:"/fonts/SignikaNegative/SignikaNegative-Bold.ttf",as:"font",crossOrigin:""}),s("link",{rel:"preload",href:"/fonts/OxygenMono/OxygenMono-Regular.ttf",as:"font",crossOrigin:""}),s("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),s("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),s("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, shrink-to-fit=no"}),s("meta",{name:"url",content:"https://blog.fazeelanizam.com".concat(n)}),s("meta",{name:"description",content:"Frontend Enthusiast, Language Freak, Music and Movie Lover. This is where you'll find my ramblings about all these and more!"}),s("meta",{name:"og-title",property:"og:title",content:"".concat(t," - Blog | Fazeela Nizam")}),s("meta",{name:"og-url",property:"og:url",content:"https://blog.fazeelanizam.com/".concat(n)}),s("meta",{name:"og-description",property:"og:description",content:"Frontend Enthusiast, Language Freak, Music and Movie Lover. This is where you'll find my ramblings about all these and more!"}),s("meta",{property:"og:image",content:"favicon-icons/android-chrome-192x192.png"}),s("link",{rel:"apple-touch-icon",sizes:"180x180",href:"favicon-icons/apple-touch-icon.png"}),s("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"favicon-icons/favicon-32x32.png"}),s("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"favicon-icons/favicon-16x16.png"}),s("title",null,"".concat(t," - Blog | Fazeela Nizam")))}var f=n("YFqc"),d=n.n(f),p=n("x5hL"),h=n.n(p),m=r.a.createElement;function v(){return m("div",{className:"".concat(h.a.root," ").concat(h.a.stick)},m("div",{className:"".concat(h.a.group," ").concat(h.a.iconGroup)},m(d.a,{href:"/"},m("a",null,m("img",{src:"/navbar-icons/home.png",className:h.a.icon,alt:"Home Icon"})))),m("div",{className:"".concat(h.a.group," ").concat(h.a.iconGroup)},m(d.a,{href:"/tags"},m("a",null,m("img",{src:"/navbar-icons/tags.png",className:h.a.icon,alt:"Tags Icon"}))),m(d.a,{href:"/archives"},m("a",null,m("img",{src:"/navbar-icons/archives.png",className:h.a.icon,alt:"Archives Icon"})))))}var g=r.a.createElement;function y(){return g("div",{className:"".concat(h.a.root," ").concat(h.a.footerMobile)},g("div",{className:"".concat(h.a.group," ").concat(h.a.textGroup)},g("span",null,"\xa9 2021 Fazeela Nizam")),g("div",{className:"".concat(h.a.group," ").concat(h.a.textGroup)},g(d.a,{href:"https://fazeelanizam.com/"},g("a",{target:"_blank"},"Portfolio")),g(d.a,{href:"https://www.linkedin.com/in/fazeelanizam"},g("a",{target:"_blank"},"LinkedIn")),g(d.a,{href:"https://github.com/fazeelanizam13"},g("a",{target:"_blank"},"GitHub"))))}var _=n("PVCE"),b=n.n(_),k=r.a.createElement;function M(e){var t=e.slug,n=e.title,a=e.date;return k("div",{className:b.a.root},k(d.a,{href:"/posts/".concat(t)},k("a",{style:{width:"100%"}},k("p",{className:b.a.title},n),k("p",{className:b.a.date},a))))}var w=n("9YCi"),x=n.n(w),C=r.a.createElement,E=function(e){var t=e.index,n=e.value,a=e.handleClick;return C(d.a,{href:""},C("a",{className:x.a.button},C("div",{key:t,onClick:function(e){return a(n)}},n)))},N=r.a.createElement,I=function(e){var t=e.values,n=e.handleClick;return N("div",{className:x.a.tagContainer},t.map((function(e,t){return N(E,{key:t,value:e,handleClick:n})})))},O=r.a.createElement,A=function(e){return e>5?O(d.a,{href:""},O("a",{className:x.a.goUpLink},O("div",{className:x.a.goUpButton,onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},"Go Up!"))):null},S=r.a.createElement,P=function(e){var t=e.posts,n=e.selectedValue,a=e.type;return S("div",{className:x.a.cardContainer},S("div",{className:x.a.cards},t.map((function(e,t){var r=e.slug,o=e.title,i=e.date,c=e.month,u=e.tags;if("tag"===a&&u.includes(n)||"month"===a&&c===n)return S("div",{style:{borderBottom:"1px solid #A6A6A6",width:"100%"},key:r},S(M,{key:t,slug:r,title:o,date:i}))})),S(A,{cardCount:t.length})))}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},x5hL:function(e,t,n){e.exports={root:"bar_root__3kwMr",stick:"bar_stick__2eafP",group:"bar_group__25sLR",iconGroup:"bar_iconGroup__24mOR",icon:"bar_icon__3qQxp",textGroup:"bar_textGroup__2PROr",footerMobile:"bar_footerMobile__12b4u"}}}]);