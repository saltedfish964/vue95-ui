---
lang: zh
---
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