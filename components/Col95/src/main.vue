<template>
  <div class="col-95" :class="[colClass, offsetClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Col95',
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [String, Number],
    },
  },
  computed: {
    colClass() {
      return `col-95-${this.span}`
    },
    offsetClass() {
      return `offset-${this.offset}`
    },
  }
}
</script>

<style lang="less" scoped>
@import '../../common/reset.css';
.col-95(@n)when(@n < 25) {
  .col-95-@{n} {
    flex: 0 0 (100% / 24 * @n);
  }

  .offset-@{n} {
    margin-left: (100% / 24 * @n);
  }

  .col-95(@n + 1);
}
.col-95(1);
</style>
