<template>
    <div class="slider-wrapper" :style="{ height : wrapperHight + 'px' }">
        <div class="slider-bg"></div>
        <div>
            <div class="swipe" id="slider" ref="swipe">
                <div class="swipe-wrap">
                    <a v-for="item in sliderItems" :href="item.url">
                        <img :src="item.pic" alt="item.name">
                    </a>
                </div>
            </div>
            <div class="swipe-btn-wrapper">
                <div class="swipe-btn-list">
                    <a v-for="(item,$index) in sliderItems" :class="[$index ===active?activeClass:'']" @click="switchSwipe($event,$index)">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./slider.ts"></script>

<style lang="scss">
.slider-wrapper {
    position: relative;
    margin-bottom: 12px;
    overflow: hidden;
    .slider-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }
    .swipe {
        position: relative;
        overflow: hidden;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        height: 175px;
    }
    .swipe-wrap {
        overflow: hidden;
        position: relative;
        >a {
            display: block;
            float: left;
            position: relative;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .swipe-btn-wrapper {
        position: absolute;
        left: 0;
        bottom: 3px;
        z-index: 20;
        width: 100%;
        text-align: center;
        height: 1rem;
        line-height: 1rem;
        .swipe-btn-list {
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            padding: 0 5px;
            display: inline-block;
            a {
                width: 6px;
                height: 6px;
                float: left;
                border-radius: 3px;
                background-color: #fff;
                margin: 3px;
                &.on {
                    background-color: #de698c;
                }
            }
        }
    }
}
</style>
