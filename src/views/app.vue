<template>
    <div id="app">

        <!-- loading-cover and nav-bar -->
        <div class="app">
            <div class="load-cover">
                <div class="loading-text">(´・ω・｀)正在加载...</div>
            </div>
            <div class="nav-bar">
                <div class="nav-wrp">
                    <a href="//m.bilibili.com/index.html" class="logo">logo</a>
                    <a href="history" class="cell"><i class="nav-icon icon-history"></i></a>
                    <a href="javascript: void(0);" class="cell"><i class="nav-icon icon-search"></i></a>
                </div>
            </div>
        </div>

        <!-- search panel -->
        <div class="search toggle-panel"></div>

        <div class="wrapper">
            <!-- tab panels -->
            <div class="flex-bar main">
                <ul class="flex-bar-in">
                    <li class="nav-item">
                        <router-link to="/" title="首页">home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" title="频道">foo</router-link>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" src="./app.ts"></script>

<style lang="sass" src="../asserts/global.scss"></style>
<style>
    #app img{
        width: 300px;
        height: 200px;
    }
</style>
