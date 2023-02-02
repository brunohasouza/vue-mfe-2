import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import ContactPage from './views/ContactPage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
]

export default new VueRouter({
  routes,
  mode: 'history'
})