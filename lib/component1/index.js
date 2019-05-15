import Component1 from './src/main.vue';

Component1.install = function (Vue) {
  Vue.component(Component1.name, Component1);
};

export default Component1;