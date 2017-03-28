import * as Vue from 'vue'
import Component from 'vue-class-component'
import Api from '../api'
import LazyImage from './common/LazyImage.vue'

@Component({
    components: { LazyImage }
})
export default class LiveRecommend extends Vue {
    loading = true
    liveItems = new Array<LiveRecommendItem>()
    showError = false

    mounted() {
        this.fetchData()
    }

    fetchData() {
        Api.getRecommendRooms().then(response => {
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