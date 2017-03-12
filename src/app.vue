<template>
    <div id="app">

        <!-- loading-cover and nav-bar -->
        <div class="app" :class="{appload:appload}">
            <div class="load-cover" v-show="!appload">
                <div class="loading-text">(´・ω・｀)正在加载...</div>
            </div>
            <nav class="nav-bar">
                <div class="nav-wrp">
                    <a href="//m.bilibili.com/index.html" class="logo"></a>
                    <a href="history" class="cell"><i class="nav-icon icon-history"></i></a>
                    <a href="javascript: void(0);" class="cell"><i class="nav-icon icon-search"></i></a>
                </div>
            </nav>
        </div>

        <!-- search panel -->
        <div class="search toggle-panel"></div>

        <div class="wrapper">
            <!-- tab panels -->
            <div class="flex-bar main">
                <ul class="flex-bar-in">
                    <router-link tag="li" to="/index" class="nav-item">
                        <a title="首页">首页</a>
                    </router-link>
                    <router-link tag="li" to="/live" class="nav-item">
                        <a title="直播">直播</a>
                    </router-link>
                    <router-link tag="li" to="/channel" class="nav-item">
                        <a title="频道">频道</a>
                    </router-link>
                    <router-link tag="li" to="/ranking" class="nav-item">
                        <a title="排行">排行</a>
                    </router-link>
                    <router-link tag="li" to="/space" class="nav-item">
                        <a title="我的">我的</a>
                    </router-link>
                </ul>
            </div>
            <!-- end of tab panel -->
            <!--<transition name="router-slide">-->
                <router-view class="wrapper-content"></router-view>
            <!--</transition>-->
 
        </div>
    </div>
</template>

<script lang="ts">
    import * as Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class App extends Vue {
        appload = false //结构页
        
        mounted(){
            this.appload = true
        }
    }
</script>

<style lang="scss" src="./asserts/global.scss"></style>

<style>
    .router-slide-enter-active, .router-slide-leave-active {
	  	transition: all .3s;
	}
	.router-slide-enter, .router-slide-leave-active {
	  	transform: translateX(-100%);
	}
</style>
