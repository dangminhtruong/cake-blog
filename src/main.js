import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/home.scss';
import { createRouter } from '@/routers'
import store from '@/store'
import VueProgressBar from 'vue-progressbar'
import * as VeeValidate from 'vee-validate';

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(VueProgressBar,  {
  color: "#67c23a",
  thickness: "5px",
})
Vue.use(VeeValidate);
const router = createRouter()

export default new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')