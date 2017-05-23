import * as Vue from 'vue'
import Vuex from 'vuex'

const LOGIN_BY_PHONE = 'LOGIN_BY_PHONE'
const SET_USER_INFO = 'SET_USER_INFO'
const LOG_OUT = 'LOG_OUT'
const SET_TOKEN = 'SET_TOKEN'

Vue.use(Vuex)

const DEFAULT_USER_INFO = {
    avatar: '//i2.hdslb.com/bfs/face/1f8ad0f8334d82605cdc8782df3b73192c34168c.jpg',
    name: '夜袭蛋糕店',
    coin: '278'
}
const GUEST_USER_INFO = {
    avatar: '//static.hdslb.com/mobile/img/default_avatar.png',
    name: '游客',
    coin: ''
}
const store = new Vuex.Store({
    state: {
        count: 0,
        userInfo: GUEST_USER_INFO,
        token: '',
        roles: ['USER']
    },
    mutations: {
        [SET_USER_INFO](state, userInfo) {
            state.userInfo = userInfo
        },
        [SET_TOKEN](state, token) {
            state.token = token
        }
    },
    actions: {
        [LOGIN_BY_PHONE]({ commit }, loginForm) {
            const { username, password } = loginForm
            // get data from backend
            return new Promise((resolve, reject) => {
                if (username === '150' && password === '123') {
                    commit(SET_USER_INFO, DEFAULT_USER_INFO)
                    commit(SET_TOKEN, '01000110100101')
                    resolve()
                } else {
                    reject('用户名或密码错误')
                }
            })
        },
        [LOG_OUT]({ commit }) {
            commit(SET_USER_INFO, GUEST_USER_INFO)
            commit(SET_TOKEN, '')
        }
    }
})

export default store
