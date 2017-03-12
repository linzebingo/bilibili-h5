import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as videojs from 'video.js'

@Component
export default class Video extends Vue {
    video_url = 'http://cn-hbjz1-dx.acgvideo.com/vg4/c/e4/14966163-1.mp4?expires=1489296600&platform=html5&ssig=1xALpQF8HveUXo1LKCiAvA&oi=2003286138&nfa=BaDS8BUFZDb8iKo4Vfwarw==&dynamic=1'

    mounted() {
        const player = videojs('video-player')
        player.play();
    }
}