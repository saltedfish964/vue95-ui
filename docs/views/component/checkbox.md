---
lang: zh
---

# CheckBox - 多选框

一组备选项中进行多选。

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<CheckBox95>Apple 🍎</CheckBox95>

```vue
<CheckBox95>Apple 🍎</CheckBox95>
```

## checked 属性

可以通过 checked 属性控制是否选中。

<CheckBox95 checked>Apple 🍎</CheckBox95>

```vue
<CheckBox95 checked>Apple 🍎</CheckBox95>
```

## disabled 属性

通过设置 disabled 属性控制复选框是否可以点击。

<CheckBox95 disabled>Apple 🍎</CheckBox95>

```vue
<CheckBox95 disabled>Apple 🍎</CheckBox95>
```

## v-model 双向绑定

可以像原生一样进行双向绑定。

<CheckBox95 v-model="checked">Apple 🍎</CheckBox95>

<script>
export default {
  data() {
    return {
      checked: true
    }
  },
};
</script>

```vue
<CheckBox95 v-model="checked">Apple 🍎</CheckBox95>

<script>
export default {
  data() {
    return {
      checked: true
    }
  },
};
</script>
```
