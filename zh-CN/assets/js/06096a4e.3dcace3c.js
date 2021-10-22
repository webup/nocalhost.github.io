"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[3634],{3905:function(n,e,t){t.d(e,{Zo:function(){return m},kt:function(){return h}});var a=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=a.createContext({}),s=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},m=function(n){var e=s(n.components);return a.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,c=n.parentName,m=r(n,["components","mdxType","originalType","parentName"]),d=s(t),h=o,u=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return t?a.createElement(u,l(l({ref:e},m),{},{components:t})):a.createElement(u,l({ref:e},m))}));function h(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,l=new Array(i);l[0]=d;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=n,r.mdxType="string"==typeof n?n:o,l[1]=r;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13919:function(n,e,t){function a(n){return!0===/^(\w*:|\/\/)/.test(n)}function o(n){return void 0!==n&&!a(n)}t.d(e,{b:function(){return a},Z:function(){return o}})},44996:function(n,e,t){t.d(e,{C:function(){return i},Z:function(){return l}});var a=t(52263),o=t(13919);function i(){var n=(0,a.Z)().siteConfig,e=(n=void 0===n?{}:n).baseUrl,t=void 0===e?"/":e,i=n.url;return{withBaseUrl:function(n,e){return function(n,e,t,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,r=void 0!==l&&l,c=i.absolute,s=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(r)return e+t;var m=t.startsWith(e)?t:e+t.replace(/^\//,"");return s?n+m:m}(i,t,n,e)}}}function l(n,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(n,e)}},13905:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return h}});var a=t(74034),o=t(79973),i=(t(67294),t(3905)),l=t(44996),r=["components"],c={title:"Configure"},s=void 0,m={unversionedId:"config/configure",id:"config/configure",isDocsHomePage:!1,title:"Configure",description:"Overview / Configure",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/config/configure.md",sourceDirName:"config",slug:"/config/configure",permalink:"/zh-CN/docs/config/configure",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",tags:[],version:"current",frontMatter:{title:"Configure"},sidebar:"docs",previous:{title:"Develop configuration",permalink:"/zh-CN/docs/config/config-develop"},next:{title:"Deploy Config",permalink:"/zh-CN/docs/config/config-deployment"}},p=[{value:"\u5c06\u914d\u7f6e\u653e\u7f6e\u5728\u6e90\u7801\u76ee\u5f55\u4e2d",id:"\u5c06\u914d\u7f6e\u653e\u7f6e\u5728\u6e90\u7801\u76ee\u5f55\u4e2d",children:[{value:"\u5982\u4f55\u5c06\u914d\u7f6e\u56fa\u5316\u5230\u6e90\u7801\u4e2d",id:"\u5982\u4f55\u5c06\u914d\u7f6e\u56fa\u5316\u5230\u6e90\u7801\u4e2d",children:[]},{value:"\u914d\u7f6e\u751f\u6548\u4e86\u5417\uff1f",id:"\u914d\u7f6e\u751f\u6548\u4e86\u5417\uff1f",children:[]},{value:"Q&amp;A",id:"qa",children:[]}]},{value:"\u5c06\u914d\u7f6e\u653e\u7f6e\u5728 Configmap \u4e2d",id:"\u5c06\u914d\u7f6e\u653e\u7f6e\u5728-configmap-\u4e2d",children:[{value:"\u5982\u4f55\u914d\u7f6e\u5230 Configmap \u4e2d",id:"\u5982\u4f55\u914d\u7f6e\u5230-configmap-\u4e2d",children:[]},{value:"Configmap \u914d\u7f6e\u7684\u6ce8\u610f\u4e8b\u9879",id:"configmap-\u914d\u7f6e\u7684\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"\u914d\u7f6e\u751f\u6548\u4e86\u5417\uff1f",id:"\u914d\u7f6e\u751f\u6548\u4e86\u5417\uff1f-2",children:[]}]},{value:"\u4f7f\u7528\u672c\u5730\u3001Configmap\u3001Annotations \u914d\u7f6e\u7684\u7279\u6027",id:"\u4f7f\u7528\u672c\u5730\u3001configmap\u3001annotations-\u914d\u7f6e\u7684\u7279\u6027",children:[{value:"\u914d\u7f6e\u7684\u7c92\u5ea6\u4e0e\u4f18\u5148\u7ea7",id:"\u914d\u7f6e\u7684\u7c92\u5ea6\u4e0e\u4f18\u5148\u7ea7",children:[]},{value:"\u914d\u7f6e\u7684\u8bfb\u53d6\u65f6\u673a",id:"\u914d\u7f6e\u7684\u8bfb\u53d6\u65f6\u673a",children:[]},{value:"\u914d\u7f6e\u7684\u56fa\u6709\u7279\u6027",id:"\u914d\u7f6e\u7684\u56fa\u6709\u7279\u6027",children:[]}]}],d={toc:p};function h(n){var e=n.components,t=(0,o.Z)(n,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/config/config"},"Overview")," / ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/config/configure"},"Configure")),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"nocalhost-\u7684\u914d\u7f6e\u65b9\u5f0f"},"Nocalhost \u7684\u914d\u7f6e\u65b9\u5f0f"),(0,i.kt)("p",null,"\u9664\u4e86\u5c06\u914d\u7f6e\u653e\u7f6e\u5728\u63d2\u4ef6\u7684\u53f3\u952e ",(0,i.kt)("inlineCode",{parentName:"p"},"DevConfig"),"  \u4e2d\uff0c Nocalhost \u8fd8\u652f\u6301\u5c06\u914d\u7f6e\u653e\u7f6e\u5728\u6e90\u7801\u76ee\u5f55\u3001configMap \u3001\u4ee5\u53ca annotation \u4e2d\u3002\u4f8b\u5982\u53ef\u4ee5\u5c06 Nocalhost \u914d\u7f6e\u6d41\u7a0b\u5316\u5730\u914d\u7f6e\u5728 CD \u3001\u6216\u8005\u914d\u7f6e\u5728 helm chart\u3001rawManifest \u4e2d\uff0c\u901a\u8fc7\u4e0a\u8ff0\u7684\u51e0\u79cd\u914d\u7f6e\u65b9\u5f0f\uff0c\u6765\u907f\u514d\u91cd\u590d\u914d\u7f6e\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"PRE-REQUIRE \u9664\u4e86\u96f6\u914d\u7f6e\u76f8\u5173\u5185\u5bb9\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u77e5\u6653\u5982\u4f55\u6b63\u786e\u8fdb\u884c Nocalhost \u914d\u7f6e\uff0c\u5982\u679c\u8fd8\u4e0d\u77e5\u5982\u4f55\u8fdb\u884c\u914d\u7f6e\uff0c\u8bf7\u9605\u8bfb",(0,i.kt)("a",{parentName:"h5",href:"/zh-CN/docs/config/config-overview"},"Nocalhost \u6982\u8ff0 \u2014\u2014 \u662f\u4ec0\u4e48\uff0c\u600e\u4e48\u914d\u7f6e\uff0c\u6709\u54ea\u4e9b\u7279\u6027\uff1f"),"\u6765\u8fdb\u884c\u4e86\u89e3\u3002 :::")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("br",null),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("h2",{parentName:"div",id:"\u96f6\u914d\u7f6e\u7684\u652f\u6301"},"\u96f6\u914d\u7f6e\u7684\u652f\u6301"),(0,i.kt)("p",{parentName:"div"},"\u96f6\u914d\u7f6e\u5373\u4e0d\u8fdb\u884c\u4efb\u4f55 Nocalhost \u914d\u7f6e\uff0c\u76f4\u63a5\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\uff0c\u552f\u4e00\u9700\u8981\u7684\u662f\u9009\u62e9\u6216\u952e\u5165\u4e00\u4e2a\u5f00\u53d1\u955c\u50cf\u3002"),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/config/dev-without-config.gif")}),(0,i.kt)("figcaption",null,"\u2b50\ufe0f \xa0 Start DevMode without any configuration \xa0 \u2b50\ufe0f ")),(0,i.kt)("h3",{parentName:"div",id:"\u96f6\u914d\u7f6e\u4e0b\u7684\u884c\u4e3a\u9884\u671f"},"\u96f6\u914d\u7f6e\u4e0b\u7684\u884c\u4e3a\u9884\u671f"))),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5bb9\u5668\u5185\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"/home/nocalhost-dev"),"  \u4f5c\u4e3a\u6587\u4ef6\u540c\u6b65\u7684",(0,i.kt)("strong",{parentName:"li"},"\u76ee\u6807\u76ee\u5f55"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4ee5\u4e0b\u987a\u5e8f\u987a\u5ef6\u6765\u5c1d\u8bd5\u8fdb\u5165\u5f00\u53d1\u5bb9\u5668\uff0czsh\u3001bash\u3001sh\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u542f\u7528\u6301\u4e45\u5316\uff0c\u4f60\u5728\u5f00\u53d1\u5bb9\u5668\u5185\u4ea7\u751f\u7684\u672c\u5730\u6570\u636e\u5c06\u5728\u5bb9\u5668\u5173\u95ed\u6216\u91cd\u542f\u540e\u4e22\u5931\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u4f7f\u7528\u4e00\u952e\u8c03\u8bd5\u4e0e\u4e00\u952e Debug"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u6b65\u6240\u9009\u540c\u6b65\u76ee\u5f55\u7684\u6240\u6709\u5185\u5bb9\u5230\u5bb9\u5668\u5185")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u5c06\u914d\u7f6e\u653e\u7f6e\u5728\u6e90\u7801\u76ee\u5f55\u4e2d"},"\u5c06\u914d\u7f6e\u653e\u7f6e\u5728\u6e90\u7801\u76ee\u5f55\u4e2d"),(0,i.kt)("p",null,"Nocalhost \u652f\u6301\u5c06\u914d\u7f6e\u653e\u7f6e\u5728\u6e90\u7801\u76ee\u5f55\u4e2d\uff0c\u7531\u6709\u7ecf\u9a8c\u7684\u5f00\u53d1\u8005\u5c06\u914d\u7f6e\u56fa\u5316\u5728\u6e90\u7801\u76ee\u5f55\u4e2d\uff0c\u4fbf\u4e8e\u56e2\u961f\u5185\u7684\u5176\u4ed6\u5f00\u53d1\u4eba\u5458\u5171\u4eab\u8fd9\u4e9b\u914d\u7f6e\u3002"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\u5982\u4f55\u5c06\u914d\u7f6e\u56fa\u5316\u5230\u6e90\u7801\u4e2d"},"\u5982\u4f55\u5c06\u914d\u7f6e\u56fa\u5316\u5230\u6e90\u7801\u4e2d"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5148\u5728\u5177\u4f53\u5de5\u4f5c\u8d1f\u8f7d\u53f3\u952e ",(0,i.kt)("inlineCode",{parentName:"p"},"DevConfig")," \u914d\u7f6e\u597d\u786e\u4fdd\u53ef\u7528\u540e\uff0c\u5c06\u5176\u76f4\u63a5\u590d\u5236\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: nocalhost-api\nserviceType: deployment\ncontainers:\n  - name: nocalhost-api\n    dev:\n      image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh\n      env:\n        - name: NOCALHOST_INJECT_DEV_ENV\n          value: WHATEVER\n")),(0,i.kt)("p",null,"\u5728\u76f8\u5e94\u7684\u6e90\u7801\u76ee\u5f55\u4e0b\uff0c\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},".nocalhost")," \u76ee\u5f55\uff0c\u518d\u5728\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml"),"\uff0c\u5c06\u590d\u5236\u5185\u5bb9\u4fdd\u5b58\u8fdb\u53bb\u5373\u53ef\u3002"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\u914d\u7f6e\u751f\u6548\u4e86\u5417\uff1f"},"\u914d\u7f6e\u751f\u6548\u4e86\u5417\uff1f"),(0,i.kt)("p",null,"\u91cd\u65b0\u53f3\u952e\u8fd9\u4e2a\u670d\u52a1\uff0c\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"DevConfig")," \u5c31\u4f1a\u53d1\u73b0\uff0c\u914d\u7f6e\u5df2\u4ece\u672c\u5730\u76ee\u5f55\u8bfb\u53d6\uff0c\u5e76\u5728\u6700\u4e0a\u65b9\u770b\u5230\u7c7b\u4f3c\u63d0\u793a\uff0c\u5b83\u4f1a\u63d0\u793a\u4f60\u8fd9\u4e2a\u914d\u7f6e\u662f\u4e00\u4e2a\u672c\u5730\u6587\u4ef6\u7684\u526f\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Tips: This configuration is a in-memory replica of local file: \n# \n# '/Users/anur/GolandProjects/nocalhost/.nocalhost/config.yaml'\n# \n# You should modify your configuration in local file, and the modification will\n# take effect immediately. (Dev modification will take effect the next time you enter the DevMode)\n#\n# In addition, if you want to config multi service in same config.yaml, or use\n# the Server-version of Nocalhost, you can also configure under the definition \n# of the application, such as:\n# https://github.com/nocalhost/bookinfo/blob/main/.nocalhost/config.yaml\n# \n")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"qa"},"Q&A"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5fd8\u8bb0\u5177\u4f53\u670d\u52a1\u5173\u8054\u7684\u672c\u5730\u76ee\u5f55\u662f\u54ea\u4e00\u4e2a\u4e86\u600e\u4e48\u529e\uff1f \u53f3\u952e\u5177\u4f53\u670d\u52a1\u70b9\u51fb Open Project \u53ef\u4ee5\u6253\u5f00\u5173\u8054\u8fc7\u7684\u76ee\u5f55\uff0c\u6216\u70b9\u51fb Associate Local DIR \u91cd\u65b0\u5173\u8054\u67d0\u4e2a\u65b0\u76ee\u5f55\u3002 :::")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("br",null))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: nocalhost-api\n  serviceType: deployment\n  containers:\n    - name: nocalhost-api\n      dev:\n        image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh\n        env:\n          - name: NOCALHOST_INJECT_DEV_ENV\n            value: WHATEVER\n\n- name: nocalhost-web\n  serviceType: deployment\n  containers:\n    - name: nocalhost-web\n      dev:\n        image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh\n")),(0,i.kt)("p",null,":::"),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u5c06\u914d\u7f6e\u653e\u7f6e\u5728-configmap-\u4e2d"},"\u5c06\u914d\u7f6e\u653e\u7f6e\u5728 Configmap \u4e2d"),(0,i.kt)("p",null,"Nocalhost \u652f\u6301\u5c06\u914d\u7f6e\u653e\u7f6e\u5728 Configmap \u4e2d\uff0c\u8fd9\u6837\u505a\u5229\u4e8e\u4e0e\u73af\u5883\u505a\u5b9a\u5236\u5316\u5173\u8054\u3002\u4f8b\u5982\uff0c\u5728\u6d4b\u8bd5\u73af\u5883\u7684\u90e8\u7f72\u811a\u672c\u6216 CD \u4e2d\uff0c\u5b9a\u5236\u5316\u7684\u5199\u5165\u67d0\u4e9b\u914d\u7f6e\u7b49\u3002"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\u5982\u4f55\u914d\u7f6e\u5230-configmap-\u4e2d"},"\u5982\u4f55\u914d\u7f6e\u5230 Configmap \u4e2d"),(0,i.kt)("p",null,"\u6211\u4eec\u6765\u770b\u4e00\u4e0b\uff0c\u8fd9\u662f\u4e00\u6bb5\u5341\u5206\u901a\u7528\u7684 Nocalhost \u914d\u7f6e helm \u6a21\u677f\uff0c\u5f53\u7136\uff0c\u4f60\u4e0d\u4e00\u5b9a\u8981\u4f7f\u7528 helm\uff0c\u8fd9\u91cc\u53ea\u662f\u4e3a\u4e86\u4fbf\u4e8e\u8bb2\u89e3\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: "dev.nocalhost.config.{{ .Release.Name }}"\n  labels:\n    dep-management: nocalhost\n  annotations:\n    "helm.sh/hook": pre-install\ndata:\n  config: |-\n    {{ .Files.Get .Values.nocalhost.config.path | nindent 4 }}\n')),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,i.kt)("inlineCode",{parentName:"h5"},"{{ .Release.Name }}")," \u662f\u4ec0\u4e48\uff1f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a configmap \u4e2d\uff0c\u6709\u4e24\u4e2a\u5185\u5bb9\u662f\u901a\u8fc7\u5360\u4f4d\u7b26\u7684\u65b9\u5f0f\u5f15\u5165\u7684\uff0c\u7b2c\u4e00\u4e2a\u662f\u7b2c\u56db\u884c\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ .Release.Name }}"),"\uff0c\u8fd9\u662f\u5e94\u7528\u7684\u540d\u5b57\uff0c\u5982\u679c\u4f60\u4f7f\u7528 Helm \u6216\u8005 Nocalhost \u8fdb\u884c\u5e94\u7528\u5b89\u88c5\uff0c\u8fd9\u91cc\u9700\u8981\u586b\u5165\u5bf9\u5e94\u7684\u5e94\u7528\u540d\u5b57\uff0c\u5426\u5219\u5219\u56fa\u5b9a\u5199\u6b7b ",(0,i.kt)("inlineCode",{parentName:"p"},"default.application"),"\u3002"))),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,i.kt)("inlineCode",{parentName:"h5"},"{{ .Files.Get .Values.nocalhost.config.path | nindent 4 }}")," \u662f\u4ec0\u4e48\uff1f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8fd9\u90e8\u5206\u5b9e\u9645\u4e0a\u5c31\u662f Nocalhost config \u8be5\u586b\u5165\u7684\u4f4d\u7f6e\uff0c\u4e3b\u8981\u524d\u9762\u8981\u56db\u4e2a\u7f29\u8fdb\u3002"))),(0,i.kt)("br",null),(0,i.kt)("p",null,"\u4e86\u89e3\u4e86\u4e0a\u9762\u7684\u5360\u4f4d\u7b26\u6240\u5bf9\u5e94\u7684\u5185\u5bb9\u540e\uff0c\u5b9e\u9645\u7684 configmap \u5e94\u4e3a\u5982\u4e0b\u683c\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: "dev.nocalhost.config.default.application"\n  labels:\n    dep-management: nocalhost\n  annotations:\n    "helm.sh/hook": pre-install\ndata:\n  config: |-\n    - name: nocalhost-api\n      serviceType: deployment\n      containers:\n        - name: nocalhost-api\n          dev:\n            image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh\n            env:\n              - name: NOCALHOST_INJECT_DEV_ENV\n                value: WHATEVER\n\n    - name: nocalhost-web\n      serviceType: deployment\n      containers:\n        - name: nocalhost-web\n          dev:\n            image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh\n')),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"configmap-\u914d\u7f6e\u7684\u6ce8\u610f\u4e8b\u9879"},"Configmap \u914d\u7f6e\u7684\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u547d\u540d\u89c4\u5219\uff0c\u5b83\u7684\u547d\u540d\u89c4\u5219\u5fc5\u987b\u662f dev.nocalhost.config.${appName}\uff0c\u4e5f\u5c31\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},'name: "dev.nocalhost.config.{{ .Release.Name }}"')),(0,i.kt)("li",{parentName:"ol"},"\u6807\u7b7e\uff0c\u5b83\u9700\u8981\u6709\u4e00\u4e2a\u6807\u7b7e\u952e\u503c\u5bf9\uff0c\u56fa\u5b9a\u5199\u6b7b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"dep-management: nocalhost")),(0,i.kt)("li",{parentName:"ol"},"config \u4ee5\u6587\u672c\u5757\u7684\u65b9\u5f0f\u653e\u7f6e\u5728 data.config \u4e0b\uff0c\u6ce8\u610f\u914d\u7f6e\u6574\u4f53\u7f29\u8fdb\u3002 :::")),(0,i.kt)("br",null),(0,i.kt)("h3",{parentName:"div",id:"\u914d\u7f6e\u751f\u6548\u4e86\u5417\uff1f-1"},"\u914d\u7f6e\u751f\u6548\u4e86\u5417\uff1f"),(0,i.kt)("p",{parentName:"div"},"\u5f53\u914d\u7f6e\u597d\u4e0a\u8ff0 Configmap \u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u518d\u6b21\u53f3\u952e\u8fd9\u4e2a\u670d\u52a1\uff0c\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"p"},"DevConfig"),"\uff0c\u5982\u679c\u770b\u5230\u4ee5\u4e0b\u63d0\u793a\uff0c\u63d0\u793a\u914d\u7f6e\u662f Configmap \u7684\u4e00\u4e2a\u526f\u672c\uff0c\u5219\u4ee3\u8868\u914d\u7f6e\u5df2\u7ecf\u751f\u6548\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Tips: This configuration is a in-memory replica of configmap: \n# \n# 'dev.nocalhost.config.default.application'\n# \n# You should modify your configuration in configmap, and the modification will\n# take effect immediately. (Dev modification will take effect the next time you enter the DevMode)\n# \n")),(0,i.kt)("br",null),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("h2",{parentName:"div",id:"\u5c06\u914d\u7f6e\u653e\u7f6e\u5728-annotations-\u4e2d"},"\u5c06\u914d\u7f6e\u653e\u7f6e\u5728 Annotations \u4e2d"),(0,i.kt)("p",{parentName:"div"},"Nocalhost \u540c\u6837\u652f\u6301\u5c06\u914d\u7f6e\u653e\u7f6e\u5728 Annotations \u4e2d\uff0c\u4e0e Configmap \u914d\u7f6e\u7684\u51fa\u53d1\u70b9\u57fa\u672c\u4e00\u81f4\u3002"),(0,i.kt)("br",null),(0,i.kt)("h3",{parentName:"div",id:"\u5982\u4f55\u914d\u7f6e\u5230-annotations-\u4e2d"},"\u5982\u4f55\u914d\u7f6e\u5230 Annotations \u4e2d"),(0,i.kt)("br",null),(0,i.kt)("p",{parentName:"div"},"\u540c\u6837\uff0c\u6211\u4eec\u4ee5\u4e00\u6bb5 helm \u6a21\u677f\u6765\u8fdb\u884c\u8bb2\u89e3\uff0c\u5b83\u4f1a\u5229\u4e8e\u8bb2\u89e3\u54ea\u4e9b\u503c\u662f\u5e94\u8be5\u88ab\u5b9a\u5236\u5316\u7684\uff0c\u4ee5\u53ca\u5b83\u7684\u683c\u5f0f\u8981\u6c42\u5982\u4f55\u7b49\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nocalhost-api\n  annotations:\n    dev.nocalhost: |-\n      {{ .Files.Get .Values.nocalhost.annotations.path.authors | nindent 6 }}\n")),(0,i.kt)("p",{parentName:"div"},"\u6211\u4eec\u53d1\u73b0 annotations \u7684\u914d\u7f6e\u975e\u5e38\u7b80\u5355\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u5b83\u53ea\u9700\u8981\u58f0\u660e\u4e00\u4e2a annotation\uff0c key \u56fa\u5b9a\u4e3a ",(0,i.kt)("inlineCode",{parentName:"strong"},"dev.nocalhost"),"\uff0c\u503c\u4e3a\u4e00\u4e2a\u6587\u672c\u5757\uff0c\u4e14\u9700\u8981\u56fa\u5b9a 6 \u4e2a\u7f29\u8fdb\u3002")),(0,i.kt)("p",{parentName:"div"},"\u5b9e\u9645\u914d\u7f6e\u56e0\u4e3a\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nocalhost-api\n  annotations:\n    dev.nocalhost: |-\n      name: nocalhost-api\n      serviceType: deployment\n      containers:\n        - name: nocalhost-api\n          dev:\n            image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh\n            env:\n              - name: NOCALHOST_INJECT_DEV_ENV\n                value: WHATEVER\n")),(0,i.kt)("br",null),(0,i.kt)("p",{parentName:"div"},"\u7531\u4e8e\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\u4e0b\uff0c\u4e0d\u4f1a\u5b58\u5728\u591a\u4e2a\u914d\u7f6e\uff0c\u6240\u4ee5\u8fd9\u91cc\u4e0d\u9700\u8981\u58f0\u660e\u6210\u6570\u7ec4\uff08\u4e5f\u652f\u6301\u58f0\u660e\u6210\u6570\u7ec4\uff09\uff0c\u4e14\u914d\u7f6e\u6240\u7ed1\u5b9a\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5df2\u7ecf\u56fa\u5b9a\uff08\u4e0d\u7ba1\u662f Deployment\u3001StatefulSet\u3001DaemonSet \u8fd8\u662f\u4ec0\u4e48\u5176\u4ed6\u7684\uff09\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u7533\u660e\u5176\u540d\u5b57\u4e0e\u7c7b\u578b\uff0c\u5982\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\n  metadata:  \n  name: nocalhost-api\n  annotations:    \n    dev.nocalhost: |-\n      containers:        \n        - name: nocalhost-api          \n           dev:            \n           image: nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:zsh            \n           env:              \n             - name: NOCALHOST_INJECT_DEV_ENV                \n               value: WHATEVER\n")),(0,i.kt)("br",null),(0,i.kt)("h3",{parentName:"div",id:"annotations-\u914d\u7f6e\u7684\u6ce8\u610f\u4e8b\u9879"},"Annotations \u914d\u7f6e\u7684\u6ce8\u610f\u4e8b\u9879"))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\u914d\u7f6e\u751f\u6548\u4e86\u5417\uff1f-2"},"\u914d\u7f6e\u751f\u6548\u4e86\u5417\uff1f"),(0,i.kt)("p",null,"\u5f53\u914d\u7f6e\u597d\u4e0a\u8ff0 Annotations \u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u518d\u6b21\u53f3\u952e\u8fd9\u4e2a\u670d\u52a1\uff0c\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"p"},"DevConfig"),"\uff0c\u5982\u679c\u770b\u5230\u4ee5\u4e0b\u63d0\u793a\uff0c\u5219\u4ee3\u8868\u914d\u7f6e\u5df2\u7ecf\u751f\u6548\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Tips: This configuration is a in-memory replica of annotation: \n# \n# annotations:\n#   dev.nocalhost: |\n#     [Your Config]\n# \n# You should modify your configuration in resource's annotation', and the modification will\n# take effect immediately. (Dev modification will take effect the next time you enter the DevMode)\n# \n")),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u4f7f\u7528\u672c\u5730\u3001configmap\u3001annotations-\u914d\u7f6e\u7684\u7279\u6027"},"\u4f7f\u7528\u672c\u5730\u3001Configmap\u3001Annotations \u914d\u7f6e\u7684\u7279\u6027"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\u914d\u7f6e\u7684\u7c92\u5ea6\u4e0e\u4f18\u5148\u7ea7"},"\u914d\u7f6e\u7684\u7c92\u5ea6\u4e0e\u4f18\u5148\u7ea7"),(0,i.kt)("p",null,"Nocalhost \u914d\u7f6e\u652f\u6301 \u201c\u6df7\u642d\u201d\uff0c\u4f8b\u5982\u62e5\u6709\u5341\u4e2a\u670d\u52a1\uff0c\u53ef\u4ee5\u5176\u4e2d\u4e09\u4e2a\u7528\u672c\u5730\u914d\u7f6e\uff0c\u4e09\u4e2a\u7528 Configmap \u914d\u7f6e\uff0c\u4e09\u4e2a\u4f7f\u7528 Annotations \u914d\u7f6e\uff0c\u5269\u4e0b\u4e00\u4e2a\u96f6\u914d\u7f6e\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5982\u679c\u5bf9\u540c\u4e00\u4e2a\u670d\u52a1\u540c\u65f6\u914d\u7f6e\u4e86\u591a\u79cd\u914d\u7f6e\u65b9\u5f0f\uff0c\u4f18\u5148\u7ea7\u5982\u4e0b\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u672c\u5730\u914d\u7f6e > Annotations > Configmap > \u76f4\u63a5\u914d\u7f6e\u5728 DevConfig \u4e2d"))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\u914d\u7f6e\u7684\u8bfb\u53d6\u65f6\u673a"},"\u914d\u7f6e\u7684\u8bfb\u53d6\u65f6\u673a"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528 Nocalhost \u914d\u7f6e \u4e4b\u524d\uff0cNocalhost \u90fd\u4f1a\u68c0\u67e5\u5404\u79cd\u914d\u7f6e\u65b9\u5f0f\uff0c\u5e76\u5c1d\u8bd5\u8fdb\u884c\u8bfb\u53d6\uff0c\u4e5f\u5c31\u662f\u53ef\u4ee5\u8ba4\u4e3a\u914d\u7f6e\u7684\u8bfb\u53d6\u662f \u201c\u5b9e\u65f6\u751f\u6548\u201d \u7684\u3002"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\u914d\u7f6e\u7684\u56fa\u6709\u7279\u6027"},"\u914d\u7f6e\u7684\u56fa\u6709\u7279\u6027"),(0,i.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/config/config-overview#%E5%9B%9B%E3%80%81%E5%BC%80%E5%8F%91%E9%85%8D%E7%BD%AE%E7%9A%84%E7%89%B9%E6%80%A7"},"Nocalhost \u5f00\u53d1\u914d\u7f6e\u7684\u7279\u6027")))}h.isMDXComponent=!0}}]);