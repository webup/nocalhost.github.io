"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[3626],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return t?o.createElement(f,a(a({ref:n},s),{},{components:t})):o.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5796:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var o=t(2122),r=t(9756),i=(t(7294),t(3905)),a=["components"],c={title:"devContainer"},l="Development Container",d={unversionedId:"config/config-dev-devcontainer",id:"config/config-dev-devcontainer",isDocsHomePage:!1,title:"devContainer",description:"Before entering the development mode (DevMode), Nocalhost will use the development image (DevImage) to start a new container in the specified POD. This container is called Development Container\uff08DevContainer\uff09",source:"@site/docs/config/config-dev-devcontainer.md",sourceDirName:"config",slug:"/config/config-dev-devcontainer",permalink:"/docs/config/config-dev-devcontainer",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-dev-devcontainer.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629082718,formattedLastUpdatedAt:"8/16/2021",frontMatter:{title:"devContainer"},sidebar:"docs",previous:{title:"sync",permalink:"/docs/config/config-dev-sync"},next:{title:"ConfigMap",permalink:"/docs/config/config-configmap"}},s=[{value:"Advices for Making DevImage",id:"advices-for-making-devimage",children:[]}],p={toc:s};function u(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"development-container"},"Development Container"),(0,i.kt)("p",null,"Before entering the development mode (",(0,i.kt)("inlineCode",{parentName:"p"},"DevMode"),"), Nocalhost will use the development image (",(0,i.kt)("inlineCode",{parentName:"p"},"DevImage"),") to start a new container in the specified POD. This container is called ",(0,i.kt)("inlineCode",{parentName:"p"},"Development Container\uff08DevContainer\uff09")),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nocalhost/dev-container"},"Nocalhost Standard DevImage")," provided by us or customize by yourself."),(0,i.kt)("h2",{id:"advices-for-making-devimage"},"Advices for Making DevImage"),(0,i.kt)("p",null,"You can use any Docker image to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"DevImage"),", as long as it containers the basic ",(0,i.kt)("inlineCode",{parentName:"p"},"shell (bin/sh)"),"."),(0,i.kt)("p",null,"However, it is strongly recommended to provide a dedicated DevImage of a specific technology stack. A good ",(0,i.kt)("inlineCode",{parentName:"p"},"DevImage")," should:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide easy-to-use shells, such as: ",(0,i.kt)("inlineCode",{parentName:"li"},"bash"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"zsh"),", etc."),(0,i.kt)("li",{parentName:"ul"},"Provide the basic SDK needed to build source code, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"JDK")),(0,i.kt)("li",{parentName:"ul"},"Provide tool chains needed to build source code, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"git"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"maven"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"make"),", etc."),(0,i.kt)("li",{parentName:"ul"},"Provide third-party dependency packages or automatic download configuration required to build source code, such as Maven mirror source"),(0,i.kt)("li",{parentName:"ul"},"Provide other debugging tools needed in the development process, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"gdb"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"curl"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tcpdump"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql-client"),", etc."),(0,i.kt)("li",{parentName:"ul"},"Do not include the source code of the service (the source code should be checked out locally through the source code management system and synchronized to the DevContainer.)")))}u.isMDXComponent=!0}}]);