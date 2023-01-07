import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Pflanzen from '../views/Pflanzens.vue'
import FindMore from '@/views/FindMore'
import Submit from '@/views/Submit'
// eslint-disable-next-line import/no-duplicates
import SignupComponent from '@/views/Signup'
import LoginComponent from '@/views/Login'
import ProfileComponent from '@/views/Profile'
import { LoginCallback, navigationGuard } from '@okta/okta-vue'
import Winter from '@/views/Winter'
import Autumn from '@/views/Autumn'
import Summer from '@/views/Summer'
import Spring from '@/views/Spring'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/pflanzen',
    name: 'Pflanzen',
    component: Pflanzen
  },
  {
    path: '/findmore',
    name: 'FindMore',
    component: FindMore
  },
  {
    path: '/submit',
    name: 'Submit',
    component: Submit
  },
  {
    path: '/winter',
    name: 'Winter',
    component: Winter
  },
  {
    path: '/autumn',
    name: 'Autumn',
    component: Autumn
  },
  {
    path: '/summer',
    name: 'Summer',
    component: Summer
  },
  {
    path: '/spring',
    name: 'Spring',
    component: Spring
  },
  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/signup',
    component: SignupComponent
  },
  {
    path: '/login/callback',
    component: LoginCallback
  },
  {
    path: '/profile',
    component: ProfileComponent,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(navigationGuard)

export default router
