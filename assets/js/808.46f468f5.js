"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[808],{6742:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(9756),i=n(7294),u=n(3727),a=n(2263),o=n(3919),c=n(412),s=(0,i.createContext)({collectLink:function(){}}),l=n(4996),f=n(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,v=e.isNavLink,h=e.to,m=e.href,p=e.activeClassName,g=e.isActive,b=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,w=void 0===k||k,C=(0,r.Z)(e,d),E=(0,a.Z)().siteConfig,T=E.trailingSlash,y=E.baseUrl,Z=(0,l.C)().withBaseUrl,U=(0,i.useContext)(s),_=h||m,L=(0,o.Z)(_),A=null==_?void 0:_.replace("pathname://",""),O=void 0!==A?(n=A,w&&function(e){return e.startsWith("/")}(n)?Z(n):n):void 0;O&&L&&(O=(0,f.applyTrailingSlash)(O,{trailingSlash:T,baseUrl:y}));var S,W=(0,i.useRef)(!1),D=v?u.OL:u.rU,M=c.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!M&&L&&null!=O&&window.docusaurus.prefetch(O),function(){M&&S&&S.disconnect()}}),[O,M,L]);var P=null!==(t=null==O?void 0:O.startsWith("#"))&&void 0!==t&&t,j=!O||!L||P;return O&&L&&!P&&!b&&U.collectLink(O),j?i.createElement("a",Object.assign({href:O},_&&!L&&{target:"_blank",rel:"noopener noreferrer"},C)):i.createElement(D,Object.assign({},C,{onMouseEnter:function(){W.current||null==O||(window.docusaurus.preload(O),W.current=!0)},innerRef:function(e){var t,n;M&&e&&L&&(t=e,n=function(){null!=O&&window.docusaurus.prefetch(O)},(S=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),n())}))}))).observe(t))},to:O||""},v&&{isActive:g,activeClassName:p}))}},4973:function(e,t,n){n.d(t,{Z:function(){return f},I:function(){return l}});var r=n(7294),i=/{\w+}/g,u="{}";function a(e,t){var n=[],a=e.replace(i,(function(e){var i=e.substr(1,e.length-2),a=null==t?void 0:t[i];if(void 0!==a){var o=r.isValidElement(a)?a:String(a);return n.push(o),u}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?a.split(u).reduce((function(e,t,r){var i;return e.concat(t).concat(null!==(i=n[r])&&void 0!==i?i:"")}),""):a.split(u).reduce((function(e,t,i){return[].concat(e,[r.createElement(r.Fragment,{key:i},t,n[i])])}),[])}function o(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return a(t,n)}var c=n(4644);function s(e){var t,n=e.id,r=e.message;return null!==(t=c[null!=n?n:r])&&void 0!==t?t:r}function l(e,t){var n,r=e.message;return a(null!==(n=s({message:r,id:e.id}))&&void 0!==n?n:r,t)}function f(e){var t,n=e.children,i=e.id,u=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var a=null!==(t=s({message:n,id:i}))&&void 0!==t?t:n;return r.createElement(o,{values:u},a)}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return u},Z:function(){return a}});var r=n(2263),i=n(3919);function u(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,u=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var u=void 0===r?{}:r,a=u.forcePrependBaseUrl,o=void 0!==a&&a,c=u.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(o)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(u,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,u().withBaseUrl)(e,t)}},6482:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7294),i=n(412),u=n(3018),a=(0,u.WA)("theme"),o="light",c="dark",s=function(e){return e===c?c:o},l=function(e){(0,u.WA)("theme").set(s(e))},f=function(){var e=(0,u.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,f=e.respectPrefersColorScheme,d=(0,r.useState)(function(e){return i.Z.canUseDOM?s(document.documentElement.getAttribute("data-theme")):s(e)}(t)),v=d[0],h=d[1],m=(0,r.useCallback)((function(){h(o),l(o)}),[]),p=(0,r.useCallback)((function(){h(c),l(c)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",s(v))}),[v]),(0,r.useEffect)((function(){if(!n)try{var e=a.get();null!==e&&h(s(e))}catch(t){console.error(t)}}),[h]),(0,r.useEffect)((function(){n&&!f||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;h(t?c:o)}))}),[]),{isDarkTheme:v===c,setLightTheme:m,setDarkTheme:p}},d=n(2924);var v=function(e){var t=f(),n=t.isDarkTheme,i=t.setLightTheme,u=t.setDarkTheme;return r.createElement(d.Z.Provider,{value:{isDarkTheme:n,setLightTheme:i,setDarkTheme:u}},e.children)},h="docusaurus.tab.",m=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],i=(0,r.useCallback)((function(e,t){(0,u.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,u._f)().forEach((function(t){if(t.startsWith(h)){var n=t.substring(h.length);e[n]=(0,u.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),i(e,t)}}},p=n(9443);var g=function(e){var t=m(),n=t.tabGroupChoices,i=t.setTabGroupChoices;return r.createElement(p.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:i}},e.children)};function b(e){var t=e.children;return r.createElement(v,null,r.createElement(u.pl,null,r.createElement(g,null,r.createElement(u.L5,null,r.createElement(u.Cn,null,t)))))}},2924:function(e,t,n){var r=n(7294).createContext(void 0);t.Z=r},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,u=e.split(/[#?]/)[0],a="/"===u||u===r?u:(i=u,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(u,a)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var u=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(u).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);