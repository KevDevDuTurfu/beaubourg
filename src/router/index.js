import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import ListLevels from '@/components/ListLevels'
import Level1 from '@/components/Level1'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Menu', component: Menu },
    { path: '/niveau', name: 'niveau', component: ListLevels},
    { path: '/niveau1', name: 'niveau1', component: Level1}
  ]
})
