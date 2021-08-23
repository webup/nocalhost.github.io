"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[8169],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},579:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),i=["components"],c={title:"portForward"},l="Configure Port-Forwarding",p={unversionedId:"config/config-dev-port",id:"config/config-dev-port",isDocsHomePage:!1,title:"portForward",description:"There are two port-forward configurations",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/config/config-dev-port.md",sourceDirName:"config",slug:"/config/config-dev-port",permalink:"/zh-CN/docs/config/config-dev-port",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-dev-port.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629716543,formattedLastUpdatedAt:"8/23/2021",frontMatter:{title:"portForward"}},u=[],f={toc:u};function s(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-port-forwarding"},"Configure Port-Forwarding"),(0,a.kt)("p",null,"There are two port-forward configurations"),(0,a.kt)("h4",{id:"automatically-port-forward-after-application-deployment"},"Automatically Port-Forward after Application Deployment"),(0,a.kt)("p",null,"After the application is successfully installed, Nocalhost will automatically forwarded the remote port to the local port, and then can quickly access remote running result through the local port. The configuration format is ",(0,a.kt)("inlineCode",{parentName:"p"},"local port: remote port"),", for example: The configuration format is ",(0,a.kt)("inlineCode",{parentName:"p"},"local port: remote port"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{5}","{5}":!0},"...\n  ...\n  containers:\n    - name: productpage\n      install: \n        portForward:   \n          - 39080:9080\n")),(0,a.kt)("h4",{id:"automatically-port-forward-when-entered-devmode"},"Automatically Port-Forward when Entered DevMode"),(0,a.kt)("p",null,"After entering the DevMode,  Nocalhost will automatically forwarded the remote port to the local port, and then can quickly access remote running result through the local port. The configuration format is ",(0,a.kt)("inlineCode",{parentName:"p"},"local port: remote port"),", for example: The configuration format is ",(0,a.kt)("inlineCode",{parentName:"p"},"local port: remote port"),", for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{4}","{4}":!0},"containers:\n...\n      portForward:\n        - 39080:9080\n      portForward:\n        - 39080:9080\n")),(0,a.kt)("p",null,"It is also possible to support not specifying the local port, such as ",(0,a.kt)("inlineCode",{parentName:"p"},":10000"),". Nocalhost will randomly forward the designated remote port to a local port. Nocalhost will randomly forward the designated remote port to a local port."),(0,a.kt)("p",null,':::tip "More Configuration Information" Please refer to ',(0,a.kt)("a",{parentName:"p",href:"../reference/nh-config"},"Nocalhost Configuration")," for more detailed configuration of Nocalhost. ::: :::"))}s.isMDXComponent=!0}}]);