import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import i18n from '@/plugins/i18n'
import 'babel-polyfill'

Vue.config.productionTip = false

Vue.use(VModal, { dialog: true, dynamic: true, injectModalsContainer: false })

// BaseAPI.init()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
