# 使用 Node.js 18.15 作为基础镜像
FROM node:18-alpine AS base

FROM base AS builder
# 设置工作目录
WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install -g pnpm
RUN pnpm i

# 将应用程序的所有文件复制到工作目录中
COPY . .

# 构建应用程序
RUN npm run build



# 开始使用 Nginx 镜像
FROM nginx:1.25.1-alpine

# 将 Nginx 配置文件复制到容器中
COPY nginx.conf /etc/nginx/nginx.conf

RUN nginx -t

# 从 Node.js 环境镜像中复制打包的应用程序到 Nginx 镜像中
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# 暴露 3000 端口
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]