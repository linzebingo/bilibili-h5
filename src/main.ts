import 'normalize.css'
import './mixin'
import * as config from '../config'

import * as Vue from 'vue'
import VueRouter from 'vue-router'
import * as Vuex from 'vuex'
import * as VueResource from 'vue-resource'
import * as FastClick from 'fastclick'

import App from './app.vue'
import filters from './filters'
import routes from './router'
import Tools from './common/Tools'

// Use plugin
Vue.use(VueResource)

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
    document.title = to.meta.title
    next()
})

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

// use fastclick to solve 300ms delay in webapp
if ('addEventListener' in document) {
    Tools.Log('document loaded, attatch fastclick')
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}
