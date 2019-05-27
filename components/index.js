import Anchor95 from './Anchor95/index';
import AppBar95 from './AppBar95/index';
import Bar95 from './Bar95/index';
import ToolBar95 from './ToolBar95/index';
import Button95 from './Button95/index';
import Col95 from './Col95/index';
import Row95 from './Row95/index';
import List95 from './List95/index';
import ListItem95 from './ListItem95/index';
import CheckBox95 from './CheckBox95/index';
import Cutout95 from './Cutout95/index';
import TextField95 from './TextField95/index';
import CheckboxGroup95 from './CheckboxGroup95/index';
import WindowContent95 from './WindowContent95/index';
import Window95 from './Window95/index';

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
  CheckBox95,
  Cutout95,
  TextField95,
  CheckboxGroup95,
  WindowContent95,
  Window95,
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
  CheckBox95,
  Cutout95,
  TextField95,
  CheckboxGroup95,
  WindowContent95,
  Window95,
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
  CheckBox95,
  Cutout95,
  TextField95,
  CheckboxGroup95,
  WindowContent95,
  Window95,
};

