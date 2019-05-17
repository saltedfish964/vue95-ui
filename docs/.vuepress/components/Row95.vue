<template>
  <div :class="['row-95', justifyClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Row95',
  props: {
    justify: {
      type: String,
      default: 'flex-start',
    },
  },
  computed: {
    justifyClass () {
      return `justify-${this.justify}`
    }
  },
}
</script>

<style lang="less" scoped>
.row-95 {
  display: flex;
  flex-wrap: wrap;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-space-between {
  justify-content: space-between;
}
.justify-space-around {
  justify-content: space-around;
}
</style>
