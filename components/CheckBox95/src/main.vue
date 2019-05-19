<template>
  <label class="balel">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'CheckBox95'
}
</script>

<style lang="less" scoped>
.label {
  display: inline-block;
  position: relative;
  padding-left: calc(20px + 0.5rem);
  margin: 0.5rem 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 35px;
}
</style>
