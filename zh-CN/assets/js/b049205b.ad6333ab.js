"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[8353],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),h=a,u=m["".concat(s,".").concat(h)]||m[h]||p[h]||i;return t?o.createElement(u,r(r({ref:n},d),{},{components:t})):o.createElement(u,r({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9255:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var o=t(2122),a=t(9756),i=(t(7294),t(3905)),r=["components"],l={title:"workloads"},s="How Does Nocalhost Handle Different Workloads?",c={unversionedId:"config/config-dev-workload",id:"config/config-dev-workload",isDocsHomePage:!1,title:"workloads",description:"Nocalhost supports to development of all types of Kubernetes workloads. The following shows how does Nocalhost handle different workloads when starting DevMode.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/config/config-dev-workload.md",sourceDirName:"config",slug:"/config/config-dev-workload",permalink:"/zh-CN/docs/config/config-dev-workload",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{title:"workloads"}},d=[{value:"Deployment",id:"deployment",children:[]},{value:"StatefulSet",id:"statefulset",children:[]},{value:"DaemonSet",id:"daemonset",children:[]},{value:"Job",id:"job",children:[]},{value:"CronJob",id:"cronjob",children:[]},{value:"Pod",id:"pod",children:[]}],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-does-nocalhost-handle-different-workloads"},"How Does Nocalhost Handle Different Workloads?"),(0,i.kt)("p",null,"Nocalhost supports to development of all types of Kubernetes workloads. The following shows how does Nocalhost handle different workloads when starting DevMode."),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Development")," type workload entering DevMode process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Reduce the Pod replicate to 1"),(0,i.kt)("li",{parentName:"ol"},"Modify manifest definition in ",(0,i.kt)("inlineCode",{parentName:"li"},".spec"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Save the original ",(0,i.kt)("inlineCode",{parentName:"li"},".spec")," in the annotation to restore the original workload when exiting DevMode"),(0,i.kt)("li",{parentName:"ul"},"Replace the specified container's image to DevImage, and change the container's name to ",(0,i.kt)("inlineCode",{parentName:"li"},"nocalhost-dev")),(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"nocalhost-sidecar")," container for file synchronization"),(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"emptyDir")," volume called ",(0,i.kt)("inlineCode",{parentName:"li"},"nocalhost-shared-volume")," and mount it to ",(0,i.kt)("inlineCode",{parentName:"li"},"workDir")," directory of ",(0,i.kt)("inlineCode",{parentName:"li"},"nocalhost-dev")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"nocalhost-sidecar")," containers"),(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"secret")," volume to store ",(0,i.kt)("inlineCode",{parentName:"li"},"syncthing")," certificate and configurations"),(0,i.kt)("li",{parentName:"ul"},"Mount the ",(0,i.kt)("inlineCode",{parentName:"li"},"secret")," volume to ",(0,i.kt)("inlineCode",{parentName:"li"},"nocalhost-sidecar")," container"),(0,i.kt)("li",{parentName:"ul"},"Disable all probes of the container and ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"},(0,i.kt)("inlineCode",{parentName:"a"},"Security Context"))))),(0,i.kt)("li",{parentName:"ol"},"Enabled port-forwarding. Forward a random local port to the port monitored by ",(0,i.kt)("inlineCode",{parentName:"li"},"syhcthing")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"nocalhost-sidecar")),(0,i.kt)("li",{parentName:"ol"},"Execute ",(0,i.kt)("inlineCode",{parentName:"li"},"syncthing")," client, monitors the local source code directory and synchronizes the code changes in local to the remote container.")),(0,i.kt)("p",null,"The second step is to modify the manifest of the Deployment. The following example using the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviews")," service in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nocalhost/bookinfo"},"`bookinfo'"),", to compare its manifest change before and after entering DevMode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Before entering DevMode"',title:'"Before',entering:!0,'DevMode"':!0},'\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  annotations:\n    deployment.kubernetes.io/revision: "1"\n    dev.nocalhost/application-name: bookinfo\n    dev.nocalhost/application-namespace: nh6bxsw\n  generation: 1\n  labels:\n    app: reviews\n    app.kubernetes.io/managed-by: nocalhost\n  name: reviews\nspec:\n  progressDeadlineSeconds: 600\n  replicas: 1\n  revisionHistoryLimit: 10\n  selector:\n    matchLabels:\n      app: reviews\n  strategy:\n    rollingUpdate:\n      maxSurge: 25%\n      maxUnavailable: 25%\n    type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app: reviews\n    spec:\n      containers:\n        - env:\n            - name: LOG_DIR\n              value: /tmp/logs\n          image: codingcorp-docker.pkg.coding.net/nocalhost/bookinfo/reviews:latest\n          imagePullPolicy: Always\n          name: reviews\n          ports:\n            - containerPort: 9080\n              protocol: TCP\n          readinessProbe:\n            failureThreshold: 3\n            initialDelaySeconds: 5\n            periodSeconds: 10\n            successThreshold: 1\n            tcpSocket:\n              port: 9080\n            timeoutSeconds: 1\n          resources: {}\n          terminationMessagePath: /dev/termination-log\n          terminationMessagePolicy: File\n          volumeMounts:\n            - mountPath: /tmp\n              name: tmp\n            - mountPath: /opt/ibm/wlp/output\n              name: wlp-output\n      dnsPolicy: ClusterFirst\n      restartPolicy: Always\n      schedulerName: default-scheduler\n      securityContext: {}\n      terminationGracePeriodSeconds: 30\n      volumes:\n        - emptyDir: {}\n          name: wlp-output\n        - emptyDir: {}\n          name: tmp\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{9,41,43,71,101,102} title="After entering DevMode"',"{9,41,43,71,101,102}":!0,title:'"After',entering:!0,'DevMode"':!0},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  annotations:\n    deployment.kubernetes.io/revision: "2"\n    dev.nocalhost/application-name: bookinfo\n    dev.nocalhost/application-namespace: nh6bxsw\n    # The following option records the definition of the workload before entering DevMode, and restore the workload to its original state when end DevMode\n    nocalhost.origin.spec.json: \'{"replicas":1,"selector":{"matchLabels":{"app":"reviews"}},"template":{"metadata":{"creationTimestamp":null,"labels":{"app":"reviews"}},"spec":{"volumes":[{"name":"wlp-output","emptyDir":{}},{"name":"tmp","emptyDir":{}}],"containers":[{"name":"reviews","image":"codingcorp-docker.pkg.coding.net/nocalhost/bookinfo/reviews:latest","ports":[{"containerPort":9080,"protocol":"TCP"}],"env":[{"name":"LOG_DIR","value":"/tmp/logs"}],"resources":{},"volumeMounts":[{"name":"tmp","mountPath":"/tmp"},{"name":"wlp-output","mountPath":"/opt/ibm/wlp/output"}],"readinessProbe":{"tcpSocket":{"port":9080},"initialDelaySeconds":5,"timeoutSeconds":1,"periodSeconds":10,"successThreshold":1,"failureThreshold":3},"terminationMessagePath":"/dev/termination-log","terminationMessagePolicy":"File","imagePullPolicy":"Always"}],"restartPolicy":"Always","terminationGracePeriodSeconds":30,"dnsPolicy":"ClusterFirst","securityContext":{},"schedulerName":"default-scheduler"}},"strategy":{"type":"RollingUpdate","rollingUpdate":{"maxUnavailable":"25%","maxSurge":"25%"}},"revisionHistoryLimit":10,"progressDeadlineSeconds":600}\'\n  generation: 2\n  labels:\n    app: reviews\n    app.kubernetes.io/managed-by: nocalhost\n  name: reviews\n  namespace: nh6bxsw\nspec:\n  progressDeadlineSeconds: 600\n  replicas: 1\n  revisionHistoryLimit: 10\n  selector:\n    matchLabels:\n      app: reviews\n  strategy:\n    rollingUpdate:\n      maxSurge: 25%\n      maxUnavailable: 25%\n    type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app: reviews\n    spec:\n      containers:\n        - command:\n            - /bin/sh\n            - -c\n            - tail -f /dev/null\n          env:\n            - name: LOG_DIR\n              value: /tmp/logs\n          image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:latest # The original image has replaced by DevImage\n          imagePullPolicy: Always\n          name: nocalhost-dev # The original review container\'s name will be change to nocalhost-dev after entering the DevMode\n          ports:\n            - containerPort: 9080\n              protocol: TCP\n          resources: {}\n          terminationMessagePath: /dev/termination-log\n          terminationMessagePolicy: File\n          volumeMounts:\n            - mountPath: /tmp\n              name: tmp\n            - mountPath: /opt/ibm/wlp/output\n              name: wlp-output\n            - mountPath: /var/syncthing\n              name: nocalhost-syncthing\n              subPath: syncthing\n            - mountPath: /var/syncthing/secret\n              name: nocalhost-syncthing-secret\n            - mountPath: /home/nocalhost-dev\n              name: nocalhost-shared-volume\n          workingDir: /home/nocalhost-dev\n        - args:\n            - unset STGUIADDRESS && cp /var/syncthing/secret/* /var/syncthing/\n              && /bin/entrypoint.sh && /bin/syncthing -home /var/syncthing\n          command:\n            - /bin/sh\n            - -c\n          image: codingcorp-docker.pkg.coding.net/nocalhost/public/nocalhost-sidecar:syncthing\n          imagePullPolicy: Always\n          name: nocalhost-sidecar # both nocalhost-sidecar and nocalhost-dev mount nocalhost-shared-volume volume, which used for file synchronization\n          resources:\n            limits:\n              cpu: "1"\n              memory: 1Gi\n            requests:\n              cpu: 100m\n              memory: 50Mi\n          terminationMessagePath: /dev/termination-log\n          terminationMessagePolicy: File\n          volumeMounts:\n            - mountPath: /var/syncthing\n              name: nocalhost-syncthing\n              subPath: syncthing\n            - mountPath: /var/syncthing/secret\n              name: nocalhost-syncthing-secret\n            - mountPath: /home/nocalhost-dev\n              name: nocalhost-shared-volume\n          workingDir: /home/nocalhost-dev\n      dnsPolicy: ClusterFirst\n      restartPolicy: Always\n      schedulerName: default-scheduler\n      securityContext: {}\n      terminationGracePeriodSeconds: 30\n      volumes:\n        - emptyDir: {}\n          name: wlp-output\n        - emptyDir: {}\n          name: tmp\n        - emptyDir: {}\n          name: nocalhost-syncthing # the volume using by syncthing\n        - name: nocalhost-syncthing-secret # Mount the syncthing certificate and configuration saved in the Secret into nocalhost-sidecar container\n          secret:\n            defaultMode: 448\n            items:\n              - key: config.xml\n                mode: 448\n                path: config.xml\n              - key: cert.pem\n                mode: 448\n                path: cert.pem\n              - key: key.pem\n                mode: 448\n                path: key.pem\n            secretName: reviews-deployment-nocalhost-syncthing-secret\n        - emptyDir: {}\n          name: nocalhost-shared-volume\n')),(0,i.kt)("h2",{id:"statefulset"},"StatefulSet"),(0,i.kt)("p",null,"The process of ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSet")," entering the DevMode is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Reduce the Pod replicate to 1"),(0,i.kt)("li",{parentName:"ol"},"Modify the definition of manifest in ",(0,i.kt)("inlineCode",{parentName:"li"},".spec")," (Refer to ",(0,i.kt)("a",{parentName:"li",href:"#deployment"},(0,i.kt)("inlineCode",{parentName:"a"},"Deployment")),")"),(0,i.kt)("li",{parentName:"ol"},"Start a port-forwarding, forward a random local port to the port monitored by ",(0,i.kt)("inlineCode",{parentName:"li"},"syncthing")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"nocalhost-sidecar")),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"syncthing")," client, monitor local source code directory. Synchronize the changes in the local directory to the remote container.")),(0,i.kt)("h2",{id:"daemonset"},"DaemonSet"),(0,i.kt)("p",null,"The process of DamonSet entering DevMode:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Reduce the Pod replicate to 0. Since ",(0,i.kt)("inlineCode",{parentName:"li"},"DaemonSet\u2019s")," Pod runs one on each node, therefore can not identify the number of Pods. You can only set the ",(0,i.kt)("inlineCode",{parentName:"li"},"nodeSelector")," to a non-existent node and indirectly change the number of Pods to 0."),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"DaemonSet"),"'s ",(0,i.kt)("inlineCode",{parentName:"li"},".spec")," to generate a ",(0,i.kt)("inlineCode",{parentName:"li"},"Deployment"),", modify the definition of ",(0,i.kt)("inlineCode",{parentName:"li"},".spec")," manifest in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Deployment")," (Refer to ",(0,i.kt)("a",{parentName:"li",href:"#deployment"},"Deployment")," above for specific modifications)."),(0,i.kt)("li",{parentName:"ol"},"Start a port-forwarding, forward a random local port to the port monitored by ",(0,i.kt)("inlineCode",{parentName:"li"},"syncthing")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"nocalhost-sidecar")),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"syncthing")," client, monitor local source code directory. Synchronize the changes in the local directory to the remote container.")),(0,i.kt)("h2",{id:"job"},"Job"),(0,i.kt)("p",null,"The process of Job entering DevMode:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use the Job's ",(0,i.kt)("inlineCode",{parentName:"li"},".spec")," to generate a new Job, modify the definition of the ",(0,i.kt)("inlineCode",{parentName:"li"},".spec")," manifest in the Job (Refer to ",(0,i.kt)("a",{parentName:"li",href:"#deployment"},"Deployment")," above for specific modifications)."),(0,i.kt)("li",{parentName:"ol"},"Start a port-forwarding, forward a random local port to the port monitored by ",(0,i.kt)("inlineCode",{parentName:"li"},"syncthing")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"nocalhost-sidecar")),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"syncthing")," client, monitor local source code directory. Synchronize the changes in the local directory to the remote container.")),(0,i.kt)("h2",{id:"cronjob"},"CronJob"),(0,i.kt)("p",null,"The process of CronJob entering DevMode:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},".spec.schedule")," of CronJob to ",(0,i.kt)("inlineCode",{parentName:"li"},'"1 1 1 1 1"')," to disable the scheduling of timed tasks"),(0,i.kt)("li",{parentName:"ol"},"Use CronJob's ",(0,i.kt)("inlineCode",{parentName:"li"},".spec.jobTemplate")," to generate a new Job and modify the definition of ",(0,i.kt)("inlineCode",{parentName:"li"},".spec")," manifest in the job (Refer to Deployment above for specific modifications)"),(0,i.kt)("li",{parentName:"ol"},"Start a port-forwarding, forward a random local port to the port monitored by ",(0,i.kt)("inlineCode",{parentName:"li"},"syncthing")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"nocalhost-sidecar")),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"syncthing")," client, monitor local source code directory. Synchronize the changes in the local directory to the remote container.")),(0,i.kt)("h2",{id:"pod"},"Pod"),(0,i.kt)("p",null,"The process of Pod entering DevMode:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Modify the definition of .spec manifest in the Pod (Refer to Deployment above for specific modifications)"),(0,i.kt)("li",{parentName:"ol"},"Delete the original Pod and create a new Pod with the modified ",(0,i.kt)("inlineCode",{parentName:"li"},".spec")),(0,i.kt)("li",{parentName:"ol"},"Start a port-forwarding, forward a random local port to the port monitored by ",(0,i.kt)("inlineCode",{parentName:"li"},"syncthing")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"nocalhost-sidecar")),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"syncthing")," client, monitor local source code directory. Synchronize the changes in the local directory to the remote container.")))}m.isMDXComponent=!0}}]);