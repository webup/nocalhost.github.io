"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[4128],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(2263),i=n(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,l=void 0!==a&&a,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+c:c}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},1143:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=n(4996),l=["components"],u={},s="What is Nocalhost?",c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"What is Nocalhost?",description:"Nocalhost is an open-source IDE plugin for cloud-native applications development:",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/introduction.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629293629,formattedLastUpdatedAt:"8/18/2021",frontMatter:{},sidebar:"docs",next:{title:"Quick Start",permalink:"/docs/quick-start"}},d=[{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Why Nocalhost?",id:"why-nocalhost",children:[]},{value:"Key Features",id:"key-features",children:[{value:"Coding in Kubernetes",id:"coding-in-kubernetes",children:[]},{value:"Instant File Synchronization",id:"instant-file-synchronization",children:[]},{value:"Made For Collaboration",id:"made-for-collaboration",children:[]},{value:"Compatibility",id:"compatibility",children:[]}]}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-nocalhost"},"What is Nocalhost?"),(0,o.kt)("p",null,"Nocalhost is an open-source IDE plugin for cloud-native applications development:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Build, test and debug applications directly inside Kubernetes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IDE Support :")," providing the same debugging and developing experience you're used in the IDE even in the remote Kubernetes cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Developing with instant file synchronization:")," instantly sync your code change to remote container without rebuilding images or restarting containers.")),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,a.Z)("/img/intro/coding-in-cluster.gif"),width:"800"})),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"Nocalhost is composed of a single binary CLI and IDE extension. Ideally, you use it straight with your favourite IDE. Nocalhost does not require a server-side component as it communicates directly to your Kubernetes cluster using KubeConfig, just like kubectl."),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,a.Z)("/img/intro/how-it-works.webp")})),(0,o.kt)("h2",{id:"why-nocalhost"},"Why Nocalhost?"),(0,o.kt)("p",null,"Building Kubernetes applications is often difficult, and it is even harder for large teams of developers. Nocalhost provides the most productive way to build cloud-native applications."),(0,o.kt)("p",null,"The advantages of using Nocalhost to develop directly inside Kubernetes are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Production environment similarity")," - Dev environment is very similar to your production environment, giving you much more confidence that everything will work in the production environment when new features are released."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Speed up feedback loop")," - Via file synchronization, your code changes can take effect immediately in the container without rebuilding the image or redeploying the container. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Flexible scalability")," - Developers do not need to worry about insufficient local resources."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reduce Cost")," - Use resources more efficiently and reduce IT facility costs")),(0,o.kt)("p",null,"Develop in Kubernetes cluster can be useful in the following cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Limitations of local resources"),(0,o.kt)("li",{parentName:"ul"},"Want to test your application in a production-like environment"),(0,o.kt)("li",{parentName:"ul"},"Want to debug issues that are hard to reproduce on your local machine"),(0,o.kt)("li",{parentName:"ul"},"Applications need to access cluster-internal services (e.g. Cluster DNS)")),(0,o.kt)("h2",{id:"key-features"},"Key Features"),(0,o.kt)("h3",{id:"coding-in-kubernetes"},"Coding in Kubernetes"),(0,o.kt)("p",null,"Nocalhost is preconfigured to work with your favourite IDEs, you can connect to any Kubernetes cluster with one click, and enjoying the coding in-cluster, get rid of the pesky local environment configurations."),(0,o.kt)("h3",{id:"instant-file-synchronization"},"Instant File Synchronization"),(0,o.kt)("p",null,"Nocalhost can automatically synchronize the code to the container every time you make a change. This way, eliminate the submit, building and pushing cycles, greatly speed up the feedback loop of development. So you see updates in under a second."),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,a.Z)("/img/intro/dev-circle.jpg"),width:"700"})),(0,o.kt)("h3",{id:"made-for-collaboration"},"Made For Collaboration"),(0,o.kt)("p",null,"Nocalhost helps your team to standardize development workflows without requiring everyone on your team to become a Kubernetes expert."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kubernetes and DevOps expert")," on your team can configure and manager Cluster, Applications, DevSpace and Users by Nocalhost Server, Read more about ",(0,o.kt)("a",{parentName:"li",href:"./server/server-overview"},"Nocalhost Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Developers")," on your team can easily check out the project and start coding and debugging in the Kubernetes cluster without becoming a Kubernetes expert.")),(0,o.kt)("h3",{id:"compatibility"},"Compatibility"),(0,o.kt)("p",null,"Nocalhost is battle-tested with many Kubernetes distributions including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Local Kubernetes clusters")," like minikube, Microk8s, K3s and Docker Desktop"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Managed Kubernetes clusters")," like TKE (Tencent), ACK (Alibaba Cloud), GKE (Google), Microsoft Azure"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Self-managed Kubernetes cluster")," (e.g. created with KubeSphere or Rancher)")))}m.isMDXComponent=!0}}]);