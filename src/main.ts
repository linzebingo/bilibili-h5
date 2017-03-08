import * as Vue from 'vue'

import VueRouter from 'vue-router'
import * as Vuex from 'vuex'
import * as VueResource from 'vue-resource'

import 'normalize.css'
import App from './views/App.vue'
import Index from './views/index.vue'

// Use plugin
Vue.use(VueRouter)
Vue.use(VueResource)
// 或者可以按需引入需要的组件
// Vue.component(Button)

// Create the router
const Channel = { template: '<div>channel</div>' }
const Live = { template: '<div>live</div>' }
const Ranking = { template: '<div>ranking</div>' }
const Space = { template: '<div>space</div>' }
const NotFound = { template: '<div>404 not found</div>' }
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', redirect: '/index' }, // 将根路径重定向到/index路径
        { path: '/index', component: Index },
        { path: '/channel', component: Channel },
        { path: '/live', component: Live },
        { path: '/ranking', component: Ranking },
        { path: '/space', component: Space },
        { path: '*', component: NotFound }
    ],
    linkActiveClass: 'on'
})

router.beforeEach((to, from, next) => {
    console.log(`${from.fullPath}-->${to.fullPath}`)
    next()
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
