import { Vue } from 'av-ts'
import * as ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './views/app.vue'

import * as VueRouter from 'vue-router'
import * as Vuex from 'vuex'

import 'normalize.css'
import Index from './views/index.vue'

// Use plugin
Vue.use(VueRouter)
Vue.use(ElementUI)
// 或者可以按需引入需要的组件
// Vue.component(Button)

// Create the router
const Home = { template: '<div>Bilibili-h5 based on vue.js</div>' }
const Foo = { template: '<div>foo</div>' }
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/index', component: Index },
        { path: '/foo', component: Foo }
    ]
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
