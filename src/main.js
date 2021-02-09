import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery'
import VueRouter from 'vue-router';

//Import de Components
import Home from './components/Home';



Vue.use(BootstrapVue)
Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {path: '/home', component: Home},
  {path: '/', component: Home}
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

window.$ = $

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
