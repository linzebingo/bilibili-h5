import * as Vue from 'vue'

export default {
    getPlayURL(aid: string) {
        const url = `//api.bilibili.com/playurl?callback=jQuery17204299305679106269_1490163840108&aid=${aid}&page=1&platform=html5&quality=1&vtype=mp4&type=jsonp&token=&_=1490163840195`
        return Vue.http.jsonp(url)
    },
    getBangumiList() {
        const url = '//www.bilibili.com/api_proxy?app=bangumi&action=timeline_v2';
        return Vue.http.get(url)
    },
    getChannelList() {
        const url = '//m.bilibili.com/index/ding.html'
        return Vue.http.get(url)
    },
    getRanking3day() {
        const url = '//www.bilibili.com/index/ranking-3day.json';
        return Vue.http.get(url)
    },
    getRecommendRooms() {
        const url = '//api.live.bilibili.com/h5/recommendRooms'
        return Vue.http.jsonp(url)
    },
    getBannerList(){
        const url = '//api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695'
        return Vue.http.jsonp(url)
    }
}
