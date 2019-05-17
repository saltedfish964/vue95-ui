---
lang="zh"
---
# List - 列表

常用列表。

## 基础用法

列表的基础用法。

<List95>
  <ListItem95>Photos</ListItem95>
  <ListItem95>Videos</ListItem95>
  <ListItem95>Other</ListItem95>
</List95>

```vue{1,5}
<List95>
  <ListItem95>Photos</ListItem95>
  <ListItem95>Videos</ListItem95>
  <ListItem95>Other</ListItem95>
</List95>
```

## 行内列表

行内列表用法。

<List95 inline>
  <ListItem95 square disabled>🌿</ListItem95>
  <Bar95 />
  <ListItem95>Tackle</ListItem95>
  <ListItem95>Growl</ListItem95>
  <ListItem95 disabled>Razor Leaf</ListItem95>
</List95>

```vue{1,7}
<List95 inline>
  <ListItem95 square disabled>🌿</ListItem95>
  <Bar95 />
  <ListItem95>Tackle</ListItem95>
  <ListItem95>Growl</ListItem95>
  <ListItem95 disabled>Razor Leaf</ListItem95>
</List95>
```

## 控制列表阴影

列表阴影的现实或隐藏。

<List95 :shadow="false">
  <ListItem95>Photos</ListItem95>
  <ListItem95>Videos</ListItem95>
  <ListItem95>Other</ListItem95>
</List95>

```vue{1,5}
<List95 :shadow="false">
  <ListItem95>Photos</ListItem95>
  <ListItem95>Videos</ListItem95>
  <ListItem95>Other</ListItem95>
</List95>
```

## 根据父元素适应宽度

自动填满父元素宽度。

<List95 fullWidth>
  <ListItem95>Photos</ListItem95>
  <ListItem95>Videos</ListItem95>
  <ListItem95>Other</ListItem95>
</List95>

```vue{1,5}
<List95 fullWidth>
  <ListItem95>Photos</ListItem95>
  <ListItem95>Videos</ListItem95>
  <ListItem95>Other</ListItem95>
</List95>
```