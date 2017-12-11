import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import ListLevels from '@/components/ListLevels'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Menu', component: Menu },
    { path: '/niveau', name: 'niveau', component: ListLevels},
    { path: '/niveau/niveau1', name: 'niveau1', component: Level1}
  ]
})
