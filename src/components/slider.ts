import { Vue, Component, Lifecycle } from 'av-ts'
import Swipe = require('swipejs') // https://github.com/lyfeyaj/swipe

@Component()
export default class Slider extends Vue {

    active = 0
    activeClass = "on"
    swiper: Swipe = undefined


    get wrapperHight() {
        return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 3.2;
    }

    @Lifecycle mounted() {
        this.initSwipe();
    }

    initSwipe() {
        var element = document.getElementById('slider');
        this.swiper = new Swipe(element, {
            startSlide: 0,
            auto: 3000,
            draggable: false,
            autoRestart: true,
            continuous: true,
            disableScroll: true,
            stopPropagation: true,
            callback:  (index, element) => { this.active = index; },
            transitionEnd:  (index, element) => { }
        });
    }

    switchSwipe(event: Event, index: number) {
        event.preventDefault()
        this.swiper.slide(index, 300)
    }
}
