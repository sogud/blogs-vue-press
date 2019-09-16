---
title: Axios 基础配置
date: 2018-01-13 16:07:32
tags:
  - Vue
  - Axios
category: 前端
---

# Axios 基础配置

### 全局的 axios 默认值

引入 axios 后

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### 自定义实例默认值

```js
// 创建实例时设置配置的默认值
var instance = axios.create({
baseURL: 'https://api.example.com'
});

// 在实例已创建后修改默认值
instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```
