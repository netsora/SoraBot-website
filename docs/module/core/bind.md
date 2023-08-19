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
@bot /bind -l [ID]
```

## 例子

假如您希望在QQ频道绑定群聊中的账号数据，则您应该在群聊中输入

<ChatWindow title="QQ">
  <ChatMsg name="Komorebi" avatar="/images/i.jpg" onright>/绑定</ChatMsg>
  <ChatMsg name="林汐ᴮᴼᵀ" avatar="/logo.jpg">已为您生成一次性token：123456</ChatMsg>
</ChatWindow>

然后，您需要复制此token，来到QQ频道

<ChatWindow title="QQ 频道">
  <ChatMsg name="Komorebi" avatar="/images/i.jpg">/绑定 123456</ChatMsg>
  <ChatMsg name="林汐ᴮᴼᵀ" avatar="/logo.jpg">绑定成功</ChatMsg>
</ChatWindow>


