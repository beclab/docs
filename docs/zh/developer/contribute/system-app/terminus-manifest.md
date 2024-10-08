---
outline: [2, 3]
---

# TerminusManifest.yaml

## permission

如果需要调用 provider 的接口，可修改 TerminusManifest.yaml 文件，在 permissions 下增加

```Yaml
permission:
  sysData:
  - dataType: app
    group: service.bfl
    version: v1
    ops:
    - InstallDevApp
```

## env 引用变量

    然后在 deployment 的 env 中引用变量

```Yaml
env:
  - name: OS_APP_KEY
    value: {{ .Values.os.appKey }}   # 注意这个地方在提交install wizard时需要修改成 .Values.os.desktop.appKey
  - name: OS_APP_SECRET
    value: {{ .Values.os.appSecret }} # 注意这个地方在提交install wizard时需要修改成 .Values.os.desktop.appSecret
  - name: OS_SYSTEM_SERVER
    value: system-server.user-system-{{ .Values.bfl.username }}
```

## 完整 TerminusManifest.yaml 例子

```Yaml
terminusManifest.version: v1
terminusManifest.type: app
metadata:
  name: desktop
  icon: https://file.bttcdn.com/appstore/default/defaulticon.webp
  description: app desktop
  appid: desktop
  title: desktop
  version: 0.0.2
  categories:
  - dev
entrances:
- name: desktop-frontend-dev
  host: desktop-svc-dev
  port: 80
  icon: https://file.bttcdn.com/appstore/default/defaulticon.webp
  title: Desktop-dev
  authLevel: private
  openMethod: default
spec:
  versionName: 0.0.1
  requiredMemory: 2Gi
  requiredDisk: 50Mi
  supportArch:
  - amd64
  requiredCpu: 50m
  limitedMemory: 3Gi
  limitedCpu: 1000m
permission:
  appData: true
  appCache: true
  userData: []
  sysData:
  - group: service.bfl
    dataType: app
    version: v1
    ops:
    - UserApps
  - group: service.appstore
    dataType: app
    version: v1
    ops:
    - UninstallDevApp
  - group: service.bfl
    dataType: datastore
    version: v1
    ops:
    - GetKey
    - GetKeyPrefix
    - SetKey
    - DeleteKey
  - group: service.files
    dataType: files
    version: v1
    ops:
    - Query
options:
  analytics:
    enabled: false
  resetCookie:
    enabled: false
  dependencies:
  - name: terminus
    version: '>=0.1.0'
    type: system
  appScope:
    clusterScoped: false
    appRef: []
```
