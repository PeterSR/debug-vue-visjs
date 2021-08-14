import Vue from 'vue'
import App from './App.vue'

//import { Timeline } from 'vue-visjs'

//Vue.component('timeline', Timeline)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
