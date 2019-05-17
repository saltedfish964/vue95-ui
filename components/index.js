import Anchor95 from './Anchor95/index';
import AppBar95 from './AppBar95/index';
import Bar95 from './Bar95/index';
import ToolBar95 from './ToolBar95/index';
import Button95 from './Button95/index';
import Col95 from './Col95/index';
import Row95 from './Row95/index';
import List95 from './List95/index';
import ListItem95 from './ListItem95/index';

const components = [
  Anchor95,
  AppBar95,
  Bar95,
  ToolBar95,
  Button95,
  Col95,
  Row95,
  List95,
  ListItem95,
];

function install (Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  Anchor95,
  AppBar95,
  Bar95,
  ToolBar95,
  Button95,
  Col95,
  Row95,
  List95,
  ListItem95,
};

export default {
  install,
  Anchor95,
  AppBar95,
  Bar95,
  ToolBar95,
  Button95,
  Col95,
  Row95,
  List95,
  ListItem95,
};

