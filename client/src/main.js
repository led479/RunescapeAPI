import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import App from './App'
import axios from 'axios'

import './config/bootstrap' 

import store from './config/store'
import router from './config/router'

Vue.use(VueProgressBar, {
  color: '#ffe1a9',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  inverse: false
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
