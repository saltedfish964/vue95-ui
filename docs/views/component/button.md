---
lang: zh
---
# Button - 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

<Button95>默认按钮</Button95>

```vue{2}
<div>
  <Button95>默认按钮</Button95>
</div>
```

## 禁用状态

按钮不可用状态。

<Button95 disabled>默认按钮</Button95>

```vue{2}
<div>
  <Button95 disabled>默认按钮</Button95>
</div>
```

## 点中状态

按钮被点击时状态。

<Button95 active>默认按钮</Button95>

```vue{2}
<div>
  <Button95 active>默认按钮</Button95>
</div>
```

## 填满宽度状态

按钮填满容器宽度状态。

<Button95 fullWidth>默认按钮</Button95>

```vue{2}
<div>
  <Button95 fullWidth>默认按钮</Button95>
</div>
```

## 正方形按钮

正方形的按钮。

<Button95 square>🥗</Button95>

```vue{2}
<div>
  <Button95 square>🥗</Button95>
</div>
```

## 平面按钮

扁平的按钮。

<Button95 flat>File</Button95>

```vue{2}
<div>
  <Button95 flat>File</Button95>
</div>
```

## Attributes

| 参数            | 说明               | 类型    | 可选值 | 默认值 |
| :-------------: |:-------------:    | :-----: |:-----:|:-----:|
| type            | 类型               | String  |default|default|
| disabled        | 是否禁用状态        | Boolean |-      |false  |
| active          | 是否按下状态        | Boolean |-      |false  |
| fullWidth       | 是否铺满宽度按钮    | Boolean |-      |false  |
| square          | 是否正方形按钮      | Boolean |-      |false  |
| flat            | 是否扁平按钮        | Boolean |-      |false  |