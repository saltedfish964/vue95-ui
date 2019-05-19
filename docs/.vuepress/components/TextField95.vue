<template>
  <div
    :style="[wrapDisabledStyle, {width: width + 'px'}]"
    class="cutout"
    :class="{'shadow': shadow}"
  >
    <input
      :style="inputDisabledStyle"
      :disabled="disabled"
      :value="value"
      @input="changeInputValue($event)"
      class="input"
      type="text"
    >
  </div>
</template>

<script>
export default {
  name: 'TextField95',

  props: {
    disabled: Boolean,
    shadow: {
      type: Boolean,
      default: true,
    },
    width: Number,
    value: String,
  },

  methods: {
    changeInputValue(e) {
      this.$emit('input', e.target.value);
    }
  },

  computed: {
    wrapDisabledStyle() {
      return this.disabled === true ?
      {
        backgroundColor: '#ced0cf',
        boxShadow: 'rgba(0, 0, 0, 0.2) 3px 3px 10px inset',
      } :
      {
        backgroundColor: '#ffffff',
        boxShadow: 'none',
      }
    },

    inputDisabledStyle() {
      return this.disabled === true ?
      {
        color: '#888c8f',
        textShadow: '1px 1px #ffffff',
      } :
      {
        color: '#050608',
        textShadow: 'none',
      }
    },
  },
}
</script>

<style lang="less" scoped>
.baseCutout(@boxshadow: none) {
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  border-style: solid;
  border-width: 2px;
  border-left-color: #888c8f;
  border-top-color: #888c8f;
  border-right-color: #ffffff;
  border-bottom-color: #ffffff;
  height: 35px;
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
    box-shadow: @boxshadow;
  }
}
.cutout {
  .baseCutout;
}
.shadow {
  .baseCutout(rgba(0, 0, 0, 0.2) 3px 3px 10px inset);
}
.input {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
  outline: none;
  border: none;
  background: none;
  font-size: 16px;
  font-family: 'sans-serif';
}
</style>
