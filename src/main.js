import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import navTop from '@/components/common/navTop'
import articleList from '@/components/common/articleList'
import remarks from '@/components/common/remarks'
import { BIcon, BIconTriangle, BIconTriangleFill } from 'bootstrap-vue'
import userCol from '@/components/common/userCol'
import global from './components/common/global'
import login from './components/common/login'

Vue.prototype.global = global;

Vue.config.productionTip = false
Vue.component('BIcon', BIcon)
Vue.component('BIconTriangle', BIconTriangle)
Vue.component('BIconTriangleFill', BIconTriangleFill)
Vue.component('yx-remarks', remarks)
Vue.component('nav-top', navTop)
Vue.component('article-list', articleList)
Vue.component('user-col',userCol)
Vue.component('log-in',login)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
