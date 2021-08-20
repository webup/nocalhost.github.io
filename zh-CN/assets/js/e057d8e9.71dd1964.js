"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[370],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),m=c(t),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(g,i(i({ref:e},u),{},{components:t})):r.createElement(g,i({ref:e},u))}));function d(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},716:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],l={},s="Nocalhost \u914d\u7f6e",c={unversionedId:"reference/nh-config",id:"reference/nh-config",isDocsHomePage:!1,title:"Nocalhost \u914d\u7f6e",description:"`yaml",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/nh-config.md",sourceDirName:"reference",slug:"/reference/nh-config",permalink:"/zh-CN/docs/reference/nh-config",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/reference/nh-config.md",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1628880717,formattedLastUpdatedAt:"8/13/2021",frontMatter:{},sidebar:"docs",previous:{title:"Manage Applications",permalink:"/zh-CN/docs/server/manage-app"},next:{title:"nhctl apply",permalink:"/zh-CN/docs/cli/cli-apply"}},u=[],p={toc:u};function m(n){var e=n.components,t=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nocalhost-\u914d\u7f6e"},"Nocalhost \u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u5c5e\u6027\n# \u7c7b\u578b: \u5bf9\u8c61\n# \u9ed8\u8ba4\u503c: {}\n# \u5fc5\u987b\nconfigProperties:\n\n  # \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u7248\u672c\n  # \u7c7b\u578b: string\n  # \u9ed8\u8ba4\u503c: null\n  # \u5fc5\u987b\n  version: v2\n\n  # env \u540d\u79f0\uff0c\u5728\u5f53\u524d\u914d\u7f6e\u6587\u4ef6\u76f8\u540c\u76ee\u5f55\u4e0b\n  # \u7c7b\u578b: string\n  # \u9ed8\u8ba4\u503c: null\n  # \u53ef\u9009\n  envFile: env.dev\n\napplication:\n  # \u5e94\u7528\u540d\u79f0\n  # \u7c7b\u578b: string(\u7b26\u5408 dns1123 \u6807\u51c6)\n  # \u9ed8\u8ba4\u503c: null\n  # \u5fc5\u987b\u63d0\u4f9b\n  # \u5bf9\u5e94 nhctl \u53c2\u6570: [NAME]\n  # \u552f\u4e00\n  name: coding-agile\n\n  # \u5e94\u7528\u7684 K8s manifest \u7c7b\u578b\n  # \u7c7b\u578b: \u5355\u9009\uff0c\u53ef\u9009\u9879\uff1ahelmGit/helmRepo/rawManifest/rawManifestLocal/helmLocal\n  # \u9ed8\u8ba4\u503c: null\n  # \u5fc5\u987b\u63d0\u4f9b\n  # \u5bf9\u5e94 nhctl \u53c2\u6570: --type,-t\n  manifestType: rawManifest\n\n  # \u6307\u5b9a helmRepo \u7c7b\u578b\u5e94\u7528\u9ed8\u8ba4\u7684\u7248\u672c\u53f7\n  # type: string\n  # deafult value: latest\n  # optional\n  helmVersion: 0.0.1\n\n  # helmGit: Chart \u76f8\u5bf9\u4e8e Git \u4ed3\u5e93\u6839\u76ee\u5f55\u7684\u4f4d\u7f6e\n  # helmRepo: \u65e0\u542b\u4e49\n  # helmLocal: chart path: Chart \u76f8\u5bf9\u4e8e\u672c\u5730\u5e94\u7528\u76ee\u5f55\u4ed3\u5e93\u6839\u76ee\u5f55\u7684\u4f4d\u7f6e\n  # rawManifestGit: k8s manifest \u6587\u4ef6\u5939\u76f8\u5bf9\u4e8e Git \u4ed3\u5e93\u7684\u4f4d\u7f6e\n  # rawManifestLocal: k8s manifest \u6587\u4ef6\u5939\u76f8\u5bf9\u4e8e\u672c\u5730\u5e94\u7528\u76ee\u5f55\u7684\u4f4d\u7f6e\n  # kustomizeGit: k8s kustomize \u6587\u4ef6\u5939\u76f8\u5bf9\u4e8e Git \u4ed3\u5e93\u7684\u4f4d\u7f6e\n  # kustomizeLocal: k8s kustomize \u6587\u4ef6\u5939\u76f8\u5bf9\u4e8e\u672c\u5730\u5e94\u7528\u76ee\u5f55\u7684\u4f4d\u7f6e\n  # \u7c7b\u578b: string[]\n  # \u9ed8\u8ba4\u503c: ["."]\n  # \u5fc5\u987b# \n  resourcePath: []\n\n  # helmGit: \u65e0\u542b\u4e49\n  # helmRepo: \u65e0\u542b\u4e49\n  # rawManifest: \u5ffd\u7565\u7684 k8s manifest \u76ee\u5f55\uff0c\u76f8\u5bf9\u4e8eGit \u4ed3\u5e93\u7684\u4f4d\u7f6e\n  # rawManifestLocal: \u5ffd\u7565\u7684 k8s manifest \u76ee\u5f55\uff0c\u76f8\u5bf9\u4e8e\u672c\u5730\u5e94\u7528\u76ee\u5f55\u7684\u4f4d\u7f6e\n  # helmLocal: \u65e0\u542b\u4e49\n  # \u7c7b\u578b: string[]\n  # \u9ed8\u8ba4\u503c: ["."]\n  # \u53ef\u9009\n  ignoredPath: []\n\n  # \u5e94\u7528\u5b89\u88c5\u524d\u7684\u6267\u884c\u4efb\u52a1\uff0c\u987b\u6307\u5b9a k8s Job \u7684 yaml\u6587\u4ef6\n  # \u7c7b\u578b: object[]\n  # \u9ed8\u8ba4\u503c: []\n  # \u53ef\u9009\n  onPreInstall: \n\n    # Job \u7684 yaml \u6587\u4ef6, \u76f8\u5bf9\u4e8e Git \u4ed3\u5e93\u7684\u6839\u76ee\u5f55\n    # \u7c7b\u578b: string\n    # \u5fc5\u987b\u63d0\u4f9b\n  - path: "job-1.yaml"\n\n    # \u6267\u884c\u987a\u5e8f\uff0c\u8d8a\u5c0f\u8d8a\u5148\u6267\u884c\n    # \u7c7b\u578b: int\n    # \u9ed8\u8ba4\u503c: 0\n    # \u53ef\u9009\n    weight: -1\n\n  - path: "job-2.yaml"\n    name: xxx2-job\n    priority: 5\n\n  # \u4ec5\u9488\u5bf9 Helm \u5e94\u7528\u7c7b\u578b\u6709\u6548\uff0c\u8986\u5199 values.yaml \u6307\u5b9a\u503c\n  # \u7c7b\u578b: object[]\n  # \u9ed8\u8ba4\u503c: []\n  # \u53ef\u9009\n  helmValues:\n    - key: DOMAIN\n      value: ${DOMAIN:-www.coding.com}\n    - key: DEBUG\n      value: ${DEBUG:-true}\n\n  # \u5e94\u7528\u5b89\u88c5\u65f6\u4e3a\u6240\u6709\u5de5\u4f5c\u8d1f\u8f7d\u6ce8\u5165\u73af\u5883\u53d8\u91cf\n  # \u7c7b\u578b: object[]\n  # \u9ed8\u8ba4\u503c: []\n  # \u53ef\u9009\n  env: \n    - name: DEBUG\n      value: ${DEBUG:-true}\n    - name: DOMAIN\n      value: "www.coding.com"\n\n  # \u5e94\u7528\u5b89\u88c5\u65f6\u4e3a\u6240\u6709\u5de5\u4f5c\u8d1f\u8f7d\u6ce8\u5165\u73af\u5883\u53d8\u91cf\uff08\u4f7f\u7528 env \u6587\u4ef6\uff09\n  # \u5982\u679c\u540c\u65f6\u6307\u5b9a\u4e86 env \u548c envFrom\uff0c\u90a3\u4e48\u53d6\u5e76\u96c6\uff0c\u4ea4\u96c6\u90e8\u5206\u4ee5 env \u4e3a\u51c6\n  # \u7c7b\u578b: object[]\n  # \u9ed8\u8ba4\u503c: []\n  # \u53ef\u9009\n  envFrom: \n    envFile: \n      - path: dev.env\n      - path: dev.env\n\n  # \u5e94\u7528\u5185\u7684\u5fae\u670d\u52a1\u5217\u8868\n  # \u7c7b\u578b: object[]\n  # \u9ed8\u8ba4\u503c: []\n  # \u53ef\u9009\n  services:\n\n    # \u5fae\u670d\u52a1\u7684\u540d\u5b57,\u5bf9\u5e94 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u540d\u79f0\n    # \u7c7b\u578b: string\n    # \u9ed8\u8ba4\u503c: null\n    # \u5fc5\u987b\n    - name: e-coding\n\n      # \u5fae\u670d\u52a1\u5bf9\u5e94\u7684 k8s \u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\n      # \u7c7b\u578b: \u5355\u9009, \u53ef\u9009\u9879: deployment/statefulset/pod/job/cronjob/daemonset \u5927\u5c0f\u5199\u4e0d\u654f\u611f\n      # \u9ed8\u8ba4\u503c: deployment\n      # \u5fc5\u987b\n      serviceType: deployment\n\n      # \u670d\u52a1\u6240\u4f9d\u8d56\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6807\u7b7e\u9009\u62e9\u5668\n      # \u7c7b\u578b: object\n      # \u9ed8\u8ba4\u503c: null\n      # \u53ef\u9009\n      dependLabelSelector: \n\n        # \u6307\u660e\u4f9d\u8d56\u7684 Pods \u6807\u7b7e\u9009\u62e9\u5668 (\u5f53\u524d\u670d\u52a1\u4f1a\u7b49\u5f85\u88ab\u6807\u7b7e\u9009\u62e9\u5668\u9009\u4e2d\u7684 Pod \u5904\u4e8e Ready \u72b6\u6001\u624d\u542f\u52a8)\n        # \u7c7b\u578b: string[]\n        # \u9ed8\u8ba4\u503c: []\n        # \u53ef\u9009\n        pods: \n          - "name=mariadb"\n          - "app.kubernetes.io/name=mariadb"\n\n        # \u6307\u660e\u4f9d\u8d56\u7684 Jobs \u6807\u7b7e\u9009\u62e9\u5668 (\u5f53\u524d\u670d\u52a1\u4f1a\u7b49\u5f85\u88ab\u6807\u7b7e\u9009\u62e9\u5668\u9009\u4e2d\u7684 Job \u6267\u884c\u5b8c\u6bd5\u624d\u542f\u52a8)\n        # \u7c7b\u578b: string[]\n        # \u9ed8\u8ba4\u503c: []\n        # \u53ef\u9009\n        jobs:\n          - "job-name=init-job"\n          - "app.kubernetes.io/name=init-job"\n\n      containers:\n\n        # \u5f53 Pod \u6709\u591a\u4e2a\u5bb9\u5668\u65f6\uff0c\u5219\u4e3a\u9700\u8981\u5f00\u53d1\u7684\u5bb9\u5668\u63d0\u4f9b\u914d\u7f6e\n        # \u7c7b\u578b: string\n        # \u9ed8\u8ba4\u503c: ""\n        # \u53ef\u9009\n        - name: coding\n\n          # \u6267\u884c\u5bb9\u5668\u7684\u5b89\u88c5\u53c2\u6570\n          # \u7c7b\u578b: object\n          # \u9ed8\u8ba4\u503c: {}\n          # \u53ef\u9009\n          install: \n\n            # \u5f53\u5e94\u7528\u88ab\u5b89\u88c5\u65f6\uff0c\u4e3a\u6307\u5b9a\u5bb9\u5668\u6ce8\u5165\u73af\u5883\u53d8\u91cf\n            # \u7c7b\u578b: object[]\n            # \u9ed8\u8ba4\u503c: []\n            # \u53ef\u9009\n            env: \n              - name: DEBUG\n                value: "true"\n              - name: DOMAIN\n                value: "www.coding.com"\n\n            # \u5f53\u5e94\u7528\u88ab\u5b89\u88c5\u65f6\uff0c\u4e3a\u6307\u5b9a\u5bb9\u5668\u6ce8\u5165\u73af\u5883\u53d8\u91cf\uff08\u4f7f\u7528 env \u6587\u4ef6\uff09\n            # \u5982\u679c\u540c\u65f6\u6307\u5b9a\u4e86 env \u548c envFrom\uff0c\u90a3\u4e48\u53d6\u5e76\u96c6\uff0c\u4ea4\u96c6\u90e8\u5206\u4ee5 env \u4e3a\u51c6\n            # \u7c7b\u578b: object[]\n            # \u9ed8\u8ba4\u503c: []\n            # \u53ef\u9009\n            envFrom: \n              envFile: \n                - path: dev.env\n                - path: dev.env\n\n            # \u5e94\u7528\u88ab\u5b89\u88c5\u540e\u81ea\u52a8\u8f6c\u53d1\u7684\u7aef\u53e3\u5217\u8868\n            # \u672c\u5730\u7aef\u53e3:\u8fdc\u7aef\u7aef\u53e3\n            # \u7c7b\u578b: string[]\n            # \u9ed8\u8ba4\u503c: []\n            # \u53ef\u9009\n            portForward:\n              - 3306:3306\n\n          # \u6307\u5b9a\u5f00\u53d1\u53c2\u6570\u914d\u7f6e\n          # \u7c7b\u578b: object\n          # \u9ed8\u8ba4\u503c: {}\n          # \u5fc5\u987b\n          dev:\n\n            # \u5fae\u670d\u52a1\u7684\u6e90\u7801 Git \u4ed3\u5e93\u5730\u5740\n            # \u7c7b\u578b: string\n            # \u9ed8\u8ba4\u503c: null\n            # \u5fc5\u987b\n            gitUrl: xxx-job\n\n            # \u5fae\u670d\u52a1\u7684 DevContainer \u955c\u50cf\n            # \u7c7b\u578b: string\n            # \u9ed8\u8ba4\u503c: null\n            # \u5fc5\u987b\n            image: java:8-jdk\n\n            # \u8fdb\u5165 DevMode \u65f6\uff0c\u9ed8\u8ba4\u7684 shell \u73af\u5883\n            # \u7c7b\u578b: string\n            # \u9ed8\u8ba4\u503c: "/bin/sh"\n            # \u53ef\u9009\n            shell: "bash"\n\n            # \u6307\u5b9a DevContainer \u7684\u5de5\u4f5c\u76ee\u5f55\uff0c\u6e90\u7801\u4f1a\u88ab\u4f20\u8f93\u5230\u6b64\u76ee\u5f55\n            # \u7c7b\u578b: string\n            # \u9ed8\u8ba4\u503c: "/home/nocalhost-dev"\n            # \u53ef\u9009\n            workDir: "/root/nocalhost-dev"\n\n            # \u6307\u5b9a DevContainer \u7684\u8d44\u6e90\u7533\u8bf7\u548c\u9650\u5236\uff0c\u914d\u7f6e\u4fe1\u606f\u7b26\u5408 Kubernetes \u5bf9\u8d44\u6e90\u9650\u5b9a\u7684\u7ea6\u5b9a\n            # \u7c7b\u578b: object\n            # \u9ed8\u8ba4\u503c: {}\n            # \u53ef\u9009\n            resources:\n              limits:\n                cpu: "1"\n                memory: 1Gi\n              requests:\n                cpu: "0.5"\n                memory: 512Mi\n\n            # \u6307\u5b9a K8s Persistent Volume \u7684 stoargeClass\n            # storage of pv\n            # \u7c7b\u578b: string\n            # \u9ed8\u8ba4\u503c: null\n            # \u53ef\u9009\n            storageClass: "cbs"\n\n            # DevContainer \u4e2d\u9700\u8981\u6301\u4e45\u5316\u5b58\u50a8\u7684\u76ee\u5f55\u5217\u8868\n            # \u7c7b\u578b: string[]\n            # \u9ed8\u8ba4\u503c: ["/home/nocalhost-dev"]\n            # \u53ef\u9009\n            persistentVolumeDirs: \n\n              # \u5f00\u53d1\u5bb9\u5668\u4e2d\u8981\u6301\u4e45\u5316\u7684\u76ee\u5f55\u8def\u5f84\n              # \u7c7b\u578b: string\n              # \u9ed8\u8ba4\u503c: null\n              # \u5fc5\u586b\n              - path: "/root"\n\n                # \u76ee\u5f55\u7684\u5bb9\u91cf\uff0c\u7b26\u5408 k8s \u6807\u51c6\u5199\u6cd5\n                # \u7c7b\u578b: string\n                # \u9ed8\u8ba4\u503c: 10Gi\n                # \u53ef\u9009\n                capacity: 100Gi\n\n            # \u6307\u5b9a\u7f16\u8f91\u5668\u63d2\u4ef6\u7684\u8fd0\u884c\u547d\u4ee4(\u6682\u672a\u5b9e\u73b0\uff0c\u672a\u6765\u652f\u6301)\n            # \u7c7b\u578b: object\n            # \u9ed8\u8ba4\u503c: {}\n            # \u53ef\u9009\n            command: \n\n              # \u5728\u6e90\u7801\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u7684\u6784\u5efa\u7f16\u8bd1\u547d\u4ee4\n              # \u7c7b\u578b: string\n              # \u9ed8\u8ba4\u503c: ""\n              # \u53ef\u9009\n              build: ["./gradlew", "package"]\n\n              # \u5728\u6e90\u7801\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u7684\u542f\u52a8\u670d\u52a1\u547d\u4ee4\n              # \u7c7b\u578b: string\n              # \u9ed8\u8ba4\u503c: ""\n              # \u53ef\u9009\n              run: ["./gradlew", "bootRun"]\n\n              # \u5728\u6e90\u7801\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u7684\u542f\u52a8\u8c03\u8bd5\u670d\u52a1\u547d\u4ee4\n              # \u7c7b\u578b: string\n              # \u9ed8\u8ba4\u503c: ""\n              # \u53ef\u9009\n              debug: ["./gradlew", "bootRun", "--debug-jvm"]\n\n              # \u5728\u6e90\u7801\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u7684\u652f\u6301\u70ed\u52a0\u8f7d\u7684\u542f\u52a8\u670d\u52a1\u547d\u4ee4\n              # \u7c7b\u578b: string\n              # \u9ed8\u8ba4\u503c: ""\n              # \u53ef\u9009\n              hotReloadRun: ["bash", "-c", "kill `ps -ef|grep -i gradlew| grep -v grep| awk \'{print $2}\'`; gradlew bootRun"]\n\n              # \u5728\u6e90\u7801\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u7684\u652f\u6301\u70ed\u52a0\u8f7d\u7684\u542f\u52a8\u8c03\u8bd5\u670d\u52a1\u547d\u4ee4\n              # \u7c7b\u578b: string\n              # \u9ed8\u8ba4\u503c: ""\n              # \u53ef\u9009\n              hotReloadDebug: ["bash", "-c", "kill `ps -ef|grep -i gradlew| grep -v grep| awk \'{print $2}\'`; gradlew bootRun --debug-jvm"]\n\n            # \u6307\u5b9a\u7f16\u8f91\u5668\u63d2\u4ef6 debug \u53c2\u6570(\u6682\u672a\u5b9e\u73b0\uff0c\u672a\u6765\u652f\u6301)\n            # \u7c7b\u578b: object\n            # \u9ed8\u8ba4\u503c: {}\n            # \u53ef\u9009\n            debug: \n\n              # \u6307\u5b9a\u8fdc\u7a0b\u8c03\u8bd5\u7aef\u53e3\n              # \u7c7b\u578b: int\n              # \u9ed8\u8ba4\u503c: null\n              # \u53ef\u9009\n              remoteDebugPort: 5005\n\n            # \u4f7f\u7528 Git \u4ed3\u5e93\u4e2d\u7684 .dev-container \u58f0\u660e\u6765\u6307\u5b9a DevContainer \u955c\u50cf (\u6682\u672a\u5b9e\u73b0\uff0c\u672a\u6765\u652f\u6301)\n            # \u7c7b\u578b: string\n            # \u9ed8\u8ba4\u503c: ""\n            # \u53ef\u9009\n            useDevContainer: false\n\n            # \u6307\u5b9a\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u540e\u7684\u6587\u4ef6\u540c\u6b65\u53c2\u6570\n            # \u7c7b\u578b: object\n            # \u9ed8\u8ba4\u503c: {}\n            # \u53ef\u9009\n            sync: \n\n              # \u6587\u4ef6\u540c\u6b65\u6a21\u5f0f\n              # "send" \u5355\u5411\u540c\u6b65\u672c\u5730\u6587\u4ef6\u5230\u5bb9\u5668, "sendreceive" \u53cc\u5411\u540c\u6b65\n              # \u7c7b\u578b: \u5355\u9009\uff0csend/sendreceive\n              # \u9ed8\u8ba4\u503c: "send"\n              # \u53ef\u9009\n              type: send\n\n              # \u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u8981\u540c\u6b65\u7684\u76ee\u5f55\u5217\u8868\n              # \u7c7b\u578b: string[]\n              # \u9ed8\u8ba4\u503c: ["."]\n              # \u53ef\u9009\n              filePattern: \n                - "./src"\n                - "./pkg/fff"\n\n              # \u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u8981\u5ffd\u7565\u540c\u6b65\u7684\u76ee\u5f55\u5217\u8868\n              # \u7c7b\u578b: string[]\n              # \u9ed8\u8ba4\u503c: []\n              # \u53ef\u9009\n              ignoreFilePattern:\n                - ".git"\n                - "./build"\n\n            # \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u989d\u5916\u540e\u6ce8\u5165\u7684\u73af\u5883\u53d8\u91cf\n            # type: object[]\n            # \u9ed8\u8ba4\u503c: {}\n            # \u53ef\u9009\n            env: \n            - name: DEBUG\n              value: "true"\n            - name: DOMAIN\n              value: "www.coding.com"\n\n            # \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u989d\u5916\u540e\u6ce8\u5165\u7684\u73af\u5883\u53d8\u91cf\uff08\u4f7f\u7528 env \u6587\u4ef6\uff09\n            # \u7c7b\u578b: object\n            # \u9ed8\u8ba4\u503c: {}\n            # \u53ef\u9009\n            envFrom:\n              envFile: \n                - path: dev.env\n                - path: dev.env\n\n            # \u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f\u540e\u81ea\u52a8\u8f6c\u53d1\u7684\u7aef\u53e3\u5217\u8868\n            # \u672c\u5730\u7aef\u53e3:\u8fdc\u7aef\u7aef\u53e3\n            # \u7c7b\u578b: string[]\n            # \u9ed8\u8ba4\u503c: []\n            # \u53ef\u9009\n            portForward:\n            - 3306:3306\n')))}m.isMDXComponent=!0}}]);