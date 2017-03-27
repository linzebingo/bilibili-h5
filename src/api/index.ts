import * as Vue from 'vue'

export default {
    getPlayURL(aid: string) {
        const url = `http://api.bilibili.com/playurl?callback=jQuery17204299305679106269_1490163840108&aid=${aid}&page=1&platform=html5&quality=1&vtype=mp4&type=jsonp&token=&_=1490163840195`
        return Vue.http.jsonp(url)
    },
    getBangumiList() {
        const url = 'http://www.bilibili.com/api_proxy?app=bangumi&action=timeline_v2';
        return Vue.http.get(url)
    }
}