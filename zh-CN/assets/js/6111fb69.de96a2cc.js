"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[5716],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,c=e.originalType,o=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=s(t),d=l,m=f["".concat(o,".").concat(d)]||f[d]||u[d]||c;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var c=t.length,i=new Array(c);i[0]=f;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7765:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=t(2122),l=t(9756),c=(t(7294),t(3905)),i=["components"],a={title:"nhctl pvc"},o=void 0,s={unversionedId:"cli/cli-pvc",id:"cli/cli-pvc",isDocsHomePage:!1,title:"nhctl pvc",description:"Manage PersistVolumeClaims",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/cli/cli-pvc.md",sourceDirName:"cli",slug:"/cli/cli-pvc",permalink:"/zh-CN/docs/cli/cli-pvc",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/cli/cli-pvc.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{title:"nhctl pvc"},sidebar:"docs",previous:{title:"nhctl profile",permalink:"/zh-CN/docs/cli/cli-profile"},next:{title:"nhctl render",permalink:"/zh-CN/docs/cli/cli-render"}},p=[{value:"nhctl pvc clean",id:"nhctl-pvc-clean",children:[{value:"Usage",id:"usage",children:[]},{value:"Flags",id:"flags",children:[]}]},{value:"nhctl pvc list",id:"nhctl-pvc-list",children:[{value:"Usage",id:"usage-1",children:[]},{value:"Flags",id:"flags-1",children:[]}]}],u={toc:p};function f(e){var n=e.components,t=(0,l.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Manage PersistVolumeClaims"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Usage:\n  nhctl pvc [command]\n\nAvailable Commands:\n  clean       Clean up PersistVolumeClaims\n  list        List PersistVolumeClaims\n")),(0,c.kt)("h2",{id:"nhctl-pvc-clean"},"nhctl pvc clean"),(0,c.kt)("p",null,"Clean up PersistVolumeClaims"),(0,c.kt)("h3",{id:"usage"},"Usage"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"nhctl pvc clean [flags]\n")),(0,c.kt)("h3",{id:"flags"},"Flags"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Flags:\n      --app string          Clean up PVCs of specified application\n      --controller string   Clean up PVCs of specified service\n  -h, --help                help for clean\n      --name string         Clean up specified PVC\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")),(0,c.kt)("h2",{id:"nhctl-pvc-list"},"nhctl pvc list"),(0,c.kt)("p",null,"List PersistVolumeClaims"),(0,c.kt)("h3",{id:"usage-1"},"Usage"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"nhctl pvc list [flags]\n")),(0,c.kt)("h3",{id:"flags-1"},"Flags"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Flags:\n      --app string   List PVCs of specified application\n  -h, --help         help for list\n      --json         Use json as the output format\n      --svc string   List PVCs of specified service\n      --yaml         Use yaml as the output format\n\nGlobal Flags:\n      --debug               enable debug level log\n      --kubeconfig string   the path of the kubeconfig file\n  -n, --namespace string    kubernetes namespace\n")))}f.isMDXComponent=!0}}]);