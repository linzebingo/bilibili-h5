import * as Vue from 'vue'
import Component from 'vue-class-component'


@Component
export default class HotRecommend extends Vue {
    recommendItems: Array<RecommendItem> = null
    showError = false
    loading = false
    defaultImg = {
        backgroundImage: "url(//static.hdslb.com/images/v3images/img_loading.png)",
        backgroundSize: "contain"
    }

    mounted() {
        this.fetchData();
    }

    handleData(resp: RecommendItemsResponse) {
        var itemArray = new Array<RecommendItem>(), limit = 4
        if (resp.recommend && 0 === resp.recommend.code) {
            for (let item in resp.recommend.list) {
                if (limit <= 0) { break }
                resp.recommend.list[item].link = "/video/av" + resp.recommend.list[item].aid
                itemArray.push(resp.recommend.list[item])
                limit--
            }
        }
        this.recommendItems = itemArray
    }

    fetchData() {
        this.loading = true
        this.$http.get("//www.bilibili.com/index/ranking-3day.json", { credentials: false }).then(response => {
            this.loading = false;
            this.handleData(response.data as RecommendItemsResponse)
        }, response => {
            console.error('fetch ranking-3day failed')
        })

        this.loading = false
    }

    delayImg() {
        //TODO
        //this.$nextTick(function () { l.lazyImage.lazy($(g)) })
    }
}


interface RecommendItem {
    aid: string,
    typename: string,
    title: string,
    subtitle: string,
    play: number,
    review: number,
    preview?: number,
    video_review: number,
    favorites: number,
    mid: number,
    author: string,
    description: string,
    create: string,
    pic: string,
    coins: number,
    duration: string,
    badgepay: boolean,
    link?: string
}
interface RecommendItemsResponse {
    recommend: {
        code: number,
        pages: number,
        num: number,
        list: { [index: number]: RecommendItem }
    }
}