import * as Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Api from '../api'

@Component({
    components: {  }
})
export default class BangumiRecommend extends Vue {
    showError = false
    loading = true
    bangumiItems = new Array<BangumiInfo>()

    mounted() {
        this.fetcData();
    }

    fetcData() {
        Api.getBangumiList().then(response => {
            this.loading = false
            var jsonData = response.data as BaseListResponse<BangumiInfo>
            if (jsonData && jsonData.code === 0) {
                this.bangumiItems = jsonData.list.splice(0, 6)
                this.delayImage()
            } else {
                this.showError = true
            }
        }, response => {
            this.loading = false
            this.showError = true
        })
    }

    delayImage() {
        this.$nextTick(() => {

        })
    }
}

interface BaseListResponse<T> {
    code: number;
    count: string;
    message: string;
    list: Array<T>
}
interface BangumiInfo {
    area: string;
    arealimit: number;
    attention: number;
    bangumi_id: number;
    bgcount: number;
    cover: string;
    danmaku_count: number;
    favorites: number;
    is_finish: number;
    lastupdate: number;
    lastupdate_at: string;
    new: boolean;
    play_count: number;
    pub_time: string;
    season_id: number;
    season_status: number;
    spid: number;
    square_cover: string;
    title: string;
    url: string;
    viewRank: number;
    weekday: number;
}
