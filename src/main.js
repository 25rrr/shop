import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://liufusong.top:8899/api/private/v1/'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
