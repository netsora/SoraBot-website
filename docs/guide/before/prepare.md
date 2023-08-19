---
title: 准备工作
prev:
  text: "← 介绍"
  link: "guide/before/introduction"
next:
  text: "配置林汐 →"
  link: "guide/env/sora"
---

# 准备工作

## 前言

~~林汐非常可爱的帕~~

**门槛**  

在开始之前，我们希望您具备：

* 一定的基础，包括但不限于稍微熟悉linux或windows cmd命令行
* 一些百度/Google的能力
* 一台服务器或能 24 小时运行的电脑

## 你可能会问

<ChatWindow title="你可能会问">
  <ChatMsg name="我" avatar="/images/i.png" onright>什么是独立ID，它有什么用？</ChatMsg>
  <ChatMsg name="Sora" >独立ID是林汐为每个用户分配的专属ID，通过它，我们便可知晓用户信息、绑定信息、权限等，以便我们更好向用户提供服务</ChatMsg>
  <ChatMsg name="我" avatar="/images/i.png" onright>全新的权限系统，新在哪里？</ChatMsg>
  <ChatMsg name="Sora" >林汐的权限系统，并没有使用 Nonebot2 所提供的 SUPERUSER，而是改为了 Bot 管理员 和 Bot 协助者</ChatMsg>
  <ChatMsg name="我" avatar="/images/i.png" onright>Bot管理员 和 Bot协助者 的区别是？</ChatMsg>
  <ChatMsg name="Sora" >Bot管理员是最高权限，Bot协助者 在其下，林汐的部分指令需要 Bot管理员 权限，而部分指令至少需要 Bot协助者 权限</ChatMsg>
  <ChatMsg name="我" avatar="/images/i.png" onright>？</ChatMsg>
</ChatWindow>

让我们举个例子：  

```python
# /重启 指令只能由 Bot管理员 触发
reboot_cmd = on_alconna(
      Alconna("重启"),
    permission=BOT_ADMIN
)

# /更新 指令可以由 Bot管理员 和 Bot协助者 触发
update_cmd = on_alconna(
      Alconna("更新"),
    permission=BOT_HELPER
)
```

## 环境准备

::: tip
请确保你的 Python 版本 >= 3.10
:::
为了让 Sora 稳定运行，我们使用了虚拟环境（[pdm](https://github.com/pdm-project/pdm)）

```bash
# 安装 pipx
pip install pipx
# 安装 PDM 虚拟环境
pipx install pdm
# 安装 python 依赖
pdm install
# 安装 pre-commit git hook
pre-commit install
```

## 本体准备

### 通过 Git 下载 Sora

在任意你喜欢的目录下键入：

:::: code-group
::: code-group-item HTTPS

```bash
git clone https://github.com/netsora/SoraBot.git
```

:::
::: code-group-item SSH

```bash
git clone git@github.com:netsora/SoraBot.git
```

:::
::: code-group-item Github CLI

```bash
gh repo clone netsora/SoraBot
```

:::
::::

### 通过 GitHub Codespaces 使用 Sora

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=master&repo=645755460)

### 通过 Gitpod 使用 Sora

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#/https://github.com/netsora/SoraBot)

### 通过其它方法下载 Sora

1. 进入 [Sora 主仓库](https://github.com/netsora/SoraBot)
2. 点击显眼的 <Curtain>**Code**</Curtain> 按钮
3. 在出现的菜单中找到 Download ZIP 并点击
4. 下载完成后解压至任一你喜欢的目录
