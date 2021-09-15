import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mdlist from './components/Mdlist'

Vue.config.productionTip = false
Vue.component("Mdlist",Mdlist)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
