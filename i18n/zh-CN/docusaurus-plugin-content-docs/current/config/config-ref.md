# Config Reference

## Full Config Specs

```yaml
# Specify config properties
# type: object
# default value: {}
# required
configProperties:

  # config file version
  # type: string
  # default value: null
  # required
  version: v2

  # env file name, substitution variable for this file
  # type: string
  # default value: null
  # optional
  envFile: env.dev

application:

  # Application name
  # type: string(dns1123)
  # default value: null
  # required
  # nhctl param: [NAME]
  # uniq
  name: coding-agile

  # Application k8s manifest type
  # type: select，options：helmGit/helmRepo/rawManifest/rawManifestLocal/helmLocal
  # default value: null
  # required
  # nhctl param: --type,-t
  manifestType: rawManifest

  # Set default application version for helmRepo
  # type: string
  # deafult value: latest
  # optional
  helmVersion: 0.0.1

  # helmGit: chart path: relative path of git repo root.
  # helmLocal: chart path: relative path of local helm chart path.
  # helmRepo: no meaning
  # rawManifestGit: manifest files path: multi relative paths of git repo root
  # rawManifestLocal: manifest files path: multi relative paths of local application path
  # kustomizeGit: kustomize file path: relative path of git repo
  # kustomizeLocal: kustomize file path: multi relative paths of local application path
  # type: string[]
  # default value: ["."]
  # required
  resourcePath: []

  # helmGit: no meaning.
  # helmRepo: no meaning.
  # rawManifestGit: ignored manifest path: multi relative paths of git repo root.
  # rawManifestLocal: ignored manifest path: multi relative paths of local application path.
  # helmLocal: no meaning.
  # type: string[]
  # default value: ["."]
  # optional
  ignoredPath: []

  # The jobs to be executed before application's installation.
  # type: object[]
  # default value: []
  # optional
  onPreInstall: 

    # Job yaml file, the relative path of the repo root
    # type: string
    # required
    - path: "job-1.yaml"

      # Order of execution of job, The smaller the value, the first to execute
      # type: integer
      # default value: 0
      # optional
      weight: -1

    - path: "job-2.yaml"
      weight: 5

  # Overwrite helm values.yaml
  # type: object[]
  # default value: []
  # optional
  helmValues:
    - key: DOMAIN
      value: ${DOMAIN:-www.coding.com}
    - key: DEBUG
      value: ${DEBUG:-true}

  # Inject environment variable for all workload 
  # type: object[]
  # default value: []
  # optional
  env: 
    - name: DEBUG
      value: ${DEBUG:-true}
    - name: DOMAIN
      value: "www.coding.com"

  # Use envFile to inject environment variable for all workload 
  # If specify env and envFrom at the same time, then use intersection of them, and use env key as primary
  # type: object[]
  # default value: []
  # optional
  envFrom: 
    envFile: 
      - path: dev.env
      - path: dev.env

  # The Applicaion's micro services
  # type: object[]
  # default value: []
  # optional
  services:

    # Name of service, the name of workload in cluster
    # type: string
    # default value: null
    # required
    - name: e-coding

      # The Kubernetes Workloads type corresponding to the service
      # type: select, options: deployment/statefulset/pod/job/cronjob/daemonset case insensitive 
      # default value: deployment
      # required
      serviceType: deployment

      dependLabelSelector: 

        # Dependent Pods label selector (The service will not start until the Pods selected by selector being ready.)
        # type: string[]
        # default value: []
        # optional
        pods: 
          - "name=mariadb"
          - "app.kubernetes.io/name=mariadb"

        # Dependent Jobs label selector (The service will not start until the Jobs selected by selector completed.)
        # type: string[]
        # default value: []
        # optional
        jobs:
          - "job-name=init-job"
          - "app.kubernetes.io/name=init-job"

      containers:

        # When the Pod has multiple containers, specify the container name.
        # 指定配置文件属性
# 类型: 对象
# 默认值: {}
# 必须
configProperties:

  # 指定配置文件版本
  # 类型: string
  # 默认值: null
  # 必须
  version: v2

  # env 名称，在当前配置文件相同目录下
  # 类型: string
  # 默认值: null
  # 可选
  envFile: env.dev

application:
  # 应用名称
  # 类型: string(符合 dns1123 标准)
  # 默认值: null
  # 必须提供
  # 对应 nhctl 参数: [NAME]
  # 唯一
  name: coding-agile

  # 应用的 K8s manifest 类型
  # 类型: 单选，可选项：helmGit/helmRepo/rawManifest/rawManifestLocal/helmLocal
  # 默认值: null
  # 必须提供
  # 对应 nhctl 参数: --type,-t
  manifestType: rawManifest

  # 指定 helmRepo 类型应用默认的版本号
  # type: string
  # deafult value: latest
  # optional
  helmVersion: 0.0.1

  # helmGit: Chart 相对于 Git 仓库根目录的位置
  # helmRepo: 无含义
  # helmLocal: chart path: Chart 相对于本地应用目录仓库根目录的位置
  # rawManifestGit: k8s manifest 文件夹相对于 Git 仓库的位置
  # rawManifestLocal: k8s manifest 文件夹相对于本地应用目录的位置
  # kustomizeGit: k8s kustomize 文件夹相对于 Git 仓库的位置
  # kustomizeLocal: k8s kustomize 文件夹相对于本地应用目录的位置
  # 类型: string[]
  # 默认值: ["."]
  # 必须# 
  resourcePath: []

  # helmGit: 无含义
  # helmRepo: 无含义
  # rawManifest: 忽略的 k8s manifest 目录，相对于Git 仓库的位置
  # rawManifestLocal: 忽略的 k8s manifest 目录，相对于本地应用目录的位置
  # helmLocal: 无含义
  # 类型: string[]
  # 默认值: ["."]
  # 可选
  ignoredPath: []

  # 应用安装前的执行任务，须指定 k8s Job 的 yaml文件
  # 类型: object[]
  # 默认值: []
  # 可选
  onPreInstall: 

    # Job 的 yaml 文件, 相对于 Git 仓库的根目录
    # 类型: string
    # 必须提供
  - path: "job-1.yaml"

    # 执行顺序，越小越先执行
    # 类型: int
    # 默认值: 0
    # 可选
    weight: -1

  - path: "job-2.yaml"
    name: xxx2-job
    priority: 5

  # 仅针对 Helm 应用类型有效，覆写 values.yaml 指定值
  # 类型: object[]
  # 默认值: []
  # 可选
  helmValues:
    - key: DOMAIN
      value: ${DOMAIN:-www.coding.com}
    - key: DEBUG
      value: ${DEBUG:-true}

  # 应用安装时为所有工作负载注入环境变量
  # 类型: object[]
  # 默认值: []
  # 可选
  env: 
    - name: DEBUG
      value: ${DEBUG:-true}
    - name: DOMAIN
      value: "www.coding.com"

  # 应用安装时为所有工作负载注入环境变量（使用 env 文件）
  # 如果同时指定了 env 和 envFrom，那么取并集，交集部分以 env 为准
  # 类型: object[]
  # 默认值: []
  # 可选
  envFrom: 
    envFile: 
      - path: dev.env
      - path: dev.env

  # 应用内的微服务列表
  # 类型: object[]
  # 默认值: []
  # 可选
  services:

    # 微服务的名字,对应 Kubernetes 集群中的工作负载名称
    # 类型: string
    # 默认值: null
    # 必须
    - name: e-coding

      # 微服务对应的 k8s 工作负载类型
      # 类型: 单选, 可选项: deployment/statefulset/pod/job/cronjob/daemonset 大小写不敏感
      # 默认值: deployment
      # 必须
      serviceType: deployment

      # 服务所依赖的工作负载的标签选择器
      # 类型: object
      # 默认值: null
      # 可选
      dependLabelSelector: 

        # 指明依赖的 Pods 标签选择器 (当前服务会等待被标签选择器选中的 Pod 处于 Ready 状态才启动)
        # 类型: string[]
        # 默认值: []
        # 可选
        pods: 
          - "name=mariadb"
          - "app.kubernetes.io/name=mariadb"

        # 指明依赖的 Jobs 标签选择器 (当前服务会等待被标签选择器选中的 Job 执行完毕才启动)
        # 类型: string[]
        # 默认值: []
        # 可选
        jobs:
          - "job-name=init-job"
          - "app.kubernetes.io/name=init-job"

      containers:

        # 当 Pod 有多个容器时，则为需要开发的容器提供配置
        # 类型: string
        # 默认值: ""
        # 可选
        - name: coding

          # 执行容器的安装参数
          # 类型: object
          # 默认值: {}
          # 可选
          install: 

            # 当应用被安装时，为指定容器注入环境变量
            # 类型: object[]
            # 默认值: []
            # 可选
            env: 
              - name: DEBUG
                value: "true"
              - name: DOMAIN
                value: "www.coding.com"

            # 当应用被安装时，为指定容器注入环境变量（使用 env 文件）
            # 如果同时指定了 env 和 envFrom，那么取并集，交集部分以 env 为准
            # 类型: object[]
            # 默认值: []
            # 可选
            envFrom: 
              envFile: 
                - path: dev.env
                - path: dev.env

            # 应用被安装后自动转发的端口列表
            # 本地端口:远端端口
            # 类型: string[]
            # 默认值: []
            # 可选
            portForward:
              - 3306:3306

          # 指定开发参数配置
          # 类型: object
          # 默认值: {}
          # 必须
          dev:

            # 微服务的源码 Git 仓库地址
            # 类型: string
            # 默认值: null
            # 必须
            gitUrl: xxx-job

            # 微服务的 DevContainer 镜像
            # 类型: string
            # 默认值: null
            # 必须
            image: java:8-jdk

            # 进入 DevMode 时，默认的 shell 环境
            # 类型: string
            # 默认值: "/bin/sh"
            # 可选
            shell: "bash"

            # 指定 DevContainer 的工作目录，源码会被传输到此目录
            # 类型: string
            # 默认值: "/home/nocalhost-dev"
            # 可选
            workDir: "/root/nocalhost-dev"

            # 指定 DevContainer 的资源申请和限制，配置信息符合 Kubernetes 对资源限定的约定
            # 类型: object
            # 默认值: {}
            # 可选
            resources:
              limits:
                cpu: "1"
                memory: 1Gi
              requests:
                cpu: "0.5"
                memory: 512Mi

            # 指定 K8s Persistent Volume 的 stoargeClass
            # storage of pv
            # 类型: string
            # 默认值: null
            # 可选
            storageClass: "cbs"

            # DevContainer 中需要持久化存储的目录列表
            # 类型: string[]
            # 默认值: ["/home/nocalhost-dev"]
            # 可选
            persistentVolumeDirs: 

              # 开发容器中要持久化的目录路径
              # 类型: string
              # 默认值: null
              # 必填
              - path: "/root"

                # 目录的容量，符合 k8s 标准写法
                # 类型: string
                # 默认值: 10Gi
                # 可选
                capacity: 100Gi

            # 指定编辑器插件的运行命令(暂未实现，未来支持)
            # 类型: object
            # 默认值: {}
            # 可选
            command: 

              # 在源码根目录下执行的构建编译命令
              # 类型: string
              # 默认值: ""
              # 可选
              build: ["./gradlew", "package"]

              # 在源码根目录下执行的启动服务命令
              # 类型: string
              # 默认值: ""
              # 可选
              run: ["./gradlew", "bootRun"]

              # 在源码根目录下执行的启动调试服务命令
              # 类型: string
              # 默认值: ""
              # 可选
              debug: ["./gradlew", "bootRun", "--debug-jvm"]

              # 在源码根目录下执行的支持热加载的启动服务命令
              # 类型: string
              # 默认值: ""
              # 可选
              hotReloadRun: ["bash", "-c", "kill `ps -ef|grep -i gradlew| grep -v grep| awk '{print $2}'`; gradlew bootRun"]

              # 在源码根目录下执行的支持热加载的启动调试服务命令
              # 类型: string
              # 默认值: ""
              # 可选
              hotReloadDebug: ["bash", "-c", "kill `ps -ef|grep -i gradlew| grep -v grep| awk '{print $2}'`; gradlew bootRun --debug-jvm"]

            # 指定编辑器插件 debug 参数(暂未实现，未来支持)
            # 类型: object
            # 默认值: {}
            # 可选
            debug: 

              # 指定远程调试端口
              # 类型: int
              # 默认值: null
              # 可选
              remoteDebugPort: 5005

            # 使用 Git 仓库中的 .dev-container 声明来指定 DevContainer 镜像 (暂未实现，未来支持)
            # 类型: string
            # 默认值: ""
            # 可选
            useDevContainer: false

            # 指定进入开发模式后的文件同步参数
            # 类型: object
            # 默认值: {}
            # 可选
            sync: 

              # 文件同步模式
              # "send" 单向同步本地文件到容器, "sendreceive" 双向同步
              # 类型: 单选，send/sendreceive
              # 默认值: "send"
              # 可选
              type: send

              # 在开发模式下要同步的目录列表
              # 类型: string[]
              # 默认值: ["."]
              # 可选
              filePattern: 
                - "./src"
                - "./pkg/fff"

              # 在开发模式下要忽略同步的目录列表
              # 类型: string[]
              # 默认值: []
              # 可选
              ignoreFilePattern:
                - ".git"
                - "./build"

            # 进入开发模式额外后注入的环境变量
            # type: object[]
            # 默认值: {}
            # 可选
            env: 
            - name: DEBUG
              value: "true"
            - name: DOMAIN
              value: "www.coding.com"

            # 进入开发模式额外后注入的环境变量（使用 env 文件）
            # 类型: object
            # 默认值: {}
            # 可选
            envFrom:
              envFile: 
                - path: dev.env
                - path: dev.env

            # 进入开发模式后自动转发的端口列表
            # 本地端口:远端端口
            # 类型: string[]
            # 默认值: []
            # 可选
            portForward:
            - 3306:3306
              # optional
              filePattern: 
                - "./src"
                - "./pkg/fff"

              # List of ignored files and directories to be synchronized to DevContainer
              # type: string[]
              # default value: []
              # optional
              ignoreFilePattern:
                - ".git"
                - "./build"

            # Specify dev mode environment parameters
            # type: object[]
            # default value: {}
            # optional
            env: 
            - name: DEBUG
              value: "true"
            - name: DOMAIN
              value: "www.coding.com"

            # Use env file to specify dev mode environment parameters
            # type: object
            # default value: {}
            # optional
            envFrom:
              envFile: 
                - path: dev.env
                - path: dev.env

            # Ports to be forwarded to local when enter devMode
            # localPort:remotePort
            # type: string[]
            # default value: []
            # optional
            portForward:
            - 3306:3306
```

## Configuration Structure

```yaml
configProperties: ...           # struct    | required | Specify config properties

application: ...                # struct    | required | Specify application configuration
```

## `configProperties`

```yaml
configProperties:               
    version: v2                 # string    | required | config file version
    envFile: null               # string    | optional | env file name, substitution variable for this file
```

## `application`

**Application** is a concept of Nocalhost. An application consists of a set of [Kubernetes manifests](https://kubernetes.io/docs/reference/glossary/?all=true#term-manifest). These manifests contain resources descriptions of all the components you want to deploy. An application consists of a set of [Kubernetes manifests](https://kubernetes.io/docs/reference/glossary/?all=true#term-manifest). These manifests contain resources descriptions of all the components you want to deploy.

Nocalhost allows you to customize the deployment and development of these components.

```yaml
application:                    
    name: foo-app               # string    | required | Application name
    manifestType: rawManifest   # string    | required | Application k8s manifest type
    resourcePath: []            # string[]  | required | Set the application resource path
    helmVersion: 0.0.1          # string    | optional | Set default application version for helmRepo
    helmValues: ...             # struct    | optional | Overwrite Helm values.yaml
    ignoredPath: []             # string[]  | optional | 
    onPreInstall: ...           # struct    | optional | The jobs to be executed before application's installation.
    env: ...                    # struct    | optional | Inject environment variable for all workload when installed
    envFrom: ...                # struct    | optional | Use envFile to inject environment variable for all workload when installed
    services: ...               # struct    | optional | Applications' services configurations
    env: ...                    # struct    | optional | Inject environment variable for all workload when installed
    envFrom: ...                # struct    | optional | Use envFile to inject environment variable for all workload when installed
    services: ...               # struct    | optional | Applications' services configurations
```

### `application.onPreInstall`

```yaml
onPreInstall:
    - path: ""                  # string    | required | Job's yaml file, the relative path of the root directory
      weight: 0                 # integer   | required | Order of execution of job, the smallest will be executed first
```

[Read more about how to set up pre-install configurations ](./config-deploy#run-jobs-before-installing-the-application)

### `application.helmVersion` and `application.helmValues`

```yaml
helmValues:
    - kye: ""                   # string    | The Helm chart value key
      value: ""                 # string    | The Helm chart values
```

[Read more to learn how to configure Helm application deployment](./config-deploy-helm)

### `application.env` and `application.envFrom`

```yaml
env: []

envFrom:
    envFile: []                 # string[]  | optional | Use envFile to inject environment variable for all workload 
```

[Read more about how to set up environment variables](./config-deploy#inject-environment-variable-to-workloads)

### `application.services`

A Kubernetes application of microservice architecture consists of multiple microservices in the broad sense. Each microservice is a [Kubernetes workload](https://kubernetes.io/docs/concepts/workloads/) in the narrow sense. Each microservice is a [Kubernetes workload](https://kubernetes.io/docs/concepts/workloads/) in the narrow sense.

Nocalhost inherits this concept, and the `Services` here corresponds to the microservices in the application. Therefore, Nocalhost's `Service` can be seen as an enhancement to Kubernetes workload. Therefore, Nocalhost's `Service` can be seen as an enhancement to Kubernetes workload.

`services` gives you the options to configure the workloads that give you better deployment and development experiences.

```yaml
services:
    - name: ""                      # string    | required | Name of the workload, also is the display name in cluster
      serviceType: ""               # string    | required | The Kubernetes Workloads type corresponding to the service
      dependLabelSelector: ...      # struct    | optional | Dependent Pods label selector 
      container: ...                # struct    | optional | 
```

:::caution Optional `Service` configurations are not essential, it will not affect the usage of Nocalhost without configuring it. ::: :::

[Read more to learn how to configure `services`](./config-services)