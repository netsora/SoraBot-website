# Sora Network 社区文档


## 开发&构建

> 本项目使用 **pnpm** 作为包管理器  
> 如果你没有安装 **pnpm**，那你可以使用 `corepack enable` 命令来安装 **pnpm** 和 **yarn**  
> 后续如果需要升级 **pnpm** 则可以使用命令 `corepack prepare pnpm@x.x.x --activate` 来完成

1. clone 本仓库
2. 使用命令 `pnpm install` 安装依赖
3. 开发环境使用命令 `pnpm serve` 启动服务器
4. 使用命令 `pnpm build` 生成最终页面

### 注意事项

1. 请勿手动安装 `vite` 依赖，否则工作不正常（`vue` 选装）
