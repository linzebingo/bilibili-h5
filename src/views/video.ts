import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as videojs from 'video.js'

@Component
export default class Video extends Vue {
    video_url = 'http://cn-zjwz1-dx.acgvideo.com/vg9/9/b9/14957862-1.mp4?expires=1489137000&platform=html5&ssig=HxVXnP0udXyyvmeBUKggjg&oi=1961111638&nfa=BaDS8BUFZDb8iKo4Vfwarw==&dynamic=1'

    mounted() {
        const player = videojs('video-player')
        player.play();
    }
}