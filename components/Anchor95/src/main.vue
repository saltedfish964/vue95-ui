<template>
  <a :href="href" class="anchor-95">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'Anchor95',
  props: {
    href: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../common/reset.css';
.anchor-95 {
  color: #1034a6;
  font-size: inherit;
  text-decoration: underline;
  &:visited {
    color: #440381;
  }
}
</style>
