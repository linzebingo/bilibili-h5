import { Vue } from 'av-ts'
import * as ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI)

// 或者可以按需引入需要的组件
// Vue.component(Button)
new Vue({
    render: h => h(App)
}).$mount('#app')
