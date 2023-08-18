---
title: 绑定
---

# 绑定

::: warning
所有 token 均为 一次性token，使用过后需重新生成
:::

## 获取 Token

~~不会真有人在群里用吧~~

```shell
@bot /bind -t [自定义token]
```

## 绑定

```shell
@bot /bind <token>
```

## 绑定列表

```shell
@bot /bind -r
```

## 绑定信息

```shell
@bot /bind -l [At]
```

您可以使用 `@` 指定查询绑定信息

## 例子

假如您希望在QQ频道绑定群聊中的账号数据，则您应该在群聊中输入

```shell
> 用户：@bot /绑定 -t [可以在此处自定义 token]
> Bot：已为您生成一次性token：123456
```

然后，您需要复制此token，来到QQ频道

```shell
> 用户：@bot /绑定 123456
> Bot：绑定成功
```
