import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'
import Trades from '@/components/Trades.vue'
import Analytics from '@/components/Analytics.vue'
import Settings from '@/components/Settings.vue'

const routes = [
    {path: '/', name: 'Dashboard', compoment: Dashboard},
    {path: '/trades', name: 'Trades', component: Trades},
    {path: '/analytics', name: 'Analytics', component: Analytics},
    {path: '/settings', name: 'Settings', component: Settings}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;