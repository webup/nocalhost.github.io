"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[9967],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),c=p(n),s=r,k=c["".concat(o,".").concat(s)]||c[s]||m[s]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5689:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],u={title:"Kubernetes Compatibility",id:"k8s-compatible"},o=void 0,p={unversionedId:"practice/cloud/k8s-compatible",id:"practice/cloud/k8s-compatible",isDocsHomePage:!1,title:"Kubernetes Compatibility",description:"We are keep doing the battle-test with different Kubernetes clusters now, testing results are updating. If you have issues when using Nocalhost, just feel free to contact us.",source:"@site/docs/practice/cloud/k8s-compatible.md",sourceDirName:"practice/cloud",slug:"/practice/cloud/k8s-compatible",permalink:"/docs/practice/cloud/k8s-compatible",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/practice/cloud/k8s-compatible.md",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629802032,formattedLastUpdatedAt:"8/24/2021",frontMatter:{title:"Kubernetes Compatibility",id:"k8s-compatible"},sidebar:"docs",previous:{title:"Advance",permalink:"/docs/config/config-deployment-advance"},next:{title:"nhctl apply",permalink:"/docs/cli/cli-apply"}},d=[{value:"Local Kubernetes Cluster",id:"local-kubernetes-cluster",children:[]},{value:"Managed Kubernetes Cluster \uff08Public Cloud)",id:"managed-kubernetes-cluster-\uff08public-cloud",children:[]},{value:"Kubernetes Platform",id:"kubernetes-platform",children:[]}],m={toc:d};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"We are keep doing the battle-test with different Kubernetes clusters now, testing results are updating. If you have issues when using Nocalhost, just feel free to contact us."))),(0,l.kt)("h2",{id:"local-kubernetes-cluster"},"Local Kubernetes Cluster"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Product"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Testing Result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes/minikube"},"Minikube")),(0,l.kt)("td",{parentName:"tr",align:null},"1.22"),(0,l.kt)("td",{parentName:"tr",align:null},"1.21.2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{className:"pass-tag"},"passed"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop")),(0,l.kt)("td",{parentName:"tr",align:null},"3.5.2 (3.5.2.18)"),(0,l.kt)("td",{parentName:"tr",align:null},"1.21.2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{className:"pass-tag"},"passed"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://k3s.io/"},"K3s")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.21.2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://microk8s.io/"},"MicroK8s")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.21.2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/k3d"},"K3d")),(0,l.kt)("td",{parentName:"tr",align:null},"4.4.7"),(0,l.kt)("td",{parentName:"tr",align:null},"1.21.2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{className:"pass-tag"},"passed"))))),(0,l.kt)("h2",{id:"managed-kubernetes-cluster-\uff08public-cloud"},"Managed Kubernetes Cluster \uff08Public Cloud)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Company"),(0,l.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Testing Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Tutorial"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tencent TKE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alibaba Cloud"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.huaweicloud.com/intl/en-us/product/cce.html"},"Huawei CCE")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Qing Cloud"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rancher RKE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rancher K3s"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Google GKE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Microsoft Azure"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon EKS"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"kubernetes-platform"},"Kubernetes Platform"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Product"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Testing Result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KubeSphere"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);