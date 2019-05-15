<template>
  <header class="app-bar-95">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'AppBar95'
}
</script>

<style lang="less" scoped>
@import '../../common/reset.css';
.box-styles(@bgColor: #ced0cf, @color: #050608) {
  box-sizing: border-box;
  display: inline-block;
  background-color: @bgColor;
  color: @color;
}
.border-styles(@firstBorderColor: #ffffff, @secondBorderColor: #050608) {
  border-style: solid;
  border-width: 2px;
  border-left-color: @firstBorderColor;
  border-top-color: @firstBorderColor;
  border-right-color: @secondBorderColor;
  border-bottom-color: @secondBorderColor;
}
.app-bar-95 {
  .border-styles;
  box-shadow: rgba(0, 0, 0, 0.35) 4px 4px 10px 0px, rgb(223, 224, 227) 1px 1px 0px 1px inset, rgb(136, 140, 143) -1px -1px 0px 1px inset;
  .box-styles;
  position: absolute;
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
