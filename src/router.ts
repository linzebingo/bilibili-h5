import Index from './views/index.vue'
import Video from './views/video.vue'
import Space from './views/space.vue'
import History from './views/history.vue'

const Channel = { template: '<div>channel</div>' }
const Live = { template: '<div>live</div>' }
const Ranking = { template: '<div>ranking</div>' }
const NotFound = { template: '<div>404 not found.</div>' }

export default [
    { path: '/', redirect: '/index' }, // 将根路径重定向到/index路径
    { path: '/index', component: Index },
    { path: '/channel', component: Channel },
    { path: '/live', component: Live },
    { path: '/ranking', component: Ranking },
    { path: '/space', component: Space },
    { path: '/video/:id', component: Video },
    { path: '/history', component: History },
    { path: '*', component: NotFound } //放在最后一个
]