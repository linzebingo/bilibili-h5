<template>
    <div class="row-container">
        <router-link to="/index" class="header">
            <div class="left">
                <span></span>
                <span>热门推荐</span>
            </div>
            <div class="right hot">
                <span></span>
                <span>排行榜</span>
            </div>
        </router-link>
        <ul class="content-wrapper" v-if="recommendItems && recommendItems.length > 0">
            <li class="content-list" v-for="item in recommendItems">
                <a :href="item.link" class="item">
                    <div class="top">
                        <div class="cover-img" :data-img="item.pic"></div>
                    </div>
                </a>
                <a :href="item.link" class="info">
                    <div class="title">{{item.title}}</div>
                    <div class="meta clearfix">
                        <div class="cell left">
                            <span></span>
                            <span>{{item.play}}</span>
                        </div>
                        <div class="cell left">
                            <span></span>
                            <span>{{item.video_review}}</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./hotRecommend.ts"></script>