<template>
  <button
    :disabled="disabled"
    :class="[
      type ? 'button-95-' + type : '',
      {
        'button-95-disable': disabled,
        'button-95-active': active,
        'button-95-full-width': fullWidth,
        'button-95-square': square,
        'button-95-flat': flat,
      },
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button95',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    active: Boolean,
    fullWidth: Boolean,
    square: Boolean,
    flat: Boolean,
    className: String,
  },

  methods: {
    handleClick (evt) {
      this.$emit('click', evt);
    }
  }
}
</script>


<style lang="less" scoped>
  @import '../../common/reset.css';
  @fontSize: 16px;
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
  .button-95-default {
    cursor: pointer;
    .box-styles;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: auto;
    padding: 0 0.5rem;
    font-size: @fontSize;
    .border-styles;
    box-shadow: rgb(223, 224, 227) 1px 1px 0px 1px inset, rgb(136, 140, 143) -1px -1px 0px 1px inset;
    &:active {
      .border-styles(#050608, #ffffff);
      box-shadow: rgb(136, 140, 143) 1px 1px 0px 1px inset, rgb(223, 224, 227) -1px -1px 0px 1px inset;
    }
    &.button-95-active {
      cursor: default;
      padding-top: 2px;
      .border-styles(#050608, #ffffff);
      box-shadow: rgb(136, 140, 143) 1px 1px 0px 1px inset, rgb(223, 224, 227) -1px -1px 0px 1px inset;
    }
    &.button-95-full-width {
      width: 100%;
    }
    &.button-95-disable {
      cursor: not-allowed;
      .box-styles(#ced0cf, #888c8f);
      text-shadow: 1px 1px #ffffff;
    }
    &.button-95-square {
      width: 35px;
      padding: 0;
    }
    &.button-95-flat {
      height: 27px;
      box-shadow: none;
      border: none;
      &:active {
        padding-top: 2px;
      }
    }
  }
</style>
