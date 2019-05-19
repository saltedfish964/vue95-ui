<template>
  <div id="app">
    <Cutout95>156156561</Cutout95>
    <br>
    <Cutout95 :shadow="true">156156561</Cutout95>
    <br>

    <TextField95 v-model="msg" :shadow="true" :width="200"></TextField95>
    <button95 @click="resetMsg">Reset</button95>
    <TextField95 v-model="msg" :shadow="false"></TextField95>
    <button95 @click="resetMsg">Reset</button95>
  </div>
</template>

<script>

export default {
  name: "app",

  data() {
    return {
      msg: 'Hello World!'
    }
  },

  methods: {
    resetMsg() {
      this.msg = '';
    }
  }
};
</script>

<style>
body {
  background: #ced0cf;
}
</style>
