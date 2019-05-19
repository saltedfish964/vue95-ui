---
lang="zh"
---

# TextFiled - 文本输入框

常规 TextFiled 输入框。

## 基础用法

默认的 TextFiled 输入框。

<TextField95></TextField95>

```vue
<TextField95></TextField95>
```

## 可控制

TextFiled 为受控组件。

<div>
  <TextField95 v-model="msg"></TextField95>
  <button95 @click="resetMsg">Reset</button95>
</div>

<script>
export default {
  data() {
    return {
      msg: 'Hello World!'
    }
  },

  methods: {
    resetMsg() {
      this.msg = '';
    }
  }
};
</script>

```vue
<div>
  <TextField95 v-model="msg"></TextField95>
  <button95 @click="resetMsg">Reset</button95>
</div>

<script>
export default {
  data() {
    return {
      msg: 'Hello World!'
    }
  },

  methods: {
    resetMsg() {
      this.msg = '';
    }
  }
};
</script>
```

## 无阴影

不带阴影的 TextFiled。

<TextField95 :shadow="false"></TextField95>

```vue
<TextField95 :shadow="false"></TextField95>
```

## Disabled 状态

TextFiled 的无法被选中状态。

<TextField95 value="Can't type 😥" disabled></TextField95>

```vue
<TextField95 value="Can't type 😥" disabled></TextField95>
```

## 自定义宽度

可以在自己设置 TextFiled 的宽度。

<TextField95 value="Custom width" :width="150"></TextField95>

```vue
<TextField95 value="Custom width" :width="150"></TextField95>
```