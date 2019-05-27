<template>
  <div id="app">
    <Cutout95>156156561</Cutout95>
    <br>
    <Cutout95 :shadow="true">156156561</Cutout95>
    <br>

    <CheckBox95>Steak🍕</CheckBox95>

    <CheckBox95 disabled>Steak🍕</CheckBox95>

    <CheckboxGroup95 :max="2" v-model="checked">
      <CheckBox95 label="A">A</CheckBox95>
      <CheckBox95 label="B">B</CheckBox95>
      <CheckBox95 label="C">C</CheckBox95>
    </CheckboxGroup95>

    {{checked}}
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      checked: []
    }
  },
};
</script>

<style>
body {
  background: #ced0cf;
}
</style>
