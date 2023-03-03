import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(dataV)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
