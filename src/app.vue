<template>
    <div id="app">

        <!-- loading-cover and nav-bar -->
        <div class="app" :class="{appload:appload}">
            <div class="load-cover" v-show="!appload">
                <div class="loading-text">(´・ω・｀)正在加载...</div>
            </div>
            <nav class="nav-bar">
                <div class="nav-wrp">
                    <router-link to="/index" class="logo"></router-link>
                    <router-link to="/history" class="cell"><i class="nav-icon icon-history"></i></router-link>
                    <router-link to="/index" class="cell" ><i class="nav-icon icon-search"></i></router-link>
                </div>
            </nav>
        </div>

        <!-- search panel -->
        <div class="search toggle-panel"></div>

        
        <!--<transition name="router-slide">-->
        <router-view class="wrapper"></router-view>
        <!--</transition>-->
 
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
    import * as Vue from 'vue'
    import { Component } from 'vue-property-decorator'
    import Footer from './components/common/Footer.vue'

    @Component({
        components: { Footer }
    })
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
