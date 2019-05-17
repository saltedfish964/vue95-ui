<template>
  <ul
    class="list95"
    :class="{'inline': inline,'no-shadow': !shadow, 'full-width': fullWidth}"
  >
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'List95',
  props: {
    inline: Boolean,
    fullWidth: Boolean,
    shadow: {
      type: Boolean,
      default: true,
    }
  },
}
</script>

<style lang="less" scoped>
@import '../../common/reset.css';
.border-styles(@firstBorderColor: #ffffff, @secondBorderColor: #050608) {
  border-style: solid;
  border-width: 2px;
  border-left-color: @firstBorderColor;
  border-top-color: @firstBorderColor;
  border-right-color: @secondBorderColor;
  border-bottom-color: @secondBorderColor;
}
.box-styles(@bgColor: #ced0cf, @color: #050608) {
  box-sizing: border-box;
  display: inline-block;
  background-color: @bgColor;
  color: @color;
}
.list95 {
  box-sizing: border-box;
  width: auto;
  padding: 2px 4px 4px 2px;
  .border-styles;
  .box-styles;
  list-style: none;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 4px 4px 10px 0px, rgb(223, 224, 227) 1px 1px 0px 1px inset, rgb(136, 140, 143) -1px -1px 0px 1px inset;
  &.inline {
    align-items: center;
    display: inline-flex;
  }
  &.no-shadow {
    box-shadow: none;
  }
  &.full-width {
    width: 100%;
  }
}
</style>
