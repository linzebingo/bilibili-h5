<template>
    <div class="row-container">
        <router-link to="/ranking" class="header">
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
                <router-link to="/video/9277633" class="item">
                    <div class="top" :data-img="item.pic">
                        <div class="cover-img" 
                            :style="item.pic | imageURL"></div>
                    </div>
                </router-link>
                <router-link to="/history/123456" class="info">
                    <div class="title">{{item.title}}</div>
                    <div class="meta clearfix">
                        <div class="cell left">
                            <span></span>
                            <span>{{ item.play | count }}</span>
                        </div>
                        <div class="cell left">
                            <span></span>
                            <span>{{ item.video_review }}</span>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./hotRecommend.ts"></script>