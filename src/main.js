import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueChatScroll from 'vue-chat-scroll'
import bootstrapvue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(VueChatScroll)
Vue.use(bootstrapvue)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
