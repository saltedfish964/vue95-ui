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
@import '../../common/reset.css';
.tool-bar-95 {
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
}
</style>
