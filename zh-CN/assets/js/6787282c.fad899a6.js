"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[9462],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(r),d=a,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},4996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return s}});var n=r(2263),a=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,s=i.forcePrependBaseUrl,o=void 0!==s&&s,c=i.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(o)return t+r;var p=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+p:p}(i,r,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},7246:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),s=r(4996),o=["components"],c={title:"Mesh DevSpace"},l="Manage MeshSpace",p={unversionedId:"server/manage-devspace-mesh",id:"server/manage-devspace-mesh",isDocsHomePage:!1,title:"Mesh DevSpace",description:"- BaseSpace: Isolated DevSpace, corresponding to the Kubernetes namespace with the istio-injection=enabled label, the Istio sidecar will automatically inject to it. There is a complete set of services in the namespace, and these services are shared with the MeshSpace.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/server/manage-devspace-mesh.md",sourceDirName:"server",slug:"/server/manage-devspace-mesh",permalink:"/zh-CN/docs/server/manage-devspace-mesh",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",tags:[],version:"current",frontMatter:{title:"Mesh DevSpace"},sidebar:"docs",previous:{title:"Isolated DevSpace",permalink:"/zh-CN/docs/server/manage-devspace-iso"},next:{title:"Manage Applications",permalink:"/zh-CN/docs/server/manage-app"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Steps",id:"steps",children:[]}],h={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manage-meshspace"},"Manage MeshSpace"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"BaseSpace:")," Isolated DevSpace, corresponding to the Kubernetes namespace with the ",(0,i.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled")," label, the Istio sidecar will automatically inject to it. There is a complete set of services in the namespace, and these services are shared with the MeshSpace.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"MeshSpace:")," Corresponding to a Kubernetes namespace, which based on Istio Service Mesh. Share the services of the BaseSpace by specifying header routing and distribution."))),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/server/share-space.svg")})),(0,i.kt)("h1",{id:"how-to-use"},"How to use?"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://istio.io/"},"Istio 1.8+")," has deployed in the cluster"),(0,i.kt)("li",{parentName:"ul"},"Application services can transparently transmit the specified header (for example: Jaeger Tracer transparently transmits ",(0,i.kt)("inlineCode",{parentName:"li"},"uberctx-<key>")," by default)")),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create an isolated DevSpace and turn on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Set as base DevSpace")," switch"),(0,i.kt)("li",{parentName:"ol"},"Deploy application services in the created ",(0,i.kt)("strong",{parentName:"li"},"BaseSpace")),(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("strong",{parentName:"li"},"MeshSpace")),(0,i.kt)("li",{parentName:"ol"},"Select the service to be developed in the ",(0,i.kt)("strong",{parentName:"li"},"MeshSpace")," (services are the services in the ",(0,i.kt)("strong",{parentName:"li"},"BaseSpace"),", and the selection will be automatically copied to the ",(0,i.kt)("strong",{parentName:"li"},"MeshSpace")," for development by the system)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start the development")),(0,i.kt)("h1",{id:"how-it-works"},"How it works?"),(0,i.kt)("p",null,"In the BaseSpace, Istio sidecar automatic injection is enabled, and the traffic of application services is managed by the service mesh."),(0,i.kt)("p",null,"In the MeshSpace, select the service that needs to be developed in a certain BaseSpace, and this service will be copied to the MeshSpace by the system, and configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"Istio Virtual Service")," routing rules in the BashSpace. The traffic with the specified header will be routed to the MeshSpace and received by the developed service (The header is automatically generated by the system or configure by custom when the user creates the MeshSpace)."),(0,i.kt)("p",null,"After the developed service has processed the request, the traffic sent out will be routed back to the BaseSpace by the service mesh and received by other back-end applications."))}d.isMDXComponent=!0}}]);