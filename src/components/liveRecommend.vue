<template>
    <div class="row-container" id="liveRecommend">
        <router-link to="/index" class="header">
            <div class="left">
                <span></span>
                <span>正在直播</span>
            </div>
            <div class="right hot">
                <span></span>
                <span>查看更多直播</span>
            </div>
        </router-link>
        <ul class="content-wrapper" v-if="liveItems && liveItems.length > 0">
            <li class="content-list" v-for="item in liveItems">
                <a :href="item.link" class="item">
                    <div class="top">
                        <div class="cover-img" :data-img="item.cover" :style="item.cover | imageURL"></div>
                    </div>
                </a>
                <a :href="item.link" class="info clearfix">
                    <div class="avator">
                        <img :src="item.face" :alt="item.cover">
                    </div>
         
                    <div class="user">
                        <div class="name text-overflow">{{item.uname}}</div>
                        <div class="desp text-overflow">{{item.title}}</div>
                    </div>
                    <div class="online text-overflow">{{item.online}}</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./liveRecommend.ts"></script>