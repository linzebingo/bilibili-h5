import { Vue, Component, Lifecycle } from 'av-ts'
import Swipe = require('swipejs') // https://github.com/lyfeyaj/swipe

interface Banner {
    id: number;
    contract_id: string;
    pos_num: number;
    name: string;
    pic: string;
    litpic: string;
    url: string;
    style: number;
    agency: string;
    label: string;
    intro: string;
    area: number;
    is_ad_loc: boolean;
    ad_cb: string;
    titile: string;
}

@Component()
export default class Slider extends Vue {

    active = 0
    activeClass = "on"
    swiper: Swipe = undefined
    showError = false
    sliderItems = new Array<Banner>();


    get wrapperHight() {
        return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 3.2;
    }

    @Lifecycle mounted() {
        this.fetchData();
    }

    fetchData() {
        this.$http.jsonp('http://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695').then(response => {
            // success callback
            this.sliderItems = response.data['data'] || [];
            this.$nextTick(() => this.initSwipe());
        }, response => {
            // error callback
            this.showError = true;
        })

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
            callback: (index, element) => { this.active = index; },
            transitionEnd: (index, element) => { }
        });
    }

    switchSwipe(event: Event, index: number) {
        event.preventDefault()
        this.swiper.slide(index, 300)
    }
}
