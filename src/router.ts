import Index from './views/index.vue'
import Video from './views/video.vue'
import Space from './views/space.vue'
import History from './views/history'
import Wrapper from './views/navWrapper.vue'
import Channel from './views/channel.vue'
import Ranking from './views/ranking.vue'
import Login from './views/login.vue'

const Live = { template: '<div>live</div>' }
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
                name: '首页',
                meta: { title: '首页' }
            },
            {
                path: '/channel',
                component: Channel,
                name: '频道',
                meta: { title: '频道' }
            },
            {
                path: '/live',
                component: Live,
                name: '直播',
                meta: { title: '直播' }
            },
            {
                path: '/ranking',
                component: Ranking,
                name: '排行榜',
                meta: { title: '排行榜' }
            },
            {
                path: '/space',
                component: Space,
                name: '我的',
                meta: { title: '我的' }
            },
            {
                path: '/history',
                component: History,
                name: '历史',
                meta: { title: '历史' }
            },
            {
                path: '/login',
                component: Login,
                name: '登录',
                meta: { title: '登录' }
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
