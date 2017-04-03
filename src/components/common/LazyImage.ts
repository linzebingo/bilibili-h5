import * as Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

var count = 0
@Component
export default class LazyImage extends Vue {
    @Prop
    src: string

    loaded = false
    config = {
        defaultImg: "http://static.hdslb.com/images/v3images/img_loading.png",
        distance: 100
    }
    innerStyle = {
        backgroundImage: ``,
        opacity: 0
    }

    onScrollHandler = () => {
        this.show()
    }

    mounted() {
        window.addEventListener('scroll', this.onScrollHandler)
        window.addEventListener('orientationchange', () => {
            this.show()
        })
        this.show()
    }

    show() {
        if (this.loaded === true) {
            return
        }
        this.innerStyle.backgroundImage = `url('${this.config.defaultImg}')`
        if (this.$el.getBoundingClientRect().top - this.config.distance < document.documentElement.clientHeight) {
            window[`lzb${count++}`] = this.$el;
            var oImg = new Image();
            oImg.src = this.src;
            oImg.onload = (ev) => {
                this.innerStyle.backgroundImage = `url('${this.src}')`
                this.innerStyle.opacity = 1;
            }
            this.loaded = true
            window.removeEventListener('scroll', this.onScrollHandler)
            oImg.onerror = (ev) => {
                console.error(ev)
            }
        }
    }
}
