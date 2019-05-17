# Vue95 UI

## 灵感

Vue95-UI 是一套为 Vue 应用使用的 Windows 95 风格的 UI 组件库。❤

> 灵感来自于 Github 上的 [arturbien/React95](https://github.com/arturbien/React95) 项目。

![](https://ws1.sinaimg.cn/large/006cROD4ly1g347zgwgbgj30wl0cb0uh.jpg)

## npm 安装

```shell
npm install vue95-ui

npm install less less-loader -D
```

> 需要安装 `less` 和 `less-loader`

# 快速上手

将介绍如何使用 Vue95。

## 引入 Vue95

你可以引入整个 Vue95，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Vue95。

### 完整引入

在 main.js 中写入以下内容：

```js{2,5}
import Vue from 'vue';
import vue95 from 'vue95-ui';
import App from './App.vue';

Vue.use(vue95);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 Vue95 的引入。

### 按需引入

如果你只希望引入部分组件，比如 Button ，那么需要在 main.js 中写入以下内容：

```js{2,5}
import Vue from 'vue';
import { Button95 } from 'vue95-ui';
import App from './App.vue';

Vue.use(Button95);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 完整组件列表和引入方式

```js
import Vue from 'vue';
import {
  Button95,
  Anchor95,
} from 'vue95-ui';

Vue.use(Anchor95);
Vue.use(Button95);
```