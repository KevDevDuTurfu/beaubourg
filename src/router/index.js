import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import ListLevels from '@/components/ListLevels'
import Level1 from '@/components/Level1'
import Level2 from '@/components/Level2'
import Level3 from '@/components/Level3'
import Level4 from '@/components/Level4'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Menu', component: Menu },
    { path: '/niveau', name: 'niveau', component: ListLevels},
    { path: '/niveau1', name: 'niveau1', component: Level1},
    { path: '/niveau2', name: 'niveau2', component: Level2},
    { path: '/niveau3', name: 'niveau3', component: Level3},
    { path: '/niveau4', name: 'niveau4', component: Level4}
  ]
})
