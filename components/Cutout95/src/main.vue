<template>
  <div class="cutout" :class="{'shadow': shadow}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Cutout95',

  props: {
    shadow: Boolean,
  },
}
</script>

<style lang="less" scoped>
.cutout {
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  border-style: solid;
  border-width: 2px;
  border-left-color: #888c8f;
  border-top-color: #888c8f;
  border-right-color: #ffffff;
  border-bottom-color: #ffffff;
  background: #ffffff;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    content: "";
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-style: solid;
    border-width: 2px;
    border-left-color: #050608;
    border-top-color: #050608;
    border-right-color: #dfe0e3;
    border-bottom-color: #dfe0e3;
    pointer-events: none;
  }
}
.shadow {
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  border-style: solid;
  border-width: 2px;
  border-left-color: #888c8f;
  border-top-color: #888c8f;
  border-right-color: #ffffff;
  border-bottom-color: #ffffff;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    content: "";
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-style: solid;
    border-width: 2px;
    border-left-color: #050608;
    border-top-color: #050608;
    border-right-color: #dfe0e3;
    border-bottom-color: #dfe0e3;
    pointer-events: none;
    box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 10px inset;
  }
}
</style>
