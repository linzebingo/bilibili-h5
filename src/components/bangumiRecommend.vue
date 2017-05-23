<template>
    <div>
        <div class="row-container">
            <router-link to="/subchannel?tid=13" class="header">
                <div class="left">
                    <span></span>
                    <span>番剧更新</span>
                </div>
                <div class="right">
                    <span>查看更多番剧</span>
                    <span></span>
                </div>
            </router-link>
            <div class="b-loading" v-if="loading">loading...</div>
            <div class="b-loading" v-if="bangumiItems && bangumiItems.length === 0">没有数据( &gt;﹏&lt;。)～</div>
            <ul class="content-wrapper bangumi-wrapper" v-if="bangumiItems && bangumiItems.length > 0">
                <li class="content-list bangumi-list" v-for="item in bangumiItems">
                    <router-link :to="item.url" class="item">
                        <div class="top">
                            <img class="cover-img" v-lazyload :data-src="item.cover">
                        </div>
                    </router-link>
                    <router-link :to="item.url" class="info clearfix">
                        <div class="bangumi-title text-overflow">{{item.title}}</div>
                        <div class="bangumi-page text-overflow">更新至第{{item.bgcount}}话</div>
                    </router-link>
                </li>
            </ul>
            <div class="b-loading" v-if="showError">加载失败( &gt;﹏&lt;。)～</div>
        </div>
    </div>
</template>

<script lang="ts" src="./bangumiRecommend.ts"></script>
