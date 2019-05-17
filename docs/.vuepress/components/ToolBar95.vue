<template>
  <div class="tool-bar-95">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ToolBar95'
}
</script>

<style lang="less" scoped>
div {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
.tool-bar-95 {
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
}
</style>
