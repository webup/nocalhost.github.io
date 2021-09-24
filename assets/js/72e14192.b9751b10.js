"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[7239],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,h=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return o}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return r}});var a=n(52263),o=n(13919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,l=void 0!==r&&r,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(l)return t+n;var m=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+m:m}(i,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),o=n(79443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,o=e.block,c=e.defaultValue,m=e.values,d=e.groupId,u=e.className,p=a.Children.toArray(e.children),h=null!=m?m:p.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,k=i(),g=k.tabGroupChoices,f=k.setTabGroupChoices,N=(0,a.useState)(v),w=N[0],b=N[1],y=[];if(null!=d){var C=g[d];null!=C&&C!==w&&h.some((function(e){return e.value===C}))&&b(C)}var x=function(e){var t=e.currentTarget,n=y.indexOf(t),a=h[n].value;b(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,o,i,r,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,i=e.right,r=window,l=r.innerHeight,c=r.innerWidth,n>=0&&i<=c&&o<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case"ArrowLeft":var o=y.indexOf(e.target)-1;n=y[o]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},u)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":w===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:M,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,a.cloneElement)(p.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},84181:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return v}});var a=n(74034),o=n(79973),i=(n(67294),n(3905)),r=n(55064),l=n(58215),s=n(44996),c=["components"],m={},d="Quick Start",u={unversionedId:"quick-start",id:"quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Goal: Install Nocalhost, evaluate the core features and experience efficient cloud-native application development.",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/quick-start.md",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1630324854,formattedLastUpdatedAt:"8/30/2021",frontMatter:{},sidebar:"docs",previous:{title:"What is Nocalhost?",permalink:"/docs/introduction"},next:{title:"Install Nocalhost",permalink:"/docs/installation"}},p=[{value:"1. Install Nocalhost VS Code Extension",id:"1-install-nocalhost-vs-code-extension",children:[]},{value:"2. Connect to Kubernetes Cluster",id:"2-connect-to-kubernetes-cluster",children:[]},{value:"3. Enter Development Mode",id:"3-enter-development-mode",children:[]},{value:"4. Change Code and See Result",id:"4-change-code-and-see-result",children:[{value:"Execute main process in remote Container",id:"execute-main-process-in-remote-container",children:[]},{value:"Change the code",id:"change-the-code",children:[]}]},{value:"What&#39;s Next?",id:"whats-next",children:[]}],h={toc:p};function v(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-start"},"Quick Start"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About this guide")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Goal:")," Install Nocalhost, evaluate the core features and experience efficient cloud-native application development. ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Estimate time:")," 5 minutes ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Requirements:")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Any local or remote Kubernetes cluster (minikube, Docker Desktop, TKE, GKE, EKS, AKS, Rancher, ...). Allocate at least 4 GB of memory for single-node clusters like ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-mac/kubernetes/"},"Docker Desktop")," and ",(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RBAC")," must be enabled in the above cluster"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Configured KubeConfig file")," that has namespace admin privilege"),(0,i.kt)("li",{parentName:"ul"},"Kubernetes api-server can be accessed internal and external"),(0,i.kt)("li",{parentName:"ul"},"Visual Studio Code (1.52+)")))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Apple Silicon Supports")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some features may require workarounds or be unavailable while we work to support Apple Silicon."))),(0,i.kt)("h2",{id:"1-install-nocalhost-vs-code-extension"},"1. Install Nocalhost VS Code Extension"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open VS Code and go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Extensions")," by click the ",(0,i.kt)("img",{src:(0,s.Z)("/img/icons/vs-code-icon.jpg"),width:"20"})," icon"),(0,i.kt)("li",{parentName:"ol"},"Input ",(0,i.kt)("inlineCode",{parentName:"li"},"Nocalhost")," in the search box"),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Nocalhost Extension"),", and click the ",(0,i.kt)("strong",{parentName:"li"},"Install")," button.")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/vscode-market.png")}),(0,i.kt)("figcaption",null,"VS Code Extension Market")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"JetBrains Plugin")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Nocalhost does fully supports JetBrains, please refer to ",(0,i.kt)("a",{parentName:"p",href:"./installation##install-jetbrains-plugin"},"Install JetBrains Plugin"),"."))),(0,i.kt)("h2",{id:"2-connect-to-kubernetes-cluster"},"2. Connect to Kubernetes Cluster"),(0,i.kt)("p",null,"Click on the Nocalhost icon ",(0,i.kt)("img",{className:"svg-icon",src:(0,s.Z)("/img/icons/logo-light.svg"),width:"20"})," on the side panel, open the Nocalhost plugin. "),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/vs-plugin.jpg")}),(0,i.kt)("figcaption",null,"VS Code Connect to Cluster")),(0,i.kt)("p",null,"There are two methods that you can use to connect to Kubernetes cluster:"),(0,i.kt)(r.Z,{defaultValue:"kubeconfig",values:[{label:"By KubeConfig",value:"kubeconfig"},{label:"Past as Text",value:"text"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"kubeconfig",mdxType:"TabItem"},(0,i.kt)("p",null,"Select the ",(0,i.kt)("code",null,"KubeConfig")," file from any local directory."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Default KubeConfig")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Nocalhost will try to load ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig")," from your local ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," by default.")))),(0,i.kt)(l.Z,{value:"text",mdxType:"TabItem"},(0,i.kt)("p",null,"Past the ",(0,i.kt)("code",null,"KubeConfig")," as a text"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Get KubeConfig")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can use the following command to view your ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig")," and copy it."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config view --raw --flattern\n")))))),(0,i.kt)("p",null,"After ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeConfig")," is successfully loaded, select the context that you want to access, then connect to the cluster."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Nocalhost")," will automatically show the cluster list."),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/cluster-list.jpg")}),(0,i.kt)("figcaption",null,"VS Code Cluster List")),(0,i.kt)("h2",{id:"3-enter-development-mode"},"3. Enter Development Mode"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Application")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We are using the bookinfo application as an example here. You can use your own application that already deployed in your Kubernetes clusters, or you can follow ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"./guides/deploy/deploy-demo"},"Deploy Demo Application"))," to deploy the demo application in your Kubernetes clusters."))),(0,i.kt)("p",null,"Make sure you have successfully deployed workloads within your Kubernetes Cluster, then:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Expand the workloads tree, find the workload you want to develop"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("img",{className:"svg-icon",src:(0,s.Z)("/img/icons/dev_start.svg"),width:"18"})," to start the ",(0,i.kt)("inlineCode",{parentName:"li"},"Development Mode (DevMode)")),(0,i.kt)("li",{parentName:"ol"},"Specify the source code local directory or you can clone from existing Git repository. "),(0,i.kt)("li",{parentName:"ol"},"Nocalhost will open a new VS Code window, and start the ",(0,i.kt)("inlineCode",{parentName:"li"},"DevMode")," automatically.")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/opt/enter-devmode.gif")}),(0,i.kt)("figcaption",null,"Workload Enter DevMode")),(0,i.kt)("h2",{id:"4-change-code-and-see-result"},"4. Change Code and See Result"),(0,i.kt)("h3",{id:"execute-main-process-in-remote-container"},"Execute main process in remote Container"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," Run the following command in the remote terminal to start main process"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sh run.sh\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Main Process")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When entering DevMode, the application main process will not automatically start by default in the DevContainer, thus the application will not response any request. You need to manually start the main process before you can access it."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.")," View the running result on ",(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1:39080"},"http://127.0.0.1:39080")," in your web browser"),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/opt/main-process.gif")}),(0,i.kt)("figcaption",null,"Execute the main process in remote terminal")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Port-Forwarding")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In our ",(0,i.kt)("inlineCode",{parentName:"p"},"bookinfo")," demo, we've already set the port-forward to 39080:9080, which means Nocalhost will automatically forwards data from the local port ",(0,i.kt)("strong",{parentName:"p"},"39080"),"  to port ",(0,i.kt)("strong",{parentName:"p"},"9080")," on the defined ",(0,i.kt)("inlineCode",{parentName:"p"},"DevContainer"),"."))),(0,i.kt)("h3",{id:"change-the-code"},"Change the code"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," Modify code in  ",(0,i.kt)("inlineCode",{parentName:"p"},"productpage.py")," and see change in web browser. ",(0,i.kt)("strong",{parentName:"p"},"Do not")," forget to save your change."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.")," Refresh the web browser and see the code change"),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/opt/code-change.gif")}),(0,i.kt)("figcaption",null,"Change code and see result")),(0,i.kt)("p",null,"\ud83d\udc4d ",(0,i.kt)("strong",{parentName:"p"},"Congratulations!")," You are all set to go"),(0,i.kt)("h2",{id:"whats-next"},"What's Next?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refer to Nocalhost's ",(0,i.kt)("a",{parentName:"li",href:"./introduction"},"Introduction")),(0,i.kt)("li",{parentName:"ul"},"Visit our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nocalhost/nocalhost"},"Github Repo")),(0,i.kt)("li",{parentName:"ul"},"Join our ",(0,i.kt)("a",{parentName:"li",href:"https://nocalhost.slack.com/"},"Slack")," or scan the code to join our WeChat Group")),(0,i.kt)("img",{src:(0,s.Z)("/img/nocal-host-wechat.png"),width:"200"}))}v.isMDXComponent=!0}}]);