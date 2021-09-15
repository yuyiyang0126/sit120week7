import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mycar from '../views/Mycar.vue'
import Checklist from '../views/Checklist.vue'
import Contact from '../views/Contact.vue'
import Subscribe from '../views/Subscribe.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path:'/mycar',
    name:'Mycar',
    component:Mycar
  },{
    path:'/checklist',
    name:'Checklist',
    component:Checklist
  },{
    path:'/contact',
    name:'Contact',
    component:Contact
  },{
    path:'/subscribe',
    name:'Subscribe',
    component:Subscribe
  }
]

const router = new VueRouter({
  routes
})

export default router
