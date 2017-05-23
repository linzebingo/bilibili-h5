<template>
    <div id="app">

        <!-- loading-cover and nav-bar -->
        <div class="app"
             :class="{appload:appload}">
            <div class="load-cover"
                 v-show="!appload">
                <div class="loading-text">(´・ω・｀)正在加载...</div>
            </div>
            <nav class="nav-bar">
                <div class="nav-wrp">
                    <router-link to="/index" class="logo"></router-link>
                    <router-link to="/history" class="cell"><i class="nav-icon icon-history"></i>历史</router-link>
                    <a href="javascript:void(0);" class="cell" @click="show_search=true"><i class="nav-icon icon-search"></i>搜索</a>
                </div>
            </nav>
        </div>

        <!-- search panel -->
        <div class="search toggle-panel" v-show="show_search" >
            <div class="toggle-panel-bg"></button></div>
            <div class="toggle-panel-inner">
                <div class="search-bar">
                    <form action="">
                        <input type="text" name="keyword" placeholder="搜索视频、番剧、up主或AV号">
                    </form>
                    <a class="search-cancel" @click="show_search=false">取消</a>
                </div>
                <div class="search-wrapper">
                    <div class="hot-wrapper">
                        <div class="title">
                            <span class="line"></span>
                            <span class="name">热门搜索</span>
                            <span class="line"></span>
                        </div>
                        <div class="hot-content clearfix">
                            <a class="hot-item">人渣的本愿</a>
                            <a class="hot-item">大司马</a>
                            <a class="hot-item">肥蛇传</a>
                            <a class="hot-item">风味绝配</a>
                            <a class="hot-item">极乐净土</a>
                        </div>
                    </div>
                    <div class="history-wrapper">
                        <div class="title">
                            <span class="line"></span>
                            <span class="name">历史搜索</span>
                            <span class="line"></span>
                        </div>
                        <div class="history-content">
                            <a class="history-item">极乐净土</a>
                            <a class="history-item">高达</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--<transition name="router-slide">-->
        <router-view class="wrapper"></router-view>
        <!--</transition>-->

        <i-footer></i-footer>
    </div>
</template>

<script lang="ts">
    import * as Vue from 'vue'
    import { Component } from 'vue-property-decorator'
    import Footer from './components/common/Footer.vue'

    @Component({
        components: { 'i-footer': Footer }
    })
    export default class App extends Vue {
        appload = false //结构页
        show_search = false
        mounted(){
            this.appload = true
        }
    }
</script>

<style lang="scss" src="./asserts/global.scss"></style>

<style>
.router-slide-enter-active,
.router-slide-leave-active {
    transition: all .3s;
}

.router-slide-enter,
.router-slide-leave-active {
    transform: translateX(-100%);
}
</style>
