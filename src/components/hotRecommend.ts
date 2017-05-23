import * as Vue from 'vue'
import Component from 'vue-class-component'
import Tools from '../common/Tools'
import Api from '../api'

@Component({
    components: {  }
})
export default class HotRecommend extends Vue {
    recommendItems: Array<RecommendItem> = null
    showError = false
    loading = true

    mounted() {
        this.fetchData();
    }

    fetchData() {
        Api.getRanking3day().then(response => {
            this.loading = false
            this.handleData(response.data as RecommendItemsResponse)
        }, response => {
            Tools.Error('fetch ranking-3day failed')
            this.loading = false
            this.showError = true
        })
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
