<template>
    <div class="slider-wrapper" :style="{ height : wrapperHight + 'px' }">
        <div class="slider-bg"></div>
            <div>
                <div class="swipe" id="slider" ref="swipe">
                    <div class="swipe-wrap">
                        <a href="http://www.bilibili.com/blackboard/activity-HkLTMxVql.html">
                            <img src="//i0.hdslb.com/bfs/archive/c600abe201fd6de965674fe511edad016c68cac5.jpg" alt="番剧0305">
                        </a>
                        <a href="http://www.bilibili.com/blackboard/activity-H1TRm6Lcx.html">
                            <img src="//i0.hdslb.com/bfs/archive/4770beddd7e6333957a27989b99bda366e0ab8c2.jpg" alt="游戏0303">
                        </a>
                    </div>
                </div>
                <div class="swipe-btn-wrapper">
                    <div class="swipe-btn-list">
                        <a :class="[active===0?activeClass:'']" @click="switchSwipe($event,0)"></a>
                        <a :class="[active===1?activeClass:'']" @click="switchSwipe($event,1)"></a>
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
            >a{
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
