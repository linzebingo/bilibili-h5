import './polyfills'
import 'normalize.css'
import './mixin'
import * as config from '../config'

import * as Vue from 'vue'
import VueRouter from 'vue-router'

import VueResource from 'vue-resource'
import * as FastClick from 'fastclick'

import App from './App.vue'
import filters from './filters'
import routes from './router'
import store from './store'
import Tools from './common/Tools'
import LazyLoad from './directive/lazyLoad'

// Use plugin
Vue.use(VueResource)
Vue.use(LazyLoad)


// Create the router
Tools.Log('process.env = ' + process.env.NODE_ENV)
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: process.env.NODE_ENV === JSON.parse(config.dev.env.NODE_ENV) ? config.dev.assetsPublicPath : config.build.assetsPublicPath,
    routes,
    linkActiveClass: 'on',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
router.beforeEach((to, from, next) => {
    Tools.Log(`route ${from.fullPath}-->${to.fullPath}`)
    document.title = to.name
    next()
})

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// use fastclick to solve 300ms delay in webapp
if ('addEventListener' in document) {
    Tools.Log('document loaded, attatch fastclick')
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}
