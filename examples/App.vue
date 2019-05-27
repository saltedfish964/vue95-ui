<template>
  <div id="app">
    <br>
    <Cutout95>156156561</Cutout95>
    <br>
    <Window95>
      <WindowContent95>
        <Cutout95 class="mycutout" :shadow="true">156156561</Cutout95>
      </WindowContent95>
    </Window95>
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

.mycutout {
  width: 200px;
  height: 300px;
}

#app {
  padding: 0 20px;
}
</style>
