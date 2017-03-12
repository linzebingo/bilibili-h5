import * as Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class LiveRecommend extends Vue {
    loading = true
    liveItems: Array<LiveRecommendItem> = null
    showError = false
    defaultImg = {
        backgroundImage: "url(//static.hdslb.com/images/v3images/img_loading.png)",
        backgroundSize: "contain"
    }

    mounted() {
        this.fetchData()
    }

    fetchData() {
        this.$http.jsonp('//api.live.bilibili.com/h5/recommendRooms').then(response => {
            this.loading = false
            let data = response.data as LiveRecommendsResp
            if (data && 0 === data.code) {
                let list = data.data || []
                list.slice(0, 4)
                this.liveItems = list
            } else {
                this.showError = true
            }
        }, response => {
            this.loading = false
            this.showError = true
        })
    }

    //TODO
    delayImg() {
        this.$nextTick(() => {

        })
    }
}

interface LiveRecommendsResp {
    code: number;
    msg: string,
    data: Array<LiveRecommendItem>
}

interface LiveRecommendItem {
    roomid: number;
    link: string;
    uname: string;
    face: string;
    cover: string;
    title: string;
    online: number;
}