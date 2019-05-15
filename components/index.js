import Anchor95 from './Anchor95/index';
import AppBar95 from './AppBar95/index';
import Bar95 from './Bar95/index';
import ToolBar95 from './ToolBar95/index';
import Button95 from './Button95/index';

const components = [
  Anchor95,
  AppBar95,
  Bar95,
  ToolBar95,
  Button95,
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
  Anchor95,
  AppBar95,
  Bar95,
  ToolBar95,
  Button95,
};

export default {
  install,
  Anchor95,
  AppBar95,
  Bar95,
  ToolBar95,
  Button95,
};

