import * as Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Api from '../api'

@Component
export default class BangumiRecommend extends Vue {
    showError = false
    bangumiItems
    mounted() {
        this.fetcData();
    }

    fetcData() {
        Api.getBangumiList().then(response => {

        }, response => {
            console.error(response)
            this.showError = true
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

}