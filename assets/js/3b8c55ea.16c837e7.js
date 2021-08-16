"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[3217],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=u(n),p=l,k=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(k,r(r({ref:e},c),{},{components:n})):a.createElement(k,r({ref:e},c))}));function p(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(t,e,n){function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function l(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return l}})},4996:function(t,e,n){n.d(e,{C:function(){return i},Z:function(){return r}});var a=n(2263),l=n(3919);function i(){var t=(0,a.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,o=void 0!==r&&r,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,l.b)(n))return n;if(o)return e+n;var c=n.startsWith(e)?n:e+n.replace(/^\//,"");return u?t+c:c}(i,n,t,e)}}}function r(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},8215:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,l=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},e)}},5064:function(t,e,n){n.d(e,{Z:function(){return m}});var a=n(7294),l=n(9443);var i=function(){var t=(0,a.useContext)(l.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},r=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var m=function(t){var e=t.lazy,n=t.block,l=t.defaultValue,m=t.values,d=t.groupId,p=t.className,k=i(),f=k.tabGroupChoices,h=k.setTabGroupChoices,g=(0,a.useState)(l),v=g[0],b=g[1],y=a.Children.toArray(t.children),N=[];if(null!=d){var w=f[d];null!=w&&w!==v&&m.some((function(t){return t.value===w}))&&b(w)}var C=function(t){var e=t.currentTarget,n=N.indexOf(e),a=m[n].value;b(a),null!=d&&(h(d,a),setTimeout((function(){var t,n,a,l,i,r,o,u;(t=e.getBoundingClientRect(),n=t.top,a=t.left,l=t.bottom,i=t.right,r=window,o=r.innerHeight,u=r.innerWidth,n>=0&&i<=u&&l<=o&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(s),setTimeout((function(){return e.classList.remove(s)}),2e3))}),150))},I=function(t){var e,n;switch(t.keyCode){case c:var a=N.indexOf(t.target)+1;n=N[a]||N[0];break;case u:var l=N.indexOf(t.target)-1;n=N[l]||N[N.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},p)},m.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":v===e}),key:e,ref:function(t){return N.push(t)},onKeyDown:I,onFocus:C,onClick:C},n)}))),e?(0,a.cloneElement)(y.filter((function(t){return t.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==v})}))))}},9443:function(t,e,n){var a=(0,n(7294).createContext)(void 0);e.Z=a},872:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var a=n(2122),l=n(9756),i=(n(7294),n(3905)),r=n(5064),o=n(8215),s=n(4996),u=["components"],c={},m="Install Nocalhost",d={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Install Nocalhost",description:"When install Nocalhost IDE plugin, it will install the nhctl for you automatically.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/installation.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/quick-start"},next:{title:"Manage Cluster",permalink:"/docs/guides/manage-cluster"}},p=[{value:"Compatible",id:"compatible",children:[]},{value:"Install VS Code Plugin",id:"install-vs-code-plugin",children:[]},{value:"Install JetBrains Plugin",id:"install-jetbrains-plugin",children:[{value:"Windows",id:"windows",children:[]},{value:"MacOS",id:"macos",children:[]}]},{value:"Upgrade Plugin",id:"upgrade-plugin",children:[]},{value:"Uninstall",id:"uninstall",children:[{value:"Uninstall IDE Plugin",id:"uninstall-ide-plugin",children:[]},{value:"Remove <code>nhctl</code>",id:"remove-nhctl",children:[]}]}],k={toc:p};function f(t){var e=t.components,n=(0,l.Z)(t,u);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install-nocalhost"},"Install Nocalhost"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"nhctl")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When install Nocalhost IDE plugin, it will install the ",(0,i.kt)("inlineCode",{parentName:"p"},"nhctl")," for you automatically."))),(0,i.kt)("h2",{id:"compatible"},"Compatible"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"IDE"),(0,i.kt)("th",null,"Version"),(0,i.kt)("th",null,"Result"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"VS Code "),(0,i.kt)("td",null,"1.58.2 (Universal)"),(0,i.kt)("td",null,(0,i.kt)("strong",{className:"pass-tag"},"passed"))),(0,i.kt)("tr",null,(0,i.kt)("td",{rowspan:"3"},"JetBrains"),(0,i.kt)("td",null,"2021.2 (Ultimate & Community) - Intel and M1"),(0,i.kt)("td",null,(0,i.kt)("strong",{className:"pass-tag"},"passed"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"2021.1 (Ultimate & Community) - Intel and M1"),(0,i.kt)("td",null,(0,i.kt)("strong",{className:"pass-tag"},"passed"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"2020.3 (Ultimate & Community) - Intel and M1"),(0,i.kt)("td",null,(0,i.kt)("strong",{className:"pass-tag"},"passed"))))),(0,i.kt)("h2",{id:"install-vs-code-plugin"},"Install VS Code Plugin"),(0,i.kt)(r.Z,{defaultValue:"market",values:[{label:"Install from Extension Market",value:"market"},{label:"Manual Installation",value:"manual"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"market",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open VS Code and go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Extensions")," by click the ",(0,i.kt)("img",{src:(0,s.Z)("/img/icons/vs-code-icon.jpg"),width:"20"})," icon"),(0,i.kt)("li",{parentName:"ol"},"Input ",(0,i.kt)("inlineCode",{parentName:"li"},"Nocalhost")," in the search box"),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Nocalhost Extension"),", and click the ",(0,i.kt)("strong",{parentName:"li"},"Install")," button.")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/vscode-market.png")}),(0,i.kt)("figcaption",null,"Install from VS Code extension market"))),(0,i.kt)(o.Z,{value:"manual",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the latest version from our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nocalhost/nocalhost-vscode-plugin/releases/latest"},"Github Repo")),(0,i.kt)("li",{parentName:"ol"},"Open VS Code and go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Extensions")," by click the ",(0,i.kt)("img",{src:(0,s.Z)("/img/icons/vs-code-icon.jpg"),width:"20"})," icon"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("img",{src:(0,s.Z)("/img/icons/cluster-action-icon.jpg"),width:"20"})," on the top right of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Extension")," list, select ",(0,i.kt)("inlineCode",{parentName:"li"},"Install from VSIX..."),", select the ",(0,i.kt)("inlineCode",{parentName:"li"},"VSIX")," downloaded above")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/vs-manual.jpg")}),(0,i.kt)("figcaption",null,"Manual installation")))),(0,i.kt)("h2",{id:"install-jetbrains-plugin"},"Install JetBrains Plugin"),(0,i.kt)(r.Z,{defaultValue:"market",values:[{label:"Install from Extension Market",value:"market"},{label:"Manual Installation",value:"manual"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"market",mdxType:"TabItem"},(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'File > Settings > Plugins > Browse repositories... > Search for "Nocalhost" > Install Plugin')),(0,i.kt)("h3",{id:"macos"},"MacOS"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'Preferences > Settings > Plugins > Browse repositories... > Search for "Nocalhost" > Install Plugin')),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/jb-market.png")}),(0,i.kt)("figcaption",null,"Install from JetBrains extension market"))),(0,i.kt)(o.Z,{value:"manual",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the latest version from our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nocalhost/nocalhost-intellij-plugin/releases/latest"},"Github Repo")),(0,i.kt)("li",{parentName:"ol"},"Install plugin: ",(0,i.kt)("kbd",null,"Preferences")," > ",(0,i.kt)("kbd",null,"Plugins")," > ",(0,i.kt)("kbd",null,"Install from disk... "))),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/installation/jb-manual.jpg")}),(0,i.kt)("figcaption",null,"Manual installation")))),(0,i.kt)("h2",{id:"upgrade-plugin"},"Upgrade Plugin"),(0,i.kt)("p",null,"Nocalhost will automatically check and install the latest updates when IDE starts."),(0,i.kt)("h2",{id:"uninstall"},"Uninstall"),(0,i.kt)("p",null,"You can fully uninstall Nocalhost by following"),(0,i.kt)("h3",{id:"uninstall-ide-plugin"},"Uninstall IDE Plugin"),(0,i.kt)("p",null,"Uninstall Nocalhost IDE plugin in your IDE"),(0,i.kt)("h3",{id:"remove-nhctl"},"Remove ",(0,i.kt)("inlineCode",{parentName:"h3"},"nhctl")),(0,i.kt)("p",null,"Remove the ",(0,i.kt)("inlineCode",{parentName:"p"},".nh")," folder in your root directory"),(0,i.kt)(r.Z,{defaultValue:"mac",values:[{label:"Mac & Linux",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".nh")," folder is in your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/")," directory, you can remove it by the following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf .nh\n"))),(0,i.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".nh")," folder is in your ",(0,i.kt)("inlineCode",{parentName:"p"},"<ROOT PATH>/User/username/")," directory, you can just delete it."))))}f.isMDXComponent=!0}}]);