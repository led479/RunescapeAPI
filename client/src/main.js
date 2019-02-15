import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App'
import axios from 'axios'

import './config/bootstrap' 

import store from './config/store'
import router from './config/router'


Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
