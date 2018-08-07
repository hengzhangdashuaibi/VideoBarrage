# 视频弹幕机

## 项目结构

...

## 里程碑

...

## npm scripts 说明

* npm run start [开启开发服务]

* npm run build [构建项目]

* npm run test [运行单元测试]

## 开发代理配置

> 开发代理使用 webpack-dev-server 的代理配置项目。你可以在 package.json > proxy 配置项中进行开发代理配置

### 可以参考下面的示例

> 配置如下代理后,开发服务器正常启动后,代理服务器会将所有发送到 http://localhost:3000/api/ (项目开发服务器默认端口为3000)的请求转发到 http://localhost:8085/videoZuul 

```test
  
  "proxy": {
    "/api": {
      "target": "http://localhost:8085/videoZuul",
      "changeOrigin": true,
      "secure": false
    }
  }
```

## 其他

* [About CreateReactApp](./Create-React-App.md)