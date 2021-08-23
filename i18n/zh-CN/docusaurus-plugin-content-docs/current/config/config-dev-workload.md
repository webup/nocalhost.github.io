---
title: workloads
---

# How Does Nocalhost DevMode Works?

Nocalhost supports to development of all types of Kubernetes workloads. The following are the working principles. The following are the working principles.

## Deployment

Development process:

1. Reduce the Pod replicate to 1
2. Modify manifest definition in `.spec`:
    - Save the original `.spec` in the annotation to restore the original workload when exiting DevMode
    - Replace the specified container's image to DevImage, and change the container's name to `nocalhost-dev`
    - Add a `nocalhost-sidecar` container for file synchronization
    - Create a `emptyDir` volume called `nocalhost-shared-volume` and mount it to `workDir` directory of `nocalhost-dev` and `nocalhost-sidecar` containers
    - Create a `secret` volume to store `syncthing` certificate and configurations
    - Mount the `secret` volume to `nocalhost-sidecar` container
    - Disable all probes of the container and [`Security Context`](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/)
3. Enabled port-forwarding. Enabled port-forwarding. Forward a random local port to the port monitored by `syhcthing` in `nocalhost-sidecar`
4. Execute `syncthing` client, monitors the local source code directory and synchronizes the code changes in local to the remote container.

The second step is to modify the manifest of the Deployment. The second step is to modify the manifest of the Deployment. The following example using the `review` service in [`bookinfo'](https://github.com/nocalhost/bookinfo), to compare its manifest change before and after entering DevMode:

```yaml title="Before entering DevMode"
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    deployment.kubernetes.io/revision: "1"
    dev.nocalhost/application-name: bookinfo
    dev.nocalhost/application-namespace: nh6bxsw
  generation: 1
  labels:
    app: reviews
    app.kubernetes.io/managed-by: nocalhost
  name: reviews
spec:
  progressDeadlineSeconds: 600
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: reviews
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: reviews
    spec:
      containers:
        - env:
            - name: LOG_DIR
              value: /tmp/logs
          image: codingcorp-docker.pkg.coding.net/nocalhost/bookinfo/reviews:latest
          imagePullPolicy: Always
          name: reviews
          ports:
            - containerPort: 9080
              protocol: TCP
          readinessProbe:
            failureThreshold: 3
            initialDelaySeconds: 5
            periodSeconds: 10
            successThreshold: 1
            tcpSocket:
              port: 9080
            timeoutSeconds: 1
          resources: {}
          terminationMessagePath: /dev/termination-log
          terminationMessagePolicy: File
          volumeMounts:
            - mountPath: /tmp
              name: tmp
            - mountPath: /opt/ibm/wlp/output
              name: wlp-output
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      terminationGracePeriodSeconds: 30
      volumes:
        - emptyDir: {}
          name: wlp-output
        - emptyDir: {}
          name: tmp
```

```yaml {9,41,43,71,101,102} title="After entering DevMode"
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    deployment.kubernetes.io/revision: "2"
    dev.nocalhost/application-name: bookinfo
    dev.nocalhost/application-namespace: nh6bxsw
    # The following option records the definition of the workload before entering DevMode, and restore the workload to its original state when end DevMode
    nocalhost.origin.spec.json: '{"replicas":1,"selector":{"matchLabels":{"app":"reviews"}},"template":{"metadata":{"creationTimestamp":null,"labels":{"app":"reviews"}},"spec":{"volumes":[{"name":"wlp-output","emptyDir":{}},{"name":"tmp","emptyDir":{}}],"containers":[{"name":"reviews","image":"codingcorp-docker.pkg.coding.net/nocalhost/bookinfo/reviews:latest","ports":[{"containerPort":9080,"protocol":"TCP"}],"env":[{"name":"LOG_DIR","value":"/tmp/logs"}],"resources":{},"volumeMounts":[{"name":"tmp","mountPath":"/tmp"},{"name":"wlp-output","mountPath":"/opt/ibm/wlp/output"}],"readinessProbe":{"tcpSocket":{"port":9080},"initialDelaySeconds":5,"timeoutSeconds":1,"periodSeconds":10,"successThreshold":1,"failureThreshold":3},"terminationMessagePath":"/dev/termination-log","terminationMessagePolicy":"File","imagePullPolicy":"Always"}],"restartPolicy":"Always","terminationGracePeriodSeconds":30,"dnsPolicy":"ClusterFirst","securityContext":{},"schedulerName":"default-scheduler"}},"strategy":{"type":"RollingUpdate","rollingUpdate":{"maxUnavailable":"25%","maxSurge":"25%"}},"revisionHistoryLimit":10,"progressDeadlineSeconds":600}'
  generation: 2
  labels:
    app: reviews
    app.kubernetes.io/managed-by: nocalhost
  name: reviews
  namespace: nh6bxsw
spec:
  progressDeadlineSeconds: 600
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: reviews
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: reviews
    spec:
      containers:
        - command:
            - /bin/sh
            - -c
            - tail -f /dev/null
          env:
            - name: LOG_DIR
              value: /tmp/logs
          image: codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:latest # The original image has replaced by DevImage
          imagePullPolicy: Always
          name: nocalhost-dev # The original review container's name will be change to nocalhost-dev after entering the DevMode
          ports:
            - containerPort: 9080
              protocol: TCP
          resources: {}
          terminationMessagePath: /dev/termination-log
          terminationMessagePolicy: File
          volumeMounts:
            - mountPath: /tmp
              name: tmp
            - mountPath: /opt/ibm/wlp/output
              name: wlp-output
            - mountPath: /var/syncthing
              name: nocalhost-syncthing
              subPath: syncthing
            - mountPath: /var/syncthing/secret
              name: nocalhost-syncthing-secret
            - mountPath: /home/nocalhost-dev
              name: nocalhost-shared-volume
          workingDir: /home/nocalhost-dev
        - args:
            - unset STGUIADDRESS && cp /var/syncthing/secret/* /var/syncthing/
              && /bin/entrypoint.sh && /bin/syncthing -home /var/syncthing
          command:
            - /bin/sh
            - -c
          image: codingcorp-docker.pkg.coding.net/nocalhost/public/nocalhost-sidecar:syncthing
          imagePullPolicy: Always
          name: nocalhost-sidecar # both nocalhost-sidecar and nocalhost-dev mount nocalhost-shared-volume volume, which used for file synchronization
          resources:
            limits:
              cpu: "1"
              memory: 1Gi
            requests:
              cpu: 100m
              memory: 50Mi
          terminationMessagePath: /dev/termination-log
          terminationMessagePolicy: File
          volumeMounts:
            - mountPath: /var/syncthing
              name: nocalhost-syncthing
              subPath: syncthing
            - mountPath: /var/syncthing/secret
              name: nocalhost-syncthing-secret
            - mountPath: /home/nocalhost-dev
              name: nocalhost-shared-volume
          workingDir: /home/nocalhost-dev
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      terminationGracePeriodSeconds: 30
      volumes:
        - emptyDir: {}
          name: wlp-output
        - emptyDir: {}
          name: tmp
        - emptyDir: {}
          name: nocalhost-syncthing # the volume using by syncthing
        - name: nocalhost-syncthing-secret # Mount the syncthing certificate and configuration saved in the Secret into nocalhost-sidecar container
          secret:
            defaultMode: 448
            items:
              - key: config.xml
                mode: 448
                path: config.xml
              - key: cert.pem
                mode: 448
                path: cert.pem
              - key: key.pem
                mode: 448
                path: key.pem
            secretName: reviews-deployment-nocalhost-syncthing-secret
        - emptyDir: {}
          name: nocalhost-shared-volume
```

## StatefulSet

StatefulSet 进入开发模式的逻辑基本和 Deployment 一致：

1. Reduce the Pod replicate to 1
2. 修改 .spec 中 manifest 的定义 （具体内容可以参考 Deployment）
3. 启用一个端口转发，将本地的某个随机端口转发到 nocalhost-sidecar 中 syncthing 监听的端口中去
4. 运行 syncthing 的客户端，监测本地源码目录，将本地目录中的改动同步到远端容器中去 Synchronizes the changes in the local directory to the remote container.

## DaemonSet

DamonSet 进入开发模式的流程：

1. 将 Pod 数量缩减为 0，由于 DaemonSet 的 Pod 是每个 node 上会跑一个，没有办法显式地设置 Pod 的数量，只能将 nodeSelector 设置成一个不存在的 node，间接地让 Pod 数量变 0 You can only set the nodeSelector to a non-existent node and indirectly change the number of Pods to 0.
2. 使用 DaemonSet 的 .spec 生成一个 Deployment， 修改 Deployment 中 .spec manifest 的定义（具体修改内容可以参考 Deployment）
3. 启用一个端口转发，将本地的某个随机端口转发到 nocalhost-sidecar 中 syncthing 监听的端口中去
4. 运行 syncthing 的客户端，监测本地源码目录，将本地目录中的改动同步到远端容器中去 Synchronizes the changes in the local directory to the remote container.

## Job

Job 进入开发模式的流程：

1. 使用 Job 的 .spec 生成一个新的 Job， 修改 Job 中 .spec manifest 的定义（具体修改内容可以参考 Deployment）
3. 启用一个端口转发，将本地的某个随机端口转发到 nocalhost-sidecar 中 syncthing 监听的端口中去
4. 运行 syncthing 的客户端，监测本地源码目录，将本地目录中的改动同步到远端容器中去 Synchronizes the changes in the local directory to the remote container.

## CronJob

CronJob 进入开发模式的流程：

1. 将 CronJob 的 .spec.schedule 设置为 ""1 1 1 1 1"，禁用掉定时任务的调度
2. 使用 CronJob 的 .spec.jobTemplate 生成一个新的 Job， 修改 Job 中 .spec manifest 的定义（具体修改内容可以参考 Deployment）
3. 启用一个端口转发，将本地的某个随机端口转发到 nocalhost-sidecar 中 syncthing 监听的端口中去
4. 运行 syncthing 的客户端，监测本地源码目录，将本地目录中的改动同步到远端容器中去 Synchronizes the changes in the local directory to the remote container.

## Pod

Pod 进入开发模式的流程：

1. 修改 Pod 中 .spec manifest 的定义（具体修改内容可以参考 Deployment）
2. 删除原来的 Pod，使用修改后的 .spec 创建一个新的 Pod
3. 启用一个端口转发，将本地的某个随机端口转发到 nocalhost-sidecar 中 syncthing 监听的端口中去
4. 运行 syncthing 的客户端，监测本地源码目录，将本地目录中的改动同步到远端容器中去 Synchronizes the changes in the local directory to the remote container.