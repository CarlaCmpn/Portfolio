import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import About from '../pages/About/About.vue'
import Contact from '../pages/Contact/Contact.vue'
import Project from '../pages/Project/Project.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: 'https://gallant-shockley-e20d52.netlify.app/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/project/:name',
      name: 'project',
      component: Project
    }
  ]
})
