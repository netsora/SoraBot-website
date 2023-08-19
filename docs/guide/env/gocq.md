---
title: 配置 Go-cqhttp
prev:
  text: "← 配置林汐"
  link: "guide/env/sora"
next: false
---

# 配置 go-cqhttp

::: tip 我是否需要go-cqhttp？
SoraBot 本身只负责处理消息，需要借助 go-cqhttp 与 QQ 进行通信。如果你只使用 QQ频道 或 Telegram，可以跳过该配置。
:::

## 下载

下载最新版 [go-cqhttp](https://github.com/Mrs4s/go-cqhttp/releases)，不知道下哪个可参考 [版本说明](https://docs.go-cqhttp.org/guide/quick_start.html#%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B)

## 解压

* Windows下请使用自己熟悉的解压软件自行解压
* Linux下在命令行中输入 `tar -xzvf [文件名]`

## 配置

您需要修改配置中的灰色部分

* 26行 签名服务器配置可参考：[#2245](https://github.com/Mrs4s/go-cqhttp/discussions/2245) 或 [Bilibili视频教程](https://www.bilibili.com/video/BV1nu411h7bS/?share_source=copy_web&vd_source=2b607adeb8e16af6519b5c3856756355)
* 将 36行 的上报数据类型改为 `array`
* 如果您没有修改 `.env.prod` 配置，您可以直接将 112行 `universal` 设置为 `ws://127.0.0.1:2310/onebot/v11/ws`

::: details config.yml

```yaml{4,5,26,36,112}
# 示例版本：v1.1.0
# go-cqhttp 默认配置文件
account: # 账号相关
  uin: 123456 # QQ账号
  password: '' # 密码为空时使用扫码登录
  encrypt: false  # 是否开启密码加密
  status: 0      # 在线状态 请参考 https://docs.go-cqhttp.org/guide/config.html#在线状态
  relogin: # 重连设置
    delay: 3   # 首次重连延迟, 单位秒
    interval: 3   # 重连间隔
    max-times: 0  # 最大重连次数, 0为无限制

  # 是否使用服务器下发的新地址进行重连
  # 注意, 此设置可能导致在海外服务器上连接情况更差
  use-sso-address: true
  # 是否允许发送临时会话消息
  allow-temp-session: false

  # 数据包的签名服务器
  # 兼容 https://github.com/fuqiuluo/unidbg-fetch-qsign
  # 如果遇到 登录 45 错误, 或者发送信息风控的话需要填入一个服务器
  # 示例:
  # sign-server: 'http://127.0.0.1:8080' # 本地签名服务器
  # sign-server: 'https://signserver.example.com' # 线上签名服务器
  # 服务器可使用docker在本地搭建或者使用他人开放的服务
  sign-server: 'http://127.0.0.1:8080'

heartbeat:
  # 心跳频率, 单位秒
  # -1 为关闭心跳
  interval: 5

message:
  # 上报数据类型
  # 可选: string,array
  post-format: string
  # 是否忽略无效的CQ码, 如果为假将原样发送
  ignore-invalid-cqcode: false
  # 是否强制分片发送消息
  # 分片发送将会带来更快的速度
  # 但是兼容性会有些问题
  force-fragment: false
  # 是否将url分片发送
  fix-url: false
  # 下载图片等请求网络代理
  proxy-rewrite: ''
  # 是否上报自身消息
  report-self-message: false
  # 移除服务端的Reply附带的At
  remove-reply-at: false
  # 为Reply附加更多信息
  extra-reply-data: false
  # 跳过 Mime 扫描, 忽略错误数据
  skip-mime-scan: false
  # 是否自动转换 WebP 图片
  convert-webp-image: false
  # http超时时间
  http-timeout: 0

output:
  # 日志等级 trace,debug,info,warn,error
  log-level: warn
  # 日志时效 单位天. 超过这个时间之前的日志将会被自动删除. 设置为 0 表示永久保留.
  log-aging: 15
  # 是否在每次启动时强制创建全新的文件储存日志. 为 false 的情况下将会在上次启动时创建的日志文件续写
  log-force-new: true
  # 是否启用日志颜色
  log-colorful: true
  # 是否启用 DEBUG
  debug: false # 开启调试模式

# 默认中间件锚点
default-middlewares: &default
  # 访问密钥, 强烈推荐在公网的服务器设置
  access-token: ''
  # 事件过滤器文件目录
  filter: ''
  # API限速设置
  # 该设置为全局生效
  # 原 cqhttp 虽然启用了 rate_limit 后缀, 但是基本没插件适配
  # 目前该限速设置为令牌桶算法, 请参考:
  # https://baike.baidu.com/item/%E4%BB%A4%E7%89%8C%E6%A1%B6%E7%AE%97%E6%B3%95/6597000?fr=aladdin
  rate-limit:
    enabled: false # 是否启用限速
    frequency: 1  # 令牌回复频率, 单位秒
    bucket: 1     # 令牌桶大小

database: # 数据库相关设置
  leveldb:
    # 是否启用内置leveldb数据库
    # 启用将会增加10-20MB的内存占用和一定的磁盘空间
    # 关闭将无法使用 撤回 回复 get_msg 等上下文相关功能
    enable: true
  sqlite3:
    # 是否启用内置sqlite3数据库
    # 启用将会增加一定的内存占用和一定的磁盘空间
    # 关闭将无法使用 撤回 回复 get_msg 等上下文相关功能
    enable: false
    cachettl: 3600000000000 # 1h

# 连接服务列表
servers:
  # 添加方式，同一连接方式可添加多个，具体配置说明请查看文档
  #- http: # http 通信
  #- ws:   # 正向 Websocket
  #- ws-reverse: # 反向 Websocket
  #- pprof: #性能分析服务器
  # 反向WS设置
  - ws-reverse:
      # 反向WS Universal 地址
      # 注意 设置了此项地址后下面两项将会被忽略
      universal: ws://(设置中的host:port)/onebot/v11/ws
      # 反向WS API 地址
      api: ws://your_websocket_api.server
      # 反向WS Event 地址
      event: ws://your_websocket_event.server
      # 重连间隔 单位毫秒
      reconnect-interval: 3000
      middlewares:
        <<: *default # 引用默认中间件
```

:::

## 使用

### Windows 标准启动方法

1. 双击go-cqhttp_*.exe，根据提示生成运行脚本
2. 双击运行脚本

    ```bash
    [WARNING]: 尝试加载配置文件 config.yml 失败: 文件不存在
    [INFO]: 默认配置文件已生成,请编辑 config.yml 后重启程序.
    ```

3. 参照 [config.md](https://github.com/ishkong/go-cqhttp-docs/blob/main/docs/guide/config.md) 和你所用到的插件的 `README` 填入参数
4. 再次双击运行脚本

    ```bash
    [INFO]: 登录成功 欢迎使用: 林汐ᴮᴼᵀ
    ```

如出现需要认证的信息, 请自行认证设备。

此时, 基础配置完成

### Linux 标准启动方法

1. 通过 SSH 连接到服务器
2. `cd` 到解压目录
3. 输入 `./go-cqhttp`, Enter运行 , 此时将提示

    ```bash
    [WARNING]: 尝试加载配置文件 config.yml 失败: 文件不存在
    [INFO]: 默认配置文件已生成,请编辑 config.yml 后重启程序.
    ```

4. 参照 [config.md](https://github.com/ishkong/go-cqhttp-docs/blob/main/docs/guide/config.md) 和你所用到的插件的 `README` 填入参数
5. 再次输入 ./go-cqhttp, Enter运行

    ```bash
    [INFO]: 登录成功 欢迎使用: 林汐ᴮᴼᵀ
    ```

如出现需要认证的信息, 请自行认证设备。

此时, 基础配置完成
::: warning
需要保持 go-cqhttp 在后台持续运行

请配合 screen 等服务来保证断开 SSH 连接后 go-cqhttp 的持续运行
:::

### 跳过启动的五秒延时

使用命令行参数 faststart即可跳过启动的五秒钟延时，例如

```bash
# Windows
.\go-cqhttp.exe -faststart

# Linux
./go-cqhttp -faststart
```
