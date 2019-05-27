<template>
  <div class="window">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Window95'
}
</script>

<style lang="less" scoped>
.window {
  position: relative;
  padding: 2px;
  border-style: solid;
  border-width: 2px;
  border-left-color: #ffffff;
  border-top-color: #ffffff;
  border-right-color: #050608;
  border-bottom-color: #050608;
  box-shadow: rgba(0, 0, 0, 0.35) 4px 4px 10px 0px, rgb(223, 224, 227) 1px 1px 0px 1px inset, rgb(136, 140, 143) -1px -1px 0px 1px inset;
  box-sizing: border-box;
  display: inline-block;
  background-color: #ced0cf;
  color: #050608;
}
</style>
