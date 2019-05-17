import Vue from 'vue'
import App from './App.vue'
import vue95 from '../components/index';

Vue.use(vue95);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
