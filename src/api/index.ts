import * as Vue from 'vue'

export default {
    /**
     * 获取视频的播放地址
     * @param aid
     */
    getPlayURL(aid: string) {
        const url = `//api.bilibili.com/playurl?callback=jQuery17204299305679106269_1490163840108&aid=${aid}&page=1&platform=html5&quality=1&vtype=mp4&type=jsonp&token=&_=1490163840195`
        return Vue.http.jsonp(url)
    },
    /**
     * 获取视频的推荐列表
     */
    getBangumiList() {
        const url = '//www.bilibili.com/api_proxy?app=bangumi&action=timeline_v2';
        return Vue.http.get(url)
    },
    /**
     * 获取各个频道的前十推荐
     */
    getChannelList() {
        const url = '//m.bilibili.com/index/ding.html'
        return Vue.http.get(url)
    },
    /**
     * 获取热门推荐
     */
    getRanking3day() {
        const url = '//www.bilibili.com/index/ranking-3day.json';
        return Vue.http.get(url)
    },
    /**
     * 货值推荐的视频直播间
     */
    getRecommendRooms() {
        const url = '//api.live.bilibili.com/h5/recommendRooms'
        return Vue.http.jsonp(url)
    },
    /**
     * 获取首页的轮播图片
     */
    getBannerList(){
        const url = '//api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695'
        return Vue.http.jsonp(url)
    },
    /**
     * 获取视频的回复信息
     * @param aid 视频id
     */
    getReply(aid: string) {
        const url = `http://api.bilibili.com/x/v2/reply?callback=jQuery172036985232783181954_1490711543034&jsonp=jsonp&type=1&sort=2&oid=${aid}&pn=1&nohot=1&_=1490711543368`
        return Vue.http.jsonp(url)
    },
    /**
     * 获取视频统计信息
     * @param aid 视频id
     */
    getStat(aid: string) {
        const url = `http://api.bilibili.com/archive_stat/stat?callback=jQuery172036985232783181954_1490711543035&aid=${aid}&type=jsonp&=1490711543393`
        return Vue.http.jsonp(url)
    }
}
