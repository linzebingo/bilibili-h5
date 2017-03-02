<template>
    <div id="app">

        <!-- loading-cover and nav-bar -->
        <div class="app loaded">
            <div class="load-cover">
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
                    <li class="nav-item nav-index on">
                        <router-link to="/index" title="首页">首页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" title="频道">频道</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" title="直播">直播</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" title="排行">排行</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" title="我的">我的</router-link>
                    </li>
                </ul>
            </div>
            <!-- end of tab panel -->
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
