import Index from './views/index.vue'
import Video from './views/video.vue'
import Space from './views/space.vue'
import History from './views/history.vue'
import Wrapper from './views/navWrapper.vue'

const Channel = { template: '<div>channel</div>' }
const Live = { template: '<div>live</div>' }
const Ranking = { template: '<div>ranking</div>' }
const NotFound = { template: '<div>404 not found.</div>' }

export default [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: Wrapper,
        children: [
            {
                path: '/',
                component: Index,
                meta: { title: '首页' }
            },
            {
                path: '/channel',
                component: Channel,
                meta: { title: '频道' }
            },
            {
                path: '/live',
                component: Live,
                meta: { title: '直播' }
            },
            {
                path: '/ranking',
                component: Ranking,
                meta: { title: '排行榜' }
            },
            {
                path: '/space',
                component: Space,
                meta: { title: '我的' }
            }
        ]
    },
    {
        path: '/video/:id',
        component: Video
    },
    {
        path: '*',
        component: NotFound,
        meta: { title: '出错啦!' }
    } //放在最后一个
]
