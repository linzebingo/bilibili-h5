import Swipe = require('swipejs') // https://github.com/lyfeyaj/swipe
// import * as Swipe from 'swipejs'
import * as Vue from 'vue'
import Component from 'vue-class-component'
import Api from '../api'

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

@Component
export default class Slider extends Vue {

    active = 0
    activeClass = "on"
    swiper: Swipe = null
    showError = false
    sliderItems = new Array<Banner>();

    get wrapperHight() {
        return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 3.2;
    }

    mounted() {
        this.fetchData();
    }

    fetchData() {
        Api.getBannerList().then(response => {
            // success callback
            this.sliderItems = response.data['data'] || [];
            this.$nextTick(() => {
                this.initSwipe()
            });
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
