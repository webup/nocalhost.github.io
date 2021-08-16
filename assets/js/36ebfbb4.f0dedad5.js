"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[1511],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var a=n(2263),r=n(3919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,l=void 0!==i&&i,s=o.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,p=39;var d=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,d=e.values,m=e.groupId,u=e.className,h=o(),v=h.tabGroupChoices,f=h.setTabGroupChoices,k=(0,a.useState)(r),g=k[0],N=k[1],b=a.Children.toArray(e.children),y=[];if(null!=m){var w=v[m];null!=w&&w!==g&&d.some((function(e){return e.value===w}))&&N(w)}var C=function(e){var t=e.currentTarget,n=y.indexOf(t),a=d[n].value;N(a),null!=m&&(f(m,a),setTimeout((function(){var e,n,a,r,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},S=function(e){var t,n;switch(e.keyCode){case p:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case c:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},u)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:S,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},4232:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=(n(5064),n(8215),n(4996)),l=["components"],s={},c="Getting Start",p={unversionedId:"server/deploy-server",id:"server/deploy-server",isDocsHomePage:!1,title:"Getting Start",description:"Goal : Deploy Nocalhost Sever to Kubernetes cluster.",source:"@site/docs/server/deploy-server.md",sourceDirName:"server",slug:"/server/deploy-server",permalink:"/docs/server/deploy-server",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/server/deploy-server.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629082718,formattedLastUpdatedAt:"8/16/2021",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/server/server-overview"},next:{title:"Manage User",permalink:"/docs/server/manage-user"}},d=[{value:"Deploy Nocalhost Server by Nocalhost CLI",id:"deploy-nocalhost-server-by-nocalhost-cli",children:[{value:"1. Initialize by <code>nhctl init</code>",id:"1-initialize-by-nhctl-init",children:[]},{value:"2. Waiting for Initialization",id:"2-waiting-for-initialization",children:[]}]},{value:"Deploy Nocalhost Server by Helm",id:"deploy-nocalhost-server-by-helm",children:[{value:"1. Clone the Repository",id:"1-clone-the-repository",children:[]},{value:"2. Deploy the Nocalhost Server",id:"2-deploy-the-nocalhost-server",children:[]},{value:"3. Waiting for Deployment",id:"3-waiting-for-deployment",children:[]},{value:"4. Port-Forwarding to Access Web Service",id:"4-port-forwarding-to-access-web-service",children:[]}]},{value:"Access the Web Service",id:"access-the-web-service",children:[]},{value:"Deployment Process",id:"deployment-process",children:[]}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-start"},"Getting Start"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About this guide")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Goal :")," Deploy Nocalhost Sever to Kubernetes cluster. ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Estimate time :")," 5 minutes ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Requirements :")),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Any local or remote Kubernetes cluster (minikube, Docker Desktop, TKE, GKE, EKS, AKS, Rancher, ...). Allocate at least 4 GB of memory for single node clusters like ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-mac/kubernetes/"},"Docker Desktop")," and ",(0,o.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RBAC")," must be enabled in above cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Configured kubeconfig file")," that has namespace admin privilege"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl"))," installed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Nocalhost IDE Plugin")," installed"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes api-server can be accessed internal and external"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://helm.sh/docs/intro/install/"},"Helm"))," installed if you ",(0,o.kt)("a",{parentName:"li",href:"#deploy-by-helm"},"deploy by Helm"))))),(0,o.kt)("p",null,"You can either deploy Nocalhost Server by Nocalhost CLI tool (",(0,o.kt)("inlineCode",{parentName:"p"},"nhctl"),") or by Helm. Either way, you need to have the ",(0,o.kt)("inlineCode",{parentName:"p"},"KubeConfig")," with namespace admin privilege of the Kubernetes cluster."),(0,o.kt)("h2",{id:"deploy-nocalhost-server-by-nocalhost-cli"},"Deploy Nocalhost Server by Nocalhost CLI"),(0,o.kt)("h3",{id:"1-initialize-by-nhctl-init"},"1. Initialize by ",(0,o.kt)("inlineCode",{parentName:"h3"},"nhctl init")),(0,o.kt)("p",null,"Run the following command to initialize Nocalhost Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nhctl init demo -n nocalhost-demo --kubeconfig=<path>/your-kubeconfig-file\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"namespace")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"-n")," flag use to specify the namespace that Nocalhost Server will be deployed. In this tutorial, we will deploy Nocalhost Server to namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"nocalhost-demo"),". If the namespace does not exist, ",(0,o.kt)("inlineCode",{parentName:"p"},"nhctl")," will create this namespace automatically. "),(0,o.kt)("p",{parentName:"div"},"If you do not specify namespace, ",(0,o.kt)("inlineCode",{parentName:"p"},"nhctl")," will deploy Nocalhost Server to the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," namespace."))),(0,o.kt)("h3",{id:"2-waiting-for-initialization"},"2. Waiting for Initialization"),(0,o.kt)("p",null,"Just waiting for the initialization process. You should see the following message after ",(0,o.kt)("inlineCode",{parentName:"p"},"nhctl")," finished initialization."),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,i.Z)("/img/server/server-deployed.png"),width:"600"}),(0,o.kt)("figcaption",null,"Nocalhost Server Deployment")),(0,o.kt)("p",null,"You can now ",(0,o.kt)("a",{parentName:"p",href:"#access-the-web-service"},"access the Nocalhost Web Service"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Port-Forward")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"nhctl")," will automatically run port-forward to the Nocalhost Server Web Service after initialization. This is a one-time port-forward."))),(0,o.kt)("h2",{id:"deploy-nocalhost-server-by-helm"},"Deploy Nocalhost Server by Helm"),(0,o.kt)("h3",{id:"1-clone-the-repository"},"1. Clone the Repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/nocalhost/nocalhost.git\n")),(0,o.kt)("h3",{id:"2-deploy-the-nocalhost-server"},"2. Deploy the Nocalhost Server"),(0,o.kt)("p",null,"You can customize the deployed components by editing the helm chart in ",(0,o.kt)("inlineCode",{parentName:"p"},"nocalhost/deployments/chart/values.yaml")," before deployment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install nocalhost-server ./nocalhost/deployments/chart --kubeconfig=<path>/your-kubeconfig-file -n nocalhost-demo\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"No PVC")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The above deployment will create a pvc for ",(0,o.kt)("inlineCode",{parentName:"p"},"mariadb"),". If you do not have pvc or without permission to create, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--set mariadb.primary.persistence.enabled=false")," to deploy Nocalhost Server without creating pvc."))),(0,o.kt)("h3",{id:"3-waiting-for-deployment"},"3. Waiting for Deployment"),(0,o.kt)("p",null,"You can check the deployment status by ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," or other Kubernetes tools:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl get pods -n nocalhost-demo --kubeconfig=<path>/your-kubeconfig-file\n\nNAME                            READY   STATUS    RESTARTS   AGE\nnocalhost-api-8f6dddbb6-rfjvd   0/1     Running   0          13s\nnocalhost-mariadb-0             0/1     Running   0          14s\nnocalhost-web-b46995966-d9hmx   1/1     Running   0          14s\n")),(0,o.kt)("h3",{id:"4-port-forwarding-to-access-web-service"},"4. Port-Forwarding to Access Web Service"),(0,o.kt)("p",null,"Once the deployment completed, you need to manually port-forward the Nocalhost Web Service to local by using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl port-forward service/nocalhost-web 8080:80 -n demo   \n\nForwarding from 127.0.0.1:8080 -> 80\nForwarding from [::1]:8080 -> 80\n")),(0,o.kt)("p",null,"You can now ",(0,o.kt)("a",{parentName:"p",href:"#access-the-web-service"},"access the Nocalhost Web Service"),"."),(0,o.kt)("h2",{id:"access-the-web-service"},"Access the Web Service"),(0,o.kt)("p",null,"After deployment, you can access the Nocalhost Server web service via the URL"),(0,o.kt)("figure",{className:"img-frame"},(0,o.kt)("img",{className:"gif-img",src:(0,i.Z)("/img/server/server-login.jpg")}),(0,o.kt)("figcaption",null,"Nocalhost Server login")),(0,o.kt)("p",null,"Enter the default account information to login to the Nocalhost dashboard"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Username and Password to access web service"',title:'"Username',and:!0,Password:!0,to:!0,access:!0,web:!0,'service"':!0},"Email: admin@admin.com\nPassword: 123456\n")),(0,o.kt)("h2",{id:"deployment-process"},"Deployment Process"),(0,o.kt)("p",null,"After executing the deployment commands, Nocalhost will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deploy essential components: ",(0,o.kt)("a",{parentName:"li",href:"./server-overview#nocalhost-api"},"nocalhost-api"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"nocalhost-mariadb")," and ",(0,o.kt)("a",{parentName:"li",href:"./server-overview#nocalhost-web"},"nocalhost-web")),(0,o.kt)("li",{parentName:"ol"},"Create another namespace called ",(0,o.kt)("inlineCode",{parentName:"li"},"nocalhost-reserve")," and deploy ",(0,o.kt)("a",{parentName:"li",href:"./nh-dep"},(0,o.kt)("inlineCode",{parentName:"a"},"nocalhost-dep"))),(0,o.kt)("li",{parentName:"ol"},"Create an namespace with random name, this namespace is used for you initial ",(0,o.kt)("inlineCode",{parentName:"li"},"DevSpace"))))}u.isMDXComponent=!0}}]);