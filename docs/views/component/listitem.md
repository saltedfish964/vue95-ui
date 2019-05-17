---
lang="zh"
---

# ListItem - 列表元素

配合 List 组件的 Item 组件。

## 基础用法

Item 的基础用法。

<List95>
  <ListItem95>Item 1</ListItem95>
  <ListItem95>Item 2</ListItem95>
  <ListItem95>Item 3</ListItem95>
</List95>

```vue{2,3,4}
<List95>
  <ListItem95>Item 1</ListItem95>
  <ListItem95>Item 2</ListItem95>
  <ListItem95>Item 3</ListItem95>
</List95>
```

## 无法选中状态

无法选中的 Item。

<List95>
  <ListItem95 disabled>disabled</ListItem95>
  <ListItem95 disabled>disabled</ListItem95>
  <ListItem95 disabled>disabled</ListItem95>
</List95>

```vue{2,3,4}
<List95>
  <ListItem95 disabled>disabled</ListItem95>
  <ListItem95 disabled>disabled</ListItem95>
  <ListItem95 disabled>disabled</ListItem95>
</List95>
```

## 正方形

正方形的 Item。

<List95>
  <ListItem95 square>😍</ListItem95>
  <ListItem95 square>😝</ListItem95>
  <ListItem95 square>🍕</ListItem95>
</List95>

```vue{2,3,4}
<List95>
  <ListItem95 square>😍</ListItem95>
  <ListItem95 square>😝</ListItem95>
  <ListItem95 square>🍕</ListItem95>
</List95>
```

## 超链接

能添加 `link` 属性进行超链接。

<List95>
  <ListItem95>Normal item</ListItem95>
  <ListItem95 link="https://github.com/didadi599/vue95-ui">🔗 Link!</ListItem95>
</List95>

```vue{3}
<List95>
  <ListItem95>Normal item</ListItem95>
  <ListItem95 link="https://github.com/didadi599/vue95-ui">🔗 Link!</ListItem95>
</List95>
```