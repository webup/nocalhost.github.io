"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[7524],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",c="tabItemActive_2DSg";var s=37,u=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,m=e.groupId,f=e.className,d=o(),y=d.tabGroupChoices,g=d.setTabGroupChoices,v=(0,r.useState)(a),h=v[0],b=v[1],k=r.Children.toArray(e.children),N=[];if(null!=m){var w=y[m];null!=w&&w!==h&&p.some((function(e){return e.value===w}))&&b(w)}var O=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;b(r),null!=m&&(g(m,r),setTimeout((function(){var e,n,r,a,o,i,l,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case s:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},2732:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=n(5064),l=n(8215),c=["components"],s={title:"manifests"},u="Deploy Kubernetes Manifest",p={unversionedId:"config/config-deploy-manifest",id:"config/config-deploy-manifest",isDocsHomePage:!1,title:"manifests",description:"To deploy Kubernetes manifest with Nocalhost, you need to configure them within the application section of the .nocalhost/config.yaml.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/config/config-deploy-manifest.md",sourceDirName:"config",slug:"/config/config-deploy-manifest",permalink:"/zh-CN/docs/config/config-deploy-manifest",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-deploy-manifest.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629723557,formattedLastUpdatedAt:"8/23/2021",frontMatter:{title:"manifests"},sidebar:"docs",previous:{title:"helm",permalink:"/zh-CN/docs/config/config-deploy-helm"},next:{title:"kustomize",permalink:"/zh-CN/docs/config/config-deploy-kustomize"}},m=[{value:"Example",id:"example",children:[]}],f={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-kubernetes-manifest"},"Deploy Kubernetes Manifest"),(0,o.kt)("p",null,"To deploy Kubernetes manifest with Nocalhost, you need to configure them within the application section of the ",(0,o.kt)("inlineCode",{parentName:"p"},".nocalhost/config.yaml"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"No need for kubectl ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You do not need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),", Nocalhost can deploy Kubernetes manifest. "))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(i.Z,{defaultValue:"local",values:[{label:"From Local Directory",value:"local"},{label:"From Git Repo",value:"git"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"local",mdxType:"TabItem"},(0,o.kt)("p",null,"Deploy Kubernetes manifest from local directory."),(0,o.kt)("p",null,"Deploy Kubernetes manifest from local directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'configProperties:                       # struct    | required | Specify config properties\n    version: v2 \n\napplication:\n  name: bookinfo                        # string    | required | Application name\n  manifestType: rawManifestLocal        # string    | required | Application k8s manifest type\n  resourcePath: ["manifest/templates"]  # string[]  | required | Set the application resource path\n'))),(0,o.kt)(l.Z,{value:"git",mdxType:"TabItem"},(0,o.kt)("p",null,"Deploy Kubernetes manifest from Git repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'configProperties:                       # struct    | required | Specify config properties\n    version: v2 \n\napplication:\n  name: bookinfo                        # string    | required | Application name\n  manifestType: rawManifestGit          # string    | required | Application k8s manifest type\n  resourcePath: ["manifest/templates"]  # string[]  | required | Set the application resource path\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'configProperties:                       # struct    | required | Specify config properties\n    version: v2 \n\napplication:\n  name: bookinfo                        # string    | required | Application name\n  manifestType: rawManifestGit          # string    | required | Application k8s manifest type\n  resourcePath: ["manifest/templates"]  # string[]  | required | Set the application resource path\n')))),(0,o.kt)("p",null,"After configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml"),", you can ",(0,o.kt)("a",{parentName:"p",href:"../guides/deploy/deploy-by-ide"},"deploy the application in IDE")))}d.isMDXComponent=!0}}]);