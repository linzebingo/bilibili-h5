import * as Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Api from '../api'

@Component({
    components: {  }
})
export default class Ranking extends Vue {
    rankItems = new Array<RankItem>()

    mounted() {
        this.fetchData()
    }

    fetchData() {
        Api.getAll70().then(response => {
            if (response.data.rank && response.data.rank.code === 0) {
                this.rankItems = response.data.rank.list.splice(0, 30)
            }else{
                console.error(response.data)
            }
        })
    }
}

interface BaseListResponse<T> {
    code: number;
    list: Array<T>;
    note: string;
    num: number;
    pages: number;
}

interface RankItem {
    aid: number;
    author: string;
    coins: number;
    duration: string;
    mid: number;
    pic: string;
    play: number;
    pts: number;
    title: string;
    trend: number;
    video_review: number;
}
