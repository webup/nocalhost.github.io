"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[6052],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),s=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=s(t),m=r,p=g["".concat(u,".").concat(m)]||g[m]||c[m]||a;return t?o.createElement(p,i(i({ref:n},d),{},{components:t})):o.createElement(p,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3919:function(e,n,t){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}t.d(n,{b:function(){return o},Z:function(){return r}})},4996:function(e,n,t){t.d(n,{C:function(){return a},Z:function(){return i}});var o=t(2263),r=t(3919);function a(){var e=(0,o.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,l=void 0!==i&&i,u=a.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(l)return n+t;var d=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+d:d}(a,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},8215:function(e,n,t){var o=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return c}});var o=t(7294),r=t(9443);var a=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),l="tabItem_1uMI",u="tabItemActive_2DSg";var s=37,d=39;var c=function(e){var n=e.lazy,t=e.block,r=e.defaultValue,c=e.values,g=e.groupId,m=e.className,p=a(),h=p.tabGroupChoices,f=p.setTabGroupChoices,k=(0,o.useState)(r),b=k[0],v=k[1],y=o.Children.toArray(e.children),N=[];if(null!=g){var w=h[g];null!=w&&w!==b&&c.some((function(e){return e.value===w}))&&v(w)}var D=function(e){var n=e.currentTarget,t=N.indexOf(n),o=c[t].value;v(o),null!=g&&(f(g,o),setTimeout((function(){var e,t,o,r,a,i,l,s;(e=n.getBoundingClientRect(),t=e.top,o=e.left,r=e.bottom,a=e.right,i=window,l=i.innerHeight,s=i.innerWidth,t>=0&&a<=s&&r<=l&&o>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},P=function(e){var n,t;switch(e.keyCode){case d:var o=N.indexOf(e.target)+1;t=N[o]||N[0];break;case s:var r=N.indexOf(e.target)-1;t=N[r]||N[N.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},m)},c.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:P,onFocus:D,onClick:D},t)}))),n?(0,o.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}},9443:function(e,n,t){var o=(0,t(7294).createContext)(void 0);n.Z=o},1294:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return g},toc:function(){return m},default:function(){return h}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),i=t(5064),l=t(8215),u=t(4996),s=["components"],d={},c="Remote Debugging",g={unversionedId:"guides/debug/remote-debug",id:"guides/debug/remote-debug",isDocsHomePage:!1,title:"Remote Debugging",description:"Supported IDEs",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/debug/remote-debug.md",sourceDirName:"guides/debug",slug:"/guides/debug/remote-debug",permalink:"/zh-CN/docs/guides/debug/remote-debug",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/zh-CN/docs/guides/debug/overview"},next:{title:"Access Terminal",permalink:"/zh-CN/docs/guides/debug/access-terminal"}},m=[{value:"Supported IDEs",id:"supported-ides",children:[]},{value:"Debugging Process",id:"debugging-process",children:[{value:"Debugging Configurations in IDE",id:"debugging-configurations-in-ide",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"How does it Works?",id:"how-does-it-works",children:[]},{value:"How does it works?",id:"how-does-it-works-1",children:[]}]},{value:"Known Issues",id:"known-issues",children:[]}],p={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"remote-debugging"},"Remote Debugging"),(0,a.kt)("h2",{id:"supported-ides"},"Supported IDEs"),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Language"),(0,a.kt)("th",null,"IDE"),(0,a.kt)("th",null,"Edition"),(0,a.kt)("th",null,"Required Plugin")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Java"),(0,a.kt)("td",null,"IntelliJ IDEA"),(0,a.kt)("td",null,"Ultimate"),(0,a.kt)("td",null,"N/A")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"Go"),(0,a.kt)("td",null,"IntelliJ IDEA"),(0,a.kt)("td",null,"Ultimate"),(0,a.kt)("td",null,"Go plugin")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GoLand"),(0,a.kt)("td",null,"Professional"),(0,a.kt)("td",null,"N/A")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"Python"),(0,a.kt)("td",null,"IntelliJ IDEA"),(0,a.kt)("td",null,"Ultimate"),(0,a.kt)("td",null,"Python plugin")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"PyCharm"),(0,a.kt)("td",null,"Professional"),(0,a.kt)("td",null,"N/A")),(0,a.kt)("tr",null,(0,a.kt)("td",{rowSpan:"2"},"PHP"),(0,a.kt)("td",null,"IntelliJ IDEA"),(0,a.kt)("td",null,"Ultimate"),(0,a.kt)("td",null,"PHP plugin")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"PHPStorm"),(0,a.kt)("td",null,"Professional"),(0,a.kt)("td",null,"N/A")))),(0,a.kt)("h2",{id:"debugging-process"},"Debugging Process"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the workload that you want to debug"),(0,a.kt)("li",{parentName:"ol"},"Right-click the workload and select ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Dev Config")),", ",(0,a.kt)("a",{parentName:"li",href:"#configuration"},"configure your debugging configuration")),(0,a.kt)("li",{parentName:"ol"},"Then right-click this workload again and select ",(0,a.kt)("strong",{parentName:"li"},"Remote Debug")),(0,a.kt)("li",{parentName:"ol"},"Nocalhost will automatically enter the ",(0,a.kt)("inlineCode",{parentName:"li"},"DevMode")," and start remote debugging ",(0,a.kt)("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/LDb7oDGr8gA",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,mark:"crwd-mark"}))),(0,a.kt)("h3",{id:"debugging-configurations-in-ide"},"Debugging Configurations in IDE"),(0,a.kt)("p",null,"Before entering debug mode, if you do not have a Nocalhost IDE debug configuration under an existing workload, Nocalhost will create a new IDE debug configuration according to your ",(0,a.kt)("a",{parentName:"p",href:"#configuration"},"Nocalhost configuration"),". Different IDE has different configuration names and templates."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Multi Configs")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you already have a Nocalhost IDE debug configuration under the existing workload, Nocalhost will use the first one to start debugging. You can change the order in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Run/Debug Configurations")," window within IDE."),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,u.Z)("/img/debug/debug-configs.png")}),(0,a.kt)("figcaption",null,"Nocalhost debugging configurations in IDE")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The development environment is different between developers. You should configure remote debug configurations according to the actual situation."),(0,a.kt)("p",null,"These are important options for remote debugging:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Development Image:")," the image use to start development container"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Debug Command:")," the command to execute in the container for remote debugging"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Remote Debug Port:")," IDE listens to this port for remote debug debugging"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Container Port-Forwarding:")," the port-forwarding in development mode")),(0,a.kt)("h3",{id:"sample-configuration"},"Sample Configuration"),(0,a.kt)(i.Z,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Go",value:"go"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{10,15,29} title="Nocalhost Configs"',"{10,15,29}":!0,title:'"Nocalhost','Configs"':!0},'name: java-remote-debugging\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:latest\n        shell: bash\n        workDir: /home/nocalhost-dev\n        command:\n          debug:\n            - /home/nocalhost-dev/gradlew\n            - bootRun\n            - ---debug-jvm\n        debug:\n          remoteDebugPort: 5005\n        useDevContainer: false\n        sync:\n            type: send\n            filePattern:\n              - ./\n            ignoreFilePattern:\n              - .git\n              - .github\n        env:\n          - name: DEBUG\n            value: "true"\n        envFrom: null\n        portForward:\n          - 33333:9999\n\n'))),(0,a.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{10,13,27} title="Nocalhost Configs"',"{10,13,27}":!0,title:'"Nocalhost','Configs"':!0},'name: python-remote-debugging\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:latest\n        shell: bash\n        workDir: /home/nocalhost-dev\n        command:\n          debug:\n            - ./debug.sh\n        debug:\n          remoteDebugPort: 9009\n        useDevContainer: false\n        sync:\n            type: send\n            filePattern:\n              - ./\n            ignoreFilePattern:\n              - .git\n              - .github\n        env:\n          - name: DEBUG\n            value: "true"\n        envFrom: null\n        portForward:\n          - 33333:9999\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="debug.sh"',title:'"debug.sh"'},"\n#! /bin/sh\n\npip3 install --no-cache-dir -r ./requirements.txt\n\nexport DEBUG_DEV=0\nexport FLASK_DEBUG=0\nexport FLASK_ENV=development\n\nflask run --host=0.0.0.0 --port=9999\n\n")),(0,a.kt)("h3",{id:"how-does-it-works"},"How does it Works?"),(0,a.kt)("p",null,"Nocalhost using pydevd to debug Python application."),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,u.Z)("/img/debug/python-debug.jpg")}),(0,a.kt)("figcaption",null,"Principle of Remote Python Debugging"))),(0,a.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{10,13,27} title="Nocalhost Configs"',"{10,13,27}":!0,title:'"Nocalhost','Configs"':!0},'name: go-remote-debugging\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:latest\n        shell: bash\n        workDir: /home/nocalhost-dev\n        command:\n          debug:\n            - ./debug.sh\n        debug:\n          remoteDebugPort: 9009\n        useDevContainer: false\n        sync:\n            type: send\n            filePattern:\n              - ./\n            ignoreFilePattern:\n              - .git\n              - .github\n        env:\n          - name: DEBUG\n            value: "true"\n        envFrom: null\n        portForward:\n          - 33333:9999\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="debug.sh"',title:'"debug.sh"'},"\n#! /bin/sh\n\nexport GOPROXY=https://goproxy.cn\ndlv --headless --log --listen :9009 --api-version 2 --accept-multiclient debug app.go\n\n"))),(0,a.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{10,13,27} title="Nocalhost Configs"',"{10,13,27}":!0,title:'"Nocalhost','Configs"':!0},'name: php-remote-debugging\nserviceType: deployment\ncontainers:\n  - name: ""\n    dev:\n        gitUrl: https://e.coding.net/codingcorp/nocalhost/bookinfo-details.git\n        image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/php:zsh\n        shell: bash\n        workDir: /home/nocalhost-dev\n        command:\n          debug:\n            - ./debug.sh\n        debug:\n          remoteDebugPort: 9009\n        useDevContainer: false\n        sync:\n            type: send\n            filePattern:\n              - ./\n            ignoreFilePattern:\n              - .git\n              - .github\n        env:\n          - name: DEBUG\n            value: "true"\n        envFrom: null\n        portForward:\n          - 33333:9999\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="debug.sh"',title:'"debug.sh"'},"\n#\uff01/bin/sh\n\nphp -t ./ -S 0.0.0.0:9999;\n\n")),(0,a.kt)("h3",{id:"how-does-it-works-1"},"How does it works?"),(0,a.kt)("p",null,"Nocalhost using Xdebug to debug PHP applications."),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,u.Z)("/img/debug/php-debug.jpg")}),(0,a.kt)("figcaption",null,"Principle of Remote PHP Debugging")))),(0,a.kt)("h2",{id:"known-issues"},"Known Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Debugging feature has issue with ",(0,a.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"Kind"))))}h.isMDXComponent=!0}}]);