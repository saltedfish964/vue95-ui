<template>
  <div id="app">
    <br>
    <Cutout95>156156561</Cutout95>
    <br>
    <Cutout95 :shadow="true">156156561</Cutout95>
    <br>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
    }
  },
};
</script>

<style>
body {
  background: #ced0cf;
}

#app {
  padding: 0 20px;
}
</style>
