<template>
  <div class="row-95">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Row95',
}
</script>

<style lang="less" scoped>
.row-95 {
  display: flex;
  flex-wrap: wrap;
}
</style>
