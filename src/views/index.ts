// import { Component, Vue } from 'av-ts'
import * as Vue from 'vue'
import Component from 'vue-class-component'
import Slider from 'components/slider.vue'
import HotRecommend from '../components/hotRecommend.vue'
import LiveRecommend from '../components/liveRecommend.vue'
import BangumiRecommend from '../components/bangumiRecommend.vue'

@Component({
    components: { Slider, HotRecommend, LiveRecommend, BangumiRecommend }
})
export default class Index extends Vue {

}