import * as Vue from 'vue'

import VueRouter from 'vue-router'
import * as Vuex from 'vuex'
import * as VueResource from 'vue-resource'
import * as FastClick from 'fastclick'

import 'normalize.css'
import App from './app.vue'
import Index from './views/index.vue'
import Video from './views/video.vue'
import filters from './filters'

// Use plugin
Vue.use(VueRouter)
Vue.use(VueResource)

// Create the router
const Channel = { template: '<div>channel</div>' }
const Live = { template: '<div>live</div>' }
const Ranking = { template: '<div>ranking</div>' }
const Space = { template: '<div>space</div>' }
const NotFound = { template: '<div>404 not found.</div>' }

// 路由懒加载
// const Bar = resolve => require.ensure([], () => resolve(require('./Bar.vue')), '/bar')
// const Baz = resolve => require.ensure([], () => resolve(require('./Baz.vue')), '/bar')
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
        { path: '/video/:id', component: Video },
        { path: '*', component: NotFound } //放在最后一个
    ],
    linkActiveClass: 'on'
})

router.beforeEach((to, from, next) => {
    console.log(`${from.fullPath}-->${to.fullPath}`)
    next()
})

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

document.addEventListener('load', () => {
    FastClick.attach(document.body)
})