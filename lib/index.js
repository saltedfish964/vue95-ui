import Component1 from './component1/index.js';
import Component2 from './component2/index.js';

const components = [
  Component1,
  Component2,
];

function install (Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export {
  install,
  Component1,
  Component2,
};

export default {
  install,
  Component1,
  Component2,
};

