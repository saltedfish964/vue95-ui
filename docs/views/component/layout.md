---
lang: zh
---
# Layout - 布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用单一分栏创建基础的栅格布局。

<Row95 style="margin-bottom: 20px;">
  <Col95 span="24" style="background: #99a9bf;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 style="margin-bottom: 20px;">
  <Col95 span="12" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="12" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 style="margin-bottom: 20px;">
  <Col95 span="8" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="8" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="8" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 style="margin-bottom: 20px;">
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 style="margin-bottom: 20px;">
  <Col95 span="4" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="4" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="4" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="4" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="4" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="4" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
</Row95>

```vue
<Row95 style="margin-bottom: 20px;">
  <Col95 span="24" style="background: #99a9bf;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 style="margin-bottom: 20px;">
  <Col95 span="12" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="12" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 style="margin-bottom: 20px;">
  <Col95 span="8" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="8" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="8" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 style="margin-bottom: 20px;">
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 style="margin-bottom: 20px;">
  <Col95 span="4" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="4" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="4" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="4" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="4" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="4" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
</Row95>
```

## 分栏偏移

支持偏移指定的栏数。

:::tip
通过制定 Col95 组件的 `offset` 属性可以指定分栏偏移的栏数。
:::

<Row95 style="margin-bottom: 20px;">
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" offset="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 style="margin-bottom: 20px;">
  <Col95 span="6" offset="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" offset="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 style="margin-bottom: 20px;">
  <Col95 span="12" offset="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

```vue
<Row95 style="margin-bottom: 20px;">
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" offset="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 style="margin-bottom: 20px;">
  <Col95 span="6" offset="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" offset="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 style="margin-bottom: 20px;">
  <Col95 span="12" offset="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>
```

## 对齐方式

通过 `flex` 布局来对分栏进行灵活的对齐。

<Row95 style="margin-bottom: 20px;">
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 justify="center" style="margin-bottom: 20px;">
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 justify="end" style="margin-bottom: 20px;">
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 justify="space-between" style="margin-bottom: 20px;">
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 justify="space-around" style="margin-bottom: 20px;">
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

```vue
<Row95 style="margin-bottom: 20px;">
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 justify="center" style="margin-bottom: 20px;">
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 justify="end" style="margin-bottom: 20px;">
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 justify="space-between" style="margin-bottom: 20px;">
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>

<Row95 justify="space-around" style="margin-bottom: 20px;">
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
  <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
</Row95>
```