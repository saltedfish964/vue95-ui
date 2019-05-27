<template>
  <div name="checkbox-group95">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "CheckboxGroup95",

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
  }
};
</script>
