<template>
  <li class="list-item-95" :class="{'disabled': disabled}" @click="handleClick">
    <slot v-if="!link"></slot>
    <a :href="link" style="text-decoration: none;" v-else>
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: 'ListItem95',
  props: {
    disabled: Boolean,
    square: Boolean,
    link: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },
}
</script>

<style lang="less" scoped>
li,
a {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
a {
  color: inherit;
  text-decoration: none;
}
li,
ul {
  list-style-type: none
}
.box-styles(@bgColor: #ced0cf, @color: #050608) {
  box-sizing: border-box;
  display: block;
  background-color: @bgColor;
  color: @color;
}
.list-item-95 {
  box-sizing: border-box;
  height: 43px;
  display: block;
  position: relative;
  width: auto;
  padding: 0 0.5rem;
  white-space: nowrap;
  text-align: left;
  line-height: 43px;
  color: #050608;
  &:hover {
    color: #ffffff;
    background: #000080;
    cursor: default;
  }
  &.disabled {
    .box-styles(#ced0cf, #888c8f);
    text-shadow: 1px 1px #ffffff;
  }
  &.square {
    text-align: center;
    width: 35px;
  }
}
</style>
