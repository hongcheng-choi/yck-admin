import Vue from 'vue'
import 'normalize.css/normalize.css' // reset css
import ElementUI from 'element-ui' // 引入elemtnui
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // 全局样式 css
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
