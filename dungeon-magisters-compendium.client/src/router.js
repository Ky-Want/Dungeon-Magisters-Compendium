import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/worldbuilding',
    name: 'WorldBuilding',
    component: loadPage('WorldBuildingPage')
  },
  {
    path: '/social',
    name: 'Social',
    component: loadPage('SocialPage')
  },
  {
    path: '/houserules',
    name: 'HouseRules',
    component: loadPage('HouseRulesPage')
  },
  {
    path: '/campaigns',
    name: 'Campaigns',
    component: loadPage('CampaignsPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
