import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from "./store";
import Vuelidate from 'vuelidate'
import './axios'
Vue.config.productionTip = true



Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
