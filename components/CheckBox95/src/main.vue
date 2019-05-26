<template>
  <label
    class="label"
    :class="{'disabled': disabled}"
  >
    <slot></slot>
    <div
      :class="{
        'cutout': !isCheck,
        'checked': isCheck,
        'cutout-disabled': disabled && !isCheck,
        'checked-disabled': disabled && isCheck,
      }"
    ></div>
    <input
      :value="value"
      :disabled="disabled"
      :checked="checked"
      @change="changeCheckValue($event)"
      class="input"
      type="checkbox"
    >
  </label>
</template>

<script>
export default {
  name: 'CheckBox95',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    value: [String, Boolean, Number],
    disabled: Boolean,
  },
  data() {
    return {
      isCheck: this.checked,
    }
  },
  methods: {
    changeCheckValue(evt) {
      this.isCheck = evt.target.checked;
      this.$emit('change', evt.target.checked);
    },
  },
}
</script>

<style lang="less" scoped>
.common-cutout() {
  box-sizing: border-box;
  padding: 2px;
  border-style: solid;
  border-width: 2px;
  border-left-color: #888c8f;
  border-top-color: #888c8f;
  border-right-color: #ffffff;
  border-bottom-color: #ffffff;
  background: #ffffff;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  box-shadow: none;
}

.common-before() {
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
  box-shadow: none;
}

.common-after(@border-color: #050608) {
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  top: calc(50% - 1px);
  width: 3px;
  height: 7px;
  border: solid @border-color;
  border-width: 0 3px 3px 0;
  transform: translate(-50%, -50%) rotate(45deg);
}

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
  font-size: 16px;
  &.disabled {
    color: #888c8f;
    text-shadow: 1px 1px #ffffff;
    cursor: not-allowed;
  }
}

.input {
  position: absolute;
  opacity: 0;
  z-index: -99;
}

.cutout {
  .common-cutout;
  &:before {
    .common-before;
  }
}

.cutout-disabled {
  .common-cutout;
  background: #ced0cf;
  &:before {
    .common-before;
  }
}

.checked {
  .common-cutout;
  &:before {
    .common-before;
  }
  &:after {
    .common-after;
  }
}

.checked-disabled {
  .common-cutout;
  background: #ced0cf;
  &:before {
    .common-before;
  }
  &:after {
    .common-after(#888c8f);
  }
}
</style>
