---
lang: zh
---

# CheckBox - 多选框

一组备选项中进行多选。

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 `checkbox` 按钮后的介绍。

<CheckBox95>Apple 🍎</CheckBox95>

```vue
<CheckBox95>Apple 🍎</CheckBox95>
```

## 禁用状态

通过设置 `disabled` 属性控制复选框是否可以点击。

<CheckBox95 disabled>Apple 🍎</CheckBox95>

```vue
<CheckBox95 disabled>Apple 🍎</CheckBox95>
```

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

<CheckboxGroup95 v-model="list">
  <CheckBox95 label="Steak 🥩">Steak 🥩</CheckBox95>
  <CheckBox95 label="Tortilla 🌯">Tortilla 🌯</CheckBox95>
  <CheckBox95 disabled label="Pizza 🍕">Pizza 🍕</CheckBox95>
</CheckboxGroup95>
<br />
list:{{list}}

```vue
<CheckboxGroup95 v-model="list">
  <CheckBox95 label="Steak 🥩">Steak 🥩</CheckBox95>
  <CheckBox95 label="Tortilla 🌯">Tortilla 🌯</CheckBox95>
  <CheckBox95 disabled label="Pizza 🍕">Pizza 🍕</CheckBox95>
</CheckboxGroup95>

<script>
export default {
  data() {
    return {
      list: ['Steak 🥩'],
    }
  },
};
</script>
```

## checked 属性

可以通过 `checked` 属性控制是否选中。

<CheckBox95 checked>Apple 🍎</CheckBox95>

```vue
<CheckBox95 checked>Apple 🍎</CheckBox95>
```

## v-model 双向绑定

可以像原生一样进行双向绑定。

<CheckBox95 v-model="checked">Apple 🍎</CheckBox95>
<br/>
checked:{{checked}}

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

## 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。

<CheckboxGroup95 :min="1" :max="2" v-model="limitList">
  <CheckBox95 checked label="Steak 🥩">Steak 🥩</CheckBox95>
  <CheckBox95 label="Tortilla 🌯">Tortilla 🌯</CheckBox95>
  <CheckBox95 label="Pizza 🍕">Pizza 🍕</CheckBox95>
</CheckboxGroup95>
<br />
limitList:{{limitList}}

```vue
<CheckboxGroup95 :min="1" :max="2" v-model="limitList">
  <CheckBox95 checked label="Steak 🥩">Steak 🥩</CheckBox95>
  <CheckBox95 label="Tortilla 🌯">Tortilla 🌯</CheckBox95>
  <CheckBox95 label="Pizza 🍕">Pizza 🍕</CheckBox95>
</CheckboxGroup95>

<script>
export default {
  data() {
    return {
      limitList: [],
    }
  },
};
</script>
```

<script>
export default {
  data() {
    return {
      checked: true,
      list: ['Steak 🥩'],
      limitList: [],
    }
  },
};
</script>