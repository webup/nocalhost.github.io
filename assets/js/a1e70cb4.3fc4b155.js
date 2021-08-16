"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[9967],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),c=o(n),k=r,s=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(s,i(i({ref:e},d),{},{components:n})):a.createElement(s,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8681:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return d},default:function(){return c}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],u={title:"Kubernetes Compatibility",id:"k8s-compatible"},p=void 0,o={unversionedId:"practice/cloud/k8s-compatible",id:"practice/cloud/k8s-compatible",isDocsHomePage:!1,title:"Kubernetes Compatibility",description:"Local Kubernetes Cluster",source:"@site/docs/practice/cloud/k8s-compatible.md",sourceDirName:"practice/cloud",slug:"/practice/cloud/k8s-compatible",permalink:"/docs/practice/cloud/k8s-compatible",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/practice/cloud/k8s-compatible.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{title:"Kubernetes Compatibility",id:"k8s-compatible"},sidebar:"docs",previous:{title:"ConfigMap",permalink:"/docs/config/config-configmap"},next:{title:"Tencent TKE",permalink:"/docs/practice/cloud/tencent-tke"}},d=[{value:"Local Kubernetes Cluster",id:"local-kubernetes-cluster",children:[]},{value:"Managed Kubernetes Cluster \uff08Public Cloud)",id:"managed-kubernetes-cluster-\uff08public-cloud",children:[]},{value:"Kubernetes Platform",id:"kubernetes-platform",children:[]}],m={toc:d};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"local-kubernetes-cluster"},"Local Kubernetes Cluster"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Product"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Testing Result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/kubernetes/minikube"},"Minikube")),(0,l.kt)("td",{parentName:"tr",align:null},"1.22"),(0,l.kt)("td",{parentName:"tr",align:null},"1.21.2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{className:"pass-tag"},"passed"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop")),(0,l.kt)("td",{parentName:"tr",align:null},"3.5.2 (3.5.2.18)"),(0,l.kt)("td",{parentName:"tr",align:null},"1.21.2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{className:"pass-tag"},"passed"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://k3s.io/"},"K3s")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.21.2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://microk8s.io/"},"MicroK8s")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.21.2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/k3d"},"K3d")),(0,l.kt)("td",{parentName:"tr",align:null},"4.4.7"),(0,l.kt)("td",{parentName:"tr",align:null},"1.21.2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{className:"pass-tag"},"passed"))))),(0,l.kt)("h2",{id:"managed-kubernetes-cluster-\uff08public-cloud"},"Managed Kubernetes Cluster \uff08Public Cloud)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Company"),(0,l.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Testing Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Tutorial"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tencent TKE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alibaba Cloud"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.huaweicloud.com/intl/en-us/product/cce.html"},"Huawei CCE")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Qing Cloud"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rancher RKE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rancher K3s"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Google GKE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Microsoft Azure"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon EKS"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"kubernetes-platform"},"Kubernetes Platform"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Product"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Testing Result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"KubeSphere"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);