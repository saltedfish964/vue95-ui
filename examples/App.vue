<template>
  <div id="app">
    <Cutout95>156156561</Cutout95>
    <br>
    <Cutout95 :shadow="true">156156561</Cutout95>
    <br>

    <CheckBox95 v-model="msg">Steak🍕</CheckBox95>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      msg: true
    }
  },

  methods: {
    resetMsg() {
      this.msg = '';
    },
  }
};
</script>

<style>
body {
  background: #ced0cf;
}
</style>
