<template>
  <label class="label" :class="{'disabled': isDisabled}">
    <slot></slot>
    <template v-if="!$slots.default">{{label}}</template>
    <div
      :class="{
        'cutout': !isChecked,
        'checked': isChecked,
        'cutout-disabled': isDisabled && !isChecked,
        'checked-disabled': isDisabled && isChecked,
      }"
    ></div>
    <input
      type="checkbox"
      :value="label"
      v-model="model"
      :disabled="isDisabled"
      @change="handleChange"
      class="input"
    >
  </label>
</template>

<script>
export default {
  name: "CheckBox95",
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    checked: Boolean
  },

  data() {
    return {
      checkboxGroup: null,
      isLimitExceeded: false,
      selfModel: false
    };
  },

  created() {
    this.checked && this.addToStore();
  },

  computed: {
    model: {
      get() {
        return this.isGroup
          ? this.store
          : this.value !== undefined
          ? this.value
          : this.selfModel;
      },

      set(val) {
        if (this.isGroup) {
          this.isLimitExceeded = false;
          this.checkboxGroup.min !== undefined &&
            val.length < this.checkboxGroup.min &&
            (this.isLimitExceeded = true);

          this.checkboxGroup.max !== undefined &&
            val.length > this.checkboxGroup.max &&
            (this.isLimitExceeded = true);

          this.isLimitExceeded === false &&
            this.dispatch("CheckboxGroup95", "input", [val]);
        } else {
          this.$emit("input", val);
          this.selfModel = val;
        }
      }
    },

    isDisabled() {
      return this.isGroup
        ? this.checkboxGroup.disabled || this.disabled
        : this.disabled;
    },

    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options._componentTag !== "CheckboxGroup95") {
          parent = parent.$parent;
        } else {
          // eslint-disable-next-line
          this.checkboxGroup = parent;
          return true;
        }
      }
      return false;
    },

    isChecked() {
      return {}.toString.call(this.model) === "[object Boolean]"
        ? this.model
        : Array.isArray(this.model)
        ? this.model.indexOf(this.label) > -1
        : this.model === this.trueLabel;
    },

    store() {
      return this.checkboxGroup ? this.checkboxGroup.value : this.value;
    }
  },

  methods: {
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options._componentTag;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options._componentTag;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },

    handleChange(ev) {
      if (this.isLimitExceeded) return;
      let value = ev.target.checked ? true : false;
      this.$emit("change", value, ev);
      this.$nextTick(() => {
        if (this.isGroup) {
          this.dispatch("CheckboxGroup95", "change", [this.checkboxGroup.value]);
        }
      });
    },

    addToStore() {
      if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
        this.model.push(this.label);
      } else {
        this.model = true;
      }
    }
  }
};
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
